/* Build a review page for authored conditions + their quizzes, for the physician to read before
 * the RC VERIFIED badge goes on.
 *
 * Renders each module field by field under the app's own section names, so what the reviewer reads
 * is what ships rather than a prettied-up summary. Quiz answers are shown marked, with every
 * distractor's rationale, because a wrong `correct` index is the failure no structural check can
 * catch and it is only visible when the answer is read next to its options.
 *
 * Usage: node scripts/build_condition_review.js <conditions-staging.json> <quizzes-staging.json> <out.html>
 */
'use strict';
const fs = require('fs');

const [, , CONDS, QUIZ, OUT] = process.argv;
if (!CONDS || !QUIZ || !OUT) {
  console.error('usage: build_condition_review.js <conditions.json> <quizzes.json> <out.html>');
  process.exit(2);
}

const raw = JSON.parse(fs.readFileSync(CONDS, 'utf8'));
const LIST = Array.isArray(raw) ? raw : Object.values(raw);
const QZ = JSON.parse(fs.readFileSync(QUIZ, 'utf8'));

// authored copy carries <b> for emphasis and nothing else; escape everything, then let <b> back
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = s => esc(s).replace(/&lt;b&gt;/g, '<b>').replace(/&lt;\/b&gt;/g, '</b>');
const ul = (a, cls = '') => `<ul class="lst ${cls}">${a.map(x => `<li>${rich(x)}</li>`).join('')}</ul>`;

const SECTIONS = [
  ['whatItIs',   'What it is',            a => ul(a)],
  ['diagnosis',  'Diagnosis',             a => ul(a)],
  ['meds',       'Medications',           a => `<div class="meds">${a.map(m => `
      <div class="med">
        <div class="drug">${rich(m.drug)}</div>
        <div class="use">${rich(m.use)}</div>
        <div class="note">${rich(m.note)}</div>
      </div>`).join('')}</div>`],
  ['nursing',    'Nursing',               a => ul(a)],
  ['medStudent', 'Medical student',       a => ul(a)],
  // a real clinical sequence, so the numbering carries information
  ['flow',       'Clinical course',       a => `<ol class="flow">${a.map(f => `
      <li><span class="fstage">${esc(f.stage)}</span>
          <span class="ftitle">${rich(f.title)}</span>
          <span class="fdesc">${rich(f.desc)}</span></li>`).join('')}</ol>`],
  ['redFlags',   'Red flags',             a => ul(a, 'flag')],
  ['pearls',     'Pearls',                a => ul(a)],
  ['impress',    'How to impress',        a => ul(a)],
  ['refs',       'References',            a => ul(a, 'refs')],
];

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

const quizBlock = (id) => {
  const q = QZ[id];
  if (!q) return '';
  return `
  <section class="qz" id="${esc(id)}-quiz">
    <h3 class="sec-h">Quiz — ${q.questions.length} questions</h3>
    <p class="sec-note">The marked option is what the app scores as correct. Each other option
      shows the text a reader sees when they pick it.</p>
    ${q.questions.map((it, i) => `
    <article class="q">
      <div class="qnum">Q${i + 1}</div>
      <p class="qstem">${rich(it.q)}</p>
      <ol class="opts">
        ${it.ch.map((c, j) => `
        <li class="${j === it.correct ? 'right' : ''}">
          <span class="let">${LETTERS[j]}</span>
          <span class="otext">${rich(c)}</span>
          ${j === it.correct
            ? `<span class="tag">scored correct</span>`
            : (it.why[j] ? `<span class="owhy">${rich(it.why[j])}</span>` : '')}
        </li>`).join('')}
      </ol>
      <p class="qexp"><span class="lbl">Shown on a correct answer</span>${rich(it.exp)}</p>
    </article>`).join('')}
  </section>`;
};

const module_ = (c) => `
  <section class="mod" id="${esc(c.id)}">
    <header class="mod-h">
      <div class="eyebrow">${esc(c.category)}</div>
      <h2>${esc(c.name)}</h2>
      <p class="tagline">${rich(c.tagline)}</p>
      <div class="meta">
        <span class="code">${esc(c.icd10)}</span>
        <span class="code">${esc(c.id)}</span>
        <span class="badge-off">RC VERIFIED badge off</span>
      </div>
    </header>
    ${SECTIONS.map(([k, label, render]) => c[k] && c[k].length ? `
    <div class="sec">
      <h3 class="sec-h">${label}</h3>
      ${render(c[k])}
    </div>` : '').join('')}
  </section>
  ${quizBlock(c.id)}`;

const nav = LIST.map(c =>
  `<a href="#${esc(c.id)}">${esc(c.name)}</a><a href="#${esc(c.id)}-quiz" class="sub">quiz</a>`
).join('');

