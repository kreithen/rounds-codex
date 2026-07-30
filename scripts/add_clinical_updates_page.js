/* Add the CLINICAL UPDATES entry point and index page.
 *
 * Usage: node scripts/add_clinical_updates_page.js <index.html> <_redirects>
 *
 * Six things:
 *   1. a purple CLINICAL UPDATES button in the library count row, right-aligned
 *   2. a `clinupd` index page: description, then every specialty that has updates, alphabetical,
 *      each with its year buttons side by side and centred
 *   3. paint() dispatch for the new view
 *   4. every 2025/2026 button turned white, app-wide
 *   5. the /u/ share route
 *   6. rcShareUpdates()
 *
 * Decisions worth recording:
 *
 * THE BUTTON LIVES IN THE COUNT ROW, which already carries the section Share pill. That row is
 * `display:flex; justify-content:space-between`, so the new button gets `margin-left:auto` to sit
 * hard right and let Share follow it, and the row gains `flex-wrap` so a 320px phone drops the
 * buttons to a second line instead of crushing them. Placement was specified from a screenshot
 * annotation; the collision with Share when a specialty chip is selected is the reason for the wrap.
 *
 * PURPLE AND WHITE ARE BOTH ALREADY IN THE APP. Purple is `.respec` (RESIDENT SPECIALTIES),
 * linear-gradient(180deg,#b78cff,#7c3aed). White is `.allgal` (All Image Galleries), #f2f6ff on
 * #0a1424. Reusing those two palettes rather than inventing values is what keeps the home page
 * looking like one design instead of three.
 *
 * SHOWN IN ALL THREE MODES, so it is NOT gated behind [data-mode] the way .respec and .usmleprep
 * are. The index page itself reads RES_GUIDE, which the loader fills regardless of mode.
 *
 * ALPHABETICAL BY DISPLAY NAME, NOT BY CODE. The five current codes (anes, cards, derm, em, fm)
 * happen to sort the same as their names, which makes a code sort look correct today and break the
 * moment `ent` (Otolaryngology) or `nsg` (Neurological Surgery) gets content.
 *
 * A YEAR WITH NO ENTRIES GETS NO BUTTON on this page. The per-specialty section renders an empty
 * year as "Coming soon" because it is already inside that specialty; here a dead button in a grid
 * of live ones just reads as broken.
 *
 * /u/ MUST JOIN THE RC_ROOT REGEX. Fifth one-segment route. An unrecognised one becomes the <base>
 * folder, every content/*.json resolves under it and 404s, and the app boots to "Content didn't
 * load" with no page error because the loader catches it. Documented in CLAUDE.md as having
 * happened. rcSyncURL() needs the view too, or a shared link's address bar snaps back to /.
 */
'use strict';
const fs = require('fs');

const [, , FILE, REDIR] = process.argv;
if (!FILE || !REDIR) { console.error('usage: add_clinical_updates_page.js <index.html> <_redirects>'); process.exit(2); }
let s = fs.readFileSync(FILE, 'utf8');
const before = s.length;

function replaceOnce(str, find, repl, what) {
  const n = str.split(find).length - 1;
  if (n !== 1) { console.error(`FAILED (${what}): found ${n} occurrences, expected 1`); process.exit(1); }
  console.log('  ok  ' + what);
  return str.replace(find, repl);
}

/* ------------------------------------------- 1. the purple button in the count row */
s = replaceOnce(s,
  `<div class="count"><span><b id="cnt">180</b> conditions</span>`,
  `<div class="count"><span><b id="cnt">180</b> conditions</span>` +
  `<button type="button" class="clinupd" onclick="go('clinupd')" aria-label="Clinical Updates">` +
  `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` +
  `<path d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></svg>` +
  `CLINICAL UPDATES</button>`,
  'purple CLINICAL UPDATES button added to the library count row');

