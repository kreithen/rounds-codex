# Shared performance-report engine

Exam-agnostic, profile-driven report engine plus the exam profiles that ride on it.
One engine renders both the NCLEX-RN report and the USMLE report; each exam only
declares a **profile** (which item fields to group by, what to call them, and the
study advice per weak area). **Do not fork the engine to add an exam — register a
profile.**

## Files
- `nclex-report.js` — the shared engine. `registerProfile(name, profile)`,
  `build(session, scorers, isPartial, profileName)`, `render(model, mount, hooks)`,
  `injectCSS(doc)`, `buildPdfHtml(model)`. Ships the built-in `nclex` profile.
- `usmle-report.js` — registers the `usmle` profile + the single-best-answer MC
  scorer + a session adapter that reads the live USMLE page's `quiz`/`byId`. Exposes
  `NCLEX_REPORT.buildUsmle(quiz, byId, opts)` and `NCLEX_REPORT.renderUsmle(quiz, byId, mount, opts, hooks)`.
  Load it **after** `nclex-report.js`.
- `test-usmle-profile.js` — 32 assertions: profile registration, build from a
  live-shaped `{order, ans}` quiz state, the honesty constraints, styled render, PDF,
  and zero NCLEX text leakage.
- `test-profiles.js` — 25 assertions proving the engine is exam-agnostic (a foreign
  `system`/`discipline` schema renders correctly and the NCLEX profile stays intact).

## Run the tests
```bash
cd src/report && npm i jsdom      # one-time; node_modules is gitignored
node test-usmle-profile.js        # 32 pass
node test-profiles.js             # 25 pass
```

## The USMLE profile (what it groups by, and why)
The USMLE bank is already tagged by `system` (18 organ systems) and `difficulty`
(`easy|moderate|hard`), and every item is single-best-answer MC.

- **Axis 1 — organ system.** The USMLE Step blueprint's own dimension.
- **Axis 2 — difficulty.** Chosen over `discipline` because discipline is 89
  sub-specialties deep (≈1 item per attempt) — every discipline row would be a
  "limited sample" and could not honestly drive a recommendation. Difficulty buckets
  are always populated enough to be actionable.
- **No case/standalone split** (`splitBy:null`) — USMLE MC has none (CCS is deferred).

### Honesty constraints (enforced by the engine, verified by the tests)
- It is a **practice score — never a predicted USMLE score or pass probability.**
  Disclaimer on screen: *"Practice feedback only; not a predicted USMLE score."*
  PDF footer: *"…Not affiliated with the NBME or FSMB."*
- Areas with **fewer than 3 items** on an attempt are **shown** (badged "limited
  sample") but are **excluded from the top recommendations** (`MIN_N = 3`).
- A **strength** requires clearing the 80% bar; if none does, the report says so
  plainly rather than inventing one.

## Integrating into the live USMLE page (`usmle/index.html`)
Two edits, nothing else (see `../../applive/usmle/` and the drop-in bundle in the
deploy notes):

1. Add two script tags after the page's existing scripts:
   ```html
   <script src="nclex-report.js"></script>
   <script src="usmle-report.js"></script>
   ```
2. Immediately **before** the single `show("results");` call, render the report into
   a `#nclex-root` mount inserted above `#review`:
   ```js
   (function(){
     var m=document.getElementById("nclex-root");
     if(!m){ m=document.createElement("div"); m.id="nclex-root";
             var rv=$("#review"); if(rv&&rv.parentNode) rv.parentNode.insertBefore(m,rv); }
     try{ if(window.NCLEX_REPORT&&NCLEX_REPORT.renderUsmle)
            NCLEX_REPORT.renderUsmle(quiz,byId,m,{label:EXAM_LABEL(quiz.exam),timed:!!quiz.timed}); }
     catch(e){}
   })();
   ```

The mount id is **`nclex-root`** on purpose: the engine's layout CSS is scoped
`#nclex-root .nr-*{…}`, and `usmle-report.js` scopes the `--nx-*` design tokens to
`#nclex-root` too, so the report picks up the full card/ring/grid styling on a page
that otherwise has no NCLEX host. Verified headless on the real page: scorecard
`display:flex`, ring `border-radius:50%`, fact tiles laid out, tokens resolved, zero
page errors.

`try/catch` means a report failure can never break the native results screen.
