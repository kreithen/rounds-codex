/* Compare the blinded reviewers' independently derived answers against the real answer key.
 *
 * scripts/blind_quizzes.js emitted stems and options with `correct`, `exp` and `why` stripped, so
 * each reviewer had to work the answer out from the condition's own module text. This is the other
 * half: it puts the two side by side and prints every place they differ.
 *
 * A disagreement is NOT a bug report. It is one of three things, and only the first is a defect:
 *   1. the marked answer is wrong;
 *   2. the question is ambiguous and two options are defensible;
 *   3. the reviewer is wrong.
 * Nothing here edits the bank. The output is a worklist for the physician, ordered so that the
 * cases most likely to be real defects — high reviewer confidence — come first.
 *
 * It also asserts the shape of what came back, which matters more than it sounds. A reviewer that
 * answered 8 of 10 questions, or numbered them from 0, or returned a letter past the end of ch[],
 * would otherwise show up as silent agreement on the questions it skipped: the comparison would
 * simply have nothing to compare and the summary would still read "100% reviewed". Coverage is
 * therefore checked against the manifest and failures are loud.
 *
 * Usage: node scripts/compare_review.js <content-dir> <review-dir> [--all] [--md <file>]
 *          --all  also list the agreements (default prints disagreements only)
 *          --md   write a markdown report for the physician
 */
'use strict';
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
const [CONTENT, REVIEW] = argv.filter(a => !a.startsWith('--'));
const ALL = argv.includes('--all');
const MD = argv.includes('--md') ? argv[argv.indexOf('--md') + 1] : null;
if (!CONTENT || !REVIEW) {
  console.error('usage: compare_review.js <content-dir> <review-dir> [--all] [--md <file>]');
  process.exit(2);
}

const L = 'ABCDE';
const Q = JSON.parse(fs.readFileSync(path.join(CONTENT, 'quizzes.json'), 'utf8'));
const manifest = JSON.parse(fs.readFileSync(path.join(REVIEW, 'blinded', 'manifest.json'), 'utf8'));

/* ------------------------------------------------------------------ gather */
const answersDir = path.join(REVIEW, 'answers');
const have = new Set(fs.existsSync(answersDir) ? fs.readdirSync(answersDir).filter(f => f.endsWith('.json')) : []);
const missingFiles = manifest.filter(m => !have.has(m.file));

let shapeErrors = 0;
const err = m => { console.log('  SHAPE ' + m); shapeErrors++; };

// A reviewer's answer may be several letters for a select-all question; normalise both sides to a
// sorted letter string so "CAB" and "ABC" compare equal and order is never the difference.
const norm = s => String(s).toUpperCase().replace(/[^A-E]/g, '').split('').sort().join('');
const keyOf = q => Array.isArray(q.correct)
  ? q.correct.map(i => L[i]).sort().join('')
  : L[q.correct];

const rows = [];        // one per compared question
const reviewed = new Set();

for (const m of manifest) {
  if (!have.has(m.file)) continue;
  const sub = JSON.parse(fs.readFileSync(path.join(answersDir, m.file), 'utf8'));

  for (const id of m.ids) {
    const quiz = Q[id];
    if (!quiz) { err(`${m.file}: group lists ${id} but the bank has no such quiz`); continue; }
    const got = sub[id];
    if (!got) { err(`${m.file}: no answers for ${id} (${quiz.questions.length} questions unreviewed)`); continue; }
    reviewed.add(id);

    // Numbering is 1-based and must cover every question exactly once. Extra keys usually mean
    // the reviewer renumbered across conditions; missing keys mean it quietly stopped early.
    const want = quiz.questions.map((_, i) => String(i + 1));
    const extra = Object.keys(got).filter(k => !want.includes(k));
    const gone = want.filter(k => !(k in got));
    if (gone.length) err(`${m.file} ${id}: no answer for question ${gone.join(', ')} of ${want.length}`);
    if (extra.length) err(`${m.file} ${id}: answers for nonexistent question ${extra.join(', ')}`);

    quiz.questions.forEach((q, i) => {
      const rec = got[String(i + 1)];
      if (!rec) return;                                  // already reported above
      const mine = norm(rec.answer);
      if (!mine) { err(`${m.file} ${id} Q${i + 1}: answer "${rec.answer}" contains no A-E letter`); return; }
      const past = mine.split('').filter(c => L.indexOf(c) >= q.ch.length);
      if (past.length) err(`${m.file} ${id} Q${i + 1}: answered ${past.join('')} but there are only ${q.ch.length} options`);
      const key = norm(keyOf(q));
      rows.push({
        file: m.file, id, n: i + 1, q,
        mine, key,
        agree: mine === key,
        multi: Array.isArray(q.correct),
        conf: (rec.confidence || 'unstated').toLowerCase(),
        concern: rec.concern || '',
      });
    });
  }
}

