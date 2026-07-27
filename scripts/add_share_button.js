/* A Share button on every condition page, beside the ICD-10 pill.
 *
 * The share links shipped earlier gave every condition a URL; this is the button that hands
 * it to somebody. Tapping it opens the phone's own share sheet -- Messages, Mail, WhatsApp,
 * AirDrop -- rather than a list of services we would have to pick and maintain.
 *
 * Decisions, all Dr. Kreithen's:
 *
 *  - What is shared: the condition's name and its /c/<id> link. Both `text` and `title` are
 *    set. `title` alone is what most examples show, but iOS Messages ignores it and would
 *    send a bare URL; `text` is what actually puts the name above the link. Mail uses
 *    `title` as the subject, so both earn their place.
 *
 *  - No native sheet -- desktop browsers, and anything not on https -- copies the link and
 *    toasts instead. The button then exists everywhere and always does something; hiding it
 *    would make the page different on a laptop, and a control that silently does nothing is
 *    worse than one that does something small.
 *
 *  - Colour follows the MODE (--accent: nursing green, medical cyan, resident purple), not
 *    the category. Note that the ICD-10 pill beside it follows the CATEGORY (--sec, set
 *    inline on .pad per condition), so the two are deliberately different colours. Same pill
 *    shape, height, border and type size, so they still read as a pair.
 *
 * One thing this cannot do: make the link PREVIEW in Messages say the condition name. That
 * comes from the <title> of the page the recipient's phone fetches, and /c/<id> is a rewrite
 * to the same index.html for every condition. Fixing it properly needs per-route meta tags
 * from the server, which Netlify can do with a function or prerender -- a separate job.
 *
 * Usage: node scripts/add_share_button.js <index.html>
 */
'use strict';
const fs = require('fs');

const INDEX = process.argv[2];
if (!INDEX) { console.error('usage: add_share_button.js <index.html>'); process.exit(2); }

let s = fs.readFileSync(INDEX, 'utf8');
const n0 = s.length;

function replaceOnce(old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error('FAIL %s: found %d occurrences, expected 1', label, parts.length - 1);
    process.exit(1);
  }
  console.log('  ok  ' + label);
  s = parts[0] + neu + parts[1];
}

if (s.includes('rcShare')) { console.error('FAIL: already patched'); process.exit(1); }

/* ------------------------------------------------------------------ 1. the markup */

// The ICD-10 pill sits alone in a bare <div>. That div becomes the row holding both.
replaceOnce(
  '<div><span class="d-icd">ICD-10 ${d.icd10}</span></div>',
  '<div class="d-idrow"><span class="d-icd">ICD-10 ${d.icd10}</span>'
  + '<button class="d-share" onclick="rcShare(\'${id}\')" aria-label="Share ${String(d.name).replace(/"/g,\'&quot;\')}">'
  + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
  + '<path d="M12 15V3"/><path d="M8 7l4-4 4 4"/>'
  + '<path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>Share</button></div>',
  'Share button beside the ICD-10 pill');

/* ------------------------------------------------------------------ 2. the styling */

replaceOnce('.cta{display:flex;gap:10px;margin-top:14px;}',
  `/* The ICD-10 pill carried its own margin-top; the row owns the spacing now so the two
   sit on one baseline. Wraps rather than overflowing on a 320px screen. */
.d-idrow{display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin-top:12px;}
.d-idrow .d-icd{margin-top:0;}
/* Same pill as .d-icd -- same type size, padding, radius and border weight, so the two are
   the same height -- but keyed to --accent (the MODE: nursing green, medical cyan, resident
   purple) where the ICD pill is keyed to --sec (the CATEGORY). */
.d-share{display:inline-flex;align-items:center;gap:6px;font-family:inherit;font-weight:700;
  font-size:11.5px;letter-spacing:.2px;cursor:pointer;padding:6px 11px;border-radius:9px;
  color:var(--accent);background:color-mix(in srgb,var(--accent) 13%,transparent);
  border:1px solid color-mix(in srgb,var(--accent) 32%,transparent);
  transition:background .15s,border-color .15s,transform .12s;}
.d-share svg{width:12px;height:12px;flex:none;}
.d-share:hover{background:color-mix(in srgb,var(--accent) 20%,transparent);
  border-color:color-mix(in srgb,var(--accent) 46%,transparent);}
.d-share:active{transform:scale(.97);}
.cta{display:flex;gap:10px;margin-top:14px;}`,
  'Share button styling');

/* ------------------------------------------------------------------ 3. the behaviour */

replaceOnce('function toast(t){',
  `/* Hand this condition to the phone's own share sheet -- Messages, Mail, WhatsApp, AirDrop.
   navigator.share MUST be called synchronously from the tap: Safari rejects a share that has
   drifted out of the user gesture, so nothing may be awaited before it. A cancelled sheet
   rejects with AbortError, which is a normal outcome and not something to report.

   Both text and title are set on purpose. iOS Messages ignores title and would send a bare
   URL; text is what puts the condition's name above the link. Mail uses title as the subject.

   Where there is no sheet -- desktop, or anything not on https -- copy the link instead.
   Same intent, and the button then behaves the same way everywhere. */
function rcShare(id){
  var d=(typeof byId!=='undefined')&&byId[id]; if(!d) return;
  var url=(window.RC_ROOT||(location.origin+'/'))+'c/'+encodeURIComponent(id);
  if(navigator.share){
    try{
      navigator.share({title:d.name,text:d.name,url:url}).catch(function(){});
      return;
    }catch(e){ /* some WebViews expose share and then throw; fall through to copying */ }
  }
  rcCopyLink(url);
}

function rcCopyLink(url){
  var ok=function(){ toast('Link copied'); };
  var no=function(){ toast('Couldn&rsquo;t copy the link'); };
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(ok,function(){ rcCopyFallback(url,ok,no); });
  }else{
    rcCopyFallback(url,ok,no);
  }
}

/* execCommand('copy') is deprecated, but navigator.clipboard is absent entirely on http://
   and in older WebViews, and this is the only thing left there. Off-screen rather than
   hidden: a display:none textarea cannot be selected. */
function rcCopyFallback(url,ok,no){
  try{
    var t=document.createElement('textarea');
    t.value=url; t.setAttribute('readonly','');
    t.style.cssText='position:fixed;top:-9999px;left:-9999px;opacity:0';
    document.body.appendChild(t);
    t.select(); t.setSelectionRange(0,t.value.length);
    var done=document.execCommand('copy');
    document.body.removeChild(t);
    done?ok():no();
  }catch(e){ no(); }
}

function toast(t){`,
  'rcShare() + clipboard fallback');

fs.writeFileSync(INDEX, s);
console.log('%d -> %d chars (+%d)', n0, s.length, s.length - n0);
