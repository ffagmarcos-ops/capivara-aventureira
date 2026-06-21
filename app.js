// CONFIGURAÇÃO DOS ACESSÓRIOS DO GUARDA-ROUPA
const accessories = [
    { id: 'explorer_hat', label: 'Chapéu de Trilha', emoji: '🤠', image: 'acc_explorer_hat.png', price: 15, slot: 'head' },
    { id: 'safari_helmet', label: 'Capacete Safári', emoji: '🪖', image: 'acc_safari_helmet.png', price: 50, slot: 'head' },
    { id: 'beanie', label: 'Gorro de Frio', emoji: '🧶', image: 'acc_beanie.png', price: 80, slot: 'head' },
    { id: 'crown', label: 'Coroa da Floresta', emoji: '👑', image: 'acc_crown.png', price: 500, slot: 'head' },
    { id: 'flower', label: 'Flor Nativa', emoji: '🌺', image: 'acc_flower.png', price: 20, slot: 'head' },
    { id: 'cap', label: 'Boné do Guarda', emoji: '🧢', image: 'acc_cap.png', price: 40, slot: 'head' },
    { id: 'wizard', label: 'Chapéu Mágico', emoji: '🧙', image: 'acc_wizard.png', price: 600, slot: 'head' },
    { id: 'headphones', label: 'Fones de Ouvido', emoji: '🎧', image: 'acc_headphones.png', price: 90, slot: 'head' },
    
    { id: 'glasses', label: 'Óculos Cientista', emoji: '👓', image: 'acc_glasses.png', price: 30, slot: 'eyes' },
    { id: 'sunglasses', label: 'Óculos de Sol', emoji: '🕶️', image: 'acc_sunglasses.png', price: 45, slot: 'eyes' },
    { id: 'goggles', label: 'Óculos Mergulho', emoji: '🥽', image: 'acc_goggles.png', price: 100, slot: 'eyes' },
    { id: 'monocle', label: 'Monóculo Clássico', emoji: '🧐', image: 'acc_monocle.png', price: 150, slot: 'eyes' },
    
    { id: 'magnifier', label: 'Lupa do Biólogo', emoji: '🔍', image: 'acc_magnifier.png', price: 45, slot: 'hand' },
    { id: 'compass', label: 'Bússola', emoji: '🧭', image: 'acc_compass.png', price: 75, slot: 'hand' },
    { id: 'flashlight', label: 'Lanterna', emoji: '🔦', image: 'acc_flashlight.png', price: 90, slot: 'hand' },
    { id: 'net', label: 'Rede de Insetos', emoji: '🕸️', image: 'acc_net.png', price: 135, slot: 'hand' },
    { id: 'map', label: 'Mapa das Matas', emoji: '🗺️', image: 'acc_map.png', price: 195, slot: 'hand' },
    { id: 'microscope', label: 'Microscópio', emoji: '🔬', image: 'acc_microscope.png', price: 230, slot: 'hand' },
    { id: 'notebook', label: 'Diário Científico', emoji: '📓', image: 'acc_notebook.png', price: 280, slot: 'hand' },
    { id: 'camera', label: 'Câmera Pro', emoji: '📷', image: 'acc_camera.png', price: 350, slot: 'hand' },
    { id: 'walkie_talkie', label: 'Rádio Amador', emoji: '📻', image: 'acc_walkie_talkie.png', price: 400, slot: 'hand' },
    { id: 'potion', label: 'Poção de Cura', emoji: '🧪', image: 'acc_potion.png', price: 450, slot: 'hand' },
    { id: 'sword', label: 'Espada de Graveto', emoji: '🗡️', image: 'acc_sword.png', price: 500, slot: 'hand' },
    { id: 'guitar', label: 'Violão de Acampamento', emoji: '🎸', image: 'acc_guitar.png', price: 600, slot: 'hand' },
    
    { id: 'backpack', label: 'Mochila de Campo', emoji: '🎒', image: 'acc_backpack.png', price: 60, slot: 'body' },
    { id: 'vest', label: 'Colete de Guarda', emoji: '🦺', image: 'acc_vest.png', price: 110, slot: 'body' },
    { id: 'lab_coat', label: 'Jaleco de Ciência', emoji: '🥼', image: 'acc_lab_coat.png', price: 250, slot: 'body' },
    { id: 'tie', label: 'Gravata Borboleta', emoji: '🎀', image: 'acc_tie.png', price: 150, slot: 'body' },
    { id: 'scarf', label: 'Cachecol de Lã', emoji: '🧣', image: 'acc_scarf.png', price: 120, slot: 'body' },
    
    { id: 'boots', label: 'Botas de Trilha', emoji: '🥾', image: 'acc_boots.png', price: 160, slot: 'feet' },
    { id: 'rain_boots', label: 'Galochas', emoji: '👢', image: 'acc_rain_boots.png', price: 200, slot: 'feet' },
    { id: 'sneakers', label: 'Tênis Rápido', emoji: '👟', image: 'acc_sneakers.png', price: 220, slot: 'feet' },
    { id: 'socks', label: 'Meias Quentinhas', emoji: '🧦', image: 'acc_socks.png', price: 100, slot: 'feet' },
    { id: 'skates', label: 'Patins de Asfalto', emoji: '🛼', image: 'acc_skates.png', price: 300, slot: 'feet' }
];

const quizBank = [
    { q: 'As capivaras adoram viver perto de onde?', o: ['🏜️ Desertos secos', '💧 Rios e lagos', '❄️ Montanhas nevadas'], a: 1 },
    { q: 'Qual inseto ajuda as flores a darem deliciosas frutas?', o: ['🦟 Mosquito', '🐝 Abelha', '🪰 Mosca'], a: 1 },
    { q: 'O que você deve fazer se encontrar uma borboleta bonita?', o: ['🚫 Olhar de longe e desenhar', '🕸️ Pegar com a mão', '👟 Tentar pisar'], a: 0 },
    { q: 'As aves usam o que para voar pelo céu azul?', o: ['🐾 Patas', '🧬 Escamas', '🪶 Asas e Penas'], a: 2 },
    { q: 'O que o jacaré usa para nadar muito rápido?', o: ['🐊 Sua cauda forte', '🎈 Suas orelhas', '🦘 Suas asas'], a: 0 }
];

const API_BASE = '/api';

// Debug / Testing helpers via URL query parameters
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('clear')) {
    localStorage.clear();
    window.location.href = window.location.pathname;
} else if (urlParams.has('test')) {
    localStorage.setItem('capy_seeds', '10000');
    localStorage.setItem('capy_user', JSON.stringify({
        id: 'local_test_' + Date.now(),
        name: 'Teste',
        avatar: '🦫',
        email: 'test@capivara.aporttec.com',
        isLocal: true
    }));
    window.location.href = window.location.pathname;
}

let authToken = localStorage.getItem('capy_token') || '';
let apiOnline = false;

let currentUser = JSON.parse(localStorage.getItem('capy_user')) || null;
let tempAvatar = '🦫';

function slugifyName(input) {
    return String(input || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '.')
        .replace(/^\.+|\.+$/g, '')
        .slice(0, 30) || 'explorador';
}

async function apiRequest(path, options = {}) {
    const headers = options.headers ? { ...options.headers } : {};
    if (!headers['Content-Type'] && options.body) headers['Content-Type'] = 'application/json';
    if (authToken) headers.Authorization = `Bearer ${authToken}`;

    const response = await fetch(`${API_BASE}${path}`, { ...options, headers });
    if (!response.ok) {
        let message = `Erro ${response.status}`;
        try {
            const data = await response.json();
            if (data && data.error) message = data.error;
        } catch (e) {}
        throw new Error(message);
    }

    if (response.status === 204) return null;
    return response.json();
}

function mapAnimalFromApi(row) {
    const captured = row.capturedAt ? new Date(row.capturedAt) : new Date();
    const name = row.animalName || row.name || 'Animal';
    const nameKey = name.toLowerCase();
    const curioKey = Object.keys(curioData).find(k => nameKey.includes(k));
    const curio = curioKey ? curioData[curioKey] : (typeof getPremiumData === 'function' ? getPremiumData(name).funFact : 'Uma espécie incrível e cheia de segredos da nossa fauna!');

    return {
        id: row.id,
        name,
        category: row.category || 'desconhecido',
        location: row.location || 'natureza',
        photo: row.photoBase64 || null,
        curiosity: curio,
        description: row.notes || '',
        timestamp: captured.toLocaleDateString('pt-BR'),
        premiumUnlocked: Boolean(row.premiumUnlocked),
        rarity: 'comum',
        capturedAt: captured.toISOString(),
        createdEpoch: captured.getTime()
    };
}

async function syncAnimalsFromApi() {
    const rows = await apiRequest('/animals');
    animals = rows.map(mapAnimalFromApi);
}

async function syncAccessoriesFromApi() {
    const rows = await apiRequest('/accessories');
    ownedAccessories = rows.filter(x => x.owned).map(x => x.code);
    equippedAccessories = { head: null, eyes: null, body: null, hand: null, feet: null };
    rows.filter(x => x.equipped).forEach(x => {
        equippedAccessories[x.slot] = x.code;
    });
}

function getGameStatePayload() {
    return {
        guardianXP,
        seedCoins,
        currentStreak,
        lastVisitDate,
        quizDoneDate,
        userLevelMemo,
        activeMissions,
        cameraAccepted: Boolean(localStorage.getItem('capy_cam_accepted'))
    };
}

function applyGameStatePayload(state) {
    if (!state || typeof state !== 'object') return;

    guardianXP = Number(state.guardianXP || 0);
    seedCoins = Number(state.seedCoins || 0);
    currentStreak = Number(state.currentStreak || 0);
    lastVisitDate = state.lastVisitDate || '';
    quizDoneDate = state.quizDoneDate || '';
    userLevelMemo = Number(state.userLevelMemo || 1);
    activeMissions = state.activeMissions || activeMissions;

    if (state.cameraAccepted) {
        localStorage.setItem('capy_cam_accepted', 'true');
    }

    localStorage.setItem('capy_xpPlay', guardianXP);
    localStorage.setItem('capy_seeds', seedCoins);
    localStorage.setItem('capy_streak', currentStreak);
    localStorage.setItem('capy_last_visit', lastVisitDate);
    localStorage.setItem('capy_quiz_done', quizDoneDate);
    localStorage.setItem('capy_level', userLevelMemo);
    localStorage.setItem('capy_missions', JSON.stringify(activeMissions));
}

let stateSyncTimer = null;
let stateSyncInFlight = false;

async function syncGameStateFromApi() {
    const state = await apiRequest('/me/state');
    applyGameStatePayload(state);
}

async function pushGameStateToApi() {
    if (!authToken || stateSyncInFlight) return;
    stateSyncInFlight = true;
    try {
        await apiRequest('/me/state', {
            method: 'PUT',
            body: JSON.stringify(getGameStatePayload())
        });
    } catch (error) {
        console.warn('Falha ao salvar progresso na API:', error.message);
    } finally {
        stateSyncInFlight = false;
    }
}

async function flushGameStateSync() {
    if (!authToken) return;
    if (stateSyncTimer) {
        clearTimeout(stateSyncTimer);
        stateSyncTimer = null;
    }
    await apiRequest('/me/state', {
        method: 'PUT',
        body: JSON.stringify(getGameStatePayload())
    });
}

function scheduleGameStateSync(delayMs = 700) {
    if (!authToken) return;
    if (stateSyncTimer) clearTimeout(stateSyncTimer);
    stateSyncTimer = setTimeout(() => {
        pushGameStateToApi();
    }, delayMs);
}

async function hydrateRemoteState() {
    if (!authToken) return;
    try {
        const [me] = await Promise.all([
            apiRequest('/me'),
            syncAnimalsFromApi(),
            syncAccessoriesFromApi(),
            syncGameStateFromApi()
        ]);
        currentUser = {
            name: me.user.name,
            avatar: me.user.avatar,
            email: me.user.email,
            id: me.user.id
        };
        localStorage.setItem('capy_user', JSON.stringify(currentUser));
        apiOnline = true;
    } catch (error) {
        apiOnline = false;
        console.warn('Falha ao sincronizar com API:', error.message);
    }
}

async function authenticateExplorer(name, avatar, isGoogle) {
    const slug = slugifyName(name);
    const email = `${slug}${isGoogle ? '.g' : ''}@capivara.aporttec.com`;
    const password = `Capy#${slug}2026`;

    let auth;
    try {
        try {
            auth = await apiRequest('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password })
            });
        } catch (loginError) {
            auth = await apiRequest('/auth/register', {
                method: 'POST',
                body: JSON.stringify({ name, email, password, avatar })
            });
        }

        authToken = auth.token;
        localStorage.setItem('capy_token', authToken);
        currentUser = {
            id: auth.user.id,
            name: auth.user.name,
            avatar: auth.user.avatar,
            email: auth.user.email,
            isGoogle: Boolean(isGoogle)
        };
        localStorage.setItem('capy_user', JSON.stringify(currentUser));
        
        // Grant 10,000 seeds for test users
        const lowerName = name.toLowerCase();
        if (lowerName === 'teste' || lowerName === 'test' || lowerName === 'tesrez') {
            seedCoins = Math.max(seedCoins, 10000);
            localStorage.setItem('capy_seeds', seedCoins);
        }
        
        await hydrateRemoteState();
    } catch (apiError) {
        console.warn('API indisponível, iniciando em modo local offline:', apiError.message);
        authToken = null;
        localStorage.removeItem('capy_token');
        currentUser = {
            id: 'local_' + Date.now(),
            name: name,
            avatar: avatar || '🦫',
            email: email,
            isGoogle: Boolean(isGoogle),
            isLocal: true
        };
        localStorage.setItem('capy_user', JSON.stringify(currentUser));
        
        // Grant 10,000 seeds for test users in offline mode
        const lowerName = name.toLowerCase();
        if (lowerName === 'teste' || lowerName === 'test' || lowerName === 'tesrez') {
            seedCoins = Math.max(seedCoins, 10000);
            localStorage.setItem('capy_seeds', seedCoins);
        }
        
        showToast("Modo Offline Ativado! 📶❌", "⚠️");
    }
}

function selectAvatar(emoji, btn) {
    playSound('click'); tempAvatar = emoji;
    document.querySelectorAll('.avatar-btn').forEach(b => {
        b.classList.remove('border-green-500', 'bg-green-50'); b.classList.add('border-transparent', 'bg-gray-100');
    });
    btn.classList.add('border-green-500', 'bg-green-50'); btn.classList.remove('border-transparent', 'bg-gray-100');
    document.getElementById('avatarPreviewAuth').innerText = tempAvatar;
}

function openPrivacyFromLogin() {
    playSound('click');
    document.getElementById('privacyModal').classList.remove('hidden');
    document.getElementById('privacyModal').style.display = 'flex';
}

async function loginExplorer() {
    const consent = document.getElementById('parentalConsent').checked;
    if (!consent) return showToast("É necessário a permissão dos pais/responsáveis!", "⚠️");
    const name = document.getElementById('explorerName').value.trim();
    if (!name) return showToast("Digite seu nome!", "⚠️");
    try {
        playSound('success');
        await authenticateExplorer(name, tempAvatar, false);
        document.getElementById('authScreen').style.display = 'none';
        renderApp(); createConfetti();
        setTimeout(() => { showToast(`Bem-vindo, ${currentUser.name}!`, tempAvatar); }, 800);
    } catch (error) {
        showToast(`Falha no login: ${error.message}`, "⚠️");
    }
}

async function loginWithGoogle() {
    const consent = document.getElementById('parentalConsent').checked;
    if (!consent) return showToast("É necessário a permissão dos pais/responsáveis!", "⚠️");
    playSound('click');
    showToast("Conectando ao Google Play...", "🔄");
    // Simulação do Fluxo OAuth do Google Play Games
    setTimeout(async () => {
        try {
            playSound('success');
            const randomID = Math.floor(Math.random() * 9999);
            const name = `Explorador${randomID}`;
            await authenticateExplorer(name, '🎮', true);
            document.getElementById('authScreen').style.display = 'none';
            renderApp(); createConfetti();
            setTimeout(() => { showToast(`Sincronizado com o Google!`, "🎮"); }, 800);
        } catch (error) {
            showToast(`Falha no login Google: ${error.message}`, "⚠️");
        }
    }, 1500);
}

let animals = JSON.parse(localStorage.getItem('capy_vPlay')) || [];
let guardianXP = parseInt(localStorage.getItem('capy_xpPlay')) || 0;
let seedCoins = parseInt(localStorage.getItem('capy_seeds')) || 0;
if (currentUser) {
    const lowerName = currentUser.name.toLowerCase();
    if (lowerName === 'teste' || lowerName === 'test' || lowerName === 'tesrez') {
        if (seedCoins < 10000) {
            seedCoins = 10000;
            localStorage.setItem('capy_seeds', seedCoins);
        }
    }
}
let ownedAccessories = JSON.parse(localStorage.getItem('capy_owned_acc')) || [];
let equippedAccessories = JSON.parse(localStorage.getItem('capy_equipped_slots')) || { head: null, eyes: null, body: null, hand: null, feet: null };
let currentStreak = parseInt(localStorage.getItem('capy_streak')) || 0;
let lastVisitDate = localStorage.getItem('capy_last_visit') || '';
let quizDoneDate = localStorage.getItem('capy_quiz_done') || '';
let userLevelMemo = parseInt(localStorage.getItem('capy_level')) || 1;

let currentPhoto = null;
let selectedCategory = '';
let selectedLocation = '';
let currentAdAnimalId = null;
let pendingAction = null;
let audioCtx = null;
let audioUnlocked = false;
let soundMode = localStorage.getItem('capy_sound_mode') || 'both'; // 'both' ou 'sound'

// Procedural music sequencer variables (BGM)
let bgmTimer = null;
let bgmStep = 0;
let bgmMasterGain = null;
let currentTrackName = null;
let currentBgmAudio = null;


const missionsPool = [
    { id: 'm1', l: 'Missão Diária', d: 'Faça 1 descoberta hoje', check: () => animals.some(a => a.timestamp === new Date().toLocaleDateString('pt-BR')), reward: 15 },
    { id: 'm2', l: 'Safari de Insetos', d: 'Pesquise 3 insetos', check: () => animals.filter(a => a.category === 'inseto').length >= 3, reward: 20 },
    { id: 'm3', l: 'Expedição', d: 'Encontre 10 animais', check: () => animals.length >= 10, reward: 50 },
    { id: 'm4', l: 'Paparazzi', d: 'Foto no quintal', check: () => animals.some(a => a.location === 'quintal' && a.photo), reward: 25 },
    { id: 'm5', l: 'Amigo das Aves', d: 'Catalogar 2 aves', check: () => animals.filter(a => a.category === 'ave').length >= 2, reward: 20 },
    { id: 'm6', l: 'Estudioso Premium', d: 'Desbloqueie 1 segredo premium', check: () => animals.some(a => a.premiumUnlocked), reward: 30 }
];
let activeMissions = JSON.parse(localStorage.getItem('capy_missions')) || null;

// Audio System
function initAudio() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        audioCtx = new AudioContextClass();
    }
}

function unlockAudio() {
    try {
        initAudio();
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        audioUnlocked = true;
        
        const bgVideo = document.getElementById('villageBgVideo');
        if (bgVideo) {
            bgVideo.play().catch(e => {});
        }
        
        // Se estiver na aba da vila e o som estiver habilitado, inicia o som ambiente
        const vilaView = document.getElementById('vilaView');
        if (vilaView && !vilaView.classList.contains('hidden')) {
            startVillageAmbient();
        }
        
        // Se o guarda-roupa estiver visível e a música ativada, toca a música
        const closetModal = document.getElementById('closetModal');
        if (closetModal && !closetModal.classList.contains('hidden')) {
            changeBgm('wardrobe');
        } else {
            let activeView = 'vila';
            const views = ['home', 'lab', 'vila', 'games', 'album', 'badges'];
            for (const v of views) {
                const el = document.getElementById(v + 'View');
                if (el && !el.classList.contains('hidden')) {
                    activeView = v;
                    break;
                }
            }
            changeBgm(activeView);
        }
    } catch (e) {}
}

function setSoundMode(mode) {
    playSound('click');
    soundMode = mode;
    localStorage.setItem('capy_sound_mode', mode);
    updateSoundModeUI();
    
    if (mode === 'sound') {
        stopBgm();
    } else {
        const closetModal = document.getElementById('closetModal');
        if (closetModal && !closetModal.classList.contains('hidden')) {
            changeBgm('wardrobe');
        } else {
            let activeView = 'vila';
            const views = ['home', 'lab', 'vila', 'games', 'album', 'badges'];
            for (const v of views) {
                const el = document.getElementById(v + 'View');
                if (el && !el.classList.contains('hidden')) {
                    activeView = v;
                    break;
                }
            }
            changeBgm(activeView);
        }
    }
}

function updateSoundModeUI() {
    const btnBoth = document.getElementById('soundModeBoth');
    const btnSound = document.getElementById('soundModeSound');
    if (!btnBoth || !btnSound) return;
    
    if (soundMode === 'both') {
        btnBoth.className = "flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all text-center bg-green-500 text-white shadow-sm";
        btnSound.className = "flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all text-center bg-transparent text-gray-400 hover:text-gray-600";
    } else {
        btnBoth.className = "flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all text-center bg-transparent text-gray-400 hover:text-gray-600";
        btnSound.className = "flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all text-center bg-green-500 text-white shadow-sm";
    }
}

const bgmTracksSpec = {
    home: {
        stepTime: 0.333, // 90 BPM (8th notes: 60 / 180)
        bassNotes: [130.81, 164.81, 174.61, 196.00], // C3, E3, F3, G3
        chordTones: [
            [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C4, E4, G4, B4)
            [329.63, 392.00, 493.88, 587.33], // Em7 (E4, G4, B4, D5)
            [349.23, 440.00, 523.25, 659.25], // Fmaj7 (F4, A4, C5, E5)
            [392.00, 493.88, 587.33, 698.46]  // G7 (G4, B4, D5, F5)
        ],
        melodyScale: [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50], // C major pentatonic
        bassOsc: 'triangle',
        chordOsc: 'sine',
        melodyOsc: 'sine',
        masterVol: 0.15,
        bassVol: 0.22,
        chordVol: 0.15,
        melodyVol: 0.08,
        melodyChance: 0.45,
        hasDelay: true
    },
    album: {
        stepTime: 0.333,
        bassNotes: [130.81, 164.81, 174.61, 196.00],
        chordTones: [
            [261.63, 329.63, 392.00, 493.88],
            [329.63, 392.00, 493.88, 587.33],
            [349.23, 440.00, 523.25, 659.25],
            [392.00, 493.88, 587.33, 698.46]
        ],
        melodyScale: [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50],
        bassOsc: 'triangle',
        chordOsc: 'sine',
        melodyOsc: 'sine',
        masterVol: 0.15,
        bassVol: 0.22,
        chordVol: 0.15,
        melodyVol: 0.08,
        melodyChance: 0.45,
        hasDelay: true
    },
    games: {
        stepTime: 0.24, // 125 BPM (8th notes: 60 / 250)
        bassNotes: [130.81, 110.00, 146.83, 98.00], // C3, A2, D3, G2
        chordTones: [
            [261.63, 329.63, 392.00, 523.25], // C major
            [220.00, 261.63, 329.63, 440.00], // A minor
            [146.83, 174.61, 220.00, 293.66], // D minor
            [196.00, 246.94, 293.66, 392.00]  // G major
        ],
        melodyScale: [523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50], // C major scale
        bassOsc: 'triangle',
        chordOsc: 'triangle',
        melodyOsc: 'square',
        masterVol: 0.08,
        bassVol: 0.18,
        chordVol: 0.08,
        melodyVol: 0.04,
        melodyChance: 0.6,
        hasDelay: false
    },
    lab: {
        stepTime: 0.353, // 85 BPM (8th notes: 60 / 170)
        bassNotes: [110.00, 146.83, 87.31, 82.41], // A2, D3, F2, E2
        chordTones: [
            [220.00, 261.63, 329.63, 493.88], // Am9
            [293.66, 369.99, 440.00, 523.25, 659.25], // D9
            [174.61, 220.00, 261.63, 329.63], // Fmaj7
            [164.81, 220.00, 246.94, 293.66]  // E7sus4
        ],
        melodyScale: [440.00, 493.88, 523.25, 587.33, 659.25, 739.99, 783.99, 880.00], // A Dorian/Minor scale
        bassOsc: 'sine',
        chordOsc: 'sine',
        melodyOsc: 'sine',
        masterVol: 0.18,
        bassVol: 0.24,
        chordVol: 0.14,
        melodyVol: 0.08,
        melodyChance: 0.4,
        hasDelay: true
    },
    badges: {
        stepTime: 0.3, // 100 BPM (8th notes: 60 / 200)
        bassNotes: [174.61, 196.00, 164.81, 220.00], // F3, G3, E3, A3
        chordTones: [
            [349.23, 440.00, 523.25, 659.25], // Fmaj7
            [392.00, 493.88, 587.33, 659.25], // G6
            [329.63, 392.00, 493.88, 587.33], // Em7
            [220.00, 261.63, 329.63, 392.00]  // Am7
        ],
        melodyScale: [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50], // C major pentatonic
        bassOsc: 'triangle',
        chordOsc: 'sine',
        melodyOsc: 'triangle',
        masterVol: 0.16,
        bassVol: 0.25,
        chordVol: 0.16,
        melodyVol: 0.09,
        melodyChance: 0.5,
        hasDelay: true
    },
    vila: {
        stepTime: 0.272, // 110 BPM (8th notes: 60 / 220)
        bassNotes: [98.00, 130.81, 110.00, 146.83], // G2, C3, A2, D3
        chordTones: [
            [196.00, 246.94, 293.66, 369.99], // Gmaj7
            [261.63, 329.63, 392.00, 493.88], // Cmaj7
            [220.00, 261.63, 329.63, 392.00], // Am7
            [293.66, 369.99, 440.00, 523.25]  // D7
        ],
        melodyScale: [392.00, 440.00, 493.88, 587.33, 659.25, 783.99], // G major pentatonic
        bassOsc: 'triangle',
        chordOsc: 'sine',
        melodyOsc: 'sine',
        masterVol: 0.16,
        bassVol: 0.24,
        chordVol: 0.16,
        melodyVol: 0.09,
        melodyChance: 0.5,
        hasDelay: true
    },
    wardrobe: {
        stepTime: 0.22, // ~136 BPM
        bassNotes: [130.81, 174.61, 196.00, 130.81],
        chordTones: [
            [261.63, 329.63, 392.00, 493.88], // Cmaj7
            [349.23, 440.00, 523.25, 659.25], // Fmaj7
            [392.00, 493.88, 587.33, 783.99], // G6/G5
            [261.63, 329.63, 392.00, 493.88]  // Cmaj7
        ],
        melodyScale: [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50],
        bassOsc: 'triangle',
        chordOsc: 'sine',
        melodyOsc: 'sine',
        masterVol: 0.2,
        bassVol: 0.28,
        chordVol: 0.18,
        melodyVol: 0.11,
        melodyChance: 0.55,
        hasDelay: true
    },
    adventure: {
        stepTime: 0.187, // ~160 BPM (8th notes: 60 / 320)
        bassNotes: [110.00, 110.00, 146.83, 164.81], // A2, A2, D3, E3
        chordTones: [
            [220.00, 261.63, 329.63, 392.00], // Am7
            [220.00, 261.63, 329.63, 392.00], // Am7
            [293.66, 349.23, 440.00, 523.25], // Dm7
            [329.63, 392.00, 493.88, 587.33]  // Em7
        ],
        melodyScale: [440.00, 493.88, 523.25, 587.33, 659.25, 783.99, 880.00], // A minor pentatonic / natural scale
        bassOsc: 'sawtooth',
        chordOsc: 'triangle',
        melodyOsc: 'sawtooth',
        masterVol: 0.08,
        bassVol: 0.16,
        chordVol: 0.08,
        melodyVol: 0.04,
        melodyChance: 0.75,
        hasDelay: true
    }
};

