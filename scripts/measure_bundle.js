#!/usr/bin/env node
/* What would actually go in the native bundle, and what is the tree carrying that nothing serves.
 *
 * Task #27. Every size figure this project has worked from came from `du` on the whole tree -- 910
 * MB, 383 MB after WebP, and so on. `du` measures the deploy directory, which is not the same thing
 * as the app: the repo is also where uploads landed, where batch zips were kept, and where an older
 * pipeline wrote galleries to the root. Optimising artwork to hit a number, while the tree carries
 * megabytes nothing has ever requested, is the wrong order of work.
 *
 * So this resolves every path the app can ask for -- from galleries.json, RC_AUDIO, sw.js CORE, the
 * content loader, usmle/index.html's script list and the RC_ILLUS <img> registry -- and reports
 * what is referenced, what is not, and what each part would cost in a bundle.
 *
 * Gallery paths are the part worth reading carefully, because two rules disagree and both are
 * right. Images resolve as `base + file` and `base + thumb`, where `base` is NOT uniform across the
 * site -- older galleries carry `assets/<id>/` and newer ones an empty string with the folder in
 * `file`. But `pdf` is root-relative and is NOT resolved through `base`: several galleries have a
 * non-empty base that would break it. Getting that backwards silently marks every PDF unreferenced,
 * which reads like a 163 MB saving that does not exist.
 *
 * NOTHING IS DELETED HERE. It reports; the decision about what a deploy directory should contain is
 * the physician's, and some of what is unreferenced is source material worth keeping in git even
 * though it should not ship.
 *
 * Usage: node scripts/measure_bundle.js <site-root> [--list-unreferenced] [--top N]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const LIST = process.argv.includes('--list-unreferenced');
const topAt = process.argv.indexOf('--top');
const TOP = topAt > -1 ? Number(process.argv[topAt + 1]) : 15;
if (!ROOT) { console.error('usage: measure_bundle.js <site-root> [--list-unreferenced] [--top N]'); process.exit(2); }

const MB = n => (n / 1024 / 1024).toFixed(1) + ' MB';

/* ---- every file on disk ------------------------------------------------------------------ */
const files = new Map();                       // relative posix path -> bytes
(function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git') continue;
    const abs = path.join(dir, e.name), r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) walk(abs, r);
    else if (e.isFile()) files.set(r, fs.statSync(abs).size);
  }
})(ROOT, '');
const total = [...files.values()].reduce((a, b) => a + b, 0);

/* ---- everything the app can request ------------------------------------------------------- */
const referenced = new Map();                  // path -> which resolver claimed it
const claim = (p, why) => {
  if (!p) return;
  const norm = String(p).replace(/^\.?\//, '').split('?')[0].split('#')[0];
  if (files.has(norm) && !referenced.has(norm)) referenced.set(norm, why);
};
const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// the shell and the files Netlify needs
for (const f of ['index.html', 'sw.js', 'manifest.webmanifest', '_headers', '_redirects',
                 'robots.txt', 'version.txt', 'privacy/index.html', 'terms/index.html',
                 'netlify.toml', 'package.json']) claim(f, 'shell');

// content/*.json -- from the loader's own FILES list, not a directory listing, so a file that
// exists but is never fetched shows up as unreferenced rather than being assumed live
{
  const m = idx.match(/FILES\s*=\s*\[([^\]]+)\]/);
  const named = m ? [...m[1].matchAll(/'([^']+)'|"([^"]+)"/g)].map(x => x[1] || x[2]) : [];
  for (const f of named) claim(f.includes('/') ? f : `content/${f}`, 'content loader');
  if (!named.length) console.error('  ! could not read the content loader FILES list');
}

// sw.js CORE precache list
{
  const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
  const m = sw.match(/CORE\s*=\s*\[([\s\S]*?)\]/);
  if (m) for (const [, a, b] of m[1].matchAll(/'([^']+)'|"([^"]+)"/g)) claim(a || b, 'sw CORE');
}

