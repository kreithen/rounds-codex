/* Swap fonts.googleapis.com for the self-hosted set built by scripts/build_fonts.py.
 *
 * That stylesheet link was the app's only cross-origin request. sw.js skips cross-origin
 * fetches by design, so typography was the one thing it could not cache: offline, the fonts
 * came from the browser's own evictable HTTP cache or not at all. It also put DNS + TLS to
 * two Google hosts in front of first paint, and sent the reader's IP to Google on every cold
 * load -- awkward next to an App Store privacy label of "Data Not Collected".
 *
 * Three edits, plus the service worker:
 *
 *  1. The two preconnects and the stylesheet <link> become a <style id="rc-fonts"> holding
 *     the @font-face block, whose src URLs are relative -- so <base> resolves them on the
 *     site, from a /c/<id> link, and in a native bundle alike.
 *
 *  2. A preload for the two faces first paint actually needs (Inter latin, Oswald latin).
 *     The other four load on demand. `crossorigin` is required even though these are
 *     same-origin: fonts are always fetched in CORS mode, and a preload without it is a
 *     different request from the one the font engine makes, so the file downloads twice.
 *
 *  3. sw.js precaches all six and moves to a new CACHE, so they are genuinely offline and
 *     the old cache's entries go.
 *
 * Usage: node scripts/self_host_fonts.js <index.html> <sw.js> <fonts.css>
 */
'use strict';
const fs = require('fs');

const [, , INDEX, SW, CSS] = process.argv;
if (!INDEX || !SW || !CSS) {
  console.error('usage: self_host_fonts.js <index.html> <sw.js> <fonts.css>');
  process.exit(2);
}

const PRELOAD = ['inter-latin.woff2', 'oswald-latin.woff2'];
const NEW_CACHE = 'rounds-codex-v9';

function replaceOnce(s, old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error(`FAIL ${label}: found ${parts.length - 1} occurrences, expected 1`);
    process.exit(1);
  }
  console.log('  ok  ' + label);
  return parts[0] + neu + parts[1];
}

/* ------------------------------------------------------------------ index.html */

let s = fs.readFileSync(INDEX, 'utf8');
const n0 = s.length;
const css = fs.readFileSync(CSS, 'utf8').trim();

const files = [...css.matchAll(/url\(fonts\/([^)]+)\)/g)].map(m => m[1]);
if (!files.length) { console.error('FAIL: no fonts/ urls in ' + CSS); process.exit(1); }
for (const p of PRELOAD) {
  if (!files.includes(p)) { console.error('FAIL: ' + p + ' is not in ' + CSS); process.exit(1); }
}

const block =
  PRELOAD.map(f => `<link rel="preload" as="font" type="font/woff2" crossorigin `
                 + `href="fonts/${f}">`).join('\n')
  + '\n<style id="rc-fonts">\n' + css + '\n</style>';

s = replaceOnce(s,
  '<link rel="preconnect" href="https://fonts.googleapis.com">'
  + '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
  + '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900'
  + '&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet">',
  block,
  'Google Fonts links -> self-hosted @font-face');

/* Match a real reference, not prose: the @font-face block's own comment names the old host
   to explain why it is gone, and a bare substring check trips over that. */
const leftover = s.match(/https?:\/\/fonts\.(googleapis|gstatic)\.com[^\s"')]*/g);
if (leftover) {
  console.error('FAIL: a reference to Google Fonts survives: ' + leftover.join(', '));
  process.exit(1);
}
console.log('  ok  no request to Google Fonts remains');
fs.writeFileSync(INDEX, s);

/* ------------------------------------------------------------------ sw.js */

let sw = fs.readFileSync(SW, 'utf8');
const sw0 = sw.length;
const oldCache = (sw.match(/const CACHE = '([^']+)'/) || [])[1];
if (!oldCache) { console.error('FAIL: no CACHE constant in ' + SW); process.exit(1); }

sw = replaceOnce(sw, `const CACHE = '${oldCache}'`, `const CACHE = '${NEW_CACHE}'`,
                 `CACHE ${oldCache} -> ${NEW_CACHE}`);

sw = replaceOnce(sw,
  "  './content/nclex.json', './content/or.json', './content/galleries.json',\n"
  + "  './content/resident.json'\n];",
  "  './content/nclex.json', './content/or.json', './content/galleries.json',\n"
  + "  './content/resident.json',\n"
  + "  /* self-hosted since v9. These used to come from fonts.googleapis.com, which the fetch\n"
  + "     handler skips as cross-origin -- so typography was the one thing that was never\n"
  + "     really offline. */\n"
  + files.map(f => `  './fonts/${f}'`).join(',\n') + '\n];',
  `CORE precaches ${files.length} font files`);

fs.writeFileSync(SW, sw);

console.log(`\nindex.html ${n0} -> ${s.length} (+${s.length - n0})   sw.js ${sw0} -> ${sw.length} (+${sw.length - sw0})`);
console.log(`preloaded: ${PRELOAD.join(', ')}`);
console.log(`precached: ${files.join(', ')}`);
