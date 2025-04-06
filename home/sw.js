// Service Worker（簡単なキャッシュ機能付き）
self.addEventListener('install', event => {
  console.log('[Service Worker] Installed');

  event.waitUntil(
    caches.open('my-pwa-cache').then(cache => {
      return cache.addAll([
        './',
	'./homemenu.html',
        './app.png',
	'./カラオケ.png',
	'./bnavi.png',
	'./icons/app.png',
	'./manaba.gif',
	'./予定表.png',
	'./yoko.png',
	'./tate.png',
	'./字数.png',
	'./計算機.png',
	'./恋2.png',
	'./恋.png',
	'./Bu.jpg',
	'./Bun.png',
	'./paiza.jpg',
	'./apple.png',
        // 必要ならJSファイルや画像もここに追加
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // キャッシュにあればそれを返す、なければネットから取得
      return response || fetch(event.request);
    })
  );
});
