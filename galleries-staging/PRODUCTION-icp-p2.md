# For production: `icp` page 2 — BRAIN and CSF are labelled into each other's compartment

8 rows flagged. **Two measured and confirmed decisively; six carried.** Needs a re-render.

> **AMENDED 2026-08-15 — §4 and §5 added.** This sheet originally verified the work order's rows and
> did not audit the panels independently, so it missed a displaced series of at least three labels in
> the MID-SAGITTAL panel (cerebellum, medulla, foramen magnum — see §4) and did not examine the DURAL
> VENOUS SINUSES panel beyond the one row the order listed. **Read §4 and §5 before working this
> page.**
*Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. INTRACRANIAL COMPARTMENTS — a clean mutual swap on the Monro–Kellie panel

The panel shades a lateral strip of the axial brain: a **blue CSF band** and, below it, a **red BLOOD
wedge**, against **pink brain parenchyma**. Sampling a horizontal cut at **y = 469** gives the
boundary exactly:

| x at y=469 | RGB | what it is |
|---|---|---|
| 760–788 | (219,147,133) → (145,95,87) | **pink brain parenchyma** |
| 790 | (50,50,54) | the band's edge |
| 792–815 | (77,117,150) → (109,156,190) | **the blue CSF band** |

Against that:

| row | label | terminator | sampled | what it is |
|---|---|---|---|---|
| 1 | **BRAIN ~80%** | **(783,369)** | **(61,103,144)** | **inside the blue CSF band** |
| 2 | **CSF ~10%** | **(770,468)** | **(189,128,117)** | **inside the pink brain parenchyma** — the arrow crosses the whole blue band (792–815) and stops 22 px past its inner edge |
| — | BLOOD ~10% | (795,562) | (165,58,51) | the red wedge — **correct** |

**The two are in each other's compartment**, on the panel that teaches the Monro–Kellie doctrine —
where the whole point is that the three compartments are distinct and sum to a fixed volume. A reader
learning the 80/10/10 split off this figure learns it with brain and CSF exchanged.

**Correct endpoints:** BRAIN ~80% → the pink parenchyma, e.g. **(740,400)**; CSF ~10% → the blue band,
e.g. **(795,469)**. Neither leader needs re-routing — each stops a few pixels short of, or a few
pixels past, the boundary it should have stopped at.

## 2. Rows 3–8 — carried, not measured

| row | label | the order's finding |
|---|---|---|
| 3 | **Cavernous sinus** *(Dural Venous Sinuses panel)* | the venous channel at the inferolateral cerebellar margin — the **sigmoid sinus / jugular bulb** — one step below the Sigmoid sinus arrow and just above the Internal jugular vein arrow. Move to the cavernous sinus at the skull base beside the sella, far anterior |
| 4 | Scalp *(Mid-sagittal)* *[CHECK]* | inside the **skull diploe** — the tan cancellous band |
| 5 | Skull *(Mid-sagittal)* *[CHECK]* | the pink **periosteal-dura** band just deep to the inner table. The order notes Scalp and Skull both read as **shifted one layer inward** |
| 6 | Arachnoid mater *[CHECK]* | the leader runs on into cerebral cortex; no terminus resolvable on the arachnoid line |
| 7 | Subarachnoid space (CSF) *[CHECK]* | the leader passes through the CSF layer and continues deep into cortex |
| 8 | Pia mater *[CHECK]* | the leader continues into cortex / toward the corpus callosum |

**Row 3 is a fault-2 displacement in a named series** — the sinus labels run superior sagittal →
falx → straight → transverse → **sigmoid** → **cavernous** → internal jugular down the column, and
"Cavernous" has taken the position between sigmoid and IJ, which is where the sigmoid's continuation
is. The cavernous sinus is not in that drainage chain at all; it is anterior, at the skull base. Worth
checking the whole column at source rather than moving one arrow.

**Rows 6, 7 and 8 are the same defect described three times:** three meningeal-layer leaders that do
not stop at their layer but continue into the cortex. On a mid-sagittal meninges figure the layers are
only a few pixels thick, which is **fault 4** in the brief — and the order's inability to resolve a
terminus for row 6 is itself the symptom.

## 3. One observation not in the order — please check the label column's order

The **MID-SAGITTAL SECTION** panel's left-hand label column appears to run **Skull, then Scalp**, top
to bottom. The page's own **MENINGES (OUTER TO INNER)** panel numbers them **① Scalp, ② Skull** — the
correct outside-in order, and the order every one of the remaining labels follows.

