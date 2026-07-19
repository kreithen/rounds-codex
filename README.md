# Rounds Codex - USMLE Module

Static, in-app USMLE MCQ study feature for the Rounds Codex app, built in the same
two-phase rhythm as Resident Mode: **content sessions ship validated `.js` banks**,
then a **publish session** wires the UI into `index.html` and pushes it live.

## What this is (and isn't)
- **Deliverable:** a "USMLE Mode" quiz engine + pre-generated question banks. Fully
  static; no API/LLM runs in the app. Standard vs Explanation and adaptive difficulty
  are runtime UI behaviors; each item is authored with everything both modes need.
- **Source policy (Option A):** the official USMLE **Content Outline** drives scope.
  Every vignette is **100% original**; source material is used for facts only, never
  phrasing. No copyrighted textbook content is reproduced or stored.
- **CCS** (Step 3 interactive cases) is deferred past v1 (branching simulation is not
  a good fit for a static feature).

## Layout
```
data/          usmle-<exam>-b<N>.js   question-bank batches (25 items each)
scripts/       validate.js            content gate (run before every commit)
```

## Item schema
Each item in a bank:
```js
{ id, system, discipline, topic,
  difficulty: "easy"|"moderate"|"hard",
  anchor: null|"lab"|"image"|"ecg"|"table",   // visual anchor type
  vignette,                                    // original; lab tables/[IMAGE:...] inline
  lead,                                        // single-sentence lead-in
  options: [A,B,C,D,E],                        // exactly 5, distinct
  answer,                                      // index 0-4 of the correct option
  exp,                                         // 3-4 sentence teaching for correct answer
  why: [rA, rB, rC, rD, rE] }                  // 1-2 sentence rationale per option (A-E)
```

## Validation
```
node scripts/validate.js data/usmle-step1-b1.js --expect 25 \
  [--against data/usmle-step1-b2.js ...]
```
Enforces: 25 items, all keys present/non-empty, 5 distinct options, one answer 0-4,
`why` length 5, blueprint-valid `system`/`difficulty`/`anchor`, answer-key balance
(each letter A-E used 4-6 per 25), visual anchors on >=30% of items, and unique ids
within the file and across every `--against` bank.

## Step 1 blueprint (items per 25)
General Principles 3 | Immune/Blood 2 | Behavioral/Nervous 3 | MSK/Skin 2 |
Cardiovascular 2 | Respiratory & Renal 2 | GI 2 | Reproductive & Endocrine 3 |
Multisystem 2 | Biostatistics & Epidemiology 2 | Social Sciences/Ethics 2
