# USMLE illustrations — pre-review audit

198 images generated (24 previously approved + 174 in the 2026-07-31 run). Nothing here has been wired into the app.

| | |
|---|---|
| Prompt-vs-question defects | **11** (0 blocker, 11 warn) across 11 items |
| Redundant generations | **29** images in 24 clusters |
| Items clean on both checks | **158** |

## 1. Prompt-vs-question defects

Each image was generated from a prompt written for one specific bank item. These are
cases where the prompt and the item disagree — a defect you cannot see by looking at
the picture, because the picture may be a perfectly good rendering of the wrong thing.

### Warnings — look at these deliberately (11)

**`s1-0118` — Papillary thyroid carcinoma** · Step 1 · MEDICALLY_WRONG  
Prompt asks for "Orphan Annie eye" optically clear nuclei on a Papanicolaou-stained FNA smear, but nuclear clearing is a paraffin/fixation artifact seen only in histologic sections, not on cytology smears.

> The prompt specifies a 400x Pap-stained thyroid FNA cytology smear showing "pale, cleared 'ground-glass' (Orphan Annie eye) optically empty nuclei." Orphan Annie eye nuclear clearing is an artifact of formalin fixation and paraffin embedding and is characteristically ABSENT on cytologic smears; what alcohol-fixed Pap smears actually show is finely granular/powdery pale chromatin, nuclear enlargement and overlap, longitudinal grooves and intranuclear pseudoinclusions (the last two are correctly requested, as are psammoma bodies). The vignette's bracketed image caption asserts the same thing, so if the image is kept the caption should be softened to "pale, powdery chromatin with nuclear grooves" - or the modality changed to an H&E tissue section.

**`s1-0184` — Ankylosing spondylitis** · Step 1 · MEDICALLY_WRONG  
Prompt requests squared vertebral bodies and vertical syndesmophytes inside a single AP pelvis radiograph, where neither is demonstrable, and drops the lateral spine view the vignette's caption promises.

> Prompt asks for squared lumbar vertebral corners and thin vertical bridging syndesmophytes - on an AP pelvis projection only L5/sacrum are typically in the field, and vertebral squaring plus annular syndesmophytes are LATERAL-projection findings. Separately the vignette's caption states two panels (AP pelvis WITH a lateral spine film showing bamboo spine) while the prompt produces only the AP pelvis. The authoring notes are internally inconsistent (mustShow demands squaring/syndesmophytes, avoid forbids a lateral view). Fix: drop the spine clauses from prompt and caption, or generate a two-panel image. The bilateral symmetric SI erosion/sclerosis/ankylosis portion is correct and answers the item on its own.

**`s1-0188` — Pneumococcal lobar pneumonia** · Step 1 · MEDICALLY_WRONG  
Prompt tells the generator the RIGHT HEART BORDER may be obscured by the consolidation; right-lower-lobe disease silhouettes the right hemidiaphragm and PRESERVES the right heart border (heart-border loss is right middle lobe).

> Prompt: "the right heart border and hemidiaphragm silhouette may be partly obscured at the affected margin." The right heart border abuts the air-filled right middle lobe, so an RLL consolidation obliterates the right hemidiaphragm outline while the right heart border stays sharp. The vignette states right lower lung findings and the caption says "confined to the right lower lobe." Secondary imprecision in the same sentence: the RLL is bounded superiorly by the MAJOR fissure only - the minor fissure separates RUL from RML, so "respecting the major/minor fissure boundary" is wrong for this lobe. The stem's answer (S. pneumoniae) does not depend on the lobe, so the image is salvageable.

**`s1-0206` — Glioblastoma multiforme** · Step 1 · LATERALITY  
Prompt specifies a SYMMETRIC bihemispheric butterfly mass, but the vignette's isolated left-sided weakness requires right-hemisphere predominance - and a symmetric lesion cannot produce the midline shift the prompt also asks for.

> Vignette: 62-year-old with new left-sided weakness, implying a right-hemisphere-dominant lesion. Prompt asks for a SYMMETRIC wing-like butterfly configuration plus mass effect, effacement of the adjacent lateral ventricle and mild midline shift. Two problems: (1) laterality - real butterfly gliomas are bihemispheric but almost always have a dominant side, here it should be the right; (2) self-contradiction - a truly symmetric bihemispheric mass exerts balanced pressure and would not shift the midline or selectively efface one ventricle. Usable if the render happens to be right-predominant; fix is to replace "symmetric" with "right-predominant, extending across the splenium/genu into the left hemisphere."

