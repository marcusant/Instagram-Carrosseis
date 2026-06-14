/**
 * POST /api/ia — todas as operações de IA do criador (Fase B).
 *
 * Corpo discriminado por `acao`:
 * - "carrossel": gera um carrossel inteiro (pilar + tamanho + tema livre opcional)
 * - "slide":     regenera UM slide com o carrossel como contexto
 * - "melhorar":  reescreve o texto do slide mantendo a ideia
 * - "ganchos":   gera 4 variações de capa para o carrossel atual
 *
 * A chave do provider fica só aqui no servidor; o front nunca a vê.
 */

import { NextResponse } from "next/server";
import { banco } from "@/config/banco";
import type { PilarId, Slide } from "@/config/tipos";
import { ErroConfiguracaoIA, ErroRespostaIA } from "@/lib/ai/erros";
import {
  promptCarrossel,
  promptGanchos,
  promptLegenda,
  promptMelhorar,
  promptSlide,
  SYSTEM_CARROSSEIS,
} from "@/lib/ai/prompts";
import { escolherProvider } from "@/lib/ai/provider";
import {
  esquemaPedido,
  esquemaRespostaCarrossel,
  esquemaRespostaGanchos,
  esquemaRespostaLegenda,
  esquemaRespostaSlide,
  type SlideEntrada,
  type SlideIA,
} from "@/lib/ai/schemas";

/** Geração de carrossel pode passar de 10s; dá folga na Vercel. */
export const maxDuration = 60;

function erroJson(status: number, mensagem: string) {
  return NextResponse.json({ erro: mensagem }, { status });
}

/** Títulos já usados no banco do pilar — a IA deve evitar repeti-los. */
function titulosDoPilar(pilar: PilarId): string[] {
  return banco[pilar].variantes.map((v) => `${v[0].h} ${v[0].a}`.trim());
}

// ===== Geradores do provider mock (teste sem credencial) =====
// Recombinam o banco/contexto em conteúdo válido. Não é IA real — só exercita
// o fluxo. Os builders só são chamados quando AI_PROVIDER=mock.

const FOTO_PADRAO = "Uma foto sua ou de cena real que ilustre essa ideia.";

function paraSlideIA(s: Slide | SlideEntrada): SlideIA {
  return {
    tag: s.tag || "Slide",
    ic: s.ic || "✨",
    h: s.h || "Título",
    a: s.a || "destaque",
    c: s.c.length ? s.c : ["Texto do slide."],
    foto: (s.foto && s.foto.trim()) || FOTO_PADRAO,
  };
}

const HASHTAGS_MOCK: Record<PilarId, string[]> = {
  corpo: ["saude", "treino", "disciplina", "vidaequilibrada", "bemestar", "movimento", "habitos", "autocuidado"],
  mente: ["mentesa", "foco", "ansiedade", "clareza", "saudemental", "equilibrio", "produtividade", "autocuidado"],
  essencia: ["essencia", "proposito", "espiritualidade", "autoconhecimento", "gratidao", "presenca", "fe", "reflexao"],
};

/** Carrossel mock: usa uma variante do banco com o tamanho pedido. */
function mockCarrossel(pilar: PilarId, tamanho: number): { slides: SlideIA[] } {
  const variantes = banco[pilar].variantes.filter((v) => v.length === tamanho);
  const escolhida = variantes[Math.floor(Math.random() * variantes.length)] ??
    banco[pilar].variantes[0];
  return { slides: escolhida.map(paraSlideIA) };
}

/** Slide mock: marca a mudança com ✨ para ficar visível que "regenerou". */
function mockSlide(slide: SlideEntrada): { slide: SlideIA } {
  return { slide: { ...paraSlideIA(slide), ic: "✨" } };
}

/** Ganchos mock: as capas das variantes do pilar, como opções de gancho. */
function mockGanchos(pilar: PilarId): { ganchos: SlideIA[] } {
  const capas = banco[pilar].variantes.map((v) => paraSlideIA(v[0]));
  return { ganchos: capas.slice(0, 4) };
}

