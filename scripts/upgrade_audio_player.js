#!/usr/bin/env node
/*
 * Upgrade an already-wired build to the shared-element audio player.
 *
 *     node scripts/upgrade_audio_player.js <site-root> [--check]
 *
 * add_condition_audio.js installed the first player and refuses to run twice, which is
 * right -- it is an installer. This is the upgrade path: it swaps the inlined component
 * and its stylesheet for the current scripts/audio_player.js, teaches condAudioHTML to
 * pass the condition id, and fixes the swipe handler that made the seek bar unusable.
 *
 * FOUR SURGERIES, each asserted, and it refuses to run twice.
 *
 * THE SWIPE BUG
 * There are two independent swipe handlers in index.html. The one bound to `document`
 * (library / resident specialty) has always ignored gestures that begin on a control:
 *
 *     src.closest('.chips,[data-toggle],#viewer,#nclex-root,.seg,input,textarea,select,a,button')
 *
 * The one bound to `#screen`, which browses conditions on a detail page, ignores only
 * `.flow`. So dragging the audio scrubber -- an <input type=range> sitting on a detail
 * page -- was read as "swipe to the adjacent condition", and the page changed out from
 * under the finger. This mirrors the first handler's exclusion list onto the second.
 *
 * That is one half of the fix. The other half is `touch-action:none` on the slider, in
 * RCAP_CSS: this patch stops the APP reacting to the drag, and that stops the BROWSER
 * claiming it as a pan before the range input ever sees it. Either one alone leaves a
 * scrubbing gesture that still misbehaves, so both ship together.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: upgrade_audio_player.js <site-root> [--check]'); process.exit(2); }
const IDX = path.join(ROOT, 'index.html');
if (!fs.existsSync(IDX)) { console.error('missing: ' + IDX); process.exit(2); }

let html = fs.readFileSync(IDX, 'utf8');
if (!html.includes('RC_AUDIO')) {
  console.error('FAILED: no audio player in this build — run add_condition_audio.js first.');
  process.exit(2);
}
if (html.includes('RCAP_CHAIN')) {
  console.error('FAILED: this build already carries the shared-element player.');
  process.exit(2);
}

const edits = [];
function sub(label, find, replace, expect = 1) {
  const n = html.split(find).length - 1;
  if (n !== expect) { console.error(`FAILED ${label}: found ${n} occurrences, expected ${expect}`); process.exit(1); }
  html = html.replace(find, replace);
  edits.push(label);
}
/* Region replacement, for the two blocks that are too big to quote. Both ends are
   asserted, and the slice that comes out is checked for a marker only the OLD version
   has -- otherwise a shifted anchor would quietly delete the wrong span. */
function region(label, from, to, replacement, mustContain) {
  const a = html.indexOf(from);
  const b = html.indexOf(to, a + 1);
  if (a < 0 || b < 0) { console.error(`FAILED ${label}: anchors not found (${a}, ${b})`); process.exit(1); }
  const old = html.slice(a, b);
  for (const m of mustContain)
    if (!old.includes(m)) { console.error(`FAILED ${label}: replaced region does not contain "${m}" — wrong span`); process.exit(1); }
  html = html.slice(0, a) + replacement + html.slice(b);
  edits.push(`${label} (${old.length} -> ${replacement.length} bytes)`);
}

/* The component, inlined from its source so the shipped code is the tested code --
   the same arrangement as calc_engine.js. Edit scripts/audio_player.js and re-run. */
const player = fs.readFileSync(path.join(__dirname, 'audio_player.js'), 'utf8')
  .replace(/^'use strict';$/m, '')
  .replace(/if \(typeof module[\s\S]*$/, '');
const { RCAP_CSS } = require('./audio_player.js');
for (const [what, present] of [
  ['the shared element', player.includes('function rcapAudio()')],
  ['the chain', player.includes('RCAP_CHAIN')],
  ['the media session', player.includes('mediaSession')],
  ['the [hidden] rule the popovers depend on', RCAP_CSS.includes('.rcap-pop[hidden]')],
  ['touch-action on the slider', RCAP_CSS.includes('touch-action:none')],
]) if (!present) { console.error(`FAILED: audio_player.js is missing ${what}`); process.exit(1); }

/* 1 ── the component ------------------------------------------------------------ */
region('audio player module',
  '/* Condition audio player for Rounds Codex.',
  'function condAudioHTML(id){',
  player + '\n\n',
  ['new Audio()', 'rcapHTML', 'RCAP_CSS']);

/* 2 ── condAudioHTML must pass the id: the forward button needs to know which
        condition it is on to find the next one in the same module. ------------- */
sub('condAudioHTML passes the id',
  'return a ? rcapHTML(a) : \'\';',
  'return a ? rcapHTML(a, id) : \'\';');

/* 3 ── the stylesheet ----------------------------------------------------------- */
region('audio player CSS',
  '/* Injected from scripts/audio_player.js RCAP_CSS -- edit there and re-run. */',
  '#nav button[data-v=calc] span{',
  '/* Injected from scripts/audio_player.js RCAP_CSS -- edit there and re-run. */\n' + RCAP_CSS + '\n',
  ['.rcap{background-image', '.rcap-setpop']);

/* 4 ── the swipe guard on the condition-page handler --------------------------- */
sub('swipe ignores gestures that start on a control',
  "flow=!!(target&&target.closest&&target.closest('.flow'));",
  "flow=!!(target&&target.closest&&target.closest('.flow,.rcap,input,textarea,select,a,button,[data-toggle],.seg'));");

if (CHECK) {
  console.log(`${edits.length} edits ready:`);
  edits.forEach(e => console.log('  - ' + e));
  console.log('\n--check: nothing written');
  process.exit(0);
}

fs.writeFileSync(IDX, html);
console.log(`${edits.length} edits:`);
edits.forEach(e => console.log('  - ' + e));
console.log('\nassets/audio/*.mp3 stay out of sw.js CORE — see fix_audio_caching.js.');
