# Cardiology full audit — 13 galleries, 130 pages

## `endocarditis` — 4 of 10 pages defective, 8 findings

### THE KEY OBSERVATION: pages 1–3 are CLEAN; every defect is on pages 4–7

Pages 1, 2 and 3 are the anatomy pages, and they are the ones the original audit had already
examined. They come back clean. **Every single finding is on a page that had never been looked at.**
This is direct confirmation of the coverage-gap hypothesis — the defects were not absent, the pages
were unexamined.

### p5 — labels landing on the CLINICIAN, not the patient (3 WRONG)

A clinical photograph of an examiner at the bedside:

| label | lands on |
|---|---|
| "CARDIAC EXAMINATION" | **the examiner's own white coat, over her own chest** — while her stethoscope is on the patient's precordium |
| "HEART FAILURE & PERFUSION" | **the examiner's white-coat sleeve/forearm** |
| "EMBOLIC FINDINGS" | **the blue bed sheet**, in the gap between the patient's hand and foot — no anatomy at the endpoint at all |

A new failure mode: on photographic pages, leaders land on the clinician or on furniture. Nothing in
the anatomy-page defect classes predicts this, and no automated check would find it.

### p4 — a label pointing at another box's content (1 WRONG, 2 SUSPECT)
"HEART FAILURE" lands on the dorsum of the patient's hand, on a **petechial rash** — which is
precisely what the *adjacent* "EMBOLIC OR IMMUNOLOGIC" box already lists (petechiae, splinter
haemorrhages, Janeway lesions). Suspected swap: "FEVER & CONSTITUTIONAL" lands on a cerebral
starburst lesion reading as septic embolus, while the embolic box's leader goes to the kidney.

### p6 — an arrow pointing at nothing (1 WRONG)
The TEE panel's yellow arrow lands on **black background outside the ultrasound sector**, touching no
image content, while the vegetation it presumably indicates sits in the centre of the sector.
Also B-SUSPECT: the panel is captioned "Mid-Esophageal Aortic Valve" but no aortic root or trileaflet
valve is identifiable — flagged as suspect only because it is a generated pseudo-ultrasound whose
anatomy is indistinct throughout.

### p7 — two labels naming one object (1 WRONG)
"VALVE CUSP" lands on the right-hand nodules of the **same cauliflower vegetation** that "FRIABLE
VEGETATION" points to, ~40 px below it, while a large clear expanse of pale cusp tissue sits
immediately adjacent.

### Correct negatives
Laterality verified on p2 (badges 7/8/3 viewer-left = patient's right; aortic valve in the great
vessel carrying the arch branches, pulmonic to its patient-left). p3's zoom callout correctly
encloses the AV leaflet + chordae. p8, p9, p10 all clean, including a CT arrow stopping 15 px short
of a prosthetic ring — correctly judged normal arrow convention rather than a defect.

---

## `htn` — 3 of 10 pages defective, 6 findings

### p8 — the badge-copy mechanism, and it explains both errors at once

Three arteriole histology panels (normal → hyaline → hyperplastic) share one badge layout. **The four
badges sit at nearly identical radial positions in all three panels.** That works in the normal
panel, where the lumen is wide. In the diseased panels the lumen has narrowed to a fraction of its
size **while badge 1 stayed put**, so "Endothelium" now terminates ~82–85% of the way out into the
thickened wall — among the outer media nuclei rather than on the luminal lining.

This is the production brief's **fault 1** (endpoints placed from list position rather than from the
structure's location) in a new guise: **badges copied across serial panels without re-anchoring to
anatomy that changed between them.** Worth adding to the brief, because the fix is a rule — when a
panel series shows progressive change, every badge must be re-placed per panel — not two corrections.

Badges 2, 3 and 4 land acceptably in all three panels, which is why the defect is easy to miss.

### p5 — two icons appear swapped
"**NO TALKING**" carries a glyph that is **a foot and lower leg in profile** (heel, arch, toes), and
its leader lands on the chair seat beside the patient's thigh. The neighbouring "BACK SUPPORTED /
feet flat and legs uncrossed" box carries a **chair** icon. The two look exchanged.
Secondary: that box instructs "feet flat" on a photograph **cropped at mid-calf**, so neither feet
nor floor are in frame.

### p2 — "Renal Arteries" lands on kidney parenchyma
Lower-medial cortex, well below and lateral to the hilum, while the renal artery **is drawn** on both
sides running aorta-to-hilum about 40 px superior and medial. Endpoint error, not a view problem.

### p1 — SUSPECT, low priority
"End-Organ Damage" dot sits on ghosted soft tissue over the left hip, on no organ or vessel; may be
intended as a general body pointer.