**`s2ck-0017` — Hypertrophic pyloric stenosis** · Step 2 CK · MEDICALLY_WRONG  
Prompt requests a long-axis (profile) view of the pylorus but asks for the 'doughnut' appearance, which only exists on the transverse/short-axis view.

> The prompt specifies 'long-axis (longitudinal) view of the gastric pylorus... an ELONGATED pyloric channel... giving the classic cervix-like / doughnut appearance in profile'. In hypertrophic pyloric stenosis the target/doughnut/bull's-eye sign is the transverse section; the longitudinal section gives the cervix sign. A doughnut cannot be seen 'in profile', so the two instructions conflict and the generator may return a transverse bull's-eye instead of the elongated 17 mm channel the vignette describes (which would also collide with the intussusception target image in s2ck-0039).

**`s2ck-0051` — Community-acquired pneumonia (outpatient)** · Step 2 CK · MEDICALLY_WRONG  
Prompt asks for the right heart border to be silhouetted by a right lower lobe consolidation, which is the sign of right MIDDLE lobe disease, not RLL.

> The prompt says '...the adjacent right hemidiaphragm/heart border silhouette is partly obscured at the affected edge.' In a right lower lobe consolidation the right hemidiaphragm is obliterated while the right heart border is PRESERVED, because the RLL does not abut the right atrium; loss of the right heart border localizes disease to the right middle lobe. The vignette and mustShow both specify a right lower lobe pneumonia. The prompt should say the right hemidiaphragm is obscured and the right heart border remains sharp.

**`s2ck-0127` — Adrenal incidentaloma (benign adenoma)** · Step 2 CK · MEDICALLY_WRONG  
The prompt describes the lipid-rich adrenal adenoma as "fat-containing," which on CT is the appearance of a myelolipoma, not an adenoma.

> Prompt says "uniformly LOW attenuation (fat-containing, dark gray/near-water density)". A lipid-rich adenoma contains microscopic intracytoplasmic lipid and measures <10 HU (near water, mid/dark gray) - it does not contain macroscopic fat. Macroscopic fat density (roughly -30 to -100 HU, as dark as the surrounding retroperitoneal fat) is the hallmark of adrenal myelolipoma, a different lesion. The generator can reasonably render "fat-containing" as a fat-density mass, producing an image of the wrong entity while the question's answer (biochemical workup of a benign-appearing lipid-rich incidentaloma, <10 HU per the vignette) depends on the near-water appearance.

**`s2ck-0162` — Displaced femoral neck fracture** · Step 2 CK · MEDICALLY_WRONG  
The prompt asks for the femoral HEAD to be displaced, which invites a rendered hip dislocation - the exact appearance its own avoid list excludes.

> Prompt: "a lucent fracture line across the RIGHT femoral NECK with the femoral HEAD displaced and the femoral shaft rotated". In a displaced subcapital/femoral-neck fracture the head remains seated in the acetabulum (typically in varus/rotated) while the neck-shaft fragment displaces superiorly and externally rotates; the head itself does not leave the joint. The item's own avoid list bars "a dislocated hip with an empty acetabulum and no fracture," and this wording is the most likely way to produce it.

**`s2ck-0257` — Rheumatoid arthritis** · Step 2 CK · CONTRADICTS_VIGNETTE  
Prompt asks for ulnar drift, a late deformity, in a patient with only 4 months of symptoms and no deformity described in the vignette.

> The vignette describes 4 months of symmetric MCP/PIP synovitis, and its image bracket specifies only 'symmetric periarticular osteopenia and marginal bony erosions'; the mustShow list likewise stops at osteopenia, symmetric joint-space narrowing, marginal erosions and DIP sparing. The prompt adds '...with some early ulnar drift.' Ulnar deviation at the MCPs is a deformity of established RA measured in years, not months, so the rendered film will depict a disease stage the case explicitly does not have. It does not change the correct answer, so the image remains usable, but the physician should decide whether a hand showing ulnar drift is acceptable next to a 4-month history.

**`s3-0275` — Sigmoid volvulus** · Step 3 · WRONG_FINDING  
The sigmoid-volvulus prompt leaves the apex direction ambiguous, and the LEFT option is exactly the cecal-volvulus appearance the item's own avoid list forbids.

> The manifest prompt reads 'the loop apex pointing toward the LEFT/RIGHT upper quadrant.' In sigmoid volvulus the massively dilated inverted-U loop arises from the pelvis/left iliac fossa and its apex projects to the RIGHT upper quadrant (liver-overlap / northern-exposure signs), while a coffee-bean loop whose apex sits in the LEFT upper quadrant is the classic pattern of CECAL volvulus - which this item explicitly lists under 'avoid' and offers as distractor option C. A left-pointing apex would make the correct answer (sigmoidoscopic detorsion) radiographically wrong. NOTE: the prompt actually fired was edited to '...pointing toward the upper quadrant', dropping LEFT/RIGHT entirely - still unspecified, so the finding stands. Check the generated image: if the apex is in the LUQ, discard it.

