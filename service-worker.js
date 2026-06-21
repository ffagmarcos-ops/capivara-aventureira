const CACHE_NAME = 'capivara-v61';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './wood_button.png',
  './musicas/Capybara Village.mp3',
  './eco_mission_badge.png',
  './eco_fishing_fish.png',
  './eco_fishing_bobber.png',
  './eco_veggie_carrot.png',
  './eco_veggie_potato.png',
  './eco_veggie_eggplant.png',
  './eco_veggie_tomato.png',
  './eco_lab_flask.png',
  './eco_chest_open.png',
  './musicas/Sunlit Capybara Square.mp3',
  './musicas/Capybara Quest Rush.mp3',
  './Trees_blowing_wind_river_birds_202606201621.mp4',
  './capybara_adventurer/atlas.webp',
  './capybara_adventurer/atlas.json',
  './farmer_capybara/atlas.webp',
  './farmer_capybara/atlas.json',
  './capybara_fisherman/atlas.webp',
  './capybara_fisherman/atlas.json',
  './capybara_scientist/atlas.webp',
  './capybara_scientist/atlas.json',
  './capybara_biologist/atlas.webp',
  './capybara_biologist/atlas.json',
  './village_cloud.png',
  './capy_npc_green_front.png',
  './capy_npc_green_back.png',
  './capy_npc_blue_front.png',
  './capy_npc_blue_back.png',
  './capy_npc_red_front.png',
  './capy_npc_red_back.png',
  './app.js',
  './data.js',
  './manifest.json',
  './icon.svg',
  './google-g.svg',
  './forest_background.png',
  './capybara_avatar.png',
  './capybara_mascot.png',
  './capybara_mascot_clean.png',
  './capy_set_explorer.png',
  './capy_set_scientist.png',
  './capy_set_wizard.png',
  './capy_set_warrior.png',
  './capy_set_musician.png',
  './splash_capybara.png',
  './seed_coin.png',
  './wac_grass_bg.png',
  './wac_hole.png',
  './mystery_box.png',
  './capy_village.png',
  './privacy.html',
  './acc_explorer_hat.png',
  './acc_safari_helmet.png',
  './acc_beanie.png',
  './acc_crown.png',
  './acc_flower.png',
  './acc_cap.png',
  './acc_wizard.png',
  './acc_headphones.png',
  './acc_glasses.png',
  './acc_sunglasses.png',
  './acc_goggles.png',
  './acc_monocle.png',
  './acc_magnifier.png',
  './acc_compass.png',
  './acc_flashlight.png',
  './acc_net.png',
  './acc_map.png',
  './acc_microscope.png',
  './acc_notebook.png',
  './acc_camera.png',
  './acc_walkie_talkie.png',
  './acc_potion.png',
  './acc_sword.png',
  './acc_guitar.png',
  './acc_backpack.png',
  './acc_vest.png',
  './acc_lab_coat.png',
  './acc_tie.png',
  './acc_scarf.png',
  './acc_boots.png',
  './acc_rain_boots.png',
  './acc_sneakers.png',
  './acc_socks.png',
  './acc_skates.png',
  './capy_village_empty.png',
  './bld_scaffolding.png',
  './bld_townHall_lvl1.png',
  './bld_townHall_lvl2.png',
  './bld_townHall_lvl3.png',
  './bld_townHall_lvl4.png',
  './bld_townHall_lvl5.png',
  './bld_townHall_lvl6.png',
  './bld_townHall_lvl7.png',
  './bld_townHall_lvl8.png',
  './bld_townHall_lvl9.png',
  './bld_townHall_lvl10.png',
  './bld_farm_lvl1.png',
  './bld_farm_lvl2.png',
  './bld_farm_lvl3.png',
  './bld_farm_lvl4.png',
  './bld_farm_lvl5.png',
  './bld_farm_lvl6.png',
  './bld_farm_lvl7.png',
  './bld_farm_lvl8.png',
  './bld_farm_lvl9.png',
  './bld_farm_lvl10.png',
  './bld_docks_lvl1.png',
  './bld_docks_lvl2.png',
  './bld_docks_lvl3.png',
  './bld_docks_lvl4.png',
  './bld_docks_lvl5.png',
  './bld_docks_lvl6.png',
  './bld_docks_lvl7.png',
  './bld_docks_lvl8.png',
  './bld_docks_lvl9.png',
  './bld_docks_lvl10.png',
  './bld_lab_lvl1.png',
  './bld_lab_lvl2.png',
  './bld_lab_lvl3.png',
  './bld_lab_lvl4.png',
  './bld_lab_lvl5.png',
  './bld_lab_lvl6.png',
  './bld_tower_lvl1.png',
  './bld_tower_lvl2.png',
  './bld_tower_lvl3.png',
  './village_stream.ogg',
  './village_birds.ogg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  // Nao intercepta requests externas: evita erro de CSP no service worker.
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // IGNORAR INTERCEPTAÇÃO DE VÍDEOS/ÁUDIOS E RANGE REQUESTS:
  // Navegadores baseados em WebKit (Safari no iOS/macOS) e Chrome utilizam cabeçalhos 'Range' para buscar 
  // arquivos de mídia por partes (chunks). Se o Service Worker tentar responder com caches.match() retornando 
  // uma resposta padrão 200 completa, a reprodução de tags <video> e <audio> falha imediatamente.
  // Ignoramos a interceptação para permitir que essas requisições cheguem diretamente ao backend Express, 
  // que suporta range requests (HTTP 206 Partial Content) nativamente.
  if (request.headers.get('range') || url.pathname.endsWith('.mp4') || url.pathname.endsWith('.ogg')) {
    return;
  }

  event.respondWith(
    caches.match(request).then(response => {
      if (response) return response;

      return fetch(request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const cloned = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, cloned));
        return networkResponse;
      });
    })
  );
});
