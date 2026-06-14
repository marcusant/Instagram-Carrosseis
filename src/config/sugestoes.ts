/**
 * 📷 SUGESTÃO DE FOTO POR SLIDE
 *
 * Gera, a partir do contexto do slide (etiqueta + título + corpo), uma ideia
 * concreta de foto que combina com a mensagem. Serve de inspiração para o
 * usuário tirar/escolher uma foto própria e enviar no slide, em vez de
 * deixá-lo sem imagem.
 *
 * Funciona 100% offline (sem IA): casa palavras-chave do texto do slide com um
 * banco de temas. Vale tanto para o banco interno quanto para slides gerados
 * por IA. A sugestão é só um guia de interface — NÃO aparece no PNG exportado.
 */

import type { Slide } from "./tipos";

/** Um tema = conjunto de gatilhos no texto → ideia de foto. */
interface TemaFoto {
  /** Palavras (já sem acento, minúsculas) que ativam o tema. */
  gatilhos: string[];
  /** Ideia de foto sugerida ao usuário. */
  sugestao: string;
}

/**
 * Banco de temas, do mais específico para o mais genérico. A primeira
 * correspondência vence, então temas mais "fortes" ficam no topo.
 */
const TEMAS: TemaFoto[] = [
  // ----- Corpo / treino -----
  {
    gatilhos: ["academia", "treino", "treinar", "carga", "musculo", "musculacao", "halter"],
    sugestao: "Você na academia: pegando o peso, no espelho ou no meio da série.",
  },
  {
    gatilhos: ["flexao", "agachamento", "prancha", "em casa", "sala de casa", "sem equipamento"],
    sugestao: "Você treinando em casa na sala, com roupa de treino e tapete no chão.",
  },
  {
    gatilhos: ["caminha", "caminhe", "andar", "passos", "sofa", "sedentar", "sentado", "movimento"],
    sugestao: "Você caminhando ao ar livre, ou só o tênis calçado pronto pra sair.",
  },
  // ----- Alimentação -----
  {
    gatilhos: ["agua", "hidrat", "copo", "sede"],
    sugestao: "Um copo ou garrafa de água na mão, em close, com luz natural.",
  },
  {
    gatilhos: ["proteina", "ovo", "cafe da manha", "comeco do dia com"],
    sugestao: "Um café da manhã real e colorido: ovos, frutas, comida de verdade.",
  },
  {
    gatilhos: ["dieta", "comida", "comer", "prato", "vegetais", "ultraprocessado", "refeicao"],
    sugestao: "Um prato colorido de comida de verdade, ou você cozinhando algo simples.",
  },
  // ----- Sono / energia -----
  {
    gatilhos: ["dormir", "sono", "cama", "dorme", "noite", "ritual de desligar"],
    sugestao: "Quarto aconchegante: cama arrumada, luz baixa, clima de fim de dia.",
  },
  {
    gatilhos: ["cafe", "cafeina"],
    sugestao: "Uma xícara de café fumegante, em close, sobre a mesa.",
  },
  {
    gatilhos: ["sol", "luz natural", "manha", "amanhecer", "energia", "cansado", "disposicao"],
    sugestao: "Luz do sol entrando pela janela de manhã, ou você se alongando ao acordar.",
  },
  // ----- Mente -----
  {
    gatilhos: ["respir", "ansiedade", "acelera", "crise", "calma"],
    sugestao: "Você de olhos fechados respirando fundo, ou um cenário de natureza calma.",
  },
  {
    gatilhos: ["foco", "focar", "distra", "tela", "notifica", "app", "celular", "atencao"],
    sugestao: "Mesa organizada, uma só tarefa aberta e o celular virado pra baixo, longe.",
  },
  {
    gatilhos: ["comparar", "comparacao", "feed", "rede", "inveja"],
    sugestao: "Mãos segurando o celular com redes sociais — o gesto da comparação.",
  },
  {
    gatilhos: ["procrastin", "adia", "depois eu faco", "timer", "minutos pra comecar"],
    sugestao: "Um timer/relógio ao lado da tarefa começando — o primeiro passo dado.",
  },
  {
    gatilhos: ["pausa", "descanso mental", "tedio", "automatico", "lotada", "cabeca cheia"],
    sugestao: "Você olhando a janela em silêncio, um momento de pausa sem tela.",
  },
  {
    gatilhos: ["papel", "escrever", "escreva", "anote", "anotar", "lista", "linhas"],
    sugestao: "Um caderno aberto com caneta — pensamentos saindo da cabeça pro papel.",
  },
  {
    gatilhos: ["limite", "dar conta", "dizer nao", "peso", "carregar", "pedir ajuda"],
    sugestao: "Um respiro: mãos relaxando, ou alguém estendendo a mão pra ajudar.",
  },
  // ----- Essência / espiritual -----
  {
    gatilhos: ["silencio", "autoconhecimento", "essencia", "reflex", "se conhece", "olhar pra dentro", "papeis"],
    sugestao: "Você sozinho, olhar contemplativo, num ambiente calmo e silencioso.",
  },
  {
    gatilhos: ["proposito", "sentido", "chamado", "porque", "de graca", "missao"],
    sugestao: "Você imerso fazendo algo que ama, daquele jeito que o tempo voa.",
  },
  {
    gatilhos: ["fe", "oracao", "ore", "creio", "creia", "deus", "alto"],
    sugestao: "Mãos em oração, luz suave entrando, ou um céu aberto e tranquilo.",
  },
  {
    gatilhos: ["gratidao", "agradec", "grato", "abundancia"],
    sugestao: "Um detalhe simples do cotidiano que te faz bem, ou mãos em gesto de gratidão.",
  },
  {
    gatilhos: ["presente", "agora", "presenca", "momento"],
    sugestao: "Um instante presente bem vivido: detalhe do café, do caminho, do agora.",
  },
  {
    gatilhos: ["passado", "soltar", "perdo", "perdao", "remoer", "ferida", "cicatriz"],
    sugestao: "Olhar pro horizonte, céu aberto — a imagem de quem solta e segue em frente.",
  },
  {
    gatilhos: ["valores", "bussola", "direcao", "coerencia", "integridade"],
    sugestao: "Um caminho ou trilha à frente, ou uma bússola na mão — sua direção.",
  },
  {
    gatilhos: ["servir", "ajudar", "ajuda", "entrega"],
    sugestao: "Um gesto de ajudar alguém: mãos dadas, um abraço, cuidado em ação.",
  },
];

