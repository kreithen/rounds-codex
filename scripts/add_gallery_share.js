/* Share a gallery: /g/<id>, with a Share button in the gallery header.
 *
 * Conditions have /c/<id> and specialty sections have /s/<slug>. Galleries -- the most visually
 * shareable thing in the app -- had no link at all. Same machinery as the other two: the head
 * script captures the slug before paint() can normalise the address bar, the router opens it
 * once content has loaded, rcSyncURL keeps the bar in step.
 *
 * The one trap, hit for real when /s/ was added: RC_ROOT decides the <base> tag, and a route it
 * does not know about is treated as a FOLDER. /g/hepatitis would make the base /g/, every
 * content/*.json would resolve to /g/content/... and the app would boot to "Content didn't
 * load" with no page error, because the loader catches that case and reports it politely. Any
 * new one-segment route must go in that regex. It is now /^\/(c|s|g)\//.
 *
 * Usage: node scripts/add_gallery_share.js <index.html> <_redirects>
 */
'use strict';
const fs = require('fs');

const [, , INDEX, REDIR] = process.argv;
if (!INDEX || !REDIR) {
  console.error('usage: add_gallery_share.js <index.html> <_redirects>');
  process.exit(2);
}

function replaceOnce(s, old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error(`FAIL ${label}: found ${parts.length - 1} occurrences, expected 1`);
    process.exit(1);
  }
  console.log('  ok  ' + label);
  return parts[0] + neu + parts[1];
}

let s = fs.readFileSync(INDEX, 'utf8');
const n0 = s.length;
if (s.includes('rcShareGallery')) { console.error('FAIL: already patched'); process.exit(1); }

/* --------------------------------------------- 1. /g/ is a route, not a folder */

s = replaceOnce(s,
  ` var r=/^\\/(c|s)\\//.test(location.pathname||'')?location.origin+'/':h.replace(/[^\\/]*$/,'');`,
  ` var r=/^\\/(c|s|g)\\//.test(location.pathname||'')?location.origin+'/':h.replace(/[^\\/]*$/,'');`,
  'RC_ROOT knows /g/');

s = replaceOnce(s,
  ` var sm=/^\\/s\\/([A-Za-z0-9_-]+)\\/?$/.exec(location.pathname||'');\n window.RC_DEEPSPEC=sm?decodeURIComponent(sm[1]):null;\n`,
  ` var sm=/^\\/s\\/([A-Za-z0-9_-]+)\\/?$/.exec(location.pathname||'');\n window.RC_DEEPSPEC=sm?decodeURIComponent(sm[1]):null;\n`
  + ` /* and a gallery, /g/<id> */\n`
  + ` var gm=/^\\/g\\/([A-Za-z0-9_-]+)\\/?$/.exec(location.pathname||'');\n`
  + ` window.RC_DEEPGAL=gm?decodeURIComponent(gm[1]):null;\n`,
  'head script captures /g/<id>');

/* --------------------------------------------------------- 2. sharing */

s = replaceOnce(s, 'function rcShareSection(){',
  `/* Share the gallery on screen. Same rules as the other two: navigator.share has to be called
   synchronously from the tap or Safari rejects it, and with no sheet we copy instead. */
function rcShareGallery(id){
  var g=GALLERIES[id], d=byId[id];
  if(!g) return;
  var origin=(typeof RC_SHARE_ORIGIN!=='undefined'&&RC_SHARE_ORIGIN)
    ? RC_SHARE_ORIGIN.replace(/\\/+$/,'')+'/'
    : (window.RC_ROOT||(location.origin+'/'));
  var url=origin+'g/'+encodeURIComponent(id);
  var name=(d&&d.name)||g.title||id;
  var n=g.images.length;
  var text=name+' \\u2014 '+n+' illustrated page'+(n===1?'':'s')+' in Rounds Codex';
  if(navigator.share){
    try{ navigator.share({title:name,text:text,url:url}).catch(function(){}); return; }
    catch(e){ /* some WebViews expose share and then throw */ }
  }
  rcCopyLink(url);
}

function rcShareSection(){`,
  'rcShareGallery');

/* ------------------------------------------- 3. the button, in the gallery header */

s = replaceOnce(s,
  `<div class="gh-mid"><div class="c">\${d.category} · Gallery</div><div class="t">\${d.name}</div></div><img class="qlogo" src="\${LOGO}">`,
  `<div class="gh-mid"><div class="c">\${d.category} · Gallery</div><div class="t">\${d.name}</div></div>`
  + `<button class="g-share" onclick="rcShareGallery('\${id}')" aria-label="Share this gallery">`
  + `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" `
  + `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">`
  + `<path d="M12 15V3"/><path d="M8 7l4-4 4 4"/>`
  + `<path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg></button>`,
  'Share button replaces the logo in the gallery header');

s = replaceOnce(s, '.pdfbtn{',
  `/* Sits where the logo was, so the header keeps its three-part balance. Icon only: the header
   already carries a two-line title and a worded button would wrap on a narrow phone. */
.g-share{display:inline-flex;align-items:center;justify-content:center;flex:none;
  width:34px;height:34px;border-radius:11px;cursor:pointer;
  color:var(--accent);background:color-mix(in srgb,var(--accent) 13%,transparent);
  border:1px solid color-mix(in srgb,var(--accent) 32%,transparent);
  transition:background .15s,border-color .15s,transform .12s;}
.g-share svg{width:15px;height:15px;}
.g-share:hover{background:color-mix(in srgb,var(--accent) 20%,transparent);
  border-color:color-mix(in srgb,var(--accent) 46%,transparent);}
.g-share:active{transform:scale(.95);}
.pdfbtn{`,
  'Share button styling');

/* ------------------------------------------------- 4. address bar + inbound link */

s = replaceOnce(s,
  ` else if(t&&t.v==='library'&&typeof libSpec!=='undefined'&&libSpec!=='All') want=RC_PATH+'s/'+rcSlug(libSpec);`,
  ` else if(t&&t.v==='library'&&typeof libSpec!=='undefined'&&libSpec!=='All') want=RC_PATH+'s/'+rcSlug(libSpec);
 else if(t&&t.v==='gallery'&&t.id) want=RC_PATH+'g/'+encodeURIComponent(t.id);`,
  'rcSyncURL knows about galleries');

s = replaceOnce(s,
  `  function boot(){
    if(!openSection(window.RC_DEEPSPEC)) openTarget(window.RC_DEEPLINK);`,
  `  function openGallery(id){
    if(!id||typeof GALLERIES==='undefined'||!GALLERIES[id]||!byId[id]) return false;
    /* land on the condition first, so Back from a shared gallery goes somewhere sensible
       instead of dead-ending */
    root('library'); go('detail',id); go('gallery',id);
    window.scrollTo(0,0);
    return true;
  }
  function boot(){
    if(openGallery(window.RC_DEEPGAL)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }
    if(!openSection(window.RC_DEEPSPEC)) openTarget(window.RC_DEEPLINK);`,
  'router opens a gallery link');

fs.writeFileSync(INDEX, s);

let r = fs.readFileSync(REDIR, 'utf8');
if (!/^\/g\/\*/m.test(r)) {
  r = r.trimEnd() + `\n\n# A gallery link is a client-side route too. Same rewrite as /c/* and /s/*.\n`
    + `/g/*    /index.html   200\n`;
  fs.writeFileSync(REDIR, r);
  console.log('  ok  _redirects rewrites /g/*');
}

console.log(`\n${n0} -> ${s.length} chars (+${s.length - n0})`);
