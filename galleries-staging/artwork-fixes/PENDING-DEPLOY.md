# Corrected artwork — SHIPPED as v93, 2026-08-10

> **All twelve panels below are LIVE.** Deployed together as
> `v93-CARDIOLOGY-LEADER-CORRECTIONS-12-PANELS` (app repo `c7751cf`), on the physician's approval.
> The per-entry "awaiting Dr. Kreithen" lines are the state at the time each was staged; they were
> approved as a batch.
>
> Verified before the push: `verify_sw.js` passed, `verify_gallery_pdfs.py` found no drift across
> 80 pages in the eight rebuilt galleries, and a headless boot on the shipped bytes loaded 183
> conditions with 10/10 thumbs in all eight galleries and zero page errors. Verified after: every
> one of the twelve pages, `version.txt` and the `sw.js` `CACHE` string read back byte-correct from
> `origin/main`.
>
> **One thing this deploy changed beyond the pages:** each gallery PDF was rebuilt at the quality
> that reproduces **its own existing PDF size**, not the script's default 82. Rebuilding
> `pericarditis` at 82 would have shrunk its PDF 14% — degrading the nine pages that did not change
> in order to fix the one that did. `scripts/rebuild_gallery_pdf.py` now takes `RC_PDF_Q` for this,
> and the qualities used were: aortic-dissection 82, chf 70, pericarditis 88, htn 79,
> cardiomyopathy 71, cardiac-arrest 82, endocarditis 88, aortic-stenosis 79.

Kept below as the record of what each fix was and why.

## 1. `aortic-dissection` page 1 — second orphan dot

| | |
|---|---|
| file | `aortic-dissection-01-PENDING-v2-page.png` (+ .jpg, + panel crop) |
| supersedes | the v89 page currently live |
| diff vs live | **(363,302)–(388,315) = 25×13 px**; everything else byte-identical |
| orphan dot (374,308) | 32 → 12 bright px — residual is the reinstated leader line passing through |
| terminal dot (402,304) | 18 → **18, untouched** |
| approved | yes, 2026-08-10 |

**What it fixes.** The "Aortic root" leader carried **two** dots — seven dots on the page for six
labels. The rightmost (402,304) is the real terminus on the aortic root; the one at (374,308) sat
mid-line on the right atrial appendage, attached to nothing. A reader tracing the leader hit the
first dot and read "aortic root" as the atrial appendage.

**Pre-existing, not introduced by us** — verified against the pre-v89 blob (`beb5531`), which carries
16 bright pixels there against the shipped file's 13, a difference explained entirely by JPEG
re-encoding.

**Method.** Harder than the v89 stray, which was a dead-end stub that could be erased wholesale.
This dot straddles a **live leader that has to survive**, so: clone-fill the bulge from tissue 16 px
below (clear of both dot and line), then redraw the 1 px stroke across the gap, supersampled 4×,
matching measured brightness (~160) and the line's real slope (y=309 at x=360 → y=306 at x=394).

### Deploy sequence when the batch ships
1. copy the PNG over `aortic-dissection-upload/assets/aortic-dissection/aortic-dissection-01.jpg`
   at **q92** (matches the v89 encode)
2. regenerate `gthumbs/aortic-dissection-01.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> aortic-dissection` — the PDF is a build artifact
   and drifts otherwise
4. `python3 scripts/verify_gallery_pdfs.py <root> aortic-dissection`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**The page stays 915×1373**, not the 1024×1536 standard. A production re-render from source would fix
the size, this dot and the other 41 `aortic-dissection` findings in one pass — this local fix is a
stopgap for a live defect, not a substitute for that.

---

## 2. `chf` page 1 — "Left Ventricular Dysfunction" pointed at the left atrium

| | |
|---|---|
| file | `chf-01-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/heart-failure/hf-01.jpg`, 1138×1707 |
| moved | dot **(758,422) → (768,730)**; leader redrawn from its elbow at (878,260) |
| diff vs live | **(742,256)–(884,738)**; **0 pixels differ outside** that window |
| other four dots | (782,551) (814,656) (802,809) (731,921) — position **and blob area byte-identical** |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The dot sat in the gap between the left atrial appendage and a cut left pulmonary
vein — atrium and venous inflow, not ventricle. The new endpoint is on the **left ventricular free
wall, well lateral to the anterior interventricular groove**, so it is unambiguously LV and not
septum or RV.

**Why it lands there and not closer.** The four other dots run down the LV border in a fan from the
label column, and the label order does not match the anatomy order — every straight route from the
"Left Ventricular Dysfunction" label to LV muscle either passes within a dot's radius of the
"Pulmonary Congestion" or "Ventricular Remodeling" marker, or ends on the interventricular groove.
The chosen endpoint clears both markers by ~28 px and sits 81 px from the nearest dot. It **crosses
the Pulmonary Congestion leader once**, at (820,507) over dark background; that crossing is
unavoidable given the label ordering and is the reason the position was chosen by search rather than
by eye.

**Method.** Two different erases, because one does not work over both backgrounds:
- over the dark gap, interpolate the clean pixels 9 px either side of the stroke;
- where the leader crosses the **pulmonary vein wall** (y 370–412), that fails — the wall's banding
  and specular rim run *horizontally*, so a perpendicular interpolation smears the rim. There the
  stroke is replaced by the mean of the pixels 10 px left and right **on the same row**, which
  preserves the banding. 16 px and 22 px offsets were tried and both duplicated the rim; 10 px is
  clean at 6×.
- the dot itself is clone-filled from 24 px to the right, an offset chosen by ring statistics over
  nine candidates (dest mean 34.3 / σ 27.8 vs donor 35.6 / σ 30.4 — the next best was 3× worse).

**The new marker matches the page's own dots**: 61 bright px against the existing five at 50–67.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/heart-failure/hf-01.jpg` at **q82, subsampling 2** — that is the
   original file's exact quantization table and chroma sampling, verified, not guessed
2. regenerate `assets/heart-failure/thumb-01.jpg` at 320×480 q82 (this gallery uses a **local**
   `thumb-NN.jpg`, not `gthumbs/`)
3. `python3 scripts/rebuild_gallery_pdf.py <root> chf`
4. `python3 scripts/verify_gallery_pdfs.py <root> chf`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

---

## 3. `pericarditis` page 3 — "Visceral pericardium" sat outboard of the cavity

