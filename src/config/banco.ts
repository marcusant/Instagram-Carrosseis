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
      // ===== 7 slides · variante A: comer melhor sem dieta =====
      [
        { tag: "Gancho", ic: "🍎", h: "Dieta nao funciona.", a: "Habito funciona.", c: ["Voce ja tentou mil dietas e voltou pro mesmo lugar.", "O problema nunca foi forca de vontade."] },
        { tag: "Mito", ic: "⚠️", h: "Cortar tudo de uma vez", a: "e receita de fracasso.", c: ["Restricao extrema gera compulsao depois.", "Seu corpo briga contra mudancas radicais.", "Menos drama, mais constancia."] },
        { tag: "Estrategia", ic: "🥗", h: "Mude um prato", a: "por vez.", c: ["Comece pelo almoco: metade do prato de vegetais.", "Uma refeicao melhor por dia ja muda o mes.", "Pequeno e sustentavel vence grande e impossivel."] },
        { tag: "Pratica", ic: "💧", h: "Agua antes,", a: "comida depois.", c: ["Muita fome na verdade e sede disfarcada.", "Um copo de agua antes de cada refeicao.", "Simples, gratis e funciona."] },
        { tag: "Aprofundamento", ic: "🧠", h: "Comida de verdade", a: "sacia de verdade.", c: ["Ultraprocessado foi feito pra voce querer mais.", "Comida real desliga a fome com menos.", "Quanto menos ingredientes no rotulo, melhor."] },
        { tag: "Virada", ic: "✨", h: "Voce nao precisa", a: "de perfeicao.", c: ["Precisa de uma direcao que aguente o ano todo.", "80% das escolhas boas ja te levam longe.", "Progresso mora na media, nao no dia perfeito."] },
        { tag: "CTA", ic: "🙌", h: "Bora comer", a: "com estrategia?", c: ["Salva pra lembrar no proximo prato.", "Marca quem vive de dieta.", "Me segue pra mais sobre saude que dura."] },
      ],
      // ===== 7 slides · variante B: dormir mal sabota tudo =====
      [
        { tag: "Gancho", ic: "😴", h: "Dorme mal?", a: "O resto desanda.", c: ["Treino, dieta e foco caem junto com o sono.", "O pilar que quase ninguem cuida."] },
        { tag: "Erro", ic: "⚠️", h: "Tela na cama", a: "e sabotagem.", c: ["A luz azul engana o cerebro que ainda e dia.", "Voce rola o feed e adia o sono sem perceber.", "O quarto nao e escritorio nem cinema."] },
        { tag: "Estrategia", ic: "🌙", h: "Horario fixo", a: "vence tudo.", c: ["Dormir e acordar na mesma hora regula o corpo.", "Ate no fim de semana, o quanto der.", "Ritmo constante e sono profundo."] },
        { tag: "Pratica", ic: "🛁", h: "Crie um ritual", a: "de desligar.", c: ["30 minutos sem tela antes de deitar.", "Luz baixa, banho morno, respiracao lenta.", "O corpo aprende o sinal de descanso."] },
        { tag: "Aprofundamento", ic: "☕", h: "Cafe tem", a: "hora de parar.", c: ["Cafeina fica no corpo por ate 8 horas.", "Aquele cafe das 17h ainda age na madrugada.", "Corte cedo e veja o sono mudar."] },
        { tag: "Virada", ic: "✨", h: "Dormir bem", a: "e produtividade.", c: ["Nao e preguica, e manutencao do seu cerebro.", "Quem dorme melhor decide e rende melhor.", "Descanso e parte do trabalho, nao o oposto."] },
        { tag: "CTA", ic: "🙌", h: "Vamos dormir", a: "de verdade?", c: ["Salva pra aplicar hoje a noite.", "Marca quem vive cansado.", "Me segue pra mais sobre energia e saude."] },
      ],
      // ===== 9 slides · variante C: treino em casa =====
      [
        { tag: "Gancho", ic: "🏠", h: "Sem academia?", a: "Sem desculpa.", c: ["Da pra ficar em forma na sala de casa.", "Sem equipamento, sem deslocamento, sem custo."] },
        { tag: "Contexto", ic: "🌍", h: "Seu corpo e", a: "a academia.", c: ["Flexao, agachamento, prancha: tudo com seu peso.", "Os maiores ganhos vem do basico bem feito.", "Voce ja tem tudo que precisa."] },
        { tag: "Erro", ic: "⚠️", h: "Querer 1 hora", a: "e travar em zero.", c: ["Mirar no treino perfeito e a maior desculpa.", "Melhor 15 minutos hoje que 1 hora amanha.", "Feito vence planejado."] },
        { tag: "Estrategia", ic: "🧠", h: "3 movimentos,", a: "3 series.", c: ["Empurrar, agachar, sustentar o corpo.", "Esse trio cobre o corpo inteiro.", "Simples o bastante pra nunca pular."] },
        { tag: "Pratica", ic: "⏱️", h: "O treino dos", a: "15 minutos.", c: ["Sem descanso longo, um exercicio atras do outro.", "Intensidade curta queima e fortalece.", "Cabe ate no dia mais corrido."] },
        { tag: "Exemplo", ic: "📅", h: "Segunda, quarta,", a: "sexta.", c: ["Tres dias fixos e o resto e bonus.", "Marque na agenda como compromisso.", "Rotina tira o peso de decidir todo dia."] },
        { tag: "Virada", ic: "✨", h: "Disciplina em casa", a: "vira identidade.", c: ["Voce deixa de tentar treinar e passa a ser quem treina.", "O ambiente nao decide por voce.", "A escolha e diaria e e sua."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "comece pequeno.", c: ["Peso do corpo, 3 movimentos, 15 minutos.", "3 dias fixos na semana.", "Constancia acima de intensidade."] },
        { tag: "CTA", ic: "🙌", h: "Bora treinar", a: "sem desculpa?", c: ["Salva esse plano pra comecar hoje.", "Marca quem vive sem tempo.", "Me segue pra mais sobre corpo e disciplina."] },
      ],
      // ===== 9 slides · variante D: energia o dia todo =====
      [
        { tag: "Gancho", ic: "⚡", h: "Cansado sempre?", a: "Pode mudar.", c: ["Acordar arrastado nao e normal, e sinal.", "Energia se constroi, nao se compra em lata."] },
        { tag: "Contexto", ic: "🔋", h: "Energia vem", a: "de habitos.", c: ["Sono, comida, movimento e luz do sol.", "Nenhum suplemento substitui o basico.", "O corpo paga o que voce investe nele."] },
        { tag: "Erro", ic: "⚠️", h: "Cafe demais", a: "cobra depois.", c: ["A dose extra rouba energia do amanha.", "Voce vive de pico e queda o dia todo.", "Cafeina ajuda, nao salva."] },
        { tag: "Estrategia", ic: "☀️", h: "Sol logo cedo", a: "liga o corpo.", c: ["Luz natural nos olhos pela manha acerta seu relogio.", "10 minutos la fora ja fazem efeito.", "De graca e poderoso."] },
        { tag: "Pratica", ic: "🚶", h: "Movimento curto", a: "a cada hora.", c: ["Levantar e andar reativa a circulacao.", "Corpo parado avisa o cerebro pra desligar.", "Pequenas pausas, energia continua."] },
        { tag: "Exemplo", ic: "🍳", h: "Comeco do dia", a: "com proteina.", c: ["Cafe da manha so de acucar cai em 2 horas.", "Proteina sustenta a energia por mais tempo.", "Ovos valem mais que biscoito."] },
        { tag: "Virada", ic: "✨", h: "Energia e", a: "consequencia.", c: ["Ela aparece quando voce cuida do basico.", "Nao espere disposicao pra agir, aja e ela vem.", "O corpo recompensa quem o respeita."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "o basico ganha.", c: ["Sol cedo, proteina, movimento, sono.", "Menos cafe de muleta.", "Constancia gera disposicao."] },
        { tag: "CTA", ic: "🙌", h: "Vamos ter", a: "mais energia?", c: ["Salva pra montar sua rotina.", "Marca quem vive exausto.", "Me segue pra mais sobre vitalidade."] },
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
      // ===== 7 slides · variante A: pare de se comparar =====
      [
        { tag: "Gancho", ic: "📱", h: "Comparar cansa.", a: "E te paralisa.", c: ["A vida editada dos outros vira sua regua injusta.", "Como sair dessa armadilha silenciosa."] },
        { tag: "Erro", ic: "⚠️", h: "Voce compara", a: "bastidor com palco.", c: ["Ve o melhor momento do outro e o seu dia comum.", "Comparacao assim sempre te coloca atras.", "O jogo ja comeca perdido."] },
        { tag: "Estrategia", ic: "🎯", h: "Sua unica regua", a: "e voce ontem.", c: ["Compare-se com quem voce era, nao com o feed.", "Progresso pessoal e o que importa.", "Sua corrida tem outro ponto de partida."] },
        { tag: "Pratica", ic: "🧹", h: "Limpe quem", a: "te diminui.", c: ["Silencie contas que so geram inveja.", "Seu feed deveria inspirar, nao adoecer.", "Voce controla o que entra na sua mente."] },
        { tag: "Aprofundamento", ic: "🌱", h: "Inveja aponta", a: "um desejo.", c: ["O que te incomoda no outro mostra o que voce quer.", "Use como bussola, nao como veneno.", "Transforme comparacao em direcao."] },
        { tag: "Virada", ic: "✨", h: "Sua jornada", a: "e so sua.", c: ["Ninguem tem seu ponto de partida nem seu ritmo.", "Florescer fora de hora nao existe.", "Foque no seu jardim."] },
        { tag: "CTA", ic: "🙌", h: "Bora parar", a: "de comparar?", c: ["Salva pra lembrar nos dias de feed.", "Marca quem vive se comparando.", "Me segue pra mais sobre mente em paz."] },
      ],
      // ===== 7 slides · variante B: procrastinacao nao e preguica =====
      [
        { tag: "Gancho", ic: "⏳", h: "Adia tudo?", a: "Nao e preguica.", c: ["Procrastinar quase sempre e medo disfarcado.", "Entender a raiz e o primeiro passo."] },
        { tag: "Erro", ic: "⚠️", h: "Esperar vontade", a: "e nunca comecar.", c: ["A motivacao vem depois da acao, nao antes.", "Quem espera sentir vontade espera pra sempre.", "Acao gera animo."] },
        { tag: "Estrategia", ic: "🎯", h: "Tarefa grande", a: "trava. Quebre.", c: ["O cerebro foge do que parece gigante.", "Divida num primeiro passo ridiculo de pequeno.", "Pequeno demais pra recusar."] },
        { tag: "Pratica", ic: "⏱️", h: "So 2 minutos", a: "pra comecar.", c: ["Combine consigo apenas iniciar por 2 minutos.", "Quase sempre voce continua.", "O dificil e o comeco, nao o meio."] },
        { tag: "Aprofundamento", ic: "🧠", h: "Perfeito", a: "e inimigo do feito.", c: ["Esperar a condicao perfeita e fugir com elegancia.", "Feito imperfeito ensina, parado nao.", "Entregue e ajuste depois."] },
        { tag: "Virada", ic: "✨", h: "Disciplina", a: "liberta.", c: ["Fazer o que precisa tira o peso da culpa.", "A tarefa adiada cansa mais que a feita.", "Agir hoje cuida da sua paz amanha."] },
        { tag: "CTA", ic: "🙌", h: "Vamos", a: "comecar agora?", c: ["Salva pra usar no proximo depois eu faco.", "Marca quem vive adiando.", "Me segue pra mais sobre foco e acao."] },
      ],
      // ===== 9 slides · variante C: sua mente precisa de pausa =====
      [
        { tag: "Gancho", ic: "🧠", h: "Mente lotada?", a: "Faltou pausa.", c: ["Voce nao para nunca e estranha estar cansado.", "Descanso mental nao e luxo, e necessidade."] },
        { tag: "Contexto", ic: "🌀", h: "Cabeca cheia", a: "nao pensa bem.", c: ["Sem pausa, a mente so reage, nao cria.", "Boas ideias nascem no espaco vazio.", "Voce precisa de silencio pra ouvir voce."] },
        { tag: "Erro", ic: "⚠️", h: "Produtivo", a: "nao e ocupado.", c: ["Estar sempre ocupado vira fuga de si mesmo.", "Mais tarefas nao significam mais sentido.", "Correria constante adoece."] },
        { tag: "Estrategia", ic: "🌬️", h: "Pausas curtas,", a: "mente clara.", c: ["Alguns minutos sem estimulo recarregam o foco.", "Respire, olhe a janela, nao pegue o celular.", "Vazio proposital nao e perda de tempo."] },
        { tag: "Pratica", ic: "📵", h: "Tedio e", a: "remedio.", c: ["Fique alguns minutos por dia sem tela nenhuma.", "A mente reaprende a se concentrar.", "Desconforto no inicio, clareza depois."] },
        { tag: "Exemplo", ic: "🚶", h: "Caminhe", a: "sem fone.", c: ["Andar em silencio organiza pensamentos soltos.", "Muitas respostas aparecem em movimento.", "O corpo ajuda a mente a desembolar."] },
        { tag: "Virada", ic: "✨", h: "Descansar", a: "e estrategia.", c: ["A mente afiada vem do repouso, nao do excesso.", "Quem pausa rende mais depois.", "Parar tambem e avancar."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "crie espaco.", c: ["Pausas curtas no dia.", "Minutos sem tela e sem fone.", "Vazio gera clareza e ideias."] },
        { tag: "CTA", ic: "🙌", h: "Bora dar", a: "uma pausa?", c: ["Salva pra lembrar de respirar.", "Marca quem vive no automatico.", "Me segue pra mais sobre mente equilibrada."] },
      ],
      // ===== 9 slides · variante D: o peso de dar conta de tudo =====
      [
        { tag: "Gancho", ic: "🪫", h: "Tentando dar", a: "conta de tudo?", c: ["Carregar o mundo sozinho tem um preco alto.", "Quando tudo e prioridade, voce quebra."] },
        { tag: "Contexto", ic: "⚖️", h: "Limite nao e", a: "fraqueza.", c: ["Reconhecer o proprio limite e maturidade.", "Ninguem sustenta tudo o tempo todo.", "Forca tambem e saber parar."] },
        { tag: "Erro", ic: "⚠️", h: "Dizer sim", a: "pra tudo.", c: ["Aceitar tudo e dizer nao pra voce mesmo.", "Cada sim sem limite rouba sua energia.", "Agradar todos cansa demais."] },
        { tag: "Estrategia", ic: "🛑", h: "Aprenda a", a: "dizer nao.", c: ["Nao e uma frase completa, sem culpa.", "Proteger seu tempo e proteger sua saude.", "Quem respeita o proprio limite e respeitado."] },
        { tag: "Pratica", ic: "📝", h: "Tire da cabeca,", a: "ponha no papel.", c: ["O que esta solto na mente parece maior.", "Escrito, vira algo do tamanho real.", "A folha aguenta o que a cabeca nao aguenta."] },
        { tag: "Exemplo", ic: "🤝", h: "Pedir ajuda", a: "e sabedoria.", c: ["Voce nao precisa carregar tudo sozinho.", "Dividir o peso nao te faz menor.", "Gente forte tambem se apoia."] },
        { tag: "Virada", ic: "✨", h: "Cuidar de voce", a: "vem primeiro.", c: ["Copo vazio nao enche ninguem.", "So sustenta os outros quem se sustenta.", "Autocuidado nao e egoismo, e base."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "ponha limites.", c: ["Diga nao sem culpa.", "Tire o peso da cabeca, peca ajuda.", "Voce primeiro, sempre."] },
        { tag: "CTA", ic: "🙌", h: "Vamos", a: "aliviar o peso?", c: ["Salva pra lembrar nos dias pesados.", "Marca quem carrega tudo sozinho.", "Me segue pra mais sobre equilibrio."] },
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
      // ===== 7 slides · variante A: soltar o que ja passou =====
      [
        { tag: "Gancho", ic: "🕊️", h: "Preso no", a: "passado?", c: ["Reviver o que doeu rouba o seu presente.", "Soltar nao e esquecer, e libertar voce."] },
        { tag: "Erro", ic: "⚠️", h: "Remoer", a: "nao conserta.", c: ["Repassar a cena mil vezes nao muda o final.", "So mantem a ferida aberta.", "O passado ja fez o que tinha que fazer."] },
        { tag: "Estrategia", ic: "🌑", h: "Aceitar", a: "o que foi.", c: ["Paz comeca quando voce para de brigar com o ocorrido.", "Aceitar nao e concordar, e parar de sofrer.", "O que passou virou licao, nao corrente."] },
        { tag: "Pratica", ic: "🙏", h: "Perdoar", a: "liberta voce.", c: ["Perdao nao e pelo outro, e pela sua paz.", "O rancor pesa em quem carrega, nao em quem feriu.", "Solte pra poder seguir."] },
        { tag: "Aprofundamento", ic: "🌱", h: "A ferida", a: "vira forca.", c: ["O que te quebrou tambem pode te ensinar.", "Cicatriz e prova de que voce passou e seguiu.", "Dor com sentido transforma."] },
        { tag: "Virada", ic: "✨", h: "O agora", a: "e onde se vive.", c: ["O passado ja foi, so o presente e seu.", "Cada dia preso no ontem e um dia perdido hoje.", "Recomecar e sempre possivel."] },
        { tag: "CTA", ic: "🙌", h: "Bora", a: "soltar?", c: ["Salva pra reler nos dias dificeis.", "Marca quem precisa se libertar.", "Me segue pra mais sobre paz interior."] },
      ],
      // ===== 7 slides · variante B: seus valores, suas decisoes =====
      [
        { tag: "Gancho", ic: "🧭", h: "Vivendo", a: "sem direcao?", c: ["Sem valores claros, voce decide pelo vento.", "Conhecer seus valores e ter uma bussola."] },
        { tag: "Erro", ic: "⚠️", h: "Decidir pra", a: "agradar os outros.", c: ["Viver a expectativa alheia te afasta de voce.", "Aplauso de fora nao preenche vazio de dentro.", "No fim, a conta de viver e sua."] },
        { tag: "Estrategia", ic: "📝", h: "Liste o que", a: "e inegociavel.", c: ["Escreva os 3 valores que te definem.", "Familia, honestidade, liberdade: o que e seu?", "O que esta escrito fica mais facil de honrar."] },
        { tag: "Pratica", ic: "⚖️", h: "Decisao boa", a: "respeita valor.", c: ["Antes de escolher, pergunte: isso bate comigo?", "Decisao alinhada traz paz, mesmo se for dificil.", "O corpo sente quando voce se trai."] },
        { tag: "Aprofundamento", ic: "🌱", h: "Coerencia", a: "gera respeito.", c: ["Quem vive o que prega vira referencia.", "Confiam em quem e o mesmo por dentro e fora.", "Integridade se constroi em escolhas pequenas."] },
        { tag: "Virada", ic: "✨", h: "Viver seus", a: "valores liberta.", c: ["Voce para de se justificar pra todo mundo.", "A vida fica mais leve quando faz sentido.", "Direcao clara, menos angustia."] },
        { tag: "CTA", ic: "🙌", h: "Vamos achar", a: "sua bussola?", c: ["Salva pra definir seus valores.", "Marca quem vive pra agradar.", "Me segue pra mais sobre proposito."] },
      ],
      // ===== 9 slides · variante C: fe que sustenta o dia a dia =====
      [
        { tag: "Gancho", ic: "🕊️", h: "Fe so na", a: "hora do aperto?", c: ["Muita gente lembra do alto so quando tudo desaba.", "Fe de verdade sustenta antes da tempestade."] },
        { tag: "Contexto", ic: "🌑", h: "Fe nao e", a: "ausencia de medo.", c: ["E seguir mesmo sentindo medo.", "Nao promete vida facil, promete companhia.", "Coragem com proposito."] },
        { tag: "Erro", ic: "⚠️", h: "Esperar tudo", a: "pronto do alto.", c: ["Fe sem acao vira desculpa pra parar.", "Ore como se dependesse Dele, aja como depende de voce.", "O ceu ajuda quem se move."] },
        { tag: "Estrategia", ic: "🙏", h: "Comece o dia", a: "em silencio.", c: ["Alguns minutos de oracao ou gratidao mudam o tom.", "Antes do mundo falar, ouca o essencial.", "O comeco define o resto."] },
        { tag: "Pratica", ic: "📖", h: "Alimente", a: "o que voce cre.", c: ["Fe se fortalece com pratica, nao so com vontade.", "Leitura, comunidade, gratidao diaria.", "O que voce rega, cresce."] },
        { tag: "Exemplo", ic: "🤲", h: "Servir", a: "e fe em acao.", c: ["A crenca aparece no como voce trata o outro.", "Pequenos gestos valem mais que discursos.", "Amor em pratica e a maior prova."] },
        { tag: "Virada", ic: "✨", h: "Confiar", a: "alivia o peso.", c: ["Voce nao precisa controlar tudo.", "Entregar o que nao depende de voce e descanso.", "Paz nasce da confianca."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "fe se pratica.", c: ["Comece o dia em silencio.", "Alimente, sirva, confie.", "Fe vira acao, nao so sentimento."] },
        { tag: "CTA", ic: "🙌", h: "Bora viver", a: "com fe?", c: ["Salva pra lembrar todo dia.", "Marca quem precisa ler isso.", "Me segue pra mais sobre espiritualidade."] },
      ],
      // ===== 9 slides · variante D: gratidao muda o que voce ve =====
      [
        { tag: "Gancho", ic: "🙏", h: "So ve o que", a: "falta?", c: ["A mente treinada na falta nunca acha o bastante.", "Gratidao muda a lente, nao a vida."] },
        { tag: "Contexto", ic: "🌑", h: "O cerebro", a: "busca problema.", c: ["Por instinto, ele foca no que esta errado.", "Sem treino, voce so ve o que falta.", "Da pra reeducar esse olhar."] },
        { tag: "Erro", ic: "⚠️", h: "Esperar tudo certo", a: "pra agradecer.", c: ["Quem so agradece quando da tudo certo, raramente agradece.", "Gratidao nao depende de perfeicao.", "Sempre ha algo bom agora."] },
        { tag: "Estrategia", ic: "📝", h: "Tres coisas,", a: "toda manha.", c: ["Anote 3 coisas simples pelas quais e grato.", "O cafe, a saude, alguem que te ama.", "Treino diario reprograma o olhar."] },
        { tag: "Pratica", ic: "🤲", h: "Agradeca", a: "em voz alta.", c: ["Dizer ou escrever fixa mais que so pensar.", "Agradeca a quem cruza seu dia.", "Gratidao dita vira habito."] },
        { tag: "Exemplo", ic: "🌱", h: "No dia ruim,", a: "procure uma.", c: ["Mesmo no caos, existe uma coisa boa.", "Achar uma ja muda a quimica do dia.", "Foco no bom nao nega o dificil, equilibra."] },
        { tag: "Virada", ic: "✨", h: "O que voce", a: "agradece, cresce.", c: ["A atencao alimenta o que voce olha.", "Ver o bom atrai mais do bom.", "Gratidao e abundancia em pratica."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "treine o olhar.", c: ["Tres gratidoes toda manha.", "Agradeca em voz alta.", "Ate no dia ruim, ache uma."] },
        { tag: "CTA", ic: "🙌", h: "Vamos", a: "agradecer mais?", c: ["Salva como lembrete diario.", "Marca quem so ve a falta.", "Me segue pra mais sobre essencia e gratidao."] },
      ],
    ],
  },
};