function changeBgm(trackName) {
    try {
        if (!audioUnlocked) return;
        initAudio(); if (!audioCtx) return;
        if (soundMode !== 'both') return;
        if (currentTrackName === trackName && (bgmTimer || currentBgmAudio)) return;
        
        // Se houver música procedural tocando, fazer fade-out suave antes de remover
        if (bgmMasterGain) {
            const oldGain = bgmMasterGain;
            try {
                const now = audioCtx.currentTime;
                oldGain.gain.setValueAtTime(oldGain.gain.value, now);
                oldGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
                setTimeout(() => {
                    try { oldGain.disconnect(); } catch (e) {}
                }, 500);
            } catch (e) {}
        }
        
        if (bgmTimer) {
            clearInterval(bgmTimer);
            bgmTimer = null;
        }

        // Se houver música de arquivo tocando, fazer fade-out suave antes de pausar
        if (currentBgmAudio) {
            const audioToFade = currentBgmAudio;
            currentBgmAudio = null;
            try {
                let vol = audioToFade.volume;
                const fadeInterval = setInterval(() => {
                    if (vol > 0.05) {
                        vol -= 0.05;
                        audioToFade.volume = vol;
                    } else {
                        clearInterval(fadeInterval);
                        audioToFade.pause();
                    }
                }, 50);
            } catch (e) {
                audioToFade.pause();
            }
        }
        
        if (!trackName) {
            currentTrackName = null;
            bgmMasterGain = null;
            return;
        }
        
        currentTrackName = trackName;

        // Se for trilha sonora em arquivo de áudio de alta qualidade
        if (trackName === 'games' || trackName === 'adventure') {
            const file = trackName === 'games' ? 'minigames_bgm.ogg' : 'adventure_bgm.ogg';
            currentBgmAudio = new Audio(file);
            currentBgmAudio.loop = true;
            currentBgmAudio.volume = trackName === 'games' ? 0.3 : 0.25;
            currentBgmAudio.play().catch(e => console.warn("Failed to play BGM file:", e));
            return;
        }
        
        const spec = bgmTracksSpec[trackName];
        if (!spec) return;
        
        bgmStep = 0;
        let nextNoteTime = audioCtx.currentTime;
        
        bgmMasterGain = audioCtx.createGain();
        bgmMasterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        bgmMasterGain.gain.linearRampToValueAtTime(spec.masterVol || 0.2, audioCtx.currentTime + 0.2);
        bgmMasterGain.connect(audioCtx.destination);
        
        function playNote(freq, type, duration, vol, delay = 0) {
            if (!audioCtx || !bgmMasterGain) return;
            const now = audioCtx.currentTime;
            
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            osc.type = type;
            osc.frequency.setValueAtTime(freq, now + delay);
            
            gainNode.gain.setValueAtTime(0, now + delay);
            gainNode.gain.linearRampToValueAtTime(vol, now + delay + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + delay + duration);
            
            osc.connect(gainNode);
            gainNode.connect(bgmMasterGain);
            
            osc.start(now + delay);
            osc.stop(now + delay + duration);
        }
        
        function tick() {
            if (!audioCtx || !bgmMasterGain) return;
            const now = audioCtx.currentTime;
            while (nextNoteTime < now + 0.1) {
                const step = bgmStep % 16;
                const chordIdx = Math.floor((bgmStep / 16) % 4);
                
                // 1. Baixo
                if (step === 0) {
                    playNote(spec.bassNotes[chordIdx], spec.bassOsc, 3.0, spec.bassVol, nextNoteTime - now);
                }
                
                // 2. Acorde arpejado
                if (step % 4 === 0) {
                    const notes = spec.chordTones[chordIdx];
                    const note = notes[Math.floor(Math.random() * notes.length)];
                    playNote(note, spec.chordOsc, 1.5, spec.chordVol, nextNoteTime - now);
                }
                
                // 3. Melodia aleatória nos passos ímpares
                if (step % 2 !== 0 && Math.random() < spec.melodyChance) {
                    const note = spec.melodyScale[Math.floor(Math.random() * spec.melodyScale.length)];
                    playNote(note, spec.melodyOsc, 0.45, spec.melodyVol, nextNoteTime - now);
                    
                    if (spec.hasDelay) {
                        playNote(note, spec.melodyOsc, 0.35, spec.melodyVol * 0.3, nextNoteTime - now + spec.stepTime);
                    }
                }
                
                bgmStep++;
                nextNoteTime += spec.stepTime;
            }
        }
        
        bgmTimer = setInterval(tick, 50);
    } catch (e) {
        console.error("Erro na música procedural:", e);
    }
}

function stopBgm() {
    if (bgmTimer) {
        clearInterval(bgmTimer);
        bgmTimer = null;
    }
    currentTrackName = null;
    if (bgmMasterGain) {
        try {
            const now = audioCtx.currentTime;
            bgmMasterGain.gain.setValueAtTime(bgmMasterGain.gain.value, now);
            bgmMasterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            const oldGain = bgmMasterGain;
            setTimeout(() => {
                try {
                    oldGain.disconnect();
                } catch(e){}
            }, 500);
        } catch(e) {}
        bgmMasterGain = null;
    }
    if (currentBgmAudio) {
        const audioToFade = currentBgmAudio;
        currentBgmAudio = null;
        try {
            let vol = audioToFade.volume;
            const fadeInterval = setInterval(() => {
                if (vol > 0.05) {
                    vol -= 0.05;
                    audioToFade.volume = vol;
                } else {
                    clearInterval(fadeInterval);
                    audioToFade.pause();
                }
            }, 50);
        } catch (e) {
            audioToFade.pause();
        }
    }
}

function playSound(type) {
    try {
        if (!audioUnlocked) return;
        initAudio(); if (!audioCtx) return;
        const now = audioCtx.currentTime;
        
        if (type === 'click') {
            // Clique bolha duplo ascendente
            const osc1 = audioCtx.createOscillator();
            const gain1 = audioCtx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(320, now);
            osc1.frequency.exponentialRampToValueAtTime(640, now + 0.04);
            gain1.gain.setValueAtTime(0.12, now);
            gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
            osc1.connect(gain1);
            gain1.connect(audioCtx.destination);
            osc1.start(now);
            osc1.stop(now + 0.05);
            
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(420, now + 0.03);
            osc2.frequency.exponentialRampToValueAtTime(840, now + 0.07);
            gain2.gain.setValueAtTime(0.08, now + 0.03);
            gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc2.start(now + 0.03);
            osc2.stop(now + 0.08);
        } else if (type === 'alert') {
            // Futurist double beep (880Hz -> 1174Hz)
            const osc1 = audioCtx.createOscillator();
            const gain1 = audioCtx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(880, now);
            gain1.gain.setValueAtTime(0.12, now);
            gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
            osc1.connect(gain1);
            gain1.connect(audioCtx.destination);
            osc1.start(now);
            osc1.stop(now + 0.16);

            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1174.66, now + 0.12);
            gain2.gain.setValueAtTime(0.12, now + 0.12);
            gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.27);
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc2.start(now + 0.12);
            osc2.stop(now + 0.28);
        } else if (type === 'siren') {
            // Sirene de alerta (pitch oscilando urgente)
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.linearRampToValueAtTime(880, now + 0.3);
            osc.frequency.linearRampToValueAtTime(440, now + 0.6);
            osc.frequency.linearRampToValueAtTime(880, now + 0.9);
            osc.frequency.linearRampToValueAtTime(440, now + 1.2);
            
            gainNode.gain.setValueAtTime(0.12, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
            
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 1.2);
        } else if (type === 'coin') {
            // Chime retrô fofo (E5 -> G5 -> C6 -> E6)
            const notes = [659.25, 783.99, 1046.50, 1318.51];
            notes.forEach((freq, idx) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                const playTime = now + (idx * 0.05);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, playTime);
                gain.gain.setValueAtTime(0.09, playTime);
                gain.gain.exponentialRampToValueAtTime(0.001, playTime + 0.22);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(playTime);
                osc.stop(playTime + 0.24);
            });
        } else if (type === 'success') {
            // Harpa pentatônica rápida ascendente em dó maior
            const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
            notes.forEach((freq, idx) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                const playTime = now + (idx * 0.06);
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, playTime);
                gain.gain.setValueAtTime(0.12, playTime);
                gain.gain.exponentialRampToValueAtTime(0.001, playTime + 0.35);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(playTime);
                osc.stop(playTime + 0.38);
            });
        } else if (type === 'levelup') {
            // Fanfarra festiva de acordes harmônicos e final agudo
            const chords = [
                [261.63, 329.63, 392.00], // C4 major
                [349.23, 440.00, 523.25], // F4 major
                [392.00, 493.88, 587.33]  // G4 major
            ];
            chords.forEach((chord, chordIdx) => {
                const chordTime = now + (chordIdx * 0.15);
                chord.forEach(freq => {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, chordTime);
                    gain.gain.setValueAtTime(0.08, chordTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, chordTime + 0.35);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start(chordTime);
                    osc.stop(chordTime + 0.38);
                });
            });
            const finaleNotes = [523.25, 659.25, 783.99, 1046.50];
            finaleNotes.forEach((freq, idx) => {
                const noteTime = now + 0.45 + (idx * 0.05);
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, noteTime);
                gain.gain.setValueAtTime(0.12, noteTime);
                gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.45);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(noteTime);
                osc.stop(noteTime + 0.48);
            });
        } else if (type === 'error') {
            // "Boing" engraçado descendente detunado
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.linearRampToValueAtTime(100, now + 0.35);
            
            const lfo = audioCtx.createOscillator();
            const lfoGain = audioCtx.createGain();
            lfo.frequency.setValueAtTime(16, now);
            lfoGain.gain.setValueAtTime(35, now);
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            
            gain.gain.setValueAtTime(0.14, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            lfo.start(now);
            osc.start(now);
            lfo.stop(now + 0.36);
            osc.stop(now + 0.36);
        } else if (type === 'shutter') {
            // White noise burst for camera shutter click
            const bufferSize = audioCtx.sampleRate * 0.1; // 100ms
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            const noise = audioCtx.createBufferSource();
            noise.buffer = buffer;
            const filter = audioCtx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 1000;
            const gain = audioCtx.createGain();
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(audioCtx.destination);
            noise.start(now);
            noise.stop(now + 0.1);
        } else if (type === 'scan_beep') {
            // Short sci-fi scanner beep (800Hz -> 1400Hz)
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(1400, now + 0.08);
            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.09);
        }
    } catch (e) {}
}

window.addEventListener('pointerdown', unlockAudio, { once: true });
window.addEventListener('keydown', unlockAudio, { once: true });

function showToast(message, icon = '🎉') {
    const toast = document.getElementById('customToast');
    const toastIcon = document.getElementById('toastIcon');
    if (icon.endsWith('.png')) {
        toastIcon.innerHTML = `<img src="${icon}" class="w-6 h-6 object-contain inline-block -mt-0.5 animate-bounce">`;
    } else {
        toastIcon.innerText = icon;
    }
    document.getElementById('toastMessage').innerText = message;
    toast.classList.remove('opacity-0', '-translate-y-20');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => { toast.classList.remove('opacity-100', 'translate-y-0'); toast.classList.add('opacity-0', '-translate-y-20'); }, 3000);
}

function checkStreaks() {
    const today = new Date().toDateString();
    if (!activeMissions || activeMissions.date !== today) {
        const shuffled = [...missionsPool].sort(() => 0.5 - Math.random());
        activeMissions = { date: today, tasks: shuffled.slice(0, 3).map(m => ({ id: m.id, claimed: false })) };
        localStorage.setItem('capy_missions', JSON.stringify(activeMissions));
    }
    if (lastVisitDate !== today) {
        if (lastVisitDate) {
            const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
            if (lastVisitDate === yesterday.toDateString()) currentStreak++; else currentStreak = 1;
        } else currentStreak = 1;
        lastVisitDate = today;
        localStorage.setItem('capy_streak', currentStreak);
        localStorage.setItem('capy_last_visit', today);
        scheduleGameStateSync();
        setTimeout(() => {
            playSound('success');
            document.getElementById('dailyRewardModal').classList.remove('hidden');
            setTimeout(() => { document.getElementById('dailyRewardContent').classList.remove('scale-0'); document.getElementById('dailyRewardContent').classList.add('scale-100'); }, 10);
        }, 1000);
    }
    document.getElementById('streakCount').innerText = `${currentStreak}d`;
}

function claimDailyReward() {
    playSound('coin'); seedCoins += 25; localStorage.setItem('capy_seeds', seedCoins);
    scheduleGameStateSync();
    const modal = document.getElementById('dailyRewardContent');
    modal.classList.remove('scale-100'); modal.classList.add('scale-0');
    setTimeout(() => { document.getElementById('dailyRewardModal').classList.add('hidden'); showToast("+25 capins hoje!", "🌟"); renderApp(); }, 300);
}

// MINIGAMES LOGIC
const silhouetteBank = [
    { e: '🦋', n: 'Borboleta', o: ['Borboleta', 'Mariposa', 'Passarinho', 'Besouro'] },
    { e: '🐌', n: 'Caracol', o: ['Minhoca', 'Sapo', 'Caracol', 'Cobra'] },
    { e: '🐢', n: 'Tartaruga', o: ['Jacaré', 'Tartaruga', 'Tatu', 'Lagartixa'] },
    { e: '🐞', n: 'Joaninha', o: ['Joaninha', 'Formiga', 'Besouro', 'Abelha'] },
    { e: '🐸', n: 'Sapo', o: ['Sapo', 'Tartaruga', 'Rato', 'Peixe'] },
    { e: '🐝', n: 'Abelha', o: ['Mosca', 'Abelha', 'Joaninha', 'Vespa'] },
    { e: '🦦', n: 'Capivara', o: ['Capivara', 'Cachorro', 'Gato', 'Castor'] },
    { e: '🦜', n: 'Arara', o: ['Tucano', 'Arara', 'Gavião', 'Pombo'] },
    { e: '🐒', n: 'Sagui', o: ['Cachorro', 'Sagui', 'Gato', 'Bicho-preguiça'] },
    { e: '🐆', n: 'Onça-pintada', o: ['Gato', 'Onça-pintada', 'Lobo', 'Capivara'] },
    { e: '🐺', n: 'Lobo-guará', o: ['Lobo-guará', 'Cachorro', 'Raposa', 'Onça'] },
    { e: '🦉', n: 'Coruja', o: ['Pombo', 'Morcego', 'Coruja', 'Urubu'] },
    { e: '🦇', n: 'Morcego', o: ['Borboleta', 'Pássaro', 'Rato', 'Morcego'] },
    { e: '🕷️', n: 'Aranha', o: ['Besouro', 'Aranha', 'Caranguejo', 'Formiga'] },
    { e: '🐜', n: 'Formiga', o: ['Cupim', 'Barata', 'Formiga', 'Joaninha'] },
    { e: '🐍', n: 'Cobra', o: ['Minhoca', 'Lagartixa', 'Cobra', 'Sapo'] },
    { e: '🐊', n: 'Jacaré', o: ['Jacaré', 'Tartaruga', 'Sapo', 'Iguana'] },
    { e: '🐛', n: 'Lagarta', o: ['Minhoca', 'Lagarta', 'Centopeia', 'Cobra'] },
    { e: '🦥', n: 'Bicho-preguiça', o: ['Sagui', 'Urso', 'Bicho-preguiça', 'Coala'] },
    { e: '🦨', n: 'Gambá', o: ['Gambá', 'Rato', 'Cachorro', 'Esquilo'] },
    { e: '🦟', n: 'Mosquito', o: ['Mosca', 'Mosquito', 'Abelha', 'Libélula'] },
    { e: '🦗', n: 'Grilo', o: ['Grilo', 'Gafanhoto', 'Barata', 'Formiga'] },
    { e: '🦂', n: 'Escorpião', o: ['Escorpião', 'Aranha', 'Besouro', 'Caranguejo'] },
    { e: '🦎', n: 'Lagartixa', o: ['Lagartixa', 'Cobra', 'Sapo', 'Jacaré'] },
    { e: '🐕', n: 'Cachorro-do-mato', o: ['Cachorro-do-mato', 'Lobo-guará', 'Raposa', 'Gato'] },
    { e: '🦡', n: 'Quati', o: ['Quati', 'Gambá', 'Bicho-preguiça', 'Mico'] },
    { e: '🐆', n: 'Jaguatirica', o: ['Jaguatirica', 'Gato', 'Onça-pintada', 'Lobo-guará'] },
    { e: '🦧', n: 'Mico', o: ['Mico', 'Sagui', 'Preguiça', 'Cachorro'] },
    { e: '🦫', n: 'Tatu-bola', o: ['Tatu-bola', 'Tartaruga', 'Caracol', 'Ouriço'] },
    { e: '🦤', n: 'Tucano', o: ['Tucano', 'Arara', 'Maritaca', 'Coruja'] },
    { e: '🐦', n: 'Bem-te-vi', o: ['Bem-te-vi', 'Pardal', 'João-de-barro', 'Sabiá'] },
    { e: '🐦', n: 'João-de-barro', o: ['João-de-barro', 'Bem-te-vi', 'Sabiá', 'Pombo'] },
    { e: '🐦', n: 'Sabiá-laranjeira', o: ['Sabiá-laranjeira', 'João-de-barro', 'Bem-te-vi', 'Pardal'] },
    { e: '🐦', n: 'Beija-flor', o: ['Beija-flor', 'Borboleta', 'Abelha', 'Pardal'] },
    { e: '🐦', n: 'Quero-quero', o: ['Quero-quero', 'Gavião', 'Pombo', 'Bem-te-vi'] },
    { e: '🐦', n: 'Pardal', o: ['Pardal', 'Pombo', 'Rolinha', 'Sabiá'] },
    { e: '🐦', n: 'Rolinha', o: ['Rolinha', 'Pombo', 'Pardal', 'Sabiá'] },
    { e: '🦜', n: 'Maritaca', o: ['Maritaca', 'Arara', 'Tucano', 'Coruja'] },
    { e: '🦖', n: 'Teiú', o: ['Teiú', 'Lagartixa', 'Iguana', 'Jacaré'] },
    { e: '🦎', n: 'Iguana', o: ['Iguana', 'Teiú', 'Lagartixa', 'Cobra'] },
    { e: '🐍', n: 'Jiboia', o: ['Jiboia', 'Sucuri', 'Cascavel', 'Cobra-coral'] },
    { e: '🐍', n: 'Sucuri', o: ['Sucuri', 'Jiboia', 'Cobra-coral', 'Jacaré'] },
    { e: '🐍', n: 'Cascavel', o: ['Cascavel', 'Jararaca', 'Cobra', 'Lagartixa'] },
    { e: '🐍', n: 'Jararaca', o: ['Jararaca', 'Cascavel', 'Cobra', 'Sucuri'] },
    { e: '🐍', n: 'Cobra-coral', o: ['Cobra-coral', 'Cascavel', 'Jararaca', 'Jiboia'] },
    { e: '🐢', n: 'Jabuti', o: ['Jabuti', 'Cágado', 'Tartaruga', 'Caracol'] },
    { e: '🐢', n: 'Cágado', o: ['Cágado', 'Jabuti', 'Tartaruga', 'Jacaré'] },
    { e: '🐸', n: 'Perereca', o: ['Perereca', 'Sapo', 'Rã', 'Lagartixa'] },
    { e: '🐸', n: 'Rã', o: ['Rã', 'Sapo', 'Perereca', 'Peixe'] },
    { e: '🕷️', n: 'Caranguejeira', o: ['Caranguejeira', 'Aranha', 'Escorpião', 'Caranguejo'] },
    { e: '🕷️', n: 'Armadeira', o: ['Armadeira', 'Aranha', 'Caranguejeira', 'Escorpião'] },
    { e: '🐜', n: 'Saúva', o: ['Saúva', 'Formiga', 'Cupim', 'Besouro'] },
    { e: '🐜', n: 'Formiga-lava-pé', o: ['Formiga-lava-pé', 'Saúva', 'Formiga', 'Aranha'] },
    { e: '🐝', n: 'Abelha-jataí', o: ['Abelha-jataí', 'Abelha', 'Vespa', 'Mosca'] },
    { e: '🐝', n: 'Arapuá', o: ['Arapuá', 'Abelha', 'Mosca', 'Mosquito'] },
    { e: '🐝', n: 'Mamangava', o: ['Mamangava', 'Abelha', 'Besouro', 'Borboleta'] },
    { e: '🐝', n: 'Marimbondo', o: ['Marimbondo', 'Vespa', 'Abelha', 'Mosca'] },
    { e: '🦗', n: 'Louva-a-deus', o: ['Louva-a-deus', 'Grilo', 'Bicho-pau', 'Barata'] },
    { e: '🪵', n: 'Bicho-pau', o: ['Bicho-pau', 'Lagarta', 'Cobra', 'Minhoca'] },
    { e: '🐛', n: 'Centopeia', o: ['Centopeia', 'Lagarta', 'Minhoca', 'Cobra'] },
    { e: '🐛', n: 'Piolho-de-cobra', o: ['Piolho-de-cobra', 'Minhoca', 'Centopeia', 'Caracol'] },
    { e: '🪳', n: 'Barata', o: ['Barata', 'Besouro', 'Formiga', 'Grilo'] },
    { e: '🐜', n: 'Cupim', o: ['Cupim', 'Formiga', 'Abelha', 'Barata'] }
];
let currentSilhouette = null;

function loadSilhouetteGame() {
    currentSilhouette = silhouetteBank[Math.floor(Math.random() * silhouetteBank.length)];
    const options = [...currentSilhouette.o].sort(() => 0.5 - Math.random());
    document.getElementById('silhouetteEmoji').innerText = currentSilhouette.e;
    document.getElementById('silhouetteEmoji').classList.add('silhouette');
    document.getElementById('silhouetteEmoji').classList.remove('revealed');
    document.getElementById('silhouetteOptions').innerHTML = options.map(opt => `
        <button onclick="guessSilhouette('${opt}', this)" class="p-4 bg-white border-2 border-blue-100 rounded-2xl text-[12px] font-black text-blue-900 hover:bg-blue-50 btn-bounce shadow-sm uppercase tracking-wider">
            ${opt}
        </button>
    `).join('');
}

function guessSilhouette(guess, btn) {
    if (guess === currentSilhouette.n) {
        playSound('success');
        document.getElementById('silhouetteEmoji').classList.remove('silhouette');
        document.getElementById('silhouetteEmoji').classList.add('revealed');
        btn.classList.replace('bg-white', 'bg-green-500');
        btn.classList.replace('text-blue-900', 'text-white');
        seedCoins += 15; guardianXP += 10;
        localStorage.setItem('capy_seeds', seedCoins); localStorage.setItem('capy_xpPlay', guardianXP);
        updateAchStat('silhouetteCorrect', 1);
        scheduleGameStateSync();
        showToast("Acertou! +15 capins!", "seed_coin.png"); renderApp(); createConfetti();
        setTimeout(loadSilhouetteGame, 2500);
    } else {
        playSound('click');
        btn.classList.replace('bg-white', 'bg-red-500');
        btn.classList.replace('text-blue-900', 'text-white');
        btn.disabled = true;
    }
}

// Progressive Memory Game pool
const memoryEmojisPool = ['🦋','🐌','🐢','🐞','🐸','🐝','🦦','🦜','🐒','🐆','🐺','🦉','🦇','🕷️','🐜','🐍','🐊','🐛','🦥','🦨','🦟','🦗','🦂','🦎'];
let currentMemoryLevel = parseInt(localStorage.getItem('capy_memory_game_level')) || 1;
let currentMemoryEmojis = []; // Emojis used in current game round
let flippedCards = [];
let matchedPairs = 0;
let isMemoryPlaying = false;

// Levels specifications
const memoryLevelsSpec = {
    1: { pairs: 4, cols: 'grid-cols-4', rewardSeeds: 15, rewardXP: 10, frontText: 'text-2xl', backText: 'text-3xl' },
    2: { pairs: 6, cols: 'grid-cols-4', rewardSeeds: 25, rewardXP: 15, frontText: 'text-2xl', backText: 'text-3xl' },
    3: { pairs: 8, cols: 'grid-cols-4', rewardSeeds: 35, rewardXP: 20, frontText: 'text-2xl', backText: 'text-3xl' },
    4: { pairs: 10, cols: 'grid-cols-5', rewardSeeds: 45, rewardXP: 25, frontText: 'text-xl', backText: 'text-2xl' },
    5: { pairs: 12, cols: 'grid-cols-6', rewardSeeds: 60, rewardXP: 35, frontText: 'text-lg', backText: 'text-xl' }
};

function updateMemoryGameUI() {
    const levelInd = document.getElementById('memoryLevelIndicator');
    const rewardInd = document.getElementById('memoryRewardIndicator');
    const startBtn = document.getElementById('memoryStartBtn');
    if (!levelInd || !rewardInd || !startBtn) return;

    levelInd.innerText = `Nível ${currentMemoryLevel}/5`;
    const spec = memoryLevelsSpec[currentMemoryLevel];
    rewardInd.innerHTML = `+${spec.rewardSeeds} <img src="seed_coin.png" class="w-3.5 h-3.5 object-contain inline-block -mt-0.5">`;

    if (!isMemoryPlaying) {
        startBtn.innerText = currentMemoryLevel === 1 ? "INICIAR PARTIDA" : `INICIAR NÍVEL ${currentMemoryLevel}`;
        startBtn.style.display = 'block';
    }
}

function startMemoryGame() {
    playSound('click');
    if (isMemoryPlaying) return;
    isMemoryPlaying = true; matchedPairs = 0; flippedCards = [];
    document.getElementById('memoryStartBtn').style.display = 'none';

    const spec = memoryLevelsSpec[currentMemoryLevel];
    
    // Select N random distinct emojis from pool
    const shuffledPool = [...memoryEmojisPool].sort(() => 0.5 - Math.random());
    currentMemoryEmojis = shuffledPool.slice(0, spec.pairs);

    // Create deck with pairs and shuffle
    const deck = [...currentMemoryEmojis, ...currentMemoryEmojis].sort(() => 0.5 - Math.random());

    // Update Grid Columns class
    const grid = document.getElementById('memoryGameGrid');
    grid.className = `grid ${spec.cols} gap-2 mb-4`;

    grid.innerHTML = deck.map(emoji => `
        <div class="memory-card" onclick="flipMemoryCard(this, '${emoji}')">
            <div class="memory-card-inner">
                <div class="memory-front ${spec.frontText}">❓</div>
                <div class="memory-back ${spec.backText}">${emoji}</div>
            </div>
        </div>
    `).join('');
}

function flipMemoryCard(card, emoji) {
    if (flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('memory-matched')) return;
    playSound('click');
    card.classList.add('flipped');
    flippedCards.push({ card, emoji });
    if (flippedCards.length === 2) setTimeout(checkMemoryMatch, 800);
}

function checkMemoryMatch() {
    const [c1, c2] = flippedCards;
    if (c1.emoji === c2.emoji) {
        playSound('success');
        c1.card.classList.add('memory-matched'); c2.card.classList.add('memory-matched');
        matchedPairs++;
        
        const spec = memoryLevelsSpec[currentMemoryLevel];
        if (matchedPairs === spec.pairs) {
            playSound('levelup');
            
            // Give rewards for current level
            seedCoins += spec.rewardSeeds; 
            guardianXP += spec.rewardXP;
            localStorage.setItem('capy_seeds', seedCoins); 
            localStorage.setItem('capy_xpPlay', guardianXP);
            updateAchStat('memoryPlays', 1);
            updateAchStat('memoryMaxLevel', currentMemoryLevel, 'max');
            scheduleGameStateSync();
            createConfetti();

            // Progress level
            if (currentMemoryLevel < 5) {
                showToast(`Nível ${currentMemoryLevel} Concluído! +${spec.rewardSeeds} capins!`, "seed_coin.png");
                currentMemoryLevel++;
                localStorage.setItem('capy_memory_game_level', currentMemoryLevel);
                
                isMemoryPlaying = false;
                updateMemoryGameUI();
                renderApp();
            } else {
                // Completed Level 5: Boss/Victory bonus!
                const bonusSeeds = 100;
                seedCoins += bonusSeeds;
                localStorage.setItem('capy_seeds', seedCoins);
                updateAchStat('memoryResets', 1);
                
                showToast(`Parabéns! Você zerou o Jogo da Memória! +100 capins de bônus! 🏆`, "seed_coin.png");
                
                // Reset back to level 1
                currentMemoryLevel = 1;
                localStorage.setItem('capy_memory_game_level', currentMemoryLevel);
                
                isMemoryPlaying = false;
                updateMemoryGameUI();
                renderApp();
                
                // Change start button text to play again
                const startBtn = document.getElementById('memoryStartBtn');
                if (startBtn) {
                    startBtn.innerText = "JOGAR NOVAMENTE (Nível 1)";
                    startBtn.style.display = 'block';
                }
            }
        }
    } else {
        c1.card.classList.remove('flipped'); c2.card.classList.remove('flipped');
    }
    flippedCards = [];
}

function loadDailyQuiz() {
    const today = new Date().toDateString();
    const quizContainer = document.getElementById('quizContainer');
    if (quizDoneDate === today) {
        quizContainer.innerHTML = `<div class="text-center py-4 space-y-2"><span class="text-3xl">🌟</span><p class="text-xs text-amber-900 font-bold">Você já resolveu o enigma de hoje!</p></div>`;
        return;
    }
    const q = quizBank[new Date().getDate() % quizBank.length];
    document.getElementById('quizQuestion').innerText = q.q;
    document.getElementById('quizOptions').innerHTML = q.o.map((opt, idx) => `
        <button onclick="answerQuiz(${idx}, ${q.a})" class="w-full text-left p-3.5 bg-white border border-amber-200 hover:border-amber-400 rounded-2xl text-xs font-bold text-amber-900 transition-all btn-bounce active:scale-95"><span>${opt}</span></button>
    `).join('');
}

