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

const SW = process.argv[2];
if (!SW) { console.error('usage: node scripts/verify_sw.js <sw.js>'); process.exit(2); }
const fail = [];
const ok = (c, m) => { console.log((c ? '  ok   ' : '  FAIL ') + m); if (!c) fail.push(m); };

function load({ bodyReadFails, empty, networkUp }) {
  const deleted = [];
  const entry = {
    headers: new Map(),
    clone: () => ({ arrayBuffer: async () => { if (bodyReadFails) throw new Error('WebKitBlobResource error 1'); return Buffer.from('CACHED SHELL'); } }),
  };
  const cache = {
    match: async () => (empty ? undefined : entry),
    delete: async k => { deleted.push(k); return true; },
    put: async () => {},
  };
  const sandbox = {
    self: { addEventListener() {} },
    caches: { open: async () => cache, keys: async () => [], match: async () => (empty ? undefined : entry), delete: async () => true },
    location: { origin: 'https://x' },
    URL,
    console,
    fetch: async () => { if (!networkUp) throw new Error('offline'); return { ok: true, __from: 'network' }; },
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

  // 5. the cache version is the one the app precaches under
  ({ sandbox } = load({ networkUp: true }));
  ok(sandbox.CACHE_ === 'rounds-codex-v8', `CACHE is ${sandbox.CACHE_}`);
  ok(sandbox.CORE_.filter(u => u.startsWith('./content/')).length === 7, `CORE precaches all 7 content files (${sandbox.CORE_.filter(u => u.startsWith('./content/')).length})`);

  console.log('\n' + (fail.length ? 'FAILED: ' + fail.length : 'ALL CHECKS PASSED'));
  process.exit(fail.length ? 1 : 0);
})();
