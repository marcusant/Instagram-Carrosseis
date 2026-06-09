"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { banco } from "@/config/banco";
import { HANDLE, paletas, paletasMeta, pilaresMeta } from "@/config/pilares";
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
  const [index, setIndex] = useState(0);
  const [slideAtual, setSlideAtual] = useState(0);

  const [cores, setCores] = useState<Paleta>(paletas[banco.corpo.paleta]);
  const [paletaAtiva, setPaletaAtiva] = useState<PaletaId | null>(
    banco.corpo.paleta,
  );
  const [ajustes, setAjustes] = useState<Ajustes>(AJUSTES_PADRAO);

  const [carregandoIA, setCarregandoIA] = useState(false);
  const [erroIA, setErroIA] = useState<string | null>(null);

  const viewportRef = useRef<HTMLDivElement>(null);

  // Itens do banco para o pilar atual (memoizado).
  const itensBanco = useMemo<ItemCarrossel[]>(
    () =>
      banco[pilar].variantes.map((slides) => ({
        origem: "banco" as const,
        slides,
      })),
    [pilar],
  );

  const lista = useMemo<ItemCarrossel[]>(
    () => [...itensBanco, ...extras[pilar]],
    [itensBanco, extras, pilar],
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
  }, [cores]);

  // ===== Aplica ajustes de texto ao :root =====
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--escala-titulo", ajustes.titulo.toFixed(2));
    r.setProperty("--escala-corpo", ajustes.corpo.toFixed(2));
    r.setProperty("--desloc-v", `${ajustes.pos}px`);
  }, [ajustes]);

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
  function aplicarCorCustom(campo: "primaria" | "acento" | "fundo", valor: string) {
    setCores((c) => ({ ...c, [campo]: valor }));
    setPaletaAtiva(null);
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
        <div className="custom-row">
          <label>Primaria:</label>
          <input
            type="color"
            value={cores.primaria}
            onInput={(e) =>
              aplicarCorCustom("primaria", (e.target as HTMLInputElement).value)
            }
          />
          <label>Acento:</label>
          <input
            type="color"
            value={cores.acento}
            onInput={(e) =>
              aplicarCorCustom("acento", (e.target as HTMLInputElement).value)
            }
          />
          <label>Fundo:</label>
          <input
            type="color"
            value={cores.fundo}
            onInput={(e) =>
              aplicarCorCustom("fundo", (e.target as HTMLInputElement).value)
            }
          />
        </div>
      </div>

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
              const classe = `slide${isGancho ? " slide-1" : ""}${
                isCta ? " slide-6" : ""
              }`;
              const mostraNumero = !isGancho && !isCta;
              return (
                <div className={classe} id={`slide-${i}`} key={i}>
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
                  <div className="slide-handle">{HANDLE}</div>
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
    </>
  );
}
