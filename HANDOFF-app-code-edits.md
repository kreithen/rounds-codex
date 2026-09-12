# HANDOFF — editing the app's code, after launch

Written 2026-09-12, for a **fresh conversation**. The iOS app is live; the Android app is being
built in its own conversation. This document is for the third thing: **changing the app itself** —
the layout, the views, the CSS — now that two native builds depend on the same source.

The named first job is **large screens: iPad, and a folding iPhone**. The plan for it already
exists and is good: **`large-screen-plan.md`**. Everything below is what a session needs to know
*before* it starts editing, because the app now ships to three surfaces from one file and the ways
to break the other two are not obvious from the diff.

---

## 0. Read these first, in this order

| file | why |
|---|---|
| **`CLAUDE.md`** | The project's standing rules. Non-optional. The physician is the medical gate; a deploy needs approval. |
| **`large-screen-plan.md`** | The actual work. Three levels, costed, measured against the shipped CSS. |
| **`native/MAC-RUNBOOK.md`** | How a change in this repo becomes a running app on the physician's Mac. §3, §3b, §3c. |
| **`app-store-checklist.md`** | What is done, what is open, and the 1.0.1 list. |
| **`HANDOFF-android-app.md`** | The Android conversation's state. Read §2 and §6 — its branch is ahead of this one. |
| `native-app-plan.md` §5 | Why content lives in `content/*.json` and not in `index.html`. |

---

## 1. Start from the right commit — this is the first way to waste a day

There are three lines of history and they are **not** in the order you would guess:

```
origin/main                               2026-08-26   does NOT contain the iOS work
origin/claude/native-ios-app              2026-08-26   the iOS launch — now 24 commits BEHIND
origin/claude/native-android-app-fzzjss   2026-09-11   contains ALL of the iOS work, plus more
```

`claude/native-android-app-fzzjss` is the **head of the native line**. It carries the two-platform
payload chain, `strip_service_worker.js`, the Android privacy wording and the entity correction.
Branching from `claude/native-ios-app` because the name matches would silently revert all of it.

```sh
git fetch origin --prune
git for-each-ref --sort=-committerdate --format='%(committerdate:short)  %(refname:short)' refs/remotes/origin | head
git checkout -B <your-branch> origin/claude/native-android-app-fzzjss   # or whatever is newest
```

**Re-check this before branching.** The Android conversation is active and pushes most days; by the
time you read this the newest branch may be another one again. Sort by date, do not trust this list.

This document's own branch is `claude/no-wall-ios-variant-nbyd9v`, cut from the Android tip on
2026-09-12. It contains nothing but this file.

---

## 2. The two repos, and the one rule that is not negotiable

- **`rounds-codex` (this repo, PUBLIC)** — build tools, scripts, staging, docs. Commit freely.
- **`rounds-codex-app` (PRIVATE, separate)** — the LIVE site, Netlify auto-deploys from its `main`.
  `add_repo` works: `access:"read"` with no prompt, `access:"push"` after one approval. Clone to
  `/workspace/rounds-codex-app` and use plain `git` — the GitHub MCP stays scoped to `rounds-codex`.

**Anything that touches the live app repo is a deploy and needs the physician's explicit approval
first.** That includes a CSS-only change. It ships to every web user the moment it lands.

**Never commit the live app, `applive/`, or a deploy zip to this public repo.**

---

## 3. One source, three surfaces

`index.html` is code only (~745 kB); content is `content/*.json`, fetched at boot. The same file
ships to:

| surface | how it is built | what it does differently |
|---|---|---|
| the website | pushed as-is to `rounds-codex-app` | login wall, service worker, Ask tab, account pages |
| iOS | `build_native_payload.js --platform ios` | no wall, no Ask, no worker, safe-area insets, `capacitor://localhost` |
| Android | `build_native_payload.js --platform android` | same as iOS; asset packs are mandatory (200 MB cap) |

**There is no fork and there must never be one.** The native builds are produced by anchored
patchers that assert an exact number of occurrences and abort rather than half-apply. That is the
whole design: one file to edit, and a build that fails loudly when an edit moves something a patcher
was anchored on.