const totalQ = LIST.reduce((n, c) => n + (QZ[c.id] ? QZ[c.id].questions.length : 0), 0);

const html = `<title>Two new MSK modules — for review</title>
<style>
:root{
  --ground:#F6F7F9; --surface:#FFFFFF; --ink:#141A20; --muted:#5B6672;
  --rule:#E1E5EA; --accent:#0B6E99; --accent-soft:#E7F1F6;
  --flag:#A82217; --flag-soft:#FBEDEB; --ok:#1B6B41; --ok-soft:#E9F3ED;
  --serif:ui-serif,Charter,"Iowan Old Style",Georgia,serif;
  --sans:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --ground:#0E1216; --surface:#161B21; --ink:#E4E9EE; --muted:#93A0AC;
    --rule:#242B33; --accent:#57BCE0; --accent-soft:#15242C;
    --flag:#EE8A80; --flag-soft:#2A1917; --ok:#71CF95; --ok-soft:#14241B;
  }
}
:root[data-theme="dark"]{
  --ground:#0E1216; --surface:#161B21; --ink:#E4E9EE; --muted:#93A0AC;
  --rule:#242B33; --accent:#57BCE0; --accent-soft:#15242C;
  --flag:#EE8A80; --flag-soft:#2A1917; --ok:#71CF95; --ok-soft:#14241B;
}
*{box-sizing:border-box}
body{
  margin:0; background:var(--ground); color:var(--ink);
  font:400 17px/1.62 var(--serif); -webkit-font-smoothing:antialiased;
}
.wrap{max-width:1080px;margin:0 auto;padding:0 24px 96px;display:grid;gap:0}
@media(min-width:980px){
  .wrap{grid-template-columns:1fr 232px;column-gap:56px;align-items:start}
  .rail{grid-column:2;grid-row:1/span 99;position:sticky;top:24px}
  .col{grid-column:1;min-width:0}
}

/* masthead */
.top{border-bottom:1px solid var(--rule);padding:48px 0 28px;margin-bottom:40px}
.kicker{font:600 11px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:14px}
h1{font:600 34px/1.15 var(--serif);margin:0 0 10px;text-wrap:balance;letter-spacing:-.01em}
.lede{margin:0;color:var(--muted);max-width:62ch}
.gate{
  margin-top:26px;padding:16px 18px;background:var(--surface);
  border:1px solid var(--rule);border-left:3px solid var(--accent);border-radius:3px;
}
.gate h2{font:600 12px/1 var(--sans);letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin:0 0 10px}
.gate ul{margin:0;padding-left:20px;font-size:15.5px}
.gate li{margin:5px 0}
.stats{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
.stat{
  font:500 12.5px/1 var(--sans);letter-spacing:.02em;color:var(--muted);
  border:1px solid var(--rule);border-radius:2px;padding:7px 10px;background:var(--surface);
  font-variant-numeric:tabular-nums;
}
.stat b{color:var(--ink);font-weight:600}

/* rail */
.rail nav{display:flex;flex-direction:column;gap:2px;font:500 14px/1.35 var(--sans)}
.rail .lbl{font:600 10.5px/1 var(--sans);letter-spacing:.13em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
.rail a{color:var(--ink);text-decoration:none;padding:6px 10px;border-left:2px solid var(--rule)}
.rail a.sub{color:var(--muted);font-size:13px;padding-left:20px}
.rail a:hover,.rail a:focus-visible{border-left-color:var(--accent);color:var(--accent);background:var(--accent-soft)}
@media(max-width:979px){.rail{display:none}}

/* module */
.mod,.qz{background:var(--surface);border:1px solid var(--rule);border-radius:4px;padding:32px;margin-bottom:28px}
.mod-h{border-bottom:1px solid var(--rule);padding-bottom:22px;margin-bottom:26px}
.eyebrow{font:600 10.5px/1 var(--sans);letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:10px}
.mod-h h2{font:600 27px/1.2 var(--serif);margin:0 0 8px;letter-spacing:-.01em}
.tagline{margin:0 0 16px;color:var(--muted);max-width:60ch}
.meta{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.code{font:500 12.5px/1 var(--mono);color:var(--muted);background:var(--ground);border:1px solid var(--rule);border-radius:2px;padding:6px 8px}
.badge-off{font:600 10.5px/1 var(--sans);letter-spacing:.09em;text-transform:uppercase;color:var(--flag);background:var(--flag-soft);border-radius:2px;padding:6px 9px}

.sec{margin-bottom:30px}
.sec:last-child{margin-bottom:0}
.sec-h{font:600 11.5px/1 var(--sans);letter-spacing:.13em;text-transform:uppercase;color:var(--muted);margin:0 0 14px;padding-bottom:8px;border-bottom:1px solid var(--rule)}
.sec-note{margin:-6px 0 18px;color:var(--muted);font-size:15px;max-width:62ch}
.lst{margin:0;padding-left:22px;max-width:66ch}
.lst li{margin:9px 0}
.lst.flag li::marker{color:var(--flag)}
.lst.flag li{color:var(--flag)}
.lst.refs{list-style:none;padding-left:0}
.lst.refs li{font:400 14.5px/1.55 var(--sans);color:var(--muted);padding-left:16px;border-left:1px solid var(--rule)}

.meds{display:grid;gap:1px;background:var(--rule);border:1px solid var(--rule);border-radius:3px;overflow:hidden}
.med{background:var(--surface);padding:14px 16px;display:grid;gap:5px}
.drug{font:600 15px/1.35 var(--sans)}
.use{font-size:15.5px}
.note{color:var(--muted);font-size:15px}

.flow{margin:0;padding:0;list-style:none;counter-reset:f}
.flow li{counter-increment:f;position:relative;padding:0 0 20px 40px;border-left:1px solid var(--rule);margin-left:11px}
.flow li:last-child{border-left-color:transparent;padding-bottom:0}
.flow li::before{
  content:counter(f);position:absolute;left:-12px;top:0;width:23px;height:23px;border-radius:50%;
  background:var(--accent-soft);color:var(--accent);border:1px solid var(--accent);
  font:600 11.5px/21px var(--mono);text-align:center;font-variant-numeric:tabular-nums;
}
.fstage{display:block;font:600 10.5px/1 var(--sans);letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin:4px 0 5px}
.ftitle{display:block;font:600 16.5px/1.35 var(--serif);margin-bottom:4px}
.fdesc{display:block;color:var(--muted);font-size:15.5px;max-width:62ch}

/* quiz */
.q{border-top:1px solid var(--rule);padding:24px 0}
.q:first-of-type{border-top:0;padding-top:4px}
.qnum{font:600 11.5px/1 var(--mono);letter-spacing:.08em;color:var(--accent);margin-bottom:9px}
.qstem{margin:0 0 16px;max-width:66ch}
.opts{margin:0;padding:0;list-style:none;display:grid;gap:7px}
.opts li{
  display:grid;grid-template-columns:26px 1fr;gap:4px 10px;align-items:baseline;
  padding:11px 13px;border:1px solid var(--rule);border-radius:3px;background:var(--ground);
}
.opts li.right{background:var(--ok-soft);border-color:var(--ok)}
.let{font:600 13px/1.5 var(--mono);color:var(--muted)}
.opts li.right .let{color:var(--ok)}
.otext{font-size:16px}
.owhy,.tag{grid-column:2;font-size:14.5px;color:var(--muted);font-family:var(--sans)}
.tag{font:600 10.5px/1 var(--sans);letter-spacing:.1em;text-transform:uppercase;color:var(--ok)}
.qexp{margin:14px 0 0;font-size:15.5px;max-width:66ch;padding-left:14px;border-left:2px solid var(--accent)}
.qexp .lbl{display:block;font:600 10.5px/1 var(--sans);letter-spacing:.11em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}

b{font-weight:600}
a:focus-visible,:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
</style>

<div class="wrap">
  <div class="col">
    <header class="top">
      <div class="kicker">Rounds Codex · content gate</div>
      <h1>Two new MSK &amp; Rheum modules, for your read</h1>
      <p class="lede">Drafted, placed and verified mechanically — nothing here has had a medical
        read. Both ship with the RC VERIFIED badge off until you say otherwise.</p>
      <div class="gate">
        <h2>What your read decides</h2>
        <ul>
          <li>Whether the clinical content in each module is right as written.</li>
          <li>Whether each quiz answer marked <b>scored correct</b> is the answer you would mark.</li>
          <li>Whether the badge goes on — <code>verified:false</code> until then.</li>
        </ul>
      </div>
      <div class="stats">
        <span class="stat"><b>${LIST.length}</b> new modules</span>
        <span class="stat"><b>183</b> conditions total</span>
        <span class="stat"><b>${totalQ}</b> new questions</span>
        <span class="stat"><b>183/183</b> quiz coverage</span>
        <span class="stat">not yet deployed</span>
      </div>
    </header>
    ${LIST.map(module_).join('')}
  </div>
  <aside class="rail">
    <div class="lbl">On this page</div>
    <nav>${nav}</nav>
  </aside>
</div>
`;

fs.writeFileSync(OUT, html);
console.log(`wrote ${OUT} — ${LIST.length} modules, ${totalQ} questions, ${(html.length / 1024).toFixed(0)} kB`);
