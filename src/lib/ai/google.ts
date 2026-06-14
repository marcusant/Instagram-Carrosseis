/**
 * Adapter Google Gemini (alternativa de baixo custo).
 *
 * Usa o modo JSON (`responseMimeType`) + exemplo no prompt; o resultado é
 * validado com zod do nosso lado (sem garantia de schema na API).
 */

import { ErroConfiguracaoIA, ErroRespostaIA } from "./erros";
import { analisarJson } from "./json";
import type { ProviderIA } from "./provider";

const MODELO_PADRAO = "gemini-2.5-flash";

interface RespostaGemini {
  candidates?: { content?: { parts?: { text?: string }[] } }[];
}

export const providerGoogle: ProviderIA = {
  nome: "google",
  async gerarJson({ system, prompt, schema, exemploJson, maxTokens = 4096 }) {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      throw new ErroConfiguracaoIA(
        "GOOGLE_API_KEY não configurada (.env.local ou env da Vercel).",
      );
    }
    const modelo = process.env.AI_MODEL ?? MODELO_PADRAO;
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`,
      {
        method: "POST",
        headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `${prompt}\n\nResponda APENAS com JSON válido exatamente neste formato:\n${exemploJson}`,
                },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            maxOutputTokens: maxTokens,
          },
        }),
      },
    );
    if (!res.ok) {
      const detalhe = (await res.text()).slice(0, 300);
      throw new ErroRespostaIA(`Erro da API Google (${res.status}): ${detalhe}`);
    }
    const corpo = (await res.json()) as RespostaGemini;
    const texto = corpo.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!texto) {
      throw new ErroRespostaIA("Google não devolveu conteúdo. Tente de novo.");
    }
    return analisarJson(texto, schema);
  },
};
