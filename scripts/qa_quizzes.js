/* QA a batch of authored quizzes before it goes anywhere near content/quizzes.json.
 *
 * merge_quizzes.js validates structure. This is the layer above: it checks the things that make
 * an authored quiz *good* rather than merely well-formed, and it exists because authored items
 * fail differently from transcribed ones. A transcription can only be wrong about what the PDF
 * said; an authored item can be well-formed, plausible and untethered from the module it is
 * supposed to test.
 *
 * What it checks, and why each one earned its place:
 *
 *  - **Answer-position spread.** The hyperparathyroid quiz shipped with all ten answers at A,
 *    scoreable without reading a word. Any quiz where one position holds most of the answers is
 *    flagged.
 *
 *  - **Source traceability.** Every question must overlap the condition's own module text. The
 *    brief was "strictly the condition's own module content", and the failure mode of writing
 *    from memory instead is invisible on inspection -- the question still looks right. Low
 *    overlap means the item is probably testing something the app never taught.
 *
 *  - **Distractor quality.** Options that repeat each other, or where the correct answer is
 *    conspicuously the longest, give the answer away without any knowledge.
 *
 *  - **Rationale coverage.** why[] must be aligned with ch[], blank at the correct option and
 *    non-blank everywhere else, or a wrong pick silently falls back to generic text.
 *
 * Usage: node scripts/qa_quizzes.js <content-dir> <batch.json>...
 */
'use strict';
const fs = require('fs');
const path = require('path');

const [, , CONTENT, ...BATCHES] = process.argv;
if (!CONTENT || !BATCHES.length) {
  console.error('usage: qa_quizzes.js <content-dir> <batch.json>...');
  process.exit(2);
}

const DATA = JSON.parse(fs.readFileSync(path.join(CONTENT, 'conditions.json'), 'utf8'));
const GAL = JSON.parse(fs.readFileSync(path.join(CONTENT, 'galleries.json'), 'utf8'));
const byId = Object.fromEntries(DATA.map(d => [d.id, d]));

const STOP = new Set(('a an the and or of in to for with on at is are was were be been by that this these those which what who whom whose how why when where all any both each few more most other some such no nor not only own same so than too very can will just should now it its his her their they them then there here also may might must shall from into during including until against among throughout because about above below up down out off over under again further once as if but do does did doing have has had having i you he she we us our your patient patients').split(' '));
// Strip HTML tags only. The naive /<[^>]*>/ is wrong here: clinical text is full of bare
// comparators ("hold insulin if K+ <3.3 mEq/L", "target often <7%"), and that pattern eats
// everything from such a '<' to the next '>' -- which silently deleted whole fields from the
// traceability vocabulary and failed correctly-sourced questions. Require a tag-like opener.
const words = s => String(s).toLowerCase().replace(/<\/?[a-z][^>]*>/gi, ' ').replace(/[^a-z0-9\s-]/g, ' ')
  .split(/\s+/).filter(w => w.length > 3 && !STOP.has(w));

const FIELDS = ['tagline', 'whatItIs', 'diagnosis', 'meds', 'nursing', 'medStudent', 'pearls', 'flow', 'redFlags', 'impress'];
const flat = v => v == null ? '' : typeof v === 'string' ? v
  : Array.isArray(v) ? v.map(flat).join(' ') : Object.values(v).map(flat).join(' ');

let problems = 0, notes = 0, totalQ = 0;

