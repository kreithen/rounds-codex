/* Wire the gallery viewer's download button, and give the gallery PDF the same iOS
 * accommodation the condition-page PDF export already uses.
 *
 * Two separate defects, reported together from an iPhone (2026-08-08):
 *
 *  1. The viewer overlay's top-right download button was `onclick="toast('Downloads the gallery
 *     PDF')"` -- a placeholder that toasts a DESCRIPTION of what it would do. The toast was the
 *     whole behaviour, so it read as "the download is broken" when in fact the control had never
 *     been connected. rcGalleryPDF() has existed and worked the whole time, wired to the button
 *     on the gallery page below the grid.
 *
 *  2. rcGalleryPDF() opened the PDF with a bare `<a download>`. On iOS, Safari frequently ignores
 *     the download attribute and NAVIGATES to the file instead -- and without target=_blank that
 *     navigation happens in the app's own tab. The condition-page export already carries a long
 *     comment about exactly this, because it is the setup for the "WebKitBlobResource error 1."
 *     failure this codebase has fought four times. A throwaway tab is also where iOS surfaces the
 *     PDF's share sheet, which is what the physician expected to see. So merely wiring the button
 *     would have fixed "nothing happens" and still not produced the share sheet.
 *
 * Refuses to run twice, and asserts each surgery, so a partial application cannot pass silently.
 *
 * Usage: node scripts/fix_gallery_pdf_button.js <site-root>
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: fix_gallery_pdf_button.js <site-root>'); process.exit(2); }
const file = path.join(ROOT, 'index.html');
let s = fs.readFileSync(file, 'utf8');
const before = s.length;

const surgeries = [];
const cut = (name, was, now) => {
  const n = s.split(was).length - 1;
  if (n !== 1) {
    console.error(`FAIL ${name}: found ${n} occurrences, expected exactly 1`);
    process.exit(1);
  }
  s = s.replace(was, now);
  surgeries.push(name);
};

// Already applied? Say so and stop, rather than half-matching.
if (s.includes("onclick=\"rcGalleryPDF(GID)\"")) {
  console.log('already applied — the viewer button is wired; nothing to do');
  process.exit(0);
}

/* 1. Wire the viewer's download button. GID is safe here in a way it is NOT in galHTML: openViewer
 *    assigns GID=id as its first statement, so inside the overlay it is always the open gallery.
 *    The known trap is the reverse case -- reading GID from galHTML, which renders before any page
 *    has been opened and where GID is still null. */
cut('viewer download button -> rcGalleryPDF(GID)',
  `onclick="toast('Downloads the gallery PDF')"`,
  `onclick="rcGalleryPDF(GID)"`);

/* 2. The iOS accommodation, applied inside rcGalleryPDF so BOTH call sites get it -- the viewer
 *    button added above and the gallery-page button that has been shipping without it. */
cut('rcGalleryPDF opens a throwaway tab',
  `  a.href=g.pdf;                       /* root-relative; <base> resolves it, same as the images */
  a.download='Rounds Codex - '+((d&&d.name)||g.title||id)+' Gallery.pdf';
  a.rel='noopener';`,
  `  a.href=g.pdf;                       /* root-relative; <base> resolves it, same as the images */
  a.download='Rounds Codex - '+((d&&d.name)||g.title||id)+' Gallery.pdf';
  /* target=_blank matters on iOS, for the same reason the condition-page PDF export sets it:
     Safari often ignores the download attribute and NAVIGATES to the file instead, and without
     this that navigation happens in the app's own tab. A throwaway tab is also where iOS shows
     the PDF together with its share sheet, which is what a reader tapping this expects. Browsers
     that honour the download attribute ignore target entirely, so nothing changes for them. */
  a.target='_blank';a.rel='noopener';`);

fs.writeFileSync(file, s);
console.log(`${surgeries.length} surgeries applied:`);
surgeries.forEach(x => console.log('  - ' + x));
console.log(`index.html ${before} -> ${s.length} bytes (+${s.length - before})`);
