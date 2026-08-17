# HANDOFF — the native iOS app

**Written 2026-08-17 to start this work in its own conversation.** Everything a new session needs
is here or named here. Do not run this from the main build conversation: that one carries gallery
pipelines, quiz QA, guideline citation-checking and deploy history, none of which this needs, and
two sessions pushing one branch collide.

**Branch: `claude/native-ios-app`.** Tell the new session so explicitly — it will otherwise default
to `claude/usmle-rounds-codex-module-bmpl61`, which is the main build branch.

---

## 0. Read these first, in this order

| file | why |
|---|---|
| `app-store-checklist.md` | **The current, single checklist.** Written 2026-08-14. Start here. |
| `native-app-plan.md` | The design: recommended shape, the Guideline 4.2 argument, Universal Links, what is already portable. **It is a design, not a build.** |
| `CLAUDE.md` | Project-wide context. The service-worker section and the "how to work here" rules apply. |
| `app-store-submission-draft.md` | Superseded overall, but still the field-by-field submission text and the Guideline 1.4.1 answer on the dosage calculator. |
| `store-strategy.md` | Superseded overall, but the only place Android is discussed. |

`app-store-plan.md` is superseded; read it only for the pricing and grandfathering reasoning.

---

## 1. The constraint that shapes the whole project

**A cloud session cannot build, sign, archive or upload an iOS app.** No macOS, no Xcode, no
simulator, no signing identity, no App Store Connect upload. Chromium is available; WebKit is not,
so **nothing can be tested as Safari renders it** — this has bitten repeatedly and every iOS
behaviour in `CLAUDE.md` was ultimately confirmed by the physician on a real iPhone.

So the work splits cleanly, and the handoff must not pretend otherwise:

