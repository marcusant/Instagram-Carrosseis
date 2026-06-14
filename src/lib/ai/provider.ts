/**
 * Camada trocável de provider de IA (Fase B).
 *
 * Todas as operações do app (carrossel, slide, melhorar, ganchos) se reduzem
 * a UMA primitiva: "gere um JSON validado por este schema". Assim cada
 * provider é um adapter pequeno, e trocar de provider = mudar `AI_PROVIDER`
 * no .env (anthropic | google | openai), sem tocar em código.
 *
 * Modelo padrão por provider (ver taskplan.md · "Provider de IA"):
 * - anthropic → claude-sonnet-4-6 (padrão do projeto: melhor copy em PT)
 * - google    → gemini-2.5-flash
 * - openai    → gpt-5-mini
 * `AI_MODEL` no .env sobrepõe o modelo do provider ativo.
 */

import type { z } from "zod";
import { ErroConfiguracaoIA } from "./erros";
import { providerAnthropic } from "./anthropic";
import { providerGoogle } from "./google";
import { providerMock } from "./mock";
import { providerOpenAI } from "./openai";

export interface ArgsGeracaoJson<T> {
  /** System prompt (voz/formato). */
  system: string;
  /** Pedido da operação. */
  prompt: string;
  /** Schema do JSON esperado — garantido na Anthropic, validado nos demais. */
  schema: z.ZodType<T>;
  /** Exemplo do JSON esperado, anexado ao prompt em providers sem structured outputs. */
  exemploJson: string;
  maxTokens?: number;
  /**
   * Gerador offline para o provider `mock` (teste sem credencial). Os providers
   * reais ignoram este campo; o mock o usa para devolver conteúdo derivado do
   * contexto da rota (banco/slides). Ver `mock.ts`.
   */
  mock?: () => T;
}

export interface ProviderIA {
  nome: string;
  gerarJson<T>(args: ArgsGeracaoJson<T>): Promise<T>;
}

/** Resolve o provider ativo a partir de `AI_PROVIDER` (padrão: anthropic). */
export function escolherProvider(): ProviderIA {
  const qual = (process.env.AI_PROVIDER ?? "anthropic").trim().toLowerCase();
  switch (qual) {
    case "anthropic":
      return providerAnthropic;
    case "google":
      return providerGoogle;
    case "openai":
      return providerOpenAI;
    case "mock":
      return providerMock;
    default:
      throw new ErroConfiguracaoIA(
        `AI_PROVIDER desconhecido: "${qual}". Use anthropic, google, openai ou mock.`,
      );
  }
}
