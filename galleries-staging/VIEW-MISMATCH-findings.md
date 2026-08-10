# View-mismatch sweep — running tally (4 of 11 batches in)

## CONFIRMED MISMATCH (label names a structure the view does not depict)

| page | label | why it cannot be there | leader lands on |
|---|---|---|---|
| `stroke` 2 | Anterior Cerebral Artery | ACA runs medially in the interhemispheric fissure; panel is an uncut LATERAL surface | a lateral mid-frontal MCA branch |
| `stroke` 2 | Pontine Perforators | slice is SUPRATENTORIAL (lateral ventricles); no pons present | deep white matter / basal ganglia |
| `stroke` 2 | Medullary Perforators | same supratentorial slice; no medulla present | periventricular white matter |
| `suicide` 2 | Dorsolateral Prefrontal Cortex | DLPFC is lateral convexity; panel is a MIDSAGITTAL cut | anterior cingulate band above fornix |
| `meningitis` 2 | Lateral aperture (Luschka) | opens off-midline into CP cistern; panel is MIDSAGITTAL | the midline outflow = foramen of Magendie |
| `hyperparathyroid` 2 | Ectopic — in mediastinum | field stops at cervical trachea; no mediastinum drawn | a mass on the trachea, still in the NECK |
| `lymphoma` 2 | Waldeyer's Ring (nasopharynx) | head is unsectioned solid profile; no pharynx/adenoid | mid-neck deep cervical plexus |
| `t2dm` 2 | Major duodenal papilla | intraluminal structure; panel is EXTERNAL serosal, no cutaway | outer convexity of a duodenal fold |

## SUSPECT — physician's call
- `t2dm` 2 — hepatopancreatic ampulla (same external view); 4 pancreatic arteries not drawn at all over body/tail
- `gerd` 7 — Z-line: no squamocolumnar transition rendered anywhere in the panel
- `pph` 2 — spiral arteries: inset is an abstract branching tree, no uterine wall
- `preeclampsia` 2 — no discrete placental disc drawn; leader ends outside the uterus
- `cellulitis` 2 — lymph nodes named on a skin block that spans only epidermis→subcutis
- `hyperparathyroid` 2 — intrathyroidal gland: thyroid drawn opaque, no cutaway
- `stroke` 2 — **"Middle Communicating Artery (PCoA)" — NO SUCH VESSEL EXISTS.** Nomenclature
  error, not a view defect. It is the posterior communicating artery.
- `afib` 6 — echo inset labelled LA/LV with LA in the near field: correct for TEE, wrong for any
  transthoracic window, and the page's text is about transthoracic echo

## Structural note worth carrying to production
`afib` is 9/10 clean **because of how it is built** — concept callouts sit entirely OUTSIDE the
figure panel and no leader ever enters the artwork. Same immunity as `acs`'s numbered on-figure
badges. This is the third independent confirmation that the callout/badge pattern removes the
whole defect class rather than reducing it.

---

# Batches 07 + 09 in (6 of 11)

## Further CONFIRMED MISMATCH

| page | label | why it cannot be there | leader lands on |
|---|---|---|---|
| `fracture` 2 | Patella | POSTERIOR skeleton figure; patella lies anterior to the femoral condyles | the intercondylar notch |
| `pe` 2 | Left main bronchus | anterior heart/great-vessel panel draws NO tracheobronchial tree (no trachea, no carina) | left heart border / lower-lung vasculature |
| `hepatitis` 2 | Hepatic veins | intraparenchymal, joining the retrohepatic IVC behind a liver drawn SOLID and unsectioned | the bare infrahepatic IVC below the liver |

`fracture` p2 is the cleanest specimen in the whole sweep: **the same label's arrow into the
ANTERIOR figure is correct.** One label, two figures, right on one and impossible on the other.

## NEW CLASS — the colour KEY does not match the artwork

Neither the original leader-line audit nor the view-mismatch brief looked for this. It is arguably
worse than a stray leader, because the reader is actively invited to colour-match.

- **`pe` p2, lung territory key — 2 of 6 entries correct.** The right lung is painted blue / magenta
  / red-brown, so the legend's **tan "Middle lobe" swatch appears nowhere on the figure**, and the
  magenta swatch labelled "Lower lobe" sits over **middle**-lobe territory. On the left, neither the
  grey "Upper lobe" nor the teal "Lower lobe" swatch exists. A reader matching legend to lung reads
  the wrong lobe.
