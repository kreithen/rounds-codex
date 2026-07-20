#!/usr/bin/env node
/* worksheet.js — build the physician "make the images yourself" PDF.
 *
 * Joins each illustrated USMLE item's CURRENT schematic + its full question
 * (vignette, lead, options, correct answer, explanation) + the manifest's image
 * spec (modality, "must show", "avoid") into one print-ready PDF, one item per page.
 * Use it to produce real images offline, or to review illustration coverage.
 *
 * Usage:
 *   node worksheet.js --data ../../applive/usmle/data --illus ../../applive/usmle \
 *        --manifest ../../tools/image-manifest.json --out usmle-image-worksheet.pdf
 *
 * Renders via headless Chromium (no external libs). Chromium path is autodetected under
 * /opt/pw-browsers; override with --chrome <path>. ECG / real-image items are flagged.
 */
const fs = require('fs'), vm = require('vm'), path = require('path'), cp = require('child_process');

function arg(name, def) { const i = process.argv.indexOf('--' + name); return i > 0 ? process.argv[i + 1] : def; }
const DATA = arg('data', 'applive/usmle/data');
const ILLUS = arg('illus', 'applive/usmle');
const MANIFEST = arg('manifest', 'tools/image-manifest.json');
const OUT = path.resolve(arg('out', 'usmle-image-worksheet.pdf'));
let CHROME = arg('chrome', '');
if (!CHROME) {
  const base = '/opt/pw-browsers';
  try { CHROME = (fs.readdirSync(base).filter(d => /^chromium-\d+$/.test(d)).sort().reverse()
        .map(d => `${base}/${d}/chrome-linux/chrome`).find(p => fs.existsSync(p))) || ''; } catch (e) {}
}

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// --- load banks -> byId ---
const byId = {};
for (const f of fs.readdirSync(DATA).filter(x => /^usmle-.*\.js$/.test(x))) {
  let code = fs.readFileSync(path.join(DATA, f), 'utf8').replace(/const\s+USMLE_[A-Z0-9_]+\s*=/, 'this.__B =');
  const ctx = {}; vm.createContext(ctx);
  try { vm.runInContext(code, ctx); (ctx.__B || []).forEach(q => { if (q && q.id) byId[q.id] = q; }); }
  catch (e) { console.error('bank load error', f, e.message); }
}
// --- load RC_ILLUS ---
const ILL = {};
for (const f of fs.readdirSync(ILLUS).filter(x => /^illus-p[A-Z]\.js$/.test(x)).sort()) {
  const ctx = { window: {} }; vm.createContext(ctx);
  try { vm.runInContext(fs.readFileSync(path.join(ILLUS, f), 'utf8'), ctx); Object.assign(ILL, ctx.window.RC_ILLUS || {}); }
  catch (e) { console.error('illus load error', f, e.message); }
}
const man = JSON.parse(fs.readFileSync(MANIFEST, 'utf8')).items;
console.log(`loaded ${Object.keys(byId).length} questions, ${Object.keys(ILL).length} illustrations, ${man.length} manifest items`);

