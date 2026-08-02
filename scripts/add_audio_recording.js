#!/usr/bin/env node
/*
 * Add a narrated recording to a condition.
 *
 *     node scripts/add_audio_recording.js <site-root> <condition-id> <title> <source.mp3>
 *     node scripts/add_audio_recording.js <site-root> --list
 *
 * Copies the file to assets/audio/<id>.mp3, reads its real duration off the frame
 * headers, and inserts the RC_AUDIO entry in DATA order.
 *
 * WHY THE DURATION IS MEASURED AND NOT ASSUMED
 * The player publishes it so the bar reads 4:45 before a single byte is fetched, and
 * the scrubber maps position onto it until the decoded metadata arrives. A wrong
 * number does not error -- it just scrubs to the wrong place for the whole recording.
 * bytes*8/bitrate is only right for CBR, so this walks every frame. The walker was
 * validated against the shipped chf.mp3, whose published length is known: it returns
 * 366.628571 against a published 366.628563, i.e. correct to 8 microseconds.
 *
 * WHY IT REFUSES TO OVERWRITE
 * _headers serves /assets/audio/* with `immutable, max-age=31536000`. A listener who
 * already has the old recording cached would never see a replacement at the same URL.
 * Re-recording therefore needs a NEW filename, and this makes that a hard error rather
 * than a thing to remember. Pass --replace only if you also bump the filename.
 *
 * The mp3 is deliberately NOT added to sw.js CORE -- see fix_audio_caching.js. CORE is
 * precached on install, so a recording there costs every visitor the download before
 * the app is usable offline.
 */
'use strict';
const fs = require('fs');
const path = require('path');

/* ---- MP3 frame walk ------------------------------------------------------------ */
const BITRATES = {
  '3,1': [0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,0],   // MPEG1 Layer III
  '2,1': [0,8,16,24,32,40,48,56,64,80,96,112,128,144,160,0],       // MPEG2 Layer III
};
const RATES = { 3: [44100,48000,32000,0], 2: [22050,24000,16000,0], 0: [11025,12000,8000,0] };
const SPF   = { 3: 1152, 2: 576, 0: 576 };

function probe(buf) {
  let pos = 0;
  if (buf.slice(0, 3).toString('latin1') === 'ID3')
    pos = 10 + ((buf[6] << 21) | (buf[7] << 14) | (buf[8] << 7) | buf[9]);
  let dur = 0, frames = 0, rate = 0;
  const brs = new Set();
  while (pos + 4 <= buf.length) {
    if (buf[pos] !== 0xFF || (buf[pos + 1] & 0xE0) !== 0xE0) { pos++; continue; }
    const ver = (buf[pos + 1] >> 3) & 3, layer = (buf[pos + 1] >> 1) & 3;
    const bi = (buf[pos + 2] >> 4) & 0xF, ri = (buf[pos + 2] >> 2) & 3, pad = (buf[pos + 2] >> 1) & 1;
    const table = BITRATES[ver + ',' + layer];
    if (ver === 1 || layer !== 1 || !table || bi === 0 || bi === 15 || ri === 3) { pos++; continue; }
    const br = table[bi] * 1000, sr = RATES[ver][ri];
    if (!br || !sr) { pos++; continue; }
    const n = Math.floor(SPF[ver] / 8 * br / sr) + pad;
    if (n <= 4) { pos++; continue; }
    brs.add(br / 1000); rate = sr; dur += SPF[ver] / sr; frames++; pos += n;
  }
  return { seconds: dur, frames, rate, bitrates: [...brs].sort((a, b) => a - b) };
}

