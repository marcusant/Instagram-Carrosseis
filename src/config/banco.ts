import type { Banco } from "./tipos";

/**
 * ⭐ BANCO INTERNO DE CONTEÚDO ⭐
 *
 * 3 pilares × 3 variações × 6 slides, escritos à mão.
 * Portado de `criador-carrosseis.html` (linhas 241–329).
 *
 * Este banco funciona 100% offline: o botão "Gerar outro deste pilar" só
 * alterna entre estas variações, SEM chamar nenhuma API. A geração por IA
 * (Fase 2) é um caminho separado e opcional.
 *
 * Cada slide: { tag, ic (ícone), h (título), a (acento), c (corpo[]) }
 */
export const banco: Banco = {
  corpo: {
    nome: "Corpo Ativo",
    paleta: "terroso",
    variantes: [
      [
        { tag: "Gancho", ic: "🔥", h: "Parou. Voltou.", a: "Agora vai de verdade.", c: ["Se voce ficou meses longe da academia e travou na hora de voltar, esse carrossel e pra voce.", "Sem culpa. Sem pressa. Com estrategia."] },
        { tag: "Erro comum", ic: "⚠️", h: "Nao comece onde", a: "voce parou.", c: ["O maior erro de quem volta e querer recuperar o tempo perdido na primeira semana.", "Seu corpo desacostumou. Reduza 40% da carga nos primeiros 14 dias.", "Progresso comeca na humildade de recomecar."] },
        { tag: "Estrategia", ic: "🧠", h: "3 treinos por semana", a: "valem mais que 5.", c: ["Frequencia alta demais mata a motivacao no inicio.", "Comprometa-se com 3 dias fixos, sem negociacao, por 30 dias.", "Consistencia de 80% supera perfeicao de 30%."] },
        { tag: "Recuperacao", ic: "🌙", h: "O treino constroi.", a: "O descanso transforma.", c: ["Quem volta de um hiato inflama mais que o normal.", "Sono e descanso nao sao opcionais, sao parte do protocolo.", "Ignore isso e voce para de novo em 3 semanas."] },
        { tag: "Virada", ic: "✨", h: "O corpo esquece.", a: "A mente nao deixa.", c: ["A memoria muscular e real: voce recupera em semanas o que levou meses.", "O que sabota nao e o fisico, e a historia de \"ja era\" que voce conta.", "Mude o roteiro. O recomeco e o movimento mais poderoso."] },
        { tag: "CTA", ic: "🙌", h: "Pronto pra", a: "comecar de verdade?", c: ["Salva pra nao esquecer.", "Marca quem precisa ler isso.", "E me segue pra mais sobre saude fisica, mental e espiritual."] },
      ],
      [
        { tag: "Gancho", ic: "🔥", h: "Voce nao precisa", a: "de motivacao.", c: ["Esperar a vontade chegar e o motivo de voce nunca comecar.", "A verdade sobre treinar mesmo nos dias dificeis."] },
        { tag: "Mito", ic: "⚠️", h: "Motivacao e", a: "consequencia.", c: ["Ninguem treina por anos movido a empolgacao.", "A motivacao aparece depois do movimento, nao antes.", "Quem espera sentir vontade, espera pra sempre."] },
        { tag: "Sistema", ic: "🧠", h: "Regras vencem", a: "forca de vontade.", c: ["Decida o horario do treino uma vez e pare de decidir todo dia.", "Cada decisao repetida gasta energia mental que voce nao tem.", "Automatize e a disciplina cuida do resto."] },
        { tag: "Pratica", ic: "💪", h: "A regra dos", a: "5 minutos.", c: ["Nos dias sem vontade, prometa so 5 minutos.", "Quase sempre voce continua. E no dia que para, manteve o habito vivo.", "Aparecer vale mais que performar."] },
        { tag: "Virada", ic: "✨", h: "Disciplina e", a: "autocuidado.", c: ["Treinar no dia ruim nao e punicao, e respeito por quem voce quer ser.", "Voce nao esta se forcando, esta se escolhendo.", "E ai que a identidade muda."] },
        { tag: "CTA", ic: "🙌", h: "Bora construir", a: "consistencia?", c: ["Salva pra lembrar nos dias dificeis.", "Marca quem vive esperando motivacao.", "Me segue pra mais sobre disciplina e saude."] },
      ],
      [
        { tag: "Gancho", ic: "🔥", h: "Sentado o dia", a: "todo?", c: ["O corpo humano nao foi feito pra cadeira de 8 horas.", "Como voltar a se mover sem virar atleta da noite pro dia."] },
        { tag: "Alerta", ic: "⚠️", h: "Sedentarismo e o", a: "novo cigarro.", c: ["Ficar parado o dia inteiro afeta coracao, postura e humor.", "Nao e falta de academia, e falta de movimento ao longo do dia.", "Pequenas pausas mudam o jogo."] },
        { tag: "Estrategia", ic: "🚶", h: "Movimento espalhado", a: "vence treino isolado.", c: ["1 hora de academia nao anula 8 horas sentado.", "Levante a cada 50 minutos, caminhe, alongue.", "Seu corpo quer ser usado o dia todo."] },
        { tag: "Pratica", ic: "🧠", h: "Comece ridiculamente", a: "pequeno.", c: ["10 minutos de caminhada por dia ja mudam sua bioquimica.", "Nao mire no perfeito, mire no possivel e repetivel.", "O habito primeiro, a intensidade depois."] },
        { tag: "Virada", ic: "✨", h: "Seu corpo e", a: "a unica casa.", c: ["Voce vai morar nele a vida inteira, sem mudanca de endereco.", "Cuidar do fisico nao e vaidade, e manutencao do que te carrega.", "Movimento e gratidao em acao."] },
        { tag: "CTA", ic: "🙌", h: "Vamos sair", a: "do sofa?", c: ["Salva como lembrete diario.", "Marca aquele amigo parado.", "Me segue pra mais sobre movimento e vitalidade."] },
      ],
    ],
  },
  mente: {
    nome: "Mente Clara",
    paleta: "azul",
    variantes: [
      [
        { tag: "Gancho", ic: "🧠", h: "Mente que nao", a: "desliga?", c: ["Pensamento atras de pensamento, mesmo deitado tentando dormir.", "Como desacelerar uma cabeca que nao para."] },
        { tag: "Verdade", ic: "🌀", h: "Ansiedade nao e", a: "o inimigo.", c: ["Ela e um alarme tentando te proteger de algo que nem existe.", "Brigar com ela so aumenta o volume.", "O caminho e entender, nao eliminar."] },
        { tag: "Pratica", ic: "🌬️", h: "Respire mais", a: "devagar que ela.", c: ["Quando a mente acelera, o corpo segue. Inverta: desacelere o corpo.", "4 segundos inspirando, 6 soltando, por 2 minutos.", "O sistema nervoso obedece a respiracao."] },
        { tag: "Estrategia", ic: "📝", h: "Tire da cabeca,", a: "ponha no papel.", c: ["Pensamento solto na mente parece gigante e eterno.", "Escrito, ele vira algo do tamanho real, que voce resolve ou solta.", "A folha aguenta o que a cabeca nao aguenta."] },
        { tag: "Virada", ic: "✨", h: "Voce nao e", a: "seus pensamentos.", c: ["Voce e quem observa eles passarem.", "Essa distancia e onde mora a paz que voce procura.", "Observar ja e comecar a se libertar."] },
        { tag: "CTA", ic: "🙌", h: "Pronto pra", a: "respirar melhor?", c: ["Salva pra usar na proxima crise.", "Marca quem precisa ler isso hoje.", "Me segue pra mais sobre mente e equilibrio."] },
      ],
      [
        { tag: "Gancho", ic: "🧠", h: "Nao consegue", a: "focar em nada?", c: ["Cinco abas, tres notificacoes, zero entregas.", "Como recuperar o foco num mundo desenhado pra te distrair."] },
        { tag: "Causa", ic: "📱", h: "Seu foco foi", a: "sequestrado.", c: ["Cada app e projetado por engenheiros pra roubar sua atencao.", "Nao e fraqueza sua, e design contra voce.", "Reconhecer isso ja e meio caminho."] },
        { tag: "Estrategia", ic: "🎯", h: "Uma coisa", a: "por vez.", c: ["Multitarefa e mito: voce so troca de tarefa rapido e perde nas duas.", "Escolha uma, feche o resto, de 25 minutos inteiros a ela.", "Profundidade vence dispersao."] },
        { tag: "Pratica", ic: "🌱", h: "Desintoxique a", a: "dopamina.", c: ["Tedio e onde nasce a criatividade e o foco profundo.", "Passe alguns minutos por dia sem tela, sem estimulo.", "Sua mente reaprende a se concentrar."] },
        { tag: "Virada", ic: "✨", h: "Atencao e a", a: "sua vida.", c: ["Onde vai sua atencao, vai sua existencia, momento a momento.", "Distracao cronica e uma vida vivida pela metade.", "Proteger o foco e proteger quem voce e."] },
        { tag: "CTA", ic: "🙌", h: "Bora recuperar", a: "o foco?", c: ["Salva pra aplicar amanha.", "Marca quem vive distraido.", "Me segue pra mais sobre clareza mental."] },
      ],
      [
        { tag: "Gancho", ic: "🧠", h: "Acorda ja", a: "cansado?", c: ["A forma como voce comeca o dia decide as proximas 16 horas.", "Como criar manhas que geram clareza, nao correria."] },
        { tag: "Erro", ic: "⏰", h: "Celular nao e", a: "despertador.", c: ["Pegar o telefone ao acordar e entregar sua mente ao caos alheio.", "Antes de voce existir, ja esta reagindo.", "Os primeiros minutos sao sagrados."] },
        { tag: "Estrategia", ic: "🌅", h: "Conquiste a", a: "primeira hora.", c: ["Luz natural, agua, movimento e silencio antes de qualquer tela.", "Voce define o tom do dia em vez de receber o tom dos outros.", "Manha intencional, dia intencional."] },
        { tag: "Pratica", ic: "📝", h: "Escreva 3", a: "linhas.", c: ["Antes de comecar, anote o que importa hoje, nao a lista infinita.", "Clareza vem de escolher, nao de fazer tudo.", "Tres prioridades vencem trinta tarefas."] },
        { tag: "Virada", ic: "✨", h: "Disciplina de manha", a: "e liberdade a tarde.", c: ["Quem domina o inicio para de ser arrastado pelo resto.", "A rotina nao te prende, ela te devolve o controle.", "Ordem por fora gera calma por dentro."] },
        { tag: "CTA", ic: "🙌", h: "Vamos desenhar", a: "sua manha?", c: ["Salva como guia.", "Marca quem acorda no caos.", "Me segue pra mais sobre clareza e rotina."] },
      ],
    ],
  },
  essencia: {
    nome: "Essencia Desperta",
    paleta: "roxo",
    variantes: [
      [
        { tag: "Gancho", ic: "🕊️", h: "Voce se conhece", a: "de verdade?", c: ["Vivemos pra fora o tempo todo e esquecemos de olhar pra dentro.", "O reencontro com quem voce realmente e."] },
        { tag: "Verdade", ic: "🌑", h: "O silencio", a: "assusta.", c: ["A gente enche o dia de ruido pra nao ouvir o que sente.", "Mas e no silencio que as respostas aparecem.", "Coragem e ficar sozinho consigo."] },
        { tag: "Pratica", ic: "🧘", h: "Sente. Respire.", a: "Observe.", c: ["Nao precisa esvaziar a mente, so assistir o que vem sem julgar.", "Alguns minutos por dia ja reorganizam o interior.", "Presenca e o inicio de tudo."] },
        { tag: "Reflexao", ic: "🌱", h: "Quem voce e", a: "sem os papeis?", c: ["Tire o cargo, o titulo, a opiniao dos outros. O que sobra?", "Essa essencia por baixo de tudo e o que importa cuidar.", "Voce nao e o que faz, e quem e."] },
        { tag: "Virada", ic: "✨", h: "Autoconhecimento", a: "e o caminho.", c: ["Toda transformacao de fora comeca por uma virada de dentro.", "Voce nao precisa virar outra pessoa, precisa se lembrar de quem e.", "O encontro e com voce mesmo."] },
        { tag: "CTA", ic: "🙌", h: "Pronto pra se", a: "reencontrar?", c: ["Salva pra refletir depois.", "Marca quem precisa parar e se ouvir.", "Me segue pra mais sobre essencia e autoconhecimento."] },
      ],
      [
        { tag: "Gancho", ic: "🕊️", h: "Sucesso sem", a: "sentido cansa.", c: ["Da pra conquistar tudo e ainda sentir um vazio que nao passa.", "A busca pelo que realmente move voce."] },
        { tag: "Verdade", ic: "🌑", h: "Proposito nao", a: "se acha, se constroi.", c: ["Ninguem acorda iluminado sabendo a missao da vida.", "Ele nasce do que te toca, do que voce nao consegue ignorar.", "Comece pelo que doi ou encanta."] },
        { tag: "Reflexao", ic: "🧭", h: "O que voce faria", a: "de graca?", c: ["A resposta esconde uma pista do seu chamado.", "Onde o tempo voa e voce se esquece de si, ali tem sentido.", "Preste atencao no que te acende."] },
        { tag: "Pratica", ic: "🌱", h: "Sirva alguem", a: "hoje.", c: ["Proposito quase sempre aponta pra fora de voce.", "Quando o que voce faz ajuda outra pessoa, o vazio diminui.", "Sentido mora na entrega, nao no acumulo."] },
        { tag: "Virada", ic: "✨", h: "Voce foi feito", a: "pra mais.", c: ["Nao pra so pagar contas e repetir os dias ate o fim.", "Existe um motivo por tras de voce estar aqui agora.", "Descobri-lo e a aventura de uma vida."] },
        { tag: "CTA", ic: "🙌", h: "Vamos achar", a: "seu porque?", c: ["Salva pra meditar nisso.", "Marca quem busca sentido.", "Me segue pra mais sobre proposito e essencia."] },
      ],
      [
        { tag: "Gancho", ic: "🕊️", h: "Vivendo no", a: "automatico?", c: ["A vida passa enquanto a gente pensa no proximo problema.", "Como voltar pro presente, o unico lugar onde se vive."] },
        { tag: "Verdade", ic: "🌑", h: "O agora e tudo", a: "que existe.", c: ["O passado ja foi, o futuro nao chegou, so o presente e real.", "Ansiedade vive no amanha, culpa vive no ontem.", "Paz vive aqui."] },
        { tag: "Pratica", ic: "🙏", h: "Agradeca", a: "tres coisas.", c: ["Toda manha, nomeie tres coisas simples pelas quais e grato.", "Gratidao treina o cerebro a ver o que ja esta bom.", "O que voce agradece, se multiplica."] },
        { tag: "Reflexao", ic: "🌱", h: "Faca uma coisa", a: "de cada vez.", c: ["Comendo, coma. Andando, ande. Ouvindo, ouca de verdade.", "Presenca plena transforma o ordinario em sagrado.", "A vida inteira esta nos detalhes."] },
        { tag: "Virada", ic: "✨", h: "Voce nao tem mais", a: "tempo. Tem agora.", c: ["Esperar o momento perfeito e perder o momento que existe.", "A plenitude nao esta num futuro, esta na sua atencao hoje.", "Acordar e escolher estar presente."] },
        { tag: "CTA", ic: "🙌", h: "Pronto pra", a: "estar presente?", c: ["Salva como lembrete.", "Marca quem vive no automatico.", "Me segue pra mais sobre presenca e espiritualidade."] },
      ],
    ],
  },
};
