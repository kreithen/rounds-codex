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
- [ ] **The no-wall iOS variant** — §1 above.
- [ ] **Screenshots** — 6.9" iPhone required, 13" iPad strongly recommended, at least 6 each. The
      eight shots and their captions are drafted in `app-store-submission-draft.md` §Screenshots and
      that part is still good. **Needs a Mac; cannot be produced from a session.**
- [ ] **Age rating questionnaire** — Medical/Treatment Information is Frequent/Intense. Apple revised
      the tiers in 2025, so read the current questionnaire rather than a remembered band.
- [ ] **Export compliance** — HTTPS only, so the standard exemption applies, but the question must
      still be answered.
- [ ] **Privacy nutrition label: "Data Not Collected"** — correct once §1 lands, and only then.

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
is permitted. Only **"an AI study tutor"** is still worth a second look, because it invites a
question about what generates the answers.

- [ ] Refresh every count in the description, promotional text and review notes
- [ ] Rewrite the attribution lines
- [ ] Decide on "AI study tutor" in `manifest.webmanifest`

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
