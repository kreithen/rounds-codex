/* Build the readable document that goes into Google Drive alongside the raw JSON.
 *
 * Usage: node scripts/build_guidelines_doc.js <spec-name> <out.md> <year>=<file.json> ...
 *   e.g. node scripts/build_guidelines_doc.js Anesthesiology \
 *          guidelines-staging/Anesthesiology-clinical-guidelines.md \
 *          2025=guidelines-staging/anes-2025.json 2026=guidelines-staging/anes-2026.json
 *
 * Generated from the staging JSON rather than written by hand, so the document and the app can
 * never disagree about what a study says.
 *
 * THE verify BLOCK IS INCLUDED HERE, unlike in the app merge. This document is the physician's
 * review copy -- the whole point is to put the citation check next to the claim it applies to.
 * Any status other than "matched" is called out inline so it cannot be skimmed past.
 */
'use strict';
const fs = require('fs');

const [, , SPEC_NAME, OUT, ...PAIRS] = process.argv;
if (!SPEC_NAME || !OUT || !PAIRS.length) {
  console.error('usage: build_guidelines_doc.js <spec-name> <out.md> <year>=<file.json> ...');
  process.exit(2);
}

let md = `# ${SPEC_NAME} — Updated Clinical Guidelines\n\n`;
md += `Breakthrough studies and consensus guidelines reshaping standards of practice, as they appear\n`
    + `in Rounds Codex Resident mode (${SPEC_NAME} → Updated Clinical Guidelines).\n\n`
    + `Each entry carries a **citation check** recorded when the list was assembled. A check is a\n`
    + `literature search, not a medical re-read — see \`VERIFICATION.md\` for the method and its limits.\n`;

const counts = [];
for (const pair of PAIRS) {
  const eq = pair.indexOf('=');
  const year = pair.slice(0, eq), file = pair.slice(eq + 1);
  const items = JSON.parse(fs.readFileSync(file, 'utf8'));
  counts.push(`${year}: ${items.length}`);

  const flagged = items.filter(a => a.verify && a.verify.status !== 'matched').length;
  md += `\n---\n\n## ${year}\n\n`;
  md += `${items.length} entries` + (flagged ? ` · **${flagged} with a citation problem — see the checks below**` : ' · all citations matched') + '\n';

  items.forEach((a, i) => {
    md += `\n### ${i + 1}. ${a.title}\n\n`;
    const meta = [a.journal, a.date].filter(Boolean).join(' · ');
    if (meta) md += `*${meta}*\n\n`;
    if (a.breakthrough) md += `**The breakthrough.** ${a.breakthrough}\n\n`;
    if (a.impact) md += `**Clinical guideline impact.** ${a.impact}\n\n`;
    if (a.practical) md += `**Practical implications.** ${a.practical}\n\n`;
    if (a.url) md += `[${a.link || 'Read the article'}](${a.url})\n\n`;
    if (a.verify) {
      const bad = a.verify.status !== 'matched';
      md += `> **Citation check — ${bad ? '⚠ ' : ''}${a.verify.status}.** ${a.verify.note}\n`;
    }
  });
}

fs.writeFileSync(OUT, md);
console.log(`wrote ${OUT} (${counts.join(', ')}, ${fs.statSync(OUT).size} bytes)`);
