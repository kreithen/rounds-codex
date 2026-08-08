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
- **DEPLOYS BROKE FOR 16 HOURS ON 2026-07-30/31 — Netlify lost GitHub access to the app repo.**
  Symptom: pushes to `main` produced no deploy at all, and a manually triggered build failed in
  3.7s at `preparing repo` with *"Unable to access repository"* and *"User git error while checking
  for ref refs/heads/main"*. The repo and branch were both fine — verified through the GitHub API.
  Cause: **`rounds-codex-app` had dropped out of the Netlify GitHub App's selected-repositories
  list.** The tell is that Netlify's repo picker listed `rounds-codex` (public) but not
  `rounds-codex-app` (private) — an expired credential would have shown NO repos, so one repo
  missing means the access list changed, not the token.
  Fix: repo picker → *"Configure the Netlify app on GitHub"* → Repository access → add
  `rounds-codex-app` → relink → trigger deploy.
  **Two traps while fixing it.** The picker lists both repos and the names differ by three
  characters; selecting `rounds-codex` publishes the PUBLIC BUILD REPO, which has no root
  `index.html`, so the live site 404s while Netlify reports "Published". That happened. And the
  last good deploy before the break had `deploy_source: "api"`, not a git build — so git-triggered
  builds may have been failing before anyone noticed.
  **`deploy_source: "api"` turns out to be normal for this site — corrected 2026-08-08.** The v70
  audio deploy carried `deploy_source: "api"` *and* `commit_ref` equal to the pushed commit with
  `manual_deploy: false`, i.e. a genuine git-triggered build. Judge a deploy by `commit_ref` and
  `state`, not by that label.
  **Do not query the connector straight after pushing.** At ~1 minute the project's `currentDeploy`
  still pointed at the two-day-old deploy, which reads exactly like "the push produced no deploy" —
  the thing this section warns about. Wait ~90s; v70 was `ready` 43s after the push and visible
  shortly after.
  **Nothing alerted for 16 hours.** Turn on Netlify's failed-deploy notification, and check
  `/version.txt` (added 2026-07-31) after every deploy rather than assuming a push shipped.
