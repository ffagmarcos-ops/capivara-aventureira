// BANCO DE DADOS DA ENCICLOPÉDIA DA CAPIVARA (FAUNA BRASILEIRA)

const curioData = {
    'saúva': 'As formigas-saúva são as fazendeiras da natureza! Elas cortam folhas para cultivar fungos.',
    'cortadeira': 'Elas cortam folhas não para comer, mas para cultivar fungos.',
    'lava-pé': 'A formiga-lava-pé tem uma picada que arde muito para se defender.',
    'fantasma': 'A formiga-fantasma é tão pequenininha e clarinha que parece transparente.',
    'formiga': 'Carregam até 50x seu peso.',
    'jataí': 'A abelha-jataí é uma abelhinha brasileira sem ferrão! Ela faz seu ninho em muros.',
    'arapuá': 'Adora se enrolar no cabelo das pessoas quando ameaçada, mas não tem ferrão.',
    'mamangava': 'É uma abelha gigante e gordinha que adora polinizar a flor do maracujá!',
    'abelha': 'São as chefs da natureza! Polinizam flores para termos frutas e mel.',
    'marimbondo': 'Eles ajudam as plantas comendo lagartas. Mas cuidado, eles picam!',
    'bem-te-vi': 'Ele tem esse nome porque o seu canto parece muito que ele está dizendo "Bem-te-vi!".',
    'joão-de-barro': 'É o passarinho engenheiro! Constrói uma casa de barro super resistente.',
    'sabiá-laranjeira': 'É considerado a ave símbolo do Brasil e canta lindo no fim da tarde.',
    'beija-flor': 'É a única ave do mundo que consegue voar para trás!',
    'quero-quero': 'Faz seus ninhos no chão e é um ótimo vigia: grita muito se alguém chegar perto!',
    'pardal': 'Aprenderam a viver nas cidades juntinho com os humanos.',
    'pombo': 'Os pombos têm um super GPS na cabeça e sempre sabem como voltar para casa.',
    'rolinha': 'Parente pequeno do pombo, muito dócil e adora ciscar no chão procurando sementes.',
    'tucano': 'O bico gigante não é pesado! É cheio de furinhos por dentro.',
    'arara': 'Costumam escolher um único parceiro para a vida toda. São muito românticas!',
    'maritaca': 'Parentes dos papagaios e andam em bandos muito barulhentos.',
    'coruja': 'Conseguem virar a cabeça quase totalmente para trás para olhar!',
    'carcará': 'Gavião muito esperto que vive no chão procurando comida. Famoso no sertão.',
    'pássaro': 'Muitos cantam para dizer "Este jardim é meu e da minha família!"',
    'passarinho': 'Muitos cantam para dizer "Este jardim é meu e da minha família!"',
    'capivara': 'As capivaras são os maiores roedores do planeta Terra e amam nadar!',
    'sagui': 'Macaquinho que tem garras parecidas com as dos gatos para subir em árvores.',
    'mico': 'Micos adoram viver em família! O papai mico ajuda carregando os bebês.',
    'tatu-bola': 'Consegue se enrolar até virar uma bola de armadura perfeita!',
    'tatu-galinha': 'A carapaça dele tem "anéis" que o ajudam a dobrar o corpo e cavar.',
    'tatu': 'Eles têm armaduras naturais feitas de osso para se protegerem.',
    'bicho-preguiça': 'Tão lentas que às vezes crescem algas verdes nos seus pelos para camuflagem!',
    'tamanduá': 'Não tem dentes! Usa a língua super comprida e grudenta para engolir formigas.',
    'onça-pintada': 'É o maior felino das Américas e adora nadar em rios para caçar!',
    'jaguatirica': 'Parece uma onça em miniatura, mas vive mais no chão das florestas menores.',
    'lobo-guará': 'Adora comer frutas, principalmente a lobeira, e parece uma raposa de pernas longas.',
    'cachorro-do-mato': 'Raposinhas brasileiras noturnas que andam sozinhas pelas estradas de terra.',
    'gambá': 'O gambá (ou saruê) é um marsupial! Tem uma bolsinha na barriga igual aos cangurus.',
    'quati': 'Andam em bandos enormes e andam sempre com o rabo listrado empinado.',
    'morcego': 'Os únicos mamíferos do mundo que sabem voar de verdade.',
    'gato': 'Têm bigodes super-sensíveis que os ajudam a medir o tamanho de buracos!',
    'cachorro': 'O olfato deles é tão forte que conseguem farejar coisas enterradas fundo!',
    'borboleta-monarca': 'Viajam milhares de quilômetros todos os anos em migração.',
    'borboleta-coruja': 'Tem desenhos nas asas que parecem olhos gigantes de uma coruja para assustar pássaros.',
    'borboleta': 'Elas sentem o sabor das flores usando os próprios pés!',
    'besouro-rinoceronte': 'Tem um chifre parecido com o do rinoceronte, mas é inofensivo.',
    'besouro': 'Alguns são tão fortes que conseguem levantar mais de 1000 vezes o próprio peso!',
    'louva-a-deus': 'Ficam paradinhos como se estivessem rezando, para pegar moscas de surpresa.',
    'bicho-pau': 'Mestres do disfarce! Imitam gravetos de árvores perfeitamente.',
    'caranguejeira': 'Apesar do tamanho assustador, a caranguejeira não tem veneno perigoso para humanos.',
    'armadeira': 'Levanta as patas da frente como se fosse lutar quando está brava.',
    'aranha': 'Engenheiras incríveis que constroem teias super fortes para capturar mosquitos.',
    'escorpião': 'Eles brilham no escuro se você iluminar com uma luz ultravioleta!',
    'centopeia': 'O nome significa "cem pés", mas podem ter de 30 a mais de 300 patinhas.',
    'piolho-de-cobra': 'Inofensivo! Se tocado, ele se enrola parecendo uma mola de relógio.',
    'barata': 'Faxineiras da natureza, já existiam na época dos dinossauros!',
    'cupim': 'Constroem castelos de terra super altos que têm ar condicionado natural.',
    'joaninha': 'Super-heroínas das plantas, adoram comer pulgões!',
    'grilo': 'Fazem música esfregando as asas, como se tocassem um violino!',
    'caracol': 'Levam sua própria casinha nas costas e deixam um caminho prateado.',
    'sapo-cururu': 'É gigante e tem bolsas de veneno atrás da cabeça.',
    'perereca': 'Têm bolinhas grudadas nas pontas dos dedos que funcionam como ventosas.',
    'rã': 'Pele lisa, pernas longas e vive pulando dentro d\'água.',
    'sapo': 'Ajudam comendo mosquitos e insetos chatos que transmitem doenças!',
    'lagartixa': 'Andam de cabeça para baixo no teto e limpam a casa de aranhas!',
    'teiú': 'Um dos maiores lagartos do Brasil, pode ter mais de um metro de comprimento!',
    'iguana': 'Parecem mini dinossauros e adoram tomar sol em cima de árvores altas.',
    'jiboia': 'Não tem veneno! É uma cobra que caça apertando a presa bem forte.',
    'sucuri': 'Uma das maiores cobras do mundo, vive escondida dentro dos rios.',
    'cascavel': 'Tem um chocalho na ponta do rabo que serve de alerta.',
    'jararaca': 'Se camufla perfeitamente nas folhas secas do chão.',
    'coral': 'É colorida (vermelha, branca e preta) para avisar que é perigosa.',
    'cobra': 'Sentem o cheiro das coisas usando a língua bifurcada.',
    'tartaruga-tigre': 'Tem listras amarelas e adora nadar.',
    'jabuti': 'Vive muito! Alguns podem viver mais de 80 anos andando devagarinho pela mata.',
    'cágado': 'Dobra o pescoço de lado para guardar a cabeça no casco!'
};

