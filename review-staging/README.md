# Blinded medical review of the quiz bank

An independent check on the one class of defect no mechanical test can catch: a question that is
well-formed, traceable to its module, plausible — and clinically wrong.

## Why blinded
The quizzes were authored by agents that then validated their own work. A reviewer shown the
marked answer ratifies it; anchoring is overwhelming, and 1,820 "looks right to me" verdicts would
feel like diligence while proving nothing. So `scripts/blind_quizzes.js` emits copies carrying
stems and options only — no `correct`, no `exp`, no `why` — and asserts none of those keys
survived the copy before writing anything. Reviewers derive each answer from the condition's own
module text; the comparison happens against the real key afterwards.

## Layout
- `blinded/` — reviewer inputs, 23 groups of ~8 conditions. Regenerable at any time from the
  matching commit of `content/quizzes.json`; kept because it is the exact input the reviewers
  saw, which is what makes the review auditable.
- `answers/` — one file per reviewer: their independently derived answer and confidence per
  question, plus a `concern` where they had one.

## Reading the result
A disagreement is **not** proof of an error — it is a question for the physician. Three things it
can mean, and only the first is a bug:
1. the marked answer is wrong;
2. the question is ambiguous and two options are defensible;
3. the reviewer is wrong.

Reviewers were asked to record confidence, so a high-confidence disagreement is worth more
attention than an unsure one. Nothing here edits the bank automatically.

## Known limit
Blinding is instructed, not enforced — a reviewer could read `content/quizzes.json` despite being
told not to. The instruction is explicit about why that would void the exercise, but it remains an
honour system, and a reviewer that defeated it would show as spurious agreement rather than
disagreement. Treat a suspiciously perfect agreement rate as a signal, not a result.
