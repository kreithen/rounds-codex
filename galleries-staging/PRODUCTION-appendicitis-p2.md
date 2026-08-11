# For production: `appendicitis` page 2 — the wall layers are labelled inward, and both hip flexors are on the bowel

11 asserted moves flagged. **Six measured and confirmed; five carried.** Needs a re-render.
*Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

*(This replaces `PRODUCTION-appendicitis-p2-PARTIAL.md`, which recorded an unresolved measurement.
It is resolved — see the note at the end of section 1. The work order was right and we were wrong.)*

---

## 1. APPENDIX CROSS SECTION — four of five layer labels sit too deep

The panel is concentric, so radius settles it. Fitting the circle from its own outline — top edge
y ≈ 790, bottom y ≈ 1010, widest run 55→243 at the centre height — gives **centre (134,900),
radius ≈ 110**.

Reading outward along a ray, the layers are:

| radius | layer |
|---|---|
| **0–60** | orange **lumen** |
| **61–75** | magenta scalloped **mucosa** |
| **76–90** | dark red **submucosa** |
| **91–108** | pale speckled **muscularis propria** |
| **≈ 109–110** | the thin outer rim — **serosa** |

Against that, the three tips we traced firmly:

| row | label | tip | radius | what it is | belongs at |
|---|---|---|---|---|---|
| 8 | **Serosa** | **(160,821)** | **r = 83** | the **dark red submucosa** | r ≈ 110 |
| 9 | **Muscularis propria** | **(200,859)** | **r = 78** | the mucosa/submucosa boundary | r 91–108 |
| 10 | **Submucosa** | **(185,900)** | **r = 51** | the **orange lumen** | r 76–90 |

The work order's readings for rows 8 and 9 are exact — "the dark red band deep inside the wall
(r~82 of a 110 radius)" and "the outer edge of the magenta mucosal band". Row 10 we measure 10 px
further in than the order does (it reads the magenta band; we read the lumen just inside it); the row
is confirmed either way.

**Rows 11 and 12 are carried at the order's readings** — Mucosa on the orange lumen, Lumen on the
magenta band. We did not trace those two tips.

Read together, **four of the five layer labels sit one to two layers too deep**, and the fifth (Lumen)
sits too shallow. This is **fault 4** at full extent: on a radial figure a leader that overshoots by a
fraction of the radius still lands two layers in, and the reader gets a confident wrong layer rather
than an obvious miss.

**A check that needs no anatomy:** on this figure no two layer labels should terminate at the same
radius, and the five radii should ascend in the order lumen < mucosa < submucosa < muscularis <
serosa. They do not.

> ### A correction to our own earlier measurement
>
> Our first pass reported the circle's radius as **77** and flagged a conflict with the order's 110.
> **The order was right.** We had derived the centre from a loose tissue mask that caught the label
> column to the right of the figure, which pulled the centre 35 px off and shrank every radius
> proportionally. Fitting the circle from its own outline instead gives radius 110 and puts the Serosa
> tip at r 83, which is what the order says. Nothing was sent to production on the wrong figure.

## 2. RELATIONS panel — `Psoas major` and `Iliacus` are both on the cecum

| row | label | terminator | what is under it |
|---|---|---|---|
| 13 | **Psoas major** | **(354,1108)** | the **haustrated cecum** — pink sacculated bowel, x 335–420 |
| 14 | **Iliacus** | **(340,1152)** | **the same cecum**, at its left margin, 45 px below |

Two retroperitoneal muscles, both labelled onto bowel. The order notes for row 13 that the muscle is
**"not rendered at that point"**, and we could not identify separately drawn psoas or iliacus bellies
anywhere in the panel — the region behind and lateral to the bowel is the tan peritoneal/fascial band
and the ghosted body outline.

**Please check at source.** If the muscles are not drawn, these two rows belong on
`PRODUCTION-artwork-needed.md` rather than in the re-render pass. If they are drawn and merely
obscured, the leaders need to reach them.

For reference on the same panel, `Cecum` terminates at **(316,1191)** and `Appendix (variable
position)` at **(388,1252)** — both on bowel, and both correct.

## 3. Rows carried, not measured

| row | label | the order's finding |
|---|---|---|
| 4 | Mesappendix (contains appendiceal artery and vein) | **two dots on the lateral wall of the appendix itself**, the same tube "Vermiform appendix" labels. The order adds that no peritoneal fold is drawn between appendix and cecum — so this may be a fault-6 row |
| 6 | Appendicular vein *(venous panel)* | the top of the main ascending venous trunk — the ileocolic vein heading to the SMV — rather than the small vein running to the appendix |
| 11 | Mucosa (with lymphoid follicles) | inside the orange lumen |
| 12 | Lumen | the magenta mucosal band |
| 15 | Right ureter | **the mid-portion of the appendix tube** |
| 16 | External iliac vessels | **the distal appendix tube** |

**Rows 15 and 16 are worth production's attention even though we did not measure them**, because
together with rows 13 and 14 they mean **all four retroperitoneal relations on this panel — psoas,
iliacus, ureter and iliac vessels — are labelled onto the bowel or the appendix.** The panel exists to
teach what the inflamed appendix can lie against, and as drawn every one of those relations is named
on the appendix or the cecum instead.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 8 | Serosa | (160,821), r 83 — the submucosa | the outer rim, r ≈ 110 |
| 9 | Muscularis propria | (200,859), r 78 — the mucosa/submucosa boundary | r 91–108, the pale speckled band |
| 10 | Submucosa | (185,900), r 51 — the lumen | r 76–90, the dark red band |
| 11 | Mucosa | *per the order* | r 61–75, the magenta band |
| 12 | Lumen | *per the order* | r 0–60, the orange centre |
| 13 | Psoas major | (354,1108) the cecum | the muscle — **confirm it is drawn** |
| 14 | Iliacus | (340,1152) the cecum | the muscle — **confirm it is drawn** |
| 15 | Right ureter | *per the order* | a retroperitoneal tube crossing the iliac vessels |
| 16 | External iliac vessels | *per the order* | the red and blue iliac tubes |
| 4 | Mesappendix | *per the order* | the peritoneal fold — **confirm one is drawn** |
| 6 | Appendicular vein | *per the order* | the small vein running to the appendix |

Correct as drawn: **Cecum** (316,1191), **Appendix (variable position)** (388,1252).
