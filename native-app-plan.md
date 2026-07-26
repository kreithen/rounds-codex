# Rounds Codex → native app (Xcode / App Store)

Planning + status doc for taking the existing static app into an iOS (and later Android)
binary. Written 2026-07-26, when the web app was made environment-portable.

**The website is the interim delivery vehicle; the app is the destination.** Per Dr.
Kreithen: the site gets pulled once the app is ready. That decision is already reflected
below — it changes what is worth investing in (§0).

The app now runs unchanged from three different roots — the website, a shared `/c/<id>`
link, and a **local bundle on `file://`** — so the webview build needs no forked copy of
`index.html`. What remains is a native shell, real persistence, and image weight.

---

## 0. What "pull the website" actually means

One thing here is counterintuitive and load-bearing: **the site can go, but the domain
cannot.** Three separate requirements keep it alive.

1. **App Store Connect requires live web pages.** A **Support URL** and a **Privacy Policy
   URL** are both mandatory fields for every app. You cannot submit without them.
2. **Universal Links require a web server.** `apple-app-site-association` has to be served
   over HTTPS from the domain the links use (§4). There is no serverless version of this.
   Without it, a texted `/c/<id>` link cannot open the app.
3. **Shared links have to land somewhere for people who don't have the app.** A custom
   scheme (`roundscodex://c/dka`) works only for people who already installed it, and looks
   broken to everyone else — which is most recipients of a shared link.

So the end state is not "no web": it is **the 6.9 MB app replaced by a ~5 kB smart-link
page** on the same domain, serving

- `/c/<id>` → opens the app if installed (Universal Link), otherwise a small page with the
  condition name and an App Store button
- `/support`, `/privacy` → the two mandatory pages
- `/.well-known/apple-app-site-association` (+ `assetlinks.json` for Android)

That is cheap to keep and it means links already texted to people keep working forever.
**Get the custom domain before the app ships** — moving domains later invalidates every
link already sent, and re-points the association file.

### What this de-prioritises
- **Open Graph tags / SEO / canonical** — near-worthless once the site is a redirector.
  Harmless, already shipped, leave them.
- **Service worker + `manifest.webmanifest`** (PWA install) — dead ends. Already guarded to
  http(s), so they cost the app nothing.
- **Re-uploading 270 gallery images into `assets/<id>/` on the website** — this chore mostly
  evaporates. The messy site root only matters for a site that is going away. The bundle
  gets built from the clean local copies (`gal-final/`, `cardio-final/`), organised properly
  at build time. Only fix the website layout if a gallery is actually broken there.

### What this promotes
- **Image weight** (§3.2) — now an app-download-size problem, not just a page-speed one.
- **Persistence** (§3.3) — in an app, users will expect bookmarks, quiz progress and
  practice-attempt history to survive. Right now *nothing* persists.
- **Separating content from code** (§5) — the difference between adding a condition in a
  day and waiting on App Store review for every content change. **Done.**

---

## 1. Recommended shape

**Capacitor (iOS + Android) wrapping the existing bundle.** The app is stateless static
HTML/JS with no build step, so there is nothing to port — Capacitor copies `www/` into the
app package and serves it from `capacitor://localhost`, which is a real origin (unlike raw
`file://`, which has a null origin and breaks storage APIs the moment we start using them).

A hand-rolled `WKWebView` is also viable — `loadFileURL(_:allowingReadAccessTo:)` or a
`WKURLSchemeHandler` on a custom `app://` scheme — but it means writing the plumbing
Capacitor already ships (share sheet, status bar, safe areas, back button, deep links).

### The Guideline 4.2 problem — read this before building anything
Apple rejects apps that are a repackaged website ("minimum functionality"). A webview
around rounds-codex.netlify.app, with nothing else, is the textbook rejection case. It has
to do things a browser tab cannot. Cheap, genuine candidates, roughly in order of
review-signal per hour of work:

| Native capability | Why it helps | Notes |
|---|---|---|
| **Full offline content** | The clinical case for the app: works with no signal on the wards | Already true — everything is bundled |
| **Core Spotlight indexing** | The 181 conditions become iOS system search results | Strong "not a website" signal; ~an afternoon |
| **Persistent bookmarks** | The star button currently does nothing durable (see §3) | Real gap; users will expect it |
| **Universal Links + Handoff** | A shared `/c/<id>` link opens the app when installed | §4 |
| **Local notifications** | USMLE/NCLEX study reminders | Ties to the report engine |
| **Save gallery PDFs to Files** | Real document handling | Galleries already ship a PDF each |
| **Haptics on quiz answers** | Small, but the kind of polish review notices | Capacitor Haptics |
| **Dynamic Type / accessibility** | Also the right thing to do | Needs a CSS pass on fixed px sizes |

Also **Guideline 2.5.2**: the binary must be self-contained. Bundle the content; do **not**
hot-swap `index.html` or any JS from the server at runtime. Content *data* updates
(new conditions as JSON) are defensible; shipping new executable JS is not.

### Guideline 1.4.1 / medical content
Keep the existing honesty posture, which already satisfies the hard part:
- practice scores only — **never a predicted USMLE/NCLEX score or pass probability**
- areas with fewer than 3 items are shown but never drive recommendations
- no fabricated strengths
- physician-authored, with the `RC VERIFIED` badge reserved for reviewed content

Add a visible "for education, not a substitute for clinical judgement" disclaimer and an
attribution/sources screen. Privacy nutrition label is trivial: the app collects nothing —
no analytics, no accounts, no transmitted data. Adding the local persistence in §3.3 does
not change that: data kept on the device and never sent anywhere is not "collection" under
Apple's definition, so the label stays "Data Not Collected".

---

## 2. Already portable (verified headless in all three environments)

| Concern | How it was solved |
|---|---|
| **App root** | A boot script decides the root before the first relative URL is parsed and writes `<base>`: site root → `/`, a `/c/<id>` link → `/`, a bundle → the document's own folder. Replaced a hard-coded `<base href="/">`, which only worked on the web. Exposed as `RC_ROOT`. |
| **Deep-link capture** | The incoming `/c/<id>` (or legacy `?c=`/`#c=`) id is captured in that same first script as `RC_DEEPLINK`, because the first `paint()` normalises the address bar before the router would otherwise get to read it. |
| **Share links** | `RC_SHARE_ORIGIN` is pinned to the public site, so a share sent *from the native app* is a working web link rather than `capacitor://localhost/c/dka`. Also the origin a Universal Link must claim. |
| **Fonts** | Inter + Oswald are self-hosted and inlined as base64 variable woff2 (Latin, Greek, and Latin-Ext-A). No `fonts.googleapis.com` — typography now works with no network at all. +150 kB; verified 0 CDN requests and correct rendering of `ū Δ μ β α₁ ½ ≤`. |
| **Server calls** | `RC_API` is empty on the web (same-origin, no CORS) and absolute in a bundle, where a root-relative `/.netlify/functions/ask` would resolve *into the app package*. |
| **Service worker** | Registered only on `http(s)`. A SW does nothing on `file://` and can collide with the native shell's asset handling. |
| **Browser history** | The address bar tracks the visible condition via `replaceState` **only**. The app owns its own nav stack; mirroring it into browser history would create a second source of truth. Verified: `history.length` does not grow. |
| **Storage** | None. No `localStorage`, `sessionStorage`, or `indexedDB` anywhere — so no origin/storage surprises in a webview. Also why §3.3 exists: nothing the user does survives a reload. |

---

## 3. Still to do before Xcode

