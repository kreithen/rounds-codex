#!/usr/bin/env node
/* Plan the Background Assets split: what ships in the app, what ships as asset packs, how big each
 * pack is, and which files go in it.
 *
 * Task #27. The constraint that shapes this is NOT size -- Apple allows 200 asset packs totalling
 * 200 GB per app, against 586 MB of galleries and audio, so any split fits. The constraint is what
 * a student experiences: the app must be useful the moment it opens, the offline claim must survive,
 * and someone with a full phone should be able to take their rotation and not the whole library.
 *
 * THUMBNAILS STAY IN THE APP, and that is the one non-obvious call. They are 47 MB, which looks
 * like the easiest thing to move out -- and moving them breaks the browse surface. The galleries
 * index renders 340 thumbnails at once; if those live in a pack, a reader who has not downloaded it
 * gets an index of grey rectangles and no way to tell what is worth downloading. Thumbs ARE the
 * catalogue, so the catalogue ships with the app and the pages arrive behind it.
 *
 * Packs are cut by condition CATEGORY rather than one-per-gallery. Per-gallery would be 102 packs,
 * each needing its own App Review submission and its own row in App Store Connect, to save a reader
 * a few megabytes they will download anyway. Category is how the library is already organised and
 * how a student already thinks -- "I am on cardiology" -- and it keeps audio with the galleries it
 * belongs beside.
 *
 * Usage: node scripts/plan_asset_packs.js <site-root> [--manifest <out.json>] [--verbose]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const VERBOSE = process.argv.includes('--verbose');
const mAt = process.argv.indexOf('--manifest');
const MANIFEST = mAt > -1 ? process.argv[mAt + 1] : null;
if (!ROOT) { console.error('usage: plan_asset_packs.js <site-root> [--manifest <out.json>] [--verbose]'); process.exit(2); }

const MB = n => (n / 1048576).toFixed(1);
const size = p => { try { return fs.statSync(path.join(ROOT, p)).size; } catch (e) { return null; } };
const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const conditions = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/conditions.json'), 'utf8'));
const galFile = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/galleries.json'), 'utf8'));
const GAL = galFile.galleries || galFile;
const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

/* Audio, read from RC_AUDIO the same way measure_bundle.js does -- both quote styles, and the
   resolved count checked against the declared count so a miss cannot pass as "no audio". */
