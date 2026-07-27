#!/usr/bin/env node
/* Point the galleries that never got real thumbnails at a shared gthumbs/ folder.
 *
 * 26 of the 34 galleries were built by the ad-hoc batch pipeline (build_incoming.py /
 * finalize.py), which set thumb === file to halve the number of files the user had to drag
 * into GitHub. That was fine while only ten thumbs rendered at a time; the galleries index
 * renders 340, so it now pulls ~78 MB of full-size page scans to fill fingernail-sized boxes.
 * The same thumb value also feeds the 10-image grid inside each condition gallery, so those
 * pages carry 3 MB each for the same reason.
 *
 * scripts/gen_thumbs.py writes one flat set at site root:  gthumbs/<id>-NN.jpg
 * Flat, because the affected galleries live in three different places — 21 at the root
 * (base ''), five under '<id>-upload/assets/<id>/' from an early upload that nested a level
 * too deep. Pooling them means one upload destination instead of six, and it lets every
 * thumb value be written the same way.
 *
 * Since thumbs are resolved as base + thumb, a non-empty base would prefix the pooled path
 * too. So for those five the prefix moves out of `base` and into each `file` — the same URL
 * is requested for the full image, and `base` becomes '' like everyone else.
 *
 * Galleries that already have real thumb-NN.jpg files (the eight built through
 * build_gallery.py) are left completely alone.
 *
 *   node scripts/repoint_thumbs.js <in.html> <out.html> [--dir gthumbs]
 */
'use strict';
const fs = require('fs');

const [, , IN, OUT, ...rest] = process.argv;
if (!IN || !OUT) { console.error('usage: repoint_thumbs.js <in.html> <out.html> [--dir gthumbs]'); process.exit(1); }
const DIR = (i => i >= 0 ? rest[i + 1] : 'gthumbs')(rest.indexOf('--dir'));

/* Brace matching that skips braces inside JS string literals — the titles contain both. */
function matchBrace(s, start) {
  let depth = 0, quote = null, esc = false;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (esc) { esc = false; continue; }
    if (c === '\\') { esc = true; continue; }
    if (quote) { if (c === quote) quote = null; continue; }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
    if (c === '{') depth++;
    else if (c === '}' && --depth === 0) return i;
  }
  return -1;
}

const html = fs.readFileSync(IN, 'utf8');
const decl = html.indexOf('const GALLERIES=');
if (decl < 0) throw new Error('GALLERIES declaration not found');
const open = html.indexOf('{', decl);
const close = matchBrace(html, open);
if (close < 0) throw new Error('GALLERIES literal is unbalanced');

const src = html.slice(open, close + 1);
const G = (0, eval)('(' + src + ')');
const before = JSON.stringify(G);

let touched = 0, skipped = 0, images = 0;
for (const id of Object.keys(G)) {
  const g = G[id];
  const imgs = g.images || [];
  if (!imgs.length || !imgs.every(im => im.thumb === im.file)) { skipped++; continue; }
  const base = g.base || '';
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].file = base + imgs[i].file;                        // no-op when base is ''
    imgs[i].thumb = DIR + '/' + id + '-' + String(i + 1).padStart(2, '0') + '.jpg';
    images++;
  }
  g.base = '';
  touched++;
}

/* Every full-image URL must still resolve to the same place it did before. */
const after = JSON.parse(before);
for (const id of Object.keys(after)) {
  const g = after[id];
  (g.images || []).forEach((im, i) => {
    const wasURL = (g.base || '') + im.file;
    const nowURL = (G[id].base || '') + G[id].images[i].file;
    if (wasURL !== nowURL) throw new Error(`full-image URL changed for ${id}[${i}]: ${wasURL} -> ${nowURL}`);
    if (im.title !== G[id].images[i].title || im.n !== G[id].images[i].n)
      throw new Error(`metadata changed for ${id}[${i}]`);
  });
  if (Object.keys(g).join() !== Object.keys(G[id]).join()) throw new Error(`key set changed for ${id}`);
}
if (Object.keys(after).join() !== Object.keys(G).join()) throw new Error('gallery order changed');

const out = html.slice(0, open) + JSON.stringify(G) + html.slice(close + 1);
fs.writeFileSync(OUT, out);

console.log(`repointed ${touched} galleries (${images} images) at ${DIR}/`);
console.log(`left alone ${skipped} galleries that already have real thumbnails`);
console.log(`${IN} ${html.length} -> ${OUT} ${out.length} chars`);
