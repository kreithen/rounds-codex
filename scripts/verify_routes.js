#!/usr/bin/env node
/**
 * verify_routes.js — the six one-segment routes must agree in FIVE places.
 *
 *   node scripts/verify_routes.js <web-clone> [--manifest <AndroidManifest.xml>]
 *
 * ANDROID-RUNBOOK §7 states the invariant and why it matters: "Any new one-segment route has to be
 * added in five places: the RC_ROOT regex, RC_OPEN_ROUTES, _redirects, the AASA and now here. One
 * omission is a dead link on one platform." Nothing enforced it, and every one of the five fails
 * SILENTLY and differently:
 *
 *   RC_ROOT regex    omission -> <base> becomes that folder, every content/*.json 404s, and the app
 *                    boots to "Content didn't load" with no page error because the loader catches it
 *   RC_OPEN_ROUTES   omission -> the login wall eats the share link; the recipient sees a sign-in
 *                    form instead of the condition. This is what forced the v76 wall removal.
 *   _redirects       omission -> Netlify 404s before the app ever loads
 *   AASA             omission -> the iOS app does not claim the link; Safari opens it instead
 *   intent filter    omission -> the Android app does not claim it; Chrome opens it instead
 *
 * So a missing route never throws. It just quietly stops working on ONE surface, which is the
 * hardest kind of breakage to notice and the easiest to ship.
 *
 * By default the Android side is read from native/android/intent-filters.xml, the canonical source
 * in this repo. Once the Capacitor project exists, point --manifest at the real
 * AndroidManifest.xml so the check measures what actually ships.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const mi = process.argv.indexOf('--manifest');
const MANIFEST = mi > -1 ? process.argv[mi + 1]
                         : path.join(__dirname, '..', 'native', 'android', 'intent-filters.xml');
if (!ROOT) {
  console.error('usage: verify_routes.js <web-clone> [--manifest <AndroidManifest.xml>]');
  process.exit(2);
}

const read = p => fs.readFileSync(p, 'utf8');
const sorted = set => [...set].sort().join(' ');
let failures = 0;
const sources = {};

function record(name, letters, detail) {
  sources[name] = { set: new Set(letters), detail };
}

/* --- 1 & 2: the two regexes in index.html ------------------------------------------------- */
const html = read(path.join(ROOT, 'index.html'));
const OPEN_RE = /RC_OPEN_ROUTES\s*=\s*\/\^\\\/\(([a-z|]+)\)\\\/\//;
const om = html.match(OPEN_RE);
if (om) record('RC_OPEN_ROUTES', om[1].split('|'), om[0].slice(0, 60));
else { console.error('FAIL: RC_OPEN_ROUTES not found in index.html'); failures++; }

/* RC_ROOT is matched by the SHAPE of its regex literal, not by an assignment to a name: the
   declaration has moved between releases and is minified, so anchoring on "RC_ROOT=" is brittle.
   Both route regexes are the same literal, so take the first that is not the RC_OPEN_ROUTES one. */
const lits = [...html.matchAll(/\/\^\\\/\(([a-z|]+)\)\\\/\//g)].map(m => m[1]);
if (lits.length) record('RC_ROOT regex', lits[0].split('|'), `${lits.length} route literal(s) in file`);
else { console.error('FAIL: no route regex literal found in index.html'); failures++; }

/* --- 3: _redirects ------------------------------------------------------------------------ */
const red = read(path.join(ROOT, '_redirects'));
record('_redirects',
  [...red.matchAll(/^\/([a-z])\/\*\s+\/index\.html\s+200/gm)].map(m => m[1]),
  `${red.split('\n').filter(l => l.trim() && !l.startsWith('#')).length} rule line(s)`);

/* --- 4: the AASA -------------------------------------------------------------------------- */
const aasaPath = path.join(ROOT, '.well-known', 'apple-app-site-association');
const aasa = JSON.parse(read(aasaPath));
const comps = (((aasa.applinks || {}).details || [])[0] || {}).components || [];
record('AASA', comps.map(c => (String(c['/'] || '').match(/^\/([a-z])\/\*$/) || [])[1]).filter(Boolean),
  `${comps.length} component(s)`);

/* --- 5: the Android intent filter --------------------------------------------------------- */
const mani = read(MANIFEST);
record('intent filter',
  [...mani.matchAll(/android:pathPrefix\s*=\s*"\/([a-z])\/"/g)].map(m => m[1]),
  path.basename(MANIFEST));

/* --- the comparison ----------------------------------------------------------------------- */
const names = Object.keys(sources);
const ref = sources[names[0]];
console.log('route sets:');
for (const n of names) console.log(`  ${n.padEnd(16)} ${sorted(sources[n].set).padEnd(14)} (${sources[n].detail})`);

for (const n of names.slice(1)) {
  const a = ref.set, b = sources[n].set;
  const missing = [...a].filter(x => !b.has(x));
  const extra   = [...b].filter(x => !a.has(x));
  if (missing.length || extra.length) {
    failures++;
    console.error(`FAIL: ${n} disagrees with ${names[0]}` +
      (missing.length ? ` -- missing ${missing.join(',')}` : '') +
      (extra.length   ? ` -- unexpected ${extra.join(',')}` : ''));
  }
}

/* Android-specific assertions that are not about the route set. */
if (!/android:autoVerify\s*=\s*"true"/.test(mani)) {
  console.error('FAIL: intent filter lacks android:autoVerify="true" -- links open a chooser dialog');
  failures++;
}
const hosts = [...mani.matchAll(/android:host\s*=\s*"([^"]+)"/g)].map(m => m[1]);
const badHosts = hosts.filter(h => h !== 'roundscodex.com');
if (badHosts.length) {
  console.error(`FAIL: intent filter names host(s) other than roundscodex.com: ${badHosts.join(', ')}` +
                ' -- an unverifiable host makes Android abandon the whole filter');
  failures++;
}

if (failures) { console.error(`\n${failures} FAILED`); process.exit(1); }
console.log(`\nall five sources agree on: ${sorted(ref.set)}`);
