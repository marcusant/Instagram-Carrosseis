/** Tipos compartilhados do criador de carrosséis. */

export type PilarId = "corpo" | "mente" | "essencia";

/** Um slide individual do carrossel. */
export interface Slide {
  /** Etiqueta narrativa (guia; não aparece no PNG exportado). */
  tag: string;
  /** Ícone/emoji do slide (editável). */
  ic: string;
  /** Headline principal. */
  h: string;
  /** Trecho de acento da headline (renderizado com a cor de acento). */
  a: string;
  /** Linhas do corpo do texto. */
  c: string[];
}

/** Um carrossel completo = lista de slides (normalmente 6). */
export type Carrossel = Slide[];

/** Origem de um carrossel exibido. */
export type OrigemCarrossel = "banco" | "ia";

/** Conteúdo de um pilar no banco interno. */
export interface PilarConteudo {
  nome: string;
  /** Paleta sugerida ao selecionar o pilar. */
  paleta: PaletaId;
  variantes: Carrossel[];
}

export type Banco = Record<PilarId, PilarConteudo>;

/** Metadados de exibição de cada pilar (botões de seleção). */
export interface PilarMeta {
  id: PilarId;
  pic: string;
  nom: string;
  des: string;
}

export type PaletaId =
  | "terroso"
  | "preto-dourado"
  | "azul"
  | "minimalista"
  | "roxo";

export interface Paleta {
  fundo: string;
  primaria: string;
  acento: string;
  texto: string;
  textoSub: string;
  card: string;
  borda: string;
}