### Correct negatives
Laterality verified repeatedly (LVH on the LV free wall, viewer's right = patient's left). p7's two
**doglegged** leaders were followed through their turns and both land correctly — the trap the
original brief warns about. p10 explicitly checked for stray/unattached lines: none, and box 3
carrying no leader is deliberate.

---

## `pericarditis` — 5 of 10 pages defective, 8 findings

### p2 independently REPRODUCES the pilot's hand-verified ground truth

`HIGGSFIELD-CORRECTION-PILOT.md` used this exact page as its test case and hand-verified two defects
at 3x. An agent with no knowledge of that document has now found the same two, with pixel
coordinates:

- **"Parietal Serous Pericardium"** → the dark teal **cavity** band (x=1033; teal spans 1014–1055),
  i.e. the same structure the *Pericardial Cavity* leader names, and **8 px further inward than it**
- **"Myocardium"** → the middle of the teal cavity (x=1071); the red myocardium begins at x≈1138,
  **two bands further in**, past the navy line and the lavender visceral layer

That is a clean independent replication of a finding the physician had already confirmed by eye, and
it validates the audit method itself.

### NEW CLASS — p4: ECG arrows point at the wrong waveform component

Pericarditis's two diagnostic ECG features are **PR depression** and **diffuse ST elevation**, and
the page annotates both wrongly:

| arrow | lands on | should be |
|---|---|---|
| "PR depression" (left) | **the apex/upstroke of a T wave** | the flat P-to-QRS interval, ~one full ST-T segment to the right |
| "PR depression" (right) | **the upstroke of the next T wave** | same — both arrows point at repolarisation |
| "Diffuse ST elevation" (3rd) | the **QRS upstroke**, 11 px left of the R peak | the ST segment after the J point |

Worse, and flagged as B-SUSPECT: **the tracing's PR segment appears drawn isoelectric**, level with
the TP baseline — so the named abnormality may not be depicted anywhere in the strip. ST elevation
*is* depicted.

This is a defect class neither prior audit covers: **annotation of a waveform rather than an
anatomical structure.** Galleries with ECG, echo or pressure-tracing panels need it checked
specifically, and no anatomy-oriented rule would catch it.

### The layered-membrane series fails in both directions
- **p1** "Fibrous Pericardium" → **empty black background** lateral to the ascending aorta; nearest
  drawn structure is the aortic wall 15 px away
- **p3** "Visceral pericardium (epicardium)" → the body of the broad red **parietal** sac wall, 12 px
  further **outward** than the *Pericardial cavity* dot — anatomically inverted

**p8 is the control that proves these are real:** its effusion label correctly lands in the
translucent space between the glowing pericardial line and the outer membrane — the exact reverse of
p3's error, on the same anatomy, in the same gallery.

---

## `chf` — 4 of 10 pages defective, 9 findings

### p6 — the waveform class again, now on pressure tracings

The right-heart catheterisation panel carries **four labels but only three traces are drawn**:

- **"PA"** — no pulmonary-artery waveform was rendered at all. The yellow trace it points to has a
  sharp systolic spike falling to a low flat diastolic baseline: **that is an RV tracing** — no
  maintained diastolic pressure, no dicrotic notch. The leader lands on its diastolic baseline.
- **"RA"** — the green trace it points to has **sharp QRS-like spikes**, i.e. it is drawn as an ECG
  rhythm strip, not a right-atrial pressure waveform (no a/c/v waves).

Second instance of waveform annotation failing, and the diagnosis rests on waveform *morphology* —
dicrotic notch, a/c/v waves — which no structural check can encode.

### NEW CLASS — p7: icon glyphs that do not depict their caption

- **"Valve disease"** icon is a valve short-axis with **six cusps**. No cardiac valve has six
  (aortic/pulmonic 3, mitral 2, tricuspid 3), so it depicts no real valve. The same icon on page 3
  shows a *different* cusp count.
- **"Hypotension / shock"** icon is a blood drop containing **"O₂"** — an oxygenation symbol
  depicting hypoxia, not blood pressure. **The identical glyph on page 4 is captioned "Hypoxia"**,
  which is its correct reading. One glyph, two meanings, across pages of the same gallery.

### p1 — "Left Ventricular Dysfunction" lands on the LEFT ATRIUM
On its lateral wall at the ostium of a cut left pulmonary vein, while the LV free wall — where the
other three dots sit — is the large lower-right muscular mass.