const premiumData = {
    'saúva': { diet: 'Fungos cultivados a partir das folhas cortadas.', habitat: 'Florestas e áreas rurais da América do Sul.', family: 'Formicidae', subspecies: 'Cerca de 15 espécies no Brasil.', funFact: 'A rainha de um formigueiro de saúvas pode viver até 15 anos!', role: 'Aram a terra e reciclam nutrientes na floresta.', danger: 'Inofensiva, mas a mordida dói bastante!', status: '🟢 Pouco Preocupante' },
    'abelha': { diet: 'Néctar e pólen.', habitat: 'Campos e matas no mundo todo.', family: 'Apidae', subspecies: '20.000 espécies.', funFact: 'Elas se comunicam dançando para avisar onde estão as melhores flores.', role: 'Polinizadoras supremas. Sem elas, não teríamos a maioria das frutas!', danger: 'Apenas observe! Podem picar para defender a colmeia.', status: '🟡 Atenção (Ameaçadas por agrotóxicos)' },
    'bem-te-vi': { diet: 'Insetos, frutas, pequenos peixes.', habitat: 'América Latina.', family: 'Tyrannidae', subspecies: 'Pitangus sulphuratus.', funFact: 'São super valentes e atacam aves maiores, como gaviões, para proteger o ninho.', role: 'Dispersor de sementes e controlador de insetos.', danger: 'Inofensivo. Aprecie o canto!', status: '🟢 Pouco Preocupante' },
    'joão-de-barro': { diet: 'Pequenos insetos e minhocas que encontra no chão.', habitat: 'Campos e áreas urbanas da América do Sul.', family: 'Furnariidae', subspecies: 'Furnarius rufus.', funFact: 'A porta da casinha de barro deles tem formato de labirinto para impedir que o vento frio e a chuva entrem!', role: 'Controla insetos e constrói casinhas que depois servem de abrigo para outros passarinhos.', danger: 'Amigável e inofensivo. Excelente vizinho!', status: '🟢 Pouco Preocupante' },
    'sabiá-laranjeira': { diet: 'Frutas maduras que caem no chão e pequenos insetos.', habitat: 'Florestas tropicais e cidades brasileiras.', family: 'Turdidae', subspecies: 'Turdus rufiventris.', funFact: 'O sabiá-laranjeira consegue imitar o canto de outros passarinhos e até barulhos humanos, como apitos, para enriquecer seu repertório!', role: 'Ajuda a plantar novas árvores espalhando sementes de frutas pelas florestas.', danger: 'Inofensivo e cantor. Adora cantar no início da manhã.', status: '🟢 Pouco Preocupante' },
    'beija-flor': { diet: 'Néctar doce das flores e minúsculos insetos.', habitat: 'Jardins e matas de todas as Américas.', family: 'Trochilidae', subspecies: 'Mais de 250 espécies no Brasil.', funFact: 'Suas asas batem tão rápido (até 80 vezes por segundo!) que eles conseguem ficar parados no ar e voar de costas.', role: 'Super polinizador! Transporta o pólen de flor em flor ajudando na reprodução das plantas.', danger: 'Inofensivo e veloz. Respeite o tempo dele de sugar as flores.', status: '🟢 Pouco Preocupante' },
    'quero-quero': { diet: 'Insetos e pequenos invertebrados na grama.', habitat: 'Campos abertos e gramados brasileiros.', family: 'Charadriidae', subspecies: 'Vanellus chilensis.', funFact: 'Para afastar predadores do ninho que fica no chão, eles fingem estar machucados em outro lugar para atrair a atenção do inimigo para longe de seus ovos!', role: 'Funciona como o "alarme" da natureza, avisando outros animais da aproximação de perigo.', danger: 'Observe de longe! Eles podem raspar a asa em você para afastar intrusos.', status: '🟢 Pouco Preocupante' },
    'tucano': { diet: 'Frutas nativas, mas também come ovos e pequenos répteis.', habitat: 'Copas das árvores das florestas tropicais.', family: 'Ramphastidae', subspecies: 'Tucano-toco (Ramphastos toco).', funFact: 'O bico gigante do tucano serve como um "ar condicionado" para ajudar a controlar a temperatura do seu corpo.', role: 'Excelente plantador de florestas, pois engole frutas grandes e espalha as sementes inteiras.', danger: 'Silvestre. Tem bico forte, então observe apenas à distância.', status: '🟢 Pouco Preocupante' },
    'arara': { diet: 'Sementes duras, castanhas e frutas silvestres.', habitat: 'Florestas tropicais como Amazônia e Cerrado.', family: 'Psittacidae', subspecies: 'Arara-azul (Anodorhynchus hyacinthinus).', funFact: 'Elas adoram lamber e comer argila ou barro em paredões de terra. Isso serve como um remédio natural para neutralizar toxinas de sementes venenosas que comem!', role: 'Espalha sementes grandes e ajuda a quebrar cascas duras de frutos no chão da mata.', danger: 'Bico muito poderoso. Nunca tente tocar ou alimentar uma arara selvagem.', status: '🟡 Vulnerável (Devido ao tráfico de animais)' },
    'coruja': { diet: 'Pequenos roedores como ratos, lagartos e insetos.', habitat: 'Florestas, campos e até telhados urbanos.', family: 'Strigidae', subspecies: 'Coruja-buraqueira (Athene cunicularia).', funFact: 'Elas conseguem girar a cabeça em até 270 graus! Quase uma volta completa para olhar atrás!', role: 'Controlador natural de pragas, ajudando a manter cidades e campos limpos de roedores.', danger: 'Garras e bicos afiados. Nunca tente tocar em uma coruja ou seu ninho.', status: '🟢 Pouco Preocupante' },
    'carcará': { diet: 'Pequenos mamíferos, cobras, carcaças e pequenos répteis.', habitat: 'Áreas abertas, pastagens e beiras de estrada.', family: 'Falconidae', subspecies: 'Caracara plancus.', funFact: 'Ele é um predador oportunista genial: se vê uma queimada no cerrado, corre em direção ao fogo para capturar insetos que tentam fugir das chamas!', role: 'Ajuda a limpar a natureza comendo restos orgânicos e controlando populações de cobras.', danger: 'Garras fortes de predador. Mantenha distância segura.', status: '🟢 Pouco Preocupante' },
    'capivara': { diet: 'Grama e plantas aquáticas.', habitat: 'Bordas de rios da América do Sul.', family: 'Caviidae', subspecies: 'Hydrochoerus hydrochaeris.', funFact: 'Os dentes da capivara nunca param de crescer! Elas precisam roer galhos e cascas de árvore o tempo todo para gastá-los e não ficarem muito compridos.', role: 'Herbívoro de grande porte, serve de presa para onças e jacarés.', danger: 'Pacífica, mas não chegue muito perto se houver filhotes.', status: '🟢 Pouco Preocupante' },
    'sagui': { diet: 'Frutas, insetos e a seiva doce que retira das árvores.', habitat: 'Florestas brasileiras e parques urbanos.', family: 'Callitrichidae', subspecies: 'Sagui-de-tufos-brancos (Callithrix jacchus).', funFact: 'Os pais saguis são super parceiros! É o papai quem carrega os filhotinhos nas costas a maior parte do tempo.', role: 'Ajuda no controle de insetos e na dispersão de sementes menores.', danger: '⚠️ Não alimente saguis! Eles podem transmitir raiva e outras doenças.', status: '🟢 Pouco Preocupante' },
    'mico': { diet: 'Frutas, sementes, flores e insetos.', habitat: 'Matas brasileiras e áreas de proteção.', family: 'Cebidae', subspecies: 'Mico-estrela (Callithrix penicillata).', funFact: 'Eles têm um olfato tão apurado que conseguem saber se uma fruta está madura ou verde à distância e deixam marcações de cheiro para avisar o resto do bando!', role: 'Polinizadores e espalhadores de sementes nas copas das árvores.', danger: 'Deixe-os nas árvores! Eles podem morder se assustados.', status: '🟢 Pouco Preocupante' },
    'tatu': { diet: 'Cupins, formigas, larvas e pequenas frutas do cerrado.', habitat: 'Campos e florestas de Cerrado e Caatinga.', family: 'Chlamyphoridae', subspecies: 'Tatu-bola (Tolypeutes tricinctus).', funFact: 'O tatu-bola consegue se fechar completamente dentro da sua carapaça até parecer uma bola de futebol perfeita!', role: 'Excelente escavador de terra. Suas tocas depois viram abrigo para dezenas de outros animais.', danger: 'Garras fortes de escavação. Deixe-o livre na sua trilha.', status: '🟡 Ameaçado (O tatu-bola corre perigo de extinção)' },
    'bicho-preguiça': { diet: 'Folhas de árvores como a embaúba.', habitat: 'Copas das árvores na Amazônia e Mata Atlântica.', family: 'Bradypodidae', subspecies: 'Preguiça-de-três-dedos (Bradypus tridactylus).', funFact: 'Elas descem das copas das árvores apenas uma vez por semana para fazer cocô na terra, momento em que ficam vulneráveis a predadores. Elas fazem isso em um ritual no mesmo local!', role: 'Fornece um pequeno ecossistema próprio em seus pelos para besouros e traças nativas.', danger: 'Inofensiva, mas tem garras longas para se segurar em galhos.', status: '🟢 Pouco Preocupante' },
    'tamanduá': { diet: 'Cupins e formigas silvestres que encontra em formigueiros.', habitat: 'Florestas tropicais e campos abertos brasileiros.', family: 'Myrmecophagidae', subspecies: 'Tamanduá-bandeira (Myrmecophaga tridactyla).', funFact: 'Para dormir seguro no Cerrado, o tamanduá-bandeira usa sua cauda gigante e peluda como se fosse um cobertor para se aquecer e se camuflar no capim!', role: 'Mantém o equilíbrio de cupins e formigas na natureza sem destruir os ninhos.', danger: '⚠️ Cuidado: Se ameaçado, ele fica em pé e ataca com suas garras gigantes.', status: '🟡 Vulnerável' },
    'onça-pintada': { diet: 'Capivaras, jacarés, tatus.', habitat: 'Pantanal e Amazônia.', family: 'Felidae', subspecies: 'Panthera onca.', funFact: 'Ao contrário da maioria dos gatos que detestam água, a onça-pintada é uma excelente nadadora e costuma caçar jacarés e peixes mergulhando ativamente em rios!', role: 'Predador topo de cadeia. Mantém o equilíbrio das florestas.', danger: '🚨 Muito perigosa. Fique longe e chame um adulto!', status: '🔴 Quase Ameaçada (Perda de habitat)' },
    'jaguatirica': { diet: 'Roedores, aves, pequenos lagartos e cobras.', habitat: 'Florestas densas desde a Amazônia até o Sul do país.', family: 'Felidae', subspecies: 'Leopardus pardalis.', funFact: 'Ela tem manchas brancas atrás das orelhas chamadas de "ocelos" que parecem olhos falsos, servindo para que os filhotes consigam seguir a mãe no escuro da floresta densa!', role: 'Predador de médio porte que ajuda a controlar a população de pequenos roedores silvestres.', danger: '🚨 Carnívoro silvestre. Fique longe e chame um adulto!', status: '🟢 Pouco Preocupante' },
    'lobo-guará': { diet: 'Frutos da lobeira, pequenos mamíferos e aves.', habitat: 'Campos abertos do Cerrado brasileiro.', family: 'Canidae', subspecies: 'Chrysocyon brachyurus.', funFact: 'As pernas longas e finas do lobo-guará não são para correr rápido, mas funcionam como "pernas de pau" biológicas para ajudá-lo a enxergar acima do capim alto do Cerrado brasileiro.', role: 'Ajuda a plantar a fruta-do-lobo pelo Cerrado, espalhando suas sementes.', danger: 'Tímido e inofensivo para humanos. Não se aproxime para não assustá-lo.', status: '🟡 Vulnerável' },
    'gambá': { diet: 'Frutos, insetos, pequenos roedores, escorpiões e cobras.', habitat: 'Florestas e áreas verdes perto de casas.', family: 'Didelphidae', subspecies: 'Gamba-de-orelha-preta (Saruê).', funFact: 'Os gambás (saruês) são naturalmente imunes ao veneno de cobras cascavel e jararaca, sendo excelentes protetores que ajudam a controlar cobras perto de residências!', role: 'Controlador biológico fantástico! Eles são imunes ao veneno de cobras e comem escorpiões perigosos.', danger: 'Inofensivo, mas pode soprar forte e fingir de morto se assustado.', status: '🟢 Pouco Preocupante' },
    'quati': { diet: 'Frutas, ovos de aves, lagartixas, insetos e raízes.', habitat: 'Florestas tropicais e parques ecológicos públicos.', family: 'Procyonidae', subspecies: 'Nasua nasua.', funFact: 'Os quatis têm tornozelos super flexíveis que conseguem girar em até 180 graus! Isso permite que eles desçam de árvores de cabeça para baixo, igualzinho aos esquilos.', role: 'Espalham sementes e ajudam a remexer o solo da floresta atrás de insetos.', danger: '⚠️ Dentes e garras muito afiados. Nunca tente tocá-los ou alimentá-los.', status: '🟢 Pouco Preocupante' },
    'borboleta': { diet: 'Néctar de flores doce e sais minerais da lama.', habitat: 'Jardins, campos e florestas tropicais.', family: 'Nymphalidae', subspecies: 'Ex: Borboleta-coruja (Caligo).', funFact: 'As borboletas usam os sensores de paladar localizados em seus próprios pés para saber se a folha é saborosa!', role: 'Grande polinizadora de flores silvestres e alimento para aves na floresta.', danger: 'Inofensiva e frágil. Nunca aperte suas asas coloridas!', status: '🟢 Pouco Preocupante' },
    'joaninha': { diet: 'Pequenos pulgões e insetos que estragam plantas.', habitat: 'Hortas, jardins e plantações.', family: 'Coccinellidae', subspecies: 'Mais de 5.000 espécies no mundo.', funFact: 'Quando uma joaninha se sente ameaçada, ela finge de morta e solta um líquido amarelo de cheiro ruim pelas articulações das patinhas para afastar predadores!', role: 'Controle natural de pragas, protegendo flores e plantações sem precisar de venenos.', danger: 'Totalmente inofensiva e amiga do jardim.', status: '🟢 Pouco Preocupante' },
    'louva-a-deus': { diet: 'Mosquitos, moscas e outros pequenos insetos.', habitat: 'Grama, folhagens de arbustos e árvores.', family: 'Mantidae', subspecies: 'Mantis religiosa.', funFact: 'Eles têm uma visão fantástica e são os únicos insetos do mundo que conseguem girar a cabeça para olhar pros lados!', role: 'Controlador de insetos do jardim, caçando pragas de forma rápida e silenciosa.', danger: 'Inofensivo para humanos, mas tem patinhas da frente com espinhos.', status: '🟢 Pouco Preocupante' },
    'bicho-pau': { diet: 'Folhas frescas de árvores como a goiabeira.', habitat: 'Galhos de arbustos em florestas e jardins.', family: 'Phasmatidae', subspecies: 'Cladomorphus.', funFact: 'Se um predador pegar o bicho-pau por uma das pernas, ele consegue soltar a patinha de propósito para escapar e depois ela se regenera na próxima troca de pele!', role: 'Consumidor de folhas no dossel da mata e alimento para aves.', danger: 'Inofensivo e extremamente frágil.', status: '🟢 Pouco Preocupante' },
    'aranha': { diet: 'Mosquitos, baratas, moscas e grilos.', habitat: 'Teias em jardins, paredes e cantos de pedras.', family: 'Theridiidae / Theraphosidae (Caranguejeiras).', subspecies: 'Aranha-caranguejeira (Grammostola).', funFact: 'Algumas aranhas, como a aranha-boleadeira, não fazem teia: elas criam uma única linha com uma gota grudenta na ponta e a giram no ar como um caubói para pescar mariposas!', role: 'Controlador crucial de mosquitos, moscas e baratas em casas e matas.', danger: '⚠️ Algumas espécies picam. Não toque em teias ou buracos na terra!', status: '🟢 Pouco Preocupante' },
    'escorpião': { diet: 'Baratas, grilos, cupins e outras aranhas.', habitat: 'Sob pedras, troncos caídos e locais escuros.', family: 'Buthidae', subspecies: 'Escorpião-amarelo (Tityus serrulatus).', funFact: 'Eles brilham com uma cor azul-esverdeada brilhante quando iluminados por uma lanterna de luz negra!', role: 'Controla a população de insetos indesejados nas cidades e campos.', danger: '🚨 Perigo: Picada dolorosa e com veneno ativo. Nunca toque e chame um adulto!', status: '🟢 Pouco Preocupante' },
    'sapo-cururu': { diet: 'Insetos e aranhas.', habitat: 'América Central e do Sul.', family: 'Bufonidae', subspecies: 'Rhinella marina.', funFact: 'Para se defender de predadores, o sapo-cururu infla os pulmões de ar até ficar parecendo um balão redondo, tornando-se grande demais para ser engolido!', role: 'Um devorador de mosquitos! Excelente para ter no jardim.', danger: 'Não pegue na mão! Tem glândulas de veneno nas costas.', status: '🟢 Pouco Preocupante' },
    'lagartixa': { diet: 'Pequenas aranhas, formigas, moscas e mosquitos.', habitat: 'Paredes e tetos de casas e cascas de árvores.', family: 'Gekkonidae', subspecies: 'Hemidactylus mabouia.', funFact: 'As lagartixas não têm pálpebras nos olhos! Para manter os olhos limpos e úmidos, elas usam a própria língua comprida para lamber o globo ocular!', role: 'A maior faxineira das nossas casas, comendo insetos e mosquitos da dengue.', danger: 'Inofensiva e super rápida. Não tente pegá-la!', status: '🟢 Pouco Preocupante' },
    'teiú': { diet: 'Frutas, ovos, insetos e pequenos roedores.', habitat: 'Campos abertos e quintais no Brasil todo.', family: 'Teiidae', subspecies: 'Salvator merianae.', funFact: 'Durante o inverno, o teiú entra em um estado de quase hibernação dentro de sua toca subterrânea, onde seu coração bate bem devagarinho por até 4 meses sem comer nada!', role: 'Ajuda a plantar frutas dispersando sementes e consome restos orgânicos.', danger: '⚠️ Silvestre. Se acuado, pode morder ou bater o rabo forte.', status: '🟢 Pouco Preocupante' },
    'iguana': { diet: 'Folhas verdes, flores e frutos jovens.', habitat: 'Copas de árvores perto de lagos e rios nativos.', family: 'Iguanidae', subspecies: 'Iguana iguana.', funFact: 'A iguana possui um "terceiro olho" no topo da cabeça chamado olho parietal! Ele não enxerga imagens, mas detecta variações de luz para avisar se há predadores voando por cima.', role: 'Consumidor herbívoro nas copas das matas e alimento para aves de rapina.', danger: 'Garras e cauda fortes. Observe apenas à distância.', status: '🟢 Pouco Preocupante' },
    'cobra': { diet: 'Roedores, rãs, ovos e pequenos pássaros.', habitat: 'Florestas densas, gramados e corpos d\'água.', family: 'Boidae (Jiboias/Sucuris) / Viperidae (Jararacas/Cascavéis).', subspecies: 'Jiboia-constritora (Boa constrictor).', funFact: 'Algumas cobras, como a cascavel, possuem foscas loreais: furos entre os olhos e as narinas que funcionam como câmeras térmicas para "ver" o calor do corpo de presas no escuro!', role: 'Controladores indispensáveis de roedores, evitando pragas nos campos e cidades.', danger: '🚨 Algumas cobras têm veneno ativo. Afaste-se e chame um adulto!', status: '🟢 Pouco Preocupante' },
    'tartaruga': { diet: 'Plantas aquáticas, peixes pequenos, algas e frutos.', habitat: 'Lagos, rios e terra firme (Jabutis).', family: 'Testudinidae (Jabutis) / Podocnemididae (Cágados).', subspecies: 'Jabuti-piranga (Chelonoidis carbonarius).', funFact: 'O casco do jabuti faz parte do seu próprio esqueleto, sendo formado por suas costelas e coluna vertebral fundidas. Eles sentem cócegas se você acariciar o casco!', role: 'Dispersa sementes de frutos caídos no chão da mata.', danger: 'Inofensivo. Respeite o casco protetor dele.', status: '🟢 Pouco Preocupante' }
};

