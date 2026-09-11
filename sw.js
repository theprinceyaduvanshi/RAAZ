// RAAZ-V24.0 service worker
// RAAZ-V24.0 service worker - network-first so updated app files appear immediately
// Add to Home Screen / Install App support remains enabled
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Basic pass-through, koi caching nahi kar rahe abhi
  event.respondWith(fetch(event.request));
});