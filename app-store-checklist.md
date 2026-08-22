# App Store submission — the current checklist

**Written 2026-08-14. This file supersedes the App Store sections of `app-store-plan.md`,
`app-store-submission-draft.md` and `store-strategy.md`**, all three of which were written for a
**no-account v1** — a decision that was reversed on 2026-08-08 when the login wall came back (v82).
Those three keep their value as reference and are cross-referenced below; this is the file to work
from.

`LAUNCH-AUG17.md` is a different project — the **web** launch. Nothing here blocks it.

Counts were read out of the shipped content on 2026-08-14, not copied from the older documents,
every one of which is now stale.

---

## The decisions, as they actually stand

| | decision | date |
|---|---|---|
| Apple Developer Program | ⚠ **ENROLLED AS INDIVIDUAL, not Organization — confirmed on the account 2026-08-17.** This row previously recorded "Organization — Rounds Codex, Inc." and the reasoning built on it was wrong. Team `744JSM2Z3H`. **The seller name buyers see will be the individual's legal name, not Rounds Codex, Inc.** — which does *not* match the `© 2026 Rounds Codex, Inc.` on all 1,020 illustration pages, the in-app footer, or the trademark applicant. See §7. | corrected 2026-08-17 |
| **Login wall on iOS** | **NO.** The wall stays on the **web** only. | 2026-08-14 |
| v1 price | **Free**, no paywall | 2026-08-04 |
| Later | **$5/month for everyone**, one price, no student tier | 2026-08-04 |
| Early users | Grandfathered permanently via `AppTransaction.originalAppVersion` | 2026-08-04 |
| Independent medical review | Gates the **paid** launch, not the free one | 2026-08-04 |
| Bundle identifier | **`com.roundscodex.app`** — permanent, and already in the deployed AASA | 2026-08-17 |
| Devices | **Universal — iPhone and iPad.** Costs a second screenshot set (13", ≥6) and iPad layout QA | 2026-08-17 |
| Minimum iOS | **Support below 26 and stream.** Asset packs are iOS 26+; `RC_MEDIA_ROOT` falls back to the public origin underneath, so the app works everywhere and is fully offline on 26+ | 2026-08-17 |

**Why no wall on iOS.** Apple does not allow an app to require registration unless it has
significant account-based features. Rounds Codex's account does nothing for the user — bookmarks,
quiz scores and the review queue are all `localStorage` and sync nowhere. A reviewer opening a study
app and meeting a sign-in form is a well-known rejection. Removing it also restores the
**"Data Not Collected"** privacy label and removes the demo-account obligation. The wall exists to
make the content hard to copy, and a compiled binary is already far harder to scrape than a
website — so it keeps doing its job where it matters.

**The cost, stated once so it is not discovered later:** `AppTransaction.originalAppVersion`
grandfathers **App Store installs only**. Early *web* users are invisible to it. If they are meant
to keep free access when the paywall lands, that needs its own mechanism and none exists today.

---

## 1. "No wall on iOS" is a build, not a deletion — four surfaces contradict it

This is the part no existing document covers, and three of the four are content, not code.

| # | surface | what it says today | why it breaks the iOS build |
|---|---|---|---|
| 1.1 | **My account → "Signed in"** | `rcAccountEmail()`, "Invitation-only access", **Sign out**, **Delete my account** | With no account these are three controls that cannot do anything. A reviewer tapping *Delete my account* on an app with no accounts is a **Guideline 2.1 App Completeness** finding — exactly the class of defect that cost this project months on the gallery PDF stub. |
| 1.2 | **My account → Subscription** | "Rounds Codex is invitation-only while in development" | Simply false on iOS. |
| 1.3 | **Privacy page** | "Access is by invitation and needs an account, so we hold your email address" | **Directly contradicts a "Data Not Collected" privacy label.** An in-app privacy policy that says you collect an email while the App Store label says you collect nothing is a **Guideline 2.3.1** problem *and* a bad look. This is the one that would have been found by a reviewer rather than by us. |
| 1.4 | **The privacy policy URL on the form** | `/privacy/` describes a product with accounts | The URL Apple links from the listing would describe the *web* product. |

**The fix for 1.1–1.3 is a build-time variant**, the same shape as `restore_login_wall.js` in
reverse: one script that strips the wall and swaps those three blocks, asserted, with the result
verified headless before archiving. It is not a fork of the codebase and must not become one.

**BUILT 2026-08-17: `scripts/build_ios_variant.js`, guarded by `scripts/verify_ios_variant.js`.**
Eight surgeries; run it against a *copy* of the shipped tree on the way to the archive and never
commit its output back. It refuses to run twice, and it writes `index.html` **and**
`manifest.webmanifest`. The verifier is 27 checks in a real browser and **fails 16 of them against
the unmodified web build**, so it is a guard and not decoration — it
deliberately does *not* seed a session (every other suite in this repo does, and seeding makes the
wall call `pass()` and vanish, so a build with the wall still in would pass) and it hit-tests the
viewport centre, because a `querySelector` returning null does not prove a fixed overlay is not
eating every tap. It also asserts the mirror image: `#rc-gate` must still gate first run, `/c/dvt`
must still open, and `DATA.length` must be 183 — a blank app satisfies every absence check on its
own. `audit_app_e2e.js` is clean on the variant across all 183 conditions in three modes, 183
quizzes and 102 galleries.

One thing it removed that the first plan kept: `RC_SB_URL`, `rcDelMsg`, `rcDeleteAccount`,
`rcAccountEmail` and `rcSignOut` lose their only call site with 1.1, and the precedent here
(`rcShareGallery`, kept after v74 took its button) says to leave an unreachable function alone. The
`no invitation copy left` assertion changed the answer — those functions carry user-facing prose
about needing a new invitation, and shipping that string inside a binary whose privacy label says
there is no account is a contradiction only someone else would ever find. `accountReset()` is
explicitly **not** in the removed region; "Clear my saved data" is the one control on that page that
still does something, and the rewritten privacy text points the reader at it by name.

### 1.5 — Ask Rounds Codex degrades to a five-entry stub in a native bundle

**Found 2026-08-17 while verifying the variant — a fifth surface, not one of the four the wall work
was scoped to. Resolved the same day; the decision is recorded below.**

`asend()` POSTs to `/.netlify/functions/ask` — a real Claude-backed RAG endpoint — and on any
failure falls back to `answer(q)`, a local keyword matcher over a **five-entry** `KB` array. In a
Capacitor bundle the origin is local, so that path 404s on every question and the fallback is the
only behaviour there is. Measured, not reasoned: served with no `ask` function, the four starter
buttons answer convincingly (they are four of the five KB entries) and *every other question* —
community-acquired pneumonia, hyponatremia workup, Ranson criteria — returns the same paragraph,
"I'd ground this in the relevant Rounds Codex condition entry…", under a source chip reading
**Rounds Codex → Rounds Codex Library**.

That is the gallery-PDF-stub shape again, and worse in one respect: the deflection *reads* like an
answer and carries a citation, so it does not look broken. The page header claims "Cited answers
grounded in the 183-condition library" and the greeting promises "Every answer cites its reference
source". A reviewer who types one question that is not a starter meets it immediately.

**DECIDED 2026-08-17 (physician): drop Ask from the iOS variant.** The two alternatives were to
call the live endpoint over the network — which costs the offline claim and puts the question text
on the "Data Not Collected" label — or to build a real on-device retriever over the already-bundled
`content/conditions.json`, which is a feature, not a submission fix. Ask stays on the **web**, where
the endpoint is real.

Removing the entry point alone would have left the view unreachable, which is the outcome wanted.
It was not enough: the view's own code carries the claims ("Every answer cites its reference
source") and the endpoint call, so surgery 7 takes the whole feature — the `.modask` block on every
condition page, `modAsk()`, the `ASK` region (`KB`, `answer`, `askHTML`, `abot`, `askGreet`, `aask`,
`asend`), and `paint()`'s `r.v==='ask'` branch. `ROOTS` still lists `'ask'`; it is **declared and
never read** — the only other mentions in the file are two comments — so the entry is left alone and
an assertion holds it dead, failing the build if `ROOTS` ever becomes live.

**7e is the edit that is easy to miss.** With Ask gone, the privacy page's "if you use Ask Rounds
Codex, your question is sent to us" describes a feature the build does not have, and **a policy
that overstates what leaves the device is as wrong as one that hides a real transmission.** Both
the short version and the "What leaves your device" section are rewritten to say plainly that
nothing is transmitted. `manifest.webmanifest`'s "an AI study tutor" goes the same way.

**The consequence for the privacy label:** Ask was the only thing in the app that transmitted
anything, so **"Data Not Collected" is now true of the binary** rather than nearly true. The
verifier measures this rather than asserting it from the source — it watches every request over the
whole session and fails if one leaves the origin.

**Handled by hand 2026-08-17:** `app-store-submission-draft.md` §3 is rewritten around this and
now carries the rule that nothing in the listing may promise an AI tutor, an assistant, or answers.
The drafted Description, Promotional Text and Keywords turned out never to mention it, so there was
no listing copy to change — the claim lived only in the manifest and in that section's own analysis.

**The fix for 1.4 is a decision, and the better answer is one policy that covers both platforms**
rather than two policies: a short paragraph saying the website requires an invitation and stores
your email address, and the iOS app has no account and stores nothing. One document, honest about
both, and no risk of the two drifting. The alternative — a separate `/privacy/ios/` — doubles the
maintenance of a legal document, which is the trap `scripts/build_legal_pages.js` was written to
avoid.

---

## 2. Blockers — the submission cannot be completed without these

- [x] **Public privacy policy URL** — `/privacy/` and `/terms/` exist as real static pages,
      generated from the app's own `RC_LEGAL` by `scripts/build_legal_pages.js`, reachable signed
      out, no JavaScript, no external requests. **Built v89, deliberately held until 17 Aug.**
      They regenerate in one command, so nothing is lost if the build container is reclaimed.
- [x] **Support URL** — `https://roundscodex.com/support/` (live and confirmed on device, v128,
      2026-08-17). Generated by `scripts/build_legal_pages.js` alongside `/privacy/` and `/terms/`,
      so all three share one stylesheet and one guard against app-only markup on a page with no
      JavaScript. The address comes from the app's own `RC_CONTACT`, not typed.
- [ ] ~~**Remove `robots.txt` and the `X-Robots-Tag` block**~~ — **NOT a submission blocker, and
      deliberately deferred (physician, 2026-08-17).** Apple needs the privacy URL *reachable*, not
      *indexed*, and it is. Removing `noindex` very likely starts the three-month §412 copyright
      window, which never reopens (`legal/README.md`), so it stays a separate deliberate act once
      the copyright filing is ready.
- [x] **The no-wall iOS variant** — §1.1–1.3 above. `scripts/build_ios_variant.js`, verified.
- [x] **The platform paragraph on the public `/privacy/` page** — §1.4, shipped v128 2026-08-17.
      One policy covering both platforms: the website is invitation-only and holds the email
      address you sign in with, the iOS app has no account and holds nothing.
      `scripts/add_platform_privacy.js`. It did abort `build_ios_variant.js` as designed; both were
      updated together and `verify_ios_variant.js` is 28/28, with its `no invitation copy` check
      now **scoped** — the platform section legitimately says the *website* is invitation-only, so
      a flat ban on the word fails on a correct build.
- [x] **Ask Rounds Codex in the native bundle** — §1.5. Dropped from the variant, 2026-08-17.
- [x] **Store copy must not promise an AI tutor** — closed 2026-08-17.
      `app-store-submission-draft.md` §3 is rewritten around it and now carries the standing rule.
      The drafted **Description, Promotional Text and Keywords never mentioned it**, so there was
      no listing copy to change; `manifest.webmanifest` is handled by the variant script. The web
      manifest keeps the phrase and is correct — the feature is real there.
- [ ] **Screenshots** — 6.9" iPhone required, 13" iPad strongly recommended, at least 6 each. The
      eight shots and their captions are drafted in `app-store-submission-draft.md` §Screenshots and
      that part is still good. **Needs a Mac; cannot be produced from a session.**
- [ ] **Age rating questionnaire** — Medical/Treatment Information is Frequent/Intense. Apple revised
      the tiers in 2025, so read the current questionnaire rather than a remembered band.
- [ ] **Export compliance** — HTTPS only, so the standard exemption applies, but the question must
      still be answered.
- [x] **Privacy nutrition label: "Data Not Collected"** — true of the iOS variant as built. Ask was
      the only thing that transmitted anything and it is gone; `verify_ios_variant.js` measures it
      by watching every request over a whole session, rather than asserting it from the source.

## 3. Copy — everything drafted is stale in two ways

**Every count has moved.** Read from the shipped content 2026-08-14:

| | draft says | actual |
|---|---|---|
| conditions | 181 | **183** |
| galleries / pages | 93 / 930 | **102 / 1,020** |
| quiz questions | 1,820 | **1,840** |
| audio recordings | — | **31** |

Unchanged and verified: **1,010** USMLE items across 43 bank files (Step 1 280, Step 2 CK 318,
Step 3 Day 1 232, Day 2 180), **197** illustrated, **150** NCLEX items, **300** drugs, **470**
guideline entries across **25** specialties, **1,418** resident entries, **10** calculators.

**Attribution is superseded.** Every "written by a physician" line becomes the team-of-clinicians
framing — **"designed by a team of clinicians"**, the verb revised from "created" by the physician
on 2026-08-17. See `marketing-brief.md`. **"Clinically reviewed" is now allowed**, which those drafts
assumed it was not; **"peer-reviewed" remains forbidden.**

One correction to `app-store-submission-draft.md`'s own checklist: it flags `manifest.webmanifest`
for three things and **two are already resolved** — the count reads 183, and "clinically-reviewed"
is permitted. **"An AI study tutor" is settled** — see §1.5: the feature is dropped from the iOS
build and the variant script rewrites the phrase. The web manifest keeps it and is correct.

- [x] Refresh every count in the description, promotional text and review notes — done 2026-08-17,
      and the screenshot captions and the Copyright note with them. Derived by
      **`node scripts/read_shipped_counts.js <site-root>`**, which reads every figure the store
      copy quotes straight out of a shipped tree. Use it instead of copying a number out of any
      document, this one included.
- [x] Rewrite the attribution lines — done 2026-08-17 in `app-store-submission-draft.md`: the
      Description, Promotional Text and App Review notes carry the plural framing, and the closing
      note that argued for the singular one is corrected in place rather than deleted. The Subtitle
      and App Name never carried an attribution. **Not done, and it gates the claim:** 3 of 183
      conditions still ship `verified:false` and carry no RC VERIFIED badge, which is an
      inconsistency next to a listing-wide "clinically reviewed" line.
- [x] Decide on "AI study tutor" in `manifest.webmanifest` — rewritten by `build_ios_variant.js`
      for iOS, since the feature is not in that build. The **web** manifest is unchanged and correct.

## 0. SUBMITTED — 2026-08-18

**Rounds Codex: Clinical Atlas, iOS 1.0 (build 4), submitted to App Review.** Free, manual release,
16+, Medical/Education, Data Not Collected, no account, 826 MB bundled and fully offline.

Built and shipped in one day from a repo that had no Xcode project in it that morning. What the
day actually cost was not the build — it was five bugs that only exist on a device, and every one
of them was found by the physician tapping something rather than by any check in this repo:

1. `RC_ROOT` lost its host at `capacitor://localhost` (no trailing slash), so every content file
   was blocked cross-origin. The app booted to "Content didn't load".
2. The header rendered under the Dynamic Island — no `safe-area-inset-top` anywhere in the CSS.
3. The same on all six sticky bars, which pin to the scrollport and ignore the fix above.
4. The gallery viewer's control bar, absolutely positioned, which ignores it again.
5. `usmle/` is a directory link and Capacitor does not resolve one, so USMLE PREP reloaded the
   root shell with the wrong base.
Plus a real UX bug the physician found: the USMLE module did not scroll to the top between
questions, leaving the reader mid-vignette.

**The lesson worth keeping: none of this could have been caught from a container**, and one fix
silently did not ship because the Mac's clone had not been pulled — build 2 went to App Store
Connect without it and every command looked successful. `native/MAC-RUNBOOK.md` §3b and §3c carry
the two greps and the one console line that catch that in seconds.

## 0b. Apple asked for more information — Guideline 2.1, 2026-08-19

**Not a rejection**, though App Store Connect labels the app "Rejected" while it is open. Apple
wants a screen recording made on a physical device plus seven written answers, replied in
Resolution Center. Build, metadata and screenshots are untouched; no rebuild is needed.

The drafted reply covers all seven items. Two deliberate choices in it: item 1 states plainly that
accounts, purchases, user-generated content and permission prompts **do not exist** in this app,
which closes four of Apple's sub-questions rather than leaving a reviewer to infer it from a video;
and item 5 discloses the authoring-time use of generative AI even though the question asks about
runtime services, because the App Review notes and the in-app About page both already say it and an
omission would read as an inconsistency.

**The trap here was nearly walking into it.** The physician's phone was still running the build
Xcode installed *before* the safe-area fixes, so a screen recording made on it would have shown
Apple the header under the clock. Build 4 went onto the device through **TestFlight internal
testing** instead — create an internal group, add yourself, add the build; no beta review, no wait —
and the header was confirmed correct on real hardware before recording. **Check which build is on
the device before recording anything for Apple.**

**Replied 2026-08-19** with a 1:30 screen recording made on the physician's iPhone (build 4 via
TestFlight, after deleting and reinstalling so the first-run disclaimer appears — it is gated on
`rc.terms.v1` and `accountReset()` deliberately does not clear it) and a 3,996-character answer.
App Store Connect caps that field at 4,000, which the first draft (5,252) exceeded; nothing was
dropped to fit, only tightened.

