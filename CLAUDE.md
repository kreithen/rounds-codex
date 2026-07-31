# Rounds Codex — project notes for Claude

Medical-education app by Dr. Kreithen (physician). Static single-page apps (HTML + inline JS),
no backend. This file is context for future sessions — read it before starting work.

## Two repos (critical)
- **`rounds-codex` (this repo, PUBLIC)** — the dev/build repo: question banks, illustrations,
  staging materials, build tools, docs. Safe to commit here.
- **`rounds-codex-app` (PRIVATE, separate)** — the LIVE site → https://rounds-codex.netlify.app
  (Netlify auto-deploys from its `main`). **`add_repo` works** (2026-07-27): `access:"read"` was
  granted with no prompt, `access:"push"` after one approval. Clone to
  `/workspace/rounds-codex-app`. The GitHub MCP stays scoped to `rounds-codex`, so use plain
  `git` against the clone, not MCP calls.
- **The live site itself is still unreachable** — the agent proxy 403s rounds-codex.netlify.app.
  To verify a deploy, clone the app repo and serve it with `scripts/netlifysim.js`: same bytes
  Netlify publishes, and it covers the galleries whose images exist only in that repo.
- **Deploy path** was the user's Chrome web-upload to `rounds-codex-app` `main`; with `add_repo`
  push access we can now commit directly. Either way, **verify after**: their manual upload of
  2026-07-27 put 310 thumbnails three folders too high and every one 404'd.
- **Packaging rule learned the hard way:** when a drag has to land in `<dir>/`, name *every* part
  folder `<dir>` — not `part1`, `part2`. A wrapper named anything else will get dragged as-is.

## `applive/` — the live app working copy (gitignored, NEVER commit)
- `applive/index.html` is a LOCAL copy of the private live app's single ~6 MB `index.html`
  (minified, data + code inline). We edit it here, verify headless, then deliver for upload.
- `applive/usmle/` and `applive/assets/` mirror the live site's folders.
- `.gitignore` already excludes `applive/` and every `rounds-codex-*.zip` deploy bundle.
  **Do not commit the live app or deploy zips to this public repo.**

## Live app structure

> **CONTENT IS NO LONGER INLINE (shipped 2026-07-27, commit `414c899`).** `index.html` is now
> **code only** (0.54 MB, was 6.76 MB); all content lives in **`content/*.json`** and is
> fetched at boot. The globals below still exist with the same names and shapes — they are
> declared **empty** and *filled* by the loader at the bottom of `index.html`, so app code
> reads them exactly as before. **To change content, edit the JSON, not `index.html`.** Built
> by `scripts/split_content.js`; rationale and traps in `native-app-plan.md` §5.
>
> | file | holds |
> |---|---|
> | `content/conditions.json` | `DATA` (181) |
> | `content/drugs.json` | `RX_DATA` (300) |
> | `content/resident.json` | `RES_DATA` (1308), `RES_SPECIALTIES`, `RES_ACTIVE`, `RES_SECTION2_TITLE`, `RES_COND`, `RESIDENT_APPROACH` |
> | `content/nclex.json` | `NCLEX_DATA` (150) |
> | `content/quizzes.json` | `QUIZZES` (9) |
> | `content/galleries.json` | `GALLERIES` (39) + `real` (the `REALGAL` list) |
> | `content/or.json` | `OR_DATA` |
>
> Consequences: **`file://` no longer works** (the loader uses `fetch`) — serve over http or
> from the app shell; opening the file off disk shows an explicit message. The first upload
> after the split must include `index.html` **and** `content/`; after that they are
> independent. Derived lookups (`byId`, `ORDER`, `rxById`, `rxByCond`, `resById`), the first
> `paint()` and the `/c/<id>` router boot all run in the loader, not at parse time.
> `sw.js` precaches all seven files, so **a new content file must be added to `CORE`** or it
> will be missing offline.

- **Share links (`/c/<id>`)** — every condition has a URL; `_redirects` rewrites `/c/*` to
  `index.html` with a 200. Added by `scripts/add_share_links.js`, which also writes the
  `<base>` tag from `RC_ROOT` (**do not add a second `<base>`** — the head script decides it,
  and hard-coding `/` breaks the native bundle). `rcSyncURL()` in `paint()` keeps the address
  bar on the visible condition, `replaceState` only. The router exposes `RC_ROUTE_BOOT`, which
  the content loader calls once `byId` is populated — **share links must be added before the
  content split**, or `split_content.js` fails with "router boot wiring: found 0 occurrences".
- **Fonts are self-hosted** (`fonts/*.woff2`, 6 faces, 136 kB, precached in `CORE`). Built by
  `scripts/build_fonts.py`, applied by `scripts/self_host_fonts.js`. **Never point them back at
  `fonts.googleapis.com`** — `sw.js` skips cross-origin, so that was the one thing it could
  never cache. There is an Inter **`symbols`** face because Google's `latin` subset has no
  `→ ≥ ≤ ₂ ⁺` — `→` alone appears 585× and was silently falling back. **Run
  `python3 scripts/audit_font_coverage.py <site-root>` after any content change**: an
  uncovered character does not error, it just renders in the wrong font mid-sentence.
- **`RC_SHARE_ORIGIN`** is the origin a *shared link* points at (pinned to the public site),
  as distinct from `RC_ROOT`, which is where assets load from. Change it when
  `roundscodex.com` becomes canonical.
- **Share button** — on every condition page beside the ICD-10 pill, added by
  `scripts/add_share_button.js`. `rcShare(id)` calls `navigator.share` **synchronously from
  the tap** (Safari rejects a share that has left the gesture) with `{title, text, url}` —
  `text` is what makes iOS Messages show the name; `title` alone sends a bare URL. No sheet
  (desktop, http) → copies the link. **Its colour is `--accent` (the MODE), the ICD pill's is
  `--sec` (the CATEGORY, set inline on `.pad`)** — they are meant to differ.
