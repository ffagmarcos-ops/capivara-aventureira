const CACHE_NAME = 'capivara-v5';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './manifest.json',
  './icon.svg',
  './google-g.svg',
  './forest_background.png',
  './capybara_avatar.png',
  './capybara_mascot.png',
  './splash_capybara.png',
  './seed_coin.png',
  './mystery_box.png',
  './privacy.html',
  './acc_explorer_hat.png',
  './acc_safari_helmet.png',
  './acc_beanie.png',
  './acc_crown.png',
  './acc_glasses.png',
  './acc_sunglasses.png',
  './acc_goggles.png',
  './acc_magnifier.png',
  './acc_compass.png',
  './acc_flashlight.png',
  './acc_net.png',
  './acc_notebook.png',
  './acc_camera.png',
  './acc_walkie_talkie.png',
  './acc_backpack.png',
  './acc_vest.png',
  './acc_lab_coat.png'
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
