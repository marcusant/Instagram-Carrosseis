/**
 * Adapter OpenAI (alternativa).
 *
 * Usa o modo JSON (`response_format: json_object`) + exemplo no prompt; o
 * resultado é validado com zod do nosso lado.
 */

import { ErroConfiguracaoIA, ErroRespostaIA } from "./erros";
import { analisarJson } from "./json";
import type { ProviderIA } from "./provider";

const MODELO_PADRAO = "gpt-5-mini";

interface RespostaOpenAI {
  choices?: { message?: { content?: string } }[];
}

export const providerOpenAI: ProviderIA = {
  nome: "openai",
  async gerarJson({ system, prompt, schema, exemploJson, maxTokens = 4096 }) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new ErroConfiguracaoIA(
        "OPENAI_API_KEY não configurada (.env.local ou env da Vercel).",
      );
    }
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.AI_MODEL ?? MODELO_PADRAO,
        messages: [
          { role: "system", content: system },
          {
            role: "user",
            content: `${prompt}\n\nResponda APENAS com JSON válido exatamente neste formato:\n${exemploJson}`,
          },
        ],
        response_format: { type: "json_object" },
        max_completion_tokens: maxTokens,
      }),
    });
    if (!res.ok) {
      const detalhe = (await res.text()).slice(0, 300);
      throw new ErroRespostaIA(`Erro da API OpenAI (${res.status}): ${detalhe}`);
    }
    const corpo = (await res.json()) as RespostaOpenAI;
    const texto = corpo.choices?.[0]?.message?.content;
    if (!texto) {
      throw new ErroRespostaIA("OpenAI não devolveu conteúdo. Tente de novo.");
    }
    return analisarJson(texto, schema);
  },
};