- **Section links (`/s/<slug>`)** — a Share button in the library count row, shown only when a
  specialty chip is selected. Added by `scripts/add_section_share.js`. Category names are
  slugged (`Renal & GU` → `renal-gu`); the script asserts the 21 slugs are distinct. The link
  carries **no mode** on purpose — the section list is identical in all three.
  **Any new one-segment route must be added to the `RC_ROOT` regex** (`/^\/(c|s)\//`) or
  `<base>` becomes that folder and every `content/*.json` 404s — the app then boots to
  "Content didn't load" with no page error, because the loader catches it.
- **Scroll restore on Back** — `go()` saves `window.scrollY` onto the stack entry it leaves;
  `back()` passes it to `paint(y)`, which scrolls there instead of to 0. Added by
  `scripts/add_scroll_restore.js`. **The offset is an argument, not something `paint()` reads
  off the entry** — `paint()` is also called by `setMode()`, the clear-data action and the
  content loader, and any of those restoring a stale saved offset would teleport the user.
  Forward navigation, `root()` and everything else still start at the top.
- **Gallery links (`/g/<id>`)** — Share button in the gallery header, added by
  `scripts/add_gallery_share.js`. A shared gallery seeds `library → detail → gallery` so Back
  isn't a dead end. Third one-segment route.
- **Clinical Updates (`/u/`)** — purple **CLINICAL UPDATES** button in the library count row (all
  three modes), opening a `clinupd` index page: every specialty with updates, alphabetical, each
  with its year buttons. Added by `scripts/add_clinical_updates_page.js`. Fifth one-segment route,
  so the `RC_ROOT` regex is now `/^\/(c|s|g|r|u)\//`. **Purple is `.respec`'s gradient and white is
  `.allgal`'s fill** — reuse those two rather than inventing values, or the home page stops reading
  as one design. Restyling a dark button white means **pushing dark ink onto its children** too:
  `.res-gsub` and `.res-arrow` inherit light-on-dark values and vanish otherwise. **Sort specialties
  by display NAME, not code** — anes/cards/derm/em/fm happen to sort alike, so a code sort looks
  right until `ent` (Otolaryngology) or `nsg` (Neurological Surgery) gets content.
- **`.pad` reserves 112px for the fixed `.nav` bar; `.res-wrap` did not** until 2026-07-30, so the
  last element of every resident-mode page sat under the bar when scrolled to the end. Invisible on
  long lists, total on a short page. Any new full-page wrapper needs that clearance.
  **`.pad` is bottom padding ONLY** — `.pad{padding-bottom:112px}` is its whole rule, and neither
  `.app` nor `#screen` supplies horizontal padding, so every view provides its own. A page built on
  `.pad` alone renders flush against both screen edges. Use `.res-wrap` (16px + the 112px) instead.
- **Clinical Calculators (`/x/`, `/x/<id>`)** — shipped live 2026-07-31. Ten calculators
  (BMI/BSA, MAP, Wells DVT, Wells PE, PERC, CHA2DS2-VASc, HAS-BLED, CURB-65, qSOFA, weight-based
  dosage practice) in `content/calculators.json`, wired by `scripts/add_calculators.js` (twelve
  asserted surgeries, refuses to run twice). Arithmetic lives in `scripts/calc_engine.js` and is
  **inlined** by the patcher, so the shipped code is the tested code — edit there, re-run
  `scripts/test_calculators.js`, then re-run the patcher. Sixth one-segment route, so the
  `RC_ROOT` regex is now `/^\/(c|s|g|r|u|x)\//`.
  - **It is the fifth NAV TAB, replacing "Ask Rounds Codex"** (the user's call, 2026-07-31). Ask is
    not orphaned: the block at the bottom of every condition page calls `go('ask')`. Before removing
    any nav tab, find the view's other entry points — a view with no way in is invisible, not broken.
  - **`.nav button` is already `flex-direction:column`**, so a nav icon sits above its label with no
    new styling. Tabs are `flex:1` with `min-width:auto`, so the **longest single word** in any label
    sets a floor on every tab's width — "Clinical Calculators" wraps to two lines at any size, so its 10px is chosen to keep
    the ROW even, not to stop the wrap. Measure at
    375/390/430px, not just one. ("OR / Peri-op" wrapping at 375/390 is pre-existing.)
  - **A back arrow on a nav-bar root must call `navBack()`, not `back()`** — the stack is one deep
    there and `back()` is a dead control. `navBack()` already exists for this, and beats a hard-coded
    `root('library')` because a shared `/x/<id>` link seeds real history behind the page.
  - **`activeRoot` in `paint()` needs a case for any sub-view**, or the tab un-highlights the moment
    you open one — `calcone`→`calc`, the same way `rxdrug`→`rx`.
  - **`verify_sw.js` derives the content-file count from the loader's own FILES list**, so an eighth
    file does not fail a correct worker; the hard-coded 7 in `audit_app_e2e.js` still says "7" in its
    output line and is now cosmetic.
- **US spelling is the app's convention** (edema 729:78, anesthesia 236:38, hemo 1601:45 across the
  shipped content), though existing content is mixed. Normalise new copy — but **hold journal names
  back from the sweep**: `Thromb Haemost` and `J Thromb Haemost` are the real titles, and a citation
  Americanised is a citation made wrong.
- **Guideline links (`/r/<spec>-<year>`)** — Share button on a Clinical Guidelines year page, added
  by `scripts/add_guideline_share.js`. **Hyphen in the URL, pipe in the nav stack** (`resguide` ids are
  `"anes|2025"`); a pipe percent-encodes to `%7C` in a shared link. Splits on the trailing four
  digits, so a hyphenated specialty code is safe. **`rcSyncURL()` needs a case for any new view
  too** — it only rewrites the address bar for views it knows, so without one a shared link's URL
  snapped straight back to `/` when `boot()` called it and a reload landed on the home page.
