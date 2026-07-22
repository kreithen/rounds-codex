---
name: medcodex-usmle-buildout
description: Build, validate, illustrate, and ship USMLE board-style questions for the Rounds Codex USMLE module. Use this skill WHENEVER the user asks to write, generate, add, continue, finish, rebalance, or QA USMLE items or batches for ANY exam — e.g. "do a Step 1 batch", "finish Step 2 CK", "add 20 Step 3 Day 2 ACM questions", "start the CCS cases", "QA the answer keys", "rebalance batch b4", "wire illustrations for the new items", or "make the image worksheet PDF". Also use it when validating or merging usmle-*.js bank files, or building the physician image-production worksheet. It encodes the exact item schema, the why[answer] rule, per-exam maxes, illustration-registry mechanics, the validation gates, and the deploy path — do NOT freestyle USMLE items or hand-check answer keys without it.
---

# MedCodex USMLE Buildout

Turns a blueprint slot (exam + system + count) into **validated, illustrated, publish-ready**
USMLE items for the Rounds Codex USMLE module (`/usmle/`), with the validation gates that keep a
board-question bank medically correct and the answer keys honest.

This is a **medical exam bank**. A wrong answer key or a rationale that contradicts the vignette
is a real harm to a student. The discipline here — one "Correct" rationale, balanced keys,
named guidelines — is not bureaucracy; it is the product.

## Ask first — at invocation (AskUserQuestion)
Before writing, confirm these via **AskUserQuestion**, marking your best guess "(Recommended)".
Skip any the user already answered.
1. **Slot** — which **exam**, **how many** items, and which **systems/disciplines**.
2. **Extend vs replace** — the four exams are already at their maxes; is this **extending beyond the
   max** (changes the blueprint — confirm), or **replacing/improving** existing items?

## Prerequisites — confirm before writing anything
1. **What slot?** Exam (Step 1 / Step 2 CK / Step 3 Day 1 FIP / Step 3 Day 2 ACM), the system/
   discipline focus, and how many items. If the user is vague, check `usmle-build-status.md` for
   what's built and what's next.
2. **Exam maxes (all four are already built to max).** Adding beyond these means the user is
   *replacing/improving*, not extending — confirm which:
   - Step 1 = **280** (`usmle-step1-b1..b12.js`)
   - Step 2 CK = **318** (`usmle-step2ck-b1..b13.js`)
   - Step 3 Day 1 (FIP) = **232** (`usmle-step3d1-b1..b10.js`)
   - Step 3 Day 2 (ACM) = **180** (`usmle-step3d2-b1..b8.js`)
   - CCS cases = **13 deferred** (different interactive format — do not shoehorn into MCQ schema)
3. **Topic collisions.** Read existing banks for the exam. Every item's `topic` should be
   distinct within its exam — a bank that tests the same concept twice wastes a slot. The
   validator flags dupes; check before writing, not after.
4. **Sources.** Free/official only (First Aid-level facts, guideline bodies, StatPearls/NCBI,
   MedlinePlus, FDA/DailyMed). Vignettes original; sources used for facts, never copied.

## Schema (exact — the validator enforces it)
Read `references/schema.md` for full field semantics, the enum values, per-exam blueprint notes,
and the illustration-registry details. The one-line shape:

```
{id, system, discipline, topic, difficulty, anchor, vignette, lead, options[5], answer, exp, why[5]}
```

The three rules that matter most (and that the validator is built around):
- **`answer` is a 0–4 index** into `options` (5 options, single best answer).
- **`why[answer]` starts with "Correct"** and **no other `why[i]` does.** This is how the app
  renders the right/wrong feedback; two "Correct" rationales (or zero) is a silent grading bug.
- **`why[i]` explains why option `i` is right or wrong** — one tight sentence each, all five
  present. A missing or generic rationale is a wrong-answer with no teaching.

## Workflow (one batch = ~25 items)
1. **Declare the slot out loud** — exam, systems, count, and the target bank file
   (`const USMLE_<EXAM>_B<N>=[...]`). If it contradicts `usmle-build-status.md`, flag it before
   building; a mismatched range has caused real rework.
