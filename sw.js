/* Caderno de Campo GTF Milk: keeps the app on the phone so it opens without signal. */
const VERSION = 'gtf-campo-2026.11.11-0750';
const ASSETS = ["./", "./app.js", "./bezerra.jpg", "./chunks/chunk-2SNLK4DW.js", "./chunks/chunk-E765PD3O.js", "./chunks/chunk-XATEI273.js", "./chunks/jspdf.es.min-FUARO66E.js", "./chunks/jspdf.plugin.autotable-3BCRFA2N.js", "./fonts/barlow-latin-400-normal.woff2", "./fonts/barlow-latin-500-normal.woff2", "./fonts/barlow-latin-600-normal.woff2", "./fonts/barlow-latin-700-normal.woff2", "./fonts/barlow-semi-condensed-latin-500-normal.woff2", "./fonts/barlow-semi-condensed-latin-600-normal.woff2", "./fonts/barlow-semi-condensed-latin-700-normal.woff2", "./icons/apple-touch-icon.png", "./icons/favicon-48.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./index.html", "./manifest.webmanifest", "./og.jpg", "./tiles/t0_0.jpg", "./tiles/t0_1.jpg", "./tiles/t0_2.jpg", "./tiles/t0_3.jpg", "./tiles/t0_4.jpg", "./tiles/t1_0.jpg", "./tiles/t1_1.jpg", "./tiles/t1_2.jpg", "./tiles/t1_3.jpg", "./tiles/t1_4.jpg", "./tiles/t2_0.jpg", "./tiles/t2_1.jpg", "./tiles/t2_2.jpg", "./tiles/t2_3.jpg", "./tiles/t2_4.jpg", "./tiles/t3_0.jpg", "./tiles/t3_1.jpg", "./tiles/t3_2.jpg", "./tiles/t3_3.jpg", "./tiles/t3_4.jpg"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('gtf-campo-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firebase talks to the network on its own
  const key = req.mode === 'navigate' ? './index.html' : req;
  e.respondWith(caches.open(VERSION).then(async cache => {
    const hit = await cache.match(key, { ignoreSearch: true });
    const net = fetch(req).then(res => { if (res && res.ok && res.type === 'basic') cache.put(key, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
