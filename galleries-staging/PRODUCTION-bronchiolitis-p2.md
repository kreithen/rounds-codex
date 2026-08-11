# For production: `bronchiolitis` page 2 — a side inversion, and the wall layers labelled inside out

9 rows flagged. Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-10.*

---

## 1. The main figure: "Left main bronchus" is in the patient's RIGHT lung

Found by a laterality sweep, not by the page-by-page review.

The trachea descends at x ≈ 470–490 and **the carina is at (472,625)**. From it, one bronchus runs
down-**left** into the viewer's-left lung; the other runs **right**. On a front-facing figure,
viewer's left = **patient's right**.

| row | label | ends at | what that is |
|---|---|---|---|
| 1 | **Left main bronchus** | **~(408,660)** | viewer's-left lung = the patient's **RIGHT** lung |
| 5 | Right main bronchus *[CHECK]* | ~(416,606) | a small upper-lobe segmental branch, in the same lung |

**Both bronchus labels are in one lung, and it is the wrong one for the first.**

**Underneath that, a second fault:** *neither leader reaches a bronchus at all.* Both stop in
parenchyma, 50–90 px short of the ringed tubes drawn at x 415–520. So even after the side is fixed,
the endpoints need moving onto the tubes — the left main bronchus runs down-right from the carina to
about (494,634), the right main to about (444,634).

## 2. The NORMAL BRONCHIOLE cross-section: the layers are labelled inside out

The artwork draws the wall correctly. From **outside in** at 10×:

> dark red striated **smooth muscle** → a salmon band → the **epithelium**, recognisable by its
> purple nuclei → the gold **mucus** layer → the dark lumen.

The work order reports the three labels coming out in **reverse radial order** — "Smooth muscle" on
the gold mucus at the lumen (radius ≈ 49 from the lumen centre, when it belongs at radius ≈ 66), and
"Mucus layer" on the epithelial band just outside the gold.

**We confirm the artwork's layer order visually and are passing the endpoint radii through as the
order states them.** We could not measure those two tips numerically: the bright-desaturated mask
that finds leaders on other pages also selects this figure's own pale inter-layer outlines, and the
lumen is too irregular for a clean radius from its centroid. Please check the two radii at source.

**This is a fifth instance of fault 4** (see the brief) — on a layered figure, the layer labels come
out at the wrong depths. The others are `aortic-dissection` p2, `pericarditis` p3, `addisons` p1 and
`addisons` p2. It is now the most repeated fault we have.

## 3. The airway labels above it

| row | label | ends on | should be |
|---|---|---|---|
| 2 | Pharynx | inside the **oral cavity**, just behind the lips, ~(389,450) | the vertical pharyngeal column, ~(460,455) — 70 px posterior |
| 3 | Oral cavity | the **hard palate / nasal floor**, ~(382,427) | the oral cavity below the palate, ~(385,450) |
| 4 | Nasal cavity *[CHECK]* | the **skin of the nasal dorsum**, ~(384,385) | inside the turbinate-containing cavity, ~12 px lower |

Rows 2 and 3 are a **displaced series**: pharynx lands where oral cavity belongs, oral cavity lands
where nasal cavity belongs, and nasal cavity lands on skin above the nose. Three labels each one
structure too far forward and up — the same shape as `aortic-dissection` p2's arch branches, in a
sagittal airway instead of a vessel series.

Rows 8 and 9 are carried over unverified.
