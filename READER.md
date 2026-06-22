# 📖 Leitor do Aplicativo - A Capivara Aventureira 🌿🎒
### Guia do Projeto, Arquitetura e Políticas de Publicação

Bem-vindo ao **Leitor Oficial da Capivara Aventureira (Edição Cientista Mirim)**. Este documento compila todas as informações essenciais sobre o design, a estrutura de código, o funcionamento do PWA e a conformidade legal do aplicativo para publicação na **Google Play Store** e adequação à **LGPD** brasileira.

---

## 📸 1. Identidade Visual & Design System

O aplicativo foi completamente reformulado visualmente para oferecer uma experiência lúdica, imersiva e de alta qualidade (Premium UI) para crianças.

*   **Paleta de Cores da Natureza**: Uso de tons verdes suaves, amarelos vibrantes e transparências (*Glassmorphism*) para dar um visual moderno e limpo.
*   **Fundo de Floresta Dinâmico (`forest_background.png`)**: Uma ilustração completa em 2D de uma floresta com rio que se adapta de acordo com o horário do dia (Modo Dia vs. Modo Noite).
*   **Mascotes em Altíssima Definição**:
    *   `capybara_mascot.png`: Mascote oficial de corpo inteiro no centro da tela de customização.
    *   `capybara_avatar.png`: Avatar de rosto simplificado para cabeçalhos e perfil.
    *   `splash_capybara.png`: Arte de tela de abertura lúdica para receber o usuário.
*   **Moedas e Elementos Virtuais Personalizados**:
    *   `seed_coin.png`: Sementes douradas premium substituem o emoji genérico de moedas.
    *   `mystery_box.png`: Caixa de presente com folhas para as recompensas lúdicas do mini-game.

---

## 🗂️ 2. Estrutura de Diretórios e Arquivos

O projeto está organizado no formato SPA (Single Page Application) estático, com suporte a sincronização automática com um backend opcional via Docker:

*   **`index.html`**: Estrutura e layout da aplicação de página única, organizada com abas dinâmicas.
*   **`style.css`**: Estilos visuais personalizados, animações de transição (*fadeIn*, *bounce-subtle*, *shine-anim*), grids adaptativos e regras para o **Modo Escuro (Night Mode)**.
*   **`app.js`**: Core da inteligência e lógica do jogo:
    *   Gerenciamento do estado do guarda-roupa de campo.
    *   Validação dos mini-jogos (Silhueta, Jogo da Memória, Quiz Sem Fim).
    *   Lógica da câmera local e persistência em `localStorage`.
    *   Sincronização em tempo real com a API Node backend.
    *   Sistema de conquistas (`updateBadges`) com 93 troféus e rastreamento de estatísticas via `capy_ach_stats`.
*   **`admin.html`**: Painel Administrativo com 5 abas:
    *   **Assets Visuais** — Gerencia e substitui imagens do jogo (prédios, equipamentos, personagens, minijogos, UI).
    *   **Estatísticas & Usuários** — Tabela de usuários com edição de cargo, capins, XP e streak.
    *   **Música & Sons (BGM)** — Editor de sintetizador procedural por tela.
    *   **Personagens (NPCs)** — Gerenciador de capivaras passeantes animadas.
    *   **Conquistas** *(NOVO)* — Mural completo das 93 conquistas com filtro por categoria e busca textual.
*   **`data.js`**: Banco de dados científico da fauna brasileira. Contém:
    *   `curioData`: Frases rápidas para curiosidades básicas de descobertas.
    *   `premiumData`: Dicionário completo de fichas zoológicas detalhadas baseadas na Wikipédia (Dieta, Habitat, Família, Espécie, Papel Ecológico, Conservação e Dicas de Segurança).
    *   `endlessTriviaBank`: Perguntas e alternativas para o quiz infinito.
*   **`service-worker.js`**: Gerenciador de cache offline PWA (versão `capivara-v78`).
*   **`manifest.json`**: Manifesto web para instalação do app na tela inicial do celular como um aplicativo nativo.
*   **`privacy.html`**: Termos de privacidade para leitura obrigatória dos pais.

---

## 🛡️ 3. Conformidade com Google Play (Designed for Families) & LGPD

O aplicativo atende estritamente às exigências da **Designed for Families Policy (Google Play)** e da **Lei Geral de Proteção de Dados (Lei nº 13.709/18)**:

