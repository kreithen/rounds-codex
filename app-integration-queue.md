# Live app (`index.html`) — integration & change queue

> **STATUS 2026-07-20:** Items 1–8 below, the **USMLE Mode** + **Resident Mode expansion**
> content integrations, AND the **5 Cardiology galleries + 3 Cardiology quizzes** are all
> BUILT & VERIFIED into `applive/index.html` (local, gitignored).
> - First bundle: `rounds-codex-app-deploy-20260720.zip` (index.html + usmle/, 65 files).
> - Complete superset bundle: `rounds-codex-app-deploy-20260720-cardio.zip` (index.html +
>   usmle/ + assets/{aortic-dissection,cardiac-arrest,dvt,hyperlipidemia,pad}/, 176 files).
>
> **Cardiology galleries (5):** aortic-dissection, cardiac-arrest, dvt, hyperlipidemia, pad —
> each 10 approved pages rendered (180 dpi) + thumbs + compact ~5 MB gallery PDF; GALLERIES
> entries + REALGAL membership added; page titles read visually from each page's IMAGE TITLE
> box (aortic p7 = "Management Overview", read from its header since it has no title box).
> **Cardiology quizzes (3):** aortic-dissection, cardiac-arrest, dvt — 10 Q each wired into
> QUIZZES (q/ch/correct/exp/pearl/img), auto-enabling the "Take the Quiz" button on those
> condition pages. Verified headless: galleries render, viewer opens, quizzes load & score,
> zero JS errors. (PAD + Hyperlipidemia have galleries only — no quizzes were uploaded.)


