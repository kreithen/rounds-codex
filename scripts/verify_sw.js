/* Unit-test the service worker's cache-read guard -- the fix for Safari's
 * "WebKitBlobResource error 1." on restoring a backgrounded tab.
 *
 * The case the guard exists for -- a Cache Storage entry whose backing file iOS has
 * reclaimed, so the entry still matches but its body cannot be read -- cannot be reproduced
 * from a page: Cache.put reads bodies eagerly and refuses an errored stream. So the worker is
 * loaded here in a vm against a fake `caches` that can fail a read on demand.
 *
 * Usage: node scripts/verify_sw.js <sw.js>
 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const SW = process.argv[2];
if (!SW) { console.error('usage: node scripts/verify_sw.js <sw.js>'); process.exit(2); }
const fail = [];
const ok = (c, m) => { console.log((c ? '  ok   ' : '  FAIL ') + m); if (!c) fail.push(m); };

function load({ bodyReadFails, empty, networkUp, netBodyReadFails, storageEvicted }) {
  const deleted = [];
  const entry = {
    headers: new Map(),
    clone: () => ({ arrayBuffer: async () => { if (bodyReadFails) throw new Error('WebKitBlobResource error 1'); return Buffer.from('CACHED SHELL'); } }),
    arrayBuffer: async () => { if (bodyReadFails) throw new Error('WebKitBlobResource error 1'); return Buffer.from('CACHED SHELL'); },
  };
  const cache = {
    match: async () => (empty ? undefined : entry),
    delete: async k => { deleted.push(k); return true; },
    put: async () => {},
  };
  const sandbox = {
    self: { addEventListener() {} },
    /* storageEvicted models what iOS actually does when it reclaims an origin's storage: the
       Cache Storage API itself starts REJECTING, rather than politely returning a miss. Three
       fixes for this bug all assumed the worst case was an unreadable body. */
    caches: {
      open: async () => { if (storageEvicted) throw new Error('QuotaExceededError'); return cache; },
      keys: async () => [], match: async () => (empty ? undefined : entry), delete: async () => true,
    },
    location: { origin: 'https://x' },
    URL,
    console,
    /* The network response models the real thing closely enough to exercise the buffering:
       it has a status, headers that LIE about encoding, and an arrayBuffer() that can fail --
       which is the tab-suspend-mid-read case the online path has to survive. */
    fetch: async () => {
      if (!networkUp) throw new Error('offline');
      return {
        ok: true, status: 200, statusText: 'OK', __from: 'network',
        headers: new Map([['content-type', 'text/html'], ['content-encoding', 'gzip'], ['content-length', '999']]),
        arrayBuffer: async () => {
          if (netBodyReadFails) throw new Error('WebKitBlobResource error 1');
          return Buffer.from('NETWORK SHELL');
        },
      };
    },
    Headers,
    Response: class { constructor(body, init) { this.body = body; this.status = (init && init.status) || 200; this.headers = init && init.headers; } },
  };
  sandbox.self.location = sandbox.location;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(SW, 'utf8')
    + '\n;globalThis.CACHE_=CACHE;globalThis.CORE_=CORE;', sandbox);
  return { sandbox, deleted };
}

