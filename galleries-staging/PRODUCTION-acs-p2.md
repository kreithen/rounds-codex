# For production: `acs` page 2 — badge 3 "Diagonal Branch"

**`acs` is not in the 81-page work order.** Both its labelled pages use on-figure numbered badges
rather than leader lines, and page 1 is clean — it is the page the brief holds up as the format that
works. This one finding is cited in `PRODUCTION-BRIEF-leader-lines.md` as the counter-example, so it
is written up here properly.

*Examined on the shipped page (1138×1707) at 11×, 2026-08-10.*

---

## What reads correctly

| badge | label | verdict |
|---|---|---|
| ① | Left Main Coronary Artery | on the vessel descending from the aortic root — correct |
| ② | Left Anterior Descending | beside the LAD, ~12 px off its course — correct |
| ④ | Left Circumflex | on the vessel running right from the bifurcation — correct |
| ⑥ ⑦ | RCA, Acute Marginal | on the right side of the heart, consistent with each other |

The bifurcation sits at about **(655,615)**. From it the **LAD** descends steeply — (672,660),
(680,690), (690,722), (700,755) — and the **circumflex** runs right along (690,632) → (730,645) →
(750,655).

## The finding: badge ③ is nowhere near the LAD

A **diagonal branch arises from the LAD**. That is what the name means, and it is why the badge's
position matters: a reader uses it to learn which vessel a diagonal comes off.

Badge ③ is centred at about **(748,722)**, radius ~13 px. **At that height the LAD is at x ≈ 690** —
roughly **55 px to the left**, with the badge's own edge still 45 px short of it. The LAD does not
approach the badge at any level; it diverges further below.

So whatever badge ③ is sitting on, it is not a vessel arising from the LAD at that point.

## Badge ③ sits on a circumflex branch

The vessel it marks — about 8–11 px to its left, descending through **(727,690)**, **(734,712)**,
**(740,735)** — arises from the **left circumflex** at about **(712,640)**. That makes it an obtuse
marginal or a ramus intermedius. **Badge ⑤ (Obtuse Marginal) sits roughly 75 px further down the
same vessel**, which is the second problem: two badges naming different vessels on one branch.

**What we need:** move badge ③ onto a branch arising from the LAD, and re-check badge ⑤ once it is
no longer sharing.

*Method note, so you know what this rests on: the branch was traced by eye at 11× on the shipped
JPEG, not measured. We tried to isolate the vessels numerically and could not — on this render the
myocardium is nearly as red as the arteries, so a redness threshold selects 39% of the panel, and a
ridge detector along a row returns the badge's own blue ring as strongly as it returns a vessel. You
have the layers; if the trace disagrees with your source file, your source file is right.*

## Why this page matters beyond itself

The brief recommends on-figure numbered badges as the fix for the routing defect, because they
remove the long leader entirely. This page is the reason that recommendation carries a caveat, and
the caveat is worth repeating on every sheet:

> **A badge removes the leader, not the identification step.** Each badge's position still has to be
> checked against the structure it names.

`acs` page 1 remains the clean example. Nothing here argues against the badge format — only against
assuming it is self-checking.
