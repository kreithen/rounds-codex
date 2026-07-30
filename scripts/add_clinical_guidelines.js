/* Add the "Updated Clinical Guidelines" subsection to Resident mode specialty pages.
 *
 * Usage: node scripts/add_clinical_guidelines.js <index.html>
 *
 * Structure: a specialty page gains a section under its title with one button per year. Tapping a
 * year opens a page listing that year's breakthrough studies, each with the article title, what the
 * breakthrough was, its guideline impact, the practical implications, and a link out to the paper.
 *
 * Decisions worth recording:
 *
 * DATA LIVES IN resident.json, under a new `guidelines` key, NOT in a new content file. An eighth
 * content/*.json would mean editing the boot loader's FILES list AND adding it to CORE in sw.js --
 * and CLAUDE.md records that a content file missing from CORE is simply absent offline, with the app
 * booting to "Content didn't load" and no page error to explain it. Guidelines are resident content,
 * so resident.json is both the lower-risk and the more honest home.
 *
 * THE SECTION ONLY APPEARS WHERE THERE IS CONTENT. RES_GUIDE[spec] absent means no section at all,
 * rather than a heading over two dead buttons. Anesthesiology is the only populated specialty for
 * now; the other 23 render exactly as before.
 *
 * THE NAV STACK CARRIES ONE id, so the year page is keyed "spec|year" and split on render. Adding a
 * third field to the stack entry would touch go(), back() and the scroll-restore code that reads
 * entry.y -- far more surface area than a delimiter.
 *
 * BACK USES back(), NOT go('resspec', spec). back() pops the stack, so it returns the user to the
 * scroll position they left, which is what the scroll-restore work in this app exists to do. go()
 * would push a second copy of the specialty page onto the stack and lose that position.
 *
 * LINKS OPEN OUT OF THE APP with target="_blank" plus rel="noopener noreferrer" -- noopener because
 * without it the opened page gets a handle on window.opener and can navigate this app.
 */
'use strict';
const fs = require('fs');

const FILE = process.argv[2];
if (!FILE) { console.error('usage: add_clinical_guidelines.js <index.html>'); process.exit(2); }
let s = fs.readFileSync(FILE, 'utf8');
const before = s.length;

function replaceOnce(str, find, repl, what) {
  const n = str.split(find).length - 1;
  if (n !== 1) { console.error(`FAILED (${what}): found ${n} occurrences, expected 1`); process.exit(1); }
  console.log('  ok  ' + what);
  return str.replace(find, repl);
}

/* ------------------------------------------------------------------ 1. the global */
s = replaceOnce(s,
  'const RES_DATA=[];\nconst resById={};',
  'const RES_DATA=[];\nconst resById={};\nconst RES_GUIDE={};',
  'RES_GUIDE global declared alongside RES_DATA');

/* ------------------------------------------------------------------ 2. loader fill */
s = replaceOnce(s,
  '    Object.assign(RESIDENT_APPROACH,  C.resident.approach);',
  '    Object.assign(RESIDENT_APPROACH,  C.resident.approach);\n' +
  '    Object.assign(RES_GUIDE,          C.resident.guidelines || {});',
  'loader fills RES_GUIDE from resident.json (tolerates the key being absent)');

/* --------------------------------------------------- 3. the section on a specialty page */
const TITLE_LINE = `<h2 class="res-h">'+name+'</h2>';`;
const SECTION = `<h2 class="res-h">'+name+'</h2>';
 /* Updated Clinical Guidelines -- rendered only where this specialty has content, so the
    other specialties look exactly as they did before. Years descend, newest first. */
 const _g=RES_GUIDE[spec];
 if(_g){
  /* Ascending: 2025 above 2026, as specified. Not newest-first -- the years read as a
     progression here, and the order was asked for explicitly. */
  const years=Object.keys(_g).sort();
  h+='<div class="res-sechead">Updated Clinical Guidelines</div><div class="res-gwrap">';
  years.forEach(function(y){
   const n=(_g[y]||[]).length;
   h+='<button class="res-gbtn" onclick="go(\\'resguide\\',\\''+spec+'|'+y+'\\')">'
     +'<span class="res-gyear">'+y+'</span>'
     +'<span class="res-gsub">'+(n?n+(n===1?' study':' studies'):'Coming soon')+'</span>'
     +'<span class="res-arrow">\\u203a</span></button>';
  });
  h+='</div>';
 }`;
s = replaceOnce(s, TITLE_LINE, SECTION, 'Updated Clinical Guidelines section + year buttons in resSpecHTML');

