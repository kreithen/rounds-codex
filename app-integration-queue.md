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

## UPLOAD LANDED 2026-07-27 — verified against the live repo, one fix pushed
**Direct read+push access to `kreithen/rounds-codex-app` now works via `add_repo`.** The CLAUDE.md
note that this workspace is firewalled from it is out of date: `add_repo` with `access:"read"` was
granted without an approval prompt, `access:"push"` after one. The live *site* is still
unreachable (proxy 403s rounds-codex.netlify.app), but the repo can be cloned to
`/workspace/rounds-codex-app` and served locally with `netlifysim.js`, which is a better check —
it exercises the exact bytes Netlify publishes, including the 8 cardiology galleries that had
never been verifiable from here.

Audit of the user's upload (commit `1452199`):
- `index.html` — byte-identical to the shipped build. 39 galleries, 390 images.
- 50 new gallery pages, 50 replacement images (hyperlipidemia crop + 4 cardiology logo passes) —
  all hash-identical.
- **310 thumbnails landed in `part1/gthumbs/`, `part2/`, `part3/`, `part4/`** instead of
  `gthumbs/`, so every one 404'd and the galleries index rendered placeholders.

**My packaging caused it.** The bundle named the folders `part1`-`part4` and only `part1`
contained a folder called `gthumbs`; parts 2-4 had no correctly-named folder to drag at all.
The README warned about exactly this trap. **Next time: name every part folder `gthumbs`.**

Fixed in `bc5818c` — 310 renames, all R100, no image data touched. Re-verified after the push:
39 galleries, 390 thumbnails, **zero broken**, all 780 referenced paths resolve, 181 conditions,
zero page errors.

### Noted, not touched (needs the user's say-so)
- `assets 3/` — 26 MB, 88 files (ards, asthma, cap, copd, lung-cancer, pe, pneumothorax, tb) from
  an old mis-drag. Nothing references it.
- `rounds-codex-repo/` — contains only a `.gitignore`.
- The 8 `build_gallery.py` galleries still carry 440-520 px thumbs (6.5 MB for 80 files); at the
  current 320 px standard they would be ~3.6 MB.

## MORNING UPLOAD QUEUE (assembled 2026-07-27) — everything outstanding, one set
Supersedes every earlier zip. Four zips, nine drags, `index.html` last.

| zip | contents | files |
|---|---|---|
| `rc-queue-1-thumbs-and-index.zip` | `gthumbs/` in 4 parts of ~78, plus `index.html` | 311 |
| `rc-queue-2-new-galleries.zip` | `assets/{hyperparathyroid,pud,gerd,gi-bleed,di}` | 50 |
| `rc-queue-3-replacements.zip` | the 5 `<id>-upload/assets/<id>/` cardiology folders | 50 |
| `rc-queue-4-optional-pdfs.zip` | one gallery PDF each (the button is a stub — optional) | 5 |

- **39 galleries, 390 images.** Galleries 35-39: Hyperparathyroidism, Peptic Ulcer Disease,
  GERD, Upper GI Bleed, Diabetes Insipidus.
- Zip 3 clears the two long-standing replacement jobs: the hyperlipidemia white-margin crop and
  the canonical-logo pass on DVT / Cardiac Arrest / Aortic Dissection / PAD. **The thumbnails in
  zip 1 were generated from those corrected files**, so zips 1 and 3 want to go up together or
  those five galleries show a fixed logo small and the old one full-screen.
- All five galleries re-verified against the exact bytes in the zips (a stale page 8 in the test
  site was caught by hashing the queue against the served files — worth repeating before any
  future hand-off).

## Gallery 39 — Diabetes Insipidus (built & verified 2026-07-27, in the queue)
Attaches to `di` (Endocrine, E23.2). Built during the endocrine batch and waiting ever since;
now wired. 800x1200 like its siblings from that run. Titles came from `spec-di.json`, which the
batch build wrote at the time. `base:''`, `file: assets/di/di-NN.jpg`, `thumb: gthumbs/di-NN.jpg`.

## Gallery 38 — Upper GI Bleed (built & verified 2026-07-27, ready to upload)
Attaches to `gi-bleed` (Gastrointestinal, K92.2). Third GI gallery. Ten pages at 1024x1536, avg
434 kB. Delivered as a delta bundle (`index.html` + `assets/gi-bleed/` + 10 gthumbs); its
`index.html` supersedes the 35-37 one.

**Page 9 was held and has since been re-rendered by the user.** The three blocking problems are
resolved: "SBP > 90 mmbig, HR < 100" is now "SBP < 90 mmHg, HR > 100"; "MAP > 25 mmHg" is now
"MAP >= 65 mmHg"; the Forrest labels now read Ia/IIa/IIb/IIc and agree with page 5. The Quick
Reference and Pearl of the Day panels are readable.

Fixed in-place (`galleries-staging/upper-gi-bleed-text-edits.json`):
- **page 7** "Glasgow-Blatchfrod" -> "Blatchford" (the o and r change places)
- **page 9** "endoscopically whenevez possible" -> "whenever" (r lifted from "Address" two
  lines below)

Left as delivered, all cosmetic: "Raplus stabilization", "Renal/Inrer failure" and
"coaguilopathy" in page 9's bottom panels — the type there is 2-3 px per stroke with touching
letters, so a transplant would read as retouched; "sudden ^ in pressure" where an up arrow was
meant; the dot progress row (off by one on pages 3-8, and page 9's re-render moved its dot from
the 9th to the 10th); page 8 has no footer bar; page 3 labels a vessel/flow/wall diagram
"Virchow's triad", which describes thrombosis; page 5's Forrest rebleeding percentages put IIa
below Ib; page 4 offers BUN:Cr as a variceal-vs-non-variceal discriminator when it separates
upper from lower.

Note for future verification runs: with 380 thumbnails the galleries index needs ~6 s after the
scroll for lazy loading to settle — 2.5 s produced four false "broken thumbnail" failures.

## Gallery 37 — GERD (built & verified 2026-07-27, awaiting upload)
Attaches to `gerd` (Gastrointestinal, K21.9). Second GI gallery. Ten pages at 1024x1536, avg
457 kB. Same layout as 35/36.

- Logo fault was **mixed within one gallery** for the first time: pages 1 and 3 had the correct
  "Rounds" form, the other eight had the Rx split off in front. All ten missing the lens flare.
- Page 1 has no subtitle of its own, so its title was written rather than read off the page.

### Source defects
**The three typos are FIXED in-place** (`scripts/retouch_text.py`, spec in
`galleries-staging/gerd-text-edits.json`) rather than re-rendered:
- **Page 2** — "ANTI-REFLUX **SUPPOCH** STRUCTURES" → SUPPORT. R and T lifted from
  "STRUCTURES" in the same heading.
