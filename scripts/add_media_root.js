#!/usr/bin/env node
/* One resolver between the app and its heavy media, so the native build can put that media in an
 * asset pack outside the WebView's origin.
 *
 * Task #27. See native/background-assets-plan.md §4. THE WEB BUILD MUST NOT CHANGE: RC_MEDIA_ROOT
 * is unset there, rcMedia() is the identity function, and every URL the app builds is the same
 * string it was before. That is asserted by a side-by-side of resolved URLs, not by reading the
 * diff -- the strongest check available for a mechanical change, and the one that proved the
 * content split.
 *
 * Three globals, three different questions, and they are easy to confuse:
 *
 *   RC_ROOT          where the app's own files load from
 *   RC_SHARE_ORIGIN  where a link handed to someone else points
 *   RC_MEDIA_ROOT    where gallery pages, gallery PDFs and narrated audio live
 *
 * WHAT IS ROUTED, AND THE ONE THING THAT IS NOT. Gallery page images, gallery PDFs and audio go
 * through rcMedia(). Thumbnails deliberately do not: they ship inside the app because the galleries
 * index renders 340 of them at once and is how a reader decides what is worth downloading. Route
 * the thumbnails and a reader without the pack gets an index of grey rectangles -- the browse
 * surface breaks in exactly the situation the packs exist to handle. gframe() draws both from one
 * expression, so this is a real trap and not a hypothetical one.
 *
 * THE FALLBACK IS THE POINT, not a nicety. A pack may still be downloading, or absent entirely on
 * an OS that cannot get one. gimgerr() already existed as a one-shot retry for a wrong relative
 * path; it becomes two-stage, and the second stage resolves against RC_SHARE_ORIGIN so a reader who
 * opens a gallery mid-download sees artwork over the network instead of a broken image. It cannot
 * fire on the web, because RC_MEDIA_ROOT is empty there.
 *
 * Verify with: node scripts/verify_media_root.js <root>
 *
 * Usage: node scripts/add_media_root.js <site-root> [--apply]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!ROOT) { console.error('usage: add_media_root.js <site-root> [--apply]'); process.exit(2); }

const file = path.join(ROOT, 'index.html');
let s = fs.readFileSync(file, 'utf8');
const before = s.length;
const beforeBases = (s.match(/<base /g) || []).length;

if (s.includes('function rcMedia(')) {
  console.error('FAIL: rcMedia() is already present -- run against a fresh tree');
  process.exit(1);
}

const log = [];
function sub(name, needle, replacement) {
  const n = s.split(needle).length - 1;
  if (n !== 1) {
    console.error(`FAIL: ${name}: expected exactly 1 occurrence of ${JSON.stringify(needle.slice(0, 80))}, found ${n}`);
    process.exit(1);
  }
  s = s.replace(needle, replacement);
  log.push(`  ${name}`);
}

/* ---- 1. the resolver, declared beside RC_SHARE_ORIGIN because it answers the sibling question -- */
const ANCHOR = "var RC_SHARE_ORIGIN";
{
  const at = s.indexOf(ANCHOR);
  if (at < 0) { console.error('FAIL: RC_SHARE_ORIGIN declaration not found'); process.exit(1); }
  const DECL = [
    "/* Where the heavy media lives, as distinct from RC_ROOT (where the app's own files load from)",
    "   and RC_SHARE_ORIGIN (where a link handed to someone else points). Unset on the web, where",
    "   rcMedia() is the identity function and every URL is the string it always was. The native",
    "   shell sets it to a URL that maps onto the downloaded asset pack: pack files live outside the",
    "   WebView's origin and a page served from Capacitor's scheme cannot read them from file://.",
    "   Gallery THUMBNAILS are deliberately not routed through it -- they ship inside the app,",
    "   because the galleries index draws 340 at once and is how a reader chooses what to download. */",
    "var RC_MEDIA_ROOT=(typeof window!=='undefined'&&window.RC_MEDIA_ROOT)||'';",
    "function rcMedia(p){",
    "  if(!p||!RC_MEDIA_ROOT) return p;",
    "  if(/^([a-z][a-z0-9+.-]*:|\\/\\/)/i.test(p)) return p;      /* already absolute -- leave it */",
    "  return RC_MEDIA_ROOT.replace(/\\/+$/,'')+'/'+String(p).replace(/^\\.?\\//,'');",
    "}",
    "/* The pack may not have arrived yet, or may never arrive on an OS that cannot get one. Resolving",
    "   against the public origin means a reader who opens a gallery mid-download sees the artwork over",
    "   the network rather than a broken image. Unreachable on the web: nothing calls it unless",
    "   RC_MEDIA_ROOT is set. */",
    "function rcMediaFallback(p){",
    "  if(!p) return p;",
    "  if(/^([a-z][a-z0-9+.-]*:|\\/\\/)/i.test(p)) return p;",
    "  return String(RC_SHARE_ORIGIN||'').replace(/\\/+$/,'')+'/'+String(p).replace(/^\\.?\\//,'');",
    "}",
    "",
  ].join('\n');
  s = s.slice(0, at) + DECL + s.slice(at);
  log.push('  rcMedia() + rcMediaFallback() declared beside RC_SHARE_ORIGIN');
}

