/**
 * Adapter Anthropic (provider padrão do projeto).
 *
 * Usa structured outputs (`output_config.format` via `zodOutputFormat`):
 * o JSON volta GARANTIDO no formato do schema — sem parse frágil de texto.
 * Modelo padrão: claude-sonnet-4-6 (decisão do taskplan: melhor copy em PT).
 */

import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { ErroConfiguracaoIA, ErroRespostaIA } from "./erros";
import type { ProviderIA } from "./provider";

const MODELO_PADRAO = "claude-sonnet-4-6";

export const providerAnthropic: ProviderIA = {
  nome: "anthropic",
  async gerarJson({ system, prompt, schema, maxTokens = 4096 }) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      throw new ErroConfiguracaoIA(
        "ANTHROPIC_API_KEY não configurada (.env.local ou env da Vercel).",
      );
    }
    const client = new Anthropic({ apiKey });
    try {
      const resposta = await client.messages.parse({
        model: process.env.AI_MODEL ?? MODELO_PADRAO,
        max_tokens: maxTokens,
        system,
        // Copy curta não precisa de raciocínio estendido; mantém rápido/barato.
        thinking: { type: "disabled" },
        messages: [{ role: "user", content: prompt }],
        output_config: { format: zodOutputFormat(schema) },
      });
      if (resposta.parsed_output == null) {
        throw new ErroRespostaIA(
          "A IA não devolveu o JSON esperado. Tente de novo.",
        );
      }
      return schema.parse(resposta.parsed_output);
    } catch (erro) {
      if (erro instanceof Anthropic.AuthenticationError) {
        throw new ErroConfiguracaoIA("ANTHROPIC_API_KEY inválida ou revogada.");
      }
      if (erro instanceof Anthropic.RateLimitError) {
        throw new ErroRespostaIA(
          "Limite de requisições da Anthropic atingido — espere um pouco e tente de novo.",
        );
      }
      if (erro instanceof Anthropic.APIError) {
        throw new ErroRespostaIA(
          `Erro da API Anthropic (${erro.status}): ${erro.message}`,
        );
      }
      throw erro;
    }
  },
};
