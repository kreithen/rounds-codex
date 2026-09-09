#!/usr/bin/env node
/* strip_service_worker.js <site-root> [--dry-run]
 *
 * Take the service worker out of the NATIVE payload: the registration call in index.html, and
 * sw.js itself. The web build keeps both, and this must never be committed back into it.
 *
 * WHY THIS EXISTS NOW AND NOT FOR iOS v1. On iOS the worker was already inert and nobody had to
 * think about it: WebKit does not run service workers on a custom URL scheme, and the app is
 * served from capacitor://localhost, so register() rejected and the .catch(function(){}) swallowed
 * it. Android is different in exactly the way that matters. Capacitor's Android shell serves from
 * https://localhost -- an ordinary secure origin -- and Bridge.java installs a ServiceWorkerClient
 * that routes the worker's fetches back through WebViewLocalServer (resolveServiceWorkerRequests,
 * on by default). So on Android the worker REGISTERS, ACTIVATES, AND CONTROLS THE PAGE.
 *
 * That buys nothing and costs something real:
 *
 *   - Every byte it caches is already on the device, inside the APK. The worker's entire job on
 *     the web is to survive a bad network; a bundle has no network in the path at all.
 *   - It writes a SECOND COPY of the shell and all seven content files into Cache Storage, in the
 *     WebView's data directory. That is disk the user paid for twice.
 *   - Cache Storage is not cleared by an app update. The worker is network-first with a cache
 *     fallback, and "the network" here is the local server serving the NEW assets -- but any path
 *     where the fetch does not resolve falls back to yesterday's bytes. That is the classic
 *     "updated the app, still see the old content" bug, and it would be reported from a device,
 *     weeks later, by someone who cannot reproduce it on demand.
 *   - sw.js is the single most defect-prone file in this project. WebKitBlobResource error 1
 *     shipped FOUR times out of its navigate branch (see CLAUDE.md). Shipping it into a context
 *     where it does nothing useful is taking on that whole surface for free.
 *
 * DONE FOR BOTH PLATFORMS, not just Android. The iOS payload gets the same treatment because
 * removing something already inert cannot change iOS behaviour, and one payload chain with one
 * outcome is worth more than a platform branch whose two arms are never both tested.
 *
 * WHAT THIS DELIBERATELY DOES NOT DO: it does not inject an unregister() sweep for workers a
 * previous build might have left behind. There are none -- Android v1 is the first Android build,
 * and the shipped iOS build could never register one -- and injecting one would make the verifier's
 * "no registrations" check pass for the wrong reason, measuring the sweep instead of the strip.
 * If a future native build ever does register a worker, the unregister goes in THEN, with the
 * verifier changed to match.
 *
 * Verified by scripts/verify_ios_variant.js, which fails its two service-worker checks against a
 * payload built without this step.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const DRY = process.argv.includes('--dry-run');
if (!ROOT) { console.error('usage: strip_service_worker.js <site-root> [--dry-run]'); process.exit(2); }

const FILE = path.join(ROOT, 'index.html');
const SW = path.join(ROOT, 'sw.js');
let s = fs.readFileSync(FILE, 'utf8');
const before = s.length;

const MARK = 'RC_NO_SERVICE_WORKER';
if (s.includes(MARK)) { console.log('already stripped -- nothing to do'); process.exit(0); }

console.log('--- strip_service_worker.js ---');

/* The registration is one self-contained top-level statement. Anchored on its opening and walked
   to the matching close rather than matched with a regex, because the body contains braces, a
   comment and two nested function expressions, and a lazy regex would stop at the first `}`. */
const OPEN = "if('serviceWorker' in navigator){";
const n = s.split(OPEN).length - 1;
if (n !== 1) {
  console.error(`FAIL: expected exactly 1 occurrence of the registration anchor, found ${n}`);
  process.exit(1);
}
const a = s.indexOf(OPEN);

/* Brace-walked from the `{` that opens the if-body, skipping over string literals, template
   literals, regex-looking slashes and comments -- the same string-aware discipline CLAUDE.md
   requires for surgery on this file. The region is small, but "small" is how the two swallowed
   const declarations got in last time. */
