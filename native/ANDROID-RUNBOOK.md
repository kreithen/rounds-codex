# The Android runbook — from the payload to a published app

**Written 2026-09-09.** Everything that cannot be done from a cloud session, in order, with the
commands. The payload chain is finished and two-platform (`HANDOFF-android-app.md` §4.2); this is
the rest.

Read `HANDOFF-android-app.md` for *why* the shape is what it is. This file is *how*. It is the
sibling of `native/MAC-RUNBOOK.md`, which did this for iOS — read that one too, because the steps
it records as costly the first time (the pasted-block trap, the stale clone, `cap sync`) all
repeat here.

**Decisions already taken — do not reopen:**

| | |
|---|---|
| Package id | **`com.roundscodex.app`** — the same string as the iOS bundle id, which is fine; Android package names must be unique per developer account, not per platform |
| Shell | **Capacitor, not a Trusted Web Activity** (`HANDOFF-android-app.md` §3) |
| Login wall | **None in the app.** Web keeps it |
| Ask Rounds Codex | **Removed from the app.** Web keeps it |
| Service worker | **Removed from the payload**, both platforms (§4.2 item 4) |
| Price | Free, no IAP, no Play Billing in v1 |

**Marked ⚠ where I could not verify something from a container.** Those are the places to read the
real documentation rather than trust this file.

**What a container CAN and cannot see, checked 2026-09-09 rather than assumed:** `dl.google.com`
returns `CONNECT tunnel failed, response 403` through the agent proxy, so there is no Android SDK
here and never will be — no `assembleRelease`, no AAB, no emulator. `maven.google.com` is
reachable, Gradle 8.14.3 and JDK 21 are installed, and `ANDROID_HOME` is unset. **But the npm
packages are readable**, and most of what follows was read straight out of the shipped
`@capacitor/android` and `@capacitor/cli` tarballs rather than remembered. Where a fact came from
that source it says so.

---

## 0. Before you start

- **Android Studio**, current release, with its bundled JDK. Accept the SDK licences on first run.
- **Node 22 or newer.** ⚠ Not optional if you go to Capacitor 8 — `@capacitor/cli@8` declares
  `engines.node >= 22.0.0` (7 declares `>= 20.0.0`). Read from both packages.
- Both repos cloned, plus the native project once §4.0 is done.

```sh
git clone https://github.com/kreithen/rounds-codex.git
cd rounds-codex && git checkout claude/native-android-app
git clone https://github.com/kreithen/rounds-codex-app.git ../rounds-codex-app
```

**Pull before you build.** The iOS build shipped to App Store Connect twice missing
`add_safe_area.js` because the Mac's clone was stale and every command still looked like it worked.
That is the single most expensive boring mistake in this project's history.

## 1. The Play Console account — do this first, it has the longest lead time

$25, one time. **The account type is the schedule's critical path and cannot be changed later
without starting over.**

- **Personal accounts created after 13 Nov 2023 must run a closed test with at least 12 testers
  opted in continuously for 14 days** — and Google now checks the testers actually opened the app —
  before they may even *apply* for production access. That is 14 days of calendar time nothing can
  shorten, on top of the application review.
- **Organisation accounts are exempt**, but need a D-U-N-S number for Rounds Codex, Inc. and
  Google's business verification, which takes days to weeks.

Either way it is waiting; the difference is which kind and when it starts. The Apple account is
enrolled as Individual and `app-store-checklist.md` §7 records why that was a mistake — the seller
name buyers see is not the name on the copyright line. **Do not repeat it by defaulting here.**

**Accept Play App Signing** (Google holds the app signing key, you keep an upload key). It is the
default for new apps, and the SHA-256 fingerprint that App Links need in step 7 comes from it.

If the account is Personal, the 36-person launch list and the social followers are the tester pool,
and an "Android beta" email is the first message of the Android project rather than the last.

### 1a. What the Organisation signup form actually asks for

From Play Console Help, *Required information to create a Play Console developer account*
(read 2026-09-10). Gather these before starting, because the form verifies as you go.

**From the linked Google payments profile** — and these must match the **Dun & Bradstreet** profile
exactly, or the account's standing suffers:

| field | value |
|---|---|
| D-U-N-S number | **`148718973`** — obtained 2026-09-11, see §1c |
| Organization name | Rounds Codex, Inc. |
| Organization address | as registered with D&B |

**Entered directly:**

| field | shown publicly on Play? | value |
|---|---|---|
| Developer name | **yes** (changeable any time) | `Rounds Codex` |
| Organization phone number | no — used to verify the org | the number a public registry would list |
| Organization website | no | `https://roundscodex.com` |
| Contact name | no | |
| Contact email address | **no** | Google uses this to reach you |
| Contact phone number | **no** | |
| Developer email address | **YES** | **use the support address, not a personal one** |
| Developer phone number | **YES** | |

**Four of those are verified by one-time password during signup and must stay working for the life
of the account** — contact email, contact phone, developer email, developer phone.

### 1b. Two things to settle BEFORE typing, because they end up public

- **Google displays the organisation's legal name AND full legal address on Google Play.** That is
  broader than a personal account, which shows only the country unless you monetize. Whatever
  address is registered for Rounds Codex, Inc. with D&B is the address on the store page. If that is
  a home address, decide now rather than after it is live.
- **The developer email and phone are public too.** Use the support address and a number you are
  happy to publish — the same decision the listing draft already makes for the app's contact email.

### 1b-2. WHICH Google account creates it — decide before clicking Continue

The signup flow warns if you are using a personal Google account and recommends one on the
organisation's own domain, because it reduces the number of verifications. It is right, and there is
a bigger reason it does not mention: **the Google account that creates the Play account becomes its
OWNER**, and moving ownership afterwards is a Google support process, not a setting.

roundscodex.com already carries mail — `teacher@`, `admin@` and `hello@` all appear in this project
— so the cheap option is available.

| option | cost | what you get |
|---|---|---|
| **A. A free Google account on an existing roundscodex.com mailbox** | free | Satisfies the domain nudge, ten minutes, no DNS changes |
| B. Google Workspace on roundscodex.com | ~$7/user/month | A managed org: admin console, recoverable and transferable accounts |
| C. Keep the personal iCloud address | free | Works, but company assets sit on a personal identity and Google asks for more verifications |

**A is the recommendation for a one-person company mid-launch.** Create the account at
accounts.google.com → Create account → *For my personal use* → **"Use your existing email"**, with a
ROLE address such as `play@roundscodex.com`, never a person-named one. Google emails a code to it.

**The trap:** an address already linked to another Google account cannot be used for a new one. If
roundscodex.com's mail runs through iCloud+ Custom Email Domain and one of these addresses is
already an alternate on the existing Google account, that address is spent — make a fresh alias.

**Workspace's catch, if you go that way:** verifying the domain is a DNS TXT record, which is
harmless, but *using* Workspace mail means repointing MX away from wherever roundscodex.com's mail
lives today. Do not move a working mailbox during a launch. Workspace is the right answer when there
is a second person, not before.

This is a different address from the **developer email shown publicly on Play** (§1a) — that one can
stay `hello@` or a support alias.

### 1c. The D-U-N-S number is the actual gate

> ## ✅ OBTAINED 2026-09-11 — **D-U-N-S `148718973`** for Rounds Codex, Inc.
> Issued through Apple's lookup (route 1 below), which returned it immediately rather than
> opening a request. **Nothing below needs doing again** — it is kept because the same
> number now has to survive a name or address change at D&B, and because the
> Europe-only trap is worth not repeating.
> The same nine digits serve the Play account **and** the Apple Individual → Organization
> conversion in `native/apple-org-switch.md`.

Free from Dun & Bradstreet. **Use Apple's lookup, not D&B's own:**

1. **Look it up AND request it in one form — free:** <https://developer.apple.com/enroll/duns-lookup/>
   It is D&B-backed, answers immediately whether a number already exists for the entity, and starts
   the request in the same form if not. Apple's stated turnaround is **up to five business days**,
   against D&B's own 30 — treat that as optimistic, since it is the same D&B pipeline underneath,
   but it is the faster door. `native/apple-org-switch.md` step 1 has named this route since
   2026-08-17.