- **The live site itself is still unreachable** — the agent proxy 403s rounds-codex.netlify.app.
  The **Netlify MCP connector** is the way in: connector traffic goes through Anthropic's servers,
  not the session network, so it works despite the egress policy. It diagnosed this outage in two
  calls (`get-projects`, then `get-deploy-for-site`). It CANNOT deploy from a cloud session,
  though — `deploy-site` just returns an `npx` command that runs in the container and talks to a
  blocked `netlify.app` host.
  **On 2026-08-01 the connector sat at `connected:true, enabledInChat:false` through an entire
  deploy**, so neither route worked and the confirmation had to come from the physician opening
  `/version.txt` in their own browser. That is the reliable fallback — say so plainly and ask,
  rather than reporting a push as a deploy. What CAN be confirmed from here without either route:
  `git fetch` then diff `origin/main` against local, and read `sw.js`, `version.txt` and
  `content/galleries.json` straight out of `git show origin/main:<path>` to prove the right bytes
  reached the remote.
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
> | `content/galleries.json` | `GALLERIES` (74) + `real` (the `REALGAL` list) |
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
  **Bare `/g/` is the gallery INDEX** (added 2026-08-02 by `scripts/add_galleries_index_share.js`,
  seven asserted surgeries), the way `/x/` is the calculator index beside `/x/<id>`. **The
  `RC_ROOT` regex needed no change** — it matches the letter plus a slash, not letter-plus-id, so
  `/g/` was already covered; a genuinely new letter still would. The button reuses **`.g-share`**,
  the icon button on a single gallery's header — same glyph, same 34px square, same `--accent` —
  rather than a second share style on two pages one tap apart. `aboutHead()` gained an optional
  third argument for it; About, Terms and Privacy pass two and are unaffected. The share text
  quotes the **unfiltered** counts on purpose: the index has a search box and the link carries no
  term, so the filtered count would promise the recipient something they will not see.
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
  - **A SECOND copy of that button lived in the viewer overlay and stayed a stub until v72**
    (2026-08-08), reported from an iPhone as "the download does nothing". Its onclick was
    `toast('Downloads the gallery PDF')` — a placeholder that toasts a *description of what it
    would do*. **A stub whose whole behaviour is a toast is indistinguishable from a working
    handler that toasts and then fails**, which is why it survived so long and why a test
    asserting "a toast appeared" passes on the broken build. `scripts/verify_gallery_pdf.js`
    instead intercepts `HTMLAnchorElement.click` and inspects the anchor the handler built; run
    against the pre-fix file it fails and names the defect ("built 0 download links").
    Fixing one copy of a control is not fixing the feature — **grep for the other copies.**
  - **`GID` IS the right argument inside `openViewer`'s markup**, which is the exact reverse of
    the trap above: `openViewer` assigns `GID=id` as its first statement, so within the overlay it
    is always the open gallery. The trap is reading `GID` from `galHTML`, which renders before any
    page has been opened.
  - **`rcGalleryPDF` needs `target='_blank'`, for the same reason the condition-page PDF export
    does** — added v72. On iOS Safari often ignores the `download` attribute and *navigates* to the
    file, and without a throwaway tab that navigation lands in the app's own tab, which is the
    setup for the WebKitBlobResource failure. A new tab is also where iOS surfaces the PDF **with
    its share sheet**, which is what a reader tapping a download button expects to see. The
    gallery-page button had shipped without it, so wiring the viewer button alone would have
    fixed "nothing happens" and still not produced the share sheet.
  - **`target='_blank'` moves the PDF from the worker's asset branch to its NAVIGATE branch**, and
    that branch buffers the whole body and falls back to the cached HTML *shell* — so a failed read
    would render the app in a tab opened for a PDF. **This was left alone deliberately**: measured
    through the live worker the PDF returns byte-exact (1,937,012 bytes, `%PDF-`, right content
    type), so it is reasoning rather than a reproduced failure, and `sw.js` is not the file to
    change on a hunch. Revisit only with a reproduction.
  - **A LINK share can never offer "Save to Files"** — reported 2026-08-08 as a missing option in
    the share panel. `rcShareGallery` passes `{title,text,url}`; iOS only shows Save to Files, and
    only attaches a document to AirDrop/Messages/Mail, when the payload contains a **File**. The
    tells that a sheet is a link share: the Safari compass icon, the site as subtitle, and "Add to
    Reading List". **Read the sheet before assuming the handler is broken** — twice now a working
    control has been reported as a bug because the sheet did not carry what was expected.
  - **The PDF button shares a File as of v73**, which is the sheet that has Save to Files. Three
    parts, each a branch with a test in `scripts/verify_gallery_pdf_share.js`:
    **the fetch starts on `pointerdown`**, because `navigator.share` must be reached while the tap
    still counts as user activation and awaiting 2–5 MB inside that window is what breaks it;
    **`AbortError` returns silently**, because a swiped-away sheet is a decision and falling back
    there hands the reader a download they just declined; and **the fallback is the v72 new tab**,
    with `navigator.canShare` feature-detected synchronously against a one-byte stand-in `File`
    before anything is fetched. The guard fails seven checks on the pre-v73 build.
  - **The header's link share is deliberately NOT the PDF share.** It exists so a colleague can be
    sent a link that opens the gallery; attaching several megabytes changes what the button means.
    Two controls, two payloads — keep them apart.
  - **iOS cannot be tested from a session** — no WebKit, no device. Everything above was driven in
    Chromium with the share API stubbed, so whether Safari accepts a share after an awaited fetch
    was the physician's test. Design the fallback so a refusal lands on the previously working
    behaviour, and say plainly which part is unverified.
  - **CONFIRMED on an iPhone 2026-08-08: `navigator.share({files})` DOES work after an awaited
    fetch**, with the fetch warmed on `pointerdown`. So the activation window is survivable on iOS
    Safari for a multi-megabyte file — do not assume otherwise next time, and do not pre-emptively
    give up on a file share because of the gesture rule.
  - **The gallery header's share button was REMOVED in v74** (physician's call) once the PDF button
    raised a real file sheet: two share-looking controls one above the other, doing different
    things, is worse than one. Consequence, stated because it is invisible in the diff: there is now
    **no way to produce a `/g/<id>` link from inside the app**. The route is untouched, so links
    already shared still open, and `rcSyncURL` still shows `/g/<id>` while a gallery is open, so it
    can be copied from the address bar. `rcShareGallery` is **retained with no call site and a
    comment saying so** — restoring the button is a one-line change; delete the function and it is
    a rewrite. The gallery INDEX (`/g/`) keeps its own `.g-share` button, which is
    `rcShareGalleries` — same class, different control, so **do not grep for `.g-share` and remove
    both.**
  - **A PDF navigation is a DOWNLOAD in headless Chromium, so Playwright reports a 345-byte body
    for it.** That read like service-worker corruption and was nearly reported as one; the control
    — same navigation in a context with no worker registered — returns the same 345 bytes. To
    measure a PDF through the worker, `fetch()` it from inside the page and read the
    `arrayBuffer()`. Run the control before believing a number.
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
- **Condition audio (`RC_AUDIO`)** — narrated bar under the quiz/gallery row, built by
  `scripts/audio_player.js`, installed by `add_condition_audio.js` and upgraded thereafter by
  `scripts/upgrade_audio_player.js` (the installer refuses to run twice, correctly — it is an
  installer, not an upgrader). **See the count below — 13 recordings as of 2026-08-03.**
  - **There is ONE `Audio` element for the whole app** (`RCAP_EL`), not one per player node,
    and a `.rcap` node is a *view onto it*. This is load-bearing for four separate features:
    playback must survive the navigation that shows the next recording; **a freshly created
    element has no user gesture behind it, so Safari rejects `.play()` and the next track
    silently never starts**; iOS surfaces one media element per page as the now-playing item,
    so a per-node element loses the CarPlay session at every navigation; and two elements
    means two recordings talking over each other.
  - **31 recordings live as of 2026-08-08 (v70): Cardiac 13/13, Respiratory 10/10,
    Endocrine 8/13.** Which five Endocrine conditions are still missing: get it from `--list`,
    not from memory. **`rcapOrder()` builds the chain from `DATA` order
    filtered by `RC_AUDIO`, not from key order**, so where an entry sits in the literal is
    cosmetic.
  - **Use `scripts/add_audio_recording.js <site-root> <id> <title> <file.mp3>`** — do not hand-edit
    the `RC_AUDIO` literal. It walks the MP3 frames for the duration (validated against the shipped
    `chf.mp3` to 8 microseconds), inserts in DATA order, and hard-errors rather than overwriting an
    existing path. `--list` prints every recording with its forward and chain targets.
    `scripts/verify_condition_audio.js` then checks each bar against what `RC_AUDIO` declares.
    **Its warm-up page is load-bearing**: the first page in a cold context is still fetching
    `content/*.json` when a short wait expires, so the bar has not painted and a good build reads
    as broken. If it ever reports exactly one failure and it is the first id in `IDS`, suspect the
    harness.
  - **Forward is scoped to the MODULE, so there are now THREE dead forward buttons**, not one —
    `hyperlipidemia` (last Cardiac), `osa` (last Respiratory) and `cushings` (last Endocrine). All
    by design. Continuous play still crosses categories in DATA order, so `aortic-stenosis` → copd
    and `pe` → endocarditis.
  - **`assets/audio` is 180 MB.** Deliberately absent from `sw.js` `CORE`, so it costs web visitors
    nothing at install — but it is most of the budget for getting the native download under 250 MB.
    Settle whether that build streams rather than bundles before the last Endocrine five land.
    Three superseded files (`afib.mp3`, `cardiac-arrest.mp3`, `hyperlipidemia.mp3`) are still on
    disk and referenced by nothing.
  - **A re-record gets a NEW FILENAME** (`afib-2.mp3`), never a new body at the old path:
    `/assets/audio/*` is served `immutable` for a year. **This applies to a mis-mapping too** —
    hyperlipidemia and cardiac-arrest shipped under each other's names on 2026-08-03 and the fix
    was `-2` filenames, not a rename, because a device that had already fetched the wrong bytes
    would keep them until 2027. Swap **`src` and `duration` together**: duration draws the
    scrubber and the CarPlay progress bar, so a src-only swap leaves each entry advertising the
    other's length.
  - **A recording cannot be identified from the file.** ElevenLabs exports carry no title tag
    (only `TSSE: Lavf...`), and audio cannot be listened to from a session, so which file is which
    rests entirely on what the physician says. Ask, or state the assumption loudly — do not infer
    it from upload order, which is how the 2026-08-03 swap happened.
  - **`RCAP_EL` is `null` until the first tap** — it is created inside the Play handler, because a
    freshly built `Audio` has no gesture behind it. A headless test must click the real control;
    reading `window.RCAP_EL` before that reports "no audio element" on a working build.
  - **A fresh browser context hits the `#rc-gate` disclaimer**, which swallows every tap until
    `#rc-gate-ok` is clicked. Any Playwright test that clicks anything must dismiss it first.
  - **This reverses the earlier "stop audio when the view repaints" rule.** Navigating away
    now keeps playing and the bar re-syncs when you come back. Continuous play and listening
    with the phone locked were the whole point.
  - **CarPlay renders the Media Session, not the page.** Without `navigator.mediaSession`
    metadata + action handlers the head unit shows "Safari" with a dead scrubber and the
    steering-wheel next button does nothing. `setPositionState` is what draws the car's
    progress bar, and it **throws** if position exceeds duration — wrap it. Never set
    `disableRemotePlayback` or route through WebAudio: that keeps the sound on the handset
    speaker with the car connected.
  - Forward is scoped to the module and **neither forward nor the chain wraps** — a wrap on a
    category with one recording restarts the same file and reads as a broken button. The
    chain advances the VIEW only while `stack` top is `detail`, so it cannot yank someone out
    of a quiz or a calculator.
  - **Three extra controls cost the slider ~50px.** Below ~90px of track, four seconds of a
    six-minute recording share a pixel and it cannot be aimed at. Controls drop in a fixed
    order (expand 400, stop 400, in-bar duration 376 — which *moves* to the title row rather
    than vanishing — elapsed clock 336). Measure at 320/360/375/390/414/430.