(async () => {
  // 1. healthy cache, offline
  let { sandbox } = load({ networkUp: false });
  let r = await sandbox.cachedShell({});
  ok(r && Buffer.from(r.body).toString() === 'CACHED SHELL', 'a readable cached shell is served from memory, not as a blob');

  // 2. the iOS case: entry present, body unreadable, still offline
  let x = load({ bodyReadFails: true, networkUp: false });
  r = await x.sandbox.cachedShell({});
  ok(r && /Rounds Codex is offline/.test(String(r.body)),
     'an unreadable body falls through to the offline page instead of failing the navigation');
  ok(r.status === 200, `and it answers 200, so the browser renders it rather than its own error page (${r.status})`);
  ok(x.deleted.includes('./index.html'), 'the dead entry is deleted so the next load can repair itself');

  // 3. unreadable body but the network is back
  x = load({ bodyReadFails: true, networkUp: true });
  r = await x.sandbox.cachedShell({});
  ok(r && r.__from === 'network', 'with the network back it retries the network rather than showing the offline page');

  // 4. an asset miss must resolve to undefined, not throw
  x = load({ bodyReadFails: true, networkUp: false });
  r = await x.sandbox.readCached({});
  ok(r === undefined, 'an unreadable asset resolves to undefined (a broken image, not a dead page)');

  // 5. CORE covers everything the app cannot boot without. Deliberately not pinned to a
  //    version number -- bumping CACHE is a normal part of a release and must not fail here.
  ({ sandbox } = load({ networkUp: true }));
  ok(/^rounds-codex-v\d+$/.test(sandbox.CACHE_), `CACHE is versioned: ${sandbox.CACHE_}`);
  const core = sandbox.CORE_;
  const content = core.filter(u => u.startsWith('./content/'));

  /* Derive the expected content files from the loader's own FILES list rather than
   * hard-coding a count. The count was a proxy for the real invariant -- "CORE covers
   * everything the loader fetches" -- and it went stale the first time a feature added
   * an eighth content file, reporting a failure on a correct worker. Deriving it also
   * catches the opposite and more dangerous case: a file added to the loader but NOT to
   * CORE, which works online and is missing offline. */
  const idxPath = path.join(path.dirname(path.resolve(SW)), 'index.html');
  let expected = null;
  if (fs.existsSync(idxPath)) {
    const m = fs.readFileSync(idxPath, 'utf8').match(/FILES\s*=\s*\[([^\]]*)\]/);
    if (m) expected = [...m[1].matchAll(/'([^']+)'/g)].map(x => `./content/${x[1]}.json`);
  }
  if (expected) {
    const missing = expected.filter(f => !content.includes(f));
    ok(missing.length === 0,
       `CORE covers every file the loader fetches (${expected.length})${missing.length ? ' -- MISSING: ' + missing.join(', ') : ''}`);
    const extra = content.filter(f => !expected.includes(f));
    ok(extra.length === 0, `and precaches nothing the loader does not fetch${extra.length ? ' -- EXTRA: ' + extra.join(', ') : ''}`);
  }
  const fonts = core.filter(u => u.startsWith('./fonts/'));
  ok(content.length >= 7, `CORE precaches the content files (${content.length})`);
  ok(fonts.length === 6, `CORE precaches all 6 font files (${fonts.length}) — without these, offline typography falls back`);
  ok(core.includes('./index.html') && core.includes('./'), 'CORE precaches the shell itself');
  ok(new Set(core).size === core.length, 'no duplicate CORE entries (addAll would still work, but it is a sign of a bad merge)');

  // 6. the navigation branch must never clone the response it returns. res.clone() tees one
  //    body into two, and an iOS tab suspend/resume mid-stream breaks the tee -- which is
  //    Safari's "WebKitBlobResource error 1." on a backgrounded tab. This shipped twice.
  const src = fs.readFileSync(SW, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  const nav = src.match(/req\.mode === 'navigate'\)\s*\{[\s\S]*?\n  \}/);
  ok(!!nav, 'the navigate branch is present');
  ok(nav && !/\.clone\(\)/.test(nav[0]),
     `the navigate branch does not clone its response${nav && /\.clone\(\)/.test(nav[0]) ? ' -- it does, and that is the blob bug' : ''}`);
  ok(nav && !/caches\.open|\.put\(/.test(nav[0]),
     'and does not write to the cache while answering -- the shell is precached in CORE instead');

  /* 7. Not cloning is not sufficient, which is what the third recurrence of this bug taught.
   *    A raw fetch() Response handed to respondWith is still blob-backed by WebKit, so the
   *    navigation body has to be drained into memory before the page ever sees it. */
  ok(/async function navigate\s*\(/.test(src), 'the navigate branch delegates to a navigate() handler');
  const navFn = src.match(/async function navigate\s*\([\s\S]*?\n\}/);
  ok(navFn && /\.arrayBuffer\(\)/.test(navFn[0]),
     'the ONLINE navigation body is drained into memory -- a streamed fetch() body is blob-backed and dies on tab resume');
  ok(navFn && /status !== 200/.test(navFn[0]),
     'and only 200s are rebuilt, so a 204/304 is not handed a body and a real 404 reaches the browser intact');

  // 8. A rebuilt body is already decoded, so the original encoding/length headers now lie.
  ok(/function safeHeaders/.test(src), 'safeHeaders() exists to strip headers that no longer describe a rebuilt body');
  const sh = src.match(/function safeHeaders[\s\S]*?\n\}/);
  for (const h of ['content-encoding', 'content-length', 'transfer-encoding']) {
    ok(sh && sh[0].includes(h), `safeHeaders drops ${h}`);
  }
  ok(/headers: safeHeaders\(/.test(src) && (src.match(/headers: safeHeaders\(/g) || []).length >= 2,
     'both the network and the cache paths sanitise their headers (2+ call sites)');

  // 9. Behavioural: online navigation returns memory-backed bytes, and a body that dies
  //    mid-read falls back to the shell rather than surfacing the error page.
  //    Run through a helper so a worker without navigate() reports a failure rather than
  //    throwing and skipping every check after it.
  const drive = async (opts) => {
    const h = load(opts);
    if (typeof h.sandbox.navigate !== 'function') return null;
    try { return Buffer.from((await h.sandbox.navigate({})).body).toString(); }
    catch (e) { return 'THREW: ' + e.message; }
  };
  ok(await drive({ networkUp: true }) === 'NETWORK SHELL',
     'online navigation serves the network response as buffered bytes');
  ok(await drive({ networkUp: true, netBodyReadFails: true }) === 'CACHED SHELL',
     'a network body that dies mid-read falls back to the cached shell, not the error page');
  ok(await drive({ networkUp: false }) === 'CACHED SHELL',
     'offline navigation still serves the cached shell');

  // 10. THE v48 CASE: Cache Storage itself rejects. A navigation must still resolve to a
  //     Response -- respondWith given a rejected promise renders Safari's own error page,
  //     which is the very screen this whole bug reports as.
  {
    const h = load({ networkUp: false, storageEvicted: true });
    let out = null, threw = null;
    try { out = await h.sandbox.navigate({}); } catch (e) { threw = e.message; }
    ok(!threw && out && out.status === 200,
       'navigate() resolves even when caches.open() REJECTS' + (threw ? ' -- it threw: ' + threw : ''));
    ok(!threw && out && /Rounds Codex is offline/.test(String(out.body)),
       'and answers the offline page, not a rejected promise');
    let out2 = null, threw2 = null;
    try { out2 = await h.sandbox.cachedShell({}); } catch (e) { threw2 = e.message; }
    ok(!threw2 && out2, 'cachedShell() resolves when Cache Storage rejects' + (threw2 ? ' -- threw: ' + threw2 : ''));
    // the offline page must be freshly built; a shared Response body can only be read once
    let a = null, b = null;
    try { a = await h.sandbox.cachedShell({}); b = await h.sandbox.cachedShell({}); } catch (e) {}
    ok(!!a && !!b && a !== b,
       'each offline fallback is a NEW Response -- a shared body is consumed after one use');
  }

  // 11. Static guards for the two shapes that caused this
  {
    const raw = fs.readFileSync(SW, 'utf8');
    /* Strip comments before matching. These checks are about what the worker DOES, and a guard
       that trips on a comment explaining the old bug is a guard people learn to ignore. */
    const src = raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
    ok(!/hit\.clone\(\)/.test(src),
       'readCached does not clone the cache hit -- clone() tees a body that must then be drained twice');
    const navCall = src.match(/respondWith\(\s*navigate\([^)]*\)[^)]*\)/);
    ok(navCall && /\.catch/.test(navCall[0]),
       'respondWith(navigate(...)) has a .catch -- the last thing between a rejection and Safari\'s error page');
    const rc = src.match(/async function readCached[\s\S]*?\n\}/);
    ok(rc && /try\s*\{[\s\S]*caches\.open/.test(rc[0]),
       'caches.open() inside readCached is inside the try, not before it');
  }

  console.log('\n' + (fail.length ? 'FAILED: ' + fail.length : 'ALL CHECKS PASSED'));
  process.exit(fail.length ? 1 : 0);
})();
