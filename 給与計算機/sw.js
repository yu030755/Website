const CACHE_NAME = 'salary-calculator-v1';
const urlsToCache = [
  './',
  './keisan.html',
  './manifest.json',
  './keisan.png',
];

// インストール時にファイルをキャッシュする
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// リクエスト時にキャッシュを返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // キャッシュがあればそれを返し、なければネットワークから取得する
        return response || fetch(event.request);
      })
  );
});