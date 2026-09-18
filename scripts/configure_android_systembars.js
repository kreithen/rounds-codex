#!/usr/bin/env node
/**
 * configure_android_systembars.js — edge-to-edge, read out of the Capacitor 8 source.
 *
 *   node scripts/configure_android_systembars.js <native-repo>
 *
 * THE RUNBOOK'S GUESS WAS FOR CAPACITOR 7 AND IS WRONG FOR 8. It said to look for an
 * `android.adjustMarginsForEdgeToEdge` option and try "auto". That key does not exist in
 * @capacitor/android 8.5.2 -- grepped, zero hits. Capacitor 8 ships a built-in **SystemBars**
 * plugin instead, and everything below was read out of
 * `node_modules/@capacitor/android/.../plugin/SystemBars.java`, not remembered.
 *
 * WHAT IT DOES WITH INSETS. One inset listener, two branches, and only ever ONE of them applies
 * the inset -- which is why there is no double-padding to worry about:
 *
 *   WebView >= 140 AND viewport-fit=cover   passthrough. The decor view is NOT padded, the real
 *                                           insets reach the WebView, so `env(safe-area-inset-*)`
 *                                           resolves natively.
 *   otherwise                               the decor view IS padded natively and the insets are
 *                                           then explicitly zeroed, so `env()` reads 0 -- correct,
 *                                           because the padding already happened.
 *
 * So `add_safe_area.js`'s existing `env()` CSS is right on both paths and needs no change. The
 * `--safe-area-inset-*` custom properties Capacitor also injects are a parallel mechanism we do
 * not have to consume. (140 is Chromium issue 40699457, the WebView safe-area fix; 144 is 457682720,
 * the keyboard one. Both are named as constants in that file.)
 *
 * THE THREE KEYS SET HERE:
 *
 * 1. `style: "DARK"` — A BUG FIX, not a preference. `setStyle` does
 *    `setAppearanceLightStatusBars(!style.equals("DARK"))`, and the default `DEFAULT` resolves
 *    through `getStyleForTheme()`, which returns LIGHT whenever the phone is not in night mode.
 *    LIGHT means DARK ICONS. This app is dark navy in all three modes and has no light theme, so
 *    on any phone in light mode -- most of them -- the status and gesture bar icons would be dark
 *    on dark. "DARK" here means "the content behind the bars is dark", so draw light icons.
 *
 * 2. `initialViewportFitValueHint: "cover"` — stops a first-paint layout shift. `hasViewportCover`
 *    starts false, so the first inset pass takes the padded branch and flips to passthrough only
 *    once injected JS has read the meta tag. We already know the app ships viewport-fit=cover, so
 *    telling it up front skips the flip. NOTE: this key is implemented in the Java but is NOT in
 *    `@capacitor/cli`'s declarations.d.ts -- the types are behind the runtime. Read from the
 *    source, so it is real; do not "clean it up" because an editor does not know it.
 *
 * 3. `insetsHandling: "css"` — already the default. Set explicitly so a future default change
 *    cannot silently alter behaviour.
 *
 * ⚠ THIS ALSO REACHES iOS. Plugin config is top-level only -- there is no `android.plugins` key in
 * the Capacitor config schema (checked against declarations.d.ts). `initialViewportFitValueHint`
 * and `insetsHandling` are Android-only in the Java and iOS ignores them, but **`style` is shared**.
 * iOS 1.0 (4) shipped with no SystemBars config at all, so the next iOS archive will pick this up.
 * It is very likely the right value there too -- the app is just as dark on iOS -- but it is a
 * behaviour change to a shipped product and nobody has seen it. CHECK THE iOS STATUS BAR on the
 * next archive rather than assuming.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const REPO = process.argv[2];
if (!REPO) { console.error('usage: configure_android_systembars.js <native-repo>'); process.exit(2); }
const FILE = path.join(REPO, 'capacitor.config.json');
const cfg = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const WANT = { style: 'DARK', initialViewportFitValueHint: 'cover', insetsHandling: 'css' };

cfg.plugins = cfg.plugins || {};
const before = JSON.stringify(cfg.plugins.SystemBars || null);
cfg.plugins.SystemBars = { ...(cfg.plugins.SystemBars || {}), ...WANT };

/* Assert we did not disturb what iOS 1.0 (4) shipped with. */
const keep = { appId: 'com.roundscodex.app', appName: 'Rounds Codex', webDir: 'www' };
let bad = 0;
for (const [k, v] of Object.entries(keep)) {
  if (cfg[k] !== v) { console.error(`FAIL: ${k} is ${JSON.stringify(cfg[k])}, expected ${JSON.stringify(v)}`); bad++; }
}
if (cfg.ios?.contentInset !== 'never') { console.error('FAIL: ios.contentInset is no longer "never"'); bad++; }
if (cfg.server?.iosScheme !== 'capacitor') { console.error('FAIL: server.iosScheme is no longer "capacitor"'); bad++; }
if (bad) process.exit(1);

fs.writeFileSync(FILE, JSON.stringify(cfg, null, 2) + '\n');
console.log(before === JSON.stringify(cfg.plugins.SystemBars)
  ? '  --  SystemBars already configured'
  : '  ok  plugins.SystemBars set');
for (const [k, v] of Object.entries(WANT)) console.log(`        ${k}: "${v}"`);
console.log('  ok  appId, appName, webDir, ios.contentInset and server.iosScheme untouched');
console.log('\n⚠ style is SHARED with iOS. Check the iOS status bar on the next archive.');
