# Rounds Codex → native app (Xcode / App Store)

Planning + status doc for taking the existing static app into an iOS (and later Android)
binary. Written 2026-07-26, when the web app was made environment-portable.

The short version: the app now runs unchanged from three different roots — the website,
a shared `/c/<id>` link, and a **local bundle on `file://`** — so the webview build no
longer needs a forked copy of `index.html`. What remains is a native shell, real
persistence, and image weight.

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
attribution/sources screen. Privacy nutrition label is trivial: the app collects nothing
(no analytics, no accounts, no storage — see §3).

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
| **Storage** | None. No `localStorage`, `sessionStorage`, or `indexedDB` anywhere — so no origin/storage surprises in a webview. (Also why §3 exists.) |

---

## 3. Still to do before Xcode

1. **Consolidate gallery assets under `assets/<id>/`.** 27 of the 35 galleries currently
   have `base: ""` — their images sit at the **site root** because two GitHub web-uploads
   nested wrong and `index.html` was pointed at reality instead of moving 270 files. It
   works, but a native bundle (and the repo) wants one folder per condition. One-time
   cleanup: re-upload into `assets/<id>/` and set every `base` to `assets/<id>/`.
2. **Image weight.** 270 gallery JPEGs = **91 MB** (avg 328 kB at 800×1200), plus a
   6.6 MB `index.html`; the 8 remaining cardiac galleries would take it to ~125 MB.
   Measured on a 6-image sample: **WebP q82 ≈ 49% of current size** (91 → ~45 MB),
   JPEG q82 ≈ 69% (→ ~63 MB). WebP is supported in WKWebView (iOS 14+) and every current
   browser. This is the single biggest win, and it speeds the *website* up too.
3. **Persistent bookmarks.** The library's star button toggles a class and toasts; nothing
   is saved. Needs real storage (and then it's the same code path on web and native).
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

## 5. Build steps recorded in this repo

- `scripts/build_fonts.py` — rebuilds the inlined font block from Google's own woff2
  binaries. Re-run if new content introduces glyphs outside Latin / Latin-Ext-A / Greek.
- `scripts/clean_patch.py` — the exact portability pass applied to `index.html`, with every
  edit asserted to hit once. Kept as the record of what changed and why.