const audio = new Map();
for (const [, id, a, b] of idx.matchAll(/["'?]([\w-]+)["']?\s*:\s*\{\s*src\s*:\s*(?:'([^']+\.mp3)'|"([^"]+\.mp3)")/g))
  audio.set(id, a || b);
{
  const declared = (idx.match(/src\s*:\s*["'][^"']*\.mp3["']/g) || []).length;
  if (audio.size !== declared) {
    console.error(`FAIL: RC_AUDIO declares ${declared} recordings, parsed ${audio.size}`);
    process.exit(1);
  }
}

const missing = [];
const packs = new Map();                 // category -> {pages:[], audio:[], bytes}
const byId = Object.fromEntries(conditions.map(c => [c.id, c]));

/* DATA order, not GALLERIES key order -- the same rule rcGalOrder() and rcapOrder() use. It does
   not change the totals, but it means a pack's file list is in the order a reader walks it, which
   is the order it should download in. */
for (const c of conditions) {
  const g = GAL[c.id];
  const mp3 = audio.get(c.id);
  if (!g && !mp3) continue;
  const key = c.category;
  const p = packs.get(key) || { pages: [], audio: [], bytes: 0, galleries: 0 };
  if (g) {
    p.galleries++;
    const base = g.base || '';
    for (const im of g.images || []) {
      const rel = base + im.file, b = size(rel);
      if (b === null) { missing.push(rel); continue; }
      p.pages.push({ path: rel, bytes: b }); p.bytes += b;
    }
    /* The gallery PDF goes in its pack too. It is 155 MB across the library and it is a download
       button, not the reading experience -- but a reader offline in a hospital basement who has
       taken this category should still get it, and splitting it out to a separate origin is the
       thing that would put "downloadable PDF" and "works offline" in conflict. */
    const b = size(g.pdf);
    if (g.pdf && b === null) missing.push(g.pdf);
    else if (g.pdf) { p.pages.push({ path: g.pdf, bytes: b }); p.bytes += b; }
  }
  if (mp3) {
    const b = size(mp3);
    if (b === null) missing.push(mp3);
    else { p.audio.push({ path: mp3, bytes: b }); p.bytes += b; }
  }
  packs.set(key, p);
}

if (missing.length) {
  console.error(`FAIL: ${missing.length} referenced file(s) are not on disk, e.g. ${missing.slice(0, 3).join(', ')}`);
  process.exit(1);
}

/* ---- what stays in the app ---------------------------------------------------------------- */
const inApp = [];
for (const id of Object.keys(GAL)) {
  if (id === 'real' || id === 'galleries') continue;
  const g = GAL[id], base = g.base || '';
  for (const im of g.images || []) {
    const rel = base + (im.thumb || '');
    if (im.thumb) { const b = size(rel); if (b !== null) inApp.push(b); }
  }
}
const thumbBytes = inApp.reduce((a, b) => a + b, 0);

/* ---- report -------------------------------------------------------------------------------- */
const rows = [...packs].sort((a, b) => b[1].bytes - a[1].bytes);
const packBytes = rows.reduce((a, [, p]) => a + p.bytes, 0);

console.log(`${rows.length} asset packs, ${MB(packBytes)} MB total`);
console.log(`(Apple allows 200 packs and 200 GB per app, so neither is a constraint here.)\n`);
console.log(`  ${'pack'.padEnd(26)} ${'galleries'.padStart(9)} ${'audio'.padStart(5)} ${'files'.padStart(6)} ${'MB'.padStart(8)}`);
for (const [cat, p] of rows)
  console.log(`  ${('rc-' + slug(cat)).padEnd(26)} ${String(p.galleries).padStart(9)} ${String(p.audio.length).padStart(5)} ` +
              `${String(p.pages.length + p.audio.length).padStart(6)} ${MB(p.bytes).padStart(8)}`);

console.log(`\nlargest pack: ${MB(Math.max(...rows.map(r => r[1].bytes)))} MB` +
            `   median: ${MB(rows.map(r => r[1].bytes).sort((a, b) => a - b)[rows.length >> 1])} MB`);
console.log(`thumbnails kept in the app: ${inApp.length} files, ${MB(thumbBytes)} MB`);

const cats = new Set(conditions.map(c => c.category));
const noPack = [...cats].filter(c => !packs.has(c));
console.log(`\ncategories with no pack (no gallery, no audio): ${noPack.length ? noPack.join(', ') : 'none'}`);

if (VERBOSE) for (const [cat, p] of rows) {
  console.log(`\n-- rc-${slug(cat)}`);
  for (const f of [...p.pages, ...p.audio]) console.log(`   ${MB(f.bytes).padStart(6)} MB  ${f.path}`);
}

if (MANIFEST) {
  const out = {
    note: 'Generated by scripts/plan_asset_packs.js. Pack ids are stable; do not rename one after ' +
          'it has shipped -- a renamed pack is a new pack and every device re-downloads it.',
    inApp: { thumbnails: inApp.length, bytes: thumbBytes },
    packs: rows.map(([cat, p]) => ({
      id: 'rc-' + slug(cat), category: cat, galleries: p.galleries,
      bytes: p.bytes, files: [...p.pages, ...p.audio].map(f => f.path),
    })),
  };
  fs.writeFileSync(MANIFEST, JSON.stringify(out, null, 2));
  console.log(`\nmanifest written: ${MANIFEST}`);
}