/* ------------------------------------------------------------------ 2. the renderer */
const RENDERER = `
/* The Clinical Updates index: every specialty that has guideline updates, alphabetical by NAME,
   with its year buttons side by side. Reads RES_GUIDE, so it is empty-safe before content loads. */
function clinUpdHTML(){
 const esc=function(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};
 /* Sort on the display name, not the code: anes/cards/derm/em/fm happen to sort alike, which
    would hide the bug until Otolaryngology (ent) or Neurological Surgery (nsg) gets content. */
 const specs=Object.keys(RES_GUIDE||{})
   .filter(function(k){ const y=RES_GUIDE[k]||{}; return Object.keys(y).some(function(v){return (y[v]||[]).length>0;}); })
   .map(function(k){ return {id:k, n:resSpecName(k)}; })
   .sort(function(a,b){ return a.n.localeCompare(b.n); });
 let total=0;
 specs.forEach(function(sp){ const y=RES_GUIDE[sp.id]||{}; Object.keys(y).forEach(function(v){ total+=(y[v]||[]).length; }); });

 let h='<div class="res-wrap"><div class="res-crumb" onclick="back()"><span class="res-back">\\u2190</span> Home</div>'
      +'<h2 class="res-h">Clinical Updates</h2>';
 if(typeof rcShareUpdates==='function'){
  h+='<button class="res-gshare" onclick="rcShareUpdates()" aria-label="Share Clinical Updates">'
    +'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    +'<path d="M12 15V3"/><path d="M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>Share</button>';
 }
 h+='<div class="cu-intro">The trials and consensus guidelines that changed practice, by specialty and by year. '
   +'Each entry says what the study found, how it affects guidelines, and what it means on the ward \\u2014 with a link out to the source.</div>';
 if(!specs.length){
  h+='<div class="res-gempty">No clinical updates have been added yet.</div></div>';
  return h;
 }
 h+='<div class="cu-count">'+specs.length+' specialt'+(specs.length===1?'y':'ies')+' \\u00b7 '+total+' stud'+(total===1?'y':'ies')+'</div>';
 h+='<div class="cu-list">';
 specs.forEach(function(sp){
  const y=RES_GUIDE[sp.id]||{};
  /* only years that actually have entries -- a dead button among live ones reads as broken */
  const years=Object.keys(y).filter(function(v){return (y[v]||[]).length>0;}).sort();
  h+='<div class="cu-spec"><div class="cu-name">'+esc(sp.n)+'</div><div class="cu-years">';
  years.forEach(function(v){
   h+='<button class="cu-yr" onclick="go(\\'resguide\\',\\''+sp.id+'|'+v+'\\')" aria-label="'+esc(sp.n)+' '+esc(v)+' updates">'+esc(v)+'</button>';
  });
  h+='</div></div>';
 });
 return h+'</div></div>';
}
function resGuideHTML(key){`;
s = replaceOnce(s, 'function resGuideHTML(key){', RENDERER, 'clinUpdHTML() renderer added before resGuideHTML');

/* ------------------------------------------------------------------ 3. paint dispatch */
s = replaceOnce(s,
  ` else if(r.v==='resguide'){s.innerHTML=resGuideHTML(r.id);}`,
  ` else if(r.v==='resguide'){s.innerHTML=resGuideHTML(r.id);}\n` +
  ` else if(r.v==='clinupd'){s.innerHTML=clinUpdHTML();}`,
  'paint() dispatches the clinupd view');