/** Remove acentos e baixa a caixa para casar palavras de forma robusta. */
function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

/** Comprimento mínimo de um gatilho para casar por prefixo (em vez de palavra exata). */
const MIN_PREFIXO = 5;

/**
 * Casa um gatilho com o texto respeitando limites de palavra, evitando falsos
 * positivos por substring (ex.: "sol" dentro de "resolve"/"solto").
 *
 * - Gatilhos curtos (< MIN_PREFIXO): casam só como palavra inteira.
 * - Gatilhos longos (>= MIN_PREFIXO): casam como prefixo de palavra, cobrindo
 *   flexões (ex.: "trein" → "treino", "treinar", "treinos").
 */
function casaGatilho(texto: string, gatilho: string): boolean {
  const escapado = gatilho.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const corpo = gatilho.length >= MIN_PREFIXO ? `${escapado}[a-z]*` : escapado;
  return new RegExp(`\\b${corpo}\\b`).test(texto);
}

/**
 * Sugestões de fallback por papel do slide, quando nenhum tema casa.
 * @param posicao índice do slide
 * @param total   total de slides do carrossel
 */
function sugestaoPorPapel(posicao: number, total: number): string {
  if (posicao === 0) {
    return "Uma foto de impacto que prende o olhar e combina com o título — o gancho da capa.";
  }
  if (posicao === total - 1) {
    return "Você sorrindo, olhando pra câmera, num convite pra te seguir.";
  }
  return "Uma foto sua ou de cena real que ilustre essa ideia do slide.";
}

/**
 * Devolve a sugestão de foto para um slide, usando seu contexto.
 *
 * @param slide   o slide atual
 * @param posicao índice do slide no carrossel (0 = capa)
 * @param total   total de slides do carrossel
 */
export function sugestaoFoto(slide: Slide, posicao: number, total: number): string {
  // Sugestão curada vence: foi escrita lendo o conteúdo exato deste slide.
  if (slide.foto && slide.foto.trim()) {
    return slide.foto.trim();
  }

  const textoBruto = [slide.tag, slide.h, slide.a, ...slide.c].join(" ");
  const texto = normalizar(textoBruto);

  for (const tema of TEMAS) {
    if (tema.gatilhos.some((g) => casaGatilho(texto, g))) {
      return tema.sugestao;
    }
  }

  return sugestaoPorPapel(posicao, total);
}

/** Enquadramento sugerido conforme o papel do slide no carrossel. */
function enquadramentoPorPapel(posicao: number, total: number): string {
  if (posicao === 0) {
    return "enquadramento de impacto que prende o olhar (é a capa)";
  }
  if (posicao === total - 1) {
    return "pessoa sorrindo e olhando para a câmera, clima de convite (é o CTA)";
  }
  return "enquadramento natural, foco no assunto principal da cena";
}

/**
 * Monta um prompt pronto para colar no Gemini/ChatGPT e gerar a FOTO daquele
 * slide. Usa a mesma ideia da `sugestaoFoto` como cena e a enriquece com
 * direção fotográfica, formato e a regra de não escrever texto na imagem.
 *
 * @param formato proporção alvo do carrossel ("1:1" ou "4:5")
 */
export function promptFotoIA(
  slide: Slide,
  posicao: number,
  total: number,
  pilarNome: string,
  formato: "1:1" | "4:5",
): string {
  const cena = sugestaoFoto(slide, posicao, total);
  const proporcao =
    formato === "4:5"
      ? "vertical 4:5 (1080x1350)"
      : "quadrada 1:1 (1080x1080)";
  return [
    `Fotografia realista e editorial, proporção ${proporcao}, para um carrossel de Instagram sobre ${pilarNome}.`,
    `Cena: ${cena}`,
    `Direção: ${enquadramentoPorPapel(posicao, total)}; luz natural suave; cores sóbrias e autênticas; fundo levemente desfocado.`,
    `Importante: nenhum texto, letra ou logotipo na imagem; deixe área livre (espaço negativo) para sobrepor o título depois.`,
    `Aparência de foto real (não ilustração, não 3D), alta qualidade.`,
  ].join(" ");
}
