# A Capivara Aventureira 🌿🎒
### Edição Cientista Mirim

**A Capivara Aventureira** é um aplicativo PWA (Progressive Web App) lúdico e interativo projetado para incentivar crianças e biólogos mirins a explorar a natureza ao seu redor com segurança, catalogando a fauna brasileira em seu próprio diário de campo digital.

---

## 📸 Captura de Tela / Identidade Visual

O aplicativo possui uma identidade visual única e premium, projetada com ilustrações exclusivas em 2D inspiradas na fauna e nas florestas brasileiras:
*   **Fundo Dinâmico (`forest_background.png`)**: Uma linda floresta com rio que se adapta de acordo com o horário (Modo Dia/Noite).
*   **Mascote Customizável (`capybara_mascot.png` & `capybara_avatar.png`)**: Uma capivara cientista super fofa que pode ser equipada com itens como lupas, binóculos, galochas e chapéus.
*   **Elementos Premium (`seed_coin.png` & `mystery_box.png`)**: Ícones personalizados para moedas (sementes) e caixa de surpresas que substituem emojis genéricos, garantindo uma interface profissional de alta qualidade.

---

## ✨ Funcionalidades Principais

1.  **Diário de Campo / Minha Coleção**: Registre animais encontrados no quintal, parque ou escola com fotos reais tiradas com a câmera do celular.
2.  **Eco-Laboratório**: Estude curiosidades científicas sobre cada espécie e acompanhe gráficos de biodiversidade por classe (aves, insetos, mamíferos, répteis, etc.).
3.  **Álbum de Figurinhas**: Colete figurinhas brilhantes e míticas de animais nativos.
4.  **Arcade Natural (Mini-jogos)**:
    *   *Quem é esse animal?*: Adivinhe o animal pela sua silhueta.
    *   *Jogo da Memória*: Combine os pares dos seres vivos.
    *   *Quiz Sem Fim*: Responda perguntas sobre a natureza para ganhar sementes.
5.  **Guarda-Roupa de Campo**: Customize o mascote comprando acessórios com sementes ganhas nas missões.

---

## 🛡️ Conformidade e Políticas (Google Play & LGPD)

Este aplicativo foi desenvolvido seguindo as diretrizes rigorosas da política **Designed for Families** (Projetado para Famílias) da Google Play Store e a **LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/18)**:

1.  **Consentimento dos Pais (Art. 14 da LGPD)**: A tela de cadastro/login inicial exige que um pai, mãe ou responsável declare explicitamente que autoriza o cadastro da criança, marcando uma caixa de seleção obrigatória.
2.  **Acessibilidade da Política de Privacidade**: Um link direto para a Política de Privacidade (`privacy.html`) está visível na tela de login antes da inserção de qualquer dado pessoal, permitindo leitura imediata sem necessidade de login.
3.  **Segurança dos Dados Pessoais**:
    *   O aplicativo **não** coleta e-mails ou números de telefone reais das crianças. O login é simplificado apenas com o nome de explorador e avatares lúdicos.
    *   As fotos de animais tiradas pela câmera do celular são mantidas estritamente no armazenamento local do dispositivo (`localStorage` do navegador) e nunca são enviadas a servidores ou compartilhadas externamente.
4.  **Controle Parental (Parental Gate)**: Links externos, alterações de configurações sensíveis e a exclusão definitiva de dados são bloqueadas por um desafio matemático ("Área de Adultos") para garantir que apenas responsáveis tenham acesso a essas funções.
5.  **Aviso de Uso de Câmera**: Um modal de consentimento prévio explica aos pais exatamente por que a permissão de câmera é necessária e garante que o uso é local e privativo antes que o sistema operacional exiba o pop-up nativo de permissão.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Você precisa de um navegador moderno com suporte a PWA e um servidor estático simples.

### Método 1: Servidor Estático Rápido (Recomendado para Testes do Front)
Como o app possui um Service Worker com suporte offline, ele precisa ser servido através de um protocolo HTTP/HTTPS (não pode ser aberto clicando direto no arquivo `index.html` via `file://`).

Se você tem o Python instalado, execute na pasta do projeto:
```bash
python3 -m http.server 8080
```
Depois abra no navegador: [http://127.0.0.1:8080](http://127.0.0.1:8080).

*Nota: Se você fizer alterações visuais e elas não aparecerem, faça um **recarregamento forçado (Cmd + Shift + R ou Ctrl + F5)** para limpar o cache do Service Worker (`capivara-v4`).*

---

## 🐳 Executando a API e o Banco de Dados (Docker)

Se desejar sincronizar o progresso dos usuários em um banco de dados, você pode subir o backend Node + MariaDB.

1.  Copie o arquivo `.env.example` para `.env` e configure suas variáveis.
2.  Inicie os containers:
    ```bash
    docker compose up -d --build
    ```
3.  A API estará disponível para sincronização local na porta padrão `3000`. O front-end detectará se o servidor está online e ativará a sincronização em tempo real de forma automática. Caso a API esteja offline, o front-end ativará o **Modo Local Offline** salvando tudo com segurança no aparelho.

---

## 📁 Estrutura de Arquivos Principais

*   `index.html`: Interface principal do usuário (SPA - Single Page Application).
*   `style.css`: Estilização personalizada do app, incluindo glassmorphism, suporte dia/noite e animações.
*   `app.js`: Lógica do jogo (conquistas, customização do mascote, minigames e persistência local/offline).
*   `data.js`: Banco de dados das curiosidades científicas dos animais e perguntas do quiz.
*   `privacy.html`: Página estática contendo os termos da Política de Privacidade.
*   `service-worker.js`: Gerenciador de cache para garantir funcionamento 100% offline.
*   `manifest.json`: Configuração de aplicativo instalável (PWA).
