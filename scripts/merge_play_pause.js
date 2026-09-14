#!/usr/bin/env node
/**
 * merge_play_pause.js <tree> [--apply]
 *
 * The audio bar ships SEPARATE Play and Pause buttons, both visible at all times, so one of the two
 * is always inert. Measured at 360px: back, play, pause, fwd, chain -- five 21px buttons with 1px
 * gaps, effectively one continuous strip, where a sideways mis-hit lands on the wrong control.
 *
 * Showing one at a time frees 21px plus a gap at EVERY width, and removes no capability -- a single
 * toggle is what iOS, Android, Spotify and YouTube all do. That is strictly better than the
 * alternative considered (dropping "next recording" or "back to start" below 360px), which buys the
 * same space on narrow phones only and costs a real control.
 *
 * NO JAVASCRIPT CHANGES. `sync()` already runs `el.classList.toggle('playing', playing)` on the
 * `.rcap` root, and nothing in the stylesheet used that class -- an unused hook, already correct,
 * already covering the "another condition's recording is playing" case through `mine()`. The
 * handlers, the Media Session wiring and the chain logic are all untouched.
 *
 * The freed width is spent on `.rcap-transport` gap, 1px -> 7px, so the remaining buttons stop
 * being a continuous strip. `.rcap-util` is deliberately NOT widened: an earlier attempt raised
 * both and cost the scrubber 20-28px, dropping it to 89 and 79 against a ~90px floor. The slider
 * width is asserted after this change at 320/360/430 rather than predicted.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const TREE = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!TREE) { console.error('usage: merge_play_pause.js <tree> [--apply]'); process.exit(2); }

const ANCHOR = '.rcap-transport,.rcap-util{display:flex;align-items:center;gap:1px;flex:0 0 auto}';
const ADDED =
  /* One transport slot for the pair. Pause is hidden until `.rcap.playing`, which sync() already
     maintains; display:flex, not block, because .rcap-b centres its glyph with inline-flex. */
  '.rcap-b[data-rcap="pause"]{display:none}' +
  '.rcap.playing .rcap-b[data-rcap="play"]{display:none}' +
  '.rcap.playing .rcap-b[data-rcap="pause"]{display:inline-flex}' +
  /* Transport only. Widening .rcap-util too is what cost the scrubber its floor last time. */
  '.rcap-transport{gap:7px}';

const files = ['index.html', path.join('scripts', 'audio_player.js')]
  .map(f => path.join(TREE, f)).filter(fs.existsSync);
if (!files.length) { console.error(`FAIL: nothing to patch under ${TREE}`); process.exit(1); }

let bad = 0;
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const rel = path.relative(process.cwd(), f);
  if (s.includes('.rcap.playing .rcap-b[data-rcap="play"]')) { console.log(`  ok   ${rel}: already merged`); continue; }
  const n = s.split(ANCHOR).length - 1;
  if (!n) { console.log(`  --   ${rel}: anchor absent, skipped`); continue; }
  /* index.html carries TWO copies -- the live <style> block and the inert `var RCAP_CSS` array
     that is declared and never referenced. Patch the first, which is the live one. */
  console.log(`  ${APPLY ? 'fix ' : 'would'} ${rel}: merge play/pause, transport gap 1px -> 7px` +
              (n > 1 ? `  (first of ${n}; the other is the dead RCAP_CSS array)` : ''));
  if (APPLY) fs.writeFileSync(f, s.replace(ANCHOR, ANCHOR + ADDED));
}
if (bad) process.exit(1);
if (!APPLY) console.log('\n(dry run -- pass --apply)');