If the mid-sagittal column really is transposed, that is not a leader problem: **the label list is out
of order, which is exactly the condition that produces rows 4 and 5** (each label taking the next
one's layer). Fixing the leaders without fixing the column order would leave the two names still
swapped relative to each other.

**We read this off the panel at low magnification and have not confirmed it at scale — please check at
source before acting on it.**

## 4. ADDED 2026-08-15 — a displaced series in the MID-SAGITTAL panel that NOBODY flagged

**Raised by Dr. Kreithen, who asked why these panels were not flagged. He was right.** The rows below
are in neither the work order nor the original version of this sheet, because this sheet's scope was
*"confirm the order's rows"*, not *"audit the panel"*. That was the wrong scope. Measured on the
shipped page by following each leader from its own label stub.

The lower half of the label column is **displaced downward as a group**:

| label | leader tip | what is there |
|---|---|---|
| **Cerebellum** | **(337,621)** | ~100 px below and left of the cerebellum, which is the striated ball at **x 370–440, y 470–570**. The tip is below the tentorium, in the upper cervical region |
| **Medulla oblongata** | **(336,654)** | cervical cord level, below the medulla |
| **Foramen magnum** | **(325,683)** | a **cervical vertebral body**. The foramen magnum is at the skull base, ~85 px higher |

**Four leaders terminate in a column at x ≈ 321–325** — (325,621), (323,650), (321,679), (324,710) —
and those terminators sit **on the cervical vertebrae**, not on neural structures at all.

This is the same **fault 2** as the porta hepatis on `hepatitis` p2 and the sagittal rotation on
`dementia` p2: each label taking the position of the one below it. It is the single largest defect on
this page and it was missed twice.

**Row 9 (the mid-sagittal column order) is now CONFIRMED, not an observation.** The column reads
**Skull, then Scalp**. The page's own MENINGES panel numbers them ① Scalp, ② Skull. Fixing the leaders
without fixing the column order leaves the two names still swapped relative to each other.

## 5. The DURAL VENOUS SINUSES panel — flagged as a whole, deliberately without coordinates

Seven horizontal arrows at even vertical spacing, all terminating in a narrow band. That is the
signature of endpoints placed **from list position rather than from the artwork** — the same shape as
`aki` p2's blood-supply row and `ckd` p2's renal-artery series.

**We are not giving per-label coordinates for this panel.** The leaders cross and merge at the shipped
resolution and line-following cannot attribute them reliably; four separate traces converged on the
same two points. What is solid is row 3 above: the **Cavernous sinus** is not in the superior
sagittal → straight → transverse → sigmoid → IJV chain at all, it is anterior at the skull base, and
it currently occupies the position where the sigmoid's continuation belongs.

**Please re-measure this panel against your 1024×1536 source**, and check every row rather than the
one we flagged.


## 6. LABEL LIST CHANGES — decided 2026-08-15, apply at re-render

Fewer labels is the fix. The mid-sagittal column carries **19 labels in one stack**, and that density
is *what produced* the displaced series in §4 — with nineteen evenly-spaced entries, whoever placed
them was reading down a list rather than looking at the artwork. Six labels cannot shuffle the way
nineteen can.

### DURAL VENOUS SINUSES — cut from 7 to 6, and change which 6

| action | label | why |
|---|---|---|
| **DROP** | Cavernous sinus | not in the superior sagittal → straight → transverse → sigmoid → IJV chain at all; it is anterior at the skull base. This is §1 row 3. |
| **DROP** | Falx cerebri | a dural fold, not a sinus, and it is already labelled on the mid-sagittal panel |
| **ADD** | **Confluence of sinuses** | the junction the whole panel is about, and it currently has no label |
| keep | Superior sagittal, Straight, Transverse, Sigmoid, Internal jugular vein | the drainage chain, in order |

### MID-SAGITTAL SECTION — cut from 19 to 12, and add the one that matters

**Keep** — the meninges (Scalp, Skull, Dura mater, Arachnoid mater, Subarachnoid space, Pia mater),
then Falx cerebri, **Tentorium cerebelli**, Lateral ventricle, Cerebellum, Brainstem, Foramen magnum.

**Drop** — Corpus callosum, Thalamus, Midbrain, Pons, Medulla oblongata, Third ventricle, Fourth
ventricle, Spinal cord. General neuroanatomy; the VENTRICULAR SYSTEM panel at the foot of the page
already teaches the CSF path.

**Collapse** — "Dura mater (periosteal)" + "Dura mater (meningeal)" into one **Dura mater**. The
two-layer distinction is taught in the MENINGES panel directly below.

**ADD `Tentorium cerebelli`.** The page labels the corpus callosum and the thalamus but not the
tentorium — and the tentorium is the structure that defines **uncal herniation**. On a page about
raised intracranial pressure that is backwards. With the falx and the foramen magnum also labelled,
the three labels name the three herniation boundaries: subfalcine, uncal/tentorial, tonsillar.

**And fix the column order:** Scalp above Skull, matching the page's own MENINGES panel (§3).

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | BRAIN ~80% | (783,369) the blue CSF band | (740,400) the pink parenchyma |
| 2 | CSF ~10% | (770,468) the pink parenchyma | (795,469) the blue band |
| 3 | Cavernous sinus | *per the order* — the sigmoid/jugular bulb | the cavernous sinus at the skull base, far anterior |
| 4 | Scalp | *per the order* — the diploe | the outer soft-tissue scalp |
| 5 | Skull | *per the order* — the periosteal-dura band | the bone |
| 6 | Arachnoid mater | *per the order* — runs into cortex | the arachnoid line |
| 7 | Subarachnoid space | *per the order* — runs into cortex | the CSF space |
| 8 | Pia mater | *per the order* — runs into cortex | the gyral surface membrane |
| — | mid-sagittal label column | Skull above Scalp | **CONFIRMED — reorder to Scalp, Skull** |
| 9 | **Cerebellum** | **(337,621)**, upper cervical region | the striated cerebellum, x 370–440, y 470–570 |
| 10 | **Medulla oblongata** | **(336,654)**, cervical cord | the medulla, above the foramen magnum |
| 11 | **Foramen magnum** | **(325,683)**, a cervical vertebral body | the skull base opening, ~85 px higher |
| — | DURAL VENOUS SINUSES panel | seven evenly-spaced arrows in a narrow band | **re-measure the whole panel at source — see §5** |

Correct as drawn: **BLOOD ~10%** (795,562).
