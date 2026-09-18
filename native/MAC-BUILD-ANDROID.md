# Building the Android app on the Mac

**Written 2026-09-18, after the Android project was generated and pushed.** Everything a container
can do is done: the platform exists, the App Links filter, icons, splash and asset-pack wiring are
committed, and the payload has been built and verified. What is left needs the Android SDK, which
cannot be installed here — `dl.google.com` is blocked by this session's proxy.

**One command per line.** Do not paste a block: `cap init`'s interactive prompt swallowed one on
2026-08-17, and every Terminal window starts in your home folder, so each section below begins with
its own `cd`.

---

## 0. Once, before anything

- **Android Studio**, current release, with its bundled JDK. Accept every SDK licence on first run
  — skip one and Gradle stops later with an error that does not say why.
- **Node 22 or newer.** Not optional: `@capacitor/cli@8` declares `engines.node >= 22`.
- Three repos, and **the native one you already have.**

⚠ **`~/rounds-codex-ios` IS the native repo.** It is where the project has always lived and where
`git remote add origin` pointed it on 2026-09-18; the GitHub repo is called `rounds-codex-native`
but the local folder keeps its original name. **Do not clone `rounds-codex-native` — you would end
up with two copies and edit the wrong one.** Every path below says `~/rounds-codex-ios` for that
reason.

```sh
cd ~
```
```sh
ls -d rounds-codex rounds-codex-app rounds-codex-ios
```

Clone whichever of the first two that lists as missing:

```sh
git clone https://github.com/kreithen/rounds-codex.git
```
```sh
git clone https://github.com/kreithen/rounds-codex-app.git
```

Then put the build repo on the Android branch:

```sh
cd ~/rounds-codex
```
```sh
git checkout claude/native-android-app-fzzjss
```

---

## 1. Refresh the project and its dependencies

```sh
cd ~/rounds-codex-ios
```
```sh
git pull
```
```sh
npm ci
```

`npm ci` restores `node_modules/`, which is ignored on purpose — it is a build artifact.

---

## 2. Build the web payload into `www/`

```sh
cd ~/rounds-codex
```
```sh
node scripts/build_native_payload.js ../rounds-codex-app /tmp/rc-payload --platform android --asset-packs
```

Expect **84.3 MB**, with the line `ok  84.3 MB, with 115.7 MB of headroom.` It refuses to build for
Android without `--asset-packs`, because 826 MB does not fit Play's 200 MB base-module cap.

```sh
rm -rf ~/rounds-codex-ios/www
```
```sh
cp -r /tmp/rc-payload ~/rounds-codex-ios/www
```

---

## 3. Build the asset packs into the project

```sh
cd ~/rounds-codex
```
```sh
node scripts/build_asset_packs.js ../rounds-codex-app /tmp/rc-packs --copy
```
```sh
node scripts/verify_asset_packs.js /tmp/rc-packs ../rounds-codex-app
```

Expect **11 packs, 1,153 files, 741.9 MB** and `all 48 checks pass`. That check is the one no build
tool does: base + packs must equal everything the app can request. Wrong one way and 742 MB ships
twice; wrong the other and a gallery is silently missing on a device, offline, with no error.

```sh
for d in /tmp/rc-packs/rc-*; do cp -r "$d/src" ~/rounds-codex-ios/android/"$(basename $d)"/; done
```

The Gradle wiring for these is already committed — `settings.gradle` includes all eleven and
`app/build.gradle` names them in `assetPacks`. Only the assets themselves are generated, and they
are gitignored.

---

## 4. Sync and open

```sh
cd ~/rounds-codex-ios
```
```sh
npx cap sync android
```
```sh
npx cap open android
```

Android Studio will index and run a Gradle sync on first open. That takes a few minutes and
downloads the Gradle distribution; let it finish before pressing anything.

**On first open it will say the Gradle JVM is incompatible — click "Use JVM 21".** Confirmed
2026-09-18: Gradle 8.14.3, which Capacitor 8 pins, supports JDK 8–24, and a current Mac's default
JDK is 25. JVM 21 is Studio's bundled JetBrains Runtime and the standard pairing for AGP 8.x.
Nothing about the project is wrong; it is a system-JDK mismatch and picking 21 settles it for good.

**Ignore two things that are not yours.** Studio's *"Error loading assistant panel"* is its own AI
sidebar. And Gradle prints `WARNING: Using flatDir should be avoided` twice — that is Capacitor's
own template using `flatDir` for the Cordova plugin libs.

### Check the wiring before anything slow

```sh
cd ~/rounds-codex-ios/android
```
```sh
./gradlew projects
```

**Confirmed working 2026-09-18**, `BUILD SUCCESSFUL in 1s`, listing `:app`, `:capacitor-android`,
`:capacitor-cordova-android-plugins` and all eleven `:rc-*` modules. It is seconds rather than
minutes and it is the real test of `settings.gradle`, so run it before a full build.

---

## 5. Run it before configuring anything else

Make the emulator first if you have not: **Tools → Device Manager → + → Phone → Pixel 8**, and on
the system-image step take an **arm64** image labelled **"Google Play"** (not "Google APIs") —
`native/TESTING-ON-ANDROID.md` explains why both of those matter.

Press **▶**. Then check five things, in this order:

1. **The splash is the Rounds Codex mark on dark navy**, not Capacitor's blue cross on white. If it
   is the cross, `make_android_splash.py` did not run or `cap sync` overwrote it.
