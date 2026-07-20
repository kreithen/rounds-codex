# Rounds Codex — Resident Module Deployment Package

**Built:** 2026-07-19 · **Dataset:** 1308 entries across 23 specialties · **Status:** data audited & structurally verified, ready to integrate + publish.

This package contains the **data + wiring + instructions** to deploy Resident Mode to the live site. It does **not** contain `index.html` — that file lives only in the private GitHub repo (`github.com/kreithen/rounds-codex-app`), which is firewalled from the cloud workspace. The final assembly happens on your **desktop**, where Chrome is logged into GitHub and the live file is reachable.

---

## What's in this zip
| File | What it is |
|---|---|
| `res-resident-master.js` | **THE deploy payload** — a single `const RES_DATA=[…1308]` covering all 23 specialties. The app filters by `.sec`. |
| `res-resident-master.json` | Portable JSON backup of the same data (for tooling/diffing). |
| `res-logic-wiring-snippet.js` | The two config objects the app needs: `RES_ACTIVE` (all 23 sections turned on) and `RES_SECTION2_TITLE` (per-specialty section headers). |
| `AUDIT-SUMMARY.md` | One-page medical-accuracy audit summary (scorecard + findings). |
| `qa-logs/` | 22 per-specialty QA logs for Dr. Kreithen's sign-off. |

**23 sections (1308 entries):** em·gs·im·anes (50 each) · cards·ent·neuro·obgyn·ortho·path·peds·plastics·pmr·prev·psych·radonc·rads·thoracic·uro (60 each) · nsg (58) · derm·fm·ophtho (50 each).

---

## The one hard constraint (why this goes through Chrome)
Cloud/Cowork sessions are firewalled from the private repo — `git push`, the GitHub API, and PATs all 403 by design. **Publishing runs through your desktop Chrome** (your logged-in GitHub session), then Netlify auto-deploys `main` in ~1 minute. This is the same path documented in the `medcodex-publish` skill.

---

## Deployment — do this at your desktop

### Step 0 — Confirm the base is current
Open the repo's history for `index.html`
(`github.com/kreithen/rounds-codex-app/commits/main/index.html`) and build on a copy of the **newest** live `index.html` so nothing (galleries, Rx module, prior resident content) gets reverted.

### Step 1 — Integrate the data (two sub-cases)
The resident module (the `res-logic.js` render code + a `const RES_DATA=[…]`) may already be embedded in the live `index.html` from the earlier 200-entry / 3-mode build.

- **Case A — module already present (most likely):** this is a *data expansion*. Do **not** re-run the first-time patcher (it refuses a double-patch / would create a duplicate `const RES_DATA` → SyntaxError). Instead:
  1. Replace the embedded array — everything between `const RES_DATA=[` and the matching `];` — with the array from **`res-resident-master.js`**.
  2. Apply the wiring from **`res-logic-wiring-snippet.js`**: replace the existing `RES_ACTIVE` set and `RES_SECTION2_TITLE` object with the ones provided (this turns on all 23 specialties, **including `cards` as a section**, and sets each section header).
  3. Confirm there is **exactly one** `const RES_DATA=` in the file.

- **Case B — module not yet present:** run the first-time patcher from your `residents/` folder (`res-build.js` → `buildRxPatched`-style surgical edits: ROOTS, nav, paint branches, detail hook, CSS, module code), then apply the wiring snippet as in A-2.

> Tip (from the Rx build): after uploading files in the GitHub web UI, the first click often lands on "choose your files" — click the commit-message box again before typing.

### Step 2 — Verify before you ship
- `RES_DATA.length === 1308`, exactly one `const RES_DATA=`, and the `<script>` parses (no console errors).
- Spot-check that all 23 specialties appear in the picker and that `cards` shows with its section title.
- Confirm the existing galleries, Rx module, and 3-mode toggle still render (build on the live file so these are preserved).

### Step 3 — Publish (Chrome → GitHub → Netlify)
1. Go to `github.com/kreithen/rounds-codex-app/upload/main` (repo root) and upload the updated **`index.html`** (a same-named upload overwrites). This is a **code-only** change — no new assets.
2. Commit directly to `main`.
3. Watch the Netlify **Deploys** tab (`app.netlify.com/projects/rounds-codex/deploys`) for the new `main@…` deploy to go **Published (green)**.
4. Load `https://rounds-codex.netlify.app`, open Resident Mode, and confirm the specialties/entries load.

---

## Medical-accuracy note (for sign-off)
Every entry was structurally verified (1308 entries, all unique IDs, 23 sections, 0 parse errors). A web-grounded medical-accuracy spot-check across the specialties applied ~35 edge-of-guideline updates (newest drugs/indications/trials) — **no underlying errors were found.** See `AUDIT-SUMMARY.md` and `qa-logs/`. This remains a prioritized spot-check, **not** a per-sentence certification: **attending sign-off by Dr. Kreithen is required before authoritative clinical use.**
