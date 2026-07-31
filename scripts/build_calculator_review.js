/* Generate calculators-staging/CALCULATORS-for-review.md from calculators.json.
 *
 * Usage: node scripts/build_calculator_review.js [--check]
 *        --check  exits 1 if the committed doc is out of date (no write)
 *
 * The doc was hand-maintained and drifted the moment the data changed: after the
 * medical re-read it still showed the old Wells DVT band, the old MAP citation
 * and the pre-correction caveats, and it had acquired a duplicate copy of
 * section 10 from an earlier append. Everything in it is derivable from the
 * JSON, so derive it -- a review document that disagrees with what shipped is
 * worse than none, because it is what the physician reads instead of the app.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'calculators-staging', 'calculators.json');
const OUT = path.join(__dirname, '..', 'calculators-staging', 'CALCULATORS-for-review.md');
const CHECK = process.argv.includes('--check');
const C = JSON.parse(fs.readFileSync(SRC, 'utf8'));

/* Take the check count from the test runner itself rather than re-deriving it.
   A hand-rolled formula here disagreed with the suite by 88 on the first try,
   and a review document quoting a made-up number is exactly the kind of thing
   this generator exists to prevent. */
const checks = (() => {
  const r = require('child_process').spawnSync(process.execPath,
    [path.join(__dirname, 'test_calculators.js')], { encoding: 'utf8' });
  if (r.status !== 0) { console.error('FAILED: test_calculators.js does not pass; fix that first'); process.exit(1); }
  const n = (r.stdout.match(/^\s+ok\b/gm) || []).length;
  if (!n) { console.error('FAILED: could not count checks in the test output'); process.exit(1); }
  return n;
})();

const rng = b => b.max > 900 ? '≤ max' : '≤ ' + b.max;
const inputLine = i => {
  if (i.type === 'check') return `- ${i.label} — **${i.points > 0 ? '+' : ''}${i.points}**`;
  if (i.type === 'select') return `- ${i.label} — ` + i.options.map(o => `${o[0]} → \`${o[1]}\``).join(', ');
  return `- ${i.label} — ` + (i.units ? i.units.map(u => u[0]).join(' / ') : 'number');
};
const vec = t => {
  const inn = Object.keys(t.in).length ? Object.entries(t.in).map(([k, v]) => `${k}=${v}`).join(', ') : '(none selected)';
  const out = Object.entries(t.out).map(([k, v]) => `${k} ${v}`).join(', ');
  return `| ${inn} | ${out} |`;
};

let md = `# Clinical Calculators — for review

Ten calculators. Nine are scores and indices; the tenth is a weight-based dosage calculator, framed as practice-and-check rather than point-of-care preparation.

> **Generated from \`calculators.json\` by \`scripts/build_calculator_review.js\` — do not hand-edit.**
> Re-run it after any content change, or this document goes stale against what actually ships.

> **A medical re-read was done on 2026-07-31 and found one real error** — Wells DVT was calling a
> score of 1 "DVT likely" when the validated threshold is ≥2. That and four currency fixes are
> recorded in **\`CORRECTIONS-calculators.md\`**, which also lists what was checked and found
> correct. Everything below reflects the corrected content.

Every formula is exercised by \`scripts/test_calculators.js\` against the test vectors shown. **${checks} checks pass.** What the tests cannot check is whether the clinical framing is right — that is what needs your eyes.

| # | Calculator | Output | Source |
|---|---|---|---|
`;
C.forEach((c, n) => {
  const out = c.kernel === 'sum'
    ? 'score ' + Math.min(0, ...c.inputs.filter(i => i.type === 'check').map(i => i.points))
      + ' to ' + c.inputs.reduce((a, i) => a + (i.type === 'check' ? Math.max(i.points, 0) : Math.max(...i.options.map(o => o[1]))), 0)
    : c.kernel === 'dose' ? 'dose + volume' : 'formula';
  md += `| ${n + 1} | ${c.name} | ${out} | ${c.citation.split(/\.\s/)[0]} |\n`;
});

C.forEach((c, n) => {
  md += `\n---\n\n## ${n + 1}. ${c.name}\n\n**Purpose.** ${c.purpose}\n\n**Inputs**\n\n`;
  md += c.inputs.map(inputLine).join('\n') + '\n\n**Interpretation**\n\n';
  md += c.bands.map(b => `- ${rng(b)}: **${b.label}**` + (b.note ? ` — ${b.note}` : '')).join('\n');
  md += '\n\n**Caveats shown to the student**\n\n';
  md += c.caveats.map(x => '- ' + x).join('\n');
  md += `\n\n**Source.** ${c.citation}\n`;
  if (c.url) md += `<${c.url}>\n`;
  md += `\n**Test vectors (all passing)**\n\n| input | expected |\n|---|---|\n`;
  md += c.tests.map(vec).join('\n') + '\n';
});

md += `\n---\n\n*${C.length} calculators, ${C.reduce((a, c) => a + c.tests.length, 0)} test vectors, ${checks} checks.*\n`;

if (CHECK) {
  const cur = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  if (cur !== md) { console.error('FAILED: CALCULATORS-for-review.md is out of date - re-run without --check'); process.exit(1); }
  console.log('review doc is up to date'); process.exit(0);
}
fs.writeFileSync(OUT, md);
console.log(`wrote ${OUT}\n  ${C.length} calculators, ${C.reduce((a, c) => a + c.tests.length, 0)} vectors, ${checks} checks`);
