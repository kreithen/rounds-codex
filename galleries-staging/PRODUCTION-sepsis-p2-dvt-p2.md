# For production: `sepsis` p2 and `dvt` p2 — the two worst pages in the triage

Both need a re-render. Measured on the shipped pages 2026-08-10.

---

## `sepsis` page 2 — the BRAIN marker is on the chest, and its real marker is orphaned

Three things on one page, and they are connected:

- **Callout ⑥ BRAIN (Meningitis)** runs from the right column down-left and ends at a green marker at
  **(620,472)** — the **left upper chest / lung region**, about 225 px below the head. The brain is
  drawn plainly at **x 450–560, y 215–290**.
- **A green marker sits beside the temple at (565,247)** — the correct site — and is **orphaned**.
  Its short green stub runs down-right and **dies at (642,268)**, exactly where it crosses the red
  BLOODSTREAM leader. It reaches no callout.
- **Callout ⑤ BLOODSTREAM (Catheters, Lines)** has **no terminator at all**. Its red leader runs from
  (660,237) down-left through (620,300), (580,380), (545,450) and fades into the chest.

**What we need:** BRAIN's leader terminates on the temple marker at (565,247); BLOODSTREAM's leader
gets a real endpoint on a marked vascular access site. The two are almost certainly one fault — the
green line appears to have been cut where the red line crosses it, and the remaining segment
re-aimed at the chest.

*This page ranks first in our triage. Every other finding in the review is a leader on the wrong
structure; this one puts a brain marker on a chest wall.*

---

## `dvt` page 2 — the popliteal vein is marked on the tibia

| row | label | measured | should be |
|---|---|---|---|
| 2 | **Popliteal vein** | dot at **(382,678)** — the proximal tibial shaft, **73 px below the knee joint line at y = 605** | the vein behind the knee at the joint line |
| 1 | Deep femoral vein | the same bright deep trunk the "Femoral vein" label marks ~110 px lower; no separate profunda is drawn | a posterior/lateral branch off the common femoral vein |
| 4 | Valve closed (prevents backflow) | the vein's outer wall between two valves — and **no valve in the VALVULAR STRUCTURE panel is drawn closed**; all three cusp pairs are swept open with upward flow arrows | a closed, coapted valve — which the artwork does not contain |

**Why this page ranks second.** Its own caption for that label reads *"Located in the popliteal fossa
behind the knee."* The figure contradicts its own text by more than a condyle-width, on the page a
reader uses to learn where the deep veins run — and compression ultrasound is performed at exactly
these landmarks.

**Row 4 needs artwork, not a moved leader.** A "Valve closed" label cannot be corrected by moving it,
because the panel draws no closed valve. Either draw one — the panel already has room, and the
contrast with the open cusps beside it is the teaching point — or drop the label.

**Row 3 (Lumen, cross-section inset) we are leaving flagged and not measured.** The inset vessel is
only ~103 px across with 3–5 px layers, which is at the limit of what the shipped page can settle.
Please judge it at source.