### p2 — three SUSPECT, one worth the physician's eye
The **LAD** badge sits ~30 px lateral to the drawn anterior interventricular artery, closer to the
circumflex course, while its caption reads "anterior wall and interventricular septum" — which lie
medial. The agent noted the honest ambiguity: all three coronary badges sit on bare myocardium rather
than on a drawn vessel, so they may be **territory** markers; on that reading LCx and RCA are
defensible and the LAD one still is not.

### Correct negatives — carefully done
The CXR "L" marker verified against apex and gastric bubble; echo LV/LA orientation verified for an
apical view; the 6-lead ECG checked with **aVR predominantly negative and II/aVF/aVL positive**, all
six lead labels correctly paired. Pages 3, 5, 9, 10 use captions directly beneath their own
thumbnails and carry no leaders at all — the immune pattern again.

---

## `cardiomyopathy` — 6 of 10 pages defective, 10 findings — WORST RATE, AND NEVER EXAMINED

This gallery had **never been looked at by any prior audit**, and it has the highest defect rate in
cardiology so far. That is the coverage-gap argument in one gallery.

### p1 — callouts contradict the page's own captions
The figure is three vertical phenotype slabs, captioned along the bottom **DILATED | HYPERTROPHIC |
RESTRICTIVE**. Both the "DILATED" and "HYPERTROPHIC" callouts land **inside the RESTRICTIVE slab** —
on a great vein and on an atrial-appendage bulge respectively, neither of which is a ventricular
wall. A fourth callout, "ARRHYTHMOGENIC", has **no slab to land on at all** (only three are drawn)
and points at the LV free wall, while ACM is classically RV.

### p10 — two captions on the same undifferentiated drawing
"HYPERTROPHIC" and "RESTRICTIVE" caption two **intact external** 3D hearts. Wall thickness and cavity
size cannot be shown on an unopened heart, and the two figures are essentially identical — no
distinguishing feature could be found. **The DILATED figure beside them IS cut open and does show a
large cavity**, which proves the artist had the option and did not take it here.

### p7 — waveform class, third instance
"Ventricular Ectopy" captions a rhythm strip containing **no ectopic beat**. At 7x it is three
identical narrow QRS complexes, each preceded by a P wave, at regular intervals. **The same artist
drew a recognisable wide premature beat on page 3's ectopy inset**, so this is not a stylistic limit.

### p8 — the text and the figure disagree
"Take a **three-generation** pedigree" sits beside a pedigree drawing **two** generations (one couple,
seven offspring).

### p4 — "SMALL LV CAVITY" on solid myocardium
Deep inside the septal mass, on the **opposite side of the septum** from the LV, while the LV cavity
is drawn clearly between the septum and the orange-rimmed lateral wall.

### p3 — SUSPECT, with the artwork itself at fault
"Dilated LV" appears to point at the **RV**: a branched blue vessel enters that side from above, the
IVC from below, and red pulmonary veins enter the atrium on the *other* side, whose ventricle is
visibly thicker-walled. Held at SUSPECT for an honest reason — **the figure's internal anatomy is
incoherent**, with chordae from two separate AV valves descending into one giant cavity, so the
artwork may not encode a consistent laterality at all.

---

## `cardiac-arrest` — 4 of 10 pages defective, 8 findings

### p8 — the transmural gradient labelled at the wrong end of itself
"**Subendocardium (most vulnerable)**" lands on the **outer third** of the LV short-axis wall,
immediately deep to the pale epicardial rim — subepicardial myocardium. The subendocardium is the
innermost layer bordering the cavity, ~75–80% of the wall thickness further in.

**The transmural gradient is the panel's entire teaching point, and the label points at the wrong end
of it.** As drawn, *Epicardium*, *Midwall* and *Subendocardium* all resolve to essentially the same
radial depth at the outer rim.

### p3 — a leader crossing the whole thorax
"**Vertebral artery**" doglegs down and right across the entire chest to a dot on the **ascending
aorta at the cardiac base**, ~90 px from the cervical course it names. Flagged additionally as
B-SUSPECT: no vertebral artery could be identified drawn anywhere in the ghosted neck, so there may
be no correct endpoint available at all — held as suspect only because the ghosting is dense.

### p4 — STRAY
A small white arrowhead on the patient's shoulder, pointing toward the neck, with **no label, box or
leader attached**. Confirmed not to be the tail of either callout. Second stray of the project, after
the one removed from `aortic-dissection` p1 today.

### p2 — "5 Diaphragm" lands on left lung parenchyma
The red-orange diaphragmatic dome is drawn clearly, its upper edge ~45 px below the arrowhead.

---

# CROSS-CUTTING: layered structures get all their labels at ONE depth — 5 instances

This is the single most repeated mechanism in cardiology, and it is the production brief's **fault 1**
in its purest form:

| page | the layers | what happened |
|---|---|---|
| `aortic-dissection` 1 | Intima / Media / Adventitia | all three at the same radial depth *(already in the brief)* |
| `pericarditis` 2 | Parietal serous / Myocardium | both land in the teal cavity band |
| `pericarditis` 3 | Visceral / Parietal | inverted — visceral lands outboard of the cavity |
| `cardiac-arrest` 8 | Epicardium / Midwall / Subendocardium | all three at the outer rim |
| `htn` 8 | 4 badges × 3 arteriole panels | badge radius copied while the lumen narrowed |

Five instances across four galleries. **The fix is one rule, not five corrections:** when a figure
teaches a layered or graded structure, each label must be anchored to its own band, and on a series
of panels re-anchored per panel. Every one of these pages teaches *depth* as its content, which is
what makes this class disproportionately damaging.

---

## `aortic-stenosis` — 6 of 10 pages defective, 13 findings

### p7 — the teaching is INVERTED, which is worse than the label being wrong

"**Wide central opening**" is a bullet on the **Normal** gross valve specimen — but that specimen is
rendered in the **CLOSED** position, all three cusps coapting along a Y. There is no orifice anywhere
in the panel.

**The consequence is the real finding:** the two *diseased* specimens beside it ARE rendered open. So
on this page **the normal valve appears to have the smallest opening of the three**, exactly
reversing what the bullets state. A reader taking the visual at face value learns the opposite of the
lesson.

### NEW SUB-CLASS — p6: quantitative scale and axis errors on a Doppler trace

Beyond arrow placement, the *numbers* are wrong:

- **The "0" tick is ~1.2 m/s below the trace's own zero baseline.** Read against its own baseline the
  envelope is ≈**4.1 m/s** — which matches the severe-AS threshold quoted elsewhere on the same page.
  Read against the printed axis it is ≈**5.3 m/s**. The axis is miscalibrated against its own trace.
- "**Peak Velocity**" reference line sits at ≈5.8 m/s while the envelope tops at ≈5.3 — a visible band
  of blank background separates the line from the trace it marks.
- "**Mean Gradient**" is a bare dot on blank background. Mean gradient is a **pressure (mmHg)** and
  this display carries no mmHg scale at all — so it labels a quantity the figure cannot express.
  Also logged as a STRAY, since unlike the Peak Velocity dot it terminates no drawn line.

A trainee reading a velocity off a miscalibrated axis carries away a wrong number, not a wrong
picture. Worth calling out separately to production.

Same page, B-SUSPECT: the stated **parasternal long-axis** sector contains no resolvable LA, mitral
valve, septum or parallel aortic-root walls, and the only vessel-like feature is a **round** anechoic
circle — a short-axis appearance inside a stated long-axis view. The agent recommended the whole
sector be re-read rather than picking off individual labels.

### The same defect twice in one gallery
"**Narrowed Valve Orifice**" (p1) and "**Narrowed central orifice**" (p4) **both land on a calcified
cusp** rather than the opening between cusps, ~50–60 px off in each case. One error, made twice,
which makes it a template habit rather than a slip.

### p2 — "Pulmonary Trunk" lands on the IVC
The leader ends on the blue vessel descending out of the bottom of the figure behind the right
atrium. The agent's read on the mechanism: SVC, IVC and pulmonary trunk are all blue and vertical in
this rendering.

### Correct negatives
p8's Fibrosa / Spongiosa / Ventricularis brackets were checked and **track the real tissue clefts** —
the layered-structure class does NOT appear there. p9's TAVR sequence verified in correct order; p10's
stent-valve vs surgical bioprosthesis verified against the heading order.

---

## `acs` — 2 of 10 pages defective, 3 findings

### ⚠ THIS CORRECTS THE PRODUCTION BRIEF, WHICH IS STILL UNSENT

`PRODUCTION-BRIEF-leader-lines.md` currently states:

> "`acs` pages 1 and 2 are **fully clean**, and they are built differently: numbered circles placed
> directly on the 3D render... Where a page can use on-figure numbered markers instead, please do —
> **it removes the whole class of defect** rather than correcting instances of it."

**`acs` page 2 is not clean.** Its "**Diagonal Branch**" badge sits on a branch that forks off the
**left circumflex** just distal to the left main bifurcation — an obtuse marginal or ramus
intermedius. The agent traced it three times at 8–12x on a red-minus-green vessel-isolation map: the
badge-3 vessel **never contacts the LAD**, staying 50–90 px to its right at every level. A companion
SUSPECT suggests badges 3 and 5 may simply be interchanged.

