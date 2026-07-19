#!/usr/bin/env node
/*
 * Rounds Codex - USMLE question-bank validator
 *
 * Usage:
 *   node scripts/validate.js data/usmle-step1-b1.js --expect 25 [--against data/other.js ...]
 *
 * Checks (errors block; warnings advise):
 *   - file exports exactly one `const USMLE_*` array
 *   - each item has all required keys, non-empty, correct types
 *   - options length 5 and mutually distinct; answer is an integer 0-4
 *   - why length 5 (one rationale per option); exp is substantive
 *   - system / difficulty / anchor drawn from the allowed sets
 *   - batch count matches --expect
 *   - answer-key balance: each letter A-E used 4-6 times per 25
 *   - visual anchors on >= 30% of items
 *   - ids unique within file and against every --against file
 */
const fs = require('fs');
const vm = require('vm');

const SYSTEMS = new Set([
  'General Principles',
  'Immune / Blood & Lymphoreticular',
  'Behavioral Health & Nervous System',
  'Musculoskeletal / Skin',
  'Cardiovascular',
  'Respiratory & Renal/Urinary',
  'Gastrointestinal',
  'Reproductive & Endocrine',
  'Multisystem',
  'Biostatistics & Epidemiology',
  'Social Sciences / Ethics',
]);
const DIFFICULTIES = new Set(['easy', 'moderate', 'hard']);
const ANCHORS = new Set([null, 'lab', 'image', 'ecg', 'table']);
const REQUIRED = ['id', 'system', 'discipline', 'topic', 'difficulty', 'anchor',
  'vignette', 'lead', 'options', 'answer', 'exp', 'why'];

function loadArray(file) {
  const code = fs.readFileSync(file, 'utf8');
  const m = code.match(/const\s+(USMLE_[A-Z0-9_]+)\s*=/);
  if (!m) throw new Error(`${file}: no \`const USMLE_*\` declaration found`);
  const name = m[1];
  const arr = vm.runInNewContext(code + `\n;${name};`, {});
  if (!Array.isArray(arr)) throw new Error(`${file}: ${name} is not an array`);
  return { name, arr };
}

function letter(i) { return ['A', 'B', 'C', 'D', 'E'][i]; }

const args = process.argv.slice(2);
const files = args.filter((a) => !a.startsWith('--'));
const expectIdx = args.indexOf('--expect');
const expect = expectIdx > -1 ? parseInt(args[expectIdx + 1], 10) : null;
const againstIdx = args.indexOf('--against');
const against = againstIdx > -1
  ? args.slice(againstIdx + 1).filter((a) => !a.startsWith('--'))
  : [];

if (files.length === 0) {
  console.error('usage: node scripts/validate.js <file.js> [--expect N] [--against ...]');
  process.exit(2);
}
const target = files[0];

const errors = [];
const warnings = [];

let arr, name;
try {
  ({ arr, name } = loadArray(target));
} catch (e) {
  console.error('FATAL: ' + e.message);
  process.exit(2);
}

// collect ids from --against files for collision checks
const seenIds = new Map(); // id -> source
for (const f of against) {
  try {
    const other = loadArray(f);
    for (const it of other.arr) if (it && it.id) seenIds.set(it.id, f);
  } catch (e) {
    warnings.push(`could not load --against ${f}: ${e.message}`);
  }
}

const letterCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
let anchored = 0;
const localIds = new Set();

