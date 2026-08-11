# For production: `cellulitis` page 2 — the artery label is on the vein, and the vein label is on fat

4 rows flagged. **Two measured and confirmed; two carried.** Needs a re-render.
*Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. `Artery` and `Vein` — a two-step displacement, settled by colour

The subcutaneous layer of the skin block draws a **red vessel** and a **blue vessel** running
alongside each other, against **gold fat lobules**. Sampling under each terminator:

| row | label | terminator | sampled | what it is |
|---|---|---|---|---|
| 1 | **Artery** | **(563,677)** | **(56,66,78)** | **the blue vessel** — matches the vein at (556,675), (43,46,67) |
| 2 | **Vein** | **(509,722)** | **(143,99,62)** | **a gold fat lobule** — matches the Fat lobule terminator at (533,764), (163,114,51). No vessel within 12 px |
| — | Fat lobule | (533,764) | (163,114,51) | a fat lobule — **correct** |

The **red vessel is drawn, unambiguous and unlabelled** — sampled **(125,32,25)** at **(497,703)**,
running immediately beside the blue.

**Correct endpoints:** Artery → **(497,703)**, the red vessel; Vein → **(556,675)**, the blue vessel,
which is where the Artery leader currently stops.

This is the same shape as `hepatitis` p2 and `ckd` p2: **the vessels are drawn correctly, in the
conventional colours, and the two labels have moved one step along.** Nothing needs re-routing — the
Artery leader moves about 66 px left onto the red, and the Vein leader takes the point the Artery
leader vacates.

## 2. Rows 3 and 4 — carried, not measured

| row | label | the order's finding |
|---|---|---|
| 3 | **Hair follicle** | plain reticular dermis on the block's **right side face** — small vessels and mast cells only. The sheathed follicle with its hair is drawn on the block's **front face at left** |
| 4 | Portal of entry (skin break) *[CHECK]* | erythematous skin about 30 px to the right of the wound, near a lymphatic branch. Move to the dark slit-shaped break itself |

**Row 3 is worth a note.** The skin block is drawn as a 3-D cube with a front face and a right side
face, and the label column runs down the right. A leader travelling left from that column meets the
**side face** first — which is a cut surface showing different structures from the front face. That is
a layout condition, not a placement slip: several labels on this figure name structures drawn on the
front face while their leaders stop on the side face.

**Please check the whole right-hand column against which face each structure is drawn on**, rather
than moving one leader. `Sweat gland`, `Nerve` and `Hair shaft` sit in the same column and are worth
the same look even though the order does not flag them.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Artery | (563,677) the blue vein | (497,703) the red vessel |
| 2 | Vein | (509,722) a fat lobule | (556,675) the blue vessel |
| 3 | Hair follicle | *per the order* — the side face's dermis | the sheathed follicle on the front face |
| 4 | Portal of entry (skin break) | *per the order* — ~30 px right of the wound | the dark slit-shaped break |

Correct as drawn: **Fat lobule** (533,764).
