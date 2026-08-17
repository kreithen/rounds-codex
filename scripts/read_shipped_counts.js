#!/usr/bin/env node
/* Read every count the store copy quotes, straight out of a shipped site root.
 *
 * The App Store description, the promotional text, the review notes and eight screenshot captions
 * all quote numbers, and every one of them has been wrong at least once. The pattern is always the
 * same: a document states a count, a later document copies it, and by the time anyone checks, three
 * of them disagree and none matches the app. `app-store-submission-draft.md` said its numbers had
 * been "read out of the shipped content tonight" -- true when written on 2026-08-04, and four of
 * them had moved by the time anyone read the sentence again.
 *
 * So the instruction "re-read them from the shipped content" needs to be something you can run,
 * not something you have to remember how to do. Every number below comes from the JSON or the bank
 * files themselves; nothing is passed in, and there is no table of expected values to drift.
 *
 * A count that cannot be derived is reported as such rather than guessed -- an ERROR line and a
 * non-zero exit, because a silently missing number is how a stale one survives.
 *
 * Usage: node scripts/read_shipped_counts.js <site-root> [--markdown]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const MD = process.argv.includes('--markdown');
if (!ROOT) { console.error('usage: read_shipped_counts.js <site-root> [--markdown]'); process.exit(2); }

const rows = [], problems = [];
const add = (label, value, how) => rows.push([label, value, how]);
const fail = (label, why) => { problems.push(`${label}: ${why}`); rows.push([label, 'ERROR', why]); };

const j = f => JSON.parse(fs.readFileSync(path.join(ROOT, 'content', f), 'utf8'));

/* ---- conditions -------------------------------------------------------------------- */
try {
  const D = j('conditions.json');
  add('conditions', D.length, 'content/conditions.json entries');
  add('condition categories', new Set(D.map(c => c.category)).size, 'distinct .category values');
  const unverified = D.filter(c => c.verified === false);
  add('awaiting review (verified:false)', unverified.length,
      unverified.length ? unverified.map(c => c.id).join(', ') : 'none');
} catch (e) { fail('conditions', e.message); }

/* ---- galleries --------------------------------------------------------------------- */
try {
  const F = j('galleries.json');
  /* The file is {galleries:{...}, real:[...]} -- NOT a flat map of ids, which is what the shape in
     CLAUDE.md's GALLERIES description suggests. Reading it as flat gives "1 gallery" and 0 pages,
     which is what the first version of this script reported. `real` is the list of galleries whose
     artwork actually exists; one not in it renders placeholders, and the store copy is about pages
     a user can look at, so it is the number that belongs in the listing. */
  const G = F.galleries || F;
  const real = F.real || [];
  const ids = Object.keys(G).filter(k => k !== 'real' && k !== 'galleries');
  const shipped = ids.filter(id => real.includes(id));
  add('galleries (total entries)', ids.length, 'keys in content/galleries.json');
  add('galleries (real artwork)', shipped.length, 'entries listed in its `real` array');
  const pages = shipped.reduce((n, id) => n + ((G[id].images || []).length), 0);
  add('illustration pages', pages, 'images[] summed over the real galleries');
  const sizes = new Set(shipped.map(id => (G[id].images || []).length));
  add('pages per gallery', [...sizes].sort((a, b) => a - b).join('/'), 'distinct image counts');
} catch (e) { fail('galleries', e.message); }

/* ---- quizzes ----------------------------------------------------------------------- */
try {
  const Q = j('quizzes.json');
  const ids = Object.keys(Q);
  add('quizzes', ids.length, 'keys in content/quizzes.json');
  add('quiz questions', ids.reduce((n, id) => n + (Q[id].questions || []).length, 0), 'questions[] summed');
  /* "a quiz for every single condition" is a claim in the description, so it is checked rather
     than assumed -- it has been true since 2026-08-08 and a new condition breaks it silently. */
  try {
    const D = j('conditions.json');
    const missing = D.filter(c => !Q[c.id]).map(c => c.id);
    add('conditions with no quiz', missing.length, missing.length ? missing.join(', ') : 'none - the claim holds');
  } catch (e) { /* already reported above */ }
} catch (e) { fail('quizzes', e.message); }