### The patcher chain, in order (`scripts/build_native_payload.js`)

```
stamp_version.js        version.txt is the source of truth; RC_VERSION derives from it
fix_root_authority.js   keeps the host on capacitor://localhost, which has NO path
add_media_root.js       media resolves through RC_MEDIA_ROOT (unset in v1 — a no-op that stays)
build_ios_variant.js    removes the wall, the account surfaces and Ask
fix_usmle_link.js       usmle/ -> usmle/index.html (Capacitor will not resolve a directory)
strip_service_worker.js removes the registration and deletes sw.js
add_safe_area.js        top/bottom insets. LAST — it appends to <head>, every anchor above reads it
```

### What this means for you, concretely

**If your edit changes anything a patcher anchors on, the native build stops.** That is the system
working. Fix the anchor in the same commit; do not weaken the assertion to make it pass.

The anchors most likely to be in your way for a layout change are in **`add_safe_area.js`**, which
asserts eleven shipped rules before it will run:

```
.nav{...bottom:14px      .pad{padding-bottom:112px}      .app{width:100%;max-width:468px
.viewer{position:fixed   .vtop{position:absolute;top:0;...padding:16px
.topbar .dtop .qhead .ghead .ahead   (sticky, each with its exact padding)
.rxletter (sticky)
```

**`.app{width:100%;max-width:468px` is on that list, and raising the 468 px cap is Level 1 of the
large-screen plan.** ~~So the very first edit of that project will fail `add_safe_area.js`.~~
**It did not, and the prediction was wrong in a useful way (2026-09-12).** Mobile-first is the
reason: `add_large_screen.js` leaves the base rule byte-identical and widens the container in an
appended `@media (min-width:...)` block, so all eleven anchors stay green. **Override at min-width,
never edit the base rule** — that keeps the whole `EXPECT` list intact and is better CSS anyway.

The anchor that *did* break was one nobody predicted: `add_safe_area.js` appends against the literal
`'</style></head>\n<body>'`, and inserting a new `<style>` block with a newline before `</head>`
took that to zero occurrences — "expected exactly 1 head-close anchor, found 0", which stops the
payload build. `add_large_screen.js` now asserts that anchor is still at exactly 1 *after* its own
write, and refuses to save otherwise. **Run the chain after a CSS-only change; that is how this was
caught.**

Run the chain after any app edit, even a CSS one:

```sh
node scripts/build_native_payload.js ../rounds-codex-app /tmp/rc-payload --platform ios
```

---

## 4. Verifying, and the harness traps this project keeps hitting

```sh
RC_PW=<dir with node_modules/playwright-core> sh scripts/preflight.sh web ../rounds-codex-app
RC_PW=<dir with node_modules/playwright-core> sh scripts/preflight.sh ios ../rounds-codex-app
```

`ios` mode builds the payload first and checks **those** bytes. That is the one to run before an
archive. A skipped check is reported as skipped, not as green — read the summary line.

Serve any tree with `node scripts/netlifysim.js <ROOT> <PORT>` (positional). It does the `/c/*`
rewrite, sends `Content-Length` and honours `Range`.

**The strongest check for a mechanical change is a side-by-side.** Serve old and new on two ports,
drive both through the same script, diff `.app` `innerHTML`. That is how the content split was
proved over sixteen views; it catches what an assertion you thought to write would not.

Four traps that have each cost real time:

- **A fresh context hits `#rc-gate`**, which swallows every tap until `#rc-gate-ok` is clicked.
  `scripts/rc_test_auth.js` seeds a session so the login wall calls `pass()` with no network.
- **The service worker serves your failure test from cache.** Use a fresh context when testing a
  failure path.
- **The `#screen` swipe handler ignores mouse events within 700 ms of any touch.** A test that taps
  then mouse-drags measures the guard and passes on a broken build. Drive real touch over CDP.
- **When adding a regression guard, run it against the pre-fix file and confirm it FAILS.**
  Otherwise it is decoration. `verify_sw.js` passed on a broken worker for exactly this reason.

---

## 5. What a container cannot test, and the five bugs that proves