/* ------------------------------------------------------------------------- 4. styling */
const CSS = `/* Purple, matching .respec (RESIDENT SPECIALTIES) so the home page reads as one design.
   margin-left:auto pushes it hard right inside the space-between count row, and the row wraps so a
   narrow phone drops it below the count rather than crushing it against the Share pill. */
.count{flex-wrap:wrap;row-gap:8px}
.clinupd{display:inline-flex;align-items:center;gap:6px;margin-left:auto;cursor:pointer;
 font-family:inherit;font-size:11px;font-weight:800;letter-spacing:.4px;
 padding:6px 11px;border-radius:9px;color:#fff;
 background:linear-gradient(180deg,#b78cff,#7c3aed);
 border:1px solid rgba(201,168,255,.55);box-shadow:0 6px 16px rgba(124,58,237,.34);
 transition:filter .15s,transform .12s;-webkit-tap-highlight-color:transparent}
.clinupd:hover{filter:brightness(1.07)}
.clinupd:active{transform:scale(.97)}
.clinupd:focus-visible{outline:2px solid #c9a8ff;outline-offset:2px}
.cu-intro{opacity:.78;font-size:.95em;line-height:1.55;margin:2px 0 14px}
.cu-count{opacity:.55;font-size:.82em;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
 text-align:center;margin-bottom:14px}
.cu-list{display:flex;flex-direction:column;gap:14px}
.cu-spec{text-align:center;border:1px solid rgba(127,127,127,.22);border-radius:14px;padding:15px 14px}
.cu-name{font-weight:800;font-size:1.05em;line-height:1.3;margin-bottom:11px}
.cu-years{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}
/* White, matching .allgal (All Image Galleries) -- one white treatment for every year button. */
.cu-yr{cursor:pointer;font-family:inherit;font-size:15px;font-weight:800;letter-spacing:.2px;
 min-width:104px;padding:11px 20px;border-radius:13px;
 border:1px solid rgba(255,255,255,.55);background:#f2f6ff;color:#0a1424;
 box-shadow:0 6px 18px rgba(0,0,0,.26);transition:filter .15s,transform .12s;
 -webkit-tap-highlight-color:transparent}
.cu-yr:hover{filter:brightness(1.04)}
.cu-yr:active{transform:translateY(1px) scale(.995)}
.cu-yr:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.res-gwrap{`;
s = replaceOnce(s, '.res-gwrap{', CSS, 'CLINICAL UPDATES button + index page styling');

/* ------------------------------------------- 4b. the per-specialty year buttons go white too */
s = replaceOnce(s,
  `.res-gbtn{display:flex;align-items:center;gap:12px;width:100%;text-align:left;cursor:pointer;
 padding:14px 16px;border-radius:14px;border:1px solid rgba(127,127,127,.24);
 background:rgba(127,127,127,.07);color:inherit;font:inherit}
.res-gbtn:hover{background:rgba(127,127,127,.13);border-color:var(--accent)}`,
  `.res-gbtn{display:flex;align-items:center;gap:12px;width:100%;text-align:left;cursor:pointer;
 padding:14px 16px;border-radius:14px;border:1px solid rgba(255,255,255,.55);
 background:#f2f6ff;color:#0a1424;font:inherit;box-shadow:0 6px 18px rgba(0,0,0,.26);
 transition:filter .15s,transform .12s}
.res-gbtn:hover{filter:brightness(1.04)}
.res-gbtn:active{transform:translateY(1px) scale(.997)}
/* On white, the muted "10 studies" subline and the chevron need a dark ink, not the page's
   light-on-dark values -- otherwise both vanish. */
.res-gbtn .res-gsub{color:#0a1424;opacity:.62}
.res-gbtn .res-arrow{color:#0a1424;opacity:.5}`,
  'per-specialty 2025/2026 buttons restyled white, with dark ink for the subline and chevron');

/* --------------------------------------------- 4c. clear the fixed bottom nav bar
 * `.nav` is position:fixed, 105px tall, sitting 14px off the bottom. `.pad` — the class the
 * condition and library views use — reserves 112px for it. `.res-wrap` never did, so the last
 * element of any resident-mode page sits UNDER the bar once scrolled to the end. On the long
 * specialty lists that only ever hid part of a trailing row; on the Clinical Updates index the page
 * ends exactly there, and the final specialty's year buttons were completely covered (measured at
 * 769-812 with the bar starting at 725). Same 112px as `.pad`, so the two agree.
 *
 * `.res-wrap{` appears TWICE, as `.res-crumb{` does: the live stylesheet and a leftover scaffold
 * copy inside a JS template literal. Target the first and assert the count, rather than patching
 * the dead one and wondering why nothing changed. */
{
  const NEEDLE = '.res-wrap{padding:16px;max-width:900px;margin:0 auto}';
  const hits = s.split(NEEDLE).length - 1;
  if (hits !== 2) {
    console.error(`FAILED (nav clearance): expected 2 '.res-wrap{' (live stylesheet + scaffold copy), found ${hits}`);
    process.exit(1);
  }
  const at = s.indexOf(NEEDLE);
  const inStyle = s.lastIndexOf('<style', at) > s.lastIndexOf('</style>', at);
  if (!inStyle) {
    console.error('FAILED (nav clearance): the first .res-wrap{ is not inside <style> — check which copy is live');
    process.exit(1);
  }
  s = s.slice(0, at) +
      '.res-wrap{padding:16px;padding-bottom:112px;max-width:900px;margin:0 auto}' +
      s.slice(at + NEEDLE.length);
  console.log('  ok  .res-wrap reserves 112px for the fixed nav bar (matches .pad; also fixes the existing resident pages)');
}

