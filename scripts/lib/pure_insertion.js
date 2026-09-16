/* pure_insertion.js -- the post-condition every in-place patcher in this project should carry.
 *
 * WHAT IT ASSERTS. That the file the patcher wrote is the file it read with LINES ADDED and none
 * removed, reordered or altered. Every line of the input must still be present, verbatim and whole,
 * in the same order. A greedy scan settles that exactly, in one pass, with no diff library.
 *
 * WHY LINES AND NOT BYTES, which is the version this started as and is the more obvious reading of
 * "pure insertion". Byte-level subsequence is too weak next to a large insertion: the characters of
 * a deleted `if(refs)` can be re-matched, in order, out of the hundreds of characters the patch
 * added a few lines down, and the check passes on a patch that lost a clause. Measured, not
 * feared -- `add_scroll_restore.js` replaces ` window.scrollTo(0,0);` with a block that begins
 * ` rcRestoreScroll(y);` and goes on to contain `window.scrollTo(0,y)`, and byte-level called that
 * an insertion. At line granularity a deleted or edited line cannot hide inside an inserted one,
 * because the match has to be a whole line. `restore_login_wall.js` had it right first.
 *
 * WHY IT EXISTS, and it is not hypothetical. `add_detail_rail.js` shipped a patch whose three
 * anchors each matched exactly one occurrence, whose wrappers balanced, whose page rendered, and
 * whose only symptom was the clinical disclaimer quietly four words shorter. Every assertion in
 * that script was about what the patch FOUND. None was about what the patch LEFT. An assertion on
 * the diff catches a whole class of defect that an assertion on the anchors cannot, because the
 * anchors are exactly the part the author was already thinking about.
 *
 * WHY A SHARED FILE rather than the bespoke UNDO table `add_detail_rail.js` grew. That table had to
 * name each edit's output and its input, and its FIRST version was itself wrong -- it removed a
 * substring by indexOf and took the first `</div>` in a 750 kB file, so it failed on a correct run.
 * A check that is hard to write correctly will be written incorrectly, or skipped, in the fortieth
 * script. This needs no table: it is handed the before and after strings and works them out.
 *
 * DECLARED EDITS. A patcher that legitimately REPLACES bytes -- `self_host_fonts.js` repointing a
 * stylesheet, `upgrade_audio_player.js` swapping a function body, `strip_service_worker.js` cutting
 * the registration out -- is not a pure insertion, and pretending otherwise would mean either a
 * useless check or a disabled one. Those pass `edits`: a list of [label, whatWasWritten,
 * whatItReplaced] triples, in the order the patcher applied them.
 *
 * The edits are REPLAYED FORWARD onto a copy of the input, not unwound backwards off the output.
 * That was the first design and it broke on the first real script it met: `build_ios_variant.js`
 * DELETES regions, so `whatWasWritten` is the empty string, and "find the one occurrence of ''"
 * matched 732,809 times. Replaying forward has no such case -- a deletion is just a replacement
 * with '' -- and it asks for uniqueness in the file the patcher itself checked, which is the file
 * the patcher's own assertions are written against. What the check then states is the strong
 * version: the output is the input with EXACTLY the declared edits applied, plus whole lines added
 * and nothing else touched.
 *
 * WHAT IT DOES NOT ASSERT, stated plainly because the gap is easy to mistake for coverage. A
 * DECLARED edit is reversed using the very strings the patcher used to make it, so an error INSIDE
 * a replacement -- a clause dropped from the new text, a typo in the code being inserted -- is
 * invisible here and always will be. Measured: mutating `add_scroll_restore.js` so its rewritten
 * `back()` loses `paint(...)`'s argument passes this check, correctly, because that edit was
 * declared and the declaration moved with it.
 *
 * What it catches is COLLATERAL damage: the bytes a patcher touched that nobody meant it to touch.
 * That is the disclaimer bug's actual shape -- the anchors were all correct and something else in
 * the file came out shorter -- and it is the failure mode that survives review, because the author
 * is looking at the edits they wrote. Confirmed by `verify_pure_insertion.js`'s tracker case 3: an
 * edit made outside the helper, so nothing declared it, is rejected.
 *
 * It also does not assert that the insertions are the right ones or in the right place; those are
 * the patcher's own anchor and count assertions, which this sits beside rather than replaces. And
 * it cannot see a change to a file the patcher did not read -- pass every file it rewrites, or
 * check that one separately with its own before/after pair.
 *
 * Calibrated by `scripts/verify_pure_insertion.js`, which runs it against deliberately broken
 * outputs -- a deleted word, a moved block, a rewritten identifier, a truncation -- and requires
 * each to FAIL. A guard nobody has seen fail is decoration.
 */
