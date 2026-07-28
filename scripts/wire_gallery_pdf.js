/* Make "Download Complete Gallery (PDF)" actually download the gallery PDF.
 *
 * The button shipped as `onclick="toast('Downloads the gallery PDF')"` -- it announced the
 * thing it was not doing. Meanwhile every gallery has a real, correctly built PDF on disk and
 * a `pdf` field in content/galleries.json pointing at it. Nothing was missing but the wiring.
 *
 * `pdf` is root-relative and NOT resolved through `base` (base is a prefix for image files
 * only). Verified against disk: all 44 pdf paths exist as written, and several galleries have
 * a non-empty base that would break them if it were applied. So the anchor gets the raw value
 * and lets <base> handle it, exactly as the images do.
 *
 * Usage: node scripts/wire_gallery_pdf.js <index.html>
 */
'use strict';
const fs = require('fs');

const INDEX = process.argv[2];
if (!INDEX) { console.error('usage: wire_gallery_pdf.js <index.html>'); process.exit(2); }

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
if (s.includes('rcGalleryPDF')) { console.error('FAIL: already patched'); process.exit(1); }

/* The id comes from galHTML's own argument, NOT from the global GID. GID is assigned only by
   openViewer, so on a freshly opened gallery it is still null (or worse, the id of whatever
   gallery was last viewed) and the button would report "no PDF" or hand over the wrong file.
   Caught by the test asserting a download actually arrives. */
s = replaceOnce(s,
  `<button class="pdfbtn" onclick="toast('Downloads the gallery PDF')">`,
  '<button class="pdfbtn" onclick="rcGalleryPDF(\'${id}\')">',
  'button calls rcGalleryPDF with the gallery id');

s = replaceOnce(s, 'function openViewer(id,i){',
  `/* Hand the gallery PDF to the browser.
   A synthetic <a download> rather than location.href: the download attribute gives the file a
   readable name instead of "hepatitis-gallery.pdf", and it does not navigate the app away if
   the browser decides to open the PDF inline (iOS Safari does, which is fine -- the user gets
   the pages either way and Back returns to the gallery). */
function rcGalleryPDF(id){
  var g=GALLERIES[id], d=byId[id];
  if(!g||!g.pdf){ toast('No PDF for this gallery yet'); return; }
  var a=document.createElement('a');
  a.href=g.pdf;                       /* root-relative; <base> resolves it, same as the images */
  a.download='Rounds Codex - '+((d&&d.name)||g.title||id)+' Gallery.pdf';
  a.rel='noopener';
  document.body.appendChild(a); a.click(); a.remove();
  toast('Downloading '+((d&&d.name)||g.title||id)+' gallery');
}

function openViewer(id,i){`,
  'rcGalleryPDF');

fs.writeFileSync(INDEX, s);
console.log(`\n${n0} -> ${s.length} chars (+${s.length - n0})`);
