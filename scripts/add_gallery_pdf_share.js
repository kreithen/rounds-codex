/* Make the gallery PDF button raise a FILE share sheet, so iOS offers "Save to Files".
 *
 * Reported 2026-08-08: the share sheet had no way to save the PDF to the phone. It could not
 * have: that sheet came from the header's share button, which is rcShareGallery -> a LINK share
 * (navigator.share({title,text,url})). iOS only offers Save to Files, and only attaches a
 * document to AirDrop/Messages/Mail, when the payload contains an actual File. A link share has
 * no file in it, so no amount of tapping produces the row.
 *
 * So the PDF button now shares the PDF as a File. Three things this has to get right:
 *
 *  - **Activation.** navigator.share must be reached while the tap still counts as user
 *    activation, and awaiting a 2-5 MB fetch inside that window is exactly what puts it at
 *    risk. The fetch is therefore started on POINTERDOWN, so the bytes are usually already in
 *    flight -- often already arrived -- by the time the click handler runs.
 *
 *  - **A dismissed sheet is not a failure.** navigator.share rejects with AbortError when the
 *    user swipes the sheet away. Falling back on that would hand them a download they had just
 *    declined, so AbortError returns silently and everything else falls back.
 *
 *  - **The fallback must be the behaviour that already works** -- the v72 new tab, which the
 *    physician confirmed on an iPhone. A browser with no file-share support (every desktop
 *    browser, older Safari) never enters the new path at all: the capability is feature-detected
 *    synchronously with a one-byte stand-in File, before anything is fetched.
 *
 * The header's link share is deliberately left alone. It exists so a colleague can be sent a
 * link that opens the gallery; attaching several megabytes to that would change what it means.
 *
 * Refuses to run twice. Usage: node scripts/add_gallery_pdf_share.js <site-root>
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: add_gallery_pdf_share.js <site-root>'); process.exit(2); }
const file = path.join(ROOT, 'index.html');
let s = fs.readFileSync(file, 'utf8');
const before = s.length;

if (s.includes('function rcGalleryPDFWarm(')) {
  console.log('already applied — nothing to do');
  process.exit(0);
}

const done = [];
const cut = (name, was, now) => {
  const n = s.split(was).length - 1;
  if (n !== 1) { console.error(`FAIL ${name}: ${n} occurrences, expected 1`); process.exit(1); }
  s = s.replace(was, now);
  done.push(name);
};

/* ---- 1. the handler ------------------------------------------------------------------ */

const OLD = `function rcGalleryPDF(id){
  var g=GALLERIES[id], d=byId[id];
  if(!g||!g.pdf){ toast('No PDF for this gallery yet'); return; }
  var a=document.createElement('a');`;

const NEW = `/* Started on pointerdown, not on click. navigator.share has to be reached while the tap still
   counts as user activation, and awaiting a multi-megabyte fetch inside that window is what puts
   it at risk -- so the bytes are already in flight, usually already arrived, by the time the
   click handler asks for them. Only ever fires when a finger is actually on the button, so it
   costs nothing on a gallery the reader only browses. */
var RCPDF_WARM=null;
function rcGalleryPDFWarm(id){
  var g=GALLERIES[id];
  if(!g||!g.pdf) return;
  if(RCPDF_WARM&&RCPDF_WARM.id===id) return;       /* reuse, so a second press does not refetch */
  RCPDF_WARM={id:id,p:fetch(g.pdf).then(function(r){
    if(!r.ok) throw new Error('http '+r.status);
    return r.blob();
  })};
  RCPDF_WARM.p.catch(function(){});                /* the click path reports; never unhandled */
}

/* The new tab -- v72's behaviour, confirmed working on an iPhone. This stays the fallback for
   every browser that cannot share a file, and for any failure of the share path. */
function rcGalleryPDFTab(id){
  var g=GALLERIES[id], d=byId[id];
  if(!g||!g.pdf){ toast('No PDF for this gallery yet'); return; }
  var a=document.createElement('a');`;

cut('split the tab-opening path into rcGalleryPDFTab, add the pointerdown warm-up', OLD, NEW);

const OLD_TAIL = `  document.body.appendChild(a); a.click(); a.remove();
  toast('Downloading '+((d&&d.name)||g.title||id)+' gallery');
}`;

const NEW_TAIL = `  document.body.appendChild(a); a.click(); a.remove();
  toast('Downloading '+((d&&d.name)||g.title||id)+' gallery');
}

function rcGalleryPDF(id){
  var g=GALLERIES[id], d=byId[id];
  if(!g||!g.pdf){ toast('No PDF for this gallery yet'); return; }
  var name=(d&&d.name)||g.title||id;
  var fname='Rounds Codex - '+name+' Gallery.pdf';

  /* Feature-detect with a one-byte stand-in: canShare is synchronous, so this costs nothing and
     happens before any fetch. A browser that cannot share a file goes straight to the tab. */
  var canFile=false;
  try{
    canFile=!!(navigator.canShare&&window.File&&navigator.canShare(
      {files:[new File([new Uint8Array(1)],fname,{type:'application/pdf'})]}));
  }catch(e){}
  if(!canFile){ rcGalleryPDFTab(id); return; }

  var warm=(RCPDF_WARM&&RCPDF_WARM.id===id)?RCPDF_WARM.p:null;
  if(!warm){ rcGalleryPDFWarm(id); warm=RCPDF_WARM.p; }
  toast('Preparing <b>'+name+'</b> PDF');

  warm.then(function(b){
    return navigator.share({files:[new File([b],fname,{type:'application/pdf'})],title:name});
  }).catch(function(err){
    /* A swiped-away sheet is a decision, not a failure. Falling back here would hand the reader
       a download they had just declined. */
    if(err&&err.name==='AbortError') return;
    /* Everything else -- activation lost, offline, a share the platform refused -- goes to the
       path that already works. */
    rcGalleryPDFTab(id);
  });
}`;

cut('add the file-share rcGalleryPDF in front of it', OLD_TAIL, NEW_TAIL);

/* ---- 2. both call sites get the pointerdown warm-up --------------------------------- */

cut('gallery page button warms on pointerdown',
  `<button class="pdfbtn" onclick="rcGalleryPDF('\${id}')">`,
  `<button class="pdfbtn" onpointerdown="rcGalleryPDFWarm('\${id}')" onclick="rcGalleryPDF('\${id}')">`);

cut('viewer button warms on pointerdown',
  `onclick="rcGalleryPDF(GID)"`,
  `onpointerdown="rcGalleryPDFWarm(GID)" onclick="rcGalleryPDF(GID)"`);

fs.writeFileSync(file, s);
console.log(`${done.length} surgeries applied:`);
done.forEach(x => console.log('  - ' + x));
console.log(`index.html ${before} -> ${s.length} bytes (+${s.length - before})`);
