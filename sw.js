/* Caderno de Campo GTF Milk: guarda o app no celular para abrir sem sinal. */
// Cada arquivo é guardado com a marca do seu conteúdo (hash). Numa versão nova, o que não mudou é copiado do que já
// está no celular e só o que mudou é baixado (direto do servidor, sem pegar cópia velha guardada pelo navegador).
const VERSION = 'gtf-campo-2026.11.11-1050';
const ASSETS = [["./", "399edd9cea"], ["./app.js", "c4632d7ceb"], ["./bezerra.jpg", "c675bbbf66"], ["./chunks/chunk-2SNLK4DW.js", "dd779be6c4"], ["./chunks/chunk-E765PD3O.js", "ff7334731e"], ["./chunks/chunk-XATEI273.js", "1af68c1f6b"], ["./chunks/jspdf.es.min-FUARO66E.js", "48ed5599c2"], ["./chunks/jspdf.plugin.autotable-3BCRFA2N.js", "264970f08d"], ["./fonts/barlow-latin-400-normal.woff2", "81419bf5ab"], ["./fonts/barlow-latin-500-normal.woff2", "8e986e86d5"], ["./fonts/barlow-latin-600-normal.woff2", "a1e2a2d7d4"], ["./fonts/barlow-latin-700-normal.woff2", "15481e4eab"], ["./fonts/barlow-semi-condensed-latin-500-normal.woff2", "69988ca9d2"], ["./fonts/barlow-semi-condensed-latin-600-normal.woff2", "64a19a7caf"], ["./fonts/barlow-semi-condensed-latin-700-normal.woff2", "d829c77621"], ["./icons/apple-touch-icon.png", "5147d83aea"], ["./icons/favicon-48.png", "97b2c6549b"], ["./icons/icon-192.png", "0162ec0ad1"], ["./icons/icon-512.png", "81e72fb1fc"], ["./icons/icon-maskable-512.png", "b81fc843b5"], ["./index.html", "399edd9cea"], ["./manifest.webmanifest", "320165794a"], ["./og.jpg", "94074f39de"], ["./tiles/t0_0.jpg", "bbbaceff9a"], ["./tiles/t0_1.jpg", "5a69c2b6ea"], ["./tiles/t0_2.jpg", "03508d3683"], ["./tiles/t0_3.jpg", "886c5bd907"], ["./tiles/t0_4.jpg", "77784facc8"], ["./tiles/t1_0.jpg", "404e75a852"], ["./tiles/t1_1.jpg", "068f92a1f8"], ["./tiles/t1_2.jpg", "c93d262cde"], ["./tiles/t1_3.jpg", "6049f34945"], ["./tiles/t1_4.jpg", "9b61872129"], ["./tiles/t2_0.jpg", "b1a6e2174d"], ["./tiles/t2_1.jpg", "930e3b32d6"], ["./tiles/t2_2.jpg", "e1f4abe01b"], ["./tiles/t2_3.jpg", "d24a2479c0"], ["./tiles/t2_4.jpg", "a0f52c676e"], ["./tiles/t3_0.jpg", "628606a7e8"], ["./tiles/t3_1.jpg", "ee4efc406c"], ["./tiles/t3_2.jpg", "bf24e2af15"], ["./tiles/t3_3.jpg", "b7019c8bf3"], ["./tiles/t3_4.jpg", "c731a4bc52"], ["./tiles_hi/h1_6.jpg", "f3188a36e0"], ["./tiles_hi/h5_4.jpg", "12d21e0061"], ["./tiles_hi/h5_5.jpg", "5321587f4a"], ["./tiles_hi/h5_6.jpg", "a0b4ed3721"], ["./tiles_hi/h6_1.jpg", "bcf2ea979b"], ["./tiles_hi/h6_2.jpg", "d43cc4c063"], ["./tiles_hi/h6_3.jpg", "0c6b482b00"], ["./tiles_hi/h6_4.jpg", "90f10c6417"], ["./tiles_hi/h6_5.jpg", "ad61a2144b"], ["./tiles_hi/h6_6.jpg", "cb66a3137c"], ["./tiles_hi/h7_1.jpg", "bb7b71248c"], ["./tiles_hi/h7_2.jpg", "17b0bbbf39"], ["./tiles_hi/h7_3.jpg", "874fc6e2ce"], ["./tiles_hi/h7_4.jpg", "51a06cab0d"], ["./tiles_hi/h7_5.jpg", "370f4f9962"], ["./tiles_hi/h7_6.jpg", "36160d5fa3"], ["./tiles_hi/h8_1.jpg", "c1cb754e14"], ["./tiles_hi/h8_2.jpg", "ae3608b4b6"], ["./tiles_hi/h8_3.jpg", "01c4257c59"], ["./tiles_hi/h8_4.jpg", "4095cd065c"], ["./tiles_hi/h8_5.jpg", "bf9e60fde2"], ["./tiles_hi/h9_3.jpg", "413531e9b8"], ["./tiles_hi/h9_4.jpg", "58bceded7e"]];   // [caminho, marca do conteúdo]
const KEY = {}; for (const [p, h] of ASSETS) KEY[new URL(p, self.location).pathname] = p + '?v=' + h;
const ESSENCIAL = p => p === './' || /\.(html|js|webmanifest)$/.test(p);
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    const old = await Promise.all((await caches.keys()).filter(k => k.startsWith('gtf-campo-') && k !== VERSION).map(k => caches.open(k)));
    const res = await Promise.allSettled(ASSETS.map(async ([p, h]) => {
      const k = p + '?v=' + h;
      if (await c.match(k)) return;
      for (const o of old) { const r = await o.match(k); if (r) { await c.put(k, r); return; } }   // não mudou: reaproveita
      const r = await fetch(p, { cache: 'reload' }); if (!r.ok) throw new Error(p); await c.put(k, r);
    }));
    const falta = ASSETS.filter((a, i) => res[i].status === 'rejected' && ESSENCIAL(a[0]));
    if (falta.length) throw new Error('não baixou: ' + falta.map(a => a[0]).join(', '));   // sem o app inteiro, fica na versão anterior e tenta de novo depois
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('gtf-campo-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// toque na notificação de ocorrência: abre o app (ou traz para frente se já estiver aberto)
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => { const c = cs.find(x => 'focus' in x); return c ? c.focus() : self.clients.openWindow('./'); }));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // o Firebase fala com a rede por conta própria
  const key = req.mode === 'navigate' ? KEY[new URL('./index.html', self.location).pathname] : KEY[url.pathname];
  if (!key) return;
  e.respondWith(caches.open(VERSION).then(c => c.match(key)).then(hit => hit || fetch(req)).catch(() => fetch(req)));
});