/* ------------------------------------------------------------------ 4. the year page */
const RENDERER = `
/* One year of breakthrough studies for one specialty. Keyed "spec|year" because a nav stack
   entry carries a single id. */
function resGuideHTML(key){
 const parts=String(key||'').split('|'), spec=parts[0], year=parts[1];
 const name=resSpecName(spec);
 const items=((RES_GUIDE[spec]||{})[year])||[];
 const esc=function(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};
 let h='<div class="res-wrap"><div class="res-crumb" onclick="back()"><span class="res-back">\\u2190</span> '+esc(name)+'</div>'
      +'<h2 class="res-h">Updated Clinical Guidelines</h2>'
      +'<div class="res-tag">'+esc(year)+' \\u2014 '+esc(name)+'</div>';
 if(!items.length){
  h+='<div class="res-gempty">No studies have been added for '+esc(year)+' yet.</div></div>';
  return h;
 }
 items.forEach(function(a,i){
  h+='<div class="res-gcard">'
    +'<div class="res-gnum">'+(i+1)+'</div>'
    +'<div class="res-gtitle">'+esc(a.title)+'</div>'
    +((a.journal||a.date)?'<div class="res-gmeta">'+esc([a.journal,a.date].filter(Boolean).join(' \\u00b7 '))+'</div>':'')
    +(a.breakthrough?'<div class="res-glab">The breakthrough</div><div class="res-gtext">'+esc(a.breakthrough)+'</div>':'')
    +(a.impact?'<div class="res-glab">Clinical guideline impact</div><div class="res-gtext">'+esc(a.impact)+'</div>':'')
    +(a.practical?'<div class="res-glab">Practical implications</div><div class="res-gtext">'+esc(a.practical)+'</div>':'')
    /* target=_blank hands the link to the user's browser; rel=noopener stops the opened page
       getting a window.opener handle back onto this app. */
    +(a.url?'<a class="res-glink" href="'+esc(a.url)+'" target="_blank" rel="noopener noreferrer">Read the article \\u2197</a>':'')
    +'</div>';
 });
 return h+'</div>';
}
function resSpecHTML(spec){`;
s = replaceOnce(s, 'function resSpecHTML(spec){', RENDERER, 'resGuideHTML() renderer added before resSpecHTML');

/* ------------------------------------------------------------------ 5. paint dispatch */
s = replaceOnce(s,
  ` else if(r.v==='resdetail'){s.innerHTML=resDetailHTML(r.id);}`,
  ` else if(r.v==='resdetail'){s.innerHTML=resDetailHTML(r.id);}\n` +
  ` else if(r.v==='resguide'){s.innerHTML=resGuideHTML(r.id);}`,
  'paint() dispatches the resguide view');

/* ------------------------------------------------------------------------ 6. styling */
const CSS = `.res-gwrap{display:flex;flex-direction:column;gap:10px}
.res-gbtn{display:flex;align-items:center;gap:12px;width:100%;text-align:left;cursor:pointer;
 padding:14px 16px;border-radius:14px;border:1px solid rgba(127,127,127,.24);
 background:rgba(127,127,127,.07);color:inherit;font:inherit}
.res-gbtn:hover{background:rgba(127,127,127,.13);border-color:var(--accent)}
.res-gbtn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.res-gyear{font-size:1.22em;font-weight:800;letter-spacing:.01em}
.res-gsub{opacity:.62;font-size:.86em;flex:1}
.res-gempty{opacity:.62;padding:18px 2px;font-size:.95em}
.res-gcard{border:1px solid rgba(127,127,127,.22);border-radius:14px;padding:15px 16px;margin:12px 0;position:relative}
.res-gnum{position:absolute;top:15px;right:16px;opacity:.34;font-weight:800;font-size:.9em}
.res-gtitle{font-weight:800;font-size:1.04em;line-height:1.35;padding-right:26px}
.res-gmeta{opacity:.58;font-size:.82em;margin-top:4px}
.res-glab{margin-top:11px;font-size:.72em;font-weight:800;letter-spacing:.07em;text-transform:uppercase;opacity:.62}
.res-gtext{margin-top:3px;font-size:.94em;line-height:1.5}
.res-glink{display:inline-block;margin-top:13px;color:var(--accent);font-weight:700;font-size:.9em;text-decoration:none}
.res-glink:hover{text-decoration:underline}
.res-crumb{`;
/* `.res-crumb{` appears TWICE, ~400 kB apart and byte-identical for 1225 chars. The first is
   inside <style> and is the live stylesheet; the second sits inside a JS template literal that
   ends `; followed by "// ADAPT at patch time (inspect live app first)" -- a leftover scaffold
   copy of the resident CSS, not applied to the page. So target the FIRST deliberately rather
   than letting replaceOnce fail, and assert the count so a future change to either copy is
   noticed instead of silently picking the wrong one. */
{
  const hits = s.split('.res-crumb{').length - 1;
  if (hits !== 2) {
    console.error(`FAILED (guidelines CSS): expected 2 '.res-crumb{' (live stylesheet + scaffold copy), found ${hits}`);
    process.exit(1);
  }
  const at = s.indexOf('.res-crumb{');
  const inStyle = s.lastIndexOf('<style', at) > s.lastIndexOf('</style>', at);
  if (!inStyle) {
    console.error('FAILED (guidelines CSS): the first .res-crumb{ is not inside <style> — check which copy is live');
    process.exit(1);
  }
  s = s.slice(0, at) + CSS + s.slice(at + '.res-crumb{'.length);
  console.log('  ok  Clinical Guidelines styling added to the live stylesheet (scaffold copy left alone)');
}

fs.writeFileSync(FILE, s);
console.log(`\n${FILE}: ${before} -> ${s.length} bytes`);
console.log('sw.js and the loader FILES list unchanged — guidelines ride inside resident.json.');
