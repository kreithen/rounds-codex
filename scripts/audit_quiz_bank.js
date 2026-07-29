/* Audit the whole quiz bank at once, after everything is merged.
 *
 * qa_quizzes.js checks one authored batch against its source. This looks at the finished bank as
 * a single artifact, which is the only place some problems are visible at all:
 *
 *  - **Answer-letter distribution, globally.** A single quiz can look fine while the bank as a
 *    whole never puts the right answer at E. That is exactly what the delivered quizzes did:
 *    across 240 transcribed questions, E was correct three times. A student who notices stops
 *    reading option E, and a fifth of the content stops working.
 *
 *  - **Degenerate quizzes.** One quiz shipped with all ten answers at A. Findable per-quiz, but
 *    only worth hunting for across the whole bank.
 *
 *  - **Duplicate stems.** Independent agents writing adjacent conditions produce the same
 *    question twice ("Which imaging study is preferred?"). Harmless within one quiz, but an exact
 *    duplicate stem AND answer set across two conditions usually means one was written from
 *    general knowledge rather than that condition's module.
 *
 *  - **Coverage.** Which conditions still have no quiz, and which quizzes point at no condition.
 *
 * Usage: node scripts/audit_quiz_bank.js <content-dir> [--verbose]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const CONTENT = process.argv[2];
const VERBOSE = process.argv.includes('--verbose');
if (!CONTENT) { console.error('usage: audit_quiz_bank.js <content-dir> [--verbose]'); process.exit(2); }

const Q = JSON.parse(fs.readFileSync(path.join(CONTENT, 'quizzes.json'), 'utf8'));
const D = JSON.parse(fs.readFileSync(path.join(CONTENT, 'conditions.json'), 'utf8'));
const G = JSON.parse(fs.readFileSync(path.join(CONTENT, 'galleries.json'), 'utf8'));
const byId = Object.fromEntries(D.map(d => [d.id, d]));

const L = 'ABCDE';
let fails = 0, warns = 0;
const fail = m => { console.log('  FAIL ' + m); fails++; };
const warn = m => { console.log('  warn ' + m); warns++; };

const ids = Object.keys(Q);
const allQ = ids.flatMap(id => Q[id].questions.map(q => ({ id, q })));

// `correct` may be an ARRAY for "select all that apply" questions -- the engine branches on
// Array.isArray(it.correct) and cardiomyopathy uses it. Multi-select questions have no single
// answer letter and the engine shows why[0] as one generic message rather than a per-option
// rationale, so they are excluded from the letter and why[] rules rather than failed by them.
const isMulti = q => Array.isArray(q.correct);

console.log(`${ids.length} quizzes, ${allQ.length} questions, over ${D.length} conditions\n`);

/* ---------------------------------------------------------------- coverage */
console.log('COVERAGE');
const noQuiz = D.filter(d => !Q[d.id]);
const orphan = ids.filter(id => !byId[id]);
console.log(`  ${D.length - noQuiz.length}/${D.length} conditions have a quiz`);
if (orphan.length) fail(`quizzes with no matching condition (unreachable): ${orphan.join(', ')}`);
if (noQuiz.length) {
  console.log(`  ${noQuiz.length} still without: ` +
    (VERBOSE ? noQuiz.map(d => d.id).join(' ') : noQuiz.slice(0, 12).map(d => d.id).join(' ') + (noQuiz.length > 12 ? ' …' : '')));
}

/* ------------------------------------------------- answer-letter distribution */
console.log('\nANSWER POSITION');
const global = [0, 0, 0, 0, 0];
const degenerate = [], skewed = [];
for (const id of ids) {
  const pos = [0, 0, 0, 0, 0];
  Q[id].questions.forEach(q => { if (Number.isInteger(q.correct)) { pos[q.correct]++; global[q.correct]++; } });
  const n = Q[id].questions.filter(q => !isMulti(q)).length, top = Math.max(...pos);
  if (!n) continue;
  if (top === n) degenerate.push(`${id} (all ${L[pos.indexOf(top)]})`);
  else if (top > n * 0.6) skewed.push(`${id} ${top}/${n} at ${L[pos.indexOf(top)]}`);
}
const tot = global.reduce((a, b) => a + b, 0);
console.log('  ' + global.map((c, i) => `${L[i]}:${c} (${Math.round(c / tot * 100)}%)`).join('   '));
if (degenerate.length) fail(`every answer at one position: ${degenerate.join(', ')}`);
// a five-option bank should sit near 20% each; under 10% means that letter is effectively dead
global.forEach((c, i) => {
  if (c / tot < 0.10) warn(`option ${L[i]} is correct only ${c}/${tot} times (${Math.round(c / tot * 100)}%) — students learn to skip it`);
});
if (skewed.length) warn(`${skewed.length} quizzes lean on one position: ${skewed.slice(0, 8).join(', ')}${skewed.length > 8 ? ' …' : ''}`);

/* -------------------------------------------------------------- structure */
console.log('\nSTRUCTURE');
let noWhy = 0, badWhy = 0, noExp = 0, badIdx = 0, dupCh = 0, withImg = 0, badImg = 0;
for (const { id, q } of allQ) {
  if (!Array.isArray(q.ch) || q.ch.length < 2) { fail(`${id}: a question has fewer than 2 options`); continue; }
  const idxOk = isMulti(q)
    ? q.correct.length && q.correct.every(i => Number.isInteger(i) && i >= 0 && i < q.ch.length)
    : Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.ch.length;
  if (!idxOk) { badIdx++; fail(`${id}: correct index out of range — "${String(q.q).slice(0, 50)}"`); }
  if (!q.exp || !q.exp.trim()) noExp++;
  if (new Set(q.ch.map(c => String(c).toLowerCase().trim())).size !== q.ch.length) dupCh++;
  if (!q.why) noWhy++;
  else if (isMulti(q)) { /* engine shows why[0] as one generic message; no per-option contract */ }
  else if (q.why.length !== q.ch.length
        || (q.why[q.correct] || '').trim()
        || q.why.some((w, j) => j !== q.correct && !(w || '').trim())) badWhy++;
  if (q.img) {
    withImg++;
    const gal = G.galleries[id];
    if (!gal || q.img.some(n => !gal.images.some(im => im.n === n))) badImg++;
  }
}
console.log(`  ${allQ.length - noWhy}/${allQ.length} questions carry per-option rationales`);
console.log(`  ${withImg} carry gallery references`);
if (badWhy) fail(`${badWhy} questions have a malformed why[] (wrong length, or blank at a wrong option)`);
if (noExp) fail(`${noExp} questions have no explanation`);
if (dupCh) fail(`${dupCh} questions have duplicate options`);
if (badImg) fail(`${badImg} questions reference a gallery page that does not exist`);
if (badIdx) fail(`${badIdx} questions have an out-of-range correct index`);

/* ---------------------------------------------------------- duplicate stems */
console.log('\nDUPLICATE STEMS');
const seen = new Map();
const dups = [];
for (const { id, q } of allQ) {
  const key = String(q.q).toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
  if (seen.has(key) && seen.get(key) !== id) dups.push(`"${q.q.slice(0, 58)}" in ${seen.get(key)} and ${id}`);
  else seen.set(key, id);
}
if (dups.length) warn(`${dups.length} stems appear in more than one quiz:\n      ` + dups.slice(0, 10).join('\n      '));
else console.log('  none');

console.log(`\n${fails} failures, ${warns} warnings`);
process.exit(fails ? 1 : 0);
