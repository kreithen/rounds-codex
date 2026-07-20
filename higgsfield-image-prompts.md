# Rounds Codex — USMLE Mode: hyperrealistic image prompt sheet

231 AI image-generation prompts (one per illustrated question), each tuned to its
vignette, for producing hyperrealistic, medically-accurate images (Higgsfield or
similar) to replace the current schematic SVGs.

## How to use
1. Generate the image from the **Prompt** for a given question ID.
2. Check it against **Must show (QA)** — a physician must confirm every finding is
   medically correct before it ships. Image models hallucinate anatomy/pathology; an
   accurate-looking but wrong image is worse than none.
3. If AI accuracy fails (common for ECGs and fine histology), use the **Real-image
   fallback** — prefer open-access sources (Radiopaedia CC, NIH/CDC PHIL, DermNet,
   PathologyOutlines, StatPearls/NCBI, Wikimedia Commons). Do NOT use copyrighted
   textbook or paywalled images.
4. Send me the finished images (or drop them in the MedCodex gallery) and I wire each
   into the app by question ID — no engine changes needed.

## Notes
- ECGs (s1-0012, s1-0061, s1-0136, s2ck-0001, s2ck-0009) and the genetics pedigree
  (s1-0002) render unreliably with AI — keep the app's accurate vector versions or use
  a real de-identified tracing as the primary asset; a best-effort prompt is included.
- Every prompt targets the KEYED correct diagnosis for that question.
- Radiographs suit a portrait frame; histology/US/fundus suit square or landscape. Add
  your generator's own aspect-ratio / quality flags as needed.

## Maintenance (master file)
This is the **canonical image-prompt master file** for the USMLE module. Whenever new
questions are created:
- For **every new question with an image/ECG anchor**, append one `###` section here in
  the same template (Case context / Modality / Prompt / Must show (QA) / Avoid / Real-image
  fallback), tuned to that vignette's demographics and keyed diagnosis.
- Keep sections grouped by exam and in ascending question-ID order.
- ECGs and pure diagrams (pedigrees, pathways): keep the app's vector version or a real
  tracing as primary; include a best-effort prompt anyway.
- After generating and physician-verifying an image, it gets wired into the app by ID
  (`RC_ILLUS[id]`); note "wired" next to that ID if helpful for tracking.

---

### s1-0002 - Mitochondrial (maternal) inheritance  (Step 1 - General Principles)
- **Case context:** 15-year-old with MELAS (stroke-like episodes, elevated lactate, ragged red fibers); the image is a three-generation family pedigree showing every child of an affected woman affected, and no child of an affected man affected.
- **Modality:** Schematic clinical genetics pedigree chart (line diagram, not a photorealistic medical image).
- **Prompt:** Clean vector-style medical genetics pedigree chart on a white background, standard human genetics symbols, high-resolution textbook clarity, three generations connected by clear horizontal mating lines and vertical sibship lines. Use squares for males and circles for females; fully filled-in solid black symbols indicate affected individuals and open (white) symbols indicate unaffected individuals. Generation I: an affected female (filled circle) mated to an unaffected male (open square). Generation II: ALL of that affected mother's children are affected (every symbol filled), including both sons and daughters; also show an affected male (filled square) from another branch mated to an unaffected female whose children are ALL unaffected (open symbols). Generation III: the affected Generation II females again transmit to all of their offspring (filled symbols), while affected Generation II males transmit to none (open symbols). The visual rule must be unmistakable: affected mothers pass the trait to 100% of offspring; affected fathers pass it to 0%. Roman numerals I, II, III label generations at the left margin only as part of the standard chart. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Squares = male, circles = female (standard orientation, males typically left in each pair)
  - Every offspring of an affected female is affected (both sexes)
  - No offspring of an affected male is affected
  - At least three generations with clear connecting lines
  - Consistent filled = affected, open = unaffected convention
- **Avoid (negative prompt):** male-to-male or male-to-offspring transmission of the trait; a 50/50 dominant pattern; carrier half-filled/dotted symbols implying recessive/X-linked; diagonal deceased slashes changing meaning; skipped generations; diamonds (unknown sex); any gonadal/ovary anatomy imagery.
- **Real-image fallback:** Wikimedia Commons search "mitochondrial inheritance pedigree" or "maternal inheritance pedigree chart"; alternatively generate the pedigree as an app-native SVG (most reliable for genetics diagrams).

### s1-0006 - Parkinson disease  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** 68-year-old man with resting tremor, rigidity, micrographia, hypomimia, shuffling gait, levodopa-responsive; the image is a Lewy body - a pigmented substantia nigra neuron with a round eosinophilic cytoplasmic inclusion surrounded by a pale halo.
- **Modality:** H&E histology, high-power (approximately 400x/oil, 600-1000x-equivalent detail) photomicrograph of pigmented midbrain (substantia nigra) neuron.
- **Prompt:** High-power hematoxylin and eosin photomicrograph of substantia nigra, correct H&E color balance (blue-purple nuclei, pink cytoplasm and neuropil), diagnostic histopathology quality, oil-immersion sharpness at roughly 400-600x. Center on a single large pigmented dopaminergic neuron whose cytoplasm contains coarse granular brown-black neuromelanin pigment. Within that neuron's cytoplasm show one round-to-oval, intensely eosinophilic (bright pink) hyaline inclusion body, sharply demarcated, with a dense pink core surrounded by a thin pale/clear peripheral halo, displacing the nucleus to one side - a classic Lewy body. Surrounding neuropil and a few smaller neurons and glial nuclei provide realistic tissue context; a background scattering of extraneural neuromelanin from degenerating neurons is acceptable. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Pigmented (neuromelanin-containing, brown-black) neuronal cytoplasm
  - Single round eosinophilic intracytoplasmic inclusion with a pale halo
  - Eccentrically displaced neuronal nucleus
  - Correct H&E staining and realistic brain-tissue neuropil
- **Avoid (negative prompt):** basophilic/blue inclusions; multiple targetoid concentric rings resembling a red blood cell or Michaelis-Gutmann body; extracellular amyloid plaques or neurofibrillary tangles (Alzheimer); intranuclear inclusions; ballooned neurons; liver/other epithelial tissue; overly cartoonish uniform circle.
- **Real-image fallback:** PathologyOutlines "Lewy body substantia nigra"; Wikimedia Commons "Lewy body H&E"; Radiopaedia/neuropathology atlases for substantia nigra Lewy body.

### s1-0010 - Pemphigus vulgaris  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 52-year-old woman with painful oral erosions, flaccid easily-ruptured skin bullae, positive Nikolsky sign, suprabasal acantholysis; the image is direct immunofluorescence showing a net-like (reticular/"chicken-wire") intercellular IgG pattern throughout the epidermis.
- **Modality:** Direct immunofluorescence (DIF) photomicrograph of a skin biopsy, fluorescence microscopy on a dark field.
- **Prompt:** Direct immunofluorescence photomicrograph of a skin biopsy on a black background, bright apple-green FITC fluorescence, fluorescence-microscopy realism, medium-high power. Show the epidermis with anti-IgG green fluorescence outlining the intercellular spaces between keratinocytes in a delicate net-like, reticular "chicken-wire" or "fishnet" pattern that surrounds each polygonal keratinocyte throughout the full thickness of the epidermis (from just above the basal layer up toward the granular layer). The keratinocyte cell bodies remain dark while their intercellular junctions glow green, producing a honeycomb mesh. The dermo-epidermal basement membrane zone is NOT highlighted as a bright continuous line. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Green intercellular reticular / fishnet ("chicken-wire") staining around keratinocytes
  - Staining spans the epidermal thickness, not just one linear zone
  - Dark keratinocyte cytoplasm outlined by bright junctions
  - No smooth linear basement-membrane band
- **Avoid (negative prompt):** a smooth linear/continuous band along the dermal-epidermal junction (that is bullous pemphigoid); granular deposits in dermal papillary tips (dermatitis herpetiformis); subepidermal cleft; H&E pink/purple coloration; scattered random speckles without the net pattern; tissue on white background.
- **Real-image fallback:** DermNet NZ "pemphigus vulgaris direct immunofluorescence"; PathologyOutlines "pemphigus vulgaris DIF intercellular IgG"; Wikimedia Commons "pemphigus immunofluorescence".

### s1-0012 - Class III antiarrhythmic / Torsades (sotalol)  (Step 1 - Cardiovascular)
- **Case context:** 66-year-old woman with atrial fibrillation started on sotalol; three days later palpitations and syncope. The tracing must show a markedly prolonged QT interval followed by a run of polymorphic VT with a twisting axis (torsades de pointes).
- **Modality:** 12-lead ECG or rhythm strip (ECG waveform).
- **Prompt:** NOTE FOR PRODUCTION: AI image models routinely render anatomically impossible, gibberish ECG waveforms with wrong intervals - for this item a REAL de-identified torsades ECG or the app's own vector ECG tracing should be the PRIMARY asset; use the generated image only as decorative fallback. Best-effort prompt: Clean single-lead rhythm strip on standard red ECG graph paper (fine 1 mm squares grouped into 5 mm bold boxes), black tracing, calibrated and photorealistic like a printed monitor strip. Begin with two or three sinus beats that each show an abnormally long QT interval - a distinctly prolonged, broad T wave far separated from its QRS. Then transition into a run of polymorphic ventricular tachycardia in which the QRS complexes continuously change amplitude and appear to twist and rotate around the isoelectric baseline in a spindle pattern (peaks progressively taller then shorter then taller, "twisting of the points"), at a rapid rate. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Preceding beats with clearly long QT interval
  - Polymorphic VT with sinusoidal amplitude waxing/waning around baseline (twisting axis)
  - Standard ECG grid, realistic calibration
- **Avoid (negative prompt):** monomorphic uniform VT; regular narrow-complex tachycardia; coarse ventricular fibrillation with no twisting envelope; nonsensical squiggles that are not physiologic complexes; short/normal QT before the run.
- **Real-image fallback:** Use a real tracing - LITFL ECG Library "torsades de pointes", Wikimedia Commons "torsades de pointes ECG"; or render app vector tracing (PRIMARY recommendation for any ECG item).

### s1-0021 - Burkitt lymphoma  (Step 1 - Multisystem)
- **Case context:** 8-year-old boy with a rapidly enlarging jaw/facial mass, prior EBV infection; the image is high-grade lymphoma histology with sheets of intermediate-sized lymphocytes interspersed with pale tingible-body macrophages producing a "starry-sky" appearance and a near-100% proliferation index.
- **Modality:** H&E histology, high-power (approximately 400x/oil) photomicrograph.
- **Prompt:** High-power hematoxylin and eosin photomicrograph of a lymphoid neoplasm, correct H&E staining (deep basophilic nuclei, thin pink cytoplasm), diagnostic histopathology sharpness at roughly 400x oil immersion. Show a diffuse monotonous sheet of intermediate-sized lymphocytes with round nuclei, coarse chromatin, several small nucleoli, and scant cytoplasm, packed edge to edge and appearing very cellular and "blue." Numerous frequent mitotic figures and apoptotic bodies are present. Scattered evenly throughout the dark sheet are pale, clear, rounded macrophages (tingible-body macrophages) with abundant light pink-to-clear cytoplasm containing engulfed apoptotic debris - these pale spaces on the dark background create the classic "starry-sky" pattern (bright stars scattered across a dark night sky). no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dense monotonous sheet of intermediate-sized basophilic lymphocytes
  - Evenly scattered pale tingible-body macrophages producing the starry-sky effect
  - High mitotic/apoptotic activity (many mitoses)
  - Correct H&E, high magnification
- **Avoid (negative prompt):** large pleomorphic Reed-Sternberg cells (Hodgkin); follicular/nodular architecture; small mature lymphocytes only; too few or absent macrophages (no stars); pink epithelial/carcinoma tissue; low cellularity.
- **Real-image fallback:** PathologyOutlines "Burkitt lymphoma starry sky"; Wikimedia Commons "Burkitt lymphoma histology starry sky"; ImageBank (ASH) Burkitt lymphoma.

### s1-0030 - G6PD deficiency  (Step 1 - Immune / Blood & Lymphoreticular)
- **Case context:** 19-year-old man of Mediterranean descent with acute hemolysis (jaundice, dark urine) two days after starting an antimalarial; the image is a peripheral smear showing "bite" cells and, on supravital stain, dark intracellular Heinz bodies.
- **Modality:** Peripheral blood smear - Wright-Giemsa for bite cells, PLUS a supravital stain (crystal violet / new methylene blue) for Heinz bodies; high-power oil immersion (approximately 1000x).
- **Prompt:** High-power oil-immersion photomicrograph of a peripheral blood smear, photorealistic hematology quality at roughly 1000x. Wright-Giemsa field: red cells (erythrocytes) on a clean background with several "bite cells" (degmacytes) - otherwise round red cells from which one or two smooth semicircular peripheral "bites" of membrane have been cleanly removed - plus a few "blister"/hemighost cells with hemoglobin retracted to one side; occasional polychromatophilic (bluish) reticulocytes indicate reticulocytosis. Include, as a paired supravital-stain field, red cells stippled with multiple small, round, dark blue-purple refractile inclusions clustered near the cell membrane (Heinz bodies), which are visible only with the supravital dye. Scattered normal biconcave red cells and a rare neutrophil provide context. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bite cells (clean semicircular membrane defects) on Wright-Giemsa
  - Heinz bodies as small dark membrane-adjacent inclusions on supravital stain
  - Some polychromasia/reticulocytes (active hemolysis)
  - Realistic red-cell morphology and staining
- **Avoid (negative prompt):** spherocytes as the dominant finding (that is HS/AIHA); sickle cells; schistocytes/helmet fragments as primary; target cells everywhere; Heinz bodies shown on a routine Wright-Giemsa (they need supravital stain); Howell-Jolly bodies mislabeled as Heinz bodies.
- **Real-image fallback:** ASH ImageBank "bite cells G6PD"; Wikimedia Commons "Heinz bodies" and "bite cell"; PathologyOutlines G6PD deficiency smear.

### s1-0031 - Multiple sclerosis  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** 31-year-old woman with relapsing optic neuritis and limb symptoms, internuclear ophthalmoplegia, heat sensitivity, oligoclonal bands; the image is a brain MRI with multiple ovoid periventricular white-matter lesions oriented perpendicular to the ventricles (Dawson fingers).
- **Modality:** MRI brain - FLAIR sequence, sagittal (best for Dawson fingers) or axial.
- **Prompt:** Diagnostic-quality grayscale MRI of the brain, FLAIR sequence, DICOM-like high dynamic range, radiological realism, cerebrospinal fluid suppressed (dark ventricles) with gray-white differentiation. Sagittal (or para-sagittal) view through the lateral ventricle showing multiple ovoid hyperintense (bright) white-matter lesions arising from the callosal/periventricular surface and extending into the deep white matter perpendicular to the long axis of the lateral ventricle, radiating outward like flames - the classic "Dawson fingers." Lesions are discrete, ovoid, several millimeters to a centimeter, bright against darker white matter, most concentrated around the ventricular margins and corpus callosum. Anatomy of the brain, ventricles, corpus callosum, and skull is correct and symmetric. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multiple ovoid periventricular bright FLAIR lesions
  - Lesions oriented perpendicular to the ventricle (Dawson fingers), involving corpus callosum/callososeptal interface
  - CSF-suppressed FLAIR contrast (dark ventricles), correct brain anatomy
- **Avoid (negative prompt):** a single large mass with edema (tumor); symmetric confluent periventricular capping only (leukoaraiosis) without radiating fingers; hemorrhage/blood products; lesions parallel to ventricle; distorted/asymmetric skull or duplicated ventricles; CT-like bone window.
- **Real-image fallback:** Radiopaedia "multiple sclerosis Dawson fingers FLAIR"; Wikimedia Commons "multiple sclerosis MRI periventricular".

### s1-0034 - Gout (monosodium urate crystals)  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 55-year-old man with acute podagra (red, swollen first MTP joint) after red meat and beer; the image is polarized-light microscopy of synovial fluid showing needle-shaped crystals that appear yellow when parallel to the compensator (negative birefringence).
- **Modality:** Compensated polarized light microscopy of synovial (joint) fluid aspirate; high power.
- **Prompt:** Photorealistic compensated polarized-light photomicrograph of synovial fluid, high magnification, with a first-order red (rose) compensator giving a characteristic magenta/pink-red background field. Show slender, straight, needle-shaped and rod-shaped crystals, some lying free and some engulfed within neutrophils. Crystals oriented PARALLEL to the axis of the compensator appear bright YELLOW, and crystals oriented perpendicular appear blue - i.e., strong negative birefringence - with the yellow, parallel-oriented needles emphasized. Crystals are long, thin, and sharply pointed (needle-like), clearly distinct from any rhomboid shape. A few neutrophil nuclei are visible around and impaling the crystals. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Needle/rod-shaped crystals (not rhomboid)
  - Negative birefringence: yellow when parallel to compensator (and blue when perpendicular)
  - Magenta compensated background; some intracellular crystals within neutrophils
- **Avoid (negative prompt):** rhomboid/short rectangular crystals (that is CPPD/pseudogout); positive birefringence (blue-when-parallel); crystals shown blue-when-parallel; plain non-polarized bright field with no color axis effect; cholesterol plate-like crystals with notched corners; H&E tissue.
- **Real-image fallback:** PathologyOutlines "gout monosodium urate crystals polarized"; Wikimedia Commons "monosodium urate crystals negative birefringence"; DermNet/rheumatology atlases.

### s1-0036 - Tetralogy of Fallot (boot-shaped heart)  (Step 1 - Cardiovascular)
- **Case context:** 2-year-old boy with cyanotic "tet" spells relieved by squatting and a harsh systolic murmur; the image is a chest radiograph showing a boot-shaped heart (coeur en sabot) with decreased pulmonary vascular markings.
- **Modality:** Pediatric frontal (AP/PA) chest radiograph.
- **Prompt:** Grayscale frontal chest radiograph of a young child, DICOM-like high dynamic range, diagnostic radiographic quality, correct pediatric thoracic anatomy. The cardiac silhouette has the classic "boot shape" (coeur en sabot): an upturned, rounded cardiac apex lifted off the left hemidiaphragm due to right ventricular hypertrophy, together with a concave/absent main pulmonary artery segment along the upper left heart border, giving the boot toe-and-heel contour. The pulmonary vascular markings are DECREASED, so the lung fields appear relatively dark/oligemic and clear rather than congested. Heart size overall not markedly enlarged. Ribs, clavicles, and mediastinum are anatomically correct; a right-sided aortic arch may be subtly suggested. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Boot-shaped heart with upturned apex (RVH)
  - Concave/absent main pulmonary artery segment (narrow upper mediastinal waist)
  - Decreased pulmonary vascular markings (oligemic lungs)
  - Correct pediatric CXR anatomy
- **Avoid (negative prompt):** increased/congested pulmonary vascularity or pulmonary edema; markedly enlarged globular cardiomegaly; "egg on a string" narrow pedicle (transposition); "snowman"/figure-3 contour (TAPVR/coarctation); adult chest; rib fractures or lines/tubes.
- **Real-image fallback:** Radiopaedia "tetralogy of Fallot boot-shaped heart chest X-ray"; Wikimedia Commons "coeur en sabot".

### s1-0039 - Minimal change disease  (Step 1 - Respiratory & Renal/Urinary)
- **Case context:** 5-year-old boy with acute nephrotic syndrome (periorbital/leg edema, frothy urine, heavy selective proteinuria, hypoalbuminemia, normal complement); the image is a glomerular electron micrograph showing diffuse podocyte foot-process effacement with otherwise normal architecture.
- **Modality:** Transmission electron microscopy (TEM) of the glomerular filtration barrier - grayscale ultrastructural image.
- **Prompt:** Grayscale transmission electron micrograph of the glomerular capillary wall, high-magnification ultrastructural realism, fine detailed EM texture. Show a segment of glomerular basement membrane of normal, uniform thickness with a patent capillary lumen on one side (containing a red-cell/endothelial fenestrated layer) and the urinary space on the other. Along the outer (urinary) aspect, the podocyte cytoplasm is spread out as a continuous flattened, fused sheet - diffuse EFFACEMENT of the foot processes - so that the normal discrete finger-like foot processes with slit diaphragms between them are lost and replaced by a smooth continuous rim of podocyte cytoplasm hugging the basement membrane. There are NO electron-dense immune-complex deposits anywhere in the basement membrane, subepithelial, or subendothelial spaces; the GBM is clean and even. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diffuse effacement/fusion of podocyte foot processes (smooth continuous podocyte rim)
  - Normal-thickness glomerular basement membrane
  - Absence of electron-dense deposits
  - Realistic grayscale EM ultrastructure
- **Avoid (negative prompt):** subepithelial "hump" deposits (post-strep); subepithelial spikes/dense deposits (membranous); subendothelial deposits or GBM splitting/tram-tracking (MPGN); mesangial deposits; thickened/nodular GBM (diabetic); any bright color/H&E look; light-microscopy glomerulus.
- **Real-image fallback:** PathologyOutlines "minimal change disease electron microscopy foot process effacement"; Wikimedia Commons "podocyte effacement EM".

### s1-0040 - Celiac disease  (Step 1 - Gastrointestinal)
- **Case context:** 32-year-old woman with chronic diarrhea, weight loss, iron-deficiency anemia, itchy vesicular rash (dermatitis herpetiformis), and positive IgA anti-tissue transglutaminase; the image is a duodenal biopsy showing villous atrophy, crypt hyperplasia, and increased intraepithelial lymphocytes.
- **Modality:** H&E histology of a duodenal/small-bowel mucosal biopsy; low-to-medium power (approximately 40-100x for architecture, with intraepithelial lymphocytes visible).
- **Prompt:** Photorealistic hematoxylin and eosin photomicrograph of a duodenal mucosal biopsy, correct H&E staining (blue-purple nuclei, pink lamina propria), diagnostic histopathology quality, low-to-medium magnification showing full mucosal architecture. The normal tall finger-like villi are markedly blunted and flattened - villous atrophy giving a flat mucosal surface with a low villus-to-crypt ratio - while the crypts of Lieberkuhn are elongated and hyperplastic (crypt hyperplasia). The surface enterocyte layer shows a markedly increased number of small dark intraepithelial lymphocytes infiltrating between the epithelial cells, and the lamina propria is expanded by a dense chronic inflammatory (plasma cell and lymphocyte) infiltrate. Overall the mucosa looks flat rather than villous. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Blunted/flattened villi (villous atrophy), low villus:crypt ratio
  - Crypt hyperplasia (elongated crypts)
  - Increased intraepithelial lymphocytes in the surface epithelium
  - Lamina propria chronic inflammatory expansion; correct H&E and duodenal architecture
- **Avoid (negative prompt):** tall normal finger-like villi; colonic mucosa with straight crypts and goblet cells (wrong site); granulomas; PAS-positive foamy macrophages (Whipple); acute neutrophilic cryptitis/abscesses as dominant feature; parasites; gastric mucosa.
- **Real-image fallback:** PathologyOutlines "celiac disease duodenum villous atrophy"; Wikimedia Commons "celiac disease histopathology"; DermNet for the associated dermatitis herpetiformis rash if a clinical image is needed.

### s1-0045 - Diphtheria toxin  (Step 1 - Multisystem)
- **Case context:** Unvaccinated 6-year-old recent immigrant with fever, sore throat, marked cervical swelling, and evolving myocarditis. Image must show the pathognomonic gray adherent pharyngeal pseudomembrane over the tonsils and posterior pharynx that bleeds when scraped.
- **Modality:** Clinical intraoral photograph (throat exam view).
- **Prompt:** Hyperrealistic clinical intraoral photograph of a young child's oropharynx taken during a throat examination with a tongue depressor and good overhead light, natural skin and mucosal tones, shallow depth of field. Show a thick, gray to grayish-white, firmly ADHERENT pseudomembrane coating both tonsils and extending across the posterior pharyngeal wall and uvula, with a dull leathery non-glistening surface; the membrane edges show a few pinpoint areas of raw bleeding where it has been disturbed, and the surrounding mucosa is dusky red and edematous. Tonsils are enlarged and asymmetrically covered. Realistic saliva sheen, moist pink normal mucosa at the margins for contrast. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Confluent gray adherent membrane crossing anatomical boundaries (tonsils + posterior pharynx + uvula), dull non-purulent appearance, focal bleeding at scraped margins, surrounding erythema and edema.
- **Avoid (negative prompt):** White cryptic tonsillar exudate that wipes off easily (strep/mono look), yellow pus points, cobblestone posterior pharynx, isolated single-tonsil coverage, cartoonish rendering, dental artifacts, extra teeth, distorted uvula anatomy.
- **Real-image fallback:** CDC PHIL (search "diphtheria pseudomembrane pharynx", PHIL ID 5325) or Wikimedia Commons "Diphtheria bull neck / pharyngeal pseudomembrane".

### s1-0056 - Alzheimer disease  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** 74-year-old woman, progressive amnestic dementia, hippocampal/cortical atrophy on MRI. Image must show cortical extracellular neuritic (amyloid) plaques and intracellular neurofibrillary tangles.
- **Modality:** Silver-stain (Bielschowsky) neuropathology histology, high magnification (approx 400x); alternatively immunohistochemistry, but the vignette specifies silver stain.
- **Prompt:** Photorealistic photomicrograph of cerebral cortex, Bielschowsky silver stain, high-power (approx 400x) brightfield microscopy on a pale beige-brown background typical of silver impregnation. Show one or two rounded extracellular NEURITIC PLAQUES: a dense dark-brown central amyloid core surrounded by a halo of thickened, tortuous argyrophilic dystrophic neurites. Adjacent pyramidal neurons contain intracytoplasmic NEUROFIBRILLARY TANGLES appearing as dense flame-shaped or basket-like black-brown fibrillar aggregates that fill the neuronal cell body and taper into the apical dendrite. Include scattered normal neurons and neuropil for context, crisp fibrillar detail, correct histologic morphology. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Extracellular plaque with distinct central core and radiating neuritic halo; intraneuronal flame-shaped tangles; silver-stain color palette (brown/black on tan), correct cortical architecture.
- **Avoid (negative prompt):** Purple/pink H&E palette when silver is requested, Congo-red apple-green birefringence, Lewy bodies (single round eosinophilic inclusion with halo), granulovacuolar degeneration substituted for tangles, random dots without plaque structure, glomeruli/other-organ tissue.
- **Real-image fallback:** PathologyOutlines "Alzheimer disease neurofibrillary tangles neuritic plaques"; Wikimedia Commons "Neurofibrillary tangles Bielschowsky"; NIA/NIH image library.

### s1-0060 - Melanoma prognosis  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 50-year-old man, changing pigmented lesion on the back, now larger, itchy, occasionally bleeding; biopsy = dermal-invasive melanoma. Image must show an ~8 mm asymmetric pigmented macule with irregular notched borders and multiple shades of brown/black.
- **Modality:** Clinical dermatology photograph (skin surface), optionally dermoscopic; vignette describes a clinical macule.
- **Prompt:** Hyperrealistic close-up clinical dermatology photograph of a pigmented lesion on the skin of an adult man's back, realistic fair-to-medium skin with visible pores, fine terminal hairs and natural lighting. Show a single flat-to-slightly-raised macule about 8 mm across that is markedly ASYMMETRIC, with IRREGULAR, notched, scalloped borders and COLOR VARIEGATION spanning tan, several shades of brown, blue-black and jet black in a haphazard pattern; one edge shows a tiny focus of dried surface blood/crust. Surrounding skin is normal. Sharp macro focus, true-to-life color, dermatologically accurate. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Asymmetry, irregular/notched border, at least three distinct colors within one lesion, ~8 mm size proportion, subtle bleeding/crust, single lesion.
- **Avoid (negative prompt):** Uniform round symmetric benign nevus, evenly tan mole, multiple identical moles, wart/seborrheic keratosis stuck-on look, ruler or dermatoscope frame overlay, exaggerated 3D tumor mass (this is an early invasive macule), unrealistic plastic skin.
- **Real-image fallback:** DermNet NZ "melanoma"; ISIC Archive melanoma images; Wikimedia Commons "malignant melanoma ABCDE".

### s1-0061 - Inferior myocardial infarction  (Step 1 - Cardiovascular)
- **Case context:** 62-year-old man, 45 min crushing substernal chest pain radiating to jaw, diaphoresis, nausea, bradycardic and hypotensive. ECG must show ST-segment elevation in leads II, III, and aVF (inferior STEMI, likely RCA).
- **Modality:** 12-lead ECG tracing. NOTE: AI generators render gibberish/anatomically-invalid ECG waveforms (wrong complex morphology, impossible intervals, mislabeled leads). Recommend a REAL de-identified inferior-STEMI ECG or the app's own vector tracing as PRIMARY; use the prompt only as a stopgap.
- **Prompt:** Photorealistic scan of a standard 12-lead ECG printed on light pink/red millimeter graph paper with fine 1 mm and bold 5 mm gridlines, clean black tracing, standard 3x4 lead layout (I, II, III / aVR, aVL, aVF / V1-V3 / V4-V6) plus a rhythm strip. Depict an acute INFERIOR STEMI: clear convex/coved ST-segment ELEVATION with early hyperacute T waves in leads II, III, and aVF (ST elevation greater in III than II), with RECIPROCAL ST DEPRESSION in leads I and aVL; sinus BRADYCARDIA at roughly 45-50 bpm with normal narrow QRS complexes and upright P waves. Physiologically consistent, evenly spaced beats. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** ST elevation localized to II/III/aVF, reciprocal depression in I/aVL, slow rate, otherwise normal-width QRS. If real image used, confirm inferior (not anterior V1-V4) distribution.
- **Avoid (negative prompt):** Random/gibberish waveforms, ST elevation in precordial V1-V4 (that is anterior LAD, wrong answer), tachycardia, wandering baseline nonsense, impossible negative intervals, duplicated leads, garbled lead names.
- **Real-image fallback:** Life in the Fast Lane (LITFL) ECG Library "inferior STEMI RCA occlusion"; Radiopaedia "inferior myocardial infarction ECG"; Wikimedia Commons "Inferior MI ECG". Prefer app vector tracing.

### s1-0063 - Sarcoidosis  (Step 1 - Respiratory & Renal/Urinary)
- **Case context:** 35-year-old African American woman, dry cough, dyspnea, erythema nodosum, anterior uveitis, high ACE and calcium, noncaseating granulomas. Image must be a chest radiograph showing symmetric bilateral hilar lymphadenopathy.
- **Modality:** Frontal (PA) chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal PA chest radiograph, grayscale with high dynamic range, diagnostic DICOM-like quality, correct thoracic anatomy of an adult woman. Show SYMMETRIC BILATERAL HILAR LYMPHADENOPATHY: both hila are enlarged, lobulated and well-defined ("potato nodes"), with additional right paratracheal fullness, producing a symmetric widened bilateral hilar silhouette. The lung fields are relatively clear or show only faint fine reticulonodular markings; the cardiac silhouette is normal size, costophrenic angles sharp, no pleural effusion. Sharp bony detail of ribs and clavicles, proper mediastinal contours. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Bilateral SYMMETRIC lobulated hilar enlargement, normal heart size, clear or minimally reticulonodular lungs, no effusion.
- **Avoid (negative prompt):** Unilateral hilar mass (suggests malignancy/TB), lobar consolidation, large pleural effusion, cardiomegaly with vascular congestion, Ghon complex calcification, distorted/asymmetric rib cage, lateral view when frontal requested.
- **Real-image fallback:** Radiopaedia "sarcoidosis bilateral hilar lymphadenopathy chest x-ray"; Wikimedia Commons "Sarcoidosis chest radiograph bilateral hilar".

### s1-0064 - Acute tubular necrosis  (Step 1 - Respiratory & Renal/Urinary)
- **Case context:** Oliguric AKI after prolonged intraoperative hypotension, FENa >2%, BUN:Cr ~12 (ischemic ATN). Image must be urine microscopy showing muddy brown granular casts.
- **Modality:** Urine sediment brightfield microscopy, high power (approx 400x), unstained wet mount.
- **Prompt:** Photorealistic brightfield photomicrograph of a urine sediment wet-mount preparation at high power (approx 400x), pale gray-yellow background typical of unstained urine microscopy, slightly out-of-plane debris around a central in-focus object. Show one or two classic MUDDY BROWN GRANULAR CASTS: elongated cylindrical structures with rounded ends and parallel sides (conforming to renal tubule shape), filled with coarse brown-tan granular material giving a dirty pigmented appearance. Include a few scattered renal tubular epithelial cells and fine debris; no or minimal red cells. Realistic optical depth, true cast cylinder morphology. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Cylindrical cast shape (parallel walls, rounded ends), coarse brown pigmented granularity, urine-microscopy palette, sparse background cells.
- **Avoid (negative prompt):** Red cell casts (RPGN, wrong answer), white cell casts (AIN), hyaline clear casts only, crystalline shapes, blood smear appearance, H&E tissue section, perfectly geometric cylinders, text callouts.
- **Real-image fallback:** PathologyOutlines / American Society of Nephrology "muddy brown granular casts ATN"; Wikimedia Commons "granular cast urine microscopy".

### s1-0065 - Crohn disease  (Step 1 - Gastrointestinal)
- **Case context:** 24-year-old, crampy pain, non-bloody diarrhea, weight loss, oral ulcers, perianal fistula; skip involvement of terminal ileum and colon; transmural inflammation with noncaseating granulomas. Image must show cobblestone mucosa with linear serpiginous ulcers and intervening skip (normal) areas.
- **Modality:** Endoscopic (colonoscopy) photograph, intraluminal view.
- **Prompt:** Hyperrealistic colonoscopy endoscopic photograph, wide-angle intraluminal view with characteristic endoscope illumination, glistening moist bowel mucosa, subtle barrel-distortion at edges. Show a COBBLESTONE mucosal pattern: raised islands of edematous mucosa separated by deep, linear and SERPIGINOUS ULCERS creating a paving-stone appearance, with adjacent segments of relatively NORMAL smooth pink mucosa (skip areas) for contrast. Some ulcer bases show whitish exudate/fibrin; the lumen curves into the distance. Realistic mucosal vascular pattern preserved in the normal segments and lost over inflamed areas. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Cobblestoning (islands + linear serpiginous ulcers), clear skip areas of normal mucosa, patchy/discontinuous involvement, endoscopic lighting realism.
- **Avoid (negative prompt):** Continuous circumferential friable erythema with loss of vascularity throughout (that is ulcerative colitis, wrong answer), pseudomembranes (C. diff), pedunculated polyp, diverticular openings, gross external bowel photo, unrealistic tube geometry.
- **Real-image fallback:** Radiopaedia / WGO endoscopy atlas "Crohn disease cobblestoning serpiginous ulcers"; Wikimedia Commons "Crohn's disease colonoscopy cobblestone".

### s1-0070 - Lyme disease  (Step 1 - Multisystem)
- **Case context:** Midsummer hiker in northeastern US, enlarging red thigh lesion with central clearing, low fever, myalgias (erythema migrans, Borrelia burgdorferi). Image must show a single large targetoid bull's-eye erythematous plaque with central clearing.
- **Modality:** Clinical dermatology photograph of the thigh.
- **Prompt:** Hyperrealistic clinical dermatology photograph of the thigh of an adult, natural skin tone with fine hair and realistic lighting. Show a single large (10-20 cm) round-to-oval ERYTHEMA MIGRANS lesion: a flat, expanding erythematous patch with a distinct BULL'S-EYE / TARGETOID appearance, a red advancing outer ring, a zone of CENTRAL CLEARING (skin returning toward normal color), and a small red macule or punctum at the very center marking the tick bite. Borders are smooth and slightly raised; the lesion is not scaly and not pustular. Surrounding skin normal. Photorealistic, dermatologically accurate. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Single large annular lesion, concentric target pattern with central clearing and central punctum, non-scaly flat erythema, large size relative to limb.
- **Avoid (negative prompt):** Multiple small target lesions of erythema multiforme, scaly ringworm border, vesicles/pustules, purpuric petechial rash (RMSF), cellulitis solid erythema without clearing, tick still attached with distorted anatomy, wound/ulcer.
- **Real-image fallback:** CDC PHIL "erythema migrans Lyme" (PHIL IDs 9875, 9874); DermNet NZ "erythema migrans"; Wikimedia Commons "Bullseye Lyme disease rash".

### s1-0071 - Retinoblastoma (two-hit hypothesis)  (Step 1 - Multisystem)
- **Case context:** 18-month-old with white pupillary reflex in the LEFT eye on flash photos and new esotropia (inward turning) of that eye; hereditary RB1. Image must show leukocoria (white pupillary reflex) in the left eye.
- **Modality:** Clinical photograph of a child's face (flash photography capturing the pupillary reflex).
- **Prompt:** Hyperrealistic clinical/flash photograph of a toddler's face, natural infant skin, soft realistic lighting mimicking camera flash. Show LEUKOCORIA in the LEFT eye: the left pupil reflects a solid WHITE/creamy pupillary reflex instead of the normal red reflex, filling the pupil with an opaque white glow, while the RIGHT eye shows a normal reddish-orange red reflex for contrast. The left eye is subtly turned inward (esotropia). Both eyes otherwise anatomically normal with correct symmetric orbits, natural eyelids and lashes. Photorealistic, medically accurate ophthalmic appearance. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** White reflex in left pupil, normal red reflex in right pupil for contrast, mild inward deviation of the affected eye, correct pediatric facial anatomy.
- **Avoid (negative prompt):** Both eyes white, corneal opacity/scarring instead of pupillary white reflex, cataract rendered as gray haze over whole cornea, asymmetric/deformed eyes, extra eyes, glowing anime effect, adult face.
- **Real-image fallback:** NIH/National Eye Institute image library "leukocoria retinoblastoma"; Wikimedia Commons "Leukocoria" / "Retinoblastoma white reflex".

### s1-0085 - Psoriasis  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 30-year-old with well-demarcated erythematous plaques with thick silvery scale on elbows, knees, scalp; Auspitz sign, nail pitting, aching finger joints. Image must show sharply demarcated erythematous plaques with thick silvery-white scale over extensor surfaces.
- **Modality:** Clinical dermatology photograph (extensor surface, e.g., elbow/knee).
- **Prompt:** Hyperrealistic clinical dermatology photograph of the extensor surface of an adult elbow (and forearm), realistic skin with natural lighting and texture. Show several SHARPLY DEMARCATED, well-defined erythematous PLAQUES with a bright salmon-red base covered by thick, adherent, SILVERY-WHITE micaceous SCALE; borders are abrupt against normal surrounding skin, and the scale flakes at the surface. Plaques are slightly raised with a dry appearance. True-to-life dermatologic color and morphology. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Well-demarcated plaques, silvery-white loosely adherent scale, salmon/red erythematous base, extensor (elbow/knee) location, sharp border transition to normal skin.
- **Avoid (negative prompt):** Ill-defined weepy eczematous patches in flexural areas, greasy yellow seborrheic scale, honey-crusted impetigo, target lesions, vesicles/bullae, pustules covering plaque, wrong body site (flexures), plastic-looking skin.
- **Real-image fallback:** DermNet NZ "plaque psoriasis elbow"; Wikimedia Commons "Psoriasis on elbow"; CDC/AAD image resources.

### s1-0089 - Autosomal dominant polycystic kidney disease  (Step 1 - Respiratory & Renal/Urinary)
- **Case context:** 35-year-old with hypertension, flank pain, hematuria, palpable bilateral abdominal masses, hepatic cysts, family history of cerebral hemorrhage and kidney failure (ADPKD, PKD1). Image must be a renal ultrasound showing a bilaterally enlarged kidney studded with numerous cysts.
- **Modality:** Grayscale renal ultrasound (sector/curvilinear probe) image.
- **Prompt:** Photorealistic grayscale renal ULTRASOUND image, curvilinear sector format with fine speckle texture, DICOM-like appearance, correct sonographic anatomy in longitudinal view. Show a markedly ENLARGED kidney whose parenchyma is replaced and STUDDED WITH NUMEROUS CYSTS: multiple well-defined round ANECHOIC (black) fluid-filled cysts of varying sizes with thin walls and posterior acoustic enhancement, distorting the renal contour and effacing the normal corticomedullary architecture; almost no normal parenchyma remains. Realistic ultrasound gain gradient and depth shadowing. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Enlarged kidney with innumerable variably-sized anechoic thin-walled cysts, posterior acoustic enhancement, loss of normal renal architecture, authentic grayscale sector ultrasound texture.
- **Avoid (negative prompt):** Single simple cyst in an otherwise normal kidney, solid hyperechoic mass (RCC), hydronephrosis (dilated central collecting system only), CT/MRI cross-section appearance when ultrasound requested, color Doppler overlay, calipers/measurement crosses, gallbladder or liver mistaken for kidney.
- **Real-image fallback:** Radiopaedia "autosomal dominant polycystic kidney disease ultrasound"; Wikimedia Commons "Polycystic kidney disease ultrasound".

### s1-0095 - Tuberculosis (type IV hypersensitivity)  (Step 1 - Multisystem)
- **Case context:** Recent immigrant, weeks of productive cough, drenching night sweats, weight loss, hemoptysis; apical cavitary infiltrate, acid-fast bacilli on smear. Image is the lung histology of the granuloma.
- **Modality:** H&E histology, medium-to-high power (200x-400x).
- **Prompt:** Hyperrealistic H&E-stained lung tissue photomicrograph at 200x magnification, brightfield light microscopy, crisp diagnostic focus with authentic pink-and-purple hematoxylin-eosin coloration, showing a single well-formed caseating granuloma: a central zone of amorphous eosinophilic pink granular caseous (cheese-like) necrosis with loss of cell nuclei, surrounded by a rim of pale epithelioid macrophages with elongated slipper-shaped nuclei and abundant pink cytoplasm, at least one multinucleated Langhans giant cell with nuclei arranged in a peripheral horseshoe/arc at the cell margin, and an outer cuff of small dark blue lymphocytes; surrounding alveolar lung parenchyma partially compressed; realistic tissue texture, cellular detail, and slide artifacts, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** central acellular caseous necrosis; palisading epithelioid macrophages; Langhans giant cell with peripheral horseshoe nuclei; lymphocyte cuff.
- **Avoid (negative prompt):** non-caseating (sarcoid-like) granuloma with no necrosis; giant cell with central/scattered nuclei (foreign-body type); tumor cells; fibrosis-only field; fungal hyphae; immunofluorescence look; cartoonish uniform cells.
- **Real-image fallback:** WebPathology / PathologyOutlines / Wikimedia Commons - search "caseating granuloma tuberculosis lung H&E Langhans giant cell".

### s1-0101 - Tay-Sachs disease  (Step 1 - General Principles)
- **Case context:** 6-month-old Ashkenazi infant, lost motor milestones, exaggerated startle to sound, hypotonia, NO hepatosplenomegaly. Image is the fundus.
- **Modality:** Color fundus photograph (retinal camera).
- **Prompt:** Hyperrealistic color fundus photograph of an infant retina taken with a standard fundus camera, orange-red retinal background with a normal healthy optic disc and branching retinal vessels, centered on the macula which shows a sharply defined bright cherry-red spot at the foveola surrounded by a ring of pale grayish-white opacified (edematous, ganglion-cell-laden) perifoveal retina that makes the central red fovea stand out vividly; realistic retinal reflex, vascular arcades converging toward the macula, authentic photographic depth and illumination, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** central cherry-red foveal spot; surrounding pale/whitened retina; normal optic disc and vessels; single well-defined lesion at macula.
- **Avoid (negative prompt):** hemorrhages or cotton-wool spots; central retinal artery occlusion with attenuated vessels; drusen; diabetic exudates; two spots; adult-appearing retina; blurry non-photographic rendering.
- **Real-image fallback:** Wikimedia Commons / AAO EyeWiki - search "cherry-red spot macula Tay-Sachs fundus photograph".

### s1-0105 - Thrombotic thrombocytopenic purpura  (Step 1 - Immune / Blood & Lymphoreticular)
- **Case context:** 40-year-old woman, fatigue, petechiae, confusion, fever, low urine output; anemia, thrombocytopenia, high LDH, NORMAL PT/PTT. Image is the peripheral blood smear.
- **Modality:** Peripheral blood smear, Wright-Giemsa stain, oil-immersion (1000x).
- **Prompt:** Hyperrealistic peripheral blood smear photomicrograph, Wright-Giemsa stain at 1000x oil-immersion, clean pale-pink background, showing microangiopathic hemolytic anemia: numerous fragmented red blood cells (schistocytes) as sharp-edged helmet cells, triangular fragments, and irregular jagged pieces scattered among normal biconcave pink erythrocytes, conspicuously reduced number of platelets (markedly diminished platelet population), occasional polychromatophilic reticulocyte (bluish larger RBC); realistic cell membrane detail, staining variation, and smear texture, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** multiple schistocytes/helmet cells; thrombocytopenia (few platelets); normal-appearing coexisting RBCs; polychromasia optional.
- **Avoid (negative prompt):** abundant/clumped platelets; sickle cells; spherocytes as the dominant finding; target cells; leukemic blasts; rouleaux; teardrop-only picture; nucleated cells everywhere.
- **Real-image fallback:** ASH Image Bank / PathologyOutlines - search "schistocytes peripheral smear microangiopathic hemolytic anemia TTP".

### s1-0106 - Epidural hematoma  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** Young man struck on side of head, brief LOC then lucid interval ~1 hour, then rapid decline, severe headache, vomiting, unilateral blown pupil; temporal bone fracture. Image is the head CT.
- **Modality:** Non-contrast head CT, axial slice, brain window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial non-contrast head CT image in diagnostic grayscale, brain/soft-tissue window, radiologically accurate anatomy with symmetric skull and brain, showing a well-defined biconvex (lens-shaped / lentiform) hyperdense (bright white, fresh-blood attenuation) extra-axial collection along the inner table of the temporoparietal skull that does NOT cross the cranial sutures and produces mass effect with inward displacement of the adjacent cerebral cortex, effacement of nearby sulci, and slight midline shift with compression of the ipsilateral lateral ventricle; subtle adjacent temporal bone fracture line; realistic CT noise, gray-white differentiation, and bone-table appearance, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** biconvex/lens-shaped hyperdense collection tight to skull; does not cross sutures; mass effect / midline shift; hyperdense (acute) blood.
- **Avoid (negative prompt):** crescent/concave subdural shape; blood crossing sutures or following the whole convexity; hypodense (chronic) collection; intraparenchymal or subarachnoid pattern only; contrast enhancement; MRI appearance.
- **Real-image fallback:** Radiopaedia - search "epidural hematoma CT biconvex lens-shaped".

### s1-0109 - Dermatomyositis  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 52-year-old woman, months of symmetric proximal weakness (stairs, arms overhead), elevated CK. Image is the characteristic skin findings.
- **Modality:** Clinical dermatology photograph (two-finding composite: face + hands).
- **Prompt:** Hyperrealistic clinical dermatology photograph of a middle-aged woman showing dermatomyositis skin signs, natural clinical lighting on realistic textured skin: on the upper face a symmetric violaceous (dusky lilac-purple) discoloration of both upper eyelids with mild periorbital edema (heliotrope rash); and over the dorsal hands flat-topped scaly erythematous-to-violaceous papules and plaques overlying the knuckles (metacarpophalangeal and interphalangeal joints) sparing the skin between joints (Gottron papules), with subtle dilated nailfold capillaries and ragged cuticles; authentic skin pores, fine scale, and photographic color fidelity, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** violaceous heliotrope discoloration on eyelids; Gottron papules directly OVER the knuckles; correct hand distribution over the joints; periorbital involvement.
- **Avoid (negative prompt):** rash on the finger web spaces/between knuckles (that is lupus pattern, wrong); malar butterfly rash only; vesicles/blisters; pustules; psoriatic extensor-surface plaques on elbows only; unrealistic waxy skin.
- **Real-image fallback:** DermNet NZ - search "dermatomyositis heliotrope rash Gottron papules".

### s1-0113 - Acute respiratory distress syndrome  (Step 1 - Respiratory & Renal/Urinary)
- **Case context:** Severe sepsis, acute severe dyspnea and refractory hypoxemia within a day, no heart failure, normal wedge pressure. Image is the chest radiograph.
- **Modality:** Frontal (AP) chest radiograph, grayscale DICOM.
- **Prompt:** Hyperrealistic frontal anteroposterior chest radiograph in diagnostic grayscale, DICOM-like tonal range, anatomically correct thorax with visible ribs, clavicles, and mediastinum, showing bilateral diffuse patchy-to-confluent alveolar opacities (ground-glass and airspace infiltrates) spread across both lungs in a widespread symmetric distribution extending to the lung peripheries, with air bronchograms; the cardiac silhouette is normal in size (not enlarged), there are no pleural effusions and no Kerley B lines or vascular redistribution of cardiogenic edema; realistic radiographic grain, exposure gradient, and soft-tissue shadows, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** bilateral diffuse alveolar infiltrates; normal-sized heart; no pleural effusions; peripheral distribution / air bronchograms.
- **Avoid (negative prompt):** enlarged cardiac silhouette; cephalization/Kerley lines/effusions (cardiogenic edema); single lobar consolidation only; pneumothorax as the main finding; clear lungs; CT appearance.
- **Real-image fallback:** Radiopaedia - search "ARDS chest x-ray bilateral airspace opacities".

### s1-0114 - Membranous nephropathy  (Step 1 - Respiratory & Renal/Urinary)
- **Case context:** 55-year-old man, nephrotic syndrome (edema, heavy proteinuria, low albumin, high lipids), anti-PLA2R antibodies, later renal vein thrombosis. Image is the glomerular electron micrograph.
- **Modality:** Transmission electron micrograph (TEM) of glomerular basement membrane, grayscale.
- **Prompt:** Hyperrealistic transmission electron micrograph in high-resolution grayscale, ultrastructural detail characteristic of TEM, showing a segment of glomerular capillary wall: numerous discrete electron-dense immune-complex deposits located on the subepithelial (outer) side of a diffusely thickened glomerular basement membrane, with projections of new basement membrane material (electron-lucent to electron-dense "spikes") extending upward between and around the deposits producing a spike-and-dome contour; overlying podocyte cytoplasm shows diffuse foot process effacement; the endothelial side and capillary lumen are visible below; realistic EM texture, fine granularity, and membrane layering, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** subepithelial (epithelial-side) electron-dense deposits; thickened GBM with spikes between deposits (spike-and-dome); podocyte foot process effacement.
- **Avoid (negative prompt):** subendothelial or mesangial deposit location; humps of post-strep GN; no deposits (minimal change); linear ribbon deposits; light-microscopy/H&E look; immunofluorescence granular pattern rendered as EM.
- **Real-image fallback:** PathologyOutlines / Wikimedia Commons - search "membranous nephropathy electron microscopy subepithelial deposits spikes".

### s1-0115 - Barrett esophagus  (Step 1 - Gastrointestinal)
- **Case context:** 55-year-old, years of heartburn; endoscopy shows salmon-colored mucosa above the GE junction. Image is the esophageal biopsy histology.
- **Modality:** H&E histology of esophageal mucosa, medium power (100x-200x).
- **Prompt:** Hyperrealistic H&E-stained esophageal mucosal biopsy photomicrograph at 200x, brightfield microscopy with authentic pink-purple staining, showing metaplastic intestinal-type columnar epithelium replacing the normal esophageal lining: tall columnar surface and glandular cells interspersed with numerous scattered goblet cells that have a clear/pale bluish mucin-distended cup shape displacing the nucleus to the base; a sharp transition where residual stratified squamous epithelium (flat pink squamous cells) abuts the columnar goblet-cell mucosa; underlying lamina propria with mild chronic inflammatory cells; realistic tissue architecture, glandular detail, and staining variation, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** columnar epithelium with definite goblet cells (intestinal metaplasia); squamous-to-columnar transition; goblet-cell mucin cups; no high-grade dysplasia/invasion.
- **Avoid (negative prompt):** pure squamous epithelium only; gastric-type mucosa without goblet cells; frank adenocarcinoma with invasion; eosinophil-packed epithelium (EoE); Candida hyphae; fibrosis-only field.
- **Real-image fallback:** PathologyOutlines / WebPathology - search "Barrett esophagus goblet cells intestinal metaplasia H&E".

### s1-0118 - Papillary thyroid carcinoma  (Step 1 - Reproductive & Endocrine)
- **Case context:** 35-year-old woman, painless thyroid nodule, childhood head/neck radiation; FNA performed. Image is the thyroid cytology.
- **Modality:** Thyroid FNA cytology smear, Papanicolaou/H&E stain, high power (400x).
- **Prompt:** Hyperrealistic thyroid fine-needle aspiration cytology photomicrograph at 400x, Papanicolaou-stained smear with authentic pale translucent cytoplasm and crisp nuclear detail, showing a crowded overlapping papillary cluster of enlarged follicular tumor cells with the diagnostic nuclear features: pale, cleared "ground-glass" (Orphan Annie eye) optically empty nuclei, longitudinal nuclear grooves (coffee-bean creases), and occasional intranuclear cytoplasmic pseudoinclusions; among the cells one or two round laminated concentric calcified psammoma bodies (basophilic onion-ring structures); realistic smear background with scattered colloid and cellular texture, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** pale ground-glass (Orphan Annie eye) nuclei; nuclear grooves; psammoma body (laminated calcification); overlapping/crowded cell clusters.
- **Avoid (negative prompt):** amyloid and salt-and-pepper chromatin (medullary); bland uniform microfollicles only (follicular); pleomorphic anaplastic giant cells; abundant Hurthle oncocytic granular cytoplasm as the sole finding; lymphocytic Hashimoto background dominating.
- **Real-image fallback:** PathologyOutlines / ASC image atlas - search "papillary thyroid carcinoma cytology Orphan Annie eye nuclei psammoma body".

### s1-0119 - Complete hydatidiform mole  (Step 1 - Reproductive & Endocrine)
- **Case context:** Pregnant woman, uterus larger than dates, severe nausea, early preeclampsia, passage of grape-like tissue, markedly elevated beta-hCG. Image is the pelvic ultrasound.
- **Modality:** Transabdominal/transvaginal pelvic ultrasound, grayscale B-mode.
- **Prompt:** Hyperrealistic grayscale B-mode pelvic ultrasound sector image with authentic sonographic speckle, fan-shaped scan field and depth gradient, showing an enlarged uterus filled with a heterogeneous echogenic central mass containing innumerable small anechoic cystic spaces of varying sizes giving a vesicular "cluster-of-grapes" / snowstorm appearance throughout the endometrial cavity, with NO identifiable fetus, gestational pole, amniotic sac, or fetal heart structures; realistic ultrasound artifacts (acoustic enhancement behind cysts, near-field haze), no color Doppler, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** uterus filled with multicystic vesicular "snowstorm"/cluster-of-grapes echotexture; multiple small cystic spaces; absent fetus.
- **Avoid (negative prompt):** identifiable fetus/fetal pole or heartbeat; single large gestational sac with embryo; solid uniform fibroid without cysts; tubal ectopic; color Doppler overlay; CT/MRI appearance.
- **Real-image fallback:** Radiopaedia - search "complete hydatidiform mole ultrasound snowstorm bunch of grapes".

### s1-0120 - Secondary syphilis  (Step 1 - Multisystem)
- **Case context:** Young adult, prior self-resolved painless genital ulcer, now diffuse maculopapular rash, generalized lymphadenopathy, moist wart-like groin lesions; reactive nontreponemal test. Image is the palm/sole rash.
- **Modality:** Clinical dermatology photograph (palms and soles).
- **Prompt:** Hyperrealistic clinical dermatology photograph of a young adult's outstretched palms (and adjacent view of the soles), natural clinical lighting on realistic skin, showing symmetric, discrete, non-pruritic coppery reddish-brown maculopapular lesions distributed across both palms and the plantar surfaces of the feet, some macules with a fine collarette of peripheral scale, evenly scattered and bilateral; skin otherwise intact without vesicles or pus; authentic palmar creases, skin texture, and photographic color, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** coppery/reddish-brown macules and papules on palms AND soles; symmetric bilateral distribution; fine peripheral scale/collarette; no vesicles or pustules.
- **Avoid (negative prompt):** vesicles/blisters or grouped herpetic lesions; single painful ulcer; pustular or crusted rash; target/iris lesions of erythema multiforme dominating; rash sparing palms and soles; petechial hemorrhagic look.
- **Real-image fallback:** CDC Public Health Image Library (PHIL) / DermNet NZ - search "secondary syphilis rash palms soles".

### s1-0121 - Neurofibromatosis type 1  (Step 1 - Multisystem)
- **Case context:** A child with multiple flat light-brown skin patches, axillary freckling, soft cutaneous nodules, Lisch nodules, and an optic pathway glioma; autosomal dominant (parent affected).
- **Modality:** Clinical photograph (dermatologic full-torso/back skin photo).
- **Prompt:** Hyperrealistic clinical dermatology photograph of the back and trunk of a school-aged child in even diffuse medical lighting against a neutral gray-blue clinical backdrop, photorealistic natural skin texture with fine vellus hair and realistic pores, showing numerous well-demarcated flat uniformly light-brown (cafe-au-lait) macules of varying size scattered across the trunk with smooth regular borders, dense clusters of tiny brown freckles concentrated in the axilla (axillary freckling), and several soft, dome-shaped, flesh-colored to slightly pink pedunculated and sessile cutaneous neurofibromas of varying sizes that appear soft and buttonhole-invaginable, no ulceration, no scaling, clinically accurate lesion morphology and distribution, sharp focus, realistic color balance, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Multiple uniform light-brown flat cafe-au-lait macules; freckle cluster in axilla; several soft flesh-colored neurofibromas (some pedunculated); pediatric skin.
- **Avoid (negative prompt):** Vesicles/pustules, scaling or crusting, red inflamed lesions, dark irregular melanoma-like pigment, hairy nevi, tattoos, jewelry, extra or malformed limbs/fingers, ambiguous mole-only appearance without neurofibromas.
- **Real-image fallback:** DermNet NZ or Wikimedia Commons - search "neurofibromatosis type 1 cafe-au-lait neurofibromas".

### s1-0130 - Hodgkin lymphoma  (Step 1 - Immune / Blood & Lymphoreticular)
- **Case context:** 24-year-old man with painless rubbery cervical lymphadenopathy, night sweats, weight loss, alcohol-induced nodal pain; lymph node biopsy showing a Reed-Sternberg cell.
- **Modality:** H&E histology, high power (approx 400x oil, single-cell detail).
- **Prompt:** Photorealistic hematoxylin and eosin (H&E) stained histopathology microscopy image of a lymph node at high magnification (approximately 400x), classic H&E color palette with purple-blue nuclei and pink cytoplasm on a clean white background, sharp diagnostic microscope optics with shallow depth of field, centered on a single large binucleate Reed-Sternberg cell showing two mirror-image nuclei each containing one large prominent inclusion-like eosinophilic (bright pink) nucleolus surrounded by a clear perinucleolar halo giving an owl-eye appearance, abundant amphophilic cytoplasm, set within a mixed background of small mature reactive lymphocytes, scattered eosinophils and occasional plasma cells, realistic nuclear chromatin texture and cell membrane detail, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** One large binucleate cell, two mirror-image nuclei, each with a single huge eosinophilic owl-eye nucleolus and perinucleolar halo; small reactive lymphocyte background.
- **Avoid (negative prompt):** Starry-sky pattern, smudge cells, uniform monotonous small-cell sheet, follicular nodularity, incorrect (blue) nucleoli, Giemsa/blood-smear coloration, mitotic-figure clutter, cartoonish cells.
- **Real-image fallback:** PathologyOutlines or Wikimedia Commons - search "Reed-Sternberg cell classical Hodgkin lymphoma H&E".

### s1-0132 - Huntington disease  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** 42-year-old man with chorea, irritability, cognitive decline; autosomal dominant with anticipation; MRI shows bilateral caudate atrophy.
- **Modality:** Axial brain MRI (T1- or T2-weighted, at level of basal ganglia/lateral ventricles).
- **Prompt:** Photorealistic axial brain MRI image at the level of the basal ganglia, grayscale DICOM-like diagnostic radiology appearance with realistic MRI tissue contrast and signal-to-noise, anatomically correct symmetric brain, showing bilateral atrophy and flattening of the caudate nucleus heads so that the normal convex bulge into the lateral ventricle is lost and instead the ventricular margin appears concave, with resulting enlargement and boxcar squaring of the frontal horns of the lateral ventricles, an increased caudate-to-frontal-horn distance, mild diffuse cortical volume loss with widened sulci, otherwise clean symmetric anatomy, radiologic left-right orientation, no annotations, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Bilateral caudate head atrophy with concave (not convex) lateral ventricle margins; dilated, squared-off frontal horns; symmetric.
- **Avoid (negative prompt):** Focal mass or tumor, hemorrhage, midline shift, asymmetry, hydrocephalus with rounded ventricles, CT bone-window appearance, false skull/eye anatomy, annotations or scale bars.
- **Real-image fallback:** Radiopaedia - search "Huntington disease caudate atrophy MRI".

### s1-0135 - Osteosarcoma  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 15-year-old boy with several weeks of nocturnal pain and swelling above the knee, no trauma; radiograph of distal femoral metaphysis.
- **Modality:** Plain radiograph (AP knee / distal femur, grayscale).
- **Prompt:** Photorealistic plain radiograph of the distal femur and knee in a teenager, grayscale DICOM-like diagnostic X-ray appearance with realistic bone trabecular texture and soft-tissue shadow, anatomically correct femur, showing an aggressive destructive lesion in the distal femoral metaphysis with mixed lytic and sclerotic (bone-forming) density, a spiculated sunburst / sunray periosteal reaction of fine radiating ossified spicules extending perpendicular from the cortex into the adjacent soft tissue, a Codman triangle where the elevated periosteum lifts off the cortex at the lesion margin forming a triangular cuff of new bone, cortical destruction and an associated soft-tissue mass, open or partially fused growth plate consistent with adolescence, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Metaphyseal location distal femur; sunburst/spiculated periosteal reaction; Codman triangle; cortical destruction with soft-tissue mass; adolescent bone.
- **Avoid (negative prompt):** Diaphyseal onion-skin lamellated reaction (Ewing), benign well-corticated exostosis, epiphyseal soap-bubble lytic lesion (giant cell tumor), simple fracture only, healthy normal bone, annotations or rulers.
- **Real-image fallback:** Radiopaedia - search "osteosarcoma distal femur sunburst Codman triangle radiograph".

### s1-0136 - Wolff-Parkinson-White syndrome  (Step 1 - Cardiovascular)  [ECG]
- **WARNING:** AI image generators reliably render ECG tracings as physiologically meaningless gibberish (wrong waveform morphology, nonsensical grid, garbled deflections). For this WPW item, strongly recommend using a REAL 12-lead ECG or the app's own accurate vector-drawn tracing as the primary asset. Use any AI output only as a stylistic placeholder, and QA every complex against the criteria below.
- **Case context:** 25-year-old man with paroxysmal regular palpitations; resting ECG shows pre-excitation.
- **Modality:** ECG (12-lead or rhythm strip on standard red/pink grid).
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, sinus rhythm at a normal rate, each beat showing an upright P wave followed by an abnormally SHORT PR interval (P wave running almost directly into the QRS), a slurred slow initial upstroke of the QRS complex (delta wave) that widens the QRS, with secondary ST-T changes discordant to the QRS, regular R-R intervals, realistic calibration marks, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Short PR interval; delta wave (slurred QRS upstroke); widened QRS; sinus P waves before each QRS; regular rhythm.
- **Avoid (negative prompt):** Normal PR/QRS, absent delta wave, irregular or absent P waves, chaotic/random noise passed off as tracing, impossible waveform loops, wrong grid color, annotations/labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) or Wikimedia Commons - search "Wolff-Parkinson-White delta wave ECG".

### s1-0137 - Coarctation of the aorta  (Step 1 - Cardiovascular)
- **Case context:** 14-year-old boy with upper-extremity hypertension, weak delayed femoral pulses, systolic murmur over the back; chest radiograph shows rib notching.
- **Modality:** Chest radiograph (PA, grayscale).
- **Prompt:** Photorealistic frontal PA chest radiograph of an adolescent, grayscale DICOM-like diagnostic X-ray appearance with realistic lung, rib and mediastinal densities, anatomically correct thorax, showing bilateral inferior rib notching as small scalloped erosions and cortical irregularity along the undersurfaces (inferior margins) of the posterior aspects of several upper-to-mid ribs, and a subtle indentation/double-contour of the left mediastinal aortic silhouette at the aortic knob region producing a figure-3 sign, normal cardiac size or mild left ventricular prominence, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Bilateral inferior rib notching of several ribs; figure-3 aortic contour indentation; adolescent thorax; otherwise clean lung fields.
- **Avoid (negative prompt):** Rib fractures, superior rib erosion, lung mass or consolidation, pneumothorax, gross cardiomegaly, boot-shaped heart, annotations/arrows, lateral view.
- **Real-image fallback:** Radiopaedia - search "aortic coarctation rib notching figure 3 sign chest radiograph".

### s2ck-0001 - Acute ST-elevation myocardial infarction  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI generators render ECGs as physiologically invalid gibberish; the precise lead-specific ST changes here (inferior STEMI with reciprocal depression) are exactly what AI gets wrong. Strongly recommend a REAL 12-lead ECG or the app's accurate vector tracing as the primary asset; use AI output only as a placeholder and QA against the criteria below.
- **Case context:** 58-year-old man with 40 minutes of crushing substernal chest pressure radiating to the left arm, diaphoretic; inferior STEMI.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines and a clean black waveform trace, sinus rhythm around 90/min, showing convex-upward (tombstone) ST-segment ELEVATION in the inferior leads II, III, and aVF, with reciprocal ST-segment DEPRESSION in leads I and aVL, upright P waves before each QRS, realistic calibration marks and lead-label spacing left blank, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** ST elevation in II, III, aVF (inferior); reciprocal ST depression in I and aVL; sinus rhythm; consistent morphology across beats.
- **Avoid (negative prompt):** Diffuse or anterior-only ST elevation, flat/normal ST segments, irregular rhythm, random noise masquerading as trace, impossible waveforms, wrong grid color, annotations.
- **Real-image fallback:** Life in the Fast Lane (litfl.com) - search "inferior STEMI 12-lead ECG".

### s2ck-0009 - Atrial fibrillation  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI renders ECG tracings as meaningless gibberish and often fabricates regular P waves; the defining "irregularly irregular, no P waves" pattern is easily lost. Strongly recommend a REAL ECG or the app's accurate vector tracing as primary; treat AI output as a placeholder only and QA carefully.
- **Case context:** 74-year-old woman with palpitations and an irregular pulse; hypertension, diabetes, prior TIA; rhythm shows atrial fibrillation.
- **Modality:** ECG (rhythm strip or 12-lead) on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines and a clean black waveform trace, showing an irregularly irregular ventricular rhythm with markedly varying R-R intervals, complete ABSENCE of discrete P waves, and a wavy low-amplitude undulating fibrillatory baseline between narrow QRS complexes, realistic calibration marks, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Irregularly irregular R-R; no discernible P waves; fibrillatory baseline; narrow QRS complexes.
- **Avoid (negative prompt):** Regular rhythm, clear upright P waves before each QRS, sawtooth flutter waves, wide bizarre QRS, random noise not resembling a real trace, wrong grid color, annotations.
- **Real-image fallback:** Life in the Fast Lane (litfl.com) - search "atrial fibrillation ECG rhythm strip".

### s2ck-0010 - Blunt abdominal trauma, positive FAST  (Step 2 CK - Surgery)
- **Case context:** 28-year-old man after high-speed MVC, seatbelt sign, hypotensive and tachycardic despite fluids; FAST shows free fluid in Morrison pouch.
- **Modality:** Point-of-care ultrasound (FAST, grayscale sector/curvilinear image, RUQ view).
- **Prompt:** Photorealistic point-of-care abdominal ultrasound image, grayscale sector image with the characteristic wedge/fan-shaped curvilinear probe field of view narrow at the top widening downward, realistic ultrasound speckle texture and acoustic shadowing, right upper quadrant (Morrison pouch) view showing the liver as a homogeneous mid-gray organ adjacent to the right kidney with its brighter echogenic capsule, and a distinct ANECHOIC (jet-black) crescent of free fluid collecting in the hepatorenal recess in the potential space between the liver and the right kidney, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** RUQ liver-kidney interface; black anechoic free-fluid stripe in the hepatorenal (Morrison) pouch; correct curvilinear sector geometry.
- **Avoid (negative prompt):** Color Doppler overlay, echogenic (bright) fluid, gallbladder/cardiac view, rectangular linear-probe field, absent free fluid, calipers/measurement lines, text or labels.
- **Real-image fallback:** Radiopaedia or The POCUS Atlas - search "FAST positive Morrison pouch free fluid ultrasound".

### s2ck-0013 - Acute calculous cholecystitis  (Step 2 CK - Surgery)
- **Case context:** 45-year-old woman with 12 hours of constant RUQ pain after a fatty meal, fever, positive Murphy sign; RUQ ultrasound.
- **Modality:** Right upper quadrant ultrasound (grayscale, curvilinear probe).
- **Prompt:** Photorealistic right upper quadrant abdominal ultrasound image, grayscale sector image with the fan-shaped curvilinear probe field of view and realistic ultrasound speckle texture, showing the gallbladder as a fluid-filled anechoic structure with an abnormally THICKENED gallbladder wall (greater than 3 mm) demonstrating a layered/striated hypoechoic appearance, a thin rim of anechoic pericholecystic fluid tracking around the gallbladder, and a bright echogenic gallstone impacted in the gallbladder neck casting a clean posterior acoustic SHADOW (dark band) beneath it, adjacent liver parenchyma of homogeneous mid-gray echotexture, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Thickened/striated gallbladder wall; pericholecystic fluid; echogenic stone at the neck with clean posterior acoustic shadowing.
- **Avoid (negative prompt):** Color Doppler, normal thin gallbladder wall, dilated common bile duct as the focus, stone without shadow, comet-tail-only artifact, rectangular linear field, calipers or measurement overlays, text/labels.
- **Real-image fallback:** Radiopaedia or The POCUS Atlas - search "acute cholecystitis ultrasound gallbladder wall thickening stone shadow".

### s2ck-0017 - Hypertrophic pyloric stenosis  (Step 2 CK - Pediatrics)
- **Case context:** 5-week-old firstborn boy with progressive nonbilious projectile vomiting, palpable olive-shaped mass, hypochloremic hypokalemic metabolic alkalosis; abdominal ultrasound.
- **Modality:** Pediatric abdominal ultrasound (grayscale, high-frequency linear probe, long-axis pylorus).
- **Prompt:** Photorealistic infant abdominal ultrasound image, grayscale high-frequency image with realistic fine ultrasound speckle texture, long-axis (longitudinal) view of the gastric pylorus showing an ELONGATED pyloric channel with a hypoechoic THICKENED muscular wall surrounding a central echogenic mucosal lining, giving the classic cervix-like / doughnut appearance in profile, the elongated channel measuring roughly 17 mm long with a single-wall muscle thickness of about 4 mm, adjacent fluid-distended stomach proximally, correct probe geometry, no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Elongated pyloric channel (~16-18 mm); thickened hypoechoic muscular wall (~3-4 mm) around echogenic mucosa; distended stomach proximal; cervix/doughnut morphology.
- **Avoid (negative prompt):** Color Doppler, double-bubble sign, normal thin short pylorus, adult-sized anatomy, dilated bowel loops, calipers/measurement crosshairs, text or labels, rectangular unrealistic field.
- **Real-image fallback:** Radiopaedia - search "hypertrophic pyloric stenosis ultrasound target sign".


<!-- Added with Step 1 Batch 7, Step 2 CK Batch 2, Step 3 Day 1 Batch 1 -->

### s1-0157 - Amyotrophic lateral sclerosis  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** 55-year-old man with one year of progressive asymmetric weakness beginning in the right hand, with wasting and fasciculations of hands and tongue (lower motor neuron) plus spasticity, brisk reflexes, and extensor plantar responses (upper motor neuron), and completely spared sensation; the image is a transverse section of spinal cord showing loss of anterior horn motor neurons together with pallor (demyelination) of both lateral corticospinal tracts.
- **Modality:** Myelin-stained (Luxol fast blue or Weigert/Weil) transverse histologic section of the spinal cord, low power; gross-to-microscopic architectural view of the cord cross-section.
- **Prompt:** Photorealistic myelin-stained (Luxol fast blue / Weigert) transverse section of the spinal cord at low magnification, authentic histology with well-myelinated white matter staining deep blue and gray matter appearing pale tan-gray, diagnostic slide realism with the correct butterfly-shaped central gray matter and surrounding white matter columns. Show symmetric, bilateral PALLOR (loss of blue myelin staining) selectively affecting both LATERAL CORTICOSPINAL TRACTS in the dorsolateral white matter, standing out as paler patches against the otherwise well-stained posterior columns and remaining white matter. The ANTERIOR (ventral) HORNS of the gray matter are shrunken and depleted of large motor neurons, with the few remaining anterior horn cells reduced in number compared with a normal cord; the posterior columns and dorsal horns are preserved (normal sensory tracts). Correct spinal cord anatomy with central canal, anterior median fissure, and symmetric bilateral tracts. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Symmetric bilateral pallor of the dorsolateral (lateral corticospinal) tracts
  - Depletion/atrophy of anterior horn motor neurons
  - Preserved posterior columns and dorsal horns (spared sensory pathways)
  - Correct butterfly gray matter and cord cross-sectional anatomy
- **Avoid (negative prompt):** posterior column or dorsal-tract pallor (that is subacute combined degeneration/tabes, wrong); asymmetric single-sided lesion; a discrete mass or infarct; H&E pink-purple palette when a myelin stain is requested; brain tissue instead of cord; inflammatory demyelinating plaque (MS) in the periventricular brain.
- **Real-image fallback:** PathologyOutlines / Wikimedia Commons - search "amyotrophic lateral sclerosis spinal cord corticospinal tract degeneration Luxol fast blue"; WebPathology "ALS anterior horn myelin stain".

### s1-0159 - Osteoarthritis  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 64-year-old woman with obesity and years of activity-related knee and hand pain, brief (~10 min) morning stiffness, Heberden nodes (bony DIP enlargement), and knee crepitus without warmth or redness; the image is a knee radiograph showing asymmetric joint-space narrowing, marginal osteophytes, and subchondral sclerosis.
- **Modality:** Plain radiograph, weight-bearing frontal (AP) knee, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal AP radiograph of an adult knee, grayscale with high dynamic range and DICOM-like diagnostic quality, realistic bone trabecular texture and soft-tissue shadow, correct femorotibial and patellar anatomy. Show the hallmarks of osteoarthritis: ASYMMETRIC joint-space NARROWING that is worse over the medial tibiofemoral compartment (medial joint space markedly reduced while the lateral compartment is relatively preserved); sharp, bony MARGINAL OSTEOPHYTES projecting from the medial tibial plateau, femoral condyle edges, and intercondylar notch (tibial spines); increased SUBCHONDRAL SCLEROSIS as a band of dense white bone beneath the narrowed medial joint surface; and small subchondral cysts. No fracture, no aggressive periosteal reaction, no erosions crossing the joint. Bones otherwise correctly mineralized. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Asymmetric (compartment-selective, typically medial) joint-space narrowing
  - Bony marginal osteophytes at joint margins
  - Subchondral sclerosis (dense white subchondral bone) and small subchondral cysts
  - Correct knee anatomy, no fracture
- **Avoid (negative prompt):** symmetric/uniform joint-space loss with periarticular erosions and osteopenia (rheumatoid); chondrocalcinosis lining the cartilage (CPPD); punched-out periarticular erosions with overhanging edges (gout); aggressive periosteal reaction or soft-tissue mass; total loss of all bone detail; fracture line; lateral view when frontal requested.
- **Real-image fallback:** Radiopaedia - search "knee osteoarthritis radiograph joint space narrowing osteophytes"; Wikimedia Commons "osteoarthritis knee X-ray".

### s1-0160 - Bullous pemphigoid  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 74-year-old man with intensely pruritic, large, TENSE bullae on flexural arms, groin, and lower abdomen that do not rupture easily, a NEGATIVE Nikolsky sign, and spared oral mucosa; the image is direct immunofluorescence of perilesional skin showing a smooth LINEAR band of IgG and C3 along the dermoepidermal (basement membrane) junction.
- **Modality:** Direct immunofluorescence (DIF) photomicrograph of a perilesional skin biopsy, fluorescence microscopy on a dark field.
- **Prompt:** Direct immunofluorescence photomicrograph of a skin biopsy on a black background, bright apple-green FITC fluorescence, fluorescence-microscopy realism, medium-high power. Show a single, SMOOTH, CONTINUOUS, sharply LINEAR band of bright green fluorescence running along the dermo-epidermal basement membrane zone, cleanly separating the epidermis above from the dermis below like an unbroken ribbon following the undulating junction. The keratinocyte intercellular spaces within the epidermis are DARK and NOT highlighted (no net/fishnet pattern). The linear deposit is uniform in thickness and hugs the entire basement membrane. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Smooth continuous LINEAR green band along the dermoepidermal junction only
  - Dark, non-highlighted epidermal keratinocyte intercellular spaces (no reticular pattern)
  - Single basement-membrane-zone location, uniform ribbon
  - Fluorescence realism on black background
- **Avoid (negative prompt):** net-like/fishnet/"chicken-wire" intercellular staining around keratinocytes (that is pemphigus vulgaris, wrong); granular deposits at the tips of dermal papillae (dermatitis herpetiformis); scattered speckles without a continuous line; H&E pink-purple coloration; multiple discontinuous dots along the junction; tissue on a white background.
- **Real-image fallback:** DermNet NZ "bullous pemphigoid direct immunofluorescence"; PathologyOutlines "bullous pemphigoid DIF linear IgG C3 basement membrane"; Wikimedia Commons "bullous pemphigoid immunofluorescence".

### s1-0161 - Mitral stenosis  (Step 1 - Cardiovascular)
- **Case context:** 34-year-old woman with childhood rheumatic fever, progressive exertional dyspnea, orthopnea, hemoptysis, an irregularly irregular pulse (atrial fibrillation), a loud S1, an opening snap, and a low-pitched mid-diastolic apical rumble; the image is a chest radiograph showing left atrial enlargement with straightening of the left heart border and elevation of the left main bronchus.
- **Modality:** Frontal (PA) chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal PA chest radiograph of an adult woman, grayscale with high dynamic range and DICOM-like diagnostic quality, anatomically correct thorax with sharp bony detail. Show the radiographic signs of LEFT ATRIAL ENLARGEMENT from mitral stenosis: STRAIGHTENING of the normally concave upper LEFT heart border due to a prominent left atrial appendage; a DOUBLE-DENSITY (double right heart border) shadow behind the right heart from the enlarged left atrium; SPLAYING of the carina with ELEVATION of the LEFT MAIN BRONCHUS by the enlarged left atrium beneath it; and signs of pulmonary venous congestion with upper-zone vascular redistribution (cephalization) and faint Kerley B lines at the bases. Overall heart size not grossly enlarged; no boot shape. Correct ribs, clavicles, and mediastinal contours. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Straightened left heart border (prominent left atrial appendage)
  - Double-density behind the right heart border (enlarged left atrium)
  - Elevated left main bronchus / splayed carina
  - Pulmonary venous congestion (cephalization, Kerley B lines); heart not globally enlarged
- **Avoid (negative prompt):** boot-shaped heart with upturned apex (TOF); gross globular cardiomegaly; right-sided aortic changes/rib notching (coarctation); large pleural effusion as the dominant finding; egg-on-a-string mediastinum; clear lungs with no congestion; lateral view when frontal requested.
- **Real-image fallback:** Radiopaedia - search "mitral stenosis chest x-ray left atrial enlargement double density"; Wikimedia Commons "left atrial enlargement chest radiograph".

### s2ck-0026 - Acute pericarditis  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators reliably render ECG tracings as physiologically meaningless gibberish (wrong waveform morphology, impossible intervals, garbled grid). The defining diffuse concave ST elevation with PR depression is exactly what AI gets wrong. Strongly recommend a REAL de-identified pericarditis 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a stylistic placeholder and QA every complex against the criteria below.
- **Case context:** 27-year-old man with 3 days of sharp central chest pain worse lying flat and relieved sitting forward, after a viral URI, with a three-component friction rub; the tracing must show diffuse concave (saddle-shaped) ST-segment elevation across limb and precordial leads with PR-segment depression.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip, sinus rhythm at a normal rate. Depict acute pericarditis: WIDESPREAD, DIFFUSE, CONCAVE-UPWARD ("saddle-shaped") ST-SEGMENT ELEVATION present across nearly all leads (both inferior II/III/aVF and lateral/precordial I, aVL, V2-V6) WITHOUT a regional territory and WITHOUT reciprocal ST depression (except the expected reciprocal changes in aVR and V1); associated PR-SEGMENT DEPRESSION in the limb and left precordial leads with PR elevation in aVR; upright P waves before each narrow QRS; physiologically consistent, evenly spaced beats. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Diffuse concave ST elevation across most leads (not one territory); PR depression (PR elevation in aVR); no reciprocal ST depression except aVR/V1; sinus rhythm, narrow QRS.
- **Avoid (negative prompt):** regional/localized ST elevation with reciprocal depression (STEMI); convex "tombstone" ST morphology; Q waves; irregular rhythm; random gibberish waveforms; impossible intervals; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "acute pericarditis 12-lead ECG diffuse ST elevation PR depression"; Wikimedia Commons "pericarditis ECG". Prefer the app vector tracing.

### s2ck-0028 - Severe hyperkalemia with ECG changes  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically invalid gibberish and routinely draw wrong T-wave morphology and QRS widths. The peaked-T / wide-QRS / flat-P signature of hyperkalemia is exactly what AI botches. Strongly recommend a REAL de-identified hyperkalemia ECG (e.g., LITFL) or the app's own accurate vector tracing as the PRIMARY asset; treat any AI output as a placeholder only and QA against the criteria below.
- **Case context:** 66-year-old man with ESRD who missed dialysis, on lisinopril and spironolactone, potassium 7.3 mEq/L, heart rate 46/min; the tracing must show tall PEAKED (tented) T waves, a WIDENED QRS complex, and flattened/absent P waves.
- **Modality:** 12-lead ECG or rhythm strip on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, slow regular rhythm around 45/min. Depict severe hyperkalemia: tall, NARROW-BASED, sharply PEAKED / TENTED symmetric T waves that tower above the preceding R waves; a markedly WIDENED QRS complex (broad, smeared, prolonged duration) beginning to blend into the T wave; and FLATTENED, low-amplitude to nearly ABSENT P waves; overall a slow bradycardic rate with the tracing trending toward a sine-wave appearance. Physiologically consistent, evenly spaced beats. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Tall, narrow, peaked/tented symmetric T waves; wide QRS complexes; flattened or absent P waves; slow rate.
- **Avoid (negative prompt):** normal-width QRS with small T waves; upright prominent P waves before each QRS; ST elevation of STEMI; deep symmetric T inversions (ischemia); U waves/long QT (hypokalemia); random gibberish waveforms; wrong grid color; annotations.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "hyperkalemia ECG peaked T waves"; Wikimedia Commons "hyperkalemia ECG". Prefer the app vector tracing.

### s2ck-0033 - Acute ischemic stroke (normal early CT)  (Step 2 CK - Internal Medicine)
- **Case context:** 70-year-old woman with atrial fibrillation, 90 minutes after sudden right-sided weakness and slurred speech, BP 168/92; the image is a noncontrast head CT that shows NO hemorrhage and NO early ischemic changes (a normal-appearing early CT that permits thrombolysis).
- **Modality:** Noncontrast head CT, axial slice, brain window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial NONCONTRAST head CT image in diagnostic grayscale, brain window, radiologically accurate and symmetric anatomy, realistic CT noise and gray-white differentiation. Depict an essentially NORMAL early scan: NO hyperdense (bright white) blood anywhere - no intraparenchymal, subarachnoid, subdural, or epidural hemorrhage; preserved, crisp GRAY-WHITE MATTER DIFFERENTIATION throughout both hemispheres with normal cortical ribbon and basal ganglia margins; symmetric, normal-sized lateral ventricles and sulci with no effacement, no mass, and no midline shift; no established hypodense (dark) infarct and no loss of the insular ribbon. Skull and orbits correctly rendered. The scan looks reassuringly normal, consistent with hyperacute ischemia before CT changes appear. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - No hyperdense blood (no hemorrhage of any compartment)
  - Preserved, symmetric gray-white differentiation; no wedge of hypodensity
  - Normal symmetric ventricles and sulci, no midline shift or mass effect
  - Correct, symmetric CT brain anatomy
- **Avoid (negative prompt):** any bright white hyperdense hemorrhage; a dark wedge-shaped established infarct; loss of gray-white differentiation or effaced insular ribbon; hyperdense MCA sign; midline shift or herniation; ventricular asymmetry/duplication; contrast enhancement; MRI appearance; bone-window only.
- **Real-image fallback:** Radiopaedia - search "normal noncontrast CT head" or "acute ischemic stroke normal early CT"; Wikimedia Commons "normal head CT axial".

### s2ck-0035 - Adhesive small-bowel obstruction  (Step 2 CK - Surgery)
- **Case context:** 60-year-old woman with a prior open hysterectomy, 2 days of crampy pain, bilious vomiting, distension, and obstipation; distended tympanitic abdomen with high-pitched bowel sounds, no peritoneal signs; the image is an upright abdominal radiograph showing multiple dilated small-bowel loops with air-fluid levels and no colonic gas.
- **Modality:** Upright (erect) abdominal radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic UPRIGHT (erect) abdominal radiograph of an adult, grayscale with DICOM-like diagnostic dynamic range, realistic bowel-gas and soft-tissue densities, anatomically correct abdomen. Show mechanical SMALL-BOWEL OBSTRUCTION: multiple DILATED loops of SMALL bowel stacked centrally in the mid-abdomen, identifiable as small bowel by thin VALVULAE CONNIVENTES (plicae) crossing the entire width of the bowel (a "stack of coins"/ladder pattern); numerous stepwise AIR-FLUID LEVELS at differing heights within the loops on this erect view; and a paucity or complete ABSENCE of gas in the colon and rectum distally. No free air under the diaphragm, no obvious mass. Correct rib margins, spine, and pelvic bones. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multiple dilated central small-bowel loops with valvulae conniventes crossing the full width
  - Multiple stepwise air-fluid levels (erect view)
  - Absent/scant colonic and rectal gas distally
  - Erect abdominal radiograph, correct anatomy
- **Avoid (negative prompt):** haustral folds/peripheral dilated colon (large-bowel obstruction); massively dilated single loop / coffee-bean volvulus; free subdiaphragmatic air as the main finding (perforation); normal nondilated bowel gas pattern; chest radiograph; supine-only appearance without air-fluid levels when erect requested.
- **Real-image fallback:** Radiopaedia - search "small bowel obstruction erect abdominal radiograph air-fluid levels"; Wikimedia Commons "small bowel obstruction X-ray".

### s2ck-0038 - Acute uncomplicated diverticulitis  (Step 2 CK - Surgery)
- **Case context:** 59-year-old man with 2 days of left lower quadrant pain, low-grade fever, mild nausea, localized LLQ tenderness without rebound/guarding, hemodynamically stable and tolerating oral intake; the image is a CT of the abdomen showing sigmoid colonic wall thickening with surrounding pericolonic fat stranding and no abscess or free air.
- **Modality:** Contrast-enhanced axial CT of the abdomen/pelvis, soft-tissue window, grayscale DICOM-like.
- **Prompt:** Hyperrealistic axial contrast-enhanced abdominopelvic CT image in diagnostic grayscale, soft-tissue window, radiologically accurate cross-sectional anatomy with realistic CT texture and enhancement. Focus on the SIGMOID COLON in the left lower quadrant showing segmental CIRCUMFERENTIAL BOWEL-WALL THICKENING with mural enhancement, several small outpouching DIVERTICULA arising from the wall, and hazy, streaky increased attenuation (FAT STRANDING) in the adjacent pericolonic fat surrounding the inflamed segment. There is NO rim-enhancing fluid collection (no abscess), NO extraluminal free air, and NO free intraperitoneal fluid - an uncomplicated picture. Adjacent small-bowel loops, bladder, and pelvic sidewalls are normal. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Sigmoid (LLQ) colonic wall thickening with visible diverticula
  - Pericolonic fat stranding around the inflamed segment
  - No abscess (no rim-enhancing collection), no extraluminal free air, no free fluid
  - Correct axial CT anatomy, soft-tissue window
- **Avoid (negative prompt):** a rim-enhancing pericolic abscess or gas-fluid collection; extraluminal free air/pneumoperitoneum; right-sided (appendiceal) inflammation; an obstructing annular colon mass with shouldering; large-volume ascites; oral/CT overlay artifacts; lung-window appearance.
- **Real-image fallback:** Radiopaedia - search "acute diverticulitis CT sigmoid wall thickening pericolic fat stranding"; Wikimedia Commons "diverticulitis CT".

### s2ck-0039 - Ileocolic intussusception  (Step 2 CK - Pediatrics)
- **Case context:** 9-month-old boy with paroxysms of inconsolable crying and leg-drawing alternating with lethargy, a currant-jelly (blood and mucus) stool, and a sausage-shaped right-upper-abdomen mass; the image is an abdominal ultrasound showing a target (doughnut) sign of concentric bowel rings.
- **Modality:** Pediatric abdominal ultrasound (grayscale, high-frequency probe, transverse view of the intussusception).
- **Prompt:** Photorealistic infant abdominal ULTRASOUND image, grayscale with realistic fine high-frequency speckle texture and a fan/rectangular high-frequency field, transverse view of a bowel segment showing the classic TARGET / DOUGHNUT sign of intussusception: multiple CONCENTRIC alternating hypoechoic (dark) and hyperechoic (bright) RINGS arranged as a bull's-eye - an outer thick hypoechoic rim of edematous bowel wall surrounding inner concentric layers of telescoped bowel and mesenteric fat, producing a round layered target. Adjacent normal bowel and a small amount of trapped echogenic mesenteric fat are visible. Correct pediatric probe geometry and depth gradient. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Round target/doughnut with multiple concentric alternating hypo-/hyperechoic rings
  - Thick outer hypoechoic bowel-wall rim (edema)
  - Trapped central echogenic mesenteric fat
  - Authentic grayscale infant ultrasound texture
- **Avoid (negative prompt):** a single simple anechoic cyst; the "target" of hypertrophic pyloric stenosis (elongated single-ring channel) mislabeled; color Doppler overlay; CT/MRI cross-section appearance; two simple parallel lines only; calipers/measurement crosses; adult-sized anatomy.
- **Real-image fallback:** Radiopaedia - search "intussusception ultrasound target doughnut sign"; The POCUS Atlas "intussusception"; Wikimedia Commons "intussusception ultrasound".

### s2ck-0040 - Acute epiglottitis  (Step 2 CK - Pediatrics)
- **Case context:** Unvaccinated 4-year-old boy with rapid-onset high fever, severe sore throat, drooling, tripod/leaning-forward posture, muffled voice, and soft inspiratory stridor, appearing toxic; the image is a lateral neck radiograph showing an enlarged, thumb-shaped epiglottis (thumbprint sign).
- **Modality:** Lateral soft-tissue neck radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic LATERAL soft-tissue neck radiograph of a young child, grayscale with DICOM-like diagnostic dynamic range, realistic airway-column and soft-tissue densities, anatomically correct pediatric cervical anatomy in profile. Show the THUMBPRINT SIGN of acute epiglottitis: a markedly ENLARGED, rounded, THUMB-SHAPED soft-tissue density of the swollen EPIGLOTTIS projecting into and narrowing the air column at the base of the tongue/upper airway, with THICKENED ARYEPIGLOTTIC FOLDS and loss of the normal thin, curved "little-finger" epiglottic shadow; the vallecula is obliterated. The prevertebral soft tissues are not the primary abnormality. Cervical vertebrae and mandible correctly rendered in lateral profile. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Enlarged, rounded thumb-shaped epiglottis narrowing the airway (thumbprint sign)
  - Thickened aryepiglottic folds; obliterated vallecula
  - Lateral neck projection, correct pediatric anatomy
  - Air column visible for contrast
- **Avoid (negative prompt):** the "steeple sign" of subglottic tracheal narrowing (croup, wrong); a widened prevertebral soft-tissue stripe as the main finding (retropharyngeal abscess); a normal thin curved epiglottis; a frontal (AP) view when lateral requested; a foreign body; adult anatomy; annotations/arrows.
- **Real-image fallback:** Radiopaedia - search "acute epiglottitis lateral neck radiograph thumbprint sign"; Wikimedia Commons "epiglottitis thumb sign X-ray".

### s2ck-0042 - Slipped capital femoral epiphysis  (Step 2 CK - Pediatrics)
- **Case context:** 13-year-old boy with obesity, several weeks of dull left groin and knee pain and a limp without injury; the left hip is held in external rotation with limited, painful internal rotation; the image is a frog-leg lateral hip radiograph showing posterior and inferior displacement of the femoral epiphysis relative to the femoral neck.
- **Modality:** Frog-leg lateral hip/pelvis radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic FROG-LEG LATERAL radiograph of the hips/pelvis in an adolescent, grayscale with DICOM-like diagnostic dynamic range, realistic bone trabecular texture, anatomically correct pelvis and proximal femora with the hips abducted and externally rotated in the frog-leg position. On the affected (left) hip show SLIPPED CAPITAL FEMORAL EPIPHYSIS: the femoral head (capital epiphysis) slipped POSTERIORLY and INFERIORLY (medially) relative to the femoral neck, so the epiphysis sits like "ice cream slipping off the cone"; the physis (growth plate) appears WIDENED and irregular; and a line drawn along the superior femoral neck (Klein's line) fails to intersect the epiphysis as it normally would. The contralateral hip is normal with a well-seated epiphysis for comparison. Growth plates open, consistent with adolescence. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Posterior/inferomedial slippage of the capital epiphysis relative to the neck ("melting ice cream cone")
  - Widened, irregular physis on the affected side
  - Klein's line failing to intersect the slipped epiphysis
  - Normal contralateral hip for contrast; open physes
- **Avoid (negative prompt):** a fragmented, sclerotic, flattened femoral head (Legg-Calve-Perthes avascular necrosis); an acute transcervical femoral neck fracture line; a normally seated symmetric epiphysis bilaterally; a dislocated femoral head out of the acetabulum; adult fused physes; a frontal AP-only view when frog-leg lateral requested; annotations.
- **Real-image fallback:** Radiopaedia - search "slipped capital femoral epiphysis frog-leg lateral Klein line"; Wikimedia Commons "SCFE hip radiograph".

### s3-0009 - Complete (third-degree) atrioventricular block  (Step 3 - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw dissociated P and QRS rates. The defining AV dissociation of complete heart block is exactly what AI gets wrong. Strongly recommend a REAL de-identified complete-heart-block ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 68-year-old man with two syncopal episodes, lightheaded, heart rate 38/min, BP 86/54, pale and diaphoretic; the tracing must show regular P waves and regular QRS complexes marching at different rates with no consistent PR relationship (complete AV dissociation).
- **Modality:** 12-lead ECG or rhythm strip on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace. Depict THIRD-DEGREE (complete) AV BLOCK: two entirely INDEPENDENT rhythms with no relationship - regular, upright P WAVES marching out at a faster ATRIAL rate (roughly 80-90/min), and a separate, slower, REGULAR set of QRS complexes at an escape rate around 38/min, with the P waves bearing NO consistent PR relationship to the QRS (P waves visible before, during/buried in, and after QRS complexes at varying positions); the QRS complexes are regular and broad (ventricular escape). The two rates are clearly dissociated. Physiologically consistent, evenly spaced within each rhythm. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Regular P waves at a faster rate; regular QRS at a slower escape rate; NO consistent PR relationship (AV dissociation); more P waves than QRS complexes.
- **Avoid (negative prompt):** consistent fixed PR before every QRS (normal conduction / 1:1); progressively lengthening PR then a dropped beat (Wenckebach); an irregularly irregular rhythm with no P waves (AF); random gibberish waveforms; a rapid rate; wrong grid color; annotations.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "complete heart block third degree AV block ECG"; Wikimedia Commons "third degree AV block ECG". Prefer the app vector tracing.

### s3-0013 - New pleural effusion of unknown cause  (Step 3 - Internal Medicine)
- **Case context:** 60-year-old man with 2 weeks of progressive dyspnea and a dull left chest ache, with left basal dullness to percussion, decreased breath sounds, and reduced tactile fremitus, afebrile and stable; the image is an upright chest radiograph showing a moderate left pleural effusion with blunting of the costophrenic angle and a meniscus sign.
- **Modality:** Upright frontal (PA) chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic UPRIGHT frontal PA chest radiograph of an adult man, grayscale with DICOM-like diagnostic dynamic range, realistic lung, rib, and mediastinal densities, anatomically correct thorax. Show a MODERATE LEFT PLEURAL EFFUSION: a homogeneous water-density (white) opacity occupying the LEFT lower hemithorax with BLUNTING/obliteration of the left costophrenic angle, and a concave-upward, laterally rising MENISCUS SIGN where the fluid margin curves up along the lateral chest wall; the underlying left lung base is obscured. The RIGHT costophrenic angle is sharp and the right lung is clear for contrast; the trachea and mediastinum are not markedly shifted; the heart size is normal. Correct ribs, clavicles, and hemidiaphragm contours. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Homogeneous basal opacity with blunted left costophrenic angle
  - Concave-upward meniscus rising laterally
  - Clear contralateral (right) lung and sharp right costophrenic angle
  - Upright frontal projection, normal heart size, no gross mediastinal shift
- **Avoid (negative prompt):** bilateral effusions when a unilateral left effusion is specified; complete white-out with contralateral mediastinal shift (massive effusion) unless intended; lobar consolidation with air bronchograms and no meniscus; a tension pneumothorax (lucent hemithorax); Kerley lines/cardiomegaly of florid CHF as the dominant picture; lateral or supine view when upright frontal requested.
- **Real-image fallback:** Radiopaedia - search "pleural effusion chest radiograph meniscus sign blunted costophrenic angle"; Wikimedia Commons "pleural effusion X-ray".

### s3-0023 - Unstable wide-complex (ventricular) tachycardia  (Step 3 - Emergency Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw uniform wide QRS complexes. The monomorphic wide-complex VT pattern is exactly what AI gets wrong. Strongly recommend a REAL de-identified VT 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 65-year-old man with prior myocardial infarction, palpitations and chest pain, pale and diaphoretic, BP 78/44, acutely ill; the tracing must show a regular WIDE-complex tachycardia at ~180/min with no clearly discernible P waves, consistent with ventricular tachycardia.
- **Modality:** 12-lead ECG or rhythm strip on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace. Depict MONOMORPHIC VENTRICULAR TACHYCARDIA: a fast, REGULAR tachycardia at roughly 180/min composed of uniform, BROAD, WIDE (prolonged-duration) QRS complexes of consistent identical morphology beat to beat, with NO clearly discernible P waves preceding the complexes and abnormal, discordant ST-T segments; the complexes are bizarre and wide but regular and evenly spaced. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Regular rapid rhythm (~180/min); uniformly WIDE (broad) QRS complexes of constant morphology; no discernible P waves; monomorphic (not twisting) envelope.
- **Avoid (negative prompt):** a narrow-complex regular tachycardia (SVT); a twisting/waxing-waning polymorphic envelope (torsades); coarse chaotic ventricular fibrillation with no organized complexes; visible upright P waves before each QRS; an irregular rhythm; random gibberish waveforms; wrong grid color; annotations.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "monomorphic ventricular tachycardia 12-lead ECG"; Wikimedia Commons "ventricular tachycardia ECG". Prefer the app vector tracing.

### s3-0025 - Adhesive small-bowel obstruction  (Step 3 - Surgery)
- **Case context:** 60-year-old man with a prior open appendectomy, 1 day of crampy pain, distension, bilious vomiting, and no flatus; distended tympanitic abdomen with high-pitched bowel sounds, non-peritonitic and stable; the image is supine and upright abdominal radiographs showing multiple dilated loops of small bowel with air-fluid levels and no colonic gas.
- **Modality:** Abdominal radiograph series - supine AND upright (erect) views, grayscale DICOM-like.
- **Prompt:** Photorealistic paired abdominal radiograph presentation of an adult - a SUPINE and an UPRIGHT (erect) view side by side - grayscale with DICOM-like diagnostic dynamic range, realistic bowel-gas and soft-tissue densities, anatomically correct abdomen. Both views show mechanical SMALL-BOWEL OBSTRUCTION: multiple DILATED central loops of SMALL bowel identifiable by thin VALVULAE CONNIVENTES (plicae circulares) that cross the entire bowel width in a stacked "ladder"/"stack of coins" pattern. On the SUPINE view the dilated air-filled loops are arranged centrally with no colonic or rectal gas distally; on the UPRIGHT view multiple stepwise AIR-FLUID LEVELS sit at differing heights within the loops. There is NO free subdiaphragmatic air and no colonic haustral dilation. Correct spine, ribs, and pelvic bones on both frames. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dilated central small-bowel loops with valvulae conniventes crossing full width (both views)
  - Stepwise air-fluid levels on the upright view
  - Absent colonic/rectal gas distally
  - Paired supine + upright frames, correct anatomy
- **Avoid (negative prompt):** peripheral dilated colon with haustra (large-bowel obstruction); a single massively dilated coffee-bean loop (volvulus); free air under the diaphragm as the main finding (perforation); a normal nondistended bowel-gas pattern; a chest radiograph; only one projection when a supine-plus-upright pair is requested.
- **Real-image fallback:** Radiopaedia - search "small bowel obstruction supine erect abdominal radiograph air-fluid levels valvulae conniventes"; Wikimedia Commons "small bowel obstruction X-ray series".

<!-- Added with Step 1 Batch 8, Step 2 CK Batch 3, Step 3 Day 1 Batch 2 -->

### s1-0180 - Sickle cell disease  (Step 1 - Immune / Blood & Lymphoreticular)
- **Case context:** 4-year-old African American boy with recurrent vaso-occlusive pain crises, scleral icterus, splenomegaly, and functional asplenia (prior pneumococcal infection); the smear must show crescent-shaped sickled red cells and a Howell-Jolly body.
- **Modality:** Peripheral blood smear, Wright-Giemsa stain, oil-immersion (approximately 1000x).
- **Prompt:** Hyperrealistic peripheral blood smear photomicrograph, Wright-Giemsa stain at 1000x oil-immersion, clean pale-pink background, photorealistic hematology quality. Show numerous classic SICKLE CELLS (drepanocytes): elongated, thin, crescent- and boat-shaped rigid red cells with sharply POINTED ends, scattered among more rounded normal biconcave erythrocytes; include a few target cells and polychromatophilic reticulocytes. Within at least one otherwise normal red cell show a single small, round, dense dark-purple HOWELL-JOLLY BODY (a nuclear remnant) reflecting functional asplenia. Realistic red-cell membrane detail, staining variation, and smear texture. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multiple elongated crescent/sickle-shaped red cells with pointed ends
  - At least one Howell-Jolly body (single round dense intraerythrocytic inclusion)
  - Coexisting normal biconcave red cells and occasional target cells for contrast
  - Correct Wright-Giemsa palette and oil-immersion detail
- **Avoid (negative prompt):** bite cells and Heinz bodies (G6PD); schistocytes/helmet fragments (microangiopathy); spherocytes as the dominant finding (HS); teardrop cells; basophilic stippling mislabeled as Howell-Jolly bodies; multiple Howell-Jolly bodies crowding every cell; blast cells; H&E tissue section.
- **Real-image fallback:** ASH Image Bank "sickle cells peripheral smear"; PathologyOutlines "sickle cell disease smear Howell-Jolly"; Wikimedia Commons "sickle cell anemia blood smear".

### s1-0182 - Normal pressure hydrocephalus  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** 73-year-old man with the classic triad of a shuffling wide-based gait, urinary incontinence, and cognitive decline that improves after a large-volume lumbar puncture; the image is an axial head CT showing ventricular enlargement out of proportion to cortical atrophy.
- **Modality:** Noncontrast head CT, axial slice, brain window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial NONCONTRAST head CT image in diagnostic grayscale, brain window, radiologically accurate and symmetric anatomy with realistic CT noise and gray-white differentiation. Depict NORMAL PRESSURE HYDROCEPHALUS: SYMMETRIC ENLARGEMENT of the lateral ventricles (dilated frontal and temporal horns and bodies) with ballooning of the third ventricle, DISPROPORTIONATE to any cortical atrophy - the cortical sulci are effaced or only mildly prominent rather than widened, so the ventricular dilation is out of proportion to sulcal size. There is no periventricular hemorrhage, no mass, and no midline shift; the fourth ventricle and sulci at the vertex look relatively crowded. Skull and orbits correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Symmetric enlargement of lateral (and third) ventricles
  - Ventricular dilation out of proportion to sulcal widening (effaced/normal sulci, not diffuse atrophy)
  - No hemorrhage, mass, or midline shift; symmetric anatomy
  - Correct axial brain-window CT appearance
- **Avoid (negative prompt):** diffuse sulcal widening/ex-vacuo dilation matching the ventricles (generalized atrophy); a single obstructing mass or trapped ventricle; intraventricular or parenchymal hemorrhage; asymmetric or duplicated ventricles; periventricular bright edema as the dominant finding; MRI appearance; bone-window only.
- **Real-image fallback:** Radiopaedia - search "normal pressure hydrocephalus CT ventriculomegaly"; Wikimedia Commons "normal pressure hydrocephalus CT".

### s1-0184 - Ankylosing spondylitis  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 25-year-old man with more than six months of inflammatory back pain (worse in the morning, better with exercise), reduced chest expansion, and a prior painful red eye (uveitis); the image is an AP pelvis radiograph showing bilateral sacroiliac joint fusion.
- **Modality:** Anteroposterior (AP) pelvis radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic ANTEROPOSTERIOR pelvis radiograph of a young adult man, grayscale with DICOM-like diagnostic dynamic range, realistic bone trabecular texture and correct pelvic anatomy. Show advanced BILATERAL, SYMMETRIC SACROILIITIS of ankylosing spondylitis: both sacroiliac joints demonstrate irregular erosion and reactive subchondral SCLEROSIS progressing to near-complete BONY FUSION (ankylosis), so the normal SI joint spaces are blurred and obliterated bilaterally. The lower lumbar vertebral corners appear squared, and thin vertical bridging SYNDESMOPHYTES begin to ossify the outer annulus, hinting at an early bamboo-spine appearance. Hips and pubic symphysis are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bilateral, symmetric sacroiliac joint erosion, sclerosis, and fusion (loss of SI joint space)
  - Squared vertebral bodies and early thin vertical syndesmophytes
  - Correct symmetric AP pelvic anatomy
  - Diagnostic radiographic grayscale
- **Avoid (negative prompt):** unilateral sacroiliitis (infection/early psoriatic-reactive); a normal open SI joint space; bulky asymmetric non-marginal osteophytes (psoriatic/reactive); coarse osteoarthritic hip changes as the main finding; fracture line; sacral chordoma/mass; lateral spine-only view when AP pelvis requested.
- **Real-image fallback:** Radiopaedia - search "ankylosing spondylitis sacroiliitis fusion pelvis radiograph"; Wikimedia Commons "ankylosing spondylitis sacroiliac joint fusion".

### s1-0185 - Vitamin D deficiency rickets  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 14-month-old exclusively breastfed infant with little sun exposure, bowed legs, wrist and costochondral swelling, a soft skull, and low calcium/phosphate with high alkaline phosphatase and PTH; the image is a wrist radiograph showing cupped and frayed metaphyses.
- **Modality:** Anteroposterior wrist radiograph of an infant, grayscale DICOM-like.
- **Prompt:** Photorealistic ANTEROPOSTERIOR radiograph of an infant's wrist and distal forearm, grayscale with DICOM-like diagnostic dynamic range, realistic immature bone texture and correct pediatric anatomy with open growth plates. Show the changes of RICKETS at the distal radius and ulna: the metaphyses are WIDENED, CUPPED (concave), and FRAYED with indistinct, irregular metaphyseal margins; the physis (growth plate) is WIDENED and lucent; there is generalized OSTEOPENIA with thin cortices and coarse trabeculae, and slight bowing/splaying of the metaphyseal ends. The unossified epiphyses and soft-tissue outline are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Cupped, frayed, widened distal radial and ulnar metaphyses
  - Widened lucent growth plate (physis)
  - Generalized osteopenia with thinned cortices
  - Correct infant wrist anatomy with open physes
- **Avoid (negative prompt):** a normal sharp metaphyseal margin; a healed dense sclerotic metaphyseal band; a discrete transverse fracture as the main finding; adult fused wrist; corner/bucket-handle metaphyseal fractures of abuse as the primary feature; dense sclerotic bone (osteopetrosis); soft-tissue-only image.
- **Real-image fallback:** Radiopaedia - search "rickets wrist radiograph cupping fraying metaphysis"; Wikimedia Commons "rickets radiograph wrist".

### s1-0186 - Infective endocarditis  (Step 1 - Cardiovascular)
- **Case context:** 32-year-old man who injects drugs with fever, a new tricuspid-region holosystolic murmur that increases with inspiration, Osler nodes, and Janeway lesions; the image is a transthoracic echocardiogram showing a mobile vegetation on the tricuspid valve.
- **Modality:** Transthoracic echocardiogram (2D grayscale, four-chamber/right-heart view).
- **Prompt:** Photorealistic transthoracic ECHOCARDIOGRAM still frame, grayscale sector (fan-shaped) 2D ultrasound with authentic fine speckle texture and DICOM-like appearance, apical four-chamber orientation showing the right and left heart chambers with correct cardiac anatomy. Focus on the TRICUSPID VALVE between the right atrium and right ventricle: an irregular, shaggy, echogenic, mobile VEGETATION is attached to the atrial aspect of a tricuspid leaflet, prolapsing/oscillating across the valve plane into the right atrium during the cardiac cycle. The right-heart chambers are normal-to-mildly dilated; myocardium and other valves appear normal for contrast. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Echogenic irregular vegetation attached to a tricuspid valve leaflet
  - Mass appears mobile/oscillating and located on a valve (not myocardium)
  - Correct cardiac-chamber orientation with the vegetation on the right-sided valve
  - Authentic grayscale 2D echo texture
- **Avoid (negative prompt):** a smooth rounded intracavitary myxoma on a stalk in the left atrium; a bright discrete papillary muscle or chordae mistaken for vegetation; heavy valvular calcification as the finding; a color-Doppler overlay as the main image; pericardial effusion as the dominant feature; CT/MRI cross-section appearance; calipers/measurement crosses.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "infective endocarditis tricuspid valve vegetation echocardiogram"; Wikimedia Commons "endocarditis vegetation echocardiography".

### s1-0187 - Third-degree (complete) atrioventricular block  (Step 1 - Cardiovascular)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw dissociated P and QRS rates. The defining AV dissociation of complete heart block is exactly what AI gets wrong. Strongly recommend a REAL de-identified complete-heart-block ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 80-year-old woman with fatigue and near-syncope, a slow regular pulse around 38/min that does not rise with exertion and no nodal blocking drugs; the tracing must show regular P waves near 90/min and regular QRS complexes near 38/min that are completely dissociated.
- **Modality:** 12-lead ECG or rhythm strip on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace. Depict THIRD-DEGREE (complete) AV BLOCK: two entirely INDEPENDENT rhythms with no relationship - regular, upright P WAVES marching out at a faster ATRIAL rate around 90/min, and a separate, slower, REGULAR set of QRS complexes at a ventricular escape rate around 38/min, with the P waves bearing NO consistent PR relationship to the QRS (P waves appear before, buried within, and after the QRS complexes at continually varying positions); the escape QRS complexes are regular and broad. The two rates are clearly dissociated, with more P waves than QRS complexes. Physiologically consistent, evenly spaced within each rhythm. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Regular P waves at a faster rate (~90/min); regular QRS at a slower escape rate (~38/min); NO consistent PR relationship (AV dissociation); more P waves than QRS complexes.
- **Avoid (negative prompt):** consistent fixed PR before every QRS (normal conduction / 1:1); progressively lengthening PR then a dropped beat (Wenckebach); an irregularly irregular rhythm with no P waves (AF); random gibberish waveforms; a rapid rate; wrong grid color; annotations.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "complete heart block third degree AV block ECG"; Wikimedia Commons "third degree AV block ECG". Prefer the app vector tracing.

### s1-0188 - Pneumococcal lobar pneumonia  (Step 1 - Respiratory & Renal/Urinary)
- **Case context:** 64-year-old man with abrupt high fever, rigors, rust-colored sputum, and pleuritic pain, with dullness, increased fremitus, and bronchial breath sounds over the right lower lung and lancet-shaped gram-positive diplococci on Gram stain; the image is a PA chest radiograph showing right-lower-lobe consolidation with air bronchograms.
- **Modality:** Frontal (PA) chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal PA chest radiograph of an adult, grayscale with high dynamic range and DICOM-like diagnostic quality, anatomically correct thorax with sharp bony detail. Show LOBAR PNEUMONIA of the RIGHT LOWER LOBE: a dense, homogeneous water-density (white) CONSOLIDATION confined to the right lower lobe and respecting the major/minor fissure boundary, containing branching lucent AIR BRONCHOGRAMS coursing through the opacity; the right heart border and hemidiaphragm silhouette may be partly obscured at the affected margin. The LEFT lung is clear for contrast, the costophrenic angles are otherwise sharp, and the heart size is normal with no gross effusion. Correct ribs, clavicles, and mediastinal contours. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dense homogeneous consolidation localized to one lobe (right lower lobe)
  - Air bronchograms within the opacity
  - Lobar/fissural boundary, clear contralateral lung, normal heart size
  - Frontal projection, correct thoracic anatomy
- **Avoid (negative prompt):** diffuse bilateral patchy or interstitial infiltrates (atypical/viral); bilateral perihilar bat-wing edema with cardiomegaly (CHF); large pleural effusion or complete white-out as the dominant finding; a rounded cavitary mass; symmetric bilateral hilar adenopathy (sarcoid); lobar collapse with volume loss and shift; lateral view when frontal requested.
- **Real-image fallback:** Radiopaedia - search "lobar pneumonia right lower lobe consolidation air bronchogram chest x-ray"; Wikimedia Commons "lobar pneumonia chest radiograph".

### s1-0195 - Amyloidosis  (Step 1 - Multisystem)
- **Case context:** 63-year-old man with nephrotic-range proteinuria, macroglossia, periorbital purpura, waxy skin, and thick-walled ventricles with discordantly low ECG voltage, plus a serum monoclonal light chain (AL amyloidosis); the image is a renal biopsy stained with Congo red showing apple-green birefringence under polarized light.
- **Modality:** Congo red-stained renal biopsy viewed under POLARIZED light (paired with brightfield salmon-pink appearance); medium-high power.
- **Prompt:** Photorealistic photomicrograph of a Congo red-stained renal biopsy viewed under crossed POLARIZED light, dark background, high-magnification histopathology realism. Show amorphous, acellular AMYLOID deposits expanding the glomerular mesangium/capillary walls and vessel walls; under polarized light these Congo red-stained deposits display the pathognomonic APPLE-GREEN BIREFRINGENCE - a distinct yellow-green glow of the deposit against the dark field - conforming to the glomerular tuft and arteriolar walls. Adjacent tubules and preserved nuclei give tissue context. Correct renal architecture; the green birefringence is limited to the amyloid deposits, not the whole field. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Amorphous acellular deposits in glomeruli/vessel walls
  - Apple-green birefringence of those deposits under polarized light (against a dark field)
  - Birefringence confined to the amyloid, not diffuse background
  - Recognizable renal (glomerular) architecture
- **Avoid (negative prompt):** uniform red brightfield staining with no birefringence when polarized view is requested; nodular Kimmelstiel-Wilson diabetic glomerulosclerosis without birefringence; whole-field green fluorescence; immunofluorescence apple-green FITC look mislabeled as Congo red; crescents/proliferative glomerulonephritis as the main finding; H&E-only image; liver/cardiac tissue when renal specified.
- **Real-image fallback:** PathologyOutlines - search "amyloidosis Congo red apple-green birefringence kidney"; Wikimedia Commons "amyloid Congo red polarized apple green".

### s2ck-0051 - Community-acquired pneumonia (outpatient)  (Step 2 CK - Internal Medicine)
- **Case context:** Previously healthy 45-year-old man with 3 days of productive rust-colored sputum, fever, and pleuritic right-sided pain, with focal right-lower-lobe crackles and bronchial breath sounds and a CURB-65 of 0 (outpatient-eligible); the image is a chest radiograph showing right-lower-lobe consolidation with air bronchograms.
- **Modality:** Frontal (PA) chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal PA chest radiograph of an adult man, grayscale with high dynamic range and DICOM-like diagnostic quality, anatomically correct thorax with sharp bony detail. Show a focal RIGHT LOWER LOBE PNEUMONIA: a dense, homogeneous water-density (white) CONSOLIDATION in the right lower lobe with lucent branching AIR BRONCHOGRAMS running through it, respecting the fissural boundary; the adjacent right hemidiaphragm/heart border silhouette is partly obscured at the affected edge. The remainder of the right lung and the entire LEFT lung are clear, costophrenic angles are sharp, the heart size is normal, and there is no significant effusion. Correct ribs, clavicles, and mediastinal contours. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Focal homogeneous consolidation in the right lower lobe
  - Air bronchograms within the opacity
  - Clear remaining lung, sharp costophrenic angles, normal heart size, no large effusion
  - Frontal projection, correct thoracic anatomy
- **Avoid (negative prompt):** diffuse bilateral interstitial or patchy infiltrates; bat-wing pulmonary edema with cardiomegaly; multilobar white-out or large effusion (that would not be CURB-65 0 outpatient); a cavitary mass; bilateral hilar adenopathy; lobar collapse with shift; lateral view when frontal requested.
- **Real-image fallback:** Radiopaedia - search "right lower lobe pneumonia consolidation air bronchogram chest radiograph"; Wikimedia Commons "community acquired pneumonia chest x-ray".

### s2ck-0052 - Non-ST-elevation acute coronary syndrome  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and routinely draw wrong ST-segment and T-wave morphology. The regional horizontal ST depression with T inversions of NSTE-ACS is exactly what AI gets wrong. Strongly recommend a REAL de-identified NSTE-ACS 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 62-year-old man with diabetes and hypertension, 40 minutes of rest substernal pressure radiating to the left arm, diaphoretic, with an elevated high-sensitivity troponin; the tracing must show horizontal ST-segment depression and T-wave inversions in leads V4-V6 WITHOUT ST-segment elevation.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip, sinus rhythm at a normal rate with upright P waves and narrow QRS complexes. Depict NON-ST-ELEVATION ACUTE CORONARY SYNDROME: flat, HORIZONTAL ST-SEGMENT DEPRESSION of roughly 1-2 mm together with symmetric T-WAVE INVERSIONS in the lateral precordial leads V4, V5, and V6; there is NO ST-SEGMENT ELEVATION in any lead and no pathologic Q waves. The remaining leads show no ST elevation. Physiologically consistent, evenly spaced beats. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Horizontal ST depression and T-wave inversions localized to V4-V6; NO ST elevation anywhere; sinus rhythm with narrow QRS; no pathologic Q waves.
- **Avoid (negative prompt):** convex ST elevation of a STEMI in any territory; diffuse concave ST elevation with PR depression (pericarditis); tall peaked T waves (hyperkalemia); an irregular rhythm; random gibberish waveforms; impossible intervals; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "NSTEMI ST depression T wave inversion 12-lead ECG"; Wikimedia Commons "ST depression ECG". Prefer the app vector tracing.

### s2ck-0053 - Acute decompensated heart failure  (Step 2 CK - Internal Medicine)
- **Case context:** 70-year-old woman with HFrEF and 2 days of worsening dyspnea, orthopnea, and PND after dietary indiscretion, with jugular venous distension, bibasilar crackles, and edema; the image is a chest radiograph showing cardiomegaly, cephalization, Kerley B lines, and bilateral interstitial edema.
- **Modality:** Frontal (AP/PA) chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal chest radiograph of an older adult woman, grayscale with high dynamic range and DICOM-like diagnostic quality, anatomically correct thorax. Show ACUTE DECOMPENSATED HEART FAILURE with pulmonary edema: an ENLARGED cardiac silhouette (CARDIOMEGALY, cardiothoracic ratio well over 50%); upper-zone vascular redistribution (CEPHALIZATION) with the upper-lobe pulmonary vessels dilated and equal to or larger than the lower-lobe vessels; hazy perihilar bat-wing INTERSTITIAL EDEMA; short horizontal KERLEY B LINES at the lung bases reaching the pleural surface; peribronchial cuffing; and small blunting of the costophrenic angles from early pleural effusions. Correct ribs, clavicles, and mediastinal contours. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Enlarged cardiac silhouette (cardiomegaly)
  - Cephalization / upper-lobe vascular redistribution
  - Kerley B lines and hazy interstitial/perihilar edema
  - Optional small pleural effusions with blunted costophrenic angles; correct thoracic anatomy
- **Avoid (negative prompt):** a normal-sized heart with a single focal lobar consolidation and air bronchograms (pneumonia); a large unilateral effusion with meniscus as the only finding; a lucent hemithorax (pneumothorax); symmetric bilateral hilar adenopathy (sarcoid); boot-shaped heart; completely clear lungs; lateral view when frontal requested.
- **Real-image fallback:** Radiopaedia - search "cardiogenic pulmonary edema chest x-ray cephalization Kerley B lines cardiomegaly"; Wikimedia Commons "pulmonary edema chest radiograph".

### s2ck-0060 - Perforated peptic ulcer  (Step 2 CK - Surgery)
- **Case context:** 63-year-old man with peptic ulcer disease and chronic NSAID use, sudden severe diffuse abdominal pain, now lying still with a rigid board-like abdomen, rebound, and absent bowel sounds; the image is an upright chest radiograph showing free air under both hemidiaphragms.
- **Modality:** Upright (erect) frontal chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic UPRIGHT (erect) frontal chest radiograph of an adult, grayscale with DICOM-like diagnostic dynamic range, anatomically correct thorax and upper abdomen. Show PNEUMOPERITONEUM from a perforated viscus: thin crescents of lucent FREE AIR sitting UNDER BOTH HEMIDIAPHRAGMS, outlining the smooth superior surface of the liver on the right and the gastric/splenic region on the left, with the thin diaphragmatic muscle visible as a soft-tissue line separating lung above from free air below. The lung fields themselves are clear without consolidation or effusion, and the heart size is normal. Correct ribs, clavicles, and diaphragmatic contours. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Lucent free air under one or both hemidiaphragms (subdiaphragmatic crescent)
  - Diaphragm seen as a thin line with air below and lung above
  - Clear lungs without consolidation; upright frontal projection
  - Correct thoracic/upper-abdominal anatomy
- **Avoid (negative prompt):** normal gas-filled bowel below the diaphragm mistaken for free air (Chilaiditi colonic haustra interposition); a lobar consolidation or pleural effusion as the finding; multiple air-fluid levels of bowel obstruction as the main image; a supine film with no visible subdiaphragmatic crescent when upright requested; pneumothorax lucency in the pleural space; annotations/arrows.
- **Real-image fallback:** Radiopaedia - search "pneumoperitoneum free air under diaphragm erect chest x-ray"; Wikimedia Commons "free air under diaphragm perforation radiograph".

### s2ck-0064 - Croup (laryngotracheobronchitis)  (Step 2 CK - Pediatrics)
- **Case context:** Well-appearing 2-year-old boy with 2 days of a barky seal-like cough, hoarseness, and inspiratory stridor at rest after a coryzal prodrome, drinking and alert; the image is a frontal neck radiograph showing subglottic narrowing (steeple sign).
- **Modality:** Frontal (AP) soft-tissue neck radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic FRONTAL (AP) soft-tissue neck radiograph of a young child, grayscale with DICOM-like diagnostic dynamic range, realistic airway-column and soft-tissue densities, anatomically correct pediatric cervical anatomy. Show the STEEPLE SIGN of croup: symmetric tapered SUBGLOTTIC NARROWING of the tracheal air column just below the vocal cords, so the normally shouldered subglottic airway comes to a smooth pointed apex resembling a church steeple or inverted V/pencil-tip. The lateral tracheal walls converge symmetrically; there is no thumb-shaped epiglottic mass and no discrete radiopaque foreign body. Cervical vertebrae, mandible, and shoulders correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Symmetric tapered subglottic narrowing of the tracheal air column (steeple/pencil-tip)
  - Loss of the normal subglottic shoulders
  - Frontal (AP) neck projection, correct pediatric anatomy
  - Air column visible for contrast
- **Avoid (negative prompt):** a rounded thumb-shaped enlarged epiglottis (epiglottitis, that is a LATERAL-view finding); a widened prevertebral soft-tissue stripe (retropharyngeal abscess); a radiopaque aspirated foreign body; a lateral view when frontal requested; asymmetric/eccentric tracheal deviation as the main finding; adult anatomy; annotations/arrows.
- **Real-image fallback:** Radiopaedia - search "croup steeple sign AP neck radiograph subglottic narrowing"; Wikimedia Commons "steeple sign croup".

### s2ck-0067 - Foreign body aspiration  (Step 2 CK - Pediatrics)
- **Case context:** Previously healthy 2-year-old girl with sudden coughing and choking while eating peanuts, then persistent cough with unilateral right-sided wheeze and diminished breath sounds; the image is an expiratory chest radiograph showing right-lung hyperinflation and air trapping with mediastinal shift away from the affected side.
- **Modality:** Frontal EXPIRATORY chest radiograph of a young child, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal EXPIRATORY chest radiograph of a young child, grayscale with DICOM-like diagnostic dynamic range, anatomically correct pediatric thorax. Depict a ball-valve bronchial FOREIGN BODY causing obstructive AIR TRAPPING: on this expiratory film the RIGHT lung remains abnormally HYPERINFLATED and LUCENT (dark, hyperlucent) with a flattened right hemidiaphragm and splayed ribs because trapped air cannot escape, while the normal LEFT lung deflates and looks relatively more opaque; the MEDIASTINUM and heart are SHIFTED AWAY from the hyperinflated right side (toward the left). No radiopaque object is necessarily visible (organic peanut is radiolucent). Correct pediatric ribs, clavicles, and mediastinal contours. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Unilateral right-lung hyperinflation/hyperlucency with air trapping on expiration
  - Flattened ipsilateral hemidiaphragm; the affected lung fails to deflate
  - Mediastinal/cardiac shift AWAY from the hyperinflated side
  - Frontal pediatric projection, correct anatomy
- **Avoid (negative prompt):** a dense lobar consolidation with air bronchograms (pneumonia); a collapsed lung with mediastinal shift TOWARD the side (atelectasis/total obstruction) as the intended finding; bilateral symmetric hyperinflation (asthma) without asymmetry; a large radiopaque metallic object dominating the film; a pneumothorax with a visible pleural edge and no lung markings; adult chest; annotations.
- **Real-image fallback:** Radiopaedia - search "foreign body aspiration air trapping expiratory chest radiograph hyperinflation"; Wikimedia Commons "foreign body aspiration chest x-ray air trapping".

### s2ck-0070 - Ovarian torsion  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 25-year-old woman with a known right ovarian cyst and sudden severe intermittent right lower quadrant pain with nausea/vomiting, a tender right adnexal mass, and a negative pregnancy test; the image is a transvaginal Doppler ultrasound showing an enlarged edematous right ovary with markedly reduced flow.
- **Modality:** Transvaginal ultrasound with color/spectral Doppler (grayscale plus Doppler overlay), high-frequency endocavitary probe.
- **Prompt:** Photorealistic TRANSVAGINAL ULTRASOUND image with COLOR DOPPLER, grayscale sector field with realistic fine speckle texture and a color-flow box, correct endocavitary probe geometry and depth gradient. Show OVARIAN TORSION: a markedly ENLARGED, rounded, EDEMATOUS ovary with a heterogeneous, hypoechoic swollen stroma and small peripherally displaced follicles arranged around the rim (the classic peripheralized-follicle "string of pearls"); an associated adnexal cyst is present. On color Doppler interrogation the enlarged ovary shows ABSENT-to-markedly-DIMINISHED internal venous and arterial FLOW (little or no color filling within the ovarian parenchyma) compared with adjacent perfused tissue. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Enlarged, edematous ovary with heterogeneous stroma
  - Peripherally displaced follicles around the swollen ovary
  - Absent or markedly reduced intraovarian color/spectral Doppler flow
  - Authentic transvaginal grayscale + color Doppler appearance
- **Avoid (negative prompt):** a normal-sized ovary with brisk, symmetric normal color Doppler flow filling the parenchyma; a simple thin-walled anechoic cyst as the only finding; a tubo-ovarian abscess with thick septations and internal debris as the intended diagnosis; an ectopic gestational sac (pregnancy test is negative); CT/MRI cross-section; calipers/measurement crosses dominating the image.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "ovarian torsion transvaginal ultrasound enlarged ovary absent Doppler flow"; Wikimedia Commons "ovarian torsion ultrasound".

### s2ck-0071 - Postmenopausal bleeding evaluation  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 58-year-old obese diabetic, hypertensive woman (menopause at 51, no hormone therapy) with 2 weeks of painless vaginal bleeding and an unremarkable pelvic exam; the image is a transvaginal ultrasound showing a thickened endometrial stripe of 12 mm.
- **Modality:** Transvaginal ultrasound, sagittal midline uterus view (grayscale endocavitary probe).
- **Prompt:** Photorealistic TRANSVAGINAL ULTRASOUND image, grayscale sector field with realistic fine speckle texture and correct endocavitary probe geometry, midline SAGITTAL view of the uterus with the cervix, myometrium, and endometrial cavity clearly displayed. Show a THICKENED ENDOMETRIAL STRIPE: the central endometrial echo complex is abnormally THICK (measuring roughly 12 mm across, well above the normal postmenopausal 4-5 mm threshold), appearing as a prominent hyperechoic band bordered by the hypoechoic myometrium, homogeneous-to-slightly heterogeneous, without a large discrete polyp mass or fibroid distorting it. The uterus is normal in overall contour; a thin endometrial fluid rim may be present. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Thickened endometrial stripe (clearly above the postmenopausal threshold, around 12 mm)
  - Endometrium seen as a central echogenic band bordered by hypoechoic myometrium
  - Sagittal uterine orientation, normal uterine contour
  - Authentic transvaginal grayscale ultrasound appearance
- **Avoid (negative prompt):** a thin (4-5 mm or less) normal postmenopausal stripe; a large exophytic fibroid or focal polyp as the dominant mass; a gravid uterus with a gestational sac; ovarian mass as the main image; color Doppler as the primary finding; CT/MRI cross-section; calipers/measurement crosses dominating the frame.
- **Real-image fallback:** Radiopaedia - search "thickened endometrium transvaginal ultrasound postmenopausal"; Wikimedia Commons "endometrial thickness ultrasound".

### s3-0048 - Acute ischemic stroke thrombolysis  (Step 3 - Emergency Medicine)
- **Case context:** 62-year-old man 90 minutes after sudden right-sided weakness and difficulty speaking, BP 168/92, normal glucose, no recent surgery/bleeding/anticoagulant use; the image is a noncontrast head CT showing NO intracranial hemorrhage and NO large established infarct (thrombolysis-eligible).
- **Modality:** Noncontrast head CT, axial slice, brain window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial NONCONTRAST head CT image in diagnostic grayscale, brain window, radiologically accurate and symmetric anatomy, realistic CT noise and gray-white differentiation. Depict an essentially NORMAL early scan that permits thrombolysis: NO hyperdense (bright white) blood in any compartment - no intraparenchymal, subarachnoid, subdural, or epidural hemorrhage; preserved, crisp GRAY-WHITE MATTER DIFFERENTIATION throughout both hemispheres with a normal cortical ribbon, insular ribbon, and basal ganglia margins; symmetric, normal-sized lateral ventricles and sulci with no effacement, no mass, and no midline shift; no dark wedge of established infarct and no hyperdense vessel sign. Skull and orbits correctly rendered. The scan looks reassuringly normal, consistent with hyperacute ischemia before CT changes appear. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - No hyperdense blood (no hemorrhage of any compartment)
  - Preserved, symmetric gray-white differentiation; no wedge of hypodensity
  - Normal symmetric ventricles and sulci, no midline shift or mass effect
  - Correct, symmetric CT brain anatomy
- **Avoid (negative prompt):** any bright white hyperdense hemorrhage; a dark wedge-shaped established infarct; loss of gray-white differentiation or an effaced insular ribbon; a hyperdense MCA sign; midline shift or herniation; ventricular asymmetry/duplication; contrast enhancement; MRI appearance; bone-window only.
- **Real-image fallback:** Radiopaedia - search "normal noncontrast CT head" or "acute ischemic stroke normal early CT thrombolysis"; Wikimedia Commons "normal head CT axial".

### s3-0050 - Acute cholecystitis  (Step 3 - Surgery)
- **Case context:** 48-year-old woman with 8 hours of constant right upper quadrant pain after a fatty meal, fever, nausea, a positive Murphy sign, and leukocytosis; the image is a right upper quadrant ultrasound showing gallstones, a thickened gallbladder wall, and pericholecystic fluid.
- **Modality:** Right upper quadrant abdominal ultrasound (grayscale, curvilinear probe), longitudinal gallbladder view.
- **Prompt:** Photorealistic RIGHT UPPER QUADRANT ULTRASOUND image of the gallbladder, grayscale curvilinear sector field with realistic fine speckle texture and DICOM-like appearance, correct sonographic anatomy in a longitudinal view. Show ACUTE CHOLECYSTITIS: one or more echogenic GALLSTONES within the gallbladder lumen casting clean posterior ACOUSTIC SHADOWS; a diffusely THICKENED gallbladder WALL (over 3 mm, appearing as a striated or layered edematous wall); a rim of anechoic PERICHOLECYSTIC FLUID tracking around the gallbladder; and a distended gallbladder. Adjacent liver parenchyma provides context with realistic ultrasound gain gradient and depth shadowing. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Echogenic gallstone(s) with posterior acoustic shadowing
  - Thickened gallbladder wall (striated/edematous, over 3 mm)
  - Pericholecystic fluid rim; distended gallbladder
  - Authentic grayscale RUQ ultrasound texture with adjacent liver
- **Avoid (negative prompt):** a normal thin-walled gallbladder with no stones; a solid gallbladder-wall mass (carcinoma) as the intended finding; dilated intrahepatic/common bile ducts as the dominant feature (choledocholithiasis/obstruction) without wall changes; a polyp without shadowing mistaken for a stone; color Doppler as the main image; CT/MRI cross-section; calipers/measurement crosses dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "acute cholecystitis ultrasound gallstones wall thickening pericholecystic fluid"; Wikimedia Commons "acute cholecystitis ultrasound".

<!-- Added with Step 1 Batch 9, Step 2 CK Batch 4, Step 3 Day 1 Batch 3, Step 3 Day 2 ACM Batch 1 -->

### s1-0206 - Glioblastoma multiforme  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** 62-year-old man with weeks of worsening morning headaches, new left-sided weakness, and a first generalized seizure; the image is a contrast-enhanced brain MRI showing a large irregular ring-enhancing mass with central necrosis crossing the corpus callosum into both hemispheres (butterfly glioma).
- **Modality:** Contrast-enhanced (post-gadolinium) T1-weighted brain MRI, axial slice (DICOM grayscale).
- **Prompt:** Hyperrealistic axial POST-GADOLINIUM T1-weighted brain MRI in diagnostic grayscale, radiologically accurate and symmetric skull-base and brain anatomy with realistic MRI signal and gray-white differentiation. Depict a GLIOBLASTOMA as a BUTTERFLY GLIOMA: a large, irregular, thick-walled RING-ENHANCING mass with a bright peripheral rim of enhancement surrounding a darker CENTRAL NECROTIC core, centered on and CROSSING THE CORPUS CALLOSUM so it involves BOTH cerebral hemispheres in a symmetric wing-like (butterfly) configuration. Show surrounding non-enhancing vasogenic edema, mass effect with effacement of the adjacent lateral ventricle, and mild midline shift. Skull and orbits correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Thick irregular ring/rim enhancement with central necrosis
  - Lesion crossing the corpus callosum to involve both hemispheres (butterfly shape)
  - Surrounding vasogenic edema with mass effect and some midline shift
  - Correct axial contrast-enhanced brain MRI appearance
- **Avoid (negative prompt):** a smooth homogeneously enhancing extra-axial dural-based mass (meningioma); multiple small ring lesions (metastases/abscesses) as the intended finding; a thin smooth uniform ring of a simple abscess; an intraventricular or pituitary mass; no enhancement at all; noncontrast CT appearance; annotations or arrows.
- **Real-image fallback:** Radiopaedia - search "glioblastoma butterfly ring enhancing corpus callosum MRI"; Wikimedia Commons "glioblastoma multiforme MRI".

### s1-0210 - Ewing sarcoma  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 12-year-old boy with weeks of mid-thigh pain and swelling, low-grade fever, and weight loss mimicking infection; biopsy shows CD99-positive small round blue cells. The image is a radiograph of the femoral diaphysis showing a lytic lesion with a multilayered onion-skin periosteal reaction.
- **Modality:** Anteroposterior radiograph of the femur (diaphysis), grayscale DICOM-like.
- **Prompt:** Photorealistic ANTEROPOSTERIOR radiograph of a child's femur centered on the mid-shaft (DIAPHYSIS), grayscale with DICOM-like diagnostic dynamic range, realistic immature bone trabecular texture and correct pediatric anatomy. Show EWING SARCOMA: a permeative, moth-eaten LYTIC lesion in the femoral diaphysis with poorly defined margins, accompanied by an aggressive MULTILAYERED "ONION-SKIN" (lamellated) PERIOSTEAL REACTION - several concentric parallel layers of new bone laid down along the cortex - and an associated soft-tissue component. The cortex looks permeated rather than expanded, and the surrounding soft tissues are mildly swollen. Correct femoral shaft, distal metaphysis, and adjacent joint rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diaphyseal (mid-shaft) location of the lytic lesion
  - Multilayered lamellated "onion-skin" periosteal reaction
  - Permeative/moth-eaten aggressive margins with soft-tissue involvement
  - Correct pediatric femur radiographic anatomy
- **Avoid (negative prompt):** a metaphyseal lesion with a Codman triangle and sunburst spiculation as the primary pattern (osteosarcoma); a well-defined benign lucent lesion with a sclerotic rim; a single smooth solid periosteal shell (benign); a purely sclerotic bone-forming mass; a healed simple fracture as the main finding; adult bone; annotations.
- **Real-image fallback:** Radiopaedia - search "Ewing sarcoma femur onion skin periosteal reaction radiograph"; Wikimedia Commons "Ewing sarcoma onion skin".

### s1-0211 - Atrial fibrillation  (Step 1 - Cardiovascular)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw a truly irregular RR pattern with a genuinely P-wave-free fibrillatory baseline. Strongly recommend a REAL de-identified atrial fibrillation ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 72-year-old man with long-standing hypertension, palpitations and mild breathlessness, and a pulse irregular in both rate and rhythm; counseled about embolic stroke from left atrial appendage clot. The tracing must show irregularly irregular RR intervals with no discrete P waves and a fibrillatory baseline.
- **Modality:** 12-lead ECG or rhythm strip on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace. Depict ATRIAL FIBRILLATION: an IRREGULARLY IRREGULAR ventricular rhythm in which the RR intervals vary randomly from beat to beat with NO repeating pattern; there are NO discrete upright P waves before the QRS complexes; instead the baseline between QRS complexes is a continuous, low-amplitude, chaotic FIBRILLATORY (f-wave) undulation. The QRS complexes are NARROW and normal in morphology but spaced at continually changing intervals. Physiologically consistent narrow beats on an unmistakably irregular, P-wave-absent baseline. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Irregularly irregular RR intervals with no repeating pattern; absent discrete P waves; a fibrillatory (f-wave) baseline; narrow QRS complexes.
- **Avoid (negative prompt):** clear upright P waves before every QRS (sinus rhythm); regular evenly spaced RR intervals; sawtooth flutter waves at a regular atrial rate; wide bizarre QRS complexes (VT); random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "atrial fibrillation ECG irregularly irregular"; Wikimedia Commons "atrial fibrillation ECG". Prefer the app vector tracing.

### s1-0212 - Cardiac tamponade  (Step 1 - Cardiovascular)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw consistent beat-to-beat QRS-amplitude alternation. The electrical alternans of tamponade is exactly what AI gets wrong. Strongly recommend a REAL de-identified electrical-alternans ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 58-year-old man with metastatic lung cancer, acute dyspnea, hypotension (84/62), elevated JVP, distant heart sounds, and an 18 mm Hg inspiratory drop in systolic pressure (pulsus paradoxus); the tracing must show sinus tachycardia with low-voltage QRS complexes and beat-to-beat alternation in QRS amplitude (electrical alternans).
- **Modality:** 12-lead ECG or rhythm strip on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace. Depict CARDIAC TAMPONADE: a regular SINUS TACHYCARDIA at a fast rate (around 120/min) with small upright P waves, in which every QRS complex is of LOW VOLTAGE (uniformly small amplitude across the strip) AND the QRS amplitude ALTERNATES in a regular beat-to-beat pattern - one taller complex, then one shorter complex, then taller again (ELECTRICAL ALTERNANS) - reflecting the heart swinging within a pericardial effusion. Consistent narrow QRS morphology, physiologically even RR intervals at the tachycardic rate. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Sinus tachycardia (regular, upright P waves, fast rate); uniformly low-voltage QRS complexes; regular beat-to-beat alternation of QRS amplitude (electrical alternans); narrow QRS.
- **Avoid (negative prompt):** tall high-voltage QRS complexes (LVH); an irregularly irregular rhythm with no P waves (AF); ST-segment elevation of STEMI or diffuse concave elevation of pericarditis as the main finding; random amplitude jitter that is not a regular tall-short-tall alternation; wide bizarre complexes; wrong grid color; annotations.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "electrical alternans cardiac tamponade low voltage ECG"; Wikimedia Commons "electrical alternans ECG". Prefer the app vector tracing.

### s1-0213 - Renal cell carcinoma  (Step 1 - Respiratory & Renal/Urinary)
- **Case context:** 63-year-old longtime smoker with painless hematuria, dull left flank ache, 6 kg weight loss, a palpable left flank mass, and a new non-emptying left varicocele; the image is a contrast CT of the abdomen showing a large heterogeneously enhancing solid mass in the upper pole of the left kidney with tumor extending into the left renal vein.
- **Modality:** Contrast-enhanced abdominal CT, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED abdominal CT in diagnostic grayscale, soft-tissue window, radiologically accurate and symmetric anatomy with realistic CT noise and correctly enhancing vessels and organs. Depict RENAL CELL CARCINOMA: a large, solid, HETEROGENEOUSLY ENHANCING mass arising from the UPPER POLE of the LEFT kidney, with irregular areas of enhancement interspersed with lower-density necrosis, distorting the renal contour and replacing normal parenchyma. Show TUMOR THROMBUS extending from the mass into an EXPANDED, enhancing LEFT RENAL VEIN. The contralateral right kidney, liver, spleen, aorta, and vertebral body are normal for contrast. Correct retroperitoneal anatomy. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Large solid heterogeneously enhancing mass in the (left) kidney distorting its contour
  - Tumor extension/thrombus into an expanded renal vein
  - Normal contralateral kidney and adjacent organs for contrast
  - Correct axial contrast-enhanced abdominal CT appearance
- **Avoid (negative prompt):** a simple thin-walled anechoic/water-density benign cyst with no enhancement; a fat-containing angiomyolipoma with macroscopic fat; bilateral small shrunken kidneys; a purely cystic mass without a solid enhancing component; hydronephrosis without a mass as the main finding; noncontrast or MRI appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "renal cell carcinoma CT heterogeneous mass renal vein tumor thrombus"; Wikimedia Commons "renal cell carcinoma CT".

### s1-0216 - Achalasia  (Step 1 - Gastrointestinal)
- **Case context:** 47-year-old woman with two years of progressive dysphagia to solids and liquids from the outset, regurgitation of undigested food, weight loss, and post-meal chest discomfort; the image is a barium esophagram showing a dilated esophageal body tapering to a smooth bird-beak narrowing at the gastroesophageal junction.
- **Modality:** Barium esophagram (contrast fluoroscopic upright frontal view), grayscale.
- **Prompt:** Photorealistic upright frontal BARIUM ESOPHAGRAM (contrast fluoroscopic image) in grayscale with realistic radiographic dynamic range and correct thoracic/mediastinal background. Depict ACHALASIA: a markedly DILATED esophageal body filled with barium, tapering smoothly and symmetrically to a sharp, narrow, beak-like point at the GASTROESOPHAGEAL JUNCTION - the classic "BIRD-BEAK" appearance - with hold-up of contrast above the tight lower esophageal sphincter and a retained air-fluid/food column at the top of the dilated esophagus. The narrowing is smooth and tapered (not shouldered or irregular). Correct spine and diaphragm rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dilated esophageal body with retained contrast column
  - Smooth symmetric tapering to a bird-beak point at the gastroesophageal junction
  - Hold-up of barium above a tight lower esophageal sphincter
  - Correct barium esophagram grayscale appearance
- **Avoid (negative prompt):** an irregular shouldered "apple-core" annular narrowing (malignancy); a corkscrew/rosary-bead esophagus of diffuse esophageal spasm as the main finding; a smooth distal peptic stricture without proximal dilation; a hiatal hernia or Schatzki ring as the finding; a normal-caliber esophagus with normal peristalsis; CT cross-section; annotations.
- **Real-image fallback:** Radiopaedia - search "achalasia barium swallow bird beak dilated esophagus"; Wikimedia Commons "achalasia barium esophagram bird beak".

### s2ck-0077 - Acute aortic dissection  (Step 2 CK - Internal Medicine)
- **Case context:** 64-year-old man with poorly controlled hypertension, sudden tearing chest pain radiating to the interscapular back, a right-vs-left arm BP differential (188/104 vs 150/86), a soft early diastolic (aortic regurgitation) murmur, and asymmetric pulses; the image is a CT angiogram of the chest showing an intimal flap in the ascending aorta extending into the arch (Stanford type A).
- **Modality:** Contrast-enhanced CT angiography of the chest, axial slice (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT ANGIOGRAM of the chest in diagnostic grayscale, radiologically accurate mediastinal anatomy with brightly opacified (contrast-filled) great vessels and realistic CT noise. Depict a STANFORD TYPE A AORTIC DISSECTION: a thin curvilinear low-attenuation INTIMAL FLAP inside the brightly enhancing ASCENDING AORTA, dividing the lumen into a TRUE and a FALSE LUMEN with slightly different contrast densities, and the dissection flap also seen within the aortic ARCH. The ascending aorta is dilated. The pulmonary artery, superior vena cava, and vertebral body are normal for contrast; a small associated pericardial or pleural rim may be present. Correct thoracic cross-sectional anatomy. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Intimal flap within the ascending aorta (and arch) dividing true and false lumens
  - Dilated ascending aorta with a contrast-opacified lumen (CT angiogram)
  - Correct axial mediastinal anatomy with other great vessels normal
  - Diagnostic contrast-enhanced CTA grayscale
- **Avoid (negative prompt):** a saccular/fusiform aneurysm with mural thrombus but NO flap; an intimal flap confined to the descending aorta only (type B) when type A requested; a pulmonary artery filling defect (PE); a noncontrast scan with no luminal opacification; heavy calcified plaque mimicking a flap; MRI appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "aortic dissection type A CT angiography intimal flap ascending aorta"; Wikimedia Commons "aortic dissection CT".

### s2ck-0081 - Lower extremity deep vein thrombosis  (Step 2 CK - Internal Medicine)
- **Case context:** 58-year-old woman after a 12-hour flight with 2 days of left calf pain and swelling, a warm leg with pitting edema and a 4 cm calf-circumference difference, hemodynamically stable; the image is compression ultrasonography of the left leg showing a noncompressible femoral vein with echogenic intraluminal thrombus.
- **Modality:** Venous compression ultrasound, transverse view of the femoral vein (grayscale, linear probe), side-by-side non-compression / compression pair.
- **Prompt:** Photorealistic VENOUS COMPRESSION ULTRASOUND image of the thigh, grayscale linear-probe field with realistic fine speckle texture and DICOM-like appearance, transverse orientation showing the common femoral vein adjacent to the pulsatile common femoral artery. Depict a DEEP VEIN THROMBOSIS: the FEMORAL VEIN lumen is expanded and filled with ECHOGENIC (gray) INTRALUMINAL THROMBUS rather than anechoic black blood, and with probe compression the vein remains ROUND and NONCOMPRESSIBLE (does not collapse) while the neighboring artery stays patent - ideally shown as a paired transverse view (without and with transducer compression) where the thrombosed vein fails to flatten. Realistic ultrasound gain gradient and depth. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Echogenic intraluminal thrombus filling and distending the femoral vein
  - Vein remains round and noncompressible with probe pressure (fails to collapse)
  - Adjacent patent femoral artery for contrast
  - Authentic grayscale venous compression ultrasound appearance
- **Avoid (negative prompt):** a fully compressible vein that collapses to a slit (normal); a purely anechoic patent vein with no thrombus; a color-Doppler-only image as the primary finding; an arterial plaque/occlusion as the intended finding; a Baker cyst or abscess as the main image; CT/MRI cross-section; calipers dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "DVT compression ultrasound noncompressible femoral vein thrombus"; Wikimedia Commons "deep vein thrombosis ultrasound".

### s2ck-0083 - Atrial fibrillation with rapid ventricular response  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw a genuinely irregular, P-wave-absent rhythm at a fast rate. Strongly recommend a REAL de-identified rapid atrial fibrillation ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 68-year-old man with several hours of palpitations and mild breathlessness, hemodynamically stable (BP 132/80), heart rate about 140/min and irregularly irregular, clear lungs and no chest pain; the tracing must show an irregularly irregular rhythm with absent P waves and a narrow QRS at a ventricular rate near 140/min.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict ATRIAL FIBRILLATION WITH RAPID VENTRICULAR RESPONSE: an IRREGULARLY IRREGULAR ventricular rhythm at a FAST rate around 140/min, with NO discrete P waves and a chaotic low-amplitude FIBRILLATORY baseline between beats; the QRS complexes are NARROW and normal in morphology but occur at continually varying, closely spaced RR intervals with no repeating pattern. Physiologically consistent narrow complexes on an unmistakably irregular, P-wave-absent baseline. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Irregularly irregular RR intervals with no repeating pattern at a rapid rate (~140/min); absent discrete P waves with a fibrillatory baseline; narrow QRS complexes.
- **Avoid (negative prompt):** clear upright P waves before each QRS (sinus tachycardia); a perfectly regular narrow tachycardia (SVT/flutter with fixed conduction); sawtooth flutter waves; wide bizarre QRS complexes (VT); random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "atrial fibrillation rapid ventricular response ECG"; Wikimedia Commons "atrial fibrillation RVR ECG". Prefer the app vector tracing.

### s2ck-0086 - Sigmoid volvulus  (Step 2 CK - Surgery)
- **Case context:** 80-year-old nursing-home resident with chronic constipation, 2 days of progressive abdominal distension, cramping, and obstipation, with a markedly distended tympanitic but soft abdomen and no peritoneal signs; the image is an abdominal radiograph showing a massively dilated inverted-U (coffee-bean) sigmoid loop projecting toward the right upper quadrant.
- **Modality:** Supine abdominal radiograph (KUB), grayscale DICOM-like.
- **Prompt:** Photorealistic supine ABDOMINAL RADIOGRAPH (KUB) of an elderly adult, grayscale with DICOM-like diagnostic dynamic range, anatomically correct bowel gas pattern and bony pelvis/spine. Depict a SIGMOID VOLVULUS: a MASSIVELY DILATED, air-filled INVERTED-U ("COFFEE-BEAN") sigmoid colon loop arising from the pelvis and projecting up toward the RIGHT UPPER QUADRANT, its two limbs apposed with a dense central cleft line (the opposed medial walls) forming the coffee-bean cleft, and the apex reaching high under the diaphragm. There is proximal large-bowel dilation, while the rest of the abdomen shows relatively less gas. No free air under the diaphragm. Correct pelvic bones and lumbar spine rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Massively dilated inverted-U sigmoid loop (coffee-bean sign) pointing to the right upper quadrant
  - Dense central cleft from apposed medial walls
  - Large-bowel dilation without free intraperitoneal air
  - Correct supine abdominal radiograph appearance
- **Avoid (negative prompt):** multiple small-bowel air-fluid levels with valvulae conniventes as the dominant finding (small-bowel obstruction); free air under the diaphragm (perforation); a normal nondistended bowel gas pattern; a right-sided cecal volvulus pointing to the left upper quadrant labeled as sigmoid; a soft-tissue mass; upright chest view; annotations.
- **Real-image fallback:** Radiopaedia - search "sigmoid volvulus coffee bean sign abdominal radiograph"; Wikimedia Commons "sigmoid volvulus x-ray".

### s2ck-0088 - Obstructing ureteral stone with infection  (Step 2 CK - Surgery)
- **Case context:** 52-year-old woman with 8 hours of severe right flank pain radiating to the groin, nausea, rigors, fever 39.1 C, tachycardia, borderline hypotension, marked right CVA tenderness, and pyuria/bacteriuria (infected obstructed system); the image is a noncontrast CT showing a 9-mm obstructing stone at the right ureteropelvic junction with hydronephrosis.
- **Modality:** Noncontrast CT of the abdomen/pelvis (CT KUB / stone protocol), axial slice (DICOM grayscale).
- **Prompt:** Hyperrealistic axial NONCONTRAST CT of the abdomen (stone-protocol) in diagnostic grayscale, soft-tissue window, radiologically accurate retroperitoneal anatomy with realistic CT noise and no intravenous contrast. Depict an OBSTRUCTING URETERAL STONE: a dense, bright, high-attenuation CALCULUS (about 9 mm) lodged at the RIGHT URETEROPELVIC JUNCTION, with upstream HYDRONEPHROSIS shown as a dilated, fluid-filled (low-density) renal pelvis and calyces of the right kidney; associated perinephric fat stranding suggests an inflamed, obstructed system. The left kidney and collecting system are normal and non-dilated for contrast, and the aorta and vertebral body appear normal without vascular opacification. Correct axial abdominal anatomy. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dense bright calculus at the right ureteropelvic junction
  - Upstream hydronephrosis (dilated fluid-filled renal pelvis/calyces) on that side
  - Perinephric fat stranding; normal non-dilated contralateral kidney
  - Noncontrast (unopacified vessels) axial CT appearance
- **Avoid (negative prompt):** contrast-opacified vessels or a nephrogram (this is a noncontrast study); a solid enhancing renal mass; bilateral symmetric hydronephrosis with no stone; a calcified vascular plaque or phlebolith mistaken for the ureteral stone; gallstones in the gallbladder; MRI appearance; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia - search "obstructing ureteric stone noncontrast CT hydronephrosis"; Wikimedia Commons "ureteral calculus CT hydronephrosis".

### s2ck-0093 - Placenta previa  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 29-year-old woman at 32 weeks with a sudden episode of painless bright red vaginal bleeding that has slowed, no abdominal pain or uterine tenderness, a soft uterus, reassuring fetal tracing, and hemodynamic stability; the image is a transabdominal ultrasound showing the placenta completely covering the internal cervical os.
- **Modality:** Transabdominal obstetric ultrasound, sagittal midline view of the lower uterine segment/cervix (grayscale, curvilinear probe).
- **Prompt:** Photorealistic TRANSABDOMINAL OBSTETRIC ULTRASOUND image, grayscale curvilinear sector field with realistic fine speckle texture and DICOM-like appearance, sagittal midline view of the lower uterine segment showing the maternal bladder anteriorly, the cervix, and the internal cervical os. Depict PLACENTA PREVIA: homogeneous, mid-gray PLACENTAL tissue implanted in the lower uterine segment that COMPLETELY COVERS the INTERNAL CERVICAL OS, bridging across from anterior to posterior over the closed cervical canal, with the fetal presenting part displaced upward above the placenta. The cervix is long and closed beneath the placenta. Realistic ultrasound gain gradient and depth shadowing. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Placental tissue completely covering the internal cervical os
  - Correct sagittal lower-uterine-segment view with bladder, cervix, and cervical canal
  - Presenting part displaced upward above the placenta
  - Authentic grayscale transabdominal obstetric ultrasound appearance
- **Avoid (negative prompt):** a fundal or high anterior/posterior placenta clear of the os (normal position); a retroplacental hematoma separating the placenta (abruption) as the intended finding; an open dilated cervix with a bulging membrane; a non-gravid uterus; color Doppler as the primary image; CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia - search "placenta previa transabdominal ultrasound covering internal os"; Wikimedia Commons "placenta previa ultrasound".

### s2ck-0095 - Uterine leiomyomata  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 41-year-old woman with months of progressively heavier, prolonged menses, pelvic pressure, and urinary frequency, and an enlarged, firm, irregular, mobile uterus (negative pregnancy test, not anemic); the image is a pelvic ultrasound showing multiple well-circumscribed hypoechoic intramural masses distorting the uterine contour.
- **Modality:** Pelvic (transabdominal/transvaginal) ultrasound, sagittal uterine view (grayscale).
- **Prompt:** Photorealistic PELVIC ULTRASOUND image of the uterus, grayscale sector field with realistic fine speckle texture and DICOM-like appearance, sagittal view showing the uterine body, endometrial stripe, and myometrium. Depict UTERINE LEIOMYOMATA (fibroids): MULTIPLE well-circumscribed, rounded, predominantly HYPOECHOIC INTRAMURAL masses embedded in the myometrium, some with faint internal whorled heterogeneity and subtle posterior acoustic shadowing, ENLARGING the uterus and DISTORTING its normally smooth CONTOUR into a lumpy, irregular outline; the central endometrial echo may be displaced or bowed by the nearest mass. The overall uterus is enlarged but the masses are discrete and rounded. Realistic ultrasound gain gradient and depth. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multiple well-circumscribed rounded hypoechoic intramural myometrial masses
  - Enlarged uterus with a lumpy, distorted (irregular) contour
  - Displacement/bowing of the endometrial stripe by a mass; discrete masses
  - Authentic grayscale pelvic ultrasound appearance
- **Avoid (negative prompt):** a diffusely enlarged uterus with an indistinct myometrial-endometrial junction and cystic spaces but no discrete mass (adenomyosis); a single thin-walled anechoic ovarian cyst as the finding; a gravid uterus with a gestational sac; a thickened endometrial stripe as the dominant feature; solid ovarian tumor; CT/MRI cross-section; calipers dominating the frame.
- **Real-image fallback:** Radiopaedia - search "uterine fibroids leiomyoma ultrasound hypoechoic intramural"; Wikimedia Commons "uterine leiomyoma ultrasound".

### s3-0053 - Forest plot in a meta-analysis  (Step 3 - Biostatistics & Epidemiology)
- **Case context:** A meta-analysis pools eight randomized trials of a preventive therapy versus placebo for a cardiovascular outcome; the image is a forest plot in which several individual trial confidence intervals cross the line of no effect (risk ratio 1.0) but the pooled summary diamond is centered at a risk ratio of 0.82 (95% CI 0.74-0.91) with I-squared = 15%.
- **Modality:** Statistical FOREST PLOT (clean vector-style scientific figure on a white background, not a photorealistic medical image).
- **Prompt:** Clean vector-style scientific FOREST PLOT on a white background, high-resolution journal-figure clarity, a single vertical LINE OF NO EFFECT at risk ratio 1.0 on a horizontal axis. Show EIGHT stacked trial rows, each a small square DATA MARKER (with the marker size varying to suggest study weight) and a horizontal CONFIDENCE-INTERVAL whisker; the individual point estimates scatter around the left of 1.0 and SEVERAL of the individual confidence intervals visibly CROSS the vertical line of no effect (1.0). At the bottom, a POOLED SUMMARY DIAMOND is centered to the LEFT of the line at a risk ratio of about 0.82 with its narrow width spanning roughly 0.74 to 0.91, lying ENTIRELY to the left of 1.0 (not touching the line). The layout is a tidy grid of rows with the summary diamond clearly larger and distinct. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - A single vertical line of no effect at risk ratio 1.0
  - Eight individual trials as squares with confidence-interval whiskers, several crossing 1.0
  - A pooled summary diamond centered near 0.82, entirely left of the line (does not cross 1.0)
  - Variable marker sizes suggesting study weight; clean scientific figure style
- **Avoid (negative prompt):** a summary diamond that crosses or touches the line of no effect; the diamond centered to the right of 1.0; only two or three trials instead of eight; a scatter plot, bar chart, or Kaplan-Meier curve instead of a forest plot; a funnel plot; log-scale asymmetry drawn as random noise; any photorealistic clinical imagery.
- **Real-image fallback:** Wikimedia Commons - search "forest plot meta-analysis risk ratio"; Cochrane Handbook / open-access meta-analysis figures; alternatively render the forest plot as an app-native SVG (most reliable for statistical diagrams).

### s3-0064 - Acute pulmonary embolism, hemodynamically stable  (Step 3 - Internal Medicine)
- **Case context:** 58-year-old woman with acute dyspnea and pleuritic chest pain 5 days after knee replacement, tachycardic and mildly hypoxemic but hemodynamically stable with no right heart strain on echocardiography; the image is a CT pulmonary angiogram showing a filling defect in the right main pulmonary artery.
- **Modality:** CT pulmonary angiography (CTPA), axial slice, contrast-enhanced (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CT PULMONARY ANGIOGRAM (CTPA) in diagnostic grayscale, contrast-enhanced pulmonary window/soft-tissue window blend, radiologically accurate mediastinal and hilar anatomy with the pulmonary arteries brightly opacified by intravenous contrast and realistic CT noise. Depict an ACUTE PULMONARY EMBOLISM: a discrete, low-attenuation (dark gray) intraluminal FILLING DEFECT within the brightly enhancing RIGHT MAIN PULMONARY ARTERY, partially surrounded by a thin rim of contrast (the polo-mint/railway-track appearance), representing acute thrombus. The left pulmonary artery and aorta are normally opacified for contrast; the lungs show no large consolidation. Correct axial thoracic cross-sectional anatomy. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Low-attenuation intraluminal filling defect in the (right main) pulmonary artery
  - Surrounding rim of bright contrast (partially occlusive thrombus)
  - Normally opacified contralateral pulmonary artery and aorta for contrast
  - Contrast-enhanced axial CTPA appearance
- **Avoid (negative prompt):** an intimal flap in the aorta (dissection); a solid enhancing lung mass or lobar consolidation as the finding; a noncontrast scan with unopacified vessels; heavy calcified plaque mistaken for thrombus; complete absence of any vessel; a pleural effusion as the dominant feature; MRI appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "pulmonary embolism CTPA filling defect main pulmonary artery"; Wikimedia Commons "pulmonary embolism CT pulmonary angiogram".

### s3-0067 - Acute epiglottitis  (Step 3 - Pediatrics)
- **Case context:** 4-year-old boy with incomplete immunizations, rapidly worsening high fever, drooling, muffled voice, tripod (leaning-forward) posture, anxious toxic appearance, and soft inspiratory stridor who resists lying down; the image is a lateral neck radiograph showing an enlarged, rounded epiglottis producing the thumbprint sign.
- **Modality:** LATERAL soft-tissue neck radiograph of a child, grayscale DICOM-like.
- **Prompt:** Photorealistic LATERAL soft-tissue neck radiograph of a young child, grayscale with DICOM-like diagnostic dynamic range, realistic airway-column and soft-tissue densities and correct pediatric cervical anatomy. Show the THUMBPRINT SIGN of acute EPIGLOTTITIS: a markedly ENLARGED, ROUNDED, thickened EPIGLOTTIS bulging into the airway at the base of the tongue, shaped like a distal THUMB pressed into the hypopharyngeal air column, with thickened aryepiglottic folds and loss of the normal thin, curved (little-finger) epiglottic outline. The vallecula is obliterated, the prevertebral soft tissues are not markedly widened, and the subglottic trachea is normal. Cervical vertebrae, mandible, and the air column correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Enlarged, rounded, thumb-shaped epiglottis (thumbprint sign) on a lateral view
  - Thickened aryepiglottic folds and obliterated vallecula
  - Lateral (not frontal) neck projection, correct pediatric anatomy
  - Air column visible for contrast
- **Avoid (negative prompt):** a symmetric tapered subglottic steeple sign (croup, a FRONTAL-view finding); a widened prevertebral soft-tissue stripe as the main feature (retropharyngeal abscess); a radiopaque aspirated foreign body; a thin normal curved epiglottis; a frontal view when lateral requested; adult anatomy; annotations or arrows.
- **Real-image fallback:** Radiopaedia - search "epiglottitis thumbprint sign lateral neck radiograph"; Wikimedia Commons "epiglottitis thumb sign x-ray".

### s3-0068 - Placenta previa  (Step 3 - Obstetrics & Gynecology)
- **Case context:** 29-year-old woman at 32 weeks with sudden painless bright red vaginal bleeding, hemodynamically stable, a soft nontender uterus, no regular contractions, and a reassuring fetal tracing; the image is a transvaginal ultrasound showing the placenta completely covering the internal cervical os.
- **Modality:** Transvaginal obstetric ultrasound, sagittal view of the cervix and lower uterine segment (grayscale endocavitary probe).
- **Prompt:** Photorealistic TRANSVAGINAL OBSTETRIC ULTRASOUND image, grayscale sector field with realistic fine speckle texture and correct endocavitary probe geometry and depth gradient, sagittal view of the cervix and lower uterine segment with the closed cervical canal clearly displayed. Depict PLACENTA PREVIA: homogeneous mid-gray PLACENTAL tissue in the lower uterine segment that COMPLETELY COVERS and bridges across the INTERNAL CERVICAL OS, extending from one side of the closed cervical canal to the other, with the long closed cervix seen beneath the placenta. The transvaginal view resolves the internal os and lower placental edge crisply. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Placental tissue completely covering/bridging the internal cervical os
  - Long closed cervix with a clearly resolved internal os on a sagittal transvaginal view
  - Homogeneous placental echotexture across the os (not a marginal/clear edge)
  - Authentic grayscale transvaginal ultrasound appearance
- **Avoid (negative prompt):** a placental edge clear of or only reaching the os (low-lying/normal); a retroplacental hematoma (abruption) as the intended finding; an open dilated cervix with bulging membranes; a non-gravid uterus or an ovarian mass; color Doppler as the primary image; CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia - search "placenta previa transvaginal ultrasound covering internal os"; Wikimedia Commons "placenta previa transvaginal ultrasound".

### s3-0073 - Acute inferior ST-elevation myocardial infarction  (Step 3 - Emergency Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and routinely draw wrong ST-segment morphology and lead localization. The territory-specific ST elevation with reciprocal change of an inferior STEMI is exactly what AI gets wrong. Strongly recommend a REAL de-identified inferior-STEMI 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 59-year-old man 1 hour into crushing substernal chest pain with diaphoresis and nausea, hemodynamically stable, at a hospital with an available on-site catheterization laboratory; the tracing must show ST-segment elevation in leads II, III, and aVF with reciprocal ST depression in leads I and aVL.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip, sinus rhythm with upright P waves and narrow QRS complexes. Depict an ACUTE INFERIOR STEMI: convex ("tombstone"-tending) ST-SEGMENT ELEVATION in the INFERIOR leads II, III, and aVF, with the elevation in lead III at least as tall as in lead II, accompanied by RECIPROCAL ST-SEGMENT DEPRESSION in the high-lateral leads I and aVL; the precordial leads show no anterior ST elevation. Physiologically consistent, evenly spaced beats with matching morphology across the appropriate leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** ST-segment elevation localized to leads II, III, and aVF; reciprocal ST depression in leads I and aVL; sinus rhythm with narrow QRS; no anterior (V1-V4) ST elevation.
- **Avoid (negative prompt):** anterior precordial (V1-V4) ST elevation as the main finding; diffuse concave ST elevation with PR depression in all leads (pericarditis); horizontal ST depression with T inversions and no elevation (NSTE-ACS); tall peaked T waves (hyperkalemia); an irregular rhythm; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "inferior STEMI ST elevation II III aVF reciprocal ECG"; Wikimedia Commons "inferior myocardial infarction ECG". Prefer the app vector tracing.

### s3-0085 - Anterior STEMI reperfusion strategy  (Step 3 - Emergency Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and routinely draw wrong ST-segment morphology and lead localization. The anterior precordial ST elevation of an anterior STEMI is exactly what AI gets wrong. Strongly recommend a REAL de-identified anterior-STEMI 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 59-year-old man at a PCI-capable hospital 90 minutes after crushing substernal chest pain with diaphoresis, given aspirin, hemodynamically stable, with achievable device time within 60 minutes; the tracing must show sinus rhythm with 3-mm ST-segment elevations in leads V1 through V4 and reciprocal ST depression in the inferior leads.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip, SINUS RHYTHM with upright P waves and narrow QRS complexes. Depict an ACUTE ANTERIOR STEMI: marked convex upward ST-SEGMENT ELEVATION of about 3 mm in the ANTERIOR PRECORDIAL leads V1, V2, V3, and V4 (with tall broad hyperacute T waves merging into the elevated segments), accompanied by RECIPROCAL ST-SEGMENT DEPRESSION in the inferior leads II, III, and aVF; the ST elevation is confined to the anterior precordial leads. Physiologically consistent, evenly spaced beats with matching morphology across the appropriate leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Convex ST-segment elevation (about 3 mm) localized to precordial leads V1-V4; reciprocal ST depression in the inferior leads (II, III, aVF); sinus rhythm with narrow QRS.
- **Avoid (negative prompt):** inferior-lead (II, III, aVF) ST elevation as the main finding; diffuse concave ST elevation with PR depression in all leads (pericarditis); horizontal ST depression with T inversions and no elevation (NSTE-ACS); tall peaked T waves without ST elevation (hyperkalemia); an irregular rhythm; random gibberish waveforms; wrong grid color; annotations.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "anterior STEMI ST elevation V1 V2 V3 V4 ECG"; Wikimedia Commons "anterior myocardial infarction ECG". Prefer the app vector tracing.

### s3-0087 - Acute appendicitis management  (Step 3 - Surgery)
- **Case context:** 18-year-old man with 14 hours of periumbilical pain that migrated to the right lower quadrant, now with nausea, low-grade fever, anorexia, RLQ tenderness with guarding, and leukocytosis; the image is a contrast-enhanced abdominal CT showing a dilated, non-filling appendix measuring 11 mm with periappendiceal fat stranding and no perforation.
- **Modality:** Contrast-enhanced CT of the abdomen/pelvis, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen and pelvis in diagnostic grayscale, soft-tissue window, radiologically accurate right-lower-quadrant anatomy with contrast-opacified bowel and vessels and realistic CT noise. Depict ACUTE UNCOMPLICATED APPENDICITIS: a DILATED, fluid-filled, NON-FILLING (no luminal contrast/air) tubular blind-ending APPENDIX in the right lower quadrant measuring about 11 mm in diameter, with an enhancing thickened wall, surrounded by inflammatory PERIAPPENDICEAL FAT STRANDING (hazy increased density in the adjacent mesenteric fat). There is NO extraluminal free air, no abscess collection, and no free fluid pocket indicating perforation. Adjacent cecum, iliac vessels, and bony pelvis correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dilated (about 11 mm) non-filling blind-ending appendix with an enhancing thick wall
  - Periappendiceal inflammatory fat stranding
  - No free air, abscess, or drainable collection (uncomplicated, non-perforated)
  - Contrast-enhanced axial abdominal CT appearance
- **Avoid (negative prompt):** an appendix filled with air/contrast and a normal thin wall (normal); a walled-off periappendiceal abscess or extraluminal free air (perforated/complicated) as the intended finding; colonic diverticulitis with sigmoid stranding; a normal collapsed appendix; a right ovarian/adnexal mass; noncontrast or MRI appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "acute appendicitis CT dilated appendix fat stranding"; Wikimedia Commons "acute appendicitis CT".

### s3-0089 - Abdominal aortic aneurysm repair threshold  (Step 3 - Surgery)
- **Case context:** 72-year-old man with a prior smoking history, incidentally found asymptomatic infrarenal abdominal aortic aneurysm on imaging for back pain, no tenderness or rupture, with acceptable surgical risk; the image is a CT angiogram demonstrating a fusiform infrarenal abdominal aortic aneurysm measuring 5.6 cm in maximal diameter without contrast extravasation.
- **Modality:** Contrast-enhanced CT angiography of the abdomen, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT ANGIOGRAM of the abdomen in diagnostic grayscale, soft-tissue window, radiologically accurate retroperitoneal anatomy with a brightly opacified aortic lumen and realistic CT noise. Depict an ABDOMINAL AORTIC ANEURYSM: a FUSIFORM (symmetric circumferential) dilation of the INFRARENAL abdominal AORTA measuring about 5.6 cm in maximal outer diameter, with a brightly enhancing central patent LUMEN surrounded by a crescent of lower-density MURAL THROMBUS and a thin peripheral rim of calcification in the wall. There is NO contrast EXTRAVASATION beyond the wall, no periaortic hematoma, and clean surrounding retroperitoneal fat (intact, unruptured). The vertebral body, kidneys, and bowel are correctly rendered for context. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Fusiform infrarenal aortic dilation (about 5.6 cm) with an enhancing patent lumen
  - Peripheral mural thrombus and rim wall calcification
  - No contrast extravasation or periaortic hematoma (intact, not ruptured)
  - Contrast-enhanced axial abdominal CTA appearance
- **Avoid (negative prompt):** a periaortic hematoma or contrast extravasation/rupture as the intended finding; an intimal flap dividing true and false lumens (dissection); a saccular pseudoaneurysm eccentric outpouching as the main pattern; a normal-caliber aorta; a suprarenal/thoracic location when infrarenal requested; noncontrast or MRI appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "abdominal aortic aneurysm CT angiography fusiform infrarenal mural thrombus"; Wikimedia Commons "abdominal aortic aneurysm CT".

### s3-0090 - Acute otitis media antibiotic therapy  (Step 3 - Pediatrics)
- **Case context:** 14-month-old boy with one day of fever to 39.2 C, irritability, and tugging at both ears, no prior ear infections and no drug allergies, well-hydrated and not toxic-appearing, with bilateral findings; the image is otoscopy showing a bulging, erythematous, opacified tympanic membrane with loss of the normal light reflex.
- **Modality:** Otoscopic photograph of the tympanic membrane (color clinical otoscopy view through the ear speculum).
- **Prompt:** Photorealistic OTOSCOPIC photograph of a young child's TYMPANIC MEMBRANE viewed down the ear canal through a speculum, natural clinical otoscope color and illumination with a realistic circular field of view framed by the pink external auditory canal wall. Depict ACUTE OTITIS MEDIA: a markedly BULGING, convex, ERYTHEMATOUS (red-to-yellow) and OPACIFIED tympanic membrane whose normal translucency is lost, so the malleus handle and bony landmarks are obscured and the normal cone-shaped LIGHT REFLEX is ABSENT or fragmented; a purulent middle-ear effusion behind the drum gives a full, tense, outwardly bulging contour. Correct ear-canal anatomy and realistic moist mucosal sheen. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bulging, convex tympanic membrane (outward fullness from middle-ear effusion)
  - Erythema and opacification with loss of translucency
  - Absent or distorted light reflex; obscured malleus landmarks
  - Authentic otoscopic color photograph framed by the ear canal
- **Avoid (negative prompt):** a normal pearly-gray translucent drum with a crisp cone of light and visible malleus; a retracted (concave) drum with a prominent malleus; a large central perforation with discharge as the intended finding; tympanostomy tube in place; serous amber effusion with an air-fluid level and no bulging as the main feature; cholesteatoma pearl; annotations or arrows.
- **Real-image fallback:** Radiopaedia / open-access otology atlases - search "acute otitis media bulging erythematous tympanic membrane otoscopy"; Wikimedia Commons "acute otitis media otoscopy".

<!-- Added with Step 2 CK Batch 5, Step 3 Day 1 Batch 4, Step 3 Day 2 ACM Batch 2 -->

### s2ck-0101 - Severe symptomatic aortic stenosis  (Step 2 CK - Internal Medicine)
- **Case context:** 72-year-old man with exertional dyspnea, exertional chest tightness, and near-syncope, a harsh crescendo-decrescendo systolic murmur radiating to the carotids, delayed diminished carotid upstroke, and soft single S2; the image is a transthoracic echocardiogram of a heavily calcified aortic valve with peak velocity 4.6 m/s, mean gradient 52 mm Hg, and valve area 0.8 cm2 (severe aortic stenosis).
- **Modality:** Transthoracic echocardiogram - parasternal long-axis / zoomed aortic-valve grayscale sector view, paired with a continuous-wave Doppler spectral tracing (DICOM-like).
- **Prompt:** Photorealistic TRANSTHORACIC ECHOCARDIOGRAM in diagnostic grayscale, sector ultrasound field with realistic fine speckle texture and DICOM-like appearance, parasternal long-axis view of the left ventricular outflow tract, aortic root, and left atrium. Depict SEVERE CALCIFIC AORTIC STENOSIS: markedly THICKENED, densely CALCIFIED (brightly echogenic) aortic valve leaflets with restricted opening and reduced systolic excursion (doming/immobile cusps), a concentrically HYPERTROPHIED left ventricle, and a normal-sized left atrium. Include, as a paired continuous-wave Doppler panel, a dense systolic spectral envelope with a high peak velocity around 4.6 m/s. Realistic ultrasound gain gradient, depth shadowing behind the calcified valve, and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Densely calcified, thickened aortic valve leaflets with restricted opening
  - Concentric left ventricular hypertrophy
  - Paired continuous-wave Doppler with a high-velocity systolic envelope (~4.6 m/s)
  - Authentic grayscale transthoracic echocardiogram appearance
- **Avoid (negative prompt):** a thin, pliable, normally opening aortic valve; the mitral valve rendered as the diseased valve; valvular vegetations (endocarditis) as the intended finding; a color-Doppler mosaic as the primary image; a dilated thin-walled ventricle; CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "aortic stenosis echocardiography calcified valve continuous wave Doppler"; Wikimedia Commons "aortic stenosis echocardiogram".

### s2ck-0105 - Complicated parapneumonic effusion  (Step 2 CK - Internal Medicine)
- **Case context:** 60-year-old man completing oral antibiotics for community-acquired pneumonia returns with persistent fever, worsening left pleuritic chest pain, breathlessness, left basal dullness to percussion, and decreased breath sounds; the image is a chest radiograph showing a moderate, partly loculated left pleural effusion.
- **Modality:** Frontal (PA) chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal PA CHEST RADIOGRAPH of an adult, grayscale with DICOM-like diagnostic dynamic range and correct thoracic anatomy. Depict a moderate LEFT-SIDED PARAPNEUMONIC PLEURAL EFFUSION: homogeneous increased opacity over the LEFT lower hemithorax with BLUNTING/obliteration of the left costophrenic angle and a partly concave upper border (meniscus), plus a more loculated, non-dependent lenticular pocket of pleural fluid that does not simply layer along the lateral chest wall, suggesting loculation. There is adjacent left basal air-space consolidation from the resolving pneumonia; the mediastinum is not markedly shifted. The right lung, heart border, and bony thorax are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Moderate left pleural effusion with costophrenic-angle blunting and a meniscus
  - A loculated, partly non-dependent fluid pocket (not free-flowing only)
  - Associated adjacent basal consolidation (parapneumonic)
  - Correct frontal chest radiograph appearance
- **Avoid (negative prompt):** a completely clear pleural space; a massive whiteout hemithorax with contralateral mediastinal shift as the intended finding; bilateral symmetric effusions of heart failure with cardiomegaly; a tension pneumothorax; a lobar mass; a lateral view when frontal requested; annotations or lines/tubes.
- **Real-image fallback:** Radiopaedia - search "parapneumonic effusion loculated chest radiograph"; Wikimedia Commons "pleural effusion chest x-ray".

### s2ck-0111 - Symptomatic carotid artery stenosis  (Step 2 CK - Surgery)
- **Case context:** 70-year-old man with a resolved episode of left-sided arm and face weakness (TIA), hypertension, hyperlipidemia, and an audible right carotid bruit, now with a normal neurologic examination; the image is a carotid duplex ultrasound showing about 80% stenosis of the right internal carotid artery with elevated peak systolic velocity.
- **Modality:** Carotid duplex ultrasound - grayscale/color-Doppler longitudinal view of the carotid bifurcation with a spectral Doppler waveform panel (DICOM-like).
- **Prompt:** Photorealistic CAROTID DUPLEX ULTRASOUND image, grayscale linear-probe longitudinal view of the carotid bifurcation with realistic fine speckle texture and DICOM-like appearance, with a color-Doppler box over the vessel and a paired spectral Doppler waveform panel below. Depict severe (~80%) INTERNAL CAROTID ARTERY STENOSIS: a heterogeneous, partly calcified atherosclerotic PLAQUE narrowing the residual lumen of the proximal internal carotid artery, with a focal high-velocity color-Doppler jet showing aliasing/mosaic turbulence at the narrowest point; the spectral waveform demonstrates a markedly ELEVATED PEAK SYSTOLIC VELOCITY with spectral broadening (filling-in) through the stenosis. Realistic ultrasound gain gradient and depth. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Atherosclerotic plaque narrowing the internal carotid artery lumen (severe stenosis)
  - Focal color-Doppler aliasing/turbulent jet at the stenosis
  - Spectral waveform with markedly elevated peak systolic velocity and spectral broadening
  - Authentic carotid duplex ultrasound appearance
- **Avoid (negative prompt):** a widely patent normal-caliber carotid with laminar low-velocity flow; complete occlusion with no flow signal as the intended finding; a venous (compressible) vessel; a thyroid nodule mistaken for the vessel; a CT angiogram cross-section; a plain grayscale image with no Doppler; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "carotid stenosis duplex ultrasound elevated peak systolic velocity ICA"; Wikimedia Commons "carotid artery stenosis ultrasound Doppler".

### s2ck-0112 - Palpable breast mass - diagnostic mammography  (Step 2 CK - Surgery)
- **Case context:** 48-year-old woman with a 3-week history of a firm, nontender, irregular, hard right breast lump in the upper outer quadrant that feels fixed to underlying tissue, never previously imaged; the image is a diagnostic mammogram showing a spiculated mass with associated pleomorphic microcalcifications (suspicious for carcinoma).
- **Modality:** Diagnostic MAMMOGRAM, single-breast craniocaudal/mediolateral-oblique view, grayscale (DICOM-like), fibroglandular breast background.
- **Prompt:** Photorealistic DIAGNOSTIC MAMMOGRAM in grayscale with DICOM-like high dynamic range, correct fibroglandular breast parenchymal texture and skin line, single-breast view. Depict a SUSPICIOUS BREAST CARCINOMA: a high-density, irregular SPICULATED MASS in the upper outer breast with radiating stellate spicules infiltrating into the surrounding parenchyma (no smooth well-circumscribed border), associated with a cluster of fine PLEOMORPHIC (varying size and shape) MICROCALCIFICATIONS in and around the mass, plus subtle architectural distortion pulling on adjacent tissue. The remaining breast parenchyma, skin, and pectoral margin are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Irregular spiculated (stellate) mass with radiating spicules, not a smooth round border
  - Clustered pleomorphic microcalcifications
  - Associated architectural distortion
  - Correct grayscale mammographic appearance
- **Avoid (negative prompt):** a smoothly marginated round/oval circumscribed mass (benign fibroadenoma/cyst); scattered coarse benign popcorn calcifications as the intended finding; a purely fatty breast with no lesion; a normal symmetric parenchyma; an ultrasound or MRI appearance; a chest radiograph; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia - search "breast cancer spiculated mass mammogram microcalcifications"; PathologyOutlines/open-access breast imaging atlases; Wikimedia Commons "mammogram breast carcinoma spiculated".

### s2ck-0114 - Necrotizing enterocolitis  (Step 2 CK - Pediatrics)
- **Case context:** Premature infant born at 29 weeks, now 8 days old, who after advancement of enteral feeds develops abdominal distension, feeding intolerance with bilious residuals, bloody stools, and lethargy, with a distended tender abdomen; the image is an abdominal radiograph showing pneumatosis intestinalis in the bowel wall without free air.
- **Modality:** Supine neonatal ABDOMINAL RADIOGRAPH (babygram/KUB), grayscale DICOM-like.
- **Prompt:** Photorealistic supine NEONATAL ABDOMINAL RADIOGRAPH of a premature infant, grayscale with DICOM-like diagnostic dynamic range, anatomically correct tiny neonatal bowel gas pattern, ribs, and spine. Depict NECROTIZING ENTEROCOLITIS: PNEUMATOSIS INTESTINALIS shown as curvilinear and bubbly lucent (dark) gas lines within the WALL of dilated bowel loops, giving a stippled/train-track intramural gas appearance most prominent in the lower abdomen, together with mild diffuse bowel dilation and separation of loops. There is NO free intraperitoneal air (no lucency under the diaphragm, no football sign), and no portal-venous gas branching over the liver as the dominant feature. Correct neonatal thoracoabdominal anatomy. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Intramural bowel-wall gas (pneumatosis intestinalis) as curvilinear/bubbly lucencies
  - Mildly dilated, separated bowel loops
  - No free intraperitoneal air (not perforated)
  - Correct supine neonatal abdominal radiograph appearance
- **Avoid (negative prompt):** free air under the diaphragm or a football sign (perforation) as the intended finding; a normal neonatal bowel gas pattern; multiple large-bowel air-fluid levels of adult obstruction; an adult-sized abdomen; a chest-only view; branching portal venous gas rendered as the sole finding; annotations or lines/tubes.
- **Real-image fallback:** Radiopaedia - search "necrotizing enterocolitis pneumatosis intestinalis neonatal abdominal radiograph"; Wikimedia Commons "necrotizing enterocolitis x-ray pneumatosis".

### s2ck-0120 - Threatened abortion - viable early intrauterine pregnancy  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 26-year-old woman at 9 weeks gestation with 1 day of light vaginal bleeding and mild cramping, a closed cervical os, no tissue passed, and hemodynamic stability; the image is a transvaginal ultrasound showing a live intrauterine pregnancy with fetal cardiac activity appropriate for dates (threatened abortion).
- **Modality:** Transvaginal obstetric ultrasound, grayscale endocavitary sector view of the uterus with an early gestation (DICOM-like); optional M-mode strip for cardiac activity.
- **Prompt:** Photorealistic TRANSVAGINAL OBSTETRIC ULTRASOUND image, grayscale sector field with realistic fine speckle texture, correct endocavitary probe geometry and depth gradient, sagittal view of the uterus. Depict a VIABLE EARLY INTRAUTERINE PREGNANCY: a single well-defined intrauterine GESTATIONAL SAC (anechoic/black fluid) implanted within the echogenic decidualized endometrium, containing a clearly identifiable FETAL POLE/embryo with a yolk sac, appropriate for about 9 weeks; include a paired M-mode strip showing rhythmic FETAL CARDIAC ACTIVITY as a wavy motion trace, confirming viability. The gestational sac is intrauterine (surrounded by myometrium on all sides), the cervix is closed, and there is no large subchorionic hemorrhage effacing the sac. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Single intrauterine gestational sac with a yolk sac and embryo/fetal pole
  - Sac clearly intrauterine (surrounded by myometrium), cervix closed
  - Paired M-mode showing fetal cardiac activity (viable)
  - Authentic grayscale transvaginal obstetric ultrasound appearance
- **Avoid (negative prompt):** an empty uterus with an adnexal mass or free fluid (ectopic) as the intended finding; an open/dilated cervix with a sac in the canal (inevitable abortion); an empty gestational sac with no embryo (anembryonic); a large subchorionic hemorrhage dominating the image; a non-gravid uterus; CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "early intrauterine pregnancy transvaginal ultrasound yolk sac fetal pole"; Wikimedia Commons "first trimester ultrasound intrauterine pregnancy".

### s3-0101 - Area under the ROC curve for test discrimination  (Step 3 - Biostatistics & Epidemiology)
- **Case context:** Investigators develop a continuous biomarker to distinguish diseased from non-diseased patients and plot sensitivity against 1 minus specificity across all cutoffs; the image is a receiver operating characteristic (ROC) curve bowing toward the upper-left corner with an area under the curve of 0.88 and a diagonal reference line (area 0.50).
- **Modality:** Statistical RECEIVER OPERATING CHARACTERISTIC (ROC) curve - clean vector-style scientific figure on a white background, best rendered as a vector chart, not a photorealistic medical image.
- **Prompt:** Clean vector-style scientific RECEIVER OPERATING CHARACTERISTIC (ROC) curve on a white background, high-resolution journal-figure clarity, a square plot with a horizontal axis running from 0 to 1 for 1 minus specificity (false-positive rate) and a vertical axis running from 0 to 1 for sensitivity (true-positive rate). Show a single smooth CURVE that rises steeply from the bottom-left origin and BOWS strongly toward the UPPER-LEFT corner before flattening toward the top-right, enclosing a large area (about 0.88 of the unit square). A straight 45-degree DIAGONAL REFERENCE LINE runs from the bottom-left corner to the top-right corner representing chance discrimination (area 0.50), with the curve lying well ABOVE that diagonal throughout. Tidy axes and gridlines in a clean scientific style. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Square plot with sensitivity (y) versus 1-specificity (x), each 0 to 1
  - A curve bowing toward the upper-left corner (large area, ~0.88)
  - A 45-degree diagonal reference line (chance, area 0.50) with the curve above it
  - Clean vector scientific-figure style
- **Avoid (negative prompt):** a curve that lies on or below the diagonal (no/poor discrimination); a stepwise descending Kaplan-Meier survival curve; a scatter plot, bar chart, or forest plot; an inverted curve bowing to the lower-right; axes not spanning 0 to 1; any photorealistic clinical imagery.
- **Real-image fallback:** Wikimedia Commons - search "ROC curve receiver operating characteristic"; open-access statistics texts. Best rendered as a clean app-native SVG vector chart, not an AI photo.

### s3-0102 - Kaplan-Meier survival curve interpretation  (Step 3 - Biostatistics & Epidemiology)
- **Case context:** A randomized trial reports overall survival for a new therapy versus standard care with Kaplan-Meier curves; the treatment curve stays above the control curve, median survival is 30 months for treatment and 20 months for control, censored patients are marked with tick marks, and the log-rank p = 0.01.
- **Modality:** Statistical KAPLAN-MEIER survival plot - clean vector-style scientific figure on a white background, best rendered as a vector chart, not a photorealistic medical image.
- **Prompt:** Clean vector-style scientific KAPLAN-MEIER survival plot on a white background, high-resolution journal-figure clarity, a horizontal axis for time in months (from 0 to about 48) and a vertical axis for survival probability from 0.0 to 1.0. Show TWO descending STEP-FUNCTION survival curves that both begin together at a survival probability of 1.0 at time zero and fall in discrete horizontal-then-vertical steps: an UPPER TREATMENT curve that stays consistently ABOVE a LOWER CONTROL curve throughout follow-up and does not cross it. Mark the point where each curve crosses the 50% survival level, with the treatment curve reaching median survival at about 30 months and the control curve at about 20 months. Add small vertical TICK MARKS along each curve indicating CENSORED patients. Tidy axes and gridlines, clean scientific style. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Two stepwise (staircase) descending survival curves both starting at 1.0
  - Treatment curve consistently above the control curve, not crossing
  - Median (50% survival) crossings at ~30 months (treatment) and ~20 months (control)
  - Censoring tick marks on the curves; clean vector scientific style
- **Avoid (negative prompt):** smooth continuous (non-step) curves; curves that cross or that rise/ascend; a single curve only; an ROC curve bowing to the upper-left; a forest plot or bar chart; time axis with no clear median crossings; any photorealistic clinical imagery.
- **Real-image fallback:** Wikimedia Commons - search "Kaplan-Meier survival curve"; open-access oncology/trial figures. Best rendered as a clean app-native SVG vector chart, not an AI photo.

### s3-0123 - Subarachnoid hemorrhage  (Step 3 - Emergency Medicine)
- **Case context:** 47-year-old woman with sudden thunderclap "worst headache of my life" peaking within seconds, neck stiffness, and one episode of vomiting, awake with no focal deficits; the image is a noncontrast head CT showing hyperdense blood filling the basal cisterns and sylvian fissures (acute subarachnoid hemorrhage).
- **Modality:** Noncontrast head CT, axial slice at the level of the suprasellar/basal cisterns (DICOM grayscale, brain window).
- **Prompt:** Hyperrealistic axial NONCONTRAST HEAD CT in diagnostic grayscale, brain window, radiologically accurate and symmetric skull-base and brain anatomy with realistic CT noise. Depict acute SUBARACHNOID HEMORRHAGE: bright HYPERDENSE (white) BLOOD filling and outlining the normally dark cerebrospinal-fluid spaces of the BASAL (suprasellar) CISTERNS in a star-shaped configuration and extending into both SYLVIAN FISSURES and the interhemispheric fissure, so the CSF cisterns that should be black are instead densely white. The ventricles are not markedly enlarged (or show only early dependent layering of blood), there is no large focal intraparenchymal clot, and the calvarium is intact. Gray-white differentiation preserved elsewhere. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Hyperdense blood filling the basal cisterns (star-shaped) and sylvian fissures
  - CSF spaces that are normally dark rendered bright white with blood
  - Preserved symmetric skull and brain anatomy on a noncontrast CT
  - Brain-window axial CT appearance
- **Avoid (negative prompt):** a crescentic extra-axial collection over the convexity (subdural) as the intended finding; a biconvex lens-shaped epidural hematoma; a focal round intraparenchymal hemorrhage as the main finding; a hypodense wedge infarct; contrast-enhanced vessels; a normal all-dark cistern (no blood); bone-only window; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "subarachnoid hemorrhage noncontrast CT basal cisterns"; Wikimedia Commons "subarachnoid hemorrhage CT".

### s3-0124 - Tricyclic antidepressant overdose  (Step 3 - Emergency Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw a specific QRS width or a discrete terminal R wave in a named lead. The wide QRS with a terminal R wave in aVR of sodium-channel blockade is exactly what AI gets wrong. Strongly recommend a REAL de-identified tricyclic-overdose 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 24-year-old woman, obtunded 1 hour after an intentional amitriptyline overdose, hypotensive with dilated pupils, dry skin, decreased bowel sounds, and a brief seizure; the tracing must show sinus tachycardia with a widened QRS (about 130 ms) and a prominent terminal R wave in lead aVR (sodium-channel blockade).
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict TRICYCLIC ANTIDEPRESSANT (SODIUM-CHANNEL-BLOCKADE) TOXICITY: a regular SINUS TACHYCARDIA at a fast rate with a distinctly WIDENED QRS complex (broad, about 130 ms / three-plus small squares) in every lead, and in lead aVR a PROMINENT TERMINAL R WAVE (a positive deflection in the last part of the QRS) with a deep terminal S wave in the lateral leads I and aVL (rightward terminal axis). The overall QRS morphology is broad and slurred rather than crisp and narrow. Physiologically consistent, evenly spaced beats with matching broad morphology across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Sinus tachycardia; uniformly WIDE QRS complexes (~130 ms); a prominent terminal R wave in lead aVR; a broad slurred terminal QRS (not a crisp narrow complex).
- **Avoid (negative prompt):** narrow normal-width QRS complexes; territory-specific ST-segment elevation of a STEMI; tall peaked T waves of hyperkalemia as the main finding; an irregularly irregular P-wave-absent rhythm (AF); a delta wave (pre-excitation); random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "tricyclic antidepressant overdose ECG wide QRS terminal R wave aVR"; Wikimedia Commons "sodium channel blockade ECG". Prefer the app vector tracing.

### s3-0125 - Acute uncomplicated diverticulitis  (Step 3 - Surgery)
- **Case context:** 60-year-old man with 2 days of steady left lower quadrant pain, low-grade fever, and mild leukocytosis, hemodynamically stable, tolerating oral intake, with localized LLQ tenderness and no peritoneal signs; the image is an abdominal/pelvic CT showing sigmoid colonic wall thickening with pericolic fat stranding and diverticula, no abscess or free air.
- **Modality:** Contrast-enhanced CT of the abdomen and pelvis, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen and pelvis in diagnostic grayscale, soft-tissue window, radiologically accurate left-lower-quadrant anatomy with contrast-opacified bowel and vessels and realistic CT noise. Depict ACUTE UNCOMPLICATED SIGMOID DIVERTICULITIS: a segment of SIGMOID COLON with circumferential WALL THICKENING and mucosal hyperenhancement, several outpouching air- or contrast-filled DIVERTICULA arising from the wall, and surrounding inflammatory PERICOLIC FAT STRANDING (hazy increased density in the adjacent mesocolic fat). There is NO drainable fluid collection/abscess, NO extraluminal free air, and no contrast extravasation (uncomplicated). Adjacent bladder, iliac vessels, and bony pelvis correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Sigmoid colonic wall thickening with associated diverticula
  - Surrounding pericolic inflammatory fat stranding
  - No abscess, free air, or extravasation (uncomplicated)
  - Contrast-enhanced axial abdominopelvic CT appearance
- **Avoid (negative prompt):** a walled-off pericolic abscess or extraluminal free air (complicated) as the intended finding; a dilated non-filling right-lower-quadrant appendix (appendicitis); an obstructing colonic mass with shouldered margins; a normal thin-walled colon; small-bowel obstruction with air-fluid levels; noncontrast or MRI appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "acute diverticulitis CT sigmoid wall thickening pericolic fat stranding"; Wikimedia Commons "diverticulitis CT".

### s3-0126 - Atrial fibrillation with rapid ventricular response  (Step 3 - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw a genuinely irregular, P-wave-absent rhythm at a fast rate. Strongly recommend a REAL de-identified rapid atrial fibrillation ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 68-year-old woman with 2 days of palpitations and mild exertional breathlessness, hypertension, no chest pain, hemodynamically stable (BP 128/78) with a ventricular rate of 128/min, not anticoagulated; the tracing must show an irregularly irregular narrow-complex rhythm with absent discrete P waves at a ventricular rate near 130/min.
- **Modality:** 12-lead ECG or rhythm strip on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace. Depict ATRIAL FIBRILLATION WITH RAPID VENTRICULAR RESPONSE: an IRREGULARLY IRREGULAR ventricular rhythm at a FAST rate around 130/min, with NO discrete upright P waves and a chaotic low-amplitude FIBRILLATORY baseline between beats; the QRS complexes are NARROW and normal in morphology but occur at continually varying, closely spaced RR intervals with no repeating pattern. Physiologically consistent narrow complexes on an unmistakably irregular, P-wave-absent baseline. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Irregularly irregular RR intervals with no repeating pattern at a rapid rate (~130/min); absent discrete P waves with a fibrillatory baseline; narrow QRS complexes.
- **Avoid (negative prompt):** clear upright P waves before each QRS (sinus tachycardia); a perfectly regular narrow tachycardia (SVT/flutter with fixed conduction); sawtooth flutter waves; wide bizarre QRS complexes (VT); random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "atrial fibrillation rapid ventricular response ECG"; Wikimedia Commons "atrial fibrillation RVR ECG". Prefer the app vector tracing.

### s3-0134 - Hyperkalemia with ECG changes  (Step 3 - Emergency Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw the specific tall, narrow-based, peaked T-wave morphology of hyperkalemia. This finding is exactly what AI gets wrong. Strongly recommend a REAL de-identified hyperkalemia 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 62-year-old man with end-stage renal disease who missed two dialysis sessions, presenting with generalized weakness and palpitations, bradycardic, with a potassium of 7.1 mEq/L; the tracing must show sinus rhythm with tall, narrow-based peaked T waves and progressive widening of the QRS complexes (severe hyperkalemia).
- **Modality:** 12-lead ECG or rhythm strip on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace. Depict SEVERE HYPERKALEMIA: a slow SINUS rhythm in which every beat shows a TALL, PEAKED, NARROW-BASED T WAVE that is symmetric and sharply pointed (tented), rising well above the preceding R wave in the precordial leads, together with a progressively WIDENED QRS complex (broadened and slurred) and a flattened/diminishing P wave. The T waves look pinched and tent-like at the peak rather than broad and rounded. Physiologically consistent, evenly spaced beats with matching morphology across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Tall, narrow-based, sharply peaked (tented) symmetric T waves; widened QRS complexes; flattened/diminished P waves; a slow rate.
- **Avoid (negative prompt):** broad rounded or hyperacute STEMI T waves; territory-specific ST-segment elevation; an irregularly irregular rhythm (AF); deeply inverted T waves; a terminal R wave in aVR with an otherwise normal T wave; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "hyperkalemia ECG peaked T waves widened QRS"; Wikimedia Commons "hyperkalemia ECG peaked T waves". Prefer the app vector tracing.

### s3-0137 - Adhesive small bowel obstruction  (Step 3 - Surgery)
- **Case context:** 64-year-old man with a prior open appendectomy, presenting with 1 day of crampy abdominal pain, distension, bilious vomiting, and obstipation, with a distended tympanitic but soft abdomen and no peritoneal signs, hemodynamically stable; the image is a supine-and-upright abdominal series showing multiple dilated small-bowel loops with air-fluid levels and a distal transition point, without free air or ischemia.
- **Modality:** Two-view ABDOMINAL SERIES (supine KUB plus upright abdominal/erect view), grayscale DICOM-like.
- **Prompt:** Photorealistic ABDOMINAL SERIES of an adult in grayscale with DICOM-like diagnostic dynamic range and correct bowel gas pattern and bony anatomy, presented as a paired SUPINE and UPRIGHT view. Depict ADHESIVE SMALL BOWEL OBSTRUCTION: multiple DILATED loops of SMALL BOWEL arranged centrally in a stepladder pattern, showing the thin complete transverse VALVULAE CONNIVENTES (plicae) that cross the full bowel width, with a paucity of gas in the distal colon and rectum indicating a distal TRANSITION POINT. On the UPRIGHT view show multiple air-fluid levels at different heights within the dilated loops (stepladder appearance). There is NO free air under the diaphragm and no pneumatosis or portal gas suggesting ischemia. Correct lumbar spine and pelvis rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multiple centrally located dilated small-bowel loops with valvulae conniventes crossing the full width
  - Multiple air-fluid levels at differing heights on the upright view (stepladder)
  - Distal transition with a gasless colon/rectum
  - No free air or signs of ischemia; correct abdominal-series appearance
- **Avoid (negative prompt):** a massively dilated inverted-U sigmoid loop with a central cleft (sigmoid volvulus); peripheral haustrated large-bowel dilation as the dominant finding; free air under the diaphragm (perforation); pneumatosis intestinalis; a normal nondistended bowel gas pattern; a single-view chest radiograph only; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "small bowel obstruction abdominal radiograph air-fluid levels valvulae conniventes"; Wikimedia Commons "small bowel obstruction x-ray".

### s3-0138 - Uncomplicated diverticulitis  (Step 3 - Surgery)
- **Case context:** 58-year-old woman with 2 days of left lower quadrant pain and low-grade fever, well-appearing, tolerating oral intake, hemodynamically stable, with mild LLQ tenderness and no peritoneal signs and a mildly elevated white cell count; the image is a contrast-enhanced abdominal CT showing sigmoid colonic wall thickening with pericolic fat stranding and diverticula, without abscess, free air, or perforation.
- **Modality:** Contrast-enhanced CT of the abdomen and pelvis, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen and pelvis in diagnostic grayscale, soft-tissue window, radiologically accurate left-lower-quadrant anatomy with contrast-opacified bowel and vessels and realistic CT noise. Depict ACUTE UNCOMPLICATED SIGMOID DIVERTICULITIS: a segment of SIGMOID COLON with circumferential WALL THICKENING and mucosal hyperenhancement, multiple outpouching air- or contrast-filled DIVERTICULA along the wall, and adjacent inflammatory PERICOLIC FAT STRANDING (hazy increased density in the mesocolic fat). There is NO drainable abscess, NO extraluminal free air, and no contrast extravasation or perforation (uncomplicated). Adjacent bladder, iliac vessels, and bony pelvis correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Sigmoid colonic wall thickening with associated diverticula
  - Surrounding pericolic inflammatory fat stranding
  - No abscess, free air, or perforation (uncomplicated)
  - Contrast-enhanced axial abdominopelvic CT appearance
- **Avoid (negative prompt):** a walled-off pericolic abscess or extraluminal free air/perforation (complicated) as the intended finding; a dilated non-filling right-lower-quadrant appendix (appendicitis); an annular obstructing colonic mass with shouldered margins; a normal thin-walled colon; small-bowel obstruction with air-fluid levels; noncontrast or MRI appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "acute diverticulitis CT sigmoid wall thickening pericolic fat stranding"; Wikimedia Commons "diverticulitis CT".

### s3-0141 - Ileocolic intussusception  (Step 3 - Pediatrics)
- **Case context:** 18-month-old boy with paroxysms of sudden inconsolable crying and drawing up of the legs alternating with calm intervals, one stool mixed with blood and mucus (currant-jelly), and a sausage-shaped right-upper-quadrant mass, well-perfused with a soft nontender abdomen and no peritoneal signs; the image is an abdominal ultrasound showing a target (doughnut) sign of concentric bowel rings.
- **Modality:** Abdominal ULTRASOUND, transverse grayscale view of the right abdomen (linear/curvilinear probe, DICOM-like).
- **Prompt:** Photorealistic ABDOMINAL ULTRASOUND image of a toddler's right abdomen, grayscale sector/linear field with realistic fine speckle texture and DICOM-like appearance, transverse orientation. Depict ILEOCOLIC INTUSSUSCEPTION: a rounded bowel-within-bowel mass shown in cross-section as the classic TARGET (DOUGHNUT) SIGN - multiple CONCENTRIC alternating hyperechoic (bright) and hypoechoic (dark) RINGS formed by the telescoped layers of bowel wall and intervening mesentery, with a brighter central echogenic core (the invaginated mesentery/mucosa) surrounded by a thicker hypoechoic outer rim of edematous bowel wall. Adjacent normal bowel and mesenteric fat provide context. Realistic ultrasound gain gradient and depth. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Concentric alternating hyperechoic/hypoechoic rings (target/doughnut sign) in cross-section
  - A hypoechoic outer rim of edematous bowel wall around a brighter central core
  - A rounded bowel-within-bowel mass in the right abdomen
  - Authentic grayscale abdominal ultrasound appearance
- **Avoid (negative prompt):** a single normal thin-walled bowel loop with no rings; an anechoic simple cyst or fluid collection as the intended finding; a hypertrophic pylorus with an elongated muscular channel (pyloric stenosis); an appendix with a blind-ending tube; free intraperitoneal fluid or pneumatosis as the dominant finding; CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "intussusception ultrasound target doughnut sign"; Wikimedia Commons "intussusception ultrasound target sign".

<!-- Added with Step 1 Batches 10-12, Step 2 CK Batch 6, Step 3 Day 1 Batch 5, Step 3 Day 2 ACM Batch 3 -->

### s1-0226 - Aortic dissection  (Step 1 - Cardiovascular)
- **Case context:** 61-year-old man with longstanding poorly controlled hypertension and abrupt severe tearing chest pain radiating to the back, an inter-arm blood-pressure differential (178/104 in the right arm vs 138/82 in the left) and a new early diastolic murmur of aortic regurgitation; the image is a contrast-enhanced chest CT showing a widened mediastinum and an intimal flap dividing the ascending aorta into two lumens.
- **Modality:** Contrast-enhanced CT angiogram of the chest, axial slice at the level of the aortic root / ascending aorta, soft-tissue (angiographic) window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT ANGIOGRAM of the chest in diagnostic grayscale, soft-tissue angiographic window, radiologically accurate mediastinal anatomy with brightly contrast-opacified great vessels and realistic CT noise. Depict a STANFORD TYPE A AORTIC DISSECTION: the dilated ASCENDING AORTA is divided by a thin curvilinear INTIMAL FLAP into two contrast-filled channels - a brighter, smaller TRUE LUMEN and a larger, slightly less opacified FALSE LUMEN (double-barrel aorta), with the flap also visible in the descending thoracic aorta on the same slice. The MEDIASTINUM is widened, with a thin rim of periaortic and pericardial fluid. Cardiac chambers, pulmonary vessels, vertebral body, and bony thorax correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Intimal flap dividing the aorta into true and false lumens (double-barrel)
  - Involvement of the dilated ascending aorta (type A)
  - Widened mediastinum with brightly contrast-opacified vessels
  - Contrast-enhanced axial chest CT appearance
- **Avoid (negative prompt):** a single normal round aortic lumen with no flap; a saccular aneurysm without an intimal flap as the intended finding; a filling defect in the pulmonary arteries (pulmonary embolism); an isolated pericardial effusion; a lung-window or bone-only image; noncontrast CT; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "aortic dissection Stanford type A CT angiogram intimal flap"; Wikimedia Commons "aortic dissection CT".

### s1-0229 - Vasospastic (Prinzmetal variant) angina  (Step 1 - Cardiovascular)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw transient territory-specific ST-segment elevation confined to a contiguous inferior lead group. Strongly recommend a REAL de-identified variant-angina 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 42-year-old woman who smokes with recurrent rest chest pain in the early morning that resolves spontaneously, a normal troponin, and no fixed obstructive lesions on coronary angiography; the tracing captured during an episode must show transient ST-segment elevation in the inferior leads that fully normalizes as the pain resolves.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict CORONARY VASOSPASM (PRINZMETAL VARIANT ANGINA) captured during chest pain: a normal SINUS rhythm at a normal rate with narrow QRS complexes and transient, marked ST-SEGMENT ELEVATION in a contiguous INFERIOR lead group (II, III, and aVF), showing a coved/upsloping injury morphology, with reciprocal mild ST depression in the lateral leads (I and aVL). The elevation is confined to the inferior territory and the rest of the tracing is otherwise normal. Physiologically consistent, evenly spaced beats with matching morphology across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Sinus rhythm with narrow QRS; ST-segment elevation confined to the inferior leads (II, III, aVF) as a contiguous group; reciprocal ST depression in lateral leads; otherwise normal complexes.
- **Avoid (negative prompt):** diffuse concave ST elevation across all leads (pericarditis); tall peaked T waves (hyperkalemia); a wide or bizarre QRS; an irregularly irregular rhythm; deep pathologic Q waves as the dominant finding; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "Prinzmetal variant angina coronary vasospasm ECG ST elevation"; Wikimedia Commons "coronary vasospasm ECG". Prefer the app vector tracing.

### s1-0230 - Constrictive pericarditis  (Step 1 - Cardiovascular)
- **Case context:** 57-year-old man with prior tuberculosis, now with progressive fatigue, ascites, and leg edema, a markedly elevated jugular venous pressure that rises with inspiration, an early diastolic pericardial knock after S2, and clear lungs; the image is a lateral chest CT showing a thickened, calcified pericardium encasing the heart.
- **Modality:** CT of the chest, sagittal/lateral reconstruction (or axial), soft-tissue and bone window blend showing pericardial calcification (DICOM grayscale).
- **Prompt:** Hyperrealistic CT of the chest in diagnostic grayscale demonstrating the pericardium in profile, radiologically accurate cardiac and mediastinal anatomy with realistic CT noise. Depict CONSTRICTIVE PERICARDITIS: a markedly THICKENED PERICARDIUM with dense, brightly CALCIFIED (bone-white) plaques forming a rigid rind that ENCASES the heart, most prominent over the right heart border and along the atrioventricular groove and diaphragmatic surface. The encased cardiac chambers are normal-to-small with a tubular/deformed contour; there may be mild dilation of the inferior vena cava. The lungs are clear and the bony thorax is correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Thickened, densely calcified pericardium forming a rigid rind around the heart
  - Calcification concentrated over the right heart border / atrioventricular groove
  - Non-dilated, encased cardiac chambers (not a large effusion)
  - Correct chest CT appearance with clear lungs
- **Avoid (negative prompt):** a large low-density pericardial effusion (tamponade) as the intended finding; a dilated cardiomyopathy with thin walls; pleural effusions dominating the image; a lung mass; contrast-filled dissection flap; a plain radiograph only; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "constrictive pericarditis calcified pericardium CT"; Wikimedia Commons "pericardial calcification CT".

### s1-0231 - Left atrial myxoma  (Step 1 - Cardiovascular)
- **Case context:** 48-year-old woman with months of fatigue, low-grade fevers, and weight loss, positional breathlessness, one transient episode of right arm weakness (embolic), and a low-pitched early diastolic sound (tumor plop) that varies with body position; the image is a transthoracic echocardiogram showing a mobile pedunculated mass attached by a stalk to the interatrial septum near the fossa ovalis, prolapsing across the mitral valve in diastole.
- **Modality:** Transthoracic echocardiogram - apical four-chamber grayscale sector view (DICOM-like).
- **Prompt:** Photorealistic TRANSTHORACIC ECHOCARDIOGRAM in diagnostic grayscale, sector ultrasound field with realistic fine speckle texture and DICOM-like appearance, apical four-chamber view showing both atria and ventricles and the mitral and tricuspid valves. Depict a LEFT ATRIAL MYXOMA: a well-defined, lobulated, mobile ECHOGENIC MASS occupying much of the enlarged LEFT ATRIUM, attached by a narrow STALK (pedicle) to the INTERATRIAL SEPTUM near the fossa ovalis, PROLAPSING through the open mitral valve into the left ventricle in diastole (caught mid-prolapse across the mitral annulus). The remaining chambers, myocardium, and valves are correctly rendered. Realistic ultrasound gain gradient, depth shadowing, and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Lobulated echogenic left-atrial mass on a narrow stalk from the interatrial septum
  - Attachment near the fossa ovalis, prolapsing across the mitral valve in diastole
  - Enlarged left atrium; other chambers/valves normal
  - Authentic grayscale transthoracic echocardiogram appearance
- **Avoid (negative prompt):** a small mobile vegetation on a valve leaflet (endocarditis) as the intended finding; a laminated left-atrial-appendage thrombus with a broad base; a mass filling the ventricle instead of the atrium; a ventricular tumor; a color-Doppler mosaic as the primary image; CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "left atrial myxoma echocardiography interatrial septum prolapse"; Wikimedia Commons "atrial myxoma echocardiogram".

### s1-0236 - Fibromuscular dysplasia (renovascular hypertension)  (Step 1 - Renal/Urinary)
- **Case context:** 34-year-old woman with hypertension (168/104) resistant to three agents, no cardiovascular risk factors, a flank bruit, and a rise in creatinine after starting an ACE inhibitor; the image is a renal arteriogram showing alternating stenoses and dilations producing a string-of-beads appearance in the mid-to-distal renal artery.
- **Modality:** Catheter/CT/MR renal ARTERIOGRAM (angiographic image), grayscale digital-subtraction-angiography-like appearance.
- **Prompt:** Photorealistic catheter DIGITAL SUBTRACTION ANGIOGRAM of a renal artery in grayscale on a subtracted (uniform pale) background, high-resolution vascular-imaging realism, showing a contrast-opacified renal artery arising from the aorta and coursing to the kidney. Depict FIBROMUSCULAR DYSPLASIA (medial fibroplasia): the MID-TO-DISTAL RENAL ARTERY shows a classic STRING-OF-BEADS appearance - a run of alternating short focal STENOSES and intervening ANEURYSMAL DILATIONS (the beaded segments wider than the normal proximal artery), sparing the ostium/proximal segment. The intrarenal branches beyond the beading are correctly rendered; the aorta and catheter tip appear at the origin. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - String-of-beads: alternating stenoses and dilations in the mid-to-distal renal artery
  - Beaded segments wider than the normal proximal artery, with ostial/proximal sparing
  - Angiographic (subtracted) grayscale appearance of a renal artery
  - Contrast reaching the intrarenal branches
- **Avoid (negative prompt):** a single focal ostial/proximal atherosclerotic stenosis (atherosclerotic renovascular disease) as the intended finding; a smooth tapered normal artery; a saccular berry aneurysm alone; a filling defect/embolus; a CT/MRI cross-section rather than an angiogram; contrast in bowel/ureter dominating the frame; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "fibromuscular dysplasia renal artery string of beads angiography"; Wikimedia Commons "fibromuscular dysplasia renal angiogram".

### s1-0239 - Acute cholecystitis  (Step 1 - Gastrointestinal)
- **Case context:** 44-year-old obese woman with 8 hours of constant right upper quadrant pain after a fatty meal, nausea, fever 38.4 C, and a positive Murphy sign (arrest of inspiration on palpation beneath the right costal margin); the image is a right upper quadrant ultrasound showing gallstones, a thickened gallbladder wall, and pericholecystic fluid.
- **Modality:** Right upper quadrant ABDOMINAL ULTRASOUND, grayscale sector view of the gallbladder (curvilinear probe, DICOM-like).
- **Prompt:** Photorealistic RIGHT UPPER QUADRANT ULTRASOUND image, grayscale sector field with realistic fine speckle texture and DICOM-like appearance, longitudinal view of the gallbladder. Depict ACUTE CALCULOUS CHOLECYSTITIS: one or more echogenic GALLSTONES within the gallbladder lumen casting clean posterior ACOUSTIC SHADOWS, a THICKENED gallbladder WALL (over 3 mm, sometimes with a striated/hypoechoic layered appearance from edema), and a thin rim of anechoic PERICHOLECYSTIC FLUID adjacent to the wall. The gallbladder is mildly distended; adjacent liver parenchyma provides context. Realistic ultrasound gain gradient, depth shadowing behind the stones, and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Echogenic gallstone(s) with clean posterior acoustic shadowing
  - Thickened (striated) gallbladder wall
  - Pericholecystic fluid
  - Authentic grayscale right upper quadrant ultrasound appearance
- **Avoid (negative prompt):** a thin-walled normal gallbladder with no stones; a dilated common bile duct with a ductal stone (choledocholithiasis) as the intended finding; a polypoid gallbladder mass without shadowing; a simple anechoic hepatic cyst; a CT/MRI cross-section; a color-Doppler-only image; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "acute cholecystitis ultrasound gallstones wall thickening pericholecystic fluid"; Wikimedia Commons "cholecystitis ultrasound".

### s1-0240 - Acute sigmoid diverticulitis  (Step 1 - Gastrointestinal)
- **Case context:** 65-year-old man with a low-fiber diet, 3 days of left lower quadrant pain, low-grade fever, altered bowel habits, LLQ tenderness with mild guarding, and leukocytosis; the image is an abdominal CT showing multiple sigmoid colonic outpouchings with focal wall thickening and surrounding pericolic fat stranding.
- **Modality:** Contrast-enhanced CT of the abdomen and pelvis, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen and pelvis in diagnostic grayscale, soft-tissue window, radiologically accurate left-lower-quadrant anatomy with contrast-opacified bowel and vessels and realistic CT noise. Depict ACUTE SIGMOID DIVERTICULITIS: a segment of SIGMOID COLON studded with multiple outpouching air- or contrast-filled DIVERTICULA, focal circumferential WALL THICKENING with mucosal hyperenhancement, and adjacent inflammatory PERICOLIC FAT STRANDING (hazy increased density in the mesocolic fat). No drainable abscess, no extraluminal free air, and no contrast extravasation (uncomplicated). Adjacent bladder, iliac vessels, and bony pelvis correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multiple sigmoid diverticula with focal colonic wall thickening
  - Surrounding pericolic inflammatory fat stranding
  - No abscess, free air, or extravasation (uncomplicated)
  - Contrast-enhanced axial abdominopelvic CT appearance
- **Avoid (negative prompt):** a walled-off pericolic abscess or free air (complicated) as the intended finding; a dilated non-filling right-lower-quadrant appendix (appendicitis); an annular obstructing colonic mass with shouldered margins; a normal thin-walled colon; small-bowel obstruction with air-fluid levels; noncontrast or MRI appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "acute diverticulitis CT sigmoid wall thickening pericolic fat stranding"; Wikimedia Commons "diverticulitis CT".

### s1-0242 - Primary sclerosing cholangitis  (Step 1 - Gastrointestinal)
- **Case context:** 38-year-old man with several-year ulcerative colitis, fatigue and pruritus, a disproportionately elevated alkaline phosphatase with only mild transaminase elevation, and positive perinuclear ANCA; the image is a magnetic resonance cholangiopancreatography (MRCP) showing multifocal strictures and dilations of the intrahepatic and extrahepatic bile ducts producing a beaded appearance.
- **Modality:** Magnetic resonance cholangiopancreatography (MRCP), heavily T2-weighted maximum-intensity-projection (MIP) of the biliary tree (bright fluid on dark background, DICOM-like).
- **Prompt:** Photorealistic MAGNETIC RESONANCE CHOLANGIOPANCREATOGRAPHY (MRCP) maximum-intensity-projection image, heavily T2-weighted so that bile and pancreatic fluid appear BRIGHT WHITE against a dark background, anatomically accurate biliary tree branching from the liver to the common bile duct and the pancreatic duct. Depict PRIMARY SCLEROSING CHOLANGITIS: the INTRAHEPATIC and EXTRAHEPATIC bile ducts show MULTIFOCAL short annular STRICTURES alternating with intervening mildly DILATED segments, producing a BEADED, pruned-tree appearance with irregular caliber and skip areas; some peripheral intrahepatic radicles appear pruned/attenuated. The gallbladder and pancreatic duct are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multifocal biliary strictures alternating with dilations (beaded appearance)
  - Involvement of both intrahepatic and extrahepatic ducts with a pruned-tree look
  - Bright fluid biliary tree on a dark MRCP background
  - Correct biliary/pancreatic-duct anatomy
- **Avoid (negative prompt):** a single dominant distal obstructing stone or mass with uniform upstream dilation (choledocholithiasis / pancreatic head cancer) as the intended finding; a smooth normal biliary tree; markedly cystic saccular dilations of Caroli disease; a solid pancreatic mass; a CT or grayscale ultrasound appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "primary sclerosing cholangitis MRCP beaded strictures"; Wikimedia Commons "primary sclerosing cholangitis MRCP".

### s1-0244 - Receiver operating characteristic (ROC) curve  (Step 1 - Biostatistics & Epidemiology)
- **Case context:** Investigators evaluate a new continuous blood biomarker across all possible diagnostic cutoffs and plot the true-positive rate (sensitivity) against the false-positive rate (1 minus specificity); the image is a receiver operating characteristic (ROC) curve bowing toward the upper-left corner.
- **Modality:** Statistical RECEIVER OPERATING CHARACTERISTIC (ROC) curve - clean vector-style scientific figure on a white background, best rendered as a vector chart, not a photorealistic medical image.
- **Prompt:** Clean vector-style scientific RECEIVER OPERATING CHARACTERISTIC (ROC) curve on a white background, high-resolution journal-figure clarity, a square plot with a horizontal axis running from 0 to 1 for 1 minus specificity (false-positive rate) and a vertical axis running from 0 to 1 for sensitivity (true-positive rate). Show a single smooth CURVE that rises steeply from the bottom-left origin and BOWS strongly toward the UPPER-LEFT corner before flattening toward the top-right, enclosing a large area under the curve. A straight 45-degree DIAGONAL REFERENCE LINE runs from the bottom-left corner to the top-right corner representing chance discrimination (area 0.50), with the curve lying well ABOVE that diagonal throughout. Tidy axes and gridlines in a clean scientific style. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Square plot with sensitivity (y) versus 1-specificity (x), each 0 to 1
  - A curve bowing toward the upper-left corner (large area under the curve)
  - A 45-degree diagonal reference line (chance, area 0.50) with the curve above it
  - Clean vector scientific-figure style
- **Avoid (negative prompt):** a curve that lies on or below the diagonal (no/poor discrimination); a stepwise descending Kaplan-Meier survival curve; a scatter plot, bar chart, or forest plot; an inverted curve bowing to the lower-right; axes not spanning 0 to 1; any photorealistic clinical imagery.
- **Real-image fallback:** Wikimedia Commons - search "ROC curve receiver operating characteristic"; open-access statistics texts. Best rendered as a clean app-native SVG vector chart, not an AI photo.

### s1-0247 - Ectopic (tubal) pregnancy  (Step 1 - Reproductive)
- **Case context:** 27-year-old woman with prior pelvic inflammatory disease, 7 weeks of amenorrhea, right lower quadrant pain, and vaginal spotting, with a positive urine pregnancy test and serum beta-hCG of 2,800 mIU/mL (above the discriminatory zone with an empty uterus); the image is a transvaginal ultrasound showing an empty uterine cavity with a complex adnexal mass containing a gestational sac in the right adnexa.
- **Modality:** Transvaginal obstetric/pelvic ULTRASOUND, grayscale endocavitary sector view (DICOM-like).
- **Prompt:** Photorealistic TRANSVAGINAL PELVIC ULTRASOUND image, grayscale sector field with realistic fine speckle texture, correct endocavitary probe geometry and depth gradient. Depict a right TUBAL ECTOPIC PREGNANCY: an EMPTY UTERINE CAVITY with a thin echogenic endometrial stripe and NO intrauterine gestational sac, and separately, in the RIGHT ADNEXA lateral to the uterus, a COMPLEX ADNEXAL MASS containing a rounded extrauterine GESTATIONAL SAC (a small anechoic sac with an echogenic tubal-ring wall, possibly a yolk sac) distinct from the ovary. A small amount of anechoic free fluid may sit in the cul-de-sac. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Empty uterine cavity (no intrauterine gestational sac)
  - A complex right adnexal mass containing an extrauterine gestational sac / tubal ring
  - Adnexal sac separate from the uterus (and distinct from ovary)
  - Authentic grayscale transvaginal ultrasound appearance
- **Avoid (negative prompt):** a normal single intrauterine gestational sac with a yolk sac/embryo (intrauterine pregnancy) as the intended finding; a corpus luteum cyst rendered as the sac; a simple ovarian cyst only; a large pelvic mass unrelated to pregnancy; a first-trimester intrauterine twin; a CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "ectopic pregnancy transvaginal ultrasound adnexal mass tubal ring empty uterus"; Wikimedia Commons "ectopic pregnancy ultrasound".

### s1-0252 - Subarachnoid hemorrhage (ruptured berry aneurysm)  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** 49-year-old woman with sudden thunderclap "worst headache of my life" peaking within seconds while gardening, followed by neck stiffness, photophobia, vomiting, and a brief loss of consciousness, with hypertension, smoking, and a family history of a similar sudden fatal event, now alert with marked nuchal rigidity; the image is a noncontrast head CT showing hyperdense blood filling the basal cisterns and extending into the sylvian fissures.
- **Modality:** Noncontrast head CT, axial slice at the level of the suprasellar/basal cisterns (DICOM grayscale, brain window).
- **Prompt:** Hyperrealistic axial NONCONTRAST HEAD CT in diagnostic grayscale, brain window, radiologically accurate and symmetric skull-base and brain anatomy with realistic CT noise. Depict acute SUBARACHNOID HEMORRHAGE: bright HYPERDENSE (white) BLOOD filling and outlining the normally dark cerebrospinal-fluid spaces of the BASAL (suprasellar) CISTERNS in a star-shaped configuration and extending into both SYLVIAN FISSURES and the interhemispheric fissure, so the CSF cisterns that should be black are instead densely white. The ventricles are not markedly enlarged (or show only early dependent layering of blood), there is no large focal intraparenchymal clot, and the calvarium is intact. Gray-white differentiation preserved elsewhere. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Hyperdense blood filling the basal cisterns (star-shaped) and sylvian fissures
  - CSF spaces that are normally dark rendered bright white with blood
  - Preserved symmetric skull and brain anatomy on a noncontrast CT
  - Brain-window axial CT appearance
- **Avoid (negative prompt):** a crescentic extra-axial collection over the convexity (subdural) as the intended finding; a biconvex lens-shaped epidural hematoma; a focal round intraparenchymal hemorrhage as the main finding; a hypodense wedge infarct; contrast-enhanced vessels; a normal all-dark cistern (no blood); bone-only window; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "subarachnoid hemorrhage noncontrast CT basal cisterns"; Wikimedia Commons "subarachnoid hemorrhage CT".

### s1-0253 - Osmotic demyelination (central pontine myelinolysis)  (Step 1 - Behavioral Health & Nervous System)
- **Case context:** 52-year-old man with chronic alcohol use and malnutrition whose serum sodium of 108 mEq/L was corrected too rapidly over 12 hours, then 3 days later develops progressive quadriparesis, dysarthria, dysphagia, and near-complete paralysis while remaining awake and able to blink and move his eyes vertically (locked-in); the image is an axial T2-weighted brain MRI showing a symmetric hyperintense lesion in the central pons that spares the periphery.
- **Modality:** Axial T2-weighted (or FLAIR) brain MRI at the level of the pons (DICOM grayscale).
- **Prompt:** Hyperrealistic axial T2-WEIGHTED BRAIN MRI in diagnostic grayscale, radiologically accurate posterior-fossa anatomy (pons, cerebellum, fourth ventricle, basilar artery) with realistic MRI texture. Depict CENTRAL PONTINE MYELINOLYSIS (osmotic demyelination): a SYMMETRIC, well-demarcated T2-HYPERINTENSE (bright) lesion occupying the CENTRAL PONS in a rounded trident/bat-wing configuration, characteristically SPARING a rim of PERIPHERAL pons and the corticospinal tracts ventrolaterally. There is no mass effect or hemorrhage; the cerebellum, midbrain, and fourth ventricle are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Symmetric T2-hyperintense lesion centered in the central pons
  - Sparing of a peripheral rim of pons (trident/bat-wing shape)
  - No mass effect or hemorrhage
  - Axial T2-weighted brain MRI appearance
- **Avoid (negative prompt):** an asymmetric wedge-shaped brainstem infarct in a vascular territory as the intended finding; a hemorrhagic pontine lesion; a mass lesion with surrounding edema and mass effect; supratentorial white-matter disease as the main finding; a noncontrast CT appearance; T1 post-contrast enhancement dominating; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "central pontine myelinolysis osmotic demyelination T2 MRI"; Wikimedia Commons "central pontine myelinolysis MRI".

### s1-0260 - Osteopetrosis  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 4-year-old boy with recurrent long-bone fractures from minor trauma despite unusually dense bones, worsening anemia and recurrent infections from marrow failure, hepatosplenomegaly from extramedullary hematopoiesis, and progressive vision and hearing loss from cranial-nerve-foramen narrowing (defective osteoclastic resorption); the image is a skeletal radiograph showing diffusely dense sclerotic bones with a bone-in-bone appearance and obliteration of the medullary cavity.
- **Modality:** Plain skeletal RADIOGRAPH (e.g., of the pelvis / lower extremity or spine), grayscale DICOM-like.
- **Prompt:** Photorealistic plain SKELETAL RADIOGRAPH of a young child in grayscale with DICOM-like diagnostic dynamic range and anatomically correct bones. Depict OSTEOPETROSIS: DIFFUSELY DENSE, uniformly SCLEROTIC (bright white) bones with markedly increased radiodensity, OBLITERATION of the normal lucent MEDULLARY (marrow) CAVITY, and a classic BONE-IN-BONE (endobone) appearance where a smaller dense bone appears nested within the outline of the larger bone. Metaphyses may show an Erlenmeyer-flask-like widening; cortical-medullary differentiation is lost. Correct pediatric skeletal proportions and joints rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diffusely dense, sclerotic bones with lost cortico-medullary differentiation
  - Obliteration of the medullary cavity
  - Bone-in-bone (endobone) appearance
  - Plain radiograph of a child's skeleton
- **Avoid (negative prompt):** normal bones with a visible lucent medullary cavity; a solitary focal sclerotic lesion (bone island / osteoblastic metastasis) as the intended finding; lytic destructive lesions; a fracture as the sole finding; osteopenia/thin cortices; a CT/MRI cross-section; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "osteopetrosis bone-in-bone sclerotic radiograph"; Wikimedia Commons "osteopetrosis x-ray".

### s1-0262 - Stevens-Johnson syndrome / toxic epidermal necrolysis  (Step 1 - Musculoskeletal / Skin)
- **Case context:** 34-year-old woman who started lamotrigine three weeks ago, now with fever, malaise, and a rapidly spreading painful rash of dusky red macules with central blistering, painful erosions of the lips, oral mucosa, and conjunctivae, a positive Nikolsky sign (epidermal sloughing with lateral pressure), and about 8% body surface area involved; the image is a photograph of dusky targetoid macules with flaccid bullae and epidermal detachment plus hemorrhagic crusting of the lips.
- **Modality:** Clinical photograph of skin and mucosa, realistic dermatology lighting.
- **Prompt:** Hyperrealistic clinical DERMATOLOGY PHOTOGRAPH of an adult with a severe drug reaction, natural clinical lighting and true-to-life skin tones. Depict STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS: widespread DUSKY, purpuric TARGETOID MACULES coalescing into ill-defined patches on the trunk, with areas of FLACCID BULLAE and sheets of superficial EPIDERMAL DETACHMENT that peel away to leave raw, moist, denuded dermis (positive Nikolsky sign), affecting a limited but significant portion of the body surface. Prominent MUCOSAL involvement: hemorrhagic crusting and erosions of the LIPS and oral mucosa, with red crusted conjunctivae. The skin looks acutely ill and tender, not scaly or chronic. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dusky, targetoid/purpuric macules with flaccid blistering
  - Sheet-like epidermal detachment leaving raw denuded dermis (Nikolsky positive)
  - Hemorrhagic mucosal (lip/oral) crusting with conjunctival involvement
  - Realistic acute-appearing clinical photograph
- **Avoid (negative prompt):** thick silvery scaly plaques (psoriasis); a localized honey-crusted impetigo lesion; classic sharply-defined typical target lesions of ordinary erythema multiforme as the sole finding; a tense subepidermal blistering eruption of bullous pemphigoid; a scald/thermal burn; a scaly eczematous dermatitis; illustration/cartoon rendering.
- **Real-image fallback:** DermNet NZ - search "Stevens-Johnson syndrome toxic epidermal necrolysis"; PathologyOutlines/StatPearls SJS/TEN clinical images; Wikimedia Commons "toxic epidermal necrolysis".

### s1-0264 - Acanthosis nigricans (insulin resistance)  (Step 1 - Reproductive & Endocrine)
- **Case context:** 15-year-old boy with obesity, symmetric velvety hyperpigmented thickening of the skin over the posterior neck and both axillae with several skin tags, developing gradually and asymptomatic, a fasting glucose at the upper end of normal, and a strong family history of type 2 diabetes; the image is a photograph of velvety, hyperpigmented, thickened plaques in the posterior neck folds with adjacent skin tags.
- **Modality:** Clinical photograph of the posterior neck skin, realistic dermatology lighting.
- **Prompt:** Hyperrealistic clinical DERMATOLOGY PHOTOGRAPH of the posterior NECK of an obese adolescent, natural clinical lighting and true-to-life skin tones. Depict ACANTHOSIS NIGRICANS: symmetric, ill-defined, VELVETY, HYPERPIGMENTED (brown-to-gray) THICKENED plaques in the skin folds of the nape and sides of the neck, with an accentuated, slightly rugose/verrucous surface texture and skin-line accentuation, and several small pedunculated SKIN TAGS (acrochordons) at the margins. The changes are dry and velvety (not moist, blistered, or eroded) and blend gradually into normal surrounding skin. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Symmetric velvety, hyperpigmented thickened plaque in the posterior neck folds
  - Accentuated skin lines / rugose surface texture
  - Associated skin tags (acrochordons)
  - Realistic clinical photograph, dry non-eroded surface
- **Avoid (negative prompt):** a moist macerated intertrigo or candidal rash; a scaly eczematous or psoriatic plaque; a pigmented melanocytic lesion/melanoma; blistering or erosion; a tinea versicolor scaly patch; grime/dirt appearance; illustration/cartoon rendering.
- **Real-image fallback:** DermNet NZ - search "acanthosis nigricans neck"; StatPearls acanthosis nigricans clinical image; Wikimedia Commons "acanthosis nigricans".

### s1-0280 - Tuberous sclerosis complex  (Step 1 - Multisystem)
- **Case context:** 2-year-old girl with recurrent seizures beginning in infancy as flexor (infantile) spasms and developmental delay, several hypopigmented ash-leaf macules and a rough raised shagreen plaque over the lower back, a cardiac rhabdomyoma seen in infancy that regressed, and bilateral fat-containing renal masses (angiomyolipomas); the image is a brain MRI showing calcified subependymal nodules along the lateral ventricles and several cortical tubers.
- **Modality:** Axial brain MRI (T2/FLAIR, with a susceptibility/gradient or T1 correlate for calcified nodules), DICOM grayscale.
- **Prompt:** Hyperrealistic axial BRAIN MRI in diagnostic grayscale, radiologically accurate supratentorial anatomy with the lateral ventricles and cerebral cortex and realistic MRI texture. Depict TUBEROUS SCLEROSIS COMPLEX: several small, rounded SUBEPENDYMAL NODULES projecting into the lateral ventricles along the caudothalamic margins (candle-guttering appearance) with signal consistent with CALCIFICATION, together with multiple CORTICAL/SUBCORTICAL TUBERS seen as broadened, T2/FLAIR-hyperintense expanded gyri with blurred gray-white junctions. The ventricles are not markedly enlarged and there is no dominant enhancing mass at the foramen of Monro. Symmetric skull and brain anatomy rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Subependymal nodules along the lateral ventricular margins (candle-guttering)
  - Several cortical/subcortical tubers (expanded gyri with blurred gray-white junction)
  - Nodules consistent with calcification
  - Axial brain MRI appearance
- **Avoid (negative prompt):** a solitary large enhancing mass at the foramen of Monro (subependymal giant cell astrocytoma) as the sole finding; periventricular nodular heterotopia rendered as smooth uniform gray-matter nodules only; acute hemorrhage or infarct; a normal ventricular margin with no nodules; ring-enhancing abscesses; a plain CT bone window; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "tuberous sclerosis subependymal nodules cortical tubers MRI"; Wikimedia Commons "tuberous sclerosis MRI subependymal nodules".

### s2ck-0126 - Complete (third-degree) atrioventricular block  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw independent P and QRS rhythms with true atrioventricular dissociation at named rates. This finding is exactly what AI gets wrong. Strongly recommend a REAL de-identified complete-heart-block 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 78-year-old man with recurrent lightheadedness and one syncopal episode, bradycardic at 38/min and faint on standing, on no nodal-blocking drugs with normal potassium and troponin; the tracing must show sinus P waves at 88/min marching through independently of wide QRS complexes at 38/min, with complete atrioventricular dissociation.
- **Modality:** 12-lead ECG or rhythm strip on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace. Depict COMPLETE (THIRD-DEGREE) ATRIOVENTRICULAR BLOCK: regular upright sinus P WAVES marching across the strip at a faster atrial rate (about 88/min) that are completely DISSOCIATED from a separate, slower VENTRICULAR ESCAPE rhythm of WIDE QRS complexes at about 38/min, so the P waves and QRS complexes have NO fixed relationship - some P waves fall on, before, or after QRS complexes and PR intervals vary randomly, while the P-P intervals and the R-R intervals are each independently regular. Physiologically consistent tracing showing two independent regular rhythms. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):** Independent regular atrial (P) rate faster than the ventricular rate; wide slow QRS escape complexes (~38/min); complete AV dissociation with no consistent PR relationship; regular P-P and regular R-R intervals separately.
- **Avoid (negative prompt):** a fixed 1:1 P-to-QRS relationship; progressive PR prolongation with a dropped beat (Mobitz I) or intermittent dropped beats with a constant PR (Mobitz II); an irregularly irregular rhythm without P waves (AF); a narrow fast tachycardia; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "complete heart block third-degree AV block ECG AV dissociation"; Wikimedia Commons "third degree AV block ECG". Prefer the app vector tracing.

### s2ck-0127 - Adrenal incidentaloma (benign adenoma)  (Step 2 CK - Internal Medicine)
- **Case context:** 54-year-old woman who had abdominal CT for nonspecific pain, incidentally showing a right adrenal mass, with no hypertension, weight change, easy bruising, or malignancy history and an unremarkable examination; the image is a contrast CT showing a well-circumscribed homogeneous 2.5-cm right adrenal nodule with low unenhanced attenuation (< 10 Hounsfield units), consistent with a lipid-rich benign adenoma.
- **Modality:** CT of the abdomen, axial slice at the level of the adrenal glands, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CT of the abdomen in diagnostic grayscale, soft-tissue window, radiologically accurate upper-abdominal anatomy (liver, spleen, kidneys, both adrenal glands, aorta, and inferior vena cava) with realistic CT noise. Depict a BENIGN LIPID-RICH ADRENAL ADENOMA: a small (about 2.5 cm), WELL-CIRCUMSCRIBED, ROUND, HOMOGENEOUS RIGHT ADRENAL NODULE with smooth margins and uniformly LOW attenuation (fat-containing, dark gray/near-water density) without necrosis, calcification, or irregular thick enhancing rim. The contralateral left adrenal limb, kidneys, and other organs appear normal. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Small, round, well-circumscribed right adrenal nodule
  - Homogeneous low attenuation (lipid-rich, benign appearance)
  - Smooth margins without necrosis, calcification, or thick irregular rim
  - Correct axial abdominal CT anatomy with a normal contralateral adrenal
- **Avoid (negative prompt):** a large heterogeneous mass with necrosis and irregular enhancement (adrenocortical carcinoma / pheochromocytoma) as the intended finding; bilateral adrenal enlargement; a high-density calcified mass; an adrenal hemorrhage; a renal or hepatic mass rendered instead; contrast in bowel dominating; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "adrenal adenoma CT low attenuation incidentaloma"; Wikimedia Commons "adrenal adenoma CT".

### s2ck-0128 - Ischemic colitis  (Step 2 CK - Internal Medicine)
- **Case context:** 72-year-old woman with atherosclerotic disease and sudden left lower quadrant crampy pain followed by bloody diarrhea, mildly tender left abdomen without rebound or guarding, hemodynamically stable with a soft abdomen; the image is a CT of the abdomen showing segmental wall thickening of the descending and sigmoid colon with pericolonic fat stranding.
- **Modality:** Contrast-enhanced CT of the abdomen and pelvis, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen and pelvis in diagnostic grayscale, soft-tissue window, radiologically accurate anatomy with contrast-opacified bowel and vessels and realistic CT noise. Depict ISCHEMIC COLITIS: a SEGMENTAL length of the DESCENDING/SIGMOID COLON (watershed distribution near the splenic flexure) showing circumferential, symmetric BOWEL-WALL THICKENING with mural edema producing a target/halo appearance of the wall, and adjacent PERICOLONIC FAT STRANDING; the affected segment has a defined transition to normal-caliber colon on either side. There is no discrete obstructing mass, no drainable abscess, and no free air. Small-bowel and other organs correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Segmental colonic wall thickening (descending/sigmoid, watershed distribution)
  - Mural edema (target/halo) with pericolonic fat stranding
  - Defined transition to normal colon (segmental, not a mass)
  - Contrast-enhanced axial abdominopelvic CT appearance
- **Avoid (negative prompt):** a discrete annular obstructing colonic mass with shouldered margins (carcinoma) as the intended finding; multiple sigmoid diverticula with a focal abscess (diverticulitis) as the dominant finding; a normal thin-walled colon; small-bowel obstruction with dilated loops and air-fluid levels; free intraperitoneal air (perforation); noncontrast or MRI appearance; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "ischemic colitis CT segmental wall thickening splenic flexure"; Wikimedia Commons "ischemic colitis CT".

### s2ck-0129 - Vertebral osteomyelitis / discitis  (Step 2 CK - Internal Medicine)
- **Case context:** 60-year-old man who injects drugs with 3 weeks of progressively worsening constant low back pain worse at night, subjective fevers, and point tenderness over the lower thoracic spine, with an intact neurologic exam and blood cultures drawn; the image is an MRI of the spine showing T2 hyperintensity of two adjacent vertebral bodies with destruction of the intervening disc space and an early paraspinal collection.
- **Modality:** Sagittal MRI of the thoracolumbar spine (T2-weighted and/or T1 post-contrast), DICOM grayscale.
- **Prompt:** Hyperrealistic sagittal MRI of the thoracic/thoracolumbar SPINE in diagnostic grayscale, anatomically accurate vertebral bodies, intervertebral discs, spinal cord, and cerebrospinal fluid with realistic MRI texture. Depict PYOGENIC VERTEBRAL OSTEOMYELITIS WITH DISCITIS: TWO ADJACENT VERTEBRAL BODIES showing abnormal T2-HYPERINTENSE (bright) marrow edema with loss of the normal endplate cortical line, DESTRUCTION and narrowing of the INTERVENING DISC space with abnormal bright disc signal, and an early phlegmon/PARASPINAL soft-tissue collection extending anteriorly along the vertebral margins. The disease is centered on a single disc-vertebra-vertebra unit; the cord is not compressed by a large epidural abscess. Adjacent normal vertebrae rendered for contrast. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Two adjacent vertebral bodies with marrow edema (bright on T2)
  - Destruction/narrowing of the intervening disc space with abnormal disc signal
  - Early paraspinal soft-tissue collection (phlegmon)
  - Sagittal spine MRI appearance centered on one disc unit
- **Avoid (negative prompt):** a solitary vertebral compression fracture with disc-space PRESERVATION (typical of metastasis) as the intended finding; multiple non-contiguous lytic marrow-replacing lesions sparing the discs (metastatic disease); a large cord-compressing epidural mass as the dominant finding; normal marrow and discs; a degenerative disc bulge only; a CT bone-window or plain radiograph; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "vertebral osteomyelitis discitis MRI adjacent endplates disc destruction"; Wikimedia Commons "spondylodiscitis MRI".

### s2ck-0135 - Boerhaave syndrome (esophageal perforation)  (Step 2 CK - Surgery)
- **Case context:** 55-year-old man with sudden severe retrosternal and epigastric pain immediately after forceful vomiting following a large meal with heavy alcohol, diaphoretic, tachycardic, and febrile, with palpable subcutaneous crepitus over the neck and chest; the image is a chest radiograph showing pneumomediastinum and a left pleural effusion.
- **Modality:** Frontal (PA/AP) chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal CHEST RADIOGRAPH of an adult in grayscale with DICOM-like diagnostic dynamic range and correct thoracic anatomy. Depict ESOPHAGEAL PERFORATION (BOERHAAVE SYNDROME): PNEUMOMEDIASTINUM shown as thin LUCENT (dark) streaks of air outlining the mediastinal contours and the left heart border, with air tracking superiorly into the soft tissues of the neck (subcutaneous emphysema) as linear lucencies along the supraclavicular/lower-neck region; together with a LEFT-SIDED PLEURAL EFFUSION producing increased opacity and blunting of the left costophrenic angle at the lung base. The lungs are otherwise aerated and the bony thorax is correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Pneumomediastinum (lucent air outlining the mediastinal borders)
  - Air tracking into the neck soft tissues (subcutaneous emphysema)
  - Left-sided pleural effusion with costophrenic-angle blunting
  - Correct frontal chest radiograph appearance
- **Avoid (negative prompt):** a large pleural-based air collection with a collapsed lung and tracheal shift (tension pneumothorax) as the intended finding; a lobar consolidation as the dominant finding; free air under the diaphragm only; a normal clear mediastinum; cardiomegaly with bilateral effusions of heart failure; a lateral view when frontal requested; annotations or lines/tubes.
- **Real-image fallback:** Radiopaedia - search "Boerhaave syndrome esophageal perforation pneumomediastinum chest radiograph"; Wikimedia Commons "pneumomediastinum chest x-ray".

### s2ck-0136 - Acute subdural hematoma  (Step 2 CK - Surgery)
- **Case context:** 80-year-old man on warfarin for atrial fibrillation, brought in after a fall with head strike, now drowsy and confused with a left hemiparesis, a slightly larger right pupil, and an elevated INR; the image is a noncontrast head CT showing a right-sided crescent-shaped hyperdense extra-axial collection crossing suture lines with midline shift.
- **Modality:** Noncontrast head CT, axial slice at the level of the lateral ventricles (DICOM grayscale, brain window).
- **Prompt:** Hyperrealistic axial NONCONTRAST HEAD CT in diagnostic grayscale, brain window, radiologically accurate cranial and brain anatomy with realistic CT noise. Depict an ACUTE SUBDURAL HEMATOMA: a CRESCENT-SHAPED (concave toward the brain), HYPERDENSE (bright white) EXTRA-AXIAL collection over the surface of the RIGHT cerebral convexity that SPREADS along the calvarium and CROSSES cranial suture lines (does not stop at them), producing MASS EFFECT with effacement of the ipsilateral sulci, compression of the right lateral ventricle, and MIDLINE SHIFT of the septum/ventricles toward the left. The calvarium is intact and gray-white differentiation is preserved elsewhere. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Crescent-shaped (concave) hyperdense extra-axial collection over the convexity
  - Collection crosses suture lines (subdural morphology)
  - Mass effect with sulcal effacement and midline shift
  - Brain-window axial noncontrast CT appearance
- **Avoid (negative prompt):** a biconvex lens-shaped collection that stops at suture lines (epidural hematoma) as the intended finding; blood filling the basal cisterns/sylvian fissures (subarachnoid); a focal round intraparenchymal hemorrhage; a hypodense wedge infarct; a normal symmetric brain with no shift; a bone-only window; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "acute subdural hematoma crescent CT midline shift"; Wikimedia Commons "subdural hematoma CT".

### s2ck-0137 - Thyroid nodule suspicious for carcinoma  (Step 2 CK - Surgery)
- **Case context:** 45-year-old clinically euthyroid woman with a firm 2-cm right thyroid nodule found on routine exam, no compressive symptoms, and a normal serum TSH; the image is a thyroid ultrasound showing a solid hypoechoic nodule with microcalcifications and irregular margins (suspicious sonographic features).
- **Modality:** Thyroid ULTRASOUND, grayscale high-frequency linear-probe transverse view of the thyroid lobe (DICOM-like).
- **Prompt:** Photorealistic THYROID ULTRASOUND image, grayscale high-frequency linear-probe field with realistic fine speckle texture and DICOM-like appearance, transverse view of the thyroid lobe adjacent to the trachea and carotid artery. Depict a SUSPICIOUS THYROID NODULE: a SOLID, markedly HYPOECHOIC (darker than surrounding thyroid) nodule that is TALLER-THAN-WIDE with IRREGULAR, spiculated/infiltrative MARGINS and internal punctate ECHOGENIC FOCI (MICROCALCIFICATIONS) casting no clean shadow, without a complete peripheral halo. The adjacent normal thyroid parenchyma, trachea, and common carotid artery are correctly rendered. Realistic ultrasound gain gradient and depth. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Solid, markedly hypoechoic thyroid nodule
  - Irregular / infiltrative (non-smooth) margins, taller-than-wide
  - Internal punctate microcalcifications
  - Authentic grayscale thyroid ultrasound appearance
- **Avoid (negative prompt):** a purely anechoic simple cyst or a spongiform benign nodule with a smooth halo as the intended finding; a diffusely enlarged heterogeneous gland (thyroiditis) as the dominant finding; a coarse peripheral eggshell calcification only; a color-Doppler-only image; a CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia - search "thyroid nodule ultrasound hypoechoic microcalcifications irregular margins TI-RADS"; Wikimedia Commons "thyroid nodule ultrasound".

### s2ck-0140 - Duodenal atresia  (Step 2 CK - Pediatrics)
- **Case context:** Newborn with features of Down syndrome and bilious vomiting within the first day of life, a mildly full upper abdomen with an otherwise scaphoid abdomen and no stool passed; the image is an abdominal radiograph showing a double bubble of gas in the stomach and proximal duodenum with no distal bowel gas.
- **Modality:** Supine neonatal ABDOMINAL RADIOGRAPH (babygram/KUB), grayscale DICOM-like.
- **Prompt:** Photorealistic supine NEONATAL ABDOMINAL RADIOGRAPH of a newborn in grayscale with DICOM-like diagnostic dynamic range and anatomically correct tiny neonatal thoracoabdominal anatomy, ribs, and spine. Depict DUODENAL ATRESIA: the classic DOUBLE-BUBBLE sign - two rounded gas-filled structures in the UPPER abdomen, a larger LEFT-sided bubble (air-distended STOMACH) and a smaller RIGHT-sided bubble (dilated proximal DUODENUM), separated in the midline by the pylorus, with COMPLETE ABSENCE of gas in the distal bowel (a gasless lower abdomen). No pneumatosis, no free air. Correct neonatal skeletal proportions rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Two upper-abdominal gas bubbles (distended stomach + proximal duodenum)
  - Complete absence of distal bowel gas (gasless lower abdomen)
  - Supine neonatal abdominal radiograph appearance
  - Correct tiny neonatal skeletal anatomy
- **Avoid (negative prompt):** a normal diffuse neonatal bowel gas pattern extending to the rectum; multiple dilated loops with many air-fluid levels (distal obstruction / atresia) as the intended finding; pneumatosis intestinalis; free intraperitoneal air; an adult-sized abdomen; a chest-only view; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "duodenal atresia double bubble sign neonatal abdominal radiograph"; Wikimedia Commons "double bubble duodenal atresia x-ray".

### s2ck-0144 - Category III fetal heart rate tracing (recurrent late decelerations)  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 31-year-old woman in active labor whose fetal monitor shows recurrent late decelerations with each contraction and absent baseline variability, unresponsive to left lateral positioning, IV fluid bolus, oxygen, and stopping oxytocin (Category III tracing); the image is a fetal monitor strip showing recurrent late decelerations with absent baseline variability.
- **Modality:** Cardiotocography (CTG) / FETAL MONITOR strip - paired fetal heart rate tracing over uterine contraction tracing on standard fetal-monitor grid paper.
- **Prompt:** Photorealistic CARDIOTOCOGRAPHY (fetal monitor) paper STRIP on standard fetal-monitoring grid, showing two stacked channels: an UPPER FETAL HEART RATE tracing (scaled roughly 30-240 bpm) and a LOWER UTERINE CONTRACTION (tocodynamometer) tracing, aligned in time. Depict a CATEGORY III pattern with RECURRENT LATE DECELERATIONS: with each rounded uterine CONTRACTION on the lower channel, the fetal heart rate on the upper channel shows a smooth, symmetric, gradual DECELERATION whose NADIR is OFFSET AFTER the peak of the contraction and which returns to baseline after the contraction ends (late timing), occurring with essentially every contraction; the baseline fetal heart rate shows ABSENT VARIABILITY (a flat, smooth line with no beat-to-beat undulation) around roughly 140 bpm. Clean printed tracing on grid paper. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Two aligned channels (fetal heart rate over uterine contractions)
  - Gradual decelerations whose nadir lags after the contraction peak (late timing), recurrent
  - Absent baseline variability (flat, smooth baseline)
  - Realistic fetal-monitor grid-paper appearance
- **Avoid (negative prompt):** abrupt V-shaped decelerations coinciding with contractions (variable decelerations) as the intended finding; early decelerations mirroring the contraction; a reactive tracing with accelerations and normal moderate variability; a normal flat toco channel with no contractions; a single ECG-style trace; a photorealistic clinical scene; annotations or number overlays.
- **Real-image fallback:** Wikimedia Commons - search "late deceleration cardiotocography CTG"; open-access obstetrics/StatPearls fetal heart rate tracing figures. Best rendered as a clean app-native vector tracing if AI fails.

### s3-0151 - Funnel plot asymmetry (publication bias)  (Step 3 - Biostatistics & Epidemiology)
- **Case context:** A meta-analysis pools 15 trials of a therapy; to assess whether small unfavorable studies are missing, the authors plot each study's effect estimate against its precision (standard error); the image is a funnel plot in which large precise studies cluster near the pooled estimate but the lower-left region where small negative studies would fall is empty, producing a visibly asymmetric funnel.
- **Modality:** Statistical FUNNEL PLOT - clean vector-style scientific figure on a white background, best rendered as a vector chart, not a photorealistic medical image.
- **Prompt:** Clean vector-style scientific FUNNEL PLOT on a white background, high-resolution journal-figure clarity, a scatter plot with the horizontal axis showing the study EFFECT SIZE (with a vertical dashed reference line at the pooled/combined estimate near the center) and the vertical axis showing STANDARD ERROR arranged so that PRECISE studies (small standard error) sit near the TOP and IMPRECISE small studies (large standard error) sit near the BOTTOM. Draw the classic inverted-triangle FUNNEL guideline (two diagonal lines widening downward from the pooled estimate). Plot about 15 study DOTS: near the top they cluster tightly and symmetrically around the pooled-estimate line, but toward the BOTTOM the points are ASYMMETRIC - the LOWER-LEFT region (small studies with unfavorable/negative effects) is conspicuously EMPTY while lower-right points are present, giving a lopsided funnel. Tidy axes and gridlines, clean scientific style. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Scatter of study points with effect size (x) versus standard error (y), precise studies at top
  - Inverted-triangle funnel guideline centered on the pooled estimate
  - Visible asymmetry: an empty lower-left region (missing small negative studies)
  - Clean vector scientific-figure style
- **Avoid (negative prompt):** a symmetric, evenly filled funnel (no bias); a forest plot with horizontal confidence-interval bars; an ROC or Kaplan-Meier curve; a simple regression scatter with a best-fit line; an upright (non-inverted) triangle; axes swapped so imprecise studies sit at the top; any photorealistic clinical imagery.
- **Real-image fallback:** Wikimedia Commons / Cochrane - search "funnel plot publication bias asymmetry"; Cochrane Handbook figures. Best rendered as a clean app-native SVG vector chart, not an AI photo.

### s3-0174 - Acute angle-closure glaucoma  (Step 3 - Surgery)
- **Case context:** 63-year-old woman with several hours of severe pain in one red eye, blurred vision, halos around lights, headache, and nausea, beginning after time in a dark movie theater (pupillary dilation precipitating angle closure); the image is an external eye photograph showing a red, injected eye with a hazy cornea and a fixed, mid-dilated pupil.
- **Modality:** External clinical EYE PHOTOGRAPH (anterior segment / slit-lamp-style close-up), realistic ophthalmic lighting.
- **Prompt:** Hyperrealistic close-up EXTERNAL EYE PHOTOGRAPH of a single human eye, anterior-segment clinical/slit-lamp-style lighting with true-to-life detail. Depict ACUTE ANGLE-CLOSURE GLAUCOMA: intense CONJUNCTIVAL INJECTION with prominent CIRCUMCORNEAL (ciliary) REDNESS most marked around the limbus, a diffusely HAZY, edematous, STEAMY CORNEA that dulls the normal bright corneal reflection and blurs the iris detail, and a FIXED, MID-DILATED (mid-position), non-reactive PUPIL that appears slightly oval and unresponsive. The eye looks acutely inflamed and painful; the lids and lashes appear normal. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diffuse conjunctival injection with circumcorneal (ciliary) redness
  - Hazy/steamy edematous cornea obscuring iris detail
  - Fixed, mid-dilated (not pinpoint, not fully dilated) non-reactive pupil
  - Realistic external eye clinical photograph
- **Avoid (negative prompt):** a small constricted (miotic) pupil with a clear cornea (anterior uveitis) as the intended finding; a purely sectoral or diffuse conjunctivitis with discharge and a normal clear cornea and reactive pupil; a hypopyon layering as the dominant finding; a subconjunctival hemorrhage; a pterygium; a cataract close-up; illustration/cartoon rendering.
- **Real-image fallback:** DermNet / EyeWiki / Radiopaedia clinical galleries - search "acute angle closure glaucoma red eye hazy cornea mid-dilated pupil"; Wikimedia Commons "acute angle closure glaucoma eye".

### s3-0185 - Acute cardiogenic pulmonary edema  (Step 3 - Emergency Medicine)
- **Case context:** 68-year-old hypertensive man with sudden severe breathlessness and inability to lie flat, anxious and diaphoretic with diffuse bibasilar crackles, an S3 gallop, elevated jugular venous pressure, BP 192/108, heart rate 112, and oxygen saturation 86% on room air; the image is a portable AP chest radiograph showing bilateral perihilar alveolar opacities, Kerley B lines, and cardiomegaly consistent with cardiogenic pulmonary edema.
- **Modality:** Portable ANTEROPOSTERIOR (AP) chest radiograph, grayscale DICOM-like.
- **Prompt:** Photorealistic portable AP CHEST RADIOGRAPH of an adult in grayscale with DICOM-like diagnostic dynamic range and correct thoracic anatomy (portable AP technique with slightly magnified heart). Depict ACUTE CARDIOGENIC PULMONARY EDEMA: bilateral, symmetric, PERIHILAR ALVEOLAR OPACITIES in a central bat-wing distribution fading toward the periphery, with UPPER-LOBE pulmonary vascular redistribution (cephalization), fine peripheral horizontal KERLEY B LINES at the lung bases, indistinct hilar vessels, and an ENLARGED CARDIAC SILHOUETTE (cardiomegaly); small blunting of the costophrenic angles from mild pleural effusions is acceptable. The bony thorax is correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bilateral perihilar (bat-wing) alveolar opacities with vascular cephalization
  - Kerley B lines and indistinct hila
  - Cardiomegaly (enlarged cardiac silhouette)
  - Portable AP chest radiograph appearance
- **Avoid (negative prompt):** a focal unilateral lobar consolidation with air bronchograms (pneumonia) as the intended finding; a large unilateral pleural effusion or whiteout; a pneumothorax with a visible pleural line; a normal-sized heart with clear lungs; a completely lucent hyperinflated chest (COPD); a lateral view when frontal requested; annotations, lines, or tubes dominating.
- **Real-image fallback:** Radiopaedia - search "cardiogenic pulmonary edema chest radiograph bat wing Kerley B cardiomegaly"; Wikimedia Commons "pulmonary edema chest x-ray".

### s3-0187 - Acute cholecystitis  (Step 3 - Surgery)
- **Case context:** 50-year-old woman with 2 days of constant right upper quadrant pain, fever, nausea, a positive Murphy sign, and leukocytosis, hemodynamically stable and an acceptable operative candidate with a normal bilirubin; the image is a right upper quadrant ultrasound showing gallstones, a thickened gallbladder wall, and pericholecystic fluid without dilation of the common bile duct.
- **Modality:** Right upper quadrant ABDOMINAL ULTRASOUND, grayscale sector view of the gallbladder (curvilinear probe, DICOM-like).
- **Prompt:** Photorealistic RIGHT UPPER QUADRANT ULTRASOUND image, grayscale sector field with realistic fine speckle texture and DICOM-like appearance, longitudinal view of the gallbladder and adjacent porta hepatis. Depict ACUTE CALCULOUS CHOLECYSTITIS: one or more echogenic GALLSTONES in the gallbladder lumen casting clean posterior ACOUSTIC SHADOWS, a THICKENED gallbladder WALL (over 3 mm, with a striated/hypoechoic edematous layered look), and a rim of anechoic PERICHOLECYSTIC FLUID; the adjacent COMMON BILE DUCT is of NORMAL (non-dilated) caliber. The gallbladder is mildly distended and adjacent liver parenchyma provides context. Realistic ultrasound gain gradient, depth shadowing behind the stones, and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Echogenic gallstone(s) with clean posterior acoustic shadowing
  - Thickened (striated) gallbladder wall with pericholecystic fluid
  - Normal-caliber (non-dilated) common bile duct
  - Authentic grayscale right upper quadrant ultrasound appearance
- **Avoid (negative prompt):** a markedly dilated common bile duct with an obstructing ductal stone (choledocholithiasis) as the intended finding; a thin-walled normal gallbladder with no stones; a polypoid gallbladder mass without shadowing; a simple hepatic cyst; a CT/MRI cross-section; a color-Doppler-only image; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "acute cholecystitis ultrasound gallstones wall thickening pericholecystic fluid"; Wikimedia Commons "cholecystitis ultrasound".

### s3-0189 - Blunt splenic laceration (nonoperative management)  (Step 3 - Surgery)
- **Case context:** 25-year-old man after a motor vehicle collision with left upper quadrant pain, comfortable and hemodynamically stable after a liter of crystalloid (heart rate 92, BP 118/74), a mildly tender abdomen without peritonitis and no other significant injuries; the image is a contrast-enhanced abdominal CT showing a grade II splenic laceration with a small subcapsular hematoma and no active contrast extravasation or other solid-organ injury.
- **Modality:** Contrast-enhanced CT of the abdomen, axial slice at the level of the spleen, portal-venous phase, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen in diagnostic grayscale, portal-venous-phase soft-tissue window, radiologically accurate upper-abdominal anatomy with the spleen, liver, stomach, and kidneys enhancing normally and realistic CT noise. Depict a low-grade BLUNT SPLENIC INJURY: the SPLEEN shows a linear, non-enhancing LACERATION (a dark cleft) extending a short distance into the parenchyma (less than 3 cm deep), with a small crescentic SUBCAPSULAR HEMATOMA (low-density collection) flattening the adjacent splenic contour, and a little perisplenic hemoperitoneum. There is NO bright arterial CONTRAST BLUSH/extravasation and no shattered spleen; the liver, kidneys, and other organs are intact. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Linear non-enhancing splenic laceration (shallow, low-grade)
  - Small subcapsular hematoma deforming the splenic contour
  - No active contrast blush/extravasation; other solid organs intact
  - Contrast-enhanced axial abdominal CT appearance
- **Avoid (negative prompt):** a shattered/fragmented spleen with a bright arterial contrast blush or devascularization (high-grade) as the intended finding; a large free-flowing hemoperitoneum with hemodynamic collapse; a liver or renal laceration rendered as the main finding; a normal intact spleen with no injury; a noncontrast or MRI appearance; a lung-base window; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "splenic laceration CT grade II subcapsular hematoma blunt trauma"; Wikimedia Commons "splenic laceration CT".

### s3-0190 - Croup (laryngotracheobronchitis)  (Step 3 - Pediatrics)
- **Case context:** 2-year-old boy with 2 days of coryza followed by a barky seal-like cough, noisy breathing, and inspiratory stridor audible at rest with mild chest-wall retractions, not drooling or toxic, well hydrated with oxygen saturation 96% (moderate croup); the image is a frontal soft-tissue neck radiograph showing symmetric subglottic tracheal narrowing (steeple sign).
- **Modality:** Frontal (AP) soft-tissue NECK RADIOGRAPH of a young child, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal (AP) soft-tissue NECK RADIOGRAPH of a toddler in grayscale with DICOM-like diagnostic dynamic range and anatomically correct pediatric airway, cervical spine, and soft tissues. Depict CROUP: the air column of the SUBGLOTTIC TRACHEA shows SYMMETRIC, smooth, tapered NARROWING that rises to a pointed apex just below the vocal cords - the classic STEEPLE (pencil-tip / inverted-V) SIGN - replacing the normal squared/shouldered subglottic contour. The remainder of the tracheal air column below is of normal caliber, and there is no retropharyngeal soft-tissue mass. Correct pediatric cervical anatomy rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Symmetric tapered subglottic tracheal narrowing (steeple/pencil-tip sign)
  - Loss of the normal squared subglottic shoulders
  - Frontal soft-tissue neck radiograph of a young child
  - Normal-caliber trachea below the narrowing
- **Avoid (negative prompt):** a swollen rounded epiglottis on a lateral view (thumbprint sign of epiglottitis) as the intended finding; a widened retropharyngeal soft-tissue prevertebral stripe (retropharyngeal abscess); a radiopaque foreign body in the airway; an asymmetric tracheal deviation from a mass; a normal squared subglottic airway; a chest-only view; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "croup steeple sign frontal neck radiograph subglottic narrowing"; Wikimedia Commons "croup steeple sign x-ray".

<!-- Added with Step 2 CK Batch 7, Step 3 Day 1 Batch 6, Step 3 Day 2 ACM Batch 4 -->

### s2ck-0151 - Hypertrophic cardiomyopathy  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw voltage-criteria left ventricular hypertrophy together with the narrow, deep septal (dagger) Q waves of hypertrophic cardiomyopathy. Strongly recommend a REAL de-identified HOCM 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 19-year-old competitive basketball player with exertional lightheadedness and near-syncope, a harsh crescendo-decrescendo systolic murmur at the left lower sternal border that intensifies with Valsalva/standing and softens with squatting, and a relative who died suddenly young; the tracing must show prominent left ventricular hypertrophy voltage with deep, narrow dagger-like Q waves in the inferolateral leads.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict HYPERTROPHIC CARDIOMYOPATHY: a normal SINUS rhythm at a normal rate with narrow QRS complexes showing high-voltage LEFT VENTRICULAR HYPERTROPHY - tall R waves in the lateral leads (I, aVL, V5-V6) and deep S waves in the right precordial leads (V1-V3). Superimpose narrow but DEEP dagger-like Q WAVES in the INFEROLATERAL leads (II, III, aVF and V5-V6), with associated ST-segment and T-wave abnormalities (lateral ST depression / T-wave inversion). Physiologically consistent, evenly spaced beats with matching morphology across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Sinus rhythm with narrow QRS complexes
  - High-voltage LVH criteria (tall lateral R waves, deep right precordial S waves)
  - Narrow but deep dagger-like Q waves in the inferolateral leads (II, III, aVF, V5-V6)
  - Lateral ST/T-wave abnormalities; standard pink ECG grid
- **Avoid (negative prompt):** wide pathologic Q waves with ST elevation of an acute myocardial infarction; a wide/bizarre QRS or delta wave (pre-excitation) as the intended finding; low-voltage complexes; an irregularly irregular rhythm; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "hypertrophic cardiomyopathy ECG LVH dagger Q waves"; Wikimedia Commons "hypertrophic cardiomyopathy ECG". Prefer the app vector tracing.

### s2ck-0153 - Sarcoidosis (bilateral hilar lymphadenopathy)  (Step 2 CK - Internal Medicine)
- **Case context:** 35-year-old nonsmoking woman with several weeks of dry cough, exertional dyspnea, fatigue, tender erythematous shin nodules (erythema nodosum) and mildly blurred vision (uveitis), with no fever, weight loss, or dust exposure; the image is a frontal chest radiograph showing symmetric bilateral hilar lymphadenopathy with clear lung fields.
- **Modality:** Frontal (PA) CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal (PA) CHEST RADIOGRAPH of an adult in grayscale with DICOM-like diagnostic dynamic range and anatomically accurate thoracic anatomy. Depict STAGE I SARCOIDOSIS: SYMMETRIC, BILATERAL HILAR LYMPHADENOPATHY - both pulmonary hila enlarged by well-defined, lobulated rounded soft-tissue nodal masses of roughly equal size, with the right paratracheal region also mildly widened. The LUNG FIELDS are CLEAR with no infiltrate, nodules, effusion, or fibrosis, and the cardiac silhouette is normal in size. Correct rib cage, mediastinal contour, diaphragm, and clavicles rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Symmetric bilateral hilar lymphadenopathy (both hila enlarged, roughly equal)
  - Clear lung fields with no infiltrate or effusion
  - Normal cardiac silhouette
  - Authentic frontal chest radiograph appearance
- **Avoid (negative prompt):** unilateral or asymmetric adenopathy (favoring infection/malignancy); upper-lobe cavitary or fibronodular disease (tuberculosis); reticulonodular parenchymal fibrosis dominating the image; an enlarged heart with vascular congestion and effusions (heart failure); a lobar consolidation; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "sarcoidosis bilateral hilar lymphadenopathy chest radiograph stage 1"; Wikimedia Commons "sarcoidosis bilateral hilar lymphadenopathy x-ray".

### s2ck-0160 - Pancreatic head adenocarcinoma  (Step 2 CK - Surgery)
- **Case context:** 67-year-old man with 6 weeks of progressive painless jaundice, pruritus, dark urine, pale stools, 8 kg weight loss, scleral icterus and a nontender palpably distended gallbladder (Courvoisier sign); the image is a contrast CT of the abdomen showing a hypodense pancreatic-head mass with dilated intrahepatic and extrahepatic bile ducts and a dilated pancreatic duct (double-duct sign).
- **Modality:** Contrast-enhanced CT of the abdomen, axial slice at the level of the pancreatic head, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen in diagnostic grayscale, soft-tissue window, radiologically accurate upper-abdominal anatomy with contrast-opacified vessels and realistic CT noise. Depict PANCREATIC HEAD ADENOCARCINOMA: an ill-defined HYPODENSE (hypoenhancing) MASS in the HEAD of the pancreas, with upstream obstruction producing the DOUBLE-DUCT SIGN - a dilated common bile duct AND a dilated main pancreatic duct - plus dilated intrahepatic bile ducts branching in the liver and a distended gallbladder. The uninvolved pancreatic body/tail, liver, duodenal sweep, aorta, and vertebral body are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Hypodense/hypoenhancing mass in the pancreatic head
  - Double-duct sign: dilated common bile duct and dilated pancreatic duct
  - Dilated intrahepatic ducts and distended gallbladder upstream
  - Contrast-enhanced axial abdominal CT appearance
- **Avoid (negative prompt):** a radiopaque stone impacted in the distal bile duct with no pancreatic mass (choledocholithiasis) as the intended finding; a diffusely inflamed edematous pancreas with peripancreatic stranding (acute pancreatitis); a simple hepatic or pancreatic cyst; multifocal beaded biliary strictures (sclerosing cholangitis); a lung-window or noncontrast image; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "pancreatic head adenocarcinoma CT double duct sign"; Wikimedia Commons "pancreatic cancer CT double duct sign".

### s2ck-0161 - Cauda equina syndrome (central disc herniation)  (Step 2 CK - Surgery)
- **Case context:** 45-year-old man with acute severe low back pain, now bilateral leg weakness, saddle (buttock/inner-thigh) numbness, urinary retention with overflow, reduced anal sphincter tone and a palpable distended bladder; the image is a lumbar MRI showing a large central disc herniation compressing the thecal sac and cauda equina nerve roots.
- **Modality:** Lumbar spine MRI, T2-weighted SAGITTAL (midline) image (bright cerebrospinal fluid, DICOM-like grayscale).
- **Prompt:** Photorealistic T2-weighted SAGITTAL MRI of the LUMBAR SPINE in grayscale with DICOM-like tissue contrast, bright cerebrospinal fluid, anatomically accurate vertebral bodies, intervertebral discs, and conus/thecal sac. Depict CAUDA EQUINA SYNDROME from a large CENTRAL DISC HERNIATION: at a lower lumbar level a large disc fragment protrudes POSTERIORLY into the spinal canal, effacing the bright CSF and severely COMPRESSING the THECAL SAC and the descending CAUDA EQUINA nerve roots (near-complete canal stenosis at that level). The herniated disc shows loss of the normal disc T2 signal; adjacent levels and vertebral marrow are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Large central posterior disc herniation at a lower lumbar level
  - Severe thecal sac / cauda equina compression with effacement of CSF
  - Sagittal T2 lumbar MRI appearance (bright CSF)
  - Herniated disc contiguous with the parent disc space
- **Avoid (negative prompt):** a small lateral/foraminal disc bulge compressing a single exiting root only; a bright destructive vertebral marrow mass or epidural abscess/collection as the intended finding; a burst fracture with retropulsed bone; a normal patent canal with bright CSF around the roots; a cervical or thoracic level; a plain radiograph or CT; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "cauda equina syndrome central disc herniation lumbar MRI"; Wikimedia Commons "lumbar disc herniation MRI".

### s2ck-0162 - Displaced femoral neck fracture  (Step 2 CK - Surgery)
- **Case context:** 82-year-old woman with osteoporosis who fell from standing onto her right side, now unable to bear weight with severe right groin pain; the right leg is shortened and externally rotated with intact distal pulses and sensation; the image is an AP pelvic radiograph showing a displaced right femoral neck fracture.
- **Modality:** AP PELVIS RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic ANTEROPOSTERIOR (AP) PELVIS RADIOGRAPH of an older adult in grayscale with DICOM-like diagnostic dynamic range and anatomically accurate bony pelvis, both hips, and proximal femora, with osteopenic (washed-out) bone texture. Depict a DISPLACED RIGHT FEMORAL NECK (subcapital) FRACTURE: a lucent fracture line across the RIGHT femoral NECK with the femoral HEAD displaced and the femoral shaft rotated, producing a DISRUPTED/BROKEN Shenton line and the fragments offset and shortened. The LEFT hip is intact with an intact Shenton line for comparison, and the acetabula, pubic rami, and sacrum are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Displaced fracture line across the right femoral neck (subcapital)
  - Broken/disrupted Shenton line on the right with shortening/offset
  - Intact, normal left hip for comparison
  - Osteopenic bone; authentic AP pelvis radiograph appearance
- **Avoid (negative prompt):** an intertrochanteric fracture between the greater and lesser trochanters as the intended finding; a nondisplaced hairline fracture with a preserved Shenton line; a dislocated hip with an empty acetabulum and no fracture; a pubic ramus fracture only; a normal symmetric pelvis; a lateral/frog-leg-only view; hardware/annotations.
- **Real-image fallback:** Radiopaedia - search "displaced femoral neck fracture AP pelvis radiograph Shenton line"; Wikimedia Commons "femoral neck fracture x-ray".

### s2ck-0166 - Wilms tumor (nephroblastoma)  (Step 2 CK - Pediatrics)
- **Case context:** 3-year-old well-appearing girl with a smooth, firm left flank mass found on bathing that is confined to one flank and does not cross the midline, with mildly elevated blood pressure for age; the image is an abdominal CT showing a large, well-circumscribed solid mass arising from the left kidney and displacing adjacent structures without crossing the midline.
- **Modality:** Contrast-enhanced CT of the abdomen, axial slice, soft-tissue window (DICOM grayscale), pediatric.
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of a young child's abdomen in diagnostic grayscale, soft-tissue window, anatomically accurate pediatric anatomy with contrast-opacified vessels and realistic CT noise. Depict a WILMS TUMOR (nephroblastoma): a large, WELL-CIRCUMSCRIBED, predominantly SOLID heterogeneous MASS arising from and expanding the LEFT KIDNEY, with a thin rim of enhancing residual renal parenchyma stretched around its margin (claw sign) confirming an intrarenal origin. The mass DISPLACES adjacent bowel and the aorta but does NOT cross the midline or encase the vessels; the contralateral right kidney, liver, spine, and bowel are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Large well-circumscribed solid mass arising from the kidney (renal origin, claw sign)
  - Mass confined to one flank, NOT crossing the midline or encasing the aorta
  - Displacement (not encasement) of adjacent structures
  - Contrast-enhanced axial pediatric abdominal CT appearance
- **Avoid (negative prompt):** a mass that crosses the midline and encases the aorta with coarse calcification (neuroblastoma) as the intended finding; a dilated fluid-filled collecting system with no solid tissue (hydronephrosis); bilateral enlarged cystic kidneys (polycystic disease); a right-upper-quadrant liver mass (hepatoblastoma); a normal kidney; a noncontrast or lung-window image; calipers/annotations.
- **Real-image fallback:** Radiopaedia - search "Wilms tumor nephroblastoma abdominal CT claw sign"; Wikimedia Commons "Wilms tumor CT".

### s2ck-0171 - Ovarian cancer (complex adnexal mass)  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 62-year-old postmenopausal woman with months of bloating, early satiety, and vague pelvic discomfort, a palpable pelvic mass, abdominal distention with a fluid wave, and an elevated CA-125; the image is a pelvic ultrasound showing a complex adnexal mass with solid components, thick septations, and internal papillary projections, with moderate ascites.
- **Modality:** Pelvic (transvaginal/transabdominal) ULTRASOUND, grayscale sector view (DICOM-like).
- **Prompt:** Photorealistic PELVIC ULTRASOUND image in diagnostic grayscale, sector field with realistic fine speckle texture and DICOM-like appearance. Depict a COMPLEX ADNEXAL MASS suspicious for OVARIAN CARCINOMA: a large cystic-and-solid ADNEXAL MASS containing THICK irregular internal SEPTATIONS, echogenic SOLID components, and frond-like intracystic PAPILLARY PROJECTIONS arising from the wall. Surrounding the mass and in the adjacent pelvis is a moderate volume of anechoic FREE FLUID (ASCITES) outlining bowel loops. Realistic ultrasound gain gradient, posterior acoustic enhancement behind the cystic components, and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Complex adnexal mass with thick septations, solid components, and papillary projections
  - Moderate anechoic ascites in the pelvis
  - Cystic-and-solid architecture (not purely simple/anechoic)
  - Authentic grayscale pelvic ultrasound appearance
- **Avoid (negative prompt):** a thin-walled unilocular anechoic simple cyst (benign) as the intended finding; a homogeneously solid uterine fibroid; an empty uterus with an adnexal tubal-ring gestational sac (ectopic); a normal ovary with a dominant follicle; a color-Doppler-only image; a CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "ovarian carcinoma complex adnexal mass ultrasound septations papillary projections ascites"; Wikimedia Commons "ovarian cancer ultrasound".

### s3-0214 - Sarcoidosis (bilateral hilar lymphadenopathy)  (Step 3 - Internal Medicine)
- **Case context:** 34-year-old woman with several weeks of dry cough, mild dyspnea, and tender red shin nodules (erythema nodosum), with no fevers, night sweats, or sick contacts; the image is a frontal chest radiograph showing symmetric bilateral hilar lymphadenopathy with clear lung fields, confirmed by biopsy showing noncaseating granulomas after excluding infection.
- **Modality:** Frontal (PA) CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal (PA) CHEST RADIOGRAPH of a young adult in grayscale with DICOM-like diagnostic dynamic range and anatomically accurate thoracic anatomy. Depict STAGE I SARCOIDOSIS: SYMMETRIC, BILATERAL HILAR LYMPHADENOPATHY - both pulmonary hila enlarged by well-defined, lobulated rounded soft-tissue nodal masses of roughly equal size, with mild right paratracheal widening. The LUNG FIELDS are CLEAR with no infiltrate, effusion, or fibrosis, and the cardiac silhouette is normal in size. Correct rib cage, mediastinal contour, diaphragm, and clavicles rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Symmetric bilateral hilar lymphadenopathy (both hila enlarged, roughly equal)
  - Clear lung fields with no infiltrate or effusion
  - Normal cardiac silhouette
  - Authentic frontal chest radiograph appearance
- **Avoid (negative prompt):** unilateral or asymmetric adenopathy (favoring infection/malignancy); upper-lobe cavitary or fibronodular disease (tuberculosis); reticulonodular parenchymal fibrosis dominating the image; an enlarged heart with vascular congestion and pleural effusions (heart failure); a lobar consolidation; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "sarcoidosis bilateral hilar lymphadenopathy chest radiograph stage 1"; Wikimedia Commons "sarcoidosis bilateral hilar lymphadenopathy x-ray".

### s3-0218 - Ovarian torsion  (Step 3 - Obstetrics & Gynecology)
- **Case context:** 26-year-old woman with sudden severe colicky right lower-quadrant pain, nausea and vomiting for 3 hours, afebrile, with unilateral adnexal tenderness and a palpable mass and a negative pregnancy test; the image is a transvaginal ultrasound showing an enlarged, edematous right ovary with peripherally displaced follicles and diminished Doppler flow.
- **Modality:** Transvaginal pelvic ULTRASOUND with color Doppler, grayscale sector view with a color box (DICOM-like).
- **Prompt:** Photorealistic TRANSVAGINAL PELVIC ULTRASOUND image in diagnostic grayscale with a superimposed color-Doppler box, sector field with realistic fine speckle texture and DICOM-like appearance. Depict OVARIAN TORSION: a markedly ENLARGED, edematous, rounded OVARY with heterogeneous hypoechoic stroma and multiple small follicles pushed to the PERIPHERY (peripherally displaced follicles), clearly bigger than a normal ovary. Within the color-Doppler box over the ovary there is DIMINISHED / ABSENT internal color flow signal compared with surrounding tissue. A small amount of anechoic free fluid may sit in the cul-de-sac; adjacent uterus and pelvis are correctly rendered. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Enlarged edematous ovary with peripherally displaced follicles
  - Reduced or absent intraovarian color-Doppler flow
  - Unilateral enlargement compared with normal adjacent anatomy
  - Authentic grayscale transvaginal ultrasound with a color-Doppler box
- **Avoid (negative prompt):** a normal-sized ovary with robust central color flow; an empty uterus with an adnexal tubal-ring gestational sac (ectopic) as the intended finding; a thick-walled tubo-ovarian abscess with debris; a large complex solid papillary mass with ascites (malignancy); a simple thin-walled cyst only; a CT/MRI cross-section; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "ovarian torsion transvaginal ultrasound enlarged ovary peripheral follicles reduced Doppler flow"; Wikimedia Commons "ovarian torsion ultrasound".

### s3-0219 - Complete hydatidiform mole  (Step 3 - Obstetrics & Gynecology)
- **Case context:** 24-year-old woman at an estimated 12 weeks with vaginal bleeding and severe nausea/vomiting, a uterus larger than expected for dates, no fetal heart tones, and a markedly elevated beta-hCG for gestational age; the image is a pelvic ultrasound showing a heterogeneous intrauterine mass with numerous small cystic spaces (snowstorm pattern) and no identifiable fetus.
- **Modality:** Pelvic (transabdominal/transvaginal) obstetric ULTRASOUND, grayscale sector view (DICOM-like).
- **Prompt:** Photorealistic PELVIC OBSTETRIC ULTRASOUND image in diagnostic grayscale, sector field with realistic fine speckle texture and DICOM-like appearance, longitudinal view of an enlarged uterus. Depict a COMPLETE HYDATIDIFORM MOLE: the ENDOMETRIAL CAVITY is filled and distended by a HETEROGENEOUS ECHOGENIC intrauterine MASS studded with NUMEROUS small anechoic CYSTIC SPACES (vesicles) of varying size - the classic SNOWSTORM / cluster-of-grapes appearance - with NO identifiable fetus, gestational sac, yolk sac, or fetal parts. Bilateral theca-lutein cysts may sit in the adnexa. Realistic ultrasound gain gradient, posterior enhancement behind the cystic spaces, and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Intrauterine heterogeneous echogenic mass with numerous small cystic spaces (snowstorm)
  - No identifiable fetus, gestational sac, or fetal parts
  - Enlarged uterus filled by the molar tissue
  - Authentic grayscale pelvic ultrasound appearance
- **Avoid (negative prompt):** a normal intrauterine gestational sac with a live fetus and yolk sac; an empty uterus with an adnexal ectopic gestation; a single simple anechoic cyst; a solid homogeneous fibroid; multiple distinct fetuses of a multifetal pregnancy; a CT/MRI cross-section; a color-Doppler-only image; calipers/annotations dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "complete hydatidiform mole ultrasound snowstorm cluster of grapes"; Wikimedia Commons "hydatidiform mole ultrasound".

### s3-0234 - Tension pneumothorax  (Step 3 - Emergency Medicine)
- **Case context:** 25-year-old man after a motorcycle crash in severe respiratory distress, hypotensive (82/50) and tachycardic (138) with oxygen saturation 84%, a hyperresonant right hemithorax with absent breath sounds, trachea deviated to the left, and distended neck veins; the image is a portable chest radiograph showing a large right-sided pneumothorax with mediastinal shift toward the left and a depressed right hemidiaphragm.
- **Modality:** Portable (supine/AP) CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic portable ANTEROPOSTERIOR (AP) CHEST RADIOGRAPH of an adult trauma patient in grayscale with DICOM-like diagnostic dynamic range and anatomically accurate thoracic anatomy. Depict a RIGHT-SIDED TENSION PNEUMOTHORAX: the RIGHT hemithorax is markedly LUCENT (hyperlucent, black, avascular) with the collapsed right lung retracted into a small opacified stump at the hilum and a visible sharp visceral pleural edge. There is positive mediastinal pressure - the MEDIASTINUM and TRACHEA are SHIFTED toward the LEFT (contralateral) side, the right hemidiaphragm is DEPRESSED/flattened, and the right intercostal spaces are widened. The left lung is normally aerated with vascular markings; ribs and soft tissues correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Large right hyperlucent avascular hemithorax with a collapsed lung and pleural edge
  - Mediastinal/tracheal shift AWAY from the affected side (to the left)
  - Depressed right hemidiaphragm with widened intercostal spaces
  - Portable AP chest radiograph appearance
- **Avoid (negative prompt):** a small apical pneumothorax with no shift; mediastinal shift TOWARD the lucent side (collapse/atelectasis) as the intended finding; a large pleural effusion with a meniscus; a lobar consolidation; bilateral disease; a normal symmetric chest; a CT cross-section; annotations or a chest tube already in place.
- **Real-image fallback:** Radiopaedia - search "tension pneumothorax chest radiograph mediastinal shift"; Wikimedia Commons "tension pneumothorax x-ray".

### s3-0236 - Digoxin toxicity  (Step 3 - Emergency Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw bidirectional ventricular ectopy with the scooped (Salvador Dali sagging) ST segments of digoxin effect. Strongly recommend a REAL de-identified digoxin-toxicity rhythm strip (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 80-year-old woman with heart failure and atrial fibrillation on digoxin, now with anorexia, nausea, yellow-tinged vision, bradycardia and lethargy after starting a new diuretic, with potassium 6.1 and a markedly elevated digoxin level; the rhythm strip must show a slow, regularized junctional rhythm with bidirectional ventricular ectopy and scooped ST segments consistent with digoxin effect and toxicity.
- **Modality:** ECG rhythm strip (single/multi-lead) on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines and a clean black waveform trace. Depict DIGOXIN TOXICITY: a SLOW ventricular rate with a REGULARIZED narrow-complex JUNCTIONAL rhythm (regular R-R, absent/uncoupled P waves) interrupted by BIDIRECTIONAL ventricular ectopy - wide QRS ectopic beats whose main deflection ALTERNATES beat-to-beat between pointing UP and pointing DOWN in the same lead. Throughout, the ST segments show the characteristic DOWNSLOPING, SCOOPED (sagging, reverse-tick / Salvador Dali mustache) morphology of digoxin effect with flattened T waves. Physiologically consistent, evenly spaced baseline beats. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Slow, regularized junctional rhythm (regular R-R, absent/uncoupled P waves)
  - Bidirectional ventricular ectopy (QRS axis alternating up/down beat-to-beat)
  - Scooped/sagging downsloping ST segments (reverse-tick digoxin effect)
  - Standard pink ECG grid
- **Avoid (negative prompt):** a normal upright ST segment; ST-segment elevation of an acute myocardial infarction; a fast irregularly irregular rate as the dominant feature; a monomorphic wide-complex tachycardia; tall tented T waves as the intended finding; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "digoxin toxicity ECG bidirectional VT scooped ST digoxin effect"; Wikimedia Commons "digoxin effect ECG". Prefer the app vector tracing.

### s3-0238 - Perforated peptic ulcer (free air)  (Step 3 - Surgery)
- **Case context:** 57-year-old man with chronic NSAID use who presents with sudden, severe, diffuse abdominal pain for 3 hours, lying still and ill-appearing, febrile (38.3 C), tachycardic (116), with a rigid abdomen, diffuse rebound tenderness, and absent bowel sounds; the image is an upright chest radiograph demonstrating free air under both hemidiaphragms.
- **Modality:** Upright (erect) frontal CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic UPRIGHT (erect) frontal CHEST RADIOGRAPH of an adult in grayscale with DICOM-like diagnostic dynamic range and anatomically accurate thoracic and upper-abdominal anatomy. Depict PNEUMOPERITONEUM from a PERFORATED VISCUS: thin crescents of lucent FREE AIR sit UNDER BOTH HEMIDIAPHRAGMS - a black gas lucency between the domed diaphragm above and the liver on the right and the gastric fundus/spleen on the left below - sharply outlining the smooth undersurface of each diaphragm. The lung fields are clear with no consolidation or effusion, the heart size is normal, and the ribs and soft tissues are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Crescent of lucent free air under the diaphragm (subdiaphragmatic gas), bilateral
  - Sharp smooth diaphragmatic undersurface outlined by the gas
  - Clear lung fields, normal heart size (upright chest technique)
  - Authentic erect frontal chest radiograph appearance
- **Avoid (negative prompt):** a normal gastric air bubble contiguous with the stomach on the left only (mistaken pseudo-pneumoperitoneum); colonic interposition (Chilaiditi) as the intended finding; a basal pneumonia or pleural effusion; a lobar consolidation; a supine film with no visible free-air crescent; a subdiaphragmatic abscess with an air-fluid level; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "pneumoperitoneum free air under diaphragm erect chest radiograph perforation"; Wikimedia Commons "pneumoperitoneum chest x-ray free air under diaphragm".

<!-- Added with Step 2 CK Batches 8-13, Step 3 Day 1 Batches 7-10, Step 3 Day 2 ACM Batches 5-8 -->

### s2ck-0178 - Idiopathic pulmonary fibrosis  (Step 2 CK - Internal Medicine)
- **Case context:** 65-year-old lifelong nonsmoker with one year of progressive exertional dyspnea, dry cough, fine dry bibasilar end-inspiratory crackles, and digital clubbing, no bird/mold/dust exposure and negative autoimmune serologies; the image is a high-resolution chest CT showing peripheral, subpleural, basal-predominant reticulation with honeycombing and traction bronchiectasis (usual interstitial pneumonia pattern).
- **Modality:** High-resolution CT (HRCT) of the chest, axial slice at the lung bases, lung window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial HIGH-RESOLUTION CT of the chest in diagnostic grayscale, lung window, anatomically accurate thoracic anatomy with sharp bronchovascular markings and realistic CT noise. Depict a USUAL INTERSTITIAL PNEUMONIA pattern of IDIOPATHIC PULMONARY FIBROSIS: PERIPHERAL, SUBPLEURAL, BASAL-PREDOMINANT reticulation with clustered HONEYCOMBING - stacked subpleural cystic air spaces with well-defined walls - and TRACTION BRONCHIECTASIS (irregularly dilated, distorted airways coursing through fibrotic lung). The abnormality is greatest in the posterior subpleural lung bases and spares the central and upper lung, producing an asymmetric peripheral gradient. Heart, mediastinum, and chest wall correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Peripheral, subpleural, basal-predominant reticulation
  - Honeycombing (clustered subpleural cysts with defined walls)
  - Traction bronchiectasis within fibrotic lung
  - Relative sparing of central and upper lung; authentic lung-window HRCT
- **Avoid (negative prompt):** upper-lobe or peribronchovascular predominance; diffuse ground-glass with mosaic air-trapping and centrilobular nodules (hypersensitivity pneumonitis) as the intended finding; bilateral hilar nodal masses (sarcoidosis); patchy consolidations; a soft-tissue window; a pleural effusion filling the bases; annotations or measurement calipers.
- **Real-image fallback:** Radiopaedia - search "usual interstitial pneumonia idiopathic pulmonary fibrosis HRCT honeycombing"; Wikimedia Commons "UIP pattern HRCT".

### s2ck-0179 - Wolff-Parkinson-White syndrome  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw the short PR interval with a slurred delta-wave QRS upstroke of pre-excitation. Strongly recommend a REAL de-identified WPW 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 22-year-old man with recurrent abrupt-onset self-terminating palpitations and one near-syncope, asymptomatic with a normal exam in clinic; the tracing must show sinus rhythm with a short PR interval and a slurred initial QRS upstroke (delta wave) of ventricular pre-excitation.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict WOLFF-PARKINSON-WHITE ventricular PRE-EXCITATION during SINUS rhythm: a SHORT PR INTERVAL (well under one large box) with each QRS beginning with a SLURRED, gently sloping initial upstroke - the DELTA WAVE - that blurs the normally sharp Q/R onset and produces a slightly WIDENED QRS. Secondary ST-segment and T-wave changes point opposite the delta/QRS. Upright P waves precede every beat at a regular rate; morphology consistent across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Short PR interval (pre-excited)
  - Slurred delta-wave upstroke at the start of the QRS
  - Mildly widened QRS with secondary ST/T changes
  - Sinus rhythm with a P before every QRS; standard pink ECG grid
- **Avoid (negative prompt):** a normal sharp narrow QRS with a normal PR interval; a wide bizarre monomorphic tachycardia as the intended finding; an irregularly irregular rhythm; ST-segment elevation of infarction; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "Wolff-Parkinson-White WPW ECG delta wave short PR"; Wikimedia Commons "WPW ECG delta wave". Prefer the app vector tracing.

### s2ck-0185 - Zenker diverticulum  (Step 2 CK - Surgery)
- **Case context:** 72-year-old man with months of difficulty initiating swallows, regurgitation of undigested food hours after eating, halitosis, a gurgling neck sensation, 3 kg weight loss, and nocturnal aspiration; the image is a barium esophagram showing a posterior outpouching at the pharyngoesophageal junction that retains contrast.
- **Modality:** Barium esophagram (contrast swallow), lateral projection, fluoroscopic grayscale.
- **Prompt:** Photorealistic lateral BARIUM ESOPHAGRAM (contrast swallow) in fluoroscopic grayscale with anatomically accurate pharynx, cervical spine, and cervical esophagus, barium column appearing dense white. Depict a ZENKER DIVERTICULUM: at the PHARYNGOESOPHAGEAL JUNCTION (just above the upper esophageal sphincter, at the level of the cricopharyngeus) a POSTERIOR out-pouching (false diverticulum) projects backward and downward and RETAINS a pool of barium, separate from and overhanging the cervical esophagus below. A horizontal cricopharyngeal bar may indent the barium column. The distal esophagus is normal caliber. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Posterior contrast-filled outpouching at the pharyngoesophageal junction
  - Retained barium pooling within the sac
  - Location above the upper esophageal sphincter (cervical level)
  - Authentic lateral barium esophagram appearance
- **Avoid (negative prompt):** a smooth bird-beak tapering at the gastroesophageal junction (achalasia) as the intended finding; a distal epiphrenic diverticulum near the diaphragm; a corkscrew esophagus (spasm); a lower-esophageal Schatzki ring; an intraluminal mass; an axial CT cross-section; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "Zenker diverticulum barium swallow pharyngoesophageal"; Wikimedia Commons "Zenker diverticulum barium".

### s2ck-0188 - Gallstone ileus  (Step 2 CK - Surgery)
- **Case context:** 75-year-old woman with recurrent biliary colic and two days of intermittent cramping pain, bilious vomiting, obstipation, a distended abdomen and high-pitched bowel sounds; the image is an abdominal radiograph showing dilated small-bowel loops with air-fluid levels, air in the biliary tree, and an ectopic calcified gallstone in the right lower quadrant (Rigler triad).
- **Modality:** Supine/upright abdominal radiograph (KUB), grayscale DICOM-like.
- **Prompt:** Photorealistic ABDOMINAL RADIOGRAPH of an older adult in grayscale with DICOM-like dynamic range and anatomically accurate bowel gas pattern. Depict GALLSTONE ILEUS with the RIGLER TRIAD: (1) multiple DILATED SMALL-BOWEL LOOPS centrally with a stepladder of AIR-FLUID LEVELS indicating mechanical small-bowel obstruction; (2) branching lucent gas in the right upper quadrant biliary tree (PNEUMOBILIA) outlining the intrahepatic ducts; and (3) an ECTOPIC ROUNDED CALCIFIED GALLSTONE with a laminated rim lodged in the RIGHT LOWER QUADRANT. Bony pelvis, lumbar spine, and psoas margins correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dilated small-bowel loops with air-fluid levels (obstruction)
  - Pneumobilia (branching gas in the biliary tree)
  - Ectopic calcified gallstone in the right lower quadrant
  - Authentic abdominal radiograph appearance
- **Avoid (negative prompt):** a single coffee-bean sigmoid/cecal loop (volvulus) as the intended finding; free subdiaphragmatic air (perforation); diffuse ground-glass ascites; a normal nonobstructed gas pattern; gas only in the portal veins reaching the liver periphery (portal venous gas) rather than central pneumobilia; a CT cross-section; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "gallstone ileus Rigler triad abdominal radiograph pneumobilia"; Wikimedia Commons "gallstone ileus x-ray".

### s2ck-0191 - Erythema infectiosum (fifth disease)  (Step 2 CK - Pediatrics)
- **Case context:** 6-year-old well-appearing playful girl who had a few days of low-grade fever and coryza that resolved, now with bright red cheeks; the image is a child with confluent erythema of both cheeks sparing the nasal bridge (slapped-cheek) and a lacy reticular rash on the extensor arms.
- **Modality:** Clinical photograph of a child (face and arm), realistic dermatologic clinical photography.
- **Prompt:** Photorealistic clinical photograph of a well-appearing young child in natural clinic lighting, accurate skin tones and pediatric facial proportions. Depict ERYTHEMA INFECTIOSUM (fifth disease): both CHEEKS show confluent, firm, bright-red erythema with a clear demarcated edge - the SLAPPED-CHEEK appearance - that conspicuously SPARES the nasal bridge, the perioral skin (circumoral pallor), and the periorbital region. On the EXTENSOR surfaces of the arms there is a pink, LACY, RETICULAR (net-like, reticulate) macular rash. The child looks nontoxic and comfortable with no respiratory distress. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bright confluent erythema of both cheeks (slapped cheek)
  - Sparing of the nasal bridge and perioral skin (circumoral pallor)
  - Lacy reticular rash on the extensor arms
  - Well, nontoxic child in a realistic clinical photo
- **Avoid (negative prompt):** a butterfly malar rash crossing the nasal bridge (lupus); confluent morbilliform rash with Koplik spots and a toxic child (measles); a sandpaper rash with perioral pallor plus strawberry tongue (scarlet fever); vesicles or crusts; facial edema/angioedema; an adult face.
- **Real-image fallback:** DermNet NZ "erythema infectiosum slapped cheek fifth disease"; CDC PHIL "erythema infectiosum parvovirus B19 rash"; Wikimedia Commons "fifth disease slapped cheek".

### s2ck-0201 - Chronic aortic regurgitation  (Step 2 CK - Internal Medicine)
- **Case context:** 54-year-old man with a year of exertional dyspnea, bounding rapidly-collapsing pulses, a soft high-pitched early diastolic murmur at the left sternal border on leaning forward, wide pulse pressure (158/48), and a diffuse laterally displaced apex; the image is a transthoracic echocardiogram parasternal long-axis view showing a dilated left ventricle with a diastolic color-Doppler regurgitant jet directed into the LV outflow tract.
- **Modality:** Transthoracic echocardiogram, parasternal long-axis view with color Doppler, grayscale sector with a color box (DICOM-like).
- **Prompt:** Photorealistic TRANSTHORACIC ECHOCARDIOGRAM in the PARASTERNAL LONG-AXIS view, diagnostic grayscale sector with realistic speckle texture and a superimposed color-Doppler box, DICOM-like appearance. Depict CHRONIC AORTIC REGURGITATION: a DILATED, rounded LEFT VENTRICLE with the aortic valve and LV outflow tract in view, and during DIASTOLE a broad mosaic color-Doppler REGURGITANT JET originating at the aortic valve and directed BACKWARD into the LV OUTFLOW TRACT toward the anterior mitral leaflet. The left atrium, aortic root, and interventricular septum are correctly rendered; the mitral valve is open in diastole. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Parasternal long-axis orientation with a dilated left ventricle
  - Diastolic color-Doppler regurgitant jet into the LV outflow tract from the aortic valve
  - Aortic root and left atrium correctly positioned
  - Authentic grayscale echocardiogram with a color-Doppler box
- **Avoid (negative prompt):** a systolic jet from the mitral valve into the left atrium (mitral regurgitation) as the intended finding; a turbulent forward jet across a stenotic aortic valve; a thickened doming mitral valve with a large left atrium (mitral stenosis); a pericardial effusion as the dominant feature; a CT/MRI cross-section; annotations or calipers.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "aortic regurgitation parasternal long axis color Doppler echocardiogram"; Wikimedia Commons "aortic regurgitation echocardiography".

### s2ck-0202 - Digoxin toxicity  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw a regularized rhythm with frequent ventricular ectopy and the scooped (Salvador Dali sagging) ST segments of digoxin effect. Strongly recommend a REAL de-identified digoxin-toxicity rhythm strip (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 78-year-old woman with heart failure and atrial fibrillation on digoxin and furosemide who started an ACE inhibitor, now with nausea, anorexia, yellow-green halos, bradycardia (44), potassium 5.9 and rising creatinine; the tracing must show a regularized ventricular rhythm with frequent premature ventricular complexes and scooped down-sloping ST segments.
- **Modality:** ECG rhythm strip (single/multi-lead) on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines and a clean black waveform trace. Depict DIGOXIN TOXICITY in a patient with underlying atrial fibrillation: a SLOW, REGULARIZED ventricular rhythm (the R-R intervals have become regular despite absent organized P waves - a fibrillatory baseline that is now regularized) interrupted by FREQUENT PREMATURE VENTRICULAR COMPLEXES (wide, early, bizarre ectopic beats). Throughout, the ST segments show the characteristic DOWNSLOPING, SCOOPED (sagging, reverse-tick / Salvador Dali mustache) morphology of digoxin effect with flattened T waves. Physiologically consistent, evenly spaced baseline complexes. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Slow, regularized ventricular rhythm on a fibrillatory baseline (regular R-R, no organized P waves)
  - Frequent wide premature ventricular complexes
  - Scooped/sagging downsloping ST segments (reverse-tick digoxin effect)
  - Standard pink ECG grid
- **Avoid (negative prompt):** a normal upright ST segment; ST-segment elevation of an acute myocardial infarction; a fast irregularly irregular rate as the dominant feature; a delta wave/short PR; tall tented T waves as the intended finding; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "digoxin toxicity ECG regularized AF PVCs scooped ST"; Wikimedia Commons "digoxin effect ECG". Prefer the app vector tracing.

### s2ck-0211 - Epidural hematoma  (Step 2 CK - Surgery)
- **Case context:** 19-year-old man who struck his temple in a bicycle fall with a brief loss of consciousness, a lucid interval of about an hour, then rapid drowsiness and a dilated sluggish right pupil, with temporal tenderness; the image is a noncontrast head CT showing a biconvex lens-shaped hyperdense extra-axial collection over the right temporal convexity that does not cross suture lines.
- **Modality:** Noncontrast head CT, axial slice, brain window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial NONCONTRAST HEAD CT in diagnostic grayscale, brain window, anatomically accurate cranial and brain anatomy with realistic CT noise and a rendered skull. Depict an acute EPIDURAL HEMATOMA: a BICONVEX, LENS-SHAPED (lentiform) HYPERDENSE (bright white, acute blood) extra-axial collection hugging the inner table of the skull over the RIGHT TEMPORAL convexity, its margins bulging inward and sharply confined - it DOES NOT cross the cranial suture lines. There is local MASS EFFECT: effacement of adjacent sulci, compression of the ipsilateral lateral ventricle, and slight MIDLINE SHIFT away from the clot. A subtle overlying temporal skull fracture may be present. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Biconvex (lens-shaped) hyperdense extra-axial collection
  - Collection confined by sutures (does not cross suture lines)
  - Mass effect with sulcal effacement and midline shift
  - Authentic noncontrast head CT, brain window
- **Avoid (negative prompt):** a crescent-shaped collection that spreads along the convexity and crosses sutures (subdural hematoma) as the intended finding; hyperdense blood filling the basal cisterns/sulci (subarachnoid hemorrhage); an intraparenchymal hematoma; hypodense wedge infarct; a normal symmetric brain; a bone-window-only image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "epidural hematoma CT biconvex lens-shaped"; Wikimedia Commons "epidural hematoma CT".

### s2ck-0214 - Transposition of the great arteries  (Step 2 CK - Pediatrics)
- **Case context:** Term newborn deeply cyanotic within hours of life, cyanosis not improving with supplemental oxygen, no murmur, a loud single S2, worsening as the ductus closes; the image is a chest radiograph showing a narrow superior mediastinum with an oval cardiac silhouette (egg on a string).
- **Modality:** Frontal (AP) neonatal CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal (AP) NEONATAL CHEST RADIOGRAPH in grayscale with DICOM-like dynamic range and anatomically accurate small-infant thoracic anatomy. Depict TRANSPOSITION OF THE GREAT ARTERIES: an OVAL / EGG-SHAPED cardiac silhouette (the EGG) sitting on a NARROW SUPERIOR MEDIASTINUM (the STRING) because the great vessels lie anteroposteriorly stacked and the thymus is small - the classic EGG-ON-A-STRING contour. Pulmonary vascular markings are mildly increased. The ribs, clavicles, and diaphragm of a neonate are correctly rendered, with an umbilical or endotracheal line optionally faint. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Oval / egg-shaped cardiac silhouette
  - Narrow superior mediastinum (the string)
  - Neonatal chest proportions with mildly increased pulmonary vascularity
  - Authentic frontal neonatal chest radiograph appearance
- **Avoid (negative prompt):** a boot-shaped heart with an upturned apex and a concave pulmonary segment (tetralogy of Fallot) as the intended finding; a snowman/figure-of-8 supracardiac silhouette (TAPVR); a massively enlarged box-shaped heart (Ebstein); a normal-shaped heart; adult chest proportions; a lobar pneumonia; annotations or tubes dominating the frame.
- **Real-image fallback:** Radiopaedia - search "transposition great arteries egg on a string chest radiograph"; Wikimedia Commons "transposition great arteries egg on string".

### s2ck-0217 - Retinoblastoma  (Step 2 CK - Pediatrics)
- **Case context:** 18-month-old girl with leukocoria of the left eye noted on photographs, a new intermittent inward deviation of that eye, no pain or redness, and a family history of a maternal uncle who lost an eye in childhood; the image is a fundus photograph showing a creamy-white elevated retinal mass with overlying feeder vessels.
- **Modality:** Dilated FUNDUS (retinal) photograph, color fundus camera image.
- **Prompt:** Photorealistic COLOR FUNDUS PHOTOGRAPH of a young child's retina through a dilated pupil, circular fundus-camera field with the characteristic orange-red retinal background, accurate ophthalmoscopic detail. Depict RETINOBLASTOMA: a solitary CREAMY-WHITE to pink-white, ELEVATED, dome-shaped RETINAL MASS projecting from the retinal surface, with DILATED TORTUOUS FEEDER (retinal) VESSELS coursing over and into the tumor. Fine chalky-white intratumoral CALCIFICATION flecks may speckle the surface. The adjacent retina, a normal-appearing optic disc, and background choroidal pattern are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Creamy-white elevated retinal mass
  - Dilated feeder vessels over the tumor
  - Chalky intratumoral calcification flecks
  - Authentic circular color fundus photograph on an orange-red background
- **Avoid (negative prompt):** a pale retina with a cherry-red macular spot (central retinal artery occlusion) as the intended finding; a cupped optic disc (glaucoma); dot-blot hemorrhages and exudates (diabetic retinopathy); a flame-hemorrhage blood-and-thunder fundus (vein occlusion); a corneal/anterior-segment external eye photo; a normal fundus; annotations or calipers.
- **Real-image fallback:** Radiopaedia / American Academy of Ophthalmology image library - search "retinoblastoma fundus photograph"; Wikimedia Commons "retinoblastoma fundus".

### s2ck-0219 - Trichomoniasis  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 29-year-old woman with a week of copious frothy yellow-green malodorous discharge, vulvar itching, dyspareunia, a strawberry cervix with punctate hemorrhages, and vaginal pH 6.0; the image is a saline wet-mount microscopy showing motile flagellated pear-shaped protozoa among epithelial cells and neutrophils.
- **Modality:** Saline wet-mount light microscopy, high-power brightfield photomicrograph.
- **Prompt:** Photorealistic high-power BRIGHTFIELD LIGHT-MICROSCOPY photomicrograph of a SALINE WET-MOUNT vaginal preparation, faint gray-green unstained background with realistic depth of field. Depict TRICHOMONIASIS: several PEAR-SHAPED (ovoid) PROTOZOAL organisms slightly larger than adjacent white cells, each with anterior FLAGELLA and an undulating membrane suggesting motility, scattered among mature squamous EPITHELIAL cells and numerous NEUTROPHILS. The trichomonads are distinct from the surrounding cells, with a visible flagellar tuft at one pole. Realistic wet-mount clarity with a few background debris and bacteria. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Pear-shaped/ovoid protozoa with anterior flagella (trichomonads)
  - Organisms slightly larger than the accompanying neutrophils
  - Background squamous epithelial cells and many neutrophils
  - Authentic unstained saline wet-mount brightfield appearance
- **Avoid (negative prompt):** squamous cells studded with adherent coccobacilli obscuring their borders (clue cells / bacterial vaginosis) as the intended finding; branching septate hyphae and budding yeast (candida); Gram-stained purple diplococci; a Pap-stained cytology slide; an H&E tissue section; blood cells only with no protozoa; annotations or calipers.
- **Real-image fallback:** CDC PHIL / DPDx - search "Trichomonas vaginalis wet mount trophozoite"; PathologyOutlines "Trichomonas"; Wikimedia Commons "Trichomonas vaginalis wet mount".

### s2ck-0226 - Vasospastic (Prinzmetal) angina  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw transient territory-specific ST-segment elevation that normalizes. Strongly recommend a REAL de-identified vasospastic-angina 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 45-year-old woman smoker with weeks of rest chest pressure that wakes her in the early morning and resolves in minutes, excellent exercise tolerance, negative troponins, and ST changes that resolve after nitroglycerin; the tracing must show transient ST-segment elevation in the inferior leads during pain that normalizes when the pain resolves.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict VASOSPASTIC (PRINZMETAL) ANGINA captured during chest pain: transient ST-SEGMENT ELEVATION in the INFERIOR leads (II, III, aVF) with the elevated ST segments appearing upsloping/coved in that territory, with subtle RECIPROCAL ST depression in the lateral leads (I, aVL). The rhythm is normal SINUS with narrow QRS complexes and no pathologic Q waves - the pattern would completely normalize once vasospasm resolves. Physiologically consistent, evenly spaced beats with matching morphology across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Transient ST-segment elevation localized to the inferior leads (II, III, aVF)
  - Reciprocal ST depression in the lateral leads
  - Sinus rhythm with narrow QRS and NO established pathologic Q waves
  - Standard pink ECG grid
- **Avoid (negative prompt):** diffuse concave ST elevation across all leads with PR depression (pericarditis) as the intended finding; established deep Q waves of a completed infarct; diffuse ST depression; a wide-complex tachycardia; a normal flat baseline with no ST shift; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "coronary vasospasm Prinzmetal variant angina ST elevation ECG"; Wikimedia Commons "Prinzmetal angina ECG". Prefer the app vector tracing.

### s2ck-0230 - Autosomal dominant polycystic kidney disease  (Step 2 CK - Internal Medicine)
- **Case context:** 42-year-old man with new hypertension, intermittent flank pain, an episode of gross hematuria, palpable bilateral flank masses, a father and paternal aunt on dialysis, and a cousin who died of a ruptured brain aneurysm; the image is an abdominal CT showing markedly enlarged kidneys bilaterally replaced by innumerable cysts of varying size, with several cysts also in the liver.
- **Modality:** Contrast-enhanced CT of the abdomen, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen in diagnostic grayscale, soft-tissue window, radiologically accurate anatomy with contrast-opacified vessels and realistic CT noise. Depict AUTOSOMAL DOMINANT POLYCYSTIC KIDNEY DISEASE: BOTH KIDNEYS are MARKEDLY ENLARGED and almost entirely REPLACED by INNUMERABLE well-defined ROUNDED CYSTS of widely VARYING SIZE (thin-walled, water-density/hypodense), distorting the renal contours bilaterally with little remaining normal parenchyma. Scattered similar CYSTS are also present in the LIVER. The spleen, aorta, bowel, and vertebral body are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Both kidneys massively enlarged and replaced by innumerable cysts of varying size
  - Bilateral, roughly symmetric involvement
  - Associated hepatic cysts
  - Contrast-enhanced axial abdominal CT appearance
- **Avoid (negative prompt):** a single dominant renal cyst or a solid enhancing renal mass (RCC) as the intended finding; a few simple cysts in otherwise normal-sized kidneys; hydronephrosis with a dilated collecting system; unilateral involvement only; a normal kidney; a noncontrast or lung-window image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "autosomal dominant polycystic kidney disease CT bilateral renal cysts hepatic cysts"; Wikimedia Commons "ADPKD CT".

### s2ck-0231 - Reactivation pulmonary tuberculosis  (Step 2 CK - Internal Medicine)
- **Case context:** 54-year-old man from a high-prevalence region with 6 weeks of productive cough now blood-streaked, drenching night sweats, low-grade fevers, and 6 kg weight loss, placed in a negative-pressure room; the image is a chest radiograph showing a right upper lobe cavitary infiltrate with surrounding fibronodular opacities.
- **Modality:** Frontal (PA) CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal (PA) CHEST RADIOGRAPH of an adult in grayscale with DICOM-like dynamic range and anatomically accurate thoracic anatomy. Depict REACTIVATION PULMONARY TUBERCULOSIS: in the RIGHT UPPER LOBE (apical/posterior segment) a THICK-WALLED CAVITY - an area of lucency surrounded by a dense irregular wall - with SURROUNDING FIBRONODULAR OPACITIES and patchy consolidation, plus some volume loss elevating the hilum. The remaining lung is relatively clear, the cardiac silhouette is normal, and the ribs, clavicles, and diaphragm are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Upper-lobe cavitary lesion (thick-walled lucency)
  - Surrounding fibronodular opacities / patchy consolidation
  - Upper-zone predominance with some volume loss
  - Authentic frontal chest radiograph appearance
- **Avoid (negative prompt):** symmetric bilateral hilar adenopathy with clear lungs (sarcoidosis) as the intended finding; a basal-predominant consolidation (typical pneumonia); a peripheral solitary spiculated nodule; bilateral perihilar bat-wing edema; a large pleural effusion filling the hemithorax; a normal chest; a CT cross-section; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "reactivation pulmonary tuberculosis upper lobe cavity chest radiograph"; Wikimedia Commons "pulmonary tuberculosis cavitary x-ray".

### s2ck-0232 - Ankylosing spondylitis  (Step 2 CK - Internal Medicine)
- **Case context:** 26-year-old man with more than 6 months of inflammatory low back and buttock pain (morning stiffness over an hour, better with exercise, worse with rest, alternating buttock pain, night waking), reduced lumbar flexion and decreased chest expansion; the image is an AP pelvic radiograph showing bilateral sacroiliac joint erosions with sclerosis and partial joint-space fusion.
- **Modality:** Anteroposterior (AP) PELVIS RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic ANTEROPOSTERIOR (AP) PELVIS RADIOGRAPH of a young adult in grayscale with DICOM-like dynamic range and anatomically accurate bony pelvis, both hips, and sacroiliac joints. Depict SACROILIITIS of ANKYLOSING SPONDYLITIS: BILATERAL, roughly SYMMETRIC sacroiliac joint changes - irregular subchondral EROSIONS giving a blurred pseudo-widened joint margin, adjacent reactive SCLEROSIS on both iliac and sacral sides, and PARTIAL JOINT-SPACE NARROWING with early BONY FUSION (ankylosis) bridging the joints. The hips, pubic symphysis, and lumbosacral junction are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bilateral, symmetric sacroiliac joint involvement
  - Subchondral erosions with adjacent sclerosis
  - Partial joint-space narrowing and early bony fusion
  - Authentic AP pelvis radiograph appearance
- **Avoid (negative prompt):** a unilateral destructive septic sacroiliac joint as the intended finding; a displaced femoral neck or pubic ramus fracture; a normal pelvis with clean SI joints; isolated hip osteoarthritis; a lateral/frog-leg view; a CT/MRI cross-section; hardware, annotations, or calipers.
- **Real-image fallback:** Radiopaedia - search "ankylosing spondylitis bilateral sacroiliitis pelvis radiograph"; Wikimedia Commons "sacroiliitis ankylosing spondylitis x-ray".

### s2ck-0233 - Multiple sclerosis  (Step 2 CK - Internal Medicine)
- **Case context:** 28-year-old woman with prior painful monocular vision loss that recovered, now 2 weeks of right leg numbness and weakness with a Lhermitte sign and an internuclear ophthalmoplegia (right eye fails to adduct, left eye nystagmus on left gaze); the image is a brain MRI FLAIR showing multiple ovoid periventricular hyperintensities oriented perpendicular to the ventricles.
- **Modality:** Brain MRI, axial FLAIR sequence (DICOM-like grayscale).
- **Prompt:** Photorealistic axial BRAIN MRI, FLAIR sequence, in diagnostic grayscale with suppressed (dark) cerebrospinal fluid, anatomically accurate cerebral anatomy and gray-white differentiation. Depict MULTIPLE SCLEROSIS: MULTIPLE discrete OVOID HYPERINTENSE (bright) white-matter lesions clustered in the PERIVENTRICULAR region, several oriented PERPENDICULAR to the lateral ventricles radiating outward (Dawson fingers), with additional smaller juxtacortical lesions. The lesions are well-demarcated against dark suppressed CSF and normal cortex; ventricles, corpus callosum, and skull are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multiple ovoid periventricular hyperintense white-matter lesions
  - Perpendicular orientation to the ventricles (Dawson fingers)
  - FLAIR contrast with dark suppressed CSF
  - Authentic axial brain MRI appearance
- **Avoid (negative prompt):** a single large ring-enhancing mass with edema (abscess/tumor) as the intended finding; confluent symmetric periventricular white-matter change of chronic small-vessel disease only; a wedge-shaped cortical infarct; hyperdense acute blood; a bright-CSF T2 image miscolored; a normal brain; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "multiple sclerosis Dawson fingers periventricular FLAIR MRI"; Wikimedia Commons "multiple sclerosis MRI Dawson fingers".

### s2ck-0236 - Anterior shoulder dislocation  (Step 2 CK - Surgery)
- **Case context:** 22-year-old man who fell on an outstretched arm during a rugby tackle, now holding the right arm slightly abducted and externally rotated, with loss of the rounded deltoid contour, a prominent acromion, and anterior fullness; the image is an AP shoulder radiograph showing the humeral head displaced anteriorly and inferiorly, lying beneath the coracoid process.
- **Modality:** Anteroposterior (AP) SHOULDER RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic ANTEROPOSTERIOR (AP) SHOULDER RADIOGRAPH of a young adult in grayscale with DICOM-like dynamic range and anatomically accurate glenohumeral, scapular, and clavicular anatomy. Depict an ANTERIOR SHOULDER DISLOCATION: the HUMERAL HEAD is displaced ANTERIORLY and INFERIORLY out of the glenoid fossa and lies in a SUBCORACOID position (below and medial, beneath the coracoid process), so the glenoid articular surface is empty and the humeral head no longer overlaps the glenoid normally. The acromion, clavicle, scapular body, and ribs are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Humeral head displaced anteriorly and inferiorly (subcoracoid)
  - Empty glenoid fossa with loss of normal glenohumeral overlap
  - Intact clavicle, acromion, and scapula
  - Authentic AP shoulder radiograph appearance
- **Avoid (negative prompt):** a posterior dislocation with a light-bulb humeral head and preserved articular overlap as the intended finding; an acromioclavicular joint separation with a raised clavicle; a proximal humerus or clavicle fracture as the dominant finding; a normal congruent joint; a scapular Y or axillary view; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "anterior shoulder dislocation subcoracoid radiograph"; Wikimedia Commons "anterior shoulder dislocation x-ray".

### s2ck-0238 - Cutaneous melanoma  (Step 2 CK - Surgery)
- **Case context:** 55-year-old fair-skinned man with childhood blistering sunburns and a back mole that has enlarged, darkened, itched, and bled once, now about 9 mm, asymmetric, with an irregular notched border and brown/black/tan pigmentation; the image is a dermoscopic photograph of a pigmented lesion with asymmetry, irregular borders, and multiple colors.
- **Modality:** Dermoscopy (dermatoscopic) photograph of a pigmented skin lesion, high-magnification polarized clinical image.
- **Prompt:** Photorealistic DERMOSCOPIC (dermatoscopic) photograph of a pigmented skin lesion at high magnification with polarized-light clarity and accurate skin texture around the lesion. Depict a CUTANEOUS MELANOMA: an ASYMMETRIC pigmented lesion roughly 9 mm across with an IRREGULAR, NOTCHED, poorly-defined BORDER and a strikingly VARIEGATED COLOR palette - admixed BROWN, jet-BLACK, and TAN zones with an off-center darker blotch. Dermoscopic features include an ATYPICAL PIGMENT NETWORK with thickened irregular lines, irregular streaks/pseudopods at the periphery, and blue-gray regression areas. Surrounding skin shows realistic follicular openings. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Asymmetric lesion with an irregular, notched border
  - Multiple colors (brown, black, tan) with an eccentric dark blotch
  - Atypical/irregular pigment network and peripheral streaks
  - Authentic high-magnification dermoscopic appearance
- **Avoid (negative prompt):** a symmetric uniformly tan lesion with a regular network (benign nevus) as the intended finding; a pearly telangiectatic papule (basal cell carcinoma); a stuck-on waxy plaque with pseudocysts (seborrheic keratosis); a cherry-red vascular papule; a wide-field whole-body photo; a histology slide; annotations or calipers.
- **Real-image fallback:** DermNet NZ "melanoma dermoscopy"; Wikimedia Commons "melanoma dermoscopy ABCD"; International Skin Imaging Collaboration (ISIC) archive.

### s2ck-0241 - Intestinal malrotation with midgut volvulus  (Step 2 CK - Pediatrics)
- **Case context:** Previously well 5-day-old term neonate with sudden forceful bilious (green) vomiting, irritability then lethargy, a distending tender abdomen, trace rectal blood, tachycardia and mottling; the image is an upper GI contrast study showing the duodenum failing to cross the midline with a corkscrew configuration of contrast in the proximal jejunum.
- **Modality:** Upper GI (UGI) contrast fluoroscopy study, frontal projection, neonatal (grayscale).
- **Prompt:** Photorealistic frontal UPPER GI CONTRAST FLUOROSCOPY study of a neonate in grayscale, dense white swallowed contrast outlining the stomach and proximal small bowel, DICOM-like fluoroscopic appearance. Depict INTESTINAL MALROTATION with MIDGUT VOLVULUS: the DUODENUM fails to cross to the left of the midline and the duodenojejunal junction lies abnormally LOW and to the RIGHT of the spine; the proximal jejunum spirals in a tight CORKSCREW / spiral configuration of contrast as it twists, with tapering of the contrast column (beak) at the point of obstruction. The stomach is normally positioned and the neonatal bony thorax and pelvis are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Duodenum failing to cross the midline (duodenojejunal junction low and right)
  - Corkscrew / spiral twist of proximal jejunal contrast
  - Tapering beak at the point of obstruction
  - Authentic neonatal upper GI contrast study appearance
- **Avoid (negative prompt):** a smooth bird-beak at the gastroesophageal junction (achalasia) as the intended finding; a double-bubble with no distal gas (duodenal atresia) as the intended finding; a distal colonic transition zone (Hirschsprung); normal C-loop duodenum crossing to the left; a plain radiograph with no contrast; a CT cross-section; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "midgut volvulus malrotation corkscrew upper GI series"; Wikimedia Commons "midgut volvulus corkscrew".

### s2ck-0242 - Neuroblastoma  (Step 2 CK - Pediatrics)
- **Case context:** 2-year-old girl with irritability, poor appetite, a firm irregular abdominal mass crossing the midline, periorbital ecchymoses (raccoon eyes), opsoclonus-myoclonus (dancing eyes), elevated blood pressure, and raised urinary catecholamine metabolites; the image is an abdominal CT showing a heterogeneous suprarenal mass with speckled calcifications that crosses the midline and encases the aorta.
- **Modality:** Contrast-enhanced CT of the abdomen, axial slice, soft-tissue window (DICOM grayscale), pediatric.
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of a young child's abdomen in diagnostic grayscale, soft-tissue window, anatomically accurate pediatric anatomy with contrast-opacified vessels and realistic CT noise. Depict a NEUROBLASTOMA: a large, HETEROGENEOUS SUPRARENAL (adrenal) soft-tissue MASS with coarse SPECKLED/STIPPLED CALCIFICATIONS that CROSSES THE MIDLINE and ENCASES and ENGULFS the aorta and adjacent retroperitoneal vessels (vessels seen coursing through the mass rather than displaced). The mass DISPLACES the ipsilateral kidney inferolaterally without arising from within it. The contralateral kidney, liver, spine, and bowel are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Heterogeneous suprarenal mass with speckled calcifications
  - Mass crossing the midline and encasing the aorta/vessels
  - Kidney displaced (not arising from within the kidney)
  - Contrast-enhanced axial pediatric abdominal CT appearance
- **Avoid (negative prompt):** a mass arising from and expanding the kidney with a claw sign confined to one flank (Wilms tumor) as the intended finding; a purely cystic mass; hydronephrosis; bilateral cystic kidneys; a normal adrenal; a noncontrast or lung-window image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "neuroblastoma suprarenal mass calcification encasing aorta CT"; Wikimedia Commons "neuroblastoma CT".

### s2ck-0245 - Lichen sclerosus  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 62-year-old postmenopausal woman with months of vulvar itching and burning and dyspareunia, with porcelain-white atrophic wrinkled plaques on the labia and perianal skin in a figure-of-eight pattern, thinned easily-fissured skin, and loss of normal architecture, no discharge; the image is a vulvar photograph showing porcelain-white atrophic plaques encircling the vulva and anus in a figure-of-eight pattern.
- **Modality:** Clinical vulvar (anogenital) photograph, dermatologic clinical photography.
- **Prompt:** Photorealistic clinical ANOGENITAL (vulvar) photograph in a clinical examination setting, accurate skin tones and anatomy, tasteful medical framing. Depict LICHEN SCLEROSUS: PORCELAIN-WHITE, IVORY, atrophic, WRINKLED (cigarette-paper) thinned PLAQUES involving the labia minora and majora and extending around the perianal skin in a FIGURE-OF-EIGHT (hourglass) distribution encircling both the vulva and the anus. The skin shows loss of normal architecture with resorption/effacement of the labia minora, waxy sclerotic sheen, and small areas of fissuring and ecchymosis. No vaginal discharge. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Porcelain-white atrophic wrinkled plaques of the vulva
  - Figure-of-eight distribution around vulva and anus
  - Architectural loss (effaced labia minora) with fissuring
  - Authentic clinical vulvar photograph
- **Avoid (negative prompt):** an exophytic ulcerated vulvar carcinoma mass as the intended finding; thick discharge with erythema (candida/vaginitis); a solitary pigmented lesion; condyloma cauliflower warts; violaceous flat-topped papules with Wickham striae (lichen planus) as the intended finding; a normal vulva; annotations or calipers.
- **Real-image fallback:** DermNet NZ "vulval lichen sclerosus figure of eight"; Wikimedia Commons "lichen sclerosus vulva".

### s2ck-0251 - Cardiac tamponade  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw low-voltage complexes with beat-to-beat electrical alternans. Strongly recommend a REAL de-identified electrical-alternans 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 58-year-old man with metastatic lung cancer, progressive dyspnea and lightheadedness, tachycardia, hypotension, distended neck veins, muffled heart sounds, an 18 mm Hg inspiratory systolic fall (pulsus paradoxus), and echo showing a large circumferential effusion with right atrial/ventricular diastolic collapse; the tracing must show sinus tachycardia with low QRS voltage and beat-to-beat alternation of QRS amplitude (electrical alternans).
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict CARDIAC TAMPONADE physiology: SINUS TACHYCARDIA at a fast regular rate with diffusely LOW-VOLTAGE QRS complexes (small amplitude across all leads), and unmistakable ELECTRICAL ALTERNANS - the QRS AMPLITUDE alternates up-down-up-down in a regular BEAT-TO-BEAT pattern (tall complex, then short complex, repeating) as the heart swings within the effusion. P waves precede each QRS; morphology otherwise consistent across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Sinus tachycardia (fast regular rate)
  - Diffusely low-voltage QRS complexes
  - Beat-to-beat QRS-amplitude alternation (electrical alternans)
  - Standard pink ECG grid
- **Avoid (negative prompt):** tall high-voltage LVH complexes; diffuse concave ST elevation with PR depression as the intended finding; ST-segment elevation of infarction; a chaotic irregularly irregular rhythm; a normal constant QRS amplitude; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "electrical alternans cardiac tamponade low voltage ECG"; Wikimedia Commons "electrical alternans ECG". Prefer the app vector tracing.

### s2ck-0252 - Acute respiratory distress syndrome  (Step 2 CK - Internal Medicine)
- **Case context:** 49-year-old man with severe acute pancreatitis who on hospital day 2 develops rapidly worsening hypoxemia requiring intubation, with a PaO2/FiO2 of 76 despite FiO2 0.9, normal jugular venous pressure, and normal biventricular function with no elevated filling pressures; the image is a portable chest radiograph showing new bilateral diffuse alveolar opacities sparing the costophrenic angles with a normal cardiac silhouette.
- **Modality:** Portable (AP) CHEST RADIOGRAPH, grayscale DICOM-like, intubated patient.
- **Prompt:** Photorealistic portable ANTEROPOSTERIOR (AP) CHEST RADIOGRAPH of an intubated adult in grayscale with DICOM-like dynamic range and anatomically accurate thoracic anatomy. Depict ACUTE RESPIRATORY DISTRESS SYNDROME: NEW, BILATERAL, DIFFUSE, symmetric ALVEOLAR (airspace) OPACITIES - hazy confluent ground-glass and consolidative shadowing filling both mid and lower lung zones with air bronchograms - that relatively SPARE the extreme COSTOPHRENIC ANGLES. The CARDIAC SILHOUETTE is NORMAL in size (no cardiomegaly) with no vascular redistribution or pleural effusions. An endotracheal tube sits in the mid-trachea. Ribs and soft tissues correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bilateral diffuse alveolar opacities with air bronchograms
  - Normal cardiac silhouette (non-cardiogenic pattern)
  - Relative sparing of the costophrenic angles; no large effusions
  - Portable AP chest radiograph with an endotracheal tube
- **Avoid (negative prompt):** an enlarged heart with cephalization, Kerley B lines, and pleural effusions (cardiogenic edema) as the intended finding; a single lobar consolidation; a unilateral hyperlucent pneumothorax; symmetric bilateral hilar adenopathy; a normal clear chest; a CT cross-section; annotations without the tube context.
- **Real-image fallback:** Radiopaedia - search "acute respiratory distress syndrome ARDS chest radiograph bilateral opacities"; Wikimedia Commons "ARDS chest x-ray".

### s2ck-0253 - Achalasia  (Step 2 CK - Internal Medicine)
- **Case context:** 46-year-old woman with 8 months of dysphagia to solids AND liquids, regurgitation of undigested food, nocturnal cough, 6 kg weight loss, endoscopy showing retained food with a scope that pops through, and manometry showing aperistalsis with a non-relaxing LES; the image is a barium esophagram showing a dilated esophagus tapering to a smooth bird-beak narrowing at the gastroesophageal junction.
- **Modality:** Barium esophagram (contrast swallow), upright frontal projection, fluoroscopic grayscale.
- **Prompt:** Photorealistic upright frontal BARIUM ESOPHAGRAM (contrast swallow) in fluoroscopic grayscale with anatomically accurate thoracic esophageal course, dense white barium column. Depict ACHALASIA: a DILATED, dilated-and-tortuous thoracic ESOPHAGEAL BODY holding a column of barium (sometimes with a retained food/air-fluid level at the top) that TAPERS SMOOTHLY and symmetrically to a narrow point at the GASTROESOPHAGEAL JUNCTION - the classic BIRD-BEAK narrowing - with little barium passing into the stomach. The narrowing is smooth and symmetric without a shouldered mass. Spine, diaphragm, and gastric bubble correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dilated esophageal body proximal to the narrowing
  - Smooth, symmetric bird-beak taper at the gastroesophageal junction
  - Hold-up of barium with delayed emptying
  - Authentic upright barium esophagram appearance
- **Avoid (negative prompt):** an irregular shouldered stricture with mucosal destruction (carcinoma) as the intended finding; a posterior cervical outpouching (Zenker) as the intended finding; a corkscrew multiple-contraction esophagus (spasm); a lower-esophageal ring/web; a normal thin esophagus; an axial CT; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "achalasia barium swallow bird beak dilated esophagus"; Wikimedia Commons "achalasia bird beak barium".

### s2ck-0257 - Rheumatoid arthritis  (Step 2 CK - Internal Medicine)
- **Case context:** 44-year-old woman with 4 months of symmetric small-joint pain and swelling of hands and wrists, over an hour of morning stiffness, warm boggy MCP and PIP joints with DIP sparing, and positive anti-CCP and rheumatoid factor; the image is a radiograph of both hands showing symmetric periarticular osteopenia and marginal bony erosions at the MCP and PIP joints.
- **Modality:** Posteroanterior (PA) radiograph of BOTH HANDS, grayscale DICOM-like.
- **Prompt:** Photorealistic POSTEROANTERIOR (PA) RADIOGRAPH of BOTH HANDS AND WRISTS side by side in grayscale with DICOM-like dynamic range and anatomically accurate carpal, metacarpal, and phalangeal anatomy. Depict RHEUMATOID ARTHRITIS: SYMMETRIC, bilateral involvement of the METACARPOPHALANGEAL (MCP) and PROXIMAL INTERPHALANGEAL (PIP) joints with PERIARTICULAR OSTEOPENIA (locally washed-out bone around the joints), symmetric JOINT-SPACE NARROWING, and MARGINAL BONY EROSIONS at the joint edges (bare-area erosions) with some early ulnar drift; the DISTAL INTERPHALANGEAL (DIP) joints are relatively SPARED. Soft-tissue fusiform swelling around involved joints. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Symmetric bilateral MCP and PIP involvement with DIP sparing
  - Periarticular osteopenia and symmetric joint-space narrowing
  - Marginal (bare-area) bony erosions
  - Authentic PA radiograph of both hands
- **Avoid (negative prompt):** DIP-predominant disease with bony osteophytes and gull-wing erosions (osteoarthritis/erosive OA) as the intended finding; a pencil-in-cup deformity (psoriatic arthritis); periarticular tophi with punched-out erosions and overhanging edges (gout); a chondrocalcinosis pattern; a single normal hand; a CT/MRI; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "rheumatoid arthritis hands radiograph marginal erosions periarticular osteopenia"; Wikimedia Commons "rheumatoid arthritis hand x-ray".

### s2ck-0258 - Aneurysmal subarachnoid hemorrhage  (Step 2 CK - Internal Medicine)
- **Case context:** 52-year-old woman with sudden worst-headache-of-life peaking within seconds while lifting, brief loss of consciousness, now neck stiffness, photophobia, vomiting, elevated blood pressure, somnolent but arousable with no focal motor deficit; the image is a noncontrast head CT showing hyperdense blood filling the basal cisterns and extending into the Sylvian fissures.
- **Modality:** Noncontrast head CT, axial slice, brain window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial NONCONTRAST HEAD CT in diagnostic grayscale, brain window, anatomically accurate cranial and brain anatomy with realistic CT noise and a rendered skull. Depict ANEURYSMAL SUBARACHNOID HEMORRHAGE: HYPERDENSE (bright white) acute BLOOD filling and casting the BASAL CISTERNS in a star-shaped configuration around the suprasellar region and midbrain, and extending into BOTH SYLVIAN FISSURES and the interhemispheric fissure, outlining the normally CSF-dark subarachnoid spaces in white. There may be mild early ventricular dilatation (hydrocephalus) with a little blood layering in the occipital horns. Brain parenchyma and skull correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Hyperdense acute blood filling the basal cisterns (star-shaped)
  - Blood extending into the Sylvian and interhemispheric fissures
  - Possible early hydrocephalus
  - Authentic noncontrast head CT, brain window
- **Avoid (negative prompt):** a biconvex or crescentic peripheral extra-axial collection (epidural/subdural) as the intended finding; a focal intraparenchymal hematoma; a hypodense wedge infarct; diffuse cerebral edema only with no blood; a normal symmetric brain with dark CSF spaces; a bone-window image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "aneurysmal subarachnoid hemorrhage CT basal cisterns"; Wikimedia Commons "subarachnoid hemorrhage CT".

### s2ck-0259 - Hodgkin lymphoma  (Step 2 CK - Internal Medicine)
- **Case context:** 26-year-old man with 6 weeks of an enlarging painless neck mass, drenching night sweats, fevers, 7 kg weight loss, pruritus, alcohol-induced nodal pain, firm rubbery cervical/supraclavicular nodes, and a biopsy showing Reed-Sternberg cells; the image is a chest radiograph showing a bulky anterior mediastinal mass widening the mediastinum.
- **Modality:** Frontal (PA) CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal (PA) CHEST RADIOGRAPH of a young adult in grayscale with DICOM-like dynamic range and anatomically accurate thoracic anatomy. Depict HODGKIN LYMPHOMA: a BULKY ANTERIOR/MIDDLE MEDIASTINAL MASS producing SMOOTH, LOBULATED WIDENING of the MEDIASTINUM, more to one side, with well-defined convex borders that silhouette the upper mediastinal contour and may splay the carina. The LUNG FIELDS are clear without focal consolidation, the cardiac silhouette is partly obscured by the superimposed nodal mass, and the ribs, clavicles, and diaphragm are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bulky lobulated anterior/middle mediastinal mass widening the mediastinum
  - Smooth convex well-defined borders
  - Clear lung fields (no consolidation)
  - Authentic frontal chest radiograph appearance
- **Avoid (negative prompt):** symmetric bilateral hilar adenopathy with clear lungs (sarcoidosis) as the intended finding; a peripheral spiculated lung nodule; a lobar pneumonia; an enlarged globular heart with effusions; a normal chest; a CT cross-section; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "Hodgkin lymphoma anterior mediastinal mass chest radiograph"; Wikimedia Commons "mediastinal mass lymphoma x-ray".

### s2ck-0260 - Scaphoid fracture  (Step 2 CK - Surgery)
- **Case context:** 20-year-old man who fell on an outstretched hand skateboarding, now with wrist pain, anatomic snuffbox tenderness, pain on thumb axial compression and resisted wrist extension, mild swelling, no deformity, normal neurovascular exam; the image is a posteroanterior wrist radiograph showing a lucent fracture line through the waist of the scaphoid.
- **Modality:** Posteroanterior (PA) WRIST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic POSTEROANTERIOR (PA) WRIST RADIOGRAPH of a young adult in grayscale with DICOM-like dynamic range and anatomically accurate carpal bones, distal radius/ulna, and metacarpal bases. Depict a SCAPHOID FRACTURE: a thin LUCENT FRACTURE LINE traversing the WAIST (midportion) of the SCAPHOID, with subtle cortical offset and slight fracture-line widening, the rest of the carpal alignment preserved. The scaphoid is highlighted in the radial (thumb-side) proximal carpal row; the lunate, triquetrum, capitate, and distal radius are correctly rendered with normal joint spaces. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Lucent fracture line through the scaphoid waist
  - Otherwise preserved carpal alignment
  - Correct carpal anatomy on a PA wrist view
  - Authentic wrist radiograph appearance
- **Avoid (negative prompt):** a dorsally angulated distal radius fracture (Colles) as the intended finding; a lunate/perilunate dislocation with disrupted carpal arcs; a metacarpal shaft fracture; a triquetral avulsion on a lateral view only; a normal wrist; a CT/MRI; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "scaphoid waist fracture wrist radiograph"; Wikimedia Commons "scaphoid fracture x-ray".

### s2ck-0261 - Cecal volvulus  (Step 2 CK - Surgery)
- **Case context:** 34-year-old woman with 1 day of severe colicky right-sided abdominal pain, progressive distension, nausea, obstipation, no prior surgery, a distended tympanitic abdomen with high-pitched bowel sounds and no peritoneal signs; the image is an abdominal radiograph showing a markedly dilated coffee-bean-shaped gas-filled loop projecting into the left upper quadrant with distended small-bowel loops.
- **Modality:** Supine/upright abdominal radiograph (KUB), grayscale DICOM-like.
- **Prompt:** Photorealistic ABDOMINAL RADIOGRAPH of a young adult in grayscale with DICOM-like dynamic range and anatomically accurate bowel gas pattern. Depict CECAL VOLVULUS: a single MARKEDLY DILATED, gas-filled COFFEE-BEAN / kidney-shaped bowel loop (the twisted cecum) whose apex projects up and across toward the LEFT UPPER QUADRANT, with a central cleft (the apposed walls) forming the bean's seam. Upstream there are DISTENDED SMALL-BOWEL loops with valvulae conniventes indicating obstruction, while the distal colon is relatively gasless. Lumbar spine, psoas margins, and bony pelvis correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Single hugely dilated coffee-bean loop pointing to the left upper quadrant
  - Upstream distended small bowel (obstruction), collapsed distal colon
  - Central cleft/seam of apposed walls
  - Authentic abdominal radiograph appearance
- **Avoid (negative prompt):** an inverted-U loop arising from the pelvis pointing to the right upper quadrant (sigmoid volvulus) as the intended finding; free subdiaphragmatic air (perforation); an ectopic calcified gallstone with pneumobilia (gallstone ileus); a normal gas pattern; diffuse ground-glass ascites; a CT cross-section; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "cecal volvulus abdominal radiograph coffee bean left upper quadrant"; Wikimedia Commons "cecal volvulus x-ray".

### s2ck-0263 - Pancreatic pseudocyst  (Step 2 CK - Surgery)
- **Case context:** 45-year-old man 5 weeks after alcohol-induced acute pancreatitis with persistent dull epigastric pain, early satiety, nausea, a vague non-tender epigastric fullness, mildly elevated amylase, hemodynamically stable and afebrile; the image is an abdominal CT showing a well-circumscribed round fluid collection with a mature thin wall in the lesser sac, without internal septations or solid components.
- **Modality:** Contrast-enhanced CT of the abdomen, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen in diagnostic grayscale, soft-tissue window, radiologically accurate upper-abdominal anatomy with contrast-opacified vessels and realistic CT noise. Depict a PANCREATIC PSEUDOCYST: a WELL-CIRCUMSCRIBED, ROUND, homogeneous FLUID-DENSITY (near-water attenuation) COLLECTION with a MATURE, THIN, smooth ENHANCING WALL sitting in the LESSER SAC anterior to the pancreas, WITHOUT internal septations, solid nodularity, or gas. The adjacent pancreas is mildly atrophic/scarred, and the stomach is displaced anteriorly by the collection; liver, spleen, aorta, and vertebral body correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Round well-circumscribed fluid collection with a thin mature wall
  - Homogeneous fluid density, no septations or solid components
  - Peripancreatic/lesser-sac location displacing the stomach
  - Contrast-enhanced axial abdominal CT appearance
- **Avoid (negative prompt):** a collection containing gas bubbles or heterogeneous debris (infected/walled-off necrosis) as the intended finding; a thick irregular enhancing solid mass; a cystic lesion with internal septations and mural nodules (cystic neoplasm); a diffusely inflamed pancreas with stranding (acute pancreatitis); a noncontrast image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "pancreatic pseudocyst CT thin wall lesser sac"; Wikimedia Commons "pancreatic pseudocyst CT".

### s2ck-0264 - Coarctation of the aorta  (Step 2 CK - Pediatrics)
- **Case context:** 9-year-old boy with a webbed neck and short stature (Turner-associated phenotype) found to have hypertension, leg fatigue on running, upper-extremity pressure much higher than lower, weak delayed femoral pulses, and an interscapular systolic murmur; the image is a chest radiograph showing bilateral inferior rib notching and a 3 sign contour of the aortic knob.
- **Modality:** Frontal (PA) CHEST RADIOGRAPH, grayscale DICOM-like, pediatric.
- **Prompt:** Photorealistic frontal (PA) CHEST RADIOGRAPH of a school-age child in grayscale with DICOM-like dynamic range and anatomically accurate thoracic anatomy. Depict COARCTATION OF THE AORTA: bilateral INFERIOR RIB NOTCHING - scalloped erosions along the undersurfaces of the posterior 3rd-8th ribs from dilated collateral intercostal arteries - and a FIGURE-3 SIGN at the left superior mediastinal / aortic knob contour (a pre-stenotic dilation, the coarctation indentation, and post-stenotic dilation creating a reversed-3 outline). The heart is normal-to-mildly enlarged, lung fields are clear, and the ribs, clavicles, and diaphragm are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bilateral inferior rib notching (undersurface erosions)
  - Figure-3 sign at the aortic knob contour
  - Clear lungs with a normal-to-mildly enlarged heart
  - Authentic pediatric frontal chest radiograph appearance
- **Avoid (negative prompt):** an egg-on-a-string narrow-mediastinum silhouette (transposition) as the intended finding; a boot-shaped heart (tetralogy); a large box-shaped cardiomegaly; symmetric hilar adenopathy; a normal chest with smooth ribs; a CT cross-section; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "coarctation of the aorta rib notching figure 3 sign chest radiograph"; Wikimedia Commons "coarctation aorta rib notching".

### s2ck-0265 - Hirschsprung disease  (Step 2 CK - Pediatrics)
- **Case context:** 3-day-old full-term boy who has not passed meconium, with progressive abdominal distension, bilious vomiting, feeding reluctance, a tight empty rectal vault, and a forceful gush of stool and gas on withdrawal of the examining finger; the image is a contrast enema showing a narrow distal rectosigmoid segment with an abrupt transition to markedly dilated proximal colon.
- **Modality:** Contrast enema fluoroscopy study, frontal projection, neonatal (grayscale).
- **Prompt:** Photorealistic frontal CONTRAST ENEMA fluoroscopy study of a neonate in grayscale, dense white rectally-instilled contrast outlining the colon, DICOM-like fluoroscopic appearance. Depict HIRSCHSPRUNG DISEASE: a NARROW, non-distended DISTAL RECTOSIGMOID (aganglionic) segment of small caliber, with an abrupt CONE-SHAPED TRANSITION ZONE to a MARKEDLY DILATED, contrast-filled PROXIMAL COLON, and a reversed rectosigmoid ratio (rectum narrower than sigmoid). Retained contrast and a mildly irregular contour of the transition are shown; the neonatal bony pelvis and lumbar spine are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Narrow distal rectosigmoid (aganglionic) segment
  - Abrupt cone-shaped transition zone to dilated proximal colon
  - Reversed rectosigmoid caliber ratio
  - Authentic neonatal contrast enema appearance
- **Avoid (negative prompt):** a microcolon with distal small-bowel meconium plugs (meconium ileus) as the intended finding; a corkscrew proximal jejunum (malrotation) as the intended finding; a uniformly dilated colon with no transition; free intraperitoneal air; a plain radiograph without contrast; a CT cross-section; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "Hirschsprung disease contrast enema transition zone rectosigmoid"; Wikimedia Commons "Hirschsprung contrast enema".

### s2ck-0276 - Constrictive pericarditis  (Step 2 CK - Internal Medicine)
- **Case context:** 61-year-old man with prior mediastinal radiation, 6 months of fatigue, leg swelling and abdominal distension, elevated jugular venous pressure that rises with inspiration (Kussmaul sign), hepatomegaly, ascites, a pericardial knock, and echo showing a septal bounce with respiratory filling variation; the image is a chest CT showing a diffusely thickened, calcified pericardium encasing the heart.
- **Modality:** Contrast-enhanced CT of the chest, axial slice at the cardiac level, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the chest at the level of the heart in diagnostic grayscale, soft-tissue window, anatomically accurate cardiac and mediastinal anatomy with contrast-opacified chambers and realistic CT noise. Depict CONSTRICTIVE PERICARDITIS: a DIFFUSELY THICKENED PERICARDIUM with dense, bright, curvilinear CALCIFICATION forming a rigid rind that ENCASES the heart, most conspicuous over the right heart border and atrioventricular grooves. The encased ventricles show a tubular/narrowed configuration; the atria and inferior vena cava may appear dilated. Lungs, ribs, and vertebral body correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diffusely thickened pericardium with curvilinear calcification
  - Calcified rind encasing the heart (right border/AV grooves)
  - Associated tubular ventricle and dilated atria/IVC
  - Contrast-enhanced axial chest CT appearance
- **Avoid (negative prompt):** a large simple pericardial fluid collection with no calcified rind (effusion/tamponade) as the intended finding; markedly thickened myocardial walls with a sparkling texture (amyloid/restrictive cardiomyopathy) as the intended finding; a dilated cardiomyopathy; a lung-window or noncontrast image; a normal thin pericardium; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "constrictive pericarditis pericardial calcification CT"; Wikimedia Commons "constrictive pericarditis calcified pericardium CT".

### s2ck-0277 - Mitral stenosis  (Step 2 CK - Internal Medicine)
- **Case context:** 39-year-old woman from a rheumatic-fever-endemic region with 8 months of exertional dyspnea, hemoptysis, a loud S1, an opening snap, a low-pitched apical diastolic rumble best in the left lateral position, and an irregularly irregular pulse; the image is a transthoracic echocardiogram showing a thickened mitral valve with diastolic doming (hockey-stick anterior leaflet), a reduced valve orifice, and left atrial enlargement.
- **Modality:** Transthoracic echocardiogram, parasternal long-axis view, grayscale sector (DICOM-like).
- **Prompt:** Photorealistic TRANSTHORACIC ECHOCARDIOGRAM in the PARASTERNAL LONG-AXIS view, diagnostic grayscale sector with realistic speckle texture and DICOM-like appearance. Depict RHEUMATIC MITRAL STENOSIS: a THICKENED, echobright MITRAL VALVE with restricted leaflet tips, so that in DIASTOLE the ANTERIOR MITRAL LEAFLET bows/DOMES toward the septum in a HOCKEY-STICK (elbow) configuration with a narrowed diastolic orifice, while the leaflet tips remain tethered. The LEFT ATRIUM is ENLARGED (dilated) behind the aortic root. The left ventricle is normal-sized; aortic root and interventricular septum correctly rendered. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Thickened mitral valve with diastolic doming (hockey-stick anterior leaflet)
  - Narrowed mitral orifice with tethered leaflet tips
  - Enlarged left atrium
  - Authentic grayscale echocardiogram (parasternal long axis)
- **Avoid (negative prompt):** a diastolic regurgitant jet into the LV outflow tract (aortic regurgitation) as the intended finding; a flail leaflet with a systolic jet into the atrium (mitral regurgitation); a calcified stenotic aortic valve; a large pericardial effusion; a normal thin pliable mitral valve; a CT/MRI cross-section; annotations or calipers.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "rheumatic mitral stenosis hockey stick doming echocardiogram"; Wikimedia Commons "mitral stenosis echocardiography".

### s2ck-0282 - Rocky Mountain spotted fever  (Step 2 CK - Internal Medicine)
- **Case context:** 30-year-old man from North Carolina with high fever, severe headache, and myalgias 5 days after camping and a tick bite, then a rash, ill-appearing (39.4 C) with thrombocytopenia, hyponatremia, and mild transaminase elevation, started on empiric doxycycline; the image is a photograph of a maculopapular and petechial rash beginning on the wrists and ankles, involving the palms and soles, and spreading centrally toward the trunk.
- **Modality:** Clinical photograph of the distal extremities (wrists/hands/ankles), dermatologic clinical photography.
- **Prompt:** Photorealistic clinical PHOTOGRAPH of an ill adult's WRISTS, HANDS, and ANKLES in clinical lighting with accurate skin tones. Depict ROCKY MOUNTAIN SPOTTED FEVER: a blanching-to-nonblanching MACULOPAPULAR and PETECHIAL rash concentrated on the WRISTS and ANKLES and prominently involving the PALMS and SOLES, with numerous small pink-to-dusky-red macules and papules and scattered PETECHIAE, the eruption appearing to spread CENTRIPETALLY (from the extremities toward the trunk). The lesions are discrete and small (few millimeters), some coalescing; the patient looks systemically ill. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Maculopapular and petechial rash on wrists and ankles
  - Palm and sole involvement
  - Centripetal (extremity-to-trunk) distribution pattern
  - Authentic clinical photograph of distal extremities
- **Avoid (negative prompt):** a single target/bull's-eye erythema migrans lesion (Lyme) as the intended finding; a central-starting morbilliform rash sparing palms/soles (measles); confluent desquamating sunburn-like erythema (toxic shock); vesicles in a dermatome (zoster); large palpable purpura on the buttocks/legs (IgA vasculitis); a normal limb; annotations.
- **Real-image fallback:** CDC PHIL - search "Rocky Mountain spotted fever rash palms wrists"; DermNet NZ "Rocky Mountain spotted fever"; Wikimedia Commons "Rocky Mountain spotted fever rash".

### s2ck-0285 - Rotator cuff tear  (Step 2 CK - Surgery)
- **Case context:** 58-year-old house painter with months of right shoulder pain worse overhead and at night, difficulty combing hair, weakness of abduction and external rotation, and a positive drop-arm sign, no acute dislocation; the image is a shoulder MRI showing a full-thickness tear of the supraspinatus tendon with retraction and fluid in the subacromial space.
- **Modality:** Shoulder MRI, T2-weighted (fat-suppressed) coronal oblique image (DICOM-like grayscale).
- **Prompt:** Photorealistic T2-weighted (fat-suppressed) CORONAL OBLIQUE MRI of the SHOULDER in grayscale with DICOM-like tissue contrast (bright fluid), anatomically accurate humeral head, greater tuberosity, glenoid, and acromion. Depict a FULL-THICKNESS SUPRASPINATUS TENDON TEAR: a fluid-bright GAP interrupting the full thickness of the SUPRASPINATUS TENDON near its greater-tuberosity footprint, with RETRACTION of the torn tendon stump medially and BRIGHT FLUID filling the tear and the SUBACROMIAL/subdeltoid space and the glenohumeral joint. The deltoid, acromion, and humeral head cartilage are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Full-thickness fluid-bright gap in the supraspinatus tendon
  - Retraction of the torn tendon stump
  - Fluid in the subacromial/subdeltoid space
  - Authentic fluid-sensitive coronal shoulder MRI appearance
- **Avoid (negative prompt):** an intact continuous tendon with only mild tendinosis as the intended finding; a bony Hill-Sachs/glenoid fracture; a labral (Bankart) tear as the dominant finding; a dislocated humeral head; a plain radiograph or CT; a normal shoulder; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "full thickness supraspinatus tear rotator cuff MRI"; Wikimedia Commons "rotator cuff tear MRI".

### s2ck-0286 - Lumbar disc herniation with radiculopathy  (Step 2 CK - Surgery)
- **Case context:** 41-year-old warehouse worker with acute lifting injury, sharp low back pain radiating down the back of the right leg to the sole, positive straight-leg raise at 40 degrees, plantarflexion weakness, diminished right ankle reflex, and lateral-foot sensory loss, no saddle anesthesia or bladder dysfunction; the image is a lumbar spine MRI showing a paracentral disc herniation at L5-S1 compressing the traversing S1 nerve root.
- **Modality:** Lumbar spine MRI, T2-weighted AXIAL image at L5-S1 (DICOM-like grayscale).
- **Prompt:** Photorealistic T2-weighted AXIAL MRI of the LUMBAR SPINE at the L5-S1 level in grayscale with DICOM-like tissue contrast (bright cerebrospinal fluid in the thecal sac), anatomically accurate vertebral body, disc, facet joints, and thecal sac. Depict a RIGHT PARACENTRAL DISC HERNIATION: a focal posterolateral disc protrusion extending into the RIGHT lateral recess, effacing the bright CSF and COMPRESSING/displacing the TRAVERSING RIGHT S1 NERVE ROOT against the posterior element, while the left-side roots remain surrounded by bright CSF. The disc herniation is contiguous with the parent disc; facets and posterior muscles correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Right paracentral disc herniation into the lateral recess
  - Compression/displacement of the traversing S1 nerve root
  - Preserved bright CSF and normal roots on the contralateral side
  - Authentic axial T2 lumbar MRI appearance
- **Avoid (negative prompt):** a large central herniation obliterating the whole canal and all roots (cauda equina) as the intended finding; a bright destructive marrow mass or epidural abscess; a burst fracture with retropulsed bone; a normal patent canal with roots floating in CSF; a sagittal-only or cervical image; a plain radiograph or CT; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "paracentral lumbar disc herniation L5-S1 axial MRI traversing S1 root"; Wikimedia Commons "lumbar disc herniation axial MRI".

### s2ck-0287 - Chronic venous insufficiency  (Step 2 CK - Surgery)
- **Case context:** 66-year-old woman with years of aching heavy legs worse with standing and better with elevation, bilateral ankle swelling, brown discoloration, varicosities, indurated skin above the medial malleolus, and a shallow weeping medial-ankle ulcer, with palpable pulses and a normal ankle-brachial index; the image is a photograph of the medial ankle showing hemosiderin hyperpigmentation, lipodermatosclerosis, and a shallow exudative ulcer just above the medial malleolus.
- **Modality:** Clinical photograph of the lower leg / medial ankle (gaiter area), dermatologic clinical photography.
- **Prompt:** Photorealistic clinical PHOTOGRAPH of an older adult's LOWER LEG and MEDIAL ANKLE (the gaiter region) in clinical lighting with accurate skin tones. Depict CHRONIC VENOUS INSUFFICIENCY: brownish HEMOSIDERIN HYPERPIGMENTATION mottling the skin around the ankle, firm, tightly bound-down, indurated woody skin with a tapered inverted-champagne-bottle leg contour (LIPODERMATOSCLEROSIS), scattered dilated tortuous VARICOSITIES, edema, and a SHALLOW, irregular, EXUDATIVE (weeping) VENOUS ULCER with a ruddy granulating base located JUST ABOVE the MEDIAL MALLEOLUS. Surrounding skin shows stasis dermatitis scaling. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Hemosiderin (brown) hyperpigmentation around the ankle
  - Lipodermatosclerosis (indurated, bound-down skin, champagne-bottle leg)
  - Shallow exudative venous ulcer just above the medial malleolus
  - Authentic clinical photograph of the gaiter area
- **Avoid (negative prompt):** a deep punched-out dry ulcer on the toes/lateral foot with pallor and shiny hairless skin (arterial ulcer) as the intended finding; a plantar neuropathic (diabetic) mal perforans ulcer; a necrotic gangrenous toe; cellulitic hot spreading erythema as the dominant finding; normal healthy skin; annotations or calipers.
- **Real-image fallback:** DermNet NZ "venous leg ulcer lipodermatosclerosis hemosiderin"; Wikimedia Commons "venous stasis ulcer medial malleolus".

### s2ck-0288 - Basal cell carcinoma  (Step 2 CK - Surgery)
- **Case context:** 70-year-old fair-skinned farmer with extensive sun exposure and a slowly enlarging non-painful lesion on the side of the nose present over a year that bleeds with minor trauma and never fully heals; the image is a dermatologic photograph of a pearly, translucent papule with a rolled border, central ulceration, and overlying telangiectasias.
- **Modality:** Clinical dermatologic close-up photograph of a facial skin lesion, high-resolution clinical photography.
- **Prompt:** Photorealistic close-up CLINICAL DERMATOLOGIC PHOTOGRAPH of a lesion on the side of the nose of an older fair-skinned adult, natural clinic lighting, accurate skin texture and pores. Depict a NODULAR BASAL CELL CARCINOMA: a PEARLY, TRANSLUCENT, waxy skin-colored PAPULE/nodule with a raised ROLLED, shiny BORDER and a depressed CENTRAL ULCERATION (rodent ulcer) with a fine crust, and delicate branching ARBORIZING TELANGIECTASIAS coursing over the pearly surface. Surrounding facial skin shows chronic photodamage (mottled pigmentation, fine wrinkling). no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Pearly, translucent papule/nodule with a rolled border
  - Central ulceration (rodent ulcer) with crust
  - Overlying arborizing telangiectasias
  - Authentic facial clinical dermatology photograph with photodamage
- **Avoid (negative prompt):** an asymmetric multicolored pigmented lesion with an irregular network (melanoma) as the intended finding; a hyperkeratotic scaly plaque or cutaneous horn (squamous cell carcinoma); a stuck-on waxy verrucous plaque (seborrheic keratosis); a cherry-red vascular papule; a rough sandpaper actinic keratosis only; normal skin; annotations or calipers.
- **Real-image fallback:** DermNet NZ "nodular basal cell carcinoma pearly telangiectasia"; Wikimedia Commons "basal cell carcinoma nose".

### s2ck-0301 - Cardiac amyloidosis  (Step 2 CK - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw diffusely low-voltage limb-lead complexes with a pseudoinfarct precordial Q-wave pattern. Strongly recommend a REAL de-identified cardiac-amyloid 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 74-year-old man with 8 months of exertional dyspnea and edema, prior bilateral carpal tunnel release, lightheadedness, low-normal blood pressure, diuretic sensitivity, and echo showing thick sparkling ventricular walls with apical-sparing strain and preserved EF; the tracing must show diffusely low-voltage QRS complexes in the limb leads with a pseudoinfarct Q-wave pattern in the anterior precordial leads.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict CARDIAC AMYLOIDOSIS: DIFFUSELY LOW-VOLTAGE QRS complexes in the LIMB leads (strikingly small amplitude in I, II, III, aVR, aVL, aVF) despite echocardiographically thick walls, together with a PSEUDOINFARCT pattern - poor R-wave progression and pathologic-appearing Q WAVES / QS complexes in the ANTERIOR PRECORDIAL leads (V1-V3) mimicking an old anterior infarct WITHOUT ST elevation. The rhythm is regular with a P before each QRS; morphology consistent across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diffusely low-voltage QRS in the limb leads
  - Pseudoinfarct anterior precordial Q waves / poor R-wave progression
  - No acute ST-segment elevation
  - Standard pink ECG grid
- **Avoid (negative prompt):** tall high-voltage LVH complexes as the intended finding; acute ST-segment elevation with reciprocal change; diffuse concave ST elevation with PR depression (pericarditis); a delta wave/short PR; an irregularly irregular chaotic rhythm; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "cardiac amyloidosis ECG low voltage pseudoinfarct"; Wikimedia Commons "cardiac amyloidosis ECG". Prefer the app vector tracing.

### s2ck-0302 - Nonalcoholic steatohepatitis  (Step 2 CK - Internal Medicine)
- **Case context:** 52-year-old woman with type 2 diabetes, obesity, and hyperlipidemia, minimal alcohol use, with ALT 82 and AST 60 and a negative workup for viral, iron, Wilson, and autoimmune causes; the image is an abdominal ultrasound showing a diffusely hyperechoic (bright) liver with increased hepatorenal contrast consistent with hepatic steatosis.
- **Modality:** Abdominal ULTRASOUND, grayscale sagittal view through the liver and right kidney (DICOM-like).
- **Prompt:** Photorealistic ABDOMINAL ULTRASOUND image in diagnostic grayscale, sagittal view showing the RIGHT LIVER LOBE and the adjacent RIGHT KIDNEY in the same field, realistic fine speckle texture, sector edges, and DICOM-like appearance. Depict HEPATIC STEATOSIS (fatty liver): the LIVER PARENCHYMA is DIFFUSELY HYPERECHOIC ("BRIGHT" liver), noticeably BRIGHTER than the adjacent RENAL CORTEX, producing increased HEPATORENAL CONTRAST, with fine homogeneous echotexture and posterior beam ATTENUATION so the deep liver and diaphragm appear dimmer/blurred. Intrahepatic vessel walls appear less distinct than normal. The kidney and diaphragm are correctly rendered for comparison. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diffusely hyperechoic (bright) liver
  - Increased hepatorenal contrast (liver brighter than renal cortex)
  - Posterior beam attenuation with blurred deep liver/vessel walls
  - Authentic grayscale abdominal ultrasound (liver and kidney in view)
- **Avoid (negative prompt):** a coarse nodular shrunken liver with ascites (cirrhosis) as the intended finding; a focal solid or cystic liver mass; a dilated biliary tree with a stone; a normal liver isoechoic to the kidney; a CT/MRI cross-section; a color-Doppler-only image; annotations or calipers dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "hepatic steatosis fatty liver ultrasound hepatorenal contrast bright liver"; Wikimedia Commons "fatty liver ultrasound".

### s2ck-0307 - Chronic pancreatitis  (Step 2 CK - Internal Medicine)
- **Case context:** 49-year-old man with long heavy alcohol use, months of gnawing epigastric pain boring to the back, 9 kg weight loss, bulky greasy floating stools (steatorrhea), and new fasting hyperglycemia (168); the image is a noncontrast abdominal CT showing scattered coarse parenchymal calcifications throughout the pancreas with a dilated main pancreatic duct.
- **Modality:** Noncontrast CT of the abdomen, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial NONCONTRAST CT of the abdomen in diagnostic grayscale, soft-tissue window, radiologically accurate upper-abdominal anatomy with realistic CT noise. Depict CHRONIC PANCREATITIS: numerous scattered COARSE, BRIGHT PARENCHYMAL CALCIFICATIONS studded throughout the head, body, and tail of an ATROPHIC pancreas, with a DILATED, beaded MAIN PANCREATIC DUCT coursing through the gland (some calcifications appearing intraductal). The pancreas is shrunken with an irregular contour; the liver, spleen, aorta, kidneys, and vertebral body are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Coarse parenchymal (and intraductal) pancreatic calcifications
  - Dilated, beaded main pancreatic duct
  - Atrophic, irregular pancreatic parenchyma
  - Authentic noncontrast axial abdominal CT appearance
- **Avoid (negative prompt):** a diffusely edematous enlarged pancreas with peripancreatic stranding and no calcification (acute pancreatitis) as the intended finding; a focal hypodense head mass with a double-duct sign (carcinoma); a simple thin-walled pseudocyst as the dominant finding; a normal pancreas; a lung-window image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "chronic pancreatitis CT calcifications dilated pancreatic duct"; Wikimedia Commons "chronic calcific pancreatitis CT".

### s2ck-0308 - Primary spontaneous pneumothorax  (Step 2 CK - Surgery)
- **Case context:** Tall thin 22-year-old male smoker with sudden right pleuritic chest pain and dyspnea, mild distress, stable blood pressure, heart rate 98, saturation 93%, decreased right breath sounds with hyperresonance, and a midline trachea; the image is an upright chest radiograph showing a large right-sided pneumothorax with the lung edge visible about 3 cm from the chest wall, without mediastinal shift.
- **Modality:** Upright frontal (PA) CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic upright frontal (PA) CHEST RADIOGRAPH of a young adult in grayscale with DICOM-like dynamic range and anatomically accurate thoracic anatomy. Depict a PRIMARY SPONTANEOUS PNEUMOTHORAX on the RIGHT: a well-defined thin white VISCERAL PLEURAL EDGE (the collapsed lung margin) is visible about 3 cm INSIDE the chest wall, with a HYPERLUCENT, AVASCULAR (black, no lung markings) space between the pleural edge and the ribs peripherally. The RIGHT LUNG is partially collapsed toward the hilum. Importantly the MEDIASTINUM and TRACHEA remain MIDLINE (NO shift), and the right hemidiaphragm is NOT depressed. The left lung is normally aerated; ribs and soft tissues correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Visible visceral pleural edge with a peripheral avascular lucent zone (right)
  - Partial lung collapse toward the hilum
  - Midline mediastinum and trachea (NO shift), non-depressed diaphragm
  - Authentic upright frontal chest radiograph appearance
- **Avoid (negative prompt):** mediastinal/tracheal shift AWAY from the lucent side with a depressed diaphragm (tension pneumothorax) as the intended finding; a large pleural effusion with a meniscus; a lobar consolidation; complete whiteout collapse with shift toward the opacity; a normal symmetric chest; a CT cross-section; a chest tube already placed; annotations.
- **Real-image fallback:** Radiopaedia - search "primary spontaneous pneumothorax chest radiograph lung edge"; Wikimedia Commons "spontaneous pneumothorax x-ray".

### s2ck-0310 - Gastric adenocarcinoma  (Step 2 CK - Surgery)
- **Case context:** 66-year-old man with 4 months of early satiety, epigastric discomfort, 10 kg weight loss, pallor, iron-deficiency anemia, and a firm left supraclavicular node (Virchow); the image is an upper endoscopy view showing a large ulcerated mass with heaped, irregular, friable margins along the gastric body, biopsy showing signet-ring malignant cells.
- **Modality:** Upper GI ENDOSCOPY (esophagogastroduodenoscopy) photograph, endoluminal color video-endoscopic image.
- **Prompt:** Photorealistic UPPER GI ENDOSCOPY (endoluminal) color photograph inside the stomach, with the characteristic fish-eye wide-angle endoscopic view, glistening pink-red gastric mucosa with rugal folds, and realistic bright endoscope illumination and light reflections. Depict GASTRIC ADENOCARCINOMA: a large MALIGNANT ULCERATED MASS along the gastric body with HEAPED-UP, ROLLED, IRREGULAR, NODULAR MARGINS surrounding a dirty necrotic ulcer crater, the surface FRIABLE with contact bleeding and disrupted converging rugal folds that stop abruptly at the mass. Adjacent normal gastric folds and the endoscopic lumen are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Ulcerated gastric mass with heaped, irregular, rolled margins
  - Friable surface with contact bleeding and abrupt fold cutoff
  - Endoluminal wide-angle endoscopic appearance with realistic illumination
  - Adjacent gastric rugae for context
- **Avoid (negative prompt):** a small, clean, punched-out benign gastric ulcer with smooth regular margins and radiating folds as the intended finding; normal smooth gastric mucosa; esophageal squamous mucosa or a Z-line; colonic haustra/polyp; an external CT or barium image; a histology slide; annotations or calipers.
- **Real-image fallback:** WebPathology / PathologyOutlines gross and endoscopic "gastric adenocarcinoma"; Radiopaedia endoscopy images; Wikimedia Commons "gastric cancer endoscopy".

### s2ck-0314 - Placenta accreta spectrum  (Step 2 CK - Obstetrics & Gynecology)
- **Case context:** 34-year-old woman (G4P3) at 32 weeks with three prior cesarean deliveries and a known placenta previa, asymptomatic, referred for detailed imaging to plan delivery; the image is an obstetric ultrasound with color Doppler showing an anterior placenta overlying the prior cesarean scar with loss of the retroplacental clear zone, multiple vascular lacunae (Swiss-cheese appearance), and disruption of the bladder-uterine interface.
- **Modality:** Obstetric ULTRASOUND with color Doppler, grayscale sector with a color box (DICOM-like), sagittal lower-uterine view.
- **Prompt:** Photorealistic OBSTETRIC ULTRASOUND image in diagnostic grayscale with a superimposed color-Doppler box, sagittal view of the lower uterine segment and maternal bladder, realistic fine speckle texture and DICOM-like appearance. Depict PLACENTA ACCRETA SPECTRUM: an ANTERIOR PLACENTA covering the lower uterine segment over the prior cesarean scar, with LOSS of the normal hypoechoic RETROPLACENTAL CLEAR ZONE, MULTIPLE irregular intraplacental VASCULAR LACUNAE (anechoic lakes giving a moth-eaten SWISS-CHEESE appearance), THINNING/loss of the myometrium beneath the placenta, and DISRUPTION of the bright BLADDER-UTERINE (serosa-bladder) INTERFACE with turbulent bridging color-Doppler vessels crossing toward the bladder wall. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Anterior low placenta with loss of the retroplacental clear zone
  - Multiple intraplacental vascular lacunae (Swiss-cheese)
  - Thinned myometrium and disrupted bladder-uterine interface with bridging vessels
  - Authentic grayscale obstetric ultrasound with a color-Doppler box
- **Avoid (negative prompt):** a normal placenta with an intact hypoechoic retroplacental clear zone and a smooth bladder line as the intended finding; a simple placenta previa without lacunae or myometrial invasion; a retroplacental hematoma (abruption); an empty uterus; a fetal-only view; a CT/MRI cross-section; annotations or calipers dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "placenta accreta spectrum ultrasound lacunae loss retroplacental clear zone"; Wikimedia Commons "placenta accreta ultrasound".

### s3-0266 - Slipped capital femoral epiphysis  (Step 3 - Pediatrics)
- **Case context:** 13-year-old boy with obesity, several weeks of dull left hip and knee pain and a limp without trauma or fever, the hip held externally rotated with lost internal rotation and obligate external rotation on flexion; the image is a frog-leg lateral pelvis radiograph showing posteroinferior displacement of the left femoral epiphysis relative to the femoral neck.
- **Modality:** Frog-leg LATERAL PELVIS RADIOGRAPH, grayscale DICOM-like, adolescent.
- **Prompt:** Photorealistic FROG-LEG LATERAL PELVIS RADIOGRAPH of an adolescent in grayscale with DICOM-like dynamic range and anatomically accurate bony pelvis, both proximal femora, and open growth plates. Depict a SLIPPED CAPITAL FEMORAL EPIPHYSIS on the LEFT: the LEFT femoral capital EPIPHYSIS (femoral head) is displaced POSTEROINFERIORLY relative to the femoral neck, so it appears to slip off the metaphysis like ice cream slipping off a cone, with a widened, irregular physis; a line drawn along the superior femoral neck (Klein line) fails to intersect the slipped epiphysis on the left. The RIGHT hip is normal with the physeal line intersecting its epiphysis for comparison. Acetabula and pubic rami correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Posteroinferior slip of the left capital femoral epiphysis relative to the neck
  - Widened/irregular physis; Klein line missing the epiphysis on the affected side
  - Normal right hip for comparison
  - Authentic frog-leg lateral pelvis radiograph appearance
- **Avoid (negative prompt):** a fragmented, sclerotic, flattened femoral head (Legg-Calve-Perthes avascular necrosis) as the intended finding; a displaced femoral neck fracture in an adult; bilateral SI joint fusion; a normal congruent hip on the affected side; a dislocated empty acetabulum; a CT/MRI; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "slipped capital femoral epiphysis frog leg lateral Klein line"; Wikimedia Commons "SCFE radiograph".

### s3-0273 - Acute aortic dissection  (Step 3 - Emergency Medicine)
- **Case context:** 63-year-old man with longstanding hypertension and abrupt severe tearing chest pain radiating to the back, hypertensive with a 22 mm Hg interarm systolic difference, hemodynamically stable; the image is a portable chest radiograph showing a widened mediastinum.
- **Modality:** Portable (AP) CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic portable ANTEROPOSTERIOR (AP) CHEST RADIOGRAPH of an adult in grayscale with DICOM-like dynamic range and anatomically accurate thoracic anatomy. Depict findings suggesting THORACIC AORTIC DISSECTION: a MARKEDLY WIDENED MEDIASTINUM with an abnormally broad, convex aortic contour and an enlarged, indistinct AORTIC KNOB, with the superior mediastinal silhouette bulging beyond normal width. The tracheal air column may be mildly deviated to the right and there may be a small left apical pleural cap. The lung fields are relatively clear, the heart size is normal, and the ribs and soft tissues are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Widened mediastinum with a broad, convex aortic contour
  - Enlarged/indistinct aortic knob
  - Relatively clear lungs, possible small left apical pleural cap
  - Authentic portable AP chest radiograph appearance
- **Avoid (negative prompt):** a large lobar consolidation or bilateral airspace edema as the intended finding; a lucent avascular pneumothorax with shift; free subdiaphragmatic air; a globular enlarged heart with effusions; a normal narrow mediastinum; a CT cross-section (this is the plain film); annotations or tubes dominating the frame.
- **Real-image fallback:** Radiopaedia - search "aortic dissection widened mediastinum chest radiograph"; Wikimedia Commons "aortic dissection chest x-ray widened mediastinum".

### s3-0275 - Sigmoid volvulus  (Step 3 - Surgery)
- **Case context:** 78-year-old bedbound nursing-home resident with chronic constipation and 1 day of progressive distension, cramping pain, and no passage of stool or flatus, with a markedly distended tympanitic but soft abdomen and no peritoneal signs; the image is an abdominal radiograph showing a massively dilated inverted-U (coffee-bean) loop of colon arising from the pelvis.
- **Modality:** Supine/upright abdominal radiograph (KUB), grayscale DICOM-like.
- **Prompt:** Photorealistic ABDOMINAL RADIOGRAPH of an older adult in grayscale with DICOM-like dynamic range and anatomically accurate bowel gas pattern. Depict SIGMOID VOLVULUS: a MASSIVELY DILATED, gas-filled INVERTED-U / COFFEE-BEAN loop of colon arising from the PELVIS and ascending toward the upper abdomen, often reaching above the transverse colon (northern exposure), with a central cleft (apposed medial walls) forming the bean's seam and the loop apex pointing toward the LEFT/RIGHT upper quadrant. The dilated loop is devoid of haustra; there is upstream colonic distension. Lumbar spine, psoas margins, and bony pelvis correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Massively dilated inverted-U / coffee-bean loop arising from the pelvis
  - Central cleft (apposed walls) and loss of haustra in the loop
  - Upstream colonic distension
  - Authentic abdominal radiograph appearance
- **Avoid (negative prompt):** a coffee-bean loop pointing to the left upper quadrant with small-bowel obstruction (cecal volvulus) as the intended finding; free subdiaphragmatic air; an ectopic gallstone with pneumobilia; diffuse ascites; a normal gas pattern; a CT cross-section; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "sigmoid volvulus coffee bean inverted U abdominal radiograph"; Wikimedia Commons "sigmoid volvulus x-ray".

### s3-0314 - Multiple sclerosis  (Step 3 - Internal Medicine)
- **Case context:** 30-year-old woman with two distinct neurologic episodes months apart (painful monocular vision loss that resolved, then a band of ascending trunk numbness), now with an internuclear ophthalmoplegia and brisk reflexes; the image is a T2/FLAIR brain MRI showing multiple ovoid periventricular white-matter lesions oriented perpendicular to the ventricles (Dawson fingers).
- **Modality:** Brain MRI, sagittal or axial FLAIR sequence (DICOM-like grayscale).
- **Prompt:** Photorealistic BRAIN MRI, FLAIR sequence, in diagnostic grayscale with suppressed (dark) cerebrospinal fluid, anatomically accurate cerebral anatomy. Depict MULTIPLE SCLEROSIS with DAWSON FINGERS: MULTIPLE discrete OVOID HYPERINTENSE (bright) white-matter lesions arrayed along the PERIVENTRICULAR margins and callososeptal interface, several elongated and oriented PERPENDICULAR to the lateral ventricles, radiating outward like fingers along the deep medullary veins. Additional smaller juxtacortical/infratentorial lesions are present. Ventricles, corpus callosum, and skull correctly rendered against dark suppressed CSF. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multiple ovoid periventricular hyperintense lesions
  - Perpendicular (Dawson-finger) orientation to the ventricles
  - FLAIR contrast with dark suppressed CSF
  - Authentic brain MRI appearance
- **Avoid (negative prompt):** a single ring-enhancing mass with vasogenic edema (abscess/tumor) as the intended finding; symmetric confluent chronic small-vessel change only; a wedge-shaped cortical infarct; hyperdense acute blood; a normal brain; a CT image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "multiple sclerosis Dawson fingers FLAIR MRI"; Wikimedia Commons "multiple sclerosis MRI Dawson fingers".

### s3-0315 - Retinoblastoma (leukocoria)  (Step 3 - Pediatrics)
- **Case context:** 14-month-old girl whose parents noticed a white glow in one pupil in recent flash photographs, with an absent red reflex that appears white in that eye; the image is a red-reflex examination showing leukocoria (a white pupillary reflex) in the right eye instead of the normal red reflex.
- **Modality:** Clinical photograph demonstrating the RED-REFLEX (Bruckner) test in an infant, flash photography of the eyes.
- **Prompt:** Photorealistic clinical FLASH PHOTOGRAPH of an infant's face focused on both EYES during a RED-REFLEX examination, natural infant facial proportions and skin tones, with a camera flash producing pupillary reflexes. Depict LEUKOCORIA of RETINOBLASTOMA: the RIGHT pupil returns a bright WHITE / creamy-yellow PUPILLARY REFLEX (LEUKOCORIA) instead of the normal red-orange glow, while the LEFT pupil shows a NORMAL symmetric RED-ORANGE reflex for contrast. Both eyes are otherwise white and quiet with no redness, discharge, or lid swelling. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - White pupillary reflex (leukocoria) in one eye
  - Normal red-orange reflex in the contralateral eye
  - Quiet, non-inflamed external eyes
  - Authentic infant red-reflex flash photograph
- **Avoid (negative prompt):** bilaterally symmetric normal red reflexes as the intended finding; a red conjunctival injection or discharge (conjunctivitis); a cloudy corneal opacity or a large corneal white lesion; a fundoscopic internal-eye view (this is an external red-reflex photo); an adult face; annotations.
- **Real-image fallback:** American Academy of Ophthalmology / CDC image library - search "leukocoria red reflex retinoblastoma"; Wikimedia Commons "leukocoria retinoblastoma".

### s3-0323 - Acute pericarditis  (Step 3 - Emergency Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw diffuse concave-upward ST elevation with PR-segment depression across multiple leads. Strongly recommend a REAL de-identified acute-pericarditis 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 34-year-old man with 2 days of sharp pleuritic chest pain worse lying flat and better sitting forward after a viral illness, with a three-component friction rub and hemodynamic stability; the tracing must show diffuse concave-upward ST-segment elevation across multiple leads with associated PR-segment depression.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict ACUTE PERICARDITIS: DIFFUSE, CONCAVE-UPWARD (saddle-shaped) ST-SEGMENT ELEVATION present across MULTIPLE leads spanning both limb and precordial territories (I, II, aVF, V2-V6) rather than a single coronary territory, together with PR-SEGMENT DEPRESSION in those same leads and reciprocal PR ELEVATION with ST depression in aVR. The rhythm is regular sinus with narrow QRS and no pathologic Q waves; morphology consistent across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diffuse concave-upward ST elevation across multiple (non-territorial) leads
  - PR-segment depression (with reciprocal PR elevation/ST depression in aVR)
  - Sinus rhythm, narrow QRS, no pathologic Q waves
  - Standard pink ECG grid
- **Avoid (negative prompt):** convex/tombstone ST elevation localized to one coronary territory with reciprocal ST depression and Q waves (STEMI) as the intended finding; low-voltage complexes with electrical alternans; transient single-territory ST elevation; a delta wave; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "acute pericarditis ECG diffuse ST elevation PR depression"; Wikimedia Commons "pericarditis ECG". Prefer the app vector tracing.

### s3-0324 - Epidural hematoma  (Step 3 - Emergency Medicine)
- **Case context:** 20-year-old man struck in the side of the head by a baseball with a brief loss of consciousness, then an hour-long lucid interval before rapid confusion and difficulty arousing, now with one fixed dilated pupil; the image is a noncontrast head CT showing a biconvex (lens-shaped) hyperdense extra-axial collection that does not cross suture lines.
- **Modality:** Noncontrast head CT, axial slice, brain window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial NONCONTRAST HEAD CT in diagnostic grayscale, brain window, anatomically accurate cranial and brain anatomy with realistic CT noise and a rendered skull. Depict an acute EPIDURAL HEMATOMA: a BICONVEX, LENS-SHAPED (lentiform) HYPERDENSE (bright white, acute blood) extra-axial collection hugging the inner table of the skull over the temporoparietal convexity, its margins bulging inward and sharply CONFINED so it DOES NOT cross the cranial suture lines. There is local MASS EFFECT - effacement of adjacent sulci, compression of the ipsilateral lateral ventricle, and slight MIDLINE SHIFT away from the clot. A subtle overlying skull fracture may be present. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Biconvex (lens-shaped) hyperdense extra-axial collection
  - Confined by sutures (does not cross suture lines)
  - Mass effect with sulcal effacement and midline shift
  - Authentic noncontrast head CT, brain window
- **Avoid (negative prompt):** a crescentic collection spreading along the convexity and crossing sutures (subdural) as the intended finding; blood filling the basal cisterns/sulci (subarachnoid); a focal intraparenchymal hematoma; a hypodense wedge infarct; a normal symmetric brain; a bone-window-only image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "epidural hematoma CT biconvex lens-shaped"; Wikimedia Commons "epidural hematoma CT".

### s3-0361 - Primary sclerosing cholangitis  (Step 3 - Internal Medicine)
- **Case context:** 35-year-old man with several-year ulcerative colitis, fatigue and pruritus, a cholestatic pattern with markedly elevated alkaline phosphatase, and no fever or right-upper-quadrant pain; the image is an MRCP showing multifocal intrahepatic and extrahepatic bile-duct strictures alternating with segments of dilatation, producing a beaded appearance.
- **Modality:** Magnetic resonance cholangiopancreatography (MRCP), heavily T2-weighted maximum-intensity-projection image (DICOM-like grayscale, bright fluid).
- **Prompt:** Photorealistic MAGNETIC RESONANCE CHOLANGIOPANCREATOGRAPHY (MRCP) maximum-intensity-projection image in diagnostic grayscale with a dark background and BRIGHT high-signal fluid, anatomically accurate biliary tree, gallbladder, and pancreatic duct. Depict PRIMARY SCLEROSING CHOLANGITIS: the INTRAHEPATIC and EXTRAHEPATIC BILE DUCTS show MULTIFOCAL short STRICTURES (narrowed/pruned segments) ALTERNATING with intervening mildly DILATED segments, producing the classic BEADED, irregular "string-of-beads" appearance with pruning of peripheral intrahepatic branches. The pancreatic duct is normal; gallbladder and duodenum correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multifocal biliary strictures alternating with dilated segments (beaded)
  - Both intrahepatic and extrahepatic duct involvement with peripheral pruning
  - Bright-fluid MRCP MIP appearance on a dark background
  - Normal pancreatic duct
- **Avoid (negative prompt):** a single dominant distal stricture with uniform upstream dilation and a stone (choledocholithiasis/malignant obstruction) as the intended finding; a smoothly dilated biliary tree with no strictures; the double-duct sign of pancreatic head cancer; a normal smooth biliary tree; a soft-tissue CT slice; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "primary sclerosing cholangitis MRCP beaded strictures"; Wikimedia Commons "primary sclerosing cholangitis MRCP".

### s3-0365 - Wilms tumor  (Step 3 - Pediatrics)
- **Case context:** 3-year-old previously healthy girl with a smooth, firm flank mass that does not cross the midline, mild hypertension, one episode of painless hematuria, otherwise thriving; the image is an abdominal ultrasound showing a large, well-circumscribed solid mass arising from and within the kidney.
- **Modality:** Abdominal (renal) ULTRASOUND, grayscale sector view (DICOM-like), pediatric.
- **Prompt:** Photorealistic pediatric ABDOMINAL (renal) ULTRASOUND image in diagnostic grayscale, sector field with realistic fine speckle texture and DICOM-like appearance. Depict a WILMS TUMOR: a LARGE, WELL-CIRCUMSCRIBED, predominantly SOLID heterogeneous MASS arising from and EXPANDING the KIDNEY, with a thin rim/claw of preserved echogenic RENAL PARENCHYMA stretched around one margin confirming an intrarenal origin. The mass distorts the renal contour and displaces the collecting system; the remaining normal kidney, liver, and diaphragm are correctly rendered for context. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Large well-circumscribed solid mass arising from within the kidney (claw of renal parenchyma)
  - Distortion of the renal contour and collecting system
  - Predominantly solid (not purely cystic) architecture
  - Authentic grayscale pediatric renal ultrasound appearance
- **Avoid (negative prompt):** a suprarenal mass with calcification crossing the midline and encasing the aorta, separate from the kidney (neuroblastoma) as the intended finding; a dilated anechoic collecting system with no solid tissue (hydronephrosis); multiple cysts replacing both kidneys (polycystic); a normal kidney; a CT/MRI cross-section; a color-Doppler-only image; annotations or calipers.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "Wilms tumor nephroblastoma renal ultrasound solid mass"; Wikimedia Commons "Wilms tumor ultrasound".

### s3-0373 - Central retinal artery occlusion  (Step 3 - Emergency Medicine)
- **Case context:** 68-year-old man with atherosclerotic risk factors and sudden painless complete monocular vision loss, with a relative afferent pupillary defect in the affected eye; the image is a fundus photograph showing a diffusely pale, edematous retina with a cherry-red spot at the macula.
- **Modality:** Dilated FUNDUS (retinal) photograph, color fundus camera image.
- **Prompt:** Photorealistic COLOR FUNDUS PHOTOGRAPH of an adult retina through a dilated pupil, circular fundus-camera field, accurate ophthalmoscopic detail. Depict a CENTRAL RETINAL ARTERY OCCLUSION: a DIFFUSELY PALE, opacified, edematous (whitened, milky) RETINA from ischemic inner-retinal swelling, with a striking CHERRY-RED SPOT at the FOVEA/MACULA (the thin foveola letting the intact choroidal red show through against the surrounding pale retina). The retinal ARTERIES are ATTENUATED/thread-like with segmented (boxcar) flow; the optic disc is pale. Background choroidal pattern correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diffusely pale, edematous (whitened) retina
  - Cherry-red spot at the macula
  - Attenuated retinal arteries (boxcarring)
  - Authentic circular color fundus photograph
- **Avoid (negative prompt):** a creamy-white elevated retinal mass with feeder vessels (retinoblastoma) as the intended finding; a blood-and-thunder fundus with widespread hemorrhages and a swollen disc (central retinal vein occlusion); dot-blot hemorrhages and hard exudates (diabetic retinopathy); a normal orange fundus; a cupped glaucomatous disc; an external eye photo; annotations.
- **Real-image fallback:** Radiopaedia / American Academy of Ophthalmology library - search "central retinal artery occlusion cherry red spot fundus"; Wikimedia Commons "central retinal artery occlusion fundus".

### s3-0375 - Achalasia  (Step 3 - Surgery)
- **Case context:** 45-year-old man with a year of progressive dysphagia to solids AND liquids from the outset, regurgitation of undigested food, modest weight loss, and occasional retrosternal discomfort; the image is a barium esophagram showing a dilated esophageal body tapering to a smooth bird-beak narrowing at the gastroesophageal junction.
- **Modality:** Barium esophagram (contrast swallow), upright frontal projection, fluoroscopic grayscale.
- **Prompt:** Photorealistic upright frontal BARIUM ESOPHAGRAM (contrast swallow) in fluoroscopic grayscale with anatomically accurate thoracic esophageal course, dense white barium column. Depict ACHALASIA: a DILATED thoracic ESOPHAGEAL BODY holding a column of barium (often with a retained air-fluid level superiorly) that TAPERS SMOOTHLY and symmetrically to a narrow point at the GASTROESOPHAGEAL JUNCTION - the classic BIRD-BEAK narrowing - with delayed emptying into the stomach. The narrowing is smooth and symmetric without a shouldered mass. Spine, diaphragm, and gastric bubble correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Dilated esophageal body proximal to the narrowing
  - Smooth, symmetric bird-beak taper at the gastroesophageal junction
  - Barium hold-up with delayed emptying
  - Authentic upright barium esophagram appearance
- **Avoid (negative prompt):** an irregular shouldered stricture with mucosal destruction (carcinoma) as the intended finding; a posterior cervical outpouching (Zenker) as the intended finding; a corkscrew multiple-contraction esophagus (spasm); a lower-esophageal ring; a normal thin esophagus; an axial CT; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "achalasia barium swallow bird beak dilated esophagus"; Wikimedia Commons "achalasia bird beak barium".

### s3-0404 - Placenta accreta spectrum  (Step 3 - Obstetrics & Gynecology)
- **Case context:** 34-year-old woman at 32 weeks with a known placenta previa and two prior cesarean deliveries, no bleeding, undergoing surveillance ultrasound to plan delivery; the image is an obstetric ultrasound showing multiple irregular placental lacunae, loss of the normal hypoechoic retroplacental clear zone, and thinning of the myometrium beneath the placenta, with increased vascularity at the uterine-bladder interface on Doppler.
- **Modality:** Obstetric ULTRASOUND with color Doppler, grayscale sector with a color box (DICOM-like), sagittal lower-uterine view.
- **Prompt:** Photorealistic OBSTETRIC ULTRASOUND image in diagnostic grayscale with a superimposed color-Doppler box, sagittal view of the lower uterine segment and maternal bladder, realistic fine speckle texture and DICOM-like appearance. Depict PLACENTA ACCRETA SPECTRUM: an anterior low PLACENTA with MULTIPLE irregular intraplacental VASCULAR LACUNAE (anechoic moth-eaten lakes), LOSS of the normal hypoechoic RETROPLACENTAL CLEAR ZONE, marked THINNING/loss of the underlying MYOMETRIUM, and INCREASED turbulent VASCULARITY with bridging color-Doppler vessels crossing the UTERINE-BLADDER INTERFACE toward the bladder wall. The fetal presenting part and bladder are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Multiple intraplacental vascular lacunae
  - Loss of the retroplacental clear zone with thinned myometrium
  - Increased vascularity / bridging vessels at the uterine-bladder interface
  - Authentic grayscale obstetric ultrasound with a color-Doppler box
- **Avoid (negative prompt):** a normal placenta with an intact hypoechoic clear zone and smooth bladder line as the intended finding; a simple previa without lacunae or invasion; a retroplacental hematoma (abruption); an empty uterus; a fetal-only view; a CT/MRI cross-section; annotations or calipers dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "placenta accreta spectrum ultrasound lacunae loss retroplacental clear zone"; Wikimedia Commons "placenta accreta ultrasound".

### s3-0405 - Zenker diverticulum  (Step 3 - Surgery)
- **Case context:** 70-year-old man with months of progressive dysphagia, regurgitation of undigested food hours after meals, chronic halitosis, a gurgling neck sensation, undigested food on the pillow at night, and episodes of coughing and aspiration; the image is a barium esophagram showing a posterior midline outpouching at the pharyngoesophageal junction just above the upper esophageal sphincter.
- **Modality:** Barium esophagram (contrast swallow), lateral projection, fluoroscopic grayscale.
- **Prompt:** Photorealistic lateral BARIUM ESOPHAGRAM (contrast swallow) in fluoroscopic grayscale with anatomically accurate pharynx, cervical spine, and cervical esophagus, dense white barium column. Depict a ZENKER DIVERTICULUM: at the PHARYNGOESOPHAGEAL JUNCTION, JUST ABOVE the upper esophageal sphincter (cricopharyngeus level), a POSTERIOR MIDLINE out-pouching (false diverticulum) projects backward and downward and RETAINS a pool of barium, overhanging the cervical esophagus below; a horizontal cricopharyngeal bar may indent the barium column. The distal esophagus is normal caliber. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Posterior contrast-filled outpouching at the pharyngoesophageal junction
  - Retained barium pooling within the sac, above the upper esophageal sphincter
  - Possible cricopharyngeal bar indentation
  - Authentic lateral barium esophagram appearance
- **Avoid (negative prompt):** a smooth bird-beak tapering at the gastroesophageal junction (achalasia) as the intended finding; a distal epiphrenic diverticulum near the diaphragm; a corkscrew esophagus (spasm); a lower-esophageal Schatzki ring; an intraluminal mass; an axial CT cross-section; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "Zenker diverticulum barium swallow pharyngoesophageal"; Wikimedia Commons "Zenker diverticulum barium".

### s3-0406 - Hirschsprung disease  (Step 3 - Pediatrics)
- **Case context:** Term neonate who did not pass meconium in the first 48 hours, now with progressive abdominal distension and bilious vomiting, a tight anal canal on rectal exam, and an explosive gush of stool and gas on finger withdrawal; the image is a contrast enema showing a narrow distal rectosigmoid segment with an abrupt transition zone to dilated proximal colon.
- **Modality:** Contrast enema fluoroscopy study, frontal projection, neonatal (grayscale).
- **Prompt:** Photorealistic frontal CONTRAST ENEMA fluoroscopy study of a neonate in grayscale, dense white rectally-instilled contrast outlining the colon, DICOM-like fluoroscopic appearance. Depict HIRSCHSPRUNG DISEASE: a NARROW, non-distended DISTAL RECTOSIGMOID (aganglionic) segment of small caliber, with an abrupt CONE-SHAPED TRANSITION ZONE to a MARKEDLY DILATED, contrast-filled PROXIMAL COLON, and a reversed rectosigmoid ratio (rectum narrower than sigmoid). Retained contrast and a mildly irregular transition contour are shown; the neonatal bony pelvis and lumbar spine are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Narrow distal rectosigmoid (aganglionic) segment
  - Abrupt cone-shaped transition zone to dilated proximal colon
  - Reversed rectosigmoid caliber ratio
  - Authentic neonatal contrast enema appearance
- **Avoid (negative prompt):** a microcolon with distal small-bowel meconium plugs (meconium ileus) as the intended finding; a corkscrew proximal jejunum (malrotation); a uniformly dilated colon with no transition; free intraperitoneal air; a plain radiograph without contrast; a CT cross-section; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "Hirschsprung disease contrast enema transition zone rectosigmoid"; Wikimedia Commons "Hirschsprung contrast enema".

### s3-0276 - Symptomatic severe aortic stenosis  (Step 3 - Internal Medicine)
- **Case context:** 72-year-old man with months of exertional dyspnea and exertional syncope, a harsh late-peaking crescendo-decrescendo systolic murmur at the right upper sternal border radiating to both carotids, and diminished delayed carotid upstrokes (parvus et tardus); the image is a transthoracic echocardiogram showing a calcified trileaflet aortic valve with a valve area of 0.8 cm2, mean gradient 45 mm Hg, and preserved ejection fraction.
- **Modality:** Transthoracic echocardiogram, parasternal long-axis / short-axis view of the aortic valve, grayscale sector (DICOM-like).
- **Prompt:** Photorealistic TRANSTHORACIC ECHOCARDIOGRAM of the AORTIC VALVE (parasternal long-axis with a short-axis inset feel), diagnostic grayscale sector with realistic speckle texture and DICOM-like appearance. Depict SEVERE CALCIFIC AORTIC STENOSIS: a THICKENED, densely CALCIFIED (echobright) trileaflet AORTIC VALVE with markedly RESTRICTED leaflet opening in systole and a narrow residual orifice, bright acoustic shadowing from the calcium. The LEFT VENTRICLE shows CONCENTRIC HYPERTROPHY (thickened walls) with a normal-sized cavity (preserved systolic function). Aortic root, left atrium, and interventricular septum correctly rendered. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Thickened, heavily calcified trileaflet aortic valve with restricted opening
  - Narrow residual systolic orifice with calcium shadowing
  - Concentric LV hypertrophy with preserved cavity size
  - Authentic grayscale echocardiogram of the aortic valve
- **Avoid (negative prompt):** a diastolic regurgitant jet into the LV outflow tract (aortic regurgitation) as the intended finding; a thickened doming hockey-stick mitral valve with a big left atrium (mitral stenosis); a bicuspid valve emphasized as the intended finding; a large pericardial effusion; a normal thin pliable aortic valve; a CT/MRI cross-section; annotations or calipers.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "calcific aortic stenosis echocardiogram restricted valve parasternal"; Wikimedia Commons "aortic stenosis echocardiography".

### s3-0282 - Incidental solitary pulmonary nodule  (Step 3 - Internal Medicine)
- **Case context:** 55-year-old woman with a 20-pack-year smoking history and an incidentally found lung-base nodule on abdominal CT, asymptomatic, no prior imaging, no adenopathy or weight loss, with a low-to-intermediate malignancy risk, now getting a dedicated chest CT; the image is a chest CT showing a single 6-mm smooth-bordered solid pulmonary nodule in the right lower lobe without spiculation, cavitation, or associated adenopathy.
- **Modality:** CT of the chest, axial slice, lung window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CT of the chest in diagnostic grayscale, LUNG WINDOW, anatomically accurate thoracic anatomy with sharp bronchovascular markings and realistic CT noise. Depict an INCIDENTAL SOLITARY PULMONARY NODULE: a SINGLE small (about 6 mm) SOLID, ROUNDED PULMONARY NODULE with SMOOTH, well-defined BORDERS in the RIGHT LOWER LOBE, WITHOUT spiculation, lobulation, cavitation, or calcification, surrounded entirely by normal aerated lung. There is NO surrounding consolidation, NO satellite nodules, and NO hilar or mediastinal adenopathy. The remaining lungs, airways, heart, and chest wall are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Single small solid nodule with smooth, well-defined borders
  - No spiculation, cavitation, or associated adenopathy
  - Surrounded by otherwise normal aerated lung
  - Authentic lung-window axial chest CT appearance
- **Avoid (negative prompt):** a large spiculated mass with pleural tail and adenopathy (frank malignancy) as the intended finding; a thick-walled cavitary lesion; multiple/miliary nodules; a lobar consolidation; honeycombing fibrosis; a soft-tissue window; a normal lung with no nodule; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "solitary pulmonary nodule benign smooth CT lung window"; Wikimedia Commons "solitary pulmonary nodule CT".

### s3-0326 - Acute pericarditis  (Step 3 - Internal Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw diffuse concave-upward ST elevation with PR-segment depression across the limb and precordial leads. Strongly recommend a REAL de-identified acute-pericarditis 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 28-year-old man with 2 days of sharp pleuritic central chest pain worse lying flat and eased sitting forward after a viral illness, with a three-component friction rub, normal troponin, and no effusion on echo; the tracing must show diffuse concave-upward ST-segment elevation across the limb and precordial leads with associated PR-segment depression.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict ACUTE PERICARDITIS: DIFFUSE, CONCAVE-UPWARD (saddle-shaped) ST-SEGMENT ELEVATION present across MULTIPLE limb and precordial leads (I, II, aVF, V2-V6) rather than a single coronary territory, with PR-SEGMENT DEPRESSION in those same leads and reciprocal PR ELEVATION with ST depression in aVR. The rhythm is regular sinus with narrow QRS and no pathologic Q waves; morphology consistent across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Diffuse concave-upward ST elevation across multiple (non-territorial) leads
  - PR-segment depression (with reciprocal changes in aVR)
  - Sinus rhythm, narrow QRS, no pathologic Q waves
  - Standard pink ECG grid
- **Avoid (negative prompt):** convex/tombstone ST elevation localized to one coronary territory with reciprocal depression and Q waves (STEMI) as the intended finding; low-voltage complexes with electrical alternans; a single-territory transient ST elevation; a delta wave; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "acute pericarditis ECG diffuse ST elevation PR depression"; Wikimedia Commons "pericarditis ECG". Prefer the app vector tracing.

### s3-0332 - Idiopathic pulmonary fibrosis  (Step 3 - Internal Medicine)
- **Case context:** 68-year-old man with 14 months of progressive exertional dyspnea and dry cough, fine bibasilar end-inspiratory crackles, early clubbing, an evaluation excluding connective tissue disease, hypersensitivity pneumonitis, drug exposure, and heart failure, and a restrictive PFT with reduced DLCO; the image is a high-resolution CT showing peripheral, subpleural, basal-predominant reticulation with honeycombing and traction bronchiectasis (usual interstitial pneumonia pattern).
- **Modality:** High-resolution CT (HRCT) of the chest, axial slice at the lung bases, lung window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial HIGH-RESOLUTION CT of the chest in diagnostic grayscale, lung window, anatomically accurate thoracic anatomy with sharp bronchovascular markings and realistic CT noise. Depict a USUAL INTERSTITIAL PNEUMONIA pattern of IDIOPATHIC PULMONARY FIBROSIS: PERIPHERAL, SUBPLEURAL, BASAL-PREDOMINANT reticulation with clustered HONEYCOMBING - stacked subpleural cystic air spaces with well-defined walls - and TRACTION BRONCHIECTASIS (irregularly dilated, distorted airways within fibrotic lung). The abnormality is greatest in the posterior subpleural lung bases and spares the central and upper lung. Heart, mediastinum, and chest wall correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Peripheral, subpleural, basal-predominant reticulation
  - Honeycombing (clustered subpleural cysts with defined walls)
  - Traction bronchiectasis within fibrotic lung
  - Relative sparing of central/upper lung; authentic lung-window HRCT
- **Avoid (negative prompt):** upper-lobe or peribronchovascular predominance; diffuse ground-glass with mosaic air-trapping and centrilobular nodules (hypersensitivity pneumonitis) as the intended finding; bilateral hilar nodal masses (sarcoidosis); patchy consolidations; a soft-tissue window; a large pleural effusion; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "usual interstitial pneumonia idiopathic pulmonary fibrosis HRCT honeycombing"; Wikimedia Commons "UIP pattern HRCT".

### s3-0333 - Ankylosing spondylitis  (Step 3 - Internal Medicine)
- **Case context:** 26-year-old HLA-B27-positive man with more than 6 months of inflammatory low back pain and stiffness (worst in the early morning, over an hour, better with exercise), reduced lumbar flexion and limited chest expansion, and elevated inflammatory markers after excluding infection and mechanical causes; the image is a pelvic radiograph showing bilateral sacroiliac joint erosions with sclerosis and partial joint-space fusion consistent with sacroiliitis.
- **Modality:** Anteroposterior (AP) PELVIS RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic ANTEROPOSTERIOR (AP) PELVIS RADIOGRAPH of a young adult in grayscale with DICOM-like dynamic range and anatomically accurate bony pelvis, both hips, and sacroiliac joints. Depict SACROILIITIS of ANKYLOSING SPONDYLITIS: BILATERAL, roughly SYMMETRIC sacroiliac joint changes - irregular subchondral EROSIONS giving a blurred pseudo-widened joint margin, adjacent reactive SCLEROSIS on both iliac and sacral sides, and PARTIAL JOINT-SPACE NARROWING with early BONY FUSION (ankylosis) bridging the joints. The hips, pubic symphysis, and lower lumbar spine are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Bilateral, symmetric sacroiliac joint involvement
  - Subchondral erosions with adjacent sclerosis
  - Partial joint-space narrowing and early bony fusion
  - Authentic AP pelvis radiograph appearance
- **Avoid (negative prompt):** a unilateral destructive septic sacroiliac joint as the intended finding; a displaced femoral neck or pubic ramus fracture; a normal pelvis with clean SI joints; isolated hip osteoarthritis; a lateral/frog-leg view; a CT/MRI cross-section; hardware, annotations, or calipers.
- **Real-image fallback:** Radiopaedia - search "ankylosing spondylitis bilateral sacroiliitis pelvis radiograph"; Wikimedia Commons "sacroiliitis ankylosing spondylitis x-ray".

### s3-0336 - Calcium channel blocker overdose  (Step 3 - Emergency Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw sinus bradycardia with a first-degree AV block. Strongly recommend a REAL de-identified calcium-channel-blocker-toxicity rhythm strip (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 62-year-old woman 90 minutes after an intentional extended-release verapamil overdose, lightheaded and cool with blood pressure 74/40 and heart rate 42 despite fluids and atropine, intact mentation, clear lungs, and hyperglycemia; the rhythm strip must show sinus bradycardia with a first-degree atrioventricular block and no ischemic ST changes.
- **Modality:** ECG rhythm strip (single/multi-lead) on standard red/pink grid.
- **Prompt:** Photorealistic clinical ECG rhythm strip on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines and a clean black waveform trace. Depict CALCIUM CHANNEL BLOCKER (verapamil) TOXICITY: SINUS BRADYCARDIA at a slow regular rate (about 40-45/min) with a normal upright P wave before every QRS, and a PROLONGED PR INTERVAL (FIRST-DEGREE AV BLOCK - PR clearly longer than one large box) with each P conducting to a NARROW QRS. The ST segments and T waves are NORMAL with NO ischemic ST elevation or depression. Physiologically consistent, evenly spaced beats. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Sinus bradycardia (slow regular rate, P before every QRS)
  - Prolonged PR interval (first-degree AV block) with narrow conducted QRS
  - No ischemic ST-segment changes
  - Standard pink ECG grid
- **Avoid (negative prompt):** ST-segment elevation or depression of ischemia as the intended finding; a wide-complex escape rhythm or complete heart block with AV dissociation as the intended finding; an irregularly irregular rhythm; a fast tachycardia; tall tented T waves; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "calcium channel blocker verapamil toxicity bradycardia first degree AV block ECG"; Wikimedia Commons "first degree AV block ECG". Prefer the app vector tracing.

### s3-0381 - Active pulmonary tuberculosis  (Step 3 - Internal Medicine)
- **Case context:** 39-year-old recent emigrant with 6 weeks of productive cough, drenching night sweats, and 5 kg weight loss, chronically ill-appearing with low-grade fever, placed in airborne isolation, with positive AFB smears and a positive M. tuberculosis nucleic acid amplification test, normal liver function, and no HIV; the image is a chest radiograph showing a right upper-lobe cavitary infiltrate with surrounding nodular opacities.
- **Modality:** Frontal (PA) CHEST RADIOGRAPH, grayscale DICOM-like.
- **Prompt:** Photorealistic frontal (PA) CHEST RADIOGRAPH of an adult in grayscale with DICOM-like dynamic range and anatomically accurate thoracic anatomy. Depict ACTIVE REACTIVATION PULMONARY TUBERCULOSIS: in the RIGHT UPPER LOBE (apical/posterior segment) a THICK-WALLED CAVITY - a rounded lucency with a dense irregular wall - with SURROUNDING NODULAR and fibronodular OPACITIES and patchy consolidation, plus some volume loss elevating the right hilum. The remaining lung is relatively clear, the cardiac silhouette is normal, and the ribs, clavicles, and diaphragm are correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Upper-lobe thick-walled cavity
  - Surrounding nodular / fibronodular opacities and patchy consolidation
  - Upper-zone predominance with some volume loss
  - Authentic frontal chest radiograph appearance
- **Avoid (negative prompt):** symmetric bilateral hilar adenopathy with clear lungs (sarcoidosis) as the intended finding; a basal-predominant lobar pneumonia; a peripheral solitary spiculated nodule; bilateral perihilar bat-wing edema; a large pleural effusion filling the hemithorax; a normal chest; a CT cross-section; annotations or tubes.
- **Real-image fallback:** Radiopaedia - search "reactivation pulmonary tuberculosis upper lobe cavity chest radiograph"; Wikimedia Commons "pulmonary tuberculosis cavitary x-ray".

### s3-0386 - Post-cardiac-arrest targeted temperature management  (Step 3 - Emergency Medicine)  [ECG]
- **WARNING:** AI image generators render ECG tracings as physiologically meaningless gibberish and cannot reliably draw a post-arrest sinus rhythm with nonspecific T-wave changes and NO ST elevation. Strongly recommend a REAL de-identified post-ROSC 12-lead ECG (e.g., LITFL) or the app's own accurate vector-drawn tracing as the PRIMARY asset; use any AI output only as a placeholder and QA every complex against the criteria below.
- **Case context:** 58-year-old man who collapsed in ventricular fibrillation and achieved return of spontaneous circulation after CPR and two defibrillations, now intubated, hemodynamically stabilized on low-dose vasopressor, and comatose without purposeful movement, with no reversible mechanical cause on echo, as post-resuscitation care is planned; the tracing must show a post-return-of-circulation sinus rhythm at 92/min with no ST-segment elevation and nonspecific T-wave changes.
- **Modality:** 12-lead ECG on standard red/pink grid.
- **Prompt:** Photorealistic clinical 12-lead ECG printout on standard pink-red ECG graph paper with fine 1 mm and bold 5 mm gridlines, clean black waveform trace, standard 3x4 lead layout plus a rhythm strip. Depict a POST-RESUSCITATION (post-ROSC) tracing: a regular SINUS RHYTHM at a normal rate (about 92/min) with an upright P wave before every narrow QRS, and NO ST-SEGMENT ELEVATION in any territory - the ST segments sit at baseline. There are only NONSPECIFIC, low-amplitude T-WAVE flattening/inversion changes scattered across a few leads, without reciprocal patterns or pathologic Q waves. Morphology consistent across leads. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Sinus rhythm at a normal rate (P before every narrow QRS)
  - NO ST-segment elevation in any territory (ST at baseline)
  - Only nonspecific T-wave changes
  - Standard pink ECG grid
- **Avoid (negative prompt):** territorial convex ST-segment elevation with reciprocal change (STEMI) as the intended finding; a coarse ventricular fibrillation baseline; a wide-complex tachycardia; diffuse concave ST elevation with PR depression (pericarditis); electrical alternans; random gibberish waveforms; wrong grid color; annotations or lead labels.
- **Real-image fallback:** Life in the Fast Lane (litfl.com ECG library) - search "post cardiac arrest ROSC ECG no ST elevation nonspecific T wave"; Wikimedia Commons "sinus rhythm ECG normal". Prefer the app vector tracing.

### s3-0389 - Boerhaave esophageal perforation  (Step 3 - Surgery)
- **Case context:** 55-year-old man with sudden severe retrosternal and epigastric pain immediately after forceful vomiting following a large meal and heavy drinking, diaphoretic and tachycardic with subcutaneous crepitus at the neck base and a mediastinal crunch (Hamman sign), kept nil per os; the image is a CT of the chest showing pneumomediastinum, a left pleural effusion, and contrast extravasation from a distal esophageal tear.
- **Modality:** Contrast-enhanced CT of the chest (with oral/luminal contrast), axial slice, soft-tissue/mediastinal window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the chest in diagnostic grayscale, mediastinal (soft-tissue) window, anatomically accurate thoracic anatomy with contrast-opacified vessels and realistic CT noise. Depict BOERHAAVE ESOPHAGEAL PERFORATION: locules of lucent GAS tracking through the MEDIASTINUM around the esophagus and great vessels (PNEUMOMEDIASTINUM), a moderate LEFT PLEURAL EFFUSION (dependent fluid, sometimes with a small hydropneumothorax), and a focus of EXTRAVASATED luminal CONTRAST leaking from a tear in the DISTAL ESOPHAGUS into the adjacent mediastinum. Periesophageal fat stranding and a thick-walled distal esophagus are shown; heart, aorta, and vertebral body correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Pneumomediastinum (gas locules around the esophagus/mediastinum)
  - Left pleural effusion (with or without hydropneumothorax)
  - Extravasated luminal contrast from a distal esophageal tear
  - Contrast-enhanced axial chest CT, mediastinal window
- **Avoid (negative prompt):** a simple lobar pneumonia or isolated effusion with no mediastinal gas or leak as the intended finding; a tension pneumothorax with mediastinal shift as the dominant finding; free subdiaphragmatic air from a perforated ulcer; a dissection flap in the aorta; a normal mediastinum; a lung-window-only image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "Boerhaave syndrome esophageal perforation CT pneumomediastinum contrast extravasation"; Wikimedia Commons "esophageal perforation CT pneumomediastinum".

### s3-0394 - Symptomatic uterine leiomyoma  (Step 3 - Obstetrics & Gynecology)
- **Case context:** 37-year-old woman with months of heavy prolonged menstrual bleeding with clots, pelvic pressure, urinary frequency, an enlarged firm irregular uterus, iron-deficiency anemia, and a desire to preserve fertility, after excluding pregnancy and endometrial pathology; the image is a transvaginal ultrasound showing an enlarged uterus with several well-circumscribed hypoechoic intramural leiomyomas.
- **Modality:** Transvaginal pelvic ULTRASOUND, grayscale sector view (DICOM-like), sagittal uterus.
- **Prompt:** Photorealistic TRANSVAGINAL PELVIC ULTRASOUND image in diagnostic grayscale, sagittal view of the UTERUS, realistic fine speckle texture, sector edges, and DICOM-like appearance. Depict UTERINE LEIOMYOMAS (fibroids): an ENLARGED, bulky UTERUS with a lobulated contour containing SEVERAL WELL-CIRCUMSCRIBED, ROUNDED, HYPOECHOIC INTRAMURAL masses with a whorled internal texture and posterior acoustic shadowing, distorting the myometrium and indenting/displacing the central endometrial stripe. The masses are clearly demarcated from surrounding myometrium; bladder and cervix correctly rendered. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Enlarged uterus with several well-circumscribed hypoechoic intramural masses
  - Whorled texture with posterior shadowing, distorting the myometrium
  - Displacement/indentation of the endometrial stripe
  - Authentic grayscale transvaginal ultrasound appearance
- **Avoid (negative prompt):** a thickened irregular endometrial lining or a polyp within the cavity as the intended finding; a complex cystic-and-solid adnexal mass with ascites (ovarian malignancy); an intrauterine gestational sac; a normal small uterus with no masses; a CT/MRI cross-section; a color-Doppler-only image; annotations or calipers dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "uterine leiomyoma fibroid transvaginal ultrasound intramural"; Wikimedia Commons "uterine fibroid ultrasound".

### s3-0410 - Infected pancreatic necrosis (step-up management)  (Step 3 - Surgery)
- **Case context:** 49-year-old man admitted 4 weeks earlier with severe gallstone pancreatitis complicated by extensive necrosis, initially improving but now with recurring fevers, worsening abdominal pain, and a rising leukocyte count, hemodynamically stable on the ward, undergoing CT before deciding on intervention; the image is a contrast-enhanced abdominal CT showing a large walled-off peripancreatic collection containing gas bubbles, consistent with infected necrosis.
- **Modality:** Contrast-enhanced CT of the abdomen, axial slice, soft-tissue window (DICOM grayscale).
- **Prompt:** Hyperrealistic axial CONTRAST-ENHANCED CT of the abdomen in diagnostic grayscale, soft-tissue window, radiologically accurate upper-abdominal anatomy with contrast-opacified vessels and realistic CT noise. Depict INFECTED WALLED-OFF PANCREATIC NECROSIS: a LARGE, encapsulated PERIPANCREATIC/lesser-sac COLLECTION with a defined enhancing WALL containing HETEROGENEOUS non-liquefied necrotic debris AND unmistakable FOCI OF GAS (lucent air bubbles / an air-fluid level) within it - the hallmark of infection. The adjacent pancreas shows non-enhancing necrotic segments; peripancreatic fat stranding, the stomach displaced anteriorly, liver, spleen, aorta, and vertebral body correctly rendered. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Large walled-off peripancreatic collection with an enhancing wall
  - Gas bubbles / air-fluid level within the collection (infection)
  - Heterogeneous necrotic debris and non-enhancing pancreatic necrosis
  - Contrast-enhanced axial abdominal CT appearance
- **Avoid (negative prompt):** a simple homogeneous thin-walled fluid collection with NO gas and no debris (uncomplicated pseudocyst) as the intended finding; a diffusely enhancing normal pancreas; a focal hypodense head mass with a double-duct sign (carcinoma); free intraperitoneal air from a hollow-viscus perforation as the dominant finding; a noncontrast image; annotations or calipers.
- **Real-image fallback:** Radiopaedia - search "infected walled-off pancreatic necrosis CT gas bubbles"; Wikimedia Commons "walled off pancreatic necrosis CT".

### s3-0411 - Cervical insufficiency (cerclage management)  (Step 3 - Obstetrics & Gynecology)
- **Case context:** 30-year-old woman (G3P0) at 18 weeks with two prior painless second-trimester losses featuring rapid painless cervical dilation, currently well with no cramping, leaking, bleeding, or signs of infection, undergoing transvaginal ultrasound to assess the cervix before deciding on management; the image is a transvaginal ultrasound showing a shortened cervix measuring 18 mm with funneling of the internal os and no fetal or placental abnormality.
- **Modality:** Transvaginal pelvic ULTRASOUND, grayscale sector view (DICOM-like), sagittal cervix.
- **Prompt:** Photorealistic TRANSVAGINAL PELVIC ULTRASOUND image in diagnostic grayscale, sagittal midline view of the CERVIX in a pregnancy, realistic fine speckle texture, sector edges, and DICOM-like appearance. Depict CERVICAL INSUFFICIENCY: a SHORTENED CERVICAL canal (about 18 mm of closed length) with FUNNELING of the INTERNAL OS - a V/U-shaped opening of the internal os with amniotic fluid dipping down into the upper (funneled) cervical canal, while the distal cervix remains closed. The overlying lower uterine segment, amniotic fluid, and fetal parts above are correctly rendered without placental abnormality. Realistic ultrasound gain gradient and sector edges. no text, no labels, no watermark, no measurement overlays.
- **Must show (QA):**
  - Shortened closed cervical length (about 18 mm)
  - Funneling of the internal os (V/U-shaped) with fluid entering the canal
  - Distal cervix still closed; normal amniotic fluid and fetal parts above
  - Authentic grayscale transvaginal ultrasound of the cervix
- **Avoid (negative prompt):** a normal long closed cervix (over 30 mm) with a tight internal os as the intended finding; a low-lying placenta covering the os (previa) as the intended finding; an adnexal mass; frank bulging membranes with an open external os and a nonviable fetus; a transabdominal or CT/MRI view; annotations or calipers dominating the frame.
- **Real-image fallback:** Radiopaedia / The POCUS Atlas - search "cervical insufficiency short cervix funneling transvaginal ultrasound"; Wikimedia Commons "short cervix funneling ultrasound".
