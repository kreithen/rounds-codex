# Rounds Codex — USMLE Mode: hyperrealistic image prompt sheet

116 AI image-generation prompts (one per illustrated question), each tuned to its
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