function getPremiumData(animalName) {
    const nameKey = animalName.toLowerCase();
    const matchingKey = Object.keys(premiumData).find(k => nameKey.includes(k));
    if (matchingKey) return premiumData[matchingKey];
    
    // Geração Inteligente baseada na Categoria (Biólogo Virtual)
    const cat = getCorrectCategory(animalName);
    
    let genRole = 'Faz parte da maravilhosa teia da vida, conectando plantas e outros animais.';
    let genDanger = 'Aproxime-se com respeito e não toque.';
    let genStatus = '🟢 Desconhecido (Na dúvida, proteja!)';
    
    // Busca uma curiosidade específica no curioData
    const matchingCurioKey = Object.keys(curioData).find(k => nameKey.includes(k));
    let genFact = matchingCurioKey ? curioData[matchingCurioKey] : '';
    
    if (!genFact) {
        if (cat === 'inseto') {
            genRole = 'Base da cadeia alimentar. Reciclam matéria orgânica ou polinizam flores!';
            genDanger = 'A maioria é inofensiva, mas alguns picam. Observe de perto, mas sem tocar!';
            genFact = 'Os insetos não possuem pulmões! Eles respiram por micro-orifícios nas laterais do corpo chamados espiráculos.';
        } else if (cat === 'ave') {
            genRole = 'Semeadores das florestas! Espalham sementes por onde voam e controlam insetos.';
            genDanger = 'Faça silêncio e observe de longe para não assustar!';
            genFact = 'As aves possuem ossos ocos e sacos de ar internos super leves, facilitando e dando eficiência ao voo.';
        } else if (cat === 'mamifero') {
            genRole = 'Cruciais para o ecossistema, pastando, caçando ou dispersando sementes pesadas.';
            genDanger = 'Animais silvestres podem morder de medo. Mantenha distância!';
            genFact = 'Os mamíferos são os únicos animais com pelos de verdade no corpo e que produzem leite para alimentar os filhotes.';
        } else if (cat === 'reptil') {
            genRole = 'Controladores populacionais de ratos e pequenos mamíferos.';
            genDanger = '⚠️ Atenção: Répteis podem se defender com modificações fortes ou veneno. Chame um adulto!';
            genStatus = '🟡 Muitas espécies perdem habitat.';
            genFact = 'Os répteis têm sangue frio e dependem inteiramente da luz do sol para se aquecer e ter energia para caçar e se mover.';
        } else if (cat === 'anfibio') {
            genRole = 'Comem milhares de mosquitos (inclusive os da dengue) e indicam se a água é limpa!';
            genDanger = 'Pele muito sensível. Nunca jogue sal ou pegue na mão!';
            genStatus = '🔴 Sensíveis à poluição da água.';
            genFact = 'Os anfíbios não bebem água pela boca! Eles absorvem umidade diretamente pela pele extremamente sensível do corpo.';
        } else if (cat === 'aracnideo') {
            genRole = 'Grandes arquitetas e caçadoras que impedem o mundo de ser dominado por moscas!';
            genDanger = '🚨 Cuidado! Não toque em teias ou buracos escondidos. Algumas têm veneno ativo.';
            genFact = 'As aranhas produzem fios de teia que começam no formato líquido dentro delas e viram seda super resistente ao tocar o ar.';
        } else {
            genFact = `O ${animalName} desempenha um papel ecológico fantástico e possui características únicas adaptadas ao seu ecossistema.`;
        }
    }

    return {
        diet: 'Alimentação nativa adaptada à sua família biológica.',
        habitat: 'Diversidade do ecossistema local do Brasil.',
        family: 'Classificação Científica Neotropical',
        subspecies: 'Possui muitas variações adaptadas ao clima.',
        funFact: genFact,
        role: genRole,
        danger: genDanger,
        status: genStatus
    };
}