/** Legenda mock: monta a partir dos títulos dos slides + hashtags do pilar. */
function mockLegenda(
  pilar: PilarId,
  slides: SlideEntrada[],
): { legenda: string; hashtags: string[] } {
  const capa = slides[0];
  const miolo = slides
    .slice(1, -1)
    .map((s) => `• ${`${s.h} ${s.a}`.trim()}`)
    .slice(0, 4)
    .join("\n");
  const legenda = `${`${capa.h} ${capa.a}`.trim()}\n\n${miolo}\n\nSalva esse post, comenta aqui embaixo e me segue @marcus.santosc 🙌`;
  return { legenda, hashtags: HASHTAGS_MOCK[pilar] };
}

export async function POST(req: Request) {
  let corpo: unknown;
  try {
    corpo = await req.json();
  } catch {
    return erroJson(400, "Corpo da requisição não é JSON válido.");
  }

  const pedido = esquemaPedido.safeParse(corpo);
  if (!pedido.success) {
    const issue = pedido.error.issues[0];
    return erroJson(
      400,
      `Pedido inválido: ${issue?.path.join(".") || "corpo"} — ${issue?.message}.`,
    );
  }

  try {
    const provider = escolherProvider();
    const p = pedido.data;

    switch (p.acao) {
      case "carrossel": {
        const { prompt, exemploJson } = promptCarrossel(
          p.pilar,
          p.tamanho,
          p.tema,
          titulosDoPilar(p.pilar),
        );
        const dados = await provider.gerarJson({
          system: SYSTEM_CARROSSEIS,
          prompt,
          exemploJson,
          schema: esquemaRespostaCarrossel(p.tamanho),
          maxTokens: 6000,
          mock: () => mockCarrossel(p.pilar, p.tamanho),
        });
        return NextResponse.json(dados);
      }
      case "slide": {
        const { prompt, exemploJson } = promptSlide(
          p.pilar,
          p.slides,
          p.indice,
          p.tema,
        );
        const dados = await provider.gerarJson({
          system: SYSTEM_CARROSSEIS,
          prompt,
          exemploJson,
          schema: esquemaRespostaSlide,
          maxTokens: 2000,
          mock: () => mockSlide(p.slides[p.indice]),
        });
        return NextResponse.json(dados);
      }
      case "melhorar": {
        const { prompt, exemploJson } = promptMelhorar(
          p.pilar,
          p.slide,
          p.instrucao,
        );
        const dados = await provider.gerarJson({
          system: SYSTEM_CARROSSEIS,
          prompt,
          exemploJson,
          schema: esquemaRespostaSlide,
          maxTokens: 2000,
          mock: () => mockSlide(p.slide),
        });
        return NextResponse.json(dados);
      }
      case "ganchos": {
        const { prompt, exemploJson } = promptGanchos(p.pilar, p.slides, p.tema);
        const dados = await provider.gerarJson({
          system: SYSTEM_CARROSSEIS,
          prompt,
          exemploJson,
          schema: esquemaRespostaGanchos,
          maxTokens: 3000,
          mock: () => mockGanchos(p.pilar),
        });
        return NextResponse.json(dados);
      }
      case "legenda": {
        const { prompt, exemploJson } = promptLegenda(p.pilar, p.slides, p.tema);
        const dados = await provider.gerarJson({
          system: SYSTEM_CARROSSEIS,
          prompt,
          exemploJson,
          schema: esquemaRespostaLegenda,
          maxTokens: 2000,
          mock: () => mockLegenda(p.pilar, p.slides),
        });
        return NextResponse.json(dados);
      }
    }
  } catch (erro) {
    if (erro instanceof ErroConfiguracaoIA) return erroJson(503, erro.message);
    if (erro instanceof ErroRespostaIA) return erroJson(502, erro.message);
    console.error("Erro inesperado na rota /api/ia:", erro);
    return erroJson(500, "Erro inesperado ao gerar com IA. Tente de novo.");
  }
}