- **`osa` p2, four-colour muscle key — only 2 of 4 tints are painted at all.** No orange
  (palatoglossus) or blue (palatopharyngeus) structure exists anywhere. Worse, the purple tint's
  course does not match genioglossus and looks **applied to the pharyngeal wall to give the label
  somewhere to land** — the same recolour-to-justify mechanism as `compartment` p2 and
  `hip-fracture` p5.

## Further SUSPECT — physician's call
- `labor` 2 — "BROAD LIGAMENT (6)": a lateral peritoneal fold, absent from a median section; key
  item exists but no marker is placed
- `osa` 2 — palatoglossus and palatopharyngeus (see key above)
- `myasthenia` 2 — voltage-gated Ca²⁺ channels and basal lamina: both named, neither drawn
  (omission from a view that COULD show them, not a wrong view)
- `parkinsons` 2 — internal capsule: no white matter rendered; leader ends on the lentiform/thalamus
  interface
- `hepatitis` 2 — coronary ligament: leader ends on plain parenchyma

## Negative controls the agents applied correctly — the guard is working
`dvt` p2 popliteal and gastrocnemius veins are **posterior** but deliberately drawn through a
ghosted x-ray limb → not flagged. `tia` p2 basilar artery is ventral to the pons in a posterior view
but drawn superimposed → not flagged. `withdrawal` p2 explicitly distinguished from the `anxiety` p2
pattern because its deep nuclei are drawn as discrete coloured bodies. `cap` p2 was suspected then
cleared by contrast-boosting to reveal the fissures.

---

# Batch 06 in (7 of 11) — and the most serious finding of the project

## ESCALATE — `sci` page 1: two thumbnails are the WRONG IMAGING STUDY

This is not a mislabelled leader. Under **"non-traumatic causes of SPINAL CORD injury"**:

- **"Transverse Myelitis"** → the thumbnail is an **axial BRAIN MRI** at the level of the lateral
  ventricles. Cerebral hemispheres, no vertebral column, no spinal cord in the frame. Myelitis is by
  definition a cord lesion.
- **"Tumor"** → also an **axial brain MRI**, with a highlighted periventricular / third-ventricle
  lesion, presented as a cause of spinal cord injury. The highlighted lesion is intracranial.

**What makes this conclusive rather than arguable:** the two neighbouring thumbnails in the same
strip — Epidural Abscess and Vascular Infarction — are correctly **sagittal spine** MRIs. The intent
of the panel is unambiguous, and these two do not meet it.

Severity is a step above everything else found: the earlier defects put a line on the wrong
structure; this presents **the wrong organ's imaging** as the pathology being taught.

## Further CONFIRMED MISMATCH

| page | label | why | leader lands on |
|---|---|---|---|
| `anxiety` 2 | INSULA (5) | buried in lateral Sylvian fissure; panel is MIDSAGITTAL | the thalamic red ovoid *(calibration case — confirmed)* |
| `icp` 2 | Cavernous sinus | paired, lateral to the sella; cut away by a midline section | **inside the cerebellum** (arbor vitae) |
| `diverticulitis` 2 | Semilunar folds | luminal ridges on the INNER wall; panel shows only intact outer serosa | the outer surface of a haustral bulge |

`diverticulitis` p2 contradicts itself in print: **the panel's own caption says "along the inner
wall"** while the panel draws no lumen at all.

## Further SUSPECT
- `bph` 2 — the prostate-relations roundels look **swapped**: the "Superior — bladder neck & trigone"
  roundel shows a bare bony pelvis with no bladder; the "Anterior — pubic symphysis" roundel shows
  two prostate lobes and no pubis
- `ms` 2 — cerebellum drawn on a **superior** view that should hide it beneath the occipital lobes.
  The agent correctly called this the **inverse** of the target defect: the artwork shows what the
  view should conceal, rather than a label having no possible endpoint
- `thyroidstorm` 2 — panel titled "FOLLICULAR CELL DETAIL (**APICAL VIEW**)" is a longitudinal
  section showing basolateral structures an apical en-face view could not. Declared-view error; every
  individual label is still satisfiable