// ENDLESS TRIVIA QUIZ BANK
const endlessTriviaBank = [
    { q: 'Qual ave consegue voar para trás?', o: ['Sabiá', 'Beija-flor', 'Pombo'], a: 1 },
    { q: 'O que o João-de-barro usa para fazer sua casa?', o: ['Folhas secas', 'Barro e lama', 'Teias de aranha'], a: 1 },
    { q: 'Qual é o maior roedor do mundo que vive no Brasil?', o: ['Rato', 'Castor', 'Capivara'], a: 2 },
    { q: 'Por onde os sapos absorvem água?', o: ['Pela boca', 'Pela pele da barriga', 'Pelos olhos'], a: 1 },
    { q: 'Para que serve o chocalho da cobra cascavel?', o: ['Tocar música', 'Avisar que ela está ali', 'Hipnotizar presas'], a: 1 },
    { q: 'Qual desses animais é um marsupial (tem bolsa na barriga)?', o: ['Gambá (Saruê)', 'Macaco', 'Capivara'], a: 0 },
    { q: 'O que a formiga saúva faz com as folhas que corta?', o: ['Ela come as folhas', 'Faz roupas', 'Cultiva fungos para comer'], a: 2 },
    { q: 'Qual inseto brilha à noite para atrair parceiros?', o: ['Besouro', 'Vaga-lume', 'Gafanhoto'], a: 1 },
    { q: 'Como a abelha avisa onde estão as flores para suas amigas?', o: ['Fazendo uma dança', 'Zumbindo alto', 'Deixando mel no caminho'], a: 0 },
    { q: 'Qual desses não é um inseto?', o: ['Borboleta', 'Aranha', 'Joaninha'], a: 1 },
    { q: 'O bicho-preguiça desce da árvore quantas vezes por semana para fazer cocô?', o: ['Todos os dias', 'Apenas 1 vez por semana', 'Nunca desce'], a: 1 },
    { q: 'Para que servem os bigodes do gato?', o: ['Para medir se ele cabe em um buraco', 'Apenas para deixá-lo bonito', 'Para ouvir melhor'], a: 0 },
    { q: 'As araras costumam comer o quê nos paredões de terra?', o: ['Minhocas', 'Barro rico em minerais', 'Pedras brilhantes'], a: 1 },
    { q: 'Quantas patas tem uma centopeia em média?', o: ['Sempre 100 patas', 'Pode ter entre 30 e 300 patas', '10 patas'], a: 1 },
    { q: 'Qual desses felinos vive livre nas matas do Brasil?', o: ['Leão', 'Tigre', 'Onça-pintada'], a: 2 }
];

