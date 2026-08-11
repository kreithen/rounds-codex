# For production: rows that need artwork, not a moved leader

**Do not schedule these with the leader-line re-renders.** Every row here names a structure the page
does not draw. There is no endpoint to move a leader to, and if these are handed to the re-render
pass they will come back as "cannot locate target".

This is **fault 6** in `PRODUCTION-BRIEF-leader-lines.md`, collected in one place because it is
illustrator work rather than a render-settings change and may go to a different person or schedule.

*Compiled 2026-08-11 from 47 measured pages. Each row was checked across the whole figure at 5× or
better before being put here.*

---

## The list

Ordered by how much the missing structure matters to what the page teaches.

### 1. `stroke` p1 — four cerebral vessels, and the page is the stroke module's overview

| labels | Circle of Willis · Basilar Artery · Posterior Cerebral Artery · Anterior Cerebral Artery |
|---|---|
| **what is drawn** | a **lateral** view: cervical arteries ascending into the head, cortical surface branches fanning over the hemisphere. The red tree enters the cranium at (505,500) and branches at (505,430) |
| **what is missing** | all four. They are basal or medial vessels and **this projection cannot show them** |
| **as drawn** | their leaders run 210–317 px below the base of the skull, onto the aortic arch and neck vessels |
| **recommended** | **add a small basal / circle-of-Willis inset** in the lower-left of the main panel and move the four labels onto it |
| **alternative** | drop the four labels, keeping ICA, vertebral and MCA, which this view does show |

We would add the inset. A stroke overview that names no basal vessel is a real gap; one that puts the
basilar artery in the mediastinum is worse than the gap. **This is the highest-value row on the
sheet.**

### 2. `uti` p2 — the ureterovesical junction

| label | ⑧ Ureterovesical junction (UVJ) |
|---|---|
| **what is drawn** | the ureter passes **behind** the bladder and simply ends at the silhouette |
| **what is missing** | the oblique intramural segment — the thing the label names |
| **as drawn** | the leader sits 43 px low, at (565,771), on plain lateral bladder wall |
| **recommended** | move the leader to (560,727) **and draw the oblique entry** |

**The page already draws it correctly elsewhere.** The IMPORTANT ANATOMIC RELATIONSHIPS strip on the
same page has a UVJ panel with the oblique entry — use it as the reference. This is badge ⑧ of eight
and the page's KEY POINT turns on it.

### 3. `parkinsons` p2 — the substantia nigra

| label | Substantia nigra pars reticulata (SNr) |
|---|---|
| **what is drawn** | midbrain and pons as **one undifferentiated tan column**, x 330–395, y 540–640 |
| **what is missing** | any SN band. The **SNc** label already lands inside that column with nothing to mark |
| **as drawn** | the SNr leader doglegs across the cerebellum and lands on the red nucleus, which two other labels also point at |
| **recommended** | draw an SN band into the midbrain with SNc and SNr as its two layers |

**The page already draws it correctly elsewhere** — its own SUBSTANTIA NIGRA (MIDBRAIN) panel is the
reference.

### 4. `schizophrenia` p2 — the pituitary gland

| label | Pituitary Gland |
|---|---|
| **what is drawn** | undifferentiated hypothalamic/brainstem tissue under the "4" badge |
| **what is missing** | the gland and its stalk |
| **as drawn** | a double-headed orange arrow from the badge to the label text, ending at (495,650) on empty background |
| **recommended** | **leave the arrow alone** — it is a badge-to-label connector and the other three badges are drawn the same way — and draw a pituitary and stalk below the hypothalamus |

The left-hand text calls the tuberoinfundibular pathway "Hypothalamus → Anterior Pituitary", so the
pathway terminates on an organ the figure does not contain.

### 5. `migraine` p2 — the superficial temporal artery

| label | D — Superficial temporal artery |
|---|---|
| **what is drawn** | skull, diploe and soft tissue over the whole convexity |
| **what is missing** | **any extracranial vessel**, anywhere over the scalp or temple |
| **as drawn** | the leader points at an *intracranial* branch at (595,478) — the same red tree label C calls the middle meningeal |
| **recommended** | draw the STA into the scalp over the temple |
| **alternative** | take the label off this figure |

Worth deciding rather than defaulting: the page is about extracranial *and* intracranial pain-
sensitive structures, so the STA is not decorative.

### 6. `hepatitis` p2 — the coronary ligament

