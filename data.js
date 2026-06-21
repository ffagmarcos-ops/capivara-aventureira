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
    'cágado': 'Dobra o pescoço de lado para guardar a cabeça no casco!',
    'mosca': 'As moscas usam seus pezinhos para sentir o gosto das coisas antes de comer!',
    'pernilongo': 'Apenas os pernilongos fêmeas picam, pois precisam de nutrientes do sangue para seus ovinhos.',
    'gafanhoto': 'Os gafanhotos têm os ouvidos localizados em suas barrigas e pulam distâncias incríveis!',
    'lagarta': 'As lagartas comem folhas o dia todo para acumular energia e virarem lindas borboletas.',
    'mariposa': 'As mariposas adoram a luz à noite e têm antenas peludinhas parecidas com pequenas penas.',
    'opilião': 'Parece uma aranha com pernas gigantes, mas é totalmente inofensivo e não produz teia nem veneno!',
    'piolho-de-cobra': 'Também chamado de embuá, ele come folhas secas e se enrola todo se você assustá-lo!',
    'tatu-de-jardim': 'Ele respira por pequenas guelras e por isso precisa morar em lugares bem úmidos do jardim.',
    'lesma': 'As lesmas não têm concha e produzem um muco escorregadio que as ajuda a andar sem se machucar.',
    'minhoca': 'Elas têm cinco corações e respiram inteiramente pela pele úmida, cavando túneis embaixo da terra.',
    'galinha': 'As galinhas conversam entre si e usam mais de 30 sons diferentes para se comunicar!',
    'rato': 'Os ratos têm dentes super fortes que nunca param de crescer e por isso precisam roer coisas o dia todo.',
    'betta': 'Os peixes Betta são muito corajosos e inteligentes, conseguindo reconhecer quem os alimenta todos os dias!',
    'peixinho': 'Peixinhos de aquário gostam de dormir de olhos abertos porque não possuem pálpebras!',
    'perereca': 'As pererecas têm ventosas grudentas nos dedos que as ajudam a escalar azulejos e paredes com facilidade!',
    'caramujo': 'Ao contrário das lesmas, os caramujos têm uma concha que serve de casa e refúgio quando há perigo.'
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
    'tartaruga': { diet: 'Plantas aquáticas, peixes pequenos, algas e frutos.', habitat: 'Lagos, rios e terra firme (Jabutis).', family: 'Testudinidae (Jabutis) / Podocnemididae (Cágados).', subspecies: 'Jabuti-piranga (Chelonoidis carbonarius).', funFact: 'O casco do jabuti faz parte do seu próprio esqueleto, sendo formado por suas costelas e coluna vertebral fundidas. Eles sentem cócegas se você acariciar o casco!', role: 'Dispersa sementes de frutos caídos no chão da mata.', danger: 'Inofensivo. Respeite o casco protetor dele.', status: '🟢 Pouco Preocupante' },
    'mosca': { diet: 'Líquidos doces, restos de comida e frutas maduras.', habitat: 'Casas, quintais e florestas do mundo inteiro.', family: 'Muscidae', subspecies: 'Musca domestica.', funFact: 'As moscas usam seus pezinhos para sentir o sabor das coisas antes de comer!', role: 'Ajudam a reciclar a sujeira da natureza e são alimento de aves e sapos.', danger: '⚠️ Sujas! Mantenha a comida coberta para evitar bactérias.', status: '🟢 Pouco Preocupante' },
    'pernilongo': { diet: 'Néctar de plantas (machos) e sangue (fêmeas).', habitat: 'Locais com água parada e proximidades de casas.', family: 'Culicidae', subspecies: 'Pernilongo-doméstico.', funFact: 'Somente as fêmeas picam, pois usam o sangue para dar energia para a maturação dos seus ovinhos.', role: 'Os machos polinizam flores e as larvas servem de alimento para peixes.', danger: '⚠️ Evite água parada! Podem transmitir doenças como a dengue.', status: '🟢 Pouco Preocupante' },
    'gafanhoto': { diet: 'Folhas de grama, arbustos e vegetais.', habitat: 'Gramados, jardins e plantações abertas.', family: 'Acrididae', subspecies: 'Gafanhoto-verde.', funFact: 'Os gafanhotos têm os ouvidos localizados nas laterais da barriga, logo abaixo das asas!', role: 'Alimento muito importante para aves, lagartos e pequenos mamíferos.', danger: 'Inofensivos para humanos, mas comem muitas folhas do jardim.', status: '🟢 Pouco Preocupante' },
    'lagarta': { diet: 'Folhas de plantas e árvores específicas.', habitat: 'Folhagens em jardins e florestas.', family: 'Lepidoptera (Fase Larval)', subspecies: 'Lagarta-da-couve / diversas.', funFact: 'Uma lagarta pode comer milhares de vezes o seu peso em folhas antes de se transformar em casulo.', role: 'Consumidora de plantas e polinizadora do futuro (quando virar borboleta).', danger: '⚠️ Atenção: Não toque em lagartas peludas ou coloridas, elas podem queimar a pele!', status: '🟢 Pouco Preocupante' },
    'mariposa': { diet: 'Néctar de flores e frutas maduras.', habitat: 'Jardins e florestas, ativa principalmente à noite.', family: 'Lepidoptera', subspecies: 'Mariposa-bruxa / diversas.', funFact: 'As antenas peludinhas das mariposas funcionam como super narizes para farejar parceiros e flores no escuro.', role: 'Importantes polinizadoras noturnas de flores que só abrem à noite.', danger: 'Inofensivas! Não toque nas asas para não machucar o pó protetor delas.', status: '🟢 Pouco Preocupante' },
    'opilião': { diet: 'Pequenos insetos mortos, fungos e restos vegetais.', habitat: 'Cantos úmidos de jardins, debaixo de troncos e vasos.', family: 'Cosmetidae / diversos', subspecies: 'Opilião-comum.', funFact: 'Parece muito com uma aranha de pernas longas, mas é um aracnídeo parente que não produz teia e não tem veneno!', role: 'Faxineiro de jardim que come insetos mortos e pequenos resíduos.', danger: 'Totalmente inofensivo e amigável!', status: '🟢 Pouco Preocupante' },
    'piolho-de-cobra': { diet: 'Folhas secas, pedacinhos de madeira e vegetais moles.', habitat: 'Debaixo de vasos de plantas, pedras e terra úmida.', family: 'Julidae / Spirobolidae', subspecies: 'Embuá / Gongolo.', funFact: 'Quando está com medo, ele se enrola bem apertadinho como se fosse uma mola ou um caracol.', role: 'Ajuda a adubar a terra do jardim, quebrando folhas velhas em nutrientes.', danger: 'Totalmente inofensivo. Lave as mãos após pegá-lo.', status: '🟢 Pouco Preocupante' },
    'tatu-de-jardim': { diet: 'Restos de folhas, plantas caídas e matéria orgânica úmida.', habitat: 'Ambientes úmidos e escuros, sob vasos de flores e pedras.', family: 'Armadillidiidae', subspecies: 'Tatu-bola-de-jardim.', funFact: 'Ele é na verdade um crustáceo terrestre (parente do caranguejo) e por isso respira por brânquias que precisam de umidade.', role: 'Ajuda a limpar o solo e a enriquecer a terra para as plantas.', danger: 'Totalmente inofensivo. Adora se enrolar em bolinha na sua mão!', status: '🟢 Pouco Preocupante' },
    'lesma': { diet: 'Folhas tenras, talos e frutos caídos no chão.', habitat: 'Jardins, hortas e cantos escuros e úmidos.', family: 'Limacidae', subspecies: 'Lesma-cinza.', funFact: 'As lesmas soltam um muco brilhante e escorregadio que protege sua pele sensível contra pedras afiadas.', role: 'Consome restos vegetais, ajudando na reciclagem orgânica do jardim.', danger: 'Inofensiva, mas evite tocar diretamente. Lave sempre as mãos.', status: '🟢 Pouco Preocupante' },
    'minhoca': { diet: 'Terra rica em folhas e resíduos de plantas em decomposição.', habitat: 'Solo úmido de jardins e hortas orgânicas.', family: 'Lumbricidae', subspecies: 'Minhoca-da-terra.', funFact: 'Elas não têm olhos, mas sua pele inteira sente a luz do sol para que saibam quando devem voltar para baixo da terra.', role: 'Fertiliza o solo produzindo húmus e abre túneis de ar que ajudam as plantas a crescer.', danger: 'Totalmente inofensiva e super amiga das plantas!', status: '🟢 Pouco Preocupante' },
    'galinha': { diet: 'Milho, sementes, grama, formigas e minhocas.', habitat: 'Quintais de sítios e chácaras (aves domésticas).', family: 'Phasianidae', subspecies: 'Gallus gallus domesticus.', funFact: 'As galinhas têm uma ótima memória e conseguem reconhecer e lembrar do rosto de mais de 100 pessoas e outros animais diferentes!', role: 'Controla insetos como escorpiões no quintal e fornece ovos nutritivos.', danger: '⚠️ Domesticada, mas cuidado com bicadas se mexer nos ovos ou filhotes.', status: '🟢 Domesticado / Pouco Preocupante' },
    'rato': { diet: 'Sementes, frutas, grãos e restos de alimentos humanos.', habitat: 'Tocas no solo, porões e áreas urbanas próximas ao lixo.', family: 'Muridae', subspecies: 'Rato-de-telhado / Camundongo.', funFact: 'Os dentes da frente dos ratos nunca param de crescer e eles precisam roer madeira para mantê-los curtos.', role: 'Servem de alimento para aves de rapina (gaviões, corujas) e cobras.', danger: '⚠️ Afaste-se! Ratos de rua podem transmitir doenças perigosas como a leptospirose.', status: '🟢 Pouco Preocupante' },
    'betta': { diet: 'Pequenas larvas, mosquitos e ração para peixes.', habitat: 'Aquários domésticos (originários de pântanos da Ásia).', family: 'Osphronemidae', subspecies: 'Betta splendens.', funFact: 'O peixe Betta tem um órgão chamado labirinto, que permite que ele respire o ar da superfície fora da água!', role: 'Controlador de larvas de mosquito nos riachos nativos.', danger: 'Inofensivo para humanos, mas os machos brigam entre si.', status: '🟢 Domesticado / Pouco Preocupante' },
    'peixinho': { diet: 'Algas pequenas, plantas aquáticas e ração comercial.', habitat: 'Aquários de água doce e lagos ornamentais.', family: 'Cyprinidae', subspecies: 'Peixinho-dourado (Kinguio).', funFact: 'Os peixinhos dourados têm uma memória muito melhor do que as pessoas pensam: lembram de coisas por meses!', role: 'Controlam o crescimento de algas em pequenos lagos.', danger: 'Totalmente inofensivo. Apenas observe nadar!', status: '🟢 Domesticado' },
    'perereca': { diet: 'Pequenos mosquitos, moscas, baratas e grilos.', habitat: 'Paredes úmidas de banheiros, lavanderias e plantas do jardim.', family: 'Hylidae', subspecies: 'Perereca-doméstica.', funFact: 'Têm discos adesivos nas pontas dos dedos que funcionam como ventosas para escalar azulejos retos.', role: 'Ajuda a controlar insetos voadores indesejados ao redor da casa.', danger: 'Inofensiva, mas não toque para não danificar a pele sensível dela.', status: '🟢 Pouco Preocupante' },
    'caramujo': { diet: 'Folhas macias, vegetais e algas aquáticas.', habitat: 'Solo úmido de jardins e lagos de água doce.', family: 'Ampullariidae / Lymnaeidae', subspecies: 'Caramujo-jardim.', funFact: 'Ao contrário das lesmas, os caramujos possuem uma concha em espiral resistente para se esconder.', role: 'Reciclador de plantas mortas e algas.', danger: '⚠️ Evite tocar em caramujos de jardim. Lave bem as mãos caso ocorra contato.', status: '🟢 Pouco Preocupante' },
    'leão': { diet: 'Grandes herbívoros, como zebras e antílopes.', habitat: 'Savanas e campos abertos da África e partes da Índia.', family: 'Felidae', subspecies: 'Panthera leo.', funFact: 'O rugido de um leão adulto é tão forte que pode ser ouvido a até 8 quilômetros de distância!', role: 'Predador topo de cadeia que ajuda a manter a saúde das populações de presas.', danger: '🚨 Altamente perigoso! Apenas observe em zoológicos com segurança.', status: '🟡 Vulnerável' },
    'tatu-galinha': { diet: 'Insetos, larvas, frutos e pequenas raízes.', habitat: 'Campos, cerrados e matas da América do Sul.', family: 'Dasypodidae', subspecies: 'Dasypus novemcinctus.', funFact: 'Eles quase sempre nascem em grupos de quatro filhotes gêmeos idênticos do mesmo sexo!', role: 'Controla a população de pragas e ara a terra com suas garras escavadoras.', danger: 'Inofensivo, mas evite manusear para não assustar o animal.', status: '🟢 Pouco Preocupante' },
    'maritaca': { diet: 'Sementes, castanhas e frutos de árvores nativas.', habitat: 'Florestas tropicais, cerrados e áreas urbanas arborizadas.', family: 'Psittacidae', subspecies: 'Pionus maximiliani.', funFact: 'São aves extremamente barulhentas e andam em bandos tagarelas que parecem conversar entre si!', role: 'Importante dispersora de sementes que ajuda a reflorestar matas nativas.', danger: 'Inofensiva, mas tem bico forte e morde se for segurada.', status: '🟢 Pouco Preocupante' },
    'jacaré': { diet: 'Peixes, caranguejos, pequenas aves e mamíferos.', habitat: 'Lagos, rios e pântanos (muito comum no Pantanal).', family: 'Alligatoridae', subspecies: 'Caiman yacare (Jacaré-do-pantanal).', funFact: 'Os dentes do jacaré caem e nascem de novo ao longo de toda a sua vida, podendo usar mais de 3.000 dentes!', role: 'Controlador de populações de peixes e outras espécies aquáticas.', danger: '🚨 Perigo: Carnívoro forte e veloz na água. Nunca se aproxime na beira de lagos!', status: '🟢 Pouco Preocupante' },
    'jiboia': { diet: 'Pequenos roedores, aves e lagartos grandes.', habitat: 'Matas ciliares, cerrados e florestas tropicais.', family: 'Boidae', subspecies: 'Boa constrictor.', funFact: 'Ela não possui veneno! Para caçar, ela abraça a presa bem apertado até que ela pare de respirar.', role: 'Controla a população de ratos silvestres em sítios e fazendas de forma natural.', danger: '⚠️ Serpente grande de mordida forte. Afaste-se e chame um adulto!', status: '🟢 Pouco Preocupante' },
    'sucuri': { diet: 'Peixes, capivaras, jacarés e outros mamíferos.', habitat: 'Rios, pântanos e áreas alagadas da Amazônia e Cerrado.', family: 'Boidae', subspecies: 'Eunectes murinus (Sucuri-verde).', funFact: 'É a cobra mais pesada do mundo! Ela passa a maior parte do tempo na água porque ajuda a carregar seu peso.', role: 'Predadora de topo que mantém o equilíbrio ecológico dos ambientes aquáticos.', danger: '🚨 Perigo: Serpente gigante e extremamente forte. Mantenha distância segura!', status: '🟢 Pouco Preocupante' },
    'cascavel': { diet: 'Pequenos roedores, lagartos e pequenas aves.', habitat: 'Campos secos, cerrados e áreas pedregosas.', family: 'Viperidae', subspecies: 'Crotalus durissus.', funFact: 'A cada troca de pele, a cascavel ganha um novo anel em seu chocalho no rabo!', role: 'Controlador crucial de roedores que espalham pragas nas lavouras.', danger: '🚨 Muito perigosa: Veneno muito forte. Se ouvir o chocalho, afaste-se com calma!', status: '🟢 Pouco Preocupante' },
    'jararaca': { diet: 'Roedores, lagartos e anfíbios.', habitat: 'Chão de florestas úmidas, capinzais e matas.', family: 'Viperidae', subspecies: 'Bothrops jararaca.', funFact: 'Seu veneno é muito estudado por cientistas e serve para criar remédios importantes contra a pressão alta!', role: 'Controladora de roedores silvestres na base das florestas tropicais.', danger: '🚨 Muito perigosa: Camufla-se muito bem em folhas secas. Nunca toque e chame um adulto!', status: '🟢 Pouco Preocupante' },
    'coral': { diet: 'Outras cobras menores, lagartos e anfíbios.', habitat: 'Debaixo de folhas secas, troncos e solo úmido.', family: 'Elapidae', subspecies: 'Micrurus corallinus.', funFact: 'A coral verdadeira tem o veneno mais ativo do Brasil, mas é tímida e prefere fugir a atacar.', danger: '🚨 Extremamente perigosa: Cores vermelha, branca e preta alertam veneno ativo. Fique longe!', status: '🟢 Pouco Preocupante' },
    'caranguejeira': { diet: 'Grilos, baratas, pequenos lagartos e insetos.', habitat: 'Tocas no solo, sob troncos caídos e pedras na floresta.', family: 'Theraphosidae', subspecies: 'Grammostola / diversas.', funFact: 'Apesar de serem gigantes e peludas, o veneno delas é fraco e não causa problemas graves em humanos!', role: 'Controladora crucial de insetos grandes no chão da floresta.', danger: '⚠️ Não toque! Se assustada, ela solta pelos que pinicam muito a pele.', status: '🟢 Pouco Preocupante' },
    'besouro': { diet: 'Folhas, madeira morta, flores, frutas e seiva.', habitat: 'Florestas, jardins, troncos caídos e solo úmido.', family: 'Coleoptera', subspecies: 'Besouro-comum.', funFact: 'Os besouros são o maior grupo de seres vivos da Terra! Uma em cada quatro espécies de animais é um besouro.', role: 'Decompõe madeira e folhas secas na floresta, enriquecendo o solo.', danger: 'Inofensivos, mas alguns têm carapaças duras e garras pequenas nas patinhas.', status: '🟢 Pouco Preocupante' },
    'vaga-lume': { diet: 'Pequenos caracóis, lesmas e néctar de flores.', habitat: 'Campos úmidos, gramados e florestas perto de água.', family: 'Lampyridae', subspecies: 'Vaga-lume-comum.', funFact: 'A luz que eles produzem na barriga é uma luz fria que não queima e serve para conversar com outros vaga-lumes no escuro!', role: 'Comem pragas de plantas na fase larval e polinizam flores na fase adulta.', danger: 'Totalmente inofensivos e mágicos de observar à noite!', status: '🟢 Pouco Preocupante' },
    'libélula': { diet: 'Mosquitos, moscas, pernilongos e pequenos insetos alados.', habitat: 'Próximo a lagos, rios e piscinas limpas.', family: 'Libellulidae', subspecies: 'Libélula-comum.', funFact: 'Elas são as aviadoras mais perfeitas do mundo, conseguindo voar para trás, de lado e planar no ar!', role: 'A maior caçadora de mosquitos e pernilongos da vizinhança na beira d\'água.', danger: 'Totalmente inofensiva para humanos e muito bonita de observar.', status: '🟢 Pouco Preocupante' },
    'caranguejo': { diet: 'Folhas caídas, pequenos animais, algas e restos de peixe.', habitat: 'Manguezais, praias, margens de rios e costões rochosos.', family: 'Ocypodidae / Gecarcinidae', subspecies: 'Caranguejo-Uçá.', funFact: 'Eles andam de lado porque as articulações de suas patas dobram apenas para os lados!', role: 'Decompõe folhas de manguezal e serve de alimento essencial na costa.', danger: '⚠️ Cuidado com as pinças fortes! Deixe-o livre na areia ou mangue.', status: '🟢 Pouco Preocupante' },
    'piranha': { diet: 'Peixes menores, insetos aquáticos, crustáceos e sementes.', habitat: 'Rios de água doce e lagos da América do Sul.', family: 'Serrasalmidae', subspecies: 'Pygocentrus nattereri (Piranha-caju).', funFact: 'Os dentes das piranhas são afiados como lâminas de barbear e elas trocam todos de um lado da boca por vez!', role: 'Controla a saúde das populações de peixes nos rios, limpando restos orgânicos.', danger: '⚠️ Cuidado: Dentes afiados e mordida muito forte. Nunca coloque a mão no anzol!', status: '🟢 Pouco Preocupante' },
    'formiga': { diet: 'Néctar, sementes, outros insetos e fungos cultivados.', habitat: 'Solo, árvores e frestas de paredes no mundo todo.', family: 'Formicidae', subspecies: 'Formiga-comum.', funFact: 'As formigas nunca dormem! Elas tiram pequenas sonecas de alguns minutos ao longo do dia.', role: 'Ajudam a limpar o ambiente consumindo restos orgânicos e reviram o solo.', danger: 'Inofensiva, mas algumas espécies vermelhas dão picadas que ardem.', status: '🟢 Pouco Preocupante' },
    'sapo': { diet: 'Insetos voadores, grilos, aranhas e baratas.', habitat: 'Quintais úmidos, hortas e beiras de poças.', family: 'Bufonidae', subspecies: 'Sapo-comum.', funFact: 'Eles usam os próprios globos oculares para ajudar a empurrar a comida garganta abaixo ao engolir!', role: 'O maior protetor da horta, comendo milhares de mosquitos e insetos indesejados.', danger: 'Pele sensível. Lave as mãos se tocá-lo e não aperte.', status: '🟢 Pouco Preocupante' },
    'jabuti': { diet: 'Frutas maduras, folhas, flores e pequenos insetos.', habitat: 'Terra firme em matas, cerrados e quintais residenciais.', family: 'Testudinidae', subspecies: 'Chelonoidis denticulatus (Jabuti-tinga).', funFact: 'Eles conseguem guardar água no corpo e viver sem comer por bastante tempo se houver seca!', role: 'Ajuda a plantar florestas dispersando sementes de frutas caídas no chão.', danger: 'Totalmente inofensivo e dócil. Respeite seu caminhar lento.', status: '🟢 Pouco Preocupante' },
    'cágado': { diet: 'Pequenos peixes, larvas de insetos e plantas aquáticas.', habitat: 'Lagos, lagoas e córregos de água doce.', family: 'Chelidae', subspecies: 'Phrynops geoffroanus (Cágado-de-barbicha).', funFact: 'Ao contrário das tartarugas marinhas, os cágados dobram o pescoço de lado para guardar a cabeça no casco.', role: 'Controla a população de pequenos organismos na água doce.', danger: 'Inofensivo, mas pode dar uma mordidinha leve de susto se for manuseado.', status: '🟢 Pouco Preocupante' },
    'rã': { diet: 'Moscas, besouros, lagartas e pequenos peixinhos.', habitat: 'Beiras de rios, lagos e áreas alagáveis permanentes.', family: 'Ranidae', subspecies: 'Rã-pimenta / diversas.', funFact: 'As rãs têm pernas traseiras muito longas e fortes, sendo as melhores saltadoras da família!', role: 'Alimento muito importante para aves aquáticas e controladora de insetos.', danger: 'Inofensiva e escorregadia. Apenas observe na margem.', status: '🟢 Pouco Preocupante' },
    'barata': { diet: 'Qualquer matéria orgânica, restos de comida e folhas.', habitat: 'Esgotos, frestas escuras, porões e matas úmidas.', family: 'Blattidae', subspecies: 'Periplaneta americana.', funFact: 'Elas são sobreviventes incríveis e conseguem viver por até uma semana sem a cabeça!', role: 'Excelentes recicladoras de sujeira e alimento para muitas corujas e lagartos.', danger: '⚠️ Sujas! Mantenha a casa limpa e use inseticidas naturais.', status: '🟢 Pouco Preocupante' },
    'cupim': { diet: 'Madeira morta, celulose e restos de vegetais secos.', habitat: 'Cupinzeiros de terra vermelha nos pastos ou interior de troncos.', family: 'Termitidae', subspecies: 'Cupim-de-pastagem.', funFact: 'Os cupinzeiros gigantes de terra são verdadeiras obras de engenharia com túneis de ar condicionado natural!', role: 'Decompõe madeira velha rapidamente e serve de alimento essencial para o tamanduá.', danger: 'Inofensivos para humanos, mas podem roer móveis de madeira em casa.', status: '🟢 Pouco Preocupante' },
    'grilo': { diet: 'Folhas, raízes jovens e pequenos restos orgânicos.', habitat: 'Gramados, jardins e cantos quentes de casas.', family: 'Gryllidae', subspecies: 'Grilo-verde-ou-preto.', funFact: 'Os grilos cantam esfregando a borda de uma de suas asas contra a outra como um violino!', role: 'Controla pequenos vegetais e serve de banquete para aves e répteis.', danger: 'Inofensivo e cantor. Traz sorte segundo lendas antigas!', status: '🟢 Pouco Preocupante' },
    'morcego': { diet: 'Frutas silvestres, néctar de flores e insetos voadores (mosquitos).', habitat: 'Cavernas, troncos ocos de árvores e forros de telhados.', family: 'Phyllostomidae / diversas.', subspecies: 'Morcego-frutígero-comum.', funFact: 'Eles usam um sonar biológico (ecolocalização) gritando fininho para ver o ambiente no escuro!', role: 'Semeia florestas inteiras jogando sementes no voo e poliniza flores noturnas.', danger: '⚠️ Não toque em morcegos caídos! Eles podem morder para se defender e transmitir doenças.', status: '🟢 Pouco Preocupante' },
    'cachorro-do-mato': { diet: 'Frutas, pequenos mamíferos, lagartixas e caranguejos.', habitat: 'Cerrados, matas ciliares e áreas rurais abertas.', family: 'Canidae', subspecies: 'Cerdocyon thous.', funFact: 'Eles parecem raposinhas cinzentas e andam quase sempre em casais amorosos pela noite!', role: 'Dispersa sementes de frutas nativas e controla populações de pequenos roedores.', danger: '⚠️ Silvestre e desconfiado. Mantenha distância segura.', status: '🟢 Pouco Preocupante' }
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
        } else if (cat === 'molusco') {
            genRole = 'Ajudam a decompor folhas secas e servem de alimento para muitas aves e répteis!';
            genDanger = 'Inofensivos! Mas lave sempre as mãos depois de tocar em caracóis ou lesmas.';
            genFact = 'Os caracóis carregam sua própria concha nas costas e ela cresce juntinho com eles!';
        } else if (cat === 'peixe') {
            genRole = 'Mantêm a água limpa de lagos e rios, controlando algas e insetos aquáticos.';
            genDanger = 'Apenas observe nadar! Alguns peixes têm espinhos afiados nas nadadeiras.';
            genFact = 'Os peixes respiram debaixo d\'água usando brânquias (guelras) que filtram o oxigênio da água!';
        } else if (cat === 'miriapode') {
            genRole = 'Comem folhas secas e restos vegetais, ajudando a adubar a terra dos jardins!';
            genDanger = 'A maioria é inofensiva. Mas cuidado com centopeias maiores que podem dar uma picadinha dolorosa!';
            genFact = 'O piolho-de-cobra se enrola como uma espiral perfeita de proteção quando se sente ameaçado!';
        } else if (cat === 'crustaceo') {
            genRole = 'Ajudam a limpar o jardim comendo plantas mortas e oxigenando a terra.';
            genDanger = 'Totalmente inofensivos! Podem ser observados bem de perto.';
            genFact = 'O tatu-de-jardim é um crustáceo terrestre, parente dos caranguejos, e respira por brânquias úmidas!';
        } else if (cat === 'anelideo') {
            genRole = 'As engenheiras do solo! Escavam túneis que ajudam a água e o ar a entrarem na terra, fertilizando as plantas.';
            genDanger = 'Totalmente inofensivas! São as melhores amigas da horta.';
            genFact = 'As minhocas não têm olhos nem ouvidos! Elas sentem a luz e o movimento através da pele úmida.';
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
    'saúva': 'inseto', 'cortadeira': 'inseto', 'lava-pé': 'inseto', 'fantasma': 'inseto', 'formiga': 'inseto', 'jataí': 'inseto', 'arapuá': 'inseto', 'mamangava': 'inseto', 'abelha': 'inseto', 'marimbondo': 'inseto', 'borboleta': 'inseto', 'besouro': 'inseto', 'louva-a-deus': 'inseto', 'bicho-pau': 'inseto', 'barata': 'inseto', 'cupim': 'inseto', 'joaninha': 'inseto', 'grilo': 'inseto', 'lagarta': 'inseto', 'mosquito': 'inseto', 'pernilongo': 'inseto', 'mosca': 'inseto', 'gafanhoto': 'inseto', 'mariposa': 'inseto',
    
    'bem-te-vi': 'ave', 'joão-de-barro': 'ave', 'sabiá': 'ave', 'beija-flor': 'ave', 'quero-quero': 'ave', 'pardal': 'ave', 'pombo': 'ave', 'rolinha': 'ave', 'tucano': 'ave', 'arara': 'ave', 'maritaca': 'ave', 'coruja': 'ave', 'carcará': 'ave', 'galinha': 'ave', 'pássaro': 'ave', 'passarinho': 'ave',
    
    'capivara': 'mamifero', 'sagui': 'mamifero', 'mico': 'mamifero', 'tatu': 'mamifero', 'preguiça': 'mamifero', 'tamanduá': 'mamifero', 'lobo': 'mamifero', 'cachorro': 'mamifero', 'gato': 'mamifero', 'onça': 'mamifero', 'jaguatirica': 'mamifero', 'leão': 'mamifero', 'indigo': 'mamifero', 'gambá': 'mamifero', 'quati': 'mamifero', 'morcego': 'mamifero', 'rato': 'mamifero', 'macaco': 'mamifero', 'coelho': 'mamifero',
    
    'caranguejeira': 'aracnideo', 'armadeira': 'aracnideo', 'aranha': 'aracnideo', 'escorpião': 'aracnideo', 'opilião': 'aracnideo',
    
    'centopeia': 'miriapode', 'piolho-de-cobra': 'miriapode',
    
    'tatu-de-jardim': 'crustaceo', 'caranguejo': 'crustaceo',
    
    'caracol': 'molusco', 'caramujo': 'molusco', 'lesma': 'molusco',
    
    'minhoca': 'anelideo',
    
    'sapo': 'anfibio', 'perereca': 'anfibio', 'rã': 'anfibio',
    
    'lagartixa': 'reptil', 'teiú': 'reptil', 'iguana': 'reptil', 'jiboia': 'reptil', 'sucuri': 'reptil', 'cascavel': 'reptil', 'jararaca': 'reptil', 'coral': 'reptil', 'cobra': 'reptil', 'tartaruga': 'reptil', 'jabuti': 'reptil', 'cágado': 'reptil', 'jacaré': 'reptil', 'cobrinha-de-jardim': 'reptil',
    
    'peixe': 'peixe', 'betta': 'peixe', 'cascudo': 'peixe', 'tilápia': 'peixe', 'peixinho': 'peixe'
};

function getCorrectCategory(name) {
    const n = name.toLowerCase();
    for (let key in categoryMap) {
        if (n.includes(key)) return categoryMap[key];
    }
    return null;
}