// VALIDADOR BIOLÓGICO DE CATEGORIAS
const categoryMap = {
    'saúva': 'inseto', 'cortadeira': 'inseto', 'lava-pé': 'inseto', 'fantasma': 'inseto', 'formiga': 'inseto', 'jataí': 'inseto', 'arapuá': 'inseto', 'mamangava': 'inseto', 'abelha': 'inseto', 'marimbondo': 'inseto', 'borboleta': 'inseto', 'besouro': 'inseto', 'louva-a-deus': 'inseto', 'bicho-pau': 'inseto', 'barata': 'inseto', 'cupim': 'inseto', 'joaninha': 'inseto', 'grilo': 'inseto', 'lagarta': 'inseto', 'mosquito': 'inseto', 'centopeia': 'inseto', 'piolho-de-cobra': 'inseto',
    
    'bem-te-vi': 'ave', 'joão-de-barro': 'ave', 'sabiá': 'ave', 'beija-flor': 'ave', 'quero-quero': 'ave', 'pardal': 'ave', 'pombo': 'ave', 'rolinha': 'ave', 'tucano': 'ave', 'arara': 'ave', 'maritaca': 'ave', 'coruja': 'ave', 'carcará': 'ave', 'pássaro': 'ave', 'passarinho': 'ave',
    
    'capivara': 'mamifero', 'sagui': 'mamifero', 'mico': 'mamifero', 'tatu': 'mamifero', 'preguiça': 'mamifero', 'tamanduá': 'mamifero', 'lobo': 'mamifero', 'cachorro': 'mamifero', 'gambá': 'mamifero', 'quati': 'mamifero', 'morcego': 'mamifero', 'rato': 'mamifero', 'macaco': 'mamifero',
    
    'onça': 'felino', 'jaguatirica': 'felino', 'gato': 'felino', 'leão': 'felino', 'indigo': 'felino',
    
    'caranguejeira': 'aracnideo', 'armadeira': 'aracnideo', 'aranha': 'aracnideo', 'escorpião': 'aracnideo',
    
    'sapo': 'anfibio', 'perereca': 'anfibio', 'rã': 'anfibio',
    
    'lagartixa': 'reptil', 'teiú': 'reptil', 'iguana': 'reptil', 'jiboia': 'reptil', 'sucuri': 'reptil', 'cascavel': 'reptil', 'jararaca': 'reptil', 'coral': 'reptil', 'cobra': 'reptil', 'tartaruga': 'reptil', 'jabuti': 'reptil', 'cágado': 'reptil', 'jacaré': 'reptil',
    
    'caracol': 'inseto'
};

function getCorrectCategory(name) {
    const n = name.toLowerCase();
    for (let key in categoryMap) {
        if (n.includes(key)) return categoryMap[key];
    }
    return null;
}