1. **Gallery asset layout — build it, don't re-upload it.** 27 of the 35 galleries have
   `base: ""`: their images sit at the **site root**, because two GitHub web-uploads nested
   wrong and `index.html` was pointed at reality instead of moving 270 files. Since the site
   is going away, do **not** spend an afternoon re-uploading them. The bundle is assembled
   from the clean local copies (`gal-final/`, `cardio-final/`) into `assets/<id>/`, and the
   `base` values are rewritten as part of that build. The website keeps its flat layout for
   as long as it lives.
2. **Image weight — now an app-download problem.** 270 gallery JPEGs = **91 MB** (avg 328 kB
   at 800×1200), plus a 6.9 MB `index.html`; the 8 remaining cardiac galleries would take it
   to ~125 MB. Measured on a 6-image sample: **WebP q82 ≈ 49% of current size**
   (91 → ~45 MB), JPEG q82 ≈ 69% (→ ~63 MB). WebP is supported in WKWebView (iOS 14+) and
   every current browser. Biggest single win available.
3. **Persistence — nothing survives today.** The library's star button toggles a class and
   toasts; no bookmark, no quiz progress, no practice-attempt history is saved anywhere
   (§2 "Storage"). Acceptable for a website you visit once; not for an app someone studies
   with for months. Wants a small storage layer behind one interface, plus attempt history
   feeding the existing report engine so progress over time becomes a real feature. Note the
   honesty constraints still apply to anything built on it: **practice scores only, never a
   predicted USMLE/NCLEX score or pass probability.**
4. **CORS on the Ask function.** From `capacitor://localhost` the call is cross-origin, so
   the Netlify function needs `Access-Control-Allow-Origin`. Ask already falls back to its
   built-in offline answer when the call fails, so it degrades safely until then.
5. **External citation links** (medlineplus, ncbi, cdc, … ~200 hosts) should open in
   `SFSafariViewController`, not navigate the app's own webview.
6. **Safe areas / status bar.** `viewport-fit=cover` is already set; verify the immersive
   views (viewer, quiz, NCLEX, USMLE) against a real notch and the home indicator.
7. **Fixed `px` type** throughout — needed for Dynamic Type support.

---

## 4. Universal Links (`/c/<id>` opens the app)

The `/c/<id>` scheme was chosen partly for this: one short, stable namespace is exactly
what an `applinks` paths list wants.

1. Add the **Associated Domains** capability in Xcode: `applinks:rounds-codex.netlify.app`
   (see the domain note below).
2. Serve `apple-app-site-association` at
   `https<span></span>://<domain>/.well-known/apple-app-site-association` — **no redirects**,
   `Content-Type: application/json`. Template: `deploy/apple-app-site-association.template.json`.
   Netlify serves it as a static file; force the content type with `deploy/_headers.snippet`.
3. Android equivalent: `assetlinks.json` at `/.well-known/assetlinks.json` + an
   `intent-filter` with `android:autoVerify="true"`.

**Get a custom domain first.** `rounds-codex.netlify.app` will technically work (it is on
the Public Suffix List, so it is treated as its own site), but the App Store listing, the
AASA file, and every shared link are better on a domain you own — and moving domains later
invalidates links already texted to people. Only `RC_SHARE_ORIGIN` in `index.html` and the
AASA file need to change.

---

## 5. Content vs. code — DONE (`scripts/split_content.js`)

**Decided and built 2026-07-26.** Everything used to live in one 6.9 MB `index.html` — the
UI code *and* all the content — so a typo fix meant reshipping the whole app, which on the
App Store means a review for every content change. **App Store Guideline 2.5.2** says the
binary must be self-contained and must not download executable *code*; content *data* is a
different matter, and updating it is normal practice. So content moved out:

| | before | after |
|---|---|---|
| `index.html` (code) | 6.87 MB | **0.65 MB** |
| `content/*.json` | — | 6.21 MB in 7 files |
| total | 6.87 MB | 6.86 MB |

