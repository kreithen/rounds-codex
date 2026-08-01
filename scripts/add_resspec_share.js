#!/usr/bin/env node
/*
 * Two changes to Resident Mode, asked for 2026-08-01.
 *
 *     node scripts/add_resspec_share.js <site-root> [--check]
 *
 * 1. THE RESIDENT MODE BACK ARROW GOES HOME.
 *    It is labelled "Library" but called navBack(), which pops to whatever preceded --
 *    and that is not always the library. Reproduced: library -> Clinical Calculators ->
 *    Resident Mode, then the arrow lands on the CALCULATORS. A crumb that names its
 *    destination has to go there, so it is now root('library').
 *
 * 2. EVERY SPECIALTY PAGE GETS A SHARE BUTTON, at /r/<spec>.
 *    Guideline YEAR pages already share as /r/<spec>-<year>. This reuses the same route
 *    letter rather than spending a new one: openGuide() requires a trailing four-digit
 *    year and returns false without it, so a bare /r/id falls through to the new handler.
 *    No specialty code ends in -NNNN, so the two forms cannot collide, and RC_ROOT's
 *    regex and the _redirects rule already cover /r/ -- which is the part that silently
 *    breaks everything when it is missed (<base> becomes the folder and every
 *    content/*.json 404s, booting to "Content didn't load" with no page error).
 *
 * 3. AND THE SPECIALTY CRUMB IS FIXED WHILE WE ARE HERE, because the share link depends
 *    on it. It called go('res'), which PUSHES: library > res > resspec > res, growing the
 *    stack every round trip. Every other crumb in the app pops. It is now back(), which
 *    is correct both from the in-app path and from a shared link, because the deep-link
 *    handler seeds res behind the specialty page.
 *
 * navigator.share is called SYNCHRONOUSLY from the tap -- Safari rejects a share that has
 * left the user-gesture context.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: add_resspec_share.js <site-root> [--check]'); process.exit(2); }
const IDX = path.join(ROOT, 'index.html');
if (!fs.existsSync(IDX)) { console.error('missing: ' + IDX); process.exit(2); }

let s = fs.readFileSync(IDX, 'utf8');
if (s.includes('rcShareSpec')) { console.error('FAILED: this build already carries the specialty share button.'); process.exit(2); }

/* The prerequisites this rides on. If any is absent the feature would half-work in a way
   that only shows up on a real phone, so refuse rather than ship it. */
for (const [what, ok] of [
  ['the /r/ route in the RC_ROOT regex', /\(c\|s\|g\|r[|)]/.test(s)],
  ['rcShareGuide (the pattern this copies)', s.includes('function rcShareGuide(')],
  ['rcCopyLink (the no-share-sheet fallback)', s.includes('rcCopyLink')],
  ['the .res-gshare button styling', s.includes('.res-gshare{')],
  ['RC_DEEPGUIDE (the /r/ capture this reuses)', s.includes('RC_DEEPGUIDE')],
]) if (!ok) { console.error(`FAILED: missing ${what}`); process.exit(1); }

const edits = [];
function sub(what, find, repl, expect = 1) {
  const n = s.split(find).length - 1;
  if (n !== expect) { console.error(`FAILED (${what}): found ${n} occurrences, expected ${expect}`); process.exit(1); }
  s = s.replace(find, repl);
  edits.push(what);
}

/* --------------------------------------------------------- 1. the back arrow goes home */
sub('Resident Mode back arrow -> the library, not wherever you came from',
  `'<div class="res-crumb" onclick="navBack()"><span class="res-back">\\u2190</span> Library</div>'+\n  '<div class="res-hero">`,
  `'<div class="res-crumb" onclick="root(\\'library\\')"><span class="res-back">\\u2190</span> Library</div>'+\n  '<div class="res-hero">`);

/* ------------------------------- 2. the specialty crumb pops instead of pushing, and
 *                                    makes room for the share button beside the title */
sub('specialty crumb pops (was go(\'res\'), which grew the stack every round trip)',
  `let h='<div class="res-wrap"><div class="res-crumb" onclick="go(\\'res\\')"><span class="res-back">\\u2190</span> Specialties</div><h2 class="res-h">'+name+'</h2>';`,
  `let h='<div class="res-wrap"><div class="res-crumb" onclick="back()"><span class="res-back">\\u2190</span> Specialties</div>'
  +'<div class="res-spechead"><h2 class="res-h">'+name+'</h2>'
  +'<button class="res-gshare" onclick="rcShareSpec(&quot;'+spec+'&quot;)" aria-label="Share the '+String(name).replace(/&/g,'&amp;').replace(/"/g,'&quot;')+' resident page">'
  +'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
  +'<path d="M12 15V3"/><path d="M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>Share</button></div>';`);