function mmss(s) { return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0'); }

/* ---- args ---------------------------------------------------------------------- */
const [ROOT, ID, TITLE, SRC] = process.argv.slice(2);
const LIST = process.argv.includes('--list');
const REPLACE = process.argv.includes('--replace');
if (!ROOT) { console.error('usage: add_audio_recording.js <site-root> <id> <title> <source.mp3> | <site-root> --list'); process.exit(2); }

const IDX = path.join(ROOT, 'index.html');
const CONDS = path.join(ROOT, 'content', 'conditions.json');
for (const f of [IDX, CONDS]) if (!fs.existsSync(f)) { console.error('missing: ' + f); process.exit(2); }

let html = fs.readFileSync(IDX, 'utf8');
const DATA = JSON.parse(fs.readFileSync(CONDS, 'utf8'));
if (!Array.isArray(DATA)) { console.error('conditions.json is not an array'); process.exit(1); }

/* ---- read the current registry -------------------------------------------------- */
const OPEN = 'var RC_AUDIO = {';
const a = html.indexOf(OPEN);
if (a < 0) { console.error('FAILED: no RC_AUDIO in index.html — run add_condition_audio.js first'); process.exit(2); }
const b = html.indexOf('\n};', a);
if (b < 0) { console.error('FAILED: could not find the end of the RC_AUDIO literal'); process.exit(1); }
const body = html.slice(a + OPEN.length, b);
/* The literal is machine-written, one entry per line, so a line regex is enough and
   avoids eval'ing a slice of the shipped bundle. Anything that does not match is a
   hand-edit, and this stops rather than silently dropping it. */
const LINE = /^\s*"([\w-]+)":\s*\{\s*src:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*duration:\s*([\d.]+)\s*\},?\s*$/;
const entries = new Map();
for (const line of body.split('\n')) {
  if (!line.trim()) continue;
  const m = LINE.exec(line);
  if (!m) { console.error('FAILED: unrecognised RC_AUDIO line, refusing to rewrite:\n  ' + line); process.exit(1); }
  entries.set(m[1], { src: m[2], title: m[3], duration: parseFloat(m[4]) });
}

const order = DATA.map(d => d.id);
const byId = new Map(DATA.map(d => [d.id, d]));
function report() {
  const have = order.filter(id => entries.has(id));
  console.log(`${entries.size} recording(s), in DATA order:`);
  have.forEach((id, i) => {
    const e = entries.get(id), cat = byId.get(id).category;
    const nextInCat = have.slice(i + 1).find(x => byId.get(x).category === cat);
    const nextAny = have[i + 1];
    console.log(`  ${id.padEnd(10)} ${mmss(e.duration).padStart(5)}  ${cat.padEnd(14)} ${e.title}`);
    console.log(`             forward -> ${nextInCat || '(disabled: last in module)'}   chain -> ${nextAny || '(end)'}`);
  });
}

if (LIST) { report(); process.exit(0); }

if (!ID || !TITLE || !SRC) { console.error('usage: add_audio_recording.js <site-root> <id> <title> <source.mp3>'); process.exit(2); }
if (!byId.has(ID)) { console.error(`FAILED: "${ID}" is not a condition id. Nothing would link to the recording.`); process.exit(1); }
if (entries.has(ID) && !REPLACE) {
  console.error(`FAILED: "${ID}" already has a recording (${entries.get(ID).src}).`);
  console.error('  /assets/audio/* is served immutable for a year, so a listener with the old');
  console.error('  file cached would never get a replacement at the same URL. Use a new filename.');
  process.exit(1);
}
if (!fs.existsSync(SRC)) { console.error('missing source: ' + SRC); process.exit(2); }

/* ---- probe and copy ------------------------------------------------------------- */
const buf = fs.readFileSync(SRC);
const p = probe(buf);
if (!p.frames || !(p.seconds > 1)) { console.error(`FAILED: ${SRC} decoded to ${p.frames} frames / ${p.seconds}s — not a usable MP3`); process.exit(1); }

/* A replacement must land on a NEW PATH. /assets/audio/* is served immutable for a
   year, so writing new bytes to the old URL pins every listener who already has the
   file cached to the old recording -- which is the exact failure the guard above
   exists to prevent. --replace used to overwrite in place, which bypassed the guard
   without solving the problem it guards against. It now mints <id>-2.mp3, -3 and so
   on, and the old file is left on disk so an in-flight listener is not 404'd
   mid-playback. */
function nextFreePath() {
  let rel = 'assets/audio/' + ID + '.mp3';
  if (!fs.existsSync(path.join(ROOT, rel))) return rel;
  for (let n = 2; n < 100; n++) {
    rel = 'assets/audio/' + ID + '-' + n + '.mp3';
    if (!fs.existsSync(path.join(ROOT, rel))) return rel;
  }
  console.error('FAILED: could not find a free filename for ' + ID); process.exit(1);
}
if (fs.existsSync(path.join(ROOT, 'assets/audio/' + ID + '.mp3')) && !REPLACE) {
  console.error('FAILED: assets/audio/' + ID + '.mp3 already exists'); process.exit(1);
}
const destRel = nextFreePath();
const dest = path.join(ROOT, destRel);
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, buf);

entries.set(ID, { src: destRel, title: TITLE, duration: p.seconds });

/* ---- rewrite the literal, in DATA order ----------------------------------------- */
const ordered = order.filter(id => entries.has(id));
const stray = [...entries.keys()].filter(id => !byId.has(id));
if (stray.length) { console.error('FAILED: RC_AUDIO holds ids that are not conditions: ' + stray.join(', ')); process.exit(1); }
const lines = ordered.map(id => {
  const e = entries.get(id);
  return `  "${id}": { src: "${e.src}", title: "${e.title}", duration: ${e.duration} }`;
});
html = html.slice(0, a + OPEN.length) + '\n' + lines.join(',\n') + html.slice(b);
fs.writeFileSync(IDX, html);

console.log(`${path.basename(SRC)}  ->  ${destRel}`);
console.log(`  duration  ${p.seconds.toFixed(6)}s (${mmss(p.seconds)})   ${p.frames} frames @ ${p.rate}Hz` +
            `   ${p.bitrates.length === 1 ? 'CBR ' + p.bitrates[0] : 'VBR ' + p.bitrates.join('/')} kbps`);
console.log(`  ${(buf.length / 1048576).toFixed(2)} MB\n`);
report();
console.log('\nthe mp3 is NOT in sw.js CORE, on purpose — see fix_audio_caching.js');
