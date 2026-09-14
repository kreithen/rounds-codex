#!/usr/bin/env node
/**
 * fix_a11y_rest.js <tree> [--apply]
 *
 * The remainder of native/PRE-LAUNCH-REPORT.md's list, after fix_tap_targets.js took the two worst
 * offenders in v135. Four changes, each measured rather than guessed:
 *
 * 1. NAV LABEL CONTRAST. `--muted-2` is #63748f; the bottom nav sits on an effective rgb(7,11,22)
 *    once its rgba(8,12,24,.82) is composited over the page. Measured 4.142:1 against a 4.5
 *    requirement for 11px text -- it is most of the 27 contrast findings, on every view.
 *    #6d7f9c gives 4.835. NOT the minimum: #687a96 passes at 4.504, and v135 just taught us what
 *    sitting on a threshold costs -- 168 of 181 buttons still failed at 47.x when set to exactly
 *    48. Take the headroom.
 *    The token is used 36 times. Changing it rather than overriding `.nav button` is deliberate:
 *    the app is dark throughout, so lightening muted text improves every one of those 36 sites,
 *    and a local override would fork the nav out of the token system for 0.3 of a ratio point.
 *    Re-measure after: if any view's contrast count goes UP, this assumption was wrong.
 *
 * 2. `.tb-btn` 44x40 -> 50x50. Android's floor is 48; 50 for the same sub-pixel headroom.
 *
 * 3. ARIA LABELS on the icon-only controls -- the 4 unlabelled elements, all of them a glyph with
 *    no text. ⚠ SOME BACK BUTTONS ALREADY HAVE ONE: `class="tb-btn" onclick="back()"` appears 8
 *    times, 7 bare and 1 already labelled, and the navBack() variant is already labelled. So the
 *    match is on the form ending in `>`, which the labelled ones do not have. A blind replace
 *    would emit `aria-label` twice.
 *
 * 4. AUDIO BUTTON GAP, ABOVE 360px ONLY. `.rcap-transport` has gap:1px, so five 21px buttons are
 *    effectively a continuous strip and a sideways mis-hit lands on the wrong transport control.
 *    Widening the gap costs slider width, and at 320px there are only 8px of slack over the ~90px
 *    floor -- so this is a media query, not a change to the base rule. At 360px the slider has
 *    ~19px of slack; 1px -> 5px across four gaps costs 16. Nothing changes at 320px, where there
 *    is no room, so this cannot make any width worse.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const TREE = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!TREE) { console.error('usage: fix_a11y_rest.js <tree> [--apply]'); process.exit(2); }

/* [label, old, new, expectedCount] -- an exact count, because "replace what you find" is how the
   double-aria-label would have happened. */
const EDITS = [
  ['nav contrast  --muted-2 #63748f -> #6d7f9c (4.14 -> 4.84:1)',
   '--muted-2:#63748f', '--muted-2:#6d7f9c', 1],
  ['tb-btn 44x40 -> 50x50',
   '.tb-btn{width:44px;height:40px;', '.tb-btn{width:50px;height:50px;', 1],
  ['aria-label on 7 bare back buttons',
   'class="tb-btn" onclick="back()">', 'class="tb-btn" onclick="back()" aria-label="Back">', 7],
  ['aria-label on the Ask send button',
   'class="send" onclick="modAsk()">', 'class="send" onclick="modAsk()" aria-label="Send">', 1],
  /* ⚠ TWO COPIES, and only one of them is alive. index.html carries the injected <style> block
     AND an inlined `var RCAP_CSS = [...]` -- the patcher's own source, shipped along with the rest
     of audio_player.js. The style block is labelled "Injected from scripts/audio_player.js
     RCAP_CSS -- edit there and re-run"; RCAP_CSS itself is DECLARED AND NEVER REFERENCED, a stale
     snapshot with no consumer. So this patches the first occurrence only. Faking a fix into dead
     code would make the file look consistent without being more correct; the real source is
     scripts/audio_player.js in the build repo, which is patched separately below.
     Found because the exact-count guard refused at "found 2, expected 1" -- which is the whole
     reason the counts are exact. CLAUDE.md's rule, earned again: grep for the other copies. */
  ['audio transport gap 1px -> 5px above 360px  (live <style> only; RCAP_CSS is dead)',
   '.rcap-transport,.rcap-util{display:flex;align-items:center;gap:1px;flex:0 0 auto}',
   '.rcap-transport,.rcap-util{display:flex;align-items:center;gap:1px;flex:0 0 auto}' +
   '@media(min-width:360px){.rcap-transport,.rcap-util{gap:5px}}', 'FIRST'],
];

const files = ['index.html', path.join('scripts', 'add_persistence.js'),
               path.join('scripts', 'audio_player.js'), path.join('scripts', 'add_about.js')]
  .map(f => path.join(TREE, f)).filter(fs.existsSync);
if (!files.length) { console.error(`FAIL: nothing to patch under ${TREE}`); process.exit(1); }

let bad = 0, touched = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  const rel = path.relative(process.cwd(), f);
  const lines = [];
  let changedHere = false;
  for (const [label, oldS, newS, want] of EDITS) {
    const have = s.split(oldS).length - 1;
    const done = s.split(newS).length - 1;
    if (!have && done) { lines.push(`  ok   ${label} (already)`); continue; }
    if (!have) continue;                       // this edit does not live in this file
    if (want === 'FIRST') {
      lines.push(`  ${APPLY ? 'fix ' : 'would'} ${label} (1 of ${have})`);
      s = s.replace(oldS, newS);           // String arg: first occurrence only, deliberately
      changedHere = true; continue;
    }
    if (have !== want) {
      lines.push(`  FAIL ${label}: found ${have}, expected ${want} -- not guessing`);
      bad++; continue;
    }
    lines.push(`  ${APPLY ? 'fix ' : 'would'} ${label} (x${have})`);
    s = s.split(oldS).join(newS);
    changedHere = true;
  }
  if (!lines.length) continue;
  console.log(`\n${rel}`); lines.forEach(l => console.log(l));
  if (APPLY && changedHere) { fs.writeFileSync(f, s); touched++; }
}
console.log('');
if (bad) { console.error(`${bad} edit(s) did not match cleanly -- nothing written for those`); process.exit(1); }
if (!APPLY) console.log('(dry run -- pass --apply)');
