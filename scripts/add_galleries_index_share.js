#!/usr/bin/env node
/* Share button on the Image Galleries INDEX -- the page the white "All Image Galleries"
 * button opens, listing all 74 galleries. Seventh one-segment route.
 *
 *   node scripts/add_galleries_index_share.js <site-root>
 *
 * The index had no URL of its own. /g/<id> already shared ONE gallery; this adds bare /g/
 * for the index, the same way /x/ is the calculator index alongside /x/<id>.
 *
 * Seven surgeries, all asserted. Refuses to run twice.
 *
 * Notes for whoever changes this next:
 *
 *  - The RC_ROOT regex already covers /g/, because it matches the LETTER plus a slash
 *    (/^\/(c|s|g|r|u|x)\//) rather than a letter-plus-id. So bare /g/ needed no change
 *    there -- but a genuinely new letter would, and getting that wrong makes <base> the
 *    folder, 404s every content/*.json, and boots the app to "Content didn't load" with
 *    no page error at all.
 *
 *  - rcSyncURL() needs its own case or the address bar snaps back to / the moment boot()
 *    calls it, and a reload of a shared link lands on the home page.
 *
 *  - The share text uses the UNFILTERED gallery count on purpose. The index has a search
 *    box, and a shared link carries no search term, so quoting the filtered count would
 *    promise the recipient something they will not see.
 *
 *  - aboutHead() gains an optional third argument rather than being duplicated. It is
 *    shared with About, Terms and Privacy, so those three keep passing two arguments and
 *    are unaffected.
 *
 *  - The button reuses .g-share, the icon button already on a single gallery's header.
 *    Same glyph, same 34px square, same --accent. No new CSS: a second share style on
 *    two pages one tap apart would read as two different buttons.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: add_galleries_index_share.js <site-root>'); process.exit(2); }
const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');
const before = s.length;

if (s.includes('rcShareGalleries')) {
  console.error('FAILED: rcShareGalleries already present -- this is an installer, not an upgrader.');
  process.exit(1);
}

let n = 0;
function sub(label, from, to) {
  const c = s.split(from).length - 1;
  if (c !== 1) { console.error(`FAILED: ${label}: found ${c} occurrences, expected 1`); process.exit(1); }
  s = s.replace(from, to);
  n++;
  console.log(`  ok  ${label}`);
}

/* 1. aboutHead() takes an optional trailing element, rendered inside .ahead ------------ */
sub('aboutHead accepts a trailing action',
  `function aboutHead(title,sub){
  return '<div class="ahead"><div class="tb-btn" onclick="navBack()" aria-label="Back">'+
    abIcon('<path d="M15 5l-7 7 7 7"/>')+'</div>'+
    '<div class="atitle"><div class="t">'+title+'</div><div class="s">'+sub+'</div></div></div>';
}`,
  `function aboutHead(title,sub,extra){
  /* \`extra\` renders inside .ahead, after the title block. About, Terms and Privacy pass
     two arguments and are unchanged; the galleries index passes a Share button. */
  return '<div class="ahead"><div class="tb-btn" onclick="navBack()" aria-label="Back">'+
    abIcon('<path d="M15 5l-7 7 7 7"/>')+'</div>'+
    '<div class="atitle"><div class="t">'+title+'</div><div class="s">'+sub+'</div></div>'+
    (extra||'')+'</div>';
}`);

/* 2. the button itself, reusing .g-share from a single gallery's header ---------------- */
sub('Share button in the galleries index header',
  `    aboutHead('Image Galleries', total+' galleries of medical illustrations')+`,
  `    aboutHead('Image Galleries', total+' galleries of medical illustrations',
      '<button class="g-share" onclick="rcShareGalleries()" aria-label="Share the image gallery index">'+
      abIcon('<path d="M12 15V3"/><path d="M8 7l4-4 4 4"/>'+
             '<path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>')+
      '</button>')+`);

/* 3. rcShareGalleries() --------------------------------------------------------------- */
sub('rcShareGalleries()',
  `function rcShareGallery(id){`,
  `/* Share the gallery INDEX. Same rules as the rest: navigator.share must be called
   synchronously from the tap or Safari rejects it, and with no sheet we copy instead.
   The counts are deliberately the unfiltered ones -- the index has a search box, and the
   link does not carry the term, so the recipient sees all of them. */
function rcShareGalleries(){
  var origin=(typeof RC_SHARE_ORIGIN!=='undefined'&&RC_SHARE_ORIGIN)
    ? RC_SHARE_ORIGIN.replace(/\\/+$/,'')+'/'
    : (window.RC_ROOT||(location.origin+'/'));
  var url=origin+'g/';
  var ids=(typeof GALLERIES!=='undefined')
    ? Object.keys(GALLERIES).filter(function(id){ return byId[id]&&REALGAL.has(id); }) : [];
  var pages=ids.reduce(function(t,id){ return t+GALLERIES[id].images.length; },0);
  var text='Image Galleries \\u2014 '+ids.length+' illustrated galler'+(ids.length===1?'y':'ies')+
           (pages?' ('+pages+' pages)':'')+' in Rounds Codex';
  if(navigator.share){
    try{ navigator.share({title:'Image Galleries',text:text,url:url}).catch(function(){}); return; }
    catch(e){ /* some WebViews expose share and then throw */ }
  }
  rcCopyLink(url);
}

function rcShareGallery(id){`);

/* 4. capture bare /g/ at head-script time, before paint() normalises the address bar --- */
sub('capture /g/ as the gallery index',
  ` window.RC_DEEPCALCIDX=/^\\/x\\/?$/.test(location.pathname||'');`,
  ` window.RC_DEEPCALCIDX=/^\\/x\\/?$/.test(location.pathname||'');
 /* and the gallery index itself, bare /g/ -- /g/<id> above is one gallery */
 window.RC_DEEPGALIDX=/^\\/g\\/?$/.test(location.pathname||'');`);

/* 5. router ---------------------------------------------------------------------------- */
sub('openGalleriesIndex()',
  `  function openUpdates(on){`,
  `  function openGalleriesIndex(on){
    if(!on||typeof GALLERIES==='undefined') return false;
    /* seed the library behind it so the Back arrow has somewhere to go */
    root('library'); go('galleries'); window.scrollTo(0,0);
    return true;
  }
  function openUpdates(on){`);

sub('boot() tries the gallery index',
  `    if(openUpdates(window.RC_DEEPUPD)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }`,
  `    if(openUpdates(window.RC_DEEPUPD)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }
    if(openGalleriesIndex(window.RC_DEEPGALIDX)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }`);

/* 6. address bar ------------------------------------------------------------------------ */
sub('rcSyncURL knows the galleries index',
  ` else if(t&&t.v==='clinupd') want=RC_PATH+'u/';`,
  ` else if(t&&t.v==='galleries') want=RC_PATH+'g/';
 else if(t&&t.v==='clinupd') want=RC_PATH+'u/';`);

if (n !== 7) { console.error(`FAILED: applied ${n} of 7 surgeries`); process.exit(1); }

fs.writeFileSync(FILE, s);
console.log(`\nwrote ${FILE} (${before} -> ${s.length} bytes, +${s.length - before})`);
