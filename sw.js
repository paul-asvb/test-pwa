self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('test-pwa').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/index.js',
      'style.css',
      '/images/1.png',
      '/images/2.png',
      '/images/3.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});