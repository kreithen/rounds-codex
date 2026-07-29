# Authored quizzes — status

Each file is one agent's or one hand-written batch's output, merged into
`content/quizzes.json` by `scripts/merge_quizzes.js`. Kept as source so a quiz can be revised
and re-merged without re-authoring.

**Coverage: 181 of 181 conditions.** 1,820 questions, 1,660 with per-option rationales,
310 with gallery references. Answer positions sit at 20% each for A/B/C/D/E bank-wide.

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

## Open review items
- **No independent medical re-read has been done.** Every item passed structural QA,
  source-traceability against its own condition module, and full app verification — but each was
  checked by the agent that wrote it. A second pass by reviewers other than the authors is the
  remaining gap, and it is the one that matters most for clinical content.
- `"Preferred imaging study?"` is the stem in both `diverticulitis` and `bowel-obstruction`
  (both transcribed from the physician's PDFs). Harmless but worth distinguishing.
- Eleven advisory QA notes remain bank-wide, each hand-verified as a false positive of the
  explanation-matches-option heuristic (an explanation naming a distractor in order to dismiss
  it, or abbreviating where the option spells out).
- `hyperparathyroid` was transcribed from a PDF and its options have since been rotated to break
  an all-A pattern, so the app's option letters no longer match that printed PDF.