function answerQuiz(selected, correct) {
    if (selected === correct) {
        playSound('success'); seedCoins += 15; guardianXP += 20;
        localStorage.setItem('capy_seeds', seedCoins); localStorage.setItem('capy_xpPlay', guardianXP);
        quizDoneDate = new Date().toDateString(); localStorage.setItem('capy_quiz_done', quizDoneDate);
        updateAchStat('quizzesDailyAnswered', 1);
        scheduleGameStateSync();
        document.getElementById('quizContainer').innerHTML = `<div class="text-center py-4 bg-green-100 rounded-3xl p-4 border border-green-300 animate-bounce"><span class="text-3xl">🎉 ACERTOU!</span><p class="text-xs text-green-800 font-bold mt-2">+15 <img src="seed_coin.png" class="w-3.5 h-3.5 object-contain inline-block -mt-0.5"> Capins e 20 XP!</p></div>`;
        showToast("Resposta Certa!", "🎯"); renderApp();
    } else { playSound('click'); showToast("Tente novamente!", "❌"); event.target.closest('button').classList.add('border-red-400', 'bg-red-50'); }
}

function openCloset() {
    playSound('click');
    document.getElementById('closetModal').classList.remove('hidden');
    renderCloset();
    changeBgm('wardrobe');
}

function closeCloset() {
    playSound('click');
    document.getElementById('closetModal').classList.add('hidden');
    let activeView = 'vila';
    const views = ['home', 'lab', 'vila', 'games', 'album', 'badges'];
    for (const v of views) {
        const el = document.getElementById(v + 'View');
        if (el && !el.classList.contains('hidden')) {
            activeView = v;
            break;
        }
    }
    changeBgm(activeView);
}

function renderCloset() {
    updateFullBodyVisuals();
    document.getElementById('accessoriesGrid').innerHTML = accessories.map(a => {
        const isOwned = ownedAccessories.includes(a.id); const isEquipped = equippedAccessories[a.slot] === a.id;
        let btn = isEquipped ? `<button onclick="unequipAccessory('${a.slot}')" class="text-[9px] bg-red-500 hover:bg-red-600 text-white font-bold px-2.5 py-1.5 rounded-full uppercase btn-bounce">Remover</button>` : 
                 isOwned ? `<button onclick="equipAccessory('${a.id}', '${a.slot}')" class="text-[9px] bg-green-600 hover:bg-green-700 text-white font-bold px-2.5 py-1.5 rounded-full uppercase btn-bounce">Equipar</button>` : 
                 `<button onclick="buyAccessory('${a.id}', ${a.price})" class="text-[9px] bg-yellow-500 hover:bg-yellow-600 text-amber-950 font-black px-2.5 py-1.5 rounded-full uppercase shadow btn-bounce flex items-center justify-center gap-1 mx-auto">Comprar ${a.price} <img src="seed_coin.png" class="w-3 h-3 object-contain inline-block"></button>`;
        const iconHtml = a.image ? `<img src="${a.image}" class="w-12 h-12 object-contain select-none pointer-events-none drop-shadow-sm">` : `<span class="text-3xl">${a.emoji}</span>`;
        return `<div class="accessory-item border-2 rounded-2xl p-4 flex flex-col items-center text-center justify-between gap-2 ${isEquipped ? 'equipped' : 'border-gray-100'}"><div class="h-12 flex items-center justify-center">${iconHtml}</div><div><p class="text-[10px] font-black text-amber-950">${a.label}</p><span class="text-[8px] bg-amber-100 text-amber-800 font-semibold px-1.5 py-0.5 rounded-full uppercase">${a.slot}</span></div>${btn}</div>`;
    }).join('');
}

function updateFullBodyVisuals() {
    const baseMascotImg = document.getElementById('closetMascotBase');
    
    // Detect active thematic sets (combos)
    let activeSet = null;
    if (equippedAccessories['head'] === 'explorer_hat' && equippedAccessories['body'] === 'backpack') {
        activeSet = {
            image: 'capy_set_explorer.png',
            items: ['explorer_hat', 'sunglasses', 'backpack', 'compass', 'boots']
        };
    } else if (equippedAccessories['eyes'] === 'glasses' && equippedAccessories['body'] === 'lab_coat') {
        activeSet = {
            image: 'capy_set_scientist.png',
            items: ['safari_helmet', 'glasses', 'lab_coat', 'microscope', 'sneakers']
        };
    } else if (equippedAccessories['head'] === 'wizard' && equippedAccessories['hand'] === 'potion') {
        activeSet = {
            image: 'capy_set_wizard.png',
            items: ['wizard', 'monocle', 'scarf', 'potion', 'rain_boots']
        };
    } else if (equippedAccessories['head'] === 'crown' && equippedAccessories['hand'] === 'sword') {
        activeSet = {
            image: 'capy_set_warrior.png',
            items: ['crown', 'vest', 'sword', 'skates']
        };
    } else if (equippedAccessories['head'] === 'headphones' && equippedAccessories['hand'] === 'guitar') {
        activeSet = {
            image: 'capy_set_musician.png',
            items: ['headphones', 'sunglasses', 'scarf', 'guitar', 'socks']
        };
    }

    if (baseMascotImg) {
        if (activeSet) {
            baseMascotImg.src = activeSet.image;
        } else if (equippedAccessories['body']) {
            baseMascotImg.src = 'capybara_mascot_clean.png';
        } else {
            baseMascotImg.src = 'capybara_mascot.png';
        }
    }

    ['head', 'eyes', 'body', 'hand', 'feet'].forEach(slot => {
        const item = accessories.find(a => a.id === equippedAccessories[slot]);
        const layer = slot === 'feet' ? document.getElementById('closetSlotFeet') : document.getElementById('closetSlot' + slot.charAt(0).toUpperCase() + slot.slice(1));
        
        if (layer) {
            const isDrawnInSet = activeSet && item && activeSet.items.includes(item.id);
            
            if (item && !isDrawnInSet) {
                if (slot === 'feet') {
                    if (item.image) {
                        layer.innerHTML = `<img src="${item.image}" class="acc-img acc-${item.id} w-full h-full object-contain select-none pointer-events-none">`;
                    } else {
                        layer.innerHTML = `<span class="foot-l">${item.emoji}</span><span class="foot-r">${item.emoji}</span>`;
                    }
                } else {
                    if (item.image) {
                        layer.innerHTML = `<img src="${item.image}" class="acc-img acc-${item.id} w-full h-full object-contain select-none pointer-events-none">`;
                    } else {
                        layer.innerText = item.emoji;
                        layer.innerHTML = item.emoji;
                    }
                }
            } else {
                if (slot === 'feet') {
                    layer.innerHTML = `<span class="foot-l"></span><span class="foot-r"></span>`;
                } else {
                    layer.innerHTML = '';
                    layer.innerText = '';
                }
            }
        }
    });
    const h = accessories.find(a => a.id === equippedAccessories['head']); const e = accessories.find(a => a.id === equippedAccessories['eyes']);
    
    const headLayer = document.getElementById('headerHeadLayer');
    if (headLayer) {
        if (h) {
            headLayer.innerHTML = h.image ? `<img src="${h.image}" class="w-5 h-5 object-contain select-none pointer-events-none">` : h.emoji;
        } else {
            headLayer.innerHTML = '';
        }
    }
    
    const eyesLayer = document.getElementById('headerEyesLayer');
    if (eyesLayer) {
        if (e) {
            eyesLayer.innerHTML = e.image ? `<img src="${e.image}" class="w-3.5 h-3.5 object-contain select-none pointer-events-none">` : e.emoji;
        } else {
            eyesLayer.innerHTML = '';
        }
    }
}

async function buyAccessory(id, price) {
    playSound('click');
    if (seedCoins >= price) {
        if (authToken) {
            try {
                await flushGameStateSync();
                const purchaseResult = await apiRequest(`/accessories/${id}/purchase`, { method: 'POST' });
                if (typeof purchaseResult.seedCoins === 'number') {
                    seedCoins = purchaseResult.seedCoins;
                }
            } catch (error) {
                return showToast(`Erro na compra: ${error.message}`, '⚠️');
            }
        }

        if (!authToken) {
            seedCoins -= price;
        }
        if (!ownedAccessories.includes(id)) ownedAccessories.push(id);
        localStorage.setItem('capy_seeds', seedCoins);
        localStorage.setItem('capy_owned_acc', JSON.stringify(ownedAccessories));
        updateAchStat('seedsTotalSpent', price);
        scheduleGameStateSync();

        if (authToken) await syncAccessoriesFromApi();
        playSound('success'); showToast("Item comprado!", "🎩"); renderCloset(); renderApp();
    } else showToast("Capim insuficiente!", "seed_coin.png");
}
async function equipAccessory(id, slot) {
    playSound('click');
    if (authToken) {
        try {
            await apiRequest(`/accessories/${id}/equip`, { method: 'POST' });
            await syncAccessoriesFromApi();
        } catch (error) {
            return showToast(`Erro ao equipar: ${error.message}`, '⚠️');
        }
    } else {
        equippedAccessories[slot] = id;
    }
    localStorage.setItem('capy_equipped_slots', JSON.stringify(equippedAccessories));
    scheduleGameStateSync();
    showToast("Equipado!", "✨");
    renderCloset(); renderApp();
}

async function unequipAccessory(slot) {
    playSound('click');
    if (authToken) {
        try {
            await apiRequest(`/accessories/unequip/${slot}`, { method: 'POST' });
            await syncAccessoriesFromApi();
        } catch (error) {
            return showToast(`Erro ao remover: ${error.message}`, '⚠️');
        }
    } else {
        equippedAccessories[slot] = null;
    }
    localStorage.setItem('capy_equipped_slots', JSON.stringify(equippedAccessories));
    scheduleGameStateSync();
    showToast("Removido!", "💨");
    renderCloset(); renderApp();
}

async function unequipAll() {
    playSound('click');
    if (authToken) {
        try {
            await apiRequest('/accessories/unequip-all', { method: 'POST' });
            await syncAccessoriesFromApi();
        } catch (error) {
            return showToast(`Erro ao limpar: ${error.message}`, '⚠️');
        }
    } else {
        equippedAccessories = { head: null, eyes: null, body: null, hand: null, feet: null };
    }
    localStorage.setItem('capy_equipped_slots', JSON.stringify(equippedAccessories));
    scheduleGameStateSync();
    showToast("Limpo!", "💨");
    renderCloset(); renderApp();
}

// ==========================================
// VILA DAS CAPIVARAS (ECO-VILA) LOGIC
// ==========================================
const defaultVillageState = {
    buildings: {
        townHall: { level: 1, name: 'Centro da Vila', cost: 100, costMultiplier: 1.5, baseBonus: 0.05, desc: 'Aumenta em 5% a produção de capim das outras construções.' },
        farm: { level: 0, name: 'Horta de Capim', cost: 50, costMultiplier: 1.4, baseBonus: 1, desc: 'Produz 1 capim/h passivamente.' },
        docks: { level: 0, name: 'Doca de Pesca', cost: 150, costMultiplier: 1.4, baseBonus: 3, desc: 'Produz 3 capins/h passivamente.' },
        lab: { level: 0, name: 'Laboratório Ecológico', cost: 200, costMultiplier: 1.5, baseBonus: 0.10, desc: 'Aumenta em 10% todo o XP ganho.' },
        tower: { level: 0, name: 'Torre de Vigia', cost: 250, costMultiplier: 1.5, baseBonus: 0.05, desc: 'Aumenta em 5% a chance de achar animais Brilhantes e Míticos.' }
    },
    unclaimedSeeds: 0,
    lastClaimTime: Date.now()
};

let villageState = JSON.parse(localStorage.getItem('capy_village_state')) || defaultVillageState;
if (!villageState.buildings || !villageState.buildings.townHall) {
    villageState = defaultVillageState;
}

let unclaimedSeedsAccumulated = parseFloat(villageState.unclaimedSeeds || 0);

function getVillageProductionRate() {
    if (!villageState.buildings || !villageState.buildings.farm) return 0;
    const farmProd = (villageState.buildings.farm.level * villageState.buildings.farm.baseBonus);
    const docksProd = (villageState.buildings.docks.level * villageState.buildings.docks.baseBonus);
    const rate = farmProd + docksProd;
    const multiplier = 1 + (villageState.buildings.townHall.level * villageState.buildings.townHall.baseBonus);
    return rate * multiplier;
}

function initVillageOfflineGains() {
    const now = Date.now();
    const lastClaim = villageState.lastClaimTime || now;
    const secondsElapsed = Math.max(0, Math.floor((now - lastClaim) / 1000));
    const rate = getVillageProductionRate();
    const offlineGains = secondsElapsed * (rate / 3600);
    
    unclaimedSeedsAccumulated += offlineGains;
    villageState.unclaimedSeeds = unclaimedSeedsAccumulated;
    villageState.lastClaimTime = now;
    localStorage.setItem('capy_village_state', JSON.stringify(villageState));
    
    if (Math.floor(offlineGains) >= 1) {
        setTimeout(() => {
            showToast(`Sua vila produziu +${Math.floor(offlineGains)} Capins enquanto esteve fora! 🌾`, "🏡");
        }, 3000);
    }
}

const constructionPhrases = {
    townHall: [
        "Capivaras organizando a papelada da prefeitura...",
        "Capivaras debatendo as leis ecológicas da vila...",
        "Varrendo a recepção para receber visitantes...",
        "Polindo o crachá do Prefeito Capivara...",
        "Capivaras organizando uma festa com bolo de capim..."
    ],
    farm: [
        "Capivaras adubando a terra com folhas secas...",
        "Plantando capim de alta qualidade...",
        "Capivaras regando as mudas com muito carinho...",
        "Espantando formiguinhas curiosas das folhas...",
        "Capivaras medindo a altura do capim com régua..."
    ],
    docks: [
        "Capivaras amarrando cordas nos píeres de madeira...",
        "Polindo os barquinhos ecológicos...",
        "Debatendo se a ponte aguenta duas capivaras gordinhas...",
        "Capivaras testando a qualidade das redes de pesca...",
        "Pausa para um cochilo à beira do lago..."
    ],
    lab: [
        "Capivaras limpando as lentes do microscópio...",
        "Ajustando misturas de poções coloridas e brilhantes...",
        "Capivaras batendo martelo nas bancadas de ciência...",
        "Analisando amostras de capim mágico...",
        "Capivaras debatendo a fórmula do capim super nutritivo..."
    ],
    tower: [
        "Capivaras parafusando a luneta na torre...",
        "Limpando a lente principal contra poeira...",
        "Ajustando o suporte de observação de estrelas...",
        "Pintando a torre com tinta ecológica impermeável...",
        "Capivaras procurando constelações em forma de capivara..."
    ]
};

function getRandomConstructionPhrase(key) {
    const list = constructionPhrases[key] || [
        "Capivaras trabalhando duro na obra...",
        "Pausa coletiva para banho de rio...",
        "Carregando tijolos de barro na cabeça...",
        "Ajustando vigas de madeira ecológica..."
    ];
    return list[Math.floor(Math.random() * list.length)];
}

function getBuildingUpgradeCost(key) {
    const b = villageState.buildings[key];
    return Math.floor(b.cost * Math.pow(b.costMultiplier, b.level));
}

function getAccelerationCost(b) {
    if (!b || !b.underConstruction) return 0;
    const remainingMs = b.constructionEnd - Date.now();
    if (remainingMs <= 0) return 0;
    const remainingMinutes = Math.ceil(remainingMs / 60000);
    // 2 sementes por minuto restante, mínimo de 5 sementes
    return Math.max(5, remainingMinutes * 2);
}

function upgradeBuilding(key) {
    const b = villageState.buildings[key];
    if (b.level >= 10) {
        playSound('error');
        showToast("Esta construção já atingiu o nível máximo (10)!", "⚠️");
        return;
    }
    if (b.underConstruction) return;
    
    const cost = getBuildingUpgradeCost(key);
    if (seedCoins >= cost) {
        playSound('click');
        seedCoins -= cost;
        localStorage.setItem('capy_seeds', seedCoins);
        updateAchStat('seedsTotalSpent', cost);
        
        // Inicia construção
        b.underConstruction = true;
        b.constructionStart = Date.now();
        
        // Tempo aumenta a cada nível: 30 minutos em 30 minutos (30 * nível_alvo)
        const targetLevel = b.level + 1;
        const durationMs = targetLevel * 30 * 60 * 1000;
        
        b.constructionEnd = b.constructionStart + durationMs;
        b.currentPhrase = getRandomConstructionPhrase(key);
        b.lastPhraseChange = Date.now();
        
        villageState.lastClaimTime = Date.now();
        villageState.unclaimedSeeds = unclaimedSeedsAccumulated;
        localStorage.setItem('capy_village_state', JSON.stringify(villageState));
        
        showToast(`Obra iniciada no(a) ${b.name}! 🏗️`, "🎉");
        renderApp();
    } else {
        playSound('error');
        showToast("Capim insuficiente!", "⚠️");
    }
}

function accelerateConstruction(key) {
    const b = villageState.buildings[key];
    if (!b || !b.underConstruction) return;
    
    const cost = getAccelerationCost(b);
    if (seedCoins >= cost) {
        playSound('levelup');
        seedCoins -= cost;
        b.underConstruction = false;
        b.level += 1;
        b.constructionStart = null;
        b.constructionEnd = null;
        
        localStorage.setItem('capy_seeds', seedCoins);
        updateAchStat('seedsTotalSpent', cost);
        updateAchStat('villageUpgrades', 1);
        villageState.lastClaimTime = Date.now();
        villageState.unclaimedSeeds = unclaimedSeedsAccumulated;
        localStorage.setItem('capy_village_state', JSON.stringify(villageState));
        
        showToast(`Construção acelerada! ${b.name} evoluído para Lvl ${b.level}! 🚀`, "🎉");
        renderApp();
    } else {
        playSound('error');
        showToast("Capim insuficiente para acelerar!", "⚠️");
    }
}

