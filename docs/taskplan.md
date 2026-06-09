# Taskplan — Instagram Carrosséis

> **O que é este projeto:** app web privado do Marcus para criar carrosséis do
> Instagram. Funciona em dois modos: (1) um **banco interno** de carrosséis já
> prontos por pilar (grátis, offline) e (2) **geração com IA em tempo real**
> (sob demanda, só quando você clica). Deploy via GitHub → Vercel.
>
> Última atualização: 2026-06-09 · Status geral: **Fase 1 em andamento**

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

**Provider em uso hoje:** _nenhum ainda (Fase 1 não usa IA)._
**Padrão planejado para a Fase 2:** Anthropic · Sonnet 4.6.

Trocar de provider no futuro = mudar `AI_PROVIDER` no `.env` (sem reescrever código).

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

### Fase 2 — Geração com IA (trocável) · pendente
- [ ] `src/lib/ai/` com interface comum + adapters (anthropic/google/openai)
- [ ] Seleção de provider por `AI_PROVIDER`
- [ ] `src/app/api/gerar-carrossel/route.ts` (valida com zod → chama provider)
- [ ] Schema estruturado (tool use / responseSchema / structured outputs) p/ JSON garantido
- [ ] Prompts-base por pilar
- [ ] Segundo botão "🤖 Gerar novo com IA" + rótulo "✨ Gerado por IA"
- [ ] Gerados por IA entram na rotação do botão de alternar

### Fase 3 — Proteção por senha · pendente
- [ ] `middleware.ts` protegendo página + API
- [ ] Tela de senha; valida contra `CARROSSEL_PASSWORD` (env)

### Fase 4 — PWA + deploy · pendente
- [ ] `manifest.json`, `sw.js`, ícones (192/512)
- [ ] `git init` → GitHub
- [ ] Vercel: conectar repo + env vars (`AI_PROVIDER`, chaves, `CARROSSEL_PASSWORD`)
- [ ] Validar build local antes de qualquer commit (fluxo local-first)

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
