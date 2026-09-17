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

## No Android phone? The exact steps

Three routes, in the order they become available. **You never need to buy or borrow a phone**, and
route C runs on *physical* hardware anyway — Google's, not yours.

### A. Today, five minutes, nothing installed — Chrome on the Mac

Open `https://rounds-codex.netlify.app` in Chrome and drag the window narrow, or press **⌥⌘I** →
click the **phone/tablet icon** at the top-left of DevTools → pick **Pixel 7** from the dropdown.

**It is the same rendering engine, so this is not a mock-up** — it is what a headless run in this
session does, with your eyes on it. It confirms every visual change including v149's viewer sizing
(set the device to a tablet and rotate to landscape) and the mode toggle.

**What it is not:** a phone. No real touch, no system bars, no WebView version, no app shell. Good
for *looking*, not for *believing*.

### B. The Android Studio emulator — a real Android OS, no hardware

This is the main answer, and **it is useful before §4.0**, because you can browse the live site
inside it in a real Android Chrome before any app exists.

1. Download **Android Studio** from `developer.android.com/studio`. Take the **Apple silicon**
   build. Budget **15–20 GB** of disk for the app, the SDK and one system image.
2. Open it and let the setup wizard run. It downloads the SDK and platform tools and asks you to
   accept the licences — accept all of them, or Gradle will stop later and the error will not say
   why.
3. **Tools → Device Manager** (or the phone icon in the right-hand sidebar) → **+** →
   **Create Virtual Device**.
4. **Phone → Pixel 8** (any recent Pixel is fine) → **Next**.
5. On the system image step, pick an image and click the **download arrow** beside it. Two things
   matter here:
   - **Take an `arm64-v8a` image on Apple silicon.** An x86 image runs under emulation and is
     painfully slow; the arm image runs at native speed.
   - **Take an image labelled "Google Play", not just "Google APIs".** That one has the Play Store
     on it, which is what makes route C below work without a phone. It is only offered on Pixel
     profiles, which is why step 4 says Pixel.
6. **Finish**, then press **▶** in the Device Manager to boot it. First boot takes a few minutes.
7. **Do this immediately, before any app exists:** open **Chrome inside the emulator** and go to
   `https://rounds-codex.netlify.app`. That is a real Android Chrome on a real Android OS, and it is
   the closest thing to a phone you can have today.
8. After §4.0 and the Android platform: **Run** from Android Studio with the emulator selected. Now
   you have the shell, the launcher icon, the splash, the gesture bar and the insets.
   - **Airplane Mode for the offline test:** swipe down twice from the top of the emulator screen for
     the quick-settings shade and tap the aeroplane. (The emulator's own "Extended controls" panel
     can also drop the cellular data, but the shade is the same thing a user does.)
   - **Debug with `chrome://inspect`** in desktop Chrome with the emulator running — the runbook's §5
     already leans on this and it works the same for an emulator as for a phone.

⚠ **Menu names drift between Android Studio releases**, and `developer.android.com` is blocked by
this session's proxy so the wording above was not re-read today. The shape does not change: Device
Manager, create a virtual device, pick a Pixel, download a system image, press play.

⚠ **What an emulator still cannot tell you:** how a particular phone's *WebView version* behaves —
it ships whatever the system image has — or anything about real-world network, battery or thermal
behaviour. For this app those matter less than usual, because the content is packaged rather than
fetched.

### C. Play's pre-launch report — physical devices, free, automatic

Upload the `.aab` to **Internal testing** and Play runs your app on a set of **real, physical**
Google-hosted phones and hands back screenshots from each, a video of the crawl, crash logs,
performance data and an accessibility summary. No hardware, no configuration, and it happens on
every upload to any track.

Two things make this the most valuable of the three:

- It runs on **several different devices at once**, which no single phone you could buy would do.
- With a **Google Play** system image (step 5 above) you can sign the emulator into the Play Store
  with your tester account and install from the internal-test link — so even Level 4, the real Play
  delivery path with real asset packs, works with no phone at all.

⚠ **Read `native/PRE-LAUNCH-REPORT.md` §1 before the first upload.** The Robo crawler meets the
medical disclaimer first, and it is *not* safe to assume it finds the accept button — a Capacitor app
is a single WebView node in the view hierarchy. If it stalls there the report shows the app never
leaving its first screen, which looks alarming and hides anything real behind it. That is why the
first upload goes to internal testing and gets read before anything is promoted.

---

## The short version

1. **Now:** Chrome on the Mac, DevTools device mode. Five minutes, confirms v149.
2. **This week, independent of §4.0:** install Android Studio, make a Pixel emulator with a **Google
   Play arm64** image, browse the live site in it.
3. **After §4.0:** Run the app to that emulator. Shell, icons, insets.
4. **The size experiment:** bundle + `bundletool`, per Level 3 above.
5. **Before production:** upload to internal testing, install to the emulator from the Play Store,
   and read the pre-launch report.

---

## Why none of this blocks you

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