function updateConstructionDOM(key) {
    const b = villageState.buildings[key];
    const progressBar = document.getElementById(`progress-bar-${key}`);
    const timeLabel = document.getElementById(`construction-time-${key}`);
    const phraseLabel = document.getElementById(`construction-phrase-${key}`);
    const accelCostLabel = document.getElementById(`accel-cost-${key}`);
    
    if (!b || !b.underConstruction) return;
    
    const now = Date.now();
    const totalDuration = b.constructionEnd - b.constructionStart;
    const elapsed = now - b.constructionStart;
    const progressPercent = Math.min(100, (elapsed / totalDuration) * 100);
    
    const remainingMs = Math.max(0, b.constructionEnd - now);
    const secs = Math.floor((remainingMs / 1000) % 60);
    const mins = Math.floor((remainingMs / 60000) % 60);
    const hrs = Math.floor(remainingMs / 3600000);
    
    let timeStr = "";
    if (hrs > 0) {
        timeStr = `${hrs}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
    } else {
        timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    if (progressBar) progressBar.style.width = `${progressPercent}%`;
    if (timeLabel) timeLabel.innerText = timeStr;
    if (phraseLabel) phraseLabel.innerText = b.currentPhrase || "Construindo...";
    if (accelCostLabel) accelCostLabel.innerText = getAccelerationCost(b);
}

function claimVillageSeeds() {
    const claimable = Math.floor(unclaimedSeedsAccumulated);
    if (claimable > 0) {
        playSound('coin');
        seedCoins += claimable;
        unclaimedSeedsAccumulated -= claimable;
        villageState.unclaimedSeeds = unclaimedSeedsAccumulated;
        villageState.lastClaimTime = Date.now();
        localStorage.setItem('capy_seeds', seedCoins);
        localStorage.setItem('capy_village_state', JSON.stringify(villageState));
        showToast(`Colheu +${claimable} Capins! 🌾`, "🪙");
        renderApp();
    }
}

// ==========================================================================
// SISTEMA DE NPCs DE CAPIVARAS PASSEADORAS (NATIVE NPCs)
// ==========================================================================
let villageNPCs = [];
let npcIntervalId = null;
let npcBubbleIntervalId = null;
let npcBubbleTimeoutId = null;

// Sistema de Missões e Minijogos dos NPCs
let activeMissionNpc = null;
let missionTimerId = null;
let minigameActive = false;
let minigameTimer = 0;
let minigameDuration = 0;
let minigameIntervalId = null;
let currentMinigameScore = 0;
let targetMinigameScore = 0;
let nextMissionTimestamp = parseInt(localStorage.getItem('capy_next_mission_time')) || (Date.now() + 180000);
if (!localStorage.getItem('capy_next_mission_time')) {
    localStorage.setItem('capy_next_mission_time', nextMissionTimestamp);
}

const villagePaths = [
    // Rota 1: Prefeitura ➔ Ponte ➔ Docas (Atravessa a ponte!)
    [
        { x: 48, y: 26 }, // Prefeitura
        { x: 48, y: 44 }, // Desce na margem esquerda
        { x: 58, y: 54 }, // Entrada esquerda da ponte
        { x: 66, y: 52 }, // No meio da ponte
        { x: 72, y: 50 }, // Entrada direita da ponte
        { x: 78, y: 53 }  // Docas
    ],
    // Rota 2: Horta ➔ Ponte ➔ Prefeitura (Conecta Horta à ponte e depois sobe para Prefeitura)
    [
        { x: 22, y: 50 }, // Horta
        { x: 38, y: 53 }, // Caminho inferior esquerdo
        { x: 58, y: 54 }, // Entrada esquerda da ponte
        { x: 48, y: 44 }, // Sobe na margem esquerda
        { x: 48, y: 26 }  // Prefeitura
    ],
    // Rota 3: Docas ➔ Laboratório ➔ Torre (Fica inteiramente na margem direita, sem cruzar o rio)
    [
        { x: 78, y: 53 }, // Docas
        { x: 74, y: 44 }, // Margem direita subindo
        { x: 68, y: 36 }, // Laboratório
        { x: 74, y: 30 }, // Subindo em direção à Torre
        { x: 80, y: 25 }  // Torre
    ],
    // Rota 4: Ponte (Aventureira se movimenta apenas na ponte e arredores)
    [
        { x: 53, y: 55 }, // Margem esquerda da ponte
        { x: 58, y: 54 }, // Entrada esquerda da ponte
        { x: 66, y: 52 }, // No meio da ponte
        { x: 72, y: 50 }, // Entrada direita da ponte
        { x: 77, y: 49 }  // Margem direita da ponte
    ],
    // Rota 5: Fazenda (Fazendeira caminha apenas perto da horta)
    [
        { x: 18, y: 48 }, // Entrada esquerda da horta
        { x: 22, y: 50 }, // Caminho interno
        { x: 26, y: 47 }  // Saída direita da horta
    ],
    // Rota 6: Docas (Pescadora Animada caminha apenas no píer)
    [
        { x: 78, y: 53 }, // No píer das docas
        { x: 82, y: 56 }, // Ponta do píer
        { x: 85, y: 52 }  // Beira da água direita
    ],
    // Rota 7: Laboratório (Cientista caminha apenas perto do lab)
    [
        { x: 68, y: 36 }, // Entrada do laboratório
        { x: 65, y: 39 }, // Margem inferior do laboratório
        { x: 72, y: 33 }  // Subindo a trilha
    ],
    // Rota 8: Floresta (Bióloga caminha na área florestal do topo esquerdo)
    [
        { x: 30, y: 30 }, // Entre as árvores
        { x: 35, y: 35 }, // Caminho da mata
        { x: 42, y: 33 }  // Limite da floresta
    ]
];

const npcConfigs = [
    { name: 'Capy Aventureira', color: 'adventurer', role: 'Aventureira', speed: 0.7 },
    { name: 'Capy Fazendeira', color: 'farmer', role: 'Fazendeira', speed: 0.65 },
    { name: 'Capy Pescadora Animada', color: 'fisherman', role: 'Pescadora Pro', speed: 0.6 },
    { name: 'Capy Cientista', color: 'scientist', role: 'Cientista', speed: 0.7 },
    { name: 'Capy Bióloga', color: 'biologist', role: 'Bióloga', speed: 0.75 }
];

const spritesheetColors = ['adventurer', 'farmer', 'fisherman', 'scientist', 'biologist'];
const restrictedPaths = [3, 4, 5, 6, 7];

function animateSpritesheetNPC(npc) {
    npc.frameIndex = ((npc.frameIndex || 0) + 1) % 8;
    let row = 0; // default: idle
    if (npc.state === 'walking') {
        row = 1; // walk
    } else if (npc.state === 'working') {
        row = 3; // attack/work
    } else if (npc.state === 'resting') {
        row = 0; // idle/rest
    }
    
    const spriteDiv = npc.el.querySelector('.spritesheet-npc-sprite');
    if (spriteDiv) {
        const width = npc.frameWidth || 33;
        const height = npc.frameHeight || 38;
        spriteDiv.style.backgroundPosition = `-${npc.frameIndex * width}px -${row * height}px`;
    }
}

function tickNPCs() {
    villageNPCs.forEach(npc => {
        if (npc.state === 'resting' || npc.state === 'working') {
            npc.stateTimer -= 150;
            if (npc.stateTimer <= 0) {
                const currentEndpoint = { x: npc.x, y: npc.y };
                const availablePaths = [];
                
                villagePaths.forEach((path, pIdx) => {
                    // Filtrar rotas exclusivas para personagens de spritesheet e rotas normais para clássicos
                    if (spritesheetColors.includes(npc.color)) {
                        const colorToPathMap = {
                            'adventurer': 3,
                            'farmer': 4,
                            'fisherman': 5,
                            'scientist': 6,
                            'biologist': 7
                        };
                        const mappedPath = colorToPathMap[npc.color] !== undefined ? colorToPathMap[npc.color] : npc.pathIndex;
                        if (pIdx !== mappedPath) return;
                    } else {
                        if (restrictedPaths.includes(pIdx)) return;
                    }

                    const startNode = path[0];
                    const endNode = path[path.length - 1];
                    
                    const distToStart = Math.sqrt((startNode.x - currentEndpoint.x)**2 + (startNode.y - currentEndpoint.y)**2);
                    const distToEnd = Math.sqrt((endNode.x - currentEndpoint.x)**2 + (endNode.y - currentEndpoint.y)**2);
                    
                    if (distToStart < 2) {
                        availablePaths.push({ pathIndex: pIdx, nodeIndex: 1, direction: 1 });
                    }
                    if (distToEnd < 2) {
                        availablePaths.push({ pathIndex: pIdx, nodeIndex: path.length - 2, direction: -1 });
                    }
                });
                
                if (availablePaths.length > 0) {
                    const nextPath = availablePaths[Math.floor(Math.random() * availablePaths.length)];
                    npc.pathIndex = nextPath.pathIndex;
                    npc.nodeIndex = nextPath.nodeIndex;
                    npc.direction = nextPath.direction;
                } else {
                    npc.direction *= -1;
                    npc.nodeIndex = (npc.direction === 1) ? 1 : villagePaths[npc.pathIndex].length - 2;
                }
                
                npc.state = 'walking';
                if (spritesheetColors.includes(npc.color)) {
                    npc.el.className = `village-npc npc-${npc.color}`;
                } else {
                    npc.el.className = 'village-npc npc-walk-anim';
                }
            }
            if (spritesheetColors.includes(npc.color)) {
                animateSpritesheetNPC(npc);
            }
            return;
        }
        
        // Estado caminhando
        const path = villagePaths[npc.pathIndex];
        const target = path[npc.nodeIndex];
        
        const dx = target.x - npc.x;
        const dy = target.y - npc.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist <= npc.speed) {
            // Chegou ao nó
            npc.x = target.x;
            npc.y = target.y;
            npc.nodeIndex += npc.direction;
            
            // Verifica se chegou ao fim da rota
            if (npc.nodeIndex < 0 || npc.nodeIndex >= path.length) {
                npc.state = Math.random() > 0.4 ? 'resting' : 'working';
                npc.stateTimer = Math.floor(Math.random() * 4000) + 3000; // 3-7 segundos de descanso/trabalho
                if (spritesheetColors.includes(npc.color)) {
                    npc.el.className = `village-npc npc-${npc.color}`;
                } else {
                    npc.el.className = `village-npc ${npc.state === 'resting' ? 'npc-idle-anim' : 'npc-work-anim'}`;
                }
            }
        } else {
            // Move
            npc.x += (dx / dist) * npc.speed;
            npc.y += (dy / dist) * npc.speed;
            
            npc.el.style.left = npc.x + '%';
            npc.el.style.top = npc.y + '%';
            npc.el.style.zIndex = Math.round(npc.y * 10);
            
            // Atualiza imagem do sprite conforme direção do movimento
            const spriteContainer = npc.el.querySelector('.npc-sprite-container');
            
            if (!spritesheetColors.includes(npc.color)) {
                const spriteImg = npc.el.querySelector('.npc-sprite');
                if (dy > 0.05) {
                    spriteImg.src = `capy_npc_${npc.color}_front.png`;
                } else if (dy < -0.05) {
                    spriteImg.src = `capy_npc_${npc.color}_back.png`;
                }
            }
            
            if (dx < 0) {
                spriteContainer.style.transform = 'scaleX(-1)';
            } else if (dx > 0) {
                spriteContainer.style.transform = 'scaleX(1)';
            }
        }

        if (spritesheetColors.includes(npc.color)) {
            animateSpritesheetNPC(npc);
        }
    });
}

function startVillageNPCs() {
    if (npcIntervalId) return;
    
    const container = document.getElementById('villageNPCsContainer');
    if (!container) return;
    
    if (villageNPCs.length === 0) {
        container.innerHTML = '';
        const colorToPathMap = {
            'adventurer': 3,
            'farmer': 4,
            'fisherman': 5,
            'scientist': 6,
            'biologist': 7
        };
        npcConfigs.forEach((cfg, idx) => {
            let pathIdx = idx % villagePaths.length;
            if (colorToPathMap[cfg.color] !== undefined) {
                pathIdx = colorToPathMap[cfg.color];
            } else if (cfg.pathIndex !== undefined) {
                pathIdx = cfg.pathIndex;
            } else {
                pathIdx = idx % 3; // Custom NPCs go on paths 0, 1, 2
            }
            const startNode = villagePaths[pathIdx][0];
            
            const npcEl = document.createElement('div');
            if (spritesheetColors.includes(cfg.color)) {
                npcEl.className = `village-npc npc-${cfg.color}`;
            } else {
                npcEl.className = 'village-npc npc-walk-anim';
            }
            npcEl.style.left = startNode.x + '%';
            npcEl.style.top = startNode.y + '%';
            npcEl.style.zIndex = Math.round(startNode.y * 10);
            
            if (spritesheetColors.includes(cfg.color)) {
                npcEl.innerHTML = `
                    <div class="npc-nametag">${cfg.name} (${cfg.role})</div>
                    <div class="npc-bubble"></div>
                    <div class="npc-sprite-container" style="transition: transform 0.2s;">
                        <div class="npc-sprite spritesheet-npc-sprite npc-${cfg.color}-sprite" style="background-position: 0px 0px;"></div>
                    </div>
                `;
            } else {
                npcEl.innerHTML = `
                    <div class="npc-nametag">${cfg.name} (${cfg.role})</div>
                    <div class="npc-bubble"></div>
                    <div class="npc-sprite-container" style="transition: transform 0.2s;">
                        <img src="capy_npc_${cfg.color}_front.png" class="npc-sprite">
                    </div>
                `;
            }
            
            container.appendChild(npcEl);
            
            const npcObj = {
                name: cfg.name,
                color: cfg.color,
                role: cfg.role,
                speed: cfg.speed,
                frameWidth: cfg.frameWidth || 33,
                frameHeight: cfg.frameHeight || 38,
                x: startNode.x,
                y: startNode.y,
                pathIndex: pathIdx,
                nodeIndex: 1,
                direction: 1,
                state: 'walking',
                stateTimer: 0,
                frameIndex: 0,
                el: npcEl
            };
            
            npcEl.addEventListener('click', () => {
                handleNpcClick(npcObj);
            });
            
            villageNPCs.push(npcObj);
        });
    } else {
        container.innerHTML = '';
        villageNPCs.forEach(npc => {
            container.appendChild(npc.el);
        });
    }
    
    npcIntervalId = setInterval(tickNPCs, 150);
    startNPCBubbles();
    startVillageMissionTimer();
}

function stopVillageNPCs() {
    if (npcIntervalId) {
        clearInterval(npcIntervalId);
        npcIntervalId = null;
    }
    stopNPCBubbles();
    stopVillageMissionTimer();
}

const npcPhrases = {
    adventurer: [
        "Explorar a ponte é o meu destino! 🗺️",
        "Quantos segredos existem além do rio? 🌊",
        "Aventura é encontrar o melhor matinho! 🍃",
        "Lá vou eu desbravar novas terras! 🐾",
        "Uh, de ponte em ponte eu vou passear... 🎵",
        "Parar para um banho de sol na ponte! ☀️",
        "Será que hoje eu acho um animal lendário? 🌌",
        "Nenhuma correnteza assusta uma capivara! 💪",
        "Minha bússola sempre aponta para o capim! 🧭",
        "A jornada é mais gostosa que o destino! 🦫"
    ],
    farmer: [
        "Este capim está crescendo verdinho! 🌾",
        "Cuidar da terra é a minha paixão! 🚜",
        "Nenhuma lagarta vai comer minhas cenouras! 🥕",
        "Regar as plantas com amor e paciência! 💧",
        "Planta, rega, colhe o capim... 🎵",
        "Mais um dia perfeito na horta da vila! ☀️",
        "Adubo orgânico de capivara é o melhor! 💩",
        "Estou medindo a umidade do solo com a pata! 🌱",
        "Cenouras gigantes a caminho! 🥕",
        "Quem quer capim fresco colhido na hora? 🦫"
    ],
    fisherman: [
        "Paciência é a alma do bom pescador! 🎣",
        "Será que hoje o peixe morde a isca? 🐟",
        "Peixinho do rio, vem até mim... 🎵",
        "Este píer tem a melhor vista da cachoeira! 🌊",
        "Olha o tamanho daquele peixe que escapou! 🐟",
        "O rio hoje está perfeito para uma pesca! ☀️",
        "Minha vara de pesca é feita de bambu nobre! 🎋",
        "Sinto um puxão na linha! Atenção... 🎣",
        "Peixe assado para o jantar das capivaras! 🍽️",
        "Nenhum rio é fundo demais para nós! 🦫"
    ],
    scientist: [
        "Análise química dos nutrientes da água... 🧪",
        "Esta descoberta tem relevância científica! 🔬",
        "A hipótese está confirmada pelos dados! 📊",
        "Preciso calibrar o meu microscópio! 🔬",
        "Átomos e moléculas a girar... 🎵",
        "Uma nova espécie de capim mutante? 🧬",
        "PH da água do rio está em níveis ideais! 🌊",
        "Fascinante! A taxa de fotossíntese aumentou! 🍃",
        "A ciência é o caminho para o progresso! 🚀",
        "Minhas poções estão quase prontas! 🧪"
    ],
    biologist: [
        "Catalogando a fauna e flora nativas! 📝",
        "Uma borboleta rara acaba de passar! 🦋",
        "Esta árvore tem mais de cem anos! 🌳",
        "Devemos preservar cada canto da floresta! 💚",
        "Flores e folhas no vento a dançar... 🎵",
        "A biodiversidade desta mata é incrível! 🌿",
        "Vaga-lumes brilhando na densidade da mata! 💡",
        "Peguei uma amostra de solo para analisar! 🌱",
        "Esta floresta respira vida! 🦫",
        "Cuidar do nosso ecossistema é prioridade! 🌍"
    ]
};

function triggerRandomNPCBubble() {
    if (villageNPCs.length === 0) return;
    
    // Esconder bolhas existentes antes de abrir uma nova
    villageNPCs.forEach(npc => {
        const bubble = npc.el.querySelector('.npc-bubble');
        if (bubble) bubble.classList.remove('show');
    });
    
    // Escolher um NPC aleatório
    const npc = villageNPCs[Math.floor(Math.random() * villageNPCs.length)];
    if (!npc) return;
    
    const bubble = npc.el.querySelector('.npc-bubble');
    if (!bubble) return;
    
    // Escolher uma frase aleatória
    let phrases = npcPhrases[npc.color];
    if (!phrases) {
        phrases = [
            `Olá, sou a capivara ${npc.name}! 🦫`,
            `Lindo dia para passear pela vila! ☀️`,
            `Eu amo a nossa Eco-Vila! 🌳`,
            `Minha função como ${npc.role} é super divertida! ✨`,
            `Que tal colher alguns capins hoje? 🌾`,
            `Alguém viu o Bate-Capy por aí? 🕹️`
        ];
    }
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    // Definir texto e exibir bolha
    bubble.innerText = phrase;
    bubble.classList.add('show');
    
    // Esconder após 6 segundos
    if (npcBubbleTimeoutId) clearTimeout(npcBubbleTimeoutId);
    npcBubbleTimeoutId = setTimeout(() => {
        bubble.classList.remove('show');
    }, 6000);
}

function startNPCBubbles() {
    stopNPCBubbles();
    // Primeiro balão após 5 segundos para testar fácil
    npcBubbleTimeoutId = setTimeout(triggerRandomNPCBubble, 5000);
    // Intervalo de 1 minuto (60000ms)
    npcBubbleIntervalId = setInterval(triggerRandomNPCBubble, 60000);
}

function stopNPCBubbles() {
    if (npcBubbleIntervalId) {
        clearInterval(npcBubbleIntervalId);
        npcBubbleIntervalId = null;
    }
    if (npcBubbleTimeoutId) {
        clearTimeout(npcBubbleTimeoutId);
        npcBubbleTimeoutId = null;
    }
    // Ocultar bolhas remanescentes
    villageNPCs.forEach(npc => {
        const bubble = npc.el.querySelector('.npc-bubble');
        if (bubble) bubble.classList.remove('show');
    });
}

function focusBuilding(key) {
    if (totalDragDistance > 10) {
        return; // Ignore clicking on buildings if dragging/panning the map
    }
    const cardEl = document.getElementById(`card-${key}`);
    if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        cardEl.classList.remove('highlight-card');
        void cardEl.offsetWidth; // Forçar reflow para reiniciar animação
        cardEl.classList.add('highlight-card');
    }
}

// ==========================================================================
// CONTROLES DE ZOOM E PAN DO MAPA DA ECO-VILA
// ==========================================================================
let zoomScale = 1.0;
let panX = 0;
let panY = 0;
let isPanning = false;
let startX = 0;
let startY = 0;
let totalDragDistance = 0;

function updateMapTransform() {
    const container = document.getElementById('villageZoomContainer');
    if (!container) return;
    
    if (zoomScale <= 1.0) {
        panX = 0;
        panY = 0;
        zoomScale = 1.0;
    } else {
        const parent = document.getElementById('villageMapContainer');
        if (parent) {
            const rect = parent.getBoundingClientRect();
            const maxPanX = (rect.width * (zoomScale - 1)) / 2;
            const maxPanY = (rect.height * (zoomScale - 1)) / 2;
            
            panX = Math.max(-maxPanX, Math.min(maxPanX, panX));
            panY = Math.max(-maxPanY, Math.min(maxPanY, panY));
        }
    }
    
    container.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
}

function zoomVillage(amount) {
    zoomScale = Math.max(1.0, Math.min(3.0, zoomScale + amount));
    updateMapTransform();
}

function resetZoom() {
    zoomScale = 1.0;
    panX = 0;
    panY = 0;
    updateMapTransform();
}

// Iniciar Listeners de Eventos para Arrastar e Zoom
function initVillageMapGestures() {
    const mapContainer = document.getElementById('villageMapContainer');
    if (!mapContainer) return;
    
    // 1. Mouse Drag
    mapContainer.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return; // botão esquerdo apenas
        isPanning = true;
        totalDragDistance = 0;
        startX = e.clientX - panX;
        startY = e.clientY - panY;
        mapContainer.style.cursor = 'grabbing';
    });
    
    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        const newPanX = e.clientX - startX;
        const newPanY = e.clientY - startY;
        
        totalDragDistance += Math.hypot(newPanX - panX, newPanY - panY);
        panX = newPanX;
        panY = newPanY;
        
        updateMapTransform();
    });
    
    window.addEventListener('mouseup', () => {
        if (isPanning) {
            isPanning = false;
            mapContainer.style.cursor = 'default';
        }
    });
    
    // 2. Mouse Wheel Zoom
    mapContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const factor = 0.1;
        if (e.deltaY < 0) {
            zoomVillage(factor);
        } else {
            zoomVillage(-factor);
        }
    }, { passive: false });
    
    // 3. Touch Gestures (Pinch to zoom & Drag to pan)
    let tpDistStart = 0;
    let tpScaleStart = 1.0;
    
    mapContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            tpDistStart = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            tpScaleStart = zoomScale;
        } else if (e.touches.length === 1) {
            isPanning = true;
            totalDragDistance = 0;
            startX = e.touches[0].clientX - panX;
            startY = e.touches[0].clientY - panY;
        }
    });
    
    mapContainer.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2 && tpDistStart > 0) {
            const dist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const factor = dist / tpDistStart;
            zoomScale = Math.max(1.0, Math.min(3.0, tpScaleStart * factor));
            updateMapTransform();
        } else if (e.touches.length === 1 && isPanning) {
            const newPanX = e.touches[0].clientX - startX;
            const newPanY = e.touches[0].clientY - startY;
            
            totalDragDistance += Math.hypot(newPanX - panX, newPanY - panY);
            panX = newPanX;
            panY = newPanY;
            
            updateMapTransform();
        }
    });
    
    mapContainer.addEventListener('touchend', () => {
        isPanning = false;
        tpDistStart = 0;
    });
}

window.addEventListener('resize', updateMapTransform);

function renderVillage() {
    const grid = document.getElementById('villageGrid');
    if (!grid) return;
    
    let totalLevel = 0;
    for (let k in villageState.buildings) {
        totalLevel += villageState.buildings[k].level;
    }
    
    const prodRate = getVillageProductionRate();
    document.getElementById('villageTotalLevel').innerText = totalLevel;
    document.getElementById('villageTotalProd').innerText = Math.round(prodRate);
    document.getElementById('villageUnclaimed').innerText = Math.floor(unclaimedSeedsAccumulated);
    
    const collectBtn = document.getElementById('btnCollectSeeds');
    if (collectBtn) {
        collectBtn.disabled = Math.floor(unclaimedSeedsAccumulated) <= 0;
    }
    
    // Atualiza os elementos visuais dos prédios no mapa
    for (let key in villageState.buildings) {
        const b = villageState.buildings[key];
        const visualEl = document.getElementById(`visual-${key}`);
        if (visualEl) {
            let imgSrc = '';
            if (b.underConstruction) {
                imgSrc = 'bld_scaffolding.png';
            } else {
                // Dicionário com o nível máximo de arte disponível para cada prédio
                const maxAvailableLvl = {
                    townHall: 10,
                    farm: 10,
                    docks: 10,
                    lab: 6,
                    tower: 3
                };
                let maxSpriteLvl = maxAvailableLvl[key] || 3;
                let spriteLvl = Math.min(maxSpriteLvl, b.level);
                if (spriteLvl === 0) {
                    imgSrc = 'bld_scaffolding.png';
                } else {
                    imgSrc = `bld_${key}_lvl${spriteLvl}.png`;
                }
            }
            visualEl.src = imgSrc;
        }
    }
    
    grid.innerHTML = Object.keys(villageState.buildings).map(key => {
        const b = villageState.buildings[key];
        const cost = getBuildingUpgradeCost(key);
        const canAfford = seedCoins >= cost;
        
        let emoji = '🏡';
        if (key === 'farm') emoji = '🥬';
        else if (key === 'docks') emoji = '🎣';
        else if (key === 'lab') emoji = '🔬';
        else if (key === 'tower') emoji = '🔭';
        
        // Se estiver em construção, renderiza card especial de progresso
        if (b.underConstruction) {
            const accelCost = getAccelerationCost(b);
            const canAffordAccel = seedCoins >= accelCost;
            const accelBtnClass = canAffordAccel 
                ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-md cursor-pointer' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed';
                
            return `
                <div id="card-${key}" class="building-card bg-purple-50/50 p-5 rounded-[2rem] shadow-sm border border-purple-100/50 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md animate-fadeIn">
                    <div class="flex-grow flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                🏗️
                            </div>
                            <div>
                                <p class="brand-font text-purple-900 text-xs leading-none">${b.name}</p>
                                <span class="text-[8px] text-purple-600 font-bold uppercase">Em Obra para Lvl ${b.level + 1}</span>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <div class="flex justify-between items-center text-[8px] font-black text-purple-800">
                                <span id="construction-phrase-${key}" class="italic truncate max-w-[200px]">${b.currentPhrase || "Capivaras trabalhando..."}</span>
                                <span id="construction-time-${key}" class="font-mono bg-purple-100 px-1 rounded">--:--</span>
                            </div>
                            <div class="w-full bg-purple-100 h-2 rounded-full overflow-hidden border border-purple-200">
                                <div id="progress-bar-${key}" class="bg-purple-500 h-full transition-all duration-1000" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                    <button onclick="accelerateConstruction('${key}')" class="px-3 py-2 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all btn-bounce ${accelBtnClass} flex items-center gap-1 self-end md:self-center">
                        🚀 Acelerar: <span id="accel-cost-${key}">${accelCost}</span> <img src="seed_coin.png" class="w-3.5 h-3.5 object-contain inline-block -mt-0.5 ml-0.5">
                    </button>
                </div>
            `;
        }
        
        let bonusText = '';
        if (key === 'townHall') {
            bonusText = `Bônus Geral: +${b.level * 5}%`;
        } else if (key === 'farm') {
            bonusText = `Produção: +${b.level * 1} capins/h`;
        } else if (key === 'docks') {
            bonusText = `Produção: +${b.level * 3} capins/h`;
        } else if (key === 'lab') {
            bonusText = `XP extra: +${b.level * 10}%`;
        } else if (key === 'tower') {
            bonusText = `Chance Raros: +${b.level * 5}%`;
        }
        
        const isMaxLevel = b.level >= 10;
        
        let nextBonusText = '';
        const nextLvl = b.level + 1;
        if (isMaxLevel) {
            nextBonusText = 'Nível Máximo';
        } else {
            if (key === 'townHall') {
                nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 5}%`;
            } else if (key === 'farm') {
                nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 1} capins/h`;
            } else if (key === 'docks') {
                nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 3} capins/h`;
            } else if (key === 'lab') {
                nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 10}%`;
            } else if (key === 'tower') {
                nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 5}%`;
            }
        }
        
        let btnHtml = '';
        if (isMaxLevel) {
            btnHtml = `
                <button disabled class="px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider bg-gray-100 text-gray-400 cursor-not-allowed flex items-center gap-1">
                    MÁXIMO (10)
                </button>
            `;
        } else {
            const btnClass = canAfford 
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-md cursor-pointer' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed';
            btnHtml = `
                <button onclick="upgradeBuilding('${key}')" class="px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all btn-bounce ${btnClass} flex items-center gap-1">
                    Melhorar: ${cost} <img src="seed_coin.png" class="w-3.5 h-3.5 object-contain inline-block -mt-0.5 ml-0.5">
                </button>
            `;
        }
        
        return `
            <div id="card-${key}" class="building-card bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md animate-fadeIn">
                <div class="flex items-start gap-4">
                    <div class="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-3xl border border-green-100 flex-shrink-0 shadow-inner">
                        ${emoji}
                    </div>
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <p class="brand-font text-green-900 text-sm leading-none">${b.name}</p>
                            <span class="text-[9px] bg-green-100 text-green-800 font-black px-2 py-0.5 rounded-full">Lvl ${b.level}</span>
                        </div>
                        <p class="text-[9px] text-gray-500 font-bold leading-normal">${b.desc}</p>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-[8px] bg-amber-50 text-amber-800 font-black px-1.5 py-0.5 rounded-full shadow-sm">${bonusText}</span>
                            <i class="fas fa-arrow-right text-[8px] text-gray-300"></i>
                            <span class="text-[8px] bg-blue-50 text-blue-800 font-bold px-1.5 py-0.5 rounded-full shadow-sm">${nextBonusText}</span>
                        </div>
                    </div>
                </div>
                ${btnHtml}
            </div>
        `;
    }).join('');
    updateAmbientSoundButton();
}

