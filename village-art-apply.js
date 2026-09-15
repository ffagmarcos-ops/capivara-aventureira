window.CAPY_VILLAGE_ART = window.CAPY_VILLAGE_ART || {};

function villageSpriteLevel(key, level) {
    const n = Math.max(0, Math.min(10, Number(level) || 0));
    if (n === 0) return 0;
    if (key === 'townHall' || key === 'farm') {
        if (n === 1) return 1;
        if (n <= 4) return 2;
        if (n <= 7) return 5;
        return 10;
    }
    if (n <= 2) return 1;
    if (n <= 5) return 3;
    if (n <= 8) return 6;
    return 10;
}

function capyApplyVillageArt() {
    if (typeof villageState === 'undefined' || !villageState.buildings) return;
    for (const key of Object.keys(villageState.buildings)) {
        const b = villageState.buildings[key];
        const el = document.getElementById('visual-' + key);
        if (!el || !b) continue;
        if (b.underConstruction || !b.level) continue;
        const sl = villageSpriteLevel(key, b.level);
        if ((key === 'townHall' || key === 'farm') && sl === 1) continue;
        const raw = window.CAPY_VILLAGE_ART[key + '_' + sl];
        if (!raw) continue;
        const url = raw.indexOf('data:') === 0 ? raw : ('data:image/webp;base64,' + raw);
        el.style.backgroundImage = 'none';
        el.style.backgroundSize = '';
        el.style.backgroundPosition = '';
        el.src = url;
    }
}

function capyInstallVillageArt() {
    if (typeof renderVillage === 'function' && !renderVillage.__capyArt) {
        const orig = renderVillage;
        renderVillage = function () {
            orig.apply(this, arguments);
            capyApplyVillageArt();
        };
        renderVillage.__capyArt = true;
    }
    capyApplyVillageArt();
}

capyInstallVillageArt();
if (document.readyState === 'complete') capyInstallVillageArt();
else window.addEventListener('load', capyInstallVillageArt);
setTimeout(capyInstallVillageArt, 400);
setTimeout(capyInstallVillageArt, 1200);