2. **The medical disclaimer appears and its accept button is actually tappable.**
3. **The library paints 183 conditions.**
4. Open a gallery, take a quiz, open a calculator.
5. **Open USMLE PREP.** This is the one to check deliberately: Capacitor's `WebViewLocalServer`
   routes a path whose last segment has no `.` back to the root `index.html`, and `usmle/` has no
   dot. Without `fix_usmle_link.js` you get the main shell with its base set to `/usmle/`, every
   `content/*.json` 404s, and the screen reads "Content didn't load" with the tab bar still on it.
   The patcher is in the payload chain; this is how you confirm it survived.

**Debug with `chrome://inspect`** from desktop Chrome with the emulator running. That is the Android
equivalent of Safari's Web Inspector.

### The edge-to-edge check, in that console

```js
[!!document.getElementById('rc-safe-area'),
 getComputedStyle(document.querySelector('.app')).paddingTop]
```

The first says the safe-area patcher ran. The second says whether the inset resolved. **A `0px` with
the header sitting under the status bar is the activity side**, not the CSS — but note that `0px` is
*correct* on a WebView older than 140, because there Capacitor pads the decor view natively instead
of passing insets through. Check the WebView version before treating 0 as a fault:

```js
navigator.userAgent.match(/Chrome\/(\d+)/)[1]
```

Also look at the **status bar icons**. They should be light against the dark navy. If they are dark
and unreadable, `plugins.SystemBars.style` is not reaching the build.

---

## 6. The experiment that settles the size decision

This is the one open engineering question in the whole Android project: **can Capacitor's
`WebViewLocalServer` read a file out of a Play install-time asset pack?** The layout is chosen so it
should need no code change, but nobody has run it and a container cannot.

⚠ **`installDebug` and Android Studio's plain Run install the BASE MODULE ONLY.** Install-time asset
packs ship as split APKs and a base-only install does not carry them — so the galleries would 404
and it would look exactly like this failing when it had simply never been installed. That is the
wrong conclusion drawn from the right observation, on the one test everything hangs on.

**Use Android Studio's own deploy-from-bundle, not the bundletool CLI.**
**Run → Edit Configurations → Deploy: "APK from app bundle"**, then press ▶. Studio builds the
bundle and installs the split APKs with its own bundled bundletool, so the asset packs come along.

That is the easy route and it exists because **`bundletool` is NOT installed with Android Studio** —
the CLI is a separate JAR. Only reach for it if the Studio route misbehaves:

```sh
brew install bundletool
```
```sh
cd ~/rounds-codex-ios/android
```
```sh
./gradlew :app:bundleDebug
```
```sh
bundletool build-apks --local-testing --bundle=app/build/outputs/bundle/debug/app-debug.aab --output=/tmp/rc.apks
```
```sh
bundletool install-apks --apks=/tmp/rc.apks
```

⚠ Confirm those flags against Google's current documentation — `developer.android.com` is blocked
from this session, so they are from memory. The shape of the trap is not in doubt.

**Then:**

1. Turn on **Airplane Mode** (swipe down twice, tap the aeroplane).
2. Open a **Cardiac** gallery and open a full-size page.
3. Play a recording.

**If it renders, option A is settled** and the other ten packs are already built. **If it 404s, stop
and take option B** — `add_media_root.js` sets `RC_MEDIA_ROOT` to the public origin and the media
streams instead. Do not spend a day on it.

Either way, **write the answer into `HANDOFF-android-app.md` §4.3 with the date**, and if it is B,
rewrite the two sentences in `PLAY-LISTING-DRAFT.md` §3 that promise offline artwork and a
downloadable PDF per gallery. Saying it in the listing is far cheaper than a reader finding it.

---

## 7. Signing, and the App Links fingerprint

Generate an upload key. **Keep it out of the repo** — `.gitignore` already blocks `*.keystore`,
`*.jks` and `keystore.properties`, and a committed keystore is a credential you cannot un-publish.

```sh
cd ~
```
```sh
keytool -genkey -v -keystore rounds-codex-upload.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

Store the password in your password manager. Then **Build → Generate Signed App Bundle** in Android
Studio, select that keystore, and upload the `.aab` to **Internal testing**.

**Only after that first upload** can App Links be finished, because the fingerprint has to be
Google's app signing key and it does not exist until Play creates it:

1. Play Console → **App integrity** → copy the **app signing key certificate** SHA-256.
2. Send it to me, or run it yourself:

```sh
cd ~/rounds-codex
```
```sh
node scripts/make_assetlinks.js <THE-SHA-256> ../rounds-codex-app/.well-known/assetlinks.json
```
```sh
node scripts/make_assetlinks.js --check ../rounds-codex-app/.well-known/assetlinks.json
```

Then that file has to be deployed to the live site, and `_headers` needs a
`Content-Type: application/json` line for it the same way the iOS AASA has one.

⚠ **Publishing the UPLOAD key's fingerprint instead produces a file that verifies against nothing,
and the failure is silent** — links simply open in Chrome. Both are valid SHA-256 strings, so no
checker can tell them apart.

---

## What is already done, so you do not redo it

| | |
|---|---|
| Android platform | generated by Capacitor 8.5.2, committed |
| targetSdk 36 | what Play requires for a new app — Capacitor 8 sets it |
| App Links filter | six prefixes, `roundscodex.com`, `autoVerify` — and `verify_routes.js` checks the real manifest |
| Launcher icons | all five densities, adaptive + round + legacy + monochrome |
| Splash | eleven sizes, brand mark on `#0B1120` |
| Asset packs | eleven modules wired into Gradle; only the assets are generated |
| Edge-to-edge | `plugins.SystemBars` — and the default would have shipped dark status icons on a dark app |
| Payload | 84.3 MB, `verify_ios_variant.js` 31/31 |
