#!/usr/bin/env node
/* verify_listing_counts.js <site-root> [doc...]
 *
 * Fail if a store listing quotes a number the shipped content does not support.
 *
 * WHY THIS AND NOT JUST read_shipped_counts.js. That script derives the truth; it does not check
 * that anything USES it. The documented failure in this project is never "nobody could find the
 * number" -- it is "a document stated a count, a later document copied it, and by the time anyone
 * looked, three disagreed and none matched the app". read_shipped_counts.js exists because of that
 * and its own header says four of its numbers had moved by the time anyone re-read the sentence
 * claiming they were fresh. The missing half is a checker that reads the DOCUMENTS.
 *
 * DELIBERATELY NARROW, because a noisy checker is worse than none here -- see the C1 note in
 * CLAUDE.md, where a plausible-sounding heuristic produced 225 hits at ~0.4% precision and the
 * right answer was to delete it. This does not extract numbers in general. It has a fixed table of
 * claims, each a phrase specific enough that a match is certainly that claim, and it compares every
 * occurrence against the derived value. A phrase that appears nowhere is reported as ABSENT and is
 * not a failure: a listing need not quote every count.
 *
 * BOTH of its false positives were found by running it, not by reading it, and both are fixed at
 * the point they occur: "Narrated audio for 31 conditions" made a bare /(\d+) conditions/ report the
 * listing as claiming 31 conditions, and a section quoting a wrong number in order to correct it was
 * read as asserting it. If you widen a pattern here, run it against both drafts and read every line.
 *
 * WHAT IT HAS CAUGHT, which is the only measure of a checker worth reporting:
 *   - "197 of them illustrated" in app-store-submission-draft.md, where 231 USMLE items carry an
 *     illustration (197 real images plus 34 vector schematics). It quoted the photographic subset
 *     and understated the app. FIXED -- so that document now passes, and this header no longer
 *     claims a live failure, which it did for a while after the fix landed.
 *   - "2,900+ USMLE & NCLEX questions" in the 2026-08-30 launch email, already sent. See the
 *     label-to-number section below: the number was defensible, the noun was wrong by ~2.5x, and
 *     the original version of this file would have passed it.
 *   - "3,000 practice questions" in my own replacement copy for that email, because "practice
 *     questions" already means the 1,840 condition quizzes. The fix for an ambiguity reintroduced
 *     it. Found by running this on the proposed wording before anyone used it.
 *
 * Usage: node scripts/verify_listing_counts.js <site-root> [doc.md ...]
 *        defaults to the two store drafts.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = process.argv[2];
if (!ROOT) {
  console.error('usage: verify_listing_counts.js <site-root> [doc.md ...]');
  process.exit(2);
}
const HERE = __dirname;
const REPO = path.join(HERE, '..');
let docs = process.argv.slice(3).filter(a => !a.startsWith('--'));
if (!docs.length) docs = [
  path.join(REPO, 'native', 'PLAY-LISTING-DRAFT.md'),
  path.join(REPO, 'app-store-submission-draft.md'),
  /* The feature graphic has "183 conditions" and "1,020 original illustrations" painted into it.
     A stale number there is worse than one in a document: it is a picture, so nobody re-reads it. */
  path.join(REPO, 'native', 'play-graphics', 'feature-graphic.html'),
];

/* ---- the truth, derived ------------------------------------------------------------------ */
let out;
try {
  out = execFileSync('node', [path.join(HERE, 'read_shipped_counts.js'), ROOT], { encoding: 'utf8' });
} catch (e) {
  console.error('FAIL: read_shipped_counts.js could not derive the counts -- fix that first.');
  console.error(String(e.stdout || e.message).split('\n').slice(-8).join('\n'));
  process.exit(1);
}
const derived = {};
for (const line of out.split('\n')) {
  /* Sub-rows (the four Step totals, the real/schematic split) are indented FOUR spaces, not two,
     so an anchored ^\s{2} misses exactly the rows the USMLE claims need. Match any indent. */
  const m = line.match(/^\s+(\S.*?)\s{2,}(\S+)(?:\s{2,}|\s*$)/);
  if (m) derived[m[1].trim()] = m[2].trim();
}
const need = k => {
  if (!(k in derived)) { console.error(`FAIL: read_shipped_counts.js did not report "${k}"`); process.exit(1); }
  return Number(derived[k]);
};

/* ---- the claims ---------------------------------------------------------------------------
 * Each phrase is specific enough that a match is certainly that claim. Bare patterns like
 * /(\d+) specialties/ are avoided on purpose: 21 condition categories, 25 resident specialties and
 * 25 guideline specialties would all match one and the checker would flag correct copy. */
