#!/usr/bin/env node
/* verify_root_authority.js <site-root>
 *
 * Runs the real head script -- extracted verbatim from index.html, not a copy of it -- under
 * six stubbed locations and checks what RC_ROOT and the <base> href come out as.
 *
 * The case that matters is "capacitor://localhost" with NO trailing slash, which is how
 * Capacitor's WKWebView loads the page. Run this against a tree without fix_root_authority.js
 * applied and it FAILS on that case, printing "capacitor://" -- the value measured in the
 * simulator. A guard that passes on the broken build is decoration.
 *
 * The other five cases are the regression half: the web must be untouched.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: verify_root_authority.js <site-root>'); process.exit(2); }

const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

/* Take the head IIFE as it ships. Anchored at both ends so a rewrite fails loudly here
   rather than silently testing the wrong bytes. */
const START = '(function(){var h=location.href';
const END = 'window.RC_READY=false;})();';
const a = html.indexOf(START);
const b = html.indexOf(END, a);
if (a < 0 || b < 0) { console.error('could not locate the RC_ROOT head script'); process.exit(1); }
const SRC = html.slice(a, b + END.length);

function run(href, origin, pathname, search, hash) {
  const win = {};
  const written = [];
  const sandbox = {
    window: win,
    location: { href, origin, pathname, search: search || '', hash: hash || '' },
    document: { write: (t) => written.push(t) },
  };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(SRC, sandbox);
  const m = /<base href="([^"]*)">/.exec(written.join(''));
  return { root: win.RC_ROOT, base: m && m[1], win };
}

const CASES = [
  {
    name: 'capacitor://localhost (no path) keeps its host',
    args: ['capacitor://localhost', 'capacitor://localhost', ''],
    want: 'capacitor://localhost/',
  },
  {
    name: 'capacitor://localhost/ (with slash) unchanged',
    args: ['capacitor://localhost/', 'capacitor://localhost', '/'],
    want: 'capacitor://localhost/',
  },
  {
    name: 'website root unchanged',
    args: ['https://roundscodex.com/', 'https://roundscodex.com', '/'],
    want: 'https://roundscodex.com/',
  },
  {
    name: 'website index.html unchanged',
    args: ['https://roundscodex.com/index.html', 'https://roundscodex.com', '/index.html'],
    want: 'https://roundscodex.com/',
  },
  {
    name: 'share link /c/<id> still resolves to the origin',
    args: ['https://roundscodex.com/c/dvt', 'https://roundscodex.com', '/c/dvt'],
    want: 'https://roundscodex.com/',
  },
  {
    name: 'file:// bundle unchanged',
    args: ['file:///Users/x/rc/index.html', 'null', '/Users/x/rc/index.html'],
    want: 'file:///Users/x/rc/',
  },
];

let fail = 0;
console.log('--- verify_root_authority.js ---');
for (const c of CASES) {
  const got = run(...c.args);
  const ok = got.root === c.want && got.base === c.want;
  if (!ok) fail++;
  console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${c.name}`);
  if (!ok) console.log(`          want ${JSON.stringify(c.want)}  got RC_ROOT ${JSON.stringify(got.root)}  base ${JSON.stringify(got.base)}`);
}

/* The deep-link capture must survive the guard -- it reads location.pathname, which the
   guard does not touch, but asserting it costs nothing and it is the thing a careless
   rewrite of this block would break. */
const dl = run('https://roundscodex.com/c/dvt', 'https://roundscodex.com', '/c/dvt');
const okdl = dl.win.RC_DEEPLINK === 'dvt';
if (!okdl) fail++;
console.log(`  ${okdl ? 'ok  ' : 'FAIL'}  /c/<id> deep link still captured`);

console.log(fail ? `\n${fail} FAILED` : '\nall passed');
process.exit(fail ? 1 : 0);
