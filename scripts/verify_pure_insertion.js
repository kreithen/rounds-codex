#!/usr/bin/env node
/* verify_pure_insertion.js -- calibration for scripts/lib/pure_insertion.js.
 *
 * The lesson this project keeps relearning is that a guard nobody has watched FAIL is decoration.
 * `verify_sw.js` passed on the broken service worker for two shipped regressions because it
 * asserted something true but insufficient. So this does not test that the checker accepts a good
 * patch -- that is the easy half and proves nothing. It builds deliberately broken outputs, one per
 * class of damage a patcher can do, and requires the checker to REJECT each one.
 *
 * Case 4 is the one that decided the GRANULARITY. It deletes a word whose characters all occur
 * again, in order, inside the text the patch inserted a few lines down. A byte-level subsequence
 * check -- which is what this library started as -- ACCEPTS that: the deleted characters are
 * re-matched out of the insertion and the loss disappears. At line granularity a deleted or edited
 * line cannot hide inside an inserted one, because the match has to be a whole line.
 *
 * Case 2 is the counterpart nobody expects to need: an edit INSIDE an existing line is not a pure
 * insertion at line granularity, and must be declared like any other rewrite. That is not
 * pedantry -- an intra-line edit is exactly how the disclaimer lost four words.
 *
 * The last two cases are about the DECLARATION mechanism rather than the comparison. One declares
 * an edit whose needle is not unique in the input, which is the mistake `add_detail_rail.js`'s own
 * first hand-written table made -- a needle short enough to match more than once, which silently
 * hit the wrong occurrence and failed on a correct run; the library refuses rather than guessing.
 * The other is a declared DELETION, which is what forced the replay to run FORWARD: unwinding an
 * edit backwards means searching the output for what was written, and a deletion wrote nothing, so
 * "find the one occurrence of ''" matched 732,809 times on the first real script that used it.
 *
 *   node scripts/verify_pure_insertion.js
 */
'use strict';
const { execFileSync } = require('child_process');
const path = require('path');
const LIB = path.join(__dirname, 'lib', 'pure_insertion.js');

const BEFORE = [
  '<!doctype html><html><head><style>.pad{padding-bottom:112px}</style></head>',
  '<body><div class="app"><script>',
  'function paint(y){ rcSyncURL(); render(); }',
  'function go(v,id){ stack.push({v,id,y:window.scrollY}); paint(); }',
  'var DISCLAIMER="For educational use only. Not a substitute for clinical judgement.";',
  '</script></div></body></html>',
].join('\n');

/* A realistic good patch: two WHOLE lines added, disturbing none of the existing ones. */
const ADDED = 'function rcShare(id){ navigator.share({url:id}); }';
const GOOD = BEFORE.replace('</script>', ADDED + '\n</script>');

const L = GOOD.split('\n');
const MOVED = L.slice(0, 2).concat(L[3], L[2], L.slice(4)).join('\n');
const INLINE = GOOD.replace('.pad{padding-bottom:112px}', '.pad{padding-bottom:112px}.d-rail{width:320px}');

const CASES = [
  ['whole lines inserted',                   GOOD, [], true],
  ['an edit INSIDE a line, undeclared',      INLINE, [], false],
  ['the same edit, declared',                INLINE,
   [['the rail width', '.pad{padding-bottom:112px}.d-rail{width:320px}',
     '.pad{padding-bottom:112px}']], true],
  ['no change at all',                       BEFORE, [], true],
  ['a deleted clause in the disclaimer',
   GOOD.replace(' Not a substitute for clinical judgement.', ''), [], false],
  ['a deleted clause whose letters recur in the insertion',
   GOOD.replace(',y:window.scrollY', ''), [], false],
  ['a moved block (same lines, new order)',  MOVED, [], false],
  ['a rewritten identifier',                 GOOD.replace('rcSyncURL', 'rcSyncUrl'), [], false],
  ['a truncation',                           GOOD.slice(0, GOOD.length - 40), [], false],
  ['a single deleted character',             GOOD.replace('112px', '12px'), [], false],
  ['a declared edit plus an UNDECLARED one',
   GOOD.replace(ADDED, ADDED.replace('navigator.share', 'navigator.canShare'))
       .replace('stack.push', 'stack.unshift'),
   [['the share call', ADDED.replace('navigator.share', 'navigator.canShare'), ADDED]], false],
  ['a declared edit whose needle is not unique in the input',
   GOOD, [['a rename', 'fn ', 'function ']], false],
  ['a declared DELETION -- the case that broke reversal',
   GOOD.replace(' rcSyncURL();', ''), [['the sync call', '', ' rcSyncURL();']], true],
];

