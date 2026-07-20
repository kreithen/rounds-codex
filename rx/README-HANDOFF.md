# Rounds Codex Rx — Tier 3 handoff (200 → 300 drugs)

This bundle takes the Rx module from the **200 drugs currently live** to **300**.
The new 100 (Tier 3, drugs 201–300) were researched and built in Cowork against
free/official sources only (FDA/DailyMed, Drugs.com, MedlinePlus). Publishing and
committing source to the repo happen **here in Claude Code** — that was the whole
point of the hybrid workflow.

## What's in this folder

| File | What it is |
|---|---|
| `rx-data.js` … `rx-data4.js` | The **200 live** drugs, 50 per file (`const RX_DATA`, `RX_DATA2`…`RX_DATA4`). These are the modular source that was **never in the repo** — only the built `index.html` was. Commit these. |
| `rx-data5.js` | Drugs **201–250** (`const RX_DATA5`). |
| `rx-data6.js` | Drugs **251–300** (`const RX_DATA6`). |
| `rx-drugs-300.json` | All **300** merged, pretty-printed, category-canonicalized. Human-readable master. |
| `rx-drugs-300.min.json` | Same 300, minified. **This is what gets embedded in index.html.** |
| `rx-logic.js` | Render + patch code: `rxPill`, `rxHTML`, `rxRender`, `rxInit`, `rxDetailHTML`, `rxInjectCond`, and `buildRxPatched()` (first-time insertion only). |
| `merge300.js` | Rebuilds the two JSONs from `rx-data*.js`. Run `node merge300.js` if you edit any dataset. |
| `apply-300.js` | **The publish helper.** Swaps the embedded array from 200 → 300 in a copy of the live `index.html`. |
| `build5.js`, `build6.js` | How rx-data5/6 were assembled from raw research (normalizer + pill repair). Reference only. |

## Publishing 300 live — do this

The cloud workspace is firewalled from the private repo, so publishing was always
manual-browser. From Claude Code you can do it properly:

1. **Get the current live `index.html`** from `github.com/kreithen/rounds-codex-app`
   (branch `main`). It already has the 200 drugs **and** the Atrial Fibrillation
   gallery — always expand the *current* live file, never an older local build.
2. `node apply-300.js path/to/live/index.html index.300.html`
   - It finds the single `const RX_DATA=[ … ]` block and replaces the array with
     the 300-drug array from `rx-drugs-300.min.json`. Nothing else is touched.
   - It refuses to run if it can't find the anchors or if the result wouldn't have
     exactly one `RX_DATA` declaration / 300 drugs. (Validated end-to-end in Cowork:
     data loads, `rxById` builds 300 keys, detail cards + SVG pills render for the
     new drugs, zero JS errors.)
3. Commit `index.300.html` **as** `index.html` to `main`. Netlify auto-deploys
   (~1 min → green). Verify at rounds-codex.netlify.app → Rx button.

> ⚠️ Do **not** re-run `buildRxPatched()` to expand. That's first-time insertion
> only — it would add a second `const RX_DATA` and throw a SyntaxError. Expansion =
> swap the array (what `apply-300.js` does).

## Also commit the modular source (the structural fix)

Right now the repo only has the built `index.html`; the per-tier `rx-data*.js`
sources live nowhere permanent. Commit `rx-data.js`…`rx-data6.js`, `rx-logic.js`,
`merge300.js`, and `rx-drugs-300.json` into the repo (e.g. a `rx/` folder) so the
dataset has a real home and the next tier is a clean diff, not an archaeology dig.

**Optional bigger win:** `index.html` is ~2.6 MB with 300 drugs embedded. You could
externalize the data — write `rx-data.json` (= `rx-drugs-300.min.json`) as its own
file and have the app `fetch()` it at Rx-module init instead of inlining `RX_DATA`.
That stops `index.html` ballooning every tier and makes future drug edits a JSON
diff. It's a real refactor (the code currently assumes `RX_DATA` is a global on
load), so treat it as a follow-up, not part of shipping 300.

## Data schema (per drug)

`{id, generic, trade[], cat, cls, sched, ver, cond[], boxed[], uses[], dA[], dP[],
dur, hl, se[], ix[], preg, pills[], src[]}`
— `dA`/`dP` = adult/peds dosing, `dur` = length of use, `hl` = half-life,
`se` = major side effects, `ix` = major interactions, `boxed` = FDA boxed warnings,
`sched` = DEA schedule, `preg` = pregnancy/lactation line.
Oral pills: `{f,s,sh,c,im,sc}` (form, strength, shape, color, imprint, scored bool);
non-oral: `{f,s}`. `rxPill()` renders these as inline SVG.

## Notes on the Tier-3 data

- **Categories were consolidated** for a cleaner "by category" browse: the exact
  synonyms `Oncology → Heme & Onc` and `Dermatology → Derm & Wounds` were merged in
  the 300 JSON. `OB & Peds` / `Women's Health` and `Ophthalmology` / `ENT` were left
  distinct. Adjust in `merge300.js` (the `CANON` map) if you'd rather split/merge
  differently, then re-run it.
- **Nine drugs had malformed pill data** from the research pass (tizanidine,
  citalopram, paroxetine, nortriptyline, ziprasidone came back `{desc,im}`;
  azathioprine, tacrolimus, mycophenolate, sevelamer came back missing form). These
  were hand-repaired to clean `{f,s,sh,c,im,sc}` objects in `build6.js` (`FIXPILLS`).
- All `src` links were filtered to the four approved domains only.
