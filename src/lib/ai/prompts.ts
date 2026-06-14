/**
 * Prompts da camada de IA (Fase B).
 *
 * O system define a voz e o formato dos slides; cada ação tem um builder de
 * prompt. `exemploJson` é anexado ao prompt nos providers SEM structured
 * outputs nativos (Google/OpenAI); na Anthropic o schema é garantido pela API.
 */

import type { PilarId } from "@/config/tipos";
import type { SlideEntrada } from "./schemas";

export const SYSTEM_CARROSSEIS = `Você é o redator dos carrosséis do Instagram de Marcus (@marcus.santosc), um perfil sobre vida equilibrada em três pilares: Corpo Ativo (saúde física), Mente Clara (saúde mental) e Essência Desperta (espiritualidade e propósito).

VOZ E ESTILO
- Português do Brasil, direto e pessoal, falando com "você".
- Frases curtas. Zero jargão, zero clichê de coach, zero promessa milagrosa.
- Tom encorajador e firme, sem culpa. Prático: a pessoa termina sabendo O QUE fazer.

FORMATO DE CADA SLIDE (campos do JSON)
- tag: etiqueta narrativa (Gancho, Erro, Mito, Contexto, Estratégia, Prática, Exemplo, Aprofundamento, Virada, Resumo, CTA)
- ic: 1 emoji que representa o slide
- h: primeira parte do título — 2 a 4 palavras de impacto
- a: complemento do título que ganha destaque visual — 2 a 4 palavras
- c: 2 a 3 linhas curtas de corpo (máx. ~90 caracteres cada linha)
- foto: sugestão concreta de foto para o slide, em 1 frase (ex.: "Você caminhando ao ar livre, tênis em foco")

ESTRUTURA NARRATIVA POR TAMANHO
- 6 slides: Gancho → Erro/Mito → Estratégia → Prática → Virada → CTA
- 7 slides: Gancho → Erro/Mito → Estratégia → Prática → Aprofundamento → Virada → CTA
- 9 slides: Gancho → Contexto → Erro → Estratégia → Prática → Exemplo → Virada → Resumo → CTA

REGRAS
- Slide 1 (Gancho) precisa parar o dedo: pergunta direta ou afirmação forte.
- Último slide (CTA) sempre convida a: salvar o post, marcar alguém e seguir o perfil.
- Slide "Resumo" (só nos de 9) recapitula o carrossel em 3 linhas.
- Uma ideia por slide. h + a formam UMA frase de título contínua.`;

/** Descrição de cada pilar usada nos prompts. */
const PILARES: Record<PilarId, string> = {
  corpo:
    "Corpo Ativo — saúde física: treino, constância, alimentação real, sono, energia, movimento no dia a dia. Público: gente comum (não atleta) querendo recomeçar ou manter o básico.",
  mente:
    "Mente Clara — saúde mental: foco, ansiedade, comparação, procrastinação, pausas, rotina matinal, limites. Público: gente sobrecarregada e distraída buscando clareza.",
  essencia:
    "Essência Desperta — espiritualidade e propósito: autoconhecimento, presença, gratidão, fé, valores, perdão, servir. Tom acolhedor, sem denominação religiosa imposta.",
};

function linhaTema(tema?: string): string {
  return tema
    ? `\nTEMA ESPECÍFICO PEDIDO: "${tema}" — o carrossel inteiro deve ser sobre isso, dentro do pilar.`
    : "";
}

function resumirSlides(slides: SlideEntrada[]): string {
  return slides
    .map((s, i) => `${i + 1}. [${s.tag}] ${s.h} ${s.a} — ${s.c.join(" / ")}`)
    .join("\n");
}

/** Prompt: gerar um carrossel completo. */
export function promptCarrossel(
  pilar: PilarId,
  tamanho: number,
  tema: string | undefined,
  titulosExistentes: string[],
): { prompt: string; exemploJson: string } {
  const evitar = titulosExistentes.length
    ? `\nJÁ EXISTEM carrosséis com estes títulos — crie um tema DIFERENTE de todos:\n- ${titulosExistentes.join("\n- ")}`
    : "";
  return {
    prompt: `Crie um carrossel inédito de EXATAMENTE ${tamanho} slides para o pilar:\n${PILARES[pilar]}${linhaTema(tema)}${evitar}\n\nSiga a estrutura narrativa de ${tamanho} slides. Responda em JSON com a lista "slides".`,
    exemploJson: `{"slides":[{"tag":"Gancho","ic":"🔥","h":"Parou. Voltou.","a":"Agora vai de verdade.","c":["linha 1","linha 2"],"foto":"Você entrando na academia decidido."}, ...]}`,
  };
}

