/* Emit a review summary of every citation check, grouped by verdict.
 *
 * Usage: node scripts/build_corrections_summary.js <out.md> <label>=<file.json> ...
 *   e.g. node scripts/build_corrections_summary.js guidelines-staging/CORRECTIONS-derm.md \
 *          "Dermatology 2025"=guidelines-staging/derm-2025.json ...
 *
 * Reads the `verify` blocks the staging files already carry, rather than diffing against a stored
 * copy of the submitted text. diff_guidelines.js does the field-level table where a verbatim
 * "before" file exists; this gives the reviewable summary where it does not, and it cannot drift
 * from what shipped because it reads the same file the merge does.
 *
 * Ordered worst-first: a reviewer with limited time should meet the reversed findings before the
 * date corrections, not after twelve of them.
 */
'use strict';
const fs = require('fs');

const [, , OUT, ...PAIRS] = process.argv;
if (!OUT || !PAIRS.length) {
  console.error('usage: build_corrections_summary.js <out.md> <label>=<file.json> ...');
  process.exit(2);
}

/* Severity by what a reader would take away if the entry shipped unchanged. */
function rank(status) {
  const s = status.toLowerCase();
  if (/opposite|inverted|contradicted|reversed/.test(s)) return 0;
  if (/not found|does not exist/.test(s)) return 1;
  if (/inflated/.test(s)) return 2;
  if (/not independently verified|partially corroborated/.test(s)) return 3;
  if (/replaced|wrong/.test(s)) return 4;
  /* Order matters: "matched with corrections" must be tested BEFORE the bare "matched" case, or
     the substring makes every corrected entry read as needing no correction. That mis-sorted the
     first run of this script -- 14 entries landed under "no correction needed" when only 4 had. */
  if (/^matched with correction|corrected|with correction/.test(s)) return 5;
  if (/^matched$|^as submitted$/.test(s)) return 6;
  return 5;
}
const BUCKET = [
  'Findings stated backwards — a reader would learn the opposite of the published result',
  'Cited study could not be found',
  'Evidence level inflated — case report presented as a trial',
  'Citation not independently verified',
  'Wrong study or replaced',
  'Corrected — dates, journals, numbers, strength of claim',
  'Matched — no correction needed',
];

const rows = [];
for (const pair of PAIRS) {
  const eq = pair.lastIndexOf('=');
  const label = pair.slice(0, eq), file = pair.slice(eq + 1);
  JSON.parse(fs.readFileSync(file, 'utf8')).forEach((a, i) => {
    const status = (a.verify && a.verify.status) || 'no verify block';
    rows.push({label, n: i + 1, title: a.title, status, note: (a.verify && a.verify.note) || '', r: rank(status)});
  });
}

let md = '# Clinical guideline citation checks — for sign-off\n\n';
md += `${rows.length} entries checked. Grouped worst-first by what a reader would take away if the\n`
    + `entry shipped as submitted. Every entry below is live in the app in its CORRECTED form; this\n`
    + `document records what was changed and why, so any of it can be reverted.\n\n`;

const counts = BUCKET.map((_, b) => rows.filter(x => x.r === b).length);
md += '| verdict | entries |\n|---|---|\n';
BUCKET.forEach((b, i) => { if (counts[i]) md += `| ${b} | ${counts[i]} |\n`; });

for (let b = 0; b < BUCKET.length; b++) {
  const group = rows.filter(x => x.r === b);
  if (!group.length) continue;
  md += `\n---\n\n## ${BUCKET[b]}\n`;
  for (const x of group) {
    md += `\n### ${x.label} #${x.n} — ${x.title}\n\n**${x.status}**\n\n${x.note}\n`;
  }
}

fs.writeFileSync(OUT, md);
console.log(`wrote ${OUT} — ${rows.length} entries`);
BUCKET.forEach((b, i) => { if (counts[i]) console.log(`  ${counts[i]}  ${b}`); });