**There is no macOS, no Xcode and no WebKit in a session.** Nothing can be tested as Safari renders
it, and nothing can be built, signed, archived or uploaded from here. Every one of these five was
found on a device or a simulator and none was findable in Chromium:

1. **`RC_ROOT` ate its own host.** `capacitor://localhost` has no trailing slash and no path, so
   stripping the last path segment left `capacitor://` and every `content/*.json` was blocked
   cross-origin. → `fix_root_authority.js`, guarded by `verify_root_authority.js`, which **fails on
   the pre-fix tree**.
2. **Headers under the Dynamic Island on every cold load.** No `env(safe-area-inset-top)` anywhere
   in the shipped CSS — invisible on the web, where Safari's own toolbar occupies that strip.
   → `add_safe_area.js` **plus** `"contentInset": "never"` in `capacitor.config.json`. Half the fix
   lives in the Xcode project and cannot be applied from here.
3. **The same header glitch again after answering a quiz question** — a sticky element pins to the
   **scrollport** and ignores the padding on `.app`. The bars now grow upward with a negative margin
   instead of taking an offset.
4. **The USMLE module is a separate document** and got none of the above. Its header sat under the
   clock while the main app was already fixed.
5. **The USMLE module did not scroll to the top on "next question"** — `window.scrollTo(0,0)` at the
   end of `renderQuestion()`. Shipped as v132.

**Say plainly which parts of a change are unverified.** That has been the rule here throughout and
it is why the physician trusts the reports.

### The two greps

The safe-area fix survived a whole rebuild and shipped to Apple missing, because the Mac's clone had
not been pulled — while every command looked like it had worked. After any payload rebuild:

```sh
grep -c "add_safe_area" /tmp/build.log                # the patcher ran
grep -c "rc-safe-area"  /tmp/rc-payload/index.html    # its output is in the payload
```

and in the running app, via Safari's Web Inspector:

```js
[!!document.getElementById('rc-safe-area'),
 getComputedStyle(document.querySelector('.app')).paddingTop,
 getComputedStyle(document.querySelector('.nav')).bottom]
```

`[false, ...]` is a build problem, not a CSS one. Check that before changing any CSS.

### The rebuild sequence (physician's Mac)

```
git pull  →  node scripts/build_native_payload.js ... --platform ios  →
rsync -a --delete /tmp/rc-payload/ www/  →  npx cap sync ios  →  ▶
```

`rsync` alone updates `www/` and nothing else; `cap sync` is what copies it into
`ios/App/App/public`. Skipping it means testing stale bytes — which happened twice.

**A pasted block's last line does not execute** (no trailing newline), and `npx cap init` is
interactive and swallows whatever follows it. Give the physician **one instruction at a time**; that
was asked for explicitly and repeatedly.

---

## 6. State, verified 2026-09-12

- **iOS: `Rounds Codex: Clinical Atlas` 1.0 (build 4) is LIVE on the App Store** — id 6802452599,
  free, no IAP, universal iPhone + iPad. Bundle `com.roundscodex.app`, team `744JSM2Z3H`.
- **Web: `v133-ANDROID-PRIVACY`, deployed 2026-09-09** — confirmed from this session with
  `curl -s https://rounds-codex.netlify.app/version.txt`. **Do that yourself rather than assuming**;
  the live host's reachability from the proxy has flipped more than once.
- **The Capacitor project exists ONLY on the physician's Mac** (`~/rounds-codex-ios`, Capacitor 7.4,
  Swift Package Manager, no CocoaPods). It is in **neither repo**. A session cannot see the shipped
  `capacitor.config.json`, `Info.plist`, or how Universal Links are routed in. Reference copies of
  the three drop-in files are in `native/ios-project/` and **have never been compiled**.
  Putting that project under version control is §4.0 of the Android handoff and it is still open.
- **The entity is `ROUNDS CODEX, LLC`** — not "Inc.", which this repo said for three weeks. D-U-N-S
  148718973.
- **The app is not available in the EU** — DSA trader status is unfiled. The physician hit this in
  Norway. Open.