**REPLYING DOES NOT RE-QUEUE THE SUBMISSION. It sat for three days before anyone noticed.**
The reply went in on 19 Aug at 10:12 PM and nothing happened: no Apple response, no status change,
Status History still ending at Wednesday's *Rejected*. The message is recorded against the
submission, but the submission itself stays parked until the developer pushes it back.

Two tells that it is parked rather than queued, both readable in seconds:
  - **Status History gains no new entry** after the reply
  - the submission page still says **Unresolved Issues**, and your own message is the newest one

Getting it back in the queue is **three steps, not one**, and each looks final on its own:
  1. version page (Safari, desktop site) -> **Update Review**  ->  status becomes *Ready for Review*
  2. submission page -> **Resubmit to App Review**  ->  status becomes *Waiting for Review*
  3. only *Waiting for Review* means Apple actually has it

The App Store Connect **iOS app cannot do this** -- it shows status but has no Update Review
button. Safari with Request Desktop Website is the only route from a phone.

Also on that page: the red **Reject** button means *withdraw your own submission*. It is not related
to Apple's rejection and should never be tapped by mistake.

Also surfaced while checking the URLs: the EU **Digital Services Act trader status** is not
provided, so the app cannot be sold in the EU until it is. Needs a verified business address and
phone. Deferred deliberately; does not affect review or a US release.

