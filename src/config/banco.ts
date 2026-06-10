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
        { tag: "Gancho", ic: "🔥", h: "Parou. Voltou.", a: "Agora vai de verdade.", c: ["Se você ficou meses longe da academia e travou na hora de voltar, esse carrossel é pra você.", "Sem culpa. Sem pressa. Com estratégia."] },
        { tag: "Erro comum", ic: "⚠️", h: "Não comece onde", a: "você parou.", c: ["O maior erro de quem volta é querer recuperar o tempo perdido na primeira semana.", "Seu corpo desacostumou. Reduza 40% da carga nos primeiros 14 dias.", "Progresso começa na humildade de recomeçar."] },
        { tag: "Estratégia", ic: "🧠", h: "3 treinos por semana", a: "valem mais que 5.", c: ["Frequência alta demais mata a motivação no início.", "Comprometa-se com 3 dias fixos, sem negociação, por 30 dias.", "Consistência de 80% supera perfeição de 30%."] },
        { tag: "Recuperação", ic: "🌙", h: "O treino constrói.", a: "O descanso transforma.", c: ["Quem volta de um hiato inflama mais que o normal.", "Sono e descanso não são opcionais, são parte do protocolo.", "Ignore isso e você para de novo em 3 semanas."] },
        { tag: "Virada", ic: "✨", h: "O corpo esquece.", a: "A mente não deixa.", c: ["A memória muscular é real: você recupera em semanas o que levou meses.", "O que sabota não é o físico, é a história de \"já era\" que você conta.", "Mude o roteiro. O recomeço é o movimento mais poderoso."] },
        { tag: "CTA", ic: "🙌", h: "Pronto pra", a: "começar de verdade?", c: ["Salva pra não esquecer.", "Marca quem precisa ler isso.", "E me segue pra mais sobre saúde física, mental e espiritual."] },
      ],
      [
        { tag: "Gancho", ic: "🔥", h: "Você não precisa", a: "de motivação.", c: ["Esperar a vontade chegar é o motivo de você nunca começar.", "A verdade sobre treinar mesmo nos dias difíceis."] },
        { tag: "Mito", ic: "⚠️", h: "Motivação é", a: "consequência.", c: ["Ninguém treina por anos movido a empolgação.", "A motivação aparece depois do movimento, não antes.", "Quem espera sentir vontade, espera pra sempre."] },
        { tag: "Sistema", ic: "🧠", h: "Regras vencem", a: "força de vontade.", c: ["Decida o horário do treino uma vez e pare de decidir todo dia.", "Cada decisão repetida gasta energia mental que você não tem.", "Automatize e a disciplina cuida do resto."] },
        { tag: "Prática", ic: "💪", h: "A regra dos", a: "5 minutos.", c: ["Nos dias sem vontade, prometa só 5 minutos.", "Quase sempre você continua. E no dia que para, manteve o hábito vivo.", "Aparecer vale mais que performar."] },
        { tag: "Virada", ic: "✨", h: "Disciplina é", a: "autocuidado.", c: ["Treinar no dia ruim não é punição, é respeito por quem você quer ser.", "Você não está se forçando, está se escolhendo.", "É aí que a identidade muda."] },
        { tag: "CTA", ic: "🙌", h: "Bora construir", a: "consistência?", c: ["Salva pra lembrar nos dias difíceis.", "Marca quem vive esperando motivação.", "Me segue pra mais sobre disciplina e saúde."] },
      ],
      [
        { tag: "Gancho", ic: "🔥", h: "Sentado o dia", a: "todo?", c: ["O corpo humano não foi feito pra cadeira de 8 horas.", "Como voltar a se mover sem virar atleta da noite pro dia."] },
        { tag: "Alerta", ic: "⚠️", h: "Sedentarismo é o", a: "novo cigarro.", c: ["Ficar parado o dia inteiro afeta coração, postura e humor.", "Não é falta de academia, é falta de movimento ao longo do dia.", "Pequenas pausas mudam o jogo."] },
        { tag: "Estratégia", ic: "🚶", h: "Movimento espalhado", a: "vence treino isolado.", c: ["1 hora de academia não anula 8 horas sentado.", "Levante a cada 50 minutos, caminhe, alongue.", "Seu corpo quer ser usado o dia todo."] },
        { tag: "Prática", ic: "🧠", h: "Comece ridiculamente", a: "pequeno.", c: ["10 minutos de caminhada por dia já mudam sua bioquímica.", "Não mire no perfeito, mire no possível e repetível.", "O hábito primeiro, a intensidade depois."] },
        { tag: "Virada", ic: "✨", h: "Seu corpo é", a: "a única casa.", c: ["Você vai morar nele a vida inteira, sem mudança de endereço.", "Cuidar do físico não é vaidade, é manutenção do que te carrega.", "Movimento é gratidão em ação."] },
        { tag: "CTA", ic: "🙌", h: "Vamos sair", a: "do sofá?", c: ["Salva como lembrete diário.", "Marca aquele amigo parado.", "Me segue pra mais sobre movimento e vitalidade."] },
      ],
      // ===== 7 slides · variante A: comer melhor sem dieta =====
      [
        { tag: "Gancho", ic: "🍎", h: "Dieta não funciona.", a: "Hábito funciona.", c: ["Você já tentou mil dietas e voltou pro mesmo lugar.", "O problema nunca foi força de vontade."] },
        { tag: "Mito", ic: "⚠️", h: "Cortar tudo de uma vez", a: "é receita de fracasso.", c: ["Restrição extrema gera compulsão depois.", "Seu corpo briga contra mudanças radicais.", "Menos drama, mais constância."] },
        { tag: "Estratégia", ic: "🥗", h: "Mude um prato", a: "por vez.", c: ["Comece pelo almoço: metade do prato de vegetais.", "Uma refeição melhor por dia já muda o mês.", "Pequeno e sustentável vence grande e impossível."] },
        { tag: "Prática", ic: "💧", h: "Água antes,", a: "comida depois.", c: ["Muita fome na verdade é sede disfarçada.", "Um copo de água antes de cada refeição.", "Simples, grátis e funciona."] },
        { tag: "Aprofundamento", ic: "🧠", h: "Comida de verdade", a: "sacia de verdade.", c: ["Ultraprocessado foi feito pra você querer mais.", "Comida real desliga a fome com menos.", "Quanto menos ingredientes no rótulo, melhor."] },
        { tag: "Virada", ic: "✨", h: "Você não precisa", a: "de perfeição.", c: ["Precisa de uma direção que aguente o ano todo.", "80% das escolhas boas já te levam longe.", "Progresso mora na média, não no dia perfeito."] },
        { tag: "CTA", ic: "🙌", h: "Bora comer", a: "com estratégia?", c: ["Salva pra lembrar no próximo prato.", "Marca quem vive de dieta.", "Me segue pra mais sobre saúde que dura."] },
      ],
      // ===== 7 slides · variante B: dormir mal sabota tudo =====
      [
        { tag: "Gancho", ic: "😴", h: "Dorme mal?", a: "O resto desanda.", c: ["Treino, dieta e foco caem junto com o sono.", "O pilar que quase ninguém cuida."] },
        { tag: "Erro", ic: "⚠️", h: "Tela na cama", a: "é sabotagem.", c: ["A luz azul engana o cérebro que ainda é dia.", "Você rola o feed e adia o sono sem perceber.", "O quarto não é escritório nem cinema."] },
        { tag: "Estratégia", ic: "🌙", h: "Horário fixo", a: "vence tudo.", c: ["Dormir e acordar na mesma hora regula o corpo.", "Até no fim de semana, o quanto der.", "Ritmo constante é sono profundo."] },
        { tag: "Prática", ic: "🛁", h: "Crie um ritual", a: "de desligar.", c: ["30 minutos sem tela antes de deitar.", "Luz baixa, banho morno, respiração lenta.", "O corpo aprende o sinal de descanso."] },
        { tag: "Aprofundamento", ic: "☕", h: "Café tem", a: "hora de parar.", c: ["Cafeína fica no corpo por até 8 horas.", "Aquele café das 17h ainda age na madrugada.", "Corte cedo e veja o sono mudar."] },
        { tag: "Virada", ic: "✨", h: "Dormir bem", a: "é produtividade.", c: ["Não é preguiça, é manutenção do seu cérebro.", "Quem dorme melhor decide e rende melhor.", "Descanso é parte do trabalho, não o oposto."] },
        { tag: "CTA", ic: "🙌", h: "Vamos dormir", a: "de verdade?", c: ["Salva pra aplicar hoje à noite.", "Marca quem vive cansado.", "Me segue pra mais sobre energia e saúde."] },
      ],
      // ===== 9 slides · variante C: treino em casa =====
      [
        { tag: "Gancho", ic: "🏠", h: "Sem academia?", a: "Sem desculpa.", c: ["Dá pra ficar em forma na sala de casa.", "Sem equipamento, sem deslocamento, sem custo."] },
        { tag: "Contexto", ic: "🌍", h: "Seu corpo é", a: "a academia.", c: ["Flexão, agachamento, prancha: tudo com seu peso.", "Os maiores ganhos vêm do básico bem feito.", "Você já tem tudo que precisa."] },
        { tag: "Erro", ic: "⚠️", h: "Querer 1 hora", a: "e travar em zero.", c: ["Mirar no treino perfeito é a maior desculpa.", "Melhor 15 minutos hoje que 1 hora amanhã.", "Feito vence planejado."] },
        { tag: "Estratégia", ic: "🧠", h: "3 movimentos,", a: "3 séries.", c: ["Empurrar, agachar, sustentar o corpo.", "Esse trio cobre o corpo inteiro.", "Simples o bastante pra nunca pular."] },
        { tag: "Prática", ic: "⏱️", h: "O treino dos", a: "15 minutos.", c: ["Sem descanso longo, um exercício atrás do outro.", "Intensidade curta queima e fortalece.", "Cabe até no dia mais corrido."] },
        { tag: "Exemplo", ic: "📅", h: "Segunda, quarta,", a: "sexta.", c: ["Três dias fixos e o resto é bônus.", "Marque na agenda como compromisso.", "Rotina tira o peso de decidir todo dia."] },
        { tag: "Virada", ic: "✨", h: "Disciplina em casa", a: "vira identidade.", c: ["Você deixa de tentar treinar e passa a ser quem treina.", "O ambiente não decide por você.", "A escolha é diária e é sua."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "comece pequeno.", c: ["Peso do corpo, 3 movimentos, 15 minutos.", "3 dias fixos na semana.", "Constância acima de intensidade."] },
        { tag: "CTA", ic: "🙌", h: "Bora treinar", a: "sem desculpa?", c: ["Salva esse plano pra começar hoje.", "Marca quem vive sem tempo.", "Me segue pra mais sobre corpo e disciplina."] },
      ],
      // ===== 9 slides · variante D: energia o dia todo =====
      [
        { tag: "Gancho", ic: "⚡", h: "Cansado sempre?", a: "Pode mudar.", c: ["Acordar arrastado não é normal, é sinal.", "Energia se constrói, não se compra em lata."] },
        { tag: "Contexto", ic: "🔋", h: "Energia vem", a: "de hábitos.", c: ["Sono, comida, movimento e luz do sol.", "Nenhum suplemento substitui o básico.", "O corpo paga o que você investe nele."] },
        { tag: "Erro", ic: "⚠️", h: "Café demais", a: "cobra depois.", c: ["A dose extra rouba energia do amanhã.", "Você vive de pico e queda o dia todo.", "Cafeína ajuda, não salva."] },
        { tag: "Estratégia", ic: "☀️", h: "Sol logo cedo", a: "liga o corpo.", c: ["Luz natural nos olhos pela manhã acerta seu relógio.", "10 minutos lá fora já fazem efeito.", "De graça e poderoso."] },
        { tag: "Prática", ic: "🚶", h: "Movimento curto", a: "a cada hora.", c: ["Levantar e andar reativa a circulação.", "Corpo parado avisa o cérebro pra desligar.", "Pequenas pausas, energia contínua."] },
        { tag: "Exemplo", ic: "🍳", h: "Começo do dia", a: "com proteína.", c: ["Café da manhã só de açúcar cai em 2 horas.", "Proteína sustenta a energia por mais tempo.", "Ovos valem mais que biscoito."] },
        { tag: "Virada", ic: "✨", h: "Energia é", a: "consequência.", c: ["Ela aparece quando você cuida do básico.", "Não espere disposição pra agir, aja e ela vem.", "O corpo recompensa quem o respeita."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "o básico ganha.", c: ["Sol cedo, proteína, movimento, sono.", "Menos café de muleta.", "Constância gera disposição."] },
        { tag: "CTA", ic: "🙌", h: "Vamos ter", a: "mais energia?", c: ["Salva pra montar sua rotina.", "Marca quem vive exausto.", "Me segue pra mais sobre vitalidade."] },
      ],
    ],
  },
  mente: {
    nome: "Mente Clara",
    paleta: "azul",
    variantes: [
      [
        { tag: "Gancho", ic: "🧠", h: "Mente que não", a: "desliga?", c: ["Pensamento atrás de pensamento, mesmo deitado tentando dormir.", "Como desacelerar uma cabeça que não para."] },
        { tag: "Verdade", ic: "🌀", h: "Ansiedade não é", a: "o inimigo.", c: ["Ela é um alarme tentando te proteger de algo que nem existe.", "Brigar com ela só aumenta o volume.", "O caminho é entender, não eliminar."] },
        { tag: "Prática", ic: "🌬️", h: "Respire mais", a: "devagar que ela.", c: ["Quando a mente acelera, o corpo segue. Inverta: desacelere o corpo.", "4 segundos inspirando, 6 soltando, por 2 minutos.", "O sistema nervoso obedece à respiração."] },
        { tag: "Estratégia", ic: "📝", h: "Tire da cabeça,", a: "ponha no papel.", c: ["Pensamento solto na mente parece gigante e eterno.", "Escrito, ele vira algo do tamanho real, que você resolve ou solta.", "A folha aguenta o que a cabeça não aguenta."] },
        { tag: "Virada", ic: "✨", h: "Você não é", a: "seus pensamentos.", c: ["Você é quem observa eles passarem.", "Essa distância é onde mora a paz que você procura.", "Observar já é começar a se libertar."] },
        { tag: "CTA", ic: "🙌", h: "Pronto pra", a: "respirar melhor?", c: ["Salva pra usar na próxima crise.", "Marca quem precisa ler isso hoje.", "Me segue pra mais sobre mente e equilíbrio."] },
      ],
      [
        { tag: "Gancho", ic: "🧠", h: "Não consegue", a: "focar em nada?", c: ["Cinco abas, três notificações, zero entregas.", "Como recuperar o foco num mundo desenhado pra te distrair."] },
        { tag: "Causa", ic: "📱", h: "Seu foco foi", a: "sequestrado.", c: ["Cada app é projetado por engenheiros pra roubar sua atenção.", "Não é fraqueza sua, é design contra você.", "Reconhecer isso já é meio caminho."] },
        { tag: "Estratégia", ic: "🎯", h: "Uma coisa", a: "por vez.", c: ["Multitarefa é mito: você só troca de tarefa rápido e perde nas duas.", "Escolha uma, feche o resto, dê 25 minutos inteiros a ela.", "Profundidade vence dispersão."] },
        { tag: "Prática", ic: "🌱", h: "Desintoxique a", a: "dopamina.", c: ["Tédio é onde nasce a criatividade e o foco profundo.", "Passe alguns minutos por dia sem tela, sem estímulo.", "Sua mente reaprende a se concentrar."] },
        { tag: "Virada", ic: "✨", h: "Atenção é a", a: "sua vida.", c: ["Onde vai sua atenção, vai sua existência, momento a momento.", "Distração crônica é uma vida vivida pela metade.", "Proteger o foco é proteger quem você é."] },
        { tag: "CTA", ic: "🙌", h: "Bora recuperar", a: "o foco?", c: ["Salva pra aplicar amanhã.", "Marca quem vive distraído.", "Me segue pra mais sobre clareza mental."] },
      ],
      [
        { tag: "Gancho", ic: "🧠", h: "Acorda já", a: "cansado?", c: ["A forma como você começa o dia decide as próximas 16 horas.", "Como criar manhãs que geram clareza, não correria."] },
        { tag: "Erro", ic: "⏰", h: "Celular não é", a: "despertador.", c: ["Pegar o telefone ao acordar é entregar sua mente ao caos alheio.", "Antes de você existir, já está reagindo.", "Os primeiros minutos são sagrados."] },
        { tag: "Estratégia", ic: "🌅", h: "Conquiste a", a: "primeira hora.", c: ["Luz natural, água, movimento e silêncio antes de qualquer tela.", "Você define o tom do dia em vez de receber o tom dos outros.", "Manhã intencional, dia intencional."] },
        { tag: "Prática", ic: "📝", h: "Escreva 3", a: "linhas.", c: ["Antes de começar, anote o que importa hoje, não a lista infinita.", "Clareza vem de escolher, não de fazer tudo.", "Três prioridades vencem trinta tarefas."] },
        { tag: "Virada", ic: "✨", h: "Disciplina de manhã", a: "é liberdade à tarde.", c: ["Quem domina o início para de ser arrastado pelo resto.", "A rotina não te prende, ela te devolve o controle.", "Ordem por fora gera calma por dentro."] },
        { tag: "CTA", ic: "🙌", h: "Vamos desenhar", a: "sua manhã?", c: ["Salva como guia.", "Marca quem acorda no caos.", "Me segue pra mais sobre clareza e rotina."] },
      ],
      // ===== 7 slides · variante A: pare de se comparar =====
      [
        { tag: "Gancho", ic: "📱", h: "Comparar cansa.", a: "E te paralisa.", c: ["A vida editada dos outros vira sua régua injusta.", "Como sair dessa armadilha silenciosa."] },
        { tag: "Erro", ic: "⚠️", h: "Você compara", a: "bastidor com palco.", c: ["Vê o melhor momento do outro e o seu dia comum.", "Comparação assim sempre te coloca atrás.", "O jogo já começa perdido."] },
        { tag: "Estratégia", ic: "🎯", h: "Sua única régua", a: "é você ontem.", c: ["Compare-se com quem você era, não com o feed.", "Progresso pessoal é o que importa.", "Sua corrida tem outro ponto de partida."] },
        { tag: "Prática", ic: "🧹", h: "Limpe quem", a: "te diminui.", c: ["Silencie contas que só geram inveja.", "Seu feed deveria inspirar, não adoecer.", "Você controla o que entra na sua mente."] },
        { tag: "Aprofundamento", ic: "🌱", h: "Inveja aponta", a: "um desejo.", c: ["O que te incomoda no outro mostra o que você quer.", "Use como bússola, não como veneno.", "Transforme comparação em direção."] },
        { tag: "Virada", ic: "✨", h: "Sua jornada", a: "é só sua.", c: ["Ninguém tem seu ponto de partida nem seu ritmo.", "Florescer fora de hora não existe.", "Foque no seu jardim."] },
        { tag: "CTA", ic: "🙌", h: "Bora parar", a: "de comparar?", c: ["Salva pra lembrar nos dias de feed.", "Marca quem vive se comparando.", "Me segue pra mais sobre mente em paz."] },
      ],
      // ===== 7 slides · variante B: procrastinação não é preguiça =====
      [
        { tag: "Gancho", ic: "⏳", h: "Adia tudo?", a: "Não é preguiça.", c: ["Procrastinar quase sempre é medo disfarçado.", "Entender a raiz é o primeiro passo."] },
        { tag: "Erro", ic: "⚠️", h: "Esperar vontade", a: "é nunca começar.", c: ["A motivação vem depois da ação, não antes.", "Quem espera sentir vontade espera pra sempre.", "Ação gera ânimo."] },
        { tag: "Estratégia", ic: "🎯", h: "Tarefa grande", a: "trava. Quebre.", c: ["O cérebro foge do que parece gigante.", "Divida num primeiro passo ridículo de pequeno.", "Pequeno demais pra recusar."] },
        { tag: "Prática", ic: "⏱️", h: "Só 2 minutos", a: "pra começar.", c: ["Combine consigo apenas iniciar por 2 minutos.", "Quase sempre você continua.", "O difícil é o começo, não o meio."] },
        { tag: "Aprofundamento", ic: "🧠", h: "Perfeito", a: "é inimigo do feito.", c: ["Esperar a condição perfeita é fugir com elegância.", "Feito imperfeito ensina, parado não.", "Entregue e ajuste depois."] },
        { tag: "Virada", ic: "✨", h: "Disciplina", a: "liberta.", c: ["Fazer o que precisa tira o peso da culpa.", "A tarefa adiada cansa mais que a feita.", "Agir hoje cuida da sua paz amanhã."] },
        { tag: "CTA", ic: "🙌", h: "Vamos", a: "começar agora?", c: ["Salva pra usar no próximo \"depois eu faço\".", "Marca quem vive adiando.", "Me segue pra mais sobre foco e ação."] },
      ],
      // ===== 9 slides · variante C: sua mente precisa de pausa =====
      [
        { tag: "Gancho", ic: "🧠", h: "Mente lotada?", a: "Faltou pausa.", c: ["Você não para nunca e estranha estar cansado.", "Descanso mental não é luxo, é necessidade."] },
        { tag: "Contexto", ic: "🌀", h: "Cabeça cheia", a: "não pensa bem.", c: ["Sem pausa, a mente só reage, não cria.", "Boas ideias nascem no espaço vazio.", "Você precisa de silêncio pra ouvir você."] },
        { tag: "Erro", ic: "⚠️", h: "Produtivo", a: "não é ocupado.", c: ["Estar sempre ocupado vira fuga de si mesmo.", "Mais tarefas não significam mais sentido.", "Correria constante adoece."] },
        { tag: "Estratégia", ic: "🌬️", h: "Pausas curtas,", a: "mente clara.", c: ["Alguns minutos sem estímulo recarregam o foco.", "Respire, olhe a janela, não pegue o celular.", "Vazio proposital não é perda de tempo."] },
        { tag: "Prática", ic: "📵", h: "Tédio é", a: "remédio.", c: ["Fique alguns minutos por dia sem tela nenhuma.", "A mente reaprende a se concentrar.", "Desconforto no início, clareza depois."] },
        { tag: "Exemplo", ic: "🚶", h: "Caminhe", a: "sem fone.", c: ["Andar em silêncio organiza pensamentos soltos.", "Muitas respostas aparecem em movimento.", "O corpo ajuda a mente a desembolar."] },
        { tag: "Virada", ic: "✨", h: "Descansar", a: "é estratégia.", c: ["A mente afiada vem do repouso, não do excesso.", "Quem pausa rende mais depois.", "Parar também é avançar."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "crie espaço.", c: ["Pausas curtas no dia.", "Minutos sem tela e sem fone.", "Vazio gera clareza e ideias."] },
        { tag: "CTA", ic: "🙌", h: "Bora dar", a: "uma pausa?", c: ["Salva pra lembrar de respirar.", "Marca quem vive no automático.", "Me segue pra mais sobre mente equilibrada."] },
      ],
      // ===== 9 slides · variante D: o peso de dar conta de tudo =====
      [
        { tag: "Gancho", ic: "🪫", h: "Tentando dar", a: "conta de tudo?", c: ["Carregar o mundo sozinho tem um preço alto.", "Quando tudo é prioridade, você quebra."] },
        { tag: "Contexto", ic: "⚖️", h: "Limite não é", a: "fraqueza.", c: ["Reconhecer o próprio limite é maturidade.", "Ninguém sustenta tudo o tempo todo.", "Força também é saber parar."] },
        { tag: "Erro", ic: "⚠️", h: "Dizer sim", a: "pra tudo.", c: ["Aceitar tudo é dizer não pra você mesmo.", "Cada sim sem limite rouba sua energia.", "Agradar todos cansa demais."] },
        { tag: "Estratégia", ic: "🛑", h: "Aprenda a", a: "dizer não.", c: ["Não é uma frase completa, sem culpa.", "Proteger seu tempo é proteger sua saúde.", "Quem respeita o próprio limite é respeitado."] },
        { tag: "Prática", ic: "📝", h: "Tire da cabeça,", a: "ponha no papel.", c: ["O que está solto na mente parece maior.", "Escrito, vira algo do tamanho real.", "A folha aguenta o que a cabeça não aguenta."] },
        { tag: "Exemplo", ic: "🤝", h: "Pedir ajuda", a: "é sabedoria.", c: ["Você não precisa carregar tudo sozinho.", "Dividir o peso não te faz menor.", "Gente forte também se apoia."] },
        { tag: "Virada", ic: "✨", h: "Cuidar de você", a: "vem primeiro.", c: ["Copo vazio não enche ninguém.", "Só sustenta os outros quem se sustenta.", "Autocuidado não é egoísmo, é base."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "ponha limites.", c: ["Diga não sem culpa.", "Tire o peso da cabeça, peça ajuda.", "Você primeiro, sempre."] },
        { tag: "CTA", ic: "🙌", h: "Vamos", a: "aliviar o peso?", c: ["Salva pra lembrar nos dias pesados.", "Marca quem carrega tudo sozinho.", "Me segue pra mais sobre equilíbrio."] },
      ],
    ],
  },
  essencia: {
    nome: "Essência Desperta",
    paleta: "roxo",
    variantes: [
      [
        { tag: "Gancho", ic: "🕊️", h: "Você se conhece", a: "de verdade?", c: ["Vivemos pra fora o tempo todo e esquecemos de olhar pra dentro.", "O reencontro com quem você realmente é."] },
        { tag: "Verdade", ic: "🌑", h: "O silêncio", a: "assusta.", c: ["A gente enche o dia de ruído pra não ouvir o que sente.", "Mas é no silêncio que as respostas aparecem.", "Coragem é ficar sozinho consigo."] },
        { tag: "Prática", ic: "🧘", h: "Sente. Respire.", a: "Observe.", c: ["Não precisa esvaziar a mente, só assistir o que vem sem julgar.", "Alguns minutos por dia já reorganizam o interior.", "Presença é o início de tudo."] },
        { tag: "Reflexão", ic: "🌱", h: "Quem você é", a: "sem os papéis?", c: ["Tire o cargo, o título, a opinião dos outros. O que sobra?", "Essa essência por baixo de tudo é o que importa cuidar.", "Você não é o que faz, é quem é."] },
        { tag: "Virada", ic: "✨", h: "Autoconhecimento", a: "é o caminho.", c: ["Toda transformação de fora começa por uma virada de dentro.", "Você não precisa virar outra pessoa, precisa se lembrar de quem é.", "O encontro é com você mesmo."] },
        { tag: "CTA", ic: "🙌", h: "Pronto pra se", a: "reencontrar?", c: ["Salva pra refletir depois.", "Marca quem precisa parar e se ouvir.", "Me segue pra mais sobre essência e autoconhecimento."] },
      ],
      [
        { tag: "Gancho", ic: "🕊️", h: "Sucesso sem", a: "sentido cansa.", c: ["Dá pra conquistar tudo e ainda sentir um vazio que não passa.", "A busca pelo que realmente move você."] },
        { tag: "Verdade", ic: "🌑", h: "Propósito não", a: "se acha, se constrói.", c: ["Ninguém acorda iluminado sabendo a missão da vida.", "Ele nasce do que te toca, do que você não consegue ignorar.", "Comece pelo que dói ou encanta."] },
        { tag: "Reflexão", ic: "🧭", h: "O que você faria", a: "de graça?", c: ["A resposta esconde uma pista do seu chamado.", "Onde o tempo voa e você se esquece de si, ali tem sentido.", "Preste atenção no que te acende."] },
        { tag: "Prática", ic: "🌱", h: "Sirva alguém", a: "hoje.", c: ["Propósito quase sempre aponta pra fora de você.", "Quando o que você faz ajuda outra pessoa, o vazio diminui.", "Sentido mora na entrega, não no acúmulo."] },
        { tag: "Virada", ic: "✨", h: "Você foi feito", a: "pra mais.", c: ["Não pra só pagar contas e repetir os dias até o fim.", "Existe um motivo por trás de você estar aqui agora.", "Descobri-lo é a aventura de uma vida."] },
        { tag: "CTA", ic: "🙌", h: "Vamos achar", a: "seu porquê?", c: ["Salva pra meditar nisso.", "Marca quem busca sentido.", "Me segue pra mais sobre propósito e essência."] },
      ],
      [
        { tag: "Gancho", ic: "🕊️", h: "Vivendo no", a: "automático?", c: ["A vida passa enquanto a gente pensa no próximo problema.", "Como voltar pro presente, o único lugar onde se vive."] },
        { tag: "Verdade", ic: "🌑", h: "O agora é tudo", a: "que existe.", c: ["O passado já foi, o futuro não chegou, só o presente é real.", "Ansiedade vive no amanhã, culpa vive no ontem.", "Paz vive aqui."] },
        { tag: "Prática", ic: "🙏", h: "Agradeça", a: "três coisas.", c: ["Toda manhã, nomeie três coisas simples pelas quais é grato.", "Gratidão treina o cérebro a ver o que já está bom.", "O que você agradece, se multiplica."] },
        { tag: "Reflexão", ic: "🌱", h: "Faça uma coisa", a: "de cada vez.", c: ["Comendo, coma. Andando, ande. Ouvindo, ouça de verdade.", "Presença plena transforma o ordinário em sagrado.", "A vida inteira está nos detalhes."] },
        { tag: "Virada", ic: "✨", h: "Você não tem mais", a: "tempo. Tem agora.", c: ["Esperar o momento perfeito é perder o momento que existe.", "A plenitude não está num futuro, está na sua atenção hoje.", "Acordar é escolher estar presente."] },
        { tag: "CTA", ic: "🙌", h: "Pronto pra", a: "estar presente?", c: ["Salva como lembrete.", "Marca quem vive no automático.", "Me segue pra mais sobre presença e espiritualidade."] },
      ],
      // ===== 7 slides · variante A: soltar o que já passou =====
      [
        { tag: "Gancho", ic: "🕊️", h: "Preso no", a: "passado?", c: ["Reviver o que doeu rouba o seu presente.", "Soltar não é esquecer, é libertar você."] },
        { tag: "Erro", ic: "⚠️", h: "Remoer", a: "não conserta.", c: ["Repassar a cena mil vezes não muda o final.", "Só mantém a ferida aberta.", "O passado já fez o que tinha que fazer."] },
        { tag: "Estratégia", ic: "🌑", h: "Aceitar", a: "o que foi.", c: ["Paz começa quando você para de brigar com o ocorrido.", "Aceitar não é concordar, é parar de sofrer.", "O que passou virou lição, não corrente."] },
        { tag: "Prática", ic: "🙏", h: "Perdoar", a: "liberta você.", c: ["Perdão não é pelo outro, é pela sua paz.", "O rancor pesa em quem carrega, não em quem feriu.", "Solte pra poder seguir."] },
        { tag: "Aprofundamento", ic: "🌱", h: "A ferida", a: "vira força.", c: ["O que te quebrou também pode te ensinar.", "Cicatriz é prova de que você passou e seguiu.", "Dor com sentido transforma."] },
        { tag: "Virada", ic: "✨", h: "O agora", a: "é onde se vive.", c: ["O passado já foi, só o presente é seu.", "Cada dia preso no ontem é um dia perdido hoje.", "Recomeçar é sempre possível."] },
        { tag: "CTA", ic: "🙌", h: "Bora", a: "soltar?", c: ["Salva pra reler nos dias difíceis.", "Marca quem precisa se libertar.", "Me segue pra mais sobre paz interior."] },
      ],
      // ===== 7 slides · variante B: seus valores, suas decisões =====
      [
        { tag: "Gancho", ic: "🧭", h: "Vivendo", a: "sem direção?", c: ["Sem valores claros, você decide pelo vento.", "Conhecer seus valores é ter uma bússola."] },
        { tag: "Erro", ic: "⚠️", h: "Decidir pra", a: "agradar os outros.", c: ["Viver a expectativa alheia te afasta de você.", "Aplauso de fora não preenche vazio de dentro.", "No fim, a conta de viver é sua."] },
        { tag: "Estratégia", ic: "📝", h: "Liste o que", a: "é inegociável.", c: ["Escreva os 3 valores que te definem.", "Família, honestidade, liberdade: o que é seu?", "O que está escrito fica mais fácil de honrar."] },
        { tag: "Prática", ic: "⚖️", h: "Decisão boa", a: "respeita valor.", c: ["Antes de escolher, pergunte: isso bate comigo?", "Decisão alinhada traz paz, mesmo se for difícil.", "O corpo sente quando você se trai."] },
        { tag: "Aprofundamento", ic: "🌱", h: "Coerência", a: "gera respeito.", c: ["Quem vive o que prega vira referência.", "Confiam em quem é o mesmo por dentro e fora.", "Integridade se constrói em escolhas pequenas."] },
        { tag: "Virada", ic: "✨", h: "Viver seus", a: "valores liberta.", c: ["Você para de se justificar pra todo mundo.", "A vida fica mais leve quando faz sentido.", "Direção clara, menos angústia."] },
        { tag: "CTA", ic: "🙌", h: "Vamos achar", a: "sua bússola?", c: ["Salva pra definir seus valores.", "Marca quem vive pra agradar.", "Me segue pra mais sobre propósito."] },
      ],
      // ===== 9 slides · variante C: fé que sustenta o dia a dia =====
      [
        { tag: "Gancho", ic: "🕊️", h: "Fé só na", a: "hora do aperto?", c: ["Muita gente lembra do alto só quando tudo desaba.", "Fé de verdade sustenta antes da tempestade."] },
        { tag: "Contexto", ic: "🌑", h: "Fé não é", a: "ausência de medo.", c: ["É seguir mesmo sentindo medo.", "Não promete vida fácil, promete companhia.", "Coragem com propósito."] },
        { tag: "Erro", ic: "⚠️", h: "Esperar tudo", a: "pronto do alto.", c: ["Fé sem ação vira desculpa pra parar.", "Ore como se dependesse Dele, aja como depende de você.", "O céu ajuda quem se move."] },
        { tag: "Estratégia", ic: "🙏", h: "Comece o dia", a: "em silêncio.", c: ["Alguns minutos de oração ou gratidão mudam o tom.", "Antes do mundo falar, ouça o essencial.", "O começo define o resto."] },
        { tag: "Prática", ic: "📖", h: "Alimente", a: "o que você crê.", c: ["Fé se fortalece com prática, não só com vontade.", "Leitura, comunidade, gratidão diária.", "O que você rega, cresce."] },
        { tag: "Exemplo", ic: "🤲", h: "Servir", a: "é fé em ação.", c: ["A crença aparece no como você trata o outro.", "Pequenos gestos valem mais que discursos.", "Amor em prática é a maior prova."] },
        { tag: "Virada", ic: "✨", h: "Confiar", a: "alivia o peso.", c: ["Você não precisa controlar tudo.", "Entregar o que não depende de você é descanso.", "Paz nasce da confiança."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "fé se pratica.", c: ["Comece o dia em silêncio.", "Alimente, sirva, confie.", "Fé vira ação, não só sentimento."] },
        { tag: "CTA", ic: "🙌", h: "Bora viver", a: "com fé?", c: ["Salva pra lembrar todo dia.", "Marca quem precisa ler isso.", "Me segue pra mais sobre espiritualidade."] },
      ],
      // ===== 9 slides · variante D: gratidão muda o que você vê =====
      [
        { tag: "Gancho", ic: "🙏", h: "Só vê o que", a: "falta?", c: ["A mente treinada na falta nunca acha o bastante.", "Gratidão muda a lente, não a vida."] },
        { tag: "Contexto", ic: "🌑", h: "O cérebro", a: "busca problema.", c: ["Por instinto, ele foca no que está errado.", "Sem treino, você só vê o que falta.", "Dá pra reeducar esse olhar."] },
        { tag: "Erro", ic: "⚠️", h: "Esperar tudo certo", a: "pra agradecer.", c: ["Quem só agradece quando dá tudo certo, raramente agradece.", "Gratidão não depende de perfeição.", "Sempre há algo bom agora."] },
        { tag: "Estratégia", ic: "📝", h: "Três coisas,", a: "toda manhã.", c: ["Anote 3 coisas simples pelas quais é grato.", "O café, a saúde, alguém que te ama.", "Treino diário reprograma o olhar."] },
        { tag: "Prática", ic: "🤲", h: "Agradeça", a: "em voz alta.", c: ["Dizer ou escrever fixa mais que só pensar.", "Agradeça a quem cruza seu dia.", "Gratidão dita vira hábito."] },
        { tag: "Exemplo", ic: "🌱", h: "No dia ruim,", a: "procure uma.", c: ["Mesmo no caos, existe uma coisa boa.", "Achar uma já muda a química do dia.", "Foco no bom não nega o difícil, equilibra."] },
        { tag: "Virada", ic: "✨", h: "O que você", a: "agradece, cresce.", c: ["A atenção alimenta o que você olha.", "Ver o bom atrai mais do bom.", "Gratidão é abundância em prática."] },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "treine o olhar.", c: ["Três gratidões toda manhã.", "Agradeça em voz alta.", "Até no dia ruim, ache uma."] },
        { tag: "CTA", ic: "🙌", h: "Vamos", a: "agradecer mais?", c: ["Salva como lembrete diário.", "Marca quem só vê a falta.", "Me segue pra mais sobre essência e gratidão."] },
      ],
    ],
  },
};
