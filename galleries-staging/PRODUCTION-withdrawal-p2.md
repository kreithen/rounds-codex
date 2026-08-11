# For production: `withdrawal` page 2 — five labels each take the next label's structure, and the last falls off the end

5 rows flagged, **all 5 measured and all 5 confirmed**. Needs a re-render.
*Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

**This is the cleanest instance of fault 2 in the whole review**, and the one to hand your engineer if
they want to see the mechanism in isolation. It is confirmable end to end by colour, with no
anatomical judgement.

---

## 1. The page is colour-coded, so it checks itself

Each label in the KEY BRAIN REGIONS column is printed in ink, and each named structure is drawn as a
blob in a matching colour. Sampled from the shipped page:

| label | ink sampled from the text | the structure drawn in that colour |
|---|---|---|
| **HYPOTHALAMUS** | **(34,135,193)** blue | the blue blob at **(437,495)**, sampled (14,96,148) |
| **AMYGDALA** | **(197,102,161)** pink/magenta | the pink blob at **(370,505)**, sampled (185,75,118) |
| **LOCUS COERULEUS** | **(139,187,111)** green | the green blob at **(447,530)**, sampled (75,123,46) |
| **CEREBELLUM** | **(52,149,206)** blue | the mauve arbor-vitae mass at **(505,530)**, sampled (85,52,62) |
| **BRAINSTEM** | **(214,144,59)** orange | the orange brainstem/cord, sampled (161,94,56) at (462,592) |

## 2. The chain

Every leader lands on the structure named by **the label below it in the column** — and the last label
has nothing below it, so it lands on nothing.

| label | column y | terminator | what is under it | whose structure that is |
|---|---|---|---|---|
| **HYPOTHALAMUS** | 536 | ring at **(365,509)** | the **pink** blob | AMYGDALA's |
| **AMYGDALA** | 676 | ring at **(443,527)** | the **green** blob | LOCUS COERULEUS's |
| **LOCUS COERULEUS** | 766 | ring at **(457,588)** | the **orange** brainstem, 28 px below the green stalk's end at (450,560) | BRAINSTEM's |
| **CEREBELLUM** | 856 | ring at **(473,648)** | the **orange** cord, 60 px lower again | BRAINSTEM's |
| **BRAINSTEM** | 924 | tip at **(443,918)**, sampled **(6,13,22)** | **empty dark background** among the ghosted nerve roots — the orange cord at that height is 170–200 px to the right | nothing |

**The "falls off the end" tell is what makes this unambiguous.** A scatter of misplaced leaders does
not produce a label with no target at all; a list shifted by one position does, every time, at
whichever end it runs out.

**And the head of the chain is orphaned in the same way:** the **blue blob at (437,495)** is the only
blue structure on the figure, it is what HYPOTHALAMUS names, and **no leader reaches it.**

## 3. Correct endpoints

Each label moves to the structure whose colour matches its own ink:

| label | now | should be |
|---|---|---|
| HYPOTHALAMUS | (365,509) the pink blob | **(437,495)** the blue blob |
| AMYGDALA | (443,527) the green blob | **(370,505)** the pink blob |
| LOCUS COERULEUS | (457,588) the orange brainstem | **(447,530)** the green blob |
| CEREBELLUM | (473,648) the orange cord | **(505,530)** the mauve arbor-vitae mass |
| BRAINSTEM | (443,918) empty background | **(462,592)** the orange brainstem |

This is a five-line fix and none of the leaders needs re-routing across the figure — each one moves to
the target immediately adjacent to where it currently stops.

## 4. Two things not in the order

**Two labels are printed in the same blue.** HYPOTHALAMUS is **(34,135,193)** and CEREBELLUM is
**(52,149,206)** — near-identical inks on a figure whose whole labelling system is colour. Only one
blue structure is drawn. On a page that otherwise assigns one colour per region, this is worth
separating: give the cerebellum the mauve its structure is actually drawn in.

**The order reports a marker dot on the mauve cerebellum that nothing points at.** We found bright
pixels in that region but could not separate a marker from the arbor vitae's own white folia lines at
this resolution. **Carried as the order states it — please check at source.** If there is an unused
marker, it is a fault-8 orphan and belongs with the `leukemia` p2 case in the brief.

---

## Why this page is worth showing your engineer

Every other page in this review needs someone who knows the anatomy to see the error. This one does
not. The labels carry their own colour, the structures carry the same colours, and the leaders land
one position off — so **sampling the colour under each endpoint and comparing it to the label's own
ink finds all five rows automatically.** That is fault 5's check applied to a fault 2 defect, and it
is the strongest evidence we have that these are produced mechanically rather than drawn by hand.
