# Rounds Codex — USMLE Mode: hyperrealistic image prompt sheet

60 AI image-generation prompts (one per illustrated question), each tuned to its
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