**The recommendation is still right, but the claim behind it is too strong and must be softened
before the brief goes out.** On-figure badges remove *leaders travelling across empty space* — the
fan-of-leaders fault. They do **not** prevent a badge from being placed on the wrong structure,
because that is an identification error, not a routing error. Sending it as written invites
production to treat badges as a complete fix and to stop checking placement.

Suggested wording: badges remove the routing class; **each badge's position must still be verified
against the structure it names.**

### p6 — a magnifier ring enclosing nothing
The callout ring on the anterior heart contains, at 16x, **no vessel at all** — only myocardial
surface texture, with the nearest coronary branch ~30 px to its left. The inset it feeds shows an
atherosclerotic plaque *inside a coronary artery*, so the ring should enclose a coronary segment.
(Contrast p3, where the equivalent ring correctly encircles the anterior descending vessel just
proximal to the infarct territory — same gallery, same device, done right.)

### Correct negatives
p1's four coronary badges each verified against the drawn topology. p7's six gross short-axis
specimens each checked against their own caption (mottling, yellow-tan centre, hyperemic border,
grey-white scar). p9's algorithm arrows verified to converge correctly from both the STEMI and
NSTE-ACS arms.

---

## `hyperlipidemia` — 8 of 10 pages defective, 26 findings — WORST GALLERY

### p5 is the worst single page in the entire project: 9 findings

Its panel 3 figure is **a heart sitting directly on two lower limbs** — no head, no neck, no abdomen —
and it carries a physical-examination checklist:

| label | the figure contains | leader lands on |
|---|---|---|
| "Assess **carotid** upstrokes and bruits" | no head, no neck | the right border of the heart |
| "Inspect for **corneal arcus**" | no head, no eye | **the foot / toes** |
| "Evaluate peripheral pulses (dorsalis pedis, **posterior tibial**)" | ankles ARE drawn | the proximal thigh |
| "Look for **abdominal** or femoral bruits" | no abdominal aorta drawn | a dogleg to the distal lower leg |

And its panel 2, on a whole-body figure that *does* have a head:

- "**Central adiposity**" → a dot in **blank background beside the head**, not touching the figure
- "**Hypertension**" → an arrowhead on the patient's **ear**
- "**Xanthelasma** (diagonal folds at medial eyelids)" → the patient's **shoulder**
- the **eyelid photograph's own tether** → the patient's **mid-upper arm**

Essentially every pointer on the page is wrong. This is not a slip; the page needs rebuilding.

### A normal clinical image captioned as pathology — second instance of the `sci` p1 class

"**LIPEMIA RETINALIS** — creamy, white discoloration of retinal vessels" captions a **normal fundus
photograph**: dark red arterioles and venules, normal disc, normal orange background. In lipemia
retinalis the vessels are salmon to creamy-white against a pale fundus. **Nothing in the image is
creamy or white.** The same photograph is reused on pages 4 *and* 5, so the defect ships twice.

Together with `sci` p1's two axial brain MRIs, this is now a class: **a real clinical image that does
not contain the finding it is captioned with.** Structurally invisible — the image is real, the
caption is prose, and only someone who knows the finding can see the mismatch.

### p6 — a brachial pressure measured on a foot
"**Brachial SBP 140 mmHg**" labels an image containing **only a foot and ankle with a cuff**. No arm
anywhere in the panel; the leader lands on a curved line over the dorsum of the foot. (The paired
ankle measurement is correct, and the stated ABI of 0.86 is arithmetically consistent with 120/140 —
so the *numbers* work while the *figure* cannot support one of them.)

### p8 — the layered-structure fault, now in histology, with the mechanism named
The "**Internal Elastic Lamina**" bracket spans a thick band of deep-pink tissue full of spindle-shaped
smooth-muscle nuclei — that is **media**. The IEL is a single thin wavy line at the intima-media
junction just above the bracket's top edge.

The agent identified *why*: **the four brackets divide the image into roughly equal contiguous
slices**, and the bracket given to a one-cell-thick lamina is *taller* than the one given to the
media. They were laid out **geometrically rather than fitted to the tissue** — the same fault as
`cardiac-arrest` p8 and `htn` p8, now a sixth instance.

### p3 — two labels swapped on the same particle
"**ApoB-100**" lands on a kringle bead of the apo(a) chain; "**Apo(a)**" lands on the lipid particle
body. Each is on the other's structure. Plus a **STRAY** arrow in panel 1 that begins and ends in
blank background.

### p1 / p2 — colour-key mismatches, the class first seen on `pe` p2
- The legend's **ApoB** purple rod swatch is drawn on the **HDL** particle, which carries no ApoB
  (its own caption says ApoA-I)
