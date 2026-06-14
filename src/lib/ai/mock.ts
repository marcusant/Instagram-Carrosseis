/**
 * Adapter MOCK (teste sem credencial).
 *
 * Não chama nenhuma API: devolve o conteúdo montado pela rota no campo `mock`
 * (derivado do banco/slides do contexto), validado pelo schema. Serve para
 * exercitar todo o fluxo de IA do app — botões, loading, persistência, cópia —
 * enquanto não há `ANTHROPIC_API_KEY`. NÃO é IA real: recombina o banco.
 *
 * Ative com `AI_PROVIDER=mock` no `.env.local`.
 */

import { ErroConfiguracaoIA } from "./erros";
import type { ProviderIA } from "./provider";

/** Latência simulada para o loading da UI aparecer de forma realista. */
const LATENCIA_MS = 600;

export const providerMock: ProviderIA = {
  nome: "mock",
  async gerarJson({ mock, schema }) {
    await new Promise((r) => setTimeout(r, LATENCIA_MS));
    if (!mock) {
      throw new ErroConfiguracaoIA(
        "Provider mock não tem gerador para esta operação.",
      );
    }
    // Valida pelo mesmo schema dos providers reais (garante formato idêntico).
    return schema.parse(mock());
  },
};
