self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // هذا الكود يجعل التطبيق يبدو كأنه يعمل "أوفلاين" مما يفعل زر التثبيت
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
