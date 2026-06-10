"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { banco } from "@/config/banco";
import { HANDLE, paletas, paletasMeta, pilaresMeta } from "@/config/pilares";
import { sugestaoFoto } from "@/config/sugestoes";
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
  const [ajustes, setAjustes] = useState<Ajustes>(AJUSTES_PADRAO);
  const [fontes, setFontes] = useState<Fontes>(FONTES_PADRAO);

  const [carregandoIA, setCarregandoIA] = useState(false);
  const [erroIA, setErroIA] = useState<string | null>(null);

  // Imagem de fundo por slide (chave: pilar-index-slide) como dataURL.
  const [imagens, setImagens] = useState<Record<string, string>>({});
  // Modo limpo manual por slide (sem número/círculo), mesmo sem imagem.
  const [limpos, setLimpos] = useState<Record<string, boolean>>({});

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

  // ===== Aplica ajustes de texto ao :root =====
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--escala-titulo", ajustes.titulo.toFixed(2));
    r.setProperty("--escala-corpo", ajustes.corpo.toFixed(2));
    r.setProperty("--desloc-v", `${ajustes.pos}px`);
  }, [ajustes]);

  // ===== Aplica fontes do slide ao :root (não afeta a interface) =====
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--slide-fonte-titulo", fontes.titulo);
    r.setProperty("--slide-fonte-corpo", fontes.corpo);
    r.setProperty("--slide-estilo-titulo", fontes.tituloItalico ? "italic" : "normal");
    r.setProperty("--slide-estilo-corpo", fontes.corpoItalico ? "italic" : "normal");
  }, [fontes]);

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
    const pal = banco[id].paleta;
    setCores(paletas[pal]);
    setPaletaAtiva(pal);
  }

  // ===== Seleção de tamanho do carrossel =====
  function selecionarTamanho(n: Tamanho) {
    setTamanho(n);
    setIndex(0);
    setSlideAtual(0);
  }

  // ===== Gerar outro (banco + IA já gerados, em rotação) =====
  function gerarOutro() {
    if (lista.length <= 1) return;
    setIndex((i) => (i + 1) % lista.length);
    setSlideAtual(0);
  }

  // ===== Gerar com IA (backend da Fase 2) =====
  async function gerarComIA() {
    setCarregandoIA(true);
    setErroIA(null);
    try {
      const res = await fetch("/api/gerar-carrossel", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ pilar }),
      });
      if (!res.ok) {
        throw new Error(
          res.status === 404
            ? "Geração por IA ainda não configurada (Fase 2)."
            : `Erro ao gerar (${res.status}).`,
        );
      }
      const data: { slides: Slide[] } = await res.json();
      setExtras((prev) => {
        const novos = {
          ...prev,
          [pilar]: [...prev[pilar], { origem: "ia" as const, slides: data.slides }],
        };
        return novos;
      });
      // Aponta para o recém-gerado (último da lista do pilar).
      setIndex(itensBanco.length + extras[pilar].length);
      setSlideAtual(0);
    } catch (e) {
      setErroIA(e instanceof Error ? e.message : "Erro ao gerar com IA.");
    } finally {
      setCarregandoIA(false);
    }
  }

  // ===== Ajustes de texto =====
  function ajustar(tipo: keyof Ajustes, delta: number) {
    setAjustes((a) => {
      if (tipo === "titulo")
        return { ...a, titulo: Math.min(1.6, Math.max(0.7, a.titulo + delta)) };
      if (tipo === "corpo")
        return { ...a, corpo: Math.min(1.8, Math.max(0.7, a.corpo + delta)) };
      return { ...a, pos: Math.min(120, Math.max(-120, a.pos + delta)) };
    });
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

  // ===== Imagem de fundo / modo limpo (por slide) =====
  // Chave única do slide visível: pilar + variação + índice do slide.
  const chaveSlide = (i: number) => `${pilar}-${index}-${i}`;
  const chaveAtual = chaveSlide(slideAtual);
  const temImagemAtual = Boolean(imagens[chaveAtual]);
  // Slide com imagem entra automaticamente no modo limpo.
  const limpoAtual = temImagemAtual || Boolean(limpos[chaveAtual]);
  // Sugestão de foto baseada no contexto do slide selecionado (só guia de UI).
  const sugestaoAtual = useMemo(
    () => sugestaoFoto(atual.slides[slideAtual], slideAtual, total),
    [atual, slideAtual, total],
  );

  function enviarImagem(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () =>
      setImagens((prev) => ({ ...prev, [chaveAtual]: reader.result as string }));
    reader.readAsDataURL(file);
    e.target.value = ""; // permite reenviar o mesmo arquivo depois
  }

  function removerImagem() {
    setImagens((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([k]) => k !== chaveAtual),
      ),
    );
  }

  function alternarLimpo() {
    setLimpos((prev) => ({ ...prev, [chaveAtual]: !prev[chaveAtual] }));
  }

  // ===== Export PNG =====
  async function baixarSlide(i: number) {
    const ae = document.activeElement as HTMLElement | null;
    ae?.blur?.();
    const slideEl = document.getElementById(`slide-${i}`);
    if (!slideEl) return;
    const btn = slideEl.querySelector<HTMLElement>(".btn-download");
    const tag = slideEl.querySelector<HTMLElement>(".slide-tag");
    if (btn) btn.style.display = "none";
    if (tag) tag.style.display = "none";
    const w = slideEl.offsetWidth;
    const h = slideEl.offsetHeight;
    await new Promise((r) => setTimeout(r, 60));
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(slideEl, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        width: w,
        height: h,
        logging: false,
      });
      const link = document.createElement("a");
      link.download = `slide-${String(i + 1).padStart(2, "0")}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error(err);
      alert("Erro ao gerar PNG.");
    } finally {
      if (tag) tag.style.display = "";
      if (btn) btn.style.display = "";
    }
  }

  async function baixarTodos() {
    for (let i = 0; i < total; i++) {
      await baixarSlide(i);
      await new Promise((r) => setTimeout(r, 400));
    }
  }

  // ===== Rótulo de origem =====
  const rotuloOrigem =
    atual.origem === "ia"
      ? `✨ Gerado por IA (${index - itensBanco.length + 1})`
      : `Banco · Variação ${index + 1} de ${itensBanco.length}`;

  return (
    <>
      <div className="topo">
        <div className="marca">Criador de Carrosseis</div>
        <div className="sub">Corpo Ativo • Mente Clara • Essencia Desperta</div>
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
        <button className="btn-ia" onClick={gerarComIA} disabled={carregandoIA}>
          {carregandoIA ? "⏳ Gerando..." : "🤖 Gerar novo com IA"}
        </button>
      </div>

      {erroIA && <div className="erro-ia">{erroIA}</div>}

      <div className="dica-edicao">
        ✎ Clique para editar titulo, corpo e icone &nbsp;•&nbsp; as etiquetas
        tracejadas sao guias e NAO aparecem no download
      </div>

      {/* AJUSTES */}
      <div className="ajustes">
        <div className="aj-grupo">
          <span className="aj-label">Titulo</span>
          <button className="aj-btn" onClick={() => ajustar("titulo", -0.08)}>
            A-
          </button>
          <button className="aj-btn" onClick={() => ajustar("titulo", 0.08)}>
            A+
          </button>
        </div>
        <div className="aj-grupo">
          <span className="aj-label">Corpo</span>
          <button className="aj-btn" onClick={() => ajustar("corpo", -0.08)}>
            a-
          </button>
          <button className="aj-btn" onClick={() => ajustar("corpo", 0.08)}>
            a+
          </button>
        </div>
        <div className="aj-grupo">
          <span className="aj-label">Posicao</span>
          <button className="aj-btn" onClick={() => ajustar("pos", -12)}>
            ↑
          </button>
          <button className="aj-btn" onClick={() => ajustar("pos", 12)}>
            ↓
          </button>
        </div>
        <button className="aj-reset" onClick={() => setAjustes(AJUSTES_PADRAO)}>
          Resetar
        </button>
      </div>

      {/* FONTES */}
      <div className="fontes-wrapper">
        <span className="paleta-label">Fontes</span>
        <div className="fonte-row">
          <span className="fonte-label">Titulo</span>
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
        <div className="carrossel-viewport" ref={viewportRef}>
          <div
            key={`${pilar}-${index}`}
            className="slides-track"
            style={{ transform: `translateX(-${slideAtual * 100}%)` }}
          >
            {atual.slides.map((s, i) => {
              const isGancho = i === 0;
              const isCta = i === total - 1;
              const chave = `${pilar}-${index}-${i}`;
              const img = imagens[chave];
              const limpo = Boolean(img) || Boolean(limpos[chave]);
              const classe = `slide${isGancho ? " slide-1" : ""}${
                isCta ? " slide-6" : ""
              }${limpo ? " modo-limpo" : ""}${img ? " tem-imagem" : ""}`;
              const mostraNumero = !isGancho && !isCta;
              return (
                <div className={classe} id={`slide-${i}`} key={i}>
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
                    title="Guia narrativo (nao aparece no download)"
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
                      title="Clique para editar ou apagar o icone"
                    >
                      {s.ic}
                    </div>
                    <h2
                      className="slide-headline"
                      contentEditable
                      suppressContentEditableWarning
                      spellCheck={false}
                      dangerouslySetInnerHTML={{
                        __html: headlineHtml(s, isCta),
                      }}
                    />
                    <div className="slide-divisor" />
                    <p
                      className="slide-corpo"
                      contentEditable
                      suppressContentEditableWarning
                      spellCheck={false}
                      dangerouslySetInnerHTML={{ __html: s.c.join("<br>") }}
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
                    title="Clique para editar a marca d'agua"
                  >
                    {HANDLE}
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
          <button className="btn-baixar-todos" onClick={baixarTodos}>
            ⬇ Baixar todos os slides
          </button>
        </section>
      </div>
    </>
  );
}