## 4. Build work

- [x] **The native shell.** **BUILT, ARCHIVED, VALIDATED AND UPLOADED — 2026-08-17.** Version 1.0
      build 1, `com.roundscodex.app`, arm64, signed by team `744JSM2Z3H`, Apple's validation passed,
      binary uploaded to App Store Connect. App Store Connect record created as
      **`Rounds Codex: Clinical Atlas`** (SKU `com.roundscodex.app`, English (US)).
      Configured: iPhone + iPad, iOS 15.0 minimum, display name `Rounds Codex`, category
      `public.app-category.medical`, Associated Domains `applinks:roundscodex.com`,
      `ITSAppUsesNonExemptEncryption=false`, app icon 1024x1024 with no alpha (the circular
      waveform mark alone — the full lockup's wordmark is illegible at icon size).
      **It runs.** **Build 4 (2026-08-18) is the submission build** — builds 1 and 2 are superseded
      and should be ignored in App Store Connect. 3 adds the safe-area fix (the header rendered
      under the Dynamic Island) and the About-page copy fix that shipped to the web as v131.
      Verified on device: cold launch in Airplane Mode with a full-size gallery page, header clear
      of the clock, tab bar clear of the home indicator, and the bottom of a resident specialty
      page no longer under the tab bar. On 2026-08-17 the Capacitor project was
      created on the physician's Mac (Capacitor 7, **Swift Package Manager, no CocoaPods**) and the
      app launched on the iOS 26.5 simulator: all 183 conditions, condition pages, a quiz, a
      calculator, the About page, gallery thumbnails, no login wall and no Ask tab. Remaining:
      signing, Associated Domains, icons, archive, upload.
      **One bug was found the moment it ran and could only have been found there** — `RC_ROOT` is
      derived by stripping the last path segment off `location.href`, and Capacitor loads the page
      at `capacitor://localhost` with **no trailing slash**, so the strip ate the host and every
      content file was blocked cross-origin. Fixed by `scripts/fix_root_authority.js`, guarded by
      `scripts/verify_root_authority.js`, which fails on the pre-fix tree.
      Every step is written down in order with the commands: **`native/MAC-RUNBOOK.md`**.
- [ ] **Download size.** **The 250 MB target is struck, not renegotiated** (2026-08-17). Apple's
      documented maximum is **4 GB**; the 200 MB figure is the *cellular download* threshold and has
      been user-overridable since iOS 13. There is no size at which this app is rejected, and
      compression cannot reach 200 MB anyway — WebP q75, with real quality loss on labelled medical
      artwork, still lands the bundle at 271 MB. Measured by resolving every path the app can
      request (`scripts/measure_bundle.js`): **826.1 MB referenced**, of which pages 426.5, audio
      160.0, PDFs 155.4, thumbnails 47.4, USMLE illustrations 24.2.
      **v1 BUNDLES ALL OF IT — the physician's call, 2026-08-17.** One binary, ~826 MB of payload,
      every gallery page and every recording offline from the moment it installs, on every supported
      iOS version rather than only 26+. Asset packs are **not** in v1: that decision deleted the
      three pieces of the build that had never been verified — the `WKURLSchemeHandler` seam, the
      downloader-extension question, and packs going through App Review separately from the binary.
      The cost, accepted knowingly: an artwork change means a new binary and a new review.
      The pack route is retained and current behind `build_ios_payload.js --asset-packs`, with the
      design in **`native/background-assets-plan.md`** (now bannered as superseded for v1). Read it
      when the bundle gets uncomfortable or content updates need to ship without a review.
- [x] **Screenshots.** **DONE 2026-08-18** — eight framings shot on the iPhone 17 Pro Max simulator
      (6.9", the required size) and eight on iPad Pro 13", off build 4. Shot list and the reasons
      for the order: `native/SCREENSHOT-SHOTLIST.md`.
- [ ] **1.0.1 — Universal Links do not work, and the reason is a second Netlify site.**
      Discovered 2026-08-18 while checking the URLs for the submission form. The account has TWO
      Netlify projects: `rounds-codex` (the app, `rounds-codex.netlify.app`) and
      **`roundscodexwebsite`, whose primary URL is `https://roundscodex.com`** — a separate
      marketing site. `roundscodex.com/version.txt`, `/support/` and `/.well-known/apple-app-site-association`
      all 404; `/privacy/` loads because that site has a privacy page of its own.
      So the app's Associated Domains entitlement (`applinks:roundscodex.com`) points at a host that
      does not serve the AASA, and `/c/<id>` links open in Safari rather than the app.
      **Not a rejection risk and not fixed for v1** (the physician's call): the behaviour is
      identical to today's, and fixing it means deciding whether the app should live on
      `roundscodex.com` at all — plus another 826 MB build.
      Options when it is revisited: point `applinks` at `rounds-codex.netlify.app` (where the AASA,
      the app and `RC_SHARE_ORIGIN` already agree); or serve the app from `roundscodex.com` and move
      `RC_SHARE_ORIGIN` with it; or list both hosts.
      **`RC_SHARE_ORIGIN` is `https://rounds-codex.netlify.app` and is correct** — links the app
      generates point at a host that serves them. Checked, because a share origin on the marketing
      site would have been a live bug.
      The submission's Support and Privacy URLs therefore use `rounds-codex.netlify.app`, not the
      custom domain: those are the pages that match this binary.
- [ ] **Guideline 4.2 "repackaged website" signals**, best value first: Core Spotlight indexing of
      the 183 conditions; **Universal Links — web side DONE** (`/.well-known/apple-app-site-association`
      live at v128, paths derived from the app's own `RC_ROOT` regex so a seventh route cannot
      silently miss out; **the appID is a placeholder and the file says so in a `_comment` key** —
      rebuild with `scripts/build_aasa.js --team <ID> --bundle <ID> --apply` once the Xcode project
      exists, because a wrong appID fails silently and iOS just opens the link in Safari); save
      gallery PDF to Files; local notifications for the review queue; haptics on quiz answers.
- [x] **Test the built package on a real device in Airplane Mode, cold.** **DONE 2026-08-17** on the
      physician's own iPhone (iPhone 16 Pro Max, iOS 26.6), installed from Xcode over the cable:
      force-quit, Airplane Mode on, relaunched, and **a full-size gallery page opened with no
      network at all**. That is the specific thing bundling the media bought, and it is why "works
      entirely offline" can go in the listing unqualified. Nothing in a container could have tested
      it — no WebKit, no device.
- [ ] **Restore Purchases** — required, but only when the paywall lands. Not for a free v1.

## 5. Already done — do not re-do these

Four of the six "blockers" in the older draft are closed:

- **In-app account deletion** (v87) — proven end to end against the live Supabase project. Relevant
  to the **web** only once iOS drops the wall, but it is shipped and correct.
- **The gallery viewer's PDF button** (v72) — was a `toast()` stub; now shares a real file.
- **The first-run disclaimer** (v82) — the `rc-gate` id collision that suppressed it for days.
- **Persistence, self-hosted fonts, full offline content** — the substance of the 4.2 answer.

## 6. Gates the paid launch, not the free one

**Independent medical review.** The reasoning in `app-store-plan.md` stands and is worth repeating:
free content behind a visible disclaimer is one thing; $5/month sold to students is a product with
a duty of care. And the evidence that structural checks are not enough is on the record — in one
evening the checks passed a femoral-neck fracture image that was the mirror of its own vignette,
and three images with the diagnosis printed on them.

Ship free, get approved, then take the review and the paywall as a separate step. A first
submission and a first in-app-purchase submission are two different kinds of scrutiny and there is
no reason to take both at once.

---

## What the superseded documents are still good for

| file | still worth reading for |
|---|---|
| `app-store-plan.md` | Why one price and not a student tier; the `AppTransaction.originalAppVersion` grandfathering design; what App Store Connect can and cannot tell you with no login (the answer to "is this a nursing app or a med-student app", which is: Apple will never tell you — run a survey). |
| `app-store-submission-draft.md` | The **field-by-field submission text** — name, subtitle, keywords, description, review notes, screenshot list. Still the drafting source; fix the counts and the attribution on the way out. The App Review notes answering **Guideline 1.4.1 on the dosage calculator** are good as written and should go in verbatim. |
| `store-strategy.md` | What needs Apple's review after the first release and what does not; the bundle-**and**-fetch architecture; **Android**, which appears nowhere else. |
| `LAUNCH-AUG17.md` | The web launch. A different project. |


---

## 7. The enrollment is Individual, and that was assumed to be Organization

**Found 2026-08-17 by looking at the account**, after a screenshot showed the membership under a
personal name with "1 year membership". The checklist had recorded Organization since 2026-08-14 and
nothing had ever verified it.

**It does not block submission.** An Individual account can ship this app. What it changes is what
the App Store shows the world:

| | Individual (today) | Organization |
|---|---|---|
| Seller name on the product page | the individual's legal name | **Rounds Codex, Inc.** |
| Matches the © line on 1,020 pages | no | yes |
| Matches the trademark applicant | no | yes |
| Matches the in-app footer (v127) | no | yes |

The mismatch is worth taking seriously for a *medical* app: every illustration page, the in-app
footer and the App Store Copyright field all say `© 2026 Rounds Codex, Inc.`, while the seller would
be a private individual. That invites a Guideline 5.2 rights question — normally answerable, since
the same person owns the company, but it is a question that need not be asked at all.

**Switching is not a setting.** Apple Developer Program Support → contact form → topic *Account
Updates and Renewals*, supplying CEO/Director name, the company name including "Inc.", a
**D-U-N-S number**, the legal address and a phone number. The entity must be a real legal entity;
Rounds Codex, Inc. qualifies. A D-U-N-S number is free from Dun & Bradstreet and Apple has a lookup
tool — the company may already have one.

**Lead time is the risk, not the effort.** Developer-forum threads describe conversions still
incomplete after 17 days. Starting it is a half-hour of forms; waiting on it could be weeks.

**DECIDED 2026-08-17 (physician): ship v1 as Individual and convert later.** That is safe. The
conversion is the same account rather than a migration — Apple applies the new entity name to apps
already distributed, and the Team ID, bundle id, certificates and listing all stay. No app transfer,
no re-submission.

Three things that follow, and the third is a deadline rather than a caveat:

1. **The rights question is pre-empted in the App Review notes.** An OWNERSHIP paragraph now sits in
   `app-store-submission-draft.md` §Notes, next to the Guideline 1.4.1 calculator paragraph and for
   the same reason. ⚠ It asserts how the company is owned; confirm the wording is factually right
   before pasting, because an inaccurate statement to App Review is worse than the question it
   avoids. Delete it once the account converts.
2. **Do not convert mid-build.** Apple takes Certificates, Identifiers & Profiles offline during the
   migration; App Store Connect keeps working, but you cannot create or renew a signing certificate
   or provisioning profile. Convert well before the Xcode work, or after v1 is live.
3. **Convert BEFORE the paywall.** Selling requires the Paid Applications agreement with banking and
   tax details attached to the account holder — personal ones, as an Individual. Converting after
   money is moving means redoing banking and tax under the company mid-stream, with a tax year split
   across two entities. During the free period it costs nothing.

So the conversion wants to happen in the quiet stretch between approval and the subscription launch.
Filing early still helps: the D-U-N-S lookup may take days, and the request is simplest while the
account has no published apps. `native/apple-org-switch.md` has the whole process.