- **Page 9** — "(quick **releif**)" → relief. The e and i simply swap places.
- **Page 5** — "**Bule** out cardiac **or** chest pain..." → "**Rule** out cardiac **causes of**
  chest pain...". R from "Reflux" two panels up; "causes of" assembled from letters on the same
  bullet, its neighbour, and the "of" in "Reflux of acid".

Every glyph is one the page already contained, so face/size/weight/colour/antialiasing match by
construction — no substitute font is involved. The technique and its two traps (flat fills read
as boxes; a glyph box carries its own background) are documented in the script.

Still needing a re-render (cannot be retouched):
- **Dot progress row wrong on 9 of 10 pages.** Pages 1 and 10 render only **nine** dots; pages
  2,3,4,6,7,8,9 highlight the wrong position (off by one or two). Only page 5 is right. The
  "IMAGE n OF 10" text is correct everywhere. PUD's dots were all correct, so this is a
  regression in this render rather than the template.
- Page 2's anatomy legend lists 7 numbered items but the diagram only carries markers 1-6.

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
- ~~**Page 1**~~ — the anatomy diagram's two callouts *both* read "Gastric ulcer"; the "(more
  common)" one points at the duodenal bulb and should say "Duodenal ulcer".
- ~~**Page 7**~~ — barium panel places the gastric ulcer niche on the **greater** curvature; it
  is classically the lesser, which pages 2 and 5 of this same gallery state.
- Both reviewed by the user, who chose to ship as-is. **Gallery 36 is signed off.**

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
- ~~**Page 5**~~ — "KEY TAKEAWAY" rendered as two garbled overlapping strings; footer uses the
  wrong template (wrong title, and a "Look for: Stones/Bones/Groans/Moans" strip in place of the
  Difficulty / Clinical Source / Review fields). The user reviewed it and chose to ship as-is,
  including the Chvostek/Trousseau placement. **Gallery 35 is fully signed off.**
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
  (300 files with galleries 35-37 included — all merged into one upload, 4 drags of 75.)
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

---

## 2026-07-27 — the four items that had been on hold, all shipped by git

The `add_repo` route means these went straight to `rounds-codex-app` `main` rather than into a
zip. Four commits, in dependency order; each was verified headless against `netlifysim.js`
serving the actual clone before it was pushed.

### 1. Share links — `/c/<id>` (`54efe30`)
`scripts/add_share_links.js`, ported from the stranded `deliver8` build. Three edits plus
`_redirects`:
- a head script, **first thing in `<head>`**, that decides `RC_ROOT`, writes the `<base>` tag and
  captures the deep link *immediately* — `paint()` normalises the address bar as soon as the app
  boots, so a router that reads `location.pathname` later finds nothing;
- `rcSyncURL()` called from `paint()`, `replaceState` only, gated on `RC_READY` and on `http(s)`
  (it throws on `file://`);
- a boot IIFE that opens the captured target and exposes `RC_ROUTE_BOOT`.

`_redirects` is `/c/*  /index.html  200`. The repo has a `netlify.toml` with `publish = "."`, so
a root-level `_redirects` is honoured.

**This had to run before the content split** — `split_content.js` rewrites the router's
DOMContentLoaded hook into `window.RC_ROUTE_BOOT=boot;` and fails outright without it. That
dependency is what surfaced the whole ordering: share links → split → persistence.

Verified: deep link opens the right condition with its gallery and full-size viewer images; an
unknown id falls back to the library and tidies the URL; `?c=` and `#c=` upgrade to the clean
path; history gains no entries; a non-detail view clears the `/c/` path.

### 2. The content split (`414c899`)
`index.html` **6.76 MB → 0.54 MB**; 6.22 MB moved to seven `content/*.json`. A typo fix is now a
single small file, and on the App Store it is a content update rather than a review.

`sw.js` precaches the seven files and moves to **v8** — without precaching, a first visit that
went offline before the content was cached would boot to "Content didn't load". The bump also
purges the old 6.76 MB `index.html` from every device's cache.

Proved lossless twice over: the splitter round-trips each blob through JSON and deep-compares
including key order, and then both builds were driven side by side headless — all 18 content
globals serialise identically and sixteen views render **byte-identical** `.app` HTML (both
library modes, four condition pages, drug list and drug page, OR, Ask, About, galleries index, a
gallery, a quiz, resident root and a specialty).

### 3. Persistence (`84cc364`)
`RC_STORE` (bookmarks, best first-try quiz score) and `NCLEX_STORE` (save/resume, attempt
history, mastery). Both `localStorage`, both device-local — which is what keeps the App Store
privacy label at "Data Not Collected".

Three things were dead before this and are now live: the library star (it toggled a class and
toasted), the NCLEX engine's whole storage layer (the engine calls the right seams; nothing was
listening), and the attempt record — `showReport()` falls back to a legacy summary without
`NCLEX_REPORT`, and the record call sits *inside* the branch that needs it, so no attempt could
ever have been saved. The report engine had only ever shipped to `usmle/`.

Also: a star on every card, anchored to the ICD line rather than the top-right corner (a long
unbreakable term like "Hyperparathyroidism" overflows a 184 px card and a corner star lands on
the title); a bookmark-aware empty state; the best score on the condition page's quiz button; and
the two hard-coded "180 conditions" strings now derive from `DATA.length`.

The engine's own "Save & exit" copy said *"saved for this visit — a page reload will clear it"*,
which was true against the memory shim and is now false, so it was rewritten.

### 4. Safari's "WebKitBlobResource error 1." (`dfd201b`)
Reported: leave the app, use other apps, come back, the page is dead. That error is WebKit
saying *this blob's bytes are gone*. Two places could produce it; both fixed, because the symptom
fits both and neither is reproducible from here.

- **`sw.js`, the likelier one.** iOS backs every Cache Storage entry with a file on disk and
  reclaims those files under storage pressure **without removing the entry** — so the entry still
  matches and only the body read fails. Restoring a backgrounded tab is a fresh navigation, and
  if the radio has not come back yet the worker answered it from that cache. Reading the body
  inside the worker, in a `try`, makes it recoverable: a memory-backed copy goes back, a failed
  read deletes the entry so the next load repairs itself, and a navigation with nothing usable
  left answers with an offline page that retries on its own instead of resolving to `undefined`.
- **The condition PDF download.** It pointed an `<a download>` at a blob URL. When Safari
  declines to treat that as a download it *navigates*, leaving the app's own tab on a `blob:`
  URL — which the code then revoked four seconds later. Now `target="_blank"`, and the blob is
  released on `pagehide`.

`scripts/verify_sw.js` unit-tests the guard against a fake `caches` (an unreadable entry cannot
be planted from a page — `Cache.put` reads bodies eagerly and rejects an errored stream).

