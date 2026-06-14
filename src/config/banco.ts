import type { Banco } from "./tipos";

/**
 * ⭐ BANCO INTERNO DE CONTEÚDO ⭐
 *
 * 3 pilares × várias variações × 6–9 slides, escritos à mão.
 * Portado de `criador-carrosseis.html` (linhas 241–329).
 *
 * Este banco funciona 100% offline: o botão "Gerar outro deste pilar" só
 * alterna entre estas variações, SEM chamar nenhuma API. A geração por IA
 * (Fase 2) é um caminho separado e opcional.
 *
 * Cada slide: { tag, ic (ícone), h (título), a (acento), c (corpo[]), foto }
 * O campo `foto` é uma sugestão de imagem curada, lida do conteúdo do slide
 * (mostrada no painel; não aparece no PNG exportado).
 */
export const banco: Banco = {
  corpo: {
    nome: "Corpo Ativo",
    paleta: "terroso",
    variantes: [
      [
        { tag: "Gancho", ic: "🔥", h: "Parou. Voltou.", a: "Agora vai de verdade.", c: ["Se você ficou meses longe da academia e travou na hora de voltar, esse carrossel é pra você.", "Sem culpa. Sem pressa. Com estratégia."], foto: "Você entrando na academia decidido, bolsa no ombro e olhar firme pra câmera." },
        { tag: "Erro comum", ic: "⚠️", h: "Não comece onde", a: "você parou.", c: ["O maior erro de quem volta é querer recuperar o tempo perdido na primeira semana.", "Seu corpo desacostumou. Reduza 40% da carga nos primeiros 14 dias.", "Progresso começa na humildade de recomeçar."], foto: "Close das suas mãos ajustando uma carga leve no aparelho ou halter." },
        { tag: "Estratégia", ic: "🧠", h: "3 treinos por semana", a: "valem mais que 5.", c: ["Frequência alta demais mata a motivação no início.", "Comprometa-se com 3 dias fixos, sem negociação, por 30 dias.", "Consistência de 80% supera perfeição de 30%."], foto: "Sua agenda ou calendário com 3 dias de treino marcados na semana." },
        { tag: "Recuperação", ic: "🌙", h: "O treino constrói.", a: "O descanso transforma.", c: ["Quem volta de um hiato inflama mais que o normal.", "Sono e descanso não são opcionais, são parte do protocolo.", "Ignore isso e você para de novo em 3 semanas."], foto: "Você descansando relaxado após o treino, toalha no pescoço, respirando." },
        { tag: "Virada", ic: "✨", h: "O corpo esquece.", a: "A mente não deixa.", c: ["A memória muscular é real: você recupera em semanas o que levou meses.", "O que sabota não é o físico, é a história de \"já era\" que você conta.", "Mude o roteiro. O recomeço é o movimento mais poderoso."], foto: "Você se olhando no espelho da academia com confiança renovada." },
        { tag: "CTA", ic: "🙌", h: "Pronto pra", a: "começar de verdade?", c: ["Salva pra não esquecer.", "Marca quem precisa ler isso.", "E me segue pra mais sobre saúde física, mental e espiritual."], foto: "Você sorrindo, suado pós-treino, fazendo sinal de positivo pra câmera." },
      ],
      [
        { tag: "Gancho", ic: "🔥", h: "Você não precisa", a: "de motivação.", c: ["Esperar a vontade chegar é o motivo de você nunca começar.", "A verdade sobre treinar mesmo nos dias difíceis."], foto: "Você calçando o tênis de treino num dia comum, sem glamour." },
        { tag: "Mito", ic: "⚠️", h: "Motivação é", a: "consequência.", c: ["Ninguém treina por anos movido a empolgação.", "A motivação aparece depois do movimento, não antes.", "Quem espera sentir vontade, espera pra sempre."], foto: "Você já em movimento no treino, focado mesmo sem vontade aparente." },
        { tag: "Sistema", ic: "🧠", h: "Regras vencem", a: "força de vontade.", c: ["Decida o horário do treino uma vez e pare de decidir todo dia.", "Cada decisão repetida gasta energia mental que você não tem.", "Automatize e a disciplina cuida do resto."], foto: "Sua roupa e tênis de treino separados na noite anterior, prontos." },
        { tag: "Prática", ic: "💪", h: "A regra dos", a: "5 minutos.", c: ["Nos dias sem vontade, prometa só 5 minutos.", "Quase sempre você continua. E no dia que para, manteve o hábito vivo.", "Aparecer vale mais que performar."], foto: "Cronômetro do celular marcando 5 minutos ao lado do tapete." },
        { tag: "Virada", ic: "✨", h: "Disciplina é", a: "autocuidado.", c: ["Treinar no dia ruim não é punição, é respeito por quem você quer ser.", "Você não está se forçando, está se escolhendo.", "É aí que a identidade muda."], foto: "Você se olhando no espelho com respeito, logo após treinar." },
        { tag: "CTA", ic: "🙌", h: "Bora construir", a: "consistência?", c: ["Salva pra lembrar nos dias difíceis.", "Marca quem vive esperando motivação.", "Me segue pra mais sobre disciplina e saúde."], foto: "Você fazendo joia pra câmera, sorrindo, em roupa de treino." },
      ],
      [
        { tag: "Gancho", ic: "🔥", h: "Sentado o dia", a: "todo?", c: ["O corpo humano não foi feito pra cadeira de 8 horas.", "Como voltar a se mover sem virar atleta da noite pro dia."], foto: "Você se levantando da cadeira do trabalho pra se espreguiçar." },
        { tag: "Alerta", ic: "⚠️", h: "Sedentarismo é o", a: "novo cigarro.", c: ["Ficar parado o dia inteiro afeta coração, postura e humor.", "Não é falta de academia, é falta de movimento ao longo do dia.", "Pequenas pausas mudam o jogo."], foto: "Cadeira de escritório vazia vista de cima, com um tênis ao lado." },
        { tag: "Estratégia", ic: "🚶", h: "Movimento espalhado", a: "vence treino isolado.", c: ["1 hora de academia não anula 8 horas sentado.", "Levante a cada 50 minutos, caminhe, alongue.", "Seu corpo quer ser usado o dia todo."], foto: "Você se alongando numa pausa rápida, ainda com a roupa do dia." },
        { tag: "Prática", ic: "🧠", h: "Comece ridiculamente", a: "pequeno.", c: ["10 minutos de caminhada por dia já mudam sua bioquímica.", "Não mire no perfeito, mire no possível e repetível.", "O hábito primeiro, a intensidade depois."], foto: "Seus pés dando os primeiros passos numa caminhada curta na rua." },
        { tag: "Virada", ic: "✨", h: "Seu corpo é", a: "a única casa.", c: ["Você vai morar nele a vida inteira, sem mudança de endereço.", "Cuidar do físico não é vaidade, é manutenção do que te carrega.", "Movimento é gratidão em ação."], foto: "Foto sua ao ar livre, braços abertos, respirando fundo." },
        { tag: "CTA", ic: "🙌", h: "Vamos sair", a: "do sofá?", c: ["Salva como lembrete diário.", "Marca aquele amigo parado.", "Me segue pra mais sobre movimento e vitalidade."], foto: "Você se levantando do sofá com o tênis na mão, sorrindo decidido." },
      ],
      // ===== 7 slides · variante A: comer melhor sem dieta =====
      [
        { tag: "Gancho", ic: "🍎", h: "Dieta não funciona.", a: "Hábito funciona.", c: ["Você já tentou mil dietas e voltou pro mesmo lugar.", "O problema nunca foi força de vontade."], foto: "Mesa com um prato equilibrado e simples, sem cara de dieta." },
        { tag: "Mito", ic: "⚠️", h: "Cortar tudo de uma vez", a: "é receita de fracasso.", c: ["Restrição extrema gera compulsão depois.", "Seu corpo briga contra mudanças radicais.", "Menos drama, mais constância."], foto: "Geladeira aberta com comida real e variada, sem radicalismo." },
        { tag: "Estratégia", ic: "🥗", h: "Mude um prato", a: "por vez.", c: ["Comece pelo almoço: metade do prato de vegetais.", "Uma refeição melhor por dia já muda o mês.", "Pequeno e sustentável vence grande e impossível."], foto: "Seu almoço com metade do prato cheio de vegetais coloridos." },
        { tag: "Prática", ic: "💧", h: "Água antes,", a: "comida depois.", c: ["Muita fome na verdade é sede disfarçada.", "Um copo de água antes de cada refeição.", "Simples, grátis e funciona."], foto: "Um copo de água ao lado do prato, antes de começar a refeição." },
        { tag: "Aprofundamento", ic: "🧠", h: "Comida de verdade", a: "sacia de verdade.", c: ["Ultraprocessado foi feito pra você querer mais.", "Comida real desliga a fome com menos.", "Quanto menos ingredientes no rótulo, melhor."], foto: "Ingredientes frescos sobre a bancada: legumes, ovos, frutas." },
        { tag: "Virada", ic: "✨", h: "Você não precisa", a: "de perfeição.", c: ["Precisa de uma direção que aguente o ano todo.", "80% das escolhas boas já te levam longe.", "Progresso mora na média, não no dia perfeito."], foto: "Você comendo tranquilo, sem culpa, num momento real do dia." },
        { tag: "CTA", ic: "🙌", h: "Bora comer", a: "com estratégia?", c: ["Salva pra lembrar no próximo prato.", "Marca quem vive de dieta.", "Me segue pra mais sobre saúde que dura."], foto: "Você preparando uma refeição simples na cozinha, sorrindo." },
      ],
      // ===== 7 slides · variante B: dormir mal sabota tudo =====
      [
        { tag: "Gancho", ic: "😴", h: "Dorme mal?", a: "O resto desanda.", c: ["Treino, dieta e foco caem junto com o sono.", "O pilar que quase ninguém cuida."], foto: "Você acordando cansado, esfregando os olhos na cama." },
        { tag: "Erro", ic: "⚠️", h: "Tela na cama", a: "é sabotagem.", c: ["A luz azul engana o cérebro que ainda é dia.", "Você rola o feed e adia o sono sem perceber.", "O quarto não é escritório nem cinema."], foto: "Quarto escuro com a luz do celular iluminando o rosto na cama." },
        { tag: "Estratégia", ic: "🌙", h: "Horário fixo", a: "vence tudo.", c: ["Dormir e acordar na mesma hora regula o corpo.", "Até no fim de semana, o quanto der.", "Ritmo constante é sono profundo."], foto: "Despertador na mesa de cabeceira marcando a mesma hora de sempre." },
        { tag: "Prática", ic: "🛁", h: "Crie um ritual", a: "de desligar.", c: ["30 minutos sem tela antes de deitar.", "Luz baixa, banho morno, respiração lenta.", "O corpo aprende o sinal de descanso."], foto: "Ritual noturno: luz baixa, chá ou banho morno, nenhuma tela." },
        { tag: "Aprofundamento", ic: "☕", h: "Café tem", a: "hora de parar.", c: ["Cafeína fica no corpo por até 8 horas.", "Aquele café das 17h ainda age na madrugada.", "Corte cedo e veja o sono mudar."], foto: "Xícara de café ao lado de um relógio marcando o fim da tarde." },
        { tag: "Virada", ic: "✨", h: "Dormir bem", a: "é produtividade.", c: ["Não é preguiça, é manutenção do seu cérebro.", "Quem dorme melhor decide e rende melhor.", "Descanso é parte do trabalho, não o oposto."], foto: "Você acordando descansado e se alongando ao nascer do dia." },
        { tag: "CTA", ic: "🙌", h: "Vamos dormir", a: "de verdade?", c: ["Salva pra aplicar hoje à noite.", "Marca quem vive cansado.", "Me segue pra mais sobre energia e saúde."], foto: "Quarto aconchegante e arrumado, clima de descanso, você relaxado." },
      ],
      // ===== 9 slides · variante C: treino em casa =====
      [
        { tag: "Gancho", ic: "🏠", h: "Sem academia?", a: "Sem desculpa.", c: ["Dá pra ficar em forma na sala de casa.", "Sem equipamento, sem deslocamento, sem custo."], foto: "Você treinando na sala de casa, em roupa simples, sem aparelhos." },
        { tag: "Contexto", ic: "🌍", h: "Seu corpo é", a: "a academia.", c: ["Flexão, agachamento, prancha: tudo com seu peso.", "Os maiores ganhos vêm do básico bem feito.", "Você já tem tudo que precisa."], foto: "Você fazendo uma flexão ou prancha no chão da sala." },
        { tag: "Erro", ic: "⚠️", h: "Querer 1 hora", a: "e travar em zero.", c: ["Mirar no treino perfeito é a maior desculpa.", "Melhor 15 minutos hoje que 1 hora amanhã.", "Feito vence planejado."], foto: "Relógio marcando 15 minutos ao lado do tapete em casa." },
        { tag: "Estratégia", ic: "🧠", h: "3 movimentos,", a: "3 séries.", c: ["Empurrar, agachar, sustentar o corpo.", "Esse trio cobre o corpo inteiro.", "Simples o bastante pra nunca pular."], foto: "Você no meio de um agachamento, na sala de casa." },
        { tag: "Prática", ic: "⏱️", h: "O treino dos", a: "15 minutos.", c: ["Sem descanso longo, um exercício atrás do outro.", "Intensidade curta queima e fortalece.", "Cabe até no dia mais corrido."], foto: "Cronômetro do celular marcando 15:00 durante o treino em casa." },
        { tag: "Exemplo", ic: "📅", h: "Segunda, quarta,", a: "sexta.", c: ["Três dias fixos e o resto é bônus.", "Marque na agenda como compromisso.", "Rotina tira o peso de decidir todo dia."], foto: "Calendário na parede com segunda, quarta e sexta circuladas." },
        { tag: "Virada", ic: "✨", h: "Disciplina em casa", a: "vira identidade.", c: ["Você deixa de tentar treinar e passa a ser quem treina.", "O ambiente não decide por você.", "A escolha é diária e é sua."], foto: "Você satisfeito após treinar em casa, sentado no tapete." },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "comece pequeno.", c: ["Peso do corpo, 3 movimentos, 15 minutos.", "3 dias fixos na semana.", "Constância acima de intensidade."], foto: "Tapete de treino estendido na sala, pronto pra usar." },
        { tag: "CTA", ic: "🙌", h: "Bora treinar", a: "sem desculpa?", c: ["Salva esse plano pra começar hoje.", "Marca quem vive sem tempo.", "Me segue pra mais sobre corpo e disciplina."], foto: "Você fazendo positivo, suado, no tapete da sala de casa." },
      ],
      // ===== 9 slides · variante D: energia o dia todo =====
      [
        { tag: "Gancho", ic: "⚡", h: "Cansado sempre?", a: "Pode mudar.", c: ["Acordar arrastado não é normal, é sinal.", "Energia se constrói, não se compra em lata."], foto: "Você acordando arrastado, mas se levantando da cama." },
        { tag: "Contexto", ic: "🔋", h: "Energia vem", a: "de hábitos.", c: ["Sono, comida, movimento e luz do sol.", "Nenhum suplemento substitui o básico.", "O corpo paga o que você investe nele."], foto: "Mesa com os pilares do dia: copo d'água, ovos, tênis e luz do sol." },
        { tag: "Erro", ic: "⚠️", h: "Café demais", a: "cobra depois.", c: ["A dose extra rouba energia do amanhã.", "Você vive de pico e queda o dia todo.", "Cafeína ajuda, não salva."], foto: "Várias xícaras de café vazias acumuladas na mesa de trabalho." },
        { tag: "Estratégia", ic: "☀️", h: "Sol logo cedo", a: "liga o corpo.", c: ["Luz natural nos olhos pela manhã acerta seu relógio.", "10 minutos lá fora já fazem efeito.", "De graça e poderoso."], foto: "Você tomando o sol da manhã na janela ou na varanda." },
        { tag: "Prática", ic: "🚶", h: "Movimento curto", a: "a cada hora.", c: ["Levantar e andar reativa a circulação.", "Corpo parado avisa o cérebro pra desligar.", "Pequenas pausas, energia contínua."], foto: "Você se levantando da mesa pra esticar o corpo numa pausa." },
        { tag: "Exemplo", ic: "🍳", h: "Começo do dia", a: "com proteína.", c: ["Café da manhã só de açúcar cai em 2 horas.", "Proteína sustenta a energia por mais tempo.", "Ovos valem mais que biscoito."], foto: "Café da manhã com ovos e comida real, sem açúcar, na mesa." },
        { tag: "Virada", ic: "✨", h: "Energia é", a: "consequência.", c: ["Ela aparece quando você cuida do básico.", "Não espere disposição pra agir, aja e ela vem.", "O corpo recompensa quem o respeita."], foto: "Você disposto e sorrindo, começando o dia com ânimo." },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "o básico ganha.", c: ["Sol cedo, proteína, movimento, sono.", "Menos café de muleta.", "Constância gera disposição."], foto: "Mesa da manhã: sol pela janela, ovos, copo d'água e tênis." },
        { tag: "CTA", ic: "🙌", h: "Vamos ter", a: "mais energia?", c: ["Salva pra montar sua rotina.", "Marca quem vive exausto.", "Me segue pra mais sobre vitalidade."], foto: "Você cheio de energia, braços pra cima, na luz da manhã." },
      ],
      // ===== 6 slides · novos temas (gerados por IA do chat, 2026-06-10) =====
      // Água / hidratação
      [
        { tag: "Gancho", ic: "💧", h: "Bebe pouca água?", a: "Seu corpo sente.", c: ["Dor de cabeça, cansaço e fome falsa muitas vezes são só sede.", "O pilar mais barato da saúde é o mais esquecido."], foto: "Um copo ou garrafa de água na mão, em close, com luz natural." },
        { tag: "Erro", ic: "⚠️", h: "Esperar a sede", a: "é beber tarde demais.", c: ["Quando a sede chega, você já está desidratado.", "O corpo avisa atrasado, não na hora certa.", "Beba antes de sentir falta."], foto: "Uma garrafa de água vazia sobre a mesa de trabalho." },
        { tag: "Estratégia", ic: "🚰", h: "Água na mão", a: "vira água na boca.", c: ["Deixe uma garrafa sempre à vista.", "O que está perto é o que você consome.", "Visível é metade do hábito."], foto: "Garrafa reutilizável cheia ao lado do computador." },
        { tag: "Prática", ic: "🌅", h: "Comece o dia", a: "com um copo.", c: ["Antes do café, um copo de água.", "Você acorda desidratado de horas sem beber.", "Reidratar é o primeiro gesto do dia."], foto: "Um copo de água na mesa de cabeceira logo ao acordar." },
        { tag: "Virada", ic: "✨", h: "Hidratar é", a: "energia de graça.", c: ["Não custa nada e muda disposição, pele e foco.", "Pequeno hábito, efeito no corpo todo.", "O básico bem feito vence suplemento."], foto: "Você bebendo água e respirando fundo, com disposição." },
        { tag: "CTA", ic: "🙌", h: "Bora beber", a: "mais água?", c: ["Salva como lembrete diário.", "Marca quem vive esquecendo.", "Me segue pra mais sobre saúde simples."], foto: "Você sorrindo com a garrafa de água na mão." },
      ],
      // Resultado demora / paciência
      [
        { tag: "Gancho", ic: "⏳", h: "Sem resultado?", a: "Talvez seja cedo.", c: ["Você treina há semanas e cobra o corpo de meses.", "A verdade sobre o tempo que a mudança real leva."], foto: "Você no espelho da academia avaliando o progresso." },
        { tag: "Mito", ic: "📉", h: "Resultado rápido", a: "some rápido.", c: ["O que muda em dias volta em dias.", "Corpo construído com pressa não se sustenta.", "Atalho é ilusão cara."], foto: "Calendário com várias semanas de treino marcadas." },
        { tag: "Estratégia", ic: "📊", h: "Meça processo,", a: "não só espelho.", c: ["Foque em comparecer, dormir e comer bem.", "O resultado é consequência do hábito.", "Cuide da causa, o efeito vem."], foto: "Caderno de treino com a frequência da semana anotada." },
        { tag: "Prática", ic: "📸", h: "Compare com", a: "você de antes.", c: ["Foto de hoje contra a de semanas atrás.", "O dia a dia esconde a evolução.", "A distância revela o quanto mudou."], foto: "Duas fotos suas lado a lado, antes e depois." },
        { tag: "Virada", ic: "✨", h: "Constância vence", a: "intensidade.", c: ["Quem fica é quem chega.", "Resultado mora na repetição, não no pico.", "Confie no tempo do processo."], foto: "Você treinando tranquilo, no seu próprio ritmo." },
        { tag: "CTA", ic: "🙌", h: "Bora confiar", a: "no processo?", c: ["Salva pra lembrar nos dias de ansiedade.", "Marca quem desiste cedo.", "Me segue pra mais sobre constância."], foto: "Você fazendo positivo, sereno, depois do treino." },
      ],
      // Dor nas costas / postura
      [
        { tag: "Gancho", ic: "🪑", h: "Dor nas costas?", a: "Olhe a cadeira.", c: ["Horas sentado torto cobram caro da coluna.", "Como aliviar sem virar paciente de consultório."], foto: "Você sentado torto na frente do computador." },
        { tag: "Alerta", ic: "⚠️", h: "Postura ruim", a: "vira dor crônica.", c: ["O corpo aguenta, até não aguentar mais.", "Pequenos desvios o dia todo se acumulam.", "A conta chega depois."], foto: "Silhueta curvada sobre o celular, vista de lado." },
        { tag: "Estratégia", ic: "🧍", h: "Ajuste a tela,", a: "alivie a coluna.", c: ["Topo da tela na altura dos olhos.", "Pés no chão, costas apoiadas.", "Ergonomia é remédio diário."], foto: "Estação de trabalho ajustada, tela na altura certa." },
        { tag: "Prática", ic: "🤸", h: "Levante a cada", a: "50 minutos.", c: ["Um minuto em pé reseta a postura.", "Movimento curto destrava o corpo.", "Sentar menos já é tratar a dor."], foto: "Você se levantando pra alongar numa pausa." },
        { tag: "Virada", ic: "✨", h: "Coluna saudável", a: "é base de tudo.", c: ["Ela te carrega o dia inteiro.", "Cuidar da postura cuida do humor também.", "Corpo alinhado, mente mais leve."], foto: "Você em pé, postura ereta, respirando." },
        { tag: "CTA", ic: "🙌", h: "Bora cuidar", a: "da coluna?", c: ["Salva pra aplicar hoje no trabalho.", "Marca quem vive com dor nas costas.", "Me segue pra mais sobre corpo saudável."], foto: "Você alongando as costas, aliviado." },
      ],
      // Mobilidade / corpo travado
      [
        { tag: "Gancho", ic: "🦵", h: "Corpo travado?", a: "Falta mover.", c: ["Levantar do chão virou tarefa difícil?", "Mobilidade é a saúde que quase ninguém treina."], foto: "Você tentando se abaixar com o corpo rígido." },
        { tag: "Erro", ic: "⚠️", h: "Só força", a: "sem amplitude.", c: ["Músculo forte e articulação travada é desequilíbrio.", "Mover bem importa tanto quanto levantar peso.", "Rigidez hoje é lesão amanhã."], foto: "Close de um joelho ou ombro durante o movimento." },
        { tag: "Estratégia", ic: "🧘", h: "5 minutos", a: "de mobilidade.", c: ["Quadril, ombro e tornozelo todo dia.", "Pouco e constante destrava o corpo.", "Amplitude se recupera com prática."], foto: "Você fazendo mobilidade de quadril no chão." },
        { tag: "Prática", ic: "🌀", h: "Mexa o que", a: "você não usa.", c: ["Gire as articulações que ficam paradas o dia todo.", "O corpo enferruja no que não move.", "Use pra não perder."], foto: "Você girando os ombros numa pausa em casa." },
        { tag: "Virada", ic: "✨", h: "Mover bem", a: "é envelhecer leve.", c: ["Mobilidade hoje é autonomia lá na frente.", "Corpo que dobra é corpo que dura.", "Cuide do movimento, não só do músculo."], foto: "Você se agachando com facilidade, leve." },
        { tag: "CTA", ic: "🙌", h: "Bora destravar", a: "o corpo?", c: ["Salva pra fazer todo dia.", "Marca quem vive duro.", "Me segue pra mais sobre corpo funcional."], foto: "Você sorrindo após alongar, soltinho." },
      ],
      // Açúcar / vício em doce
      [
        { tag: "Gancho", ic: "🍫", h: "Vício em doce?", a: "Não é fraqueza.", c: ["O açúcar foi feito pra você querer sempre mais.", "Como sair da montanha-russa sem sofrer."], foto: "Um doce na mão, em close, com olhar de desejo." },
        { tag: "Mito", ic: "⚠️", h: "Cortar tudo", a: "de uma vez.", c: ["Proibição total gera compulsão depois.", "O corpo briga contra o radicalismo.", "Menos drama, mais constância."], foto: "Um pote de doces guardado no armário." },
        { tag: "Estratégia", ic: "🍓", h: "Troque, não", a: "só elimine.", c: ["Fruta, castanha ou cacau no lugar do industrializado.", "Dê ao corpo um doce de verdade.", "Substituir é mais fácil que resistir."], foto: "Uma fruta ou punhado de castanhas sobre a mesa." },
        { tag: "Prática", ic: "⏰", h: "Espere 10", a: "minutos.", c: ["A vontade de doce vem em onda e passa.", "Beba água e ocupe a mente um pouco.", "Adiar quebra o impulso."], foto: "Relógio marcando 10 minutos ao lado de uma fruta." },
        { tag: "Virada", ic: "✨", h: "Menos açúcar,", a: "mais energia.", c: ["Some o pico e a queda do dia inteiro.", "O paladar reaprende a gostar do simples.", "Liberdade é não depender do doce."], foto: "Você disposto, sem o cansaço que o açúcar deixa." },
        { tag: "CTA", ic: "🙌", h: "Bora domar", a: "o açúcar?", c: ["Salva pra lembrar na próxima vontade.", "Marca quem é viciado em doce.", "Me segue pra mais sobre alimentação real."], foto: "Você sorrindo segurando uma fruta no lugar do doce." },
      ],
      // ===== 7 slides · novos temas (2026-06-10) =====
      // Água (7)
      [
        { tag: "Gancho", ic: "💧", h: "Bebe pouca água?", a: "Seu corpo sente.", c: ["Dor de cabeça, cansaço e fome falsa muitas vezes são só sede.", "O pilar mais barato da saúde é o mais esquecido."], foto: "Um copo ou garrafa de água na mão, em close, com luz natural." },
        { tag: "Erro", ic: "⚠️", h: "Esperar a sede", a: "é beber tarde demais.", c: ["Quando a sede chega, você já está desidratado.", "O corpo avisa atrasado.", "Beba antes de sentir falta."], foto: "Uma garrafa de água vazia sobre a mesa." },
        { tag: "Estratégia", ic: "🚰", h: "Água na mão", a: "vira água na boca.", c: ["Deixe uma garrafa sempre à vista.", "O que está perto é o que se consome.", "Visível é metade do hábito."], foto: "Garrafa reutilizável cheia ao lado do computador." },
        { tag: "Prática", ic: "🌅", h: "Comece o dia", a: "com um copo.", c: ["Antes do café, um copo de água.", "Você acorda desidratado de horas sem beber.", "Reidratar é o primeiro gesto do dia."], foto: "Um copo de água na mesa de cabeceira ao acordar." },
        { tag: "Aprofundamento", ic: "☕", h: "Café e álcool", a: "desidratam.", c: ["Cada xícara pede um copo de água extra.", "Eles tiram mais do que repõem.", "Compense pra não ficar no negativo."], foto: "Uma xícara de café ao lado de um copo de água." },
        { tag: "Virada", ic: "✨", h: "Hidratar é", a: "energia de graça.", c: ["Muda disposição, pele e foco.", "Pequeno hábito, efeito no corpo todo.", "O básico vence suplemento."], foto: "Você bebendo água e respirando fundo, disposto." },
        { tag: "CTA", ic: "🙌", h: "Bora beber", a: "mais água?", c: ["Salva como lembrete diário.", "Marca quem vive esquecendo.", "Me segue pra mais sobre saúde simples."], foto: "Você sorrindo com a garrafa de água na mão." },
      ],
      // Postura / costas (7)
      [
        { tag: "Gancho", ic: "🪑", h: "Dor nas costas?", a: "Olhe a cadeira.", c: ["Horas sentado torto cobram caro da coluna.", "Como aliviar sem virar paciente de consultório."], foto: "Você sentado torto na frente do computador." },
        { tag: "Alerta", ic: "⚠️", h: "Postura ruim", a: "vira dor crônica.", c: ["O corpo aguenta, até não aguentar.", "Desvios pequenos se acumulam.", "A conta chega depois."], foto: "Silhueta curvada sobre o celular, de lado." },
        { tag: "Estratégia", ic: "🧍", h: "Ajuste a tela,", a: "alivie a coluna.", c: ["Topo da tela na altura dos olhos.", "Pés no chão, costas apoiadas.", "Ergonomia é remédio diário."], foto: "Estação de trabalho ajustada, tela na altura certa." },
        { tag: "Prática", ic: "🤸", h: "Levante a cada", a: "50 minutos.", c: ["Um minuto em pé reseta a postura.", "Movimento curto destrava.", "Sentar menos já trata a dor."], foto: "Você se levantando pra alongar numa pausa." },
        { tag: "Aprofundamento", ic: "💪", h: "Costas fortes", a: "doem menos.", c: ["Músculo fraco deixa a coluna sozinha.", "Fortaleça core e dorsais aos poucos.", "Força é proteção."], foto: "Você fazendo um exercício leve de costas." },
        { tag: "Virada", ic: "✨", h: "Coluna saudável", a: "é base de tudo.", c: ["Ela te carrega o dia inteiro.", "Postura cuidada melhora o humor.", "Corpo alinhado, mente leve."], foto: "Você em pé, postura ereta, respirando." },
        { tag: "CTA", ic: "🙌", h: "Bora cuidar", a: "da coluna?", c: ["Salva pra aplicar hoje no trabalho.", "Marca quem vive com dor nas costas.", "Me segue pra mais sobre corpo saudável."], foto: "Você alongando as costas, aliviado." },
      ],
      // Açúcar (7)
      [
        { tag: "Gancho", ic: "🍫", h: "Vício em doce?", a: "Não é fraqueza.", c: ["O açúcar foi feito pra você querer sempre mais.", "Como sair da montanha-russa sem sofrer."], foto: "Um doce na mão, em close, com olhar de desejo." },
        { tag: "Mito", ic: "⚠️", h: "Cortar tudo", a: "de uma vez.", c: ["Proibição total gera compulsão.", "O corpo briga com o radicalismo.", "Menos drama, mais constância."], foto: "Um pote de doces guardado no armário." },
        { tag: "Estratégia", ic: "🍓", h: "Troque, não", a: "só elimine.", c: ["Fruta, castanha ou cacau no lugar.", "Dê ao corpo um doce de verdade.", "Substituir é mais fácil que resistir."], foto: "Uma fruta ou punhado de castanhas sobre a mesa." },
        { tag: "Prática", ic: "⏰", h: "Espere 10", a: "minutos.", c: ["A vontade vem em onda e passa.", "Beba água e ocupe a mente.", "Adiar quebra o impulso."], foto: "Relógio marcando 10 minutos ao lado de uma fruta." },
        { tag: "Aprofundamento", ic: "🏷️", h: "Açúcar tem", a: "muitos nomes.", c: ["Xarope, maltodextrina, dextrose: tudo é açúcar.", "Ele se esconde até no salgado.", "Ler o rótulo abre os olhos."], foto: "Um rótulo de produto sendo lido de perto." },
        { tag: "Virada", ic: "✨", h: "Menos açúcar,", a: "mais energia.", c: ["Some o pico e a queda do dia.", "O paladar reaprende o simples.", "Liberdade é não depender do doce."], foto: "Você disposto, sem o cansaço do açúcar." },
        { tag: "CTA", ic: "🙌", h: "Bora domar", a: "o açúcar?", c: ["Salva pra próxima vontade.", "Marca quem é viciado em doce.", "Me segue pra mais sobre alimentação real."], foto: "Você com uma fruta no lugar do doce." },
      ],
      // ===== 9 slides · novos temas (2026-06-10) =====
      // Água (9)
      [
        { tag: "Gancho", ic: "💧", h: "Bebe pouca água?", a: "Seu corpo sente.", c: ["Cansaço, dor de cabeça e fome falsa às vezes são só sede.", "O hábito mais barato é o mais ignorado."], foto: "Um copo de água na mão, em close, com luz natural." },
        { tag: "Contexto", ic: "🧠", h: "Você é", a: "feito de água.", c: ["A maior parte do corpo depende dela pra funcionar.", "Falta pouca já derruba foco e energia.", "Hidratar é manutenção básica."], foto: "Um copo de água contra a luz da janela." },
        { tag: "Erro", ic: "⚠️", h: "Esperar a sede", a: "é beber tarde.", c: ["Quando ela chega, você já desidratou.", "O corpo avisa atrasado.", "Beba antes de sentir falta."], foto: "Uma garrafa de água vazia na mesa." },
        { tag: "Estratégia", ic: "🚰", h: "Deixe a garrafa", a: "à vista.", c: ["O que está perto é o que se consome.", "Visível é metade do hábito.", "Facilite o caminho da água."], foto: "Garrafa reutilizável ao lado do computador." },
        { tag: "Prática", ic: "🌅", h: "Um copo", a: "ao acordar.", c: ["Você passou horas sem beber dormindo.", "Reidratar é o primeiro gesto do dia.", "Comece hidratado."], foto: "Um copo de água na cabeceira ao acordar." },
        { tag: "Exemplo", ic: "☕", h: "Café pede", a: "água junto.", c: ["Cada xícara desidrata um pouco.", "Um copo de água por café equilibra.", "Reponha o que ele tira."], foto: "Café ao lado de um copo de água." },
        { tag: "Virada", ic: "✨", h: "Hidratar é", a: "energia de graça.", c: ["Muda disposição, pele e foco.", "Efeito no corpo todo, custo zero.", "O básico vence suplemento."], foto: "Você disposto, bebendo água." },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "beba sempre.", c: ["Garrafa à vista, copo ao acordar.", "Compense café e álcool.", "Não espere a sede."], foto: "Garrafa cheia pronta pra usar." },
        { tag: "CTA", ic: "🙌", h: "Bora beber", a: "mais água?", c: ["Salva como lembrete diário.", "Marca quem esquece de beber.", "Me segue pra mais sobre saúde simples."], foto: "Você sorrindo com a garrafa de água." },
      ],
      // Postura / costas (9)
      [
        { tag: "Gancho", ic: "🪑", h: "Dor nas costas?", a: "Olhe a cadeira.", c: ["Horas sentado torto cobram caro da coluna.", "Como aliviar sem virar paciente."], foto: "Você sentado torto na frente do computador." },
        { tag: "Contexto", ic: "🌍", h: "Sentar demais", a: "é o novo vilão.", c: ["O corpo não foi feito pra 8 horas parado.", "A coluna sofre calada o dia todo.", "Não é idade, é hábito."], foto: "Uma cadeira de escritório vista de cima." },
        { tag: "Erro", ic: "⚠️", h: "Postura ruim", a: "vira dor crônica.", c: ["O corpo aguenta, até não aguentar.", "Desvios pequenos se acumulam.", "A conta chega depois."], foto: "Silhueta curvada sobre o celular." },
        { tag: "Estratégia", ic: "🧍", h: "Ajuste a tela,", a: "alivie a coluna.", c: ["Topo da tela na altura dos olhos.", "Pés no chão, costas apoiadas.", "Ergonomia é remédio diário."], foto: "Estação de trabalho ajustada." },
        { tag: "Prática", ic: "🤸", h: "Levante a cada", a: "50 minutos.", c: ["Um minuto em pé reseta a postura.", "Movimento curto destrava.", "Sentar menos já trata a dor."], foto: "Você levantando pra alongar numa pausa." },
        { tag: "Exemplo", ic: "💪", h: "Fortaleça", a: "o que sustenta.", c: ["Core e costas seguram a coluna.", "Comece com exercícios leves.", "Força é proteção diária."], foto: "Você num exercício leve de core." },
        { tag: "Virada", ic: "✨", h: "Coluna saudável", a: "é base de tudo.", c: ["Ela te carrega o dia inteiro.", "Postura cuidada melhora o humor.", "Corpo alinhado, mente leve."], foto: "Você ereto, respirando." },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "mexa e ajuste.", c: ["Tela na altura, costas apoiadas.", "Levante a cada 50 minutos.", "Fortaleça core e costas."], foto: "Alongamento de costas numa pausa." },
        { tag: "CTA", ic: "🙌", h: "Bora cuidar", a: "da coluna?", c: ["Salva pra aplicar hoje.", "Marca quem vive com dor.", "Me segue pra mais sobre corpo saudável."], foto: "Você alongando as costas, aliviado." },
      ],
      // Açúcar (9)
      [
        { tag: "Gancho", ic: "🍫", h: "Vício em doce?", a: "Não é fraqueza.", c: ["O açúcar foi feito pra você querer sempre mais.", "Como sair da montanha-russa sem sofrer."], foto: "Um doce na mão, em close, com olhar de desejo." },
        { tag: "Contexto", ic: "🧠", h: "Doce ativa", a: "recompensa.", c: ["O cérebro pede mais a cada dose.", "Não é falta de força, é química.", "Entender já tira a culpa."], foto: "Doces coloridos sobre a mesa." },
        { tag: "Mito", ic: "⚠️", h: "Cortar tudo", a: "de uma vez.", c: ["Proibição total gera compulsão.", "O corpo briga com o radicalismo.", "Menos drama, mais constância."], foto: "Um pote de doces guardado no armário." },
        { tag: "Estratégia", ic: "🍓", h: "Troque, não", a: "só elimine.", c: ["Fruta, castanha ou cacau no lugar.", "Dê ao corpo um doce de verdade.", "Substituir é mais fácil que resistir."], foto: "Uma fruta ou castanhas sobre a mesa." },
        { tag: "Prática", ic: "⏰", h: "Espere 10", a: "minutos.", c: ["A vontade vem em onda e passa.", "Beba água e ocupe a mente.", "Adiar quebra o impulso."], foto: "Relógio de 10 minutos ao lado de uma fruta." },
        { tag: "Exemplo", ic: "🏷️", h: "Leia o", a: "rótulo.", c: ["Açúcar se esconde com vários nomes.", "Está até no que parece salgado.", "O rótulo conta a verdade."], foto: "Um rótulo sendo lido no mercado." },
        { tag: "Virada", ic: "✨", h: "Menos açúcar,", a: "mais energia.", c: ["Some o pico e a queda do dia.", "O paladar reaprende o simples.", "Liberdade é não depender do doce."], foto: "Você disposto, sem o cansaço do açúcar." },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "reduza com calma.", c: ["Troque por doce de verdade.", "Espere a vontade passar.", "Leia rótulos, sem radicalismo."], foto: "Fruta e castanhas como lanche." },
        { tag: "CTA", ic: "🙌", h: "Bora domar", a: "o açúcar?", c: ["Salva pra próxima vontade.", "Marca quem é viciado em doce.", "Me segue pra mais sobre alimentação real."], foto: "Você com uma fruta no lugar do doce." },
      ],
    ],
  },
  mente: {
    nome: "Mente Clara",
    paleta: "azul",
    variantes: [
      [
        { tag: "Gancho", ic: "🧠", h: "Mente que não", a: "desliga?", c: ["Pensamento atrás de pensamento, mesmo deitado tentando dormir.", "Como desacelerar uma cabeça que não para."], foto: "Você deitado acordado, de olhos abertos no escuro, pensando." },
        { tag: "Verdade", ic: "🌀", h: "Ansiedade não é", a: "o inimigo.", c: ["Ela é um alarme tentando te proteger de algo que nem existe.", "Brigar com ela só aumenta o volume.", "O caminho é entender, não eliminar."], foto: "Seu rosto sereno, olhar pra dentro, com a mão sobre o peito." },
        { tag: "Prática", ic: "🌬️", h: "Respire mais", a: "devagar que ela.", c: ["Quando a mente acelera, o corpo segue. Inverta: desacelere o corpo.", "4 segundos inspirando, 6 soltando, por 2 minutos.", "O sistema nervoso obedece à respiração."], foto: "Close seu de olhos fechados, respirando fundo e devagar." },
        { tag: "Estratégia", ic: "📝", h: "Tire da cabeça,", a: "ponha no papel.", c: ["Pensamento solto na mente parece gigante e eterno.", "Escrito, ele vira algo do tamanho real, que você resolve ou solta.", "A folha aguenta o que a cabeça não aguenta."], foto: "Caderno aberto com caneta, você anotando os pensamentos." },
        { tag: "Virada", ic: "✨", h: "Você não é", a: "seus pensamentos.", c: ["Você é quem observa eles passarem.", "Essa distância é onde mora a paz que você procura.", "Observar já é começar a se libertar."], foto: "Você observando a paisagem de longe, num momento contemplativo." },
        { tag: "CTA", ic: "🙌", h: "Pronto pra", a: "respirar melhor?", c: ["Salva pra usar na próxima crise.", "Marca quem precisa ler isso hoje.", "Me segue pra mais sobre mente e equilíbrio."], foto: "Você calmo, leve sorriso, mão no peito, respirando aliviado." },
      ],
      [
        { tag: "Gancho", ic: "🧠", h: "Não consegue", a: "focar em nada?", c: ["Cinco abas, três notificações, zero entregas.", "Como recuperar o foco num mundo desenhado pra te distrair."], foto: "Mesa bagunçada com vários papéis e o celular acendendo notificação." },
        { tag: "Causa", ic: "📱", h: "Seu foco foi", a: "sequestrado.", c: ["Cada app é projetado por engenheiros pra roubar sua atenção.", "Não é fraqueza sua, é design contra você.", "Reconhecer isso já é meio caminho."], foto: "Tela do celular tomada de notificações disputando sua atenção." },
        { tag: "Estratégia", ic: "🎯", h: "Uma coisa", a: "por vez.", c: ["Multitarefa é mito: você só troca de tarefa rápido e perde nas duas.", "Escolha uma, feche o resto, dê 25 minutos inteiros a ela.", "Profundidade vence dispersão."], foto: "Mesa limpa com só um caderno aberto e o celular guardado longe." },
        { tag: "Prática", ic: "🌱", h: "Desintoxique a", a: "dopamina.", c: ["Tédio é onde nasce a criatividade e o foco profundo.", "Passe alguns minutos por dia sem tela, sem estímulo.", "Sua mente reaprende a se concentrar."], foto: "Você sentado em silêncio, sem celular à vista, olhando o nada." },
        { tag: "Virada", ic: "✨", h: "Atenção é a", a: "sua vida.", c: ["Onde vai sua atenção, vai sua existência, momento a momento.", "Distração crônica é uma vida vivida pela metade.", "Proteger o foco é proteger quem você é."], foto: "Você totalmente concentrado numa única tarefa, imerso." },
        { tag: "CTA", ic: "🙌", h: "Bora recuperar", a: "o foco?", c: ["Salva pra aplicar amanhã.", "Marca quem vive distraído.", "Me segue pra mais sobre clareza mental."], foto: "Você focado e satisfeito num ambiente organizado e calmo." },
      ],
      [
        { tag: "Gancho", ic: "🧠", h: "Acorda já", a: "cansado?", c: ["A forma como você começa o dia decide as próximas 16 horas.", "Como criar manhãs que geram clareza, não correria."], foto: "Você acordando devagar, com a luz suave entrando no quarto." },
        { tag: "Erro", ic: "⏰", h: "Celular não é", a: "despertador.", c: ["Pegar o telefone ao acordar é entregar sua mente ao caos alheio.", "Antes de você existir, já está reagindo.", "Os primeiros minutos são sagrados."], foto: "Mão alcançando o celular na cama logo ao acordar — o que evitar." },
        { tag: "Estratégia", ic: "🌅", h: "Conquiste a", a: "primeira hora.", c: ["Luz natural, água, movimento e silêncio antes de qualquer tela.", "Você define o tom do dia em vez de receber o tom dos outros.", "Manhã intencional, dia intencional."], foto: "Você na janela com a luz natural da manhã e um copo de água na mão." },
        { tag: "Prática", ic: "📝", h: "Escreva 3", a: "linhas.", c: ["Antes de começar, anote o que importa hoje, não a lista infinita.", "Clareza vem de escolher, não de fazer tudo.", "Três prioridades vencem trinta tarefas."], foto: "Caderno com 3 prioridades do dia anotadas e um café ao lado." },
        { tag: "Virada", ic: "✨", h: "Disciplina de manhã", a: "é liberdade à tarde.", c: ["Quem domina o início para de ser arrastado pelo resto.", "A rotina não te prende, ela te devolve o controle.", "Ordem por fora gera calma por dentro."], foto: "Sua manhã organizada: cama feita, luz natural e clima de calma." },
        { tag: "CTA", ic: "🙌", h: "Vamos desenhar", a: "sua manhã?", c: ["Salva como guia.", "Marca quem acorda no caos.", "Me segue pra mais sobre clareza e rotina."], foto: "Você começando o dia com calma e intenção, sorrindo." },
      ],
      // ===== 7 slides · variante A: pare de se comparar =====
      [
        { tag: "Gancho", ic: "📱", h: "Comparar cansa.", a: "E te paralisa.", c: ["A vida editada dos outros vira sua régua injusta.", "Como sair dessa armadilha silenciosa."], foto: "Você olhando o feed do celular com uma expressão abatida." },
        { tag: "Erro", ic: "⚠️", h: "Você compara", a: "bastidor com palco.", c: ["Vê o melhor momento do outro e o seu dia comum.", "Comparação assim sempre te coloca atrás.", "O jogo já começa perdido."], foto: "Tela com fotos perfeitas das redes ao lado da sua cena real do dia." },
        { tag: "Estratégia", ic: "🎯", h: "Sua única régua", a: "é você ontem.", c: ["Compare-se com quem você era, não com o feed.", "Progresso pessoal é o que importa.", "Sua corrida tem outro ponto de partida."], foto: "Duas fotos suas lado a lado — antes e agora — mostrando sua evolução." },
        { tag: "Prática", ic: "🧹", h: "Limpe quem", a: "te diminui.", c: ["Silencie contas que só geram inveja.", "Seu feed deveria inspirar, não adoecer.", "Você controla o que entra na sua mente."], foto: "Seu dedo silenciando ou deixando de seguir uma conta no celular." },
        { tag: "Aprofundamento", ic: "🌱", h: "Inveja aponta", a: "um desejo.", c: ["O que te incomoda no outro mostra o que você quer.", "Use como bússola, não como veneno.", "Transforme comparação em direção."], foto: "Você refletindo, anotando no caderno o que realmente deseja." },
        { tag: "Virada", ic: "✨", h: "Sua jornada", a: "é só sua.", c: ["Ninguém tem seu ponto de partida nem seu ritmo.", "Florescer fora de hora não existe.", "Foque no seu jardim."], foto: "Você caminhando seu próprio caminho, sozinho e tranquilo." },
        { tag: "CTA", ic: "🙌", h: "Bora parar", a: "de comparar?", c: ["Salva pra lembrar nos dias de feed.", "Marca quem vive se comparando.", "Me segue pra mais sobre mente em paz."], foto: "Você largando o celular e sorrindo, aliviado e leve." },
      ],
      // ===== 7 slides · variante B: procrastinação não é preguiça =====
      [
        { tag: "Gancho", ic: "⏳", h: "Adia tudo?", a: "Não é preguiça.", c: ["Procrastinar quase sempre é medo disfarçado.", "Entender a raiz é o primeiro passo."], foto: "Tarefa parada na mesa enquanto você desvia o olhar dela." },
        { tag: "Erro", ic: "⚠️", h: "Esperar vontade", a: "é nunca começar.", c: ["A motivação vem depois da ação, não antes.", "Quem espera sentir vontade espera pra sempre.", "Ação gera ânimo."], foto: "Você dando o primeiro passo numa tarefa, mesmo sem vontade." },
        { tag: "Estratégia", ic: "🎯", h: "Tarefa grande", a: "trava. Quebre.", c: ["O cérebro foge do que parece gigante.", "Divida num primeiro passo ridículo de pequeno.", "Pequeno demais pra recusar."], foto: "Uma lista grande sendo dividida em pequenos passos no papel." },
        { tag: "Prática", ic: "⏱️", h: "Só 2 minutos", a: "pra começar.", c: ["Combine consigo apenas iniciar por 2 minutos.", "Quase sempre você continua.", "O difícil é o começo, não o meio."], foto: "Cronômetro marcando 2 minutos ao lado da tarefa começando." },
        { tag: "Aprofundamento", ic: "🧠", h: "Perfeito", a: "é inimigo do feito.", c: ["Esperar a condição perfeita é fugir com elegância.", "Feito imperfeito ensina, parado não.", "Entregue e ajuste depois."], foto: "Um trabalho imperfeito, mas pronto e entregue, sobre a mesa." },
        { tag: "Virada", ic: "✨", h: "Disciplina", a: "liberta.", c: ["Fazer o que precisa tira o peso da culpa.", "A tarefa adiada cansa mais que a feita.", "Agir hoje cuida da sua paz amanhã."], foto: "Você aliviado, expressão leve, após concluir a tarefa adiada." },
        { tag: "CTA", ic: "🙌", h: "Vamos", a: "começar agora?", c: ["Salva pra usar no próximo \"depois eu faço\".", "Marca quem vive adiando.", "Me segue pra mais sobre foco e ação."], foto: "Você de mãos à obra, focado e decidido a começar agora." },
      ],
      // ===== 9 slides · variante C: sua mente precisa de pausa =====
      [
        { tag: "Gancho", ic: "🧠", h: "Mente lotada?", a: "Faltou pausa.", c: ["Você não para nunca e estranha estar cansado.", "Descanso mental não é luxo, é necessidade."], foto: "Você de cabeça baixa, sobrecarregado na mesa de trabalho." },
        { tag: "Contexto", ic: "🌀", h: "Cabeça cheia", a: "não pensa bem.", c: ["Sem pausa, a mente só reage, não cria.", "Boas ideias nascem no espaço vazio.", "Você precisa de silêncio pra ouvir você."], foto: "Quadro ou anotações cheias e bagunçadas demais na parede." },
        { tag: "Erro", ic: "⚠️", h: "Produtivo", a: "não é ocupado.", c: ["Estar sempre ocupado vira fuga de si mesmo.", "Mais tarefas não significam mais sentido.", "Correria constante adoece."], foto: "Agenda completamente lotada de compromissos, sem respiro." },
        { tag: "Estratégia", ic: "🌬️", h: "Pausas curtas,", a: "mente clara.", c: ["Alguns minutos sem estímulo recarregam o foco.", "Respire, olhe a janela, não pegue o celular.", "Vazio proposital não é perda de tempo."], foto: "Você olhando pela janela numa pausa curta, sem o celular." },
        { tag: "Prática", ic: "📵", h: "Tédio é", a: "remédio.", c: ["Fique alguns minutos por dia sem tela nenhuma.", "A mente reaprende a se concentrar.", "Desconforto no início, clareza depois."], foto: "Você sentado sem fazer nada, em silêncio e relaxado." },
        { tag: "Exemplo", ic: "🚶", h: "Caminhe", a: "sem fone.", c: ["Andar em silêncio organiza pensamentos soltos.", "Muitas respostas aparecem em movimento.", "O corpo ajuda a mente a desembolar."], foto: "Você caminhando ao ar livre, sem fones, observando o redor." },
        { tag: "Virada", ic: "✨", h: "Descansar", a: "é estratégia.", c: ["A mente afiada vem do repouso, não do excesso.", "Quem pausa rende mais depois.", "Parar também é avançar."], foto: "Você recostado, descansando de olhos fechados, em paz." },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "crie espaço.", c: ["Pausas curtas no dia.", "Minutos sem tela e sem fone.", "Vazio gera clareza e ideias."], foto: "Uma mesa vazia e organizada, com espaço pra respirar." },
        { tag: "CTA", ic: "🙌", h: "Bora dar", a: "uma pausa?", c: ["Salva pra lembrar de respirar.", "Marca quem vive no automático.", "Me segue pra mais sobre mente equilibrada."], foto: "Você relaxado, respirando fundo, com um leve sorriso." },
      ],
      // ===== 9 slides · variante D: o peso de dar conta de tudo =====
      [
        { tag: "Gancho", ic: "🪫", h: "Tentando dar", a: "conta de tudo?", c: ["Carregar o mundo sozinho tem um preço alto.", "Quando tudo é prioridade, você quebra."], foto: "Você tentando equilibrar muitas coisas nas mãos, sobrecarregado." },
        { tag: "Contexto", ic: "⚖️", h: "Limite não é", a: "fraqueza.", c: ["Reconhecer o próprio limite é maturidade.", "Ninguém sustenta tudo o tempo todo.", "Força também é saber parar."], foto: "Você fazendo o gesto de pausa, mão em \"pare\", com serenidade." },
        { tag: "Erro", ic: "⚠️", h: "Dizer sim", a: "pra tudo.", c: ["Aceitar tudo é dizer não pra você mesmo.", "Cada sim sem limite rouba sua energia.", "Agradar todos cansa demais."], foto: "Uma lista interminável de pedidos e tarefas na sua frente." },
        { tag: "Estratégia", ic: "🛑", h: "Aprenda a", a: "dizer não.", c: ["Não é uma frase completa, sem culpa.", "Proteger seu tempo é proteger sua saúde.", "Quem respeita o próprio limite é respeitado."], foto: "Você fechando o notebook e recusando algo, com tranquilidade." },
        { tag: "Prática", ic: "📝", h: "Tire da cabeça,", a: "ponha no papel.", c: ["O que está solto na mente parece maior.", "Escrito, vira algo do tamanho real.", "A folha aguenta o que a cabeça não aguenta."], foto: "Caderno com as tarefas anotadas, tirando o peso da mente." },
        { tag: "Exemplo", ic: "🤝", h: "Pedir ajuda", a: "é sabedoria.", c: ["Você não precisa carregar tudo sozinho.", "Dividir o peso não te faz menor.", "Gente forte também se apoia."], foto: "Você dividindo uma tarefa com alguém, mãos colaborando." },
        { tag: "Virada", ic: "✨", h: "Cuidar de você", a: "vem primeiro.", c: ["Copo vazio não enche ninguém.", "Só sustenta os outros quem se sustenta.", "Autocuidado não é egoísmo, é base."], foto: "Você num momento de autocuidado: um chá, um descanso só seu." },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "ponha limites.", c: ["Diga não sem culpa.", "Tire o peso da cabeça, peça ajuda.", "Você primeiro, sempre."], foto: "Você de ombros relaxados, com a agenda mais leve e aliviado." },
        { tag: "CTA", ic: "🙌", h: "Vamos", a: "aliviar o peso?", c: ["Salva pra lembrar nos dias pesados.", "Marca quem carrega tudo sozinho.", "Me segue pra mais sobre equilíbrio."], foto: "Você com expressão leve, respirando aliviado, em paz." },
      ],
      // ===== 6 slides · novos temas (gerados por IA do chat, 2026-06-10) =====
      // Notícias / doomscrolling
      [
        { tag: "Gancho", ic: "📰", h: "Ansioso com", a: "o noticiário?", c: ["Você rola tragédia atrás de tragédia e se sente pior.", "Como se informar sem se intoxicar."], foto: "Você no sofá com cara de tenso olhando o celular." },
        { tag: "Causa", ic: "🌀", h: "Sua mente não", a: "foi feita pra isso.", c: ["Ela absorve o caos do mundo inteiro de uma vez.", "Excesso de notícia ruim vira angústia.", "Não é fraqueza, é sobrecarga."], foto: "Tela do celular cheia de manchetes negativas." },
        { tag: "Estratégia", ic: "⏱️", h: "Tenha hora", a: "pra se informar.", c: ["Escolha um momento curto do dia.", "Fora dele, o celular descansa do noticiário.", "Limite protege sua paz."], foto: "Relógio ao lado do celular com o feed fechado." },
        { tag: "Prática", ic: "📵", h: "Notícia não", a: "é café da manhã.", c: ["Não comece nem termine o dia no feed.", "Os primeiros e últimos minutos são seus.", "Proteja as bordas do dia."], foto: "Mesa de manhã sem celular, só café e luz natural." },
        { tag: "Virada", ic: "✨", h: "Informado sim,", a: "intoxicado não.", c: ["Você pode se importar sem se afundar.", "Filtrar não é alienação, é saúde.", "Cuide da mente que consome o mundo."], foto: "Você respirando aliviado, com o celular guardado." },
        { tag: "CTA", ic: "🙌", h: "Bora filtrar", a: "o que entra?", c: ["Salva pra lembrar amanhã cedo.", "Marca quem vive no doomscroll.", "Me segue pra mais sobre mente em paz."], foto: "Você tranquilo, longe das telas." },
      ],
      // Autocrítica / voz interna dura
      [
        { tag: "Gancho", ic: "🗣️", h: "Seu pior crítico", a: "é você?", c: ["A voz na sua cabeça fala o que você não diria a ninguém.", "Como baixar o volume da autocobrança."], foto: "Você pensativo, olhar pesado, mão na testa." },
        { tag: "Verdade", ic: "🔍", h: "Você não fala", a: "isso a um amigo.", c: ["Com os outros você é gentil, consigo é cruel.", "Essa dureza não te faz melhor, te paralisa.", "Cobrança não é o mesmo que cuidado."], foto: "Seu reflexo no espelho com um olhar sério." },
        { tag: "Estratégia", ic: "🤝", h: "Fale consigo", a: "como com quem ama.", c: ["Troque o tom de juiz pelo de aliado.", "Erro pede ajuste, não punição.", "Gentileza interna também é disciplina."], foto: "Você com a mão no peito, num gesto de acolhimento." },
        { tag: "Prática", ic: "📝", h: "Anote a frase,", a: "questione ela.", c: ["Escreva o que a voz disse.", "Pergunte: isso é verdade ou medo?", "No papel, o exagero aparece."], foto: "Caderno com um pensamento anotado e contestado." },
        { tag: "Virada", ic: "✨", h: "Você precisa", a: "de aliado, não juiz.", c: ["Quem se trata bem chega mais longe.", "A mudança nasce do respeito, não do ódio.", "Ser seu amigo é o começo."], foto: "Você com expressão mais leve, em paz consigo." },
        { tag: "CTA", ic: "🙌", h: "Bora baixar", a: "a autocrítica?", c: ["Salva pra reler nos dias duros.", "Marca quem se cobra demais.", "Me segue pra mais sobre mente equilibrada."], foto: "Você sorrindo de leve, sereno." },
      ],
      // Medo do julgamento
      [
        { tag: "Gancho", ic: "👀", h: "Medo do que", a: "vão pensar?", c: ["Você se segura o tempo todo por causa da opinião alheia.", "Como viver mais livre do olhar dos outros."], foto: "Você hesitando, contido, em meio a outras pessoas." },
        { tag: "Verdade", ic: "🌀", h: "Ninguém pensa", a: "tanto em você.", c: ["Cada um está ocupado com a própria vida.", "O palco que você imagina quase não existe.", "A plateia está olhando pra si mesma."], foto: "Uma multidão distraída, cada um no seu mundo." },
        { tag: "Estratégia", ic: "🎯", h: "Pergunte:", a: "de quem é a vida?", c: ["A conta de viver pequeno é só sua.", "Aplauso alheio não preenche vazio.", "Escolha o que é seu, não o que cabe."], foto: "Você decidindo algo com a mão no peito, firme." },
        { tag: "Prática", ic: "👣", h: "Faça pequeno,", a: "faça mesmo assim.", c: ["Aja com o medo presente, sem esperar ele sumir.", "Cada passo encolhe o julgamento.", "Coragem é movimento, não ausência de medo."], foto: "Você dando o primeiro passo, decidido." },
        { tag: "Virada", ic: "✨", h: "Livre do olhar,", a: "livre pra ser.", c: ["Quem aceita ser julgado vive maior.", "Sua vida não cabe na opinião dos outros.", "Solte a plateia e siga."], foto: "Você caminhando leve, sem olhar pra trás." },
        { tag: "CTA", ic: "🙌", h: "Bora viver", a: "mais livre?", c: ["Salva pra lembrar na próxima hesitação.", "Marca quem vive preso ao julgamento.", "Me segue pra mais sobre liberdade interior."], foto: "Você de braços abertos, leve e livre." },
      ],
      // Indecisão
      [
        { tag: "Gancho", ic: "🔀", h: "Trava na hora", a: "de decidir?", c: ["Você analisa tanto que nunca escolhe.", "Como sair da paralisia das opções."], foto: "Você parado diante de duas direções, indeciso." },
        { tag: "Causa", ic: "⚠️", h: "Esperar certeza", a: "é esperar pra sempre.", c: ["Nenhuma escolha vem com garantia.", "O medo de errar congela mais que o erro.", "Decidir é abrir mão de algo, sempre."], foto: "Muitas opções espalhadas sobre a mesa." },
        { tag: "Estratégia", ic: "⚖️", h: "Boa o bastante", a: "vence perfeita.", c: ["Pergunte: qual escolha te aproxima do que importa?", "Decisão alinhada ao valor traz paz.", "Avance com 80% de certeza."], foto: "Você pesando uma decisão com calma, lista na mão." },
        { tag: "Prática", ic: "⏱️", h: "Dê um prazo", a: "pra escolher.", c: ["Decisões pequenas: decida em minutos.", "Tempo demais só alimenta a dúvida.", "O prazo força a clareza."], foto: "Relógio ao lado de uma anotação de prós e contras." },
        { tag: "Virada", ic: "✨", h: "Decidir é", a: "seguir em frente.", c: ["Quem escolhe aprende; quem trava, fica.", "Errar e ajustar ensina mais que esperar.", "Movimento gera resposta."], foto: "Você seguindo por um caminho, decisão tomada." },
        { tag: "CTA", ic: "🙌", h: "Bora destravar", a: "as decisões?", c: ["Salva pra usar na próxima dúvida.", "Marca quem vive em cima do muro.", "Me segue pra mais sobre clareza mental."], foto: "Você caminhando firme, escolha feita." },
      ],
      // Descanso com culpa
      [
        { tag: "Gancho", ic: "🛋️", h: "Descansa e", a: "sente culpa?", c: ["Você para, mas a cabeça segue cobrando produtividade.", "Como descansar de verdade sem peso."], foto: "Você deitado no sofá, mas com o olhar tenso." },
        { tag: "Erro", ic: "⚠️", h: "Ocupado não", a: "é produtivo.", c: ["Estar sempre fazendo vira fuga de si.", "Descanso não é prêmio, é necessidade.", "Quem não para, quebra."], foto: "Uma agenda lotada, sem nenhum espaço livre." },
        { tag: "Estratégia", ic: "🌿", h: "Descanso é", a: "parte do trabalho.", c: ["A mente boa vem do repouso, não do excesso.", "Pausa recarrega o que a pressa gasta.", "Parar também é avançar."], foto: "Você relaxando ao ar livre, sem celular." },
        { tag: "Prática", ic: "📵", h: "Descanse sem", a: "segunda tela.", c: ["Descanso com notificação não descansa.", "Escolha algo que recarrega, não distrai.", "Presença no ócio também cura."], foto: "Você lendo ou olhando a janela, sem telas." },
        { tag: "Virada", ic: "✨", h: "Você merece", a: "parar sem culpa.", c: ["Você não é uma máquina de tarefas.", "Repouso é respeito por quem você é.", "Cuidar de si sustenta todo o resto."], foto: "Você de olhos fechados, respirando em paz." },
        { tag: "CTA", ic: "🙌", h: "Bora descansar", a: "de verdade?", c: ["Salva pra lembrar no próximo cansaço.", "Marca quem descansa com culpa.", "Me segue pra mais sobre equilíbrio."], foto: "Você relaxado, leve sorriso, sem pressa." },
      ],
    ],
  },
  essencia: {
    nome: "Essência Desperta",
    paleta: "roxo",
    variantes: [
      [
        { tag: "Gancho", ic: "🕊️", h: "Você se conhece", a: "de verdade?", c: ["Vivemos pra fora o tempo todo e esquecemos de olhar pra dentro.", "O reencontro com quem você realmente é."], foto: "Seu reflexo pensativo no espelho, num olhar pra dentro." },
        { tag: "Verdade", ic: "🌑", h: "O silêncio", a: "assusta.", c: ["A gente enche o dia de ruído pra não ouvir o que sente.", "Mas é no silêncio que as respostas aparecem.", "Coragem é ficar sozinho consigo."], foto: "Você sozinho em silêncio, num ambiente calmo e sem distrações." },
        { tag: "Prática", ic: "🧘", h: "Sente. Respire.", a: "Observe.", c: ["Não precisa esvaziar a mente, só assistir o que vem sem julgar.", "Alguns minutos por dia já reorganizam o interior.", "Presença é o início de tudo."], foto: "Você meditando sentado, postura tranquila e olhos fechados." },
        { tag: "Reflexão", ic: "🌱", h: "Quem você é", a: "sem os papéis?", c: ["Tire o cargo, o título, a opinião dos outros. O que sobra?", "Essa essência por baixo de tudo é o que importa cuidar.", "Você não é o que faz, é quem é."], foto: "Um retrato simples seu, sem crachá nem título — só você." },
        { tag: "Virada", ic: "✨", h: "Autoconhecimento", a: "é o caminho.", c: ["Toda transformação de fora começa por uma virada de dentro.", "Você não precisa virar outra pessoa, precisa se lembrar de quem é.", "O encontro é com você mesmo."], foto: "Sua silhueta contemplativa, olhando pra dentro de si." },
        { tag: "CTA", ic: "🙌", h: "Pronto pra se", a: "reencontrar?", c: ["Salva pra refletir depois.", "Marca quem precisa parar e se ouvir.", "Me segue pra mais sobre essência e autoconhecimento."], foto: "Você sereno, em paz consigo, com um leve sorriso." },
      ],
      [
        { tag: "Gancho", ic: "🕊️", h: "Sucesso sem", a: "sentido cansa.", c: ["Dá pra conquistar tudo e ainda sentir um vazio que não passa.", "A busca pelo que realmente move você."], foto: "Você pensativo, olhar distante, apesar das conquistas ao redor." },
        { tag: "Verdade", ic: "🌑", h: "Propósito não", a: "se acha, se constrói.", c: ["Ninguém acorda iluminado sabendo a missão da vida.", "Ele nasce do que te toca, do que você não consegue ignorar.", "Comece pelo que dói ou encanta."], foto: "Suas mãos construindo ou criando algo aos poucos." },
        { tag: "Reflexão", ic: "🧭", h: "O que você faria", a: "de graça?", c: ["A resposta esconde uma pista do seu chamado.", "Onde o tempo voa e você se esquece de si, ali tem sentido.", "Preste atenção no que te acende."], foto: "Você imerso num hobby que ama, sem perceber o tempo passar." },
        { tag: "Prática", ic: "🌱", h: "Sirva alguém", a: "hoje.", c: ["Propósito quase sempre aponta pra fora de você.", "Quando o que você faz ajuda outra pessoa, o vazio diminui.", "Sentido mora na entrega, não no acúmulo."], foto: "Você ajudando outra pessoa, num gesto concreto de servir." },
        { tag: "Virada", ic: "✨", h: "Você foi feito", a: "pra mais.", c: ["Não pra só pagar contas e repetir os dias até o fim.", "Existe um motivo por trás de você estar aqui agora.", "Descobri-lo é a aventura de uma vida."], foto: "Você olhando o horizonte com determinação." },
        { tag: "CTA", ic: "🙌", h: "Vamos achar", a: "seu porquê?", c: ["Salva pra meditar nisso.", "Marca quem busca sentido.", "Me segue pra mais sobre propósito e essência."], foto: "Você reflexivo e esperançoso, com olhar firme." },
      ],
      [
        { tag: "Gancho", ic: "🕊️", h: "Vivendo no", a: "automático?", c: ["A vida passa enquanto a gente pensa no próximo problema.", "Como voltar pro presente, o único lugar onde se vive."], foto: "Você no piloto automático da rotina, com olhar distante." },
        { tag: "Verdade", ic: "🌑", h: "O agora é tudo", a: "que existe.", c: ["O passado já foi, o futuro não chegou, só o presente é real.", "Ansiedade vive no amanhã, culpa vive no ontem.", "Paz vive aqui."], foto: "Close de um instante presente: a xícara, a luz, o detalhe do agora." },
        { tag: "Prática", ic: "🙏", h: "Agradeça", a: "três coisas.", c: ["Toda manhã, nomeie três coisas simples pelas quais é grato.", "Gratidão treina o cérebro a ver o que já está bom.", "O que você agradece, se multiplica."], foto: "Caderno de gratidão com 3 itens anotados e um café ao lado." },
        { tag: "Reflexão", ic: "🌱", h: "Faça uma coisa", a: "de cada vez.", c: ["Comendo, coma. Andando, ande. Ouvindo, ouça de verdade.", "Presença plena transforma o ordinário em sagrado.", "A vida inteira está nos detalhes."], foto: "Você atento a um único gesto simples — comendo ou ouvindo." },
        { tag: "Virada", ic: "✨", h: "Você não tem mais", a: "tempo. Tem agora.", c: ["Esperar o momento perfeito é perder o momento que existe.", "A plenitude não está num futuro, está na sua atenção hoje.", "Acordar é escolher estar presente."], foto: "Você vivendo plenamente um momento simples do dia." },
        { tag: "CTA", ic: "🙌", h: "Pronto pra", a: "estar presente?", c: ["Salva como lembrete.", "Marca quem vive no automático.", "Me segue pra mais sobre presença e espiritualidade."], foto: "Você respirando o momento, olhos atentos e sorriso leve." },
      ],
      // ===== 7 slides · variante A: soltar o que já passou =====
      [
        { tag: "Gancho", ic: "🕊️", h: "Preso no", a: "passado?", c: ["Reviver o que doeu rouba o seu presente.", "Soltar não é esquecer, é libertar você."], foto: "Você olhando pra trás, com a expressão de quem carrega algo." },
        { tag: "Erro", ic: "⚠️", h: "Remoer", a: "não conserta.", c: ["Repassar a cena mil vezes não muda o final.", "Só mantém a ferida aberta.", "O passado já fez o que tinha que fazer."], foto: "Uma foto antiga nas suas mãos, revivendo a mesma cena." },
        { tag: "Estratégia", ic: "🌑", h: "Aceitar", a: "o que foi.", c: ["Paz começa quando você para de brigar com o ocorrido.", "Aceitar não é concordar, é parar de sofrer.", "O que passou virou lição, não corrente."], foto: "Você de olhos fechados, aceitando, em paz com o que foi." },
        { tag: "Prática", ic: "🙏", h: "Perdoar", a: "liberta você.", c: ["Perdão não é pelo outro, é pela sua paz.", "O rancor pesa em quem carrega, não em quem feriu.", "Solte pra poder seguir."], foto: "Suas mãos se abrindo, soltando algo simbólico." },
        { tag: "Aprofundamento", ic: "🌱", h: "A ferida", a: "vira força.", c: ["O que te quebrou também pode te ensinar.", "Cicatriz é prova de que você passou e seguiu.", "Dor com sentido transforma."], foto: "Uma cicatriz ou marca como símbolo de superação, com olhar firme." },
        { tag: "Virada", ic: "✨", h: "O agora", a: "é onde se vive.", c: ["O passado já foi, só o presente é seu.", "Cada dia preso no ontem é um dia perdido hoje.", "Recomeçar é sempre possível."], foto: "Você olhando pra frente, com o horizonte aberto." },
        { tag: "CTA", ic: "🙌", h: "Bora", a: "soltar?", c: ["Salva pra reler nos dias difíceis.", "Marca quem precisa se libertar.", "Me segue pra mais sobre paz interior."], foto: "Você de braços abertos ao ar livre, leve e livre." },
      ],
      // ===== 7 slides · variante B: seus valores, suas decisões =====
      [
        { tag: "Gancho", ic: "🧭", h: "Vivendo", a: "sem direção?", c: ["Sem valores claros, você decide pelo vento.", "Conhecer seus valores é ter uma bússola."], foto: "Você numa encruzilhada ou caminho, decidindo qual rumo seguir." },
        { tag: "Erro", ic: "⚠️", h: "Decidir pra", a: "agradar os outros.", c: ["Viver a expectativa alheia te afasta de você.", "Aplauso de fora não preenche vazio de dentro.", "No fim, a conta de viver é sua."], foto: "Você cercado de expectativas alheias, visivelmente desconfortável." },
        { tag: "Estratégia", ic: "📝", h: "Liste o que", a: "é inegociável.", c: ["Escreva os 3 valores que te definem.", "Família, honestidade, liberdade: o que é seu?", "O que está escrito fica mais fácil de honrar."], foto: "Caderno com seus 3 valores principais escritos à mão." },
        { tag: "Prática", ic: "⚖️", h: "Decisão boa", a: "respeita valor.", c: ["Antes de escolher, pergunte: isso bate comigo?", "Decisão alinhada traz paz, mesmo se for difícil.", "O corpo sente quando você se trai."], foto: "Você decidindo com firmeza, mão sobre o coração." },
        { tag: "Aprofundamento", ic: "🌱", h: "Coerência", a: "gera respeito.", c: ["Quem vive o que prega vira referência.", "Confiam em quem é o mesmo por dentro e fora.", "Integridade se constrói em escolhas pequenas."], foto: "Você com olhar honesto, sendo o mesmo por dentro e por fora." },
        { tag: "Virada", ic: "✨", h: "Viver seus", a: "valores liberta.", c: ["Você para de se justificar pra todo mundo.", "A vida fica mais leve quando faz sentido.", "Direção clara, menos angústia."], foto: "Você caminhando leve, com uma direção clara à frente." },
        { tag: "CTA", ic: "🙌", h: "Vamos achar", a: "sua bússola?", c: ["Salva pra definir seus valores.", "Marca quem vive pra agradar.", "Me segue pra mais sobre propósito."], foto: "Uma bússola na sua mão, ou seu olhar decidido sobre o rumo." },
      ],
      // ===== 9 slides · variante C: fé que sustenta o dia a dia =====
      [
        { tag: "Gancho", ic: "🕊️", h: "Fé só na", a: "hora do aperto?", c: ["Muita gente lembra do alto só quando tudo desaba.", "Fé de verdade sustenta antes da tempestade."], foto: "Você olhando pra cima num momento difícil, buscando força." },
        { tag: "Contexto", ic: "🌑", h: "Fé não é", a: "ausência de medo.", c: ["É seguir mesmo sentindo medo.", "Não promete vida fácil, promete companhia.", "Coragem com propósito."], foto: "Você seguindo em frente com passo firme, apesar do receio." },
        { tag: "Erro", ic: "⚠️", h: "Esperar tudo", a: "pronto do alto.", c: ["Fé sem ação vira desculpa pra parar.", "Ore como se dependesse Dele, aja como depende de você.", "O céu ajuda quem se move."], foto: "Mãos em oração e, ao mesmo tempo, prontas pra agir." },
        { tag: "Estratégia", ic: "🙏", h: "Comece o dia", a: "em silêncio.", c: ["Alguns minutos de oração ou gratidão mudam o tom.", "Antes do mundo falar, ouça o essencial.", "O começo define o resto."], foto: "Você em oração ou gratidão logo cedo, com luz suave." },
        { tag: "Prática", ic: "📖", h: "Alimente", a: "o que você crê.", c: ["Fé se fortalece com prática, não só com vontade.", "Leitura, comunidade, gratidão diária.", "O que você rega, cresce."], foto: "Uma Bíblia ou livro aberto com um café, num momento de leitura." },
        { tag: "Exemplo", ic: "🤲", h: "Servir", a: "é fé em ação.", c: ["A crença aparece no como você trata o outro.", "Pequenos gestos valem mais que discursos.", "Amor em prática é a maior prova."], foto: "Você ajudando alguém, num gesto concreto de amor." },
        { tag: "Virada", ic: "✨", h: "Confiar", a: "alivia o peso.", c: ["Você não precisa controlar tudo.", "Entregar o que não depende de você é descanso.", "Paz nasce da confiança."], foto: "Você de mãos abertas, entregando o controle, sereno." },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "fé se pratica.", c: ["Comece o dia em silêncio.", "Alimente, sirva, confie.", "Fé vira ação, não só sentimento."], foto: "Mãos em oração ao amanhecer, retratando a rotina de fé." },
        { tag: "CTA", ic: "🙌", h: "Bora viver", a: "com fé?", c: ["Salva pra lembrar todo dia.", "Marca quem precisa ler isso.", "Me segue pra mais sobre espiritualidade."], foto: "Você em paz, com olhar tranquilo e confiante." },
      ],
      // ===== 9 slides · variante D: gratidão muda o que você vê =====
      [
        { tag: "Gancho", ic: "🙏", h: "Só vê o que", a: "falta?", c: ["A mente treinada na falta nunca acha o bastante.", "Gratidão muda a lente, não a vida."], foto: "Você com expressão insatisfeita, focado no que falta." },
        { tag: "Contexto", ic: "🌑", h: "O cérebro", a: "busca problema.", c: ["Por instinto, ele foca no que está errado.", "Sem treino, você só vê o que falta.", "Dá pra reeducar esse olhar."], foto: "Uma lente apontada pro único detalhe errado de uma cena boa." },
        { tag: "Erro", ic: "⚠️", h: "Esperar tudo certo", a: "pra agradecer.", c: ["Quem só agradece quando dá tudo certo, raramente agradece.", "Gratidão não depende de perfeição.", "Sempre há algo bom agora."], foto: "Você adiando a gratidão, esperando o momento perfeito que não vem." },
        { tag: "Estratégia", ic: "📝", h: "Três coisas,", a: "toda manhã.", c: ["Anote 3 coisas simples pelas quais é grato.", "O café, a saúde, alguém que te ama.", "Treino diário reprograma o olhar."], foto: "Caderno de gratidão com 3 itens e o café da manhã ao lado." },
        { tag: "Prática", ic: "🤲", h: "Agradeça", a: "em voz alta.", c: ["Dizer ou escrever fixa mais que só pensar.", "Agradeça a quem cruza seu dia.", "Gratidão dita vira hábito."], foto: "Você agradecendo a alguém pessoalmente, com sorriso sincero." },
        { tag: "Exemplo", ic: "🌱", h: "No dia ruim,", a: "procure uma.", c: ["Mesmo no caos, existe uma coisa boa.", "Achar uma já muda a química do dia.", "Foco no bom não nega o difícil, equilibra."], foto: "Mesmo num dia caótico, você achando um pequeno detalhe bom." },
        { tag: "Virada", ic: "✨", h: "O que você", a: "agradece, cresce.", c: ["A atenção alimenta o que você olha.", "Ver o bom atrai mais do bom.", "Gratidão é abundância em prática."], foto: "Você sorrindo, enxergando o lado bom da vida ao redor." },
        { tag: "Resumo", ic: "📌", h: "Resumindo:", a: "treine o olhar.", c: ["Três gratidões toda manhã.", "Agradeça em voz alta.", "Até no dia ruim, ache uma."], foto: "Caderno de gratidão aberto, mostrando a rotina diária." },
        { tag: "CTA", ic: "🙌", h: "Vamos", a: "agradecer mais?", c: ["Salva como lembrete diário.", "Marca quem só vê a falta.", "Me segue pra mais sobre essência e gratidão."], foto: "Você de mãos no peito, grato, com um sorriso leve." },
      ],
      // ===== 6 slides · novos temas (gerados por IA do chat, 2026-06-10) =====
      // Comparação / contentamento
      [
        { tag: "Gancho", ic: "🪞", h: "A vida do outro", a: "parece melhor?", c: ["Você olha pro lado e sente que está atrasado.", "Como reencontrar o contentamento com o que é seu."], foto: "Você observando a vida alheia no celular, pensativo." },
        { tag: "Verdade", ic: "🌑", h: "Você compara", a: "o avesso com a vitrine.", c: ["Vê o melhor do outro e o seu pior.", "Comparação assim nunca te deixa em paz.", "A vitrine esconde os bastidores."], foto: "Uma vitrine iluminada ao lado de uma cena comum do dia." },
        { tag: "Reflexão", ic: "🌱", h: "O que você", a: "já tem?", c: ["Olhe pra dentro antes de olhar pro lado.", "Existe abundância que a pressa não vê.", "Gratidão é o antídoto da inveja."], foto: "Você contemplando algo simples e seu, com calma." },
        { tag: "Prática", ic: "🙏", h: "Nomeie três", a: "bênçãos suas.", c: ["Toda manhã, reconheça o que já é bom.", "O olhar treina pra ver o que tem.", "O que você agradece, floresce."], foto: "Caderno de gratidão com três itens e um café ao lado." },
        { tag: "Virada", ic: "✨", h: "Sua jornada", a: "é só sua.", c: ["Ninguém tem seu tempo nem seu ponto de partida.", "Florescer fora de hora não existe.", "Cuide do seu jardim."], foto: "Você caminhando seu próprio caminho, sereno." },
        { tag: "CTA", ic: "🙌", h: "Bora se", a: "contentar?", c: ["Salva pra reler nos dias de comparação.", "Marca quem vive olhando pro lado.", "Me segue pra mais sobre paz interior."], foto: "Você em paz, grato, com um leve sorriso." },
      ],
      // Pressa / desacelerar
      [
        { tag: "Gancho", ic: "⏩", h: "Por que tanta", a: "pressa?", c: ["A vida passa enquanto você corre pro próximo.", "Como desacelerar e voltar a sentir o agora."], foto: "Você apressado, com tudo ao redor borrado." },
        { tag: "Verdade", ic: "🌑", h: "Correr não", a: "é viver.", c: ["Você chega rápido, mas não chega presente.", "A pressa rouba o sabor de tudo.", "Velocidade não é o mesmo que sentido."], foto: "Um relógio acelerado e mãos tensas." },
        { tag: "Prática", ic: "🌬️", h: "Respire antes", a: "de começar.", c: ["Três respirações lentas reorganizam o corpo.", "O agora só cabe quando você desacelera.", "Pausa breve, presença inteira."], foto: "Você de olhos fechados, respirando devagar." },
        { tag: "Reflexão", ic: "🚶", h: "Faça uma coisa", a: "por vez.", c: ["Comendo, coma. Andando, ande.", "Presença plena transforma o comum em sagrado.", "A vida inteira mora nos detalhes."], foto: "Você atento a um único gesto simples do dia." },
        { tag: "Virada", ic: "✨", h: "Devagar também", a: "é chegar.", c: ["Quem desacelera enxerga o caminho.", "Sentido não tem atalho.", "O agora é o único lugar onde se vive."], foto: "Você caminhando sem pressa, observando o redor." },
        { tag: "CTA", ic: "🙌", h: "Bora", a: "desacelerar?", c: ["Salva como lembrete diário.", "Marca quem vive correndo.", "Me segue pra mais sobre presença."], foto: "Você respirando o momento, em paz." },
      ],
      // Esperança em tempos difíceis
      [
        { tag: "Gancho", ic: "🌧️", h: "Tá tudo", a: "desabando?", c: ["Tem fases em que parece que nada dá certo.", "Como manter a esperança sem negar a dor."], foto: "Você olhando a chuva pela janela, pensativo." },
        { tag: "Verdade", ic: "🌑", h: "A tempestade", a: "não é o fim.", c: ["Toda estação difícil também passa.", "O fundo do poço tem chão pra te apoiar.", "Resistir já é um tipo de vitória."], foto: "Um céu carregado começando a abrir no horizonte." },
        { tag: "Prática", ic: "🌱", h: "Cuide do", a: "próximo passo.", c: ["Não resolva a vida toda hoje.", "Faça só o que cabe neste dia.", "Um passo de cada vez sustenta a travessia."], foto: "Um pé dando um passo num caminho difícil." },
        { tag: "Reflexão", ic: "🤲", h: "Você não", a: "está sozinho.", c: ["Pedir ajuda não te diminui.", "Dividir o peso já alivia a caminhada.", "Gente forte também se apoia."], foto: "Uma mão estendida ajudando outra." },
        { tag: "Virada", ic: "✨", h: "Depois da noite", a: "vem o dia.", c: ["O que te quebra também pode te ensinar.", "Esperança é escolher continuar.", "A luz volta pra quem persiste."], foto: "O sol nascendo depois de uma noite escura." },
        { tag: "CTA", ic: "🙌", h: "Bora seguir", a: "com fé?", c: ["Salva pra reler nos dias difíceis.", "Marca quem precisa de esperança hoje.", "Me segue pra mais sobre força interior."], foto: "Você olhando o horizonte aberto, esperançoso." },
      ],
      // Generosidade / dar sem esperar
      [
        { tag: "Gancho", ic: "🤲", h: "Só pensa em", a: "receber?", c: ["A vida fica pequena quando gira só em torno de si.", "O que muda quando você dá sem esperar troca."], foto: "Mãos abertas num gesto de oferecer algo." },
        { tag: "Verdade", ic: "🌑", h: "Dar enche", a: "quem dá.", c: ["A generosidade volta de formas que você não controla.", "Quem só guarda, empobrece por dentro.", "Servir dá sentido ao que se faz."], foto: "Você entregando algo a alguém, com cuidado." },
        { tag: "Prática", ic: "🌱", h: "Faça um bem", a: "hoje, anônimo.", c: ["Um gesto pequeno, sem plateia.", "Ajude sem postar, sem cobrar retorno.", "O bem secreto transforma quem faz."], foto: "Um gesto discreto de ajuda, sem ninguém vendo." },
        { tag: "Reflexão", ic: "💛", h: "Generosidade", a: "não é dinheiro.", c: ["Tempo, escuta e presença também são doação.", "Às vezes o que falta ao outro é atenção.", "Doar é estar disponível."], foto: "Você ouvindo alguém com atenção plena." },
        { tag: "Virada", ic: "✨", h: "Quem serve", a: "encontra sentido.", c: ["O vazio diminui quando você olha pra fora.", "Propósito aponta pro próximo, não pro espelho.", "Amor em prática é a maior entrega."], foto: "Você abraçando ou ajudando alguém, sorrindo." },
        { tag: "CTA", ic: "🙌", h: "Bora", a: "servir mais?", c: ["Salva pra lembrar de doar hoje.", "Marca quem tem um coração generoso.", "Me segue pra mais sobre propósito."], foto: "Mãos dadas, num gesto de cuidado e entrega." },
      ],
      // Aceitação / soltar o controle
      [
        { tag: "Gancho", ic: "🎛️", h: "Quer controlar", a: "tudo?", c: ["Tentar segurar cada detalhe esgota qualquer um.", "Como achar paz no que não depende de você."], foto: "Você tenso, tentando segurar coisas demais." },
        { tag: "Verdade", ic: "🌑", h: "Controle é", a: "ilusão.", c: ["Boa parte da vida não está nas suas mãos.", "Lutar contra o incontrolável só cansa.", "Aceitar não é desistir, é parar de sofrer."], foto: "Mãos tentando segurar areia escorrendo." },
        { tag: "Prática", ic: "🙏", h: "Separe o que", a: "depende de você.", c: ["Aja no que está no seu alcance.", "Entregue o resto, solte a tentativa.", "Foco na sua parte, paz no resto."], foto: "Você de mãos abertas, entregando o controle." },
        { tag: "Reflexão", ic: "🌬️", h: "Confiar", a: "alivia o peso.", c: ["Você não precisa carregar o mundo.", "Soltar é descanso, não derrota.", "Paz nasce da confiança."], foto: "Você respirando fundo, com os ombros relaxando." },
        { tag: "Virada", ic: "✨", h: "Soltar é", a: "ganhar leveza.", c: ["O que é seu encontra o caminho.", "Menos controle, mais presença.", "A vida flui melhor sem o punho fechado."], foto: "Você sereno, olhar tranquilo no horizonte." },
        { tag: "CTA", ic: "🙌", h: "Bora", a: "soltar o controle?", c: ["Salva pra lembrar nos dias tensos.", "Marca quem quer controlar tudo.", "Me segue pra mais sobre paz interior."], foto: "Você de braços abertos, leve e em paz." },
      ],
    ],
  },
};
