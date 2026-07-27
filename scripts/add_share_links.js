/* Give every condition its own shareable URL: /c/<id>.
 *
 * Ported from the deliver8 build, which was verified and then stranded — the About and
 * galleries work branched off an earlier index.html and never picked this up, so the
 * deployed app has no router at all. scripts/split_content.js expects the boot hook this
 * adds, so this has to run first.
 *
 * Three edits and one new file:
 *
 *  1. A head script, first thing in <head>, before any relative URL is parsed. It decides
 *     RC_ROOT and writes the <base> tag, so galleries, usmle/, icons and sw.js resolve the
 *     same way in all three homes: the website root, a shared /c/<id> link, and a local
 *     WKWebView bundle in the native build. A hard-coded <base href="/"> only ever worked
 *     on the web. It also captures the incoming deep link *immediately* — paint() rewrites
 *     the address bar as soon as the app boots, so by the time the router runs the original
 *     /c/<id> path is gone. That ordering bug cost a debugging session once already.
 *
 *  2. rcSyncURL(), called from paint(), keeps the address bar on the visible condition so
 *     Safari's share button, a bookmark and a reload all point somewhere useful.
 *     replaceState only: the app has its own nav stack, and mirroring it into browser
 *     history would create a second source of truth. Gated on RC_READY so it cannot run
 *     before the router has consumed the deep link, and on http(s) because replaceState
 *     throws on file://.
 *
 *  3. A boot IIFE that opens the captured target, then sets RC_READY. Also listens for
 *     hashchange so the older #c=<id> form still works.
 *
 *  4. _redirects — `/c/*  /index.html  200`. Without it Netlify 404s the shared link
 *     before the app ever loads.
 *
 * Usage: node scripts/add_share_links.js <in.html> <out.html> [redirects-out]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const [, , IN, OUT, REDIR] = process.argv;
if (!IN || !OUT) {
  console.error('usage: add_share_links.js <in.html> <out.html> [redirects-out]');
  process.exit(2);
}

const HEAD = `<script>/* Where is this app's root? Decided once, before the first relative URL is parsed,
   so galleries, usmle/, icons and sw.js resolve the same way in all three homes: the
   website root, a shared /c/<id> link, and a local WKWebView bundle (file:// or
   capacitor://localhost) in the native build. Replaces a hard-coded <base href="/">,
   which only ever worked on the web. */
(function(){var h=location.href.replace(/[?#].*$/,'');
 var r=/^\\/c\\//.test(location.pathname||'')?location.origin+'/':h.replace(/[^\\/]*$/,'');
 window.RC_ROOT=r;document.write('<base href="'+r+'">');
 /* Capture the shared link NOW: paint() normalises the address bar as soon as the app
    boots, so by the time the router runs the original /c/<id> path is already gone. */
 var m=/^\\/c\\/([A-Za-z0-9_-]+)\\/?$/.exec(location.pathname||'')        /* /c/<id>  (current) */
    || /[?&]c=([A-Za-z0-9_-]+)/.exec(location.search||'')                /* ?c=<id>  (older)   */
    || /^#c=([A-Za-z0-9_-]+)$/.exec(location.hash||'');                  /* #c=<id>  (older)   */
 window.RC_DEEPLINK=m?decodeURIComponent(m[1]):null;
 window.RC_READY=false;})();</script>
`;

const SYNC = `
/* Keep the address bar in step with the visible condition, so Safari's own share
   button, a bookmark and a reload all point at the right place. replaceState only --
   the app has its own nav stack and mirroring it into browser history would create a
   second source of truth. Web only: pushState/replaceState throw on file://, which is
   where the native build lives. */
var RC_HIST=/^https?:$/.test(location.protocol)&&!!(window.history&&history.replaceState);
var RC_PATH=(function(){try{return new URL(RC_ROOT).pathname;}catch(e){return '/';}})();
function rcSyncURL(){
 if(!RC_HIST||!window.RC_READY)return;
 var t=stack[stack.length-1];
 var want=(t&&t.v==='detail'&&t.id)?RC_PATH+'c/'+encodeURIComponent(t.id):RC_PATH;
 if(location.pathname===want)return;
 /* drop a legacy #c=<id> marker once it has been routed, so an old link upgrades itself
    to the clean path instead of carrying both forms */
 var keep=/^#c=/.test(location.hash||'')?'':location.hash;
 try{history.replaceState(null,'',want+keep);}catch(e){}
}
`;

const BOOT = `<script>
(function(){
  function openTarget(id){
    if(!id||typeof byId==='undefined'||!byId[id]) return false;
    root('library'); go('detail',id); window.scrollTo(0,0);
    return true;
  }
  function boot(){ openTarget(window.RC_DEEPLINK); window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); }
  function onHash(){ var m=/^#c=([A-Za-z0-9_-]+)$/.exec(location.hash||''); if(m) openTarget(decodeURIComponent(m[1])); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
  window.addEventListener('hashchange',onHash);
  window.RC_ROUTE_BOOT=boot;   /* the content loader calls this once byId is populated */
})();
</script>
`;

const REDIRECTS = `# A shared condition link is a client-side route, not a file. Without this Netlify
# 404s /c/<id> before the app ever loads. 200 = rewrite, so the URL stays put.
/c/*    /index.html   200
`;

function replaceOnce(s, find, repl, label) {
  const n = s.split(find).length - 1;
  if (n !== 1) {
    console.error(`FAIL ${label}: found ${n} occurrences, expected 1`);
    process.exit(1);
  }
  console.log(`  ok  ${label}`);
  return s.replace(find, repl);
}

let s = fs.readFileSync(IN, 'utf8');
const before = s.length;

if (s.includes('RC_DEEPLINK')) { console.error('FAIL: already patched'); process.exit(1); }
if (s.includes('<base ')) { console.error('FAIL: a <base> tag already exists'); process.exit(1); }

// 1 — head script, before anything that could resolve a relative URL
s = replaceOnce(s, '<head>\n', '<head>\n' + HEAD, 'head script (RC_ROOT + base + deep-link capture)');

// 2 — rcSyncURL, declared next to the nav stack it reads, and called from paint()
s = replaceOnce(s, "let stack=[{v:'library'}];", "let stack=[{v:'library'}];" + SYNC, 'rcSyncURL declaration');
s = replaceOnce(s, 'requestAnimationFrame(positionThumbs);\n const activeRoot=',
                'requestAnimationFrame(positionThumbs);\n rcSyncURL();\n const activeRoot=',
                'rcSyncURL call in paint()');

// 3 — the router itself, last, so byId and go() exist
const tail = s.lastIndexOf('</body></html>');
if (tail < 0) { console.error('FAIL: no </body></html>'); process.exit(1); }
s = s.slice(0, tail) + BOOT + s.slice(tail);
console.log('  ok  router boot');

fs.writeFileSync(OUT, s);
if (REDIR) { fs.writeFileSync(REDIR, REDIRECTS); console.log('  ok  wrote ' + REDIR); }
console.log(`${IN} ${before} -> ${OUT} ${s.length} chars (+${s.length - before})`);