**`s3-0314` — Multiple sclerosis** · Step 3 · GIVEAWAY  
The item asks which diagnostic test to order and the correct answer is 'MRI of the brain and spinal cord' - while the stem displays a brain MRI already performed.

> Lead: 'Which of the following is the most appropriate initial diagnostic test?' with the keyed answer being MRI of brain and cord; the anchored image is a FLAIR brain MRI showing Dawson fingers. The image is medically accurate and correctly matches the vignette, but showing the result of the very test the student is being asked to order makes the item answerable by modality-matching alone (the other four options are NCS, head CT, EEG, muscle biopsy) rather than by clinical reasoning. Usable only if the circularity is acceptable; otherwise drop the image from this item or reword the lead to a diagnosis question.

## 2. Redundant generations

Same condition, same modality, generated more than once because separate bank items
call for it. `RC_ILLUS` is keyed by question id, so **one approved image can be
registered against every id in a cluster** — review the first, reuse it for the rest.

| condition | modality | review this | reuse for |
|---|---|---|---|
| Achalasia | FLUORO | `s1-0216` | `s2ck-0253` `s3-0375` |
| Acute cholecystitis | US | `s1-0239` | `s3-0050` `s3-0187` |
| Acute epiglottitis | XR | `s2ck-0040` | `s3-0067` |
| Acute respiratory distress syndrome | XR | `s1-0113` | `s2ck-0252` |
| Acute uncomplicated diverticulitis | CT | `s2ck-0038` | `s3-0125` |
| Adhesive small-bowel obstruction | XR | `s2ck-0035` | `s3-0025` |
| Ankylosing spondylitis | XR | `s1-0184` | `s2ck-0232` `s3-0333` |
| Coarctation of the aorta | XR | `s1-0137` | `s2ck-0264` |
| Complete hydatidiform mole | US | `s1-0119` | `s3-0219` |
| Constrictive pericarditis | CT | `s1-0230` | `s2ck-0276` |
| Croup (laryngotracheobronchitis) | XR | `s2ck-0064` | `s3-0190` |
| Epidural hematoma | CT | `s1-0106` | `s2ck-0211` `s3-0324` |
| Hirschsprung disease | FLUORO | `s2ck-0265` | `s3-0406` |
| Idiopathic pulmonary fibrosis | CT | `s2ck-0178` | `s3-0332` |
| Ileocolic intussusception | US | `s2ck-0039` | `s3-0141` |
| Multiple sclerosis | MRI | `s1-0031` | `s2ck-0233` `s3-0314` |
| Ovarian torsion | US | `s2ck-0070` | `s3-0218` |
| Placenta accreta spectrum | US | `s2ck-0314` | `s3-0404` |
| Placenta previa | US | `s2ck-0093` | `s3-0068` |
| Primary sclerosing cholangitis | MRCP | `s1-0242` | `s3-0361` |
| Sarcoidosis (bilateral hilar lymphadenopathy) | XR | `s2ck-0153` | `s3-0214` |
| Sigmoid volvulus | XR | `s2ck-0086` | `s3-0275` |
| Slipped capital femoral epiphysis | XR | `s2ck-0042` | `s3-0266` |
| Zenker diverticulum | FLUORO | `s2ck-0185` | `s3-0405` |

## What this audit does and does not cover

- **It reads the prompt, not the picture.** No image was looked at — the container
  cannot reach the result CDN. A prompt that passes here can still have produced a
  bad render, and that is what the physician review is for. What this catches is the
  opposite failure: a flawless image of the wrong thing.
- **It compares against the manifest prompt.** A few prompts were edited slightly at
  fire time (mostly to remove inner quote characters). The one that matters is
  `s3-0275`, whose `LEFT/RIGHT upper quadrant` was fired as `the upper quadrant` —
  still unspecified, so the finding holds either way.
- **Sharding can split a cluster.** The audit ran as six parallel shards, so two items
  covering the same condition could land with different reviewers and be judged
  differently. The `s1-0184` ankylosing-spondylitis defect was checked against its two
  cluster siblings by hand: `s2ck-0232` and `s3-0333` carry no spine clauses and are clean.
- **ECG and pedigree items were never generated** and are out of scope: 231 manifest
  items = 198 generated + 33 deliberately excluded, with no leakage in either direction.