/* ---- 2. gallery page images (NOT thumbs) ------------------------------------------------------
 * gframe() builds both from one ternary. Splitting it is the whole point: the thumb branch keeps
 * the plain relative path, the full-page branch goes through rcMedia(). data-rc-src carries the
 * original web-relative path so the fallback has something to resolve -- gimgerr's existing `file`
 * argument is the un-based filename and is not enough on a gallery whose base is non-empty. */
sub('gframe: route the full page, keep the thumb local',
  "const src=g.base+(mini?ims[i].thumb:ims[i].file);return `<img class=\"realpg\" src=\"${src}\" onerror=\"gimgerr(this,'${id}','${mini?ims[i].thumb:ims[i].file}')\"",
  "const orig=g.base+(mini?ims[i].thumb:ims[i].file);const src=mini?orig:rcMedia(orig);" +
  "return `<img class=\"realpg\" src=\"${src}\" data-rc-src=\"${orig}\" onerror=\"gimgerr(this,'${id}','${mini?ims[i].thumb:ims[i].file}')\"");

/* ---- 3. the two-stage fallback ---------------------------------------------------------------
 * Stage 1 is the existing behaviour, byte for byte, and still the only stage that can run on the
 * web. Stage 2 exists only when RC_MEDIA_ROOT is set. */
sub('gimgerr: second stage via the public origin',
  "function gimgerr(img,id,file){if(img.dataset.gfb)return;img.dataset.gfb='1';img.src=(img.getAttribute('src')||'').indexOf('/')<0 ? id+'/'+file : file;}",
  "function gimgerr(img,id,file){\n" +
  "  var n=+(img.dataset.gfb||0);\n" +
  "  if(n===0){img.dataset.gfb='1';img.src=(img.getAttribute('src')||'').indexOf('/')<0 ? id+'/'+file : file;return;}\n" +
  "  /* Only reachable in the native build: on the web RC_MEDIA_ROOT is '' and stage 1 is the end. */\n" +
  "  if(n===1&&RC_MEDIA_ROOT){img.dataset.gfb='2';img.src=rcMediaFallback(img.getAttribute('data-rc-src')||file);}\n" +
  "}");

/* ---- 4. the gallery PDF, all three entry points ---------------------------------------------- */
sub('rcGalleryPDFWarm: fetch through the resolver',
  "RCPDF_WARM={id:id,p:fetch(g.pdf).then(function(r){",
  "RCPDF_WARM={id:id,p:fetch(rcMedia(g.pdf)).then(function(r){");
sub('rcGalleryPDFTab: href through the resolver',
  "  a.href=g.pdf;                       /* root-relative; <base> resolves it, same as the images */",
  "  a.href=rcMedia(g.pdf);              /* root-relative; <base> resolves it, same as the images */");

/* ---- 5. narrated audio ------------------------------------------------------------------------
 * One line, and it is the only place a src reaches the single shared Audio element. */
sub('audio: src through the resolver',
  "    a.src = rec.src;",
  "    a.src = rcMedia(rec.src);");

/* ---- assertions ------------------------------------------------------------------------------ */
const checks = [
  ['resolver declared',              /function rcMedia\(p\)\{/.test(s)],
  ['fallback declared',              /function rcMediaFallback\(p\)\{/.test(s)],
  ['default is empty (web unchanged)', /var RC_MEDIA_ROOT=\(typeof window!=='undefined'&&window\.RC_MEDIA_ROOT\)\|\|'';/.test(s)],
  ['thumbnails NOT routed',          /const src=mini\?orig:rcMedia\(orig\);/.test(s)],
  ['galleries index thumb untouched', /'<img loading="lazy" decoding="async" src="'\+g\.base\+im\.thumb\+'"/.test(s)],
  ['pdf warm routed',                /fetch\(rcMedia\(g\.pdf\)\)/.test(s)],
  ['pdf tab routed',                 /a\.href=rcMedia\(g\.pdf\);/.test(s)],
  ['audio routed',                   /a\.src = rcMedia\(rec\.src\);/.test(s)],
  ['gimgerr keeps stage 1',          /if\(n===0\)\{img\.dataset\.gfb='1';/.test(s)],
  ['gimgerr stage 2 is gated',       /if\(n===1&&RC_MEDIA_ROOT\)/.test(s)],
  /* Counted from the string read at the top, not re-read from disk: the on-disk file is still
     unpatched during a dry run, so a re-read compares the result against itself and passes for the
     wrong reason -- and would compare against the PATCHED file on any later run. */
  ['no <base> added',                (s.match(/<base /g) || []).length === beforeBases],
];
let bad = 0;
console.log('');
for (const [name, ok] of checks) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}`); if (!ok) bad++; }
if (bad) { console.error(`\n${bad} assertion(s) failed -- not writing`); process.exit(1); }

{
  const blocks = [...s.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  let n = 0;
  for (const code of blocks) {
    if (!code.trim()) continue;
    try { new Function(code); n++; } catch (e) {
      console.error(`FAIL: an inline <script> no longer parses: ${e.message}`); process.exit(1);
    }
  }
  console.log(`  ok   all ${n} inline <script> blocks parse`);
}

console.log('\nsurgeries:');
log.forEach(l => console.log(l));
console.log(`\nindex.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
if (APPLY) { fs.writeFileSync(file, s); console.log('written'); }
else { console.log('dry run -- pass --apply to write'); }