| | |
|---|---|
| file | `pericarditis-03-FIXED-page.png` (+ `.jpg` at q88/4:2:0, the original's own encode) |
| target | `assets/pericarditis/pericarditis-03.jpg`, 1280×1920 |
| moved | dot **(898.3,728) → (861,756)**, extended along the leader's own −37° so the line does not change direction |
| diff vs live | **(854,715)–(913,763)**, 59×48 px; **0 pixels differ outside** |
| other two dots | (887.8,475.6) and (886.6,587.7) — position **and blob area unchanged** |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** "Visceral pericardium (epicardium — inflamed)" ended at the **outer margin of the
pericardial cavity, on the boundary with the inflamed parietal band** — i.e. radially *outside* the
"Pericardial cavity" dot above it, which inverts the layer order the page is teaching. It now lands
on the pale epicardial streak lying directly on the myocardium.

### The panel has THREE zones, not two — and reading it as two made a correct dot look wrong

Between muscle and background, at the dot's own row, the artwork draws:

| zone | at y=756 | what it is |
|---|---|---|
| myocardium | x < 855 | heart muscle, coronary vessels |
| pale streak | 855–864 | **visceral pericardium / epicardium** |
| darker translucent zone | 865–896 | **pericardial cavity** |
| bright red band | 897–927 | **inflamed parietal pericardium** |

A first pass here read the pale streak as the cavity and the darker zone as part of the red band, and
on that reading the **Pericardial cavity** dot at (886.6,587.7) looks wrong too — it sits in the
darker zone. It is **correct** and was left alone. The tell is a row profile rather than a zoom: the
darker zone reads R≈83–122 against the red band's R≈188–247, so it is a distinct third layer, not the
shadowed edge of the red one. `p8`, whose effusion label is a known-good control, resolves it the
same way — its dot sits in exactly this translucent zone.

**Rule for the rest of this gallery: count the zones off a row profile before deciding any leader in a
layered panel is wrong.** Two of the three labels here would have been "corrected" into error.

**Method.** Only the dot is erased — clone-filled from 7 px left / 28 px down, an offset that follows
the local band gradient (the layers run diagonally here, so a straight vertical clone shears them);
the surviving leader is then extended over the gap and a new dot drawn 4.2 px, supersampled 4×. The
shipped dot measures 53 bright px against the page's other two at 47 and 64.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/pericarditis/pericarditis-03.jpg` at **q88, subsampling 2** — matches the
   original's quantization table exactly, and is the same encode v92 used for page 2
2. regenerate `assets/pericarditis/thumb-03.jpg` at 320×480 q82 (local thumbs, not `gthumbs/`)
3. `python3 scripts/rebuild_gallery_pdf.py <root> pericarditis` — **at q88**; the default q82 shrinks
   this gallery's PDF 14% and degrades the nine pages that did not change
4. `python3 scripts/verify_gallery_pdfs.py <root> pericarditis`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**Batches with the v92 page-2 fix** — same gallery, so one PDF rebuild covers both.

---

## 4. `htn` page 2 — "Renal Arteries" landed on kidney parenchyma

| | |
|---|---|
| file | `htn-02-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/htn/htn-02.jpg`, 1137×1705 |
| moved | dot **(639.9,747.3) → (615,717)**, onto the drawn renal artery between aorta and hilum |
| diff vs live | **(607,709)–(750,763)**; the horizontal run right of x=745 is untouched |
| other five dots | unchanged in position and blob area |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The dot sat on the lower-mid renal cortex, well below and lateral to the hilum,
while the renal artery **is drawn** on both sides running aorta-to-hilum about 40 px superomedial. The
new endpoint is on the artery's mid-course, 26 px lateral to the aortic border, so it cannot be read
as the aorta either.

**An elbow, not a re-angled leader — and the reason is measurable.** The original leader is one
horizontal run from the label at x=852 to the dot. Re-angling the whole run means erasing all 210 px
of it, and the right two-thirds crosses the body outline and the intercostal vessels **diagonally**. A
per-column fill replaces those diagonals with vertical extrapolations: at 12× it is an obvious band of
vertical streaking, and the two-point interpolation it replaced left a dark seam instead. So the
horizontal segment is **kept** back to an elbow at x=745 and only the 105 px stub left of it is
erased — that stretch crosses kidney parenchyma, a near-vertical kidney border and flat background,
all of which a per-column fill reconstructs cleanly. Elbowed leaders are already this page's idiom
(Aortic Arch, Common Carotid).

**The leader carries a dark halo**, one pixel outside the white core on each side (y=746 reads 8
against a background of 18–21). Erasing only the visible core leaves that halo as a faint grey line —
the band replaced is y 743–754, not the 3 px the stroke appears to occupy.

### The re-encode is best at the ORIGINAL quality, not a higher one
Measured on the untouched 99% of the page:

| quality | bytes | mean abs diff | px differing by >4 |
|---|---|---|---|
| **q82 (the original's own table)** | 327,584 | **1.32** | **8.4%** |
| q85 | 343,492 | 1.69 | 8.4% |
| q88 | 375,754 | 2.04 | 12.8% |
| q92 | 439,833 | 1.71 | 10.1% |

Re-quantizing with the table the file was written with reproduces most coefficients; a *higher*
quality uses a different table and introduces new rounding across the whole page. **Matching the
original quantization table is not a stylistic preference — it is the lowest-loss option available,
and raising quality to "be safe" makes the page worse.**

### Deploy sequence when the batch ships
1. copy the PNG over `assets/htn/htn-02.jpg` at **q82, subsampling 2**
2. regenerate `assets/htn/thumb-02.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> htn`
4. `python3 scripts/verify_gallery_pdfs.py <root> htn`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

---

## 5. `pericarditis` page 1 — "Fibrous Pericardium" ended on empty background

| | |
|---|---|
| file | `pericarditis-01-FIXED-page.png` (+ `.jpg` at q88/4:2:0, the original's own encode) |
| target | `assets/pericarditis/pericarditis-01.jpg`, 1280×1920 |
| moved | dot **(750,624) → (730,784)**, onto the pericardial sac; leader redrawn from its elbow at (874,373) |
| diff vs live | **(721,370)–(882,793)** |
| other three dots | bright-pixel counts identical before and after: parietal 134/134, cavity 27/27, visceral 131/131 |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The leader ended in black background to the right of the ascending aorta, touching
nothing; the nearest drawn structure was the aortic wall 15 px away. It now lands on the translucent
sac itself, on the fibrous sheet with its striations visible either side of the dot.

**How "outer" was checked.** Measured as distance from the heart's centre (~520,1000), the four dots
now read **fibrous 301 px, cavity 279, parietal 257, visceral 250** — the fibrous dot is the
outermost of the four, which is what the label requires. *Note for the physician:* on that same crude
measure the existing **cavity dot sits outboard of the parietal dot**. That pair was not part of the
audit finding and has not been touched — worth your eye, but it is a curved sac and radius-from-centre
is a blunt instrument on it.

**The placement is constrained, not free.** The four leaders fan from elbows at x=874, so the fibrous
dot has to stay above the parietal dot's leader or the two lines cross. Every point on the sac's wide
outer band down the heart's right border is *below* that line. The chosen point is the highest place
the sac reaches that the leader can get to without a crossing.

**Three erase methods were tried on the old dot before one worked**, because it abuts the aorta's rim
where that rim is a shallow *curve* (its x runs 735→746 across the dot's own 26 rows):
- per-column fill → extrapolates aorta colour into the background, leaving a brown rectangle;
- perpendicular two-sample average → a grey blob straddling the edge;
- interpolation along the rim → drags the leader's glow in from above and the blue SVC from below.

What works is fitting the **background** rather than the edge: a 2-D quadratic over an annulus using
only its dark pixels (470 of them), evaluated across the disc. Clean at 9×.

### Deploy sequence when the batch ships
Same as §3 — this gallery now has **pages 1 and 3** staged and page 2 already live at v92, so one
`rebuild_gallery_pdf.py <root> pericarditis` at **q88** covers all of it.

---

## 6. `cardiomyopathy` page 4 — "SMALL LV CAVITY" sat inside the septal mass

| | |
|---|---|
| file | `cardiomyopathy-04-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/cardiomyopathy/cardiomyopathy-04.jpg`, 1138×1707 |
| moved | dot **(423.6,603.2) → (630,772)** — a pure extension along the leader's own slope |
| diff vs live | **(409,588)–(637,779)** |
| other three dots | ASH 69/69, SAM 50/50, LVOT 75/75 bright px — unchanged |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** On a HYPERTROPHIC CARDIOMYOPATHY page the small LV cavity is the finding, and the
dot sat deep inside the septal mass on the **RV side of the septum**. The LV cavity is drawn clearly —
a narrow slit between the septum and the trabeculated lateral wall, carrying the blue LVOT jet — and
the dot now sits in it.

**The leader does not change direction.** Its measured slope is 0.817 from an elbow at (303,505); the
new endpoint sits on that same line, so this is an extension rather than a re-aim. Consequence worth
stating: the leader **already crossed the SAM leader at x=413 on the shipped page**, and it still does
— that crossing is pre-existing, not introduced here. It does *not* reach the LVOT leader (that
horizontal ends at x=483; the extension passes y=700 at x=542).

**Laterality was established from the pulmonary veins, not from position.** The cut purple veins enter
the chamber on the viewer's right, which makes that the left atrium; the mitral valve with its
chordae hangs below it; so the cavity beyond the septum is the LV. Getting this backwards would have
put the dot in the RV, which is exactly the error being corrected.

**Stroke brightness was matched, not guessed.** Drawn at first neutral-white it read brighter than the
original at 12×; measured peak luma of the shipped leader is 207, so the extension was re-drawn to
219–224 (it runs over darker background than the sampled stretch). The dot is 54 bright px against
the page's other three at 50, 69 and 75.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/cardiomyopathy/cardiomyopathy-04.jpg` at **q82, subsampling 2**
2. regenerate `assets/cardiomyopathy/thumb-04.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> cardiomyopathy`
4. `python3 scripts/verify_gallery_pdfs.py <root> cardiomyopathy`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

---

## 7. `cardiac-arrest` page 2 — badge 5 "Diaphragm" pointed into lung

| | |
|---|---|
| file | `cardiac-arrest-02-FIXED-page.png` (+ `.jpg` at **q90 / 4:4:4**, the original's own encode) |
| target | `cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-02.jpg`, 913×1373 |
| moved | arrowhead **(351,539) → (430,562)**, onto the diaphragmatic dome |
| diff vs live | **(338,528)–(433,566)**; outside it mean abs diff **0.16**, max 10, 0.03% of pixels >4 |
| other four badge arrows | bright-pixel counts identical before and after |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** Badge 5 ended in left lung parenchyma — the same tissue badge 4 ("Lungs") points
at, about 60 px away. As shipped, the two badges are indistinguishable at their endpoints. The
diaphragm is drawn clearly as the red-orange honeycombed dome below; the arrow now lands on it.

**Why the leader is angled when the page's others are horizontal.** The diaphragm's highest drawn
pixel is y≈550 and badge 5's circle centre is at y=539, so no horizontal line from that badge can
reach the dome at all — the geometry forces a slope. It is applied as a **short elbow at x=341**, so
the horizontal run that reads as this page's idiom is preserved for 60 of its 90 px and only the last
segment angles down (slope 0.26).

**The elbow position was forced by the erase, not chosen for looks.** The shaft crosses a **rib** at
x 295–330, and a rib is a strong diagonal that no parallel or per-column fill can rebuild: erasing the
whole shaft was tried twice — a per-column fit blurred the lung's honeycomb into a flat band, and a
parallel-strip clone broke the rib's edge. Both were visible at 6×. Keeping the shaft and erasing only
the **14 px of arrowhead** — which sits on plain lung texture — leaves nothing detectable at 16×.

**This page re-encodes almost losslessly**, unlike the others in the batch: it ships at **q90 with
4:4:4 chroma** (no subsampling), so the untouched 99% differs by a mean of 0.16 against 0.8–1.3 on the
4:2:0 pages. Worth knowing before assuming a batch-wide number.

### Deploy sequence when the batch ships
1. copy the PNG over `cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-02.jpg` at
   **q90, subsampling 0**
2. regenerate **`gthumbs/cardiac-arrest-02.jpg`** at 320×480 q82 — this gallery uses the flat
   root-level `gthumbs/`, not a local `thumb-NN.jpg`
3. `python3 scripts/rebuild_gallery_pdf.py <root> cardiac-arrest`
4. `python3 scripts/verify_gallery_pdfs.py <root> cardiac-arrest`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**Pairs with the v91 page-8 fix already live** — same gallery, so one PDF rebuild covers both.

---

## 8. `cardiac-arrest` page 4 — an unattached arrowhead on the patient's shoulder

| | |
|---|---|
| file | `cardiac-arrest-04-FIXED-page.png` (+ `.jpg` at q90 / 4:4:4, the original's own encode) |
| target | `cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-04.jpg`, 915×1373 |
| removed | the stray at **x 449–470, y 448–455** |
| diff vs live | **(443,444)–(477,463)** = 34×19 px; outside it mean 0.17, max 10, 0.024% of pixels >4 |
| the page's three real arrowheads | 62/62, 41/41, 35/35 bright px — untouched |
| stray itself | **49 → 0** bright px |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** A small white arrow pointing left, with about 10 px of shaft that stops in mid-air:
no label, no box, no leader. **Verified unattached rather than assumed** — nothing above threshold
anywhere to the right of x=472 on any of its rows, so it is not the tail of either scene callout. It
sits on the patient's shoulder and reads as a pointer to something that is not there. Third stray of
the project, after the two on `aortic-dissection` p1.

**The donor was chosen by eye, and the statistics were actively misleading.** Scored over six
horizontal offsets, the *best* was dx=−46 — and it lands on the patient's face and neck, cloning blue
and orange skin into dark fabric. Mean and standard deviation matched; content did not. A contact
sheet of eight offsets settled it in one look: **dx=+32**, further along the same shoulder, where the
fabric's top contour continues without a step.

**Worth generalising:** for a removal on photographic material, rank candidates by eye. The ring/strip
statistics that work on rendered anatomy — where texture is locally stationary — pick confidently
wrong donors on a photograph, because two very different things can share a histogram.

**The clone is horizontal on purpose.** The shoulder's fabric highlight runs near-horizontally just
above the stray; a per-column fill would cut that contour.

### Deploy sequence when the batch ships
1. copy the PNG over `cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-04.jpg` at
   **q90, subsampling 0**
2. regenerate **`gthumbs/cardiac-arrest-04.jpg`** at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> cardiac-arrest`
4. `python3 scripts/verify_gallery_pdfs.py <root> cardiac-arrest`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**Third page of this gallery in the batch** (p2 here, p4 here, p8 already live at v91) — one PDF
rebuild covers all three.

---

## 9. `endocarditis` page 7 — "VALVE CUSP" landed on the vegetation

| | |
|---|---|
| file | `endocarditis-07-FIXED-page.png` (+ `.jpg` at q88/4:2:0, the original's own encode) |
| target | `assets/endocarditis/endocarditis-07.jpg`, 1280×1920 |
| moved | tip **(825,406) → (828,476)**, onto pale cusp tissue; elbow added at (930,406) |
| diff vs live | **(820,397)–(939,482)** |
| other three tips | LEAFLET PERFORATION 15/15, PERIVALVULAR 2/2, FRIABLE unchanged |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** "VALVE CUSP — site of endothelial injury and microbial adherence" ended on the
**right-hand nodules of the same cauliflower vegetation** that *FRIABLE VEGETATION* points to, 40 px
above it. Two labels, one object, and the one that is supposed to name the *substrate* pointed at the
lesion. It now lands on the pale cusp surface immediately below the vegetation — the cusp the
vegetation is adherent to, which is the label's own claim.

**The angle is forced.** Along the leader's original row (y=406) there is no cusp anywhere: to the
right lies the sinus and then the aortic wall, and to the left the leader would have to cross the
whole vegetation to reach cusp beyond it. So an elbow at x=930 with a 34° final segment, the same
device used on `cardiac-arrest` p2 for the same reason.

**The erase needed a clone, not a fit — the opposite of `pericarditis` p1.** A per-column quadratic
gives each column a smooth ramp, which is invisible over flat background but on this specimen erased
the sinus wall's fine striations and left a plainly visible smear. A parallel clone at **dy=−18**,
chosen by eye from a six-offset sheet, keeps them: the structures here run near-vertically, so a
vertical offset slides them along their own direction.

**Marker size was measured, not assumed.** The page's tips are 5 px across (r≈2.5); drawn first at
r=3.6 the new dot read 42 bright px against the others' 15–18. At r=2.6 it reads 26.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/endocarditis/endocarditis-07.jpg` at **q88, subsampling 2**
2. regenerate `assets/endocarditis/thumb-07.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> endocarditis`
4. `python3 scripts/verify_gallery_pdfs.py <root> endocarditis`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

---

## 10. `aortic-stenosis` page 1 — "Narrowed Valve Orifice" landed on a cusp

| | |
|---|---|
| file | `aortic-stenosis-01-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/aortic-stenosis/aortic-stenosis-01.jpg`, 1138×1707 |
| moved | dot **(666.6,599.6) → (606,558)**, into the orifice slit; leader re-aimed from its elbow at (843,417) |
| diff vs live | **(598,412)–(851,615)**; outside it mean 0.60, max 35 |
| other dots | Calcified Valve Cusps 101 → 100 (JPEG noise); the two lower dots untouched |
| old dot / new dot | **99 → 0** and **0 → 88** bright px |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The dot sat on the body of the **right calcified cusp** — the structure the label
directly above it already names — about 60 px from the opening. "Narrowed Valve Orifice: fixed
obstruction accelerates systolic blood flow" now ends in the slit itself, the bright jet running
between the two calcified masses.

**The approach angle had to change, not just the endpoint.** The orifice sits *behind* the right cusp
from the label's side, so any leader arriving at the slit's own height crosses that cusp and reads as
pointing at it — the very confusion being fixed. The new line is shallower (31° against the original
46°) and passes just above the right cusp's upper margin before dropping into the slit.

**The dot straddled a tissue boundary, which is the hardest case for a clone.** It sat exactly on the
join between the pale calcified cusp and the red sinus wall, so a donor patch has to reproduce *both*
plus the edge between them. Nine offsets were rendered and compared side by side; eight left a visible
patch, and **(0,+26)** — straight down the same cusp — was the only one keeping cusp texture and the
wall's inner edge continuous. The 250 px diagonal above it was erased separately with a single-sided
perpendicular clone at 16 px, which preserves texture where a two-sample average would flatten it.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/aortic-stenosis/aortic-stenosis-01.jpg` at **q82, subsampling 2**
2. regenerate `assets/aortic-stenosis/thumb-01.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> aortic-stenosis`
4. `python3 scripts/verify_gallery_pdfs.py <root> aortic-stenosis`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**`p4` carries the same error** ("Narrowed central orifice", also on a calcified cusp). It is the next
one queued, and it batches into this gallery's single PDF rebuild.

---

## 11. `aortic-stenosis` page 4 — "Narrowed central orifice", the same error a second time

| | |
|---|---|
| file | `aortic-stenosis-04-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/aortic-stenosis/aortic-stenosis-04.jpg`, 1138×1707 |
| moved | dot **(886.4,469.3) → (829,484)**, into the central orifice; leader re-aimed from its elbow at (905,493) |
| diff vs live | **(822,456)–(910,498)**, 88×42 px |
| old dot / new dot | **38 → 0** and **0 → 53** bright px |
| the left "calcified cusps" dot | 42/42 — unchanged |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** On the STENOTIC valve short-axis, the dot sat in the body of the **right calcified
cusp**, which is what the label on the opposite side of the same figure already names. It now sits in
the dark Y-shaped gap at the confluence of the three cusps — the residual orifice, which is the whole
point of the panel and the only feature that distinguishes it from the NORMAL valve beside it.

**Same error as p1 of this gallery, on the same structure class**, which is what makes it a template
habit rather than a slip: on both pages the orifice label was placed on cusp tissue at roughly the
same radius as the cusp label. Worth stating to production as a rule — *on a valve short-axis, the
orifice label goes in the gap, never on a leaflet.*

**Cheap where p1 was expensive.** Here the leader already had an elbow at (905,493), and the new
endpoint is nearly on the same horizontal, so only the 30 px stub above the elbow needed erasing —
against 250 px on p1. The stub came out with a single-sided perpendicular clone at 13 px; the dot with
a (0,+30) clone down the same cusp, whose nodular texture is quasi-random and forgiving (four offsets
were compared and all four were clean, unlike p1 where eight of nine failed).

### Deploy sequence when the batch ships
Same as §10 — **one `rebuild_gallery_pdf.py <root> aortic-stenosis` at q82 covers pages 1 and 4.**

---

## 12. `htn` page 8 — badge 1 "Endothelium" left behind as the lumen narrowed

| | |
|---|---|
| file | `htn-08-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/htn/htn-08.jpg`, 1137×1705 |
| changed | badge 1 extended to the endothelial lining on the **two diseased panels**; nothing erased |
| diff vs live | **(552,485)–(981,549)** — the two added strokes and nothing else |
| approved | *awaiting Dr. Kreithen* |

**What it fixes**, measured as radial depth through the wall (0% = luminal lining, 100% = outer edge):

| panel | lumen r | badge 1 was | badge 1 now |
|---|---|---|---|
| hyaline | 37.6 px | r=121 px — **74% into the wall** | r=42 px — **4%** |
| hyperplastic | 16.1 px | r=93 px — **57%** | r=18 px — **1%** |

The three panels share one badge layout, and badge 1 kept its radius while the lumen shrank from
r=37.6 to r=16.1. On the normal panel that radius still lands on the lining; on the two diseased
panels — the ones the page exists to teach — it points into thickened media. Badges 2, 3 and 4 land
acceptably in all three and are untouched.

**Nothing is erased, which is why this one is clean.** The existing horizontal run is kept in full and
becomes an elbow; only a new diagonal is added from its tip down to the lining. The obvious
alternative — erase the horizontal and re-aim it — was built first and rejected: that run crosses the
**vessel's outer edge**, a strong curved tissue/background boundary, and all four clone offsets tried
left a visible patch there at 10×. Extending costs nothing and risks nothing.

**Why a horizontal could not simply be lengthened:** badge 1 sits at y=492 while the hyaline lumen
spans y 530–606, so no horizontal line from that badge reaches the lumen at any x. The elbow is forced
by the geometry, exactly as on `cardiac-arrest` p2.

**This is the production rule the audit named, made concrete:** when a panel series shows progressive
change, every badge must be re-anchored per panel. Copying the layout is what put badge 1 at 74%.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/htn/htn-08.jpg` at **q82, subsampling 2**
2. regenerate `assets/htn/thumb-08.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> htn` — **covers pages 2 and 8 together**
4. `python3 scripts/verify_gallery_pdfs.py <root> htn`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

---

# SHIPPED as v94, 2026-08-10

> Entry 13 is live — app repo `f3ae1ef`, `v94-ENDOCARDITIS-P6-TEE-ARROW`. The gallery PDF was
> rebuilt at q88 and `verify_gallery_pdfs.py` found no drift; the page, `version.txt` and the `sw.js`
> `CACHE` string were read back byte-correct from `origin/main`.

## 13. `endocarditis` page 6 — the TEE arrow pointed outside the ultrasound sector

| | |
|---|---|
| file | `endocarditis-06-FIXED-page.png` (+ `.jpg` at q88/4:2:0, the original's own encode) |
| target | `assets/endocarditis/endocarditis-06.jpg`, 1280×1920 |
| moved | the whole arrow by **(−56,−15)**; tip **(711,893) → (655,878)** |
| diff vs live | **(654,849)–(749,906)** |
| old position | **224 → 0** yellow px · new position **0 → 207** |
| the TTE arrow on the panel above | 223 → **223, untouched** |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The arrow's tip sat in black background **beyond the sector's right border**,
touching no image content at all, while the vegetation it presumably indicates sits inside the fan.
The tip is now at (655,878) — inside the sector, just off the upper-right corner of the vegetation,
with the arrow still pointing down-left into it.

**The arrow is translated, not redrawn.** Its own pixels are lifted with a soft yellowness alpha and
composited at the new position, so the arrowhead keeps exactly the shape, colour and antialiasing it
already had. 207 yellow px land against 206 in the original — the arrow is the same arrow.

**Two things the erase needed, both found by looking rather than by measuring:**
- The old position **straddles the sector's bright diagonal border**. A background surface fitted
  over an annulus averages border and black together and leaves a **grey arrow-shaped ghost** —
  built that way first, obvious at 7×. Cloning *along* the border instead (offset 52 px on the unit
  vector of the (635,847)→(767,955) edge) lands border-on-border and black-on-black.
- **The erase mask has to be wider than the paste mask.** JPEG leaves a faint warm fringe a pixel or
  two outside the arrow carrying almost no yellowness; erasing only the yellow core left that fringe
  tracing the old arrow's outline at 10×. The erase uses a blurred, dilated copy of the alpha; the
  paste uses the sharp one.

### Deploy sequence
Same as §9 — but note this gallery's page 7 went live in v93, so a fresh
`rebuild_gallery_pdf.py <root> endocarditis` **at q88** is needed for this page.

---

# SHIPPED as v95, 2026-08-10

> **Entries 14–16 are LIVE** — app repo `bfa161a`, `v95-THREE-LEADER-CORRECTIONS-ADDISONS-BRONCHIOLITIS-PANCREATITIS`.
> Approved by Dr. Kreithen as a batch ("approved everything", 2026-08-10), so the per-entry
> "awaiting Dr. Kreithen" lines below are the state at the time each was staged.
>
> Verified before the push: `verify_sw.js` passed, `verify_gallery_pdfs.py` compared **1,020 pages
> across 102 galleries with no drift**, and a headless boot on the shipped bytes loaded 183
> conditions with 10/10 thumbs in all three galleries and zero page errors. Verified after: all
> three pages, all three thumbs, `version.txt` and the `sw.js` `CACHE` string read back
> byte-correct from `origin/main`.
>
> **PDF qualities, chosen to reproduce each gallery's own existing size** rather than the script's
> default 82 — addisons **72** (1,122,253 vs 1,125,035), bronchiolitis **80** (1,157,371 vs
> 1,176,041), pancreatitis **80** (3,696,778 vs 3,698,239). Calibrated by rebuilding each at
> 70/76/82/88 and interpolating, which costs one minute and stops the nine unchanged pages being
> degraded to fix the one that changed.

*From here the work follows the 81-page production work order
(`Rounds-Codex-leader-line-production-order.docx`), easiest pages first — the pages with a single
label to move. Every page in that order is also going to production for a re-render; a local fix is
the stopgap, not a substitute, and each one is a pure shortening/translation of an existing stroke.*

## 14. `addisons` page 1 — the "Cortex" leader ended inside the medulla

Work order row `addisons` p1 #1, the page's only move (11 labels, 0 checks).

| | |
|---|---|
| file | `addisons-01.jpg` — the gallery ships at the repo root, `base` is `''` |
| target | `addisons-01.jpg`, 800×1200 |
| shortened | leader tip **(255,244) → the orange band**; erased t ∈ [−2.5, 10.2] along its own axis |
| diff vs live | **x 250–266, y 236–246** — 48 px above 20/255, one stray px elsewhere |
| the "Medulla" leader | untouched, still in the medulla |
| re-encode | the file's own qtables, 4:4:4; **global mean abs diff 0.269/255** |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The inset cross-section's whole point is cortex-versus-medulla, and the "Cortex"
leader ended in the dark brown medulla — the same tissue the "Medulla" leader points at, seven
pixels past the boundary. Two labels naming two layers, one layer.

**Measured, not assumed.** Sampling the tissue 4–5 px either side of the leader along its own axis
puts the medulla at t 0–6 (mean RGB ~110,55,30), the orange striated cortex at t 6.5–16.5
(~200,140,80) and black background from t 18. So the band the label wants is a definite 10-px
window, and the tip was 7 px short of it.

**It is a shortening, not a redraw.** Nothing is drawn; the stroke is erased back so its visible
terminus falls inside the orange band. That matches the page's own idiom — the third leader into
this inset, from below, also stops at the band's boundary rather than pushing into it.

**The donor is perpendicular for a reason worth keeping.** This leader runs almost exactly *radially*
out of the medulla's centre (247,250), so its perpendicular is nearly *tangential*: a tangential
donor stays at the same radius and its radial striations line up with the ones it replaces. Chosen
from a contact sheet of eight offsets by eye rather than by score — ±10 and ±12 both left a visible
step in the cortex/medulla contour, and a score would not have said so.

**Note on this page's geometry.** `addisons-01.jpg` is 800×1200, i.e. one of the 27 sub-standard
galleries. The fix is at the shipped size and does not change it.

---

## 15. `bronchiolitis` page 7 — "Minimal mucus" ended outside the airway wall

Work order row `bronchiolitis` p7 #1, the page's only move (6 labels, 1 check).

| | |
|---|---|
| target | `assets/bronchiolitis/bronchiolitis-07.jpg`, 1024×1536, 4:2:0 |
| extended | leader tip **(631,475) → (643,450)**, along its own axis (0.4472,−0.8944) |
| erased | **nothing** |
| diff vs a null re-encode | **x 630–645, y 449–474**, 74 px — see the control below |
| the panel's other two leaders | untouched |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The leader stopped at the outermost margin of the figure, on the adventitia — the
outside of the airway — while the label names the mucus layer, which sits on the inside. "Thin
airway wall" already covers the wall, so as shipped two of the panel's three labels pointed at
roughly the same tissue.

**Measured, not assumed.** Sampling 4–5 px either side of the leader's own ray, with t = 0 at the
shipped tip: black background below t 1; the salmon adventitia t 2–16; a dark boundary at t 16; the
pale pink epithelial ring t 18–27; dark maroon lumen from t 28. So the surface the label wants is a
definite point — t ≈ 27.5, the epithelium/lumen interface — and the tip was 27 px short of it.

**A pure extension — nothing is erased.** Same as `htn` p8: it is worth checking whether a
correction can be an extension before planning an erase, because an erase is where every visible
failure in this batch has come from.

**The terminal dot is lifted, not drawn.** It is the "Open lumen" leader's own dot from this same
panel (r ≈ 2 px, peak luma 248), extracted with a soft alpha and composited at the new tip, so it
keeps the artwork's real shape and antialiasing. Only the connecting stroke is synthetic: 8×
supersampled at 1.35 px, composited toward the page's measured leader white rather than painted 255.

### Run the null re-encode control before believing a diff on a 4:2:0 page

The first QA on this page read **9,136 px changed above 20/255, bbox x 6–1018, y 5–1530** — the whole
page — which looks exactly like a fix that has leaked everywhere. It has not. Saving the *unmodified*
file back through the same qtables and subsampling gives **9,060 px and mean 1.105**: this page is
**4:2:0**, so the chroma round-trip alone accounts for essentially all of it. Diffed against that
null re-encode instead of against the original, the edit is 74 px in a 16×26 box.

Every earlier fix in this batch was on a 4:4:4 page, where the round-trip is ~0.27 and the naive
diff was honest. **On a 4:2:0 page the naive diff is not, and the control is one line of code.**

---

## 16. `pancreatitis` page 2 — "Celiac trunk" ended on the IVC

Work order row `pancreatitis` p2 #1 (16 labels, 2 further rows flagged [CHECK]).

| | |
|---|---|
| target | `assets/pancreatitis/pancreatitis-02.jpg`, 1024×1536, 4:2:0 |
| replaced | the whole descending run: two bends **(567,308)→(555,325)→(499,353)** become one near-vertical segment **(567,308)→(563,375)** |
| terminus | **(499,353) → (563,377)**, on the celiac trunk stub |
| diff vs a null re-encode | **x 494–569, y 307–379**, 473 px |
| the "Splenic artery" leader | untouched |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** A label naming an artery ended on a vein — the dot sat on the blue vessel left of
the aorta. The celiac trunk is drawn, clearly, ~60 px to the lower right: masking bright red
(R>90, R>1.9G, R>1.9B) finds a stub crossing rows 373–381 from the aorta's border at x≈551 to the
trifurcation at x≈578, where the limb the "Splenic artery" label correctly follows branches off.

**The corrected leader is simpler than the one it replaces** — one segment instead of two bends —
rather than a third bend bolted onto the existing path.

**The erase mask has to follow the POLYLINE, not the endpoints.** The first attempt masked a straight
line from the corner to the old dot; the shipped leader bends at (555,325), so the mask missed the
real stroke by up to 8 px in the middle and left a faint white diagonal across the aorta. Visible
immediately in the side-by-side, invisible in any of the numbers — the bbox and pixel count were
*correct* both times. **Trace the stroke before masking it.**

**The donor is (+1.5,+14), along the aorta's own border rather than straight down.** The borders lean
dx/dy = +0.11 through this height, so a purely vertical donor shifts the border 1.5 px and leaves a
notch in it, plain at 9×. This is the banded-background rule from `pericarditis` applied to a vessel:
clone along the structure, and use a subpixel shift rather than `np.roll` when the structure is not
axis-aligned. Of the four candidates, (−1.5,−14) duplicated a chevron in the aorta's highlight and
(−2.1,−20) left a pale ghost in the black gap beside it.

The terminal dot is lifted from the shipped dot (r ≈ 2.2 px, peak luma 253), not drawn.

---

# SHIPPED as v96, 2026-08-10

> **Entries 17–18 are LIVE** — app repo `8c83319`, `v96-LEADER-CORRECTIONS-PUD-BOWEL-OBSTRUCTION`.
>
> Verified before the push: `verify_sw.js` passed, `verify_gallery_pdfs.py` compared 1,020 pages
> across 102 galleries with no drift, and a headless boot on the shipped bytes loaded 183 conditions
> with 10/10 thumbs in both galleries and zero page errors. Verified after: both pages, both thumbs,
> both gallery PDFs, `version.txt` and the `sw.js` `CACHE` string read back byte-correct from
> `origin/main`.
>
> PDF qualities chosen to reproduce each gallery's own existing size: pud **85** (4,292,724 vs
> 4,320,306), bowel-obstruction **80** (1,228,024 vs 1,233,464).

## 17. `pud` page 2 — "Pylorus (pyloric sphincter)" ended inside the duodenal bulb

Work order row `pud` p2 #1 (26 labels, 2 further rows flagged [CHECK]).

| | |
|---|---|
| target | `assets/pud/pud-02.jpg`, 1024×1536, 4:2:0 |
| replaced | the vertical stroke at x=248.5, y 391→450, by a 45° diagonal **(300,390)→(367,452)** |
| terminus | **(248,450) → (370,455)**, on the pyloric collar |
| diff vs a null re-encode | **x 243–373, y 389–458**, 644 px |
| the "Duodenum (1st part)" dot | untouched |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The dot sat in the bulb's lumen about 120 px distal to the sphincter — so a label
reading "pyloric sphincter" pointed at the duodenum, on a page whose subject is where ulcers form
relative to that landmark. The pylorus is drawn plainly: the cut wall doubles back on itself at
x≈368, y 432–445, a matching fold sits below at y 470–480, and a paler column of muscle runs between
them separating bulb from antrum. (370,455) is the middle of it.

**Sampling either side of the shipped stroke** gives black background to y 407, the pale cut wall
band y 409–431, and dark red bulb interior from y 433 — three zones the erase has to cross.

### The banded-background rule needs one more word: measure which way the band runs

`chf` p1 established *clone along the band, not across it*, and the band there was horizontal. Here
it is an **arc**, and applying the rule literally — a horizontal clone — fails visibly: ±18 and ±26
px all leave a vertical scar where the arc gets displaced, plus a duplicated rugal scallop at the
larger offsets.

Fitting the organ's top edge over x 210–292 gives **dy/dx = −0.33** locally. A donor along that
tangent, **(+14, −4.6)**, is invisible at 9× across all three zones. (−14,+4.6) leaves a small step
in the outer rim; (±20,∓7) duplicate a scallop. The offset is subpixel, so `np.roll` cannot express
it.

---

## 18. `bowel-obstruction` page 2 — "Villi" ended in the outer wall of the cross-section

Work order row `bowel-obstruction` p2 #1 (20 labels, 4 flagged [CHECK]).

| | |
|---|---|
| target | `assets/bowel-obstruction/bowel-obstruction-02.jpg`, 1024×1536, 4:2:0 |
| terminus | **(156,929) → (146.7,947.8)**, 21 px inward along the annulus's own radius |
| leader | gains one bend at (161,929); the horizontal run is otherwise unchanged |
| diff vs a null re-encode | **x 146–160, y 924–950**, 127 px |
| Mucosa / Submucosa / Muscularis / Serosa leaders | untouched |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** On a five-label layer diagram, "Villi" pointed four layers out — the dot sat at
radius 68 from the annulus's centroid (126,990), in the concentric striated bands, while the
scalloped mucosal projections it names line the lumen. The "Mucosa" leader below it lands correctly
on a fold at (172,964), which is what makes this read as a layer error rather than a near miss.

**The move is radial**, because on a cross-section the radius *is* the layer axis: going inward to
r = 47 lands on a pale scalloped projection near the top of the lumen, and the connecting segment
inherits that direction rather than dog-legging.

**Donor is tangential** — (+7.2,+3.5), the local tangent at that radius, so band lands on band across
concentric striations. Same principle as `pud` p2 one entry above: on curved banding, measure the
tangent.

---

# SHIPPED as v97, 2026-08-11

> Entry 19 is live — app repo `60c3e29`, `v97-ADDISONS-P2-ZONA-LEADERS`. PDF rebuilt at q72;
> `verify_gallery_pdfs.py` compared 1,020 pages across 102 galleries with no drift; page, thumb and
> PDF all byte-correct from `origin/main`.
>
> **One thing this deploy nearly shipped wrong.** The PDF rebuild was first run as the tail of a
> chained command that had `cd`'d into the app repo, so `scripts/rebuild_gallery_pdf.py` did not
> exist at that path — and `2>&1 >/dev/null` swallowed the error. The PDF was silently left at its
> v95 bytes while the page changed underneath it, which is exactly the drift
> `verify_gallery_pdfs.py` exists to catch. It was caught by checking `git diff --quiet` on the PDF,
> not by the verifier, which had not run yet. **Do not suppress stderr on a build step.**

## 19. `addisons` page 2 — two zona leaders overshot the cortex into the medulla

Work order rows `addisons` p2 #3 and #4, in the ADRENAL GLAND STRUCTURE inset.

| | |
|---|---|
| target | `addisons-02.jpg`, 800×1200, 4:4:4 |
| Zona Fasciculata | terminus **(617,290) → (646,286)**, the middle of the orange band |
| Zona Reticularis | terminus **(639,311) → (648,314)**, the band's innermost edge |
| diff vs a null re-encode | **x 620–647, y 284–313**, 82 px |
| the hilum blob | peak luma **225 after, 227 before** — untouched |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** Fasciculata ended on the gland's **central hilum**, at the dead centre of the
medulla — three zones inboard of the cortex it names, on the one figure whose entire subject is the
three cortical zones. Reticularis ended inside the medulla. Both are now in the band.

**Measured, not assumed.** Sampling 3–4 px either side of each leader along its own axis, with t = 0
where it leaves the label bracket: for Fasciculata the orange band is t 18–33 (RGB ~210,145,85) and
the medulla from t 36 (~120,55,25), so mid-band is t = 25 → (646,286) and the shipped stroke ran to
t ≈ 54. For Reticularis the band is t 18–30 and its inner edge t = 30 → (648,314), against a shipped
t ≈ 39.

**The hilum is artwork and had to survive.** The bright blob at (617,290.5) is the gland's central
hilum, not a terminal dot — the same feature noted at (247,250) on `addisons` p1. The erase stops at
t = 51, which is (620,289.5), leaving it alone; the check above confirms it.

**The donor is PERPENDICULAR here, which reverses the usual rule and is worth the sentence.** Both
leaders run nearly *parallel* to the cortex's radial striations, so cloning "along the band" would
slide the stroke along itself and erase nothing. A perpendicular offset of −7 px lands on the
neighbouring striations, which look alike at a pitch of 3–4 px. **The rule is clone along the
texture's grain, and on this inset the grain happens to run with the stroke rather than across it.**

---

## Higgsfield was tried on this dot and failed — second independent failure on this panel

Physician asked for the Higgsfield route; two variants were generated and both failed, so the
deterministic fix was shipped instead.

| | orphan dot (must go) | terminal dot (must stay) | quietest 60×60 region |
|---|---|---|---|
| Variant A | 32 → **16** — dimmed, not removed | 18 → 11, kept | 2.8/255 |
| Variant B | 32 → **0**, removed | 18 → **0** — **anchor destroyed** | 3.2/255 |
| deterministic | 32 → 12 | 18 → **18** | n/a — 325 px touched |

**Variant B is the instructive one:** it made the requested change *and* deleted the correct terminal
dot beside it, leaving the "Aortic root" label anchored to nothing — a worse defect than the one
being fixed.

**Both fail the pilot's own fidelity test regardless of the dots.** `HIGGSFIELD-CORRECTION-PILOT.md`
requires a targeted edit to read **~0 everywhere except the change**; the quietest region here is
2.8–3.2, so the whole panel was re-derived. Pasting either back would replace ~130,000 px of approved
artwork to fix 325.

This reproduces the **Aug 6** attempt on this same panel, which "removed the wrong dot but came back
with five leaders where the original had six". **Two independent attempts, the same class of
failure: the model will not reliably leave an adjacent marker alone.**

**Conclusion for this defect class:** for a *stray mark next to a correct mark*, use the
deterministic route. Higgsfield remains viable for what the pilot actually validated — moving a
single leader endpoint on a panel with no adjacent marker to preserve.

---

## Higgsfield failed again on `chf` p1 — fourth attempt, third distinct panel

Two variants, `nano_banana_pro` (server substituted `nano_banana_2`), 2k, 1:1, from a crop that
**excluded the text column entirely** — the pilot recipe applied properly for the first time, so the
model had no label text it could corrupt. It still failed, in two different ways:

| | dots present | the four that must not move | old LVD dot | new dot on LV |
|---|---|---|---|---|
| Variant A | **10** (5 spurious bright blobs) | two moved **26 px and 44 px** | cleared | no |
| Variant B | 7 | (731,921) **deleted**, replaced 123 px away | cleared | **no — deleted, not moved** |

**Variant B repeats the aortic-dissection failure exactly**: it removed the marker it was asked to
move and did not put one back, leaving the label anchored to nothing. Variant A moved markers it was
told to leave alone.

Fidelity was also gone in both — mean |diff| against the source crop is **8–12 /255 across the whole
heart**, against the pilot's requirement of ~0 outside the change. The border cells read 2.0–2.9,
which is the black padding, so the number is not a resampling artefact of the comparison.

One thing did survive on both: the four points where the leaders **cross the crop's right edge** are
within 1 px of the source, so the crop-and-repaste geometry itself is sound. The recipe is fine; the
model is the problem.

**Running tally: Higgsfield 0/4 on leader corrections, deterministic 4/4.** Enough to stop
proposing it for this defect class.

---

## `cdiff` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15

**The first page corrected outside this pipeline.** The physician worked the page from
`Rounds-Codex-Photoshop-worklist.pdf` / `Rounds-Codex-pages-to-edit.zip` and returned it as a chat
paste. Reviewed and shipped on his instruction ("It's good enough … ship it").

**What changed**, measured against the shipped page before integration — **857 pixels above
threshold 12**, in **seven tight regions**, bbox x 111–547, y 364–1205. Every region is one of the
five fixes on the sheet; nothing else on the page moved.

| # | label | was | now |
|---|---|---|---|
| 1 | Taenia coli | off the band | on the band |
| 2 | Superior mesenteric a. | — | the SMA trunk, **(198,1133)** |
| 3 | Ileocolic a. | — | the arcade, **(174,1174)** |
| 4 | Superior mesenteric v. | — | the blue trunk, **(533,1132)** |
| 5 | Inferior mesenteric v. | **two dots** (fault 8) | one dot |
| 6 | Portal vein | — | the cut end, **(546,1095)** |

**Three items deliberately left for a later pass** — raised with the physician, who chose to ship:

1. **`Right colic a.` endpoint (143,1118) still samples (64,16,11)** — black background, not vessel.
   The one endpoint on the sheet that did not land.
2. **The two new arterial leaders cross.** Not a placement error — the label column's order forces
   it. Swapping the two label *texts* in the column would uncross them without moving a leader.
3. **`Middle colic a.` barely moved** from its original endpoint.

### Integration mechanics — how a physician-corrected page comes in

His export is **quality 12** (1,220 kB, subsampling 0) against the gallery's own encode
(622 kB). **Do not ask him to change his export settings** — re-encode on the way in, the same
principle as matching a JPEG's own quantization table rather than "improving" it:

```
im.save(dst, qtables=shipped.quantization, subsampling=JpegImagePlugin.get_sampling(shipped),
        optimize=True)
```

Result **637,826 B vs the shipped 637,317 B** — within 0.1%, so the encode is matched, not guessed.
Re-encode drift against his file is max 31 / mean 0.53, which is ordinary JPEG ringing at the new
strokes.

**`RC_PDF_Q` for `cdiff` is 81.** Calibrated by sweeping 78–92 against the existing PDF's own
1,287,065 B at its own 512 px embed width: q80 → 1,262,802, **q81 → 1,299,430** (closest), q82 →
1,330,766. The script's default 82 would have inflated the nine unchanged pages. Rebuilt PDF is
1,269 kB against 1,256 kB.

---

## `ckd` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15 (v100)

Second physician-corrected page. **2,064 pixels changed above threshold 12, in 10 regions**, all
inside the four panels — no stray edits. Shipped on his instruction; **four of the eight rows on
`PRODUCTION-ckd-p2.md` are fixed, four are not**, and one of the four went the wrong way. Recorded
here rather than silently, because the page is now live in that state.

### Fixed, measured decisively

| row | label | was | now | sampled under the new tip |
|---|---|---|---|---|
| 1 | RENAL ARTERY | (292,437) medullary pyramid | **(390,472)** | **(177,27,23)** — centre of the red arterial band (y 468–483 at x 392–410) |
| 2 | RENAL VEIN | (275,510) parenchyma | **(402,496)** | **(27,93,196)** — centre of the blue venous band (y 488–502) |
| 3 | Proximal tubule | (821,431) the blue vessel | **(860,430)** | the pale descending tubule; the blue vessel is 40 px behind at x 815–821 |

Rows 1 and 2 went **further out than the sheet suggested** — onto the trunks rather than the hilar
branches. Better, not worse: the sheet's (324,429) / (365,500) were the nearest defensible points,
his are unambiguous.

**Three fixes not on the sheet**, all landing correctly: Afferent arteriole (nephron panel) →
(806,322) on the red arteriole; Distal tubule → (915,334) on the orange tubule; a terminator added
on Loop of Henle.

### Row 8 — RENAL BLOOD SUPPLY, reworked but not resolved

Two leaders now run deep into the kidney, reaching **(745,738)** and **(760,817)**; previously all
five tips sat at x 828–864 on the extrarenal trunk. **The sheet's open question remains open**: both
new tips sample cortical parenchyma ((161,66,53) and (138,44,32)) and the gold vessel pixels near
them are 1–3 px scattered runs, so it cannot be shown they land on drawn interlobar / arcuate /
interlobular vessels. Still needs the source file. The reversed renal→segmental→interlobar order was
not separately verifiable — the leaders cross, and neutral-ink tracing fragments where they run over
red artwork.

### Rows 4–7 — RENAL CORPUSCLE, not fixed; row 4 regressed

| row | label | state after the edit |
|---|---|---|
| 4 | **Bowman's capsule** | leader **extended** (883,980) → (869,996); at 16× it now **crosses the golden capsule ring at x 872–884 and keeps going**, stopping at the red capillary at ~(862,1002). It previously stopped just inside the ring. **Now points at the glomerulus.** |
| 5 | Glomerulus | **unchanged** — still ends at x≈884, mid golden ring |
| 6 | Afferent arteriole | **unchanged** — still in Bowman's space |
| 7 | Efferent arteriole | extended to (850,1049); sampled (64,19,15), dark maroon, no vessel |

The Bowman's ↔ Glomerulus swap the sheet identified is intact, and row 4 is marginally worse. The
two real arterioles remain drawn at the **vascular pole on the left** and unlabelled.

**This is the "leader passes through its own target and stops beyond it" fault — fault 1 in the
brief — created by an edit intended to fix it.** Extending a leader that already overshoots makes it
overshoot further. Worth stating in the next worklist: *when a sheet says a leader stops past its
target, the fix is to SHORTEN it, not to lengthen it toward the named structure.*

### Integration mechanics

Same as `cdiff`: his quality-12 export re-encoded at the shipped file's own quantization tables and
4:4:4 sampling — **513,916 B against the shipped 512,569 B**, drift max 36 / mean 0.48.
**`RC_PDF_Q` for `ckd` is 81** (target 1,188,764 B at 512 px; q80 → 1,162,042, q81 → 1,195,010,
q82 → 1,224,647). Rebuilt 1,167 kB against 1,160 kB.

---

## `dementia` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15 (v101)

Third physician-corrected page, and by far the largest rework: **the two clusters
`PRODUCTION-dementia-p2.md` called worst are both fixed.** Terminators were converted from rings to
arrowheads throughout, and the coronal panel was rewired from scratch.

### Fixed, colour-proved

| row | label | was | now | proof |
|---|---|---|---|---|
| 1 | Corpus callosum | ring (292,423), the purple cingulate arc | arrowhead on the **salmon callosal band** (~252,443) | the band runs y 428–443 at x 250; the arrowhead body spans y 430–449 |
| 2 | Cingulate gyrus | (265,478) the blue thalamus | **(247,418)** | (129,99,163) vs the arc's (137,107,164) |
| 3 | Thalamus | (315,479) the salmon callosum | **(268,481)** | (111,103,147) vs the thalamus's (112,105,151) |
| 9 | Brainstem | (312,586) the purple blob | **(280,591)** | **(202,159,92)** = the gold brainstem column |
| 11 | Lateral ventricles | a ring on the purple hippocampus | **(704,417)** | the dark ventricular slit |
| 12 | Hippocampus (bilateral) | one dot on the midline | **forked to (734,469) and (886,470)** | both sample the purple hippocampus |
| 13 | Entorhinal cortex (bilateral) | a hippocampus | **forked to (766,466) and (858,465)** | (858,465) = (168,125,73), an exact match to the gold entorhinal band |

The **three-way sagittal rotation** (rows 1–3, each label standing on the structure the label above
it named) is gone. The **coronal panel**, where previously not one of the three labels was on its own
structure, is now fully correct — and the two bilateral labels are properly **forked to both sides**,
which the original never did.

### Not changed

- **Row 8 Amygdala** — its elbow (429,656) and leader angle (+34.50°) are pixel-identical to the
  shipped file. Still on the gold pons.
- **Row 7 Entorhinal cortex (sagittal)** — tip (377,567) against the shipped (375,566). Still on the
  green hippocampus, still two rings.
- **Row 10 Cerebellum** — the blue marker at (310,644) on the gold medulla, untouched.

### A correction to our own sheet — rows 6 and 7 are ONE leader

`PRODUCTION-dementia-p2.md` row 6 attributed the two-ring terminator at (376,566)/(388,573) to the
**Hippocampus** label. **Tracing each leader from its own label stub shows it belongs to Entorhinal
cortex** — so rows 6 and 7 describe the same leader twice, and the fault-8 two-tip sits on row 7,
not row 6. Our error.

**The method that settled it is worth keeping**: anchor on the label's horizontal stub at x≈450,
walk left to the elbow, then search angles from the elbow for the ray with the most leader ink. It
attributes a leader to its label without any judgement about what it points at, which is exactly
what a page with ten leaders converging in a 120 px square needs. It **stops early where a leader
crosses bright cortex** (the ink test fails on pink tissue), so read the angle, not always the tip.

### Integration mechanics — a new one: the CHROMA changed

His export was **4:4:4**; this gallery ships **4:2:0**. That alone put the raw diff at 70,779 px >12
across the whole page, which reads exactly like a global adjustment. **Re-encoding at the shipped
file's own subsampling collapsed it to 28,787 >12 and 6,584 >40** — and the >40 count matches the
6,820 px measured inside the two edited panels, so the diffuse remainder is chroma round-trip, not
an edit. **Check `JpegImagePlugin.get_sampling()` before reading a whole-page diff as damage.**

437,419 B against the shipped 434,851 B. **`RC_PDF_Q` for `dementia` is 80** (target 1,248,580 B;
q80 → 1,232,389). Rebuilt 1,203 kB against 1,219 kB.

---

## `depression` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15 (v102)

Fourth physician-corrected page. **5 of 7 rows fixed**, one untouched, one moved but not landed.
Real edit 4,210 px above threshold 40, in 8 regions (the raw >12 count of 50,859 is again the
4:4:4-vs-4:2:0 chroma, not an edit — see the `dementia` entry).

### Fixed, colour-proved against the page's own key

| row | label | was | now | sampled |
|---|---|---|---|---|
| 1 | DLPFC | (473,323) the green cingulate band | **(447,300)** | **(53,104,152)**, an exact match to the blue frontal reference |
| 2 | vmPFC | (577,323) the band's posterior end | **(468,376)** | (37,78,125) = blue ventral-anterior frontal cortex |
| 4 | ACC | (461,371) blue frontal cortex | **(473,325)** | (118,154,106) = the green cingulate band |
| 6 | Nucleus accumbens | (493,424) the dark gap | **(493,403)** | the violet sphere |
| 7 | Hippocampus (coronal) | (905,415) cortex/white matter | **(883,432)** | (113,59,145) = the purple hippocampus |

Rows 1/2/4 were the fault-5 case — the page contradicting its own colour legend. All three now land
on the colour their own label names. **Leader attribution was done by connected component**: three
ink runs in x 300–720, y 180–400, each traced from its label edge to its tip, so no guessing which
leader is which.

### Row 5 Raphe nuclei — untouched

Still ending at (594,528) on dark background. Sampled identical in both files.

### Row 3 Pituitary — moved, but onto the Nucleus accumbens

From (624,614) on empty black to **(490,401)** — within 3 px of where the row-6 leader now ends.
**Two labels on one structure.** Shipped anyway (it is no worse in kind than the ~76 pages still
carrying leader errors, and 5 rows are genuinely better), but it is first on the next worklist.

### OUR SHEET WAS WRONG ABOUT THE GOLD NODE — and it matters twice

`PRODUCTION-depression-p2.md` §2 named the bright object at (555,437) "the gold node" and offered it
as the **Raphe** target. At 14× it is a discrete gland-like body — an orange sphere spanning
**x 552–562, y 432–444** with a specular highlight — and **the page's own pathway legend makes orange
the HPA-axis colour, not serotonin.** It is far more likely the **pituitary**.

Two consequences, both good:

1. **Row 3's open question is answered: the gland IS drawn.** This page comes off
   `PRODUCTION-artwork-needed.md`, and the pituitary leader should go to ≈(556,437). The
   `schizophrenia` p2 pituitary row should be re-checked the same way before it stays on that list —
   **we may have called artwork missing twice on the basis of not looking closely enough.**
2. **Had he followed our row-5 advice the Raphe label would now be on the pituitary.** He did not.

**The general lesson: check a candidate target against the page's OWN legend before naming it.**
The colour key is on the page, it is machine-checkable, and it would have caught this — the same
check that decided rows 1/2/4 correctly on this very page was not applied to row 5.

### Integration

451,946 B against the shipped 450,731 B, re-encoded at the shipped file's own quantization and 4:2:0.
**`RC_PDF_Q` for `depression` is 81** (target 1,163,894 B; q81 → 1,179,103). Rebuilt 1,151 kB
against 1,136 kB.

---

## `gdm` p2 and `gerd` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15 (v103)

Fifth and sixth physician-corrected pages, shipped together. Both are partial: **gdm 1 of 4 rows,
gerd 2 of 7**, no regressions.

### A better discriminator: LUMA, not RGB

His exports are **4:4:4**; these pages ship **4:2:0**, so the raw RGB diff is 47,525 px (gdm) and
63,481 px (gerd) before any edit is considered. **Chroma-only differences leave luma untouched**, so
`|Δluma| > 25` separates the two cleanly:

| region | RGB >40 | luma >25 | verdict |
|---|---|---|---|
| gdm balance-scale strip | 178 | **0** (max 7) | pure chroma — encode, not edit |
| gdm fetus | 169 | **182** (max 208) | a real edit |

That reduced gerd's whole page to **1,192 real pixels in exactly two regions**, which is what made
the "which rows were touched" question answerable at all. **Use luma for every subsequent
physician-corrected page** — the RGB threshold was over-reporting by 30–50×.

### `gdm` — row 2 fixed, and it introduced a two-tip leader

**Row 2 ② UMBILICAL CORD:** the leader now elbows at (365,762) and runs up-right to **(423,725)**,
sampling (100,47,62) against the cord's (67,29,48) and (123,77,94). On the cord. ✓

**But the original arrowhead was left in place** at x 360–374, y 762–766 — measured as **17 px
preserved, 1 removed**. So the leader now carries a terminator on the fetal back *and* a tip on the
cord: **the fault-8 pattern, created by the fix.** Not repaired here because erasing it means
repainting the fetal back, which is not a deterministic edit.

**This is the second time an extension-style fix has produced a new defect** (after `ckd` p2's
Bowman's capsule). Worth stating on every future sheet: **an extended leader must have its old
terminator removed, or the label ends up with two answers.**

**Row 1 ① PLACENTA untouched** (4 px). Still on the fetal head — reasonable, our sheet could not
give a coordinate. **Rows 3/4 untouched** — the umbilical vein/artery colour-convention question is
still with the physician.

### `gerd` — rows 3 and 4 improved, neither landed; five rows untouched

**Row 4, the ④⑤⑥ convergence.** All three redrawn thicker. Old: all three met at ~(497,377).
New: **④ (478,375), ⑤ (478,385), ⑥ (515,373)**. ⑥ is now 37 px clear — the three-on-one-point is
gone — but **④ and ⑤ still end 10 px apart**, and ④ did not move up to the thickened distal segment
at ~(470,340). The panel still reads as though the sphincter and the junction are one place.

**Row 3, Widened hiatal opening:** (240,1032) → **(230,1009)**, 25 px toward the neck. The crural
gap is ~35 px further left at ~(195,1000). Improved, not landed.

**Rows 1, 2, 5, 6, 7 untouched** — zero luma-diff pixels in each neighbourhood. Including **row 7**:
no ⑦ marker was added, so the legend still lists a Stomach (cardia) item with no marker anywhere on
the artwork.

**Colour sampling cannot decide this page** — the anti-reflux panel is red muscle throughout, so
every endpoint samples (105–130, 20–65, 13–67). The gerd verdicts above are **geometric**, from
stroke profiles per row and column, and that is the honest basis for them.

### Integration

gdm 456,842 B against 456,400 B. gerd 509,379 B against 488,879 B — **4.2% larger, the biggest drift
so far**, because the redrawn leaders are much thicker than the hairlines they replaced; the encode
itself is matched.
**`RC_PDF_Q`: gdm 80** (target 1,216,452; q80 → 1,200,896), **gerd 85** (target 4,684,527;
q85 → 4,634,671). **`gerd`'s PDF embeds at 1024 px, not 512** — the only gallery in this run that
does, so its PDF is 4.5 MB rather than ~1.2 MB. Do not "standardise" it without asking.

---

## `hepatitis` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15 (v104)

Seventh physician-corrected page, and **the first worked by DELETION rather than re-routing.** 13,341
real pixels changed (luma>25); this gallery already ships 4:4:4, so there was no chroma confound.

### Eight labels removed from the anterior figure

Leader ink in the porta hepatis box (x 340–500, y 470–600) went **474 → 101 px, a 79% reduction.**
Removed: Coronary ligament, Right hepatic artery, Portal vein, Hepatic portal triad, Hepatic veins /
Drain blood to IVC, Bile duct (from L and R hepatic ducts), Left portal vein, Hepatic artery proper.

That disposes of **six of the seven shuffled porta rows** (3, 4, 9, 10, 11, 12) by removing them
rather than untangling them, and **row 7 Coronary ligament is exactly what the sheet recommended** —
a posterior/superior peritoneal reflection an anterior view cannot show.

**Content consequence, stated because it is invisible in a leader audit:** the portal triad, portal
vein, hepatic artery proper and hepatic veins are no longer labelled on the anterior figure. The
BLOOD SUPPLY and PORTAL TRIAD panels on the same page still carry those concepts, so the page has not
lost the teaching — but the anterior view is now a much sparser figure. **Author's decision, not a
defect.**

### Three surviving anterior leaders, all moved

| row | label | was | now | sampled |
|---|---|---|---|---|
| 1 | Cystic duct | (265,523) inside the gallbladder | **(346,501)** | (61,60,12) green biliary |
| 2 | Inferior vena cava | (376,567) the triad widget | **(401,602)** | (21,51,116) the blue IVC |
| 8 | Common bile duct | (349,524) | **(370,531)** | green duct, but only 7 px lower — **still above the cystic-duct confluence** |

### Rows 5 and 6 untouched — ZERO changed pixels

The MICROANATOMY hepatocytes/sinusoids swap survives intact: the plates are still labelled as the
vessel and the vessel-free block as the sinusoid.

### The erase is the cleanest in the run — and here is how that was measured

Naive counting says 5,956 non-ink pixels darkened, which reads like heavy artwork damage. It is not:
a strict ink threshold (>170) treats a leader's own anti-aliased halo as "artwork". **Dilating the
old ink mask by 5 px before differencing** gives the honest number: **171 px**, in two clusters of
51 and 33 px at **x 352–367, y 537–581** — small nicks on the green duct's left edge exactly where
three leader dots had been stacked. Everything else erased was leader.

**Keep that method.** Measuring erase damage without excluding the leader's own halo over-reports by
~35×, and would have made a careful erase look reckless.

### ROW 13 — OUR SHEET WAS WRONG, and his change is the correct one

He moved **Right hepatic duct (124,854) → (88,864)** and **Left hepatic duct (104,885) → (107,868)**.

`PRODUCTION-hepatitis-p2.md` listed the old Right hepatic duct as **"correct as drawn"**. It was not.
(124,854) is the **viewer's-right** limb of the confluence. The gallbladder sits **viewer's-left** in
both this panel and the anterior liver figure, so the schematic is in **anterior orientation** and
viewer's-left is the patient's RIGHT. The old label therefore named the patient's LEFT duct.

**The lesson: establish a figure's handedness before calling any left/right label correct.** One
landmark settles it — here, which side the gallbladder is on — and it is the same check for every
paired structure on every page. We did not do it, and passed a wrong row as correct.

### Integration

473,835 B against the shipped 493,501 B — **smaller, because eight leaders' worth of high-frequency
white line is gone.** **`RC_PDF_Q` for `hepatitis` is 80** (target 1,153,788; q80 → 1,144,173).
Rebuilt 1,117 kB against 1,126 kB.

---

## `hyperkalemia` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15 (v105)

Eighth physician-corrected page. **2 of 3 rows fixed**, and both are clean single moves — the whole
page comes to **1,782 real pixels in three regions** (luma>25; the RGB count of 65,437 is the usual
4:4:4-over-4:2:0 chroma).

| row | label | was | now | sampled |
|---|---|---|---|---|
| 1 | ② Renal Medulla | (347,451), the **intact** kidney's capsule — (174,101,95) | **(562,453)** | **(117,49,41)**, a medullary pyramid in the **cut** kidney (pyramid reference (104,43,34)) |
| 2 | ④ Collecting Duct | (908,632) the DCT coil | **(962,617)** | (167,113,55), the thick branched collecting duct — essentially the sheet's target (960,620) |

**Row 2 is a clean move, not an extension** — the old position (908,632) samples the DCT coil
unchanged and carries no leader. That is the pattern the `gdm` and `ckd` entries above are warnings
about, done right.

### Row 1 — the collision the sheet tried to avoid, at 13 px

The sheet chose **(533,435)** specifically so the medulla dot would not collide with the ④ Collecting
Duct badge dot at (571,451). The new tip is at **x = 562** and that badge dot is at **x = 575** —
**13 px apart.** Two distinguishable dots, so not wrong, but tighter than intended. Worth a nudge
left if the file is opened again.

### Row 3 — ZERO changed pixels in both directions, and that is the right call

The square bracket at **x = 872, y 406–533** is still shared between **Loop of Henle** (y = 438) and
**Ascending Limb** (y = 504), and **Descending Limb still has no leader at all.**

**This one genuinely cannot be fixed in Photoshop.** The ascending limb is drawn *behind* the red and
blue vasa recta for most of its length, so a leader onto it reads as landing on a vessel until the
tube is brought clear — which is a re-render. Leaving it is correct; it stays on the production sheet.

### Integration

436,243 B against the shipped 435,024 B. **`RC_PDF_Q` for `hyperkalemia` is 81** (target 1,197,101;
q81 → 1,211,752). Rebuilt 1,183 kB against 1,169 kB.

---

## `hypothyroid` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15 (v106)

Ninth physician-corrected page. **1 of 7 rows fixed**, one attempted and short. The whole page comes
to **346 real pixels in a single region** (x 122–204, y 663–720) — the follicle panel. Rows 3–7
untouched, which is correct: four need re-measurement against the 1024×1536 master and the hyoid needs
artwork.

**Row 1 Parafollicular (C) cell — fixed.** The old horizontal leader at y 672–676 was **erased**
(137 px removed) and redrawn as a diagonal ending at **(166,700)**, on the olive-green C cell
(x 149–171, y 698–720). It had been at (128,673) in the colloid. The one C cell on the panel now
carries the label that names it, which is the panel's whole teaching point.

**Row 2 Capillary — not fixed, and the two now converge.** The leader was **extended** from x≈168 to
**x≈161** at y = 711 (ink measured at (245,240,237)), taking it *further into* the same green C cell
rather than off it. Parafollicular and Capillary now terminate on one structure.

**Third instance of the same failure mode**, after `ckd` p2's Bowman's capsule and `gdm` p2's
umbilical cord: **extending a leader toward its neighbour instead of relocating it.** The Capillary
target is unlabelled and unambiguous — (60,715) samples (160,80,70) and (100,727) samples
(131,46,51), both plainly vascular.

Net still an improvement: before, the only C cell on the panel was labelled "Capillary" and the C-cell
label sat in the colloid. Now the C cell is named correctly and one short move finishes the row.

### Two facts about this gallery that are not true of the others

- **The page ships at 800×1200**, not the 1024×1536 standard — one of the 27 sub-standard galleries.
  The re-export request is still outstanding, and every coordinate in
  `PRODUCTION-hypothyroid-p2.md` is in the shipped page's own pixels (×1.28 for standard-size).
- **Its files live at the REPO ROOT** (`hypothyroid-02.jpg`), not under `assets/<id>/` — its
  `galleries.json` entry has `base: ''` and a bare filename. A script that assumes `assets/<id>/`
  will not find this gallery.
- **Its PDF embeds at 547 px**, not 512. `RC_PDF_Q` is **72** (target 1,100,361; q72 → 1,099,929) —
  the lowest in the run, because the embed is wider and the source pages are only 800 px.

### Integration

317,948 B against the shipped 357,811 B — **11% smaller, the largest drop in the run**, because his
4:4:4 export re-encodes to this gallery's 4:2:0 on a dense, colourful page. Re-encode drift against
his file is max 58 / mean 1.25, which is chroma resampling, not lost work.

---

## `iron-anemia` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15 (v107)

Tenth physician-corrected page. **Both measured rows fixed**, and this one is the model for how a
two-tip leader should be repaired. 1,419 real pixels (luma>25) in two regions.

| row | label | was | now |
|---|---|---|---|
| 1 | **JEJUNUM** | **two terminators**, (196,670) and (204,652), both on haustrated colon | **one** leader to **(326,752)**, the smooth coiled small-bowel loops |
| 2 | ILEUM | (194,780) haustrated colon | **(223,782)**, ~29 px medial |

### The fault-8 repair is done properly — measure it this way

Both old terminators carried **30 and 24 ink px** on the shipped page and now measure **exactly
zero**; fork-region ink dropped 84 → 36. The forked leader was **erased and redrawn**, not
overdrawn.

Contrast `gdm` p2, where the tip was extended correctly but the old arrowhead was left in place
(17 px preserved, 1 removed) and the label ended up with two answers. **The check is an ink count at
the OLD terminator's coordinates: it must go to zero.** That is a two-line measurement and it
distinguishes a real fix from a cosmetic one.

### ILEUM is the tighter call, and colour cannot arbitrate it

The tip sits ~25 px from the colon border, and **this page defeats colour sampling**: haustrated
colon at (188,760) samples **(114,39,33)** against the tip's **(116,46,33)** — indistinguishable. The
verdict is a visual read at 10× (smooth loop, no haustral sacculation), not a measurement, and it is
stated that way.

**Worth generalising:** on a page where every candidate structure is the same tissue colour, the
sampling method that decided `ckd`, `depression` and `dementia` gives nothing. Fall back to
geometry — tube calibre, presence of haustra, stroke profiles — and say which method produced the
verdict.

The anatomically ideal ILEUM position is lower and more medial in the RLQ. Our sheet deliberately
gave no coordinate there because those loops sit behind the caecum and we would have been guessing
which is drawn in front; that still stands.

### Rows 3 and 4 untouched

Hemosiderin and Fe³⁺-bound-to-transferrin in the storage/transport panel: zero changed pixels. Both
were carried-not-measured on the sheet, so nothing is lost — but this is one of the four sheets
flagged for a re-sweep on the audit-the-panel basis.

### Integration

482,260 B against the shipped 481,265 B. **`RC_PDF_Q` for `iron-anemia` is 81** (target 1,225,013;
q81 → 1,237,821). Rebuilt 1,208 kB against 1,196 kB.

---

## `migraine` p2 — corrected in Photoshop by Dr. Kreithen, integrated 2026-08-15 (v108)

Eleventh physician-corrected page. **3 of 5 rows fixed**; the two left alone are both correct to
leave. 2,764 real pixels (luma>25) in three regions.

| row | label | was | now | proof |
|---|---|---|---|---|
| 2 | **C — Middle meningeal artery** | (598,412), bare cortex | **(577,435)** | sampled **(152,52,37)**, saturated red on the arterial tree; old-endpoint ink **5 → 0** |
| 4 | **F — Trigeminal ganglion** | (453,589), the trunk below the disc | **(446,554)** | sampled (197,140,93) beige — within 6 px of the ganglion hub at (448,548) |
| 5 | **C2 (cervical panel)** | (148,1263), neck muscle | **(140,1294)** | **distance to nearest yellow-nerve pixel: 14.1 px → 2.8 px** |

### The C2 measurement is the method to reuse on thin-structure rows

Rather than sampling *under* the tip — useless when the target is a 2 px nerve and the surround is
muscle — measure the **distance from the terminator to the nearest pixel of the target's own colour**.
It turns "is it on the nerve" into a number, and it worked here where colour sampling would not:
old 14.1 px, new 2.8 px, with C3's untouched control at 4.2 px as the calibration.

### C3 moved without being asked, and it is fine

The sheet listed C3 as correct and not to be touched; it went (150,1300) → (148,1320). Still on the
yellow ramus and slightly better centred (**4.2 → 2.2 px**), and still below C2 on the same
descending nerve, so the two have not swapped. **Checked specifically for a displaced series** —
both tips sit on the same continuous yellow chain at their own levels, ~25 px apart.

### Two rows untouched, both correctly

- **Row 3, D — Superficial temporal artery** — the fault-6 row. No extracranial vessel is drawn
  anywhere on the scalp or temple, so no leader move can fix it. Correct to leave; it needs artwork
  or the label comes off the figure.
- **Row 1, A — Dura mater** — still terminating on the **superior sagittal sinus**, so the page still
  names one blue tube both as a vein (B) and as a membrane (A). Ink at the old endpoint unchanged.
  The target is easy and already measured: **(470,283)**, the dark meningeal band between the bright
  inner table at y 279 and the cortex at y 286. Carried to the next pass.

### Integration

470,876 B against the shipped 469,997 B. **`RC_PDF_Q` for `migraine` is 80** (target 1,187,408;
q80 → 1,170,835).
