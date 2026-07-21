# NCLEX-RN Module — Phase 6 Integration & Publish (Claude Code handoff)

**Goal:** put the finished 150-item NCLEX-RN practice module live in the Rounds Codex app,
under **Nursing mode**, then commit the modular source into the repo so it lives somewhere
permanent.

This runs in **Claude Code**, not the Cowork workspace — the workspace is firewalled from the
private repo (all publishing goes through the user's Chrome/GitHub session). See
`claude_publishing-pipeline.md` and the `medcodex-publish` skill for the exact browser flow.

---

## What's in this bundle

| File | Purpose |
|---|---|
| `nclex-data.js` | The 150-item bank: `const NCLEX_DATA = [...]`. Blueprint-exact, medically QA'd. |
| `nclex-logic.js` | The engine: 9 renderers + numeric, 4 scorers, Study + Exam modes, 85-item weighted forms, results, scoped CSS, `buildNclexPatched()`. |
| `apply-nclex.js` | Idempotent patcher that injects the module into the live `index.html`. |
| `verify-integration.js` | Headless smoke test of the patched file (run before publishing). |
| `validate-nclex.js` | The content schema gate (run if the bank ever changes). |
| `nclex-b1.js … nclex-b16.js` | Modular source batches (merge into `nclex-data.js`). |
| `PHASE4-NOTES.md`, `QA-MEDICAL-ACCURACY.md`, `BUILD-NOTES.md` | Decisions, QA, history. |

---

## The integration seam (how it hooks into the app)

The app is a single static `index.html` that toggles modes via `html[data-mode="..."]`
(Nursing / Medical / Resident, per the resident-mode build). The module:

- Injects `const NCLEX_DATA=[...]` + the `nclex-logic.js` engine as `<script>` blocks before `</body>`.
- Adds a **Nursing-mode-only entry point** (a "NCLEX-RN practice" button) placed just after the
  app's top search input, gated with `html[data-mode="nursing"] #nclex-entry{display:block}`.
- Mounts the module into `#nclex-root` (the engine's `buildNclexPatched()` injects its own scoped
  CSS under `#nclex-root`, so it can't collide with app styles). The panel stays hidden until the
  button is clicked.

All of this is done by `apply-nclex.js` — you do not hand-edit `index.html`.

---

## Step-by-step

### 1. Confirm the base is current
Build on the CURRENT live `index.html` so nothing gets reverted. Check the repo's commit history
for `index.html` (github.com/kreithen/rounds-codex-app/commits/main/index.html) and pull the latest
into your working copy (e.g. `live/index.html`).

### 2. Patch the module in
```bash
node apply-nclex.js live/index.html index.nclex.html
```
The patcher REFUSES (non-zero exit) if:
- `index.html` already declares `const NCLEX_DATA` (avoids the SyntaxError double-declare trap — the
  same rule that governs `RX_DATA`),
- `nclex-data.js` is not exactly 150 items,
- the `</body>` anchor is missing.

It warns (non-fatal) if it can't see a `data-mode` attribute — if that warns, eyeball the
Nursing-mode gate before publishing.

### 3. Headless-verify BEFORE publishing
```bash
npm i jsdom        # once
node verify-integration.js index.nclex.html
```
Must print `passed: 11   failed: 0` and "OK to publish". It boots the patched file in a DOM,
switches to Nursing mode, opens the module, builds an 85-item exam, renders results, and asserts
**zero uncaught JS errors**. If anything fails, do NOT publish — fix and re-run.

(Optional, stronger: if Playwright is available, load `index.nclex.html`, set
`document.documentElement.dataset.mode='nursing'`, click the "NCLEX-RN practice" button, and confirm
the Study/Exam home renders — same as the Rx module's headless check.)

### 4. Bump any hero/count copy if desired
Unlike Rx (which has `<b id="rxcnt">`), the NCLEX module has no live counter to bump. If you want a
"150 NGN-style questions" line in the Nursing-mode hero, add it now in `index.nclex.html`.

### 5. Publish (browser → GitHub → Netlify)
Rename `index.nclex.html` → `index.html`, stage to outputs, and publish via the **medcodex-publish**
flow (Chrome, user's GitHub session): upload `index.html` at
`github.com/kreithen/rounds-codex-app/upload/main` (root), commit to `main`. Netlify auto-deploys in
~1 min. Verify on https://rounds-codex.netlify.app: switch to Nursing mode, click "NCLEX-RN
practice", run a couple of items in Study and one Exam form.

> Note: `index.html` is already ~2.5–3.3 MB. The module adds ~200 KB (150 KB data + ~50 KB engine).
> If size is a concern, the optional refactor below externalizes the data.

### 6. Commit the modular SOURCE into the repo (do not skip)
This is the step that fixes the gap that caused the earlier painful restart — the source lived
nowhere permanent. Commit into the repo (e.g. under `src/nclex/`):
```
nclex-logic.js  nclex-data.js  nclex-b1.js … nclex-b16.js
validate-nclex.js  apply-nclex.js  verify-integration.js
PHASE4-NOTES.md  QA-MEDICAL-ACCURACY.md  BUILD-NOTES.md
```
Now any future tier can be built from the repo without re-attaching files to a chat.

---

## Updating the bank later (the repeatable recipe)
The live file will ALREADY contain `const NCLEX_DATA=[...]`. Do **not** re-run `apply-nclex.js`
(it will refuse). Instead, swap the embedded array in place:
1. Edit/add batch files → re-merge to `nclex-data.js` → `node validate-nclex.js nclex-data.js`
   (must pass the enforced band check at exactly 150, or adjust the blueprint intentionally).
2. In the live `index.html`, replace the text between `const NCLEX_DATA = [` and the matching
   `];` that precedes `window.NCLEX_DATA = NCLEX_DATA;` with the new array body.
3. `node verify-integration.js` the result, then publish + commit source as above.

---

## Guardrails / gotchas
- **Never two `const NCLEX_DATA`.** Duplicate top-level `const` = SyntaxError that blanks the app.
  The patcher enforces one; keep it that way on manual edits.
- **Scoped CSS.** All engine styles live under `#nclex-root`; the entry-point styles under
  `#nclex-entry`. Nothing leaks into the app's global CSS.
- **Mode gate.** The entry point is hidden unless `html[data-mode="nursing"]`. If the app's mode
  attribute name ever changes, update the two CSS lines in `apply-nclex.js` accordingly.
- **Disclaimer** is baked into the module home and results ("Educational practice material for
  Rounds Codex. Not affiliated with or endorsed by NCSBN. NCLEX(R) is a registered trademark of
  NCSBN, Inc. Scores are practice feedback only and do not predict NCLEX pass/fail.").
- **Publishing is browser-only.** Don't try `git push`/PAT/API from the shell — 403 by design.

---

## Optional future polish (not required to ship)
- Externalize `NCLEX_DATA` to `nclex-data.json` + `fetch()` at init so `index.html` stops growing
  (same idea noted for `RX_DATA`).
- Persist the last exam score locally (host app may prefer its own store; the engine avoids
  browser storage by default).
- Mint a `medcodex-nclex-buildout` skill so future tiers/specialty banks are one-prompt repeatable.
