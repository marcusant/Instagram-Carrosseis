import type { Paleta, PaletaId, PilarMeta } from "./tipos";

/** Botões de seleção de pilar (ordem de exibição). */
export const pilaresMeta: PilarMeta[] = [
  { id: "corpo", pic: "🏃", nom: "Corpo Ativo", des: "Saúde física e movimento" },
  { id: "mente", pic: "🧠", nom: "Mente Clara", des: "Foco e equilíbrio mental" },
  { id: "essencia", pic: "🕊️", nom: "Essência Desperta", des: "Espiritualidade e propósito" },
];

/** Paletas de cor disponíveis. */
export const paletas: Record<PaletaId, Paleta> = {
  terroso: { fundo: "#1A1208", primaria: "#C9A84C", acento: "#E8C97A", texto: "#F5EDD8", textoSub: "#A89880", card: "#221A0C", borda: "#3D2E14", marca: "#A89880" },
  "preto-dourado": { fundo: "#0A0A0A", primaria: "#FFD700", acento: "#FFF176", texto: "#FFFFFF", textoSub: "#AAAAAA", card: "#111111", borda: "#2A2A00", marca: "#AAAAAA" },
  azul: { fundo: "#0A1628", primaria: "#3B82F6", acento: "#93C5FD", texto: "#E0EFFF", textoSub: "#7BA7D1", card: "#0F1F3D", borda: "#1E3A5F", marca: "#7BA7D1" },
  minimalista: { fundo: "#F8F8F6", primaria: "#1A1A1A", acento: "#555555", texto: "#111111", textoSub: "#666666", card: "#EEEEEC", borda: "#DDDDDD", marca: "#666666" },
  roxo: { fundo: "#0E0A1A", primaria: "#8B5CF6", acento: "#C4B5FD", texto: "#F3EEFF", textoSub: "#9B86C8", card: "#160F26", borda: "#2D1F55", marca: "#9B86C8" },
};

/** Rótulos das paletas para os botões. */
export const paletasMeta: { id: PaletaId; nome: string; preview: string }[] = [
  { id: "terroso", nome: "Tons Terrosos", preview: "#C9A84C" },
  { id: "preto-dourado", nome: "Preto e Dourado", preview: "#FFD700" },
  { id: "azul", nome: "Azul Corporativo", preview: "#3B82F6" },
  { id: "minimalista", nome: "Branco Minimalista", preview: "#E5E5E5" },
  { id: "roxo", nome: "Roxo Editorial", preview: "#8B5CF6" },
];

/** Handle exibido nos slides (rodapé e CTA). */
export const HANDLE = "@marcus.santosc";