- The legend defines **triglyceride** and **cholesterol ester** as two distinct core colours, but all
  four particle cores render as the same intermediate amber — and the small residual difference **runs
  the wrong way** against the table beneath, which asserts chylomicron/VLDL are TG-rich and LDL CE-rich

---

## `dvt` — 7 of 10 pages defective, 27 findings

### NEW CLASS — the LABEL SET is richer than the ARTWORK

The deep venous system is drawn as **a single axial trunk**, while the label list names five or six
distinct veins. So several labels are forced onto one vessel at different heights:

| page | labels sharing one drawn vessel |
|---|---|
| p1 | "Common femoral", "Deep femoral", "Popliteal" — three labels, one trunk. **No profunda femoris is drawn anywhere on the limb.** |
| p2 | same trunk labelled Common femoral (y=347), Deep femoral (y=416), Femoral (y=528) |
| p2 | "Gastrocnemius veins" lands on the same trunk as "Tibial veins", 58 px apart; no muscular veins drawn |
| p4 | "Posterior tibial", "Peroneal" and "Gastrocnemius" all resolve onto one bundle |
| p6 | "Common femoral (groin)" and "Femoral (thigh)" **dogleg into the same dot** |

**No leader correction can fix this.** There is no right endpoint to move the label to — the vessel
was never drawn. It requires the artwork to be redrawn with the vessels the labels name. This is
distinct from every class found so far and needs saying plainly to production, or they will "fix"
it by nudging leaders onto a trunk that still is not the profunda.

### Labels naming anatomy outside the figure's CROP — a view-mismatch variant
- **p6** — "Common femoral vein (**groin**)", "Femoral vein (**thigh**)" and "Popliteal vein (**behind
  knee**)" on a figure cropped to **upper calf downward**. None of that anatomy is in frame.
- **p7** — "Iliac veins (**pelvic**)" on a figure cropped at **mid-thigh**.
- **p5** — "Palpate **popliteal fossa**" on an **anterolateral** photograph showing the front of the
  knee; the popliteal fossa is posterior. Dot lands on lateral knee skin.

### p6 — the diagnostic test itself is not depicted
"NORMAL VEIN (**COMPRESSIBLE**) — complete compression obliterates the lumen" captions an image
showing a **widely patent, fully anechoic lumen**. No collapsed vein with apposed walls appears
anywhere on the page. As drawn, the two panels contrast **anechoic blood vs echogenic thrombus**, not
compressed vs non-compressed.

Compression ultrasound is *the* diagnostic test for DVT, and the page's figure does not demonstrate
compression at all. (The right-hand panel, "vein remains open with compression", is correct — so the
pair teaches only half of its own comparison.)

### p2 — the valve inset shows only one state
"**Valve closed (prevents backflow)**" has nothing to land on: all three valve pairs are rendered in
one identical configuration, each with an antegrade flow arrow through it. Also on that inset,
"Lumen / central channel" lands at r≈43 of a 50 px radius — **inside the media band**, not the lumen
(r<33). The layered-structure fault again, on a vessel cross-section.

### p7 — STRAY, and a systematic offset
A round white dot identical in size and colour to the leader terminals sits **on** the thigh vein with
no leader attached. Separately, the label set shows a **uniform 8–12 px lateral offset** (~18% of limb
width) — flagged as suspect rather than wrong precisely *because* it is uniform, which may make it a
placement convention rather than a set of errors.

---

## `pad` — 5 of 10 pages defective, 16 findings

### p2 — the "PLANTAR FOOT" panel is drawn from the DORSAL aspect

Measured, not eyeballed: mask **IoU 0.635 same-orientation vs 0.469 vertically flipped** against the
dorsal panel, with the hallux at image-top in both. The panel captioned *PLANTAR FOOT • RIGHT* is the
same aspect as the dorsal one. For a right foot with toes to the image right, a true plantar view puts
medial **down**, so the repeated "MEDIAL ↑ ↓ LATERAL" key is inverted.

**And the leaders are all internally consistent with the key as printed** — PT at the ankle before its
division, medial plantar on the medial vessel, lateral plantar on the lateral, deep plantar arch on
the crossing limb. So **the defect is the view and the key, not the leaders.** Correcting the leaders
would be correcting the one part that is right.

#### This is why both audits were needed
The view-mismatch sweep passed `pad` p2 as clean and *specifically* checked it for the `hip-fracture`
p5 defect, correctly noting that dorsalis pedis appears only on the dorsal panel and the plantar
vessels only on the "plantar" one. That check was right **given the stated key**. It could not catch
that the panel is not drawn from the aspect it claims. Neither audit alone was sufficient here.

