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
- Apple Developer Program membership active under **Rounds Codex, Inc.**
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

**⚠ One thing to settle before submission.** The Apple Developer app shows the membership under a
personal name with "1 year membership", which is what an **Individual** enrollment looks like —
while `app-store-checklist.md` records it as **Organization — Rounds Codex, Inc.** The App Store
shows the seller name to buyers, and the checklist wants it matching the `© 2026 Rounds Codex, Inc.`
on all 1,020 illustration pages and the trademark applicant. Check **Entity Type** at
developer.apple.com/account → Membership details. Switching Individual → Organization is a support
request to Apple needing a D-U-N-S number, not a setting, so it is worth knowing early rather than
at submission.

## 2. Build the web payload

One command. It copies the tree, runs the three patchers in order, strips everything the asset packs
carry, drops everything the app cannot reach, and checks the size.

```sh
cd rounds-codex
rm -rf /tmp/rc-payload
node scripts/build_ios_payload.js ../rounds-codex-app /tmp/rc-payload --version v1.0.0-ios
node scripts/verify_ios_variant.js /tmp/rc-payload      # expect: all 28 checks pass
```

Expect **≈84 MB, ~1,300 files**. The script warns if it is far off, which means the pack plan and
the tree have diverged — regenerate with `scripts/plan_asset_packs.js --manifest native/asset-packs.json`.

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

## 4. Xcode: targets, signing, capabilities

In the `App` target:

1. **General → Supported Destinations** — keep iPhone **and** iPad.
2. **Signing & Capabilities** — team **Rounds Codex, Inc.**, automatic signing.
3. **+ Capability → Associated Domains**, add `applinks:roundscodex.com`.
4. **+ Capability → Background Assets.** ⚠ I could not verify whether Apple-hosted packs also
   require a separate **downloader extension target**; developer-forum threads describe an app group
   shared between the app and such an extension, and the managed path may not need one. Settle this
   before writing any Swift — it changes the project layout.
5. **Info.plist**:
   - `NSAppTransportSecurity` — leave default. Everything is HTTPS.
   - `UISupportedInterfaceOrientations~ipad` — all four.
   - No camera, microphone, location or photo-library keys. The app uses none, and an unused
     purpose string invites a question you have no reason to answer.

## 5. The seam — the one genuinely uncertain piece

Pack files land in a container directory. **A `WKWebView` will not load them from a `file://` path
inside a page served from Capacitor's scheme.** Bridge it with a `WKURLSchemeHandler` (or Capacitor's
local server) that maps a media path onto the pack directory, and hand the web layer its base:

```swift
// Must run BEFORE index.html parses -- RC_MEDIA_ROOT is read at parse time.
// A post-load assignment is too late and the app will resolve media as if no pack existed.
let js = "window.RC_MEDIA_ROOT='\(mediaBaseURL.absoluteString)';"
let script = WKUserScript(source: js, injectionTime: .atDocumentStart, forMainFrameOnly: true)
webView.configuration.userContentController.addUserScript(script)
```

**Do not set `RC_MEDIA_ROOT` at all until a pack is actually present.** With it unset the app
resolves media exactly as the website does; with it set to a path that has nothing behind it, every
gallery page takes the two-stage fallback before recovering. Unset is faster and identical in effect.

If the seam misbehaves, the app degrades to streaming from `roundscodex.com` rather than showing
broken images — that fallback is built and verified. ⚠ It has never run on WebKit; no macOS and no
Safari in a container.

## 6. Asset packs

```sh
cd ../rounds-codex-app          # fileSelectors are relative to HERE
xcrun ba-package template       # ⚠ diff against native/manifests/*.json before trusting them
sh ../rounds-codex/native/manifests/package-all.sh
```

Eleven archives in `./asset-packs/`, 741.9 MB total, largest `rc-cardiac` at 148.2 MB.

⚠ The manifests declare `"platforms": ["iOS"]`. iPad runs iOS apps and I believe that covers it, but
I could not confirm iPadOS is not a separate string — check the template output.

Then in App Store Connect: upload the packs, and **submit them for App Review separately from the
build**. They version independently of app builds afterwards, so content updates do not need a new
binary.

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
- **Screenshots** — 6.9" iPhone and 13" iPad, at least 6 each. The eight shots and captions are in
  the draft. Guideline 2.3.3: they must be the real app.

## 9. Before you press submit

- **Airplane Mode, cold, on a real device.** Offline is the main claim and nothing in a container
  can test it. Force-quit, enable Airplane Mode, launch: library, a condition, a quiz, a calculator,
  a gallery with its pack downloaded, and one with it not (should stream — or fail gracefully with
  no network, which is the expected behaviour, not a bug).
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
| Galleries show broken images | The seam (step 5). Unset `RC_MEDIA_ROOT` to confirm the app is otherwise fine. |
| A patcher aborts with "expected exactly 1 occurrence" | The web app's wording changed under it. That is the anchor doing its job — fix the script, never loosen the anchor. |
