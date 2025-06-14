
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('picto-ma-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/pictogramas.html',
        '/ajustes.html',
        '/style.css',
        '/pictogramas-style.css',
        '/ajustes-style.css',
        '/pictogramas.js',
        '/ajustes.js',
        '/manifest.json',
        '/icons/icon-192.png',
        '/icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