- **Two swipe handlers exist in `index.html`, and they had different guards.** The
  `document` one (library, resident specialty) has always ignored gestures starting on a
  control; the `#screen` one that browses conditions on a detail page ignored **only
  `.flow`** — so dragging the audio scrubber swiped to the adjacent condition. Fixed
  2026-08-01 by mirroring the exclusion list, **plus `touch-action:none` on the slider**.
  Both halves are needed: one stops the app reacting, the other stops the BROWSER claiming
  the drag as a pan first. The `#screen` handler also ignores mouse events within **700ms of
  any touch** — a Playwright test that taps and then mouse-drags measures that guard, not
  your fix, and passes on a broken build. Use a fresh page.
- **Persistence** — `RC_STORE` (bookmarks, best first-try quiz score) and `NCLEX_STORE`
  (exam save/resume, attempt history, mastery), both `localStorage`, both device-local and
  never transmitted, both behind an interface so sync can be added later. Added by
  `scripts/add_persistence.js`, which also inlines `src/report/nclex-report.js` — the NCLEX
  engine's `showReport()` needs `NCLEX_REPORT` present or it silently drops the
  record-this-attempt call.

- **Modes** via `document.documentElement[data-mode]`: `nursing` | `medical` | `resident`
  (`setMode(m)`). Medical accent `--sec:#00c2ff`.
- **Conditions**: `DATA=[{id,name,category,icd10,tagline,...}]`. `byId[id]` lookup. **183 as of
  2026-08-08** (Hip Fracture and Low Back Pain joined MSK & Rheum, taking it to 9).
  Detail page = `detailHTML(id)`; left/right **swipe** browses `DATA` array order (adjacency
  matters — e.g. Hypertension `htn` is placed right before `aortic-stenosis`).
  - Add one with **`scripts/insert_conditions.js <staging.json> <content-dir> --after <id>:<after-id>`**.
    Placement is an argument, not a guess: appending would put a new entry after whatever happens
    to be last in the file. The script is idempotent, checks the entry carries the field set all
    the others share (a missing field renders as an empty section rather than throwing, so it is
    invisible in the app), and refuses a category no existing condition uses.
  - **`content/conditions.json` and `content/quizzes.json` ship MINIFIED — one line, no trailing
    newline.** A hand edit that re-emits either pretty-printed adds ~124 kB of whitespace to a
    file the app fetches at boot and turns a two-entry addition into a whole-file diff. That
    happened here and was caught by `git diff --numstat`, not by any app-level check.
    `insert_conditions.js` infers the indent from the file it read; **check the numstat is 1/1
    after any content edit.**
  - **A right-going touch swipe that starts near the left edge is claimed by Chromium's own
    back-navigation gesture**, which unloads the app — the page returns with `go` undefined and it
    reads as an app failure. `scripts/verify_condition_swipe.js` drives real touch over CDP
    (mouse measures the 700ms post-touch guard instead) and only swipes FORWARD, walking in from
    the condition on each side to prove the same adjacency without touching the edge.
  - `verified:false` keeps the RC VERIFIED badge off. `metabolic-syndrome`, `hip-fracture` and
    `back-pain` are all awaiting the physician's read; `insert_conditions.js` prints the list.
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
- **The gallery viewer CHAINS across galleries** (v59, 2026-08-03, `scripts/add_gallery_chain.js`,
  seven asserted surgeries, refuses to run twice). Last image + right → image 1 of the next
  gallery; image 1 + left → last image of the previous. **Order is `rcGalOrder()` = `DATA` order
  filtered by which conditions have a gallery** — the same rule as `rcapOrder()` for audio, NOT
  `GALLERIES` key order. It **wraps** at both ends of the 83-gallery chain, unlike the audio
  chain. Crossing also rewrites the page under the overlay and the URL; **`paint()` cannot be
  used there — it calls `closeViewer()` first** and would shut the viewer mid-swipe.
  Three pre-existing bugs found while building it, all fixed in the same pass:
  - **The arrows had never worked.** `.varrow` has `onclick="gnav(±1)"`, but `pointerdown` calls
    `stage.setPointerCapture()` and an active capture retargets the derived click to the
    capturing element — so it landed on `.vstage`. Browsing worked *only* by swiping, on every
    build since the viewer shipped. `pointerdown` now returns early on a `.varrow` target.
  - **`pointercancel` was wired to the same handler as `pointerup`**, and a cancel carries
    `clientX` 0 — so `dx = -sx`, always a large negative, and an interrupted gesture jumped to
    the NEXT image whichever way the finger went.
  - **The viewer's "Image N of M" total is written once by `openViewer()`** and never updated;
    only `#vn` changes. Invisible while every gallery has 10 images — it would have gone wrong
    silently the first time one didn't.
  **Chromium's mouse emulation ends a drag with `pointercancel` and no `pointerup`**, so a
  mouse-driven swipe test measures the cancel path, not the swipe path.
  `verify_gallery_gestures.js` drives real touch over CDP. Both suites were run against
  `origin/main` first and fail there.