1.  **Consentimento dos Pais (Parental Consent - Art. 14 da LGPD)**: A tela de login inicial possui uma caixa de seleção de aceite obrigatório declarando a autorização de um responsável maior de idade antes do cadastro da criança.
2.  **Privacidade de Câmera e Otimização Local**: O acesso à câmera é usado apenas para a captura lúdica no Diário de Campo. Para evitar o estouro de memória no `localStorage` e nos payloads de rede, as fotos são redimensionadas programaticamente no canvas para um tamanho máximo de 500px com compressão JPEG (qualidade 75%), gerando strings Base64 leves (~30KB). As fotos são salvas de forma estritamente local (ou enviadas exclusivamente ao servidor autônomo privado do jogador caso ele utilize o sistema de contas persistido em banco de dados), garantindo que dados e imagens infantis permaneçam seguros e privados.
3.  **Parental Gate (Área de Adultos)**: Links externos e a opção crítica de exclusão total de dados de progresso no menu de configurações são trancados por um desafio de matemática simples, impedindo o acesso acidental por crianças.
4.  **Login Não Invasivo**: Para proteger a privacidade do menor, o login exige apenas um nome fictício de explorador e a escolha de um avatar lúdico. Nenhum dado de e-mail real, telefone ou geolocalização é obrigatório.
5.  **Acesso à Política**: O arquivo `privacy.html` está linkado de forma direta e transparente na tela de login, permitindo a leitura dos termos a qualquer momento antes do login.

---

## 🪵 4. Lógica de Customização do Mascote com Emoji Fallback

Como recurso de robustez técnica, o sistema de vestimenta no guarda-roupa da capivara utiliza uma lógica de renderização híbrida:
*   Os 17 itens de acessórios com imagens PNG prontas (`explorer_hat`, `safari_helmet`, `beanie`, `crown`, `glasses`, `sunglasses`, `goggles`, `magnifier`, `compass`, `flashlight`, `net`, `notebook`, `camera`, `walkie_talkie`, `backpack`, `vest`, `lab_coat`) renderizam as imagens customizadas sobrepostas ao mascote.
*   Os demais 17 itens (cuja geração de imagem está pendente devido aos limites de cota da API da Inteligência Artificial) são renderizados na interface utilizando o respectivo **emoji original centralizado**, com tamanho e posicionamento idênticos às caixas delimitadoras (`.capy-slot`).
*   Isso garante **zero ícones de imagem quebrada (404)** na tela e fornece uma transição visual perfeita e limpa, permitindo a adição futura de novos arquivos de imagem simplesmente apontando o atributo `image` no array de acessórios.

---

## 🐳 5. Como Executar e Implantar