- **Gallery PDF download** — `rcGalleryPDF(id)`, wired by `scripts/wire_gallery_pdf.js`. The
  button was a `toast()` stub for months while all 44 PDFs existed on disk. **Pass the id from
  `galHTML`'s argument, not the global `GID`** — `GID` is set only by `openViewer`, so it's
  `null` on a gallery you haven't opened a page in. `galleries.json`'s `pdf` is root-relative
  and is NOT resolved through `base` (several galleries have a non-empty `base` that would
  break it).
- **Deep search** — `scripts/add_deep_search.js`. Searches tagline + all nine body fields +
  the 440 gallery page titles, ranked, with a match line on each card saying where it hit.
  **The index must strip `<b>` tags**: authored markup means a raw index makes "b" match all
  181 conditions and breaks real phrases across tags. While a term is present the list renders
  **flat in score order** — category grouping fights relevance. `refs` is excluded on purpose
  (citations match author names).
- **Spaced review** — `scripts/add_review_queue.js`. `RC_REVIEW` (`rc.review.v1`), Leitner
  boxes `[1,2,4,8,16,32,64]` days, self-graded Again/Good/Easy. **Bookmarks are the enrolment
  signal** — no second gesture. Un-bookmarking drops an item from the queue but keeps its
  schedule. **Dates are local `YYYY-MM-DD` compared as strings** — ms arithmetic on a 24h day
  gets DST wrong and shows items a day early. "Again" re-queues at the END of the session;
  immediate re-show is recognition, not recall. The Library card renders into `#revCard` and is
  empty when nothing is due. **Offline gallery caching was deferred to the App Store pass.**
- **Persistence** — `RC_STORE` (bookmarks, best first-try quiz score) and `NCLEX_STORE`
  (exam save/resume, attempt history, mastery), both `localStorage`, both device-local and
  never transmitted, both behind an interface so sync can be added later. Added by
  `scripts/add_persistence.js`, which also inlines `src/report/nclex-report.js` — the NCLEX
  engine's `showReport()` needs `NCLEX_REPORT` present or it silently drops the
  record-this-attempt call.

- **Modes** via `document.documentElement[data-mode]`: `nursing` | `medical` | `resident`
  (`setMode(m)`). Medical accent `--sec:#00c2ff`.
- **Conditions**: `DATA=[{id,name,category,icd10,tagline,...}]`. `byId[id]` lookup.
  Detail page = `detailHTML(id)`; left/right **swipe** browses `DATA` array order (adjacency
  matters — e.g. Hypertension `htn` is placed right before `aortic-stenosis`).
- **Galleries**: `GALLERIES={ "<id>": {title, base:"assets/<id>/", pdf, images:[{n,file,
  thumb,title}]} }`. Real artwork renders only for ids in `REALGAL` (the `real` array in
  `content/galleries.json`). **`base` is not uniform on the live site** — see the warning in
  `app-integration-queue.md`; match the existing value for that id or repoint it deliberately.
  `gframe(id,i,mini)` uses `base+thumb` for the grid, `base+file` for the viewer (`openViewer`).
  **Thumbnails are always real files — never point `thumb` at `file`.** 26 galleries shipped that
  way to save upload file count and the galleries index (340 thumbs at once) ended up pulling
  78 MB; `scripts/gen_thumbs.py` + `scripts/repoint_thumbs.js` moved them to a flat root-level
  `gthumbs/<id>-NN.jpg` set at 320 px q82 (12 MB). See `app-integration-queue.md`.
  New galleries use `base:''` with the folder in `file`, so `thumb` can reach `gthumbs/`.
  **The "Download Complete Gallery (PDF)" button is a stub app-wide** — it toasts, nothing more.
- **Source artwork ships at 1024x1536** (2:3 portrait), JPEG q88 (~440 kB/page). The old
  pipeline downscaled to 800x1200, below what a Pro Max screen shows the viewer at.
  **1024x1536 is the standard — decided 2026-07-29.** Production has started sending some pages
  at 1536x2304; downscale those to 1024x1536 rather than mixing sizes or moving the standard.
  A gallery must ship ONE size: `fix_page_logo.py` now errors on a mixed set and needs
  `RC_PAGE_SIZE=1024x1536` to resample deliberately.
- **Quizzes**: `QUIZZES={ "<id>": {condition, questions:[{q, ch:[...], correct, exp,
  pearl?, why?:[...], img?:[N]}]} }`. Having `QUIZZES[id]` auto-enables the "Take the Quiz"
  button in `detailHTML`. `img:[N]` links a question to gallery image N. `why[i]` shows on a
  wrong pick (optional; falls back to generic text). **`exp` is shown only on a CORRECT
  answer** — a wrong pick gets `why[i]` or "That choice is not correct — try again", and the
  user retries. Add a quiz with `scripts/merge_quizzes.js <batch.json> <content-dir>
  --answers <letters.json>`: **always pass the printed answer letters.** `correct` is 0-based
  while every source PDF states a letter, and an off-by-one turns a right answer wrong with
  nothing downstream able to detect it. The validator also checks `why[]` aligns with `ch[]`
  (and is empty at `correct`), and that no `img` points past the end of the gallery.
- **Every condition has a quiz (181/181, 1,820 questions) as of 2026-07-29.** 24 were
  transcribed from the physician's PDFs; the rest were authored from each condition's own module
  text by agent fan-out. Pipeline: author to `quizzes-staging/authored/<file>.json` →
  `scripts/qa_quizzes.js` (must hit 0 failures) → `scripts/balance_answers.js` →
  `scripts/merge_quizzes.js` → `scripts/audit_quiz_bank.js` bank-wide. See
  `quizzes-staging/authored/README.md`. **Three traps, all of which have bitten:** (1) ten
  questions in a row land on the same letter — one quiz shipped 10/10 at B, and the *first* fix
  made it worse by spreading evenly round-robin so every quiz read A B C D E A B C D E; the
  balancer now shuffles from a per-quiz seed. (2) Rewriting a `ch[]` array reorders the options,
  and not re-deriving `correct` marks a **distractor** as the answer while every structural check
  still passes — capture the answer TEXT, then `correct = ch.indexOf(text)`, and rebuild `why[]`
  keyed by option text. (3) A correct answer much longer than its distractors is pickable without
  knowledge; threshold calibrated against IBD at ~1.2x. **No independent medical re-read has been
  done** — authors checked their own work.
