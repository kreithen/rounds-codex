#!/usr/bin/env node
/*
 * Declare a favicon, so the browser stops probing /favicon.ico.
 *
 *     node scripts/add_favicon_link.js <site-root> [--check]
 *
 * index.html declares `apple-touch-icon` and the manifest icons, but no `rel="icon"`.
 * With none declared, every browser falls back to requesting /favicon.ico from the site
 * root, which does not exist -- so every page load logged a 404. Harmless in itself, but
 * a permanent 404 in the console is exactly the kind of noise that trains you to ignore
 * the console, and the headless audits had to special-case it to stay meaningful.
 *
 * Points at icons/icon-192.png, which is ALREADY on disk and ALREADY in sw.js CORE, so
 * this adds no asset, no request, and no offline bookkeeping. A dedicated favicon.ico
 * would need all three.
 *
 * The href is relative on purpose. The app writes a <base> tag from RC_ROOT so the same
 * index.html works at the site root, under a /c/<id> share link and inside a native
 * bundle; a root-relative "/icons/..." would break the last of those. This matches how
 * apple-touch-icon and the manifest icons are already declared.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: add_favicon_link.js <site-root> [--check]'); process.exit(2); }
const IDX = path.join(ROOT, 'index.html');
if (!fs.existsSync(IDX)) { console.error('missing: ' + IDX); process.exit(2); }

let html = fs.readFileSync(IDX, 'utf8');

if (/<link[^>]+rel=["']?(shortcut )?icon/i.test(html)) {
  console.error('FAILED: a favicon link is already declared.');
  process.exit(2);
}

/* The target must exist and must already be precached, or this trades a 404 in the
   console for a 404 on the icon -- and offline for a missing tab icon. */
const ICON = 'icons/icon-192.png';
if (!fs.existsSync(path.join(ROOT, ICON))) { console.error('FAILED: missing ' + ICON); process.exit(1); }
const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
if (!sw.includes(ICON)) { console.error(`FAILED: ${ICON} is not in sw.js CORE — it would 404 offline`); process.exit(1); }

const anchor = '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">';
const n = html.split(anchor).length - 1;
if (n !== 1) { console.error(`FAILED: found ${n} apple-touch-icon links, expected 1`); process.exit(1); }

html = html.replace(anchor,
  '<link rel="icon" type="image/png" sizes="192x192" href="' + ICON + '">' + anchor);

console.log(`declared <link rel="icon"> -> ${ICON} (already on disk, already in sw.js CORE)`);
if (CHECK) { console.log('\n--check: nothing written'); process.exit(0); }
fs.writeFileSync(IDX, html);
console.log(`wrote ${path.relative(process.cwd(), IDX)}`);