### Servidor Local Rápido (Somente Frontend)
Por requerer recursos de PWA e câmera, o app precisa de um servidor estático simples.
Execute com Python na pasta do projeto:
```bash
python3 -m http.server 8080
```
Acesse [http://127.0.0.1:8080](http://127.0.0.1:8080). Use `Cmd+Shift+R` ou `Ctrl+F5` para atualizar o cache do Service Worker ao editar arquivos.

### API de Sincronização Local (Docker)
Copie o arquivo `.env.example` para `.env` e suba o backend:
```bash
docker compose up -d --build
```
A API backend roda localmente na porta `3000`. O front-end em `app.js` detecta se a API está online de forma automática e faz a transição transparente de modo offline para modo sincronizado com banco MariaDB.

---

## 🎥 6. Vídeo de Fundo da Eco-Vila & Bypass de Range Requests

A Eco-Vila conta com um plano de fundo dinâmico animado (`cenario 1.mp4`) no lugar da imagem estática de fallback:

*   **Enquadramento Isométrico e Crop de Barras Pretas**:
    O vídeo original possui formato widescreen 16:9 (1280x720) com barras pretas (pillarboxing) nas laterais. O conteúdo ativo da animação é um quadrado 1:1 de 715x715px posicionado em `x=283, y=3`. Para alinhar esse vídeo de forma perfeita ao mapa e aos caminhos das capivaras, ele é renderizado com `width: 179.02%`, `height: 100.7%`, `left: -39.58%` e `top: -0.42%`, dentro de um contêiner com `overflow-hidden`. A propriedade `max-width: none` (classe `max-w-none`) sobrescreve o reset default do Tailwind para permitir que o vídeo estique além de 100% de largura.
*   **Contexto de Empilhamento e z-index Negativo**:
    Para evitar que o vídeo acelerado por hardware cubra os elementos da vila, a imagem de fallback estática utiliza `z-index: -2` e o contêiner de vídeo utiliza `z-index: -1`. Assim, todos os elementos e contêineres de jogo (como prédios em `z-10` e capivaras em `z-[12]`) aparecem por cima da animação.
*   **Bypass de Range Requests no Service Worker**:
    Navegadores como Safari (iOS/macOS) e Chrome requerem range requests (HTTP 206 Partial Content) para renderizar mídias HTML5. Para evitar falhas no carregamento de áudios/vídeos a partir do cache do Service Worker, configuramos o `service-worker.js` para não interceptar requisições com cabeçalho `Range` ou com extensões `.mp4`, `.ogg` e `.mp3`.
*   **Indicadores de Produção Flutuantes (Floating Gain Indicators)**:
    A cada 5 segundos, se a produção de sementes da vila for maior que zero e o jogador estiver visualizando a aba da Vila (`vilaView`), números dourados com o ícone da moeda de semente (`seed_coin.png`) sobem de forma animada (`@keyframes floatUpFade`) sobre a Horta de Capim (`farm`) e as Docas de Pesca (`docks`), indicando a produção passiva em tempo real. Os valores mostrados correspondem à taxa exata de contribuição de cada prédio por hora de acordo com seu nível e o bônus multiplicador do Centro da Vila.

---

## 🎮 7. Sistema de Missões e Minijogos dos NPCs (Eco-Tarefas)

Adicionamos um sistema de missões dinâmico e interativo no mapa da Eco-Vila:
*   **Gatilho Temporizado e Temporizador Persistente**: A cada 3 minutos na aba da Eco-Vila, um dos 5 NPCs animados da vila (Aventureira, Fazendeira, Pescadora, Cientista, Bióloga) é selecionado aleatoriamente para ativar uma missão, exibindo um balão pulsante `!` âmbar sobre sua cabeça. O tempo é gerenciado por um timestamp absoluto `nextMissionTimestamp` salvo no `localStorage` (`capy_next_mission_time`) para evitar que resete ao recarregar a página ou navegar pelo jogo.
*   **Contador Flutuante Global**: O cronômetro regressivo da próxima missão é exibido em um botão flutuante global (`fixed bottom-24 right-4 z-40`). Ao clicar nele em qualquer tela, o jogador é redirecionado imediatamente para a aba da Vila das Capivaras. Se houver uma missão ativa no mapa, o botão se altera para indicar a atividade em cor âmbar (`Missão Ativa! 🦫`).
*   **Efeitos Sonoros e Sirene Retrô**: Adicionamos um som de sirene com oscilações de frequência em onda triangular (440Hz a 880Hz por 1,2s) via Web Audio API, que toca no momento em que a missão é iniciada na vila ou quando o diálogo do NPC correspondente é aberto.
*   **Trilha Sonora de Aventura Urgente e Minijogos**: Durante a execução das missões urgentes dos NPCs, o jogo reproduz o arquivo de áudio `adventure_bgm.ogg` (uma empolgante versão 8-bit orquestrada da *Abertura de William Tell* de Rossini). Para os minijogos normais da central Arcade, o jogo reproduz a faixa `minigames_bgm.ogg` (chiptune espacial de alta fidelidade). Ambos os arquivos substituem a síntese procedural simples de áudio da Web Audio API por faixas polidas e profissionais que se encerram com um fade-out suave ao final.
*   **Diálogos com Explicações**: Todas as telas de diálogo de NPCs exibem instruções claras `[Como jogar: ...]` descrevendo explicitamente a mecânica do minijogo antes do início da partida.
*   **Redesenho Visual Sem Emojis nos Minijogos**: Redesenhamos a interface dos 5 minigames para remover a dependência de emojis genéricos, utilizando gráficos transparentes pixel-art em alta definição e interfaces dedicadas:
    1.  *Colheita (Fazendeira)*: Substitui os vegetais por ilustrações transparentes personalizadas (`eco_veggie_carrot.png`, `eco_veggie_potato.png`, `eco_veggie_eggplant.png`, `eco_veggie_tomato.png`) brotando dinamicamente do solo.
    2.  *Pesca (Pescadora)*: Utiliza artes transparentes (`eco_fishing_bobber.png`, `eco_fishing_fish.png`) e adiciona faíscas visuais com física de expansão (`.mg-success-spark`) ao acertar o sweet-spot.
    3.  *Poções (Cientista)*: Substitui o emoji de poção pelo frasco de laboratório estilizado (`eco_lab_flask.png`) sobreposto, onde o líquido com cor misturada preenche o bulbo de forma tridimensional realista.
    4.  *Fauna (Bióloga)*: Transforma a grade de emojis simples em uma coleção de cartões científicos estilo foto "Polaroid" (`.mg-bio-card`), exibindo a foto do animal e seu respectivo rótulo de nome formatado.
    5.  *Baú (Aventureira)*: Utiliza a imagem fechada do baú de relíquias (`mystery_box.png`) e a abre revelando o baú transbordando moedas douradas brilhantes (`eco_chest_open.png`) ao concluir com sucesso.
*   **Melhorias do Modo Noturno (Contraste)**: Adicionamos regras CSS que convertem caixas e balões translúcidos (`bg-white/90` e `bg-green-50/70`) e campos de entrada de texto e números (`bg-gray-50`) em tons perfeitamente escuros e contrastantes com texto branco para evitar texto claro sobre fundo claro durante a noite.
*   **Escolha de Recompensa Ecológica**: Ao vencer um minijogo, abre-se o modal de recompensa (`#npcRewardModal`) onde o usuário pode optar por receber **+35 Capins** OU **Acelerar Obras** (reduzindo 15 minutos de tempo restante de todas as construções ativas). O botão de aceleração de obras fica desativado caso nenhuma construção esteja em andamento na vila.

---

## 🏆 8. Sistema de Conquistas — Mural de Troféus (93 conquistas)

O Mural de Troféus (`updateBadges()` em `app.js`) foi expandido em três lotes, totalizando **93 conquistas** organizadas em 5 categorias:

### Categorias e Contagem
| Categoria | Ícone | Conquistas | Exemplos |
|-----------|-------|-----------|---------|
| **Fauna & Coleção** | 🦎 | ~35 | Explorador, Lenda da Floresta, Entomologista... |
| **Vila & Construção** | 🏘️ | ~20 | Primeira Pedra, Fazenda Industrial, Utopia Ecológica... |
| **Minijogos NPC** | 🎮 | ~15 | Ajudante da Vila, Ceifador Lendário, Pescador Lendário... |
| **Arcade & Games** | 🕹️ | ~18 | Bate-Capy Supremo, Sábio da Fauna, Gênio Neotropical... |
| **Economia** | 💰 | ~5 | Guarda-Roupa Cheio, Cofre da Economia, Fashionista... |

### Sistema de Rastreamento de Estatísticas (`capy_ach_stats`)
Todas as conquistas dos Lotes 2 e 3 dependem de contadores persistidos na chave `capy_ach_stats` no `localStorage`. As funções `getAchStats()` e `updateAchStat(key, value, mode)` gerenciam este estado:

| Chave de Stat | O que rastreia | Atualizado em |
|--------------|---------------|--------------|
| `villageUpgrades` | Total de upgrades de prédios | `upgradeBuilding()`, `accelerateConstruction()` |
| `missionsWon` | Vitórias em missões de NPC | `endMinigame()` |
| `hortaWins` | Vitórias na Colheita | `endMinigame()` (type = farmer) |
| `pescaWins` | Vitórias na Pesca | `endMinigame()` (type = fisherman) |
| `pocaoWins` | Vitórias nas Poções | `endMinigame()` (type = scientist) |
| `faunaWins` | Vitórias na Fauna | `endMinigame()` (type = biologist) |
| `bauWins` | Vitórias no Baú | `endMinigame()` (outros) |
| `wacTotalHits` | Hits totais no Bate-Capy | `wacHitHandler()` |
| `wacPlays` | Partidas de Bate-Capy | `wacEndGame()` |
| `wacMaxHits` | Recorde de hits por partida | `wacEndGame()` (modo max) |
| `silhouetteCorrect` | Silhuetas adivinhadas | `guessSilhouette()` |
| `quizCorrect` | Quizzes sem fim acertados | `answerEndlessQuiz()` |
| `quizzesDailyAnswered` | Quizzes diários respondidos | `answerQuiz()` |
| `memoryPlays` | Partidas do Jogo da Memória | `checkMemoryMatch()` |
| `memoryMaxLevel` | Nível máximo atingido na Memória | `checkMemoryMatch()` (modo max) |
| `memoryResets` | Resets no Jogo da Memória | `checkMemoryMatch()` |
| `seedsTotalSpent` | Capins gastos acumulados | `buyAccessory()`, `upgradeBuilding()`, `accelerateConstruction()`, `buyMysteryBox()`, `answerEndlessQuiz()` |
| `seedsTotalEarned` | Capins ganhos acumulados | `claimMissionReward()`, `buyMysteryBox()` (ganho) |

### Estrutura no App.js
```javascript
// Retorna o objeto de stats persistido ou um objeto vazio padrão
function getAchStats() { ... }

// Incrementa (add) ou maximiza (max) uma stat
function updateAchStat(key, val, mode = 'add') { ... }

// Calcula e renderiza todos os 93 cards de conquista
function updateBadges() { ... }
```

---

## 🖥️ 9. Painel Administrativo — Aba de Conquistas (NOVA)

A nova aba **🏆 Conquistas** em `admin.html` oferece auditoria visual completa do mural de troféus:

*   **Grid responsivo** com cards para cada uma das 93 conquistas (1 a 4 colunas dependendo da tela).
*   **Filtro por categoria**: Todas | 🦎 Fauna | 🏘️ Vila | 🎮 Minijogos | 🕹️ Arcade | 💰 Economia.
*   **Busca textual em tempo real** por nome ou descrição da conquista.
*   **Cards informativos** com: ícone emoji, número sequencial `#01`–`#93`, nome, descrição do critério, badge colorido por categoria e barra de progresso decorativa.
*   **Painel de métricas** na parte superior com contagem de conquistas por categoria.
*   **Constante `ACHIEVEMENTS_CATALOG`** no script do admin espelha o array `b` do `app.js` — ao adicionar novas conquistas no jogo, refletir o espelho aqui também.

### Melhorias de Filtro de Assets
A aba de Assets agora suporta uma quinta categoria de filtro:
*   **Minijogos (`eco_*`)** — filtra todos os assets de minijogos dos NPCs: `eco_veggie_carrot.png`, `eco_veggie_potato.png`, `eco_veggie_eggplant.png`, `eco_veggie_tomato.png`, `eco_fishing_bobber.png`, `eco_fishing_fish.png`, `eco_lab_flask.png`, `eco_chest_open.png`, `eco_mission_badge.png`.
*   Assets `eco_*` recebem a etiqueta **Minijogo** em roxo violeta nos cards da grade.
*   O card de estatísticas da aba Assets agora exibe a contagem de arquivos `eco_*` em vez de Spritesheets.

---

## 📖 10. Edição de Descobertas e Diário de Relato Livre (NOVO)

Implementamos suporte a edições retroativas no Diário de Campo para que o explorador mirim possa corrigir erros de digitação e enriquecer seus registros:

*   **Lápis de Edição ✏️**: Cada cartão no grid de descobertas possui um botão com ícone de lápis. Clicar nele carrega os dados originais no modal de captura, abrindo-o diretamente na seção de formulário e contornando a câmera e scanner.
*   **Controle Dinâmico de Ação**: O modal altera o texto do botão principal para **"ATUALIZAR DIÁRIO! 💾"** e adota o estilo âmbar de edição. O fluxo de salvamento aciona a função `updateDiscovery` que revalida a categoria biológica do animal, atualiza os dados em `localStorage` e envia uma requisição `PUT` para a API (caso autenticado).
*   **Diário de Experiência**: Inclui o campo **"Conte como foi o dia que você encontrou o animal"**, estimulando relatos ricos e pessoais. O diário renderiza essas histórias em caixas personalizadas estilizadas como folhas de caderno, aproximando o jogo da vivência real de um pesquisador.

---

## 🏗️ 11. Sistema de Evolução de Prédios e Assets de Nível (Lvl 1-10)

Todas as 5 construções da Eco-Vila possuem ilustrações de evolução customizadas do nível 1 ao nível 10, no mesmo estilo isométrico 2D cartoon integrado com as capivaras:

*   **Centro da Vila (`townHall`)**: Níveis 1 a 10 (`bld_townHall_lvl1.png` a `bld_townHall_lvl10.png`).
*   **Horta de Capim (`farm`)**: Níveis 1 a 10 (`bld_farm_lvl1.png` a `bld_farm_lvl10.png`).
*   **Doca de Pesca (`docks`)**: Níveis 1 a 10 (`bld_docks_lvl1.png` a `bld_docks_lvl10.png`).
*   **Laboratório Ecológico (`lab`)**: Níveis 1 a 10 (`bld_lab_lvl1.png` a `bld_lab_lvl10.png`).
*   **Torre de Vigia (`tower`)**: Níveis 1 a 10 (`bld_tower_lvl1.png` a `bld_tower_lvl10.png`).

As imagens geradas foram processadas para remover o fundo branco original, tornando o fundo transparente (`RGBA`) para integração visual direta sobre o vídeo dinâmico da vila. A lógica de exibição está mapeada em `app.js` através da constante `maxAvailableLvl`, garantindo o correto carregamento do sprite correspondente ao nível de evolução atual do prédio.
