#!/usr/bin/env node
/*
 * Complementary QA for a resident batch — the things the bundled validator does not check.
 *
 *     node scripts/qa_resident_batch.js <batch.js ...> --sec id --list <approved-list.md>
 *
 * The skill's validate.js owns schema, ids, sec, https refs and cross-file collisions;
 * do not re-implement any of that here. What it does NOT know about, and what has gone
 * wrong on this project before:
 *
 *   - US spelling. CLAUDE.md records it as the app's convention and I have drifted into
 *     "haematopoietic"/"gonorrhoea" once already on this very specialty.
 *   - Smart quotes and non-ASCII punctuation that survive into a JS single-quoted string.
 *   - Density. An entry with one bullet per section passes every structural check and is
 *     useless next to the Neurology set.
 *   - Paywalled references. UpToDate/ClinicalKey/PDR are barred; a resident who cannot
 *     open the link has no reference at all.
 *   - Drift from the approved list. Entry names must be the names Dr. Kreithen approved,
 *     not a paraphrase invented at authoring time.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const files = [];
let sec = null, list = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--sec') { sec = args[++i]; continue; }
  if (args[i] === '--list') { list = args[++i]; continue; }
  files.push(args[i]);
}
if (!files.length || !sec) { console.error('usage: qa_resident_batch.js <batch.js...> --sec <sec> [--list <md>]'); process.exit(2); }

function load(f) {
  const src = fs.readFileSync(f, 'utf8');
  const names = [...src.matchAll(/const\s+([A-Za-z0-9_]+)\s*=/g)].map(m => m[1]);
  const fn = new Function(src.replace(/const\s+/g, 'var ') + ';return [' + names.join(',') + '];');
  return fn().filter(Array.isArray).flat();
}

// Spellings that must not appear. Journal names are the documented exception -- see the
// CLAUDE.md note about Thromb Haemost -- so this checks entry prose, not ref titles.
/* Enumerated, not patterned. A first version ended with \w*ise\b and flagged
   "malaise", "otherwise" and "immunocompromise" -- a spell check that cries wolf gets
   switched off, so the -ise family is listed explicitly instead of guessed at. */
const BRITISH = new RegExp('\\b(' + [
  '\\w*haemat\\w*', '\\w*haemo\\w*', 'oedema\\w*', '\\w*oesophag\\w*', 'gonorrhoea\\w*',
  'diarrhoea\\w*', 'anaemi\\w*', 'bacteraemi\\w*', 'septicaemi\\w*', 'ischaemi\\w*',
  'paediatr\\w*', 'traveller\\w*', 'labelling', 'labelled', 'centres', 'fibre\\w*',
  'tumour\\w*', 'oestrogen\\w*', 'foetal', 'anaesthe\\w*', 'orthopaedic\\w*'
].join('|') + '|(?:' + [
  // -ise/-isation verbs need an explicit suffix, not \\w*: "organis\\w*" flags "organism",
  // which is the correct US spelling and appears all over an ID dataset.
  'normalis', 'organis', 'recognis', 'characteris', 'minimis', 'maximis', 'utilis',
  'prioritis', 'stabilis', 'randomis', 'immunis', 'hospitalis', 'catheteris',
  'sensitis', 'localis', 'colonis'
].join('|') + ')(?:e|es|ed|ing|ation|ations)' + ')\\b', 'i');
const BANNED_REF = /uptodate|clinicalkey|pdr\.net|dynamed|medscape|wikipedia/i;
const MIN = { present: 3, dx: 3, tx: 3, pearls: 3 };

let entries = [];
for (const f of files) entries = entries.concat(load(f));

const approved = list
  ? [...fs.readFileSync(list, 'utf8').matchAll(/^\d+\.\s+(.+?)\s*$/gm)].map(m => m[1].trim())
  : null;

const errs = [], warns = [];
for (const e of entries) {
  const prose = [].concat(e.present, e.dx, e.tx, e.pearls).join(' ');
  const b = prose.match(BRITISH);
  if (b) errs.push(`${e.id}: non-US spelling "${b[0]}"`);
  const smart = prose.match(/[‘’“”]/);
  if (smart) errs.push(`${e.id}: smart quote U+${smart[0].codePointAt(0).toString(16).toUpperCase()}`);
  for (const [k, n] of Object.entries(MIN))
    if ((e[k] || []).length < n) errs.push(`${e.id}: ${k} has ${(e[k] || []).length} bullets, minimum ${n}`);
  if ((e.refs || []).length < 2) errs.push(`${e.id}: ${(e.refs || []).length} refs, minimum 2`);
  for (const r of e.refs || []) if (BANNED_REF.test(r.u)) errs.push(`${e.id}: paywalled/unciteable ref ${r.u}`);
  // A bullet that is a fragment is usually a truncation, and reads as one on the page.
  for (const k of ['present', 'dx', 'tx', 'pearls'])
    for (const s of e[k] || []) if (s.length < 25) warns.push(`${e.id}: very short ${k} bullet "${s}"`);
  if (approved && !approved.some(a => a.replace(/\s*[-—]\s*/g, ' ').toLowerCase()
        === e.name.replace(/\s*[-—]\s*/g, ' ').toLowerCase()))
    errs.push(`${e.id}: name "${e.name}" is not on the approved list`);
}

const counts = entries.map(e => ({
  id: e.id, p: e.present.length, d: e.dx.length, t: e.tx.length, pe: e.pearls.length, r: e.refs.length
}));
console.log(`${entries.length} entries, sec=${sec}\n`);
console.log('id'.padEnd(42) + 'present  dx  tx  pearls  refs');
for (const c of counts)
  console.log(c.id.padEnd(42) + String(c.p).padStart(5) + String(c.d).padStart(5) +
              String(c.t).padStart(4) + String(c.pe).padStart(7) + String(c.r).padStart(6));

if (warns.length) { console.log('\nwarnings:'); warns.forEach(w => console.log('  ' + w)); }
if (errs.length) { console.log('\nFAILURES:'); errs.forEach(e => console.log('  ' + e)); process.exit(1); }
console.log(`\nQA PASSED — 0 errors, ${warns.length} warning(s)`);