## More correct negatives
`gout` p2 sesamoids (ghosted through the metatarsal head — permitted), `cirrhosis` p2 coronary
ligament and ligamentum teres (both genuinely drawn; leader-endpoint issues only),
`thyroidstorm` p2 recurrent laryngeal nerve (retro-thyroidal but drawn), `icp` p2 transverse and
sigmoid sinuses (lateral, but drawn in projection and the leaders reach them).

---

# Batch 00 in (8 of 11)

## `stroke` is the worst gallery in the sweep — 6 confirmed across two pages

**Page 1** is effectively an *aortic-arch-to-cortex ANTERIOR circulation* figure carrying **four
posterior-circulation / skull-base labels**:

| label | what the artwork contains | leader lands on |
|---|---|---|
| Circle of Willis | no cerebral arterial circle drawn anywhere | a great-vessel trunk off the **aortic arch**, several vertebral levels below the skull base |
| Basilar Artery | no brainstem, no vertebrobasilar system drawn | a small **extracranial** branch high in the neck |
| Posterior Cerebral Artery | posterior circulation absent entirely | a cervical vessel below the mandible, **outside the cranium** |
| Vertebral Artery *(SUSPECT)* | a second thin parallel vessel exists but cannot be identified | the main ascending carotid trunk |

Plus page 2's three (ACA on a lateral view, pontine and medullary perforators on a supratentorial
slice). **Cerebrovascular territory is the core teaching content of a stroke gallery**, which makes
this the highest-value target in the sweep.

## PATTERN — intraluminal structures labelled on INTACT external/serosal views

Five instances across **four unrelated galleries**, so this is a production habit, not a slip:

| page | label | the panel |
|---|---|---|
| `appendicitis` 2 | Ileocecal valve | anterior cecum, intact serosa, no cutaway |
| `appendicitis` 2 | Appendiceal orifice | same panel — an orifice exists only on the luminal side |
| `cdiff` 2 | Ileocecal valve | anterior colon, closed outer surface; terminal ileum not even drawn |
| `t2dm` 2 | Major duodenal papilla | external serosal C-loop, no lumen, no mucosa |
| `diverticulitis` 2 | Semilunar folds | intact outer serosa — **while the caption says "along the inner wall"** |

The fix is one instruction rather than five corrections: **a luminal structure needs a cutaway,
a window or a sectioned panel.** In `cdiff` the same valve is drawn correctly in section elsewhere
in the gallery, so the capability exists — it simply was not used on the panel that names it.

## Further SUSPECT
- `hyperkalemia` 2 — "Renal Medulla" leader lands on the **intact** kidney's outer surface; the panel
  is titled "(CUT SECTION)" but only one of the two kidneys is actually cut
- `pneumothorax` 2 — pectoralis major / latissimus dorsi borders on a near-lateral trunk, both
  leaders ending in undifferentiated axillary musculature. **Unresolved because this page ships at
  800x1200**, the old sub-standard size — a resolution limit, not a judgement

## More correct negatives
`acs` p1 and p2 both clean with laterality verified. `croup`, `gdm`, `lung-cancer`,
`osteoarthritis` p1 all cleared with the reasoning shown — e.g. `gdm`'s placenta/cord markers land
on plain uterine wall but both structures **are** drawn, so it was correctly filed as an endpoint
issue and left out of scope.

---

# Batch 04 in (9 of 11)

| page | label | why | leader lands on |
|---|---|---|---|
| `gi-bleed` 1 | Ligament of Treitz | sits at the DJ flexure **behind** stomach and transverse mesocolon; neither ligament nor flexure drawn | greater curvature of the stomach, in omental fat |
| `hypothyroid` 2 | Hyoid bone | panel is cropped at the larynx — highest structure drawn is the thyroid cartilage | soft tissue lateral to the larynx |
| `osteoporosis` 2 | Distal radius (Colles) | "Wrist" inset is cropped to the **carpus alone**; no radius, ulna or radiocarpal joint in the circle | nothing — no forearm bone exists to land on |

`osteoporosis` p2's wrist inset is also **internally incoherent as artwork**: four metacarpal-like
shafts leave the carpus *proximally* as well as distally. That is a drawing defect, not a labelling
one, and needs the physician's eye separately.