/* ---- drugs, NCLEX, calculators ----------------------------------------------------- */
try { add('drug entries', j('drugs.json').length, 'content/drugs.json entries'); }
catch (e) { fail('drugs', e.message); }
try { add('NCLEX items', j('nclex.json').length, 'content/nclex.json entries'); }
catch (e) { fail('NCLEX', e.message); }
try {
  const C = j('calculators.json');
  add('calculators', Array.isArray(C) ? C.length : Object.keys(C).length, 'content/calculators.json');
} catch (e) { fail('calculators', e.message); }

/* ---- resident entries and clinical guidelines -------------------------------------- */
try {
  const R = j('resident.json');
  const data = R.RES_DATA || R.data || (Array.isArray(R) ? R : null);
  if (!data) throw new Error('cannot find RES_DATA in resident.json');
  add('resident entries', data.length, 'RES_DATA entries');
  add('resident specialties', new Set(data.map(e => e.sec)).size, 'distinct .sec codes');
  /* Guidelines live under a `guidelines` key in resident.json, NOT an eighth content file. */
  const g = R.guidelines || {};
  const specs = Object.keys(g);
  let n = 0;
  for (const s of specs) for (const y of Object.keys(g[s])) n += (g[s][y] || []).length;
  add('guideline entries', n, 'summed over resident.json .guidelines');
  add('guideline specialties', specs.length, 'keys under .guidelines');
} catch (e) { fail('resident/guidelines', e.message); }

/* ---- USMLE ------------------------------------------------------------------------- */
/* LOAD ORDER COMES FROM usmle/index.html, not from readdir(). Both wrong answers this script gave
   on its first run came from guessing it:
 *
 *   - readdir order put usmle-step1-b10.js before -b2.js. Harmless for a total, but it is not the
 *     order the app loads, and the moment anything depends on order that is a silent wrong answer.
 *   - Sorting the illustration files alphabetically put illustrations.js LAST. It is the base
 *     library and it ASSIGNS RC_ILLUS rather than merging into it, so loading it last wiped the
 *     other fourteen files and the script reported 11 illustrated items instead of 231. In
 *     index.html it is first, which is the whole point.
 *
 * So the <script src> list is the authority, and if a file is on disk but not in it, that is worth
 * knowing too -- it is a file the app does not load.
 *
 * The banks declare `const USMLE_STEP1_B1 = [...]`. A top-level const in a vm script goes into the
 * context's LEXICAL scope, which is not a property of the sandbox object, so enumerating the
 * sandbox finds nothing -- the first run reported 0 items across 43 files that had all loaded
 * fine. The name is read from the file's own declaration and then evaluated by name in the same
 * context. */
const vm = require('vm');
function loadOrder(sub) {
  const html = fs.readFileSync(path.join(ROOT, 'usmle', 'index.html'), 'utf8');
  return [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map(m => m[1])
    .filter(src => sub.test(src));
}
function freshBox() {
  const b = { window: {}, document: { addEventListener() {} }, console: { log() {}, warn() {}, error() {} } };
  b.globalThis = b; b.self = b;
  return vm.createContext(b);
}
function runInto(box, rel) {
  const p = path.join(ROOT, 'usmle', rel);
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), box, { timeout: 8000 }); return true; }
  catch (e) { problems.push(`usmle/${rel}: ${e.message}`); return false; }
}

