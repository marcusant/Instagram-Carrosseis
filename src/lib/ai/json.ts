import type { z } from "zod";
import { ErroRespostaIA } from "./erros";

/**
 * Faz o parse + validação do texto JSON devolvido por providers sem
 * structured outputs nativos (Google/OpenAI), com erros amigáveis.
 * Tolera o JSON vir embrulhado em cerca de código (```json ... ```).
 */
export function analisarJson<T>(texto: string, schema: z.ZodType<T>): T {
  const limpo = texto
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "");
  let bruto: unknown;
  try {
    bruto = JSON.parse(limpo);
  } catch {
    throw new ErroRespostaIA("A IA não devolveu JSON válido. Tente de novo.");
  }
  const resultado = schema.safeParse(bruto);
  if (!resultado.success) {
    throw new ErroRespostaIA(
      "A IA devolveu JSON fora do formato esperado. Tente de novo.",
    );
  }
  return resultado.data;
}
