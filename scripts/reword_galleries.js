/* Reword the galleries index header, per Dr. Kreithen.
 *
 *   "Image galleries"                 -> "Image Galleries"
 *   "39 galleries of original artwork" -> "39 galleries of medical illustrations"
 *
 * The count stays derived from the data; only the noun changes.
 *
 * Usage: node scripts/reword_galleries.js <index.html>
 */
'use strict';
const fs = require('fs');

const INDEX = process.argv[2];
if (!INDEX) { console.error('usage: reword_galleries.js <index.html>'); process.exit(2); }

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

replaceOnce(`aboutHead('Image galleries', total+' galleries of original artwork')`,
            `aboutHead('Image Galleries', total+' galleries of medical illustrations')`,
            'galleries index header');

fs.writeFileSync(INDEX, s);
console.log('%d -> %d chars (%s)', n0, s.length,
            (s.length >= n0 ? '+' : '') + (s.length - n0));
