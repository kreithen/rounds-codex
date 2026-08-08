/* Remove the green share button from a single gallery's header.
 *
 * The physician's call, 2026-08-08, once the PDF button began raising a real file share sheet:
 * two share-looking controls one above the other, doing different things, is worse than one.
 *
 * What this costs, recorded because it is not obvious from the diff: rcShareGallery had exactly
 * one call site -- this button -- so after this there is NO way to produce a /g/<id> link from
 * inside the app. The route itself is untouched and independent, so every link already shared
 * keeps opening, and `rcSyncURL` still puts /g/<id> in the address bar when a gallery is open,
 * which means the link can still be copied from there.
 *
 * Three things deliberately NOT touched:
 *   - The identical-looking button on the gallery INDEX (/g/), which is rcShareGalleries and
 *     shares the index rather than a gallery. Different control, same class.
 *   - The `.g-share` CSS, still used by that index button. Removing the rule would break it.
 *   - rcShareGallery itself, kept so restoring the button is a one-line change, with a comment
 *     saying so -- otherwise it reads as dead code someone will delete and then have to rewrite.
 *
 * Refuses to run twice. Usage: node scripts/remove_gallery_header_share.js <site-root>
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: remove_gallery_header_share.js <site-root>'); process.exit(2); }
const file = path.join(ROOT, 'index.html');
let s = fs.readFileSync(file, 'utf8');
const before = s.length;

const BTN = fs.readFileSync('/tmp/btn.txt', 'utf8');
if (!s.includes(BTN)) {
  if (s.includes('rcShareGallery is intentionally retained')) {
    console.log('already applied — nothing to do');
    process.exit(0);
  }
  console.error('FAIL: the gallery header share button is not where expected');
  process.exit(1);
}

const n = s.split(BTN).length - 1;
if (n !== 1) { console.error(`FAIL: ${n} occurrences of the button, expected 1`); process.exit(1); }
s = s.replace(BTN, '');

// .ghead is display:flex with .gh-mid at flex:1, so the title simply takes the freed space --
// nothing needs re-centring. Asserted rather than assumed:
if (!/\.ghead\{[^}]*display:flex/.test(s) || !/\.gh-mid\{[^}]*flex:1/.test(s)) {
  console.error('FAIL: .ghead/.gh-mid are no longer the flex layout this removal relies on');
  process.exit(1);
}

const FN = 'function rcShareGallery(id){';
if (s.split(FN).length - 1 !== 1) { console.error('FAIL: rcShareGallery not found once'); process.exit(1); }
s = s.replace(FN,
`/* rcShareGallery is intentionally retained with no call site. The gallery header's share button
   was removed on the physician's call once the PDF button raised a real file share sheet; keeping
   this makes restoring it a one-line change instead of a rewrite. /g/<id> links already shared
   still open, and rcSyncURL still shows /g/<id> in the address bar. */
` + FN);

fs.writeFileSync(file, s);
const kept = (s.match(/class="g-share"/g) || []).length;
console.log('removed the single-gallery header share button');
console.log(`  g-share buttons remaining: ${kept} (the gallery index's, deliberately kept)`);
console.log(`  index.html ${before} -> ${s.length} bytes (${s.length - before})`);
