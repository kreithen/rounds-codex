# NCLEX Module — Phase 4 (Engine) Build Notes

## Status: ENGINE BUILD-COMPLETE + headless-verified (2026-07-21)
`nclex-logic.js` (~992 lines) is the production engine for the 150-item bank.
58/58 functional checks pass; 500 randomized exam draws show 0 invariant violations.

## Decisions locked (Dr. K, 2026-07-21)
- Exam score report: **% correct (NGN partial-credit weighted) + per-category breakdown
  + standalone-vs-case split**, labeled a practice score, NOT a pass/fail prediction.
  (Recommendation accepted: mirrors how NGN actually scores — standalone 0/1, case items
  polytomous +/- with floor 0, bowtie /5 — without faking an IRT pass standard.)
- Timer: **OFF by default**, learner can toggle a ~3-hour timer (soft warning at 0,
  no auto-submit). 85 items scales the real 5-hr/150 exam.
- Study mode: rationales + correct answers reveal **at end of the set** (then full review).

## What the engine does
- **9 renderers + numeric**: mc, sata, selectN, matrixMC, matrixMR, cloze, ddTable, pair,
  bowtie, numeric. Each mutates a per-item response object; `locked` repaints correctness.
- **4 scoring models** (return {credit,max,correct}):
  - mc: 0/1
  - +/- floor 0: sata, selectN, matrixMR (per row)
  - 0/1 per cell: matrixMC, cloze, ddTable
  - bowtie: max 5 (2 actions + condition + 2 params, wrong extra picks penalized, floor 0)
  - pair: dyad (both parts or 0); numeric: exact-within-tol
- **Study mode**: sets by category / cases-only / full bank; end-of-set reveal + review.
- **Exam mode**: `buildExamForm()` -> 85 items = 3 unfolding cases (18 items, steps intact)
  + 67 standalones drawn on blueprint proportions with rounding reconciled to hit 85 exactly.
  Results: headline %, per-category bars (low<60 red / mid<75 amber), standalone-vs-case,
  and a "focus next on" nudge (2 weakest categories).
- **Unfolding-case renderer**: evolving per-step chart (Nurses' Notes/Vitals/Labs/Orders) as tabs.
- **Integration**: `buildNclexPatched(doc)` mirrors Rx's `buildRxPatched()` — injects a scoped
  `<style id="nclex-style">` + a `#nclex-root` mount once, then calls `NCLEX.mount()`.
  All CSS is scoped under `#nclex-root` so it can't collide with the host app.

## Public API (window.NCLEX)
- `buildNclexPatched(doc?)` — first-time patcher; injects CSS + mount, boots home. Idempotent.
- `mount(el)` — mount into an existing element.
- `open()` — return to module home.
- `_internal` — bank/cases/scorers/renderers/controller (for tests + future reuse).

## Verified (test-engine.js, jsdom)
- Loads, mounts, injects CSS; all 10 renderers produce DOM.
- Every scorer: full-correct -> credit==max & correct==true; empty -> 0 & false.
- +/- flooring: all-wrong SATA -> 0.
- Exam form over 500 draws: always 85 items, exactly 3 cases (18 items), all 8 cats, no dupes.
- Study + Exam flows render through to results (score + category grid).
- Partial credit spot-checks: bowtie 1/5,2/5,5/5 and wrong-action penalty; matrixMC per-row.

## Integration plan (Phase 6, in Claude Code via medcodex-publish)
1. Host app (`index.html`) already mode-gates via `html[data-mode]`. Under Nursing mode,
   add an entry point below the top search bar that calls `NCLEX.buildNclexPatched(document)`
   then `NCLEX.open()`.
2. Embed `const NCLEX_DATA=[...150]` + the `nclex-logic.js` IIFE into index.html (or, better,
   externalize NCLEX_DATA to JSON + fetch, since index.html is already ~2.5-3.3 MB).
3. Never declare `const NCLEX_DATA` twice (SyntaxError) — same rule as RX_DATA.
4. Publish via the browser pipeline (GitHub main -> Netlify), then COMMIT the modular source
   (`nclex-logic.js`, `nclex-data.js`, batch files, validator) into the repo.

## Still open (not blocking)
- Final framing/hero/button styling (deferred by Dr. K — will match app).
- Mint the `medcodex-nclex-buildout` skill after integration.
- Optional: persist last exam score locally (host app may prefer its own store).