### Also in this build
Galleries index header reworded to **"Image Galleries"** / **"39 galleries of medical
illustrations"** (`b337458`).

### Still outstanding
The NCLEX full report is now shipped, so what remains is: more galleries as artwork arrives, the
re-renders noted above (GERD dot row, Upper GI Bleed dot row / p8 footer / p3 "Virchow's triad"),
`teacher@roundscodex.com` in GoDaddy, and a lawyer on the legal text before App Store submission.

### 5. Share button on every condition page (`e218aa1`)
`scripts/add_share_button.js`. Beside the ICD-10 pill, same type size / padding / radius /
border weight, so both render at 28 px and read as a pair.

- **What it sends:** the condition's name plus its `/c/<id>` link, as **both** `text` and
  `title`. Most examples set only `title`; iOS Messages ignores it and would send a bare URL.
  `text` is what puts the name above the link, and Mail uses `title` as the subject.
- **No native sheet** (desktop, or anything not on https) → copies the link and toasts. The
  button therefore exists everywhere. `navigator.clipboard` is absent on `http://` and in older
  WebViews, so there is an `execCommand` fallback behind it.
- **Colour follows the MODE** (`--accent`: nursing green, medical cyan, resident purple). The
  ICD-10 pill follows the **category** (`--sec`, set inline on `.pad`), so the two differ on
  purpose and the Share button stays put while the pill repaints per condition.
- `navigator.share` is called **synchronously from the tap** — Safari rejects a share that has
  drifted out of the user gesture, so nothing may be awaited first. A cancelled sheet rejects
  with `AbortError`; that is a normal outcome and is swallowed.

**Known limit:** the link *preview* in Messages still reads "Rounds Codex", not the condition.
That title comes from the page the recipient's phone fetches, and `/c/<id>` is a rewrite to the
same `index.html` for all 181. Per-route `<meta>` needs a Netlify function or prerender — a
separate job if it is worth doing.

### 6. Self-hosted fonts + `RC_SHARE_ORIGIN` (`c93cf20`, `5fda0f5`)
The two portability items worth doing on the web rather than saving for the native build,
because both ship to the live site and get exercised immediately.

**Fonts.** `index.html` loaded Inter and Oswald from `fonts.googleapis.com` — the app's only
cross-origin request, and `sw.js` skips cross-origin by design, so typography was the single
thing it could never cache. Now six woff2 in `fonts/` (136 kB), precached in `CORE`, `CACHE`
bumped to **v9**. Inter latin + Oswald latin (70 kB) are preloaded; `crossorigin` is required on
those preloads even same-origin, or the file downloads twice.

**Files, not base64.** `build_fonts.py` used to inline. That put ~160 kB of incompressible
base64 in `index.html`, which changes on every code deploy while the fonts change never.

**The subset nobody had noticed was missing.** Google's `latin` subset contains no `→ ≥ ≤ ₂ ⁺`.
`→` appears **585 times** in the content and every one was rendering in a system font
mid-sentence. There is now an Inter `symbols` face built with the `&text=` API. Its
unicode-range is derived from the file's real cmap **and made disjoint from the other faces** —
Google's subsetter always includes `U+0020` and `U+003D`, and overlapping ranges resolve
last-wins, so declaring them verbatim would have made every space in the app block on a 9 kB
download.

**Two characters stay uncovered** because Inter has no glyph: `∝` (Croup, Poiseuille) and `≫`
(vascular resident set), once each. Listed as accepted in the audit rather than rewritten —
they are correct notation.

**`scripts/audit_font_coverage.py` is the real deliverable.** It reads the shipped `@font-face`
block out of `index.html` (not the build intermediate, which could drift), scans `index.html`
plus every content JSON, and exits 1 on any character no subset covers. **Run it after any
content change** — the failure is silent, just a wrong-looking letter.

**`RC_SHARE_ORIGIN`** was read by `shareApp()` and `rcShare()` and defined by neither, so both
fell back to the serving origin. Harmless live, wrong from a deploy preview, and broken from a
native bundle (`capacitor://localhost`). Now pinned, with a note to change it when
`roundscodex.com` takes over.

**Two sandbox facts worth keeping:** Chromium here does **not** use the agent proxy but `curl`
and Python do — a page-load `ERR_CONNECTION_RESET` for an external host proves nothing, which is
how the Google dependency stayed invisible. And `document.fonts.check()` returns false for a
face that matches but has not loaded, so glyph coverage must be asserted with
`await document.fonts.load(font, char)`.

### 7. The blob error, properly this time (`004fc20`)
The first attempt (`dfd201b`) hardened the service worker's **offline** fallback — buffering
cached bodies so a reclaimed iOS Cache Storage file could not kill a navigation. Real hazard,
worth keeping, **not the bug**. It came back, and the screenshot showed the ordinary site URL in
the address bar, which meant the navigation was answered by the **online** branch:

```js
fetch(req).then(res => {
  const copy = res.clone();                                  // tees the body
  caches.open(CACHE).then(c => c.put('./index.html', copy));
  return res;                                                // returns the other branch
})
```

`res.clone()` does not copy a body — it **tees one stream into two**, and both must be drained
for either to finish. Switching apps suspends the tab; returning resumes it mid-stream, the tee
breaks, and the branch feeding the page dies. Network fine, cache fine, the split between them
not.

Navigation now returns the network response untouched. Nothing lost: the shell is precached in
`CORE` at install and `CACHE` is bumped every release, so the offline copy refreshes exactly
when `index.html` changes — verified the cached shell still matches the served build
byte-for-byte with the write gone.

The **asset** branch keeps its clone: same pattern, but a broken tee there costs one image
rather than the page, and buffering 3.5 MB gallery PDFs before the browser sees a byte is worse.

`index.html` now calls `registration.update()` on every load — a worker that breaks navigation
can stop the browser ever noticing a newer one, so the repair has to be pulled in by the first
load that succeeds. `verify_sw.js` now **fails if the navigate branch clones**, and that guard
was checked against the version that shipped the bug.

### 8. Section share — `/s/<slug>` (`a5a7c05`)
A Share button in the library's count row, opposite "N conditions", visible only once a real
specialty is picked. With **All** showing it stays hidden — sharing the whole library is
sharing the app, which `shareApp()` on the About page already does. Same outlined pill, mode
colour, glyph and wording as the condition Share button.

`/s/<slug>` mirrors `/c/<id>`, same 200-rewrite in `_redirects`. Slugs: `Renal & GU` →
`renal-gu`, `Women's Health` → `womens-health`. **`add_section_share.js` asserts the 21 slugs
are distinct** — a collision would make a shared link ambiguous and nothing at runtime would
catch it.

