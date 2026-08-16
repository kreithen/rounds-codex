# For production: `gdm` page 2 — the placenta label points at the baby's head

4 rows flagged. **Two measured and confirmed; two are a colour-convention question for the physician,
not a measurement.** Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. Badges ① and ② are both on the fetus

The main figure draws a fetus in utero with the **umbilical cord clearly visible** — a purple/mauve
twisted cord at **x 420–450, y 655–740**, unmistakable against the surrounding tissue.

| row | badge | arrowhead tip | what is under it |
|---|---|---|---|
| 1 | **① PLACENTA** | **(353,701)** | **the back of the fetal head** — the skull spans x 350–410, y 640–715 |
| 2 | **② UMBILICAL CORD** | **(373,762)** | **the fetal back / buttock** |

Badge **③ UTERUS** on the same figure is correct: its arrow ends at **(352,641)** on the red uterine
wall band. So the three arrows are drawn identically and two of them stop on the baby.

**Correct endpoint for ②: (435,700)** — the purple cord, 62 px right of where the arrow stops. This
one is unambiguous; the cord is the only purple structure in the uterus.

**Correct endpoint for ①: please place from source.** The cord runs up and to the right from about
(450,660) toward the upper-right uterine wall, and the region at **x 430–500, y 600–680** reads as
denser and more vascular than the wall elsewhere — which is where the placental bed should be. But
**we could not isolate a distinct placental disc** with an edge we would put a coordinate on. If the
placenta is not drawn as a separate disc, this is an artwork row rather than a leader move.

*(The same caution applies on `preeclampsia` p2, where the PLACENTA label also lands on the uterine
wall and we also could not find a distinct disc. Two obstetric pages, same gap — worth one look at
how the placenta is being drawn across the OB module.)*

## 2. Rows 3 and 4 — a colour-convention question, not a leader question

The PLACENTA (ENLARGED) panel draws a villous tree with red stem vessels and blue branches, and a
large purple/mauve trunk at the cord insertion.

The work order reports:

- **Umbilical vein (oxygen & nutrients to fetus)** ends where a **BLUE branch leaves a red stem** in
  the villous tree.
- **Umbilical arteries (waste from fetus)** ends on **the single large purple/mauve trunk**, which by
  size is the umbilical **vein** — there is one vein and it is the largest vessel in the cord, while
  the two arteries are the smaller twisted vessels.

**We are not calling either row.** Both turn on whether this panel's red/blue coding follows the usual
convention, and in the umbilical circulation the usual convention is inverted relative to the rest of
the body: the umbilical **vein** carries **oxygenated** blood and is conventionally drawn **red**,
the umbilical **arteries** carry deoxygenated blood and are drawn **blue**. A panel that draws them
the other way round is not a misplaced leader — it is a colour error in the artwork, and moving the
leaders would make it worse.

**This needs the physician's read before anything is changed.** The two possibilities are:

1. The coding is inverted in the artwork → recolour the vessels, leave the leaders.
2. The coding is right and the leaders are on the wrong vessels → move the leaders, leave the colours.

They require opposite fixes and we cannot tell which from the render.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | ① PLACENTA | (353,701) the fetal head | the placental bed — **confirm a distinct disc is drawn** |
| 2 | ② UMBILICAL CORD | (373,762) the fetal back | (435,700) the purple coiled cord |
| 3 | Umbilical vein (enlarged panel) | *per the order* | **hold — colour-convention question** |
| 4 | Umbilical arteries (enlarged panel) | *per the order* | **hold — colour-convention question** |

Correct as drawn: **③ UTERUS** (352,641).

---

## CLOSED 2026-08-16 — rows 3 and 4 accepted as drawn, no change

**Dr. Kreithen's decision: good enough. Do not action rows 3 or 4.**

This sheet deliberately declined to call them, because the two possible fixes are opposite — either
the artwork's red/blue coding is inverted (recolour the vessels, leave the leaders) or the coding is
right and the leaders are on the wrong vessels (move the leaders, leave the colours) — and moving
the leaders under the wrong assumption would have made the panel worse rather than better.

That ambiguity is now resolved by decision rather than by measurement: **the panel ships as it is.**

Recorded here so the question is not re-opened by a later sweep. If it ever is re-opened, the point
that made it genuinely undecidable from the render is worth keeping: **the umbilical circulation
inverts the usual convention** — the umbilical vein carries oxygenated blood and is conventionally
drawn red, the umbilical arteries carry deoxygenated blood and are drawn blue — so both readings of
this panel are internally consistent and no amount of colour sampling separates them.

Rows 1 and 2 are unaffected and were fixed and shipped earlier.
