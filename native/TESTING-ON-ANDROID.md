# Testing on an Android phone — four levels, and what each one actually proves

**Written 2026-09-17.** "Test it on an Android phone" means four different things here, and they
need very different amounts of setup. Level 1 needs nothing and works right now. Level 4 is the only
one that proves the thing the whole size decision hangs on.

---

## Level 1 — the live site in Chrome  *(now, nothing to build)*

Open **`https://rounds-codex.netlify.app`** in Chrome on any Android phone.

**This is not a poor substitute, and it is worth knowing why.** Android's WebView *is* Chromium — the
same engine Chrome uses and the same one the native app will run. So layout, fonts, tap targets,
the gallery viewer, swipes, the audio bar and every visual change render exactly as they will in the
app. This is the opposite of iOS, where nothing but a real device could tell you anything, because
WebKit is a different engine.

**What it proves:** everything visual and interactive. v149's viewer sizing, the mode toggle's tap
area, the side rail on a tablet, the two-pane layout, the whole content library.

**What it cannot prove:** the native shell (Level 2), offline from asset packs (Level 4), App Links
(Level 4), the status-bar/edge-to-edge behaviour (Level 2), or anything about Play itself.

**Two differences from the app, both expected:**
- **The site has the login wall; the app does not.** Sign in with your own account. The native
  payload strips the wall — `verify_ios_variant.js` asserts it is gone.
- The site has **Ask Rounds Codex**; the app does not, for the same reason.

### Level 1b — install it from Chrome as a PWA  *(also now, two taps)*

Chrome menu → **Add to Home screen** → **Install**. It gets its own icon, opens without a URL bar,
and the service worker caches the shell, so it works offline for text. That is much closer to the
native app than a browser tab, and it costs nothing.

**It is not the app.** The PWA loads from the network on first run and caches as it goes; the native
app ships the content in the package. But for "does this feel right on a phone", it is the honest
answer today.

---

## Level 2 — a debug build over USB  *(needs §4.0, then Android Studio on the Mac)*

Once the Capacitor project is pushed and the Android platform is added:

**On the phone, once:**
1. Settings → About phone → tap **Build number** seven times. It will say you are now a developer.
2. Settings → System → **Developer options** → turn on **USB debugging**.
3. Plug it into the Mac. The phone shows an "Allow USB debugging?" prompt — tick "always allow" and
   accept. If nothing appears, the cable is charge-only; a surprising number are.

**On the Mac:**
```sh
adb devices
```
The phone should be listed as `device`, not `unauthorized`. Then press **Run** in Android Studio
with the phone selected, or:
```sh
./gradlew :app:installDebug
adb shell am start -n com.roundscodex.app/.MainActivity
```

**What this proves and nothing before it does:** the native shell, the splash screen, the launcher
icon (including the themed/monochrome one — long-press the home screen → Wallpaper & style →
themed icons), the status bar and gesture-navigation insets, the back gesture, and whether the app
looks right edge to edge. **The edge-to-edge insets are the expected first real-device bug** — the
runbook says so, and a container cannot test them at all.

⚠ **This does NOT install the asset packs.** See Level 3.

---

## Level 3 — asset packs need `bundletool`, not Run  *(the correction)*

**`installDebug` and Android Studio's plain Run install the base module only.** Install-time asset
packs are delivered as *split APKs*, and a plain install does not include the splits — so the
galleries would 404 and it would look exactly like option A having failed, when it had simply never
been installed.

The runbook's §6 experiment ("build and install on the emulator, Airplane Mode, open a Cardiac
gallery") is the right experiment, but it has to be run on an install that carries the splits:

```sh
./gradlew :app:bundleDebug
bundletool build-apks --local-testing --bundle=app/build/outputs/bundle/debug/app-debug.aab --output=/tmp/rc.apks
bundletool install-apks --apks=/tmp/rc.apks
```

Android Studio can also do it: **Run → Edit Configurations → Deploy: "APK from app bundle"**.

⚠ **Confirm the exact `bundletool` invocation against Google's current documentation before relying
on it** — `support.google.com` and `developer.android.com` are blocked by this session's egress
proxy, so the flags above are from memory rather than re-read today. What is *not* in doubt is the
shape of the problem: a base-module-only install cannot test asset packs, and reading a 404 as
"option A does not work" would be the wrong conclusion drawn from the right observation.

**The alternative that avoids all of this: skip to Level 4.** A Play internal-test install delivers
the packs the way a real user gets them, which is the thing being tested anyway.

---

## Level 4 — the internal testing track  *(the realest test, and the only one for three things)*

Upload the signed `.aab` to **Internal testing** in Play Console, add your own Google account as a
tester, open the opt-in link on the phone, install from the Play Store.

**Three things only this can prove:**

1. **Asset packs as users receive them** — delivered by Play, not sideloaded. This settles §4.3.
2. **App Links.** `/.well-known/assetlinks.json` must carry the SHA-256 of **Google's app signing
   key**, which does not exist until the first upload. A debug build is signed with the debug key,
   so App Links can never verify on one — tapping a `roundscodex.com/c/chf` link will open Chrome
   and look broken when nothing is wrong.
3. **The real install size**, which Play computes and displays. Our 84.3 MB is an *uncompressed*
   figure measured against a *compressed* cap; Play's number is the one that counts.

Internal testing has no review delay and no tester minimum — your organization account is exempt
from the 12-testers-for-14-days rule that binds personal accounts.

---

## No Android phone? You are not blocked

**Play runs your app on real devices for you, free, on every upload.** The **pre-launch report** runs
a Robo crawl on a set of physical Google-hosted phones and returns screenshots, a video of the
crawl, crash logs, performance data and an accessibility summary. It is the reason
`native/PRE-LAUNCH-REPORT.md` exists — this session pre-empted the accessibility half of it so the
findings would not appear publicly on the listing next to a first release.

So the order that costs least:

1. **Today:** Level 1 in Chrome on any Android phone you can borrow for ten minutes.
2. **After §4.0:** Level 2 on the emulator (Android Studio's AVD — a Pixel image is fine and needs no
   hardware), which covers the shell and the icons.
3. **The size experiment:** Level 3 or, better, Level 4.
4. **Before production:** read the pre-launch report from the internal-test upload.

**A borrowed phone for ten minutes at Level 1 is worth more right now than anything else on this
page**, because it is the only step available before the Capacitor project is pushed.