const examOrder = { 'Step 1': 1, 'Step 2 CK': 2, 'Step 3 Day 1': 3, 'Step 3 Day 2': 4, 'Step 3': 3 };
const items = man.slice().sort((a, b) => (examOrder[a.exam] || 9) - (examOrder[b.exam] || 9) || a.id.localeCompare(b.id));
const L = ['A', 'B', 'C', 'D', 'E', 'F'];
const mustList = m => { let ms = m.mustShow; if (!ms) return ''; if (!Array.isArray(ms)) ms = [ms];
  return '<ul class="must">' + ms.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>'; };

let blocks = '';
items.forEach((m, idx) => {
  const q = byId[m.id] || {}, ill = ILL[m.id];
  const opts = (q.options || []).map((o, i) =>
    `<div class="opt${i === q.answer ? ' cor' : ''}"><b>${L[i]}.</b> ${esc(o)}${i === q.answer ? ' <span class="tag">✓</span>' : ''}</div>`).join('');
  blocks += `<section class="item">
    <div class="hd"><span class="idn">${esc(m.id)}</span><span class="ex">${esc(m.exam)}</span><span class="sys">${esc(m.system || q.system || '')}</span>${m.isECG ? '<span class="ecg">ECG</span>' : ''}<span class="cnt">${idx + 1}/${items.length}</span></div>
    <div class="topic">${esc(m.title || q.topic || '')}</div>
    <div class="illwrap">${ill ? ill : '<div class="noill">No schematic on file (ECG / real-image item) — use the spec below.</div>'}</div>
    <div class="modal"><b>Modality:</b> ${esc(m.modality || '')}</div>
    <div class="qbox"><div class="vig">${esc(q.vignette || '')}</div><div class="lead">${esc(q.lead || '')}</div><div class="opts">${opts}</div>${q.exp ? `<div class="exp"><b>Answer — ${L[q.answer] || ''}:</b> ${esc(q.exp)}</div>` : ''}</div>
    <div class="spec"><div class="spec-h">Image must show</div>${mustList(m)}${m.avoid ? `<div class="cc"><b>Avoid:</b> ${esc(m.avoid)}</div>` : ''}</div>
  </section>`;
});

const css = `@page{size:Letter;margin:12mm 11mm}*{box-sizing:border-box}
body{font:10px/1.36 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#12202f;margin:0}
.cover{page-break-after:always;padding:50px 26px}.cover h1{font-size:27px;margin:0 0 6px;color:#0b3a54}
.cover p{font-size:12px;color:#40566a;max-width:640px}.cover .meta{margin-top:22px;font-size:11px;color:#5a6b7d}
.item{page-break-inside:avoid;padding:8px 0 10px;border-bottom:1.5px solid #d6e0ea}
.hd{display:flex;gap:7px;align-items:center;flex-wrap:wrap;font-size:9px;font-weight:800}
.idn{background:#0b3a54;color:#fff;padding:2px 7px;border-radius:5px}.ex{color:#0b7285}.sys{color:#5a6b7d;text-transform:uppercase}
.ecg{background:#f4b942;color:#3a2a00;padding:1px 6px;border-radius:5px}.cnt{margin-left:auto;color:#9aabbd}
.topic{font-size:14px;font-weight:800;margin:4px 0 6px;color:#0b3a54}
.illwrap{background:#070b12;border-radius:10px;padding:10px;text-align:center;margin-bottom:6px}
.illwrap svg{max-width:100%;max-height:230px;height:auto}.noill{color:#8ea0b5;padding:20px;font-size:11px}
.modal{font-size:9.5px;color:#40566a;margin-bottom:6px}
.qbox{border:1px solid #dbe4ec;border-radius:9px;padding:9px 11px;background:#f8fbfe}
.vig{text-align:justify;margin-bottom:6px}.lead{font-weight:800;margin-bottom:6px;color:#0b3a54}
.opt{padding:2px 0;border-top:1px solid #eef3f8}.opt.cor{color:#0a7a3f;font-weight:700}
.tag{font-size:8px;background:#d8f5e5;color:#0a5a30;padding:1px 5px;border-radius:4px;font-weight:800}
.exp{margin-top:6px;font-size:9.5px;color:#33475b;border-top:1px dashed #cfdae5;padding-top:5px}
.spec{margin-top:7px;border-left:3px solid #0b7285;background:#eef8fb;padding:7px 11px;border-radius:0 7px 7px 0}
.spec-h{font-weight:800;color:#0b5a6b;font-size:9px;text-transform:uppercase;margin-bottom:2px}
.must{margin:0;padding-left:15px}.must li{margin:1px 0}.cc{margin-top:4px;font-size:9px;color:#4a5d70}`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>
<div class="cover"><h1>Rounds Codex — USMLE Image Worksheet</h1>
<p>Every illustrated USMLE question: the current schematic on top, the full question (correct answer marked) below it, and a "what the image must show" spec so you can create the real/AI image for each.</p>
<div class="meta">${items.length} illustrated items · Step 1, Step 2 CK, Step 3 Day 1 &amp; Day 2.<br>ECG items are flagged — keep those vector or use a real de-identified tracing (AI renders ECGs unreliably).</div></div>
${blocks}</body></html>`;

const htmlPath = OUT.replace(/\.pdf$/i, '') + '.html';
fs.writeFileSync(htmlPath, html);
console.log('wrote', htmlPath, `(${(html.length / 1048576).toFixed(1)} MiB)`);

if (!CHROME) { console.error('No Chromium found under /opt/pw-browsers — pass --chrome <path>. HTML written; PDF skipped.'); process.exit(0); }
cp.execFileSync(CHROME, ['--headless', '--no-sandbox', '--disable-gpu',
  '--print-to-pdf=' + OUT, '--no-pdf-header-footer',
  '--run-all-compositor-stages-before-draw', '--virtual-time-budget=30000',
  'file://' + htmlPath], { stdio: 'inherit' });
console.log('wrote', OUT, `(${(fs.statSync(OUT).size / 1048576).toFixed(1)} MiB)`);
