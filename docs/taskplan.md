# Taskplan — Instagram Carrosséis

> **O que é este projeto:** app web privado do Marcus para criar carrosséis do
> Instagram. Funciona em dois modos: (1) um **banco interno** de carrosséis já
> prontos por pilar (grátis, offline) e (2) **geração com IA em tempo real**
> (sob demanda, só quando você clica). Deploy via GitHub → Vercel.
>
> Última atualização: 2026-06-10 · Status geral: **Fases 1, A, B e C ✅ ·
> próxima: Fase D (gestão)** — plano completo de melhorias A–E em 2026-06-10

---

## Visão geral da arquitetura

App **separado** da BIO-Instagram (carrosséis são privados; a bio é pública).
Migração futura para dentro da bio é possível, mas não é o plano atual.

| Camada | Decisão |
|--------|---------|
| Framework | Next.js 15 (App Router) + React 19 |
| Linguagem | TypeScript (strict) |
| Estilo | CSS portado do HTML original (tokens via CSS vars) |
| Validação | zod (entrada da rota de IA) |
| IA | Camada **trocável** por provider (ver tabela abaixo) |
| Export | PNG via html2canvas (reaproveitado do HTML original) |
| Proteção | Senha simples via `middleware.ts` (cookie + env) |
| PWA | manifest + service worker + ícones |
| Deploy | Vercel (auto-deploy via Git) |

### Os dois modos (decisão central do produto)

| Botão | O que faz | Custo |
|-------|-----------|-------|
| 🔄 Gerar outro deste pilar | Alterna entre as variações do **banco interno** | Grátis / offline |
| 🤖 Gerar novo com IA | Chama a API e cria carrossel inédito em tempo real | ~centavos/clique |

Ao **abrir o app**: carrega o banco interno e mostra a variação 1 — **sem
nenhuma chamada de API**. A IA só entra quando você clica conscientemente.
Carrosséis gerados por IA entram na rotação do botão de alternar.

---

## Provider de IA — atual e alternativas

**Provider em uso hoje:** Anthropic · Sonnet 4.6 (`claude-sonnet-4-6`) — código
pronto (Fase B ✅); falta colocar `ANTHROPIC_API_KEY` no `.env.local`/Vercel.

Trocar de provider = mudar `AI_PROVIDER` no `.env` (anthropic | google | openai);
`AI_MODEL` opcional sobrepõe o modelo padrão do provider.

Premissa de custo: ~1k tokens entrada + 1,5k saída por geração.

| Provider | Modelo | ID | Entrada/Saída (por 1M) | Custo/clique | Nota |
|----------|--------|-----|------------------------|--------------|------|
| Anthropic ✅ | Sonnet 4.6 | `claude-sonnet-4-6` | $3 / $15 | ~$0,026 | Padrão — melhor copy em PT |
| Anthropic | Haiku 4.5 | `claude-haiku-4-5` | $1 / $5 | ~$0,009 | Mais barato na Anthropic |
| Anthropic | Opus 4.8 | `claude-opus-4-8` | $5 / $25 | ~$0,043 | Top, exagero p/ 6 slides |
| Google | Gemini 2.5 Flash | `gemini-2.5-flash` | ~$0,30 / ~$2,50 | ~$0,004 | Ótimo custo |
| Google | Gemini 2.5 Flash-Lite | `gemini-2.5-flash-lite` | ~$0,10 / ~$0,40 | ~$0,0007 | O mais barato de todos |
| OpenAI | GPT-5 mini ⭐ | `gpt-5-mini` | ~$0,25 / ~$2,00 | ~$0,003 | Melhor custo-benefício OpenAI |
| OpenAI | GPT-4o mini | `gpt-4o-mini` | ~$0,15 / ~$0,60 | ~$0,001 | Mais barato da OpenAI |

> Preços Anthropic = confirmados (fonte oficial). Google/OpenAI = **aproximados**,
> confirmar no painel de cada provider antes de ativar. Custo aqui é quase
> irrelevante; a escolha real é **qualidade da escrita em português**.

---

## Fases

### Fase 1 — Scaffold + banco interno (sem IA) · **CONCLUÍDA ✅**
- [x] Scaffold Next.js 15.5.19 + React 19 em `c:\dev\Instagram-Carrosseis` (TS strict, App Router)
- [x] Portar banco interno completo (3 pilares × 3 variações × 6 slides) → `src/config/banco.ts`
- [x] Portar UI do HTML original: paletas, ajustes de texto, contenteditable, swipe, teclado
- [x] Export PNG (html2canvas) — slide único e "baixar todos"
- [x] Botão "Gerar outro deste pilar" funcionando 100% offline
- [x] Rótulo de origem do carrossel (`Banco · Variação X de Y`)
- [x] `package.json` com scripts (dev/build/typecheck/lint/start)
- [x] Rodar `npm run dev` e validar local (typecheck ✅, build ✅, dev HTTP 200 ✅)
- **Resultado:** app utilizável e deployável já nesta fase, sem IA.

> **Plano de melhorias (análise de 2026-06-10).** As antigas Fases 2/3/4 foram
> reorganizadas nas Fases A–E abaixo, priorizadas pelo impacto na criação de
> conteúdo: A protege o trabalho, B multiplica o conteúdo, C fecha o ciclo de
> publicação, D organiza a rotina, E cuida de segurança e dívida técnica.