- **Resident mode**: `RES_DATA` (array, each `.sec`=specialty code), `RES_ACTIVE` (Set of active
  codes), `RES_SECTION2_TITLE` (code→"Top X…" header), `RES_SPECIALTIES` (`[{id,n}]` picker),
  `RES_COND` (conditions per specialty). `resSpecHTML(spec)` renders a specialty page: section-2
  title first, then "Relevant Conditions". 23 base specialties + Cardiology; ~1308 entries.
- **USMLE mode** ships as a SEPARATE page at `/usmle/` (not inlined, to avoid doubling the big
  file). Medical mode has a "USMLE PREP" button → `/usmle/`. That page has its own back arrow
  and no bottom control bar.

## USMLE question bank (this repo)
- `data/usmle-step1-b*.js`, `usmle-step2ck-b*.js`, `usmle-step3d1-b*.js`, `usmle-step3d2-b*.js`
  (43 bank files). `preview/` wires them for local testing; `applive/usmle/` is the deployable copy.
- **Item schema**: `{id, system, discipline, topic, difficulty, anchor, vignette, lead,
  options[5], answer(0-4), exp, why[5]}`. Rule: `why[answer]` starts "Correct"; no other does.
- **Exam maxes** (all built): Step 1 = 280, Step 2 CK = 318, Step 3 Day 1 (FIP) = 232,
  Step 3 Day 2 (ACM) = 180. Total 1,010 (+13 CCS deferred).
- **Illustrations**: `RC_ILLUS[id]` registry, merged across `illus-p*.js` (later wins). `<img>`
  → "IMAGE" badge, `<svg>` → "SCHEMATIC". 231 items illustrated. `illus-real.js` loads last so
  approved real images override schematics.

## Build pipelines
- **Galleries from loose images** (`scripts/add_gallery.js` + `scripts/gen_thumbs.py`): when a
  gallery arrives as ten images rather than a production PDF. Titles must be read off the pages
  visually — the footer's title field is unreliable. `scripts/fix_page_logo.py` replaces a wrong
  logo lockup with the canonical one (`RC_LOGO`, default `logo-trim.png`); the production process
  gets it wrong in a different way most batches, so check every page.
- **Galleries from a PDF** (`medcodex-gallery` skill + `scripts/build_gallery.py` in the skill; a copy is
  version-controlled at `skills/medcodex-gallery/`): approved production PDF → renders pages to
  `assets/<id>/<id>-NN.jpg` + thumbs + compact gallery PDF, then writes the entry **into
  `content/galleries.json`** and adds the id to its `real` list. It detects the split
  automatically and falls back to patching inline `GALLERIES` only for a pre-split project.
  `--base` overrides the runtime path prefix when the files land somewhere other than
  `assets/<id>/`. **Page titles must be read visually** from each
  page's "IMAGE TITLE" box (no text layer in the PDFs); pass them as a plain JSON array.
  `galleries-staging/` holds the 5 Cardiology gallery PDFs + 3 quiz JSONs + title defaults.
- **Real/AI images** (`tools/`): `higgsfield-image-prompts.md` (231) → `build_image_manifest.py`
  → `image-qa.html` (physician gate) → `incorporate_images.py`.
- **Higgsfield generation is LIVE via the MCP connector** (2026-07-29), not the HTTP API — the
  proxy 403s `higgsfield.ai` and the result CDN, so **nothing generated can be fetched or seen
  from this container**. Review happens in the user's Higgsfield gallery, or via
  `tools/build_review_page.py`, which emits ONE standalone HTML the reviewer opens locally
  (remote `<img>`, so it cannot be an Artifact — the Artifact CSP blocks external hosts).
  - **`python3 tools/image_batch_plan.py --status | --next N | --record <id> <url>`** is the
    resume point. It holds the three things that are easy to get wrong: what to skip, the
    aspect ratio per modality, and what is already done (`tools/generated-image-urls.json`).
  - Cost is **2 credits per image at either 1k or 2k**, so always ask for 2k.
  - The server silently substitutes **`nano_banana_2`** for a `nano_banana_pro` request.
  - **`isECG` in the manifest is incomplete** — `s1-0012` and `s1-0061` are ECGs it misses, so
    `image_batch_plan.py` matches modality text as well. Fix in `build_image_manifest.py`.
  - As of 2026-07-29: **24 of 198 eligible generated, 174 left (~348 credits).** 32 ECGs and the
    genetics pedigree are excluded on purpose — keep the app's vector versions.
- **Connector caveat:** a connector can read `connected: true` while `enabledInChat: false`, which
  means authenticated but switched off for THAT conversation. Re-authorising the account does not
  fix it; the per-chat toggle does. Check with `ListConnectors` before concluding anything is
  broken. Higgsfield flipped off repeatedly in one session this way.
- **Resident content** (`medcodex-resident-buildout` skill): `resident-staging/` has the 1308-entry
  master + wiring snippet.
