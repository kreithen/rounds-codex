/* Validate a staged quiz batch and merge it into content/quizzes.json.
 *
 * Having QUIZZES[id] is what auto-enables the "Take the Quiz" button on a condition page, so a
 * bad entry does not fail loudly -- it ships a broken quiz behind a button that looks fine.
 * Everything that can be checked mechanically is checked here rather than in a headless pass.
 *
 * The check that matters most is `correct`: it is a 0-based index, while every source PDF gives
 * the answer as a letter. An off-by-one turns a correct answer into a wrong one and nothing
 * downstream can tell. So the batch also carries the original letters, and this asserts that
 * ch[correct] is the option that letter points at.
 *
 * Usage: node scripts/merge_quizzes.js <batch.json> <content-dir> [--answers <letters.json>]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const [, , BATCH, CONTENT, ...rest] = process.argv;
if (!BATCH || !CONTENT) {
  console.error('usage: merge_quizzes.js <batch.json> <content-dir> [--answers <letters.json>]');
  process.exit(2);
}
const ansIdx = rest.indexOf('--answers');
const ANSWERS = ansIdx >= 0 ? JSON.parse(fs.readFileSync(rest[ansIdx + 1], 'utf8')) : null;

const batch = JSON.parse(fs.readFileSync(BATCH, 'utf8'));
const qpath = path.join(CONTENT, 'quizzes.json');
const QUIZ = JSON.parse(fs.readFileSync(qpath, 'utf8'));
const DATA = JSON.parse(fs.readFileSync(path.join(CONTENT, 'conditions.json'), 'utf8'));
const GAL = JSON.parse(fs.readFileSync(path.join(CONTENT, 'galleries.json'), 'utf8'));
const byId = Object.fromEntries(DATA.map(d => [d.id, d]));

const errs = [];
const warns = [];
const entries = Object.entries(batch).filter(([k]) => !k.startsWith('_'));

for (const [id, quiz] of entries) {
  const at = m => errs.push(`${id}: ${m}`);

  // a quiz whose id has no condition is unreachable -- no page carries the button
  if (!byId[id]) { at(`no condition with this id`); continue; }
  if (quiz.condition !== byId[id].name)
    warns.push(`${id}: condition "${quiz.condition}" != library name "${byId[id].name}"`);
  if (QUIZ[id]) warns.push(`${id}: replacing an existing quiz`);
  if (!Array.isArray(quiz.questions) || !quiz.questions.length) { at('no questions'); continue; }

  const gal = GAL.galleries[id];
  quiz.questions.forEach((q, i) => {
    const w = m => errs.push(`${id} Q${i + 1}: ${m}`);
    if (!q.q || !q.q.trim()) w('empty stem');
    if (!Array.isArray(q.ch) || q.ch.length < 2) w('needs at least 2 choices');
    else {
      if (q.ch.some(c => !c || !String(c).trim())) w('has an empty choice');
      if (new Set(q.ch).size !== q.ch.length) w('has duplicate choices');
    }
    if (!Number.isInteger(q.correct)) w('correct is not an integer');
    else if (q.correct < 0 || q.correct >= (q.ch || []).length) w(`correct=${q.correct} out of range`);
    if (!q.exp || !q.exp.trim()) w('empty explanation');

    // why[] must line up with ch[], and the correct option must not carry a "you were wrong" line
    if (q.why) {
      if (q.why.length !== q.ch.length) w(`why has ${q.why.length} entries for ${q.ch.length} choices`);
      else if (q.why[q.correct] && q.why[q.correct].trim())
        w('why[correct] should be empty -- it only shows on a wrong pick');
      else if (q.why.filter((x, j) => j !== q.correct && (!x || !x.trim())).length)
        w('a wrong option has no rationale');
    }

    // an img ref past the end of the gallery renders nothing, silently
    if (q.img) {
      if (!gal) w(`img ${JSON.stringify(q.img)} but ${id} has no gallery`);
      else for (const n of q.img)
        if (!gal.images.some(im => im.n === n)) w(`img ${n} is not a page in the ${id} gallery`);
    }

    // the letter cross-check: catches a 0-based/1-based slip, which is otherwise invisible
    if (ANSWERS && ANSWERS[id]) {
      const letter = ANSWERS[id][i];
      const want = 'ABCDE'.indexOf(letter);
      if (want < 0) w(`answer key letter "${letter}" not understood`);
      else if (want !== q.correct)
        w(`answer key says ${letter} (index ${want}) but correct=${q.correct} -> "${q.ch[q.correct]}"`);
    }
  });
}

console.log(`${entries.length} quizzes, ${entries.reduce((n, [, q]) => n + q.questions.length, 0)} questions`);
for (const w of warns) console.log('  warn  ' + w);
if (errs.length) {
  console.error(`\n${errs.length} ERRORS:`);
  for (const e of errs) console.error('  ' + e);
  process.exit(1);
}

for (const [id, quiz] of entries) QUIZ[id] = quiz;
fs.writeFileSync(qpath, JSON.stringify(QUIZ));
console.log(`\nmerged -> ${Object.keys(QUIZ).length} quizzes total`);
