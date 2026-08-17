# The Mac runbook — from a clone to a submitted app

**Written 2026-08-17.** Everything that cannot be done from a cloud session, in order, with the
commands. The web side is finished and live at v128; this is the rest.

Read `native/background-assets-plan.md` for *why* the shape is what it is. This file is *how*.

**Decisions already taken — do not reopen:**

| | |
|---|---|
| Bundle identifier | **`com.roundscodex.app`** — permanent, already in the deployed AASA |
| Devices | **Universal — iPhone and iPad** |
| Minimum iOS | **Support below 26 and stream**; asset packs are iOS 26+, and `RC_MEDIA_ROOT` falls back to the public origin underneath |
| Login wall | **None on iOS.** Web keeps it |
| Ask Rounds Codex | **Removed from iOS.** Web keeps it |
| Price | Free, no IAP, no Restore Purchases in v1 |

**Marked ⚠ where I could not verify something from a container.** Those are the places to read the
real documentation rather than trust this file.

---

## 0. Before you start

- Xcode, current release. `xcode-select -p` should print a path.
- Node 18+.
- Apple Developer Program membership active. ⚠ It is enrolled as **Individual**, not Organization — see step 1 and `app-store-checklist.md` §7.
- Both repos cloned. The build repo is `kreithen/rounds-codex`, branch `claude/native-ios-app`.

```sh
git clone https://github.com/kreithen/rounds-codex.git
cd rounds-codex && git checkout claude/native-ios-app
git clone https://github.com/kreithen/rounds-codex-app.git ../rounds-codex-app
```

## 1. ~~Identifiers and the AASA~~ — DONE, v129, 2026-08-17

Team **`744JSM2Z3H`**, bundle **`com.roundscodex.app`**. The live Universal Links file carries
`744JSM2Z3H.com.roundscodex.app` and the placeholder marker is gone. Nothing to do here.

Those two strings are what step 4 needs for Associated Domains and signing.

**⚠ CONFIRMED 2026-08-17: the account is enrolled as Individual, not Organization.** The checklist
had recorded Organization since 2026-08-14 and it was never verified. It does not block submission,
but the seller name buyers see will be the individual's legal name rather than Rounds Codex, Inc. —
which is not what the `© 2026 Rounds Codex, Inc.` on 1,020 illustration pages, the in-app footer and
the App Store Copyright field say. Full detail and the switching process: `app-store-checklist.md` §7.
The lead time is the risk, not the work — file the request early even if you decide later not to
wait for it.

## 2. Build the web payload

One command. It copies the tree, runs the three patchers in order, strips everything the asset packs
carry, drops everything the app cannot reach, and checks the size.

```sh
cd rounds-codex
rm -rf /tmp/rc-payload
node scripts/build_ios_payload.js ../rounds-codex-app /tmp/rc-payload --version v1.0.0-ios
node scripts/verify_ios_variant.js /tmp/rc-payload      # expect: all 28 checks pass
```

Expect **≈826 MB** — v1 bundles all the artwork and audio (see steps 5 & 6). The script warns if
the total is far off, which means the resolved file set and the tree have diverged.

`verify_ios_variant.js` needs `RC_PW=<dir containing node_modules/playwright-core>` and Chromium. If
you would rather not install Playwright on the Mac, skip it — it already passed here on the same
bytes, and step 9 tests the real thing on a real device.

## 3. Capacitor project

```sh
mkdir -p ~/rounds-codex-ios && cd ~/rounds-codex-ios
npm init -y
npm i @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "Rounds Codex" com.roundscodex.app --web-dir=www
rsync -a --delete /tmp/rc-payload/ www/
npx cap add ios
npx cap sync ios
npx cap open ios
```

**Run these one at a time, not as one pasted block.** `cap init` asks an interactive question
("Create free Ionic account?") and it SWALLOWS whatever was pasted behind it — the config write,
the rsync and `cap add ios` all vanished into that prompt on the first run. A pasted block also
leaves its last line sitting un-executed on the prompt with no Return after it, which is how
`npx cap sync ios` silently did not run and the app was tested twice against stale bytes.

**Capacitor 7 uses Swift Package Manager, not CocoaPods** (verified 2026-08-17, Capacitor 7.4 /
`capacitor-swift-pm` 8.5.0). Nothing to install; `cap add ios` writes `Package.swift` itself.

**After ANY change to the payload the sequence is rsync → `npx cap sync ios` → ▶.** rsync alone
updates `www/` and nothing else; `cap sync` is what copies `www/` into `ios/App/App/public`.
Xcode will happily rebuild and relaunch the previous content.