- **Clinical guidelines** (`guidelines-staging/`, `scripts/merge_guidelines.js`): the "Updated
  Clinical Guidelines" subsection on a Resident specialty page. Data lives under a `guidelines`
  key in `content/resident.json`, NOT an eighth content file (that would mean editing the loader's
  FILES list and `sw.js` CORE). Staging entries carry a `verify` block that the merge **requires
  and strips** — review material, never app content. Anesthesiology is coded **`anes`**. Years sort
  **ascending**, so 2025 sits above 2026 (specified; not newest-first like the rest of the app).
  Built by `scripts/add_clinical_guidelines.js` + `scripts/add_guideline_share.js`.
  **Live for 23 specialties (438 entries) as of 2026-07-30**: everything except `vasc`.
  General Surgery is coded **`gs`** and displays as "Surgery (General)", so the name sort puts it
  after Radiology, not under G.
  **`thoracic` 2025 has 9**: the STS POAF guideline was submitted under both years and is a 2026
  publication, so it lives on 2026 only.
  A single-year specialty should **omit** the other year, not ship `2026: []` — an empty array
  renders a "Coming soon" button. `prev` shipped that way for one deploy before its 2026 arrived.
  **`prev` 2026 has 7**: four submitted entries repeated its own 2025 list.
  Reachable from the home page via the purple CLINICAL UPDATES button and at `/u/`.
  **`pmr` has 8/3, not 10/10**: the two submitted PM&R lists were 9/10 the same studies, so each
  distinct item went to the year its development actually belongs to (three verified 2026, eight
  2025 or earlier). When two year-lists for one specialty arrive nearly identical, date each item
  rather than shipping the same study under both buttons.
  The index sorting `Neurological Surgery` before `Neurology` is the live proof that the name sort
  matters: a code sort would put `neuro` before `nsg` and be wrong.
  **Watch for wrong-body and wrong-term titles**, not just wrong drugs. The body text is usually
  right while the title names something from an unrelated specialty, so it survives a skim:
  `amivantamab` (a lung-cancer bispecific) where anti-amyloid antibodies were meant;
  `trifluridine/tipiracil` (oral colorectal chemotherapy) for ocular surface squamous neoplasia;
  "**Microfracture** & Gene Therapy Scaling" — an orthopaedic cartilage term — on an otology entry;
  and a real AAO-HNS rhinosinusitis guideline credited to **AAOS**, the orthopaedic academy.
  **My prior on odd-sounding claims is miscalibrated — four suspicions, four wrong.** `amivantamab`
  in HNSCC, `nivobotulinumtoxinA`, the proton 10% OS gain, and an antioxidant **fullerene** cream for
  radiation dermatitis (JCO, 132 patients) all read as fabricated and are all real. Search before
  doubting; the failure mode in these submissions is overstated sourcing, not invented science.
  **Do not let a correct earlier finding make you doubt a real later one.** Having established that
  TORPEdO's proton result was toxicity rather than survival, I expected radiation oncology's claim of
  a 10% absolute 5-year OS gain for IMPT to be an overstatement. It is real — a separate MD Anderson
  phase III trial, 440 patients, 90.9% vs 81.0%. Two trials can compare the same modalities and
  report different endpoints; check for a second trial before calling a figure wrong.
  **Do not assume a repeated suspicious name is the same error.** `amivantamab` appeared a third
  time, in ENT, and that one is REAL — OrigAMI-4 (ORR 56%, n=39) and phase 3 OrigAMI-5 are a genuine
  HNSCC programme. Check each occurrence.
  **Every submitted entry must be citation-checked before merging.** Across all 340: 25 stated the
  opposite of the published result, 16 cited studies that could not be found, 20 named the wrong
  study, 73 could not be resolved to a citation, and 12 were clean — the teaching was usually sound,
  the sourcing was not. `CORRECTIONS-all.md` is the running record, regenerated over every staging
  file (`build_corrections_summary.js`); the unsuffixed staging file is always canonical, with the
  physician's original kept as `-submitted` once corrections are approved.
  **Check the regulatory status of any product an entry recommends.** The worst single entry found
  was plastics 2026 presenting clinical-grade **exosomes** as established surgical adjuncts: no
  exosome product has FDA approval for aesthetic use, administering unapproved biologics violates
  federal law, the FDA has issued warning letters to administering physicians, and reported harms
  include blindness and tumour formation. Autologous PRF and nanofat are fine; the submission
  grouped all three, which is how the unapproved one travels. Same class of check caught a
  **paediatric safety inversion**: the omalizumab entry said the drug eases "reliance on strict food
  avoidance" — it does not, and a family acting on that could feed a child an allergen.
  **A protocol journal is not a results journal.** The psychiatry list cited JMIR Research
  Protocols for "results from the landmark CONVOKE Phase 3 trial" — that journal publishes study
  protocols, so the citation and the claim were incompatible on their face.
  **Invented trial acronyms are a recurring failure.** The real LQD trial (lithium versus quetiapine
  augmentation, Lancet Psychiatry 2025) was submitted as "LITH-QUE"; ESTEEM, ANGLE and "iCATSi2i" did
  not resolve at all. Search the acronym before trusting it — a wrong one sends the reader nowhere.
  **One journal cited repeatedly for unrelated topics means the citations are filler.** Psychiatry
  2026 sourced five different entries — fMRI-guided TMS, a ketogenic diet RCT, mirtazapine for
  methamphetamine, postpartum depression subtypes and school-based anxiety care — to the same
  "editorial review on Shanghai Archives of Psychiatry". One of those five (mirtazapine) is a real
  JAMA Psychiatry trial, so the content can be sound while the citation is invented. Check the topic
  against the journal, not just the journal against a list of real journals.
  **Check what the cited publication actually is.** Preventive Medicine 2026 sourced its gut
  microbiome entry to "Healing Holidays Health Journal" — a wellness-retreat travel company — and
  its AI-calcium entry to Definitive Healthcare, a commercial data vendor. A press release also
  stood in for evidence twice (Mass General Brigham News, Lilly investor releases). The microbiome
  entry claimed validated psychobiotic algorithms and microbiome-directed clinical guidelines exist;
  the only FDA-approved microbiome therapies are Rebyota and Vowst, both for recurrent C. difficile.
  **A hyperlink pointing at a journal home page is a tell.** Three Preventive Medicine entries
  cited "The Lancet" or "Lancet Digital Health" with a link to the journal's front door rather than
  an article — and all three were the entries whose specifics could not be resolved. Check the link
  target before the claim; it predicts which ones will not stand up.
  **Say which estimand or assay a number came from.** SURMOUNT-1's weight result is 22.9% under the
  efficacy estimand but 19.7% under the treatment regimen; muvalaplin lowers Lp(a) by 85.8% on an
  intact-particle assay but 70.0% on a conventional apo(a) assay. Both submissions quoted only the
  larger figure, which is a 15-point overstatement against what a clinician's own lab reports.
  **A designation, a proposal and a guideline are three different things.** FDA Breakthrough Device
  Designation is not clearance (CorTec BCI, Paige PanCancer); a bill is not law (PREA reforms); an
  industry-commissioned Delphi is not a guideline (GLP-1 aesthetics, Galderma). Each was submitted
  as the stronger thing. General Surgery 2026 added two more: **conference programming is not a
  practice directive** (SAGES 2026 meeting sessions and the OpiVoid CME course were submitted as
  "SAGES Practice Directives", with an AI gesture ontology described as skill *accreditation*), and
  **a risk score is not an outcome** (the Mayo MBS-vs-GLP-1 cohort measured one-year change in
  *estimated* lifetime ASCVD risk — a calculator projection — and was submitted as proof that
  surgery prevents more cardiovascular events than a GLP-1; no trial has shown that).
  **A relative risk without its reference group can invert the clinical instruction.** The
  colorectal time-to-treatment study's "27% increase in metastasis with delays beyond 4 days" is
  really 4–46 days measured *against treatment within 3 days* — a reference window no elective
  pathway can meet and which in a real cohort is mostly acute obstruction going straight to
  theatre. Shipped as submitted, a trainee would conclude they must operate before staging is
  complete. Always locate the comparator before repeating a hazard ratio.
  **Check whether a trial of *omitting* something was stopped for harm.** General Surgery 2025
  submitted a non-existent trial concluding that prophylactic drains do not help in high-risk
  pancreatoduodenectomy. The real randomised trial (Van Buren, Ann Surg 2014) was terminated early
  by its DSMB because mortality rose from 3% to 12% without drains. Any entry that recommends
  leaving out a drain, a stent, a specimen or a follow-up scan needs that check specifically —
  de-escalation entries are where a plausible-sounding omission does the most damage.
  **A guideline can be cited perfectly and have the wrong recommendations attached.** The
  E-AHPBA–ESSO–Innsbruck consensus (BJS Jan 2026, 113(1), znaf272) was cited exactly right, then
  credited with parenchyma-sparing resection, intraoperative ultrasound and low-CVP anaesthesia —
  none of which it covers. It is about peri/postoperative *management*, and its three strong
  recommendations (prehabilitation, early mobilisation, **avoid routine drains**) were missing.
  Verifying that a document exists is not verifying that it says what the entry claims.
  **A non-significant RCT reported as significant is the commonest single reversal.** IntAct
  (Lancet Gastro Hep 2025, 766 patients) found ICG angiography reduced colorectal anastomotic leak
  10% vs 15%, p=0.087 — submitted as "significantly lowers anastomotic leak rates", with invented
  ASCRS/EAES endorsements. Same shape as the TENSION step-up trial submitted as reducing major
  organ failure when its composite endpoint was flat. Read the p-value and the primary endpoint,
  not the abstract's direction of effect.
  **A retrospective cohort described as a comparative trial cannot support the comparison.** The
  prehospital resuscitative thoracotomy paper (JAMA Surgery Feb 2025) is 601 London cases over 21
  years with **no control arm** and 5% survival to discharge; it was submitted as a trial proving
  scene thoracotomy beats ED thoracotomy. The tell is a "versus" in the description with no second
  group in the methods.
  **The same contaminant drug can reappear in an unrelated specialty.** `trifluridine/tipiracil`
  was a wrong-drug title in ophthalmology, then came back in General Surgery 2025 as
  "**SUNLIGHT** Trial: Watch-and-Wait vs. Total Mesorectal Excision" — SUNLIGHT is its metastatic
  colorectal trial and has nothing to do with rectal organ preservation (that is OPRA and the
  IWWD). Two hits for one drug across two specialties; check a familiar-looking name rather than
  assuming it belongs.
  **No randomised trial exists for every question, and "not found" is sometimes the answer.**
  Watch-and-wait versus TME has never been randomised and probably cannot be — randomising a
  complete responder to surgery does not recruit. When a submission claims an RCT for something
  ethically unrandomisable, that is the signal, not the citation details.
  **Check the trial's STATUS, not just that it exists.** Urology submitted three entries reporting
  results from trials that have not reported: **PROBE**/SWOG S1931 (recruiting since 2021) was
  credited with identifying subgroups that "gain a survival advantage from tumor debulking";
  **WATER IV** (completes July 2027, and whose primary endpoints are continence and erectile
  function, not oncologic) with "eliminat[ing] localized cancerous lesions"; **CURATE-UTUC**
  (recruiting) with an EAU 2026 result. All three read as finished trials because they were written
  in the past tense. Search the registry entry for status and primary endpoint before believing a
  described outcome — and note that a trial's endpoints may not be the ones the claim needs.
  **A non-inferiority trial is not a superiority trial.** PRIMARY2's PSMA-PET arm detected *less*
  clinically significant cancer than systematic biopsy (12% vs 16%, non-inferior); it was submitted
  as "significantly improved the detection" and as catching lesions MRI misses. Its real value is
  halving biopsies and cutting insignificant-cancer diagnoses from 32% to 14%. When an entry claims
  a *gain* from a de-escalation trial, the direction is usually the tell.
  **The omitted number is often the negative predictive value.** ZIRCON's girentuximab PET has PPV
  92.9% but **NPV 75.2%** — a negative scan still leaves one in four with clear cell carcinoma. The
  submission quoted only the sensitivity/specificity and promised the rule-OUT use (avoiding surgery
  for benign lesions) that the NPV forbids. Same shape as POTOMAC, submitted with its HR 0.68 intact
  and no mention that grade 3–4 toxicity went from 4% to 21% in a BCG-naive population. Check which
  number a claimed use depends on, and whether the submission gave it.
  **A study of what happens is not a study of what to do.** The 77,383-patient congenital diaphragm
  dysfunction paper is epidemiology and outcomes; it was submitted as proving early plication
  "dramatically decreases" ventilator days, when separate evidence found no ventilation-time
  difference (6 vs 8 days, p=0.36) and similar functional recovery. Descriptive papers get credited
  with the intervention effect their subject implies.
  **Invented numeric thresholds get audited against.** STS 2026's nodal paper (48,779 patients,
  11.2% upstaged) was submitted as ">10 nodes across at least 3 N2 stations" with quality metrics
  "penalizing" non-compliance; the actual recommendation is to take more than ONE N1 node. A
  fabricated threshold in a quality metric is worse than a vague one — someone will measure it.
  **Check the registry, not just the specialty.** The ATAAD hemiarch finding was attributed to "a
  prospective STS registry study presented at STS 2026" in patients over 65; it is the **Shizuoka
  Kokuho Database** — a Japanese prefecture-wide administrative *claims* database — retrospective,
  age ≥60, published in ICVTS. The conclusion held; every element of the provenance was wrong.
  **Watch for cardiac entries inside a thoracic list.** Six of ten Thoracic Surgery 2026 entries were
  cardiac or congenital cardiac surgery (mitral valve-in-valve, type A dissection, paediatric
  diaphragm plication, COVID donor hearts, POAF ×2). The STS POAF guideline is specifically *after
  cardiac surgery*; post-resection POAF is a different problem with its own evidence. "Cardiothoracic"
  in the submitter's mind, two specialties on the page.
  **Write the `verify.status` so it sorts.** `build_corrections_summary.js` buckets worst-first off
  that string, so a reversal phrased as "corrected — the result was submitted in the wrong
  direction" lands under routine date fixes and the physician meets it last. Use the established
  vocabulary — `REVERSED`, `NOT FOUND`, `replaced`, `corrected`, `matched` — in the status.
  **Deduplication:** where one development appears in both year lists for a specialty, keep it on
  the earlier year only, so nothing shows under both buttons. That is why `neuro` 2026 has 7,
  `nsg`/`obgyn` have 8 and `path` has 9. An entry is NOT a duplicate when the later year carries a
  genuinely new result (OTOF gene therapy: first-in-human on 2025, 2.5-year durability on 2026).
  **A shipped field must never carry review vocabulary** — `"2025 entry as submitted"` reached a
  resident-facing `date` once. The merge rejects it, using **two** regexes: the all-caps status
  tokens are matched **case-sensitively**, because `/replaced/i` and `/reversed/i` flag real clinical
  prose ("Replaced rigid, time-based holding…", "reversed with sugammadex").