// Live ticking interval
setInterval(() => {
    const rate = getVillageProductionRate();
    if (rate > 0) {
        unclaimedSeedsAccumulated += rate / 3600;
        const counterEl = document.getElementById('villageUnclaimed');
        if (counterEl) {
            counterEl.innerText = Math.floor(unclaimedSeedsAccumulated);
            const collectBtn = document.getElementById('btnCollectSeeds');
            if (collectBtn) {
                collectBtn.disabled = Math.floor(unclaimedSeedsAccumulated) <= 0;
            }
        }
    }
    
    // Ticking the next mission countdown
    const now = Date.now();
    if (!activeMissionNpc) {
        const timeLeft = Math.max(0, nextMissionTimestamp - now);
        if (timeLeft <= 0) {
            checkAndTriggerMission();
        } else {
            const countdownEl = document.getElementById('nextMissionCountdown');
            if (countdownEl) {
                const minutes = Math.floor(timeLeft / 60000);
                const seconds = Math.floor((timeLeft % 60000) / 1000);
                countdownEl.innerHTML = `<i class="fas fa-clock"></i> Próxima Missão: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                countdownEl.className = "fixed bottom-24 right-4 z-40 bg-emerald-600/90 text-white font-black px-2.5 py-2 rounded-full text-[9px] tracking-wider uppercase border-2 border-emerald-400 shadow-lg flex items-center gap-1 transition-all hover:scale-105 active:scale-95 cursor-pointer";
            }
        }
    } else {
        const countdownEl = document.getElementById('nextMissionCountdown');
        if (countdownEl) {
            countdownEl.innerHTML = `<i class="fas fa-exclamation-triangle animate-pulse"></i> Missão Ativa! 🦫`;
            countdownEl.className = "fixed bottom-24 right-4 z-40 bg-amber-500/95 text-amber-950 font-black px-2.5 py-2 rounded-full text-[9px] tracking-wider uppercase border-2 border-amber-300 shadow-lg flex items-center gap-1 transition-all hover:scale-105 active:scale-95 cursor-pointer";
        }
    }
    
    // Verifica status de construção para cada prédio
    let needsRender = false;
    for (let key in villageState.buildings) {
        const b = villageState.buildings[key];
        if (b.underConstruction) {
            if (now >= b.constructionEnd) {
                b.underConstruction = false;
                b.level += 1;
                b.constructionStart = null;
                b.constructionEnd = null;
                updateAchStat('villageUpgrades', 1);
                playSound('levelup');
                showToast(`Construção concluída: ${b.name} evoluído para Lvl ${b.level}! 🛠️`, "🎉");
                needsRender = true;
            } else {
                // Rotaciona frase a cada 12 segundos
                if (!b.lastPhraseChange || now - b.lastPhraseChange > 12000) {
                    b.currentPhrase = getRandomConstructionPhrase(key);
                    b.lastPhraseChange = now;
                }
                updateConstructionDOM(key);
            }
        }
    }
    
    if (needsRender) {
        villageState.lastClaimTime = now;
        villageState.unclaimedSeeds = unclaimedSeedsAccumulated;
        localStorage.setItem('capy_village_state', JSON.stringify(villageState));
        renderApp();
    }
}, 1000);

// Auto save unclaimed seeds every 5 seconds
setInterval(() => {
    if (getVillageProductionRate() > 0) {
        villageState.unclaimedSeeds = unclaimedSeedsAccumulated;
        villageState.lastClaimTime = Date.now();
        localStorage.setItem('capy_village_state', JSON.stringify(villageState));
    }
}, 5000);

function injectDynamicNPCStyles(configs) {
    let styleEl = document.getElementById('dynamic-npc-styles');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'dynamic-npc-styles';
        document.head.appendChild(styleEl);
    }
    let css = '';
    configs.forEach(cfg => {
        const fw = cfg.frameWidth || 33;
        const fh = cfg.frameHeight || 38;
        const ss = cfg.spritesheet || '';
        css += `
.npc-${cfg.color}-sprite {
    width: ${fw}px;
    height: ${fh}px;
    background-image: url('${ss}');
    background-repeat: no-repeat;
    background-size: ${fw * 8}px ${fh * 6}px;
    display: inline-block;
}
.village-npc.npc-${cfg.color} {
    width: ${fw}px !important;
    height: ${fh}px !important;
}
`;
    });
    styleEl.textContent = css;
}

async function initializeDynamicConfigs() {
    try {
        const bgmRes = await fetch('/api/bgm/config');
        if (bgmRes.ok) {
            const bgmData = await bgmRes.json();
            Object.assign(bgmTracksSpec, bgmData);
            console.log('Procedural BGM configurations hydrated successfully.');
        }
    } catch (e) {
        console.warn('Failed to load BGM configurations, using static defaults:', e);
    }
    
    try {
        const npcRes = await fetch('/api/npc/config');
        if (npcRes.ok) {
            const npcData = await npcRes.json();
            npcConfigs.length = 0;
            npcConfigs.push(...npcData);
            spritesheetColors.length = 0;
            npcConfigs.forEach(cfg => {
                if (cfg.spritesheet) {
                    spritesheetColors.push(cfg.color);
                }
            });
            injectDynamicNPCStyles(npcConfigs);
            console.log('NPC configurations hydrated and styles injected.');
        }
    } catch (e) {
        console.warn('Failed to load NPC configurations, using static defaults:', e);
        injectDynamicNPCStyles(npcConfigs);
    }
}

window.onload = async () => {
    await initializeDynamicConfigs();
    setTimeout(() => { 
        document.getElementById('splashScreen').style.opacity = '0'; 
        setTimeout(() => {
            document.getElementById('splashScreen').style.display = 'none';
            if (!currentUser) {
                document.getElementById('authScreen').style.display = 'flex';
                document.getElementById('authScreen').classList.remove('hidden');
            }
        }, 500); 
    }, 2000);
    await hydrateRemoteState();
    checkTimeOfDay(); checkStreaks(); initVillageOfflineGains(); renderApp(); loadDailyQuiz();
    loadSilhouetteGame(); loadEndlessQuiz(); updateSoundModeUI(); updateMemoryGameUI();
    initVillageMapGestures();
    if (!sessionStorage.getItem('safetySeen') && currentUser) { setTimeout(toggleSafetyGuide, 2500); sessionStorage.setItem('safetySeen', 'true'); }
};

function checkTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) document.body.classList.add('night-mode');
    else document.body.classList.remove('night-mode');
}

let villageAmbientStream = null;
let villageAmbientBirds = null;
let villageAmbientPlaying = false;
let villageAmbientState = localStorage.getItem('capy_village_ambient') === 'true'; // preferência do usuário

function initVillageAmbient() {
    if (!villageAmbientStream) {
        villageAmbientStream = new Audio('village_stream.ogg');
        villageAmbientStream.loop = true;
        villageAmbientStream.volume = 0.35;
    }
    if (!villageAmbientBirds) {
        villageAmbientBirds = new Audio('village_birds.ogg');
        villageAmbientBirds.loop = true;
        villageAmbientBirds.volume = 0.25;
    }
}

function startVillageAmbient() {
    if (!villageAmbientState) {
        updateAmbientSoundButton();
        return;
    }
    initVillageAmbient();
    
    // Tocar apenas se o áudio estiver desbloqueado (interação do usuário)
    if (audioUnlocked) {
        villageAmbientStream.play().catch(() => {});
        villageAmbientBirds.play().catch(() => {});
        villageAmbientPlaying = true;
        updateAmbientSoundButton();
    }
}

function stopVillageAmbient() {
    if (villageAmbientStream) {
        villageAmbientStream.pause();
    }
    if (villageAmbientBirds) {
        villageAmbientBirds.pause();
    }
    villageAmbientPlaying = false;
    updateAmbientSoundButton();
}

function toggleVillageAmbient() {
    playSound('click');
    villageAmbientState = !villageAmbientState;
    localStorage.setItem('capy_village_ambient', villageAmbientState);
    
    if (villageAmbientState) {
        startVillageAmbient();
    } else {
        stopVillageAmbient();
    }
}

function updateAmbientSoundButton() {
    const btn = document.getElementById('btnAmbientSound');
    if (!btn) return;
    
    if (villageAmbientState && villageAmbientPlaying) {
        btn.innerHTML = `<i class="fas fa-volume-up text-xs text-green-600 animate-pulse"></i>`;
        btn.classList.add('bg-green-50', 'border-green-300');
        btn.classList.remove('bg-white/90', 'border-green-200');
    } else {
        btn.innerHTML = `<i class="fas fa-volume-mute text-xs text-gray-400"></i>`;
        btn.classList.remove('bg-green-50', 'border-green-300');
        btn.classList.add('bg-white/90', 'border-green-200');
    }
}

function toggleFullscreenMap() {
    playSound('click');
    const container = document.getElementById('villageMapContainer');
    const btn = document.getElementById('btnFullscreenMap');
    if (!container || !btn) return;
    
    const isFullscreen = container.classList.toggle('map-fullscreen');
    
    if (isFullscreen) {
        btn.innerHTML = `<i class="fas fa-compress text-xs text-green-600 animate-pulse"></i>`;
        btn.classList.add('bg-green-50', 'border-green-300');
        btn.classList.remove('bg-white/90', 'border-green-200');
        
        window.addEventListener('keydown', handleMapFullscreenEscape);
        showToast("Modo Tela Cheia ativado! Pressione ESC para sair.", "🖥️");
    } else {
        btn.innerHTML = `<i class="fas fa-expand text-xs"></i>`;
        btn.classList.remove('bg-green-50', 'border-green-300');
        btn.classList.add('bg-white/90', 'border-green-200');
        
        window.removeEventListener('keydown', handleMapFullscreenEscape);
    }
    
    // Recalculate transformations/boundaries after viewport sizes update
    setTimeout(updateMapTransform, 100);
}

function handleMapFullscreenEscape(e) {
    if (e.key === 'Escape') {
        const container = document.getElementById('villageMapContainer');
        if (container && container.classList.contains('map-fullscreen')) {
            toggleFullscreenMap();
        }
    }
}

function showView(view) {
    playSound('click');
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('tab-active'));
    document.getElementById(view + 'View').classList.remove('hidden');
    document.getElementById('nav' + view.charAt(0).toUpperCase() + view.slice(1)).classList.add('tab-active');
    window.scrollTo(0, 0);
    
    if (view === 'vila') {
        startVillageAmbient();
        startVillageNPCs();
        const bgVideo = document.getElementById('villageBgVideo');
        if (bgVideo) {
            bgVideo.play().catch(e => {});
        }
    } else {
        stopVillageAmbient();
        stopVillageNPCs();
        const container = document.getElementById('villageMapContainer');
        if (container && container.classList.contains('map-fullscreen')) {
            toggleFullscreenMap();
        }
    }
    if (view === 'lab') {
        startLabSupervisorAnimation();
    } else {
        stopLabSupervisorAnimation();
    }
    if (view === 'album') {
        startAlbumSupervisorAnimation();
    } else {
        stopAlbumSupervisorAnimation();
    }
    if (view === 'games') {
        startGamesSupervisorAnimation();
    } else {
        stopGamesSupervisorAnimation();
    }
    if (view === 'home') {
        startHomeSupervisorAnimation();
    } else {
        stopHomeSupervisorAnimation();
    }
    const closetModal = document.getElementById('closetModal');
    const closetOpen = closetModal && !closetModal.classList.contains('hidden');
    if (!closetOpen) {
        changeBgm(view);
    }
}

function openParentalGate(action) {
    playSound('click'); pendingAction = action;
    const n1 = Math.floor(Math.random() * 9) + 1; const n2 = Math.floor(Math.random() * 9) + 1; window.correctSum = n1 + n2;
    document.getElementById('mathQuestion').innerText = `${n1} + ${n2} = ?`; document.getElementById('parentalGate').style.display = 'flex';
}
function checkParentalGate() {
    playSound('click');
    if (parseInt(document.getElementById('gateAnswer').value) === window.correctSum) {
        closeParentalGate();
        if (pendingAction === 'settings') document.getElementById('settingsModal').classList.remove('hidden');
        if (pendingAction === 'delete') { localStorage.clear(); location.reload(); }
        if (pendingAction === 'share') { executeShare(); }
        if (pendingAction === 'privacy') { document.getElementById('privacyModal').classList.remove('hidden'); document.getElementById('privacyModal').style.display = 'flex'; }
    } else document.getElementById('gateAnswer').classList.add('border-red-500');
}
function closeParentalGate() { playSound('click'); document.getElementById('parentalGate').style.display = 'none'; document.getElementById('gateAnswer').value = ''; document.getElementById('gateAnswer').classList.remove('border-red-500'); }
function showPrivacy() { playSound('click'); openParentalGate('privacy'); }
function closePrivacy() { playSound('click'); document.getElementById('privacyModal').classList.add('hidden'); document.getElementById('privacyModal').style.display = 'none'; }
function confirmDeleteData() { playSound('click'); document.getElementById('settingsModal').classList.add('hidden'); openParentalGate('delete'); }
function toggleSafetyGuide() { playSound('click'); document.getElementById('safetyGuide').classList.toggle('hidden'); }

let currentFacingMode = 'environment';
let cameraStream = null;

async function startCamera() {
    const video = document.getElementById('cameraVideo');
    const placeholder = document.getElementById('cameraPlaceholder');
    const hud = document.getElementById('viewfinderHUD');
    const controls = document.getElementById('cameraControls');

    try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error("Câmera não suportada neste navegador.");
        }
        
        stopCamera();

        // Sequential constraints list to handle different hardware configurations
        const preferred = currentFacingMode;
        const alternative = currentFacingMode === 'environment' ? 'user' : 'environment';

        const constraintsList = [
            { video: { facingMode: preferred, width: { ideal: 640 }, height: { ideal: 480 } }, audio: false },
            { video: { facingMode: preferred }, audio: false },
            { video: { facingMode: alternative }, audio: false },
            { video: true, audio: false }
        ];

        let stream = null;
        let lastError = null;

        for (const constraints of constraintsList) {
            try {
                stream = await navigator.mediaDevices.getUserMedia(constraints);
                if (stream) break;
            } catch (err) {
                lastError = err;
            }
        }

        if (!stream) {
            throw lastError || new Error("Não foi possível acessar a câmera.");
        }

        cameraStream = stream;
        video.srcObject = cameraStream;
        video.muted = true; // Essential for autoplay on iOS/Safari
        
        video.classList.remove('hidden');
        placeholder.classList.add('hidden');
        hud.classList.remove('hidden');
        controls.classList.remove('hidden');
        
        try {
            await video.play();
        } catch (playErr) {
            console.warn("Autoplay falhou, tentando tocar programaticamente...", playErr);
        }

        playSound('success');
    } catch (err) {
        console.error("Erro ao abrir a câmera: ", err);
        showToast("Câmera indisponível. Escolha da galeria!", "⚠️");
        document.getElementById('photoInput').click();
    }
}

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    const video = document.getElementById('cameraVideo');
    if (video) {
        video.srcObject = null;
        video.classList.add('hidden');
    }
    const hud = document.getElementById('viewfinderHUD');
    if (hud) hud.classList.add('hidden');
}

function toggleCameraMode() {
    playSound('click');
    currentFacingMode = currentFacingMode === 'environment' ? 'user' : 'environment';
    startCamera();
}

function capturePhoto() {
    playSound('shutter');
    
    // Trigger quick flash animation
    const flash = document.getElementById('cameraFlash');
    flash.classList.add('active');
    setTimeout(() => flash.classList.remove('active'), 400);

    const video = document.getElementById('cameraVideo');
    const canvas = document.createElement('canvas');
    
    let w = video.videoWidth || 640;
    let h = video.videoHeight || 480;
    
    // Resize photo to max 500px to save localStorage space and prevent large payload errors
    const maxDim = 500;
    if (w > h) {
        if (w > maxDim) {
            h = Math.round(h * (maxDim / w));
            w = maxDim;
        }
    } else {
        if (h > maxDim) {
            w = Math.round(w * (maxDim / h));
            h = maxDim;
        }
    }
    
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    
    // Mirror the image horizontally if using front camera
    if (currentFacingMode === 'user') {
        ctx.translate(w, 0);
        ctx.scale(-1, 1);
    }
    
    ctx.drawImage(video, 0, 0, w, h);
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset scale
    
    currentPhoto = canvas.toDataURL('image/jpeg', 0.75);
    
    // Set photos for previews
    document.getElementById('scanPreviewImg').src = currentPhoto;
    
    // Need to set photo for both photoPreviewImg elements in HTML (in card and main preview)
    document.querySelectorAll('#photoPreviewImg').forEach(img => {
        img.src = currentPhoto;
    });
    
    stopCamera();

    // Transition to Scanning Section
    document.getElementById('captureCameraSection').classList.add('hidden');
    document.getElementById('captureScanSection').classList.remove('hidden');
    
    startScanningSequence();
}

function retakePhoto() {
    playSound('click');
    currentPhoto = null;
    document.getElementById('captureFormSection').classList.add('hidden');
    document.getElementById('captureCameraSection').classList.remove('hidden');
    startCamera();
}

function openCaptureForm() { 
    playSound('click'); 
    if (!localStorage.getItem('capy_cam_accepted')) {
        document.getElementById('cameraWarningModal').classList.remove('hidden');
        document.getElementById('cameraWarningModal').style.display = 'flex';
    } else {
        document.getElementById('captureModal').classList.remove('hidden'); 
        document.getElementById('captureCameraSection').classList.remove('hidden');
        document.getElementById('captureScanSection').classList.add('hidden');
        document.getElementById('captureFormSection').classList.add('hidden');
        startCamera();
    }
}

function acceptCamera() {
    playSound('success'); localStorage.setItem('capy_cam_accepted', 'true');
    scheduleGameStateSync();
    document.getElementById('cameraWarningModal').classList.add('hidden'); document.getElementById('cameraWarningModal').style.display = 'none';
    document.getElementById('captureModal').classList.remove('hidden');
    document.getElementById('captureCameraSection').classList.remove('hidden');
    document.getElementById('captureScanSection').classList.add('hidden');
    document.getElementById('captureFormSection').classList.add('hidden');
    startCamera();
}

function cancelCamera() { 
    playSound('click'); 
    document.getElementById('cameraWarningModal').classList.add('hidden'); 
    document.getElementById('cameraWarningModal').style.display = 'none'; 
}

function closeCaptureForm() { 
    playSound('click'); 
    stopCamera();
    document.getElementById('captureModal').classList.add('hidden'); 
    currentPhoto = null; 
    selectedCategory = '';
    selectedLocation = '';
    document.getElementById('animalName').value = ''; 
    document.getElementById('animalDescription').value = ''; 
    document.getElementById('safetyCheck').checked = false;
    document.querySelectorAll('.select-pill').forEach(p => p.classList.remove('active')); 
    
    document.getElementById('biologicalFichaCard').classList.add('hidden');
    document.getElementById('suggestionsWrapper').classList.add('hidden');
    
    // Reset camera UI
    document.getElementById('cameraVideo').classList.add('hidden');
    document.getElementById('cameraPlaceholder').classList.remove('hidden');
    document.getElementById('cameraControls').classList.add('hidden');
}

function previewImage(input) {
    playSound('click');
    if (input.files && input.files[0]) {
        stopCamera();
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let w = img.width, h = img.height;
                const maxDim = 500;
                if (w > h) { if (w > maxDim) { h *= maxDim / w; w = maxDim; } } 
                else { if (h > maxDim) { w *= maxDim / h; h = maxDim; } }
                canvas.width = w; canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                currentPhoto = canvas.toDataURL('image/jpeg', 0.75);
                
                document.getElementById('scanPreviewImg').src = currentPhoto;
                document.querySelectorAll('#photoPreviewImg').forEach(imgEl => {
                    imgEl.src = currentPhoto;
                });
                
                // Switch to scanning screen
                document.getElementById('captureCameraSection').classList.add('hidden');
                document.getElementById('captureScanSection').classList.remove('hidden');
                startScanningSequence();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function startScanningSequence() {
    const progress = document.getElementById('scanProgressBar');
    const statusText = document.getElementById('scanStatusText');
    const laser = document.getElementById('scannerLaser');
    
    progress.style.width = '0%';
    statusText.innerText = '🔍 Iniciando bio-scanner...';
    laser.classList.add('active');
    
    let count = 0;
    
    // Periodically play scanner beeps
    const beepInterval = setInterval(() => {
        playSound('scan_beep');
    }, 450);

    const updateInterval = setInterval(() => {
        count += 20;
        progress.style.width = count + '%';
        
        if (count === 20) {
            statusText.innerText = '📡 Mapeando cores e texturas...';
        } else if (count === 40) {
            statusText.innerText = '🍃 Buscando na base da fauna brasileira...';
        } else if (count === 60) {
            statusText.innerText = '🧬 Cruzando dados de pegadas...';
        } else if (count === 80) {
            statusText.innerText = '🔬 Autenticando registro biológico...';
        } else if (count === 100) {
            clearInterval(updateInterval);
            clearInterval(beepInterval);
            laser.classList.remove('active');
            playSound('success');
            
            // Finish scan, show form
            setTimeout(() => {
                document.getElementById('captureScanSection').classList.add('hidden');
                document.getElementById('captureFormSection').classList.remove('hidden');
                
                // Select default category to trigger suggestions
                const firstPill = document.querySelector('#categorySelection .select-pill');
                if (firstPill) {
                    firstPill.click();
                }
            }, 500);
        }
    }, 500);
}

function getAnimalSuggestions(category) {
    const suggestions = {
        inseto: [
            { name: 'Joaninha', emoji: '🐞' },
            { name: 'Abelha', emoji: '🐝' },
            { name: 'Borboleta', emoji: '🦋' },
            { name: 'Saúva', emoji: '🐜' }
        ],
        ave: [
            { name: 'Tucano', emoji: '🦚' },
            { name: 'Bem-te-vi', emoji: '🐤' },
            { name: 'Beija-flor', emoji: '🌸' },
            { name: 'Quero-quero', emoji: '🌾' }
        ],
        mamifero: [
            { name: 'Capivara', emoji: '🦦' },
            { name: 'Sagui', emoji: '🐒' },
            { name: 'Tatu-bola', emoji: '🛡️' },
            { name: 'Lobo-guará', emoji: '🦊' }
        ],
        felino: [
            { name: 'Onça-pintada', emoji: '🐆' },
            { name: 'Jaguatirica', emoji: '🐱' },
            { name: 'Gato', emoji: '🐈' }
        ],
        reptil: [
            { name: 'Lagartixa', emoji: '🦎' },
            { name: 'Teiú', emoji: '🦎' },
            { name: 'Jabuti', emoji: '🐢' },
            { name: 'Cobra', emoji: '🐍' }
        ],
        anfibio: [
            { name: 'Sapo-cururu', emoji: '🐸' },
            { name: 'Rã', emoji: '🐸' },
            { name: 'Perereca', emoji: '🐸' }
        ],
        aracnideo: [
            { name: 'Aranha', emoji: '🕷️' },
            { name: 'Escorpião', emoji: '🦂' }
        ]
    };
    return suggestions[category] || [];
}

function selectCategoryWithSuggestions(category, element) {
    playSound('click');
    selectedCategory = category;
    
    // Style pills
    element.parentElement.querySelectorAll('.select-pill').forEach(p => p.classList.remove('active'));
    element.classList.add('active');
    
    // Render suggestions
    const suggestionsGrid = document.getElementById('animalSuggestionsGrid');
    const suggestions = getAnimalSuggestions(category);
    
    if (suggestions.length > 0) {
        document.getElementById('suggestionsWrapper').classList.remove('hidden');
        suggestionsGrid.innerHTML = suggestions.map(s => {
            return `
                <div onclick="selectSuggestedAnimal('${s.name}')" class="bg-white border border-gray-200 hover:bg-green-50 hover:border-green-300 p-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all btn-bounce text-green-955 cursor-pointer">
                    <span class="text-base">${s.emoji}</span>
                    <span>${s.name}</span>
                </div>
            `;
        }).join('');
    } else {
        document.getElementById('suggestionsWrapper').classList.add('hidden');
    }
}

function selectSuggestedAnimal(name) {
    playSound('click');
    document.getElementById('animalName').value = name;
    updateBiologicalCard(name);
}

function handleNameInput(value) {
    updateBiologicalCard(value);
}

function extractScientificName(subspecies) {
    if (!subspecies) return 'Classificação Neotropical';
    const match = subspecies.match(/\(([^)]+)\)/);
    if (match) {
        return match[1];
    }
    return subspecies.replace(/\.$/, '');
}

function updateBiologicalCard(name) {
    const card = document.getElementById('biologicalFichaCard');
    if (!name || name.trim() === '') {
        card.classList.add('hidden');
        return;
    }
    
    card.classList.remove('hidden');
    
    const animalNameElement = document.getElementById('cardAnimalName');
    const scientificNameElement = document.getElementById('cardScientificName');
    const rarityBadge = document.getElementById('cardRarityBadge');
    const statusBadge = document.getElementById('cardStatusBadge');
    const statusLabel = document.getElementById('cardStatusLabel');
    const statusExplanation = document.getElementById('cardStatusExplanation');
    const roleText = document.getElementById('cardRoleText');
    const dietHabitatText = document.getElementById('cardDietHabitatText');
    const funFactText = document.getElementById('cardFunFactText');
    
    animalNameElement.innerText = name;
    
    const key = name.toLowerCase().trim();
    // Try to find in curioData and premiumData
    const matchingCurioKey = Object.keys(curioData).find(k => key.includes(k) || k.includes(key));
    const data = getPremiumData(name);
    
    // Scientific name
    let sciName = 'Classificação Neotropical';
    if (data && data.subspecies) {
        sciName = extractScientificName(data.subspecies);
    }
    scientificNameElement.innerHTML = `<i>${sciName}</i>`;
    
    // Rarity (simulated based on name hash or random, but let's make it fixed per name so it feels realistic!)
    let rarity = 'comum';
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash += key.charCodeAt(i);
    const mod = hash % 10;
    if (mod === 0) rarity = 'mitico';
    else if (mod <= 2) rarity = 'brilhante';
    
    rarityBadge.innerText = rarity.toUpperCase();
    rarityBadge.className = `font-black text-[8px] px-2 py-0.5 rounded-full uppercase tracking-wider text-white ${
        rarity === 'mitico' ? 'bg-purple-600 animate-pulse' : (rarity === 'brilhante' ? 'bg-amber-500' : 'bg-green-600')
    }`;
    
    // Status conservation
    const statusStr = data.status || '🟢 Pouco Preocupante';
    statusLabel.innerText = statusStr;
    
    let badgeColorClass = 'bg-green-600';
    let explanationText = 'Este animalzinho está seguro na natureza! Vamos continuar protegendo seu lar!';
    
    if (statusStr.includes('🔴') || statusStr.toLowerCase().includes('perigo') || statusStr.toLowerCase().includes('ameaçada')) {
        badgeColorClass = 'bg-red-600';
        explanationText = 'Perigo de Extinção: Ele corre risco de desaparecer! Precisamos proteger suas florestas e rios.';
    } else if (statusStr.includes('🟡') || statusStr.toLowerCase().includes('vulnerável') || statusStr.toLowerCase().includes('atenção') || statusStr.toLowerCase().includes('ameaçado')) {
        badgeColorClass = 'bg-orange-500';
        explanationText = 'Vulnerável: A população dele está diminuindo. Precisamos evitar poluição e preservar!';
    }
    
    statusBadge.className = `inline-flex items-center gap-1.5 text-[9px] font-black uppercase text-white px-2.5 py-1 rounded-full shadow-sm ${badgeColorClass}`;
    statusExplanation.innerText = explanationText;
    
    // Role
    roleText.innerText = data.role || 'Desempenha um papel ecológico incrível em seu ecossistema.';
    
    // Diet & Habitat
    const diet = data.diet || 'Alimentação nativa adaptada.';
    const habitat = data.habitat || 'Ecossistema local do Brasil.';
    dietHabitatText.innerText = `${diet} / Vive em: ${habitat}`;
    
    // Fun fact
    let fact = matchingCurioKey ? curioData[matchingCurioKey] : data.funFact;
    if (!fact) {
        fact = 'Uma espécie incrível e cheia de segredos da nossa fauna!';
    }
    funFactText.innerText = `"${fact}"`;
}

function selectLocationOption(val, element) {
    playSound('click');
    selectedLocation = val;
    element.parentElement.querySelectorAll('.select-pill').forEach(p => p.classList.remove('active'));
    element.classList.add('active');
}

async function saveDiscoveryWithValidation() {
    const name = document.getElementById('animalName').value;
    const desc = document.getElementById('animalDescription').value;
    const safetyCheck = document.getElementById('safetyCheck').checked;
    
    if (!name) {
        playSound('alert');
        return showToast("Qual é o nome do animal?", "⚠️");
    }
    if (!selectedCategory) {
        playSound('alert');
        return showToast("Selecione uma classe biológica!", "⚠️");
    }
    if (!selectedLocation) {
        playSound('alert');
        return showToast("Onde você encontrou ele?", "⚠️");
    }
    if (currentPhoto && !safetyCheck) {
        playSound('alert');
        return showToast("Confirme as regras de segurança!", "🛡️");
    }
    
    // Call standard finalized save method
    await saveDiscovery();
}

let pendingDiscovery = null;

async function saveDiscovery() {
    const name = document.getElementById('animalName').value; const desc = document.getElementById('animalDescription').value;
    if (!name || !selectedCategory) return showToast("Preencha nome e tipo!", "⚠️");
    
    // Filtro Anti-Spam: Se registrar mais de 3 em 1 minuto, bloqueia.
    const now = Date.now();
    if (animals.length >= 3) {
        const recent0 = animals[0].createdEpoch || new Date(animals[0].capturedAt || now).getTime();
        const recent2 = animals[2].createdEpoch || new Date(animals[2].capturedAt || now).getTime();
        if (now - recent0 < 60000 && now - recent2 < 60000) {
            playSound('click');
            return showToast("Muito rápido! Descanse os olhos 1 minuto.", "⏳");
        }
    }

    if (!currentPhoto) {
        playSound('click');
        pendingDiscovery = { name, desc };
        document.getElementById('detectiveModal').classList.remove('hidden');
        document.getElementById('detectiveModal').style.display = 'flex';
        return;
    }

    await finalizeDiscovery(name, desc);
}

async function passDetectiveChallenge(observation) {
    playSound('success');
    document.getElementById('detectiveModal').classList.add('hidden');
    document.getElementById('detectiveModal').style.display = 'none';
    const finalDesc = pendingDiscovery.desc ? `${pendingDiscovery.desc} (Ação: ${observation})` : `(Ação: ${observation})`;
    await finalizeDiscovery(pendingDiscovery.name, finalDesc);
    pendingDiscovery = null;
}

function closeDetectiveModal() {
    playSound('click');
    document.getElementById('detectiveModal').classList.add('hidden');
    document.getElementById('detectiveModal').style.display = 'none';
    pendingDiscovery = null;
}

async function finalizeDiscovery(name, desc) {
    // Validador de Categoria Biológica
    let finalCategory = selectedCategory;
    if (typeof getCorrectCategory === 'function') {
        const correct = getCorrectCategory(name);
        if (correct && correct !== selectedCategory) {
            finalCategory = correct;
            playSound('success');
            setTimeout(() => {
                showToast(`Corrigido! ${name} é da classe: ${correct.toUpperCase()}! 🤓`, "💡");
            }, 1000); // Mostra o toast de correção logo após o de sucesso
        }
    }

    // Busca os dados (curioData agora vive no data.js)
    const nameKey = name.toLowerCase();
    const curioKey = Object.keys(curioData).find(k => nameKey.includes(k));
    const curio = curioKey ? curioData[curioKey] : (typeof getPremiumData === 'function' ? getPremiumData(name).funFact : 'Uma espécie incrível e cheia de segredos da nossa fauna!');
    
    let bonusChance = 0;
    if (villageState && villageState.buildings && villageState.buildings.tower) {
        bonusChance = villageState.buildings.tower.level * villageState.buildings.tower.baseBonus;
    }
    const miticThreshold = 0.02 * (1 + bonusChance);
    const shinyThreshold = 0.10 * (1 + bonusChance);
    const rand = Math.random(); let rarity = 'comum';
    if (rand < miticThreshold) rarity = 'mitico'; else if (rand < shinyThreshold) rarity = 'brilhante';

    let createdAnimal = {
        id: Date.now(),
        name: name,
        category: finalCategory,
        location: selectedLocation || 'natureza',
        photo: currentPhoto,
        curiosity: curio,
        description: desc,
        timestamp: new Date().toLocaleDateString('pt-BR'),
        premiumUnlocked: false,
        rarity: rarity,
        createdEpoch: Date.now()
    };

    if (authToken) {
        try {
            const created = await apiRequest('/animals', {
                method: 'POST',
                body: JSON.stringify({
                    animalName: name,
                    category: finalCategory,
                    location: selectedLocation || 'natureza',
                    notes: desc,
                    photoBase64: currentPhoto,
                    premiumUnlocked: false,
                    capturedAt: new Date().toISOString()
                })
            });

            createdAnimal = {
                ...mapAnimalFromApi(created),
                curiosity: curio,
                description: desc,
                rarity
            };
        } catch (error) {
            return showToast(`Erro ao salvar na API: ${error.message}`, '⚠️');
        }
    }

    animals.unshift(createdAnimal);
    let xp = 35, sd = 10;
    
    // Punição leve: Se não tiver foto, ganha menos recursos para incentivar tirar fotos.
    if (!currentPhoto) { xp = 15; sd = 5; }

    if (rarity === 'mitico') { xp += 100; sd += 50; playSound('levelup'); showToast("MÍTICO! 🌌", "🦄"); }
    else if (rarity === 'brilhante') { xp += 25; sd += 20; playSound('success'); showToast("BRILHANTE! ✨", "💎"); }
    else { playSound('coin'); showToast("Catalogado!", "🐾"); }

    let xpBonus = 1;
    if (villageState && villageState.buildings && villageState.buildings.lab) {
        xpBonus += villageState.buildings.lab.level * villageState.buildings.lab.baseBonus;
    }
    xp = Math.round(xp * xpBonus);

    guardianXP += xp; seedCoins += sd;
    try { localStorage.setItem('capy_vPlay', JSON.stringify(animals)); localStorage.setItem('capy_xpPlay', guardianXP); localStorage.setItem('capy_seeds', seedCoins); }
    catch (e) { animals.shift(); return showToast("Memória cheia!", "⚠️"); }
    scheduleGameStateSync();
    closeCaptureForm(); renderApp(); createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div'); p.classList.add('particle');
        p.style.left = '50%'; p.style.top = '50%'; p.style.width = Math.random() * 8 + 6 + 'px'; p.style.height = Math.random() * 8 + 6 + 'px';
        p.style.backgroundColor = ['#fbbf24', '#34d399', '#60a5fa', '#f87171', '#a855f7'][Math.floor(Math.random() * 5)];
        p.style.borderRadius = '50%'; p.style.setProperty('--dx', (Math.random() - 0.5) * 400 + 'px'); p.style.setProperty('--dy', (Math.random() - 0.5) * 400 - 100 + 'px');
        document.body.appendChild(p); setTimeout(() => p.remove(), 600);
    }
}

function startAd(id) {
    playSound('click'); currentAdAnimalId = id;
    const modal = document.getElementById('adModal'); const btn = document.getElementById('closeAdBtn');
    modal.style.display = 'flex'; btn.disabled = true; btn.innerText = "AGUARDE..."; btn.className = "w-full py-4 rounded-2xl bg-gray-100 text-gray-400 font-bold";
    
    setTimeout(() => {
        btn.disabled = false; btn.innerText = "VER DADOS ECOLÓGICOS!"; btn.className = "w-full py-4 rounded-2xl bg-green-600 text-white font-bold animate-pulse btn-bounce shadow-lg";
        btn.onclick = async () => {
            const animal = animals.find(a => a.id === currentAdAnimalId);
            if (animal) { animal.premiumUnlocked = true; }
            if (animal && authToken) {
                try {
                    await apiRequest(`/animals/${animal.id}`, {
                        method: 'PUT',
                        body: JSON.stringify({ premiumUnlocked: true })
                    });
                } catch (error) {
                    showToast(`Erro ao atualizar premium: ${error.message}`, '⚠️');
                }
            }
            localStorage.setItem('capy_vPlay', JSON.stringify(animals));
            document.getElementById('adModal').style.display = 'none';
            playSound('success'); renderApp(); createConfetti();
        };
    }, 5000);
}

let pendingShareId = null;
function shareDiscovery(id) {
    playSound('click'); pendingShareId = id; openParentalGate('share');
}
function executeShare() {
    if (!pendingShareId) return;
    const animal = animals.find(a => a.id === pendingShareId); if (!animal) return;
    const text = `Encontrei um(a) ${animal.name}! 🌿\nDica: "${animal.curiosity}"\nBaixe A Capivara Aventureira!`;
    if (navigator.share) navigator.share({ title: 'Minha Descoberta!', text }).catch(console.error);
    else window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    pendingShareId = null;
}

function claimMission(id) {
    playSound('coin'); const t = activeMissions.tasks.find(x => x.id === id); const base = missionsPool.find(m => m.id === id);
    if(t && !t.claimed) { t.claimed = true; seedCoins += base.reward; localStorage.setItem('capy_seeds', seedCoins); localStorage.setItem('capy_missions', JSON.stringify(activeMissions)); showToast(`Missão cumprida!`, "🌟"); renderApp(); }
    scheduleGameStateSync();
}

function renderApp() {
    const level = Math.floor(guardianXP / 100) + 1;
    if (level > userLevelMemo) { playSound('levelup'); showToast(`SUBIU DE NÍVEL! +50 Capins`, "👑"); seedCoins += 50; localStorage.setItem('capy_seeds', seedCoins); userLevelMemo = level; localStorage.setItem('capy_level', userLevelMemo); }
    scheduleGameStateSync();

    if (currentUser) {
        document.getElementById('headerName').innerText = `Olá, ${currentUser.name}! ${currentUser.avatar}`;
    }

    document.getElementById('userLevel').innerText = level; document.getElementById('xpProgress').style.width = (guardianXP % 100) + '%';
    document.getElementById('animalCount').innerText = `${animals.length} Descobertas`; document.getElementById('seedCoins').innerText = seedCoins;
    updateFullBodyVisuals();
    renderVillage();

    const grid = document.getElementById('animalsGrid');
    if (animals.length === 0) { document.getElementById('emptyState').classList.remove('hidden'); grid.innerHTML = ''; }
    else {
        document.getElementById('emptyState').classList.add('hidden');
        grid.innerHTML = animals.map(a => {
            let premiumContent = '';
            if (a.premiumUnlocked) {
                // Usa a função declarada em data.js
                const data = getPremiumData(a.name);
                premiumContent = `
                    <div class="bg-amber-50 p-5 rounded-[2rem] border-2 border-amber-200 shadow-sm mt-3 relative overflow-hidden">
                        <div class="absolute -right-4 -bottom-4 text-6xl opacity-10">📖</div>
                        <h5 class="brand-font text-amber-900 mb-3 text-sm uppercase tracking-wide border-b border-amber-200 pb-2 flex items-center gap-2"><i class="fas fa-microscope"></i> Bio-Scanner Avançado</h5>
                        
                        <div class="mb-4">
                            <span class="text-[9px] font-black uppercase tracking-widest text-white bg-amber-600 px-2 py-1 rounded-full shadow-sm">${data.status}</span>
                        </div>
                        
                        <ul class="space-y-3 text-[11px] font-bold text-amber-950">
                            <li class="flex items-start gap-2"><span class="text-green-600"><i class="fas fa-leaf"></i></span> <span class="leading-tight"><strong class="opacity-70 uppercase tracking-wide text-[9px] block">Papel na Natureza:</strong> ${data.role}</span></li>
                            <li class="flex items-start gap-2"><span class="text-red-500"><i class="fas fa-exclamation-triangle"></i></span> <span class="leading-tight"><strong class="opacity-70 uppercase tracking-wide text-[9px] block">Como Agir:</strong> ${data.danger}</span></li>
                            <li class="flex items-start gap-2"><span class="text-amber-500"><i class="fas fa-utensils"></i></span> <span class="leading-tight"><strong class="opacity-70 uppercase tracking-wide text-[9px] block">Alimentação:</strong> ${data.diet}</span></li>
                            <li class="flex items-start gap-2"><span class="text-blue-500"><i class="fas fa-globe-americas"></i></span> <span class="leading-tight"><strong class="opacity-70 uppercase tracking-wide text-[9px] block">Família / Onde vive:</strong> ${data.family} - ${data.habitat}</span></li>
                        </ul>
                        <div class="mt-4 p-3 bg-white/60 rounded-xl border border-amber-200 border-dashed">
                            <p class="text-[10px] text-amber-900 font-black italic">✨ Dica de Mestre: ${data.funFact}</p>
                        </div>
                    </div>`;
            } else {
                premiumContent = `<button onclick="startAd(${a.id})" class="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 hover:from-amber-500 hover:to-orange-500 py-4 rounded-2xl text-[11px] font-black uppercase flex items-center justify-center gap-2 transition-all btn-bounce shadow-md mt-3"><i class="fas fa-search-plus text-lg"></i> Pesquisar Mais Dados</button>`;
            }

            return `
            <div class="animal-card rounded-[2.5rem] overflow-hidden ${a.rarity === 'mitico' ? 'mythic-card' : (a.rarity === 'brilhante' ? 'shiny-card' : '')} animate-fadeIn relative">
                ${a.rarity === 'mitico' ? `<span class="absolute top-3 right-3 bg-purple-500 text-white font-black text-[8px] px-3 py-1 rounded-full z-10 animate-pulse shadow-lg uppercase tracking-widest"><i class="fas fa-meteor"></i> Mítico</span>` : (a.rarity === 'brilhante' ? `<span class="absolute top-3 right-3 bg-yellow-400 text-amber-950 font-black text-[8px] px-3 py-1 rounded-full z-10 animate-pulse shadow-lg uppercase tracking-widest"><i class="fas fa-star"></i> Brilhante</span>` : '')}
                
                <div class="h-48 bg-green-50 relative">
                    ${a.photo ? `<img src="${a.photo}" class="w-full h-full object-cover">` : `<div class="h-full flex items-center justify-center text-5xl bg-gradient-to-br from-green-100 to-green-50 text-emerald-800">🌱</div>`}
                    <div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[9px] font-black uppercase text-green-950 shadow-lg flex items-center gap-1.5"><i class="fas fa-map-marker-alt text-green-600"></i> ${a.location}</div>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h4 class="brand-font text-2xl text-green-900 leading-tight">${a.name}</h4>
                            <p class="text-[10px] font-black text-emerald-500 uppercase tracking-widest mt-1"><i class="fas fa-paw"></i> ${a.category}</p>
                        </div>
                        <div class="flex flex-col items-end gap-2">
                            <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">${a.timestamp}</span>
                            <button onclick="shareDiscovery(${a.id})" class="w-8 h-8 rounded-full bg-green-100 text-green-700 hover:bg-green-200 flex items-center justify-center transition-colors btn-bounce shadow-sm" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
                        </div>
                    </div>

                    ${a.description ? `<p class="text-[11px] text-gray-600 italic bg-gray-50 p-3 rounded-2xl border border-gray-100 font-bold mb-3 shadow-sm">"Eu vi: ${a.description}"</p>` : ''}

                    <div class="bg-green-50 p-4 rounded-2xl relative shadow-sm border border-green-100">
                        <span class="absolute -top-2.5 left-4 bg-green-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full tracking-widest">DICA RÁPIDA</span>
                        <p class="text-[11px] text-green-800 font-bold leading-relaxed mt-2">"${a.curiosity}"</p>
                    </div>

                    ${premiumContent}
                </div>
            </div>`;
        }).join('');
    }
    updateStats(); updateBadges(); renderAlbum();
}

function renderAlbum() {
    const albumGrid = document.getElementById('albumGrid');
    if (!albumGrid) return;
    let collectedCount = 0;
    
    albumGrid.innerHTML = silhouetteBank.map(s => {
        const isCollected = animals.some(a => a.name.toLowerCase().includes(s.n.toLowerCase()));
        if (isCollected) collectedCount++;
        
        return `<div class="flex flex-col items-center p-2">
            <div class="w-14 h-14 rounded-full flex items-center justify-center text-3xl bg-gray-100 border-2 ${isCollected ? 'border-green-400 bg-green-50 shadow-md sticker collected' : 'border-gray-200 sticker'}">
                ${isCollected ? s.e : '❓'}
            </div>
            <span class="text-[8px] font-bold mt-1 text-center uppercase ${isCollected ? 'text-green-800' : 'text-gray-400'}">${s.n}</span>
        </div>`;
    }).join('');
    
    document.getElementById('albumCount').innerText = `${collectedCount}/${silhouetteBank.length}`;
}

let currentEndlessQuestion = null;
function loadEndlessQuiz() {
    if (typeof endlessTriviaBank === 'undefined') return;
    currentEndlessQuestion = endlessTriviaBank[Math.floor(Math.random() * endlessTriviaBank.length)];
    const q = currentEndlessQuestion;
    document.getElementById('endlessQuizContainer').innerHTML = `
        <p class="text-xs font-bold text-orange-900 mb-3 leading-tight">${q.q}</p>
        <div class="space-y-2">
            ${q.o.map((opt, idx) => `<button onclick="answerEndlessQuiz(${idx}, ${q.a}, this)" class="w-full text-left p-3 bg-white border border-orange-200 hover:bg-orange-100 rounded-xl text-[10px] font-black text-orange-800 transition-all btn-bounce uppercase tracking-wider">${opt}</button>`).join('')}
        </div>
    `;
}
function answerEndlessQuiz(selected, correct, btn) {
    if (selected === correct) {
        playSound('coin'); seedCoins += 5; guardianXP += 5;
        localStorage.setItem('capy_seeds', seedCoins); localStorage.setItem('capy_xpPlay', guardianXP);
        updateAchStat('quizCorrect', 1);
        scheduleGameStateSync();
        btn.classList.replace('bg-white', 'bg-green-500'); btn.classList.replace('text-orange-800', 'text-white');
        showToast("+5 Capins!", "💡"); renderApp();
        setTimeout(loadEndlessQuiz, 1000);
    } else {
        playSound('click'); btn.classList.replace('bg-white', 'bg-red-500'); btn.classList.replace('text-orange-800', 'text-white');
        btn.disabled = true;
    }
}

function buyMysteryBox() {
    playSound('click');
    if (seedCoins >= 75) {
        seedCoins -= 75; localStorage.setItem('capy_seeds', seedCoins); renderApp();
        updateAchStat('seedsTotalSpent', 75);
        scheduleGameStateSync();
        const modal = document.getElementById('closetModal').querySelector('.bg-white');
        modal.classList.add('box-shake');
        setTimeout(() => {
            modal.classList.remove('box-shake');
            const rand = Math.random();
            let rewardMsg = ""; let icon = "";
            if (rand < 0.15) {
                // 15% chance item
                const unowned = accessories.filter(a => !ownedAccessories.includes(a.id));
                if (unowned.length > 0) {
                    const won = unowned[Math.floor(Math.random() * unowned.length)];
                    ownedAccessories.push(won.id); localStorage.setItem('capy_owned_acc', JSON.stringify(ownedAccessories));
                    rewardMsg = `Você tirou: ${won.label}!`; icon = won.emoji; playSound('levelup');
                } else {
                    seedCoins += 150; rewardMsg = "Baú de Ouro! +150 capins"; icon = "seed_coin.png"; playSound('coin');
                    updateAchStat('seedsTotalEarned', 150);
                }
            } else if (rand < 0.45) {
                // 30% chance XP
                guardianXP += 200; localStorage.setItem('capy_xpPlay', guardianXP);
                rewardMsg = "Livro Mágico! +200 XP"; icon = "📖"; playSound('success');
            } else {
                // 55% chance refund small
                seedCoins += 25; rewardMsg = "Capim perdido. +25 capins"; icon = "seed_coin.png"; playSound('coin');
                updateAchStat('seedsTotalEarned', 25);
            }
            localStorage.setItem('capy_seeds', seedCoins);
            scheduleGameStateSync();
            showToast(rewardMsg, icon); renderCloset(); renderApp();
        }, 500);
    } else {
        showToast("Precisa de 75 capins!", "mystery_box.png");
    }
}

function updateStats() {
    const stats = { inseto: 0, ave: 0, mamifero: 0, reptil: 0 }; animals.forEach(a => { if (stats[a.category] !== undefined) stats[a.category]++; });
    const total = animals.length || 1; const labels = { inseto: '🐞 Insetos', ave: '🐦 Aves', mamifero: '🐱 Mamíferos', reptil: '🦎 Répteis' };
    document.getElementById('statsBreakdown').innerHTML = Object.keys(stats).map(k => {
        const perc = Math.round((stats[k]/total)*100);
        return `<div class="space-y-2"><div class="flex justify-between items-end text-[10px] font-black uppercase"><span>${labels[k]}</span><span class="text-green-600">${perc}% (${stats[k]})</span></div><div class="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner"><div class="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-700" style="width: ${perc}%"></div></div></div>`;
    }).join('');

    if (activeMissions) {
        document.getElementById('missionsList').innerHTML = activeMissions.tasks.map(t => {
            const base = missionsPool.find(m => m.id === t.id); const isCompleted = base.check();
            let btn = t.claimed ? `<span class="text-[9px] bg-green-100 text-green-700 font-black px-3 py-1.5 rounded-full"><i class="fas fa-check"></i> FEITO</span>` : isCompleted ? `<button onclick="claimMission('${t.id}')" class="text-[9px] bg-amber-400 hover:bg-amber-500 text-amber-950 font-black px-3 py-1.5 rounded-full btn-bounce shadow-md tracking-wider">RESGATAR +${base.reward}</button>` : `<span class="text-[9px] bg-gray-100 text-gray-400 font-black px-3 py-1.5 rounded-full shadow-inner flex items-center gap-1">+${base.reward} <img src="seed_coin.png" class="w-3.5 h-3.5 object-contain inline-block"></span>`;
            return `<div class="p-4 rounded-[2rem] flex items-center gap-4 ${isCompleted ? 'bg-green-50 border-2 border-green-200' : 'bg-white shadow-sm border border-gray-100'} transition-colors"><div class="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl ${isCompleted ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg' : 'bg-gray-50 text-gray-300'}"><i class="fas ${t.claimed ? 'fa-check-double' : (isCompleted ? 'fa-gift' : 'fa-star')}"></i></div><div class="flex-grow"><p class="text-[11px] font-black uppercase text-green-900">${base.l}</p><p class="text-[9px] text-gray-500 font-bold leading-tight mt-0.5">${base.d}</p></div>${btn}</div>`;
        }).join('');
    }
}

function getAchStats() {
    let s = localStorage.getItem('capy_ach_stats');
    if (!s) {
        const initial = {
            wacPlays: 0,
            wacMaxHits: 0,
            wacTotalHits: 0,
            quizCorrect: 0,
            silhouetteCorrect: 0,
            memoryPlays: 0,
            memoryMaxLevel: 1,
            missionsWon: 0,
            hortaWins: 0,
            pescaWins: 0,
            pocaoWins: 0,
            faunaWins: 0,
            bauWins: 0,
            villageUpgrades: 0,
            seedsTotalEarned: 0,
            seedsTotalSpent: 0,
            quizzesDailyAnswered: 0
        };
        localStorage.setItem('capy_ach_stats', JSON.stringify(initial));
        return initial;
    }
    try {
        const parsed = JSON.parse(s);
        const defaults = {
            wacPlays: 0, wacMaxHits: 0, wacTotalHits: 0, quizCorrect: 0, silhouetteCorrect: 0,
            memoryPlays: 0, memoryMaxLevel: 1, missionsWon: 0, hortaWins: 0, pescaWins: 0,
            pocaoWins: 0, faunaWins: 0, bauWins: 0, villageUpgrades: 0, seedsTotalEarned: 0,
            seedsTotalSpent: 0, quizzesDailyAnswered: 0
        };
        return { ...defaults, ...parsed };
    } catch(e) {
        return {};
    }
}
function updateAchStat(key, val, mode = 'add') {
    const stats = getAchStats();
    if (mode === 'add') {
        stats[key] = (stats[key] || 0) + val;
    } else if (mode === 'max') {
        stats[key] = Math.max(stats[key] || 0, val);
    } else if (mode === 'set') {
        stats[key] = val;
    }
    localStorage.setItem('capy_ach_stats', JSON.stringify(stats));
}

function updateBadges() {
    const stats = { inseto: 0, ave: 0, mamifero: 0, reptil: 0 }; animals.forEach(a => { if (stats[a.category] !== undefined) stats[a.category]++; });
    const qc = animals.filter(a => a.location === 'quintal').length; const pc = animals.filter(a => a.location === 'parque').length; const ec = animals.filter(a => a.location === 'escola').length;
    const sc = animals.filter(a => a.rarity === 'brilhante').length; const mc = animals.filter(a => a.rarity === 'mitico').length; const prc = animals.filter(a => a.premiumUnlocked).length;
    const level = Math.floor(guardianXP / 100) + 1; const hours = animals.map(a => new Date(a.capturedAt || a.createdEpoch || Date.now()).getHours());
    const morn = hours.filter(h => h >= 5 && h < 9).length; const night = hours.filter(h => h >= 18 || h < 5).length;
    const photo = animals.filter(a => a.photo).length; const bio = stats.inseto > 0 && stats.ave > 0 && stats.mamifero > 0 ? 1 : 0;
    const pAcc = ownedAccessories.length; const aAcc = accessories.length;
    const achStats = getAchStats();
    const totBldLvl = villageState.buildings ? Object.values(villageState.buildings).reduce((acc, curr) => acc + curr.level, 0) : 0;

    const b = [
        { n: 'Explorador', desc: 'Registrou 1 animal', i: '🌱', u: animals.length >= 1, p: `${Math.min(animals.length, 1)}/1` },
        { n: 'Super Biólogo', desc: 'Registrou 10 animais', i: '🎓', u: animals.length >= 10, p: `${Math.min(animals.length, 10)}/10` },
        { n: 'Mestre Lendário', desc: 'Registrou 25 animais', i: '🦖', u: animals.length >= 25, p: `${Math.min(animals.length, 25)}/25` },
        { n: 'Rei dos Insetos', desc: 'Catalogou 3 insetos', i: '🐞', u: stats.inseto >= 3, p: `${Math.min(stats.inseto, 3)}/3` },
        { n: 'Paparazzi', desc: 'Tirou fotos de 5 animais', i: '📸', u: photo >= 5, p: `${Math.min(photo, 5)}/5` },
        { n: 'Detetive da Noite', desc: 'Explorou à noite (18h-5h)', i: '🦉', u: night >= 1, p: `${Math.min(night, 1)}/1` },
        { n: 'Mestre dos Segredos', desc: 'Liberou 3 fatos premium', i: '📖', u: prc >= 3, p: `${Math.min(prc, 3)}/3` },
        { n: 'Sortudo!', desc: '3 animais Brilhantes', i: '✨', u: sc >= 3, p: `${Math.min(sc, 3)}/3` },
        { n: 'Lenda Viva', desc: 'Encontrou 1 Mítico', i: '🌌', u: mc >= 1, p: `${Math.min(mc, 1)}/1` },
        { n: 'Detetive do Lar', desc: 'Encontrou 3 no quintal', i: '🏠', u: qc >= 3, p: `${Math.min(qc, 3)}/3` },
        { n: 'Biólogo de Ouro', desc: 'Aventuras por 7 dias', i: '🔥', u: currentStreak >= 7, p: `${Math.min(currentStreak, 7)}/7` },
        { n: 'Guarda-Roupa Cheio', desc: 'Adquiriu todos os itens!', i: '🛍️', u: pAcc >= aAcc, p: `${Math.min(pAcc, aAcc)}/${aAcc}` },
        
        // Novas Conquistas (Lote 1)
        { n: 'Lenda da Floresta', desc: 'Registrou 50 animais', i: '🌳', u: animals.length >= 50, p: `${Math.min(animals.length, 50)}/50` },
        { n: 'Entomologista', desc: 'Catalogou 5 insetos', i: '🦋', u: stats.inseto >= 5, p: `${Math.min(stats.inseto, 5)}/5` },
        { n: 'Ornitólogo', desc: 'Catalogou 5 aves', i: '🦅', u: stats.ave >= 5, p: `${Math.min(stats.ave, 5)}/5` },
        { n: 'Mastozoólogo', desc: 'Catalogou 5 mamíferos', i: '🦊', u: stats.mamifero >= 5, p: `${Math.min(stats.mamifero, 5)}/5` },
        { n: 'Herpetólogo', desc: 'Catalogou 3 répteis', i: '🐍', u: stats.reptil >= 3, p: `${Math.min(stats.reptil, 3)}/3` },
        { n: 'Domador de Dragões', desc: 'Catalogou 5 répteis', i: '🐲', u: stats.reptil >= 5, p: `${Math.min(stats.reptil, 5)}/5` },
        { n: 'Explorador Doméstico', desc: 'Encontrou 5 no quintal', i: '🏡', u: qc >= 5, p: `${Math.min(qc, 5)}/5` },
        { n: 'Guardião do Parque', desc: 'Encontrou 5 no parque', i: '🏞️', u: pc >= 5, p: `${Math.min(pc, 5)}/5` },
        { n: 'Estudioso da Escola', desc: 'Encontrou 5 na escola', i: '🏫', u: ec >= 5, p: `${Math.min(ec, 5)}/5` },
        { n: 'Olhos de Águia', desc: 'Catalogou 5 Brilhantes', i: '⭐', u: sc >= 5, p: `${Math.min(sc, 5)}/5` },
        { n: 'Buscador de Mitos', desc: 'Encontrou 2 Míticos', i: '🔮', u: mc >= 2, p: `${Math.min(mc, 2)}/2` },
        { n: 'Sussurrador Místico', desc: 'Encontrou 3 Míticos', i: '🧬', u: mc >= 3, p: `${Math.min(mc, 3)}/3` },
        { n: 'Mapeador da Noite', desc: 'Encontrou 5 à noite', i: '🦇', u: night >= 5, p: `${Math.min(night, 5)}/5` },
        { n: 'Madrugador', desc: 'Encontrou 3 de manhã', i: '🌅', u: morn >= 3, p: `${Math.min(morn, 3)}/3` },
        { n: 'Fotógrafo Pro', desc: 'Tirou fotos de 10 animais', i: '🖼️', u: photo >= 10, p: `${Math.min(photo, 10)}/10` },
        { n: 'Diretor de Cinema', desc: 'Tirou fotos de 20 animais', i: '🎬', u: photo >= 20, p: `${Math.min(photo, 20)}/20` },
        { n: 'Estilo Básico', desc: 'Adquiriu 5 acessórios', i: '👓', u: pAcc >= 5, p: `${Math.min(pAcc, 5)}/5` },
        { n: 'Colecionador de Moda', desc: 'Adquiriu 10 acessórios', i: '🎩', u: pAcc >= 10, p: `${Math.min(pAcc, 10)}/10` },
        { n: 'Fashionista da Vila', desc: 'Adquiriu 15 acessórios', i: '👑', u: pAcc >= 15, p: `${Math.min(pAcc, 15)}/15` },
        { n: 'Guardião Aprendiz', desc: 'Chegou ao nível 5', i: '🛡️', u: level >= 5, p: `${Math.min(level, 5)}/5` },
        { n: 'Guardião de Elite', desc: 'Chegou ao nível 10', i: '⚔️', u: level >= 10, p: `${Math.min(level, 10)}/10` },
        { n: 'Protetor Supremo', desc: 'Chegou ao nível 20', i: '⚡', u: level >= 20, p: `${Math.min(level, 20)}/20` },
        { n: 'Compromisso Verde', desc: 'Aventuras por 3 dias seguidos', i: '☘️', u: currentStreak >= 3, p: `${Math.min(currentStreak, 3)}/3` },
        { n: 'Capivara de Ferro', desc: 'Aventuras por 15 dias seguidos', i: '⛓️', u: currentStreak >= 15, p: `${Math.min(currentStreak, 15)}/15` },
        { n: 'Mente Aguçada', desc: 'Nível 3 no Jogo da Memória', i: '🧠', u: currentMemoryLevel >= 3, p: `${Math.min(currentMemoryLevel, 3)}/3` },
        { n: 'Memória Fotográfica', desc: 'Nível 5 no Jogo da Memória', i: '🧩', u: currentMemoryLevel >= 5, p: `${Math.min(currentMemoryLevel, 5)}/5` },
        { n: 'Líder da Comunidade', desc: 'Centro da Vila no nível 3', i: '🏛️', u: Boolean(villageState.buildings && villageState.buildings.townHall && villageState.buildings.townHall.level >= 3), p: `${Math.min((villageState.buildings && villageState.buildings.townHall) ? villageState.buildings.townHall.level : 1, 3)}/3` },
        { n: 'Prefeito Honorário', desc: 'Centro da Vila no nível 5', i: '🗳️', u: Boolean(villageState.buildings && villageState.buildings.townHall && villageState.buildings.townHall.level >= 5), p: `${Math.min((villageState.buildings && villageState.buildings.townHall) ? villageState.buildings.townHall.level : 1, 5)}/5` },
        { n: 'Vila Próspera', desc: 'Todas construções nível 3', i: '🏗️', u: Boolean(villageState.buildings && Object.values(villageState.buildings).every(bu => bu.level >= 3)), p: `${Math.min(villageState.buildings ? Math.min(...Object.values(villageState.buildings).map(bu => bu.level)) : 0, 3)}/3` },
        { n: 'Obra-Prima', desc: 'Uma construção no nível 10', i: '🏆', u: Boolean(villageState.buildings && Object.values(villageState.buildings).some(bu => bu.level >= 10)), p: (villageState.buildings && Object.values(villageState.buildings).some(bu => bu.level >= 10)) ? '1/1' : '0/1' },
        { n: 'Magnata do Capim', desc: 'Acumulou 500 capins', i: '💰', u: seedCoins >= 500, p: `${Math.min(seedCoins, 500)}/500` },

        // Novas Conquistas da Vila, Minijogos e Arcade (Lote 2 - 50 Conquistas)
        { n: 'Primeira Pedra', desc: 'Evoluiu 1 prédio da vila', i: '🪨', u: achStats.villageUpgrades >= 1, p: `${Math.min(achStats.villageUpgrades, 1)}/1` },
        { n: 'Arquiteto da Vila', desc: 'Evoluiu prédios 5 vezes', i: '📐', u: achStats.villageUpgrades >= 5, p: `${Math.min(achStats.villageUpgrades, 5)}/5` },
        { n: 'Mestre Construtor', desc: 'Evoluiu prédios 20 vezes', i: '🏗️', u: achStats.villageUpgrades >= 20, p: `${Math.min(achStats.villageUpgrades, 20)}/20` },
        { n: 'Produtor Iniciante', desc: 'Horta de Capim Nível 5', i: '🌾', u: Boolean(villageState.buildings && villageState.buildings.farm && villageState.buildings.farm.level >= 5), p: `${Math.min((villageState.buildings && villageState.buildings.farm) ? villageState.buildings.farm.level : 0, 5)}/5` },
        { n: 'Fazenda Industrial', desc: 'Horta de Capim Nível 10', i: '🚜', u: Boolean(villageState.buildings && villageState.buildings.farm && villageState.buildings.farm.level >= 10), p: `${Math.min((villageState.buildings && villageState.buildings.farm) ? villageState.buildings.farm.level : 0, 10)}/10` },
        { n: 'Porto Comercial', desc: 'Doca de Pesca Nível 5', i: '⚓', u: Boolean(villageState.buildings && villageState.buildings.docks && villageState.buildings.docks.level >= 5), p: `${Math.min((villageState.buildings && villageState.buildings.docks) ? villageState.buildings.docks.level : 0, 5)}/5` },
        { n: 'Grande Doca', desc: 'Doca de Pesca Nível 10', i: '🚢', u: Boolean(villageState.buildings && villageState.buildings.docks && villageState.buildings.docks.level >= 10), p: `${Math.min((villageState.buildings && villageState.buildings.docks) ? villageState.buildings.docks.level : 0, 10)}/10` },
        { n: 'Centro de Pesquisas', desc: 'Laboratório Nível 5', i: '🔬', u: Boolean(villageState.buildings && villageState.buildings.lab && villageState.buildings.lab.level >= 5), p: `${Math.min((villageState.buildings && villageState.buildings.lab) ? villageState.buildings.lab.level : 0, 5)}/5` },
        { n: 'Super Computador', desc: 'Laboratório Nível 10', i: '🧬', u: Boolean(villageState.buildings && villageState.buildings.lab && villageState.buildings.lab.level >= 10), p: `${Math.min((villageState.buildings && villageState.buildings.lab) ? villageState.buildings.lab.level : 0, 10)}/10` },
        { n: 'Vigia Aprimorada', desc: 'Torre de Vigia Nível 5', i: '🔭', u: Boolean(villageState.buildings && villageState.buildings.tower && villageState.buildings.tower.level >= 5), p: `${Math.min((villageState.buildings && villageState.buildings.tower) ? villageState.buildings.tower.level : 0, 5)}/5` },
        { n: 'Farol do Horizonte', desc: 'Torre de Vigia Nível 10', i: '📡', u: Boolean(villageState.buildings && villageState.buildings.tower && villageState.buildings.tower.level >= 10), p: `${Math.min((villageState.buildings && villageState.buildings.tower) ? villageState.buildings.tower.level : 0, 10)}/10` },
        { n: 'Vila dos Sonhos', desc: 'Nível total de prédios >= 15', i: '🏡', u: totBldLvl >= 15, p: `${Math.min(totBldLvl, 15)}/15` },
        { n: 'Metrópole Capivara', desc: 'Nível total de prédios >= 35', i: '🏙️', u: totBldLvl >= 35, p: `${Math.min(totBldLvl, 35)}/35` },
        { n: 'Utopia Ecológica', desc: 'Todos os prédios no nível 10', i: '🌈', u: Boolean(villageState.buildings && Object.values(villageState.buildings).every(bu => bu.level >= 10)), p: `${Math.min(villageState.buildings ? Math.min(...Object.values(villageState.buildings).map(bu => bu.level)) : 0, 10)}/10` },
        { n: 'Engenheiro Chefe', desc: 'Nível total de prédios >= 25', i: '🔧', u: totBldLvl >= 25, p: `${Math.min(totBldLvl, 25)}/25` },
        
        { n: 'Ajudante da Vila', desc: 'Completou 5 tarefas de NPC', i: '🤝', u: achStats.missionsWon >= 5, p: `${Math.min(achStats.missionsWon, 5)}/5` },
        { n: 'Herói Local', desc: 'Completou 15 tarefas de NPC', i: '🏅', u: achStats.missionsWon >= 15, p: `${Math.min(achStats.missionsWon, 15)}/15` },
        { n: 'Lenda da Vila', desc: 'Completou 50 tarefas de NPC', i: '🌟', u: achStats.missionsWon >= 50, p: `${Math.min(achStats.missionsWon, 50)}/50` },
        { n: 'Dedos de Cenoura', desc: 'Venceu Colheita 5 vezes', i: '🥕', u: achStats.hortaWins >= 5, p: `${Math.min(achStats.hortaWins, 5)}/5` },
        { n: 'Ceifador Lendário', desc: 'Venceu Colheita 15 vezes', i: '🌾', u: achStats.hortaWins >= 15, p: `${Math.min(achStats.hortaWins, 15)}/15` },
        { n: 'Primeira Fisgada', desc: 'Venceu Pesca 5 vezes', i: '🎣', u: achStats.pescaWins >= 5, p: `${Math.min(achStats.pescaWins, 5)}/5` },
        { n: 'Pescador Lendário', desc: 'Venceu Pesca 15 vezes', i: '🐟', u: achStats.pescaWins >= 15, p: `${Math.min(achStats.pescaWins, 15)}/15` },
        { n: 'Alquimista Aprendiz', desc: 'Venceu Poções 5 vezes', i: '🧪', u: achStats.pocaoWins >= 5, p: `${Math.min(achStats.pocaoWins, 5)}/5` },
        { n: 'Mestre das Misturas', desc: 'Venceu Poções 15 vezes', i: '🧙', u: achStats.pocaoWins >= 15, p: `${Math.min(achStats.pocaoWins, 15)}/15` },
        { n: 'Amigo dos Animais', desc: 'Venceu Fauna 5 vezes', i: '🐾', u: achStats.faunaWins >= 5, p: `${Math.min(achStats.faunaWins, 5)}/5` },
        { n: 'Protetor da Fauna', desc: 'Venceu Fauna 15 vezes', i: '🦁', u: achStats.faunaWins >= 15, p: `${Math.min(achStats.faunaWins, 15)}/15` },
        { n: 'Caçador de Relíquias', desc: 'Venceu Baú 5 vezes', i: '📦', u: achStats.bauWins >= 5, p: `${Math.min(achStats.bauWins, 5)}/5` },
        { n: 'Saqueador de Tumbas', desc: 'Venceu Baú 15 vezes', i: '🏺', u: achStats.bauWins >= 15, p: `${Math.min(achStats.bauWins, 15)}/15` },
        { n: 'Recompensa Dupla', desc: 'Gastou 500 capins no total', i: '🎁', u: achStats.seedsTotalSpent >= 500, p: `${Math.min(achStats.seedsTotalSpent, 500)}/500` },
        { n: 'Cofre da Economia', desc: 'Gastou 1500 capins no total', i: '💎', u: achStats.seedsTotalSpent >= 1500, p: `${Math.min(achStats.seedsTotalSpent, 1500)}/1500` },
        
        { n: 'Batedor Iniciante', desc: 'Acertou 50 em Bate-Capy', i: '🔨', u: achStats.wacTotalHits >= 50, p: `${Math.min(achStats.wacTotalHits, 50)}/50` },
        { n: 'Martelo de Ouro', desc: 'Acertou 200 em Bate-Capy', i: '⚡', u: achStats.wacTotalHits >= 200, p: `${Math.min(achStats.wacTotalHits, 200)}/200` },
        { n: 'Mestre do Bate-Capy', desc: 'Acertou 500 em Bate-Capy', i: '👑', u: achStats.wacTotalHits >= 500, p: `${Math.min(achStats.wacTotalHits, 500)}/500` },
        { n: 'Bate-Capy Bronze', desc: 'Nível 3 em Bate-Capy', i: '🦫', u: wacCurrentLevel >= 3, p: `${Math.min(wacCurrentLevel, 3)}/3` },
        { n: 'Bate-Capy Ouro', desc: 'Nível 7 em Bate-Capy', i: '🌟', u: wacCurrentLevel >= 7, p: `${Math.min(wacCurrentLevel, 7)}/7` },
        { n: 'Bate-Capy Supremo', desc: 'Nível 10 em Bate-Capy', i: '🔥', u: wacCurrentLevel >= 10, p: `${Math.min(wacCurrentLevel, 10)}/10` },
        { n: 'Pontuação Recorde', desc: '15 acertos em Bate-Capy', i: '🏅', u: achStats.wacMaxHits >= 15, p: `${Math.min(achStats.wacMaxHits, 15)}/15` },
        { n: 'Bate-Capy Campeão', desc: '25 acertos em Bate-Capy', i: '👑', u: achStats.wacMaxHits >= 25, p: `${Math.min(achStats.wacMaxHits, 25)}/25` },
        { n: 'Bate-Capy Insuperável', desc: '35 acertos em Bate-Capy', i: '💥', u: achStats.wacMaxHits >= 35, p: `${Math.min(achStats.wacMaxHits, 35)}/35` },
        { n: 'Detetive das Sombras', desc: 'Adivinhou 5 silhuetas', i: '👤', u: achStats.silhouetteCorrect >= 5, p: `${Math.min(achStats.silhouetteCorrect, 5)}/5` },
        { n: 'Mestre das Sombras', desc: 'Adivinhou 15 silhuetas', i: '👁️', u: achStats.silhouetteCorrect >= 15, p: `${Math.min(achStats.silhouetteCorrect, 15)}/15` },
        { n: 'Sábio da Fauna', desc: 'Adivinhou 40 silhuetas', i: '🔍', u: achStats.silhouetteCorrect >= 40, p: `${Math.min(achStats.silhouetteCorrect, 40)}/40` },
        { n: 'Estudante de Trivia', desc: 'Acertou 5 quizzes sem fim', i: '📚', u: achStats.quizCorrect >= 5, p: `${Math.min(achStats.quizCorrect, 5)}/5` },
        { n: 'Enciclopédia Ambulante', desc: 'Acertou 20 quizzes sem fim', i: '📖', u: achStats.quizCorrect >= 20, p: `${Math.min(achStats.quizCorrect, 20)}/20` },
        { n: 'Gênio Neotropical', desc: 'Acertou 50 quizzes sem fim', i: '🎓', u: achStats.quizCorrect >= 50, p: `${Math.min(achStats.quizCorrect, 50)}/50` },
        { n: 'Memória de Elefante', desc: 'Memória Nível 2 superado', i: '🐘', u: achStats.memoryMaxLevel >= 2, p: `${Math.min(achStats.memoryMaxLevel, 2)}/2` },
        { n: 'Mente Brilhante', desc: 'Memória Nível 4 superado', i: '💡', u: achStats.memoryMaxLevel >= 4, p: `${Math.min(achStats.memoryMaxLevel, 4)}/4` },
        { n: 'Zeradouro de Memória', desc: 'Memória Nível 5 superado', i: '🧩', u: achStats.memoryMaxLevel >= 5, p: `${Math.min(achStats.memoryMaxLevel, 5)}/5` },
        { n: 'Maratonista do Arcade', desc: 'Jogou fliperama 15 vezes', i: '🎮', u: (achStats.wacPlays + achStats.memoryPlays) >= 15, p: `${Math.min(achStats.wacPlays + achStats.memoryPlays, 15)}/15` },
        { n: 'Viciado em Fliperama', desc: 'Jogou fliperama 50 vezes', i: '🕹️', u: (achStats.wacPlays + achStats.memoryPlays) >= 50, p: `${Math.min(achStats.wacPlays + achStats.memoryPlays, 50)}/50` }
    ];
    document.getElementById('badgesGrid').innerHTML = b.map(x => `<div class="bg-white p-4 rounded-[2.5rem] border-2 transition-all duration-300 ${x.u ? 'border-amber-400 bg-amber-50/30 shadow-md' : 'border-gray-100 opacity-60'} flex flex-col items-center gap-1 text-center"><div class="text-4xl filter ${x.u ? '' : 'grayscale'} mb-1">${x.i}</div><p class="text-[10px] font-black uppercase text-green-950">${x.n}</p><p class="text-[8px] text-gray-400 font-bold leading-tight">${x.desc}</p><div class="mt-2 text-[8px] font-black px-2 py-0.5 rounded-full ${x.u ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-500'}">${x.u ? 'CONQUISTADO! 🎉' : x.p}</div></div>`).join('');
}

// ==========================================================================
// SUPERVISOR DO LABORATÓRIO (DR. CAPY CIENTISTA)
// ==========================================================================
let labSupervisorIntervalId = null;
let labSupervisorFrame = 0;
let labSupervisorSpeechTimer = null;

const labSupervisorSpeeches = [
    "A ciência não para! Estamos analisando amostras de capim mutante. 🧪",
    "Não toque nos frascos brilhantes sem luvas! São amostras radioativas de amora. 🍇",
    "Catalogar descobertas nos ajuda a entender a riqueza da fauna local! 🌍",
    "De acordo com meus cálculos, as capivaras são 100% adoráveis. 📊",
    "Você sabia que a biodiversidade é a chave para o equilíbrio ambiental? 🌿",
    "Minha lente de microscópio está perfeitamente calibrada hoje! 🔬",
    "Estou desenvolvendo uma fórmula secreta para o capim de crescimento rápido. 🌾",
    "Por favor, certifique-se de registrar cada nova espécie encontrada! 📝",
    "A temperatura do rio está variando em 0.5 graus centígrados... Fascinante! 🌊",
    "A curiosidade científica é o nosso superpoder! 🚀"
];

function startLabSupervisorAnimation() {
    stopLabSupervisorAnimation();
    
    // Animar sprite a 6fps (aproximadamente 160ms)
    labSupervisorIntervalId = setInterval(() => {
        labSupervisorFrame = (labSupervisorFrame + 1) % 8;
        const spriteEl = document.getElementById('labSupervisorSprite');
        if (spriteEl) {
            spriteEl.style.backgroundPosition = `-${labSupervisorFrame * 34}px -102px`;
        }
    }, 160);

    // Mudar frase a cada 10 segundos
    changeSupervisorSpeech();
    labSupervisorSpeechTimer = setInterval(changeSupervisorSpeech, 10000);
}

function stopLabSupervisorAnimation() {
    if (labSupervisorIntervalId) {
        clearInterval(labSupervisorIntervalId);
        labSupervisorIntervalId = null;
    }
    if (labSupervisorSpeechTimer) {
        clearInterval(labSupervisorSpeechTimer);
        labSupervisorSpeechTimer = null;
    }
}

function changeSupervisorSpeech() {
    const textEl = document.getElementById('labSupervisorSpeech');
    if (textEl) {
        const speech = labSupervisorSpeeches[Math.floor(Math.random() * labSupervisorSpeeches.length)];
        textEl.innerHTML = `"${speech}"`;
    }
}

// ==========================================================================
// SUPERVISOR DO ÁLBUM (DRA. CAPY BIÓLOGA)
// ==========================================================================
let albumSupervisorIntervalId = null;
let albumSupervisorFrame = 0;
let albumSupervisorSpeechTimer = null;

const albumSupervisorSpeeches = [
    "Olhe aquela borboleta! A polinização é a engrenagem oculta do nosso ecossistema. 🦋",
    "Cada figurinha no seu álbum representa uma vitória para a conservação da biodiversidade! 📖",
    "Você já ouviu o canto do bem-te-vi hoje? Minhas anotações dizem que ele está super ativo. 🐦",
    "Sabia que catalogar espécies nos ajuda a proteger seus habitats naturais da destruição? 🌳",
    "Esta floresta esconde segredos incríveis... Vamos catalogar todos eles! 🔍",
    "Seguindo os rastros na lama... Hum, parece que uma capivara passou por aqui recentemente! 🐾",
    "Protejam as bacias hidrográficas! Sem água limpa, nossa fauna não sobrevive. 💧",
    "Estou catalogando uma nova espécie de cogumelo brilhante. Que espetáculo da natureza! 🍄",
    "A simbiose na nossa fazenda é fascinante. Plantas e animais cooperando em harmonia! 🌾",
    "Mantenham os olhos bem abertos! A natureza sempre tem algo novo para nos ensinar. 🌿"
];

function startAlbumSupervisorAnimation() {
    stopAlbumSupervisorAnimation();
    
    // Animar sprite a 6fps (aproximadamente 160ms)
    albumSupervisorIntervalId = setInterval(() => {
        albumSupervisorFrame = (albumSupervisorFrame + 1) % 8;
        const spriteEl = document.getElementById('albumSupervisorSprite');
        if (spriteEl) {
            spriteEl.style.backgroundPosition = `-${albumSupervisorFrame * 33}px -114px`;
        }
    }, 160);

    // Mudar frase a cada 10 segundos
    changeAlbumSupervisorSpeech();
    albumSupervisorSpeechTimer = setInterval(changeAlbumSupervisorSpeech, 10000);
}

function stopAlbumSupervisorAnimation() {
    if (albumSupervisorIntervalId) {
        clearInterval(albumSupervisorIntervalId);
        albumSupervisorIntervalId = null;
    }
    if (albumSupervisorSpeechTimer) {
        clearInterval(albumSupervisorSpeechTimer);
        albumSupervisorSpeechTimer = null;
    }
}

function changeAlbumSupervisorSpeech() {
    const textEl = document.getElementById('albumSupervisorSpeech');
    if (textEl) {
        const speech = albumSupervisorSpeeches[Math.floor(Math.random() * albumSupervisorSpeeches.length)];
        textEl.innerHTML = `"${speech}"`;
    }
}

// ==========================================================================
// SUPERVISOR DOS MINIGAMES (DONA CAPY FAZENDEIRA)
// ==========================================================================
let gamesSupervisorIntervalId = null;
let gamesSupervisorFrame = 0;
let gamesSupervisorSpeechTimer = null;

const gamesSupervisorSpeeches = [
    "Hora de relaxar um pouco dos campos! Qual jogo vamos jogar hoje? 🎮",
    "Cultivar capim dá trabalho, mas ganhar capins nos minijogos é uma diversão! 🌾",
    "Adivinhar as silhuetas me lembra de quando tentamos identificar as plantas jovens na horta. 🌿",
    "O segredo de uma boa colheita e de um bom recorde é a paciência e persistência! 🏆",
    "Um cérebro ativo com o jogo da memória é tão forte quanto uma terra bem adubada! 🧠",
    "Sabia que as capivaras amam brincar tanto quanto amam um capim fresquinho no final do dia? 🦫",
    "Trabalhar na fazenda é bom, mas exercitar a mente nos minigames é fundamental! ✨",
    "Atenção máxima nas cartas do jogo da memória! Não vá confundir o jacaré com a capivara! 🐊",
    "Nossa colheita está prosperando! Que tal celebrar batendo o recorde de adivinhação? 🥕",
    "Mantenha o foco! Cada acerto aqui nos ajuda a expandir nossa amada Eco-Vila! 🌳"
];

function startGamesSupervisorAnimation() {
    stopGamesSupervisorAnimation();
    
    // Animar sprite a 6fps (aproximadamente 160ms)
    gamesSupervisorIntervalId = setInterval(() => {
        gamesSupervisorFrame = (gamesSupervisorFrame + 1) % 8;
        const spriteEl = document.getElementById('gamesSupervisorSprite');
        if (spriteEl) {
            spriteEl.style.backgroundPosition = `-${gamesSupervisorFrame * 36}px -105px`;
        }
    }, 160);

    // Mudar frase a cada 10 segundos
    changeGamesSupervisorSpeech();
    gamesSupervisorSpeechTimer = setInterval(changeGamesSupervisorSpeech, 10000);
}

function stopGamesSupervisorAnimation() {
    if (gamesSupervisorIntervalId) {
        clearInterval(gamesSupervisorIntervalId);
        gamesSupervisorIntervalId = null;
    }
    if (gamesSupervisorSpeechTimer) {
        clearInterval(gamesSupervisorSpeechTimer);
        gamesSupervisorSpeechTimer = null;
    }
}

function changeGamesSupervisorSpeech() {
    const textEl = document.getElementById('gamesSupervisorSpeech');
    if (textEl) {
        const speech = gamesSupervisorSpeeches[Math.floor(Math.random() * gamesSupervisorSpeeches.length)];
        textEl.innerHTML = `"${speech}"`;
    }
}

// ==========================================================================
// SUPERVISOR DO DIÁRIO (DONA CAPY AVENTUREIRA)
// ==========================================================================
let homeSupervisorIntervalId = null;
let homeSupervisorFrame = 0;
let homeSupervisorSpeechTimer = null;

const homeSupervisorSpeeches = [
    "Bem-vindo ao seu diário de campo! Quantos animais registramos hoje? 📝",
    "Cada foto tirada é um pedacinho da fauna brasileira que imortalizamos! 📸",
    "Nossas expedições estão rendendo grandes descobertas. Continue explorando! 🧭",
    "Mantenha o foco! O quintal é apenas o começo da nossa grande aventura. 🌳",
    "Você sabia que a observação atenta é a maior virtude de um naturalista? 🧐",
    "Estou revisando as anotações do diário... Cada espécie catalogada é fascinante! 📖",
    "Prepare a câmera e as sementes (ou melhor, o capim)! Grandes mistérios nos aguardam. ✨",
    "A vida selvagem é cheia de surpresas. Qual será o próximo animal brilhante? 🌟",
    "Aventurar-se pela floresta exige respeito e carinho pela nossa biodiversidade! 🌿",
    "Mochila pronta, espírito pronto... Vamos atualizar nosso diário ecológico! 🦫"
];

function startHomeSupervisorAnimation() {
    stopHomeSupervisorAnimation();
    
    // Animar sprite a 6fps (aproximadamente 160ms)
    homeSupervisorIntervalId = setInterval(() => {
        homeSupervisorFrame = (homeSupervisorFrame + 1) % 8;
        const spriteEl = document.getElementById('homeSupervisorSprite');
        if (spriteEl) {
            spriteEl.style.backgroundPosition = `-${homeSupervisorFrame * 33}px -114px`;
        }
    }, 160);

    // Mudar frase a cada 10 segundos
    changeHomeSupervisorSpeech();
    homeSupervisorSpeechTimer = setInterval(changeHomeSupervisorSpeech, 10000);
}

function stopHomeSupervisorAnimation() {
    if (homeSupervisorIntervalId) {
        clearInterval(homeSupervisorIntervalId);
        homeSupervisorIntervalId = null;
    }
    if (homeSupervisorSpeechTimer) {
        clearInterval(homeSupervisorSpeechTimer);
        homeSupervisorSpeechTimer = null;
    }
}

function changeHomeSupervisorSpeech() {
    const textEl = document.getElementById('homeSupervisorSpeech');
    if (textEl) {
        const speech = homeSupervisorSpeeches[Math.floor(Math.random() * homeSupervisorSpeeches.length)];
        textEl.innerHTML = `"${speech}"`;
    }
}

// ==========================================================================
// BATE-CAPY — REDESIGN COM SPRITES REAIS + 10 NÍVEIS
// ==========================================================================

// Config de cada tipo de capivara (sprite sheet original 1×, idle = row 0)
const wacCapyTypes = [
    { name: 'Aventureira', src: 'capybara_adventurer/atlas.webp', w: 33, h: 38, sheetW: 264, sheetH: 228, frames: 4 },
    { name: 'Fazendeira',  src: 'farmer_capybara/atlas.webp',     w: 36, h: 35, sheetW: 288, sheetH: 210, frames: 4 },
    { name: 'Pescadora',   src: 'capybara_fisherman/atlas.webp',  w: 38, h: 34, sheetW: 304, sheetH: 204, frames: 4 },
    { name: 'Cientista',   src: 'capybara_scientist/atlas.webp',  w: 34, h: 34, sheetW: 272, sheetH: 204, frames: 4 },
    { name: 'Bióloga',     src: 'capybara_biologist/atlas.webp',  w: 33, h: 38, sheetW: 264, sheetH: 228, frames: 4 },
];

const WAC_SCALE = 2; // pixel-art scale (2×)

// 10 níveis: mais buracos, mais rápido, mais recompensa
const wacLevels = [
    // lvl  holes  spawnMin spawnMax  upTime  reward  xp  cols  unlock
    { level:  1, holes: 12, spawnMin:1200, spawnMax:1850, upTime:1600, reward: 10, xp: 10, cols:4, unlock: 4  },
    { level:  2, holes: 12, spawnMin:1000, spawnMax:1600, upTime:1380, reward: 18, xp: 15, cols:4, unlock: 5  },
    { level:  3, holes: 12, spawnMin: 850, spawnMax:1350, upTime:1150, reward: 27, xp: 20, cols:4, unlock: 6  },
    { level:  4, holes: 12, spawnMin: 700, spawnMax:1100, upTime: 950, reward: 37, xp: 28, cols:4, unlock: 7  },
    { level:  5, holes: 12, spawnMin: 580, spawnMax: 940, upTime: 800, reward: 50, xp: 36, cols:4, unlock: 8  },
    { level:  6, holes: 12, spawnMin: 475, spawnMax: 775, upTime: 670, reward: 65, xp: 46, cols:4, unlock: 9  },
    { level:  7, holes: 12, spawnMin: 385, spawnMax: 630, upTime: 560, reward: 82, xp: 58, cols:4, unlock:10  },
    { level:  8, holes: 12, spawnMin: 305, spawnMax: 505, upTime: 460, reward:102, xp: 72, cols:4, unlock:12  },
    { level:  9, holes: 12, spawnMin: 235, spawnMax: 395, upTime: 370, reward:126, xp: 88, cols:4, unlock:14  },
    { level: 10, holes: 12, spawnMin: 165, spawnMax: 295, upTime: 280, reward:160, xp:110, cols:4, unlock:16  },
];

let wacCurrentLevel  = parseInt(localStorage.getItem('capy_wac_level')) || 1;
let wacIsPlaying     = false;
let wacScore         = 0;
let wacTimeLeft      = 30;
let wacTimerInterval = null;
let wacSpawnTimeout  = null;
let wacHoleTimeouts  = [];
let wacHoleStates    = [];   // [{typeIdx, frameInterval, frame}, ...]

// ─── Helpers ────────────────────────────────────────────────────────────────

function wacSpec() {
    return wacLevels[Math.min(wacCurrentLevel, wacLevels.length) - 1];
}

function wacUpdateHeaderUI() {
    const s = wacSpec();
    const lv = document.getElementById('wacLevelIndicator');
    const rw = document.getElementById('wacRewardBadge');
    if (lv) lv.textContent = `Nível ${wacCurrentLevel} / 10`;
    if (rw) rw.innerHTML  = `+${s.reward} <img src="seed_coin.png" class="w-3 h-3 object-contain inline-block">`;
}

// ─── Build grid ──────────────────────────────────────────────────────────────

function wacBuildGrid() {
    const s = wacSpec();
    const grid = document.getElementById('wacGrid');
    if (!grid) return;
    grid.className = `wac-grid wac-grid-c${s.cols}`;
    grid.innerHTML = Array.from({ length: s.holes }, (_, i) => `
        <div class="wac-hole" id="wacHole${i}" onclick="wacWhack(${i})">
            <div class="wac-mound-back"></div>
            <div class="wac-mound-grass"></div>
            <div class="wac-pit"></div>
            <div class="wac-peek-window">
                <div class="wac-sprite-inner" id="wacSprite${i}"></div>
            </div>
            <div class="wac-mound-front"></div>
        </div>
    `).join('');
    wacHoleStates = Array.from({ length: s.holes }, () => ({
        typeIdx: -1,
        frameInterval: null,
        frame: 0
    }));
}

// ─── Game lifecycle ──────────────────────────────────────────────────────────

function startWacGame() {
    if (wacIsPlaying) return;
    playSound('click');
    wacIsPlaying = true;
    wacScore     = 0;
    wacTimeLeft  = 30;

    const result   = document.getElementById('wacResult');
    const startBtn = document.getElementById('wacStartBtn');
    const scoreEl  = document.getElementById('wacScore');
    if (result)   result.classList.add('hidden');
    if (startBtn) startBtn.style.display = 'none';
    if (scoreEl)  scoreEl.textContent = '0';

    wacBuildGrid();
    wacUpdateTimerBar();

    wacTimerInterval = setInterval(() => {
        wacTimeLeft--;
        wacUpdateTimerBar();
        if (wacTimeLeft <= 0) wacEndGame();
    }, 1000);

    wacScheduleSpawn();
}

function wacUpdateTimerBar() {
    const bar = document.getElementById('wacTimerBar');
    const lbl = document.getElementById('wacTimeLeft');
    if (!bar || !lbl) return;
    const pct = (wacTimeLeft / 30) * 100;
    bar.style.width = pct + '%';
    bar.className = 'wac-timer-bar' + (pct <= 20 ? ' danger' : pct <= 45 ? ' warning' : '');
    lbl.textContent = wacTimeLeft + 's';
}

// ─── Spawning ────────────────────────────────────────────────────────────────

function wacScheduleSpawn() {
    if (!wacIsPlaying) return;
    const s = wacSpec();
    const delay = s.spawnMin + Math.random() * (s.spawnMax - s.spawnMin);
    wacSpawnTimeout = setTimeout(wacSpawnCapy, delay);
}

function wacApplySpriteFrame(spriteEl, type, frame) {
    const sc = WAC_SCALE;
    // row 0 = idle: Y offset = 0; X offset = frame * width * scale
    spriteEl.style.backgroundPosition = `-${frame * type.w * sc}px 0px`;
}

function wacSpawnCapy() {
    if (!wacIsPlaying) return;
    const s = wacSpec();

    // Pick a free (down) hole
    const down = [];
    for (let i = 0; i < s.holes; i++) {
        const h = document.getElementById('wacHole' + i);
        if (h && !h.classList.contains('up') && !h.classList.contains('hit')) down.push(i);
    }
    if (!down.length) { wacScheduleSpawn(); return; }

    const idx  = down[Math.floor(Math.random() * down.length)];
    const hole = document.getElementById('wacHole' + idx);
    const sp   = document.getElementById('wacSprite' + idx);
    if (!hole || !sp) { wacScheduleSpawn(); return; }

    // Pick random capybara type
    const typeIdx = Math.floor(Math.random() * wacCapyTypes.length);
    const type    = wacCapyTypes[typeIdx];
    const sc      = WAC_SCALE;

    wacHoleStates[idx].typeIdx = typeIdx;
    wacHoleStates[idx].frame   = 0;

    // Style the sprite (2× scaled spritesheet, idle row = 0)
    sp.style.width            = (type.w * sc) + 'px';
    sp.style.height           = (type.h * sc) + 'px';
    sp.style.backgroundImage  = `url('${type.src}')`;
    sp.style.backgroundRepeat = 'no-repeat';
    sp.style.backgroundSize   = `${type.sheetW * sc}px ${type.sheetH * sc}px`;
    wacApplySpriteFrame(sp, type, 0);

    // Pop up (CSS transition handles animation)
    hole.classList.add('up');

    // Animate idle frames at ~3fps
    clearInterval(wacHoleStates[idx].frameInterval);
    wacHoleStates[idx].frameInterval = setInterval(() => {
        if (!wacHoleStates[idx]) return;
        wacHoleStates[idx].frame = (wacHoleStates[idx].frame + 1) % type.frames;
        const spEl = document.getElementById('wacSprite' + idx);
        if (spEl) wacApplySpriteFrame(spEl, type, wacHoleStates[idx].frame);
    }, 320);

    // Auto-retract after upTime
    const autoHide = setTimeout(() => {
        const h2 = document.getElementById('wacHole' + idx);
        if (h2 && h2.classList.contains('up') && !h2.classList.contains('hit')) {
            wacRetractHole(idx);
        }
    }, s.upTime);
    wacHoleTimeouts.push(autoHide);

    wacScheduleSpawn();
}

function wacRetractHole(idx) {
    const hole = document.getElementById('wacHole' + idx);
    if (hole) hole.classList.remove('up');
    if (wacHoleStates[idx]) {
        clearInterval(wacHoleStates[idx].frameInterval);
        wacHoleStates[idx].frameInterval = null;
    }
}

// ─── Interaction ─────────────────────────────────────────────────────────────

function wacSpawnStars(holeEl) {
    const icons = ['⭐','✨','💥','🌟','⚡'];
    for (let i = 0; i < 5; i++) {
        const star  = document.createElement('span');
        star.className   = 'wac-star';
        star.textContent = icons[i % icons.length];
        const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const dist  = 24 + Math.random() * 20;
        star.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
        star.style.setProperty('--ty', `${Math.sin(angle) * dist - 10}px`);
        star.style.left      = '50%';
        star.style.top       = '30%';
        star.style.marginLeft = '-0.5em';
        holeEl.appendChild(star);
        setTimeout(() => star.remove(), 560);
    }
}

function wacWhack(idx) {
    if (!wacIsPlaying) return;
    const hole = document.getElementById('wacHole' + idx);
    if (!hole) return;

    if (!hole.classList.contains('up') || hole.classList.contains('hit')) {
        // Miss — red ripple
        hole.classList.add('miss');
        setTimeout(() => hole.classList.remove('miss'), 420);
        return;
    }

    // HIT ✅
    playSound('coin');
    clearInterval(wacHoleStates[idx]?.frameInterval);
    if (wacHoleStates[idx]) wacHoleStates[idx].frameInterval = null;

    hole.classList.remove('up');
    hole.classList.add('hit');

    wacScore++;
    updateAchStat('wacTotalHits', 1);
    const scoreEl = document.getElementById('wacScore');
    if (scoreEl) scoreEl.textContent = wacScore;

    // Floating +1
    const pop = document.createElement('span');
    pop.className   = 'wac-score-pop';
    pop.textContent = '+1';
    hole.appendChild(pop);
    setTimeout(() => pop.remove(), 700);

    // Star burst
    wacSpawnStars(hole);

    // Reset hole after hit animation
    setTimeout(() => hole.classList.remove('hit'), 330);
}

// ─── End & rewards ───────────────────────────────────────────────────────────

function wacEndGame() {
    wacIsPlaying = false;
    clearInterval(wacTimerInterval);
    clearTimeout(wacSpawnTimeout);
    wacHoleTimeouts.forEach(t => clearTimeout(t));
    wacHoleTimeouts = [];
    updateAchStat('wacPlays', 1);
    updateAchStat('wacMaxHits', wacScore, 'max');

    // Clean up all holes
    const s = wacSpec();
    for (let i = 0; i < s.holes; i++) {
        const h = document.getElementById('wacHole' + i);
        if (h) h.classList.remove('up', 'hit', 'miss');
        if (wacHoleStates[i]) {
            clearInterval(wacHoleStates[i].frameInterval);
            wacHoleStates[i].frameInterval = null;
        }
    }

    // Rewards (min 3 hits required)
    const minHits = 3;
    let earned = 0, earnedXP = 0;
    if (wacScore >= minHits) {
        earned   = s.reward + Math.max(0, wacScore - minHits) * 3;
        earnedXP = s.xp;
        seedCoins  += earned;
        guardianXP += earnedXP;
        localStorage.setItem('capy_seeds', seedCoins);
        localStorage.setItem('capy_xpPlay', guardianXP);
        scheduleGameStateSync();
        playSound('success');
        createConfetti();
    } else {
        playSound('click');
    }

    // Show result
    const result     = document.getElementById('wacResult');
    const resultText = document.getElementById('wacResultText');
    const startBtn   = document.getElementById('wacStartBtn');

    if (result && resultText) {
        result.classList.remove('hidden');
        if (wacScore >= minHits) {
            resultText.innerHTML = `Você acertou <strong>${wacScore}</strong> capivaras! +${earned} capins e +${earnedXP} XP 🎉`;
        } else {
            resultText.innerHTML = `Você acertou ${wacScore} vez${wacScore !== 1 ? 'es' : ''}... Precisava de ${minHits} para ganhar! 💪`;
        }
    }

    // Level unlock
    if (wacScore >= s.unlock && wacCurrentLevel < 10) {
        wacCurrentLevel++;
        localStorage.setItem('capy_wac_level', wacCurrentLevel);
        showToast(`Nível ${wacCurrentLevel} desbloqueado! 🔓`, '🦫');
    } else if (wacCurrentLevel >= 10 && wacScore >= s.unlock) {
        showToast('Você é mestre do Bate-Capy! 🏆', '🦫');
    }

    wacUpdateHeaderUI();
    renderApp();

    if (startBtn) {
        startBtn.textContent   = 'JOGAR NOVAMENTE';
        startBtn.style.display = 'block';
    }
}

// ==========================================================================
// SISTEMA DE MISSÕES E MINIJOGOS (NPC INTERACTION SYSTEM)
// ==========================================================================

const npcMissionDialogues = {
    adventurer: {
        text: "Ei! Encontrei um baú antigo trancado na floresta! Preciso de ajuda para abri-lo rápido antes que a chave quebre. Topa?\n\n[Como jogar: Clique ou toque repetidamente na tela o mais rápido possível para encher a barra de força antes que o tempo acabe!]",
        title: "Baú de Relíquias"
    },
    farmer: {
        text: "Olá! A horta está cheia de vegetais prontos para colheita, mas as capivaras vizinhas estão querendo comê-los! Me ajuda na colheita relâmpago?\n\n[Como jogar: Legumes vão brotar na terra e sumir rapidamente. Clique neles para colhê-los antes que desapareçam! Colha a quantidade necessária no tempo limite.]",
        title: "Colheita Relâmpago"
    },
    fisherman: {
        text: "O rio está agitado e os peixes estão muito espertos hoje! Preciso de alguém com bons reflexos para me ajudar com a pescaria de precisão.\n\n[Como jogar: Uma linha de pesca vai oscilar na barra. Clique ou toque na tela exatamente quando o indicador estiver sobre a área verde marcada!]",
        title: "Fisgada de Precisão"
    },
    scientist: {
        text: "Olá, assistente! Estou no meio de um experimento crítico e preciso misturar as poções nas cores corretas. Pode me ajudar no laboratório?\n\n[Como jogar: Misture as cores dos frascos (Vermelho, Azul, Amarelo) para criar a cor alvo exibida na tela. Exemplo: Vermelho + Azul = Roxo!]",
        title: "Laboratório de Poções"
    },
    biologist: {
        text: "Tudo bem? Estou catalogando a fauna da nossa vila, mas os animais se movem muito rápido! Preciso que você identifique o animal alvo rapidamente.\n\n[Como jogar: Observe o animal solicitado no topo da tela e clique na foto correta dele na grade de opções logo abaixo antes do tempo acabar!]",
        title: "Foco na Fauna"
    }
};

function startVillageMissionTimer() {
    // Timer is managed globally in the 1-second interval loop
}

function stopVillageMissionTimer() {
    // Timer is managed globally
}

function checkAndTriggerMission() {
    if (activeMissionNpc) return;
    if (villageNPCs.length === 0) return;
    
    // Escolhe um NPC aleatório
    const randomNpc = villageNPCs[Math.floor(Math.random() * villageNPCs.length)];
    triggerMissionForNpc(randomNpc);
}

function getActiveView() {
    let activeView = 'vila';
    const views = ['home', 'lab', 'vila', 'games', 'album', 'badges'];
    for (const v of views) {
        const el = document.getElementById(v + 'View');
        if (el && !el.classList.contains('hidden')) {
            activeView = v;
            break;
        }
    }
    return activeView;
}

function triggerMissionForNpc(npc) {
    if (activeMissionNpc) {
        const oldAlert = activeMissionNpc.el.querySelector('.npc-mission-alert');
        if (oldAlert) oldAlert.remove();
    }
    
    activeMissionNpc = npc;
    
    const alertEl = document.createElement('div');
    alertEl.className = 'npc-mission-alert';
    alertEl.innerText = '!';
    npc.el.appendChild(alertEl);
    
    if (getActiveView() === 'vila') {
        playSound('siren');
    }
}

function forceVillageMission() {
    if (villageNPCs.length === 0) {
        showToast("Nenhum NPC carregado no mapa!", "⚠️");
        return;
    }
    const randomNpc = villageNPCs[Math.floor(Math.random() * villageNPCs.length)];
    triggerMissionForNpc(randomNpc);
    showToast(`Missão ativada para ${randomNpc.name}! 🦫`, "⚡");
}

function handleNpcClick(npc) {
    if (activeMissionNpc && activeMissionNpc.color === npc.color) {
        openNpcMissionModal(npc);
    }
}

let modalSpriteIntervalId = null;
function startModalSpriteAnimation(npc) {
    if (modalSpriteIntervalId) clearInterval(modalSpriteIntervalId);
    
    let frameIndex = 0;
    const spriteDiv = document.querySelector('#missionNpcSprite .spritesheet-npc-sprite');
    if (!spriteDiv) return;
    
    const width = npc.frameWidth || 33;
    const height = npc.frameHeight || 38;
    const row = 0; // idle
    
    modalSpriteIntervalId = setInterval(() => {
        frameIndex = (frameIndex + 1) % 8;
        spriteDiv.style.backgroundPosition = `-${frameIndex * width}px -${row * height}px`;
    }, 150);
}

function stopModalSpriteAnimation() {
    if (modalSpriteIntervalId) {
        clearInterval(modalSpriteIntervalId);
        modalSpriteIntervalId = null;
    }
}

function openNpcMissionModal(npc) {
    const dialogSpec = npcMissionDialogues[npc.color] || {
        text: "Olá! Preciso de uma ajudinha rápida com uma tarefa da vila. Você pode me ajudar?",
        title: "Eco-Tarefa"
    };
    
    document.getElementById('missionModalTitle').innerText = npc.name;
    document.getElementById('missionModalText').innerText = dialogSpec.text;
    
    const spriteContainer = document.getElementById('missionNpcSprite');
    if (spriteContainer) {
        spriteContainer.innerHTML = `<div class="npc-sprite spritesheet-npc-sprite npc-${npc.color}-sprite" style="background-position: 0px 0px;"></div>`;
        startModalSpriteAnimation(npc);
    }
    
    const startBtn = document.getElementById('missionStartBtn');
    startBtn.onclick = () => {
        closeNpcMissionModal();
        startNpcMinigame(npc);
    };
    
    document.getElementById('npcMissionModal').classList.remove('hidden');
    playSound('siren');
}

function closeNpcMissionModal() {
    document.getElementById('npcMissionModal').classList.add('hidden');
    stopModalSpriteAnimation();
}

let currentMinigameType = '';
function startNpcMinigame(npc) {
    minigameActive = true;
    currentMinigameType = npc.color;
    document.getElementById('minigameArenaArea').innerHTML = '';
    document.getElementById('npcMinigameModal').classList.remove('hidden');
    changeBgm('adventure');
    
    if (npc.color === 'farmer') {
        setupHortaMinigame();
    } else if (npc.color === 'fisherman') {
        setupPescaMinigame();
    } else if (npc.color === 'scientist') {
        setupLabMinigame();
    } else if (npc.color === 'biologist') {
        setupBioMinigame();
    } else {
        setupAdventurerMinigame();
    }
}

function startMinigameTimer(durationSeconds) {
    if (minigameIntervalId) clearInterval(minigameIntervalId);
    
    minigameDuration = durationSeconds;
    minigameTimer = durationSeconds;
    
    const timeBar = document.getElementById('minigameTimeBar');
    if (timeBar) timeBar.style.width = '100%';
    
    minigameIntervalId = setInterval(() => {
        if (!minigameActive) {
            clearInterval(minigameIntervalId);
            return;
        }
        
        minigameTimer -= 0.1;
        const progress = Math.max(0, (minigameTimer / minigameDuration) * 100);
        if (timeBar) timeBar.style.width = `${progress}%`;
        
        if (minigameTimer <= 0) {
            clearInterval(minigameIntervalId);
            endMinigame(false);
        }
    }, 100);
}

function endMinigame(success) {
    minigameActive = false;
    if (minigameIntervalId) {
        clearInterval(minigameIntervalId);
        minigameIntervalId = null;
    }
    
    stopHortaInterval();
    stopPescaAnimation();
    
    document.getElementById('npcMinigameModal').classList.add('hidden');
    changeBgm(getActiveView());
    
    if (success) {
        playSound('success');
        updateAchStat('missionsWon', 1);
        if (currentMinigameType === 'farmer') updateAchStat('hortaWins', 1);
        else if (currentMinigameType === 'fisherman') updateAchStat('pescaWins', 1);
        else if (currentMinigameType === 'scientist') updateAchStat('pocaoWins', 1);
        else if (currentMinigameType === 'biologist') updateAchStat('faunaWins', 1);
        else updateAchStat('bauWins', 1);
        showToast("Você ajudou com sucesso! Escolha sua recompensa.", "🎉");
        openRewardModal();
    } else {
        playSound('error');
        showToast("O tempo acabou! Tente novamente na próxima.", "😢");
        cleanupActiveMission();
    }
}

function openRewardModal() {
    let hasConstruction = false;
    for (let key in villageState.buildings) {
        if (villageState.buildings[key].underConstruction) {
            hasConstruction = true;
            break;
        }
    }
    
    const speedupBtn = document.getElementById('rewardSpeedupBtn');
    const noBuildingsText = document.getElementById('rewardModalNoBuildingsText');
    
    if (speedupBtn) {
        if (hasConstruction) {
            speedupBtn.removeAttribute('disabled');
            if (noBuildingsText) noBuildingsText.classList.add('hidden');
        } else {
            speedupBtn.setAttribute('disabled', 'true');
            if (noBuildingsText) noBuildingsText.classList.remove('hidden');
        }
    }
    
    document.getElementById('npcRewardModal').classList.remove('hidden');
}

function claimMissionReward(type) {
    document.getElementById('npcRewardModal').classList.add('hidden');
    
    if (type === 'coins') {
        playSound('coin');
        seedCoins += 35;
        localStorage.setItem('capy_seeds', seedCoins);
        updateAchStat('seedsTotalEarned', 35);
        showToast("Você recebeu +35 Capins! 💰", "🎉");
    } else if (type === 'speedup') {
        let speededUp = false;
        for (let key in villageState.buildings) {
            const b = villageState.buildings[key];
            if (b.underConstruction) {
                b.constructionEnd -= 900000; // 15 minutos
                speededUp = true;
            }
        }
        if (speededUp) {
            playSound('levelup');
            localStorage.setItem('capy_village_state', JSON.stringify(villageState));
            showToast("Obras aceleradas em 15 minutos! ⚡", "🎉");
        } else {
            playSound('coin');
            seedCoins += 35;
            localStorage.setItem('capy_seeds', seedCoins);
            updateAchStat('seedsTotalEarned', 35);
            showToast("Nenhuma obra em andamento. +35 Capins concedidos! 💰", "🎉");
        }
    }
    
    cleanupActiveMission();
    renderApp();
}

function cleanupActiveMission() {
    if (activeMissionNpc) {
        const alert = activeMissionNpc.el.querySelector('.npc-mission-alert');
        if (alert) alert.remove();
        activeMissionNpc = null;
    }
    nextMissionTimestamp = Date.now() + 180000;
    localStorage.setItem('capy_next_mission_time', nextMissionTimestamp);
}

// ─────────────────────────────────────────────────────────────────────────────
// MINIJOGO 1: HORTA ("Colheita Relâmpago")
// ─────────────────────────────────────────────────────────────────────────────
let hortaIntervalId = null;
let hortaTimeoutIds = [];

function setupHortaMinigame() {
    targetMinigameScore = 8;
    currentMinigameScore = 0;
    
    document.getElementById('minigameTitle').innerText = "Colheita Relâmpago";
    document.getElementById('minigameSubtitle').innerText = "Fazendeira";
    document.getElementById('minigameInstructions').innerText = "Clique rápido nos legumes que brotarem!";
    document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
    
    const arena = document.getElementById('minigameArenaArea');
    let html = '<div class="mg-horta-grid">';
    for (let i = 0; i < 9; i++) {
        html += `
            <div class="mg-soil-patch" onclick="clickHortaVegetable(this)">
                <img class="mg-vegetable" src="eco_veggie_carrot.png" alt="Legume">
            </div>
        `;
    }
    html += '</div>';
    arena.innerHTML = html;
    
    let vegetablePool = ['eco_veggie_carrot.png', 'eco_veggie_potato.png', 'eco_veggie_eggplant.png', 'eco_veggie_tomato.png'];
    let activePatches = new Set();
    
    hortaIntervalId = setInterval(() => {
        if (!minigameActive) return;
        
        const patches = arena.querySelectorAll('.mg-soil-patch');
        if (patches.length === 0) return;
        
        let attempts = 0;
        let randomIndex = Math.floor(Math.random() * 9);
        while (activePatches.has(randomIndex) && attempts < 20) {
            randomIndex = Math.floor(Math.random() * 9);
            attempts++;
        }
        
        if (activePatches.has(randomIndex)) return;
        
        const patch = patches[randomIndex];
        const vegImg = patch.querySelector('.mg-vegetable');
        if (!vegImg) return;
        
        vegImg.src = vegetablePool[Math.floor(Math.random() * vegetablePool.length)];
        vegImg.classList.add('up');
        activePatches.add(randomIndex);
        
        const timeoutId = setTimeout(() => {
            if (vegImg.classList.contains('up')) {
                vegImg.classList.remove('up');
            }
            activePatches.delete(randomIndex);
        }, 800);
        
        hortaTimeoutIds.push(timeoutId);
    }, 450);
    
    startMinigameTimer(12);
}

function clickHortaVegetable(patchEl) {
    if (!minigameActive) return;
    
    const vegImg = patchEl.querySelector('.mg-vegetable');
    if (vegImg && vegImg.classList.contains('up')) {
        vegImg.classList.remove('up');
        playSound('click');
        currentMinigameScore++;
        document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
        
        if (currentMinigameScore >= targetMinigameScore) {
            endMinigame(true);
        }
    }
}

function stopHortaInterval() {
    if (hortaIntervalId) {
        clearInterval(hortaIntervalId);
        hortaIntervalId = null;
    }
    hortaTimeoutIds.forEach(id => clearTimeout(id));
    hortaTimeoutIds = [];
}

// ─────────────────────────────────────────────────────────────────────────────
// MINIJOGO 2: PESCA ("Fisgada de Precisão")
// ─────────────────────────────────────────────────────────────────────────────
let pescaAnimationId = null;
let needlePosition = 0;
let needleDirection = 1;
let needleSpeed = 3.5;
let sweetSpotLeft = 40;
let sweetSpotWidth = 20;

function setupPescaMinigame() {
    targetMinigameScore = 2;
    currentMinigameScore = 0;
    
    document.getElementById('minigameTitle').innerText = "Fisgada de Precisão";
    document.getElementById('minigameSubtitle').innerText = "Pescadora";
    document.getElementById('minigameInstructions').innerText = "Clique quando a agulha vermelha estiver na área verde!";
    document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
    
    const arena = document.getElementById('minigameArenaArea');
    arena.innerHTML = `
        <div class="mg-fishing-container" onclick="clickFishingZone()">
            <div class="mg-water-view">
                <img id="pescaBobber" class="mg-bobber" src="eco_fishing_bobber.png" alt="Boia">
                <img class="mg-fish-shadow" src="eco_fishing_fish.png" alt="Peixe">
            </div>
            <div class="mg-bar-container">
                <div id="fishingSweetSpot" class="mg-sweet-spot" style="left: 40%; width: 20%;"></div>
                <div id="fishingNeedle" class="mg-needle" style="left: 0%;"></div>
            </div>
        </div>
    `;
    
    repositionSweetSpot();
    startPescaAnimation();
    startMinigameTimer(10);
}

function repositionSweetSpot() {
    sweetSpotLeft = Math.floor(Math.random() * 50) + 15;
    sweetSpotWidth = currentMinigameScore === 0 ? 22 : 16;
    
    const spotEl = document.getElementById('fishingSweetSpot');
    if (spotEl) {
        spotEl.style.left = sweetSpotLeft + '%';
        spotEl.style.width = sweetSpotWidth + '%';
    }
}

function startPescaAnimation() {
    stopPescaAnimation();
    
    needlePosition = 0;
    needleDirection = 1;
    
    const needleEl = document.getElementById('fishingNeedle');
    const bobberEl = document.getElementById('pescaBobber');
    
    let lastTime = Date.now();
    
    function tick() {
        if (!minigameActive) return;
        
        const now = Date.now();
        const delta = (now - lastTime) / 16;
        lastTime = now;
        
        needlePosition += needleDirection * needleSpeed * delta;
        if (needlePosition >= 100) {
            needlePosition = 100;
            needleDirection = -1;
        } else if (needlePosition <= 0) {
            needlePosition = 0;
            needleDirection = 1;
        }
        
        if (needleEl) {
            needleEl.style.left = needlePosition + '%';
        }
        
        if (bobberEl) {
            const inZone = needlePosition >= sweetSpotLeft && needlePosition <= (sweetSpotLeft + sweetSpotWidth);
            if (inZone) {
                bobberEl.classList.add('dip');
            } else {
                bobberEl.classList.remove('dip');
            }
        }
        
        pescaAnimationId = requestAnimationFrame(tick);
    }
    
    pescaAnimationId = requestAnimationFrame(tick);
}

function clickFishingZone() {
    if (!minigameActive) return;
    
    const inZone = needlePosition >= sweetSpotLeft && needlePosition <= (sweetSpotLeft + sweetSpotWidth);
    
    if (inZone) {
        playSound('success');
        currentMinigameScore++;
        document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
        
        if (currentMinigameScore >= targetMinigameScore) {
            endMinigame(true);
            return;
        }
        
        stopPescaAnimation();
        
        // Exibir faísca de sucesso no centro da água
        const waterView = document.querySelector('.mg-water-view');
        if (waterView) {
            const spark = document.createElement('div');
            spark.className = "mg-success-spark";
            spark.innerText = "⭐";
            waterView.appendChild(spark);
            setTimeout(() => spark.remove(), 500);
        }
        
        setTimeout(() => {
            if (!minigameActive) return;
            repositionSweetSpot();
            startPescaAnimation();
        }, 600);
    } else {
        playSound('error');
        const bar = document.querySelector('.mg-bar-container');
        if (bar) {
            bar.classList.add('border-red-500');
            setTimeout(() => bar.classList.remove('border-red-500'), 200);
        }
    }
}

function stopPescaAnimation() {
    if (pescaAnimationId) {
        cancelAnimationFrame(pescaAnimationId);
        pescaAnimationId = null;
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// MINIJOGO 3: CIENTISTA ("Laboratório de Poções")
// ─────────────────────────────────────────────────────────────────────────────
let labTargetColor = '';
let labSelectedTubes = [];

const labRecipes = {
    Laranja: { components: ['red', 'yellow'], hex: '#f97316' },
    Verde: { components: ['yellow', 'blue'], hex: '#22c55e' },
    Roxo: { components: ['red', 'blue'], hex: '#a855f7' }
};

function setupLabMinigame() {
    targetMinigameScore = 3;
    currentMinigameScore = 0;
    labSelectedTubes = [];
    
    document.getElementById('minigameTitle').innerText = "Laboratório de Poções";
    document.getElementById('minigameSubtitle').innerText = "Cientista";
    document.getElementById('minigameInstructions').innerText = "Misture duas cores primárias para obter a cor alvo!";
    document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
    
    const arena = document.getElementById('minigameArenaArea');
    arena.innerHTML = `
        <div class="mg-lab-container">
            <div class="mg-potion-target">
                <div id="labPotionLiquid" class="mg-potion-liquid" style="background-color: #cbd5e1;"></div>
                <img class="mg-potion-flask-img" src="eco_lab_flask.png" alt="Frasco">
            </div>
            <div id="labTargetText" class="text-xs font-black uppercase text-purple-950">MISTURE: ...</div>
            <div class="mg-potion-tubes">
                <div id="tube-red" class="mg-tube" onclick="clickLabTube('red')">
                    <div class="mg-beaker"><div class="mg-beaker-liquid mg-beaker-red"></div></div>
                    <span class="text-[8px] font-black uppercase text-gray-500">Vermelho</span>
                </div>
                <div id="tube-yellow" class="mg-tube" onclick="clickLabTube('yellow')">
                    <div class="mg-beaker"><div class="mg-beaker-liquid mg-beaker-yellow"></div></div>
                    <span class="text-[8px] font-black uppercase text-gray-500">Amarelo</span>
                </div>
                <div id="tube-blue" class="mg-tube" onclick="clickLabTube('blue')">
                    <div class="mg-beaker"><div class="mg-beaker-liquid mg-beaker-blue"></div></div>
                    <span class="text-[8px] font-black uppercase text-gray-500">Azul</span>
                </div>
            </div>
        </div>
    `;
    
    generateNextLabColor();
    startMinigameTimer(15);
}

function generateNextLabColor() {
    labSelectedTubes = [];
    document.querySelectorAll('.mg-tube').forEach(el => el.classList.remove('selected'));
    
    const colors = Object.keys(labRecipes);
    labTargetColor = colors[Math.floor(Math.random() * colors.length)];
    
    const targetText = document.getElementById('labTargetText');
    if (targetText) {
        targetText.innerText = "MISTURE: " + labTargetColor;
        targetText.style.color = labRecipes[labTargetColor].hex;
    }
    
    const liquid = document.getElementById('labPotionLiquid');
    if (liquid) {
        liquid.style.backgroundColor = '#cbd5e1';
    }
}

function clickLabTube(color) {
    if (!minigameActive) return;
    
    const tubeEl = document.getElementById('tube-' + color);
    if (!tubeEl) return;
    
    playSound('click');
    
    if (labSelectedTubes.includes(color)) {
        labSelectedTubes = labSelectedTubes.filter(c => c !== color);
        tubeEl.classList.remove('selected');
    } else {
        if (labSelectedTubes.length < 2) {
            labSelectedTubes.push(color);
            tubeEl.classList.add('selected');
        }
    }
    
    if (labSelectedTubes.length === 2) {
        const recipe = labRecipes[labTargetColor];
        const isMatch = recipe.components.every(c => labSelectedTubes.includes(c));
        
        if (isMatch) {
            playSound('success');
            currentMinigameScore++;
            document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
            
            const liquid = document.getElementById('labPotionLiquid');
            if (liquid) {
                liquid.style.backgroundColor = recipe.hex;
            }
            
            if (currentMinigameScore >= targetMinigameScore) {
                setTimeout(() => endMinigame(true), 600);
            } else {
                setTimeout(generateNextLabColor, 600);
            }
        } else {
            playSound('error');
            const targetText = document.getElementById('labTargetText');
            if (targetText) {
                targetText.classList.add('animate-shake');
                setTimeout(() => targetText.classList.remove('animate-shake'), 300);
            }
            setTimeout(() => {
                labSelectedTubes = [];
                document.querySelectorAll('.mg-tube').forEach(el => el.classList.remove('selected'));
            }, 300);
        }
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// MINIJOGO 4: BIÓLOGA ("Foco na Fauna")
// ─────────────────────────────────────────────────────────────────────────────
let bioTargetAnimal = '';
const bioAnimals = [
    { emoji: '🐆', name: 'Jaguatirica' },
    { emoji: '🐒', name: 'Macaco Prego' },
    { emoji: '🦊', name: 'Lobo Guará' },
    { emoji: '🦉', name: 'Coruja' },
    { emoji: '🦎', name: 'Lagarto' },
    { emoji: '🦋', name: 'Borboleta' },
    { emoji: '🦀', name: 'Caranguejo' },
    { emoji: '🦫', name: 'Capivara' },
    { emoji: '🦜', name: 'Arara' },
    { emoji: '🐢', name: 'Tartaruga' }
];

function setupBioMinigame() {
    targetMinigameScore = 4;
    currentMinigameScore = 0;
    
    document.getElementById('minigameTitle').innerText = "Foco na Fauna";
    document.getElementById('minigameSubtitle').innerText = "Bióloga";
    document.getElementById('minigameInstructions').innerText = "Toque na carta do animal solicitado!";
    document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
    
    const arena = document.getElementById('minigameArenaArea');
    arena.innerHTML = `
        <div class="mg-bio-container">
            <div class="mg-bio-target-box">
                <div class="mg-bio-target-label">Localizar:</div>
                <div id="bioTargetText" class="text-xs font-black text-green-900">...</div>
            </div>
            <div id="bioGrid" class="mg-bio-grid">
                <!-- Cards injected here -->
            </div>
        </div>
    `;
    
    generateNextBioPuzzle();
    startMinigameTimer(12);
}

function generateNextBioPuzzle() {
    const targetItem = bioAnimals[Math.floor(Math.random() * bioAnimals.length)];
    bioTargetAnimal = targetItem;
    
    document.getElementById('bioTargetText').innerText = targetItem.name.toUpperCase();
    
    const pool = bioAnimals.filter(a => a.emoji !== targetItem.emoji);
    const shuffledPool = pool.sort(() => 0.5 - Math.random()).slice(0, 5);
    
    const choices = [targetItem, ...shuffledPool];
    const shuffledChoices = choices.sort(() => 0.5 - Math.random());
    
    const gridEl = document.getElementById('bioGrid');
    if (gridEl) {
        let gridHtml = '';
        shuffledChoices.forEach(c => {
            gridHtml += `
                <div class="mg-bio-card" onclick="clickBioCard('${c.emoji}')">
                    <div class="mg-bio-card-photo">${c.emoji}</div>
                    <div class="mg-bio-card-label">${c.name}</div>
                </div>
            `;
        });
        gridEl.innerHTML = gridHtml;
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// MINIJOGO 5: AVENTUREIRA ("Baú de Relíquias")
// ─────────────────────────────────────────────────────────────────────────────
function setupAdventurerMinigame() {
    targetMinigameScore = 15;
    currentMinigameScore = 0;
    
    document.getElementById('minigameTitle').innerText = "Baú de Relíquias";
    document.getElementById('minigameSubtitle').innerText = "Aventureira";
    document.getElementById('minigameInstructions').innerText = "Toque muito rápido no baú para abri-lo!";
    document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
    
    const arena = document.getElementById('minigameArenaArea');
    arena.innerHTML = `
        <div class="mg-chest-container">
            <img id="adventureChest" class="mg-chest" src="mystery_box.png" alt="Baú" onclick="clickAdventurerChest()">
            <div class="mg-tap-bar-container">
                <div id="chestProgressBar" class="mg-tap-bar" style="width: 0%;"></div>
            </div>
        </div>
    `;
    
    startMinigameTimer(8);
}

function clickBioCard(emoji) {
    if (!minigameActive) return;
    
    if (emoji === bioTargetAnimal.emoji) {
        playSound('success');
        currentMinigameScore++;
        document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
        
        if (currentMinigameScore >= targetMinigameScore) {
            endMinigame(true);
        } else {
            generateNextBioPuzzle();
        }
    } else {
        playSound('error');
        generateNextBioPuzzle();
    }
}

function clickAdventurerChest() {
    if (!minigameActive) return;
    
    playSound('click');
    currentMinigameScore++;
    document.getElementById('minigameScore').innerText = currentMinigameScore + "/" + targetMinigameScore;
    
    const chestEl = document.getElementById('adventureChest');
    if (chestEl) {
        chestEl.classList.add('mg-chest-shake');
        setTimeout(() => chestEl.classList.remove('mg-chest-shake'), 120);
    }
    
    const barEl = document.getElementById('chestProgressBar');
    if (barEl) {
        const percent = Math.min(100, (currentMinigameScore / targetMinigameScore) * 100);
        barEl.style.width = percent + '%';
    }
    
    if (currentMinigameScore >= targetMinigameScore) {
        if (chestEl) chestEl.src = "eco_chest_open.png";
        setTimeout(() => endMinigame(true), 600);
    }
}

// ─── Init on DOMContentLoaded ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    wacUpdateHeaderUI();
    wacBuildGrid();
});

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(e => {}));