/* ----------------------------------------------------------------- summary */
const done = rows.length;
const dis = rows.filter(r => !r.agree);
const byConf = c => dis.filter(r => r.conf === c).length;
const total = manifest.reduce((n, m) => n + m.questions, 0);

console.log(`REVIEW COVERAGE`);
console.log(`  ${have.size}/${manifest.length} reviewer files, ${reviewed.size} quizzes, ${done}/${total} questions compared`);
if (missingFiles.length) console.log(`  still outstanding: ${missingFiles.map(m => m.file).join(', ')}`);
if (shapeErrors) console.log(`  ${shapeErrors} shape problems above — those questions are NOT compared`);

console.log(`\nAGREEMENT`);
console.log(`  ${done - dis.length}/${done} agree (${(100 * (done - dis.length) / (done || 1)).toFixed(1)}%)`);
console.log(`  ${dis.length} disagreements — high:${byConf('high')} medium:${byConf('medium')} low:${byConf('low')} unsure:${byConf('unsure')}`);
// The honour-system caveat from the README, made operational: a reviewer that peeked would show
// as suspiciously perfect rather than as disagreement, so flag the absence of disagreement too.
const perfect = [...new Set(rows.map(r => r.file))].filter(f => !dis.some(r => r.file === f));
if (perfect.length) console.log(`  ${perfect.length} reviewer file(s) with zero disagreements: ${perfect.join(', ')}` +
  `\n      not necessarily wrong, but blinding is instructed rather than enforced — worth a spot check`);

const concerns = rows.filter(r => r.concern);
console.log(`  ${concerns.length} questions carry a reviewer concern (raised independently of the key)`);

/* ------------------------------------------------------------------ detail */
const order = { high: 0, medium: 1, low: 2, unsure: 3, unstated: 4 };
dis.sort((a, b) => (order[a.conf] ?? 9) - (order[b.conf] ?? 9) || a.id.localeCompare(b.id) || a.n - b.n);

const lines = [];
const out = s => { console.log(s); lines.push(s); };

if (dis.length) {
  out(`\n${'='.repeat(78)}\nDISAGREEMENTS — highest reviewer confidence first\n${'='.repeat(78)}`);
  for (const r of dis) {
    out(`\n### ${r.id} Q${r.n}   bank says ${r.key} · reviewer says ${r.mine} · confidence ${r.conf}${r.multi ? ' · select-all' : ''}`);
    out(`  ${r.q.q}`);
    r.q.ch.forEach((c, j) => {
      const mark = r.key.includes(L[j]) ? 'KEY ' : r.mine.includes(L[j]) ? 'REV ' : '    ';
      out(`  ${mark}${L[j]}. ${c}`);
    });
    out(`  bank explanation: ${(r.q.exp || '').trim()}`);
    // The rationale the bank gives for the option the reviewer chose is usually the fastest way to
    // adjudicate: it is the author's own argument against the reviewer, stated in advance.
    const revIdx = L.indexOf(r.mine[0]);
    const w = r.q.why && r.q.why[revIdx];
    if (w && w.trim()) out(`  bank says of ${r.mine[0]}: ${w.trim()}`);
    if (r.concern) out(`  reviewer concern: ${r.concern}`);
  }
}

if (concerns.length) {
  out(`\n${'='.repeat(78)}\nREVIEWER CONCERNS (including where the answer matched)\n${'='.repeat(78)}`);
  for (const r of concerns) {
    out(`\n### ${r.id} Q${r.n}   ${r.agree ? 'answer agreed' : `answer disagreed (bank ${r.key}, reviewer ${r.mine})`}`);
    out(`  ${r.q.q}`);
    out(`  concern: ${r.concern}`);
  }
}

if (ALL) {
  out(`\n${'='.repeat(78)}\nALL AGREEMENTS\n${'='.repeat(78)}`);
  for (const r of rows.filter(x => x.agree)) out(`  ${r.id.padEnd(22)} Q${String(r.n).padStart(2)}  ${r.key}  ${r.conf}`);
}

if (MD) {
  const md = [`# Blinded medical review — disagreement report`, ``,
    `${done} of ${total} questions compared across ${reviewed.size} quizzes.`,
    `**${done - dis.length} agree (${(100 * (done - dis.length) / (done || 1)).toFixed(1)}%)**, ${dis.length} disagree, ${concerns.length} carry a reviewer concern.`,
    ``,
    `A disagreement is a question for the physician, not a proven error: the marked answer may be`,
    `wrong, the question may be genuinely ambiguous, or the reviewer may be wrong. Nothing in the`,
    `bank has been changed. Ordered with the reviewer's highest-confidence disagreements first.`,
    ``, '```', ...lines, '```', ''].join('\n');
  fs.writeFileSync(MD, md);
  console.log(`\nwrote ${MD}`);
}

if (shapeErrors) process.exit(1);
