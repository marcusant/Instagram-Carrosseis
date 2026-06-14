/**
 * Cliente do front para POST /api/ia (Fase B) + conversores HTML ↔ Slide.
 *
 * Os conversores existem porque as edições do usuário ficam guardadas como
 * HTML (contenteditable); antes de mandar um slide como contexto pra IA,
 * o HTML editado vira texto de volta — assim a IA enxerga o estado real.
 * Módulo client-only (usa DOM nos conversores).
 */

import type { PilarId, Slide } from "@/config/tipos";

/** Tamanhos aceitos pela rota (espelha o seletor da UI). */
type TamanhoIA = 6 | 7 | 9;

async function chamarIA<T>(corpo: object): Promise<T> {
  const res = await fetch("/api/ia", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(corpo),
  });
  const dados = (await res.json().catch(() => null)) as
    | (T & { erro?: string })
    | null;
  if (!res.ok) {
    throw new Error(dados?.erro ?? `Erro ${res.status} ao falar com a IA.`);
  }
  if (!dados) throw new Error("Resposta vazia da IA.");
  return dados;
}

export function gerarCarrosselIA(
  pilar: PilarId,
  tamanho: TamanhoIA,
  tema?: string,
): Promise<{ slides: Slide[] }> {
  return chamarIA({ acao: "carrossel", pilar, tamanho, tema: tema || undefined });
}

export function regenerarSlideIA(
  pilar: PilarId,
  slides: Slide[],
  indice: number,
  tema?: string,
): Promise<{ slide: Slide }> {
  return chamarIA({ acao: "slide", pilar, slides, indice, tema: tema || undefined });
}

export function melhorarSlideIA(
  pilar: PilarId,
  slide: Slide,
  instrucao?: string,
): Promise<{ slide: Slide }> {
  return chamarIA({ acao: "melhorar", pilar, slide, instrucao: instrucao || undefined });
}

export function gerarGanchosIA(
  pilar: PilarId,
  slides: Slide[],
  tema?: string,
): Promise<{ ganchos: Slide[] }> {
  return chamarIA({ acao: "ganchos", pilar, slides, tema: tema || undefined });
}

export function gerarLegendaIA(
  pilar: PilarId,
  slides: Slide[],
  tema?: string,
): Promise<{ legenda: string; hashtags: string[] }> {
  return chamarIA({ acao: "legenda", pilar, slides, tema: tema || undefined });
}

// ===== Conversores HTML (edições) → texto (slides) =====

function htmlParaTexto(html: string): string {
  const el = document.createElement("div");
  el.innerHTML = html;
  return (el.textContent ?? "").replace(/\s+/g, " ").trim();
}

/** Corpo editado (linhas separadas por <br>) → lista de linhas de texto. */
export function corpoHtmlParaLinhas(html: string): string[] {
  return html
    .split(/<br\s*\/?>/i)
    .map(htmlParaTexto)
    .filter(Boolean);
}

/** Headline editada (h + <span> de acento) → { h, a } de volta. */
export function headlineHtmlParaPartes(html: string): { h: string; a: string } {
  const el = document.createElement("div");
  el.innerHTML = html;
  const span = el.querySelector("span");
  const a = (span?.textContent ?? "").replace(/\s+/g, " ").trim();
  span?.remove();
  const h = (el.textContent ?? "").replace(/\s+/g, " ").trim();
  return { h, a };
}
