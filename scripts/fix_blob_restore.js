/* Stop Safari showing "WebKitBlobResource error 1." when a backgrounded tab comes back.
 *
 * The error is WebKit's way of saying "this blob's bytes are gone." Two places in this app
 * could hand Safari a blob it will later fail to read, and the reported symptom -- switch to
 * another app, come back, the page is dead -- fits both, so both are fixed here.
 *
 *  1. sw.js, the likelier one. iOS backs every Cache Storage entry with a file on disk and
 *     reclaims those files under storage pressure WITHOUT removing the entry, so the entry
 *     still matches and only the body read fails. Restoring a backgrounded tab is a fresh
 *     navigation; if the network has not come back yet -- which is exactly the moment a
 *     phone wakes -- the service worker answers it from that cache, and the dead body
 *     becomes Safari's error page. Reading the body inside the worker, in a try, converts an
 *     unrecoverable navigation failure into an ordinary response, and a failed read now
 *     drops the entry so the next load repairs itself instead of failing the same way for
 *     ever.
 *
 *  2. The condition PDF download. It builds a blob, points an <a download> at it and clicks
 *     it. When Safari declines to treat that as a download it navigates instead -- and the
 *     tab's URL becomes blob:... . The URL is then revoked four seconds later, so the tab is
 *     already holding a dead URL; restoring it days later can only fail. Opening in a new
 *     tab keeps the app's own tab on a real URL whatever Safari decides to do, and the blob
 *     is now released on pagehide rather than on a four-second timer that can cut off a
 *     slow save.
 *
 * Usage: node scripts/fix_blob_restore.js <index.html> <sw.js>
 */
'use strict';
const fs = require('fs');

const [, , INDEX, SW] = process.argv;
if (!INDEX || !SW) {
  console.error('usage: fix_blob_restore.js <index.html> <sw.js>');
  process.exit(2);
}

function replaceOnce(s, old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error('FAIL %s: found %d occurrences, expected 1', label, parts.length - 1);
    process.exit(1);
  }
  console.log('  ok  ' + label);
  return parts[0] + neu + parts[1];
}

/* ------------------------------------------------------------------ 1. the download */

let idx = fs.readFileSync(INDEX, 'utf8');
const idx0 = idx.length;

idx = replaceOnce(idx,
  `  const blob=new Blob([out],{type:'application/pdf'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');
  a.href=url;a.download=clean(d.name).replace(/[^\\w]+/g,'_').replace(/^_|_$/g,'')+'_RoundsCodex.pdf';
  document.body.appendChild(a);a.click();document.body.removeChild(a);setTimeout(()=>URL.revokeObjectURL(url),4000);`,
  `  const blob=new Blob([out],{type:'application/pdf'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');
  a.href=url;a.download=clean(d.name).replace(/[^\\w]+/g,'_').replace(/^_|_$/g,'')+'_RoundsCodex.pdf';
  /* target=_blank matters on iOS. Safari often ignores the download attribute for a blob and
     NAVIGATES to it instead; without this that navigation happens in the app's own tab, whose
     URL then becomes blob:... . Revoke it -- or just leave the phone alone long enough -- and
     restoring that tab can only fail, which is the "WebKitBlobResource error 1." page. A
     throwaway tab is where iOS shows the PDF and its share sheet anyway. Browsers that do
     honour the download attribute ignore target entirely, so nothing changes for them. */
  a.target='_blank';a.rel='noopener';
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  /* Hold the blob until the page goes away rather than for four seconds: a slow device can
     still be writing the file, and iOS's PDF viewer reads it lazily. */
  var rv=function(){URL.revokeObjectURL(url);window.removeEventListener('pagehide',rv);};
  window.addEventListener('pagehide',rv);setTimeout(rv,300000);`,
  'PDF download cannot strand the app tab on a blob URL');

fs.writeFileSync(INDEX, idx);

/* ------------------------------------------------------------- 2. the service worker */

let sw = fs.readFileSync(SW, 'utf8');
const sw0 = sw.length;

sw = replaceOnce(sw,
  `  // App navigations → always try network first, fall back to cached shell offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html').then(r => r || caches.match(req)))
    );
    return;
  }`,
  `  // App navigations → always try network first, fall back to cached shell offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => cachedShell(req))
    );
    return;
  }`,
  'navigations go through cachedShell()');

sw = replaceOnce(sw,
  `  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req))
  );
});`,
  `  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => readCached(req))
  );
});

/* iOS backs every Cache Storage entry with a file on disk, and reclaims those files under
   storage pressure WITHOUT removing the entry. The entry still matches; only reading its body
   fails. Left alone that surfaces as "WebKitBlobResource error 1." -- Safari's error page when
   it restores a backgrounded tab, finds the network not yet up, and we answer the navigation
   from a cache whose bytes are gone.

   Reading the body here, inside a try, is what makes that recoverable: we hand back a
   memory-backed copy instead of a blob-backed one, and a read that fails deletes the dead
   entry so the next load repairs itself rather than failing identically for ever. */
async function readCached(req, key) {
  const c = await caches.open(CACHE);
  const k = key || req;
  const hit = (await c.match(k)) || (key ? await c.match(req) : undefined);
  if (!hit) return undefined;
  try {
    return new Response(await hit.clone().arrayBuffer(),
      { status: 200, statusText: 'OK', headers: hit.headers });
  } catch (err) {
    try { await c.delete(k); } catch (e) {}
    return undefined;
  }
}

/* A navigation must never resolve to undefined -- that is the error page. If the cached shell
   cannot be read and the network is still down, answer with something that explains itself and
   retries on its own, so a phone that wakes a second before its radio does recovers by itself. */
async function cachedShell(req) {
  const hit = await readCached(req, './index.html');
  if (hit) return hit;
  try { return await fetch(req); } catch (e) {}
  return new Response(OFFLINE_HTML, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

const OFFLINE_HTML = '<!doctype html><meta charset="utf-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  + '<title>Rounds Codex</title>'
  + '<style>html,body{height:100%;margin:0}body{display:grid;place-items:center;padding:24px;'
  + 'background:#050a14;color:#e8eefc;font:600 15px/1.55 -apple-system,BlinkMacSystemFont,'
  + '"Segoe UI",Roboto,sans-serif;text-align:center}h1{font-size:19px;font-weight:800;margin:0 0 8px}'
  + 'p{margin:0 0 18px;color:#93a1bf;font-weight:500}button{font:inherit;font-weight:800;padding:13px 22px;'
  + 'border:0;border-radius:14px;color:#04121c;background:linear-gradient(140deg,#38dcff,#006dff)}</style>'
  + '<div><h1>Rounds Codex is offline</h1>'
  + '<p>Reconnect and it will pick up where it was.</p>'
  + '<button onclick="location.reload()">Try again</button></div>'
  + '<script>addEventListener("online",function(){location.reload();});'
  + 'setTimeout(function(){location.reload();},5000);<\\/script>';
`,
  'asset misses go through readCached(), plus an offline page');

fs.writeFileSync(SW, sw);

console.log('index.html %d -> %d (+%d)   sw.js %d -> %d (+%d)',
  idx0, idx.length, idx.length - idx0, sw0, sw.length, sw.length - sw0);
