#!/usr/bin/env node
/* Emit public /privacy/ and /terms/ pages from the app's own RC_LEGAL literal.
 *
 * App Store Connect will not accept a submission without a PUBLICLY reachable privacy policy URL.
 * Today the Terms and Privacy text exists only inside the app -- and since the login wall came back
 * in v82 those views sit behind it (`privacy` and `terms` are not in RC_OPEN_ROUTES), so the one
 * URL the form demands is the one URL a signed-out reviewer cannot reach.
 *
 * The obvious fix is to write two static pages. The trap in that fix is DRIFT: two copies of a
 * legal document, one of which gets edited. So these are GENERATED from `RC_LEGAL` in index.html
 * and nothing is retyped. Re-run after any change to the legal text; `--check` fails if the
 * generated output no longer matches what is on disk, so a stale copy is catchable in CI or by
 * hand rather than discovered by a lawyer.
 *
 * Deliberately standalone: no JavaScript, no fonts, no service worker, no app shell. A privacy
 * policy that needs 745 kB of app to render is a privacy policy that can fail to render. It is
 * also why these are real files at /privacy/ and /terms/ rather than app routes -- an app route
 * would have to be added to RC_OPEN_ROUTES and to the _redirects rewrites, and would still be
 * gated by whatever the app does on boot.
 *
 * Usage:
 *   node scripts/build_legal_pages.js <app-root> [--apply] [--check]
 */
const fs = require('fs');
const path = require('path');

const root = process.argv[2];
const APPLY = process.argv.includes('--apply');
const CHECK = process.argv.includes('--check');
if (!root) { console.error('usage: build_legal_pages.js <app-root> [--apply] [--check]'); process.exit(2); }

const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

/* String-aware brace matching. The literal contains braces inside quoted prose ("{h:" appears in
   comments elsewhere in the file), so a naive count of { and } lands in the wrong place. */
function literalAfter(marker) {
  const start = src.indexOf(marker);
  if (start < 0) throw new Error(`could not find ${marker}`);
  let i = src.indexOf('{', start), depth = 0, quote = null;
  for (let j = i; j < src.length; j++) {
    const c = src[j], prev = src[j - 1];
    if (quote) { if (c === quote && prev !== '\\') quote = null; continue; }
    if (c === "'" || c === '"' || c === '`') { quote = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return src.slice(i, j + 1); }
  }
  throw new Error(`unbalanced braces after ${marker}`);
}

const LEGAL = new Function('return ' + literalAfter('var RC_LEGAL='))();
const CONTACT = (src.match(/var RC_CONTACT='([^']+)'/) || [])[1];
if (!CONTACT) throw new Error('could not read RC_CONTACT');

for (const k of ['terms', 'privacy']) {
  const d = LEGAL[k];
  if (!d || !d.title || !d.sections || !d.sections.length) throw new Error(`RC_LEGAL.${k} looks wrong`);
}

/* The app's own palette, inlined. Kept short on purpose -- this page is read once, often by
   someone deciding whether to trust the app, and it should load instantly on a bad connection. */
const CSS = `
:root{color-scheme:dark}
*{box-sizing:border-box}
body{margin:0;background:#0b1120;color:#e6edf7;
  font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  -webkit-text-size-adjust:100%}
.wrap{max-width:720px;margin:0 auto;padding:28px 20px 64px}
header{border-bottom:1px solid #1e2a3d;padding-bottom:18px;margin-bottom:26px}
h1{font-size:26px;line-height:1.25;margin:0 0 6px}
.sub{color:#8fa3bf;font-size:14px;margin:0}
.brand{display:inline-block;color:#00c2ff;font-weight:700;letter-spacing:.08em;
  font-size:12px;text-transform:uppercase;margin:0 0 12px;text-decoration:none}
.key{background:#122036;border:1px solid #1e3550;border-left:3px solid #00c2ff;
  border-radius:10px;padding:14px 16px;margin:0 0 26px}
h2{font-size:17px;margin:28px 0 8px;color:#cfe0f5}
.key h2{margin-top:0}
p{margin:0 0 12px}
b{color:#fff}
a{color:#00c2ff}
footer{margin-top:40px;padding-top:18px;border-top:1px solid #1e2a3d;color:#8fa3bf;font-size:14px}
nav{margin-top:10px;font-size:14px}
@media (prefers-color-scheme: light){
  :root{color-scheme:light}
  body{background:#fff;color:#111a27}
  h2{color:#1d3category}
}
`.trim().replace('#1d3category', '#1d3350');

function page(which) {
  const d = LEGAL[which];
  const other = which === 'terms' ? 'privacy' : 'terms';
  const body = d.sections.map(s =>
    `<section>\n<h2>${s.h}</h2>\n${s.p.map(x => `<p>${x}</p>`).join('\n')}\n</section>`).join('\n\n');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${d.title.replace(/&amp;/g, '&')} — Rounds Codex</title>
<meta name="description" content="${d.title.replace(/&amp;/g, 'and')} for Rounds Codex, a clinical study reference for nursing and medical students.">
<style>${CSS}</style>
</head>
<body>
<div class="wrap">
<header>
<a class="brand" href="/">Rounds Codex</a>
<h1>${d.title}</h1>
<p class="sub">Version ${d.version} &middot; last updated ${d.updated}</p>
</header>

<div class="key">
<h2>${d.keyH}</h2>
<p>${d.key}</p>
</div>

${body}

<footer>
<p>Questions about this document? Email <a href="mailto:${CONTACT}">${CONTACT}</a>.</p>
<nav><a href="/${other}/">${LEGAL[other].title}</a> &middot; <a href="/">Rounds Codex</a></nav>
<!-- Generated from RC_LEGAL in index.html by scripts/build_legal_pages.js. Do not edit by hand:
     the app and this page must say the same thing, and the app is the source. -->
</footer>
</div>
</body>
</html>
`;
}

let bad = 0;
for (const which of ['privacy', 'terms']) {
  const out = path.join(root, which, 'index.html');
  const html = page(which);
  const exists = fs.existsSync(out);
  const same = exists && fs.readFileSync(out, 'utf8') === html;

  if (CHECK) {
    const ok = exists && same;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} /${which}/ ${!exists ? 'missing' : same ? 'matches RC_LEGAL' : 'STALE -- re-run without --check'}`);
    if (!ok) bad++;
    continue;
  }

  const sections = LEGAL[which].sections.length;
  console.log(`  /${which}/  ${sections} sections, ${html.length} bytes` +
              (exists ? (same ? '  (unchanged)' : '  (updated)') : '  (new)'));
  if (APPLY) { fs.mkdirSync(path.join(root, which), { recursive: true }); fs.writeFileSync(out, html); }
}

if (CHECK) {
  if (bad) { console.error(`\n${bad} legal page(s) out of date with RC_LEGAL`); process.exit(1); }
  console.log('\nboth public legal pages match the app');
} else if (!APPLY) {
  console.log('\ndry run -- pass --apply to write');
} else {
  console.log('\nwritten');
}
