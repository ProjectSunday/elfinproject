this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('elfin').then(function (cache) {
      return cache.addAll([
        '/'
      ]);
    })
  );
});

this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js');
}