2. **The D&B route, if Apple's form will not serve:**
   <https://www.dnb.com/en-us/smb/duns/google-developers.html> (D&B's page for Google developers,
   which is where Play's own "Learn how to find or request a D-U-N-S number" link goes)

⚠ **`dunsnumberlookup.dnb.com` is Europe-only — do not send anyone there.** It was step 1 here until
2026-09-11, when the physician followed it and found the Country field pre-filled "United Kingdom"
and the region switcher offering Austria through Sweden with **no United States in the list**. It is
D&B's EU/UK portal, not a global one, and nothing on the page says so. A US entity cannot be found
or requested from it at all.

**The same number unblocks Apple too.** The Individual → Organization conversion in
`native/apple-org-switch.md` has been waiting on exactly this blank since 2026-08-17 (step 3's
request template has a `D-U-N-S number: ____` line). One lookup serves both stores.

**LOOK IT UP BEFORE REQUESTING.** An incorporated business is often assigned a D-U-N-S already, from
banking, credit or state-filing data, without anyone applying. A duplicate request creates both a
delay and a second record to reconcile. Search the **exact legal name and registered address from
the articles of incorporation**, including "Inc." — a near-miss search is how people conclude they
have none.

**Timing:** standard issue takes **up to 30 days**; D&B sells an **expedited option at about 8
business days** for a small fee. Since this is the only thing blocking the account, the fee usually
buys back more schedule than it costs.

**If the record exists but the name or address is stale, fix it at D&B BEFORE entering the number.**
Google pulls the business information from D&B and then asks you to confirm it against an official
document, so a stale record becomes a failed verification rather than a quick correction.

**⚠ THE ENTRY DIALOG LIMITS YOUR ATTEMPTS.** The Play Console screen that asks for the number says
plainly: *"You have a limited number of tries to enter the correct D-U-N-S number for your
organization."* So do not type a plausible-looking number to see what happens, and do not work from
memory. Get the verified number first; Cancel out of that dialog and the earlier steps stay ticked
in the sidebar.

**Google does not simply trust D&B.** The signup screen says you will have to verify the information
Google receives from Dun & Bradstreet **by providing an official business document** — articles of
incorporation, a business licence, or equivalent for Rounds Codex, Inc. Have that PDF to hand before
starting, because it is asked for mid-flow, and its name and address must match both the D&B record
and the Google payments profile.

### 1d. What you can skip: there is no merchant/payout account to set up

The help page's *Adding and verifying your payment method* section — the bank details, the deposit
challenge, "verification can take up to 5 days" — is for developers **receiving payouts through
Play's billing system**. v1 is free with no in-app purchases, so none of it applies. You still need
a card for the $25 registration fee; that is a different thing from a merchant payout account.
Revisit this only when the paid tier is designed, and note that §7's grandfathering question has to
be answered before that anyway.

## 2. Build the web payload

One command. It copies the tree, runs the seven patchers in order, strips the media into the pack
set, drops everything the app cannot reach, and checks the size against Play's cap.

```sh
cd rounds-codex
rm -rf /tmp/rc-payload-android
node scripts/build_native_payload.js ../rounds-codex-app /tmp/rc-payload-android --platform android --asset-packs --version v1.0.0-android
RC_PW=<dir with node_modules/playwright-core> node scripts/verify_ios_variant.js /tmp/rc-payload-android
```

Expect **≈84 MB** and `all 31 checks pass`.

**`--asset-packs` is not optional on Android and the script enforces it.** Without it you get the
826 MB iOS payload, and Play caps the base module at 200 MB of compressed download — that is a
rejected upload, not a large app, so the builder refuses in a second rather than after a Gradle
build. `--allow-oversize` exists only for deliberate measurement.

**The iOS and Android payloads are byte-identical** — verified with a full `diff -rq`. `--platform`
changes no bytes; it changes the size rule and the closing notes. So if you have just built iOS,
you already know this tree is good.

`verify_ios_variant.js` needs Playwright and Chromium. Chromium is a *better* proxy here than it
ever was for iOS — **Android WebView is Chromium** — so unlike the iOS runbook's advice, running it
on the Mac is worth the install. What it cannot represent is the WebView version on a given phone,
which step 4 explains is the one thing that actually bites.

