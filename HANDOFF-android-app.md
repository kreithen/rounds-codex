# HANDOFF — Rounds Codex on Google Play (the Android app)

**Written 2026-09-09 to start this work in its own conversation.** Everything a new session needs
is here or named here. Do not run this from the main build conversation or the iOS conversation:
two sessions pushing one branch collide, and neither of those carries anything this needs.

**Branch: `claude/native-android-app`** in `kreithen/rounds-codex` (create it from
`origin/claude/native-ios-app`, not from `main` — the payload scripts live on the iOS branch and
have never been merged). Tell the new session the branch name explicitly; it will otherwise default
to the main build branch.

**One line:** the iOS app has been live since 2026-08-26 as a Capacitor shell around a no-wall build
of the web app with every gallery page and recording bundled. **Android is the same shell, the same
payload, a second platform folder in the same Capacitor project** — plus the things Google Play does
differently from Apple, which are the bulk of this document.

---

## 0. Read these first, in this order

All on `origin/claude/native-ios-app` unless noted. Read them with `git show origin/claude/native-ios-app:<path>`
or check the branch out.

| file | why |
|---|---|
| `HANDOFF-native-ios-app.md` | The iOS handoff. Same shape as this one; the constraint, the traps and the decisions all carry over. |
| `native/MAC-RUNBOOK.md` | **How the iOS app was actually built, step by step, with the bugs that were found on the Mac.** Steps 2–3 are the payload and the Capacitor project; Android reuses both. |
| `app-store-checklist.md` | The record of the iOS submission through to "LIVE — 2026-08-26", including Apple's Guideline 2.1 information request and how it was answered. The Play review will ask similar things. |
| `scripts/build_ios_payload.js` | The payload chain. Read the header: the order of the six patchers is load-bearing. |
| `scripts/build_ios_variant.js`, `scripts/verify_ios_variant.js` | The no-wall variant and its 28-check guard. Android ships the same variant. |
| `store-strategy.md` §3 | The only earlier discussion of Android. **Its TWA recommendation is superseded by §3 below** — read it for the three planning points, not the route. |
| `native/background-assets-plan.md`, `native/asset-packs.json`, `native/manifests/` | The 11 category asset packs (742 MB) that iOS v1 did *not* use. **Android needs them** — see §4.3. |
| `CLAUDE.md` (this branch) | Project-wide context; the service-worker section and "how to work here" apply. |
| `iphone-ultra-plan.md` (this branch) | Not Android work, but its verification matrix (widths 320–1133, mid-session resize) is the right one for Android tablets and foldables too. ON HOLD — do not start it. |

---

## 1. The constraint that shapes the project — same as iOS, with one Android twist

**A cloud session cannot build, sign, or upload an Android app either.** Checked 2026-09-09 from
this container: Gradle 8.14 and a JDK are installed and `maven.google.com` is reachable, but
**`dl.google.com` is blocked by the agent proxy** (returns nothing), and that is where the Android
SDK platforms and build-tools come from. No SDK, no `assembleRelease`, no AAB. Do not spend a
session trying to route around it.

So the split is exactly the iOS one:

**What a session CAN do — most of the engineering:**
- Generalise the payload chain from "iOS" to "native" and add the Android-specific patchers
  (§4.2), verified headless. **Chromium headless is a far better proxy for Android than it ever was
  for iOS**: Android WebView *is* Chromium. The one thing it cannot represent is the WebView version
  on a given phone.
- The `capacitor.config.json` additions, the `AndroidManifest.xml` intent filters as source, the
  `assetlinks.json` file for the web root, the Play Asset Delivery module layout as source.
- Every listing asset except device captures: feature graphic, screenshot panels at Play's ratio,
  listing text within Play's limits, the Data safety and Health declaration answers as a filled-in
  worksheet.
- The privacy-policy wording change that says "apps" instead of "iOS app" (§4.4).

**What only Dr. Kreithen can do, on the Mac:**
- Install Android Studio, `npx cap add android`, `cap sync`, build the signed bundle, upload.
- Create the Play Console account (and decide personal vs organisation — §4.1, the first thing).
- Run on an emulator or a physical Android device; read Play's pre-launch report.
- Play Console: listing, Data safety, Health declaration, content rating, testing tracks, release.

