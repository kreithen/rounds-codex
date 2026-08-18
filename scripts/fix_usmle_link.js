#!/usr/bin/env node
/* fix_usmle_link.js <site-root>
 *
 * The app navigates to the USMLE module with a DIRECTORY url -- `usmle/` -- in two places: the
 * USMLE PREP button's href, and abGoUsmle(). A web server resolves that to usmle/index.html.
 * Capacitor's WKURLSchemeHandler does not: an unknown path falls back to the ROOT index.html, so
 * tapping USMLE PREP reloaded the main app shell with its base set to /usmle/, every
 * content/*.json 404'd, and the reader got "Content didn't load" with the tab bar still on screen.
 *
 * Reported from the simulator, 2026-08-18. The tell that it was this and not a missing file: the
 * error screen was the MAIN app's, tab bar and all, rather than a 404 or the USMLE page itself.
 * usmle/index.html was in the bundle the whole time.
 *
 * Naming the file explicitly works identically on the website -- usmle/index.html is a perfectly
 * ordinary URL there -- so this is a variant patch only because the web has no need of it.
 *
 * The back link inside usmle/index.html is `../`, which is left alone: the root path is the app's
 * own start URL and the handler serves it correctly.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: fix_usmle_link.js <site-root>'); process.exit(2); }

const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');

if (s.includes("usmle/index.html")) { console.log('already patched -- nothing to do'); process.exit(0); }

const EDITS = [
  ['USMLE PREP button href', 'href="usmle/"', 'href="usmle/index.html"'],
  ['abGoUsmle()', "(window.RC_ROOT||'')+'usmle/'", "(window.RC_ROOT||'')+'usmle/index.html'"],
];

let bad = 0;
for (const [what, from] of EDITS) {
  const n = s.split(from).length - 1;
  if (n !== 1) { console.error(`FAIL: ${what} -- expected exactly 1 occurrence of ${from}, found ${n}`); bad++; }
}
if (bad) process.exit(1);

/* The file it points at has to exist, or this trades a wrong path for a broken one. */
if (!fs.existsSync(path.join(ROOT, 'usmle', 'index.html'))) {
  console.error('FAIL: usmle/index.html is not in this tree');
  process.exit(1);
}

const before = s.length;
console.log('--- fix_usmle_link.js ---');
for (const [what, from, to] of EDITS) { s = s.replace(from, to); console.log(`  ok    ${what}`); }
fs.writeFileSync(FILE, s);
console.log(`index.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