const CLAIMS = [
  /* Negative lookbehind, because "Narrated audio for 31 conditions" also ends in "conditions" and
     the first run duly reported the listing as claiming 31 conditions. The audio count has its own
     claim below; this one must not swallow it.
     The (?<![\d,]) is the second half of that fix and is not optional: with only the "audio for"
     lookbehind the engine simply restarts one character later and matches "1 conditions" out of
     "31 conditions", so the checker went from claiming the listing said 31 to claiming it said 1.
     An exclusion that can be sidestepped by starting mid-number is not an exclusion. */
  ['conditions',              need('conditions'),                /(?<![\d,])(?<!audio for )([\d,]+) conditions\b/g],
  ['illustrated galleries',   need('galleries (real artwork)'),  /([\d,]+) illustrated galleries/g],
  ['illustration pages',      need('illustration pages'),        /([\d,]+) original (?:full-page )?(?:clinical )?illustrations/g],
  ['illustration titles',     need('illustration pages'),        /([\d,]+) illustration titles/g],
  ['quiz questions',          need('quiz questions'),            /([\d,]+) practice questions/g],
  ['USMLE items',             need('USMLE items'),               /([\d,]+) USMLE-style items/g],
  ['USMLE Step 1',            need('Step 1'),                    /Step 1 \(([\d,]+)\)/g],
  ['USMLE Step 2 CK',         need('Step 2 CK'),                 /Step 2 CK \(([\d,]+)\)/g],
  ['USMLE Step 3 Day 1',      need('Step 3 Day 1'),              /Step 3 Day 1 \(([\d,]+)\)/g],
  ['USMLE Step 3 Day 2',      need('Step 3 Day 2'),              /Day 2 \(([\d,]+)\)/g],
  ['illustrated USMLE items', need('illustrated USMLE items'),   /([\d,]+) of them illustrated/g],
  ['NCLEX items',             need('NCLEX items'),               /([\d,]+) NCLEX-style items/g],
  ['drug entries',            need('drug entries'),              /([\d,]+) drug entries/g],
  ['calculators',             need('calculators'),               /([\d,]+) clinical calculators/g],
  ['guideline entries',       need('guideline entries'),         /([\d,]+) (?:clinical )?guideline updates/g],
  ['resident entries',        need('resident entries'),          /([\d,]+) resident-level entries/g],
  ['audio recordings',        need('audio recordings'),          /audio for ([\d,]+) conditions/g],

  /* ---- LABEL-TO-NUMBER pairing, added 2026-09-14 --------------------------------------------
     Everything above asks "is this number right?". The worst claim this project has actually
     published asked a different question and this checker would have PASSED it: the 2026-08-30
     launch email said "2,900+ USMLE & NCLEX questions with rationales", and ~3,000 IS the total
     question count -- but USMLE + NCLEX is 1,160. The number was defensible; the NOUN was wrong,
     by a factor of about 2.5. A guard that only validates figures against the product as a whole
     cannot see that, because the figure exists somewhere in the product.
     Same shape as the other error in that email: "183 conditions across 25 specialties". 25 is a
     real count (resident entries, guideline updates) on a different axis; the conditions span 21
     categories. Right numbers, wrong noun. */
  ['USMLE & NCLEX questions', need('USMLE items') + need('NCLEX items'),
   /([\d,]+)\+? ?(?:USMLE\s*(?:&|and)\s*NCLEX|NCLEX\s*(?:&|and)\s*USMLE)[- ]?(?:style )?questions/gi],
  ['categories per conditions', need('condition categories'),
   /conditions across ([\d,]+) (?:specialties|categories)/gi],

  /* The TOTAL, under a phrase that cannot be confused with the 1,840. Found by running this
     checker on my own proposed replacement copy: "3,000 practice questions" failed, because
     "practice questions" already means the condition quizzes in both store listings. The number
     was right and the phrase was taken -- the very ambiguity the two claims above exist to catch,
     reintroduced by the fix for them. The safe phrasing is explicit about being a sum. */
  ['questions in all', need('quiz questions') + need('USMLE items') + need('NCLEX items'),
   /([\d,]+)\+? questions in all/gi],
];

/* ---- check ---------------------------------------------------------------------------------- */
let bad = 0, checked = 0;
for (const doc of docs) {
  if (!fs.existsSync(doc)) { console.error(`FAIL: ${doc} not found`); bad++; continue; }
  /* Strip double-quoted spans first. A document that DOCUMENTS a correction necessarily contains
     the wrong number -- this file's own section 7 says '"197 of them illustrated" - CORRECTED to
     231', and the first run flagged that quotation as a stale claim. Quoting an old string is not
     asserting it. Found by running the checker, which is the only way this class of false positive
     ever shows up. */
  let text = fs.readFileSync(doc, 'utf8');
  /* An HTML doc wraps its numbers in markup -- the feature graphic has "<b>183</b> conditions" --
     so the patterns never match and every claim reports as absent, which looks like coverage and
     is the opposite. Strip tags first. Caught by adding the graphic and seeing a clean run of
     "absent" on a file that visibly quotes two of these counts. */
  if (/\.html?$/i.test(doc)) text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/"[^"\n]{0,200}"/g, ' ');
  console.log(`\n=== ${path.relative(REPO, doc)} ===`);
  for (const [label, want, re] of CLAIMS) {
    /* A trailing "+" makes the claim a FLOOR, not an equality: "1,000+ original illustrations" is
       honest when 1,020 ship, and failing it would push copy toward brittle exact figures that go
       stale on the next content drop. So "N+" passes when derived >= N, bare "N" must match.
       This is also precisely why "2,900+ USMLE & NCLEX questions" is a failure and not a rounding:
       1,160 is not >= 2,900. Reading "+" as "about right" would have excused the real defect. */
    const hits = [...text.matchAll(re)].map(m => ({
      n: Number(m[1].replace(/,/g, '')), atLeast: /\+/.test(m[0]),
    }));
    if (!hits.length) { console.log(`  --   ${label}: absent`); continue; }
    checked += hits.length;
    const wrong = hits.filter(h => h.atLeast ? want < h.n : h.n !== want);
    if (wrong.length) {
      const shown = [...new Set(wrong.map(h => h.atLeast ? `${h.n}+` : String(h.n)))].join(', ');
      console.log(`  FAIL ${label}: says ${shown} -- shipped content has ${want}`);
      bad++;
    } else {
      console.log(`  ok   ${label}: ${want}${hits.length > 1 ? ` (${hits.length} mentions)` : ''}`);
    }
  }
}

console.log('');
if (bad) {
  console.log(`${bad} stale claim(s) across ${docs.length} document(s). Re-derive with:`);
  console.log(`  node scripts/read_shipped_counts.js ${ROOT}`);
  process.exit(1);
}
console.log(`all ${checked} quoted count(s) match the shipped content.`);
