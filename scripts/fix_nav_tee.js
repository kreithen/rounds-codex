/* Stop the service worker teeing the navigation response -- the real cause of Safari's
 * "WebKitBlobResource error 1." on returning to a backgrounded tab.
 *
 * The first attempt at this (scripts/fix_blob_restore.js) hardened the OFFLINE fallback: it
 * buffered cached bodies so a reclaimed Cache Storage file could not kill a navigation. That
 * was a real hazard and is worth keeping, but it was not what Dr. Kreithen was hitting -- the
 * error came back, and the URL bar showed the ordinary site URL, so the navigation was being
 * served by the ONLINE branch:
 *
 *     fetch(req).then(res => {
 *       const copy = res.clone();                       // <-- tees the body
 *       caches.open(CACHE).then(c => c.put('./index.html', copy));
 *       return res;                                     // <-- and returns the other branch
 *     })
 *
 * res.clone() does not copy anything. It tees one stream into two, and both have to be drained
 * for either to finish. One branch goes to the page, the other into Cache Storage. When iOS
 * suspends the tab -- which is precisely what happens when you switch apps -- and then resumes
 * it, that tee can break, and the branch feeding the navigation fails as a blob resource error.
 * The page is dead even though the network and the cache are both fine.
 *
 * The fix is to stop cloning on the path that answers a navigation. Nothing is lost: the shell
 * is already precached in CORE at install time, and CACHE is bumped on every release, so the
 * offline copy is refreshed exactly when index.html changes. The per-navigation rewrite was
 * doing no work that install was not already doing.
 *
 * The asset branch keeps its clone. The pattern is the same, but a broken tee there costs one
 * image, not the whole page, and buffering multi-megabyte gallery PDFs before the browser sees
 * a byte would be a worse trade.
 *
 * Also bumps CACHE, so the corrected worker supersedes the one already installed on phones,
 * and makes the page ask for a worker update on every load so the fix actually lands.
 *
 * Usage: node scripts/fix_nav_tee.js <index.html> <sw.js>
 */
'use strict';
const fs = require('fs');

const [, , INDEX, SW] = process.argv;
if (!INDEX || !SW) { console.error('usage: fix_nav_tee.js <index.html> <sw.js>'); process.exit(2); }

function replaceOnce(s, old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error(`FAIL ${label}: found ${parts.length - 1} occurrences, expected 1`);
    process.exit(1);
  }
  console.log('  ok  ' + label);
  return parts[0] + neu + parts[1];
}

/* ------------------------------------------------------------------ sw.js */

let sw = fs.readFileSync(SW, 'utf8');
const sw0 = sw.length;

const oldCache = (sw.match(/const CACHE = '(rounds-codex-v(\d+))'/) || [])[1];
if (!oldCache) { console.error('FAIL: no CACHE constant in ' + SW); process.exit(1); }
const next = 'rounds-codex-v' + (parseInt(oldCache.split('-v')[1], 10) + 1);

sw = replaceOnce(sw,
  `  // App navigations → always try network first, fall back to cached shell offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => cachedShell(req))
    );
    return;
  }`,
  `  /* App navigations → network first, cached shell offline.
     NOTHING may clone the response we return here. res.clone() does not copy a body, it tees
     one stream into two that must both be drained; with the other branch going into Cache
     Storage, an iOS tab suspend/resume mid-stream can break the tee and kill the branch
     feeding the page. That is Safari's "WebKitBlobResource error 1." on returning to a
     backgrounded tab -- a dead page with a healthy network and a healthy cache.
     The shell is precached in CORE at install and CACHE is bumped every release, so writing
     it again on each navigation was duplicating work install already does. */
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => cachedShell(req)));
    return;
  }`,
  'navigation no longer tees its own response');

sw = replaceOnce(sw, `const CACHE = '${oldCache}'`, `const CACHE = '${next}'`,
                 `CACHE ${oldCache} -> ${next}`);
fs.writeFileSync(SW, sw);

/* ------------------------------------------------------------------ index.html */

let s = fs.readFileSync(INDEX, 'utf8');
const n0 = s.length;

s = replaceOnce(s,
  `if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}`,
  `if('serviceWorker' in navigator){window.addEventListener('load',function(){
  /* update() on every load, not just on register(). A worker that breaks navigation can stop
     the browser ever noticing a newer one, so the fix for a bad worker has to be pulled in by
     the first load that does succeed rather than waiting for Safari's own update check. */
  navigator.serviceWorker.register('sw.js').then(function(r){ try{ r.update(); }catch(e){} }).catch(function(){});
});}`,
  'page asks for a worker update on every load');

fs.writeFileSync(INDEX, s);
console.log(`\nsw.js ${sw0} -> ${sw.length}   index.html ${n0} -> ${s.length}`);
