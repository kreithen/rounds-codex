# The view-mismatch defect class, and a coverage gap the sweep did not advertise

Opened 2026-08-10 after Dr. Kreithen found two defects on `hip-fracture` p5 by eye that the
553-finding label sweep had not reported.

---

## 1. The class

**A label names a structure the chosen view physically cannot show.** It is distinct from the
leader-line defect the sweep was built for, and it is not reachable by that sweep's question:

> the sweep asks *"does this line end on the structure it names?"*
> this class needs *"can the structure it names appear in this frame at all?"*

Where the answer to the second is no, there is **no correct endpoint** — so a reviewer checking
endpoints has nothing to compare against and tends to record the finding as a merely displaced
leader, or as SUSPECT, or not at all.

### Confirmed instances

| page | label | the problem |
|---|---|---|
| `hip-fracture` p5 | "Posterior tibial pulse" | dorsal view; PT is palpated behind the medial malleolus |
| `hip-fracture` p5 | purple toe shading | legend colour for deep peroneal, applied to whole toes |
| `compartment` p2 | "Flexor retinaculum" | anterior view; retinaculum is at the medial ankle |
| `compartment` p2 | "4 DEEP POSTERIOR COMPARTMENT" | anterior view; "not visible from anterior at all" |
| `compartment` p2 | "Tibial nerve" | leader lands on the dorsal cutaneous fan at the anterior ankle |
| `anxiety` p2 | "Insula (5)" | midsagittal cut; the insula is buried in the Sylvian fissure |

### `compartment` p2 is `hip-fracture` p5's twin, and that is the point

Same region, same structure family, same failure. Both put a **posterior-tibial-territory structure
on the dorsum of the foot**, and in both the *artwork colour follows the wrong label* — the sweep's
own note on `compartment` reads "artwork appears to colour the dorsal cutaneous fan purple to match
the label", which is exactly what the purple toes do on `hip-fracture` p5.

That is two independent galleries making one mistake in the same way, so it is a **source-artwork
pattern, not a slip**. Worth naming explicitly in the production brief: when a label cannot be placed
in the current view, the figure is being recoloured to justify the label rather than the view being
changed to suit the label.

---

## 2. How well it can be mined (honestly: it is a review aid, not a gate)

Two passes over `label-qa-raw/b*.txt`:

- **Narrow** — the `expected:` clause literally says the structure is not visible
  (`not visible|not shown in|cannot be seen|not present in this/an`): **3 hits, 3 true.**
- **Broad** — orientation contradiction between where the leader landed and what was expected
  (anterior↔posterior, dorsum↔plantar, sagittal↔lateral, superficial↔deep, medial↔lateral):
  **23 candidates, ~4 true — roughly 17% precision.**

Most broad hits are ordinary displaced leaders that merely happen to use orientation words
("Isthmus lands lateral, expected midline"). **Do not gate on the broad pass.** The narrow phrasing
is nearly clean but only fires when a reviewer already understood the problem and said so.

**The mining ceiling, which is the real limitation:** it can only surface view mismatches an agent
*noticed and phrased*. The agents were briefed on leader endpoints, so a view mismatch nobody
remarked on leaves no trace to grep. This pass found the ones already written down; it cannot find
new ones. **Only reading the page does that** — which is how both `hip-fracture` p5 defects were
found, by the physician.

---

## 3. The coverage gap — larger than the class itself

The sweep is, in practice, a **page-2 sweep**:

| page | pages examined |
|---|---|
| 2 | 90 |
| 1 | 15 |
| 7 | 3 |
| 3 | 1 |

109 worklist entries across 92 galleries, against roughly **100 galleries × 10 pages ≈ 1,000 pages**
that exist. So the headline figures — 119 examined, **81 wrong**, 553 findings — describe the
galleries' *anatomy pages*, not the galleries.

**The working assumption was "labelled anatomy lives on pages 1–2." `hip-fracture` p5 disproves it.**
That page is titled *Physical Exam*, and it carries two separately labelled anatomical figures — the
pulse illustration and the sensation map — both defective. Management, imaging and complication pages
can and do carry labelled anatomy.

**Consequences to state plainly before anything goes to production:**

1. The 81-page work order is a work order for the **anatomy pages**. It is not a clean bill of health
   for the other ~880.
2. The 30% defect rate (323 of 1,098 labels) is measured on the pages most dense with leader lines.
   It should not be extrapolated to the full set in either direction without sampling.
3. A re-render batch fixing the 81 will not catch a `hip-fracture` p5. Those pages have to be looked
   at.

### Suggested next step, when there is appetite

Not a full 1,000-page re-sweep. **Sample pages 3–10 across a stratified set of ~10 galleries**
(≈80 pages) and count how many carry labelled anatomy at all, and how many of those are defective.
That gives a defensible estimate of what is out there for a bounded cost, and it settles whether the
remaining pages need a full pass or a spot-check. Ask the physician before spending it — this is not
launch-blocking, and `LAUNCH-AUG17.md` §4.1 keeps the anatomy corrections off the 17 August path.