- **The download PDF is a BUILD ARTIFACT and goes stale.** Reported 2026-08-08: the downloaded
  Cardiac Arrest pages carried the old crosshair logo while the app showed the canonical ℞ lockup.
  The PDF is generated once when the gallery is built; `fix_page_logo.py` later repaints the lockup
  on the page **JPGs** and nothing regenerates the PDF. The viewer reads the JPGs, the download
  reads the PDF, and they drift. **Re-run `scripts/rebuild_gallery_pdf.py <root> <id>` after any
  change to a gallery's pages** — logo repaints, page re-renders, re-sends.
  - **Four galleries were affected: `aortic-dissection`, `cardiac-arrest`, `dvt`, `pad`** — fixed in
    v75. They are exactly the four whose PDF pages are **900×1350**, a geometry the later pipeline
    never used, so **PDF page size is a cheap tell for which generation built it**. `pad`'s PDF was
    larger than its current pages (900 vs 804), which alone proves it was not built from them.
  - **`python3 scripts/verify_gallery_pdfs.py <root>` is the standing guard** (added 2026-08-08 at
    the physician's request). It compares **every page of every gallery PDF against the page the app
    serves** — a broader invariant than "the logo matches", because logo drift was only the symptom;
    it also catches a re-rendered page, a re-sent batch, and a reordered PDF (each page must match
    its OWN source better than any sibling). 100 galleries / 1,000 pages in one run, exit 1 on drift.
    Run it against the pre-v75 PDFs and it flags all 40 pages, so it is not decoration.
  - **Rebuild rules:** page order from `galleries.json`'s `images` array, never a directory glob
    (every batch has arrived shuffled); embedded width = min(existing PDF width, source width), so
    nothing is upscaled and only the logo changes.
  - **No new filename needed, unlike a re-recorded MP3** — `_headers` marks only `/assets/audio/*`
    immutable, so a rebuilt PDF at the same path is revalidated. Check `_headers` before assuming
    the audio rule generalises.
  - **My measurement was wrong three times before it was right, and each wrong answer looked
    credible.** First pass: 91 of 100 — it cropped a fixed pixel box from images of different sizes,
    so it compared different parts of the page. Second, with fractional crops: 88 — still confounded,
    because a 512px PDF page differs from a 1024px source page by resampling blur alone. Third,
    downscaling the source to the PDF's exact size: a clean gap at 4.7 → 20, four galleries flagged —
    but two of those four had the correct logo merely **shifted**, which no plain diff can separate
    from different artwork. The final check **minimises the difference over small translations**.
    The true answer was 4. **When comparing two renderings of the same artwork, control for size,
    then for position, then look at it by eye** — and state the number only after that.
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
- **Every condition has a quiz (183/183, 1,840 questions) as of 2026-08-08** — the invariant is
  the point, so a new condition needs 10 questions in the same commit or coverage breaks. Pass
  `--answers` only for a PDF transcription; an authored batch has no printed letters, and
  generating a letters file from the indices you just wrote is circular. **Two of `qa_quizzes.js`'s
  heuristics fight a coding question**: it compares the explanation against each option by word
  overlap, so an item whose correct answer is a bare code list ("M54.50, M54.51 or M54.59") scores
  a *distractor* as the better match and it flags a false positive. Give the correct option enough
  prose to win the overlap and re-derive `correct = ch.indexOf(text)` — do not just silence it.
  **After `balance_answers.js`, check the answer TEXT survived the rotation**, not that the file
  still validates: the rotation rewrites `ch[]`, `correct` and `why[]` together, and a bug there
  marks a distractor as the answer while every structural check still passes.
  **`scripts/audit_module_quiz_gaps.py` sweeps the bank for two defect classes found 2026-08-08.
  Its calibration numbers are in the docstring and are the point** — a checker's worth is what it
  found, not what it was for. `--check C2 --gate` is a real guard (one duration stated two ways in
  one module: fails on the pre-fix content naming the back-pain defect, passes after, one listed
  false positive). `C3` (two numbers on one subject) is a **review aid, not a gate** — 12 hits over
  183 modules, 8 distinct, and reading all 8 by hand found one worth changing.
  **`C1` does not work, and the useful result is the negative one — do not rebuild it.** Scoped to
  the whole question, "an abbreviation the module never introduces" gives 225 hits at ~0.4%
  precision, because **a distractor referencing untaught material is how a distractor WORKS**.
  Scoped to the correct answer's own rationale it gives 0 hits on the pre-fix content as well as
  the shipped content, so it would never have caught anything. It does establish one invariant
  worth stating (no correct answer's rationale turns on an abbreviation absent from its module),
  but the defect it was built from — the Hip Fracture quiz marking prolonged **NPO** incorrect
  while the module never mentioned fasting — lived in a **distractor**, and that class is
  **NOT MECHANISABLE**: deciding whether a distractor is *eliminable from the module* is a reading
  judgement. **Accepted as a known gap (physician's call, 2026-08-08)** rather than papered over
  with a noisy checker; new content is covered by the physician's own review. Found originally only
  because a gallery page happened to give bad fasting advice, which is not a systematic route
  either — so if a quiz option ever looks unanswerable from the module, that is a real finding and
  no tool will have flagged it.
  (historic) **181/181, 1,820 questions as of 2026-07-29.** 24 were
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
- **197 of the 231 now use real generated images, live as v65 (2026-08-04).** The 34 that stay
  vector are all deliberate: 32 ECGs, the genetics pedigree (`s1-0002`), and `s2ck-0245` (lichen
  sclerosus — Higgsfield returned `nsfw`, a moderation refusal, and refunded it). **Nothing renders
  as a bare text box any more.**
  - **A generated image can be the MIRROR of its own specification.** `s2ck-0162` came back with the
    femoral neck fracture on the patient's LEFT while the vignette says right four times and the
    figure caption rendered beneath it reads "displaced right femoral neck fracture"; `mustShow`
    demanded the right neck fractured and "intact, normal left hip for comparison". Shipped
    horizontally flipped. **Check for a burned-in laterality marker or scanner overlay before
    flipping anything** — zero bright pixels in every margin band is what made it a reflection
    rather than a fabrication. `s2ck-0077` carries an "R" plus scanner text and must never be flipped.
  - **Leading with the no-text prohibition works.** `s3-0365` and `s1-0247` were re-fired with the
    instruction moved to the FRONT, stated positively ("a raw scan before any reporting markup")
    and the diagnosis lowercased; both came back clean. All 189 originals already ended with "no
    text, no labels" and 3 ignored it, so the failure is stochastic — position and framing shift
    the odds, they do not remove the need to look.
  - **`--verbatim-max-kb` cuts both ways.** At 338 kB `s1-0114` sits just over the threshold, so a
    re-run re-encoded an already-reviewed image for a 215-byte change. Restore any file the
    incorporation touches that it had no reason to.
- **(historic) 189 as of v54 (2026-08-03).** `usmle/img/<id>.jpg`,
  24 MB, longest side 1024 (the module never displays one wider than 700 CSS px). Pipeline:
  `tools/prepare-usmle-images.command` (shrinks on the physician's Mac — the masters are ~6 MB
  each and the CDN is unreachable from a container) → `tools/stage_by_cdn_name.py` →
  `tools/incorporate_images.py` → `scripts/verify_usmle_illus.js`. **Not in `sw.js` `CORE`** on
  purpose: network-first with opportunistic caching, so 24 MB is not precached on install.
  - **A bulk gallery download is named after the GENERATION, not the question**
    (`hf_20260729_190645_....png`). `generated-image-urls.json` maps id → URL and the URL basename
    is that stem, so the mapping is exact — `stage_by_cdn_name.py` does it. Never infer it.
  - **Do not pair a leftover file with an unclaimed id because both are unaccounted for.** That
    exact case arose: one spare file, one id with no image, and they were unrelated (a histology
    photomicrograph vs. `s2ck-0162`'s AP pelvis radiograph). The tool refuses and says so.
  - **The delivery contained 8 earlier takes of re-fired prompts.** Those stems are in
    `superseded-image-urls.json`; using one silently restores the version review rejected.
  - **`--verbatim-max-kb` exists because "already a JPEG" is not "already optimized"** — three
    delivered files were 500 kB at 1024 px.
  - **Generated images arrive with defects that no structural check can catch.** Three had the
    diagnosis printed on them (`s3-0365` "WILMS TUMOR", `s1-0030` "bite cells/blister cells",
    `s1-0247` "ECTOPIC GS") — a label naming the finding makes the item free. Five were rendered
    as a photo of a framed radiograph on a wall (`s1-0206`, `s1-0236`, `s2ck-0086`, `s2ck-0101`,
    and `s2ck-0144` as a curled ECG strip on a desk). Three disagreed with their own prompt on
    plane or panel count (`s1-0206` coronal not axial; `s3-0025` and `s3-0137` four panels instead
    of two views). **Read a contact sheet against each item's `modality` string** — a per-question
    label like `LA/RA/RV/LV` or "WITHOUT/WITH COMPRESSION" is orientation and fine; a label naming
    the answer is not.

## Build pipelines
- **Galleries from PASTED pages — the normal route (`medcodex-gallery-paste` skill).** Use this
  whenever the physician pastes gallery pages into chat, which is how *every* gallery has arrived.
  Step 1 is always `python3 scripts/ingest_pasted_gallery.py --hours 30` — the pastes are in
  `/root/.claude/uploads/<session-id>/` at **full resolution**, and the skill exists because a whole
  session was spent asking for files that were already there. The skill carries the QA checklist
  (every item from a real batch), the verify commands, the deploy-and-prove sequence, and the
  standing rules: never repaint artwork, never point `thumb` at `file`, one page size per gallery,
  commit the masters, and read the app's own module and quiz against the pages.
  `ingest_pasted_gallery.py` dedupes by hash, OCRs each page's own `IMAGE n OF 10` header and footer
  title, and **refuses to stage a set with a missing page or an unresolved duplicate**. Its
  attribution threshold is strict and allowed to FAIL: with two similar galleries in one paste
  window, back-pain p6 scored 0.73 against "Hip Fracture" while hip-fracture p10 scored 0.55, so no
  threshold separates them — leftovers go to `--pick`, and do not widen the cut to hide them.
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
  from this container**.
  **But the images ARE public — corrected 2026-08-02.** `curl: (56) CONNECT tunnel failed,
  response 403` is the **agent proxy refusing CONNECT**, not CloudFront refusing us, and for
  months that was misread as "the CDN requires an authenticated session". The Higgsfield
  sandbox fetches the same URL with a bare `curl -sf` — no cookies, no headers — and gets the
  full PNG. So a harvested URL is downloadable by anyone not behind this proxy, and
  `tools/download-rounds-codex-images.command` (generated from `generated-image-urls.json`)
  pulls all 190 named by question id. **Read a 403 for who issued it before concluding what it
  means.**
  **`show_generations` finally worked on 2026-08-01** once the physician toggled the connector
  on for the chat — 10 prior refusals were the per-chat switch, not the surface. Two pages,
  190 generations, all with URLs; the harvest is complete and 8 job ids are absent because
  those 8 failed at generation (174 spends, 8 near-instant refunds).
  **Higgsfield's `sandbox_exec` truncates stdout** at roughly 20 KB (`"truncated": true`), so
  base64-through-stdout is not a viable transport for images — about 15 KB of binary a call. Review happens in the user's Higgsfield gallery, or via
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
  **Most of the time it is not that connector — it is ALL of them, and it self-heals.** On
  2026-08-01 Google Drive (8 tools), Higgsfield (81), Netlify (11) and Supabase (29) went away in
  one event and came back in one event, 129 tools together; Drive returned under a *different*
  `installedServerId`, i.e. the session was rebuilt rather than a token expiring. Connector traffic
  in a cloud session goes through Anthropic's servers, not the container network — which is why
  Netlify's MCP works while `curl rounds-codex.netlify.app` is 403'd — so it is one long-lived
  remote session that occasionally drops and takes every connector with it.
  **Read the three states before acting**, because they present identically as "the connector is
  broken": `connected:true, enabledInChat:false` = on but off for this chat (per-chat toggle);
  `connected:false` = genuinely deauthorised (re-authorise); `connected:null` = status unknown
  (re-check, do not act). There is no user-side fix for the transport drop — wait and re-check.
  **A MID-CONVERSATION RETOGGLE DOES NOT REACH A RUNNING SESSION — measured 2026-08-08.** The
  physician toggled Netlify on three times in one session and `ListConnectors` read
  `enabledInChat:false` after every one, with `ToolSearch +netlify` returning nothing each time. So
  the connector set looks resolved **when the session starts**; the one time a toggle appeared to
  work mid-chat (Higgsfield, 2026-08-01) is not reproducible. **Do not ask the physician to toggle
  more than once** — after that it is wasted effort and reads as being sent back to a switch that
  does nothing. The reliable route is a NEW conversation with the connector already on.
  **Never let a deploy's confirmation depend on the connector being up.** `/version.txt` works from
  any browser, and Netlify's failed-deploy email is out-of-band from the connector AND the session.
  **This is now PROVEN end to end, not just advised (v79, 2026-08-08).** With Netlify off for the
  chat, a push was verified by: `verify_sw.js` + a headless boot on the shipped bytes before
  pushing, then `git show origin/main:<path>` for version.txt / sw.js `CACHE` / `_headers` / the
  edited content field after pushing, then the physician opening `/version.txt` on an iPhone and
  seeing the stamped string. That is the whole procedure — use it and stop chasing the connector.
  `/version.txt` also carries an explicit `Cache-Control: no-cache` from v79; before that it
  inherited a Netlify default that cannot be tested from inside the container.
- **Resident content** (`medcodex-resident-buildout` skill): `resident-staging/` has the 1308-entry
  master + wiring snippet.
- **Clinical guidelines** (`guidelines-staging/`, `scripts/merge_guidelines.js`): the "Updated
  Clinical Guidelines" subsection on a Resident specialty page. Data lives under a `guidelines`
  key in `content/resident.json`, NOT an eighth content file (that would mean editing the loader's
  FILES list and `sw.js` CORE). Staging entries carry a `verify` block that the merge **requires
  and strips** — review material, never app content. Anesthesiology is coded **`anes`**. Years sort
  **ascending**, so 2025 sits above 2026 (specified; not newest-first like the rest of the app).
  Built by `scripts/add_clinical_guidelines.js` + `scripts/add_guideline_share.js`.
  **Live for all 25 specialties (470 entries) as of 2026-08-02** — `vasc` was the last, at 2025=8
  and 2026=7.
  **An entry can be wrong in both directions at once.** The vascular thrombectomy entry overstated
  its design (a propensity score matched analysis called "multi-center randomized") *and*
  understated its result (superior called "equivalent"). Fixing only the design would have left it
  wrong the other way. One error found is not a reason to stop reading.
  **Understatement is a real failure mode, not a safe one.** The limb preservation entry weakened a
  BEST-CLI trial analysis into "national outcomes data" and 40% (HR 0.60, p=0.005) into "30%+", and
  dropped the mechanism — early podiatry, more minor limb-sparing surgery — that tells a reader what
  to build. Check figures that sound modest, not only ones that sound big.
  **Aspirational content cannot be corrected into shape** — the correction would be deleting the
  claim. Vascular 2026's remote ischemia monitoring entry described continuous outpatient TcPO2
  surveillance as routine PAD practice; it is early-stage research and the SVS still recommends
  ABI/duplex. Dropped rather than merged.
  **`build_corrections_summary.js` throws on a year-keyed staging file** — `id-guidelines.json` is
  `{2025:[],2026:[]}`, not a flat array, so it was silently dropped from the argument list and 17
  Infectious Disease entries were missing from `CORRECTIONS-all.md` for weeks. Split it by year on
  the way in.
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
  **Checking only the LABEL fields was not enough** (learned on Infectious Disease, 2026-08-01).
  The QA pass wrote its findings into nine *narrative* fields — "CORRECTED: the submission
  said…", "REVERSED - the submitted entry stated the opposite" — and the merge shipped all
  nine, because the narrow rule above deliberately exempts narrative prose. A resident does
  not know what "the submission" is. The rule that settles it: **the corrected FACT belongs in
  the entry; the fact that a correction happened belongs in the CORRECTIONS file.** The guard
  now also refuses ANY field containing a phrase *addressed to a reviewer* ("the submission",
  "as submitted", "not independently verified", "DATE CORRECTED"). Phrases, not bare words, so
  the false positives that motivated the narrow rule do not come back.
  **Do not ship a "could not be confirmed from source" hedge — resolve it.** Three ID entries
  carried one; all three were resolvable, and the third (MVA-BN clade I) turned out to claim
  real-world effectiveness that does not exist. A hedge in a reader-facing field is the QA
  pass giving up in public.

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
  `/c/*` rewrite, sends the right MIME types, and (since 2026-08-01) sends `Content-Length`
  and honours `Range`, so share links, fonts, the service worker and **media seeking** behave
  as they do on Netlify.
  **The sim was silently wrong for audio until then**: it replied `Transfer-Encoding: chunked`
  with no `Content-Length` and ignored `Range` entirely. A browser that cannot see the file
  size cannot estimate an MP3's duration, so `media.duration` stayed `NaN` until all 5.9 MB
  arrived; and **a seek in a media element IS a Range request**, so the scrubber could not be
  tested locally at all — while the audio caching design (`sw.js` `MEDIA_RE`) rests entirely
  on Range reaching the network. When a harness "verifies" a feature, check it can actually
  observe the mechanism that feature depends on.
- **The font audit reads `index.html` raw, so inlined JS COMMENTS count.** A box-drawing
  divider (`─`) in `scripts/audio_player.js` produced 234 "uncovered characters" that are
  never rendered. Keep inlined sources ASCII-only; a false positive here trains you to ignore
  the one audit that catches a real mid-sentence font fallback.
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
- **It came back a FOURTH time (2026-08-02) and the body was not the problem at all.** Every
  previous fix asked *what kind of body are we returning*. None asked **whether the promise could
  reject**. `respondWith()` given a REJECTED promise renders Safari's own error page — the same
  screen — however well the body was drained. `readCached()` called `caches.open()` and
  `cache.match()` **outside its try**, and both reject on iOS once the origin's storage has been
  evicted, which is exactly the condition this bug appears under. It also read `hit.clone()`
  rather than `hit`, leaving the same undrained tee on the cache path that v10 removed from the
  navigate path, and `OFFLINE_HTML` was wrapped in one shared `Response` whose body can only be
  read once. `respondWith(navigate(req))` now carries a `.catch` as a backstop: **a navigation
  must never be able to reject.** Also: `_headers` now serves **`sw.js` with `no-cache`** — a
  worker carrying a fix is useless until it reaches the device, and that is part of why this kept
  recurring.
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

## Launch, marketing and the App Store
Three files, each canonical for its own subject. **Read the relevant one before writing anything
that will be seen outside the app** — they exist so the copy and the decisions do not drift.
- **`marketing-brief.md`** — start here for anything marketing. Positioning, audience, channels,
  the assets that exist, and **the claims policy** (in particular: never say "clinically reviewed"
  — no independent medical review has been done, and "written by a physician" is the true and
  stronger claim).
- `app-store-submission-draft.md` — every App Store Connect field drafted to its character limit,
  the privacy label, the review notes, and the four things that would get the app rejected.
- `app-store-plan.md` — pricing and grandfathering, download size, Guidelines 4.2 and 1.4.1, and
  what is measurable with no login.
- **`legal/README.md`** — start here for anything trademark, copyright or patent. Points at the
  trademark plan and the copyright guide, and carries the things that cross between them: removing
  `noindex` at launch very likely starts the **three-month §412 window** for statutory damages, and
  that window never reopens. Also holds the **draft AI-vs-human provenance inventory**, which is
  step one of the copyright checklist and blocks the whole filing until the physician verifies it.
  **™ is free to use today; ® is illegal until registration issues.** Patents are settled — Alice
  §101, don't reopen.
- `LOGIN-WALL-id-collision.md` — **the wall was removed in v76 and RESTORED in v82 (2026-08-08) at
  the physician's request** (`scripts/restore_login_wall.js`, +175 lines). Three decisions shape it,
  and they are the physician's, not defaults:
  - **Share links stay OPEN.** `/c/`, `/s/`, `/g/`, `/r/`, `/u/`, `/x/` return before the wall reads
    any session (`RC_OPEN_ROUTES`). **The v76 removal happened because the old wall blocked every one
    of them silently** — a `/c/<id>` link sent to anyone not signed in landed on a sign-in form. An
    auth hash still wins, so invite and recovery links work from any path. **Keep `RC_OPEN_ROUTES` in
    step with the `RC_ROOT` regex** — a new one-segment route must be added to both.
  - **Invite-only.** The wall has no self-signup form and already handles `hp.type==='invite'`, so the
    app needed no change. What it needs is **"Allow new users to sign up" OFF in the Supabase
    dashboard** — there is no MCP tool for auth config, so that is the physician's step and the app
    cannot enforce it. Project `emdrmxscgmnfxgvimbqn` is ACTIVE_HEALTHY; check `auth.users` before
    shipping a wall, or you can lock everyone out (12 users / 9 confirmed as of v82).
  - **Sign-in, then the disclaimer — which needed no ordering code.** The wall is `z-index:100000`,
    the disclaimer `9999`, so the wall covers it and `pass()` reveals it. Read that off both
    stylesheets rather than assuming it.
  - **The id collision is the thing to never repeat.** `rcTermsGate()` bails on
    `if(document.getElementById('rc-gate')) return;`, and the wall's static markup was
    `<div id="rc-gate" class="hidden">`, so the guard fired on every visit and **the medical
    disclaimer was never built, for anyone, for days.** The wall is now `#rc-authgate`. Before
    deleting or adding either overlay, check which stylesheet owns a shared id.
  - **On a share link the DISCLAIMER is the gate**, since the wall never shows there. That is
    deliberate: the alternative is serving clinical content to someone who has accepted nothing.
  - **`scripts/rc_test_auth.js` is NOT a no-op — an earlier note here said so and was wrong.** It
    seeds `rc.app.session.v1` with a future `expires_at`, which makes the wall call `pass()` with no
    network request, and **all six verify scripts already call it**, so the suite survived the wall
    coming back untouched. It was merely inert while no wall existed.
  - **Test the first run in a genuinely fresh context, and HIT-TEST the viewport centre.** A seeded
    session hides this entire class of bug, which is why months of headless runs never saw the wall
    eating every tap. `elementFromPoint(innerWidth/2, innerHeight/2)` is what proved it.
  - **Locating the removed block: anchor on its first and last line, not on the diff's removed
    lines.** git kept a blank line inside the region as context, so matching the 166 removed lines as
    one contiguous run fails at offset 113. Then assert the result is a pure insertion — every line
    of the shipped file surviving in order.

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
- **THE PAGES ARRIVE AS CHAT PASTES FROM THE PHYSICIAN'S PHOTO ALBUM, AND THEY ARE FULL
  RESOLUTION. Look in `/root/.claude/uploads/<session-id>/` BEFORE asking for files** (established
  2026-08-08; the physician confirmed this has been the route for *every* gallery). The two MSK
  galleries came through at exactly **1024×1536, ~2.5 MB PNG** — the standard — and were built
  straight out of that directory. **They are not "screenshots" in any lossy sense.**
  I assumed a chat attachment must be downscaled, never checked the directory, and spent an entire
  session asking for files that were already on disk — chasing Google Drive, the Netlify connector
  and a production re-export in turn. **The cost of one `ls` is nothing; the cost of that assumption
  was most of a session and the physician's patience.**
  - Filenames are `<uuid>-<STEM>.png` and **the same image appears several times under different
    uuids** (2–3 copies each). Dedupe by md5 before counting: 42 files were 21 unique pages.
  - **Identify each page by OCR, not by order.** `tesseract` is installed. Invert the crop first —
    the pages are light-on-dark, and tesseract wants dark-on-light. The header strip (top ~6% of
    the page) gives `IMAGE n OF 10` plus the ICD-10 code; the bottom ~5.5% gives the footer
    `IMAGE TITLE`, which is the authoritative page title. That mapping is exact and beats reading a
    contact sheet by eye.
  - **A duplicate page is resolved by reading the panel that differs**, not by timestamp: hip
    fracture page 3 arrived in two takes and the canonical one was picked by OCRing the risk-factor
    panel for "Advanced age (>65 years)".
  - **Commit the masters** next to the gallery's `titles.json`. Upload directories are ephemeral and
    die with the container, which is why the masters for 26 of the 27 sub-standard galleries are
    gone and cannot be recovered from this repo.
  - **Consequence for the 27 sub-standard galleries (task #34):** they were almost certainly
    *delivered* at 1024×1536 and downscaled to 800×1200 by our own old pipeline. So the fix is
    probably **re-pasting from the album, not a production re-export** — pilot one gallery, measure
    what arrives, and only ask production if it comes back small. See the banner on
    `REEXPORT-REQUEST-1024x1536.md`.
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
- **Do NOT try to repaint the header progress dots — this was attempted and failed (2026-07-31).**
  The advice above ("flag for re-render rather than repainting artwork") is load-bearing. The
  neurology batch had the dots wrong two ways at once: the COUNT is not the page total (11–13 dots
  on a 10-page gallery, wrong even on pages whose fill is right) and Alzheimer's, Parkinson's and
  Guillain-Barré fill them CUMULATIVELY. A repainter was written that detected the row by
  autocorrelation, sampled the ring grey and disc cyan off the page itself, rebuilt the background
  by interpolating the rows above and below, and refused to touch a page it could not read cleanly.
  It still produced visibly damaged pages: half-erased dots left as "U" shapes and cumulative fills
  surviving underneath. It skipped 31 of 80 as unreadable. **Deleted rather than kept.**
  Five earlier detection attempts also failed (fixed-fraction crops, greyscale blob fill, cyan
  saturation, pixel clustering, even-spacing scan) — the header's y position drifts tens of pixels
  between pages, which defeats every fixed-geometry approach. What DOES work reliably is reading
  the dots by eye off the contact sheet `triage_incoming_gallery.py` writes.
- **`scripts/build_galleries_from_images.py`** is the post-content-split builder: pages to
  `assets/<id>/<id>-NN.jpg` q88, thumbs to the flat `gthumbs/` at 320px q82, compact PDF, and the
  `content/galleries.json` entry plus the id in `real`. `add_gallery.js` predates the split and
  patches `index.html`, so it no longer applies.
- **The download PDF embeds pages at 512×768**, matching the live galleries at ~1.1 MB per ten
  pages. Embedding the full 1024×1536 tripled the size.
- **74 of 181 conditions have a gallery as of 2026-08-01.** Seven categories complete: Cardiac (13),
  Endocrine (13), Gastrointestinal (12), **Heme & Onc (7)**, **Neurology (12)**, Renal & GU (7),
  Respiratory (10). Regenerate the coverage doc with
  **`python3 scripts/gen_gallery_gap.py`** — it reads `content/conditions.json` and
  `content/galleries.json` and nothing else, so it cannot disagree with what is deployed. The doc
  was always *described* as generated, but the generator was never committed, so it drifted: it
  read 55/181 while the app was on 63 and listed Heme & Onc as 0/7 the day all seven shipped. A
  coverage doc that is behind is worse than none — the next batch gets planned off it.
- **Two page-template versions are in flight at production's end (proved 2026-08-01).** A 90-page
  batch arrived with the cumulative-dot defect FIXED; a single gallery (`dic`) delivered hours
  later had it back, plus an orange second highlight colour and a half-cyan/half-orange hybrid
  marker. So *"they fixed the dots"* cannot be concluded from one gallery — **check the header
  strip on every delivery.** The same batch introduced a worse defect than the count: the single
  filled dot at the WRONG INDEX (iron-anemia p3 fills the 4th, b12-anemia p2 fills the 1st — both
  directions, so not a correctable offset). A wrong count is cosmetic; a wrong index tells the
  reader they are on a different page. All of it is in `DOTS-defect-for-production.md`.
