#!/usr/bin/env node
/*
 * Take audio out of the service worker, and let the browser's HTTP cache have it.
 *
 *     node scripts/fix_audio_caching.js <site-root>
 *
 * WHAT WAS WRONG
 * Keeping chf.mp3 out of sw.js CORE stopped it being PRECACHED AT INSTALL. It did not
 * stop the runtime asset branch, which intercepts every same-origin GET and does
 * `caches.put` on anything that comes back ok. Verified against a real registered
 * worker: after one play, the whole 5.9 MB recording was sitting in Cache Storage as a
 * 200. The design said "nothing cached until you press play"; the code cached
 * everything the moment you did.
 *
 * Three reasons a service worker is the wrong place for media, all of them already
 * scar tissue in this file:
 *
 *   1. `res.clone()` on a 5.9 MB media stream is the same tee that produced
 *      "WebKitBlobResource error 1." on navigations -- one body split into two that
 *      must both be drained, with an iOS tab suspend able to break it mid-stream. The
 *      navigate branch was fixed three times for exactly this; the asset branch still
 *      does it, and audio is the only asset held open for six minutes at a time.
 *   2. Media elements seek with HTTP Range requests. A worker that answers with a
 *      complete 200 takes the range path away: Chromium copes by downloading the whole
 *      file, WebKit often just refuses to scrub.
 *   3. `Cache.put()` rejects with a TypeError if handed a 206. The moment a browser
 *      does send a Range through the worker, that is an unhandled rejection per seek.
 *
 * WHAT REPLACES IT
 * Audio bypasses the worker and goes to the network, where Range works natively and
 * the HTTP cache stores the file for a year under an immutable header. First play
 * streams; every later play is free and survives a reload. Nothing is downloaded until
 * Play is pressed, because the player now sets preload="none" -- the duration comes
 * from RC_AUDIO, so the bar reads 6:06 having fetched nothing at all.
 *
 * The recording is immutable-cached by FILENAME. Re-recording CHF means a new filename
 * (chf-2.mp3), not a new body at the same path, or listeners keep the old one for a year.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: fix_audio_caching.js <site-root>'); process.exit(2); }
const SW = path.join(ROOT, 'sw.js');
const IDX = path.join(ROOT, 'index.html');
const HEADERS = path.join(ROOT, '_headers');
for (const f of [SW, IDX]) if (!fs.existsSync(f)) { console.error('missing: ' + f); process.exit(2); }

/* ── 1. the worker steps aside for media ──────────────────────────────────── */
let sw = fs.readFileSync(SW, 'utf8');
if (sw.includes('MEDIA_RE')) { console.error('FAILED: sw.js already skips media.'); process.exit(2); }

const anchor = `  // Only handle same-origin requests.
  if (url.origin !== location.origin) return;`;
if (sw.split(anchor).length - 1 !== 1) { console.error('FAILED: sw.js same-origin guard not found exactly once'); process.exit(1); }
sw = sw.replace(anchor, `${anchor}

  /* Media never touches this worker. Passing it through means cloning a multi-megabyte
     stream that the page holds open for minutes (the tee behind WebKitBlobResource
     error 1), answering a Range request with a whole-file 200 so seeking degrades or
     dies, and handing Cache.put a 206 it rejects with a TypeError. Returning early
     puts audio back on the native path, where Range works and the HTTP cache -- see
     _headers -- keeps it for a year. */
  if (MEDIA_RE.test(url.pathname) || req.headers.has('range')) return;`);

sw = sw.replace(/self\.addEventListener\('fetch'/,
  `const MEDIA_RE = /\\.(mp3|m4a|ogg|wav|mp4|webm|mov)$/i;

self.addEventListener('fetch'`);
fs.writeFileSync(SW, sw);

/* ── 2. immutable cache header so replays cost nothing ────────────────────── */
const headerBlock = `# Recordings are immutable: a re-record gets a NEW FILENAME rather than a new body at
# the same path. Without that rule this header would pin listeners to the old audio for
# a year. Audio deliberately bypasses the service worker (see sw.js MEDIA_RE), so this
# HTTP cache is the only thing making a replay free.
/assets/audio/*
  Cache-Control: public, max-age=31536000, immutable
`;
let headers = fs.existsSync(HEADERS) ? fs.readFileSync(HEADERS, 'utf8') : '';
if (headers.includes('/assets/audio/*')) { console.error('FAILED: _headers already covers audio.'); process.exit(2); }
fs.writeFileSync(HEADERS, headers ? headers.replace(/\s*$/, '\n\n') + headerBlock : headerBlock);

/* ── 3. fetch nothing until Play ──────────────────────────────────────────── */
let html = fs.readFileSync(IDX, 'utf8');
const oldPre = `    audio.preload = 'metadata';          // never pull 5.9 MB just to draw the bar`;
const newPre = `    /* Nothing at all until Play. The duration is published in RC_AUDIO, so the bar
       already reads 6:06 without a single byte; "metadata" spent a request per page
       view to learn a number we had shipped. */
    audio.preload = 'none';`;
if (html.split(oldPre).length - 1 !== 1) { console.error('FAILED: preload line not found exactly once in index.html'); process.exit(1); }
html = html.replace(oldPre, newPre);
fs.writeFileSync(IDX, html);

console.log('3 edits:');
console.log('  - sw.js: MEDIA_RE + Range guard, both returning before the asset branch');
console.log('  - _headers: /assets/audio/* immutable for a year');
console.log('  - index.html: preload="none"');