Write the session's output so the Mac steps are a short, ordered, copy-pasteable list, one command
per line (the runbook records why: `cap init`'s interactive prompt swallowed a pasted block).

---

## 2. State, verified 2026-09-09

- **iOS: Rounds Codex: Clinical Atlas 1.0 (build 4) is live on the App Store** (id 6802452599),
  free, no IAP, universal iPhone + iPad. Bundle id `com.roundscodex.app`, team `744JSM2Z3H`.
- **The Capacitor project exists only on the physician's Mac** (`~/rounds-codex-ios`, Capacitor 7.4,
  Swift Package Manager). It is in **neither repo**. A session cannot see `package.json`,
  `capacitor.config.json` as actually shipped, `ios/App/App/Info.plist`, or how Universal Links are
  routed into the app (`appUrlOpen` handling, if any). **§4.0 fixes this before anything else.**
- **Web app: v132** (`rounds-codex-app`, private, Netlify). No `android/`, no `assetlinks.json`.
  `/.well-known/apple-app-site-association` is live with six path prefixes: `/c/ /s/ /g/ /r/ /u/ /x/`.
  `_headers` gives it `Content-Type: application/json` explicitly; `assetlinks.json` will want the
  same line.
- **Payload: ~826 MB bundled** (`build_ios_payload.js` default), ~84 MB with `--asset-packs`, the
  difference being 11 category packs in `native/manifests/` totalling 742 MB. Those manifests were
  written for Apple Background Assets and never shipped; the *file lists* are what Android needs.
- **Capacitor 8.5.1 is current** (checked on npm 2026-09-09). Its Android template defaults to
  `compileSdk 36`, `targetSdk 36`, `minSdk 24`. The Mac project is on Capacitor 7 — see §4.5 for what
  that means for the target-API requirement.
- **Google Play account: unknown.** Nothing in either repo records one. Assume it does not exist.
- **Landing site** (`landing/` on `main`, live at roundscodex.com) links only to the App Store. It
  needs a Google Play badge and a second `downloadUrl` in the JSON-LD when the app is live — not
  before.

---

## 3. Decisions taken — and the one this document takes

| decision | status |
|---|---|
| **Capacitor Android, not a Trusted Web Activity.** | **Taken here, 2026-09-09 — confirm with the physician, do not reopen after.** Reasoning below. |
| No login wall in the app. The wall stays on the web. | Carried over from iOS (2026-08-14). |
| v1 is **free**, no IAP, no Play Billing. | Carried over. |
| "Download free now · Keep it free for life" is the public pitch (landing page, launch email). | Live. **Applies to Android installs too** — see §7 on grandfathering. |
| Ask Rounds Codex removed from the native build; "AI study tutor" phrase rewritten. | Carried over; the variant script does it. |
| Same package/bundle id: **`com.roundscodex.app`**. | Recommended — it is also the iOS id and Universal Links / App Links files will name it. Android package names must be unique per developer account, not per platform, so this is fine. |
| Attribution "designed by a team of clinicians"; "clinically reviewed" allowed, "peer-reviewed" forbidden. | Carried over. |
| Physician is the medical gate; no `verified:false` condition is flipped by a session. | Carried over. |

**Why Capacitor and not the TWA that `store-strategy.md` recommended.** That recommendation was
written before the iOS app existed and assumed the app *was* the live website. It is not, any more:

1. **The live site has a login wall; the app does not.** A TWA wraps the live origin, so it would put
   an invitation-only sign-in in front of every Play user and contradict the "no account, no data
   collected" position the iOS app was approved on. The no-wall build only exists as a payload.
2. **Offline is the product claim.** A TWA has only what the service worker cached; the iOS app has
   1,020 gallery pages and 31 recordings on disk from install. Two platforms with different offline
   stories is two products.
3. **Same shell, same scripts, same verifier.** The payload chain and its 28-check guard already exist.
   Capacitor Android is `npm i @capacitor/android && npx cap add android` on the project that already
   ships iOS, and everything the physician learned on the Mac transfers.
4. **Play's "webview wrapper" concern** (`store-strategy.md` was right that it exists) is answered the
   same way Apple's Guideline 4.2 was: bundled offline content, App Links, a real install footprint.

The cost is the size problem below, which the TWA would have dodged. It is worth paying.

---

## 4. The work, in order

### 4.0 First — put the Capacitor project under version control  *(Mac, 20 minutes; blocks everything)*

