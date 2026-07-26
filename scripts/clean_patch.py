#!/usr/bin/env python3
r"""Portability + hygiene pass on the live app's index.html.

Goal: ONE index.html that renders identically in three homes --
  1. the website root            https://rounds-codex.netlify.app/
  2. a shared condition link     https://rounds-codex.netlify.app/c/<id>
  3. a local WKWebView bundle    file:///.../www/  or  capacitor://localhost/
     ... which is what the Xcode / App Store build will be. See ../native-app-plan.md.

This is the record of exactly what changed and why. Every edit asserts it hits exactly
once, so a silent miss cannot ship, and re-running on an already-patched file fails loudly
instead of double-applying.

Prerequisite: fonts/inline-fonts.css, built by scripts/build_fonts.py.

Usage: python3 scripts/clean_patch.py path/to/index.html [path/to/inline-fonts.css]
"""
import sys

SHARE_ORIGIN = 'https://rounds-codex.netlify.app'


def main(src, fonts_css='fonts/inline-fonts.css'):
    s = open(src, encoding='utf-8').read()
    n0 = len(s)
    done = []

    def sub1(old, new, label):
        nonlocal s
        c = s.count(old)
        if c != 1:
            sys.exit('FAIL %s: found %d occurrences, expected 1' % (label, c))
        s = s.replace(old, new)
        done.append(label)

    # ---------------------------------------------------------------- app root
    # A hard-coded <base href="/"> is right on the web and wrong in a native bundle
    # (there is no site root on file://). Decide the root at parse time, before the
    # first relative URL resolves -- and capture the incoming deep link while the
    # original address is still intact, because the first paint() normalises it away.
    sub1(
        '<head>\n<base href="/">\n',
        '''<head>
<script>/* Where is this app's root? Decided once, before the first relative URL is parsed,
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
''',
        'dynamic app root + deep-link capture')

    # ------------------------------------------------------------ sharing / SEO
    sub1(
        '<title>Rounds Codex</title>\n',
        '''<title>Rounds Codex</title>
<meta name="description" content="Rounds Codex - clinical reference for nurses, medical students and residents. 181 conditions, illustrated galleries, quizzes, NCLEX-RN and USMLE practice.">
<link rel="canonical" href="%(o)s/">
<meta property="og:site_name" content="Rounds Codex">
<meta property="og:type" content="website">
<meta property="og:title" content="Rounds Codex">
<meta property="og:description" content="Clinical reference for nurses, medical students and residents. 181 conditions, illustrated galleries and quizzes.">
<meta property="og:image" content="%(o)s/icons/apple-touch-icon.png">
<meta name="twitter:card" content="summary">
<meta name="mobile-web-app-capable" content="yes">
''' % {'o': SHARE_ORIGIN},
        'canonical + Open Graph + modern web-app meta')

    # ------------------------------------------------------------------- fonts
    # Google Fonts over the network means no typography offline and two extra hosts on
    # every load. Inline the two variable faces instead (scripts/build_fonts.py).
    sub1(
        '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet">\n',
        open(fonts_css, encoding='utf-8').read() + '\n',
        'self-hosted inline fonts (no CDN)')

    # ------------------------------------------------- canonical share + API base
    sub1(
        "function condURL(id){ return location.origin+'/c/'+encodeURIComponent(id); }",
        """var RC_SHARE_ORIGIN='%s';   /* the public site, NOT location.origin: the native
   build runs on capacitor://localhost or file://, and a link built from that origin would
   be dead on arrival. Also the origin an iOS Universal Link has to claim. Change here if
   the site moves to a custom domain. */
function condURL(id){ return RC_SHARE_ORIGIN+'/c/'+encodeURIComponent(id); }
/* Base for server calls (the Ask function). Empty on the web so the request stays
   same-origin and needs no CORS; absolute in a native bundle, where a root-relative
   path would resolve into the app package instead of the server. The native build will
   therefore need Access-Control-Allow-Origin on the function. Ask already falls back to
   its built-in offline answer if the call fails, so this degrades safely either way. */
var RC_API=/^https?:$/.test(location.protocol)?'':RC_SHARE_ORIGIN;""" % SHARE_ORIGIN,
        'canonical share origin + RC_API')

    sub1("await fetch('/.netlify/functions/ask',",
         "await fetch(RC_API+'/.netlify/functions/ask',",
         'Ask endpoint uses RC_API')

    # -------------------------------------------------------------- address bar
    # The app owns its own nav stack, so history is deliberately NOT mirrored into
    # browser history (two sources of truth desync). replaceState only: the URL is a
    # read-only projection of the current view, which is all Safari's own share button,
    # bookmarks and reload need, and it cannot affect in-app navigation.
    sub1(
        " const activeRoot=(r.v==='detail')?'library'",
        """ rcSyncURL();
 const activeRoot=(r.v==='detail')?'library'""",
        'paint() -> rcSyncURL() hook')

    sub1(
        'function paint(){\n',
        """/* Keep the address bar in step with the visible condition, so Safari's own share
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
function paint(){
""",
        'rcSyncURL()')

    # ------------------------------------------------------------ deep-link router
    # Read the id captured at parse time rather than re-parsing an address bar that has
    # since been normalised, and only let rcSyncURL touch the URL once routing is done.
    sub1(
        """  function openFromHash(){
    var m=/^\\/c\\/([A-Za-z0-9_-]+)\\/?$/.exec(location.pathname||'')     // /c/<id>  (preferred)
          || /[?&]c=([A-Za-z0-9_-]+)/.exec(location.search||'')          // ?c=<id>
          || /^#c=([A-Za-z0-9_-]+)$/.exec(location.hash||'');            // #c=<id>  (older links)
    if(!m) return false;
    var id=decodeURIComponent(m[1]);
    if(typeof byId==='undefined'||!byId[id]) return false;
    root('library'); go('detail',id); window.scrollTo(0,0);
    return true;
  }
  function boot(){ openFromHash(); }""",
        """  function openTarget(id){
    if(!id||typeof byId==='undefined'||!byId[id]) return false;
    root('library'); go('detail',id); window.scrollTo(0,0);
    return true;
  }
  function boot(){ openTarget(window.RC_DEEPLINK); window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); }
  function onHash(){ var m=/^#c=([A-Za-z0-9_-]+)$/.exec(location.hash||''); if(m) openTarget(decodeURIComponent(m[1])); }""",
        'router reads the captured id')

    sub1("  window.addEventListener('hashchange',openFromHash);",
         "  window.addEventListener('hashchange',onHash);",
         'hashchange handler')

    # ----------------------------------------------------------- service worker
    sub1(
        "if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}",
        "if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){/* http(s) only: a SW\n"
        " does nothing on file:// and can collide with the native shell's own asset handling */\n"
        " window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}",
        'service worker guarded to http(s)')

    open(src, 'w', encoding='utf-8').write(s)
    print('applied %d edits:' % len(done))
    for d in done:
        print('  -', d)
    print('%d -> %d chars (+%d)' % (n0, len(s), len(s) - n0))


if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    main(*sys.argv[1:3])