for (const file of BATCHES) {
  const batch = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const [id, quiz] of Object.entries(batch)) {
    if (id.startsWith('_')) continue;
    const d = byId[id];
    const out = [];
    const bad = m => { out.push('  FAIL ' + m); problems++; };
    const note = m => { out.push('  note ' + m); notes++; };

    if (!d) { console.log(`\n### ${id}`); bad('no condition with this id'); continue; }
    const source = new Set(words(FIELDS.map(f => flat(d[f])).join(' ') + ' ' + d.name));
    const gal = GAL.galleries[id];
    totalQ += quiz.questions.length;

    // 1. answer-position spread
    const pos = [0, 0, 0, 0, 0];
    quiz.questions.forEach(q => { if (Number.isInteger(q.correct)) pos[q.correct]++; });
    const n = quiz.questions.length, top = Math.max(...pos);
    if (top === n) bad(`every answer is at position ${'ABCDE'[pos.indexOf(top)]} — scoreable without reading`);
    else if (top > n * 0.5) note(`${top}/${n} answers at position ${'ABCDE'[pos.indexOf(top)]} (${pos.join('/')})`);

    quiz.questions.forEach((q, i) => {
      const at = m => bad(`Q${i + 1}: ${m}`);
      const hint = m => note(`Q${i + 1}: ${m}`);

      // 2. rationale coverage
      if (!q.why) at('no why[] — the brief was per-option rationales');
      else if (q.why.length !== q.ch.length) at(`why has ${q.why.length} entries for ${q.ch.length} choices`);
      else {
        if ((q.why[q.correct] || '').trim()) at('why[correct] should be blank');
        q.why.forEach((w, j) => { if (j !== q.correct && !(w || '').trim()) at(`why[${j}] is blank for a wrong option`); });
      }

      // 3. traceability to the module
      const qw = words(q.q + ' ' + q.ch[q.correct] + ' ' + (q.exp || ''));
      const hit = qw.filter(w => source.has(w)).length;
      const frac = qw.length ? hit / qw.length : 0;
      if (frac < 0.30) at(`only ${Math.round(frac * 100)}% of its terms appear in the module — likely untethered from the source`);
      else if (frac < 0.45) hint(`${Math.round(frac * 100)}% term overlap with the module — check it is testing taught material`);

      // 4. distractor quality
      if (new Set(q.ch.map(c => c.toLowerCase().trim())).size !== q.ch.length) at('duplicate choices');
      // Threshold calibrated against the IBD quiz, the style this batch is meant to match:
      // its correct answers run a median 1.21x the mean distractor and only 2/10 exceed 1.6x.
      // 2.0x flags the genuinely conspicuous ones without chasing every specific answer.
      const lens = q.ch.map(c => c.length);
      const meanOther = (lens.reduce((a, b) => a + b, 0) - lens[q.correct]) / (lens.length - 1);
      if (lens[q.correct] === Math.max(...lens) && lens[q.correct] > 2.0 * meanOther)
        hint(`the correct answer is ${(lens[q.correct] / meanOther).toFixed(1)}x the mean distractor — a giveaway`);

      // 5. does the explanation actually support the option marked correct?
      //
      // This is the authored-content counterpart of the answer-letter cross-check in
      // merge_quizzes.js, and it exists because the same failure happened here. Rewriting a
      // ch[] array to balance option lengths reorders the options; if `correct` is not
      // re-derived at the same time it silently points at a distractor. Seven questions in this
      // project were marked with the wrong answer that way, and every other check passed them --
      // the quiz still ran, still scored, and still looked right.
      //
      // exp is written about the correct answer, so its distinctive words should show up in
      // that option far more than in the average distractor. When a distractor matches exp
      // better than the marked answer does, the index is probably wrong.
      const expW = new Set(words(q.exp || ''));
      const share = c => { const cw = words(c); return cw.length ? cw.filter(w => expW.has(w)).length / cw.length : 0; };
      const shares = q.ch.map(share);
      const best = shares.indexOf(Math.max(...shares));
      //
      // Advisory, not a failure. It is deliberately noisy in one direction: an explanation
      // routinely names a distractor in order to dismiss it ("never delay antibiotics"), and an
      // explanation may use an abbreviation where the option spells it out (exp says "IGRA",
      // the option says "interferon-gamma release assay") so the two share no words at all.
      // Every hit needs a human look; a clean run means nothing was worth looking at.
      if (expW.size && best !== q.correct && shares[best] > shares[q.correct] + 0.25)
        hint(`explanation matches option ${'ABCDE'[best]} ("${q.ch[best].slice(0, 44)}") more than the marked answer — verify the index by hand`);

      // 6. gallery references
      if (q.img) {
        if (!gal) at(`img ${JSON.stringify(q.img)} but no gallery`);
        else for (const x of q.img) if (!gal.images.some(im => im.n === x)) at(`img ${x} is not a page in the gallery`);
      } else if (gal) hint('no img[] though a gallery exists');
    });

    if (out.length) { console.log(`\n### ${id} — ${d.name}`); out.forEach(l => console.log(l)); }
  }
}

console.log(`\n${totalQ} questions checked — ${problems} failures, ${notes} notes`);
process.exit(problems ? 1 : 0);
