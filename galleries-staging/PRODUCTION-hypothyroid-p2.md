# For production: `hypothyroid` page 2 — the follicle labels are a displaced series, and no hyoid is drawn

7 rows flagged. **Three measured and confirmed here; four carried from the work order unmeasured and
marked as such.** Needs a re-render. *Measured 2026-08-11.*

## Please also export this page at the standard size

**`hypothyroid` p2 ships at 800×1200. The standard is 1024×1536.** Every coordinate below is in the
shipped page's own pixels — multiply by 1.28 for standard-size equivalents. Please fix labels and
size in one pass.

---

## 1. THYROID FOLLICLE (MICROSCOPIC) — each label lands on the structure the label above it names

Rows 1 and 2, both confirmed. The panel draws four things unmistakably: the **pale colloid** filling
x 55–145, y 600–690; the ring of **follicular epithelial cells** around it; a single **olive-green
parafollicular (C) cell** at **x 150–170, y 700–720**, centre **(160,710)**; and **red capillaries**
below and left of the follicle.

| row | label | ends at | what is under it |
|---|---|---|---|
| — | Colloid (thyroglobulin) | **(126,633)** | the colloid — **correct** |
| 1 | **Parafollicular (C) cell** | **(126,672)** | **the colloid again**, 39 px below the label above it |
| 2 | **Capillary** | **(170,712)** | **the green parafollicular C cell** — the structure row 1 names |

Read down the column, the last two labels are each **one position too high**: parafollicular lands on
colloid, capillary lands on the parafollicular cell. That is fault 2 in the brief — a displaced
series — and it means the only C cell on the panel is labelled "Capillary" while the C-cell label is
in the colloid.

**Correct endpoints:** Parafollicular (C) cell → **(160,710)**, the green cell; Capillary →
**(60,715)** or **(100,725)**, the red vessels below and left of the follicle.

The panel's teaching point is that C cells sit **outside** the follicular epithelium and secrete
calcitonin — which is exactly what the current placement contradicts.

## 2. `Hyoid bone` names a structure the page does not draw

Row 6 *[CHECK]*, confirmed. The leader ends in lateral neck soft tissue above the thyroid cartilage.
We looked across the whole THYROID GLAND ANATOMY panel above the thyroid cartilage (the grey shield
at roughly x 242–297, y 220–258) and **found no bone-like structure anywhere** — the region is
muscle, vessels and the laryngeal cartilages only.

This is the **sixth fault** from the tranche-3 brief: the label names a structure the page does not
contain, so no leader move fixes it.

**Two options:** draw the hyoid above the thyroid cartilage, or drop the label. We would drop it —
the panel is about the gland and its nerve/vessel relations, and the hyoid earns its place only if
the larynx is being taught.

## 3. Rows 3, 4, 5 and 7 — carried from the work order, NOT re-measured

We are being explicit about this rather than implying more verification than we did. These four are
in the main gland panel, which at 800×1200 has the whole thyroid, trachea, both neurovascular bundles
and four nerve branches inside about 300 × 250 source pixels. We did not get coordinates we would
stand behind, and per our standing rule we pass the auditors' findings through rather than
second-guessing them.

| row | label | the order's finding | the order's fix |
|---|---|---|---|
| 3 | **Isthmus** | on the **lateral border of the left lobe**, about 40 px above and 60 px lateral to the isthmus | the midline band of gland bridging the two lobes across the trachea |
| 4 | **Trachea** | on the **carotid/vagus vascular bundle** lateral to the gland — a red artery | the ringed grey midline tube, ~55 px medial |
| 5 | **Cricoid cartilage** | the **upper pole of the RIGHT thyroid lobe**, at thyroid-cartilage level | the grey ring immediately below the thyroid cartilage |
| 7 | Inferior thyroid artery and vein *[CHECK]* | plain right-lobe parenchyma; nearest vessel ~30 px further lateral | the inferior thyroid vessels at the lower pole |

What we can confirm from the render, because it needs no fine measurement: the **trachea is drawn as
a ringed grey midline tube at x 280–330**, and the **two lobes sit at x 200–275 and x 335–400**, so
row 4's target is unambiguous once the page is re-exported. Row 3's target — the isthmus bridging in
front of the trachea — is the one to look at hardest, because in this anterior view the trachea is
drawn *over* the isthmus region and the bridging band is hard to see at all. **If the isthmus is not
drawn as a distinct band, row 3 becomes a fault-6 row like the hyoid.**

**Please re-measure rows 3, 4, 5 and 7 against your 1024×1536 master.** Once the page is re-exported
at standard size we will happily verify them; we did not want to give you four coordinates we could
not defend.

---

## Summary of endpoints — in the shipped 800×1200 page's pixels

| # | label | now | should be |
|---|---|---|---|
| 1 | Parafollicular (C) cell | (126,672) the colloid | (160,710) the green C cell |
| 2 | Capillary | (170,712) the C cell | (60,715) the red capillaries |
| 3 | Isthmus | *per the order* | the midline bridging band — **confirm it is drawn** |
| 4 | Trachea | *per the order* | the ringed grey tube, x 280–330 |
| 5 | Cricoid cartilage | *per the order* | the ring below the thyroid cartilage |
| 6 | Hyoid bone | lateral neck soft tissue | **not drawn — add the bone or drop the label** |
| 7 | Inferior thyroid artery and vein | *per the order* | the vessels at the lower pole |

Correct as drawn: **Colloid (thyroglobulin)** (126,633).
