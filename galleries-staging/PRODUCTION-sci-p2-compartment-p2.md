# For production: `sci` p2 and `compartment` p2 — labels that contradict the page's own colour key

These are the two pages behind **fault 5** in the brief. Both are now confirmed by sampling the
colour under the endpoint and comparing it to the key — no anatomical judgement involved.

*Measured on the shipped pages (1024×1536), 2026-08-10.*

---

## `sci` page 2 — "Lateral Corticospinal Tract" is on the Spinothalamic blue

The MAJOR TRACTS key on this page assigns, sampled from its own swatches:

| key entry | swatch RGB |
|---|---|
| Dorsal Columns | **(86,39,140)** purple |
| Corticospinal (Lateral & Anterior) | **(66,110,24)** green |
| Spinothalamic (Lateral) | **(27,118,181)** blue |

The **"Lateral Corticospinal Tract (UMN)"** leader terminates in a white dot at **(423,437)**.
Sampling immediately around it: **(49,107,150)** and **(52,97,125)** — **blue**. That is the key's
Spinothalamic colour.

**The green corticospinal region is drawn, 30–45 px up and to the left** — sampled at (440,395) and
(455,405) as **(100,136,43)** and **(105,136,53)** — and **no label points at it**.

So the page teaches the lateral corticospinal tract in the position its own key reserves for
spinothalamic, on a figure whose purpose is to let a reader localise a deficit. Row 3 on the same
panel does the same thing one step over: "Dorsal Columns" ends on the brown dorsal-horn grey matter
rather than the purple columns behind it.

**Correct endpoint:** anywhere in the green posterolateral region, e.g. **(445,400)**.

The other twelve rows on this page — the sagittal overview, the meninges panel, the roots and the
dermatomes — are carried over from the work order unverified. Two are worth flagging even so: **row
15** puts **S2–S4** on the posterior knee, and the panel's own note about sacral sparing depends on
that dermatome being perineal.

---

## `compartment` page 2 — the gold label lands on the green muscle

On this page the **labels are themselves colour-coded**, which makes the check trivial: the
"① ANTERIOR COMPARTMENT" label is printed in green ink **(52,76,38)** and "② LATERAL COMPARTMENT" in
gold **(108,85,17)**.

- The **gold** LATERAL label's dot is at **(230,462)**. Sampled around it: **(83,103,51)** and
  **(110,128,70)** — the **green** muscle belly, which the same page shades as the *anterior*
  compartment. The belly sampled at (235,410) is (92,104,52); the endpoint is in the same mass.
- The **green** ANTERIOR label's dot at **(218,357)** is on pinkish-tan muscle — **(177,154,137)** —
  not on the green either.

So this is not a swap. The green anterior compartment carries the *lateral* label, and the anterior
label is elsewhere entirely. **Correct endpoint for ②:** the gold peroneal group over the fibula,
lateral to the green.

Six further rows on this page are carried over unverified. Row 3 is worth production's eye
independently: **"Flexor retinaculum" is placed on the dorsum of the foot beneath the *extensor*
retinaculum** — a structure that cannot be shown in an anterior view at all, since it lies behind the
medial malleolus.

---

## Why these two are worth a template change, not just two fixes

Every other fault in this review needs someone who knows the anatomy to catch it. **This one does
not.** Where a figure carries a colour key — or colour-coded labels, as `compartment` p2 does — the
endpoint colour and the key are two machine-readable statements about the same thing:

> sample the colour under each endpoint → look it up in the key → compare to the label.

That check would have caught both of these before the page shipped, and it is the only one of the
five faults that can be automated end to end.