| label | Coronary ligament |
|---|---|
| **what is drawn** | plain anterior right-lobe parenchyma, sampled (188,102,90) at the endpoint. No line or reflection within 60 px |
| **what is missing** | the ligament — and it **cannot be added to this figure** |
| **recommended** | **drop the label.** The coronary ligament is a peritoneal reflection on the superior and posterior surface; an anterior view cannot show it |
| **alternative** | add a small superior/posterior view if it is wanted |

**Keep `Falciform ligament` on the same figure** — that one *is* visible anteriorly, as the fissure
between the lobes, and is a different case.

### 7. `parkinsons` p2 — the internal capsule

| label | Internal capsule |
|---|---|
| **what is drawn** | no white-matter lamina anywhere in the sagittal panel |
| **as drawn** | the leader ends at (377,512), exactly on the seam between the pallidum and the thalamus |
| **recommended** | draw a capsular band between them, **or** drop it from the sagittal view and carry the label on the coronal panel, which has the room |

### 8. `dementia` p2 — the fornix

| label | Fornix |
|---|---|
| **what is drawn** | the arch beneath the corpus callosum is not differentiated from the callosal band |
| **as drawn** | the leader ends at (312,511), on the green hippocampal head |
| **recommended** | draw the fornix, **or** fold it into the corpus callosum label, which already reads "Corpus callosum (fornix beneath)" |

The second option is nearly free and the label text already anticipates it.

### 9. `hypothyroid` p2 — the hyoid bone

| label | Hyoid bone |
|---|---|
| **what is drawn** | muscle, vessels and the laryngeal cartilages. The region above the thyroid cartilage (the grey shield at x 242–297, y 220–258) contains no bone-like structure |
| **recommended** | **drop the label.** The panel is about the gland and its nerve and vessel relations; the hyoid earns its place only if the larynx is being taught |
| **alternative** | draw the hyoid above the thyroid cartilage |

---

## Three we are flagging but not yet asserting

These look like the same class, and we would rather you checked at source than have us guess.

| page | label | what we could not resolve |
|---|---|---|
| `preeclampsia` p2 | PLACENTA | the uterine wall is drawn as a uniform vascular band and **we could not isolate a distinct placental disc**. If none is drawn, this is a fault-6 row on a page about *abnormal placentation* |
| `gdm` p2 | ① PLACENTA | same figure family, same problem. The region at x 430–500, y 600–680 reads as denser than the wall elsewhere, but we would not put a coordinate on its edge |
| `labor` p2 | Bladder | at term the uterus fills the pelvis and the bladder is compressed against the pubis; we could not isolate a separate lumen. The label currently sits on the pubic bone |

**Two obstetric pages with the same gap is worth one look at how the placenta is being drawn across
the OB module**, rather than two separate fixes.

Also on `hypothyroid` p2: in an anterior view the trachea is drawn **over** the isthmus region, and
we could not see the bridging band at all. **If the isthmus is not drawn as a distinct band, its row
belongs on this sheet too** rather than in the leader work.

---

## Two things this sheet is not

**It is not a redraw request.** Seven of the nine confirmed rows are a single structure added to an
existing figure, and three of those can be copied from a panel already on the same page. Only
`stroke` p1 asks for a new inset.

**It is not blocking the leader work.** Every page here has other rows that are ordinary leader moves,
and those can ship in the re-render pass. Where a page appears on both lists, its per-page sheet says
which rows are which.

---

## Summary

| # | page | label | recommended |
|---|---|---|---|
| 1 | `stroke` p1 | Circle of Willis, Basilar, PCA, ACA | add a basal inset |
| 2 | `uti` p2 | ⑧ Ureterovesical junction | draw the oblique intramural segment |
| 3 | `parkinsons` p2 | Substantia nigra pars reticulata | draw an SN band in the midbrain |
| 4 | `schizophrenia` p2 | Pituitary Gland | draw the gland and stalk |
| 5 | `migraine` p2 | D — Superficial temporal artery | draw the STA in the scalp |
| 6 | `hepatitis` p2 | Coronary ligament | **drop the label** — not showable anteriorly |
| 7 | `parkinsons` p2 | Internal capsule | draw a capsular band, or move to the coronal panel |
| 8 | `dementia` p2 | Fornix | draw it, or fold into the corpus callosum label |
| 9 | `hypothyroid` p2 | Hyoid bone | **drop the label** |
| — | `preeclampsia` p2, `gdm` p2, `labor` p2, `hypothyroid` p2 | placenta ×2, bladder, isthmus | **check at source first** |