**No mode in the link, deliberately.** The section list is identical in all three modes; mode
only changes the depth of content inside a condition. Pinning it would override the recipient's
own preference for nothing and make the URL uglier.

The address bar follows the filter as well, so a section reached by tapping a chip is as
copyable as one arrived at by link. `libPick` calls `rcSyncURL` itself — a chip re-renders the
list without going through `paint()`.

**The trap this exposed:** `RC_ROOT`, which decides `<base>`, only tested `/^\/c\//`. On
`/s/respiratory` it fell through to "strip the last path segment", made the base `/s/`, and
every `content/*.json` resolved to `/s/content/…`. The app booted straight to "Content didn't
load" — **with zero page errors**, because the loader catches that case and reports it
properly, so the failure looked like a routing bug rather than a base-URL one. Now
`/^\/(c|s)\//`. Any future one-segment route needs adding there.

`scripts/netlifysim.js` now **reads the rules out of `_redirects`** instead of hard-coding
`/c/*`, which is what made a perfectly correct `/s/*` rule 404 locally.

### 9. Back restores your scroll position (`0e6bc01`)
`paint()` ended with an unconditional `window.scrollTo(0,0)`, so every navigation reset the
scroll — including `back()`. Scroll down the library, open a condition, tap back, and you were
at the top again.

`go()` now records `window.scrollY` on the entry it leaves; `back()` hands it to `paint(y)`.

**Why an argument and not a property `paint()` reads for itself:** `paint()` is also called by
`setMode()`, by the clear-data action and by the content loader. Any of those would have
restored whatever offset happened to be sitting on the current entry — so switching mode while
sitting at the top of the library would have thrown you back down to wherever you last left it.
Passing it explicitly means only `back()` can trigger a restore. There is a test for that case
specifically.

General, not library-specific: the same three lines cover gallery → back to the galleries
index and drug → back to the Rx list.

The restore is synchronous — the library builds its list in one `innerHTML` write, so the
height is final immediately and a deferred scroll would visibly flicker. It re-applies once on
the next frame for views that settle late (the galleries index positions thumbs on a rAF),
where scrolling too early clamps against a page that has not finished growing. Guarded on a
non-zero offset, so forward navigation is byte-for-byte the old scroll-to-top.

Checked: a card 3200px down, back lands on 3200 with that card back on screen; nested stacks
restore each level; mode switch does not teleport; tabs still start at the top; a list filtered
shorter while you were away clamps to its end.

### 10. Viral Hepatitis + Acute Appendicitis galleries (`edbf484`)
Two Gastroenterology sets, 10 pages each, delivered across two batches with the two galleries
interleaved. Ordered by the "IMAGE n OF 10" header, which the "Page n of 10" footer corroborates
on all twenty. Both conditions already existed; neither had a gallery.

**The progress-dot strip in these headers is unreliable — do not order pages by it.** Across the
twenty pages the dot count is 10, 11 or 13 where it should always be 10, and the filled dot sits
at the wrong index on hepatitis 3–6 and appendicitis 5–6. Appendicitis page 6 is the clearest
case: an 11-dot strip with the *last* dot filled, on a page whose text reads "IMAGE 6 OF 10". An
automated page-order check therefore cannot use the dots, which is worth knowing because they
look like exactly the machine-readable cross-check you would want. Cosmetic only — the viewer
draws its own position indicator — but flagged for a future artwork revision.

All twenty arrived with the **wrong logo** (detached "℞ Rounds / CODEX", thin outline circle).
`fix_page_logo.py` replaced it, run **once per complete set** so `placement()` derives one size
per gallery (249×71 hepatitis, 242×69 appendicitis). Running it over a partial set and again
over the remainder would give the two halves different sizes and the header would jump while
swiping — which is the whole reason that function measures the set rather than each page.

Built to current convention: `base:""`, native 1024×1536 q88 pages in `assets/<id>/`, 320 px q82
thumbs in the shared flat `gthumbs/`, compact download PDF beside the pages, both ids in `real`.