/** Prompt: regenerar UM slide (nova ideia pra posição), com contexto. */
export function promptSlide(
  pilar: PilarId,
  slides: SlideEntrada[],
  indice: number,
  tema?: string,
): { prompt: string; exemploJson: string } {
  const alvo = slides[indice];
  return {
    prompt: `Este é o carrossel atual do pilar:\n${PILARES[pilar]}${linhaTema(tema)}\n\n${resumirSlides(slides)}\n\nRecrie APENAS o slide ${indice + 1} (tag "${alvo.tag}") com uma ideia nova/melhor para essa posição, coerente com os demais slides (sem repetir o que eles já dizem). Mantenha a mesma função narrativa. Responda em JSON com o objeto "slide".`,
    exemploJson: `{"slide":{"tag":"${alvo.tag}","ic":"💡","h":"...","a":"...","c":["...","..."],"foto":"..."}}`,
  };
}

/** Prompt: melhorar o texto do slide mantendo a ideia. */
export function promptMelhorar(
  pilar: PilarId,
  slide: SlideEntrada,
  instrucao?: string,
): { prompt: string; exemploJson: string } {
  const pedido = instrucao
    ? `Instrução específica: ${instrucao}.`
    : "Deixe mais forte e mais claro: corte palavras, aumente o impacto, mantenha a ideia.";
  return {
    prompt: `Slide atual do pilar:\n${PILARES[pilar]}\n\n[${slide.tag}] título: "${slide.h} ${slide.a}" — corpo: ${slide.c.join(" / ")}\n\nReescreva o texto deste slide MANTENDO a mesma ideia e a mesma tag. ${pedido} Responda em JSON com o objeto "slide".`,
    exemploJson: `{"slide":{"tag":"${slide.tag}","ic":"${slide.ic}","h":"...","a":"...","c":["...","..."],"foto":"..."}}`,
  };
}

/** Prompt: legenda + hashtags do post a partir do carrossel. */
export function promptLegenda(
  pilar: PilarId,
  slides: SlideEntrada[],
  tema?: string,
): { prompt: string; exemploJson: string } {
  return {
    prompt: `Este é o carrossel pronto do pilar:\n${PILARES[pilar]}${linhaTema(tema)}\n\n${resumirSlides(slides)}\n\nEscreva a LEGENDA do post no Instagram para este carrossel.\nRegras da legenda:\n- Comece com um gancho próprio de 1 linha (NÃO copie o slide 1).\n- 3 a 6 linhas curtas desenvolvendo a ideia central, com quebras de linha entre elas.\n- Tom da voz do perfil: direto, pessoal, sem clichê.\n- Termine com uma chamada para ação: salvar, comentar e seguir @marcus.santosc.\n- Pode usar poucos emojis (no máximo 3), só se couber natural.\nAlém da legenda, gere de 8 a 15 hashtags relevantes em português (sem o #, só a palavra), misturando o tema do pilar e o assunto específico. Responda em JSON com "legenda" (string) e "hashtags" (array de strings sem #).`,
    exemploJson: `{"legenda":"Você trava na hora de voltar?\\n\\nNão é falta de força de vontade...\\n\\nSalva esse post, comenta sua meta e me segue @marcus.santosc","hashtags":["saude","treino","disciplina","vidaequilibrada"]}`,
  };
}

/** Prompt: variações de gancho (capa) para o carrossel. */
export function promptGanchos(
  pilar: PilarId,
  slides: SlideEntrada[],
  tema?: string,
): { prompt: string; exemploJson: string } {
  return {
    prompt: `Este é o carrossel atual do pilar:\n${PILARES[pilar]}${linhaTema(tema)}\n\n${resumirSlides(slides)}\n\nCrie 4 VARIAÇÕES DE GANCHO (slide 1 / capa) para este mesmo carrossel, com ângulos bem diferentes entre si (pergunta, afirmação forte, dor, curiosidade). Todas com tag "Gancho" e fiéis ao conteúdo dos demais slides. Responda em JSON com a lista "ganchos".`,
    exemploJson: `{"ganchos":[{"tag":"Gancho","ic":"🔥","h":"...","a":"...","c":["...","..."],"foto":"..."}, ...]}`,
  };
}
