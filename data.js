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
    'tartaruga': 'Têm suas casas grudadas no corpo, assim nunca esquecem de levar abrigo!'
};

const premiumData = {
    'saúva': { diet: 'Fungos cultivados a partir das folhas cortadas.', habitat: 'Florestas e áreas rurais da América do Sul.', family: 'Formicidae', subspecies: 'Cerca de 15 espécies no Brasil.', funFact: 'A rainha de um formigueiro de saúvas pode viver até 15 anos!', role: 'Aram a terra e reciclam nutrientes na floresta.', danger: 'Inofensiva, mas a mordida dói bastante!', status: '🟢 Pouco Preocupante' },
    'abelha': { diet: 'Néctar e pólen.', habitat: 'Campos e matas no mundo todo.', family: 'Apidae', subspecies: '20.000 espécies.', funFact: 'Elas se comunicam dançando para avisar onde estão as melhores flores.', role: 'Polinizadoras supremas. Sem elas, não teríamos a maioria das frutas!', danger: 'Apenas observe! Podem picar para defender a colmeia.', status: '🟡 Atenção (Ameaçadas por agrotóxicos)' },
    'bem-te-vi': { diet: 'Insetos, frutas, pequenos peixes.', habitat: 'América Latina.', family: 'Tyrannidae', subspecies: 'Pitangus sulphuratus.', funFact: 'São super valentes e atacam aves maiores, como gaviões, para proteger o ninho.', role: 'Dispersor de sementes e controlador de insetos.', danger: 'Inofensivo. Aprecie o canto!', status: '🟢 Pouco Preocupante' },
    'capivara': { diet: 'Grama e plantas aquáticas.', habitat: 'Bordas de rios da América do Sul.', family: 'Caviidae', subspecies: 'Hydrochoerus hydrochaeris.', funFact: 'Elas dormem flutuando na água mantendo apenas o nariz de fora.', role: 'Herbívoro de grande porte, serve de presa para onças e jacarés.', danger: 'Pacífica, mas não chegue muito perto se houver filhotes.', status: '🟢 Pouco Preocupante' },
    'onça-pintada': { diet: 'Capivaras, jacarés, tatus.', habitat: 'Pantanal e Amazônia.', family: 'Felidae', subspecies: 'Panthera onca.', funFact: 'Cada onça tem um padrão único de pintas (rosetas) em seu corpo.', role: 'Predador topo de cadeia. Mantém o equilíbrio das florestas.', danger: '🚨 Muito perigosa. Fique longe e chame um adulto!', status: '🔴 Quase Ameaçada (Perda de habitat)' },
    'sapo-cururu': { diet: 'Insetos e aranhas.', habitat: 'América Central e do Sul.', family: 'Bufonidae', subspecies: 'Rhinella marina.', funFact: 'Ele é um dos maiores sapos do mundo e vive muito tempo na terra seca.', role: 'Um devorador de mosquitos! Excelente para ter no jardim.', danger: 'Não pegue na mão! Tem glândulas de veneno nas costas.', status: '🟢 Pouco Preocupante' }
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
    
    if (cat === 'inseto') { genRole = 'Base da cadeia alimentar. Reciclam matéria orgânica ou polinizam flores!'; genDanger = 'A maioria é inofensiva, mas alguns picam. Observe de perto, mas sem tocar!'; }
    else if (cat === 'ave') { genRole = 'Semeadores das florestas! Espalham sementes por onde voam e controlam insetos.'; genDanger = 'Faça silêncio e observe de longe para não assustar!'; }
    else if (cat === 'mamifero') { genRole = 'Cruciais para o ecossistema, pastando, caçando ou dispersando sementes pesadas.'; genDanger = 'Animais silvestres podem morder de medo. Mantenha distância!'; }
    else if (cat === 'reptil') { genRole = 'Controladores populacionais de ratos e pequenos mamíferos.'; genDanger = '⚠️ Atenção: Répteis podem se defender com mordidas fortes ou veneno. Chame um adulto!'; genStatus = '🟡 Muitas espécies perdem habitat.'; }
    else if (cat === 'anfibio') { genRole = 'Comem milhares de mosquitos (inclusive os da dengue) e indicam se a água é limpa!'; genDanger = 'Pele muito sensível. Nunca jogue sal ou pegue na mão!'; genStatus = '🔴 Sensíveis à poluição da água.'; }
    else if (cat === 'aracnideo') { genRole = 'Grandes arquitetas e caçadoras que impedem o mundo de ser dominado por moscas!'; genDanger = '🚨 Cuidado! Não toque em teias ou buracos escondidos. Algumas têm veneno ativo.'; }

    return {
        diet: 'Alimentação nativa adaptada à sua família biológica.',
        habitat: 'Diversidade do ecossistema local do Brasil.',
        family: 'Classificação Científica Neotropical',
        subspecies: 'Possui muitas variações adaptadas ao clima.',
        funFact: `Toda criatura tem um superpoder secreto! O ${animalName} ajuda a manter o nosso planeta funcionando de forma invisível.`,
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
    
    'onça': 'felino', 'jaguatirica': 'felino', 'gato': 'felino', 'leão': 'felino', 'tigre': 'felino',
    
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