### p2 — a trunk that never divides
"**Tibiofibular trunk**" lands on the popliteal's straight continuation, which **in this drawing never
bifurcates** — it runs on unbranched as the vessel marked *Fibular artery*. The vessel that **does**
divide (widening 8→17 px and splitting into the marked AT and PT) arises ~8 px proximal and **carries
no label**. As drawn and labelled, the popliteal gives fibular + (AT & PT together), which
**contradicts this page's own AT A GLANCE text.**

### p2 — artwork and label disagreeing in opposite directions
The "Deep femoral artery" bead sits on bare tissue 6 px lateral to the SFA (row scan: vessels only at
x=329–332 and x=349–351). Separately, the profunda is **drawn medial** to the SFA on a right-limb
view, where a coronal projection puts it lateral. The agent's framing is the right one: **the artwork
and the bead are wrong in opposite directions, so production must be told which one is being
corrected**, or they will move the bead onto a vessel that is itself misplaced.

### p6 — two labels swapped, traced from their stubs
"**RESIDUAL LUMEN**" lands on the salmon intimal plaque beside the foam-cell circles; "**FOAM-CELL
SHOULDER**" lands **inside the dark residual lumen**. Traced from their label stubs at x≈602.5 and
x≈623.75, which diverge left and right respectively — each is on the other's structure.

### p3 / p5 — beads off their target entirely
"INTACT FIBROUS CAP" lands **in the lumen among the red cells**, putting two beads inside the same
blood column. "DEPENDENT RUBOR" lands on **panel background** — 14 px lateral to the skin edge, with
pure background sampled either side of the marker.

### The waveform class is NOT universal — p8 is a clean control
Every Doppler label on p8 verified correct: **BRIEF REVERSE** sits under the below-baseline trough of
the multiphasic tracing, the monophasic tracing does not cross its baseline, and both ZERO-FLOW
BASELINE labels sit on their grey lines. So waveform annotation *can* be done right in this
production line, which strengthens rather than weakens the `pericarditis` p4 and `chf` p6 findings.

---

## `aortic-dissection` — 9 of 10 pages defective, 41 findings — WORST GALLERY IN CARDIOLOGY

### ⚠ p1 still carries a second stray dot — AFTER today's v89 deploy

The audit found **seven dots for six labels**: a second white dot sits on the right atrial appendage
**mid-way along the "Aortic root" leader**, which then continues past it and terminates correctly at
the root.

**Verified against git — it is PRE-EXISTING, not caused by today's correction.** The pre-v89 blob
(`beb5531`) carries 16 bright neutral pixels at that location; the shipped v89 file carries 13, a
difference explained entirely by JPEG re-encoding. Neither my clone-fill (which touched only
480–511 × 403–417) nor the Aug 6 arch redraw created it.

**But the honest consequence stands: page 1 was corrected, approved and deployed today, and it still
has a defect — one that I did not find and the physician did not see.** Two people looked at that
page closely and both missed a second stray dot 100 px from the one we removed. Fixing the defect you
were shown is not the same as auditing the page.

### p2 — the brief's FAULT 2 confirmed exactly, with the mechanism visible
- "**Brachiocephalic trunk**" → the **second** arch branch. The first branch is broad, runs to the
  patient's right and **visibly bifurcates** — that is the brachiocephalic, and it carries no label.
- "**Left common carotid**" → the **third** branch, the same vessel "Left subclavian" hits 18 px lower.

That is the off-by-one zip the production brief already describes, now confirmed at pixel level with
the unlabelled true brachiocephalic identified.

Badge ② "Aortic arch" lands on the straight **descending** limb 30 px below where the arch curve
ends; in the schematic panel the ② bracket **never overlaps the arch at any point** while bracket ①
swallows the whole arch curve.

### p10 — annotations apparently copied between panels
- "**Intimal flap**" lands on **black lung parenchyma** in the right lung — in **both** the Type A and
  Type B panels, at essentially the same image position. Verified at 18x.
- In the Type A panel, "True lumen" and "False lumen" land in the **posterior-lateral mediastinum**,
  the descending-aorta region — **at the same coordinates the equivalent arrows use in the Type B
  panel beside it**, while the ascending aorta that the caption names carries neither tint nor flap.

The Type A annotations look copied from the Type B panel without re-anchoring — the same
copy-without-re-anchor mechanism as `htn` p8's badges.

### p6 — both lumens lettered "FL"
On a panel **titled "TRUE & FALSE LUMEN"**, both shaded regions are lettered **FL** (red and blue) and
**no "TL" appears anywhere**. Verified at 22x: the red glyph is F, not T.

