"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { banco } from "@/config/banco";
import { HANDLE, paletas, paletasMeta, pilaresMeta } from "@/config/pilares";
import { sugestaoFoto } from "@/config/sugestoes";
import { arquivoParaDataUrlOtimizado } from "@/lib/imagem";
import {
  corpoHtmlParaLinhas,
  gerarCarrosselIA,
  gerarGanchosIA,
  gerarLegendaIA,
  headlineHtmlParaPartes,
  melhorarSlideIA,
  regenerarSlideIA,
} from "@/lib/ia-cliente";
import {
  carregarImagensDB,
  carregarLocal,
  removerImagemDB,
  salvarImagemDB,
  salvarLocal,
} from "@/lib/persistencia";
import type {
  Carrossel,
  OrigemCarrossel,
  PaletaId,
  Paleta,
  PilarId,
  Slide,
} from "@/config/tipos";

interface ItemCarrossel {
  origem: OrigemCarrossel;
  slides: Carrossel;
}

interface Ajustes {
  titulo: number;
  corpo: number;
  pos: number;
}

const AJUSTES_PADRAO: Ajustes = { titulo: 1, corpo: 1, pos: 0 };

// Tamanho efetivo da fonte (px) no canvas final de 1080px, com escala 1.0.
// Espelha os valores em cqw do CSS (título 6.4cqw, corpo 2.5cqw de 1080) e
// serve tanto pro badge "Npx" dos controles quanto como base da recomendação.
const FONTE_BASE_1080 = { titulo: 69, corpo: 30 } as const;

// Faixa recomendada por profissionais para carrossel no feed (1080×1350).
const FAIXA_IDEAL = { titulo: "60–80px", corpo: "28–36px" } as const;

// Largura do PNG exportado. 1080 é o padrão do Instagram (1080×1080 ou
// 1080×1350) — a resolução recomendada para máxima qualidade no feed.
const LARGURA_EXPORT = 1080;

/**
 * Edições de texto feitas pelo usuário num slide (sobrepõem o conteúdo do
 * banco/IA na renderização). Capturadas no blur dos campos contenteditable
 * e persistidas — antes da Fase A, qualquer edição se perdia ao re-renderizar.
 */
interface EdicaoSlide {
  /** Ícone/emoji editado. */
  ic?: string;
  /** HTML da headline (título + span de acento), preservando o destaque. */
  headlineHtml?: string;
  /** HTML do corpo (linhas separadas por <br>). */
  corpoHtml?: string;
  /** Texto da marca d'água (@handle). */
  marca?: string;
  /** Sugestão de foto vinda da IA (quando um slide é regenerado/melhorado). */
  foto?: string;
}

/** Operações de IA em andamento (desabilita os botões enquanto roda). */
type AcaoIA = "carrossel" | "slide" | "melhorar" | "ganchos" | "legenda";

/** Proporção do slide exportado (1:1 quadrado · 4:5 vertical, rende mais no feed). */
type Proporcao = "1:1" | "4:5";
const PROPORCOES: { id: Proporcao; nome: string; dim: string }[] = [
  { id: "1:1", nome: "Quadrado", dim: "1080×1080" },
  { id: "4:5", nome: "Vertical", dim: "1080×1350" },
];

/** Legenda + hashtags gerados por IA para o post. */
interface Legenda {
  legenda: string;
  hashtags: string[];
}

/** Tamanhos de carrossel oferecidos (nº de slides). */
type Tamanho = 6 | 7 | 9;
const TAMANHOS: { n: Tamanho; nome: string }[] = [
  { n: 6, nome: "Compacto" },
  { n: 7, nome: "Equilibrado" },
  { n: 9, nome: "Aprofundado" },
];

/** Fonte do texto do slide (família + itálico), separada para título e corpo. */
interface Fontes {
  titulo: string;
  corpo: string;
  tituloItalico: boolean;
  corpoItalico: boolean;
}

/** Fontes disponíveis: Google (carregadas no layout) + fontes do sistema. */
const FONTES: { nome: string; valor: string }[] = [
  { nome: "Playfair (serifada)", valor: '"Playfair Display", serif' },
  { nome: "Lora (serifada)", valor: '"Lora", serif' },
  { nome: "Georgia (serifada)", valor: "Georgia, serif" },
  { nome: "Times", valor: '"Times New Roman", Times, serif' },
  { nome: "DM Sans", valor: '"DM Sans", sans-serif' },
  { nome: "Montserrat", valor: '"Montserrat", sans-serif' },
  { nome: "Oswald (estreita)", valor: '"Oswald", sans-serif' },
  { nome: "Bebas Neue (título)", valor: '"Bebas Neue", sans-serif' },
  { nome: "Arial", valor: "Arial, Helvetica, sans-serif" },
  { nome: "Verdana", valor: "Verdana, Geneva, sans-serif" },
  { nome: "Courier (mono)", valor: '"Courier New", monospace' },
];

const FONTES_PADRAO: Fontes = {
  titulo: '"Playfair Display", serif',
  corpo: '"DM Sans", sans-serif',
  tituloItalico: false,
  corpoItalico: false,
};

/**
 * Cores editáveis por elemento do slide. Cada item aponta para um token da
 * paleta; assim todo elemento visível tem seu próprio seletor de cor.
 */