A session cannot add a platform to a project it cannot see. **Create a private repo
`kreithen/rounds-codex-native`** and push `~/rounds-codex-ios` to it, with `www/`, `node_modules/`,
`ios/App/App/public/` and any `android/app/src/main/assets/public/` ignored — `www/` is the 826 MB
payload and is rebuilt, never committed. Do **not** put it in `rounds-codex-app`: Netlify publishes
that repo's root, so a `native/` folder there would ship to the website. Do not put it in this public
repo either.

Then a session can `add_repo` it (`access:"push"`, one approval, per `CLAUDE.md`), read the real
`package.json` and `capacitor.config.json`, and commit the Android platform files as source for the
Mac to build. Until this is done, everything Android-side is a guess about a project nobody can read.

### 4.1 Second — the Play Console account  *(physician; the first Play-specific decision)*

- **Personal vs organisation is the decision to get right at signup.** Personal accounts created after
  13 Nov 2023 must run a **closed test with at least 12 testers opted in continuously for 14 days**
  (and Google now checks the testers actually used the app) before they can apply for production
  access. **Organisation accounts are exempt.** An organisation account needs a D-U-N-S number for
  Rounds Codex, Inc. and Google's business verification, which takes days to weeks. The Apple account
  is enrolled as Individual (see `app-store-checklist.md` §7 for why that was a mistake); the Play
  decision should be made deliberately, not by default.
- If personal: the 36-person launch list and the social followers are the tester pool. Plan an
  "Android beta" email to the list as the first message of the Android project; the closed test is
  14 days of calendar time that nothing else can shorten.
- $25 one-time fee. Play App Signing (Google holds the app signing key; you keep an upload key) is
  the default for new apps and should be accepted — the SHA-256 fingerprint App Links needs (§4.4)
  comes from it.

### 4.2 Third — generalise the payload chain  *(session · ~1 day · can start before 4.0)*

`build_ios_payload.js` already produces the tree Android should ship. What changes:

1. **Naming.** Either add `--platform ios|android` or rename to `build_native_payload.js` with
   the iOS name kept as an alias. Do not fork the script. The variant (`build_ios_variant.js`) is
   platform-agnostic already except for one string — see §4.4 — and its marker `RC_IOS_VARIANT`;
   leave the marker name, it is an implementation detail that 28 checks depend on.
2. **`fix_root_authority.js` stays in the chain and is inert on Android.** Capacitor Android serves
   from `https://localhost` (`androidScheme` default `https`, hostname `localhost`, read from the
   8.5.1 source), and Chromium normalises an authority-only URL to `https://localhost/` with the
   slash, so the `RC_ROOT` strip is safe there. Keep the guard anyway; it costs nothing and the
   verifier expects it.
3. **`fix_usmle_link.js` is still needed.** Capacitor's Android `WebViewLocalServer` routes any path
   without an extension back to the **root** `index.html` (read from the source), the same fallback
   as the iOS scheme handler — so `usmle/` would open the main app, not the USMLE page.
4. **Service worker: strip the registration in the native payload.** On iOS the custom scheme never
   ran it, so it was inert. **On Android it will run**: `Bridge.java` installs a
   `ServiceWorkerClient` and routes SW fetches through the local server
   (`resolveServiceWorkerRequests`, default on). Everything is already local, so the SW buys nothing
   and adds a second copy of the shell in Cache Storage that can outlive an app update — the classic
   "updated the app, still see old content" bug. Remove the `serviceWorker.register('sw.js')` call
   and `sw.js` itself from the payload, with a check in the verifier that
   `navigator.serviceWorker.controller` is null after load. Doing it for both platforms is correct
   and harmless.