**What a session CAN do — and it is most of the engineering:**
- The no-wall iOS variant script (task #43) and its verification
- Bundle size reduction — measurable and verifiable here
- The Capacitor config, the web-side plumbing for Universal Links and Spotlight, the
  `apple-app-site-association` file, `Info.plist` contents as source
- Refreshing every count and claim in the submission copy
- The support page and the platform-aware privacy policy
- Driving the whole thing headless against `scripts/netlifysim.js` before it ever reaches a Mac

**What only Dr. Kreithen can do, on the Mac:**
- `npx cap add ios`, open Xcode, set the signing team, archive, upload
- Screenshots — 6.9" iPhone and 13" iPad, at least 6 each
- App Store Connect: the listing, the privacy label, the age questionnaire, submission
- Testing on a real device in Airplane Mode, cold

Write the session's output so the Mac steps are a short, ordered, copy-pasteable list. The failure
mode to avoid is a session that "builds the iOS app" and hands over something that has never been
compiled.

---

## 2. State: nothing native exists

Verified 2026-08-17 across both repos — **no `ios/`, no `android/`, no `capacitor.config.*`, no
`.xcodeproj`, no `Podfile`, no Swift, no `Info.plist`.** `native-app-plan.md` §6 is titled "build
steps recorded in this repo" and records intent, not artefacts. This project starts from zero.

The web app itself is in good shape for wrapping: content is already split out of `index.html`
(`content/*.json`), fonts are self-hosted, the service worker precaches, persistence is behind an
interface, and six one-segment routes already work. That is the substance of the Guideline 4.2
answer and it is real.

---

## 3. Decisions already taken — do not reopen

| decision | date |
|---|---|
| Apple Developer Program: **Organization — Rounds Codex, Inc.** Enrolled. | 2026-08-14 |
| **No login wall on iOS.** The wall stays on the web. | 2026-08-14 |
| v1 is **free**, no paywall. Independent medical review gates the *paid* launch, not this one. | 2026-08-04 |
| Later: **$5/month for everyone**, one price, no student tier. | 2026-08-04 |
| Early App Store users grandfathered via `AppTransaction.originalAppVersion`. | 2026-08-04 |
| Patents: settled, Alice §101. **Do not reopen.** | — |

**"Clinically reviewed" IS allowed** (revised 2026-08-09); **"peer-reviewed" is forbidden**.
Attribution is **"created by a team of clinicians"**, with Dr. Kreithen named as Founder & Clinical
Lead — not "written by a physician". See `marketing-brief.md`.

---

## 4. The work, in the order it should be done

### 4.1 First — the no-wall iOS variant (task #43)

Blocks everything else, because every screenshot and the whole privacy label depend on it. Full
detail in `app-store-checklist.md` §1. In short: **it is a build-time variant, the inverse of
`scripts/restore_login_wall.js`, asserted and verified headless — not a fork of the codebase.**

Four surfaces claim an account exists, and three are content rather than code:

1. **My account → "Signed in"** — email, Sign out, Delete my account. Three controls that cannot do
   anything with no account. This is the **Guideline 2.1 App Completeness** shape that already cost
   this project months on the gallery PDF stub.
2. **My account → Subscription** — "invitation-only while in development". False on iOS.
3. **Privacy page** — "Access is by invitation and needs an account, so we hold your email address".
   **Contradicts a "Data Not Collected" privacy label outright** — Guideline 2.3.1.
4. **The privacy policy URL** on the submission form points at a page describing the *web* product.
   **DECIDED 2026-08-14: one platform-aware policy**, not two documents that will drift — a short
   paragraph saying the website requires an invitation and stores your email, and the iOS app has
   no account and stores nothing.
   **Not written yet, deliberately.** As of v126 the public pages describe the web product, which
   is accurate today: there is no iOS app to describe. Add the paragraph **to `RC_LEGAL` in
   `index.html`** and re-run `node scripts/build_legal_pages.js <root> --apply` — never edit
   `privacy/index.html` by hand, it is generated. Do it **before submission**, since Apple links
   that URL from the listing.

**One trap in that generator, found the hard way on 2026-08-17.** `RC_LEGAL` is authored for the
in-app view, so its prose can carry markup that only works with the app's JavaScript. Both public
pages shipped `<a href="#" onclick="contactUs();return false;">our contact address</a>` — and the
pages have no `<script>` at all, so it threw a `ReferenceError` and did nothing. A dead control on
the page Apple links to, of exactly the shape that made the gallery PDF stub survive for months.
The generator now rewrites it to a `mailto:` and **refuses to emit any remaining `onclick`,
`href="#"` or `javascript:`**. If you add the platform paragraph and the build throws, that guard is
working — add a rewrite, do not weaken it.

The account page's own code is the reference: `accountHTML()` in `index.html`. Note that
`rcAccountEmail()` falls back to the literal string `'Signed in'`, so the block does not look broken
in testing — it looks plausible and does nothing. That is exactly why it needs a variant and not a
runtime `if`.

### 4.2 Second — bundle size

Measured on the live tree 2026-08-17:

| component | size |
|---|---|
| **whole tree** | **910 MB** |
| gallery page images | ~450 MB (1,020 pages, JPEG q88, 1024×1536) |
| gallery PDFs | **163 MB** (102 files, one per gallery) |
| audio | **180 MB** (31 recordings) |
| `gthumbs/` | 46 MB |
| `usmle/img/` | 25 MB (197 illustrated items) |
| `content/*.json` | 8.9 MB |

The three levers, in order of value:
1. **Do not bundle the gallery PDFs** (163 MB). Resolve them against the public origin the way
   `RC_SHARE_ORIGIN` already resolves share links. The PDF is a download button, not the reading
   experience — the viewer reads the JPGs.
2. **Stream the audio, do not bundle it** (180 MB). Already outside `sw.js` `CORE` for the same
   reason, so the precedent exists.
3. **WebP the gallery pages.** The last measurement was 383 MB after conversion at 90 galleries; it
   is 102 now, so **re-measure rather than trusting that figure.**

Even with all three, this lands around 240 MB — under the target, but with no margin.

**DECIDED 2026-08-14: measure the real limit first, then choose.** Do not start compressing artwork
to hit 250 MB until that number is confirmed to apply.

**Before optimising to a number, check what the number actually is.** The 250 MB target comes from
Apple's cellular-download limit, which has moved more than once and is not a rejection threshold —
the hard bundle cap is far higher. **Verify the current limit rather than inheriting ours.** And
consider **On-Demand Resources**: ship the app plus core content, deliver galleries as asset packs.
That is Apple's own mechanism for exactly this, it preserves the offline claim, and it may be a
better answer than compressing artwork the physician had produced at a deliberate standard.
`CLAUDE.md` is explicit that 1024×1536 is the standard and was chosen after the old pipeline's
800×1200 was found to be below what a Pro Max shows.

### 4.3 Third — Guideline 4.2, "repackaged website"

This is the single most likely rejection. `native-app-plan.md` §1 has the argument; the checklist
ranks the work by value: **Core Spotlight indexing of the 183 conditions** (highest value — it makes
the content part of the OS), **Universal Links** for `/c/ /s/ /g/ /r/ /u/ /x/`, **save gallery PDF
to Files**, **local notifications for the review queue**, **haptics on quiz answers**.

Universal Links needs `apple-app-site-association` served from the web root — a session can write
and deploy that.

### 4.4 Fourth — copy, support page, submission fields

Counts are stale everywhere. Current, read from shipped content: **183** conditions, **102**
galleries / **1,020** pages, **1,840** quiz questions, **31** audio recordings, **1,010** USMLE
items, **150** NCLEX items, **300** drugs, **470** guideline entries across **25** specialties,
**1,418** resident entries, **10** calculators, **197** illustrated USMLE items.

Still open: the **support URL** page (does not exist; `teacher@roundscodex.com` is the address), the
age-rating questionnaire, and export compliance.

**"AI study tutor" in `manifest.webmanifest` is closed** (2026-08-17). Ask Rounds Codex is dropped
from the iOS build — in a local-origin bundle it could only ever be its five-entry keyword fallback
— and `scripts/build_ios_variant.js` rewrites the phrase. `app-store-submission-draft.md` §3 is
rewritten around it. The web keeps the feature and the phrase; both are correct there.

---

## 5. Traps that carry over

- **`file://` does not work.** The content loader uses `fetch`. The native bundle must serve over a
  local http origin or Capacitor's scheme — opening `index.html` off disk shows an explicit failure
  message. This is the single most likely "the app is blank" cause.
- **Do not add a second `<base>` tag.** The head script decides it from `RC_ROOT`; hard-coding `/`
  breaks the native bundle specifically.
- **Any new one-segment route must be added to the `RC_ROOT` regex** (`/^\/(c|s|g|r|u|x)\//`) **and
  to `RC_OPEN_ROUTES`** in the wall. Miss it and `<base>` becomes that folder, every
  `content/*.json` 404s, and the app boots to "Content didn't load" with no page error.
- **Never clone the response the service worker returns for a navigation**, and the navigation body
  must be drained into memory. This bug shipped **four times** and presents as "WebKitBlobResource
  error 1." Run `node scripts/verify_sw.js` and read the whole service-worker section of `CLAUDE.md`
  before touching `sw.js`. A regression guard that does not fail on the pre-fix file is decoration.
- **A fresh browser context hits `#rc-gate`**, the medical disclaimer, which swallows every tap.
  Any Playwright test that clicks anything must dismiss it. `scripts/rc_test_auth.js` seeds a
  session and is **not** a no-op.
- **Verify headless before delivering.** `playwright-core` + Chromium at
  `/opt/pw-browsers/chromium-1194/chrome-linux/chrome` (`--no-sandbox`), served with
  `scripts/netlifysim.js <ROOT> <PORT>`. Assert zero page errors.
- **The live site is unreachable from a container** (the agent proxy 403s it). Verify a deploy with
  `git show origin/main:<path>` plus the physician opening `/version.txt`. **Never make a deploy's
  confirmation depend on the Netlify connector** — and do not ask the physician to toggle a
  connector more than once; a mid-conversation retoggle does not reach a running session.

---

## 6. What NOT to do

- **Do not touch the anatomy leader-line project.** Separate conversation, branch
  `claude/anatomy-label-corrections`, see `galleries-staging/HANDOFF-anatomy-label-corrections.md`.
- **Do not build a paywall or in-app purchase.** v1 is free; IAP is a separate submission with
  different scrutiny.
- **Do not flip any `verified:false` condition.** The physician is the medical gate. Three
  conditions are still awaiting review.
- **Do not deploy to the live app repo** without asking. The web launch is its own project
  (`LAUNCH-AUG17.md`).
- **Do not fork the codebase for iOS.** One source, one variant script.

---

## 7. Open state to carry over

- **The public `/privacy/` and `/terms/` pages are LIVE as of v126** (2026-08-17). The App Store
  privacy-policy URL now resolves for a signed-out reviewer. **`noindex` was deliberately left in
  place** — `robots.txt` and the `X-Robots-Tag` block in `_headers` are untouched, so this published
  the pages without starting the §412 copyright clock. Removing `noindex` is a separate, deliberate
  act (task #41) and the physician's call.
- **The app repo's `main` is shared with the anatomy leader-line conversation, which pushes to it
  constantly.** It went from v89 to v125 in three days while this clone sat at v89, so the held
  commit both collided on a version number and would not fast-forward. **Always
  `git fetch origin main` and rebase before pushing to that repo, and take the next version number
  from `git show origin/main:version.txt` rather than from anything local.** A 403 on push can be
  collateral from the non-fast-forward rather than an auth problem — fetch before diagnosing it.
- Open tasks relevant here: **#43** (no-wall variant), **#27** (download size). Everything else on
  the task list belongs to other projects.