**Content note for the physician:** several pages overlap heavily. Hepatitis 8 ("Management &
Treatment"), 9 ("Treatment & Procedures") and 10 ("Clinical Pearls") repeat the same Antiviral
Therapy Overview table and Chronic HBV/HCV management blocks almost verbatim; 9 and 10 are near
duplicates in layout. Appendicitis 5 ("Physical Examination") and 6 ("Clinical Evaluation")
both work through McBurney/Rovsing/psoas/obturator/rebound. Shipped as delivered — dropping or
merging pages is a content call, not a build one.

### 11. PDF button, deep search, gallery links, spaced review (`8f41750`)
Four of five recommendations from the review of 2026-07-28. **Offline gallery caching was
deliberately deferred** to the App Store submission pass at the user's direction.

**PDF button.** Shipped as `onclick="toast('Downloads the gallery PDF')"` — announcing the thing
it wasn't doing — while all 44 galleries had a correct PDF on disk and a `pdf` path in
`galleries.json`. Nothing was missing but the wiring. The id comes from `galHTML`'s argument,
**not the global `GID`**: `GID` is assigned only by `openViewer`, so on a gallery whose viewer
you haven't opened it's `null`, and the first attempt reported "no PDF for this gallery yet".
Caught only because the test waits for an actual download event instead of just clicking.

**Deep search.** Was `d.name.toLowerCase().includes(term)` and nothing else: "chest pain" → 0
results while appearing in 31 conditions, "jaundice" → 0 while appearing in 8. Now indexes
tagline + nine body fields + 440 gallery page titles. **Markup must be stripped** — body text is
authored with `<b>`, so a raw index makes "b" match everything and hides real phrases
(`<b>jaundice,</b> dark urine` has no substring "jaundice, dark urine"). Ranked name → tagline
→ gallery page → body, rendered **flat while searching** because category grouping fights
relevance, with a per-card match line since 37 unexplained results reads as a bug.

**Gallery links `/g/<id>`.** Third one-segment route; `RC_ROOT` is now `/^\/(c|s|g)\//`. A route
that regex doesn't know becomes a `<base>` folder and every `content/*.json` 404s — the trap
`/s/` hit for real. Inbound links seed `library → detail → gallery` so Back works.

**Spaced review.** `RC_REVIEW` in `rc.review.v1`; Leitner boxes over SM-2 because a box number
is inspectable when a schedule looks wrong and an ease factor isn't. **Bookmarks are enrolment**
— the star already meant "I'm studying this", and a separate "add to review" would have split
that meaning and left the star inert. Un-bookmark drops from the queue, keeps the schedule.
**Dates are local `YYYY-MM-DD` compared as strings**: ms arithmetic on a 24-hour day gets DST
wrong twice a year and surfaces items a day early. Grade buttons show their own intervals —
hiding the schedule makes the choice arbitrary. "Again" re-queues at the session's END, because
an immediate re-show tests recognition rather than recall.

Still open from that review: **quizzes** (9 of 181 conditions — the user is writing these),
**offline galleries**, and the strategic one — gallery page content lives only as pixels, which
caps search, quiz generation and accessibility at once.

### 12. IBD, Diverticulitis and Bowel Obstruction galleries (`0e6580b`) — 47 total
Three complete Gastroenterology sets. IBD completes the half-set staged the day before;
Diverticulitis and Bowel Obstruction arrived whole. All three conditions already existed.

**30 uploads, 25 unique images** — Diverticulitis pages 6–10 were each sent twice. Deduplicated
by content hash *before* reading any of them, so the same page could not be filed under two
numbers. Worth doing as a first step on any large batch: the duplicates had different upload
prefixes and were indistinguishable by name.

**Resolution.** Seven pages arrived at 1536×2304 and one at 1023×1537; all normalised to
1024×1536 per the standard. `fix_page_logo.py` now errors on a mixed set rather than silently
resampling — that guard exists because the old hard-coded `SIZE` would have thrown away the
larger pages' detail without a word.

**No logo pass was run, deliberately.** Every page already carries the canonical mark. Running
the erase-and-redraw on correct artwork is surgery for no gain, and that pass has a history of
over-reaching (it clipped the frame corner on nine pages the day before). Pages were resized
where needed and encoded at q88; nothing else was touched.

**Page format**: the new `<CONDITION>-MODULE-00N` footer with no IMAGE TITLE field is now the
norm across all three sets. Titles come from the subtitle line under the main heading.

**Two artwork typos, since corrected in `99d1dc6`** — see the technique note below.
- IBD page 9 subtitle read "Crohnn's disease" — doubled n. **Fixed.**
- Diverticulitis page 5 labelled the severity scale "(AMBROSMEITT)"; it is the **Ambrosetti**
  classification. **Fixed.**
- IBD progress dots show 8 on pages 1–2 and 10 on pages 3–10; several Bowel Obstruction pages
  show 11–12. Cosmetic only, and the header text is right everywhere — but see the standing
  note that the dot strip must never be used to order pages.
- IBD page 1 is © 2025 where pages 2–10 are © 2026.


### 13. Fixing typos baked into artwork (`99d1dc6`)
Two text errors lived in the page images, not in any JSON, so they could only be fixed in
pixels. **Both were repaired by moving the page's own glyphs — nothing was typeset.** That is
the technique worth reusing: re-rendering text means matching the font, weight, colour, tracking
and glow, and a near-miss on any of them is more conspicuous than the typo. Rearranging existing
glyphs matches by construction.

**"Crohnn's" → "Crohn's"** (IBD p9). The two `n` glyphs are adjacent and identical — mean
difference of 10 levels, which is worth asserting before cutting. One advance (22px: glyph plus
its letterspacing) was removed and the line re-composited around the gap, left half shifted
right 11px and right half left 11px, so the centred line stays centred on 773.0.

**"(AMBROSMEITT)" → "(AMBROSETTI)"** (Diverticulitis p5). The happy accident: `MEITT` contains
exactly the letters `ETTI` needs. Drop the `M`, move the `I` behind the two `T`s, copying each
block with its native trailing letterspacing. Word narrows by the M's 13px advance, re-centred
on 887.

**Do the surgery on the staged source PNG, before the downscale.** Editing the shipped
1024×1536 JPEG would put the correction through a second lossy encode and work at two-thirds the
pixels to align against. Then rebuild the affected thumbnail *and* the gallery PDF — both derive
from the page and neither updates itself.

Method that made this tractable: segment the line into glyph runs by column gaps, print each run
with its width and advance, and map runs to letters before touching anything. The run list is
also how you catch merged glyphs — `TT` came through as one 17px run, which would have wrecked a
naive index-based edit.

### 14. Eight GI quizzes (`c96305b`) — 9 → 17 quizzes, 80 new questions
Appendicitis, Viral Hepatitis, Diverticulitis, Bowel Obstruction, Peptic Ulcer Disease,
Cirrhosis, Acute Pancreatitis, IBD. All eight already had condition pages; five now have a
gallery too, so quiz and illustrations sit together. Source PDFs and the transcription live in
`quizzes-staging/`.

**Faithful transcription.** Stems, options, answers and explanations exactly as delivered. IBD
is the only quiz with `why[]` and `img[]` — its PDF was the only one supplying per-option
rationales and gallery references. Nothing was authored: rationales, pearls and image links are
physician content.

**The one dangerous field is `correct`.** It is a 0-based index; every source PDF states the
answer as a letter. An off-by-one converts a right answer into a wrong one and *nothing
downstream can detect it* — the quiz still runs, still scores, still looks correct. So the
batch carries the printed letters in a sibling `-answers.json` and `merge_quizzes.js` asserts
`ch[correct]` is the option each letter names. **Always pass `--answers`.**

**One stem reworded.** Bowel Obstruction Q6 read "A cecal diameter greater than approximately:"
— no predicate, so it does not parse as a question. Now "Perforation risk rises once cecal
diameter exceeds approximately:". Same answer, same explanation, the meaning its options
already implied.

**Engine behaviour worth knowing** (a test was written against the wrong assumption first):
`exp` renders only on a **correct** answer. A wrong pick shows `why[qsel]`, or the generic
"That choice is not correct — try again", and the user retries. So a quiz without `why[]`
withholds its explanation until the learner gets there — which is a reasonable design, but it
means the seven quizzes without rationales give less feedback on a miss than IBD does.

**Still open:** per-option rationales for the seven non-IBD quizzes would make wrong answers
teach rather than just retry. That is clinical writing, not transcription.

### 15. Seven endocrine/pulmonary quizzes (`6ffdbee`) — 17 → 24 quizzes
OSA, Pleural Effusion, Hyperparathyroidism, Diabetes Insipidus, Metabolic Syndrome, HHS, SIADH.
All seven already had a condition page *and* a gallery. Batch in
`quizzes-staging/endo-batch-2026-07-29.json`.

**Diabetes Insipidus** carries per-option rationales (its PDF supplies them) and **OSA** carries
a Reference Image per question, so all ten link to their gallery page. The other five are stems,
options, answers and explanations only — as delivered.

#### Adrenal Insufficiency was NOT shipped
Its PDF has the literal string **"Incorrect option"** for options B–E on all ten questions. There
is only ever one real choice, so the quiz cannot be got wrong. Writing four plausible distractors
per question is clinical authoring, not transcription. **Waiting on the physician.**

#### Answer-position skew across the whole bank
Worth knowing before adding more. Correct-answer distribution over all 24 quizzes (240 questions):

- **`hyperparathyroid` is all A — 10 of 10.** Transcribed correctly; the source really is all-A.
  But it can be scored 10/10 by always tapping the first option. Flagged rather than reordered,
  because option order is the physician's content. A reshuffle is mechanical if wanted.
- Nine quizzes sit at 70–80% one letter, including `chf`, `dvt` and `aortic-dissection` which
  shipped long before this batch — so this is a house pattern, not a new-batch problem.
- **Option E is correct only 3 times in 240 questions.** A learner who notices never picks E.

None of this is a bug and none of it is transcription error; it is quiz design, and it belongs
to whoever writes the items. Recorded so the next batch can be built with it in mind.

### 16. Every condition has a quiz (`7f75d07`) — 181/181, 1,820 questions
Closed the last 44 gaps with nine agents (fluids/electrolytes, toxicology, oncology, women's
health, failure-to-thrive). Bank: **181 quizzes, 1,820 questions**, 1,660 with per-option
rationales, 310 with gallery references. 24 quizzes are transcribed from the physician's PDFs;
157 were authored from each condition's own module text.

**Answer positions are flat at 20% each for A/B/C/D/E bank-wide.** They were not. Option E was
correct in 3 of 240 transcribed questions — about 1% — which teaches a student to stop reading a
fifth of every question, and `hyperparathyroid` was all-A. Both fixed by rotation (same options,
same relative order, different starting point) with `why[]` and `correct` moved in lockstep;
1,376 questions were cross-checked against a pre-rotation copy for identical answer text, option
set, rationale pairing, stem and explanation.

**The lesson worth keeping is that the first randomisation fix was wrong.** Spreading answers
evenly by round-robin produced a perfect 2/2/2/2/2 per quiz *and* the identical sequence
A B C D E A B C D E in every one, so question 1's answer was A app-wide. Even is not random — it
is a rule, and a learnable one. The balancer now shuffles from a per-quiz seed.

**Also worth keeping:** rewriting a `ch[]` array to even out option lengths reorders the options.
Not re-deriving `correct` at the same moment marks a distractor as the right answer, and the quiz
still runs, still scores and still looks correct — seven questions were wrong that way before a
check existed for it. Two agents independently solved it by building each question from the
answer's TEXT plus an option-text→rationale map, deriving the index from the text. That pattern
is now in the brief.

Verified by driving every quiz in the app: 1,820/1,820 grade the right answer correct,
1,656/1,656 eligible questions show that option's own rationale on a wrong pick, zero errors.

**Still open — the one that matters most:** no independent medical re-read. Every item was
checked by the agent that wrote it. Structural QA, source-traceability and app verification all
pass; a second clinician-level pass by non-authors does not exist yet.

---

## Clinical Calculators — DEPLOYED 2026-07-31 (`rounds-codex-app` `e56e010`)

Ten calculators live at `/x/`, reached from the **fifth nav tab**, which is now **Calculators**
(calculator icon over the label). It replaces the **Ask Rounds Codex** tab, at the user's request.

**Ask Rounds Codex is not gone.** It still sits at the bottom of every condition page, and that
block's `modAsk()` calls `go('ask')`, so the full Ask view keeps a way in. Verified by typing a
question on the Hypertension page and asserting the Ask view opens and renders.

Shipped: BMI/BSA (Mosteller), MAP, Wells DVT, Wells PE, PERC, CHA2DS2-VASc, HAS-BLED, CURB-65,
qSOFA, weight-based dosage practice. Each carries its formula, source citation, interpretation
bands and the ways it is commonly misused.

**Two bugs in the page the nav work exposed**, both invisible to a 0-page-errors run:

- The header used `.hd`, `.back` and `.h1` — none of which exist in the app — and `.pad`, which is
  bottom padding only. The page would have rendered flush against both screen edges with an
  unstyled back button. Now `res-wrap` + the `res-crumb` pattern Clinical Updates uses.
- The back arrow called `back()`, which from a nav-bar root has nothing to pop. Now `navBack()`,
  the helper the app already defines for exactly this.

Nav label measured at 375/390/430px: one line at all three, against three lines at 375 and 390 for
the old Ask tab. "OR / Peri-op" wrapping at the two narrow widths is pre-existing — confirmed by
measuring the live build side by side rather than assuming.

Copy normalised to US spelling (20 changes), with `Thromb Haemost` / `J Thromb Haemost` held back
as real journal titles.

Verified before and after the deploy, on a tree confirmed byte-identical to what was pushed:
38 drive checks, `audit_app_e2e.js` 0 failures / 0 warnings, `verify_sw.js` all passed, font
coverage clean, 0 page errors, no failed requests beyond `/.netlify/functions/ask` (Netlify-only).
`sw.js` bumped to `rounds-codex-v12` with `content/calculators.json` in `CORE`.

**Open — the physician gate.** The formulas, bands, citations and clinical framing have had no
independent medical review. That is what this deploy is for.

---

## SHIPPED 2026-08-02 — four deploys, all physician-confirmed live

The doc had drifted: nothing from this session was recorded until now. Four separate deploys
landed, each verified headless against a tree confirmed byte-identical to what was pushed.

### 1. Eleven galleries (cache v40)

myasthenia, icp, sci, migraine, iron-anemia, b12-anemia, sickle-cell, leukemia, lymphoma,
thrombocytopenia, dic. **Neurology 12/12 and Heme & Onc 7/7 complete; 74 of 181 conditions now
have a gallery.** Page order read off the `IMAGE n OF 10` header strip, not filenames — every
batch so far has arrived shuffled.

All 110 pages carry the header-dot defect. It is cosmetic and shipped for that reason, but it is
on every page: see `galleries-staging/DOTS-defect-for-production.md` and the eleven contact
sheets in `DOTS-evidence/`. **Do not attempt to repaint them** — that was tried on 2026-07-31 and
the tool was deleted; the document explains why at length.

### 2. Vascular Surgery resident content + clinical updates (v41, v42)

50 procedures replacing the 60 topics (the physician's call), taking `RES_DATA` to 1418 and making
**all 25 specialties active for the first time — zero inactive cards**.

Clinical Updates now covers 25 of 25 specialties, **470 entries**. `vasc` shipped 2025=8, 2026=7
out of 20 submitted: two were removed on QA grounds (wrong specialty, duplicate across years), one
was rejected as aspirational rather than corrected, and two were never reached. Every shipped
entry was citation-checked first; nine needed correction. Full record in
`guidelines-staging/vasc-guidelines-CORRECTIONS.md`, summary regenerated into `CORRECTIONS-all.md`.

**Seven audio recordings** added over the same period (afib re-recorded, hypertension, aortic
stenosis, infective endocarditis, acute pericarditis, cardiomyopathy, PAD). `add_audio_recording.js`
was patched: `--replace` overwrote the same path, defeating its own immutable-cache guard, so it
now allocates `<id>-2.mp3` rather than reusing a URL the CDN has been told to cache for a year.

### 3. Resident button label (v43)

`23 specialties · Top 50 topics each` → `25 specialties · 50-60 topics each`. Both halves were
stale. Verified against the destination, not the data file alone: the picker renders 25 rows and
the real per-specialty range is 50 to 60 (nine at 50, `nsg` at 58, fifteen at 60).

### 4. Share button on the Image Galleries index (v44)

Bare `/g/` is now the index's own URL, beside `/g/<id>` for one gallery — the seventh one-segment
route, and the same shape as `/x/` beside `/x/<id>`. Applied by
`scripts/add_galleries_index_share.js`, seven asserted surgeries, refuses to run twice.

The `RC_ROOT` regex needed **no** change: it matches the letter plus a slash rather than
letter-plus-id, so `/g/` was already covered. A genuinely new letter still would.

The button reuses `.g-share` from a single gallery's header rather than introducing a second share
style two taps away. `aboutHead()` gained an optional third argument; About, Terms and Privacy
pass two and are unaffected, asserted in the test.

The share text quotes the **unfiltered** counts on purpose — the index has a search box and the
link carries no term, so a filtered count would promise the recipient something they would not
see. Verified with the list filtered to one gallery: the shared text still reads 74 / 740.

### Confirmation note

The Netlify connector dropped mid-session along with Higgsfield, Supabase and Drive
(`connected:true, enabledInChat:false`), so the last deploy could not be confirmed through it.
What was provable from the container: `origin/main` byte-identical to local, and `sw.js`,
`version.txt` and the patched `index.html` read straight out of `git show origin/main:<path>`.
The physician confirmed the live behaviour from their own browser. **That is the reliable
fallback — never let a deploy's confirmation depend on the connector being up.**

### Still open

- **The physician gate.** 1,820 quiz questions, 50 vascular procedures, 60 ID resident entries,
  10 calculators and 231 illustrations have had no independent medical review.
- **Production re-render:** 110 gallery pages (header dots) + 3 artwork typos.
- **Two vascular guideline entries unverified:** 2025 #10 (palliative-aligned vascular care),
  2026 #5 (off-the-shelf F/BEVAR). Neither is shipped.
- **Higgsfield:** 190 harvested image URLs await a desktop download via
  `tools/download-rounds-codex-images.command`; 8 corrected prompts to re-fire (16 credits).
- **Netlify failed-deploy email** is still not enabled — a UI toggle only the physician can set.
- Galleries 74/181. Biggest gaps: Oncology 14, Toxicology 9, then Peds / Ophtho / Derm /
  Women's Health at 8 each.
- Audio 9/181, all Cardiac. Four Cardiac left: `dvt`, `aortic-dissection`, `cardiac-arrest`,
  `hyperlipidemia`.

---

## v66 — Psychiatry complete: `withdrawal`, `delirium`, `suicide` (2026-08-04, `1db88d6`)

Three galleries in one push, 30 pages. **Psychiatry is 7 of 7** and the app is at **93 galleries /
930 pages**. Ninth complete category, after Cardiac, Endocrine, GI, Heme & Onc, ID, Neurology,
Renal & GU and Respiratory.

| id | condition | ICD-10 |
|---|---|---|
| `withdrawal` | Alcohol & Substance Withdrawal | F10.239 |
| `delirium` | Delirium | F05 |
| `suicide` | Suicide Risk Assessment | R45.851 |

`withdrawal` arrived as two halves the same day; the other two arrived whole in a 25-file batch.
All 25 distinct, no re-sends, every footer status cell clean.

Verified against the built tree served through `netlifysim.js`: 30 thumbnails decode, all three
viewers open a full 1024x1536 page, `verify_gallery_chain` passes at chain length 93 and wraps both
ways, `verify_gallery_gestures` passes, font audit clean, `verify_sw` unchanged. Zero page errors.

**One display title was overridden rather than taken from the footer** — the only time this has been
done. `suicide` page 6's footer IMAGE TITLE reads "**Clinicial** Presentation"; the page's own
headline band spells it correctly, so the band settled it. The artwork still needs the re-render.

Artwork faults are in `galleries-staging/DOTS-defect-for-production.md` with evidence crops, and the
actionable version in `ARTWORK-CORRECTIONS.md`. Three are worth naming here:

- **`delirium` pages 6, 7, 8 and 9 all fill the same progress dot** — four consecutive pages with an
  identical indicator, the worst instance so far. Its dot *count* is correct on all ten pages, which
  is the first time that has happened and proves the count and index faults are independent.
- **`suicide` page 4 reads "RISK IS DYNAMIC AND MODIFVABLE"** in large red display type.
- **Footer CATEGORY "Pathophysiology" on `suicide` pages 4–7.** `gout`, `withdrawal` and `delirium`
  each have it on page 4 alone. Four galleries now, one of them four pages: a template default that
  is not being overwritten, and the most reproducible fault in the log.

### A regression that was NOT ours

`verify_gallery_gestures` failed on `swipe left` and `swipe chaining` against `origin/main` and
passed against the pre-`ca2b024` tree. The cause was the **Supabase login wall covering the viewport
in an unauthenticated headless context**, not a swipe bug — the overlay ate the touch. Fixed in the
harness by `scripts/rc_test_auth.js`, which seeds `rc.app.session.v1` before navigation; both
gallery suites call it and any new headless test must.

While tracing that, a real defect surfaced: **the login wall's div is `id="rc-gate"`, the id the
first-run medical disclaimer already used**, so `rcTermsGate()`'s duplicate guard fires every visit
and **the disclaimer never appears**. Measured both ways; renaming the wall's id restores it. Not
applied — the rename could not be tested against a real Supabase sign-in from a container, and
guessing wrong locks the physician out. Written up with the exact fix in
`LOGIN-WALL-id-collision.md`.

### Still open after this push

- **Galleries 93/181.** Eight conditions from four more complete categories: `osteoarthritis` (MSK &
  Rheum → 7/7); `shock`, `acute-abdomen`, `peds-fever-sepsis` (Emergency & Surgical → 3/3);
  `pressure-injury`, `burns`, `wound-care`, `anaphylaxis` (Derm & Wounds → 4/4). Biggest remaining
  gaps: Oncology 14, Fluids & Electrolytes 12, Toxicology 9.
- **The disclaimer gate is dead on the live site** — see above. Highest-priority open item, because
  it is the App Store Guideline 1.4.1 answer that `app-store-plan.md` relies on.


---

## v67 — MSK & Rheum complete: `osteoarthritis`, `preeclampsia` (2026-08-05, `0828a75`)

Twenty pages, two galleries. **MSK & Rheum is 7 of 7** — the tenth complete category — and
**OB & Peds opens at 1 of 6**. The app is at **95 galleries / 950 pages**.

| id | condition | ICD-10 | note |
|---|---|---|---|
| `osteoarthritis` | Osteoarthritis | M19.90 | 1–5 in the morning, 6–10 the same evening |
| `preeclampsia` | Preeclampsia & Eclampsia | O14.90 | all ten in one batch |

Verified through `netlifysim.js`: 20 thumbnails decode, both viewers open a full 1024×1536 page,
`verify_gallery_chain` passes at chain length 95 and wraps both ways, `verify_gallery_gestures`
passes, font audit clean. Zero page errors.

### The dot fault finally has a location

`delirium` (v66) and `preeclampsia` (v67) have the **identical failure signature** — every page
correct except 7, 8 and 9, with pages 7 and 8 filling the same dot in both. `osteoarthritis` is the
same shape with more noise: 7, 8 and 9 all fill dot 8, and its count jumps from 10 to 11 at exactly
page 7. Three galleries pointing at the same three pages is the first actionable lead in the whole
defect log, and it went to production as the place to look first.

`preeclampsia` is also the cleanest delivery received: seven of ten dots correct, sourcing
consistent and correctly attributed on all ten pages (ACOG Practice Bulletin No. 222), no size
drift, no spelling errors, no duplicate titles.

### A correction to what v66's notes claimed

When only `osteoarthritis` pages 1–5 were in hand, the notes recorded "the count is correct on all
five" and concluded the count bug was fixed and only the index remained. Pages 6–10 then arrived at
**eleven** dots. **A half gallery cannot settle a per-gallery question.** Corrected in
`ARTWORK-CORRECTIONS.md`.

### One for the physician, not for production

`osteoarthritis` pages 1–5 cite *ACR Clinical Practice Guideline (2019)* and pages 6–10 cite
*ACR Appropriateness Criteria (2021)*. Those are two different colleges — **Rheumatology** and
**Radiology**. Imaging-appropriateness criteria are right on page 6 (Diagnostic Imaging) and wrong
on page 9 (**Treatment & Management**), which should carry the rheumatology guideline the first
half uses. Shipped as delivered, flagged.

### Still open after this push

- **Galleries 95/181.** Seven conditions from three more complete categories: `shock`,
  `acute-abdomen`, `peds-fever-sepsis` (Emergency & Surgical → 3/3); `pressure-injury`, `burns`,
  `wound-care`, `anaphylaxis` (Derm & Wounds → 4/4). Biggest remaining gaps: Oncology 14, Fluids &
  Electrolytes 12, Toxicology 9.
- **Which footer template and which shield are standard** — two galleries in one batch disagree.

---

## v69 — **100 GALLERIES, 1,000 PAGES** (2026-08-06, `3be1034`)

`croup` is the 100th gallery and the 1,000th illustration page. **OB & Peds is complete at 6 of 6**
— the eleventh complete category, and the fifth completed in two days.

Shipped across v68 and v69, all OB & Peds: `gdm`, `pph`, `labor`, `bronchiolitis`, `croup`.

| | |
|---|---:|
| galleries | **100** of 181 conditions |
| illustration pages | **1,000** |
| complete categories | **11** — Cardiac 13, Endocrine 13, GI 12, Heme & Onc 7, ID 6, MSK & Rheum 7, Neurology 12, OB & Peds 6, Psychiatry 7, Renal & GU 7, Respiratory 10 |

Verified at 100: chain length 100 wrapping both ways, gestures pass, font audit clean, `verify_sw`
passes, zero page errors.

### The one that nearly went wrong

The 45-file batch on 2026-08-05 looked like five complete galleries. Ten pages carried an
`OB & PEDS` header — **seven were croup and three were asthma** (J45.0, Pulmonology, GINA 2024,
`Asthma` on the footer condition line). A page count would have shipped three asthma pages inside
croup. The specialty label was identical on all ten, so it was not the tell; the ICD-10, the source
line and the footer condition name were.

The re-sent croup 7–9 were therefore **checked rather than counted** before building — J05.0, croup
sources, and md5-distinct from the strays. That check is now the standard for any re-send.

### Still open after the milestone

- **81 conditions without a gallery.** Biggest gaps: Oncology 14, Fluids & Electrolytes 12,
  Toxicology 9, Dermatology 8, Ophthalmology 8, Pediatrics 8, Women's Health 8.
  Nearest complete categories: **Emergency & Surgical** needs 3 (`shock`, `acute-abdomen`,
  `peds-fever-sepsis`), **Derm & Wounds** needs 4.
- **`croup`'s dot rows are the worst set in weeks** — cumulative fill from page 3, count changing
  from nine to ten mid-gallery, and page 10 showing nine of ten lit. Best single example to send
  production; see `DOTS-defect-for-production.md`.
- **`labor` pages 9 and 10 are indistinguishable** on both band and footer, and page 10 is missing
  the Clinical Pearl page every other gallery ends with.

## v71 — Hip Fracture and Low Back Pain (2026-08-08)

Two new MSK & Rheum conditions, taking the library to **183 conditions** and holding the
183/183 quiz invariant at **1,840 questions**. `content/conditions.json` and
`content/quizzes.json` only; `sw.js` `CACHE` → `v71`; no new content file, so `CORE` unchanged.

Deployed: commit `8f00a48`, Netlify `ready` at 12:29:20Z, 31s build, **4 files uploaded** —
which is exactly the four changed, so the upload count is itself a check that nothing else
travelled. `deploy_source: "api"` again with `manual_deploy: false` and a matching `commit_ref`,
i.e. a genuine git build (see the note in CLAUDE.md before treating that label as a problem).

**Placement, not appending.** Swipe reads `fracture → hip-fracture → osteoporosis` and
`osteoarthritis → back-pain → ra`. Built with the new `scripts/insert_conditions.js`, which
requires an `--after` target rather than defaulting to the end of the array.

**Both are `verified:false`** — RC VERIFIED badge off, awaiting the physician's read, same as
`metabolic-syndrome`. Three conditions now sit in that state.

Two process findings worth carrying forward:

- **`content/conditions.json` ships minified.** The first (ad-hoc) insertion re-emitted it
  pretty-printed: +124 kB of whitespace on a file fetched at boot, and a 23,217-line diff
  instead of one line. Caught by `git diff --numstat`, not by any app-level check.
- **A second QA pass on already-verified content found four sourcing errors**, none of which
  the structural checks could see: an overstated mortality range, a trial result quoted without
  saying it came from the safety analysis, guideline criteria whose exclusion had been removed by
  a later update, and a chapter contradicting the first recommendation of the guideline it cites.
  All four were in prose that read as authoritative. The lesson is the same one the guidelines
  work taught: verifying that a source exists is not verifying that it says what the entry claims.