## Editing `applive/index.html`
- Now ~0.65 MB of **code only** — content edits go to `content/*.json` instead, so the
  brace-matching surgery below is rarely needed. When you do have to edit a literal in the
  code file, use **string-aware brace matching** (skip braces inside JS string literals) and
  assert lengths/counts after edits.
- **Do extraction and patching in ONE language.** JS string indices are UTF-16 code units and
  Python's are code points, so with emoji in the file (there are several) offsets computed in
  Node and applied in Python drift by the astral-character count — it silently swallowed two
  `const` declarations before this was caught.
- **Verify every change headless** before delivering:
  `playwright-core` + Chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
  (`--no-sandbox`). Drive the app via `page.evaluate(()=>go('gallery','dvt'))` etc.; assert
  `.gthumb` counts, `img.naturalWidth>0`, viewer opens, quiz loads, **zero pageerrors**.
  Serve the tree with `scripts/netlifysim.js <ROOT> <PORT>` (positional args) — it does the
  `/c/*` rewrite and sends the right MIME types, so share links, fonts and the service worker
  behave as they do on Netlify.
- **The strongest check for a mechanical change is a side-by-side.** Serve the old and new
  builds on two ports, drive both through the same script, and compare `.app` `innerHTML` —
  the content split was proved that way over sixteen views plus every content global
  serialised. It catches what an assertion you thought to write would not.
