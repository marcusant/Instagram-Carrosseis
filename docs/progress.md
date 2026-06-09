# Progress — Instagram Carrosséis

> Diário do que **já está pronto e o que está em uso agora**. Consulte aqui para
> saber rapidamente o estado atual do projeto. O plano completo está em
> [taskplan.md](./taskplan.md).

---

## Estado atual (resumo rápido)

| Item | Estado |
|------|--------|
| Fase ativa | **Fase 1 concluída** → próxima: Fase 2 (IA) |
| App roda local? | ✅ sim (`npm run dev` → http://localhost:3000, HTTP 200) |
| Build de produção | ✅ passa (`npm run build` · First Load JS ~111 kB) |
| Type-check | ✅ limpo (`npm run typecheck`) |
| Modo em uso | Banco interno (3 pilares × 3 variações), offline |
| Botão "Gerar novo com IA" | Presente na UI, mas backend é da Fase 2 (mostra aviso amigável) |
| Provider de IA ativo | Nenhum (IA é da Fase 2) |
| Deploy na Vercel? | ❌ ainda não |
| Última atualização | 2026-06-09 |

---

## Histórico

### 2026-06-09 — Fase 1 concluída (scaffold + banco offline)
- Scaffold manual do Next.js 15.5.19 + React 19 + TS strict (App Router).
- Banco interno portado para `src/config/banco.ts` (3×3×6 slides), tipos em
  `tipos.ts`, pilares/paletas em `pilares.ts`.
- CSS portado para `src/app/globals.css`; `layout.tsx` carrega as fontes.
- `src/app/page.tsx`: UI completa do criador — seleção de pilar, navegação
  (setas/swipe/teclado/dots), edição inline (contenteditable), ajustes de
  texto, paletas + cores custom, export PNG (html2canvas via import dinâmico).
- Dois botões: 🔄 "Gerar outro deste pilar" (banco, offline) e 🤖 "Gerar novo
  com IA" (chama `/api/gerar-carrossel`; ainda não existe → erro amigável).
- Rótulo de origem: `Banco · Variação X de Y` vs `✨ Gerado por IA`.
- Validação local: `typecheck` ✅, `build` ✅, `dev` serve HTTP 200 ✅.
- **Nada commitado** (aguardando OK do Marcus).
- **Próximo passo:** Fase 2 — camada `src/lib/ai/` + rota `/api/gerar-carrossel`.

### 2026-06-09 — Planejamento concluído
- Definida a arquitetura: app **separado** em `c:\dev\Instagram-Carrosseis`,
  Next.js, dois modos (banco interno + IA sob demanda).
- Decidido manter o **banco interno** do HTML original como base offline; IA
  vira botão separado e explícito.
- Camada de IA será **trocável** por provider (Anthropic/Google/OpenAI) via env.
- Padrão de IA escolhido: **Sonnet 4.6** (melhor copy em PT; custo ~$0,026/clique).
- Criados `docs/taskplan.md` e `docs/progress.md`.
- **Próximo passo:** iniciar Fase 1 (scaffold + portar UI e banco).

---

## Como retomar / consultar
- **"Qual o plano?"** → [taskplan.md](./taskplan.md)
- **"O que estou usando agora?"** → tabela "Estado atual" acima.
- **"Como troco o modelo de IA?"** → taskplan.md, seção "Provider de IA".
- **Fonte original do banco de conteúdo:** `criador-carrosseis.html` (linhas 241–329).
- **Pilares (referência):** vêm da BIO-Instagram (`src/config/site.ts`).