`gi-bleed` shows good discrimination — the agent reported the Treitz label on panel 1 but explicitly
**declined** to report the same label on panel 2, where the leader reaches the duodenojejunal
segment and is a defensible landmark pointer on a schematic.

## Further SUSPECT
- `depression` 2 — "Cingulate cortex" on what reads as a **lateral** inset (foliated cerebellum with
  no arbor vitae, insula drawn in an opened Sylvian fissure). If lateral, the cingulate cannot appear
  in it. Held at SUSPECT because panel 1 uses the same green for a genuinely midsagittal ACC, so the
  inset may be a deliberate hybrid

## Correct negatives
`afib` p2, `bipolar` p2, `chf` p2, `metabolic-syndrome` p1, `ra` p2, `tb` p2 — several with leaders
that drift off their target ("Hips" landing near the knee on `ra`; marker 7 "Pleura" into parenchyma
on `tb`) all correctly filed as endpoint drift and left out of scope.

---

# Batches 05 + 08 in — SWEEP COMPLETE (11 of 11)

## `compartment` p2 is the worst single page: 6 mismatches + 2 recolours

The four "muscles by compartment" thumbnails **tint essentially the same dorsal-foot region**
(extensor digitorum brevis + extensor tendon fan) in green, then yellow, then blue, to match each
compartment's legend colour. Only thumbnail 1 is anatomically defensible. Deep posterior, superficial
posterior and lateral compartments are each shaded onto a dorsal foot that contains none of them —
popliteus is not even inside the crop. The "Tibial nerve" leader is satisfied only because the
dorsal cutaneous fan was drawn in the legend's purple.

## `uti` p2 — a fabricated comparison

**"MALE LONG URETHRA ~18–20 cm" reuses the identical FEMALE bladder illustration.** No prostate, no
prostatic/membranous/spongy urethra — only a ~1 cm bladder-neck stub. The dimension bracket is **the
same pixel length** as the female panel's "~4 cm" bracket on the same artwork, so the two panels
assert a five-fold difference while being pixel-equivalent.

## `ibd` p2 — artwork invented to catch three leaders

Tongue, Oral cavity and Pharynx are all labelled on an **intact, unsectioned lateral head**. All
three leaders converge on **a smooth red spherical mass in the cheek** where no structure of that
shape exists. The agent's read: it was introduced purely to give those leaders somewhere to
terminate. This is the recolour-to-justify mechanism in its most explicit form yet.

## `parkinsons` p3 — a progression series that shows no progression

"PROGRESSION OF NIGRAL NEURON LOSS" (~20% / ~60–80% / >80%) is drawn on a **coronal section at the
frontal horns** — well rostral to the midbrain, so the substantia nigra is not in the plane at all;
the darkened masses sit in the amygdala/uncus position. **The secondary tell is decisive: they are
equally black in the "Normal" panel and the ">80% Loss" panel.** A degenerating nigra depigments and
should pale across the series, so the figure does not depict its own stated variable.

## Also confirmed
`schizophrenia` p2 hippocampus + amygdala (midsagittal, no temporal lobe); `hiv` p2 tonsils (empty
translucent head silhouette, leader lands two vertebral levels low); `migraine` p2 superficial
temporal artery (**one drawn artery serving two labels** — it is also the middle meningeal);
`gi-bleed` p2 ligament of Treitz (second page, same defect as p1).

## The best negative control in the sweep
`pad` p2 was checked **specifically for the `hip-fracture` p5 error and does not have it** —
dorsalis pedis and arcuate appear only on the dorsal panel, posterior tibial and plantar vessels only
on the plantar panel. Correct separation, on the same anatomy that failed elsewhere.

---

# TOTALS — view-mismatch sweep

- **109 pages examined** (the same set the original leader-line audit covered)
- **42 confirmed mismatches across 27 pages** — i.e. **~25% of examined pages** carry at least one
  label naming a structure its view cannot show
- ~20 SUSPECT items held back for the physician rather than asserted
- 3 recolour findings (`compartment` 2 ×2, `ibd` 2, `osa` 2) plus 2 colour-key mismatches
  (`pe` 2, `osa` 2)

This is a **second, independent defect population** on top of the 81 pages of leader-endpoint
defects — not a re-count of them.
