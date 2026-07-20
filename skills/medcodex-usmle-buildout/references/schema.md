# USMLE item schema — full reference

The USMLE banks are plain JS files, one per batch:

```js
/* Rounds Codex - USMLE Step 1 question bank, Batch 13 (25 items) */
const USMLE_STEP1_B13 = [ { …item… }, … ];
```

`preview/index.html` builds the master list by `concat`-ing the per-exam banks into `BANKS[exam]`
and a `byId[id]` lookup. `applive/usmle/` holds the deployable copy of the banks + illustrations.

## Item fields

| Field | Type | Notes |
|---|---|---|
| `id` | string | Stable, unique across the exam. Convention: `s1-0234`, `s2ck-0117`, `s3-0402` (exam prefix + zero-padded number). Used as the `RC_ILLUS` key and the `byId` key. |
| `system` | string | Organ system / blueprint area (e.g. "Cardiovascular", "Renal/Urinary", "General Principles", "Behavioral Science"). Drives the system filter. |
| `discipline` | string | Basic-science or clinical discipline (e.g. "Pathology", "Pharmacology", "Physiology", "Medicine", "Surgery"). |
| `topic` | string | The single concept tested. **Distinct within the exam** — the validator flags duplicates. This is what stops the bank from testing the same idea twice. |
| `difficulty` | enum | `easy` \| `moderate` \| `hard`. |
| `anchor` | enum | `null` \| `"lab"` \| `"image"` \| `"ecg"` \| `"table"` — what supporting element the vignette leans on. `null` for pure text. |
| `vignette` | string | The clinical stem. Original prose. Enough detail to force the answer; no "the answer is…" giveaways. |
| `lead` | string | The lead-in question ("Which of the following is the most likely diagnosis?", "…the best next step?"). |
| `options` | string[5] | Exactly 5 options, single best answer. Distractors are plausible mimics, not filler. |
| `answer` | int | 0–4 index into `options` of the correct option. |
| `exp` | string | Teaching explanation for the correct answer — the "why it's right" paragraph shown after a correct pick. Name the trial/criterion/guideline where one exists. |
| `why` | string[5] | One tight sentence per option. `why[answer]` starts "Correct"; every other explains the specific reason that option is wrong. |

## The `why[answer]` rule (the single most important gate)
The app decides right/wrong feedback by convention, not by re-deriving it: `why[answer]` **starts
with the word "Correct"**, and **no other `why[i]` may.** Consequences of breaking it:
- Two rationales starting "Correct" → a second option looks right in the feedback.
- Zero "Correct" rationales → the right answer has no affirming explanation.
Both are silent grading bugs a student can't distinguish from truth. The validator treats this as
a hard failure. When you reorder options to fix answer-key balance, reorder `options`, `answer`,
and `why` **together** — the "Correct" sentence must stay glued to the correct option.

## Answer-key balance
Across a batch, the correct index should spread roughly evenly over A–E. A bank that clumps on C
teaches test-taking heuristics instead of medicine. The validator prints the distribution; if
skewed, rewrite some items so the correct option naturally falls elsewhere, or swap option order
(with `answer`/`why` moving in lockstep). Never just relabel a letter.

## Per-exam blueprint notes
- **Step 1** — basic science: mechanism, pathophysiology, pharmacology, micro/immuno. Vignette →
  underlying mechanism/diagnosis. 280 items across `usmle-step1-b1..b12.js`.
- **Step 2 CK** — clinical: diagnosis, next-best-step, management. 318 items,
  `usmle-step2ck-b1..b13.js`.
- **Step 3 Day 1 (FIP — Foundations of Independent Practice)** — dx/epi/biostat/ethics/patient-
  safety flavor. 232 items, `usmle-step3d1-b1..b10.js`.
- **Step 3 Day 2 (ACM — Advanced Clinical Medicine)** — evolving management over a visit/course.
  180 items, `usmle-step3d2-b1..b8.js`.
- **CCS** — 13 interactive computer-based case simulations, **deferred**. Different format (ordered
  actions over simulated time), **not** the MCQ schema above. Do not force them into a bank file.

## Illustration registry (`RC_ILLUS`)
- `Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, { "<id>": "<html>", … })` across
  `illus-p*.js` packs — **later pack wins** for a given id.
- `illus-real.js` is loaded **last**, so an approved real image overrides its schematic.
- Value is an HTML string. Inline `<svg …>` → app shows a green **SCHEMATIC** badge. `<img …>` →
  **IMAGE** badge. The app supplies the caption; keep descriptive sentences out of the SVG.
- Schematic house style (from the packs): dark card, light strokes for anatomy
  (`rgba(210,220,232,…)`), one accent (`#e0524f`/`#d9463f`) reserved for the KEY pathologic
  feature; radiograph/MRI emulate film with a faint `#0a0f16` frame.
- **ECGs**: AI cannot render correct ECGs. Keep them vector or use a real de-identified tracing.
  `isECG` in the manifest marks them; the image pipeline skips them by default.

## Image manifest (`tools/image-manifest.json`)
One entry per illustrated item — the canonical spec for producing a real image:
`{id, title, exam, system, isECG, modality, caseContext, prompt, mustShow[], avoid, fallback,
targetFile}`. `mustShow` is the QA checklist an image must satisfy before it goes live;
`avoid` lists the common wrong depictions. `scripts/worksheet.js` joins this with the bank data
and the current schematic into the physician worksheet PDF.
