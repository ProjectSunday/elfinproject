this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('elfin').then(function (cache) {
      return cache.addAll([
        '/',
        'main.js',
        'manifest.json',
      ]);
    })
  );
});

this.addEventListener('fetch', function (event) {
  console.log('<serviceworker.js:12> fetch',)
  // console.log('<service-worker.js:13> caches', caches)
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log('<service-worker.js:16> response', response)
      return response || fetch(event.request);
    })
  );
});


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