`capacitor.config.json` needs one addition — the app must be reachable over a real origin, because
**`file://` does not work**: the content loader uses `fetch`, and off disk the app shows "Content
didn't load" with no page error. This is the single most likely "the app is blank" cause.

```json
{
  "appId": "com.roundscodex.app",
  "appName": "Rounds Codex",
  "webDir": "www",
  "server": { "iosScheme": "capacitor" },
  "ios": { "contentInset": "always" }
}
```

## 3b. Run it before configuring anything — CONFIRMED WORKING 2026-08-17

Xcode 26.6 ships with **no simulator runtime**. The toolbar says `iOS 26.5 Not Installed`. The
`Get` button works but shows no progress anywhere obvious; `xcodebuild -downloadPlatform iOS`
does the same download with a percentage in the terminal. ~8 GB. `xcrun simctl runtime list`
prints `(Ready)` when it lands.

The device list is the **iPhone 17** family, not 16 — **iPhone 17 Pro Max** is the 6.9" device to
use for the required screenshots.

**One real bug was found the moment it ran, and it could only have been found here.**
`RC_ROOT` is computed by stripping the last path segment off `location.href`. Every URL the
website is served at has a path, so the strip is safe there. Capacitor's WKWebView loads the page
at **`capacitor://localhost` with no trailing slash**, so the strip ate the HOST:

    [location.href, location.origin, RC_ROOT, base.href]
    ["capacitor://localhost", "capacitor://localhost", "capacitor://", "capacitor://"]

`<base>` became `capacitor://`, every relative fetch resolved to `capacitor:///content/*.json`,
and that is a **different origin** — WebKit blocked all eight content files as cross-origin and
the app painted its shell over "Content didn't load". Fixed by `scripts/fix_root_authority.js`,
now the second step of the payload chain, guarded by `scripts/verify_root_authority.js` (which
fails on the pre-fix tree, printing the same `capacitor://`).

Diagnosis route worth reusing: the loader writes the real reason into `#screen`, so **dismiss the
disclaimer and read the page** before anything else — it said "Load failed", which is WebKit for
*the request never completed*, not a 404. Then Safari → Settings → Advanced → "Show features for
web developers" → **Develop → Simulator → <device> → App** gives a full Web Inspector on the
WKWebView, which is where the three-slash URL was visible. That console is the tool for every
WebKit question this project has been unable to answer from a container.

## 4. Xcode: targets, signing, capabilities

In the `App` target:

1. **General → Supported Destinations** — keep iPhone **and** iPad.
2. **Signing & Capabilities** — team `744JSM2Z3H`, automatic signing. (The team displays under the individual's name, not Rounds Codex, Inc. — see step 1.)
3. **+ Capability → Associated Domains**, add `applinks:roundscodex.com`.
4. **No Background Assets capability, and no downloader extension.** v1 bundles all the media, so
   there is nothing to download and nothing to declare. The ⚠ that used to sit here — whether
   Apple-hosted packs need a separate extension target — no longer has to be answered.
5. **Info.plist**:
   - `NSAppTransportSecurity` — leave default. Everything is HTTPS.
   - `UISupportedInterfaceOrientations~ipad` — all four.
   - No camera, microphone, location or photo-library keys. The app uses none, and an unused
     purpose string invites a question you have no reason to answer.

## 5 & 6. ~~The seam~~ and ~~asset packs~~ — NOT IN v1 (decision, 2026-08-17)

**v1 bundles every gallery page and every recording in the app: ~826 MB of payload, an App Store
download of roughly that, against Apple's 4 GB ceiling.** `RC_MEDIA_ROOT` stays unset, so media
resolves exactly as it does on the website — from the bundle, offline, on every supported iOS
version rather than only 26+.

That removes, in one decision, the three pieces of this build that had never been verified: the
`WKURLSchemeHandler` seam between a WKWebView and a pack container, the downloader-extension
question, and packs going through App Review separately from the binary. **No Swift is needed for
media at all.** There is nothing to write here.

What it costs, stated plainly: changing one illustration now means a new binary and a new review.
That is the trade that was chosen, not an oversight.

Everything for the pack route is still in the repo and still current if it is ever wanted:
`scripts/plan_asset_packs.js`, `scripts/build_asset_pack_manifests.js`, `native/manifests/`, and
`build_ios_payload.js --asset-packs`, which restores the stripping. `native/background-assets-plan.md`
carries the design.

## 7. Archive and upload

1. Set the version to **1.0.0**, build **1**.
2. Any Device (arm64) → **Product → Archive**.
3. Organizer → **Distribute App** → App Store Connect → Upload.

## 8. App Store Connect

Copy is drafted and current in `app-store-submission-draft.md` — counts refreshed 2026-08-17,
attribution is the plural framing, and nothing promises an AI tutor.

- **Name / Subtitle / Keywords / Description / Promotional Text** — paste from the draft.
- **Support URL** `https://roundscodex.com/support/` · **Privacy Policy URL** `https://roundscodex.com/privacy/`
- **Copyright** `© 2026 Rounds Codex, Inc.`
- **Privacy label: Data Not Collected.** True of this binary — Ask was the only thing that
  transmitted anything and it is gone from the iOS build.
- **Age rating** ⚠ Medical/Treatment Information. Apple revised the tiers in 2025; read the current
  questionnaire rather than a remembered band.
- **Export compliance** — HTTPS only, standard exemption, but the question must be answered.
- **App Review notes** — paste verbatim from the draft. The Guideline 1.4.1 answer on the dosage
  calculator is good as written.
- **Sign-in required: No.**
- **Screenshots** — 6.9" iPhone and 13" iPad. **`native/SCREENSHOT-SHOTLIST.md`** has all eight
  with the exact navigation, the simulator status-bar command, and the four things not to
  photograph. Shot 6 (the review card) is the only one that needs setting up in advance.

## 8b. One command before you archive

```sh
RC_PW=<dir with node_modules/playwright-core> sh scripts/preflight.sh ios ../rounds-codex-app
```

Builds the payload and runs every guard against **the bytes that go in the bundle**, not the ones
they came from: service worker, fonts, the full app end-to-end, the iOS variant's 28 checks, the
shipped counts, and whether the asset pack plan still matches the tree. One pass/fail summary.

Without `RC_PW` the browser suites are **skipped and reported as skipped** — which is not the same
as green, and the script says so rather than printing a clean bill.

`sh scripts/preflight.sh web ../rounds-codex-app` is the same thing for the website, and adds the
version/copyright, legal-page and AASA checks that only apply there.

## 9. Before you press submit

- ~~**Airplane Mode, cold, on a real device.**~~ **PASSED 2026-08-17** — iPhone 16 Pro Max, iOS
  26.6: force-quit, Airplane Mode, relaunch, full-size gallery page rendered. Re-run it against the
  final archive rather than treating this as settled for every future build. Offline is the main claim and nothing in a container
  can test it. Force-quit, enable Airplane Mode, launch: library, a condition, a quiz, a calculator,
  and a gallery — including opening a full-size page, which in v1 is in the bundle and must render
  with no network at all. If any gallery page is blank offline, the payload lost files it should
  have kept.
- **Tap a `/c/<id>` link** from Messages with the app installed. It should open in the app. If it
  opens Safari, the AASA appID is wrong (step 1) or Associated Domains is missing (step 4).
- **First run** — the medical disclaimer must appear before any content, and its accept button must
  actually be tappable.
- **My account** — no "Signed in", no Sign out, no Delete my account, and "Clear my saved data" works.
- **Three conditions still carry `verified:false`** — `metabolic-syndrome`, `hip-fracture`,
  `back-pain`. Review them so the RC VERIFIED badge is uniform under a "clinically reviewed" claim.

## 10. After approval

- Ask me to remove `noindex` when the copyright filing is ready — it very likely starts the §412
  window and that never reopens.
- Core Spotlight indexing of the 183 conditions is the highest-value remaining Guideline 4.2 signal
  and is a normal update, not a v1 blocker.

---

## If it goes wrong

| symptom | cause |
|---|---|
| Blank app, or "Content didn't load" | Served from `file://`. Check `iosScheme` (step 3). |
| Every `content/*.json` 404s | A second `<base>` tag, or a new one-segment route missing from the `RC_ROOT` regex. |
| "WebKitBlobResource error 1." on returning to a backgrounded tab | The service worker cloned or failed to drain a navigation body. Read the `sw.js` section of `CLAUDE.md` and run `node scripts/verify_sw.js`. It has shipped four times. |
| Universal Links open Safari | Wrong appID in the AASA, missing Associated Domains, or Apple's CDN still serving the old file. |
| Galleries show broken images | The payload was built with `--asset-packs` (which strips the artwork) or `cap sync` was not run after rebuilding it. v1 must carry the media. |
| A patcher aborts with "expected exactly 1 occurrence" | The web app's wording changed under it. That is the anchor doing its job — fix the script, never loosen the anchor. |