arr.forEach((it, idx) => {
  const where = `item #${idx + 1}` + (it && it.id ? ` (${it.id})` : '');
  if (!it || typeof it !== 'object') { errors.push(`${where}: not an object`); return; }
  for (const k of REQUIRED) {
    if (!(k in it)) errors.push(`${where}: missing key "${k}"`);
  }
  if (typeof it.id !== 'string' || !it.id.trim()) errors.push(`${where}: bad id`);
  else {
    if (localIds.has(it.id)) errors.push(`${where}: duplicate id within file`);
    localIds.add(it.id);
    if (seenIds.has(it.id)) errors.push(`${where}: id collides with ${seenIds.get(it.id)}`);
  }
  if (!SYSTEMS.has(it.system)) errors.push(`${where}: system not in blueprint set -> "${it.system}"`);
  if (typeof it.discipline !== 'string' || !it.discipline.trim()) errors.push(`${where}: empty discipline`);
  if (typeof it.topic !== 'string' || !it.topic.trim()) errors.push(`${where}: empty topic`);
  if (!DIFFICULTIES.has(it.difficulty)) errors.push(`${where}: bad difficulty -> "${it.difficulty}"`);
  if (!ANCHORS.has(it.anchor)) errors.push(`${where}: bad anchor -> "${it.anchor}"`);
  if (typeof it.vignette !== 'string' || it.vignette.trim().length < 40) errors.push(`${where}: vignette too short`);
  if (typeof it.lead !== 'string' || !it.lead.trim()) errors.push(`${where}: empty lead-in`);

  if (!Array.isArray(it.options) || it.options.length !== 5) {
    errors.push(`${where}: options must have exactly 5 entries`);
  } else {
    if (it.options.some((o) => typeof o !== 'string' || !o.trim())) errors.push(`${where}: an option is empty`);
    if (new Set(it.options.map((o) => (o || '').trim())).size !== 5) errors.push(`${where}: options are not all distinct`);
  }
  if (!Number.isInteger(it.answer) || it.answer < 0 || it.answer > 4) {
    errors.push(`${where}: answer must be an integer 0-4`);
  } else {
    letterCounts[letter(it.answer)]++;
  }
  if (typeof it.exp !== 'string' || it.exp.trim().length < 40) errors.push(`${where}: exp explanation too short`);
  if (!Array.isArray(it.why) || it.why.length !== 5) {
    errors.push(`${where}: why must have exactly 5 rationales (one per option)`);
  } else if (it.why.some((w) => typeof w !== 'string' || !w.trim())) {
    errors.push(`${where}: a why rationale is empty`);
  } else if (Number.isInteger(it.answer) && it.answer >= 0 && it.answer <= 4) {
    // integrity: only the keyed option's rationale should be marked "Correct"
    it.why.forEach((w, wi) => {
      const marked = /^correct\b/i.test(String(w).trim());
      if (wi === it.answer && !marked) {
        errors.push(`${where}: why[${letter(wi)}] should mark the keyed answer (start with "Correct")`);
      }
      if (wi !== it.answer && marked) {
        errors.push(`${where}: why[${letter(wi)}] is marked "Correct" but ${letter(it.answer)} is the keyed answer`);
      }
    });
  }
  if (it.anchor) anchored++;
});

// batch-level checks
if (expect != null && arr.length !== expect) {
  errors.push(`count mismatch: found ${arr.length}, expected ${expect}`);
}
const n = arr.length;
if (n >= 20) {
  for (const L of ['A', 'B', 'C', 'D', 'E']) {
    if (letterCounts[L] < 4 || letterCounts[L] > 6) {
      warnings.push(`answer-key balance: ${L}=${letterCounts[L]} (target 4-6 per 25)`);
    }
  }
}
const minAnchor = Math.ceil(0.3 * n);
if (anchored < minAnchor) {
  errors.push(`visual anchors: ${anchored}/${n} (< 30%, need >= ${minAnchor})`);
}

// report
console.log(`\nValidated ${name} from ${target}`);
console.log(`  items: ${n}${expect != null ? ' / expected ' + expect : ''}`);
console.log(`  answer key: ` + Object.entries(letterCounts).map(([k, v]) => `${k}:${v}`).join('  '));
console.log(`  anchors: ${anchored}/${n} (min ${minAnchor})`);
if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}):`);
  warnings.forEach((w) => console.log('  ! ' + w));
}
if (errors.length) {
  console.log(`\nERRORS (${errors.length}):`);
  errors.forEach((e) => console.log('  x ' + e));
  console.log('\nFAILED\n');
  process.exit(1);
}
console.log('\nOK - all checks passed\n');