- Parse-check: extract inline `<script>` (no `src`) blocks and `new Function(code)`.
- `node scripts/verify_sw.js <sw.js>` unit-tests the service worker's cache-read guard,
  asserts `CORE` still covers all 7 content files and all 6 fonts, and — the one that matters —
  **fails if the navigate branch calls `res.clone()`**. See below.
- **NEVER clone the response the service worker returns for a navigation.** `res.clone()` tees
  one body into two that must both be drained; with the other branch going to Cache Storage, an
  iOS tab suspend/resume mid-stream breaks the tee and the page dies as
  **"WebKitBlobResource error 1."** on returning to a backgrounded tab. This shipped twice —
  the first fix hardened only the *offline* fallback and the bug was in the *online* branch.
  The shell is precached in `CORE`, so the per-navigation write was redundant anyway.
- **Not cloning is NOT sufficient — the navigation body must be drained into memory.** The bug
  came back a THIRD time (reported 2026-07-31 from iPhone Safari) with a clone-free navigate
  branch, because `e.respondWith(fetch(req).catch(...))` hands `respondWith` a *still-streaming*
  response and **WebKit backs a service-worker-provided navigation body with a blob** — a file
  iOS reclaims under storage pressure, so the resume finds the entry and not the bytes. `.catch()`
  only fires if the fetch never returns headers; a body that dies later was never caught.
  `navigate()` now does `await res.arrayBuffer()` and returns memory-backed bytes, falling back to
  the cached shell if the read throws. Only **200s** are rebuilt — 204/304 throw if given a body,
  and a real 404 should reach the browser untouched.
  **A rebuilt Response must not keep the original `Content-Encoding`/`Content-Length`** — the
  bytes are already decoded, so the browser would gunzip plain bytes or truncate to the compressed
  length. `safeHeaders()` strips them, on the cache path too.
  Lesson for the suite: the old `verify_sw.js` **passed on the broken worker** because it asserted
  the true-but-insufficient thing. When adding a regression guard, run it against the pre-fix file
  and confirm it FAILS — otherwise it is decoration.
