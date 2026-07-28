/* Share a whole specialty section: /s/<slug>, with a Share button in the library count row.
 *
 * Conditions already have /c/<id>. This is the same idea one level up -- "here is the whole
 * Respiratory section" rather than "here is Asthma" -- and it reuses the same machinery: the
 * head script captures the incoming slug before paint() can rewrite the address bar, the
 * router opens it once the content has loaded, and rcSyncURL keeps the bar in step.
 *
 * Decisions:
 *
 *  - /s/<slug> to match /c/<id>. Category names are slugged: "Renal & GU" -> renal-gu,
 *    "Women's Health" -> womens-health. The script asserts the slugs are unique, because two
 *    categories colliding would make a link ambiguous and nothing else would notice.
 *
 *  - The link does NOT carry the sender's mode, which is a change of mind. The section list is
 *    identical in all three modes -- mode only changes the depth of content inside a condition
 *    -- so pinning it would override the recipient's own preference to no purpose, and make the
 *    URL uglier. Mode is a personal setting, not a property of what is being shared.
 *
 *  - The button appears only when a real section is selected. With "All" showing, sharing the
 *    library is sharing the app, which the About page's shareApp() already does.
 *
 *  - Same outlined pill as the condition Share button: same mode colour, glyph and wording, so
 *    there is one share control in the app rather than two that look different.
 *
 * Usage: node scripts/add_section_share.js <index.html> <_redirects>
 */
'use strict';
const fs = require('fs');

