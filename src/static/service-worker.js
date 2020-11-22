// this.addEventListener('install', function (event) {
//   caches.open('elfin').then(function (cache) {
//     cache.addAll([
//       '/',
//       'main.js',
//       'manifest.json'
//     ]);
//   })
//   this.skipWaiting()
// });

// this.addEventListener('fetch', function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       return response || fetch(event.request);
//     })
//   );
// });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