- **Chromium does not use the agent proxy; `curl` and Python do.** A page load showing
  `ERR_CONNECTION_RESET` for an external host does not mean the host is unreachable from the
  sandbox — that is how the Google Fonts dependency stayed invisible.
- **`document.fonts.check()` is false for a face that matches but has not loaded yet.** To
  assert a glyph is covered, `await document.fonts.load(font, char)` and check the result is
  non-empty.
- Note: JS string escapes like `←`/`—` are valid and render as ←/— — leave as-is.
- **A quiz-driving test must use `dvt`, not `dka`** — DKA has no quiz, and `go('quiz','dka')`
  throws. Cards are selected by `data-id`, not by an `onclick` attribute.
- **Beware the service worker when testing failure paths.** It is network-first with a cache
  fallback, so `page.route(...).abort()` in a context that has already loaded the app is
  silently served from Cache Storage and the failure never happens. Use a fresh context.

## Deploying (Chrome web-upload to rounds-codex-app)
- **Resident + all UI/data changes live in `index.html`** — uploading the new `index.html` ships
  them. No separate resident files.
- **USMLE** = the `usmle/` folder. **Galleries** = folders under `assets/`.
- **GitHub web-upload gotchas learned the hard way:**
  - Web UI caps ~**100 files per commit**. Keep each drag well under it (macOS may add hidden
    `__MACOSX`/`._` files that inflate the count).
  - **Drag the folder whose name is the destination.** To land files at `assets/<id>/`, drag a
    folder named `assets` (or navigate INTO `assets/` on GitHub first, then drag `<id>`). Dragging
    an outer wrapper (e.g. `dvt-upload`) nests everything under that wrapper — a real bug we hit.
  - Multiple zips that each contain a same-named top folder (`assets/`, `usmle/`) will **merge on
    extract** — give each a unique parent folder to avoid it.
  - Thumbnails were dropped from 26 galleries (grid reused the full images) to cut the file count.
    Undone 2026-07-27 — see the `gthumbs/` note above; don't trade thumbnails for file count again.
- After upload, Netlify auto-deploys (~1 min); load the live site and spot-check.

## Status docs
- `app-integration-queue.md` — running checklist of live-app changes (what's built/deployed).
- `usmle-build-status.md`, `resident-staging/*.md`, `galleries-staging/README.md` — build state.

## How to work here (set by the user 2026-07-29)
1. **Auto-execute standard, low-risk actions.** Reading files, benign terminal commands, creating
   code files, running tests, linting — just do them. No permission request.
2. **Don't ask about minor edits, file creation, or routine multi-step execution.** Ask only before
   something destructive or irreversible: deleting major files, overwriting production configs,
   force-pushing, drop-table migrations. In this project that also means **anything that touches
   the live app repo or a deploy**, and **any bulk generation that spends the user's credits** past
   a validated pilot.
3. **Work iteratively.** Make the change, verify it yourself, then present the finished result or
   the next real checkpoint — not intermediate green lights.
4. **On minor ambiguity, make the standard engineering assumption, say so in one line, and keep
   going.** Don't block on a question that has an obvious default.

The one thing this does NOT relax: **the physician is the medical gate.** Quiz answers, condition
text and generated clinical imagery still get shown for Dr. Kreithen's review rather than shipped
on my own judgement. Autonomy is about mechanics, not about medical correctness.

## Working branch
Develop on **`claude/usmle-rounds-codex-module-bmpl61`**. Commit + push there; never push elsewhere
without explicit permission. Do NOT open a PR unless the user asks.

## Incoming gallery batches — what to check before building
- **Compare against what is already live first.** Two of the three batches received on 2026-07-30
  were largely re-sends: 20 of 25 pages, then 10 of 75, were byte-identical to deployed artwork
  (mean pixel diff <2/255 against the JPEGs is compression noise, not a revision). Diffing first
  saved rebuilding four galleries. Do it before reading titles.
- **Page order comes from the `IMAGE n OF 10` header, never from filenames or arrival order.**
  Every batch so far arrived shuffled. Read the header strip; the fastest way is to crop
  y≈12–82 from each page and tile them into one contact sheet, then one crop of y≈150–265 for
  the subtitle titles. Two images to read instead of seventy-five.
- **I mis-read a contact sheet once and reported two pages as revised when they were not** — the
  swap was mine (up-19/up-20). If a diff says DIFFERENT, re-check the mapping before believing it.
- **Check the logo lockup and the header progress dots on every page.** `fix_page_logo.py` redraws
  the canonical lockup (nephrolithiasis arrived with a ™ variant on pages 5–10). The dots should be
  ONE filled dot at the current page; C. difficile renders them cumulatively and offset, and AKI
  pages 2/6/7 and BPH page 2 fill two. Cosmetic, but visible on every card and inconsistent with
  the other galleries — flag for re-render rather than repainting artwork.
- **`scripts/build_galleries_from_images.py`** is the post-content-split builder: pages to
  `assets/<id>/<id>-NN.jpg` q88, thumbs to the flat `gthumbs/` at 320px q82, compact PDF, and the
  `content/galleries.json` entry plus the id in `real`. `add_gallery.js` predates the split and
  patches `index.html`, so it no longer applies.
- **The download PDF embeds pages at 512×768**, matching the live galleries at ~1.1 MB per ten
  pages. Embedding the full 1024×1536 tripled the size.
- **54 of 181 conditions have a gallery as of 2026-07-30.** Cardiac, Endocrine, Gastrointestinal
  and Respiratory are complete; Renal & GU is 6/7 with only `hyponatremia` left.
  `galleries-staging/GALLERY-GAP.md` is generated from the live app — regenerate it, don't edit it.
