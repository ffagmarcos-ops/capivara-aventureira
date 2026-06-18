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
        
        // Se estiver na aba da vila e o som estiver habilitado, inicia o som ambiente
        const vilaView = document.getElementById('vilaView');
        if (vilaView && !vilaView.classList.contains('hidden')) {
            startVillageAmbient();
        }
    } catch (e) {}
}

function playSound(type) {
    try {
        if (!audioUnlocked) return;
        initAudio(); if (!audioCtx) return;
        const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination); const now = audioCtx.currentTime;
        if (type === 'click') {
            osc.type = 'sine'; osc.frequency.setValueAtTime(400, now); osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
            gain.gain.setValueAtTime(0.15, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now); osc.stop(now + 0.1);
        } else if (type === 'coin') {
            osc.type = 'sine'; osc.frequency.setValueAtTime(987.77, now); osc.frequency.setValueAtTime(1318.51, now + 0.08);
            gain.gain.setValueAtTime(0.1, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
            osc.start(now); osc.stop(now + 0.35);
        } else if (type === 'success') {
            osc.type = 'triangle'; osc.frequency.setValueAtTime(523.25, now); osc.frequency.setValueAtTime(659.25, now + 0.08); osc.frequency.setValueAtTime(1046.50, now + 0.24);
            gain.gain.setValueAtTime(0.15, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            osc.start(now); osc.stop(now + 0.5);
        } else if (type === 'levelup') {
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(261.63, now); osc.frequency.linearRampToValueAtTime(1046.50, now + 0.6);
            gain.gain.setValueAtTime(0.15, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
            osc.start(now); osc.stop(now + 0.6);
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
    setTimeout(() => { document.getElementById('dailyRewardModal').classList.add('hidden'); showToast("+25 sementes hoje!", "🌟"); renderApp(); }, 300);
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
    { e: '🦟', n: 'Mosquito', o: ['Mosca', 'Mosquito', 'Abelha', 'Libélula'] }
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
        scheduleGameStateSync();
        showToast("Acertou! +15 sementes!", "seed_coin.png"); renderApp(); createConfetti();
        setTimeout(loadSilhouetteGame, 2500);
    } else {
        playSound('click');
        btn.classList.replace('bg-white', 'bg-red-500');
        btn.classList.replace('text-blue-900', 'text-white');
        btn.disabled = true;
    }
}

const memoryEmojis = ['🦋','🐞','🐸','🐢','🐝','🐌'];
let flippedCards = [];
let matchedPairs = 0;
let isMemoryPlaying = false;

function startMemoryGame() {
    playSound('click');
    if (isMemoryPlaying) return;
    isMemoryPlaying = true; matchedPairs = 0; flippedCards = [];
    document.getElementById('memoryStartBtn').style.display = 'none';
    const deck = [...memoryEmojis, ...memoryEmojis].sort(() => 0.5 - Math.random());
    document.getElementById('memoryGameGrid').innerHTML = deck.map(emoji => `
        <div class="memory-card" onclick="flipMemoryCard(this, '${emoji}')">
            <div class="memory-card-inner">
                <div class="memory-front text-2xl">❓</div>
                <div class="memory-back">${emoji}</div>
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
        if (matchedPairs === memoryEmojis.length) {
            playSound('levelup'); seedCoins += 50; guardianXP += 30;
            localStorage.setItem('capy_seeds', seedCoins); localStorage.setItem('capy_xpPlay', guardianXP);
            scheduleGameStateSync();
            showToast("Você ganhou! +50 sementes!", "seed_coin.png"); renderApp(); createConfetti();
            document.getElementById('memoryStartBtn').innerText = "JOGAR NOVAMENTE (+50 sementes)";
            document.getElementById('memoryStartBtn').style.display = 'block';
            isMemoryPlaying = false;
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
        scheduleGameStateSync();
        document.getElementById('quizContainer').innerHTML = `<div class="text-center py-4 bg-green-100 rounded-3xl p-4 border border-green-300 animate-bounce"><span class="text-3xl">🎉 ACERTOU!</span><p class="text-xs text-green-800 font-bold mt-2">+15 <img src="seed_coin.png" class="w-3.5 h-3.5 object-contain inline-block -mt-0.5"> Sementes e 20 XP!</p></div>`;
        showToast("Resposta Certa!", "🎯"); renderApp();
    } else { playSound('click'); showToast("Tente novamente!", "❌"); event.target.closest('button').classList.add('border-red-400', 'bg-red-50'); }
}

function openCloset() { playSound('click'); document.getElementById('closetModal').classList.remove('hidden'); renderCloset(); }
function closeCloset() { playSound('click'); document.getElementById('closetModal').classList.add('hidden'); }

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
    ['head', 'eyes', 'body', 'hand', 'feet'].forEach(slot => {
        const item = accessories.find(a => a.id === equippedAccessories[slot]);
        if (slot === 'feet') {
            const slotEl = document.getElementById('closetSlotFeet');
            if (slotEl) {
                if (item) {
                    if (item.image) {
                        slotEl.innerHTML = `<img src="${item.image}" class="acc-img acc-${item.id} w-full h-full object-contain select-none pointer-events-none">`;
                    } else {
                        slotEl.innerHTML = `<span class="foot-l">${item.emoji}</span><span class="foot-r">${item.emoji}</span>`;
                    }
                } else {
                    slotEl.innerHTML = `<span class="foot-l"></span><span class="foot-r"></span>`;
                }
            }
        } else {
            const layer = document.getElementById('closetSlot' + slot.charAt(0).toUpperCase() + slot.slice(1));
            if (layer) {
                if (item) {
                    if (item.image) {
                        layer.innerHTML = `<img src="${item.image}" class="acc-img acc-${item.id} w-full h-full object-contain select-none pointer-events-none">`;
                    } else {
                        layer.innerText = item.emoji;
                    }
                } else {
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
        scheduleGameStateSync();

        if (authToken) await syncAccessoriesFromApi();
        playSound('success'); showToast("Item comprado!", "🎩"); renderCloset(); renderApp();
    } else showToast("Sementes insuficientes!", "seed_coin.png");
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
        townHall: { level: 1, name: 'Centro da Vila', cost: 100, costMultiplier: 1.5, baseBonus: 0.05, desc: 'Aumenta em 5% a produção de sementes das outras construções.' },
        farm: { level: 0, name: 'Horta de Capim', cost: 50, costMultiplier: 1.4, baseBonus: 1, desc: 'Produz 1 semente/h passivamente.' },
        docks: { level: 0, name: 'Doca de Pesca', cost: 150, costMultiplier: 1.4, baseBonus: 3, desc: 'Produz 3 sementes/h passivamente.' },
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
            showToast(`Sua vila produziu +${Math.floor(offlineGains)} Sementes enquanto esteve fora! 🌾`, "🏡");
        }, 3000);
    }
}

function getBuildingUpgradeCost(key) {
    const b = villageState.buildings[key];
    return Math.floor(b.cost * Math.pow(b.costMultiplier, b.level));
}

function upgradeBuilding(key) {
    const b = villageState.buildings[key];
    const cost = getBuildingUpgradeCost(key);
    if (seedCoins >= cost) {
        playSound('levelup');
        seedCoins -= cost;
        b.level += 1;
        villageState.lastClaimTime = Date.now();
        villageState.unclaimedSeeds = unclaimedSeedsAccumulated;
        localStorage.setItem('capy_seeds', seedCoins);
        localStorage.setItem('capy_village_state', JSON.stringify(villageState));
        showToast(`${b.name} evoluído para Lvl ${b.level}! 🛠️`, "🎉");
        renderApp();
    } else {
        playSound('error');
        showToast("Sementes insuficientes!", "⚠️");
    }
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
        showToast(`Colheu +${claimable} Sementes! 🌾`, "🪙");
        renderApp();
    }
}

// ==========================================================================
// SISTEMA DE NPCs DE CAPIVARAS PASSEADORAS (NATIVE NPCs)
// ==========================================================================
let villageNPCs = [];
let npcIntervalId = null;

const villagePaths = [
    // Rota 1: Prefeitura ➔ Laboratório ➔ Docas
    [
        { x: 48, y: 32 },
        { x: 58, y: 34 },
        { x: 68, y: 40 },
        { x: 74, y: 46 },
        { x: 78, y: 55 }
    ],
    // Rota 2: Horta ➔ Prefeitura
    [
        { x: 22, y: 50 },
        { x: 34, y: 41 },
        { x: 48, y: 32 }
    ],
    // Rota 3: Docas ➔ Torre de Vigia
    [
        { x: 78, y: 55 },
        { x: 81, y: 43 },
        { x: 80, y: 28 }
    ]
];

const npcConfigs = [
    { name: 'Capy Exploradora', color: 'green', role: 'Exploradora', speed: 0.8 },
    { name: 'Capy Pescadora', color: 'blue', role: 'Pescadora', speed: 0.6 },
    { name: 'Capy Jardineira', color: 'red', role: 'Jardineira', speed: 0.9 }
];

function tickNPCs() {
    villageNPCs.forEach(npc => {
        if (npc.state === 'resting' || npc.state === 'working') {
            npc.stateTimer -= 150;
            if (npc.stateTimer <= 0) {
                const currentEndpoint = { x: npc.x, y: npc.y };
                const availablePaths = [];
                
                villagePaths.forEach((path, pIdx) => {
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
                npc.el.className = 'village-npc npc-walk-anim';
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
                npc.el.className = `village-npc ${npc.state === 'resting' ? 'npc-idle-anim' : 'npc-work-anim'}`;
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
            const spriteImg = npc.el.querySelector('.npc-sprite');
            
            if (dy > 0.05) {
                spriteImg.src = `capy_npc_${npc.color}_front.png`;
            } else if (dy < -0.05) {
                spriteImg.src = `capy_npc_${npc.color}_back.png`;
            }
            
            if (dx < 0) {
                spriteContainer.style.transform = 'scaleX(-1)';
            } else if (dx > 0) {
                spriteContainer.style.transform = 'scaleX(1)';
            }
        }
    });
}

function startVillageNPCs() {
    if (npcIntervalId) return;
    
    const container = document.getElementById('villageNPCsContainer');
    if (!container) return;
    
    if (villageNPCs.length === 0) {
        container.innerHTML = '';
        npcConfigs.forEach((cfg, idx) => {
            const pathIdx = idx % villagePaths.length;
            const startNode = villagePaths[pathIdx][0];
            
            const npcEl = document.createElement('div');
            npcEl.className = 'village-npc npc-walk-anim';
            npcEl.style.left = startNode.x + '%';
            npcEl.style.top = startNode.y + '%';
            npcEl.style.zIndex = Math.round(startNode.y * 10);
            
            npcEl.innerHTML = `
                <div class="npc-nametag">${cfg.name} (${cfg.role})</div>
                <div class="npc-sprite-container" style="transition: transform 0.2s;">
                    <img src="capy_npc_${cfg.color}_front.png" class="npc-sprite">
                </div>
            `;
            
            container.appendChild(npcEl);
            
            villageNPCs.push({
                name: cfg.name,
                color: cfg.color,
                role: cfg.role,
                speed: cfg.speed,
                x: startNode.x,
                y: startNode.y,
                pathIndex: pathIdx,
                nodeIndex: 1,
                direction: 1,
                state: 'walking',
                stateTimer: 0,
                el: npcEl
            });
        });
    } else {
        container.innerHTML = '';
        villageNPCs.forEach(npc => {
            container.appendChild(npc.el);
        });
    }
    
    npcIntervalId = setInterval(tickNPCs, 150);
}

function stopVillageNPCs() {
    if (npcIntervalId) {
        clearInterval(npcIntervalId);
        npcIntervalId = null;
    }
}

function focusBuilding(key) {
    const cardEl = document.getElementById(`card-${key}`);
    if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        cardEl.classList.remove('highlight-card');
        void cardEl.offsetWidth; // Forçar reflow para reiniciar animação
        cardEl.classList.add('highlight-card');
    }
}

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
            let spriteLvl = b.level;
            if (key === 'townHall') {
                spriteLvl = Math.min(3, b.level);
            } else {
                spriteLvl = Math.min(2, b.level);
            }
            
            let imgSrc = '';
            if (spriteLvl === 0) {
                imgSrc = 'bld_scaffolding.png';
            } else {
                imgSrc = `bld_${key}_lvl${spriteLvl}.png`;
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
        
        let bonusText = '';
        if (key === 'townHall') {
            bonusText = `Bônus Geral: +${b.level * 5}%`;
        } else if (key === 'farm') {
            bonusText = `Produção: +${b.level * 1} sementes/h`;
        } else if (key === 'docks') {
            bonusText = `Produção: +${b.level * 3} sementes/h`;
        } else if (key === 'lab') {
            bonusText = `XP extra: +${b.level * 10}%`;
        } else if (key === 'tower') {
            bonusText = `Chance Raros: +${b.level * 5}%`;
        }
        
        let nextBonusText = '';
        const nextLvl = b.level + 1;
        if (key === 'townHall') {
            nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 5}%`;
        } else if (key === 'farm') {
            nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 1} sementes/h`;
        } else if (key === 'docks') {
            nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 3} sementes/h`;
        } else if (key === 'lab') {
            nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 10}%`;
        } else if (key === 'tower') {
            nextBonusText = `Lvl ${nextLvl}: +${nextLvl * 5}%`;
        }
        
        const btnClass = canAfford 
            ? 'bg-green-600 hover:bg-green-700 text-white shadow-md cursor-pointer' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed';
            
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
                <button onclick="upgradeBuilding('${key}')" class="px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all btn-bounce ${btnClass} flex items-center gap-1">
                    Melhorar: ${cost} <img src="seed_coin.png" class="w-3.5 h-3.5 object-contain inline-block -mt-0.5 ml-0.5">
                </button>
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
}, 1000);

// Auto save unclaimed seeds every 5 seconds
setInterval(() => {
    if (getVillageProductionRate() > 0) {
        villageState.unclaimedSeeds = unclaimedSeedsAccumulated;
        villageState.lastClaimTime = Date.now();
        localStorage.setItem('capy_village_state', JSON.stringify(villageState));
    }
}, 5000);

window.onload = async () => {
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
    loadSilhouetteGame(); loadEndlessQuiz();
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
    } else {
        stopVillageAmbient();
        stopVillageNPCs();
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

function openCaptureForm() { 
    playSound('click'); 
    if (!localStorage.getItem('capy_cam_accepted')) {
        document.getElementById('cameraWarningModal').classList.remove('hidden');
        document.getElementById('cameraWarningModal').style.display = 'flex';
    } else {
        document.getElementById('captureModal').classList.remove('hidden'); 
    }
}
function acceptCamera() {
    playSound('success'); localStorage.setItem('capy_cam_accepted', 'true');
    scheduleGameStateSync();
    document.getElementById('cameraWarningModal').classList.add('hidden'); document.getElementById('cameraWarningModal').style.display = 'none';
    document.getElementById('captureModal').classList.remove('hidden');
}
function cancelCamera() { playSound('click'); document.getElementById('cameraWarningModal').classList.add('hidden'); document.getElementById('cameraWarningModal').style.display = 'none'; }

function closeCaptureForm() { playSound('click'); document.getElementById('captureModal').classList.add('hidden'); currentPhoto = null; document.getElementById('animalName').value = ''; document.getElementById('animalDescription').value = ''; document.querySelectorAll('.select-pill').forEach(p => p.classList.remove('active')); document.getElementById('imagePreview').innerHTML = `<i class="fas fa-camera text-4xl text-green-200"></i><span class="text-[10px] font-bold text-green-500 mt-2">Subir Foto</span>`; }

function selectOption(type, val, el) {
    playSound('click'); el.parentElement.querySelectorAll('.select-pill').forEach(p => p.classList.remove('active')); el.classList.add('active');
    if (type === 'category') selectedCategory = val; if (type === 'location') selectedLocation = val;
}

function previewImage(input) {
    playSound('click');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas'); let w = img.width, h = img.height;
                if (w > h) { if (w > 600) { h *= 600 / w; w = 600; } } else { if (h > 600) { w *= 600 / h; h = 600; } }
                canvas.width = w; canvas.height = h; canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                currentPhoto = canvas.toDataURL('image/jpeg', 0.7); document.getElementById('imagePreview').innerHTML = `<img src="${currentPhoto}" class="w-full h-full object-cover">`;
            }; img.src = e.target.result;
        }; reader.readAsDataURL(input.files[0]);
    }
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
    if (level > userLevelMemo) { playSound('levelup'); showToast(`SUBIU DE NÍVEL! +50 Sementes`, "👑"); seedCoins += 50; localStorage.setItem('capy_seeds', seedCoins); userLevelMemo = level; localStorage.setItem('capy_level', userLevelMemo); }
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
        scheduleGameStateSync();
        btn.classList.replace('bg-white', 'bg-green-500'); btn.classList.replace('text-orange-800', 'text-white');
        showToast("+5 Sementes!", "💡"); renderApp();
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
                    seedCoins += 150; rewardMsg = "Baú de Ouro! +150 sementes"; icon = "seed_coin.png"; playSound('coin');
                }
            } else if (rand < 0.45) {
                // 30% chance XP
                guardianXP += 200; localStorage.setItem('capy_xpPlay', guardianXP);
                rewardMsg = "Livro Mágico! +200 XP"; icon = "📖"; playSound('success');
            } else {
                // 55% chance refund small
                seedCoins += 25; rewardMsg = "Sementes perdidas. +25 sementes"; icon = "seed_coin.png"; playSound('coin');
            }
            localStorage.setItem('capy_seeds', seedCoins);
            scheduleGameStateSync();
            showToast(rewardMsg, icon); renderCloset(); renderApp();
        }, 500);
    } else {
        showToast("Precisa de 75 sementes!", "mystery_box.png");
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

function updateBadges() {
    const stats = { inseto: 0, ave: 0, mamifero: 0, reptil: 0 }; animals.forEach(a => { if (stats[a.category] !== undefined) stats[a.category]++; });
    const qc = animals.filter(a => a.location === 'quintal').length; const pc = animals.filter(a => a.location === 'parque').length; const ec = animals.filter(a => a.location === 'escola').length;
    const sc = animals.filter(a => a.rarity === 'brilhante').length; const mc = animals.filter(a => a.rarity === 'mitico').length; const prc = animals.filter(a => a.premiumUnlocked).length;
    const level = Math.floor(guardianXP / 100) + 1; const hours = animals.map(a => new Date(a.capturedAt || a.createdEpoch || Date.now()).getHours());
    const morn = hours.filter(h => h >= 5 && h < 9).length; const night = hours.filter(h => h >= 18 || h < 5).length;
    const photo = animals.filter(a => a.photo).length; const bio = stats.inseto > 0 && stats.ave > 0 && stats.mamifero > 0 ? 1 : 0;
    const pAcc = ownedAccessories.length; const aAcc = accessories.length;

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
        { n: 'Guarda-Roupa Cheio', desc: 'Adquiriu todos os itens!', i: '🛍️', u: pAcc >= aAcc, p: `${Math.min(pAcc, aAcc)}/${aAcc}` }
    ];
    document.getElementById('badgesGrid').innerHTML = b.map(x => `<div class="bg-white p-4 rounded-[2.5rem] border-2 transition-all duration-300 ${x.u ? 'border-amber-400 bg-amber-50/30 shadow-md' : 'border-gray-100 opacity-60'} flex flex-col items-center gap-1 text-center"><div class="text-4xl filter ${x.u ? '' : 'grayscale'} mb-1">${x.i}</div><p class="text-[10px] font-black uppercase text-green-950">${x.n}</p><p class="text-[8px] text-gray-400 font-bold leading-tight">${x.desc}</p><div class="mt-2 text-[8px] font-black px-2 py-0.5 rounded-full ${x.u ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-500'}">${x.u ? 'CONQUISTADO! 🎉' : x.p}</div></div>`).join('');
}

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(e => {}));
