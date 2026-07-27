/* Add one gallery to index.html: a GALLERIES entry plus the id in REALGAL.
 *
 * For a gallery whose pages came in as loose images rather than a production PDF, so
 * build_gallery.py (in the medcodex-gallery skill) does not apply. That script is still the
 * right tool when there IS a PDF.
 *
 *   node scripts/add_gallery.js <in.html> <out.html> <id> <dir/> <titles.json>
 *
 * <id> must match a condition in DATA — a gallery whose id has no condition is hidden.
 * <dir/> is where the full images live, e.g. assets/hyperparathyroid/ (trailing slash).
 * <titles.json> is the ten page titles in order, read off the pages themselves.
 *
 * base is left '' with the folder carried in each `file`, matching what repoint_thumbs.js left
 * the other galleries looking like. That is what lets `thumb` point at the shared root-level
 * gthumbs/ folder, since thumbs are resolved as base + thumb.
 */
'use strict';
const fs = require('fs');

const [, , IN, OUT, ID, DIR, TITLES_FILE] = process.argv;
if (!IN || !OUT || !ID || !DIR || !TITLES_FILE) {
  console.error('usage: add_gallery.js <in.html> <out.html> <id> <dir/> <titles.json>');
  process.exit(1);
}
const TITLES = JSON.parse(fs.readFileSync(TITLES_FILE, 'utf8'));

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

let html = fs.readFileSync(IN, 'utf8');

// ---- GALLERIES ---------------------------------------------------------------------------
const decl = html.indexOf('const GALLERIES=');
if (decl < 0) throw new Error('GALLERIES declaration not found');
const open = html.indexOf('{', decl), close = matchBrace(html, open);
const G = (0, eval)('(' + html.slice(open, close + 1) + ')');
if (G[ID]) throw new Error(ID + ' already present');

const cond = html.match(new RegExp('\\{"id":"' + ID + '","name":"([^"]+)"'));
if (!cond) throw new Error('no condition with id ' + ID + ' — the gallery would be hidden');

G[ID] = {
  title: cond[1],
  base: '',
  pdf: DIR + ID + '-gallery.pdf',
  images: TITLES.map((t, i) => {
    const nn = String(i + 1).padStart(2, '0');
    return { n: i + 1, file: `${DIR}${ID}-${nn}.jpg`, thumb: `gthumbs/${ID}-${nn}.jpg`, title: t };
  }),
};
html = html.slice(0, open) + JSON.stringify(G) + html.slice(close + 1);

// ---- REALGAL -----------------------------------------------------------------------------
// Only ids in this set render real artwork; without it the gallery shows placeholders.
const rg = html.match(/REALGAL\s*=\s*new Set\(\s*(\[[^\]]*\])\s*\)/);
if (!rg) throw new Error('REALGAL set not found');
const ids = JSON.parse(rg[1].replace(/'/g, '"'));
if (!ids.includes(ID)) {
  ids.push(ID);
  html = html.replace(rg[0], `REALGAL=new Set(${JSON.stringify(ids)})`);
}

fs.writeFileSync(OUT, html);
console.log(`${ID} -> "${G[ID].title}"  ${G[ID].images.length} images`);
console.log(`galleries ${Object.keys(G).length}  REALGAL ${ids.length}`);
console.log(`${IN} -> ${OUT}`);
