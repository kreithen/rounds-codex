/* Emit answer-key-free copies of the quiz bank, for independent medical review.
 *
 * The point of the review pass is to catch a question that is well-formed, plausible, traceable
 * to its module AND clinically wrong — the one class of defect no mechanical check can see. That
 * only works if the reviewer derives the answer themselves. A reviewer shown the marked answer
 * ratifies it; anchoring is overwhelming, and 1,820 "looks right to me" verdicts would tell us
 * nothing while feeling like diligence.
 *
 * So each group gets a file with stems and options only: no `correct`, no `exp`, no `why`. The
 * reviewer answers from the condition's own module text, and the comparison happens back here
 * where the key lives.
 *
 * Blinding is also why the reviewer is asked to flag factually wrong stems and options. That is
 * judgeable without the key, unlike the explanations, which cannot be reviewed without revealing
 * the answer and so belong to a later open pass.
 *
 * Usage: node scripts/blind_quizzes.js <content-dir> <out-dir> [per-group]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const [, , CONTENT, OUT, PER = '6'] = process.argv;
if (!CONTENT || !OUT) {
  console.error('usage: blind_quizzes.js <content-dir> <out-dir> [per-group]');
  process.exit(2);
}
const perGroup = parseInt(PER, 10);

const Q = JSON.parse(fs.readFileSync(path.join(CONTENT, 'quizzes.json'), 'utf8'));
const D = JSON.parse(fs.readFileSync(path.join(CONTENT, 'conditions.json'), 'utf8'));
const byId = Object.fromEntries(D.map(d => [d.id, d]));

fs.mkdirSync(OUT, { recursive: true });
// keep library order rather than object order, so a group is usually one specialty
const ids = D.map(d => d.id).filter(id => Q[id]);

const groups = [];
for (let i = 0; i < ids.length; i += perGroup) groups.push(ids.slice(i, i + perGroup));

const manifest = [];
groups.forEach((g, gi) => {
  const name = `blind-${String(gi + 1).padStart(2, '0')}.json`;
  const out = {};
  for (const id of g) {
    out[id] = {
      condition: Q[id].condition || (byId[id] && byId[id].name) || id,
      questions: Q[id].questions.map((q, i) => ({
        n: i + 1,
        q: q.q,
        ch: q.ch,
        // multi-select questions expect more than one letter; say so rather than let the
        // reviewer guess why one letter will not fit
        selectAll: Array.isArray(q.correct) || undefined,
      })),
    };
  }
  fs.writeFileSync(path.join(OUT, name), JSON.stringify(out, null, 1));
  manifest.push({ file: name, ids: g, questions: g.reduce((n, id) => n + Q[id].questions.length, 0) });
});

// A sanity check worth having: if any answer-bearing key survived the copy, the blinding failed
// and the whole review is worthless. Assert it rather than trust the mapping above.
const leaked = [];
for (const m of manifest) {
  const raw = fs.readFileSync(path.join(OUT, m.file), 'utf8');
  for (const k of ['"correct"', '"exp"', '"why"']) if (raw.includes(k)) leaked.push(`${m.file} contains ${k}`);
}
if (leaked.length) { console.error('BLINDING FAILED:\n  ' + leaked.join('\n  ')); process.exit(1); }

fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1));
console.log(`${groups.length} blinded files, ${ids.length} quizzes, ` +
  `${manifest.reduce((n, m) => n + m.questions, 0)} questions — no correct/exp/why anywhere`);
console.log('ARGS=' + JSON.stringify(manifest.map(m => ({ file: m.file, ids: m.ids }))));