try {
  const order = loadOrder(/^data\//);
  const onDisk = fs.readdirSync(path.join(ROOT, 'usmle', 'data')).filter(f => f.endsWith('.js'));
  const unloaded = onDisk.filter(f => !order.includes('data/' + f));
  add('USMLE bank files', order.length, `<script src> in usmle/index.html` +
      (unloaded.length ? `  [${unloaded.length} on disk but NOT loaded: ${unloaded.join(', ')}]` : ''));
  if (unloaded.length) problems.push(`usmle/data: ${unloaded.length} bank file(s) on disk are never loaded`);

  const count = rels => {
    const box = freshBox();
    let n = 0;
    for (const rel of rels) {
      const src = fs.readFileSync(path.join(ROOT, 'usmle', rel), 'utf8');
      const m = src.match(/^\s*(?:const|let|var)\s+([A-Z][A-Z0-9_]*)\s*=\s*\[/m);
      if (!m) { problems.push(`usmle/${rel}: no top-level bank declaration found`); continue; }
      if (!runInto(box, rel)) continue;
      const len = vm.runInContext(
        `(typeof ${m[1]} !== 'undefined' && Array.isArray(${m[1]})) ? ${m[1]}.length : -1`, box);
      if (len < 0) { problems.push(`usmle/${rel}: ${m[1]} did not evaluate to an array`); continue; }
      n += len;
    }
    return n;
  };
  add('USMLE items', count(order), `summed over ${order.length} bank file(s)`);
  for (const [exam, label] of [['step1', 'Step 1'], ['step2ck', 'Step 2 CK'],
                               ['step3d1', 'Step 3 Day 1'], ['step3d2', 'Step 3 Day 2']]) {
    const rels = order.filter(r => r.includes(`usmle-${exam}-`));
    add(`  ${label}`, count(rels), `${rels.length} bank file(s)`);
  }
} catch (e) { fail('USMLE', e.message); }

/* ---- illustrated USMLE items -------------------------------------------------------- */
try {
  const order = loadOrder(/illus/);
  const box = freshBox();
  for (const rel of order) runInto(box, rel);
  const reg = box.window.RC_ILLUS || box.RC_ILLUS;
  if (!reg) throw new Error('RC_ILLUS not populated');
  const ids = Object.keys(reg);
  add('illustrated USMLE items', ids.length, `RC_ILLUS after ${order.length} file(s) in index.html order`);
  /* An <img> entry is a generated real image; an inline <svg> is a hand-built schematic. The split
     is a claim the copy makes, so it is derived rather than remembered. */
  const real = ids.filter(k => /<img/i.test(String(reg[k])));
  add('  of those, real images', real.length, '<img> rather than inline <svg>');
  add('  of those, schematics', ids.length - real.length, 'inline <svg>');
  const dir = path.join(ROOT, 'usmle', 'img');
  const onDisk = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).length : 0;
  add('  image files on disk', onDisk, 'usmle/img/');
} catch (e) { fail('illustrated USMLE items', e.message); }

/* ---- audio -------------------------------------------------------------------------- */
try {
  const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const m = src.match(/RC_AUDIO\s*=\s*\{/);
  if (!m) throw new Error('RC_AUDIO not found in index.html');
  /* Count its keys by their shape rather than brace-matching the literal: every entry is
     `<id>:{src:...}`, and the ids are quoted or bare identifiers. */
  const start = src.indexOf('{', m.index);
  let depth = 0, end = start, q = null;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (q) { if (c === q && src[i - 1] !== '\\') q = null; continue; }
    if (c === "'" || c === '"' || c === '`') { q = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (!depth) { end = i + 1; break; } }
  }
  const lit = src.slice(start, end);
  const n = (lit.match(/src\s*:/g) || []).length;
  add('audio recordings', n, 'src: entries in the RC_AUDIO literal');
  const dir = path.join(ROOT, 'assets', 'audio');
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => /\.mp3$/i.test(f));
    const bytes = files.reduce((t, f) => t + fs.statSync(path.join(dir, f)).size, 0);
    add('  mp3 files on disk', files.length, `${(bytes / 1024 / 1024).toFixed(0)} MB (some are superseded)`);
  }
} catch (e) { fail('audio recordings', e.message); }

/* ---- report -------------------------------------------------------------------------- */
if (MD) {
  console.log('| count | value | derived from |');
  console.log('|---|---|---|');
  for (const [l, v, h] of rows) console.log(`| ${l} | **${v}** | ${h} |`);
} else {
  const w = Math.max(...rows.map(r => r[0].length));
  for (const [l, v, h] of rows) console.log(`  ${l.padEnd(w)}  ${String(v).padStart(6)}   ${h}`);
}
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  problems.forEach(p => console.error('  ' + p));
  process.exit(1);
}