- **Universal Links do not work.** `applinks:roundscodex.com` points at `roundscodexwebsite`, a
  *different* Netlify site with no AASA. `RC_SHARE_ORIGIN` is `https://rounds-codex.netlify.app`
  and is correct. 1.0.1 item.
- **The Open Graph card is built but not shipped.** `scripts/build_og_card.py` renders two 1200×630
  candidates; `scripts/add_og_tags.js` is written and refuses to run twice. Neither a card nor the
  tags has been committed or deployed — one of the two candidates still needs choosing.

---

## 7. The open list

**Layout (the named job).** ~~`large-screen-plan.md`, Level 1 first.~~ **LEVEL 1 IS BUILT,
2026-09-12, on branch `claude/ios-large-screen-layout-6n2sur` — and NOT DEPLOYED.** It is a CSS
change plus two one-line JS edits to the live app's `index.html`, which is a deploy and needs the
physician's approval before it lands. `scripts/add_large_screen.js` applies it,
`scripts/verify_large_screen.js` guards it (15 checks, 11 of which fail on the pre-fix tree), and
`preflight.sh` runs it. What the plan got wrong is corrected in a banner at the top of that file;
the two that matter are that only `.res-grid` was ever `auto-fill` (the gallery grid is a hard
`1fr 1fr`) and that the shipped 468 px column was already at a 62–75 character measure, so the
reading views could only be widened to 520 px. Re-counted while there: **twenty** media queries, not
fourteen, and still not one `min-width` before this change.

**Level 2 is the next layout job**, and the Level 1 measurements argue for a specific first step:
the condition page is the one reading view with headroom left, and the way to spend an 880 px screen
on it is two columns of `.panel` cards at roughly phone measure each, not a wider ribbon.

**Still open, roughly in order of value:**

- **`stamp_version.js` fails on the shipped tree, and it blocks every native payload build.** The
  live `index.html` carries `RC_COPYRIGHT='2026 Rounds Codex, Inc.'`; the repo's scripts expect
  `'2026 Rounds Codex, LLC.'` — §6 records that the entity is LLC, but the correction never reached
  the website. `preflight.sh web` reports it as `version and copyright FAIL` and `preflight.sh ios`
  dies at the first patcher, before it can check anything. Pre-existing, verified against an
  unpatched tree on 2026-09-12. It is the physician's legal entity name on a shipped page, so it is
  their call, not a drive-by fix — but nothing native can be built until it is made.

- Choose the OG card, apply `add_og_tags.js`, deploy as v134 *(needs approval)*
- EU availability — DSA trader status; decide what name and address are publicly displayed
- Universal Links (1.0.1) — point `applinks` at the host that actually serves the AASA, or move
  the app to `roundscodex.com` and move `RC_SHARE_ORIGIN` with it
- Put the Capacitor project in a repo, so a session can read it
- `noindex` removal — entangled with the §412 copyright window, see `legal/README.md`
- Guideline 4.2 depth: Core Spotlight over the 183 conditions, save-PDF-to-Files, local
  notifications for the review queue, haptics on quiz answers
- The App Store URL into `marketing/faculty-outreach-email.md`, then the physician's approval
- Per-route link-preview cards (needs a Netlify Edge Function — `_redirects` rewrites every route
  to one `index.html`, so per-route `og:` tags are impossible as things stand)

---

## 8. What NOT to do

- **Do not fork the codebase for a platform.** One source, one variant chain. This has been asked
  and answered.
- **Do not build a paywall or in-app purchase.** v1 is free and stays free for early users.
- **Do not touch the anatomy leader-line project** — its own conversation, branch
  `claude/anatomy-label-corrections`. Two sessions on one branch collide.
- **Do not push to the Android conversation's branch.** Same reason.
- **Do not ship a medical judgement.** Quiz answers, condition text and generated clinical imagery
  go to the physician. Autonomy here is about mechanics, not correctness.
- **Do not ask the physician to re-toggle a connector more than once.** A mid-conversation toggle
  does not reach a running session — measured. Start a new conversation with it already on.
- **Do not report a push as a deploy.** `/version.txt` from a browser is the proof.
