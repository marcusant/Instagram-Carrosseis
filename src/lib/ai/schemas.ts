/**
 * Schemas zod da camada de IA (Fase B).
 *
 * - Pedidos: validam o corpo recebido em `/api/ia` (discriminado por `acao`).
 * - Respostas: validam/garantem o JSON devolvido pelo provider.
 *
 * Limites de tamanho dos campos são generosos de propósito: servem pra
 * barrar respostas quebradas, não pra reprovar copy válida.
 */

import { z } from "zod";

/** Slide gerado por IA — espelha `Slide` de `config/tipos` (com foto sempre presente). */
export const esquemaSlideIA = z.object({
  tag: z.string().min(1).max(40),
  ic: z.string().min(1).max(8),
  h: z.string().min(1).max(80),
  a: z.string().min(1).max(80),
  c: z.array(z.string().min(1).max(220)).min(1).max(5),
  foto: z.string().min(1).max(300),
});
export type SlideIA = z.infer<typeof esquemaSlideIA>;

/** Slide vindo do front como contexto (formato do banco; foto opcional). */
export const esquemaSlideEntrada = z.object({
  tag: z.string().max(60),
  ic: z.string().max(16),
  h: z.string().max(200),
  a: z.string().max(200),
  c: z.array(z.string().max(400)).max(8),
  foto: z.string().max(400).optional(),
});
export type SlideEntrada = z.infer<typeof esquemaSlideEntrada>;

const pilar = z.enum(["corpo", "mente", "essencia"]);
const tamanho = z.union([z.literal(6), z.literal(7), z.literal(9)]);
const tema = z.string().trim().min(1).max(200).optional();
const slidesContexto = z.array(esquemaSlideEntrada).min(2).max(12);

/** Corpo aceito por POST /api/ia, discriminado pela ação. */
export const esquemaPedido = z.discriminatedUnion("acao", [
  // Gera um carrossel inteiro (tema livre opcional).
  z.object({ acao: z.literal("carrossel"), pilar, tamanho, tema }),
  // Regenera UM slide (nova ideia pra posição), com o carrossel como contexto.
  z
    .object({
      acao: z.literal("slide"),
      pilar,
      slides: slidesContexto,
      indice: z.number().int().min(0),
      tema,
    })
    .refine((p) => p.indice < p.slides.length, {
      message: "indice fora do carrossel",
    }),
  // Reescreve o texto do slide mantendo a ideia (instrução opcional).
  z.object({
    acao: z.literal("melhorar"),
    pilar,
    slide: esquemaSlideEntrada,
    instrucao: z.string().trim().min(1).max(200).optional(),
  }),
  // Gera variações de capa (gancho) para o carrossel atual.
  z.object({ acao: z.literal("ganchos"), pilar, slides: slidesContexto, tema }),
  // Gera a legenda + hashtags do post a partir do carrossel.
  z.object({ acao: z.literal("legenda"), pilar, slides: slidesContexto, tema }),
]);
export type PedidoIA = z.infer<typeof esquemaPedido>;

// ===== Schemas de resposta (o que o provider deve devolver) =====

/** Carrossel completo com contagem exata de slides. */
export function esquemaRespostaCarrossel(n: number) {
  return z.object({ slides: z.array(esquemaSlideIA).length(n) });
}

export const esquemaRespostaSlide = z.object({ slide: esquemaSlideIA });

export const esquemaRespostaGanchos = z.object({
  ganchos: z.array(esquemaSlideIA).min(3).max(5),
});

/** Legenda do post (limite do Instagram: 2200 chars) + hashtags (máx. 30). */
export const esquemaRespostaLegenda = z.object({
  legenda: z.string().min(1).max(2200),
  hashtags: z.array(z.string().min(1).max(40)).min(5).max(30),
});
