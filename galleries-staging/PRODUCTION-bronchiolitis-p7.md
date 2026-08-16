# For production: `bronchiolitis` page 7 — `Narrowed lumen` is on the mucus plug, not on the lumen

2 rows flagged. **Row 1 was corrected in-app (v95) and is verified fixed. Row 2 was a [CHECK] row,
never measured before — it is now measured and CONFIRMED**, with an endpoint. *Measured on the
shipped page (1024×1536), 2026-08-16.*

The page is already at the standard size — no size change needed.

**Panels swept independently:** the AIRWAY CROSS-SECTION (both the normal and the bronchiolitis
circle), the five-step PATHOPHYSIOLOGY IN THE SMALL AIRWAYS strip, and the MUCUS PLUGS IN SMALL
AIRWAYS figure. The GROSS AUTOPSY photographs and the text panels carry no anatomical leaders.

---

## 1. Row 1 `Minimal mucus` (normal side) — FIXED, verified

The order reported it ending in the adventitial layers outside the airway wall at ≈(634,471). It was
corrected in **v95 (`bfa161a`)** by extending the leader along its own axis to (643,450). Re-checked
today on the shipped file: the terminus is inside the wall, on the luminal surface. No action.

## 2. Row 2 `Narrowed lumen` — CONFIRMED, and the target is 45 px away

The bronchiolitis circle draws three things unmistakably: the **yellow mucus plug** filling the
centre (x 795–856, y 398–452), the **pink oedematous wall** from x≈868 outward, and — between them —
a **dark residual air space**, which is the narrowed lumen the label names.

| label | leader ends at | sampled RGB | what that is |
|---|---|---|---|
| Mucus plug | **(858,420)** | plug edge at x≈856; ink begins x 858 | the plug's own margin — **correct**, see the note below |
| **Narrowed lumen** | **(845,443)** | **(192,145,106)** | **the plug's inferior lobe where it meets the wall** — pale, not air |

For contrast, the residual lumen sampled at three points: **(832,400) = (29,9,4)**,
**(836,395) = (26,8,3)**, **(828,405) = (47,19,4)**. Near-black — that is the air space, and it is
the only thing on the panel that can be called a lumen.

**Correct endpoint: (832,400)** — the dark crescent above and left of the plug. It is 45 px from the
current terminus and unambiguous at any zoom.

The panel's whole teaching point is *plug plus wall oedema equals a narrowed lumen*. As drawn, the
plug is labelled twice — once as itself and once as the lumen — and the air space that makes the
diagnosis is unlabelled.

**A note on the `Mucus plug` leader, so you have the whole picture:** its tip at x 858 sits about
2 px beyond the plug's edge (the yellow ends at x≈856), i.e. it touches the very start of the dark
zone. At this scale that reads as landing on the plug and we are **not** asking for it to be moved.
We mention it only because moving `Narrowed lumen` up to (832,400) puts the two leaders on opposite
sides of the same boundary, and a 2 px overshoot that is invisible today would be worth tidying in
the same pass if the file is open anyway — pull it back to **(852,420)**.

## 3. Measured clean

| what | verdict |
|---|---|
| `Thin airway wall`, `Open lumen` (normal circle) | both land on their structures |
| `Inflamed, edematous wall` | lands on the thickened pink wall |
| PATHOPHYSIOLOGY strip (5 histology panels) | captions sit under their own panels; no leaders to misplace |
| MUCUS PLUGS IN SMALL AIRWAYS | no anatomical leaders |

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Minimal mucus (normal side) | *fixed in v95* | — no action |
| 2 | **Narrowed lumen** | (845,443) the mucus plug's inferior lobe | **(832,400)** the dark residual air space |
| — | Mucus plug | (858,420), 2 px past the plug edge | optional tidy to (852,420) if the file is open |

Correct as drawn: **Mucus plug**, **Inflamed, edematous wall**, **Thin airway wall**, **Open lumen**.
