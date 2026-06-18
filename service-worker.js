const CACHE_NAME = 'capivara-v17';
const ASSETS = [
  './',
  './index.html',
  './style.css',
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
  './bld_farm_lvl1.png',
  './bld_farm_lvl2.png',
  './bld_docks_lvl1.png',
  './bld_docks_lvl2.png',
  './bld_lab_lvl1.png',
  './bld_lab_lvl2.png',
  './bld_tower_lvl1.png',
  './bld_tower_lvl2.png',
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
