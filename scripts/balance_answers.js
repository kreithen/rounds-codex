/* Spread correct-answer positions across a quiz without touching a word of content.
 *
 * Authoring ten questions in a row produces a strong unconscious habit of putting the right
 * answer in the same slot -- the first draft of this project's respiratory batch came out with
 * pneumothorax at 10/10 position B, which is precisely the defect flagged in the delivered
 * hyperparathyroid quiz. A quiz like that is scoreable without reading the stem.
 *
 * The fix is a ROTATION of the option list, not a shuffle. Rotation preserves the relative order
 * of the options, so a set that reads naturally still reads naturally; it just starts at a
 * different place. ch[] and why[] rotate together and `correct` is recomputed, so no content
 * changes and no rationale is separated from its option.
 *
 * Ordered option sets are left alone. A question whose choices are "<5 / 5-15 / 15-30 / >30"
 * or "1-2 L / 3-4 L / 5-10 L" reads as a scale, and rotating it to "15-30 / >30 / <5 / 5-15"
 * looks broken even though every option is still present. Those keep their order and are
 * excluded from the balancing, which is why the result is "flatter", not perfectly uniform.
 *
 * Usage: node scripts/balance_answers.js <batch.json>...   (rewrites in place)
 */
'use strict';
const fs = require('fs');

const files = process.argv.slice(2);
if (!files.length) { console.error('usage: balance_answers.js <batch.json>...'); process.exit(2); }

// A choice set is "ordered" when most of its options lead with a number or comparator.
const numeric = c => /^[<>≥≤~]?\s*\d/.test(String(c).trim());
const isOrdered = ch => ch.filter(numeric).length >= Math.max(3, Math.ceil(ch.length * 0.6));

function rotate(arr, k) {
  const n = arr.length;
  return arr.map((_, i) => arr[(i - k + n * 2) % n]);
}

let moved = 0, kept = 0;
for (const file of files) {
  const batch = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const [id, quiz] of Object.entries(batch)) {
    if (id.startsWith('_')) continue;
    // A multi-select question carries `correct` as an ARRAY (the engine branches on
    // Array.isArray). Rotating one would corrupt the index arithmetic, and it has no single
    // answer letter to balance anyway, so leave those questions exactly where they are.
    const qs = quiz.questions.filter(q => !Array.isArray(q.correct));
    if (!qs.length) { console.log(`  ${id.padEnd(18)} multi-select only — left untouched`); continue; }

    const fixedPos = [];                       // positions locked by ordered questions
    qs.forEach(q => { if (isOrdered(q.ch)) fixedPos.push(q.correct); });

    // Aim for an even spread across the positions available, accounting for the locked ones.
    //
    // Even is not the same as random. The first version of this assigned targets round-robin,
    // which produced a flawless 2/2/2/2/2 in every quiz -- and the identical sequence
    // A B C D E A B C D E in ALL of them, so question 1's answer was A app-wide. That is worse
    // than an accidental skew: it is a rule, and a student who spots it never reads a stem again.
    // So the even target list is SHUFFLED, seeded off the quiz id: reproducible build-to-build,
    // but no pattern shared between quizzes and none a reader can carry from one to the next.
    const nOpt = Math.min(...qs.map(q => q.ch.length));
    const want = [];
    for (let i = 0; i < qs.length; i++) want.push(i % nOpt);
    let seed = 2166136261;
    for (const ch of id) { seed ^= ch.charCodeAt(0); seed = Math.imul(seed, 16777619) >>> 0; }
    const rnd = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
    for (let i = want.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const t = want[i]; want[i] = want[j]; want[j] = t;
    }
    // drop one slot per already-locked answer so the target histogram stays balanced overall
    for (const p of fixedPos) { const k = want.indexOf(p); if (k >= 0) want.splice(k, 1); }

    let w = 0;
    const before = [0, 0, 0, 0, 0], after = [0, 0, 0, 0, 0];
    qs.forEach(q => {
      before[q.correct]++;
      if (isOrdered(q.ch)) { after[q.correct]++; kept++; return; }
      const target = want[w++ % want.length] % q.ch.length;
      const k = (target - q.correct + q.ch.length) % q.ch.length;
      if (k) {
        q.ch = rotate(q.ch, k);
        if (q.why) q.why = rotate(q.why, k);
        q.correct = target;
        moved++;
      }
      after[q.correct]++;
    });
    console.log(`  ${id.padEnd(18)} ${before.join('/')}  ->  ${after.join('/')}`
      + (fixedPos.length ? `   (${fixedPos.length} ordered question${fixedPos.length > 1 ? 's' : ''} left in place)` : ''));
  }
  fs.writeFileSync(file, JSON.stringify(batch, null, 1));
}
console.log(`\n${moved} questions rotated, ${kept} left in original order`);