2. **Write in small groups** (5–10 items per file write) so a session/context death loses at most
   a few items. Content bar: NBME-style single-best-answer, a clinical vignette that forces the
   diagnosis/next-step rather than naming it, distractors that are *plausible* (the classic
   mimics), rationales that name the trial/criterion/guideline where one exists.
3. **Balance the answer key.** Across a batch the correct-answer index should spread across A–E,
   not clump on C. The validator reports the distribution; if it's skewed, swap option order (and
   fix `answer` + `why` order together) — never just relabel.
4. **Run the validator after every batch** (see below). Fix what it flags before moving on.
   Assert the count you intended.
5. **Update `usmle-build-status.md`** — what exam/range is now done, what's next.

## Validate (run this after every batch — it catches the silent killers)
```
node scripts/validate.js path/to/usmle-step1-b13.js [more-bank-files...]
```
It loads each `const USMLE_*=[...]` bank and checks, per item: 5 options; `answer` in 0–4; `why`
length 5; **exactly one** `why` starting "Correct" and it's at `answer`; required fields present;
`difficulty` ∈ {easy,moderate,hard}; `anchor` ∈ {null,lab,image,ecg,table}. Across the batch it
reports the **answer-key distribution** and any **duplicate `topic`/`id`** (within the files and,
if you pass the existing banks too, against them). Exit non-zero on any hard violation so it can
gate a build. Read `references/schema.md` for why each check exists.

## Illustrations (RC_ILLUS registry — how a picture attaches to an item)
Illustrations are keyed by item `id` in `RC_ILLUS`, merged across `illus-p*.js` (**later file
wins**), with `illus-real.js` loaded **last** so an approved real image overrides a schematic.
- Value is an HTML string: an inline **`<svg>` → renders with a "SCHEMATIC" badge**; an
  **`<img>` → "IMAGE" badge**. The app adds the caption — no caption sentences inside the SVG.
- 231 items are illustrated. The **canonical spec for each** lives in `tools/image-manifest.json`
  (`{id, title, exam, system, modality, caseContext, prompt, mustShow, avoid, isECG}`).
- **ECGs stay vector / real tracings** — AI renders ECGs unreliably; `isECG` marks them. Don't
  wire an AI ECG.
- To illustrate a new item: add its `RC_ILLUS[id]` entry (schematic SVG, or an approved image via
  `illus-real.js`), and add a manifest entry if it should appear in the image pipeline.

## Image worksheet (the physician "make the images yourself" PDF)
When the user wants a printable sheet to produce real images offline, or to review coverage:
```
node scripts/worksheet.js \
  --data <dir with usmle-*.js banks> \
  --illus <dir with illus-p*.js> \
  --manifest tools/image-manifest.json \
  --out usmle-image-worksheet.pdf
```
It joins each illustrated item's current schematic + its full question (vignette, lead, options,
correct answer, explanation) + the manifest's "must show / avoid" spec into one print-ready PDF
(one item per page), rendered via headless Chromium. ECG/real-image items are flagged. See the
script header for the Chromium path and flags.

## Deploy (the USMLE module ships as a separate `/usmle/` folder)
- USMLE is **not inlined** in the big `index.html` (that would double a ~6 MB file). It's the
  `usmle/` folder: its own `index.html` + `data/usmle-*.js` + `illus-p*.js` + `illustrations.js`.
  `preview/` wires the banks for local testing; `applive/usmle/` is the deployable copy.
- **Deploy = the user's Chrome web-upload** to the private `rounds-codex-app` repo (this workspace
  is firewalled from it). Upload the `usmle/` folder; Netlify auto-deploys.
- **Upload traps learned the hard way:** GitHub web UI caps ~100 files/commit and macOS can double
  the count with hidden `__MACOSX`/`._` files — keep each drag well under it. **Drag the folder
  whose name is the destination** (`usmle`), never an outer wrapper, or files nest one level too
  deep and 404. See the `medcodex-publish` skill for the full publish path.

## Verify before delivering
Headless-check like the rest of the app: load the USMLE page, assert the new bank loads, `byId`
builds, a new item's detail renders (options + any illustration), the quiz scores, **zero
pageerrors**. Chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome` (`--no-sandbox`).