Everything to apply to the LIVE app (`rounds-codex-app` repo → https://rounds-codex.netlify.app)
in the **desktop + Chrome** session. All edits are built/verified here first, then published in
ONE integrated pass: pull the current live `index.html` once → apply all of the below → verify
headless → upload to `main` via Chrome → Netlify auto-deploys.

> The live `index.html` is NOT in this workspace (private repo, firewalled). Pull the newest copy
> from `github.com/kreithen/rounds-codex-app` (`main`, via Chrome → Raw) before editing so nothing
> already live gets reverted.

## Layout / functionality changes
### 1. Home-page tagline text
- **Change:** `KNOWLEDGE. CLARITY. BETTER OUTCOMES` → `LEARN. UNDERSTAND. SUCCEED`
- **Scope:** text content ONLY — keep the exact same font, size, weight, letter-spacing, and
  color (do not touch any CSS/classes; only replace the words).
- **How:** grep the live `index.html` for the tagline (match the actual on-page form — it may be
  upper/mixed case, split across spans, or use `&middot;`/`.` separators) and replace just the
  three words, preserving whatever markup/separators wrap them. If it's three separate elements,
  replace each word in place (LEARN / UNDERSTAND / SUCCEED).
- **Verify:** tagline reads "LEARN. UNDERSTAND. SUCCEED" with identical styling; nothing else moved.

### 2. Resident Mode — put the section title first, rename the conditions list
- On each specialty page, show that specialty's **section-2 title at the TOP of the page**
  (the `RES_SECTION2_TITLE` value — e.g. "Top 50 Inpatient Diagnoses" / "Top 50 Operations" /
  "Top 50 Topics & Procedures" / "Top 50 ED Diagnoses" / "Top 60 Cardiology Topics", per specialty).
- **Underneath it**, list all the conditions under a heading renamed **"Codex Conditions" →
  "Relevant Conditions"**.
- **Add the Cardiology section** to the specialty list. (Comes in with the Resident Mode data
  expansion — `RES_ACTIVE` in `resident-staging/res-logic-wiring-snippet.js` already includes
  `cards`; confirm `cards` shows in the picker after the expansion.)

### 3. Resident Mode — larger back arrow
- Inside each specialty section, make the **back arrow in the upper-left corner larger**
  (the control that returns to the main specialty list). Style/size only.

### 4. Bottom control bar
- Move **"Ask Rounds Codex" to the far right** of the bar.
- Rename the **"Resident" → "Resident Mode"** label.

### 5. Medical mode → USMLE PREP entry button
- When the user selects **"Medical"** mode on the home page, add a **large button directly under
  the "search 180 conditions" bar** labeled **"USMLE PREP"**.
- Clicking it opens the **USMLE test-prep home page** (the USMLE Mode app we built in `preview/`,
  integrated per the "USMLE Mode" content-integration item below).

### 6. USMLE home page — back arrow to home
- On the USMLE home page, place an **arrow button in the upper-left corner** that returns to the
  **Rounds Codex home page**.

### 7. USMLE mode — hide the bottom control bar
- **Do NOT render the bottom control bar while in USMLE mode** (it should only appear in the
  main app / Resident mode, not inside USMLE Mode).

### 8. BUG — condition swipe adjacency (Hypertension)
- Left-swiping off the **Hypertension** page currently jumps to **COPD** — wrong. It should swipe
  to **Aortic Stenosis (Valvular Disease)**. Find the condition swipe order / neighbor mapping and
  fix Hypertension's left-swipe target to Aortic Stenosis (Valvular Disease). Verify the reverse
  swipe is consistent too.

<!-- More layout/functionality changes get appended here as the user sends them. -->

### 9. USMLE performance report (BUILT & VERIFIED 2026-07-22 — ready to upload)
- Adds a full results report to the USMLE page (`usmle/`): overall score ring, breakdowns by
  **organ system** + **difficulty**, honest strengths/needs-work, study recommendations, and the
  per-question review. Reuses the shared report engine (`nclex-report.js`) via a registered
  `usmle` **profile** — the engine is **not forked**.
- **Honesty constraints honored** (verified in tests + on the real page): practice score, **never
  a predicted USMLE score or pass probability**; <3-item areas shown ("limited sample") but never
  driving recommendations; no fabricated strength when none clears the 80% bar.
- **3 files → `usmle/` folder:** `index.html` (2 tiny edits: 2 script tags + a render hook before
  `show("results")`, try/catch-wrapped), plus NEW `nclex-report.js` and `usmle-report.js`.
- Staged in `applive/usmle/` (gitignored). Drop-in bundle + upload steps: scratchpad
  `usmle-report-deploy/` (`UPLOAD-TOMORROW.md`). Modular source committed to `src/report/`
  (engine + profile + 32-assertion test + 25-assertion agnostic test; both green).
- Independent of the NCLEX ship (that patches the big root `index.html`; this only touches
  `usmle/`).

## Content integrations (built & staged in this repo)
- **USMLE Mode** — wire the finished quiz app (`preview/`) into `index.html` (new section/route,
  TBD with user). 705+ items across Step 1/2 CK/3 Day 1/3 Day 2.
- **Cardiology galleries (5)** — `galleries-staging/*-gallery.pdf` via the `medcodex-gallery`
  builder; titles pre-drafted in `galleries-staging/*-titles.json` (confirm visually).
- **Cardiology quizzes (3)** — pre-parsed to `galleries-staging/*-quiz.json`; wire into the
  Aortic / DVT / Cardiac-Arrest condition pages (confirm the app's quiz format first).
- **Resident Mode expansion** — replace embedded `RES_DATA` with the 1308-entry master +
  wiring from `resident-staging/` (data expansion, NOT a first-time patch — see its DEPLOY-README).

## SHIPPED 2026-07-25 (live on rounds-codex.netlify.app, user-confirmed)
- **NCLEX-RN module** — patched into the live root `index.html` and published. Opens full-screen
  in Nursing mode. 150 items.
- **USMLE performance report** — 3 files into `usmle/`; profile registered on the shared engine.
- **8 Pulmonary galleries** — copd, asthma, cap, pe, ards, pneumothorax, tb, lung-cancer.
  10 images each, thumbs reuse the full image (`thumb == file`), page order + titles read off
  each page's "IMAGE N OF 10" / IMAGE TITLE. Source was mixed: 2 production PDFs (copd, asthma)
  and 6 folders of UUID-named PNGs. All rendered to 800×1200 for phone.
- **Metabolic Syndrome** — new Endocrine condition (`E88.81`), Endocrine now 13, sits between
  T2DM and Hypothyroidism for swipe order. Content researched + drafted (2009 harmonized
  AHA/NHLBI/IDF criteria + the **June 2026 AHA/ACC/ADA/ASN CKM guideline**, CKM Stage 2 +
  PREVENT). **`verified:false`** — RC VERIFIED badge intentionally OFF pending physician review.
- **NCLEX entry button** — restyled to match the `.usmleprep` banner (same geometry/radius/
  padding, icon tile + title + subtitle + chevron) in the Nursing accent.
- **NCLEX test interface** — header now mirrors the app's own `.qhead`/`.qtop` pattern and the
  USMLE page: rounded back button + eyebrow/title + logo, 8px gradient progress bar, `.pmeta`
  row, card radius 22/pad 24, stem 21px/800, options radius 16. Refactored into one shared
  `nxHead()` used by all five module screens.
- **BUG FIXED — NCLEX button vanished after navigation.** It was injected once by JS, so the
  app's `paint()` wiped it whenever the library re-rendered. Moved into the home template next
  to `.usmleprep`, so it now persists exactly like the USMLE button.

## BUILT & VERIFIED 2026-07-26 (awaiting the user's Chrome/phone upload)
- **Pinch/zoom rewrite** in the gallery viewer — pointer-event `Map`, distance-ratio pinch,
  anchored `setZoom(z,cx,cy)` (`gpx=ax-(ax-gpx)*(z/gzoom)`), `gClamp()` pan bounds, MINZ 1 /
  MAXZ 4, double-tap 2.5× / double-tap-to-reset, `stage.style.touchAction='none'`, zoom reset
  on `gnav()`. Fixes "can only zoom in once" + the motion artifacts. Verified with synthetic
  two-pointer gestures: 1 → 2.5 (double-tap) → 4 (pinch) → 4 (pinch again) → clamps at 4 →
  1 (double-tap reset); 1 after next/prev.
- **Home-page mode swipe** — `MODES=['nursing','medical','resident']`; swipe-left from Nursing →
  Resident, swipe-right → Medical. Ignores swipes starting on chips/toggle/viewer/inputs;
  needs |dx|≥60, |dy|≤0.7|dx|, <700 ms.
- **Resident specialty swipe** — replaces the top of `stack` instead of pushing, so Back still
  returns to the specialty list (verified: em → fm, depth stays 2, Back → `res`).
- **`RESIDENT SPECIALTIES` button** (`.respec`) under the search bar in Resident mode — same
  geometry/radius as `.usmleprep` in the `--res` purple gradient; opens `root('res')`.
- **Resident-mode back arrow** — `.res-topbar` `.tb-btn` at the upper-left of the specialty
  list + a "Library" label; `root('library')` (verified: depth 1, library rendered).
- **Toggle label** — "Medical" → **"Medical Student"**.
- **Metabolic Syndrome** — `verified:true`, RC VERIFIED badge now ON (physician-confirmed).
- **Canonical logo** re-rendered on all 21 endocrine/respiratory galleries + the 5 Cardiology
  galleries (`gal-final/`, `cardio-final/`; pristine originals kept in `gal-orig/`,
  `cardio-orig/`). 116 pages needed correction.
- **Per-condition share button + share URLs** — see the next section.

### Per-condition sub-URLs (`/c/<id>`) — needs the root `_redirects` file
- Share button sits next to the ICD-10 badge (`.icd-row` > `.d-icd` + `.d-share`), uses
  `navigator.share` (Apple/Android sheet) with a clipboard/prompt fallback on desktop.
  Share text strips the tagline's `<b>` markup.
- `condURL(id)` → `location.origin+'/c/'+encodeURIComponent(id)`. The router accepts
  `/c/<id>` (preferred), `?c=<id>`, and `#c=<id>` (older links keep working).
- **Two things are load-bearing:**
  1. **`_redirects` at the repo root**, one line: `/c/*  /index.html  200`. Without it every
     shared link 404s. (Staged at `deploy/_redirects`.)
  2. **A `<base>` tag.** Gallery `base` values are relative (`""`, `"<id>/"`,
     `"dvt-upload/assets/<id>/"`), and so are `href="usmle/"` and
     `serviceWorker.register('sw.js')`. At `/c/dka` without a base they resolve under `/c/` —
     proved in the browser: USMLE PREP resolved to `/c/usmle/`. **Now written at runtime, not
     hard-coded** — see the portability pass below.
- Verified against a local Netlify simulation (real files first, else `/c/*` → index 200):
  `/c/metabolic-syndrome` opens the condition with the clean URL intact; gallery images load
  10/10 from `/c/copd` (`firstSrc: /copd-01.jpg`); USMLE PREP resolves to and navigates to
  `/usmle/`; an unknown id (`/c/not-a-real-condition`) falls back to the 181-card library;
  legacy `#c=`/`?c=` links still route. Zero page errors, zero unexpected 404s.

### Portability pass 2026-07-26 — one index.html for web + native (`scripts/clean_patch.py`)
Groundwork for the eventual Xcode / App Store build. Full plan: **`native-app-plan.md`**.
The same `index.html` now runs unchanged from the website root, a `/c/<id>` link, **and a
local bundle on `file://`** — verified headless in all three.
- **Dynamic app root.** The hard-coded `<base href="/">` is replaced by a boot script that
  decides the root before the first relative URL is parsed and writes `<base>` itself
  (`RC_ROOT`): site root → `/`, `/c/<id>` → `/`, bundle → the document's own folder. A
  static `/` would have pointed at the filesystem root inside a WKWebView.
- **Deep link captured at parse time** (`RC_DEEPLINK`) — the first `paint()` normalises the
  address bar, so the router can no longer read the original path by the time it runs.
  Legacy `?c=` / `#c=` links are captured the same way and *upgrade themselves* to `/c/<id>`.
- **`RC_SHARE_ORIGIN`** pins share links to the public site instead of `location.origin`, so
  a share sent from the native app is a working web link, not `capacitor://localhost/c/dka`.
- **`RC_API`** — empty on the web (same-origin, no CORS), absolute in a bundle. The Ask
  function was called with a root-relative path, which in a bundle resolves *into the app
  package*. Native will need `Access-Control-Allow-Origin` on that function.
- **Fonts self-hosted and inlined** (`scripts/build_fonts.py`): Inter + Oswald variable
  woff2, Latin + Greek + Latin-Ext-A (subset from 85 kB → 14 kB), base64 in a `<style>`,
  +150 kB. No `fonts.googleapis.com` — typography now works with zero network. Verified 0
  CDN requests and correct `ū Δ μ β α₁ ½ ≤` rendering. Adds no files to upload.
- **Address bar tracks the visible condition** via `replaceState` only — the app owns its
  nav stack, and mirroring it into browser history would be a second source of truth.
  Verified `history.length` does not grow, and swiping conditions updates the URL.
- **Service worker registered on http(s) only** — a no-op on `file://` that can collide
  with the native shell's asset handling.
- Both build scripts are byte-reproducible: re-running them on the pre-pass snapshot
  regenerates the shipped `index.html` exactly.

### About section + first-run terms gate 2026-07-26 (`scripts/add_about.js`)
The bottom bar's **Resident Mode** slot becomes **About (?)**. That slot was largely
redundant — it called `root('res')` *without* switching mode, so you could land in the
resident specialty list while the app was still in Nursing mode. Resident content is now
reached coherently: mode toggle (or home swipe) → RESIDENT SPECIALTIES.
- **Four new views** — `about` (hub), `account`, `terms`, `privacy`. None are in `IMMERSIVE`,
  so the bottom control bar stays visible and navigable throughout; `activeRoot` maps the
  sub-pages to `about` so the nav stays lit. Every page has a working back control
  (`navBack()` falls back to `root('library')` when the stack is one deep, so it is never a
  dead button).
- **Hub**: mission, what each mode is for, live content counts (derived, not hard-coded), a
  "getting the most out of it" section, a gold **What it is not** safety block, clinical
  advisors, then Share / My account / Contact / Terms / Privacy.
- **My account**: real local data only — bookmarks, quizzes taken, best first-try score,
  NCLEX attempts/best from the new store, plan = "Free while in development", a plain
  statement that data is device-local, and **Clear my saved data**. No fake subscription UI.
- **Contact** = `mailto:` with app version, mode, screen and user-agent appended, so a bug
  report arrives reproducible. **Swap `RC_CONTACT` for a dedicated support address before
  launch** — it currently points at Dr Kreithen's working mailbox.
- **Terms + Privacy** written as readable pages (14 and 8 sections). Emphasis where the user
  asked for it: *anything done for a real patient must be approved by the attending,
  preceptor or clinical instructor*; verify doses; practice scores are not predicted exam
  scores and not a pass probability; not affiliated with NCSBN/NBME/FSMB.
  **Draft, not legal advice — needs a lawyer before launch**, more so once money is involved.
  Governing law is pencilled in as Florida and flagged for counsel.
- **Privacy is accurate about the one transmission**: Ask Rounds Codex POSTs the question
  text and the current mode to the Netlify function. Everything else stays on device. This
  also refines the App Store privacy answer — it is not purely "Data Not Collected" unless
  the Ask endpoint's retention says so.
- **First-run gate**: blocks until "I understand and agree", records `{version, at}`, and
  re-prompts when `RC_TERMS_VERSION` changes. Reading Terms/Privacy first is possible without
  agreeing. `RC_STORE.reset()` deliberately keeps the acceptance — clearing study data is not
  a reason to re-consent.
- Verified: gate shown/blocking/persisted, all sub-pages reachable with working back and a
  live nav bar, no nav occlusion at the bottom of any page, legal text contains every
  required statement, account stats reflect real state, share payload correct — plus the
  14-check feature regression and the persistence suite, zero page errors.
- **`scripts/add_about.js` is standalone on purpose.** It brings its own terms storage
  (`RC_TERMS`, separate from `RC_STORE`), its own `<style id="about-css">` block and its own
  boot hook, and it reads `RC_STORE`/`NCLEX_STORE` defensively — so About can ship on its own
  on top of whatever is currently live, ahead of the split/persistence work. Verified applying
  cleanly to three bases: a 6.7 MB pre-split file, the pre-clean build, and the current
  split+persistence build. On a base without `RC_STORE` the study-activity block and the
  clear-data button are simply omitted.

#### Hyperlipidemia white margins trimmed 2026-07-27 (`deliver15`, images only)
Those ten pages were rendered with the paper margin still around the artwork — a 1139×1474
canvas with the dark page inside at x 110–1028, y 48–1425 — so Hyperlipidemia was the only
gallery showing a white frame. Barely visible in the viewer; obvious on the new galleries
index, where the border eats a large share of a small thumbnail. Same light-margin quirk that
needed `page_rect()` during the logo pass.
- Cropped to each page's own detected edge (2px inset kills the JPEG halo) and resized to
  **915×1372**, identical to DVT / Cardiac Arrest / Aortic Dissection. Brightest surviving edge
  pixel **17/255**, was 255.
- **No `index.html` change** — same filenames and the dimensions the app expects, so it is a
  straight image replacement at `hyperlipidemia-upload/assets/hyperlipidemia/`.
- Gallery PDF rebuilt from the cropped pages (1.7 MB vs 1.0 MB before; siblings are 0.8–1.0 MB).
  Optional — the images are the fix.
- **Swept every other local gallery for the same defect: hyperlipidemia was the only one.**
- Tool: `scripts/trim_page_margins.py`, which detects each page's edge rather than assuming a
  fixed inset and fails the run if a light fringe survives. Re-running it reproduces the
  shipped files byte-for-byte.

#### Galleries page rebuilt 2026-07-27 (`deliver14`, one file)
- **All ten thumbnails per gallery**, 5-across (4 under 380px), each opening `openViewer(id,i)`
  at that image — `openViewer` sets `GID`/`gcur` itself so it works from outside the gallery view.
  340 thumbnails total.
- **Specialty / Alphabetical toggle** (`gxMode`, default `spec`) and a **search box** (`gxTerm`,
  matches condition name *or* category). State lives outside the render because `paint()`
  rebuilds the view; the dispatch calls `gxRender()` after setting `innerHTML`.
- Gallery name row still opens the full gallery. Empty state names the failed search term.
- ⚠️ **DATA WEIGHT — the page is expensive.** 21 galleries use the full image as their thumbnail
  (`thumb == file`, from the decision to halve the upload file count). Measured locally:
  **210 images = 70.2 MB, avg 326 kB**, each rendered into an 81×108 px box. With the cardiology
  galleries the full index is roughly **85 MB** if scrolled end to end. Lazy loading limits this
  to what the user actually scrolls past, and search/toggle narrow it (one condition ≈ 3 MB),
  but it should be fixed.
  **Fix, offered and not yet done:** re-encode real thumbnails (~160×240 @ q80 ≈ 12 kB) from the
  local originals → those 210 drop to **~2.5 MB**, and every per-condition gallery gets ~10×
  lighter too. Cost is ~210 new image files to upload (3 drags), which is why it was not bundled
  into a one-file deploy.
- Verified: both grouping modes and sort order, search by name and category, empty state, mode
  persistence across leaving the page, thumbnail → correct viewer image, name row → gallery,
  both back paths, 9 regression checks, zero page errors, additive against the base.

#### All Galleries button + new mission copy 2026-07-26 (`deliver12`, one file)
- **`.allgal`** — white pill reading **"All Image Galleries"**, centred, injected after the mode banners
  and before `#chips`, so each mode's own CTA stays first and the condition list is not pushed
  far down. Shown in **all three modes**. Sized `width:fit-content; min-width:min(70%,300px)`
  with `white-space:nowrap`: at a flat 70% the label wrapped to two lines on a 320px screen and
  the pill grew to 64px tall. Verified single-line and centred at 320 / 375 / 430px. Deliberately lighter than the coloured banners:
  galleries are a browse destination, not a mode's headline action.
- **Back from `galleries` is path-dependent and that is intended.** `go('galleries')` from the
  home button gives stack `[library, galleries]` → back returns home; from About it gives
  `[about, galleries]` → back returns to About. `navBack()` handles the depth-1 case.
  Nav highlight for the view moved from `about` to **`library`**, since the home button is now
  its primary entry point.
- **New About opening copy** (Dr K's text) replaces both original paragraphs.
- Verified: pill geometry/placement/colour in all three modes, both back paths, the gate lock
  still intact, 9 jump links, 34-row index, 11 regression checks, zero page errors, additive
  against the base (400 random samples intact).

#### About revision 2026-07-26 (`deliver11`, one file) — gate lock, jump links, galleries index
1. **Contact is `teacher@roundscodex.com`** (Dr K owns roundscodex.com via GoDaddy; the mailbox
   still has to be created — mail before then bounces).
2. **The gate actually locks now.** Tapping Terms/Privacy previously called `root(...)` and
   closed the gate, dropping the user into the app — it defeated the purpose. Both documents
   now render *inside* the locked panel (`rcGateShow('summary'|'terms'|'privacy')`), sharing
   `legalBodyHTML()` with the full pages so there is one copy of the text. Back returns to the
   summary; the agree button exists only there. Verified by hit-testing five screen points in
   both states — nothing of the app is reachable — plus reload-mid-document returns to the gate.
3. **"What it does" is hyperlinked** — nine `.ab-jump` links. Each switches mode where the
   destination is mode-specific (NCLEX → nursing + `NCLEX.openModule()`, USMLE → medical +
   `/usmle/`, Resident mode → resident + `root('res')`), otherwise the link looks broken.
4. **New galleries index** (`galleriesHTML()`, view `galleries`): all 34 galleries grouped by
   specialty with thumbnail, name, page count and ICD-10. Reached with `go('galleries')` — NOT
   a ROOT — so Back returns to About. Built as a **list, not a card grid**: the first version
   was a two-column grid of large thumbnails, and a cropped square of a dense teaching page is
   unidentifiable while 34 of them made an enormous scroll. Thumbnails are small and
   `object-position:top`, so the page title band shows.
- **Share origin:** this base has no `RC_SHARE_ORIGIN`, so `shareApp()` uses `location.origin`
  — shared links become roundscodex.com automatically once DNS points at Netlify. Deliberate:
  hard-coding the custom domain before DNS resolves would send people to a parking page.
- Verified: 25 About/lock/index checks + 11 regression checks, zero page errors, additive
  against the base (400 random samples intact). 8 cardiac thumbnails could not be checked
  locally — those images exist only on the live site.

#### About-only deploy 2026-07-26 (`deliver10`, one file)
Shipped ahead of everything else at the user's request. Built on the **last `index.html`
delivered before the DI / cardio / share-URL rounds** — deliberately *not* the newest build,
because each newer piece needs a companion file:
- the DI gallery entry would give a gallery with 10 broken images (`di-gallery.zip` unuploaded)
- `/c/` share links need root `_redirects`
- the content split needs the whole `content/` folder
Also therefore excluded: persistence, the NCLEX full report, the resident back arrow, and the
Metabolic Syndrome `verified:true` flip. All still queued for the full deploy.
**Could not verify what is actually live** — the agent proxy denies `rounds-codex.netlify.app`
and the app repo is firewalled — so the base is a best read, chosen to be safe either way (it
preserves all 34 gallery entries and adds nothing needing a companion file). If a newer
`index.html` turns out to be live, rebuild from it: the patch is base-agnostic.
Proved additive against the base: all four intentional edits applied, and 400 random 400-char
samples of the original all still present.

### Persistence 2026-07-26 (`scripts/add_persistence.js`) — nothing used to survive a reload
The library's star button toggled a class and showed a toast: it looked like a bookmark
feature and saved nothing. Quiz progress and practice attempts evaporated too.
- **Root cause on the exam side was not the store.** `store.js` (from the exam-module skill)
  was written and never shipped, so the NCLEX engine fell back to its in-memory shim. Worse,
  `showReport()` bails to a legacy summary when `window.NCLEX_REPORT` is missing — and the
  `Storage.record` call sits *inside* that branch, so no attempt could ever be recorded no
  matter how good the store was. The report engine had only ever been shipped to `usmle/`.
- **Now inlined into `index.html`:** `store.js` (pointed at localStorage via
  `NCLEX_STORE.use(LocalStorageAdapter("rc."))`), the shared report engine, and a small
  `RC_STORE` for bookmarks + quiz progress. +58 kB (0.65 → 0.71 MB).
- **Side effect worth knowing:** NCLEX results now show the **full report** (score ring,
  category breakdown, strengths/needs-work) instead of the legacy summary — the same one the
  USMLE page has had. Honesty constraints verified on the rendered report: practice score,
  **no pass probability or predicted score**, limited-sample areas flagged.
- **Bookmarks** persist, filter the library from the top-left star, and have a 44×44 tap
  target on each card. Anchored to the **ICD line, not the top-right corner**: cards are
  ~184px wide and a long unbreakable name ("Hyperparathyroidism") overflows its box, so a
  top-right star sat on the title. Verified zero text/star collisions across all 181 cards.
- **Quiz progress**: best first-try score per condition, shown on the "Take the Quiz" button.
- **Condition count is now derived** (`${DATA.length}`) — two places still said "180".
- All device-local, never transmitted, so the App Store privacy label stays "Data Not
  Collected". Both stores sit behind an interface, so the native shell can swap the adapter
  (BridgeAdapter is already in `store.js`) without a single call site changing.
- 11 kB of localStorage after a full 85-item attempt; attempt summaries capped at 50.
- Verified: 16 persistence checks (all write → reload → re-read) plus the 14-check feature
  regression, zero page errors.

### Content split out of index.html 2026-07-26 (`scripts/split_content.js`)
The app is going full-native and the website gets pulled, so content-update latency was going
to become App Store review latency for every typo. Content now loads from `content/*.json`.
**Full detail + the decisions behind it: `native-app-plan.md` §5.**
- `index.html` **6.87 MB → 0.65 MB**; `content/` = 6.21 MB across 7 files. Total unchanged.
  A new condition or gallery is now a one-file upload instead of a 6.9 MB one.
- Files: `conditions.json` (181), `drugs.json` (300), `resident.json` (1308 + specialties +
  titles + per-specialty conditions + 180 approach), `nclex.json` (150), `quizzes.json` (9),
  `galleries.json` (35 + REALGAL), `or.json`.
- Containers stay declared in place but empty and are **filled**, not reassigned, so
  `window.NCLEX_DATA` and every other existing reference stays valid. The 5 parse-time
  lookups (`byId`, `ORDER`, `rxById`, `rxByCond`, `resById`), the initial `paint()` and the
  `/c/<id>` router boot all moved into the loader.
- **`file://` no longer works** — the loader uses `fetch`. The native shell must serve from a
  real origin (Capacitor / a custom scheme handler), which was already the plan. Opening the
  file off disk now says so explicitly instead of showing a blank screen.
- **UPLOAD CHANGE: the `content/` folder must go up with `index.html`.** An old `index.html`
  with new JSON, or vice versa, still works — but shipping `index.html` alone the first time
  leaves the app with no content at all.

## Gallery 36 — Peptic Ulcer Disease (built & verified 2026-07-27, awaiting upload)
Attaches to `pud` (Gastrointestinal, K27.9). **First GI gallery** — the galleries index gains a
new GASTROINTESTINAL section. Ten pages at native 1024x1536, avg 421 kB. Same layout as gallery
35: `base:''`, `file: assets/pud/pud-NN.jpg`, `thumb: gthumbs/pud-NN.jpg`.

- Logo fault this batch was uniform: the template split the **Rx off as a separate mark in front
  of "Rounds"** rather than the R of "Rounds" carrying the x, and dropped the lens flare on all
  ten. No spurious letter inside the emblem this time.
- `scripts/fix_page_logo.py` gained a `placement()` pass so the uniform logo size is **measured
  from the set** instead of hardcoded — the constants tuned for the Hyperparathyroidism template
  were wrong for this one (66 px here vs 56 px there).
- Titles read off the pages: the footer's "MODULE TITLE" says "Peptic Ulcer Disease Foundations"
  on all ten.

### Source defects reported (re-render, not blocking)
- **Page 1** — the anatomy diagram's two callouts *both* read "Gastric ulcer"; the "(more
  common)" one points at the duodenal bulb and should say "Duodenal ulcer". Page 2 labels the
  same structures correctly.
- **Page 7** — barium panel says the gastric ulcer niche is along the **greater** curvature; it
  is classically the lesser curvature, which pages 2 and 5 of this same gallery state.

## Gallery 35 — Hyperparathyroidism (built & verified 2026-07-27, awaiting upload)
Attaches to the existing condition `hyperparathyroid` (Endocrine, E21.3 — matches the ICD-10 on
the pages). Ten pages delivered as loose 1024x1536 images, so this is the **first gallery kept at
full native resolution** (no 800 px downscale); avg 438 kB, 4.3 MB for the set.

- `base: ''`, `file: assets/hyperparathyroid/<id>-NN.jpg`, `thumb: gthumbs/<id>-NN.jpg` — the
  layout `repoint_thumbs.js` left everything else in.
- Built with `scripts/add_gallery.js` (new — for galleries that arrive as images rather than a
  production PDF; `build_gallery.py` in the skill is still right when there IS a PDF).
- Titles read off the pages, **not** the footer: on pages 1-6 the footer's title field says
  "Hyperparathyroidism Pathophysiology" regardless of the page's subject.

### Logos — all ten wrong, three different ways
`scripts/fix_page_logo.py` (new): eight pages drew a spurious "R"/"Rx" *inside* the emblem
circle, page 5 had no emblem at all, all ten dropped the lens flare, and pages 3 and 5 sat the
lockup on a lighter grey plate reaching past the artwork. Each page is measured on its own
(emblem found by column height, so the frame rules cannot be mistaken for it; wordmark's right
edge = first wide dark gap), then the canonical lockup is drawn at ONE fixed size and position
so the header does not jump while swiping. Asserted: outside the header's left corner every page
is byte-identical to a plain re-encode of the original.

### Source defects reported to the user (re-render, not blocking)
- **Page 5** — "KEY TAKEAWAY" rendered as two garbled overlapping strings; footer uses the wrong
  template (wrong title, and a "Look for: Stones/Bones/Groans/Moans" strip in place of the
  Difficulty / Clinical Source / Review fields).
- ~~**Page 8**~~ — RESOLVED: the user re-rendered it; the clean version is in the build.
- ~~**Page 9**~~ — the histology panel carries page 8's surgical checklist and PTH-drop graph.
  The user reviewed it and chose to ship as-is.
- Clinical note: page 5 leads Physical Examination with Chvostek/Trousseau, which are
  *hypo*calcaemia signs and should be negative in untreated primary HPT.

### Also learned
The "Download Complete Gallery (PDF)" button is a **stub on every gallery** — `toast(...)`, no
download. The PDFs shipped so far are dead weight until it is wired.

## Gallery thumbnails — the `thumb == file` shortcut, undone 2026-07-27
26 of the 34 galleries (21 endocrine/pulmonary + the 5 cardiology) were built by the ad-hoc batch
pipeline, which set `thumb === file` on purpose: it halved the number of files the user had to
drag into GitHub, and at the time only ten thumbnails were ever on screen. The new galleries
index renders **340 at once**, which turned that into ~78 MB of full-size page scans (avg 308 kB)
to fill 81×108 css boxes, and left every condition gallery carrying 3.0 MB for its own grid.

**Fix (built, verified, awaiting upload — `deliver16/`):**
- `scripts/gen_thumbs.py` → one flat set at site root, `gthumbs/<id>-NN.jpg`, **320 px wide q82**.
  (290 files once galleries 35 and 36 are included — all merged into one upload.)
  Flat because the affected galleries live in three different places; pooling gives one upload
  destination and one path shape. 270 files (Diabetes Insipidus included, ready for its upload).
- `scripts/repoint_thumbs.js` → rewrites the `GALLERIES` literal: `thumb` → `gthumbs/<id>-NN.jpg`
  for the 26, and for the 5 cardiology entries moves the `<id>-upload/assets/<id>/` prefix out of
  `base` and into each `file` so `base` is uniformly `''`. Asserts every full-image URL, title and
  key order is unchanged before writing. The 8 `build_gallery.py` galleries are untouched.
- Result: **78 MB → 12 MB** across the 260 images; one condition gallery 3.0 MB → 0.42 MB.
- Width chosen from the *largest* render, the in-gallery grid at 424 device px on an iPad — not
  the index. 260/320/440 px compared side by side at real render size: 320 is indistinguishable
  from the full image, 260 softens on dense text pages.
- **Upload order matters:** the three `gthumbs` drags first, `index.html` last.
- `build_gallery.py` always wrote real `thumb-NN.jpg` files, so nothing built through the skill
  was ever affected; its default is now 320 px and the "reuse full images as thumbs" question has
  been removed from the skill so this cannot recur.
- Also in this build: `gxRender()` now `console.warn`s once for any `REALGAL` gallery whose id has
  no matching condition (previously such a gallery was silently dropped from the index).

### ⚠️ Live asset paths are NOT under `assets/` — read before touching galleries
GitHub web uploads have nested wrong twice, and `index.html` was patched to match reality
rather than moving files:
- **Cardiology (5):** `base: "dvt-upload/assets/<id>/"` (nested one level too deep)
- **Pulmonary (8):** `base: "<id>/"` — condition folders sit at the **repo root**, not in
  `assets/`. The `assets/` wrapper was dropped during the drag.
- After the thumbnail repoint above, all 26 of those have `base: ""` and carry the prefix in
  `file`; their thumbs come from `gthumbs/` regardless.
Any future gallery work must match the existing `base` for that id, or repoint it deliberately.
Optional cleanup (not done): consolidate everything under `assets/` and regenerate `index.html`.

## Publish
Upload updated `index.html` (+ any new gallery folders) to `main` via Chrome; confirm Netlify
deploy goes green; load the live site and verify each change. **Before clicking Commit, check
the file list GitHub shows — it displays the full destination path, which is where the two
nesting mistakes above would have been caught.**