function matchBrace(str, openIdx) {
  let depth = 0, p = openIdx;
  while (p < str.length) {
    const c = str[p];
    if (c === '/' && str[p + 1] === '*') { p = str.indexOf('*/', p + 2) + 2; continue; }
    if (c === '/' && str[p + 1] === '/') { p = str.indexOf('\n', p) + 1; continue; }
    if (c === "'" || c === '"' || c === '`') {
      const q = c; p++;
      while (p < str.length && str[p] !== q) { if (str[p] === '\\') p++; p++; }
      p++; continue;
    }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return p; }
    p++;
  }
  return -1;
}
const braceAt = a + OPEN.length - 1;             // the `{` in `navigator){`
const close = matchBrace(s, braceAt);
if (close < 0) { console.error('FAIL: the registration block does not close'); process.exit(1); }
/* The statement ends at that brace; the newline after it goes too so no blank line is left. */
let end = close + 1;
if (s[end] === '\n') end++;

const block = s.slice(a, end);
/* Assert we are cutting what we think we are, before cutting it. */
for (const m of ["serviceWorker.register('sw.js')", "addEventListener('load'", 'r.update()']) {
  if (!block.includes(m)) { console.error(`FAIL: the block to remove lacks ${m}`); process.exit(1); }
}
/* And that the walk did not run past the statement into the next one. The click delegate that
   follows it is what a slack walk would swallow, and it is what opens every condition page. */
for (const m of ['closest', 'function swipeTo(', "go('detail'"]) {
  if (block.includes(m)) {
    console.error(`FAIL: the block over-ran into following code (found ${m}) -- aborting`);
    process.exit(1);
  }
}
console.log(`  registration block: ${block.length} bytes`);

s = s.slice(0, a) +
    '/* ' + MARK + ": the service-worker registration is removed for the native build.\n" +
    "   Everything it would cache is already in the bundle, and on Android it really does run.\n" +
    '   See scripts/strip_service_worker.js. The web build keeps it -- do not port this back. */\n' +
    s.slice(end);

/* Nothing may still reach for a worker. `navigator.serviceWorker` is read in exactly one other
   place on the web (the registration's own promise chain, inside the block just removed), so any
   survivor here is a caller this script did not know about. */
const stray = (s.match(/navigator\.serviceWorker|serviceWorker\.register/g) || []).length;
if (stray) {
  console.error(`FAIL: ${stray} reference(s) to navigator.serviceWorker survive the removal`);
  s.split('\n').forEach((l, i) => { if (/navigator\.serviceWorker/.test(l)) console.error(`  ${i + 1}: ${l.trim().slice(0, 120)}`); });
  process.exit(1);
}

/* The result must still parse. index.html is code only since the content split, so a broken
   statement here is a blank app rather than a visible error. */
{
  const scripts = [...s.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  let k = 0;
  for (const code of scripts) { if (!code.trim()) continue; try { new Function(code); k++; } catch (e) {
    console.error(`FAIL: an inline <script> no longer parses: ${e.message}`); process.exit(1); } }
  console.log(`  ok    all ${k} inline <script> blocks parse`);
}

/* sw.js goes too. measure_bundle.js resolves it as reachable (it is named by index.html in the
   source tree), so the payload's own sweep would keep it -- it has to be removed here, by name.
   _headers still mentions it at this point in the chain and is dropped by that same sweep. */
const swBytes = fs.existsSync(SW) ? fs.statSync(SW).size : 0;
const others = [];
for (const rel of ['usmle/index.html', 'manifest.webmanifest']) {
  const p = path.join(ROOT, rel);
  if (fs.existsSync(p) && fs.readFileSync(p, 'utf8').includes('sw.js')) others.push(rel);
}
if (others.length) {
  console.error(`FAIL: sw.js is still referenced by ${others.join(', ')} -- removing it would 404`);
  process.exit(1);
}

if (DRY) {
  console.log(`  dry run -- would remove sw.js (${swBytes} bytes) and write index.html`);
  console.log(`index.html: ${before} -> ${s.length} bytes (${s.length - before})`);
  process.exit(0);
}
fs.writeFileSync(FILE, s);
if (swBytes) { fs.rmSync(SW); console.log(`  ok    sw.js removed (${swBytes} bytes)`); }
else console.log('  note: no sw.js in this tree');
console.log(`index.html: ${before} -> ${s.length} bytes (${s.length - before})`);
