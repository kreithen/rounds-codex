/* Add a Share button to the Clinical Guidelines year page, and the /r/<spec>-<year> route
 * that makes a shared link land back on that page.
 *
 * Usage: node scripts/add_guideline_share.js <index.html> <_redirects>
 *
 * This touches the riskiest area of the app, so the specifics matter:
 *
 * THE RC_ROOT REGEX MUST LEARN /r/. RC_ROOT decides the <base> tag before the first relative
 * URL is parsed. A one-segment path it does not recognise is treated as a FOLDER, so <base>
 * becomes "/r/" and every content/*.json resolves to /r/content/... and 404s. The app then
 * boots to "Content didn't load" with no page error at all, because the loader catches it.
 * That is documented in CLAUDE.md as having already happened once, when /s/ was added.
 *
 * _redirects NEEDS THE REWRITE TOO, or Netlify 404s /r/... before the app ever loads.
 *
 * THE KEY IS "<spec>-<year>", NOT "<spec>|<year>". The nav stack uses a pipe internally, but a
 * pipe in a URL gets percent-encoded to %7C, which is ugly in a shared link and easy to mangle
 * when pasted. A hyphen is URL-safe, and splitting on the LAST hyphen keeps it unambiguous even
 * though some specialty codes could contain one.
 *
 * navigator.share IS CALLED SYNCHRONOUSLY FROM THE TAP. Safari rejects a share that has left the
 * user-gesture context, which is why there is no await before it.
 */
'use strict';
const fs = require('fs');

const [, , FILE, REDIR] = process.argv;
if (!FILE || !REDIR) { console.error('usage: add_guideline_share.js <index.html> <_redirects>'); process.exit(2); }
let s = fs.readFileSync(FILE, 'utf8');
const before = s.length;

function replaceOnce(str, find, repl, what) {
  const n = str.split(find).length - 1;
  if (n !== 1) { console.error(`FAILED (${what}): found ${n} occurrences, expected 1`); process.exit(1); }
  console.log('  ok  ' + what);
  return str.replace(find, repl);
}

/* ------------------------------------------------- 1. RC_ROOT must treat /r/ as a route */
s = replaceOnce(s,
  `var r=/^\\/(c|s|g)\\//.test(location.pathname||'')`,
  `var r=/^\\/(c|s|g|r)\\//.test(location.pathname||'')`,
  'RC_ROOT regex now covers /r/ (without this, <base> becomes /r/ and every content file 404s)');

/* ------------------------------------------------------------ 2. capture the deep link */
s = replaceOnce(s,
  ` window.RC_DEEPGAL=gm?decodeURIComponent(gm[1]):null;`,
  ` window.RC_DEEPGAL=gm?decodeURIComponent(gm[1]):null;\n` +
  ` /* and a guidelines year page, /r/<spec>-<year> */\n` +
  ` var rm=/^\\/r\\/([A-Za-z0-9_-]+)\\/?$/.exec(location.pathname||'');\n` +
  ` window.RC_DEEPGUIDE=rm?decodeURIComponent(rm[1]):null;`,
  'router captures /r/<spec>-<year> into RC_DEEPGUIDE');

/* ------------------------------------------------------------------- 3. open it at boot */
s = replaceOnce(s,
  `  function boot(){\n    if(openGallery(window.RC_DEEPGAL)){`,
  `  function openGuide(key){
    if(!key||typeof RES_GUIDE==='undefined') return false;
    /* split on the LAST hyphen: the year is always the trailing 4 digits */
    var m=/^(.+)-(\\d{4})$/.exec(key); if(!m) return false;
    var spec=m[1], year=m[2];
    if(!RES_GUIDE[spec]||!RES_GUIDE[spec][year]) return false;
    /* seed resident mode and the specialty page so Back is not a dead end */
    if(typeof setMode==='function') setMode('resident');
    root('res'); go('resspec',spec); go('resguide',spec+'|'+year);
    window.scrollTo(0,0);
    return true;
  }
  function boot(){
    if(openGuide(window.RC_DEEPGUIDE)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }
    if(openGallery(window.RC_DEEPGAL)){`,
  'boot() opens a shared /r/ link, seeding resident mode + the specialty page behind it');

/* ------------------------------------------------------------------- 4. the share fn */
s = replaceOnce(s,
  'function rcShareSection(){',
  `function rcShareGuide(spec,year){
  var origin=(typeof RC_SHARE_ORIGIN!=='undefined'&&RC_SHARE_ORIGIN)
    ? RC_SHARE_ORIGIN.replace(/\\/+$/,'')+'/'
    : (window.RC_ROOT||(location.origin+'/'));
  var url=origin+'r/'+encodeURIComponent(spec+'-'+year);
  var name=(typeof resSpecName==='function')?resSpecName(spec):spec;
  var n=(((typeof RES_GUIDE!=='undefined'&&RES_GUIDE[spec])||{})[year]||[]).length;
  var text=name+' \\u2014 '+year+' clinical guideline updates'+(n?' ('+n+' stud'+(n===1?'y':'ies')+')':'')+' in Rounds Codex';
  /* synchronous inside the tap: Safari rejects a share that has left the gesture */
  if(navigator.share){
    try{ navigator.share({title:name+' '+year,text:text,url:url}).catch(function(){}); return; }
    catch(e){ /* some WebViews expose share and then throw */ }
  }
  rcCopyLink(url);
}

function rcShareSection(){`,
  'rcShareGuide() added beside the other share functions');

/* --------------------------------------------------- 5. the button on the year page
 * Placed AFTER the "<year> — <specialty>" tag, not between the heading and the tag: the tag
 * names what is being shared, so the button reads as belonging to it. Both spec and year are
 * already in scope at this point in resGuideHTML, as is esc(). */
s = replaceOnce(s,
  `      +'<div class="res-tag">'+esc(year)+' \\u2014 '+esc(name)+'</div>';`,
  `      +'<div class="res-tag">'+esc(year)+' \\u2014 '+esc(name)+'</div>'
      +'<button class="res-gshare" onclick="rcShareGuide(&quot;'+esc(spec)+'&quot;,&quot;'+esc(year)+'&quot;)" aria-label="Share the '+esc(year)+' '+esc(name)+' guideline updates">'
      +'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
      +'<path d="M12 15V3"/><path d="M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>Share</button>';`,
  'Share button at the top of the guidelines year page');

/* ------------------------------------------------------------------------- 6. styling */
s = replaceOnce(s,
  '.res-gwrap{',
  `.res-gshare{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);
 background:rgba(255,255,255,.04);color:var(--accent);border-radius:9px;padding:5px 10px;
 font:inherit;font-size:12.5px;font-weight:800;cursor:pointer;margin:2px 0 10px}
.res-gshare:hover{background:rgba(255,255,255,.09)}
.res-gshare:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.res-gwrap{`,
  'Share button styling');

fs.writeFileSync(FILE, s);

/* ------------------------------------------------------------------- 7. the rewrite rule */
let red = fs.readFileSync(REDIR, 'utf8');
if (red.includes('/r/*')) {
  console.log('  --  _redirects already has /r/*');
} else {
  red = red.replace(/\s*$/, '\n') +
    '\n# A guidelines-year link is a client-side route too. Same rewrite as /c/*, /s/* and /g/*.\n' +
    '/r/*    /index.html   200\n';
  fs.writeFileSync(REDIR, red);
  console.log('  ok  _redirects gained the /r/* rewrite');
}

console.log(`\n${FILE}: ${before} -> ${s.length} bytes`);
