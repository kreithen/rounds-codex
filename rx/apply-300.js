/* apply-300.js — swap the embedded Rx dataset from 200 -> 300 drugs.
 *
 * USAGE:
 *   1. Pull the CURRENT live index.html from the repo (it already contains
 *      200 drugs + the Atrial Fibrillation gallery). Put it next to this file.
 *   2. node apply-300.js  path/to/live/index.html  [out.html]
 *      (defaults: in = ./index.html, out = ./index.300.html)
 *
 * It replaces ONLY the embedded `const RX_DATA=[ ... ]` array with the
 * 300-drug array from rx-drugs-300.min.json. Everything else in the file
 * (logic, CSS, all condition pages, the AFib gallery) is untouched.
 *
 * It does NOT re-run buildRxPatched — that would create a second
 * `const RX_DATA` and throw a SyntaxError. This is the expansion path.
 */
const fs = require('fs');
const inPath  = process.argv[2] || 'index.html';
const outPath = process.argv[3] || 'index.300.html';

const html = fs.readFileSync(inPath, 'utf8');
const data = fs.readFileSync(__dirname + '/rx-drugs-300.min.json', 'utf8').trim();

const START = 'const RX_DATA=[';
const END   = '];\nconst rxById={};';   // the array is followed by this exactly

const i = html.indexOf(START);
if (i < 0) throw new Error('could not find `const RX_DATA=[` in ' + inPath);
const j = html.indexOf(END, i);
if (j < 0) throw new Error('could not find array-end marker `];\\nconst rxById={};`');

const before = html.slice(0, i);
const after  = html.slice(j + 2);           // keep from `\nconst rxById={};`
const out = before + 'const RX_DATA=' + data + ';' + after;

// sanity: exactly one RX_DATA declaration, and it parses
const decls = (out.match(/const RX_DATA=/g) || []).length;
if (decls !== 1) throw new Error('expected 1 RX_DATA declaration, got ' + decls);
const arr = JSON.parse(data);
if (arr.length !== 300) throw new Error('expected 300 drugs, got ' + arr.length);

fs.writeFileSync(outPath, out);
console.log('wrote', outPath, '(' + (fs.statSync(outPath).size / 1024 | 0) + ' KB), drugs:', arr.length);
console.log('Next: upload', outPath, 'as index.html via the browser publish pipeline; Netlify auto-deploys (~1 min).');
