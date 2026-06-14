# Progress — Instagram Carrosséis

> Diário do que **já está pronto e o que está em uso agora**. Consulte aqui para
> saber rapidamente o estado atual do projeto. O plano completo está em
> [taskplan.md](./taskplan.md).

---

## Estado atual (resumo rápido)

| Item | Estado |
|------|--------|
| Fase ativa | **Fase C concluída** → próxima: Fase D (gestão) — plano completo A–E no [taskplan.md](./taskplan.md) |
| Fases concluídas | Fase 1 ✅ · A (persistência) ✅ · B (IA plena) ✅ · C (publicação) ✅ |
| Fases pendentes | D (gestão) · E (proteção/infra) |
| Trabalho persiste? | ✅ sim — edições de texto, imagens, ajustes, fontes, cores, gerados por IA e formato sobrevivem a F5 e troca de pilar/tamanho |
| App roda local? | ✅ sim (`npm run dev` → http://localhost:3000, HTTP 200) |
| Build de produção | ✅ passa (`npm run build`) |
| Type-check | ✅ limpo (`npm run typecheck`) |
| Modo em uso | Banco (3 pilares × **12 variantes**: 8×6, 2×7, 2×9) + IA (carrossel, regenerar, melhorar, ganchos, legenda) + export 1:1/4:5, ZIP, lista de fotos |
| Provider de IA ativo | **`mock`** (em `.env.local`, p/ testar sem chave) — troque p/ `anthropic` + `ANTHROPIC_API_KEY` quando tiver a chave |
| Testar IA SEM chave | ✅ `AI_PROVIDER=mock` gera conteúdo offline (recombina o banco) nas 4 operações + legenda; já ativo no `.env.local` |
| IA testada com chave real? | ❌ ainda não — fluxo todo validado via mock; falta validar a qualidade da copy real |
| Deploy na Vercel? | ⚠️ **confirmar** — commit `f723f49` corrige build na Vercel, indicando deploy; se estiver no ar, a senha (Fase E) vira urgente |
| Última atualização | 2026-06-10 |

---

## Histórico

### 2026-06-14 — Badge de tamanho de fonte + download em HD (1080) + recomendação
- **Badge "Npx" por slide** ao lado de A−/A+ (título) e a−/a+ (corpo): mostra o
  tamanho da fonte **no download (canvas 1080px)**, reativo aos ajustes. Permite
  identificar/igualar o tamanho entre os slides do carrossel.
- **Download em HD padrão Instagram**: export passa a renderizar em **exatamente
  1080×1080 (1:1)** ou **1080×1350 (4:5)** — `scale = 1080 / largura_do_slide`
  (antes era `scale: 3`, gerando 1680px fora do padrão).
- **Fontes determinísticas via `cqw`**: `.slide-headline`/`.slide-corpo` trocaram
  `vw` por `cqw` (proporção da largura do slide; `.carrossel-viewport` virou
  `container-type: inline-size`). Resultado: tamanho **idêntico na tela e no
  download**, em qualquer monitor, e o badge fica exato. Título 6.4cqw (≈69px),
  corpo 2.8cqw (≈30px).
- **Recomendação de profissionais**: nota no painel (ideal no feed 1080×1350 —
  título 60–80px, corpo 28–36px). **Corpo padrão subiu de 27→30px** pra entrar
  de vez na faixa (mais legível no celular); título 69px já estava na faixa.
- Validado: `typecheck` ✅, `build` ✅ e navegador ✅ (badges A69px/a30px nos
  defaults, reatividade A+→80px, export medido 560→1080, sem erros no console).

### 2026-06-10 — +15 carrosséis novos no banco (gerados pelo Claude do chat)
- A pedido do Marcus ("5 opções por pilar"), escritos à mão pelo Claude desta
  conversa (conteúdo REAL, não mock) e adicionados ao `banco.ts`: **5 carrosséis
  de 6 slides por pilar = 15 carrosséis / 90 slides novos**, temas inéditos (sem
  repetir os existentes):
  - **Corpo:** água/hidratação · resultado demora (paciência) · dor nas costas/
    postura · mobilidade/corpo travado · açúcar/vício em doce.
  - **Mente:** notícias/doomscrolling · autocrítica · medo do julgamento ·
    indecisão · descanso com culpa.
  - **Essência:** comparação/contentamento · pressa/desacelerar · esperança em
    tempos difíceis · generosidade · soltar o controle.
- Mesma voz/estrutura do banco (Gancho→Erro/Mito→Estratégia→Prática→Virada→CTA),
  com acentuação correta e campo `foto` em todos os slides.
- Cada pilar passou de **3 → 8 variantes de 6 slides** (total 12 por pilar com os
  7/9). Entram na rotação do "Gerar outro" no tamanho 6 (padrão ao abrir).
- Validado: `typecheck` ✅, `build` ✅, navegador ✅ ("Variação 1 de 8" nos 3
  pilares; variação 8 do Essência "Quer controlar tudo?" renderiza certa, 6
  slides, sem erros no console).
- **Nada commitado** (aguardando OK do Marcus).

### 2026-06-10 — Provider `mock` (testar IA sem credencial)
- Pergunta do Marcus: dá pra usar a IA antes de ter a `ANTHROPIC_API_KEY`?
  Checado: este ambiente NÃO tem chave/token nem `ant`/`claude` CLI, então o app
  não faz chamadas reais daqui. (Conector/MCP liga ferramentas ao Claude, não o
  app à API — direção errada pro caso.)
- Solução: **4º adapter `mock`** (`src/lib/ai/mock.ts`), ativável com
  `AI_PROVIDER=mock`. Não chama API: a rota injeta um gerador (`mock: () => …`)
  que recombina o banco/contexto em conteúdo válido pelo MESMO schema dos
  providers reais. Cobre as 4 operações + legenda. ~600ms de latência simulada
  pro loading aparecer. Honesto: é conteúdo de teste, não criatividade real.
- `provider.ts`: `ArgsGeracaoJson` ganhou `mock?: () => T` (providers reais
  ignoram); `escolherProvider` aceita `mock`. Rota com builders `mockCarrossel`/
  `mockSlide`/`mockGanchos`/`mockLegenda` + hashtags por pilar.
- `.env.local` criado com `AI_PROVIDER=mock` (gitignored) — **já dá pra clicar
  todos os botões de IA agora**. Trocar p/ `anthropic` + chave quando tiver.
- Validado: `typecheck` ✅, `build` ✅, navegador ✅ (as 4 rotas devolvem 200 com
  conteúdo; "Gerar legenda" preenche o textarea; sem erros no console).
- Alternativa registrada: o Claude deste chat pode gerar conteúdo REAL sob
  demanda e escrever direto no `banco.ts` (sem chave, sem custo).

### 2026-06-10 — Fase C concluída: fluxo de publicação ✅
- **Legenda + hashtags por IA**: nova ação `legenda` em toda a stack da IA
  (schemas/prompts/route/ia-cliente). Gera legenda com gancho próprio (não copia
  o slide 1), CTA salvar/comentar/seguir e 8–15 hashtags. UI no painel de
  publicação: botão → textarea (legenda + hashtags com `#`) + "Copiar".
- **Formato 4:5**: seletor 1:1 (1080×1080) / 4:5 (1080×1350), estado `proporcao`
  persistido. Classe `.formato-45` no viewport muda o `aspect-ratio`; o export
  segue automático porque ancora na altura real do slide.
- **Download em ZIP** (`jszip`): `capturarSlideCanvas(i)` extraído de
  `baixarSlide`; `baixarTodosZip` empacota os N PNGs num único `.zip`
  (`carrossel-<pilar>-<n>slides.zip`). Substitui os N downloads com setTimeout.
- **Lista de fotos** (`.txt`): junta a sugestão de foto de cada slide (usando o
  estado EDITADO via `slideEfetivo` + `sugestaoFoto`) num roteiro de sessão de
  fotos. Aviso transitório ("Lista baixada", "ZIP baixado", "Copiado").
- Validado: `typecheck` ✅, `build` ✅ e no navegador: proporção 1:1↔4:5 (aspect
  e persistência), ZIP contém os 6 `slide-NN.png`, `.txt` com as fotos certas,
  legenda devolve 503 amigável sem chave. Console e servidor sem erros.
- **Pendência (igual à Fase B):** validar a qualidade da legenda/hashtags com
  `ANTHROPIC_API_KEY` real.
- **Nada commitado** (aguardando OK do Marcus).
- **Próximo passo:** Fase D — gestão de produção (marcar como postado +
  histórico) — ou Fase E (proteção/infra; senha urgente se já estiver na Vercel).

### 2026-06-10 — Fase B concluída: IA plena ✅
- **Camada de IA trocável** em `src/lib/ai/`: interface única `gerarJson`
  (system + prompt + schema zod) com 3 adapters — `anthropic.ts` (padrão,
  `claude-sonnet-4-6`, **structured outputs** via `messages.parse` +
  `zodOutputFormat`: JSON garantido), `google.ts` (`gemini-2.5-flash`, modo
  JSON + zod) e `openai.ts` (`gpt-5-mini`, modo JSON + zod). Seleção por
  `AI_PROVIDER`; `AI_MODEL` opcional sobrepõe o modelo. Deps novas:
  `@anthropic-ai/sdk` + `zod`.
- **Rota única `POST /api/ia`** (substitui a planejada `/api/gerar-carrossel`),
  corpo discriminado por `acao`: `carrossel` (pilar + tamanho + tema livre,
  evita repetir títulos do banco), `slide` (regenera 1 slide com o carrossel
  como contexto), `melhorar` (reescreve mantendo a ideia) e `ganchos`
  (4 variações de capa). Zod valida entrada e saída; erros viram HTTP
  amigável (400 pedido inválido · 503 falta chave · 502 resposta ruim).
  `maxDuration = 60` p/ Vercel. Chaves só no servidor.
- **UI**: campo "Tema livre p/ IA" (persistido) + painel "✨ IA no slide N"
  com Regenerar / Melhorar texto / Ganchos; escolher um gancho aplica na capa.
  Resultados de slide entram como **edições** (Fase A) — persistem e são
  reversíveis com "↺ Texto original". A IA recebe o estado REAL do carrossel:
  edições HTML voltam a texto via conversores em `src/lib/ia-cliente.ts`.
  Sugestão de foto da IA tem prioridade no painel de foto.
- Validado: `typecheck` ✅, `build` ✅, e no navegador: UI nova renderiza,
  400 com mensagem clara (até o refine "indice fora do carrossel"), 503
  amigável sem chave, botões desabilitam/reabilitam. **Teste com chave real
  pendente** (sem `ANTHROPIC_API_KEY` nesta máquina).
- Aprendizado de infra: rodar `npm run build` com o `npm run dev` aberto
  corrompe o `.next` do dev server ("Cannot find module './331.js'") —
  basta reiniciar o dev. Anotado pra evitar sustos.
- **Nada commitado** (aguardando OK do Marcus).
- **Próximo passo:** Fase C — publicação (legenda+hashtags, 4:5, ZIP, lista
  de fotos) — ou colocar a chave e validar a Fase B com geração real.

### 2026-06-10 — Fase A concluída: persistência local ✅
- **Edições de texto agora entram no estado** (`onBlur` nos contenteditable:
  ícone, título+acento, corpo, marca d'água), guardadas por slide em
  `edicoes: Record<chave, EdicaoSlide>` e re-aplicadas no render.
- **Chave de slide corrigida**: `pilar-tamanho-variação-slide` (antes não
  tinha o tamanho → ajustes/imagens colidiam entre carrosséis de 6/7/9).
- **Persistência**: novo `src/lib/persistencia.ts` — `localStorage` (edições,
  ajustes, modo limpo, fontes, cores, paleta ativa, extras de IA, pilar e
  tamanho selecionados) + **IndexedDB** para imagens de fundo (dataURLs
  grandes). Carga única ao montar (`hidratado` evita sobrescrever com padrões).
- **Upload otimizado**: novo `src/lib/imagem.ts` — redimensiona p/ máx. 2048px
  e re-encoda JPEG 0.85 (fotos de 10MB viram ~300KB; arquivos pequenos passam
  intactos).
- **Botão "↺ Texto original"** no painel de ajustes desfaz as edições de texto
  do slide aberto.
- Validado: `typecheck` ✅, `build` ✅ e teste no navegador ✅ (editar título →
  F5 mantém · trocar pilar e voltar mantém · restaurar volta ao banco · sem
  erros no console).
- **Nada commitado** (aguardando OK do Marcus).
- **Próximo passo:** Fase B — IA plena (adapters + rota + tema livre +
  regenerar slide + variações de gancho).

### 2026-06-10 — Análise completa + plano de melhorias A–E
- Análise do app inteiro com foco em criação de conteúdo. Principais achados:
  1. **Crítico:** edições `contentEditable` não entram no estado React — tudo
     se perde no F5 ou ao trocar pilar/variação/tamanho (textos, imagens,
     ajustes, carrosséis de IA).
  2. Bug: chave de slide (`pilar-index-slide`) não inclui o tamanho → ajustes
     e imagens colidem entre carrosséis de 6/7/9 slides.
  3. IA (antiga Fase 2) é o gargalo de conteúdo; vale ampliar com tema livre,
     regenerar slide único, melhorar texto e variações de gancho.
  4. Fluxo de publicação incompleto: sem legenda/hashtags, slide 1:1 (4:5
     rende mais no feed), download em N arquivos, sugestões de foto só uma a uma.
  5. Sem gestão do que já foi postado (risco de repetir conteúdo).
  6. Docs dessincronizados do deploy real (commits citam Vercel; docs diziam ❌).
- Plano reorganizado em **Fases A–E** no [taskplan.md](./taskplan.md)
  (A=persistência, B=IA plena, C=publicação, D=gestão, E=proteção/infra).
- Regra de trabalho: ao concluir cada fase, registrar aqui no progress.md.

### 2026-06-10 — Tamanhos de carrossel (6 / 7 / 9) + novo conteúdo
- Pesquisa: faixa ideal 7–10 slides; estrutura (gancho → 1 ideia/slide →
  resumo → CTA) > quantidade. Escolhidos **6 (compacto), 7 (equilibrado),
  9 (aprofundado)**; 7 preferido a 5.
- Seletor "Tamanho do carrossel" (6/7/9) nos controles; `tamanho` em estado.
- `itensBanco`/`lista` filtram as variantes por `slides.length === tamanho`
  (sem mudança de tipos). Render, cores, fonte, imagem e export já eram
  agnósticos ao nº de slides.
- **Conteúdo novo** em `banco.ts`: 2 variantes de 7 e 2 de 9 por pilar (12 novos
  carrosséis, ~96 slides), na voz atual (sem acentos), estrutura com tags
  Contexto/Aprofundamento/Exemplo/Resumo conforme o tamanho.
- Validado: `typecheck` ✅, `build` ✅, conferido (6/7/9 dots; "Gerar outro"
  alterna entre as 2 variantes de cada tamanho).

### 2026-06-10 — Seletor de fonte (título e corpo) + itálico
- Painel "Fontes" com **dois seletores** (Título e Corpo) e **itálico** em cada.
- 11 opções: Google (Playfair, Lora, DM Sans, Montserrat, Oswald, Bebas Neue —
  carregadas no `layout.tsx`) + sistema (Georgia, Times, Arial, Verdana, Courier).
- Fontes do slide usam vars próprias (`--slide-fonte-titulo`/`-corpo` +
  `--slide-estilo-*`), então **não afetam a fonte da interface**.
- Estado `fontes` em `page.tsx`; aplicado no `:root` por efeito.
- Validado: `typecheck` ✅, `build` ✅, conferido (título em Montserrat itálico).

### 2026-06-10 — Imagem de fundo por slide + modo limpo + margem do texto
- **Imagem de fundo por slide**: botão "Enviar/Trocar imagem" no painel de
  controles (input file → `FileReader`/dataURL, aplica ao slide aberto). A foto
  vira fundo `cover` com um degradê escuro (scrim) para leitura. Entra no PNG
  exportado (dataURL, sem CORS). Estado em `imagens: Record<chave, dataURL>`,
  chave = `pilar-index-slide`.
- **Modo limpo**: esconde número, círculo, linha, brilho e etiqueta, e ancora o
  texto na base (como na referência). **Automático** quando há imagem +
  **interruptor manual** ("Modo limpo") para usar sem foto. Estado em `limpos`.
- **Margem/ocupação do texto**: corpo deixou de ser limitado a `max-width: 88%`;
  agora usa a área inteira com a mesma margem (padding) do título — o texto pode
  crescer e ocupar mais espaço sem encostar nas bordas.
- Mexe em `page.tsx` (estado + funções `enviarImagem`/`removerImagem`/
  `alternarLimpo` + render) e `globals.css`. Sem novas dependências.
- Validado: `typecheck` ✅, `build` ✅, conferido no navegador (modo limpo +
  imagem de fundo + degradê).

### 2026-06-09 — Layout em duas colunas (preview fixo) + botões reorganizados
- Reorganização completa da página: cabeçalho no topo (largura total),
  **controles à esquerda** (painéis) e **preview do carrossel à direita, fixo
  (`position: sticky`)** — dá pra editar e ver o slide mudar sem rolar a página.
- No mobile, vira coluna única com o **preview no topo** (`order: -1`).
- Botões de pilar agora em grid compacto de 3 (corrigido o nome grudado na
  descrição); barra de geração com botões de largura total; paleta e ajustes
  viraram painéis com visual unificado.
- Sem mudança de lógica; `globals.css` + estrutura JSX de `page.tsx`.
- Validado: `typecheck` ✅, `build` ✅, conferido no navegador (desktop + mobile).

### 2026-06-09 — Edição de cor por elemento + marca d'água editável
- Antes só dava pra trocar 3 cores globais (primária/acento/fundo). Agora há um
  seletor de cor para **cada elemento** do slide: Fundo, Título, Destaque,
  Texto (corpo), Detalhes (linhas/divisor/tag/CTA/anel interno), Número & círculo
  e Marca d'água.
- Novo token `--cor-marca` (em `tipos.ts`, `pilares.ts`, `globals.css`) dá à
  marca d'água (`@handle`) cor independente do corpo do texto.
- Marca d'água agora é **contenteditable** (dá pra alterar o texto também).
- `page.tsx`: constante `CORES_EDITAVEIS` + `aplicarCorCustom(keyof Paleta)`.
- Validado: `typecheck` ✅, `build` ✅.

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