`content/conditions.json` (181), `drugs.json` (300), `resident.json` (1308 entries +
specialties + titles + per-specialty conditions + 180 approach entries), `nclex.json` (150),
`quizzes.json` (9), `galleries.json` (35 + the REALGAL list), `or.json`.

A new condition or gallery is now **one small file**, not a 6.9 MB re-upload — and in the app
it is a content update rather than a binary and a review.

### How it works, and the two traps
- Containers stay declared where they were but **empty**, and the loader **fills** them
  (`push` / `Object.assign` / `Set.add`) rather than reassigning. Every existing reference
  therefore keeps pointing at the same object — including `window.NCLEX_DATA`, which the
  NCLEX module holds as an alias (verified: `window.NCLEX_DATA === NCLEX_DATA` after load).
- The five lookups that were derived at parse time (`byId`, `ORDER`, `rxById`, `rxByCond`,
  `resById`) moved into the loader, as did the initial `paint()` and the `/c/<id>` router
  boot, which now runs when `byId` is actually populated instead of on `DOMContentLoaded`.
- **Losslessness is proved, not assumed.** Each blob is evaluated as JS, serialised to JSON,
  re-parsed, and deep-compared including key order — so anything JSON cannot carry fails the
  run rather than vanishing. (Key order matters: `DATA` order drives swipe adjacency.)
- **Trap that actually bit:** extraction and patching were first split across Node and
  Python, and every offset after the first emoji in the file was wrong — JS string indices
  are UTF-16 code units, Python's are code points, so the drift equalled the astral-character
  count. It silently swallowed two `const` declarations. The tool is now all Node, one offset
  space.

### Consequence: `file://` no longer works
The loader uses `fetch`, which cannot read `content/` from `file://`. **The native shell must
serve the bundle from a real origin** — Capacitor's `capacitor://localhost`, or a
`WKURLSchemeHandler` on a custom scheme. That was already the recommendation in §1 for
storage-origin reasons, so it costs nothing, but it is now a hard requirement rather than a
preference. Opening `index.html` off disk shows an explicit message saying so.

Verified with the real content over http on two origins (the website, and a second port
standing in for `capacitor://localhost`): all 13 containers filled, all 5 derivations
rebuilt, 181 cards rendered, deep links working, zero page errors — plus the failure path,
which shows a clear message instead of a blank screen.

### Follow-on now that the seams exist
- **Lazy loading.** All seven files are fetched at boot today. Only conditions, galleries and
  quizzes are needed for the first screen; drugs, resident, NCLEX and OR could load on first
  navigation, cutting first paint from 6.2 MB to ~1.7 MB.
- **Content updates over the air.** The loader already reads from a URL, so pointing it at
  the domain (with the bundled copy as the offline fallback) is a small change — that is what
  makes same-day content updates real in the shipped app.
- The gallery/quiz build pipelines can now emit JSON instead of patching a minified HTML
  file, retiring the brace-matching surgery `CLAUDE.md` warns about.
- `LOGO` is still a 304 kB base64 PNG inline — now ~47% of the code file. Moving it to
  `icons/logo.png` is an easy further cut.

---

## 6. Build steps recorded in this repo

- `scripts/build_fonts.py` — rebuilds the inlined font block from Google's own woff2
  binaries. Re-run if new content introduces glyphs outside Latin / Latin-Ext-A / Greek.
- `scripts/clean_patch.py` — the exact portability pass applied to `index.html`, with every
  edit asserted to hit once. Kept as the record of what changed and why.
- `scripts/split_content.js` — pulls the content out to `content/*.json` and rewires the app
  to load it (§5). Proves losslessness by JSON round-trip deep-compare; every structural edit
  asserted to hit exactly once.

Not yet written (needed once the app is the target): a bundle builder that assembles
`www/` — `index.html`, `usmle/`, and `assets/<id>/` from `gal-final/` + `cardio-final/` —
with the gallery `base` values rewritten and images re-encoded (§3.1, §3.2).