// fonts and icons referenced from the shell
for (const [, p] of idx.matchAll(/['"(]([\w./-]*(?:fonts|icons)\/[\w.-]+\.(?:woff2?|png|svg|ico))['")]/g))
  claim(p, 'font/icon');

// galleries: base+file and base+thumb; pdf is root-relative and NOT through base
{
  const F = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/galleries.json'), 'utf8'));
  const G = F.galleries || F;
  for (const id of Object.keys(G)) {
    if (id === 'real' || id === 'galleries') continue;
    const g = G[id], base = g.base || '';
    for (const im of g.images || []) {
      claim(base + (im.file || ''), 'gallery page');
      claim(base + (im.thumb || ''), 'gallery thumb');
    }
    claim(g.pdf, 'gallery pdf');
  }
}

/* audio: the RC_AUDIO literal's src values. Double quotes, not single -- the first version of this
   matched only '...' and reported assets/audio (184 MB, the largest single thing in the tree) as
   unreferenced, while pricing the "stream the audio" lever at 0.0 MB. Both quote styles now, and
   the count is cross-checked against the entries the literal declares so a silent miss cannot
   recur: a resolver that finds nothing looks exactly like content that is genuinely dead. */
{
  const before = referenced.size;
  for (const [, a, b] of idx.matchAll(/src\s*:\s*(?:'([^']*\.mp3)'|"([^"]*\.mp3)")/g)) claim(a || b, 'audio');
  const found = referenced.size - before;
  const declared = (idx.match(/src\s*:\s*["'][^"']*\.mp3["']/g) || []).length;
  if (found !== declared)
    console.error(`  ! RC_AUDIO declares ${declared} recordings but ${found} resolved to files on disk`);
}

// usmle: the script list index.html declares, plus its own assets, plus RC_ILLUS <img> sources
{
  const uidx = path.join(ROOT, 'usmle/index.html');
  if (fs.existsSync(uidx)) {
    claim('usmle/index.html', 'usmle shell');
    const u = fs.readFileSync(uidx, 'utf8');
    for (const [, p] of u.matchAll(/<script[^>]*src="([^"]+)"/g)) claim('usmle/' + p, 'usmle script');
    for (const [, p] of u.matchAll(/(?:href|src)="([^":]+)"/g))
      if (!/^(https?:|\/\/|#)/.test(p)) claim('usmle/' + p.replace(/^\.?\//, ''), 'usmle asset');
    // RC_ILLUS entries carry <img src="img/<id>.jpg">
    const vm = require('vm');
    const box = { window: {}, document: { addEventListener() {} }, console: { log() {}, warn() {}, error() {} } };
    box.globalThis = box; box.self = box; vm.createContext(box);
    for (const [, p] of u.matchAll(/<script[^>]*src="(illus[^"]+)"/g)) {
      try { vm.runInContext(fs.readFileSync(path.join(ROOT, 'usmle', p), 'utf8'), box, { timeout: 8000 }); }
      catch (e) { console.error(`  ! usmle/${p}: ${e.message}`); }
    }
    const reg = box.window.RC_ILLUS || {};
    for (const k of Object.keys(reg))
      for (const [, src] of String(reg[k]).matchAll(/<img[^>]*src=["']([^"']+)["']/g))
        claim(src.startsWith('usmle/') ? src : 'usmle/' + src.replace(/^\.?\//, ''), 'usmle illustration');
  }
}

/* ---- report -------------------------------------------------------------------------------- */
const byWhy = new Map();
for (const [p, why] of referenced) {
  const e = byWhy.get(why) || { n: 0, bytes: 0 };
  e.n++; e.bytes += files.get(p); byWhy.set(why, e);
}
const refBytes = [...byWhy.values()].reduce((a, e) => a + e.bytes, 0);

console.log(`tree: ${files.size} files, ${MB(total)}\n`);
console.log('REFERENCED BY THE APP');
for (const [why, e] of [...byWhy].sort((a, b) => b[1].bytes - a[1].bytes))
  console.log(`  ${why.padEnd(20)} ${String(e.n).padStart(5)} files  ${MB(e.bytes).padStart(9)}`);
console.log(`  ${'TOTAL'.padEnd(20)} ${String(referenced.size).padStart(5)} files  ${MB(refBytes).padStart(9)}`);

const unref = [...files].filter(([p]) => !referenced.has(p)).sort((a, b) => b[1] - a[1]);
const unrefBytes = unref.reduce((a, [, b]) => a + b, 0);
console.log(`\nNOT REFERENCED  ${unref.length} files  ${MB(unrefBytes)}  (${(unrefBytes / total * 100).toFixed(0)}% of the tree)`);

/* Grouped by top-level directory, because that is the unit anyone would actually act on. */
const groups = new Map();
for (const [p, b] of unref) {
  const key = p.includes('/') ? p.split('/')[0] + '/' : (p.match(/\.(\w+)$/) ? `*.${p.match(/\.(\w+)$/)[1]} (root)` : p);
  const e = groups.get(key) || { n: 0, bytes: 0 };
  e.n++; e.bytes += b; groups.set(key, e);
}
for (const [k, e] of [...groups].sort((a, b) => b[1].bytes - a[1].bytes).slice(0, TOP))
  console.log(`  ${k.padEnd(34)} ${String(e.n).padStart(5)} files  ${MB(e.bytes).padStart(9)}`);

if (LIST) {
  console.log('\nlargest unreferenced files:');
  for (const [p, b] of unref.slice(0, 40)) console.log(`  ${MB(b).padStart(9)}  ${p}`);
}

/* The three levers named in the handoff, priced against what is actually referenced. */
const pick = re => [...referenced].filter(([p]) => re.test(p)).reduce((a, [p]) => a + files.get(p), 0);
const audio = pick(/^assets\/audio\//), pdfs = pick(/\.pdf$/), pages = pick(/^(assets\/)?[\w-]+\/[\w-]+-\d+\.jpe?g$/i);
console.log('\nLEVERS, priced against the referenced set');
console.log(`  audio (stream, do not bundle)      ${MB(audio).padStart(9)}`);
console.log(`  gallery PDFs (resolve remotely)    ${MB(pdfs).padStart(9)}`);
console.log(`  everything else referenced         ${MB(refBytes - audio - pdfs).padStart(9)}`);
console.log(`  -> bundle with both levers pulled  ${MB(refBytes - audio - pdfs).padStart(9)}`);
