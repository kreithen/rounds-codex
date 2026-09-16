#!/usr/bin/env node
/* verify_patchers_guarded.js -- every in-place patcher must carry the pure-insertion post-condition.
 *
 * WHY A SWEEP AND NOT A LIST. The forty-odd scripts that edit index.html in place were hardened one
 * by one; a list of which ones were done would be correct on the day it was written and wrong the
 * first time someone adds the forty-first. So the set is DERIVED from the source: a script that
 * reads a file as text into a variable and later writes that same variable back is patching a file
 * in place, and that is exactly the shape the check exists for. A new patcher is covered the moment
 * it is written, without anyone remembering to add it here.
 *
 * WHAT IT DOES NOT CATCH, said plainly rather than implied by silence:
 *
 *   * It reads source, not behaviour. A script can require the library, call assert(), and still be
 *     asserting the wrong pair of strings. `verify_pure_insertion.js` calibrates the checker; this
 *     only checks the checker is wired in.
 *   * A patcher that writes a SECOND file it also read -- _redirects, sw.js, content/*.json -- is
 *     only partly covered. Several assert their main file and not the secondary one, because the
 *     secondary edits are appends to files of a few hundred bytes with their own count assertions,
 *     where the 750 kB surgery risk this exists for does not live. Those are listed below by name
 *     so the gap is visible rather than assumed away.
 *
 *   node scripts/verify_patchers_guarded.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const DIR = __dirname;

/* Scripts that read and write text but are not in-place patchers of a shipped file. Each needs a
   reason, not just an entry -- an exemption list with no reasons becomes the place defects go. */
const EXEMPT = {
  // (none at present -- every derived patcher is wired. Kept so the next one has a home.)
};

/* Known partial coverage: the main file is asserted, a secondary one is not. Named here on
   purpose. Moving one of these to full coverage means deleting its line. */
const SECONDARY_UNCOVERED = {
  'add_gallery_share.js':         '_redirects (an appended rewrite rule)',
  'add_guideline_share.js':       '_redirects (an appended rewrite rule)',
  'add_section_share.js':         '_redirects (an appended rewrite rule)',
  'add_clinical_updates_page.js': '_redirects (an appended rewrite rule)',
  'add_calculators.js':           'sw.js and _redirects, plus content/calculators.json (written whole)',
  'add_share_links.js':           '_redirects (written whole, not patched)',
  'fix_audio_caching.js':         '_headers (an appended block)',
  'fix_bmi_units.js':             'content/calculators.json (written whole)',
};

/* Patchers the derivation cannot see, because they write a DERIVED variable rather than the one
   they read (`const out = html.slice(0,i) + x + html.slice(j)`). Checked all the same, by name --
   a short list of known blind spots beats widening the pattern until it matches prose. */
const ALSO = ['repoint_thumbs.js'];

/* This file matches its own detector, because the detector's PATTERNS appear in it as string
   literals. Excluded by name rather than by teaching the matcher to skip regex sources -- a
   text scan reading its own source is a fact about the scan, not a defect to engineer around. */
const SELF = path.basename(__filename);

const files = fs.readdirSync(DIR).filter(f => f.endsWith('.js') && f !== SELF).sort();
const patchers = [];

for (const f of files) {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  /* `x = fs.readFileSync(p, 'utf8')` ... later ... `fs.writeFileSync(q, x)`. Variable identity is
     what makes it an in-place patch: the bytes written are the bytes read, edited. */
  const read = [...src.matchAll(/(\w+)\s*=\s*fs\.readFileSync\([^,]+,\s*['"]utf8['"]\)/g)].map(m => m[1]);
  const wrote = [...src.matchAll(/fs\.writeFileSync\([^,]+,\s*([A-Za-z_$][\w$]*)\s*\)/g)].map(m => m[1]);
  const inPlace = wrote.filter(v => read.includes(v));
  if (inPlace.length || ALSO.includes(f)) patchers.push([f, inPlace.length || 1, src]);
}

console.log('--- verify_patchers_guarded.js ---');
console.log(`  ${patchers.length} script(s) write back a file they read as text\n`);

let bad = 0;
for (const [f, n, src] of patchers) {
  if (f in EXEMPT) { console.log(`  --    ${f.padEnd(34)} exempt: ${EXEMPT[f]}`); continue; }
  const required = /require\(['"]\.\/lib\/pure_insertion['"]\)/.test(src);
  const asserts = (src.match(/RC\.assert\(/g) || []).length;
  const ok = required && asserts > 0;
  if (!ok) bad++;
  const note = SECONDARY_UNCOVERED[f] ? `  (partial: ${SECONDARY_UNCOVERED[f]} not asserted)` : '';
  console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${f.padEnd(34)} ${n} in-place write(s), ` +
              `${asserts} assert(s)${required ? '' : ', DOES NOT REQUIRE THE LIBRARY'}${note}`);
}

/* The library's own calibration has to exist and has to be runnable, or this whole sweep is
   asserting that forty scripts call something nobody has watched fail. */
for (const need of ['lib/pure_insertion.js', 'verify_pure_insertion.js']) {
  const there = fs.existsSync(path.join(DIR, need));
  if (!there) bad++;
  console.log(`  ${there ? 'ok  ' : 'FAIL'}  ${need} present`);
}

console.log();
if (bad) {
  console.log(`  ${bad} problem(s).`);
  console.log('  A new in-place patcher needs three lines: require the library beside fs, capture the');
  console.log('  input right after reading it, and RC.assert(before, after) immediately before the');
  console.log('  write. If its helper replaces text, add RC.step(label, from, to) inside that helper.');
  process.exit(1);
}
console.log(`  all ${patchers.length} in-place patchers carry the pure-insertion post-condition`);
console.log(`  ${Object.keys(SECONDARY_UNCOVERED).length} of them cover their main file only -- listed above, by name`);
