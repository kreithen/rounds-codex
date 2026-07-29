# Authored quizzes — status

Each file is one agent's or one hand-written batch's output, merged into
`content/quizzes.json` by `scripts/merge_quizzes.js`. Kept as source so a quiz can be revised
and re-merged without re-authoring.

**Coverage: 137 of 181 conditions.** 44 remain — listed below.

## Pipeline
1. Author to a file here, grounded strictly in the condition's own module fields.
2. `node scripts/qa_quizzes.js <content-dir> <file>` — must reach **0 failures**.
3. `node scripts/balance_answers.js <file>` — randomises answer positions.
4. `node scripts/merge_quizzes.js <file> <content-dir>`.
5. `node scripts/audit_quiz_bank.js <content-dir>` — bank-wide, after everything is merged.

## The three traps, all of which have bitten this project
1. **Answer position.** Ten questions in a row land on the same letter. One quiz shipped 10/10
   at B, another 10/10 at A. `balance_answers.js` fixes it — but note that its *first* version
   made things worse by spreading evenly **round-robin**, giving every quiz the identical
   sequence A B C D E A B C D E. Even is not random. It now shuffles from a per-quiz seed.
2. **Index desync.** Rewriting a `ch[]` array reorders the options; not re-deriving `correct`
   marks a **distractor** as the right answer, and every structural check still passes. It hit
   seven questions here. Always capture the correct answer's TEXT, then
   `correct = ch.indexOf(text)`, and rebuild `why[]` keyed by option text. Two agents solved this
   by building through a text-keyed builder so hand-indexing was impossible — the better pattern.
3. **Length giveaway.** If the correct answer is much the longest, it is pickable without
   knowledge. Threshold calibrated against IBD (median 1.21x the mean distractor). Fix by
   lengthening distractors, never by truncating the answer.

## Still to author (44)
Blocked mid-run by a session limit, not by content. Groups re-run unchanged.

- **Fluids & Electrolytes (12)** hypernatremia hypokalemia hypocalcemia hypercalcemia
  hypomagnesemia hypophosphatemia metabolic-acidosis metabolic-alkalosis respiratory-acidosis
  respiratory-alkalosis hypovolemia fluid-overload
- **Oncology (14)** breast-cancer colorectal-cancer prostate-cancer pancreatic-cancer
  ovarian-cancer cervical-cancer bladder-cancer gastric-cancer melanoma brain-tumor tumor-lysis
  febrile-neutropenia cord-compression svc-syndrome
- **Toxicology (9)** acetaminophen-od salicylate-od opioid-od benzodiazepine-od tca-od
  digoxin-toxicity carbon-monoxide toxic-alcohols organophosphate
- **Women's Health (8)** pcos endometriosis pid ectopic-pregnancy ovarian-torsion aub fibroids
  menopause
- **Pediatrics (1)** failure-to-thrive

## Open review items
- `"Preferred imaging study?"` is the stem in both `diverticulitis` and `bowel-obstruction`
  (both transcribed from the physician's PDFs). Harmless but worth distinguishing.
- Nine advisory QA notes remain across the bank, each hand-verified as a false positive of the
  explanation-matches-option heuristic (an explanation naming a distractor to dismiss it, or
  abbreviating where the option spells out).