'use strict';

/* Greedy is not an approximation here. If the earliest possible match of `a` in `b` runs out, no
   match exists at all, so the first element of `a` this cannot place is a genuine loss. Used on
   arrays of lines for the assertion, and on strings for the byte-level detail in a failure. */
function firstLostIndex(a, b) {
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) i++;
    j++;
  }
  return i === a.length ? -1 : i;
}

function firstLostLine(before, after) {
  return firstLostIndex(before.split('\n'), after.split('\n'));
}

/* The inserted LINES, as [atLineInBefore, lines[]]. Same greedy walk; everything in `b` the walk
   skipped is an insertion. Only used for the summary line. */
function insertions(before, after) {
  const a = before.split('\n'), b = after.split('\n');
  const out = [];
  let i = 0, j = 0, run = [];
  while (j < b.length) {
    if (i < a.length && a[i] === b[j]) {
      if (run.length) { out.push([i, run]); run = []; }
      i++;
    } else {
      run.push(b[j]);
    }
    j++;
  }
  if (run.length) out.push([i, run]);
  return out;
}

function ctx(s, i, w = 70) {
  return JSON.stringify(s.slice(Math.max(0, i - w), i + w));
}

/* opts: { before, after, edits = [], label = 'this edit', quiet = false }
   Returns the insertion list. Calls process.exit(1) on failure, the way every other guard here
   does -- a patcher that has already written nothing should stop, not carry on and report. */
function pureInsertion(opts) {
  const { before, after, edits = opts.undo || [], label = 'this edit', quiet = false } = opts;
  if (typeof before !== 'string' || typeof after !== 'string') {
    throw new TypeError('pureInsertion needs `before` and `after` strings');
  }

  /* Replay the declared edits forward onto the input. */
  let t = before;
  for (const [what, written, replaced] of edits) {
    if (replaced === '') continue;          // an insertion with no anchor; the line check covers it
    const n = t.split(replaced).length - 1;
    if (n !== 1) {
      console.error(`FAIL: replaying ${what} found ${n} copies of what it says it replaced, expected 1.`);
      console.error('      A declared edit has to name a needle that is unique in the file AT THE POINT');
      console.error('      it was applied. Lengthen it, or declare the edits in the order they ran --');
      console.error('      do not loosen this check.');
      process.exit(1);
    }
    t = t.replace(replaced, written);
  }

  const lost = firstLostLine(t, after);
  if (lost >= 0) {
    const lines = t.split('\n');
    console.error(`FAIL: ${label} is not a pure insertion -- it removed, moved or rewrote a shipped line.`);
    console.error(`      first line that does not survive, line ${lost + 1} of the replayed input:`);
    console.error(`        ${JSON.stringify(lines[lost])}`);
    const at = firstLostIndex(t, after);           // byte-level, purely to point at the neighbourhood
    if (at >= 0) console.error(`        result near there: ${ctx(after, Math.min(at, after.length))}`);
    if (edits.length) {
      console.error('      (measured AFTER replaying the ' + edits.length +
                    ' declared edit(s); an UNdeclared one lands here.)');
    }
    console.error('      If this edit is a deliberate rewrite, DECLARE it -- do not relax the check.');
    process.exit(1);
  }

  const ins = insertions(t, after);
  const added = ins.reduce((n, [, ls]) => n + ls.length, 0);
  if (!quiet) {
    const decl = edits.length ? `, ${edits.length} declared edit(s) replayed` : '';
    console.log(`  ok    pure insertion: ${ins.length} run(s), +${added} line(s)${decl}; ` +
                'every other line survives whole and in order');
  }
  return ins;
}