const RUNNER = `
const { pureInsertion } = require(${JSON.stringify(LIB)});
const [before, after, undo] = JSON.parse(process.argv[1]);
pureInsertion({ before, after, undo, label: 'the case under test' });
`;

console.log('--- verify_pure_insertion.js ---');
console.log(`  ${CASES.length} cases: ${CASES.filter(c => c[3]).length} must pass, ` +
            `${CASES.filter(c => !c[3]).length} must FAIL\n`);

let bad = 0;
for (const [name, after, undo, wantPass] of CASES) {
  let passed, out = '';
  try {
    out = execFileSync(process.execPath, ['-e', RUNNER, JSON.stringify([BEFORE, after, undo])],
                       { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    passed = true;
  } catch (e) {
    passed = false;
    out = (e.stdout || '') + (e.stderr || '');
  }
  const ok = passed === wantPass;
  if (!ok) bad++;
  const verdict = passed ? 'accepted' : 'rejected';
  console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name.padEnd(46)} ${verdict}` +
              `${ok ? '' : `  -- expected it to be ${wantPass ? 'accepted' : 'rejected'}`}`);
  if (!ok) console.log(out.split('\n').map(l => '         ' + l).join('\n'));
}

/* ---------------------------------------------------------------------------------------------
 * The tracker, which is how the patchers actually reach the check. Same requirement: the cases
 * that must FAIL are the point. The last one is the whole reason the tracker exists -- an edit made
 * OUTSIDE the helper, so nothing declared it, which is exactly what a hand-written undo table
 * forgets to list.
 * ------------------------------------------------------------------------------------------- */
const T_RUNNER = `
const { tracker } = require(${JSON.stringify(LIB)});
const RC = tracker('fixture.js');
const [before, script] = JSON.parse(process.argv[1]);
let s = before;
const step = (label, from, to) => { RC.step(label, from, to); s = s.replace(from, to); };
eval(script);
RC.assert(before, s);
`;

const T_CASES = [
  ['an edit through the helper',
   "step('rail', '.pad{padding-bottom:112px}', '.pad{padding-bottom:112px}.d-rail{width:320px}')", true],
  ['two edits through the helper',
   "step('a', 'rcSyncURL();', 'rcSyncURL(); rcMark();');" +
   "step('b', 'stack.push', 'stack.unshift')", true],
  ['an edit made OUTSIDE the helper, so nothing declared it',
   "s = s.replace('rcSyncURL();', '');", false],
  ['a helper edit plus an undeclared one',
   "step('a', 'stack.push', 'stack.unshift'); s = s.replace('window.scrollY', '0');", false],
  ['a helper edit plus a whole line appended (an insertion needs no declaration)',
   "step('a', 'stack.push', 'stack.unshift'); s = s + '\\nvar RC_EXTRA=1;';", true],
];

console.log(`\n  tracker: ${T_CASES.length} cases, ` +
            `${T_CASES.filter(c => c[2]).length} must pass, ${T_CASES.filter(c => !c[2]).length} must FAIL\n`);

for (const [name, script, wantPass] of T_CASES) {
  let passed, out = '';
  try {
    out = execFileSync(process.execPath, ['-e', T_RUNNER, JSON.stringify([BEFORE, script])],
                       { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    passed = true;
  } catch (e) { passed = false; out = (e.stdout || '') + (e.stderr || ''); }
  const ok = passed === wantPass;
  if (!ok) bad++;
  console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name.padEnd(62)} ${passed ? 'accepted' : 'rejected'}`);
  if (!ok) console.log(out.split('\n').map(l => '         ' + l).join('\n'));
}

const TOTAL = CASES.length + T_CASES.length;
console.log();
if (bad) { console.log(`  ${bad} of ${TOTAL} cases went the wrong way`); process.exit(1); }
console.log(`  all ${TOTAL} cases behave -- the checker rejects every class of damage above`);
