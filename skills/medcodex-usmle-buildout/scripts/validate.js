#!/usr/bin/env node
/* validate.js — gate a USMLE bank batch before it ships.
 *
 * Usage:
 *   node validate.js path/to/usmle-step1-b13.js [more banks...]
 *   # pass the EXISTING banks too to check cross-file topic/id collisions:
 *   node validate.js new-batch.js data/usmle-step1-b*.js
 *
 * Loads each `const USMLE_*=[...]` bank and enforces the schema. Hard violations
 * (schema/answer-key integrity) exit non-zero so this can gate a build. Answer-key
 * skew and duplicate topics are reported as warnings (judgement calls, not build-breakers).
 *
 * Why this exists: the app renders right/wrong feedback by convention — why[answer]
 * starts "Correct", nothing else does. A second (or missing) "Correct", an answer index
 * out of range, or the wrong option count are all SILENT grading bugs a student can't
 * catch. This script makes them loud.
 */
const fs = require('fs');
const vm = require('vm');

const DIFF = new Set(['easy', 'moderate', 'hard']);
const ANCHOR = new Set([null, 'lab', 'image', 'ecg', 'table']);
const REQ = ['id','system','discipline','topic','difficulty','anchor','vignette','lead','options','answer','exp','why'];
const LETT = ['A','B','C','D','E'];

function loadBank(file) {
  let code = fs.readFileSync(file, 'utf8');
  // capture the single `const USMLE_* =` array without needing it to be a global
  code = code.replace(/const\s+USMLE_[A-Z0-9_]+\s*=/, 'this.__BANK =');
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: file });
  if (!Array.isArray(ctx.__BANK)) throw new Error('no `const USMLE_*=[...]` array found in ' + file);
  return ctx.__BANK;
}

const files = process.argv.slice(2);
if (!files.length) { console.error('usage: node validate.js <bank.js> [more...]'); process.exit(2); }

const hard = [];            // build-breaking violations
const warn = [];            // judgement-call reports
const seenId = new Map();   // id -> file
const seenTopic = new Map();// topic(lower) -> {id,file}
const dist = [0, 0, 0, 0, 0];
let total = 0;

for (const file of files) {
  let bank;
  try { bank = loadBank(file); }
  catch (e) { hard.push(`${file}: ${e.message}`); continue; }

  bank.forEach((it, idx) => {
    total++;
    const where = `${file}[${idx}]${it && it.id ? ' id=' + it.id : ''}`;

    // required fields present (anchor may be null but the key must exist)
    const missing = REQ.filter(k => !(k in (it || {})));
    if (missing.length) { hard.push(`${where}: missing ${missing.join(', ')}`); return; }

    // options
    if (!Array.isArray(it.options) || it.options.length !== 5)
      hard.push(`${where}: options must have exactly 5 (got ${it.options && it.options.length})`);

    // answer
    if (!Number.isInteger(it.answer) || it.answer < 0 || it.answer > 4)
      hard.push(`${where}: answer must be an int 0-4 (got ${JSON.stringify(it.answer)})`);

    // why array + the "Correct" rule
    if (!Array.isArray(it.why) || it.why.length !== 5) {
      hard.push(`${where}: why must have exactly 5 entries (got ${it.why && it.why.length})`);
    } else {
      const correctIdx = it.why
        .map((w, i) => (/^\s*correct\b/i.test(String(w)) ? i : -1))
        .filter(i => i >= 0);
      if (correctIdx.length !== 1)
        hard.push(`${where}: exactly one why must start "Correct" (found ${correctIdx.length}: ${correctIdx.map(i => LETT[i]).join(',') || 'none'})`);
      else if (Number.isInteger(it.answer) && correctIdx[0] !== it.answer)
        hard.push(`${where}: the "Correct" rationale is at ${LETT[correctIdx[0]]} but answer is ${LETT[it.answer] || it.answer}`);
      it.why.forEach((w, i) => { if (!String(w).trim()) hard.push(`${where}: why[${LETT[i]}] is empty`); });
    }

    // enums
    if (!DIFF.has(it.difficulty)) hard.push(`${where}: difficulty "${it.difficulty}" not in easy|moderate|hard`);
    if (!ANCHOR.has(it.anchor)) hard.push(`${where}: anchor ${JSON.stringify(it.anchor)} not in null|lab|image|ecg|table`);

    // id uniqueness (hard) + topic uniqueness (warn)
    if (seenId.has(it.id)) hard.push(`${where}: duplicate id (also in ${seenId.get(it.id)})`);
    else seenId.set(it.id, file);
    const tk = String(it.topic || '').trim().toLowerCase();
    if (tk) {
      if (seenTopic.has(tk)) warn.push(`duplicate topic "${it.topic}": ${it.id} vs ${seenTopic.get(tk).id}`);
      else seenTopic.set(tk, { id: it.id, file });
    }

    if (Number.isInteger(it.answer) && it.answer >= 0 && it.answer <= 4) dist[it.answer]++;
  });
}

// answer-key balance report (warn if any letter is <10% or >35% of a non-trivial batch)
const keyLine = dist.map((n, i) => `${LETT[i]}:${n}`).join('  ');
if (total >= 15) {
  const lo = total * 0.10, hi = total * 0.35;
  dist.forEach((n, i) => {
    if (n < lo) warn.push(`answer-key skew: ${LETT[i]} correct only ${n}/${total} (<10%)`);
    if (n > hi) warn.push(`answer-key skew: ${LETT[i]} correct ${n}/${total} (>35%) — spread the key`);
  });
}

console.log(`\nvalidated ${total} items across ${files.length} file(s)`);
console.log(`answer key distribution: ${keyLine}`);
if (warn.length) { console.log(`\n⚠ ${warn.length} warning(s):`); warn.forEach(w => console.log('  - ' + w)); }
if (hard.length) {
  console.log(`\n✗ ${hard.length} HARD violation(s):`);
  hard.forEach(h => console.log('  - ' + h));
  console.log('\nFAIL — fix the hard violations before shipping.');
  process.exit(1);
}
console.log('\n✓ PASS — no hard violations.' + (warn.length ? ' (review the warnings above.)' : ''));
