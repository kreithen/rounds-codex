/* Side-by-side before/after for a guideline year file, for physician sign-off.
 *
 * Usage: node scripts/diff_guidelines.js <out.md> <year>=<before.json>=<after.json> ...
 *
 * Pairs entries BY POSITION, not by title -- a corrected entry usually has a different title (that
 * is often the whole correction), so matching on title would report every fix as a delete plus an
 * add. Position is stable because a correction rewrites slot N in place; the script asserts the two
 * files are the same length so a dropped or added entry is an error rather than a silent misalign.
 *
 * Emits only the fields that actually changed, so the reviewer reads the delta rather than
 * re-reading twenty unchanged summaries looking for the edit.
 */
'use strict';
const fs = require('fs');

const [, , OUT, ...PAIRS] = process.argv;
if (!OUT || !PAIRS.length) {
  console.error('usage: diff_guidelines.js <out.md> <year>=<before.json>=<after.json> ...');
  process.exit(2);
}

const FIELDS = ['title', 'journal', 'date', 'breakthrough', 'impact', 'practical', 'link', 'url'];
const LABEL = {
  title: 'Title', journal: 'Journal', date: 'Date', breakthrough: 'The breakthrough',
  impact: 'Clinical guideline impact', practical: 'Practical implications',
  link: 'Link text', url: 'URL',
};

let md = '# Anesthesiology guideline corrections — for sign-off\n\n';
md += 'Every change proposed against the list currently live. Unchanged fields are omitted.\n\n'
    + 'Approve the whole set, or name the entries to keep as-is and I will merge the rest.\n';

let changedTotal = 0, unchangedTotal = 0;

for (const pair of PAIRS) {
  const [year, beforeFile, afterFile] = pair.split('=');
  const before = JSON.parse(fs.readFileSync(beforeFile, 'utf8'));
  const after = JSON.parse(fs.readFileSync(afterFile, 'utf8'));
  if (before.length !== after.length) {
    console.error(`FAILED (${year}): ${before.length} before vs ${after.length} after — entries are paired by position, so the counts must match`);
    process.exit(1);
  }

  md += `\n---\n\n## ${year}\n`;
  before.forEach((b, i) => {
    const a = after[i];
    const diffs = FIELDS.filter(f => (b[f] || '') !== (a[f] || ''));
    if (!diffs.length) { unchangedTotal++; md += `\n### ${i + 1}. ${b.title}\n\nNo change.\n`; return; }
    changedTotal++;
    const status = (a.verify && a.verify.status) || 'changed';
    md += `\n### ${i + 1}. ${b.title}\n\n**${status}**\n\n`;
    if (a.verify && a.verify.note) md += `${a.verify.note}\n\n`;
    md += `| field | live now | proposed |\n|---|---|---|\n`;
    for (const f of diffs) {
      const cell = s => String(s || '_(none)_').replace(/\|/g, '\\|').replace(/\n+/g, ' ');
      md += `| **${LABEL[f]}** | ${cell(b[f])} | ${cell(a[f])} |\n`;
    }
  });
}

md += `\n---\n\n**${changedTotal} entries changed, ${unchangedTotal} unchanged.**\n`;
fs.writeFileSync(OUT, md);
console.log(`wrote ${OUT} — ${changedTotal} changed, ${unchangedTotal} unchanged (${fs.statSync(OUT).size} bytes)`);