const CORES_EDITAVEIS: { campo: keyof Paleta; rotulo: string }[] = [
  { campo: "fundo", rotulo: "Fundo" },
  { campo: "texto", rotulo: "Título" },
  { campo: "acento", rotulo: "Destaque" },
  { campo: "textoSub", rotulo: "Texto" },
  { campo: "primaria", rotulo: "Detalhes" },
  { campo: "borda", rotulo: "Número & círculo" },
  { campo: "marca", rotulo: "Marca d'água" },
];

/** Monta o HTML interno da headline (título + acento) respeitando o layout. */
function headlineHtml(s: Slide, isCta: boolean): string {
  const sep = s.h && s.a && !isCta ? "<br>" : " ";
  const accent = s.a ? `<span>${s.a}</span>` : "";
  return `${s.h}${sep}${accent}`;
}

export default function Page() {
  const [pilar, setPilar] = useState<PilarId>("corpo");
  // Carrosséis gerados por IA, por pilar (o banco é fixo e vem do config).
  const [extras, setExtras] = useState<Record<PilarId, ItemCarrossel[]>>({
    corpo: [],
    mente: [],
    essencia: [],
  });
  const [tamanho, setTamanho] = useState<Tamanho>(6);
  const [index, setIndex] = useState(0);
  const [slideAtual, setSlideAtual] = useState(0);

  const [cores, setCores] = useState<Paleta>(paletas[banco.corpo.paleta]);
  const [paletaAtiva, setPaletaAtiva] = useState<PaletaId | null>(
    banco.corpo.paleta,
  );
  // Ajustes de texto (tamanho/posição) por slide — chave: pilar-index-slide.
  // Cada slide guarda os seus, pra não bagunçar slides que terão foto.
  const [ajustes, setAjustes] = useState<Record<string, Ajustes>>({});
  const [fontes, setFontes] = useState<Fontes>(FONTES_PADRAO);

  const [ocupadoIA, setOcupadoIA] = useState<AcaoIA | null>(null);
  const [erroIA, setErroIA] = useState<string | null>(null);
  // Tema livre opcional usado por todas as gerações de IA.
  const [tema, setTema] = useState("");
  // Variações de gancho geradas (transitório; não persiste).
  const [ganchos, setGanchos] = useState<Carrossel | null>(null);
  // Legenda + hashtags gerados (transitório; não persiste).
  const [legenda, setLegenda] = useState<Legenda | null>(null);
  // Proporção do slide (persiste).
  const [proporcao, setProporcao] = useState<Proporcao>("1:1");
  // Estado do download em lote (ZIP): null | "zip".
  const [baixando, setBaixando] = useState(false);
  // Confirmação transitória ("Copiado!", "Lista baixada", etc.).
  const [aviso, setAviso] = useState<string | null>(null);

  // Imagem de fundo por slide (chave: pilar-tamanho-index-slide) como dataURL.
  const [imagens, setImagens] = useState<Record<string, string>>({});
  // Modo limpo manual por slide (sem número/círculo), mesmo sem imagem.
  const [limpos, setLimpos] = useState<Record<string, boolean>>({});
  // Edições de texto por slide (capturadas no blur dos contenteditable).
  const [edicoes, setEdicoes] = useState<Record<string, EdicaoSlide>>({});
  // Vira true depois de carregar o estado salvo — evita salvar por cima
  // dos dados persistidos com os valores padrão do primeiro render.
  const [hidratado, setHidratado] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Itens do banco para o pilar + tamanho atuais (memoizado).
  const itensBanco = useMemo<ItemCarrossel[]>(
    () =>
      banco[pilar].variantes
        .filter((slides) => slides.length === tamanho)
        .map((slides) => ({ origem: "banco" as const, slides })),
    [pilar, tamanho],
  );

  const lista = useMemo<ItemCarrossel[]>(
    () => [
      ...itensBanco,
      ...extras[pilar].filter((it) => it.slides.length === tamanho),
    ],
    [itensBanco, extras, pilar, tamanho],
  );

  const atual = lista[index] ?? lista[0];
  const total = atual.slides.length;

  // ===== Aplica cores ao :root =====
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--cor-fundo", cores.fundo);
    r.setProperty("--cor-primaria", cores.primaria);
    r.setProperty("--cor-acento", cores.acento);
    r.setProperty("--cor-texto", cores.texto);
    r.setProperty("--cor-texto-sub", cores.textoSub);
    r.setProperty("--cor-card", cores.card);
    r.setProperty("--cor-borda", cores.borda);
    r.setProperty("--cor-marca", cores.marca);
  }, [cores]);

  // Ajustes de texto são aplicados por slide (inline), não no :root — ver render.

  // ===== Aplica fontes do slide ao :root (não afeta a interface) =====
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--slide-fonte-titulo", fontes.titulo);
    r.setProperty("--slide-fonte-corpo", fontes.corpo);
    r.setProperty("--slide-estilo-titulo", fontes.tituloItalico ? "italic" : "normal");
    r.setProperty("--slide-estilo-corpo", fontes.corpoItalico ? "italic" : "normal");
  }, [fontes]);

  // ===== Persistência (Fase A): carrega o estado salvo ao montar =====
  useEffect(() => {
    setPilar(carregarLocal<PilarId>("pilar", "corpo"));
    setTamanho(carregarLocal<Tamanho>("tamanho", 6));
    setCores(carregarLocal<Paleta>("cores", paletas[banco.corpo.paleta]));
    setPaletaAtiva(
      carregarLocal<PaletaId | null>("paletaAtiva", banco.corpo.paleta),
    );
    setAjustes(carregarLocal<Record<string, Ajustes>>("ajustes", {}));
    setFontes(carregarLocal<Fontes>("fontes", FONTES_PADRAO));
    setExtras(
      carregarLocal<Record<PilarId, ItemCarrossel[]>>("extras", {
        corpo: [],
        mente: [],
        essencia: [],
      }),
    );
    setLimpos(carregarLocal<Record<string, boolean>>("limpos", {}));
    setEdicoes(carregarLocal<Record<string, EdicaoSlide>>("edicoes", {}));
    setTema(carregarLocal<string>("tema", ""));
    setProporcao(carregarLocal<Proporcao>("proporcao", "1:1"));
    void carregarImagensDB().then(setImagens);
    setHidratado(true);
  }, []);

  // ===== Persistência (Fase A): salva quando algo muda =====
  // Imagens não entram aqui: são salvas no IndexedDB ao enviar/remover.
  useEffect(() => {
    if (!hidratado) return;
    salvarLocal("pilar", pilar);
    salvarLocal("tamanho", tamanho);
    salvarLocal("cores", cores);
    salvarLocal("paletaAtiva", paletaAtiva);
    salvarLocal("ajustes", ajustes);
    salvarLocal("fontes", fontes);
    salvarLocal("extras", extras);
    salvarLocal("limpos", limpos);
    salvarLocal("edicoes", edicoes);
    salvarLocal("tema", tema);
    salvarLocal("proporcao", proporcao);
  }, [
    hidratado,
    pilar,
    tamanho,
    cores,
    paletaAtiva,
    ajustes,
    fontes,
    extras,
    limpos,
    edicoes,
    tema,
    proporcao,
  ]);

  // Aviso transitório some sozinho depois de alguns segundos.
  useEffect(() => {
    if (!aviso) return;
    const t = setTimeout(() => setAviso(null), 3000);
    return () => clearTimeout(t);
  }, [aviso]);

  // ===== Navegação =====
  const navegar = useCallback(
    (dir: number) => {
      setSlideAtual((s) => (s + dir + total) % total);
    },
    [total],
  );

  // Swipe + teclado
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    let touchStartX = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const ae = document.activeElement as HTMLElement | null;
      if (ae?.isContentEditable) return;
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 40) navegar(diff > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      const ae = document.activeElement as HTMLElement | null;
      if (ae?.isContentEditable) return;
      if (e.key === "ArrowRight") navegar(1);
      if (e.key === "ArrowLeft") navegar(-1);
    };

    vp.addEventListener("touchstart", onTouchStart, { passive: true });
    vp.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      vp.removeEventListener("touchstart", onTouchStart);
      vp.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("keydown", onKey);
    };
  }, [navegar]);

  // ===== Seleção de pilar =====
  function selecionarPilar(id: PilarId) {
    setPilar(id);
    setIndex(0);
    setSlideAtual(0);
    setGanchos(null);
    setLegenda(null);
    const pal = banco[id].paleta;
    setCores(paletas[pal]);
    setPaletaAtiva(pal);
  }

  // ===== Seleção de tamanho do carrossel =====
  function selecionarTamanho(n: Tamanho) {
    setTamanho(n);
    setIndex(0);
    setSlideAtual(0);
    setGanchos(null);
    setLegenda(null);
  }

  // ===== Gerar outro (banco + IA já gerados, em rotação) =====
  function gerarOutro() {
    if (lista.length <= 1) return;
    setIndex((i) => (i + 1) % lista.length);
    setSlideAtual(0);
    setGanchos(null);
    setLegenda(null);
  }

  // ===== Gerar carrossel inteiro com IA (Fase B) =====
  async function gerarComIA() {
    setOcupadoIA("carrossel");
    setErroIA(null);
    try {
      const { slides } = await gerarCarrosselIA(
        pilar,
        tamanho,
        tema.trim() || undefined,
      );
      // Posição do novo item na lista filtrada por tamanho (banco + extras
      // deste tamanho) — extras pode ter carrosséis de outros tamanhos.
      const posicao =
        itensBanco.length +
        extras[pilar].filter((it) => it.slides.length === tamanho).length;
      setExtras((prev) => ({
        ...prev,
        [pilar]: [...prev[pilar], { origem: "ia" as const, slides }],
      }));
      setIndex(posicao);
      setSlideAtual(0);
      setGanchos(null);
      setLegenda(null);
    } catch (e) {
      setErroIA(e instanceof Error ? e.message : "Erro ao gerar com IA.");
    } finally {
      setOcupadoIA(null);
    }
  }

  // ===== Ajustes de texto (somente o slide aberto) =====
  function ajustar(tipo: keyof Ajustes, delta: number) {
    setAjustes((prev) => {
      const a = prev[chaveAtual] ?? AJUSTES_PADRAO;
      let proximo: Ajustes;
      if (tipo === "titulo")
        proximo = { ...a, titulo: Math.min(1.6, Math.max(0.7, a.titulo + delta)) };
      else if (tipo === "corpo")
        proximo = { ...a, corpo: Math.min(1.8, Math.max(0.7, a.corpo + delta)) };
      else proximo = { ...a, pos: Math.min(120, Math.max(-120, a.pos + delta)) };
      return { ...prev, [chaveAtual]: proximo };
    });
  }

  // Reseta os ajustes apenas do slide aberto.
  function resetarAjuste() {
    setAjustes((prev) =>
      Object.fromEntries(Object.entries(prev).filter(([k]) => k !== chaveAtual)),
    );
  }

  // ===== Paletas =====
  function aplicarPaleta(id: PaletaId) {
    setCores(paletas[id]);
    setPaletaAtiva(id);
  }
  function aplicarCorCustom(campo: keyof Paleta, valor: string) {
    setCores((c) => ({ ...c, [campo]: valor }));
    setPaletaAtiva(null);
  }

  // ===== Imagem de fundo / modo limpo / edições (por slide) =====
  // Chave única do slide visível: pilar + tamanho + variação + índice do
  // slide. O tamanho entra na chave porque carrosséis de 6/7/9 slides têm a
  // mesma posição na lista filtrada — sem ele, ajustes/imagens colidiam.
  const chaveSlide = (i: number) => `${pilar}-${tamanho}-${index}-${i}`;
  const chaveAtual = chaveSlide(slideAtual);
  const temImagemAtual = Boolean(imagens[chaveAtual]);
  // Slide com imagem entra automaticamente no modo limpo.
  const limpoAtual = temImagemAtual || Boolean(limpos[chaveAtual]);
  // Sugestão de foto baseada no contexto do slide selecionado (só guia de UI).
  // Se a IA regenerou o slide, a sugestão dela (em edicoes) tem prioridade.
  const sugestaoAtual = useMemo(() => {
    const base = atual.slides[slideAtual];
    const fotoEditada = edicoes[chaveAtual]?.foto;
    const slide = fotoEditada ? { ...base, foto: fotoEditada } : base;
    return sugestaoFoto(slide, slideAtual, total);
  }, [atual, slideAtual, total, edicoes, chaveAtual]);

  // Tamanho da fonte (px no download 1080px) do slide aberto — mostrado nos
  // controles pra dar pra identificar/comparar o tamanho slide a slide.
  const ajAtual = ajustes[chaveAtual] ?? AJUSTES_PADRAO;
  const tamTituloPx = Math.round(FONTE_BASE_1080.titulo * ajAtual.titulo);
  const tamCorpoPx = Math.round(FONTE_BASE_1080.corpo * ajAtual.corpo);

  async function enviarImagem(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // permite reenviar o mesmo arquivo depois
    if (!file) return;
    try {
      const dataUrl = await arquivoParaDataUrlOtimizado(file);
      setImagens((prev) => ({ ...prev, [chaveAtual]: dataUrl }));
      void salvarImagemDB(chaveAtual, dataUrl);
    } catch (erro) {
      console.error(erro);
      alert("Não consegui carregar essa imagem. Tente outro arquivo.");
    }
  }

  function removerImagem() {
    setImagens((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([k]) => k !== chaveAtual),
      ),
    );
    void removerImagemDB(chaveAtual);
  }

  // ===== Edições de texto (capturadas no blur dos contenteditable) =====
  function salvarEdicao(
    chave: string,
    campo: keyof EdicaoSlide,
    valor: string,
  ) {
    setEdicoes((prev) => ({
      ...prev,
      [chave]: { ...prev[chave], [campo]: valor },
    }));
  }

  // Desfaz as edições de texto apenas do slide aberto (volta ao banco/IA).
  function restaurarTexto() {
    setEdicoes((prev) =>
      Object.fromEntries(Object.entries(prev).filter(([k]) => k !== chaveAtual)),
    );
  }

  // ===== IA no slide atual (Fase B) =====

  // Slide com as edições do usuário aplicadas de volta (HTML → texto), pra
  // IA enxergar o estado real do carrossel, não o original do banco.
  function slideEfetivo(s: Slide, i: number): Slide {
    const ed = edicoes[chaveSlide(i)];
    if (!ed) return s;
    const r: Slide = { ...s };
    if (ed.ic !== undefined) r.ic = ed.ic;
    if (ed.foto) r.foto = ed.foto;
    if (ed.corpoHtml !== undefined) {
      const linhas = corpoHtmlParaLinhas(ed.corpoHtml);
      if (linhas.length) r.c = linhas;
    }
    if (ed.headlineHtml !== undefined) {
      const { h, a } = headlineHtmlParaPartes(ed.headlineHtml);
      if (h || a) {
        r.h = h;
        r.a = a;
      }
    }
    return r;
  }

  // Aplica um slide gerado por IA como edição (preserva a marca d'água).
  function aplicarSlideGerado(chave: string, s: Slide, isCta: boolean) {
    setEdicoes((prev) => ({
      ...prev,
      [chave]: {
        ...prev[chave],
        ic: s.ic,
        headlineHtml: headlineHtml(s, isCta),
        corpoHtml: s.c.join("<br>"),
        foto: s.foto,
      },
    }));
  }

  // Regenera o slide aberto (nova ideia pra posição, mantendo o contexto).
  async function regenerarSlide() {
    setOcupadoIA("slide");
    setErroIA(null);
    try {
      const contexto = atual.slides.map(slideEfetivo);
      const { slide } = await regenerarSlideIA(
        pilar,
        contexto,
        slideAtual,
        tema.trim() || undefined,
      );
      aplicarSlideGerado(chaveAtual, slide, slideAtual === total - 1);
    } catch (e) {
      setErroIA(e instanceof Error ? e.message : "Erro ao regenerar o slide.");
    } finally {
      setOcupadoIA(null);
    }
  }

  // Reescreve o texto do slide aberto mantendo a ideia.
  async function melhorarTexto() {
    setOcupadoIA("melhorar");
    setErroIA(null);
    try {
      const base = slideEfetivo(atual.slides[slideAtual], slideAtual);
      const { slide } = await melhorarSlideIA(pilar, base);
      aplicarSlideGerado(chaveAtual, slide, slideAtual === total - 1);
    } catch (e) {
      setErroIA(e instanceof Error ? e.message : "Erro ao melhorar o texto.");
    } finally {
      setOcupadoIA(null);
    }
  }

  // Gera 4 variações de capa (gancho) pro carrossel atual.
  async function gerarGanchos() {
    setOcupadoIA("ganchos");
    setErroIA(null);
    try {
      const contexto = atual.slides.map(slideEfetivo);
      const resposta = await gerarGanchosIA(
        pilar,
        contexto,
        tema.trim() || undefined,
      );
      setGanchos(resposta.ganchos);
    } catch (e) {
      setErroIA(e instanceof Error ? e.message : "Erro ao gerar ganchos.");
    } finally {
      setOcupadoIA(null);
    }
  }

  // Aplica a variação de gancho escolhida na capa (slide 1).
  function usarGancho(g: Slide) {
    aplicarSlideGerado(chaveSlide(0), g, false);
    setGanchos(null);
    setSlideAtual(0);
  }

  // Gera legenda + hashtags do post a partir do carrossel atual (Fase C).
  async function gerarLegenda() {
    setOcupadoIA("legenda");
    setErroIA(null);
    try {
      const contexto = atual.slides.map(slideEfetivo);
      const resposta = await gerarLegendaIA(
        pilar,
        contexto,
        tema.trim() || undefined,
      );
      setLegenda(resposta);
    } catch (e) {
      setErroIA(e instanceof Error ? e.message : "Erro ao gerar a legenda.");
    } finally {
      setOcupadoIA(null);
    }
  }

  // Texto final do post (legenda + linha em branco + hashtags com #).
  function textoLegendaCompleto(l: Legenda): string {
    const tags = l.hashtags.map((h) => `#${h.replace(/^#/, "")}`).join(" ");
    return `${l.legenda}\n\n${tags}`;
  }

  async function copiar(texto: string, confirmacao: string) {
    try {
      await navigator.clipboard.writeText(texto);
      setAviso(confirmacao);
    } catch {
      setAviso("Não consegui copiar — selecione e copie manualmente.");
    }
  }

  function alternarLimpo() {
    setLimpos((prev) => ({ ...prev, [chaveAtual]: !prev[chaveAtual] }));
  }

  // ===== Export PNG =====
  // Renderiza um slide em canvas, escondendo guias (etiqueta + botão) e
  // ancorando a escala 3 na altura real (respeita a proporção 1:1 ou 4:5).
  async function capturarSlideCanvas(i: number): Promise<HTMLCanvasElement | null> {
    const slideEl = document.getElementById(`slide-${i}`);
    if (!slideEl) return null;
    const btn = slideEl.querySelector<HTMLElement>(".btn-download");
    const tag = slideEl.querySelector<HTMLElement>(".slide-tag");
    if (btn) btn.style.display = "none";
    if (tag) tag.style.display = "none";
    const w = slideEl.offsetWidth;
    const h = slideEl.offsetHeight;
    await new Promise((r) => setTimeout(r, 60));
    try {
      const html2canvas = (await import("html2canvas")).default;
      // Escala que normaliza a saída para LARGURA_EXPORT (1080px) — o slide
      // na tela tem largura variável, então ancoramos no padrão do Instagram
      // pra garantir 1080×1080 / 1080×1350 nítidos em qualquer monitor.
      return await html2canvas(slideEl, {
        scale: LARGURA_EXPORT / w,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        width: w,
        height: h,
        logging: false,
      });
    } finally {
      if (tag) tag.style.display = "";
      if (btn) btn.style.display = "";
    }
  }

  function canvasParaBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
    return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  }

  function nomeSlide(i: number): string {
    return `slide-${String(i + 1).padStart(2, "0")}.png`;
  }

  async function baixarSlide(i: number) {
    (document.activeElement as HTMLElement | null)?.blur?.();
    try {
      const canvas = await capturarSlideCanvas(i);
      if (!canvas) return;
      const link = document.createElement("a");
      link.download = nomeSlide(i);
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error(err);
      setErroIA("Erro ao gerar o PNG do slide.");
    }
  }

  // Baixa TODOS os slides num único .zip (substitui os N downloads soltos).
  async function baixarTodosZip() {
    (document.activeElement as HTMLElement | null)?.blur?.();
    setBaixando(true);
    setErroIA(null);
    try {
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();
      for (let i = 0; i < total; i++) {
        const canvas = await capturarSlideCanvas(i);
        if (!canvas) continue;
        const blob = await canvasParaBlob(canvas);
        if (blob) zip.file(nomeSlide(i), blob);
      }
      const conteudo = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(conteudo);
      const link = document.createElement("a");
      link.download = `carrossel-${pilar}-${total}slides.zip`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
      setAviso("ZIP baixado com todos os slides.");
    } catch (err) {
      console.error(err);
      setErroIA("Erro ao gerar o ZIP dos slides.");
    } finally {
      setBaixando(false);
    }
  }

  // Roteiro de fotos: junta a sugestão de cada slide num .txt (sessão de fotos).
  function baixarListaFotos() {
    const linhas = atual.slides.map((s, i) => {
      const efetivo = slideEfetivo(s, i);
      const ideia = sugestaoFoto(efetivo, i, total);
      return `Slide ${String(i + 1).padStart(2, "0")} [${efetivo.tag}] — ${ideia}`;
    });
    const texto = `Lista de fotos · ${banco[pilar].nome} · ${total} slides\n\n${linhas.join("\n\n")}\n`;
    const url = URL.createObjectURL(new Blob([texto], { type: "text/plain" }));
    const link = document.createElement("a");
    link.download = `fotos-${pilar}-${total}slides.txt`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
    setAviso("Lista de fotos baixada (.txt).");
  }

  // ===== Rótulo de origem =====
  const rotuloOrigem =
    atual.origem === "ia"
      ? `✨ Gerado por IA (${index - itensBanco.length + 1})`
      : `Banco · Variação ${index + 1} de ${itensBanco.length}`;

  return (
    <>
      <div className="topo">
        <div className="marca">Criador de Carrosséis</div>
        <div className="sub">Corpo Ativo • Mente Clara • Essência Desperta</div>
      </div>

      <div className="app">
        <aside className="controls-col">
          {/* PILARES */}
          <div className="pilares">
        {pilaresMeta.map((p) => (
          <button
            key={p.id}
            className={`pilar-btn${pilar === p.id ? " ativo" : ""}`}
            onClick={() => selecionarPilar(p.id)}
          >
            <span className="pic">{p.pic}</span>
            <span className="nom">{p.nom}</span>
            <span className="des">{p.des}</span>
          </button>
        ))}
      </div>

      {/* TAMANHO DO CARROSSEL */}
      <div className="tamanhos">
        {TAMANHOS.map((t) => (
          <button
            key={t.n}
            className={`tamanho-btn${tamanho === t.n ? " ativo" : ""}`}
            onClick={() => selecionarTamanho(t.n)}
          >
            <span className="tam-n">{t.n} slides</span>
            <span className="tam-nome">{t.nome}</span>
          </button>
        ))}
      </div>

      {/* CONTROLE */}
      <div className="controle">
        <span className="rotulo">
          Pilar: <b>{banco[pilar].nome}</b> &nbsp;|&nbsp;{" "}
          <span className={`origem${atual.origem === "ia" ? " ia" : ""}`}>
            {rotuloOrigem}
          </span>
        </span>
        <button className="btn-gerar" onClick={gerarOutro}>
          🔄 Gerar outro deste pilar
        </button>
        <input
          className="tema-input"
          type="text"
          placeholder='Tema livre p/ IA (opcional) — ex.: "treino de 15 minutos"'
          value={tema}
          maxLength={200}
          onChange={(e) => setTema(e.target.value)}
        />
        <button
          className="btn-ia"
          onClick={gerarComIA}
          disabled={ocupadoIA !== null}
        >
          {ocupadoIA === "carrossel"
            ? "⏳ Gerando carrossel..."
            : "🤖 Gerar novo com IA"}
        </button>
      </div>

      {erroIA && <div className="erro-ia">{erroIA}</div>}

      {/* IA NO SLIDE ATUAL */}
      <div className="ia-slide">
        <span className="paleta-label">✨ IA no slide {slideAtual + 1}</span>
        <div className="ia-slide-acoes">
          <button
            className="btn-img"
            disabled={ocupadoIA !== null}
            onClick={regenerarSlide}
            title="Cria uma ideia nova pra este slide, mantendo o contexto do carrossel"
          >
            {ocupadoIA === "slide" ? "⏳" : "🔁"} Regenerar
          </button>
          <button
            className="btn-img"
            disabled={ocupadoIA !== null}
            onClick={melhorarTexto}
            title="Reescreve o texto deste slide mantendo a ideia"
          >
            {ocupadoIA === "melhorar" ? "⏳" : "✍️"} Melhorar texto
          </button>
          <button
            className="btn-img"
            disabled={ocupadoIA !== null}
            onClick={gerarGanchos}
            title="Gera 4 opções de capa pra este carrossel"
          >
            {ocupadoIA === "ganchos" ? "⏳" : "🪝"} Ganchos
          </button>
        </div>
        {ganchos && (
          <div className="ganchos-lista">
            <span className="ganchos-titulo">Escolha a nova capa:</span>
            {ganchos.map((g, gi) => (
              <button key={gi} className="gancho-opcao" onClick={() => usarGancho(g)}>
                <b>
                  {g.ic} {g.h} <span>{g.a}</span>
                </b>
                <small>{g.c.join(" ")}</small>
              </button>
            ))}
            <button className="gancho-fechar" onClick={() => setGanchos(null)}>
              ✕ Fechar opções
            </button>
          </div>
        )}
      </div>

      <div className="dica-edicao">
        ✎ Clique para editar título, corpo e ícone &nbsp;•&nbsp; edições ficam
        salvas neste navegador &nbsp;•&nbsp; as etiquetas tracejadas são guias
        e NÃO aparecem no download
      </div>

      {/* AJUSTES */}
      <div className="ajustes">
        <div className="aj-grupo">
          <span className="aj-label">Título</span>
          <button className="aj-btn" onClick={() => ajustar("titulo", -0.08)}>
            A-
          </button>
          <button className="aj-btn" onClick={() => ajustar("titulo", 0.08)}>
            A+
          </button>
          <span
            className="aj-size"
            title="Tamanho do título no download (canvas de 1080px)"
          >
            <span className="aj-size-ico" aria-hidden>
              A
            </span>
            {tamTituloPx}px
          </span>
        </div>
        <div className="aj-grupo">
          <span className="aj-label">Corpo</span>
          <button className="aj-btn" onClick={() => ajustar("corpo", -0.08)}>
            a-
          </button>
          <button className="aj-btn" onClick={() => ajustar("corpo", 0.08)}>
            a+
          </button>
          <span
            className="aj-size"
            title="Tamanho do corpo no download (canvas de 1080px)"
          >
            <span className="aj-size-ico aj-size-ico--sm" aria-hidden>
              a
            </span>
            {tamCorpoPx}px
          </span>
        </div>
        <div className="aj-grupo">
          <span className="aj-label">Posição</span>
          <button className="aj-btn" onClick={() => ajustar("pos", -12)}>
            ↑
          </button>
          <button className="aj-btn" onClick={() => ajustar("pos", 12)}>
            ↓
          </button>
        </div>
        <button className="aj-reset" onClick={resetarAjuste}>
          Resetar slide
        </button>
        <button
          className="aj-reset"
          onClick={restaurarTexto}
          title="Desfaz as edições de texto deste slide (volta ao original)"
        >
          ↺ Texto original
        </button>
        <p className="aj-dica">
          📐 Ideal no feed (1080×1350): título <b>{FAIXA_IDEAL.titulo}</b> e
          corpo <b>{FAIXA_IDEAL.corpo}</b>. O padrão aqui ({FONTE_BASE_1080.titulo}
          px / {FONTE_BASE_1080.corpo}px) já cai na faixa — use A−/A+ pra afinar
          por slide.
        </p>
      </div>

      {/* FONTES */}
      <div className="fontes-wrapper">
        <span className="paleta-label">Fontes</span>
        <div className="fonte-row">
          <span className="fonte-label">Título</span>
          <select
            className="fonte-select"
            value={fontes.titulo}
            onChange={(e) =>
              setFontes((f) => ({ ...f, titulo: e.target.value }))
            }
          >
            {FONTES.map((ft) => (
              <option key={ft.valor} value={ft.valor}>
                {ft.nome}
              </option>
            ))}
          </select>
          <label className="fonte-italico" title="Itálico no título">
            <input
              type="checkbox"
              checked={fontes.tituloItalico}
              onChange={(e) =>
                setFontes((f) => ({ ...f, tituloItalico: e.target.checked }))
              }
            />
            <i>I</i>
          </label>
        </div>
        <div className="fonte-row">
          <span className="fonte-label">Corpo</span>
          <select
            className="fonte-select"
            value={fontes.corpo}
            onChange={(e) =>
              setFontes((f) => ({ ...f, corpo: e.target.value }))
            }
          >
            {FONTES.map((ft) => (
              <option key={ft.valor} value={ft.valor}>
                {ft.nome}
              </option>
            ))}
          </select>
          <label className="fonte-italico" title="Itálico no corpo">
            <input
              type="checkbox"
              checked={fontes.corpoItalico}
              onChange={(e) =>
                setFontes((f) => ({ ...f, corpoItalico: e.target.checked }))
              }
            />
            <i>I</i>
          </label>
        </div>
      </div>

      {/* PALETA */}
      <div className="paleta-wrapper">
        <span className="paleta-label">Paleta de Cores</span>
        <div className="paleta-grid">
          {paletasMeta.map((p) => (
            <button
              key={p.id}
              className={`paleta-btn${paletaAtiva === p.id ? " ativo" : ""}`}
              onClick={() => aplicarPaleta(p.id)}
            >
              <span className="paleta-preview" style={{ background: p.preview }} />{" "}
              {p.nome}
            </button>
          ))}
        </div>
        <span className="custom-titulo">Cor de cada elemento</span>
        <div className="custom-grid">
          {CORES_EDITAVEIS.map(({ campo, rotulo }) => (
            <label className="custom-item" key={campo} title={`Cor: ${rotulo}`}>
              <input
                type="color"
                value={cores[campo]}
                onInput={(e) =>
                  aplicarCorCustom(campo, (e.target as HTMLInputElement).value)
                }
              />
              <span>{rotulo}</span>
            </label>
          ))}
        </div>
      </div>

          {/* IMAGEM DE FUNDO */}
          <div className="imagem-wrapper">
            <span className="paleta-label">
              Imagem de fundo · slide {slideAtual + 1}
            </span>
            <div className="sugestao-foto" title="Ideia de foto pra este slide (não aparece no download)">
              <span className="sugestao-foto-titulo">💡 Sugestão de foto</span>
              <span className="sugestao-foto-texto">{sugestaoAtual}</span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={enviarImagem}
              style={{ display: "none" }}
            />
            <div className="imagem-acoes">
              <button
                className="btn-img"
                onClick={() => fileInputRef.current?.click()}
              >
                📷 {temImagemAtual ? "Trocar imagem" : "Enviar imagem"}
              </button>
              {temImagemAtual && (
                <button className="btn-img-remover" onClick={removerImagem}>
                  ✕ Remover
                </button>
              )}
            </div>
            <label className="img-toggle" title="Esconde número e círculo">
              <input
                type="checkbox"
                checked={limpoAtual}
                disabled={temImagemAtual}
                onChange={alternarLimpo}
              />
              Modo limpo (sem número e círculo)
            </label>
          </div>

        </aside>

        <section className="preview-col">
          {/* CARROSSEL */}
          <div className="carrossel-wrapper">
        <button className="nav-btn prev" onClick={() => navegar(-1)}>
          ←
        </button>
        <button className="nav-btn next" onClick={() => navegar(1)}>
          →
        </button>
        <div
          className={`carrossel-viewport${proporcao === "4:5" ? " formato-45" : ""}`}
          ref={viewportRef}
        >
          <div
            key={`${pilar}-${index}`}
            className="slides-track"
            style={{ transform: `translateX(-${slideAtual * 100}%)` }}
          >
            {atual.slides.map((s, i) => {
              const isGancho = i === 0;
              const isCta = i === total - 1;
              const chave = chaveSlide(i);
              const ed = edicoes[chave];
              const img = imagens[chave];
              const limpo = Boolean(img) || Boolean(limpos[chave]);
              const classe = `slide${isGancho ? " slide-1" : ""}${
                isCta ? " slide-6" : ""
              }${limpo ? " modo-limpo" : ""}${img ? " tem-imagem" : ""}`;
              const mostraNumero = !isGancho && !isCta;
              const aj = ajustes[chave] ?? AJUSTES_PADRAO;
              const estiloSlide = {
                "--escala-titulo": aj.titulo.toFixed(2),
                "--escala-corpo": aj.corpo.toFixed(2),
                "--desloc-v": `${aj.pos}px`,
              } as React.CSSProperties;
              return (
                <div
                  className={classe}
                  id={`slide-${i}`}
                  key={i}
                  style={estiloSlide}
                >
                  {img && (
                    <div
                      className="slide-imagem"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  )}
                  {img && <div className="slide-scrim" />}
                  <div className="slide-deco" />
                  {isGancho && <div className="bg-glow" />}
                  {!isCta && <div className="slide-linha" />}
                  <div
                    className="slide-tag"
                    style={
                      isCta
                        ? { left: "50%", transform: "translateX(-50%)" }
                        : undefined
                    }
                    title="Guia narrativo (não aparece no download)"
                  >
                    {s.tag}
                  </div>
                  {mostraNumero && (
                    <div className="slide-numero">
                      {String(i).padStart(2, "0")}
                    </div>
                  )}
                  <div className="slide-conteudo">
                    <div
                      className="slide-icone"
                      contentEditable
                      suppressContentEditableWarning
                      spellCheck={false}
                      title="Clique para editar ou apagar o ícone"
                      onBlur={(e) =>
                        salvarEdicao(chave, "ic", e.currentTarget.textContent ?? "")
                      }
                    >
                      {ed?.ic ?? s.ic}
                    </div>
                    <h2
                      className="slide-headline"
                      contentEditable
                      suppressContentEditableWarning
                      spellCheck={false}
                      onBlur={(e) =>
                        salvarEdicao(chave, "headlineHtml", e.currentTarget.innerHTML)
                      }
                      dangerouslySetInnerHTML={{
                        __html: ed?.headlineHtml ?? headlineHtml(s, isCta),
                      }}
                    />
                    <div className="slide-divisor" />
                    <p
                      className="slide-corpo"
                      contentEditable
                      suppressContentEditableWarning
                      spellCheck={false}
                      onBlur={(e) =>
                        salvarEdicao(chave, "corpoHtml", e.currentTarget.innerHTML)
                      }
                      dangerouslySetInnerHTML={{
                        __html: ed?.corpoHtml ?? s.c.join("<br>"),
                      }}
                    />
                    {isCta && (
                      <div className="cta-box">Seguir → {HANDLE}</div>
                    )}
                  </div>
                  <div
                    className="slide-handle"
                    contentEditable
                    suppressContentEditableWarning
                    spellCheck={false}
                    title="Clique para editar a marca d'água"
                    onBlur={(e) =>
                      salvarEdicao(chave, "marca", e.currentTarget.textContent ?? "")
                    }
                  >
                    {ed?.marca ?? HANDLE}
                  </div>
                  {i === slideAtual && (
                    <button
                      className="btn-download"
                      onClick={() => baixarSlide(i)}
                    >
                      ↓ Baixar slide {String(i + 1).padStart(2, "0")}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="dots">
        {atual.slides.map((_, i) => (
          <button
            key={i}
            className={`dot${i === slideAtual ? " ativo" : ""}`}
            onClick={() => setSlideAtual(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="contador">
        {slideAtual + 1} / {total}
      </div>

          {/* PUBLICAÇÃO (Fase C) */}
          <div className="publicar">
            {/* Proporção */}
            <div className="prop-row">
              <span className="prop-label">Formato</span>
              {PROPORCOES.map((p) => (
                <button
                  key={p.id}
                  className={`prop-btn${proporcao === p.id ? " ativo" : ""}`}
                  onClick={() => setProporcao(p.id)}
                  title={p.dim}
                >
                  <b>{p.id}</b> {p.nome}
                </button>
              ))}
            </div>

            {/* Downloads */}
            <div className="publicar-acoes">
              <button
                className="btn-baixar-todos"
                onClick={baixarTodosZip}
                disabled={baixando}
              >
                {baixando ? "⏳ Gerando ZIP..." : "⬇ Baixar todos (ZIP)"}
              </button>
              <button className="btn-baixar-todos" onClick={baixarListaFotos}>
                📋 Lista de fotos (.txt)
              </button>
            </div>

            {/* Legenda + hashtags */}
            <button
              className="btn-ia"
              onClick={gerarLegenda}
              disabled={ocupadoIA !== null}
            >
              {ocupadoIA === "legenda"
                ? "⏳ Escrevendo legenda..."
                : "📝 Gerar legenda + hashtags"}
            </button>
            {legenda && (
              <div className="legenda-box">
                <textarea
                  className="legenda-texto"
                  readOnly
                  rows={8}
                  value={textoLegendaCompleto(legenda)}
                />
                <button
                  className="btn-img"
                  onClick={() =>
                    copiar(textoLegendaCompleto(legenda), "Legenda copiada!")
                  }
                >
                  📋 Copiar legenda + hashtags
                </button>
              </div>
            )}
            {aviso && <div className="aviso-ok">{aviso}</div>}
          </div>
        </section>
      </div>
    </>
  );
}