**One command instead of the two above, before you build for real:**

```sh
RC_PW=<dir with node_modules/playwright-core> sh scripts/preflight.sh android ../rounds-codex-app
```

Eight checks: the web tree's service worker, fonts, the full app end-to-end, the payload's 31
variant checks, that no worker survived into the payload, `RC_ROOT`, the shipped counts and the
asset-pack plan. Without `RC_PW` the browser suites are **skipped and reported as skipped**, which
is not the same as green.

## 3. Which Capacitor version — decide this before `cap add android`

**This is the one real engineering decision in the Android build, and the handoff's guess about it
was wrong.** Everything below was read out of the published packages in this container on
2026-09-09, not remembered.

| | Capacitor 7 (7.6.9) | Capacitor 8 (8.5.1) |
|---|---|---|
| template `minSdkVersion` | 23 | 24 |
| template `compileSdkVersion` | **35** | **36** |
| template `targetSdkVersion` | **35** | **36** |
| Android Gradle Plugin | 8.7.2 | 8.13.0 |
| Gradle wrapper | 8.11.1 | 8.14.3 |
| iOS deployment target | 14.0 | **15.0** |
| Node required | ≥ 20 | ≥ 22 |
| edge-to-edge | `android.adjustMarginsForEdgeToEdge`, default `"disable"` | option **removed**; `SystemBars` plugin, `insetsHandling` default `"css"` |

**Google Play requires new apps to target API 36.** Verified against Google's own documentation this
session: new apps and updates must target Android 16 (API 36) or higher; the deadline was 31 Aug
2026, with an extension route to 1 Nov 2026 for *updates* to existing apps. A new app has no
extension. **Capacitor 8's template already targets 36. Capacitor 7's does not.**

**The handoff called raising it "a one-line edit". It is not.** ⚠ AGP 8.7.2 — what the Capacitor 7
template pins — predates API 36, and compiling against a `compileSdk` newer than the AGP knows about
is at best a warning and generally a build failure; Capacitor 8 moved to AGP 8.13.0 for this. I could
not run Gradle against a real SDK here to say which, so treat it as "expect to raise AGP too" rather
than a certainty. Either way, staying on 7 means editing `targetSdkVersion`, `compileSdkVersion`,
the AGP version and the Gradle wrapper by hand — most of the work and most of the risk of the
upgrade, for a worse result. Read on for why worse.

### 3a. Edge-to-edge, which is where the two versions really differ

Targeting API 35+ makes edge-to-edge mandatory: the WebView draws under the status and navigation
bars. `add_safe_area.js` handles that with `env(safe-area-inset-*)`, exactly as on iOS. The
question is whether `env()` reports anything on Android, and the answer is version-dependent in a
way that is invisible until it is on a phone.

**Capacitor 8 answers it properly.** Its `SystemBars` plugin is auto-registered (`Bridge.java` line
664) and defaults to `insetsHandling: "css"`. On every inset change it decides:

```
shouldPassthroughInsets = getWebViewMajorVersion() >= 140 && hasViewportCover
```

- **WebView ≥ 140 and the page declares `viewport-fit=cover`** → insets are passed through, so
  `env(safe-area-inset-*)` works natively and `add_safe_area.js`'s rules do their job.
- **Otherwise** → Capacitor pads the WebView's *parent view* instead, so the WebView never extends
  under the bars, and injects zero insets. `env()` is 0, every `calc()` in `add_safe_area.js`
  collapses to the value that shipped, and the layout is still correct.