### p5 — RIGHT and LEFT ARM swapped on a POSTERIOR view
The panel is specifically about **inter-arm blood-pressure difference**, which is a cardinal sign of
aortic dissection. In a posterior view the patient's right is on the viewer's right; both labels are
on the wrong cuff. Also: badge ⑤ floats with **no leader at all**, and the ①–⑥ badges have **no legend
anywhere on the page**.

### p7 — the classification boundary contradicts its own caption
The TYPE A / TYPE B demarcation sits at y≈322, on the proximal-mid **descending** aorta, while the
left subclavian arises at y≈235. So the "TYPE A" zone includes ~85 px of aorta distal to the left
subclavian — against the panel's own caption, "TYPE B (DISTAL): Distal to left subclavian".

### True/false lumen labelled into the SAME compartment — four times
p1, p3, p8 and p10 all place the true-lumen and false-lumen labels in **one compartment**, leaving the
other unlabelled. Plus the layered-structure fault twice more: p2 panel 4 (all three layer dots in one
band) and p3 panel 2 (Intima, Media, Adventitia all at r≈42–43, differing only in angle).

---

# CARDIOLOGY TOTALS — all 13 galleries, 130 pages

| gallery | pages defective | findings |
|---|---|---|
| `aortic-dissection` | 9/10 | 41 |
| `dvt` | 7/10 | 27 |
| `hyperlipidemia` | 8/10 | 26 |
| `pad` | 5/10 | 16 |
| `aortic-stenosis` | 6/10 | 13 |
| `cardiomyopathy` | 6/10 | 10 |
| `chf` | 4/10 | 9 |
| `endocarditis` | 4/10 | 8 |
| `pericarditis` | 5/10 | 8 |
| `cardiac-arrest` | 4/10 | 8 |
| `htn` | 3/10 | 6 |
| `acs` | 2/10 | 3 |
| `afib` | 1/10 | 1 |
| **TOTAL** | **64/130 (49%)** | **176** |

Before this pass, **17 of these 130 pages had ever been examined**, and `cardiomyopathy` never at all.

## The defect classes, and why organising by class matters

Each class is **one instruction** to production rather than dozens of corrections:

1. **Layered / graded structures labelled at one depth** — 8 instances (`aortic-dissection` p2 p3,
   `pericarditis` p2 p3, `cardiac-arrest` p8, `htn` p8, `hyperlipidemia` p8, `dvt` p2). Every one of
   these pages teaches *depth* as its content.
2. **Copy without re-anchoring** across a panel series — `htn` p8 badges, `aortic-dissection` p10
   annotations. Layout copied while the anatomy beneath it changed.
3. **The label set is richer than the artwork** — `dvt`'s single venous trunk carrying five named
   veins. **No leader correction is possible**; the vessels must be drawn.
4. **Intraluminal structures on intact serosal views** — needs a cutaway, not a moved leader.
5. **Labels naming anatomy outside the crop** — `dvt` p6 p7, `hyperlipidemia` p5 p6.
6. **Waveform and scale annotation** — `pericarditis` p4 (PR arrows on T waves), `chf` p6 (PA label on
   an RV tracing), `aortic-stenosis` p6 (axis miscalibrated against its own trace),
   `cardiomyopathy` p7 (ectopy caption on a strip with no ectopic beat). `pad` p8 proves it can be
   done right.
7. **A real clinical image that does not contain its caption's finding** — `hyperlipidemia`'s normal
   fundus captioned *lipemia retinalis* (shipped twice), `sci` p1's brain MRIs as cord pathology.
   Structurally invisible; only a clinician can see it.
8. **Swapped pairs** — `pad` p6, `hyperlipidemia` p3, `aortic-dissection` p5, `htn` p5 icons.
9. **Strays** — `aortic-dissection` p1 p6 p8, `cardiac-arrest` p4, `dvt` p7, `hyperlipidemia` p3.

## Two corrections to our own documents

- **`PRODUCTION-BRIEF-leader-lines.md` overstates the badge recommendation.** It cites `acs` p1–p2 as
  "fully clean" and says on-figure badges "remove the whole class of defect". `acs` p2's Diagonal
  Branch badge sits on a **circumflex** branch. Badges remove the *routing* class; they do not
  prevent misidentification. **Soften before sending.**
- **`aortic-dissection` p1 still has a stray dot after today's v89 deploy** — pre-existing, verified
  against git, but missed by both the physician and me while we were looking at that exact page.

## Standing caveat
Every line here is a **candidate**. Agents were instructed to report SUSPECT rather than guess, and a
substantial number did. Nothing goes to production as confirmed without Dr. Kreithen's read.