fs.writeFileSync(FILE, s);

/* ------------------------------------------------------------------- 5. the /u/ route */
let t = fs.readFileSync(FILE, 'utf8');
t = replaceOnce(t,
  `var r=/^\\/(c|s|g|r)\\//.test(location.pathname||'')`,
  `var r=/^\\/(c|s|g|r|u)\\//.test(location.pathname||'')`,
  'RC_ROOT regex now covers /u/ (without this, <base> becomes /u/ and every content file 404s)');

t = replaceOnce(t,
  ` window.RC_DEEPGUIDE=rm?decodeURIComponent(rm[1]):null;`,
  ` window.RC_DEEPGUIDE=rm?decodeURIComponent(rm[1]):null;\n` +
  ` /* and the Clinical Updates index, /u/ */\n` +
  ` window.RC_DEEPUPD=/^\\/u\\/?$/.test(location.pathname||'');`,
  'router captures /u/ into RC_DEEPUPD');

t = replaceOnce(t,
  `  function boot(){
    if(openGuide(window.RC_DEEPGUIDE)){`,
  `  function openUpdates(on){
    if(!on||typeof RES_GUIDE==='undefined') return false;
    /* seed the library behind it so the Back arrow has somewhere to go */
    root('library'); go('clinupd'); window.scrollTo(0,0);
    return true;
  }
  function boot(){
    if(openUpdates(window.RC_DEEPUPD)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }
    if(openGuide(window.RC_DEEPGUIDE)){`,
  'boot() opens a shared /u/ link with the library seeded behind it');

t = replaceOnce(t,
  ` else if(t&&t.v==='resguide'&&t.id) want=RC_PATH+'r/'+encodeURIComponent(String(t.id).replace('|','-'));`,
  ` else if(t&&t.v==='resguide'&&t.id) want=RC_PATH+'r/'+encodeURIComponent(String(t.id).replace('|','-'));\n` +
  ` else if(t&&t.v==='clinupd') want=RC_PATH+'u/';`,
  'rcSyncURL() keeps /u/ in the address bar');

/* ------------------------------------------------------------------------ 6. the share fn */
t = replaceOnce(t,
  'function rcShareGuide(spec,year){',
  `function rcShareUpdates(){
  var origin=(typeof RC_SHARE_ORIGIN!=='undefined'&&RC_SHARE_ORIGIN)
    ? RC_SHARE_ORIGIN.replace(/\\/+$/,'')+'/'
    : (window.RC_ROOT||(location.origin+'/'));
  var url=origin+'u/';
  var n=0, g=(typeof RES_GUIDE!=='undefined'&&RES_GUIDE)||{};
  Object.keys(g).forEach(function(k){ Object.keys(g[k]||{}).forEach(function(y){ n+=(g[k][y]||[]).length; }); });
  var text='Clinical Updates'+(n?' \\u2014 '+n+' practice-changing stud'+(n===1?'y':'ies'):'')+' in Rounds Codex';
  /* synchronous inside the tap: Safari rejects a share that has left the gesture */
  if(navigator.share){
    try{ navigator.share({title:'Clinical Updates',text:text,url:url}).catch(function(){}); return; }
    catch(e){ /* some WebViews expose share and then throw */ }
  }
  rcCopyLink(url);
}

function rcShareGuide(spec,year){`,
  'rcShareUpdates() added beside the other share functions');

fs.writeFileSync(FILE, t);

let red = fs.readFileSync(REDIR, 'utf8');
if (red.includes('/u/*')) {
  console.log('  --  _redirects already has /u/*');
} else {
  red = red.replace(/\s*$/, '\n') +
    '\n# The Clinical Updates index is a client-side route too. Same rewrite as the rest.\n' +
    '/u/*    /index.html   200\n';
  fs.writeFileSync(REDIR, red);
  console.log('  ok  _redirects gained the /u/* rewrite');
}

console.log(`\n${FILE}: ${before} -> ${t.length} bytes`);