/* --------------------------------------------------------------- 3. the share function */
sub('rcShareSpec() beside the other share functions',
  'function rcShareGuide(spec,year){',
  `function rcShareSpec(spec){
  var origin=(typeof RC_SHARE_ORIGIN!=='undefined'&&RC_SHARE_ORIGIN)
    ? RC_SHARE_ORIGIN.replace(/\\/+$/,'')+'/'
    : (window.RC_ROOT||(location.origin+'/'));
  var url=origin+'r/'+encodeURIComponent(spec);
  var name=(typeof resSpecName==='function')?resSpecName(spec):spec;
  var n=(typeof RES_DATA!=='undefined')?RES_DATA.filter(function(d){return d.sec===spec;}).length:0;
  var text=name+' \\u2014 resident-level topics'+(n?' ('+n+' entries)':'')+' in Rounds Codex';
  /* synchronous inside the tap: Safari rejects a share that has left the gesture */
  if(navigator.share){
    try{ navigator.share({title:name,text:text,url:url}).catch(function(){}); return; }
    catch(e){ /* some WebViews expose share and then throw */ }
  }
  rcCopyLink(url);
}

function rcShareGuide(spec,year){`);

/* ------------------------------------------------- 4. open /r/<spec> at boot.
 * Tried AFTER openGuide, which rejects anything without a trailing year, so the
 * year form keeps priority and a bare specialty falls through to here. */
sub('/r/<spec> opens the specialty page',
  `    if(openGuide(window.RC_DEEPGUIDE)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }`,
  `    if(openGuide(window.RC_DEEPGUIDE)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }
    if(openResSpec(window.RC_DEEPGUIDE)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }`);

sub('openResSpec() seeds res behind the page so Back is not a dead end',
  `  function boot(){`,
  `  function openResSpec(key){
    /* Same capture as the guidelines link. openGuide has already rejected anything with a
       trailing year, so whatever reaches here is a bare specialty code. */
    if(!key||typeof RES_SPECIALTIES==='undefined') return false;
    if(!RES_SPECIALTIES.some(function(x){return x.id===key;})) return false;
    if(typeof RES_ACTIVE!=='undefined'&&!RES_ACTIVE.has(key)) return false;  /* "coming soon" has no page */
    if(typeof setMode==='function') setMode('resident');
    /* seed the specialty list behind it, so the crumb has somewhere to pop to */
    root('res'); go('resspec',key);
    window.scrollTo(0,0);
    return true;
  }
  function boot(){`);

/* ---------------------------------------------------- 5. keep the address bar in step.
 * Without this the shared link's URL snaps back to / the moment boot() calls rcSyncURL,
 * and a reload lands on the home page -- the exact failure the guidelines link hit. */
sub('rcSyncURL knows the resspec view',
  ` else if(t&&t.v==='resguide'&&t.id) want=RC_PATH+'r/'+encodeURIComponent(String(t.id).replace('|','-'));`,
  ` else if(t&&t.v==='resguide'&&t.id) want=RC_PATH+'r/'+encodeURIComponent(String(t.id).replace('|','-'));
 else if(t&&t.v==='resspec'&&t.id) want=RC_PATH+'r/'+encodeURIComponent(t.id);`);

/* -------------------------------------------------------------------------- 6. styling
 * The title and the button share a row. .res-h has its own margins, so the row uses
 * baseline alignment and lets the button sit hard right rather than restyling the h2. */
sub('specialty header row styling',
  '.res-gshare{display:inline-flex;',
  `/* nowrap, not wrap. With wrap, the four specialties whose names are long enough to take
   two lines -- Obstetrics & Gynecology, Otolaryngology - Head & Neck Surgery, Physical
   Medicine & Rehabilitation, Radiology (Diagnostic, Interventional, Nuclear) -- pushed the
   button onto a row of its own. min-width:0 lets the heading wrap internally instead, so
   the button stays on the title's first line at every width. */
.res-spechead{display:flex;align-items:baseline;justify-content:space-between;gap:10px;flex-wrap:nowrap}
.res-spechead .res-h{flex:1 1 auto;min-width:0}
.res-spechead .res-gshare{flex:0 0 auto}
.res-gshare{display:inline-flex;`);

console.log(`${edits.length} edits:`);
edits.forEach(e => console.log('  ok  ' + e));
if (CHECK) { console.log('\n--check: nothing written'); process.exit(0); }
fs.writeFileSync(IDX, s);
console.log(`\nwrote ${path.relative(process.cwd(), IDX)}`);
console.log('_redirects already rewrites /r/* — no change needed there.');
