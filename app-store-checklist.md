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
| Apple Developer Program | **Organization — Rounds Codex, Inc.** Enrolled. Seller name matches the `© 2026 Rounds Codex, Inc.` line on all 1,020 illustration pages and the trademark applicant. | 2026-08-14 |
| **Login wall on iOS** | **NO.** The wall stays on the **web** only. | 2026-08-14 |
| v1 price | **Free**, no paywall | 2026-08-04 |
| Later | **$5/month for everyone**, one price, no student tier | 2026-08-04 |
| Early users | Grandfathered permanently via `AppTransaction.originalAppVersion` | 2026-08-04 |
| Independent medical review | Gates the **paid** launch, not the free one | 2026-08-04 |

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
- [ ] **Support URL** — a contact page with an email on it. Does not exist. `teacher@roundscodex.com`
      is the address; the page is not built.
- [ ] **Remove `robots.txt` and the `X-Robots-Tag` block in `_headers`** — otherwise the privacy
      policy is a page you have told search engines to ignore. Already on the 17 Aug web list.
- [x] **The no-wall iOS variant** — §1.1–1.3 above. `scripts/build_ios_variant.js`, verified.
- [ ] **The platform paragraph on the public `/privacy/` page** — §1.4. Deliberately still open:
      the public pages describe the web product, which is accurate while no iOS app exists. Add it
      to `RC_LEGAL` in the web `index.html` and re-run `scripts/build_legal_pages.js --apply`
      *before submission*, since Apple links that URL. Note that `build_ios_variant.js` anchors on
      the current privacy wording and will **abort loudly** rather than half-apply once that
      paragraph lands — update the two together.
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
framing — see `marketing-brief.md`. **"Clinically reviewed" is now allowed**, which those drafts
assumed it was not; **"peer-reviewed" remains forbidden.**

One correction to `app-store-submission-draft.md`'s own checklist: it flags `manifest.webmanifest`
for three things and **two are already resolved** — the count reads 183, and "clinically-reviewed"
is permitted. **"An AI study tutor" is settled** — see §1.5: the feature is dropped from the iOS
build and the variant script rewrites the phrase. The web manifest keeps it and is correct.

- [ ] Refresh every count in the description, promotional text and review notes
- [ ] Rewrite the attribution lines
- [x] Decide on "AI study tutor" in `manifest.webmanifest` — rewritten by `build_ios_variant.js`
      for iOS, since the feature is not in that build. The **web** manifest is unchanged and correct.

## 4. Build work

- [ ] **The native shell.** No Xcode project, no Capacitor config, no Podfile exists anywhere in
      either repo. `native-app-plan.md` is a design, not a build. This is the single largest item.
- [ ] **Download size.** Last measured **383 MB** after WebP conversion, at 90 galleries — it is 102
      now, so re-measure rather than trusting that figure. Target under 250 MB (task #27). The two
      levers: do not bundle the gallery PDFs (~165 MB) and resolve them against the public origin
      the way `RC_SHARE_ORIGIN` already works, and **stream the 180 MB of audio rather than bundling
      it**.
- [ ] **Guideline 4.2 "repackaged website" signals**, best value first: Core Spotlight indexing of
      the 183 conditions; Universal Links for `/c/ /s/ /g/ /r/ /u/ /x/`; save gallery PDF to Files;
      local notifications for the review queue; haptics on quiz answers.
- [ ] **Test the built package on a real device in Airplane Mode, cold.** Offline is the main claim.
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