### Fase A — Persistência local (não perder trabalho) · **CONCLUÍDA ✅** (2026-06-10)
> Problema: edições `contentEditable` ficavam só no DOM e tudo (textos, imagens,
> ajustes, gerados por IA) se perdia no F5 ou ao trocar pilar/variação/tamanho.
- [x] Capturar edições de texto no estado via `onBlur` (ícone, título+acento, corpo, marca d'água), por slide
- [x] Corrigir a chave de slide para incluir o tamanho (`pilar-tamanho-variação-slide`) — antes ajustes/imagens colidiam entre tamanhos diferentes
- [x] Persistir em `localStorage`: edições, ajustes, modo limpo, fontes, cores, paleta ativa, extras (IA), pilar e tamanho selecionados
- [x] Persistir imagens de fundo em **IndexedDB** (dataURLs grandes estouram o localStorage)
- [x] Otimizar imagem no upload (redimensionar p/ máx. 2048px + re-encodar JPEG)
- [x] Botão "↺ Texto original" para desfazer as edições de texto do slide aberto
- [x] Validar `typecheck` + `build` + teste no navegador (editar → reload → trocar pilar → restaurar)

### Fase B — IA plena (antiga Fase 2, ampliada) · **CONCLUÍDA ✅** (2026-06-10)
- [x] `src/lib/ai/` com interface comum + adapters (anthropic/google/openai)
- [x] Seleção de provider por `AI_PROVIDER` (+ `AI_MODEL` opcional sobrepõe o modelo)
- [x] Rota única `src/app/api/ia/route.ts` discriminada por `acao` (valida com zod → chama provider)
- [x] Structured outputs na Anthropic (`output_config.format` + zod) — JSON garantido; Google/OpenAI usam modo JSON + validação zod
- [x] Prompts-base por pilar (voz, estrutura narrativa por tamanho, anti-repetição dos títulos do banco)
- [x] **Tema livre**: campo "sobre o quê?" usado em todas as gerações
- [x] **Regenerar 1 slide** mantendo o contexto (edições do usuário entram no contexto via conversores HTML→texto)
- [x] **"Melhorar este texto"**: reescreve o slide atual mantendo a ideia
- [x] **Variações de gancho**: 4 opções de capa; escolher aplica no slide 1
- [x] Gerados por IA entram na rotação do botão de alternar (e persistem — Fase A)
- [ ] **Teste real com chave**: validar a qualidade da copy com `ANTHROPIC_API_KEY` em `.env.local` (rota, erros e UI já verificados sem chave)

### Fase C — Fluxo de publicação · **CONCLUÍDA ✅** (2026-06-10)
- [x] **Legenda + hashtags** por IA (ação `legenda` na rota; gancho próprio, CTA salvar/comentar/seguir, 8–15 hashtags; textarea + copiar)
- [x] **Formato 4:5** (1080×1350) além do 1:1 — seletor de proporção (persistido; export segue a proporção via altura real)
- [x] **Download em ZIP** único (jszip) — captura cada slide e empacota num `.zip` (substitui os N downloads soltos)
- [x] **"Lista de fotos do carrossel"** — `.txt` com a sugestão de foto de cada slide (usa o estado editado do carrossel)
- [x] Validado: `typecheck` ✅ · `build` ✅ · navegador ✅ (proporção 1:1↔4:5, ZIP com 6 PNGs, .txt com as fotos, legenda 503 sem chave)
- [ ] **Teste real com chave**: validar a qualidade da legenda/hashtags com `ANTHROPIC_API_KEY` (mesma pendência da Fase B)

### Fase D — Gestão de produção · pendente
- [ ] Marcar carrossel como **postado** (com data) + histórico, p/ não repetir conteúdo
- [ ] (depois) Mini-calendário de conteúdo

### Fase E — Proteção e infraestrutura · pendente
- [ ] `middleware.ts` com senha (`CARROSSEL_PASSWORD`) — **urgente se o app já estiver público na Vercel**
- [ ] Confirmar status real do deploy na Vercel (commit `f723f49` corrige build na Vercel, mas docs diziam "deploy ❌" — estavam dessincronizados)
- [ ] Trocar `html2canvas` (1.4.1, abandonado, falha com CSS moderno) por `html-to-image` ou `modern-screenshot`
- [ ] PWA: `manifest.json`, `sw.js`, ícones (192/512)
- [ ] Fontes Google via `next/font` (ou ao menos `preconnect`)
- [ ] Expandir banco: tamanhos 7 e 9 têm só 2 variantes por pilar (vs 3 do tamanho 6)

---

## Variáveis de ambiente (planejadas)

```bash
AI_PROVIDER=anthropic           # anthropic | google | openai
ANTHROPIC_API_KEY=...           # se Anthropic
GOOGLE_API_KEY=...              # se Google
OPENAI_API_KEY=...              # se OpenAI
CARROSSEL_PASSWORD=...          # senha de acesso ao app
```

---

## Regras de trabalho
- **Local-first:** construir e validar local (`npm run dev`/`build`) antes de commitar.
- **Nunca commitar/pushar sem OK explícito** do Marcus.
- **Nenhum segredo no código** — só em `.env.local` / env vars da Vercel.