/* ---------------------------------------------------------------------------------------------
 * tracker(): how the forty patchers adopt this without forty different diffs.
 *
 * Nearly every patcher here funnels its edits through a local helper -- `replaceOnce`, `sub`, `cut`
 * -- that asserts the needle occurs exactly once and then replaces it. The signatures all differ
 * (argument order, closure over `s` vs returning it), so a shared helper would have meant rewriting
 * every call site in every script. A tracker does not: ONE line goes inside each existing helper,
 * and the call sites are untouched.
 *
 * It also removes the judgement call that makes a hand-written undo table wrong. The author does
 * not decide whether an edit is an insertion or a rewrite; `step()` decides, by asking whether the
 * needle survives inside its replacement. So a patcher cannot quietly under-declare, and an edit
 * that changes from an insertion to a rewrite during a later revision re-classifies itself.
 *
 * A patcher that splices with slice() instead of a helper calls `step()` directly, or declares the
 * rewrite with `rewrite()` where there is no single before/after pair to hand over.
 * ------------------------------------------------------------------------------------------- */
function tracker(scriptPath) {
  const name = String(scriptPath || 'this patcher').split('/').pop();
  const rewrites = [];
  let steps = 0, inserts = 0;
  return {
    /* Record one intended edit, in the order it is applied. Call it BEFORE performing the edit, or
     * at least with the same pair the edit uses -- the replay happens in this order.
     *
     * EVERY step is declared, including one whose replacement plainly contains its needle. The
     * first draft classified them -- "the needle survives, so this is an insertion, no need to
     * declare it" -- and that was a mistake twice over. It has to be got right for the check to be
     * sound, so it is one more thing that can be got wrong; and declaring an edit that did not need
     * declaring costs nothing, while NOT declaring one that did means the difference lands in the
     * final comparison as an unexplained change. Declare everything, and what the check states is
     * the strongest available: the output is the input with exactly these edits applied.
     */
    step(label, from, to) {
      steps++;
      if (typeof from !== 'string' || typeof to !== 'string') {
        throw new TypeError(`${name}: step(${label}) needs the before and after strings`);
      }
      if (to.includes(from)) inserts++;
      rewrites.push([label, to, from]);
      return to;
    },
    /* For an edit with no single before/after pair to hand to step() -- a deletion, or a splice
       built from parts. Same effect: declared, and reversed before the comparison. */
    rewrite(label, written, replaced) { rewrites.push([label, written, replaced]); steps++; },
    /* The post-condition. Call it immediately before the write, never after. */
    assert(before, after, opts = {}) {
      const ins = pureInsertion(Object.assign({
        before, after, edits: rewrites, label: `${name}'s edit`,
      }, opts));
      if (!opts.quiet) {
        console.log(`        ${steps} declared edit(s), every one replayed onto the input`);
      }
      return ins;
    },
    /* A patcher that edits a SECOND file through the same helper resets between them -- the edits
       recorded for index.html cannot be replayed against sw.js, and leaving them would fail the
       second assert for the wrong reason. Assert the first file, reset, then the next. */
    reset() { rewrites.length = 0; steps = 0; inserts = 0; },
    get rewrites() { return rewrites.slice(); },
  };
}

module.exports = { pureInsertion, tracker, firstLostIndex, firstLostLine, insertions };
