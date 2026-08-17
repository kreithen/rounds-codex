#!/usr/bin/env node
/* fix_root_authority.js <site-root>
 *
 * RC_ROOT is computed by stripping the last path segment off location.href:
 *
 *     h.replace(/[^\/]*$/,'')
 *
 * That is correct for every URL the WEBSITE is ever served at, because a website URL always
 * has a path -- "https://roundscodex.com/" at worst. It is WRONG for a URL with an authority
 * and no path at all, because then the "last segment" IS THE HOST:
 *
 *     capacitor://localhost   ->   capacitor://          <- host eaten
 *
 * Capacitor's WKWebView loads the page at exactly that URL, with no trailing slash. So
 * <base> became "capacitor://", every relative fetch resolved to "capacitor:///content/..."
 * -- a DIFFERENT ORIGIN from "capacitor://localhost" -- and WebKit blocked all eight content
 * files as cross-origin. The app booted, painted its shell, and showed "Content didn't load".
 *
 * Measured in the simulator, iOS 26.5, before the fix:
 *   [location.href, location.origin, RC_ROOT, base.href]
 *   ["capacitor://localhost", "capacitor://localhost", "capacitor://", "capacitor://"]
 *
 * The fix is to give an authority-only URL its missing path before the strip runs. It is a
 * one-line guard and it changes nothing on the web: every https URL the site is served at
 * already has a slash after the host, so the guard's regex cannot match.
 *
 * Deliberately NOT solved by using location.origin unconditionally: origin is the string
 * "null" for file://, which is the other home the head script's comment says it supports.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: fix_root_authority.js <site-root>'); process.exit(2); }

const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');

const MARK = 'RC_ROOT_AUTHORITY_GUARD';
if (s.includes(MARK)) { console.log('already patched -- nothing to do'); process.exit(0); }

/* Anchor on the whole computation, not on a fragment of it: if the root logic is ever
   rewritten this must abort rather than paste a guard into something it no longer matches. */
const ANCHOR = "(function(){var h=location.href.replace(/[?#].*$/,'');\n";
const n = s.split(ANCHOR).length - 1;
if (n !== 1) {
  console.error(`expected exactly 1 occurrence of the RC_ROOT anchor, found ${n}`);
  process.exit(1);
}

const GUARD =
  " /* " + MARK + ": an authority with no path would lose its HOST to the strip below --\n" +
  "    \"capacitor://localhost\" -> \"capacitor://\". Give it the slash it is missing. No https\n" +
  "    URL this site is served at can match, so the web is unchanged. */\n" +
  " if(/^[a-z][a-z0-9+.\\-]*:\\/\\/[^\\/]*$/i.test(h)) h+='/';\n";

const before = s.length;
s = s.replace(ANCHOR, ANCHOR + GUARD);

fs.writeFileSync(FILE, s);
console.log(`--- fix_root_authority.js ---`);
console.log(`  guard inserted after the href read`);
console.log(`index.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
