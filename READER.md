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
*   **`data.js`**: Banco de dados científico da fauna brasileira. Contém:
    *   `curioData`: Frases rápidas para curiosidades básicas de descobertas.
    *   `premiumData`: Dicionário completo de fichas zoológicas detalhadas baseadas na Wikipédia (Dieta, Habitat, Família, Espécie, Papel Ecológico, Conservação e Dicas de Segurança).
    *   `endlessTriviaBank`: Perguntas e alternativas para o quiz infinito.
*   **`service-worker.js`**: Gerenciador de cache offline PWA (versão `capivara-v5`).
*   **`manifest.json`**: Manifesto web para instalação do app na tela inicial do celular como um aplicativo nativo.
*   **`privacy.html`**: Termos de privacidade para leitura obrigatória dos pais.

---

## 🛡️ 3. Conformidade com Google Play (Designed for Families) & LGPD

O aplicativo atende estritamente às exigências da **Designed for Families Policy (Google Play)** e da **Lei Geral de Proteção de Dados (Lei nº 13.709/18)**:

1.  **Consentimento dos Pais (Parental Consent - Art. 14 da LGPD)**: A tela de login inicial possui uma caixa de seleção de aceite obrigatório declarando a autorização de um responsável maior de idade antes do cadastro da criança.
2.  **Privacidade de Câmera Local**: O app solicita acesso à câmera do celular apenas para simular a foto biológica no Diário de Campo. As fotos tiradas são salvas na memória local do navegador (via Base64 em `localStorage`) e **nunca** são transmitidas a servidores ou expostas na web.
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

A Eco-Vila conta com um plano de fundo dinâmico animado (`Trees_blowing_wind_river_birds_202606201621.mp4`) no lugar da imagem estática de fallback:

*   **Enquadramento Isométrico e Crop de Barras Pretas**:
    O vídeo original possui formato widescreen 16:9 (1280x720) com barras pretas (pillarboxing) nas laterais. O conteúdo ativo da animação é um quadrado 1:1 de 715x715px posicionado em `x=283, y=3`. Para alinhar esse vídeo de forma perfeita ao mapa e aos caminhos das capivaras, ele é renderizado com `width: 179.02%`, `height: 100.7%`, `left: -39.58%` e `top: -0.42%`, dentro de um contêiner com `overflow-hidden`. A propriedade `max-width: none` (classe `max-w-none`) sobrescreve o reset default do Tailwind para permitir que o vídeo estique além de 100% de largura.
*   **Contexto de Empilhamento e z-index Negativo**:
    Para evitar que o vídeo acelerado por hardware cubra os elementos da vila, a imagem de fallback estática utiliza `z-index: -2` e o contêiner de vídeo utiliza `z-index: -1`. Assim, todos os elementos e contêineres de jogo (como prédios em `z-10` e capivaras em `z-[12]`) aparecem por cima da animação.
*   **Bypass de Range Requests no Service Worker**:
    Navegadores como Safari (iOS/macOS) e Chrome requerem range requests (HTTP 206 Partial Content) para renderizar mídias HTML5. Para evitar falhas no carregamento de áudios/vídeos a partir do cache do Service Worker, configuramos o `service-worker.js` para não interceptar requisições com cabeçalho `Range` ou com extensões `.mp4` e `.ogg`.