So on Capacitor 8 the app is right on both old and new WebViews, by two different mechanisms. The
140 threshold is a real Chromium bug in Android WebView's `env(safe-area-inset-*)`
(`issues.chromium.org/issues/40699457`, cited in Capacitor's own source); there is a second fix at
144 for a keyboard-related bottom-inset error. Capacitor 8 also sets
`--safe-area-inset-top/right/bottom/left` custom properties on `documentElement`, which this app
does not read and does not need to.

**Capacitor 7 has none of that.** `adjustMarginsForEdgeToEdge` defaults to `"disable"`, meaning no
inset handling at all — so on a device with WebView < 140 the header renders under the status bar
and nothing compensates. That is the "first real-device bug" the handoff predicted, and this is its
actual cause. The escape is `"force"` (or `"auto"`, which additionally requires API 35+ and a theme
that has not opted out — so `"auto"` is conditional and `"force"` is not). Either one sets margins
on the WebView and returns `WindowInsetsCompat.CONSUMED`: correct on all WebView versions, but the
app is letterboxed between the system bars rather than drawing under them, and `env()` goes to 0.

**⚠ The handoff said to try `"auto"` first. Do not.** On Capacitor 7 `"auto"`/`"force"` do not
*complete* `add_safe_area.js`, they *replace* it — you get the shipped padding and no translucent
header. It is a valid fallback, not the intended design.

### 3b. Recommendation

**Upgrade the project to Capacitor 8 and build Android from that.** It is the only option that
gets targetSdk 36 without hand-editing the toolchain, and it is the only one where the safe-area
behaviour degrades correctly on an old WebView instead of failing visibly.

The cost, stated plainly, because it is real: `@capacitor/android` and `@capacitor/core` majors must
match, so this upgrades the **whole project, including the shipped iOS app**. Concretely that means
the iOS deployment target rises from 14.0 to 15.0 (dropping iOS 14 devices — a 2020 OS), Node must
be 22+, and **the next iOS build has to be re-verified before it is submitted.** iOS 1.0 (4) is
already live and is not affected by anything you do locally; this only binds the *next* iOS
submission.

If you would rather not touch iOS at all right now: stay on Capacitor 7, set
`targetSdkVersion`/`compileSdkVersion` to 36 in `android/variables.gradle`, raise AGP and the
Gradle wrapper to the Capacitor 8 numbers in the table above, and set
`"android": { "adjustMarginsForEdgeToEdge": "force" }`. Write down that you did, because it is
not what the template says and the next person will not expect it.

## 4. Add the Android platform

**Run these one at a time, with a Return after each — not as one pasted block.** The iOS runbook
records why: an interactive prompt swallows whatever was pasted behind it, and a pasted block
leaves its last line sitting un-executed with no Return, which is how `cap sync` silently did not
run and the app was tested twice against stale bytes.

```sh
cd ~/rounds-codex-native
npm i @capacitor/android@8 @capacitor/core@8 @capacitor/cli@8 @capacitor/ios@8
rsync -a --delete /tmp/rc-payload-android/ www/
npx cap add android
npx cap sync android
npx cap open android
```

**After ANY change to the payload the sequence is rsync → `npx cap sync android` → ▶.** rsync alone
updates `www/`; `cap sync` is what copies it into `android/app/src/main/assets/public`. Android
Studio will happily rebuild and reinstall yesterday's bytes.

`capacitor.config.json` needs **nothing new for Android**. Read from `CapConfig.java` in both 7 and
8: `server.androidScheme` already defaults to `https` and `server.hostname` to `localhost`, which is
what `fix_root_authority.js` was checked against (§4.2 item 2). Keep `"ios": {"contentInset":
"never"}` and `"server": {"iosScheme": "capacitor"}` exactly as they are — they are iOS-only keys.

Then, in `android/app/build.gradle`:

```
applicationId "com.roundscodex.app"
versionCode 1
versionName "1.0.0"
```

**`versionCode` must increase on every upload, forever, and can never be reused** — not even for a
build you deleted. Record it the way the iOS build number is recorded, in `version.txt`'s label.

## 5. Run it before configuring anything

Do this before signing, before App Links, before the listing — the iOS build found a fatal bug in
the first thirty seconds of its first launch and so might this one.

A Pixel emulator image with Play Services, cold start. Then:

1. The medical disclaimer must appear, and its accept button must actually be tappable.
2. The library must paint 183 conditions.
3. Open a gallery, take a quiz, open a calculator, open **USMLE PREP**.

**USMLE PREP is the one to check deliberately.** Read from `WebViewLocalServer.java`: a request
whose last path segment contains no `.` is routed back to the root `index.html` when html5mode is
on. `usmle/` has no dot, so without `fix_usmle_link.js` it opens the main app shell with its base
set to `/usmle/`, every `content/*.json` 404s, and you get "Content didn't load" with the tab bar
still on screen. The patcher is in the chain; this is how you confirm it survived the build.

**Debug with `chrome://inspect`** from desktop Chrome with the device or emulator attached. That is
the Android equivalent of Safari's Web Inspector and it is the tool for every question this file
marks ⚠.

Safe-area diagnostic, in that console:

```js
[!!document.getElementById('rc-safe-area'),
 getComputedStyle(document.querySelector('.app')).paddingTop,
 getComputedStyle(document.querySelector('.nav')).bottom,
 (navigator.userAgent.match(/Chrome\/(\d+)/)||[])[1]]
```

`[false, ...]` means the payload never got the patcher — a **build** problem, not a CSS one; check
the two greps below before touching any CSS. A WebView major version under 140 with a `0px` top
padding and a header under the status bar is §3a, not a bug in the app.

```sh
grep -c "strip_service_worker" /tmp/build.log            # the chain ran
grep -c "rc-safe-area" /tmp/rc-payload-android/index.html # its output is in the payload
```

Also worth one look in that console: `navigator.serviceWorker.getRegistrations().then(r=>r.length)`
must be `0`. On Android, unlike iOS, a service worker really does register and control the page —
`resolveServiceWorkerRequests` defaults to `true` in both Capacitor 7 and 8 — which is why the
payload chain removes it. `verify_ios_variant.js` already asserts this, so a non-zero here means
the wrong bytes are installed.

## 6. The size decision — the experiment that settles §4.3

The payload is 84 MB. The other **742 MB** of gallery pages and audio has to reach the device some
other way, and there are two candidates. **Neither has been tried, and Android Studio is the only
place either can be.**

**A — Play Asset Delivery, install-time packs. The modules are generated; you build and test them.**

```sh
cd rounds-codex
node scripts/build_asset_packs.js ../rounds-codex-app /tmp/rc-packs --copy
node scripts/verify_asset_packs.js /tmp/rc-packs ../rounds-codex-app
```

Expect **11 packs, 1,153 files, 741.9 MB** and `all 48 checks pass`. Then follow
`/tmp/rc-packs/WIRING.txt`, which carries the exact `settings.gradle` includes and the
`assetPacks = [...]` line for `app/build.gradle`, and copy the eleven directories into `android/`.

Each pack lays its files out at `src/main/assets/public/<the app-relative path>` — byte-for-byte
where the base module would have put them. Install-time packs ship as split APKs and their assets
are reachable through the same `AssetManager` that Capacitor's `WebViewLocalServer` reads `www/`
from, so **if the merged namespace behaves as documented, the local server finds them with no code
change, no plugin and no Java.**

⚠ **That is a reading of the source, not a result. Nobody has run it, and a container cannot.**
This is the experiment:

1. Build and install on the emulator.
2. **Airplane Mode.**
3. Open a Cardiac gallery and open a full-size page. Then play a recording.

If it renders, option A is settled and the other ten packs are already built. If it 404s, stop and
take B — do not spend a day on it. **Either way, write the answer into
`HANDOFF-android-app.md` §4.3 with the date.**

What the verifier proves before you ever open Android Studio: every packed file is one the app can
actually request, every copy is byte-identical to the source (hashed — the whole run is 2.3
seconds), no file is in two packs, each pack is inside Play's 1.5 GB per-pack limit, and
**base + packs covers everything reachable** — 1,153 packed and 1,308 in the base module, summing
to the 2,461 files the resolver says the app can ask for. That last one is the invariant no build
tool checks: get it wrong one way and 742 MB ships twice, the other way and a gallery is silently
missing on a device, offline, with no error.

**B — stream the media.** `add_media_root.js` is already in the chain and installs `rcMedia()`; set
`window.RC_MEDIA_ROOT` to the public origin and gallery pages, gallery PDFs and audio resolve over
the network. Thumbnails deliberately stay in the bundle, so the galleries index still browses
offline. Cost: the offline claim narrows to "all the text, offline" and the artwork needs a
connection, which changes what the listing may say. **Say it in the listing rather than discovering
it in a review.**

**Whichever wins, write it down in `HANDOFF-android-app.md` §4.3 with the date.** This is the open
question the whole Android size story hangs on.

⚠ Play's documented ceilings: **200 MB compressed download for the base module** and **100 asset
packs maximum** are confirmed; the handoff's figures of 1 GB combined for install-time packs and
2 GB for all packs could not be re-verified here (`support.google.com` is blocked by the egress
proxy). 742 MB is comfortably under any of them, and **Play Console computes and displays the real
compressed size at upload**, which is the only number that decides anything.

## 7. App Links — and the ordering that is easy to get wrong

`/.well-known/assetlinks.json` needs the SHA-256 of the **Play App Signing** key, and that
fingerprint does not exist until you have uploaded a bundle. So the order is fixed:

1. Upload a bundle to internal testing (step 8).
2. Play Console → **Test and release → App integrity → App signing key certificate** → copy the
   **SHA-256** line. ⚠ That page shows the *upload* key's fingerprint too, on the same screen. Play
   re-signs every bundle with the app signing key, so **the upload key's fingerprint produces a file
   that verifies against nothing** — and the failure is silent, links just open in Chrome.
3. Generate the file rather than typing it:

   ```
   node scripts/make_assetlinks.js <SHA-256> /path/to/rounds-codex-app/.well-known/assetlinks.json
   ```

   It takes the fingerprint with or without colons, in either case, and refuses a SHA-1 (the other
   fingerprint on that page) by name. `node scripts/make_assetlinks.js --check <file>` validates an
   existing one — wrong relation string, `namespace` not `android_app`, wrong package, malformed
   fingerprint. Run the check before deploying; none of those four errors surfaces anywhere at
   runtime.
4. Deploy it. **Ask before deploying — the app repo is the live site.** Give `_headers` the
   `Content-Type: application/json` line the AASA already has.
5. Reinstall and test. `adb shell pm get-app-links com.roundscodex.app` is the only place Android
   says out loud whether verification succeeded.

The manifest side goes in `android/app/src/main/AndroidManifest.xml`, inside `.MainActivity` —
the template ships with only the LAUNCHER filter, so this is an addition:

```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" android:host="roundscodex.com" />
    <data android:pathPrefix="/c/" />
    <data android:pathPrefix="/s/" />
    <data android:pathPrefix="/g/" />
    <data android:pathPrefix="/r/" />
    <data android:pathPrefix="/u/" />
    <data android:pathPrefix="/x/" />
</intent-filter>
```

Six prefixes, matching the AASA. `roundscodex.com` only — not the netlify.app host.

**Any new one-segment route has to be added in five places**: the `RC_ROOT` regex, `RC_OPEN_ROUTES`,
`_redirects`, the AASA and now here. One omission is a dead link on one platform.

`MainActivity` is `launchMode="singleTask"` in the template, so a link tapped while the app is
already running arrives at `onNewIntent`. ⚠ Whether the iOS project does anything with Capacitor's
`appUrlOpen` event is unknown until §4.0 puts that project under version control — find out and
mirror it, because the same listener fires on Android.

## 8. Sign, build, upload

1. **Build → Generate Signed App Bundle / APK → Android App Bundle.**
2. Create the upload keystore once. **Back it up somewhere that is not the Mac, and never commit
   it.** Losing it does not lose the app — Play App Signing means Google holds the real signing key
   and an upload key can be reset — but resetting it is a support round-trip you do not want during
   a launch.
3. Upload to **internal testing** first, not production.
4. **Read the pre-launch report.** Play runs the bundle on real physical devices and reports
   crashes, accessibility findings and rendering problems, for free, before any human review. It is
   the closest thing to the device testing a container cannot do, and it is the reason to upload
   early even with an unfinished listing.
5. Then closed testing if the account requires it (§1), then production.

## 9. The listing

Not yet drafted — that is `HANDOFF-android-app.md` §4.6. What is already settled:

- **Title** "Rounds Codex: Clinical Atlas" (28 of 30 characters).
- **Screenshots must be re-rendered, not cropped.** Play's maximum aspect is 2:1 and the App Store
  finals are 1290×2796, which is 2.17:1 and will be rejected. 1080×1920 for phones.
  `native/SCREENSHOT-SHOTLIST.md` has the design; the template file itself did not survive a
  container reset.
- **Feature graphic 1024×500**, required, no alpha. **Icon 512×512.**
- **Data safety: no data collected, no data shared.** True of this binary — the variant removes Ask,
  which was the only thing that transmitted anything, and `verify_ios_variant.js` measures it as
  "no request left this origin" rather than asserting it from the source.
- **Health apps declaration** is required for every app since Aug 2025. The app is an educational
  reference, not a medical device: no diagnosis, no treatment, no Health Connect, and first use is
  gated by a medical disclaimer. The Guideline 1.4.1 reasoning about the dosage calculators in
  `app-store-submission-draft.md` transfers word for word.
- **Contact email** is shown publicly on Play — use the support address, not a personal one.
- **Counts go stale.** The listing text is drafted in **`native/PLAY-LISTING-DRAFT.md`**, every field
  already at Play's limit. Before pasting, run
  `node scripts/verify_listing_counts.js ../rounds-codex-app` — it derives the counts from the
  shipped content and fails on any number either store draft quotes that the content does not
  support. Every earlier document's numbers drifted, including in the paragraph claiming they had
  been checked.

## 10. Before you press publish

- **Airplane Mode, cold, on a real device.** Offline is the main claim and nothing in a container
  can test it. Force-quit, Airplane Mode, launch: library, a condition, a quiz, a calculator, and a
  gallery — **including opening a full-size page**, which is the thing step 6 decided.
- **Tap a `roundscodex.com/c/dvt` link** from another app. It must open in Rounds Codex. If it opens
  Chrome, `assetlinks.json` is wrong, missing, or has not propagated (step 7).
- **My account** — no "Signed in", no Sign out, no Delete my account, and "Clear my saved data"
  works.
- **Rotate the device, and open the keyboard on the search box.** Both are Android-specific and
  neither has ever been tested on this app. The keyboard one is why Capacitor's WebView 144 note
  exists.
- **The RC VERIFIED badge is uniform** — checked against shipped content (v132) on 2026-09-09:
  183 of 183 conditions carry `verified: true`, none carry `false`, and none omit the key. The
  three that were outstanding (`metabolic-syndrome`, `hip-fracture`, `back-pain`) have all been
  reviewed. So the "clinically reviewed" claim is safe to make on the listing. Re-derive rather than
  trusting this line: `node scripts/read_shipped_counts.js ../rounds-codex-app`.

---

## If it goes wrong

| symptom | cause |
|---|---|
| Blank app, or "Content didn't load" | `www/` was not synced, or a second `<base>` tag. Run `npx cap sync android` and check `android/app/src/main/assets/public/index.html` exists. |
| USMLE PREP opens the main app, not the module | `fix_usmle_link.js` did not run. Capacitor routes any extensionless path back to the root `index.html`. |
| Header sits under the status bar | §3a. Check the WebView major version first — under 140 on Capacitor 7 this is expected and the fix is a config change, not CSS. |
| Every `content/*.json` 404s | A new one-segment route missing from the `RC_ROOT` regex, or a second `<base>`. |
| Galleries show broken images offline | The pack experiment (step 6) failed, or `RC_MEDIA_ROOT` is set and there is no network. |
| Upload rejected for target API | `targetSdkVersion` is not 36. Capacitor 7's template says 35. §3. |
| Upload rejected for size | The payload was built without `--asset-packs`. The base module must be under 200 MB. |
| "You already used version code 1" | `versionCode` must increase on every upload and can never be reused. |
| Old content after an app update | Should be impossible — the payload has no service worker. If it happens, check `getRegistrations()` in `chrome://inspect`; a worker got back in. |
| A patcher aborts with "expected exactly 1 occurrence" | The web app's wording changed under it. That is the anchor doing its job — fix the script, never loosen the anchor. |