5. **Safe areas / edge-to-edge is the Android analogue of the bug that shipped twice on iOS.**
   Targeting API 35+ makes edge-to-edge mandatory: the WebView extends under the status and
   navigation bars. `add_safe_area.js` relies on `env(safe-area-inset-*)`, which Android WebView
   populates **only** when the activity opts into display-cutout layout and `viewport-fit=cover` is
   set (the app sets it). Capacitor 7.x/8.x has an `android.adjustMarginsForEdgeToEdge` config
   option **[verify the exact name and version on the Mac's `npm ls`]**; if it is present, `"auto"`
   is the setting to try first. Expect this to be the first real-device bug, and give the physician
   the same two-line diagnostic the runbook has for iOS (is `#rc-safe-area` present; what does
   `getComputedStyle(.app).paddingTop` read).
6. **Verifier.** `verify_ios_variant.js` runs unchanged against the Android payload — same bytes,
   same origin model. Add the SW check from item 4. Keep the "does not seed a session" and
   "hit-tests the viewport centre" properties; they are why it is a guard and not decoration.

### 4.3 Fourth — size: Play forces the asset-pack decision iOS was allowed to skip  *(session designs, Mac builds)*

Apple's ceiling is 4 GB, so iOS v1 bundled everything. **Play caps the base module at 200 MB
compressed download size** — a hard limit on the upload, and separately any app whose total
install exceeds 200 MB shows users a size warning on mobile data. 826 MB in `assets/public/` does
not ship. The options:

| option | download | offline claim | work |
|---|---|---|---|
| **A. Play Asset Delivery, install-time packs** | one install, ~830 MB | **full, from install — same as iOS** | Gradle asset-pack modules; **the open question is whether Capacitor's local server can serve files from them** |
| B. Base app + `RC_MEDIA_ROOT` = public origin (stream) | ~85 MB | text yes, artwork/audio only online | one config string; `add_media_root.js` already does it |
| C. On-demand / fast-follow packs | ~85 MB then background | full after packs land | needs the Play Core API from JS — a native plugin, not v1 |

**Recommendation: A, with B as the verified fallback.** The 11 category manifests in
`native/manifests/` (≤ ~100 MB each, 742 MB total) map directly onto install-time packs — the
combined install-time limit is **1 GB** (Play documents 1 GB for install-time packs, 2 GB for all
packs, 100 packs max), so 742 MB fits today with ~250 MB of headroom. Content grows; note the margin
in the listing checklist.

**The experiment that decides it:** install-time packs are delivered as split APKs and their files
are visible through Android's `AssetManager` alongside the base app's assets. Capacitor's
`WebViewLocalServer` serves `www/` from `assets/public/` through that same `AssetManager`. **If a
pack's files are laid out as `assets/public/assets/<gallery-id>/…` inside the pack module, the
server should find them with no code change** — but nobody has tried it, and Android Studio is the
only place it can be tried. Write the pack modules as source (a session can), then the Mac test is:
build, install on an emulator, open a gallery in Airplane Mode. If it fails, ship B for v1 and
record why.

Under A the payload chain runs with `--asset-packs` (already implemented: it strips the pack files and
warns if the plan is stale) and a new step writes the pack modules from the manifests.

### 4.4 Fifth — App Links, privacy wording, listing surfaces  *(session; small)*

- **`/.well-known/assetlinks.json`** on roundscodex.com, listing `com.roundscodex.app` with the
  SHA-256 of the **Play App Signing** key (from Play Console → App integrity, available only after
  the first upload — so the order is: upload once, read the fingerprint, deploy the file, then
  verify). Add the `Content-Type: application/json` line to `_headers` like the AASA. Deploying to
  the app repo **requires asking** (`CLAUDE.md`); take the version number from
  `git show origin/main:version.txt`.
- **Intent filters** for the six prefixes, `android:autoVerify="true"`, on `roundscodex.com` only.
  Whatever the iOS project does with `appUrlOpen` to hand `/c/<id>` to the router — find out in
  §4.0 — the same listener fires on Android.
- **Privacy policy wording.** The iOS variant writes the sentence *"the iOS app has no account at all
  and we hold nothing"* into the in-app privacy page (`build_ios_variant.js` around line 228) and the
  verifier regex matches *"the website and the iOS app"* (line ~159, and the assertions near 397).
  The public `/privacy/` page, generated from `RC_LEGAL` by `build_legal_pages.js`, says the same.
  Change all of them to **"the iOS and Android apps"** in one commit, web and variant together — the
  variant *anchors* on the shipped wording and aborts if it drifts, which is the right behaviour and
  the reason to do both sides at once. Never hand-edit `privacy/index.html`; the generator refuses
  `onclick`/`href="#"`, and that guard is working if it throws.
- **`manifest.webmanifest`** still says "AI study tutor" on the web (correct there); the variant
  rewrites it in the payload. Nothing to do.

### 4.5 Sixth — the Mac runbook for Android  *(session writes it; physician runs it)*

Write `native/ANDROID-RUNBOOK.md` in the shape of `MAC-RUNBOOK.md`. The skeleton, marked ⚠ where a
container could not verify:

1. Android Studio (current), with its bundled JDK and SDK; accept the SDK licences.
2. In the Capacitor project: `npm i @capacitor/android@<same major as @capacitor/core>` — one line,
   then `npx cap add android`, then `npx cap sync android`, then `npx cap open android`. One
   command per line, Return after each (the `cap init` lesson).
3. **Target API.** Since 31 Aug 2026 new apps must target **Android 16 / API 36**. Capacitor 8's
   template does; **Capacitor 7's template may set 35** ⚠ — open `android/variables.gradle` and make
   sure `targetSdkVersion` and `compileSdkVersion` read `36`. This is a one-line edit, and Play will
   reject the upload rather than warn if it is wrong. (Upgrading the whole project to Capacitor 8
   also touches the shipped iOS project — a bigger change than this needs.)
4. `applicationId com.roundscodex.app`, `versionCode 1`, `versionName 1.0.0`. `versionCode` must
   increase on every upload, forever; record it in `version.txt`'s label the way the iOS build number
   is.
5. Asset-pack modules per §4.3 (or the `RC_MEDIA_ROOT` fallback).
6. `capacitor.config.json`: keep `"server": {"iosScheme": "capacitor"}`; add nothing for Android
   unless the edge-to-edge option (§4.2 item 5) is needed. `cap sync android` after any change.
7. Build → Generate Signed Bundle → **AAB**. Create the upload keystore once, **back it up outside
   the Mac**, never commit it. Enrol in Play App Signing on first upload.
8. Emulator (a Pixel with Play Services) and, if available, a real device: cold start, Airplane
   Mode, open a gallery, take a quiz, tap a `roundscodex.com/c/dvt` link from another app.
9. Upload to **internal testing** first; read the **pre-launch report** — Play runs the app on real
   devices and reports crashes, accessibility and rendering issues for free. Then closed testing
   (if the account requires it), then production.

### 4.6 Seventh — the listing  *(session drafts; physician enters)*

- **Title** ≤ 30 chars: "Rounds Codex: Clinical Atlas" (28). **Short description** ≤ 80. **Full
  description** ≤ 4,000 — port the App Store text; Play allows a little more formatting.
- **Counts, as of 2026-09-09:** 183 conditions · 25 specialties · 102 galleries / 1,020 pages ·
  1,000+ illustrations · 2,900+ questions · 300 drugs · 31 recordings · 10 calculators. Re-read from
  shipped content before submitting; every earlier document's numbers went stale.
- **Screenshots: Play's ratio is different.** Max aspect **2:1**; the App Store finals are 1290×2796
  (2.17:1) and **will be rejected**. Re-render the same 7-panel design at **1080×1920** (9:16) for
  phones; 7" and 10" tablet sets optional. **The screenshot template (`ss/appstore2.html`) lived in a
  session scratch directory and did not survive the container reset** — the design is documented in
  `native/SCREENSHOT-SHOTLIST.md`, the committed social templates in `landing/social-*.html` carry
  the same visual system, and the physician has the seven final PNGs plus the raw captures. Ask for
  the captures and rebuild; do not crop the iOS finals. Frameless or generic-Android-framed captures,
  not iPhone frames.
- **Feature graphic 1024×500** is required (JPEG/PNG, no alpha). Derive from `landing/social-*.html`.
- **App icon 512×512 PNG.** The iOS icon set has it.
- **Category:** Medical or Education — Medical matches the App Store listing (Medical primary,
  Education secondary) but triggers the health review path; either is defensible, pick one and
  keep it. **Content rating:** IARC questionnaire; the iOS answer was 16+ for medical content.
- **Data safety:** "no data collected, no data shared" is true of the payload **only if** §4.2 item 4
  and the Ask removal hold — the variant already cuts the Supabase URL and the Netlify function
  call. Verify against the actual payload with the off-origin request check `verify_ios_variant.js`
  already makes. Privacy policy URL: `https://roundscodex.com/privacy/` after §4.4.
- **Health apps declaration** (required for every app since Aug 2025; Jan 2026 added a medical-device
  labelling question): the app is an educational reference, not a medical device, does not use
  Health Connect, does not offer diagnosis or treatment, gates first use with a medical disclaimer.
  The Guideline 1.4.1 reasoning about the dosage calculators in `app-store-submission-draft.md`
  transfers word for word.
- **Contact email** shown publicly on Play: use the support address, not a personal one.

### 4.7 Last — landing site and launch  *(session; only after the app is live)*

Google Play badge next to the App Store badge on `landing/index.html` (official badge, and it must
not be altered), second `downloadUrl`/`installUrl` in the `SoftwareApplication` JSON-LD,
`operatingSystem` updated, `llms.txt` updated, a Play-specific social set from the existing
templates, and an Android launch email to the list. None of it before the store page resolves.

---

## 5. Traps that carry over — verbatim from iOS, still true

- **`file://` does not work.** The content loader uses `fetch`. Serve over the Capacitor origin.
- **Do not add a second `<base>` tag.** The head script decides it from `RC_ROOT`.
- **Any new one-segment route** goes into the `RC_ROOT` regex, `RC_OPEN_ROUTES`, `_redirects`, the
  AASA **and now `assetlinks.json` + the Android intent filters**. Five places, one omission = a
  dead link on one platform.
- **Never clone a navigation response in `sw.js`** — moot in the native payload once registration is
  stripped, still binding on the web. `node scripts/verify_sw.js` before touching it.
- **A fresh context hits `#rc-gate`** (the medical disclaimer). Tests that tap must dismiss it;
  `scripts/rc_test_auth.js` seeds a session — **except in the variant verifier, which must not**.
- **The live site is unreachable from a container.** Verify deploys with `git show origin/main:…`
  and the physician opening `/version.txt`. Never make a deploy's confirmation depend on a connector.
- **The Mac's clone may be stale.** `add_safe_area.js` was missing from a build because the clone had
  not been pulled and every command still "worked". Two greps (in the runbook) settle it; put the
  Android equivalents in the Android runbook.
- **`cap sync` after every change**, or Android Studio rebuilds and reinstalls yesterday's bytes.
- **Do the patching in one language** (JS). Emoji in `index.html` make Node and Python string offsets
  disagree.

---

## 6. What NOT to do

- **Do not build a TWA.** Decided in §3; the reasons will not change.
- **Do not build Play Billing, a paywall, or a subscription.** v1 is free. The billing integration is
  a separate submission with separate scrutiny, and the grandfathering design (§7) has to exist first.
- **Do not fork the web app for Android.** One source, one payload chain, platform flags.
- **Do not touch the iOS project's structure** beyond what `cap add android` does. iOS 1.0 (4) is
  live; the next iOS build is its own decision.
- **Do not start the iPhone Ultra plan.** ON HOLD by the physician's instruction (2026-09-09).
- **Do not deploy to the app repo or the landing site without asking.** Standing rule.
- **Do not commit the upload keystore, `www/`, or any generated payload** to any repo.
- **Do not flip any `verified:false` condition.** The physician is the medical gate.

---

## 7. Open state to carry over

- **Grandfathering has no Android design.** The public promise is "download free now, keep it free
  for life". On iOS the plan is `AppTransaction.originalAppVersion`; **Play Billing has no
  equivalent**. Options, none chosen: (a) a Play *product* — a free, one-time "founder" in-app item
  granted to early installs, whose ownership Play Billing can query later; (b) a locally stored
  install stamp (does not survive reinstall — weak); (c) an account, which contradicts everything
  else. This must be decided **before** the paid launch, not before v1. Early *web* users are a
  further, separate gap (`app-store-checklist.md`).
- **Apple's Guideline 2.1 information request** (`app-store-checklist.md`) asked for a screen
  recording and a long written answer about the app's account model and content. Keep the recording;
  Play may ask for the same thing under its "login credentials for review" and health-app checks.
- **Launch email** to the 36-person list is drafted in the admin dashboard (campaign
  `92cb3898-4ac8-47fd-8962-362655ed203d`, status draft) and has not been sent as of this writing.
  If it goes out before Android exists, the Android beta email is a second campaign.
- **Play account type** is undecided and is the schedule's critical path (§4.1).
- **Capacitor project version control** (§4.0) is the technical critical path.
- Counts and the seven screenshot captures: ask the physician; rebuild rather than crop.