const [, , INDEX, REDIR] = process.argv;
if (!INDEX || !REDIR) {
  console.error('usage: add_section_share.js <index.html> <_redirects>');
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
if (s.includes('rcShareSection')) { console.error('FAIL: already patched'); process.exit(1); }

/* Slugs are the link. Two categories slugging the same would make a shared link ambiguous and
   nothing at runtime would notice, so check it here against the real category list. */
const slug = n => String(n).toLowerCase().replace(/&/g, ' ').replace(/['’]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const condPath = require('path').join(require('path').dirname(INDEX), 'content', 'conditions.json');
if (fs.existsSync(condPath)) {
  const cats = [];
  for (const d of JSON.parse(fs.readFileSync(condPath, 'utf8')))
    if (!cats.includes(d.category)) cats.push(d.category);
  const seen = new Map();
  for (const c of cats) {
    const k = slug(c);
    if (!k) { console.error(`FAIL: "${c}" slugs to an empty string`); process.exit(1); }
    if (seen.has(k)) {
      console.error(`FAIL: "${c}" and "${seen.get(k)}" both slug to "${k}"`);
      process.exit(1);
    }
    seen.set(k, c);
  }
  console.log(`  ok  ${cats.length} categories, ${seen.size} distinct slugs`);
  console.log('      ' + cats.map(c => slug(c)).join(', '));
} else {
  console.error('FAIL: cannot find ' + condPath + ' to check slug uniqueness');
  process.exit(1);
}

/* ---------------------------------------------------- 1. capture /s/<slug> at first parse */

/* RC_ROOT decides <base>, and it only knew about /c/. On /s/respiratory it fell through to
   "strip the last path segment", making the base /s/ -- so content/*.json resolved to
   /s/content/... , 404'd, and the app booted straight to "Content didn't load". Every new
   one-segment route has to be added here, which is why the two are now one pattern. */
s = replaceOnce(s,
  ` var r=/^\\/c\\//.test(location.pathname||'')?location.origin+'/':h.replace(/[^\\/]*$/,'');`,
  ` var r=/^\\/(c|s)\\//.test(location.pathname||'')?location.origin+'/':h.replace(/[^\\/]*$/,'');`,
  'RC_ROOT treats /s/ as a route, not a folder');

s = replaceOnce(s,
  ` window.RC_DEEPLINK=m?decodeURIComponent(m[1]):null;\n`,
  ` window.RC_DEEPLINK=m?decodeURIComponent(m[1]):null;\n`
  + ` /* and the same for a whole section, /s/<slug> */\n`
  + ` var sm=/^\\/s\\/([A-Za-z0-9_-]+)\\/?$/.exec(location.pathname||'');\n`
  + ` window.RC_DEEPSPEC=sm?decodeURIComponent(sm[1]):null;\n`,
  'head script captures /s/<slug>');

/* ------------------------------------------------------------- 2. slug helpers + sharing */

s = replaceOnce(s, 'function rcShare(id){',
  `/* "Renal & GU" -> renal-gu.  Ampersands and apostrophes go, everything else collapses to
   single hyphens. Uniqueness is asserted at build time by scripts/add_section_share.js --
   two categories slugging the same would make a shared link ambiguous silently. */
function rcSlug(name){
  return String(name).toLowerCase().replace(/&/g,' ').replace(/['\\u2019]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
}
function rcSpecFromSlug(slug){
  if(!slug||typeof ORDER==='undefined') return null;
  for(var i=0;i<ORDER.length;i++) if(rcSlug(ORDER[i])===slug) return ORDER[i];
  return null;
}

/* Share the section the library is filtered to. Same rules as rcShare(): navigator.share has
   to be called synchronously from the tap or Safari rejects it, and where there is no sheet
   we copy the link instead. */
function rcShareSection(){
  if(typeof libSpec==='undefined'||libSpec==='All') return;
  var origin=(typeof RC_SHARE_ORIGIN!=='undefined'&&RC_SHARE_ORIGIN)
    ? RC_SHARE_ORIGIN.replace(/\\/+$/,'')+'/'
    : (window.RC_ROOT||(location.origin+'/'));
  var url=origin+'s/'+rcSlug(libSpec);
  var n=DATA.filter(function(d){ return d.category===libSpec; }).length;
  var text=libSpec+' \\u2014 '+n+' condition'+(n===1?'':'s')+' in Rounds Codex';
  if(navigator.share){
    try{ navigator.share({title:libSpec,text:text,url:url}).catch(function(){}); return; }
    catch(e){ /* some WebViews expose share and then throw */ }
  }
  rcCopyLink(url);
}

function rcShare(id){`,
  'rcSlug / rcSpecFromSlug / rcShareSection');

/* ------------------------------------------------- 3. the address bar follows the section */

s = replaceOnce(s,
  ` var want=(t&&t.v==='detail'&&t.id)?RC_PATH+'c/'+encodeURIComponent(t.id):RC_PATH;`,
  ` var want=RC_PATH;
 if(t&&t.v==='detail'&&t.id) want=RC_PATH+'c/'+encodeURIComponent(t.id);
 /* a filtered library is a shareable place too, so the bar should show it */
 else if(t&&t.v==='library'&&typeof libSpec!=='undefined'&&libSpec!=='All') want=RC_PATH+'s/'+rcSlug(libSpec);`,
  'rcSyncURL knows about sections');

// picking a chip does not repaint, so it has to sync the bar itself
s = replaceOnce(s,
  `function libPick(i){libSpec=window._specs[i];libInit();}`,
  `function libPick(i){libSpec=window._specs[i];libInit();if(typeof rcSyncURL==='function')rcSyncURL();}`,
  'chip taps update the address bar');

/* ------------------------------------------------------------------ 4. the button itself */

s = replaceOnce(s,
  `<div class="chips" id="chips"></div><div class="count"><b id="cnt">180</b> conditions</div>`,
  `<div class="chips" id="chips"></div>`
  + `<div class="count"><span><b id="cnt">180</b> conditions</span>`
  + `<button class="sec-share" id="secShare" hidden onclick="rcShareSection()" aria-label="Share this section">`
  + `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" `
  + `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">`
  + `<path d="M12 15V3"/><path d="M8 7l4-4 4 4"/>`
  + `<path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>Share</button></div>`,
  'Share button in the count row');

// shown only when a real section is picked
s = replaceOnce(s,
  ` document.getElementById('cnt').textContent=rows.length;`,
  ` document.getElementById('cnt').textContent=rows.length;
 var ss=document.getElementById('secShare'); if(ss) ss.hidden=(libSpec==='All');`,
  'button hidden while "All" is showing');

s = replaceOnce(s,
  `.count{padding:14px 18px 2px;font-size:13px;color:var(--muted-2);font-weight:600;}`,
  `.count{display:flex;align-items:center;justify-content:space-between;gap:10px;
  padding:14px 18px 2px;font-size:13px;color:var(--muted-2);font-weight:600;}
/* the condition pages' Share pill, at the size this row can carry */
.sec-share{display:inline-flex;align-items:center;gap:5px;font-family:inherit;font-weight:700;
  font-size:11px;letter-spacing:.2px;cursor:pointer;padding:5px 10px;border-radius:8px;
  color:var(--accent);background:color-mix(in srgb,var(--accent) 13%,transparent);
  border:1px solid color-mix(in srgb,var(--accent) 32%,transparent);
  transition:background .15s,border-color .15s,transform .12s;}
.sec-share[hidden]{display:none;}
.sec-share svg{width:11px;height:11px;flex:none;}
.sec-share:hover{background:color-mix(in srgb,var(--accent) 20%,transparent);
  border-color:color-mix(in srgb,var(--accent) 46%,transparent);}
.sec-share:active{transform:scale(.97);}`,
  'Share button styling');

/* --------------------------------------------------------------------- 5. open the link */

s = replaceOnce(s,
  `  function boot(){ openTarget(window.RC_DEEPLINK); window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); }`,
  `  function openSection(slug){
    var spec=(typeof rcSpecFromSlug==='function')&&rcSpecFromSlug(slug);
    if(!spec) return false;
    root('library'); libSpec=spec;
    /* libInit paints the chips and the list; it only exists once the library view is on screen */
    if(typeof libInit==='function') libInit();
    window.scrollTo(0,0);
    return true;
  }
  function boot(){
    if(!openSection(window.RC_DEEPSPEC)) openTarget(window.RC_DEEPLINK);
    window.RC_READY=true;
    if(typeof rcSyncURL==='function') rcSyncURL();
  }`,
  'router opens a section link');

fs.writeFileSync(INDEX, s);

/* --------------------------------------------------------------------- 6. _redirects */

let r = fs.readFileSync(REDIR, 'utf8');
if (!/^\/s\/\*/m.test(r)) {
  r = r.trimEnd() + `\n\n# A section link is a client-side route too. Same rewrite as /c/*.\n`
    + `/s/*    /index.html   200\n`;
  fs.writeFileSync(REDIR, r);
  console.log('  ok  _redirects rewrites /s/*');
} else {
  console.log('  --  _redirects already has /s/*');
}

console.log(`\n${n0} -> ${s.length} chars (+${s.length - n0})`);
