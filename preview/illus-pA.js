/*
 * Rounds Codex - USMLE Mode illustration pack A
 * Professional medical-textbook-quality schematic SVGs keyed by question id.
 * Renders on a DARK card: light strokes rgba(210,220,232,...) for anatomy,
 * accent #e0524f (or #d9463f) reserved for the KEY pathologic feature.
 * Radiograph/MRI items emulate a film: faint frame rect fill "#0a0f16".
 * No descriptive caption sentences inside the SVG (the app adds one).
 */
Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, {

  // s1-0002 Mitochondrial (maternal) inheritance pedigree, 3 generations.
  // Affected mother -> ALL children affected; affected father -> NONE affected.
  "s1-0002": '<svg viewBox="0 0 340 260" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke="rgba(210,220,232,.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    // ---- Generation I: affected mother (filled circle) x unaffected father (square)
    '<line x1="120" y1="40" x2="160" y2="40"/>' +               // mating line
    '<circle cx="108" cy="40" r="12" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' + // affected female
    '<rect x="160" y="28" width="24" height="24" fill="none" stroke="rgba(210,220,232,.7)"/>' + // unaffected male
    '<line x1="140" y1="40" x2="140" y2="62"/>' +               // descent
    '<line x1="60" y1="62" x2="220" y2="62"/>' +                // sibship bar (gen II left family)
    // Gen II children of affected mother: ALL affected
    '<line x1="60" y1="62" x2="60" y2="80"/>' +
    '<line x1="110" y1="62" x2="110" y2="80"/>' +
    '<line x1="170" y1="62" x2="170" y2="80"/>' +
    '<line x1="220" y1="62" x2="220" y2="80"/>' +
    '<rect x="48" y="80" width="24" height="24" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' +
    '<circle cx="110" cy="92" r="12" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' +
    '<rect x="158" y="80" width="24" height="24" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' +
    '<circle cx="220" cy="92" r="12" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' +
    // ---- Generation II mating: the affected daughter (cx110) marries in an unaffected male
    '<circle cx="110" cy="150" r="12" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' +   // affected female (II)
    '<rect x="145" y="138" width="24" height="24" fill="none" stroke="rgba(210,220,232,.7)"/>' + // mate
    '<line x1="110" y1="150" x2="145" y2="150"/>' +
    '<line x1="128" y1="150" x2="128" y2="172"/>' +
    '<line x1="90" y1="172" x2="166" y2="172"/>' +             // gen III sibship bar
    '<line x1="90" y1="172" x2="90" y2="188"/>' +
    '<line x1="128" y1="172" x2="128" y2="188"/>' +
    '<line x1="166" y1="172" x2="166" y2="188"/>' +
    '<circle cx="90" cy="200" r="12" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' +   // all affected
    '<rect x="116" y="188" width="24" height="24" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' +
    '<circle cx="166" cy="200" r="12" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' +
    // ---- Affected MALE (gen II, cx220) marries unaffected female: children NONE affected
    '<rect x="208" y="138" width="24" height="24" fill="#e0524f" stroke="rgba(238,244,250,.9)"/>' + // affected male (II)
    '<circle cx="268" cy="150" r="12" fill="none" stroke="rgba(210,220,232,.7)"/>' + // unaffected mate
    '<line x1="232" y1="150" x2="256" y2="150"/>' +
    '<line x1="244" y1="150" x2="244" y2="172"/>' +
    '<line x1="222" y1="172" x2="284" y2="172"/>' +
    '<line x1="222" y1="172" x2="222" y2="188"/>' +
    '<line x1="253" y1="172" x2="253" y2="188"/>' +
    '<line x1="284" y1="172" x2="284" y2="188"/>' +
    '<circle cx="222" cy="200" r="12" fill="none" stroke="rgba(210,220,232,.7)"/>' + // all unaffected
    '<rect x="241" y="188" width="24" height="24" fill="none" stroke="rgba(210,220,232,.7)"/>' +
    '<circle cx="284" cy="200" r="12" fill="none" stroke="rgba(210,220,232,.7)"/>' +
    '</g>' +
    '<g font-family="sans-serif" font-size="9" fill="rgba(210,220,232,.55)">' +
    '<text x="14" y="45">I</text><text x="14" y="97">II</text><text x="14" y="205">III</text></g>' +
    '</svg>',

  // s1-0006 Lewy body: pigmented substantia-nigra neuron with round eosinophilic
  // cytoplasmic inclusion (dense core + pale halo), displaced nucleus, neuromelanin.
  "s1-0006": '<svg viewBox="0 0 320 280" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="308" height="268" fill="rgba(210,220,232,.03)" stroke="rgba(210,220,232,.1)"/>' +
    // faint neighboring neuropil cells
    '<g fill="rgba(210,220,232,.05)" stroke="rgba(210,220,232,.15)" stroke-width="1">' +
    '<circle cx="46" cy="52" r="20"/><circle cx="270" cy="60" r="18"/><circle cx="52" cy="230" r="19"/><circle cx="272" cy="222" r="17"/></g>' +
    // large pigmented neuron cell body with dendritic processes
    '<path d="M120 60 C95 45 70 55 66 60 M198 62 C224 46 250 58 256 66 M96 210 C74 232 66 244 60 250 ' +
    'M214 208 C236 230 250 240 262 246 M160 78 C160 62 158 50 158 40" ' +
    'stroke="rgba(210,220,232,.5)" stroke-width="3.5" stroke-linecap="round" fill="none"/>' +
    '<path d="M160 66 C112 62 78 96 78 140 C78 192 116 224 160 224 C206 224 240 190 240 140 ' +
    'C240 94 206 68 160 66 Z" fill="rgba(210,220,232,.09)" stroke="rgba(238,244,250,.85)" stroke-width="2.4"/>' +
    // long axon
    '<path d="M158 224 C156 244 150 256 138 268" stroke="rgba(210,220,232,.5)" stroke-width="3.5" stroke-linecap="round" fill="none"/>' +
    // fine neuromelanin granules in cytoplasm
    '<g fill="rgba(122,74,43,.55)">' +
    '<circle cx="104" cy="120" r="3"/><circle cx="116" cy="150" r="2.4"/><circle cx="100" cy="168" r="2.8"/>' +
    '<circle cx="128" cy="188" r="2.6"/><circle cx="150" cy="196" r="3"/><circle cx="176" cy="196" r="2.4"/>' +
    '<circle cx="204" cy="176" r="2.8"/><circle cx="214" cy="150" r="3"/><circle cx="200" cy="124" r="2.6"/>' +
    '<circle cx="128" cy="104" r="2.4"/><circle cx="182" cy="98" r="2.8"/><circle cx="112" cy="134" r="2.2"/>' +
    '<circle cx="206" cy="200" r="2.4"/><circle cx="90" cy="150" r="2.6"/></g>' +
    // displaced (eccentric) nucleus with nucleolus
    '<ellipse cx="112" cy="112" rx="26" ry="24" fill="rgba(210,220,232,.08)" stroke="rgba(238,244,250,.7)" stroke-width="1.8"/>' +
    '<circle cx="112" cy="112" r="6" fill="rgba(210,220,232,.5)"/>' +
    // Lewy body: round inclusion, pale halo + dense eosinophilic core (accent)
    '<circle cx="182" cy="158" r="34" fill="rgba(224,82,79,.1)" stroke="rgba(224,82,79,.4)" stroke-width="1.5"/>' +
    '<circle cx="182" cy="158" r="20" fill="#e0524f" fill-opacity="0.95"/>' +
    '<circle cx="182" cy="158" r="10" fill="#a52c29"/>' +
    '<text x="182" y="230" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(210,220,232,.55)">Lewy body</text>' +
    '</svg>',

  // s1-0010 Pemphigus vulgaris direct immunofluorescence: chicken-wire / net
  // pattern of intercellular IgG (accent) between polygonal keratinocytes.
  "s1-0010": '<svg viewBox="0 0 340 260" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="328" height="248" fill="#0a0f16" stroke="rgba(255,255,255,.08)"/>' +
    // suprabasal keratinocyte polygons - drawn as a tessellated net
    '<g stroke-linejoin="round">' +
    // glowing intercellular net (accent) - the "chicken wire"
    '<g stroke="#e0524f" stroke-width="3" stroke-linecap="round" fill="rgba(224,82,79,.05)">' +
    '<path d="M40 40 L96 34 L120 74 L92 108 L44 100 L26 66 Z"/>' +
    '<path d="M96 34 L152 32 L176 66 L154 104 L120 74 Z"/>' +
    '<path d="M152 32 L210 38 L226 74 L200 106 L176 66 Z"/>' +
    '<path d="M210 38 L266 36 L296 66 L270 102 L226 74 Z"/>' +
    '<path d="M44 100 L92 108 L102 150 L70 176 L28 156 L30 116 Z"/>' +
    '<path d="M92 108 L154 104 L164 148 L128 170 L102 150 Z"/>' +
    '<path d="M154 104 L200 106 L214 146 L178 172 L164 148 Z"/>' +
    '<path d="M200 106 L270 102 L300 130 L272 164 L214 146 Z"/>' +
    '<path d="M70 176 L128 170 L138 208 L96 224 L60 202 Z"/>' +
    '<path d="M128 170 L178 172 L192 206 L150 224 L138 208 Z"/>' +
    '<path d="M178 172 L272 164 L296 196 L246 222 L192 206 Z"/>' +
    '</g>' +
    // faint keratinocyte nuclei
    '<g fill="rgba(120,160,210,.35)">' +
    '<circle cx="72" cy="70" r="7"/><circle cx="134" cy="66" r="7"/><circle cx="198" cy="70" r="7"/><circle cx="256" cy="68" r="7"/>' +
    '<circle cx="72" cy="138" r="7"/><circle cx="132" cy="134" r="7"/><circle cx="192" cy="132" r="7"/><circle cx="252" cy="132" r="7"/>' +
    '<circle cx="100" cy="196" r="7"/><circle cx="162" cy="196" r="7"/><circle cx="232" cy="192" r="7"/></g>' +
    // basal layer palisade below
    '<path d="M24 236 C60 226 90 244 126 234 C160 224 196 244 232 234 C268 224 300 240 316 234" ' +
    'stroke="rgba(210,220,232,.45)" stroke-width="2.5" fill="none"/>' +
    '<g fill="rgba(120,160,210,.25)">' +
    '<circle cx="44" cy="240" r="5"/><circle cx="82" cy="242" r="5"/><circle cx="126" cy="240" r="5"/>' +
    '<circle cx="170" cy="242" r="5"/><circle cx="214" cy="240" r="5"/><circle cx="262" cy="242" r="5"/><circle cx="300" cy="240" r="5"/></g>' +
    '</g></svg>',

  // s1-0021 Burkitt "starry-sky": dense sheet of intermediate lymphocytes with
  // scattered pale tingible-body macrophages (the "stars").
  "s1-0021": '<svg viewBox="0 0 320 280" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="308" height="268" fill="rgba(88,74,120,.14)" stroke="rgba(210,220,232,.1)"/>' +
    // dense sheet of dark monotonous lymphocytes (packed nuclei)
    '<g fill="rgba(120,96,168,.55)" stroke="rgba(70,54,110,.6)" stroke-width="0.6">' +
    '<circle cx="24" cy="30" r="10"/><circle cx="48" cy="46" r="10"/><circle cx="70" cy="28" r="9"/><circle cx="94" cy="44" r="10"/>' +
    '<circle cx="118" cy="26" r="10"/><circle cx="140" cy="46" r="9"/><circle cx="188" cy="30" r="10"/><circle cx="212" cy="46" r="10"/>' +
    '<circle cx="236" cy="28" r="9"/><circle cx="260" cy="44" r="10"/><circle cx="286" cy="30" r="10"/>' +
    '<circle cx="30" cy="70" r="10"/><circle cx="56" cy="86" r="9"/><circle cx="80" cy="70" r="10"/><circle cx="126" cy="72" r="10"/>' +
    '<circle cx="150" cy="88" r="9"/><circle cx="174" cy="72" r="10"/><circle cx="222" cy="86" r="10"/><circle cx="248" cy="72" r="9"/><circle cx="284" cy="80" r="10"/>' +
    '<circle cx="22" cy="112" r="10"/><circle cx="66" cy="118" r="10"/><circle cx="90" cy="104" r="9"/><circle cx="114" cy="118" r="10"/>' +
    '<circle cx="160" cy="120" r="10"/><circle cx="184" cy="106" r="9"/><circle cx="230" cy="120" r="10"/><circle cx="256" cy="106" r="10"/><circle cx="288" cy="120" r="9"/>' +
    '<circle cx="34" cy="152" r="10"/><circle cx="58" cy="166" r="9"/><circle cx="100" cy="154" r="10"/><circle cx="124" cy="168" r="10"/>' +
    '<circle cx="196" cy="154" r="10"/><circle cx="220" cy="168" r="9"/><circle cx="266" cy="156" r="10"/><circle cx="290" cy="168" r="9"/>' +
    '<circle cx="24" cy="196" r="10"/><circle cx="48" cy="210" r="10"/><circle cx="72" cy="196" r="9"/><circle cx="118" cy="198" r="10"/>' +
    '<circle cx="142" cy="212" r="9"/><circle cx="188" cy="198" r="10"/><circle cx="234" cy="210" r="10"/><circle cx="284" cy="200" r="10"/>' +
    '<circle cx="34" cy="238" r="10"/><circle cx="80" cy="240" r="10"/><circle cx="104" cy="226" r="9"/><circle cx="150" cy="240" r="10"/>' +
    '<circle cx="176" cy="226" r="9"/><circle cx="222" cy="240" r="10"/><circle cx="246" cy="226" r="10"/><circle cx="290" cy="238" r="9"/></g>' +
    // tingible-body macrophages = the pale "stars" (clear cytoplasm + debris)
    '<g>' +
    '<circle cx="88" cy="88" r="20" fill="rgba(230,238,248,.16)" stroke="rgba(238,244,250,.55)" stroke-width="1.4"/>' +
    '<circle cx="82" cy="84" r="3" fill="rgba(120,96,168,.7)"/><circle cx="94" cy="92" r="2.6" fill="rgba(120,96,168,.7)"/><circle cx="88" cy="94" r="2.2" fill="rgba(120,96,168,.7)"/>' +
    '<circle cx="204" cy="134" r="20" fill="rgba(230,238,248,.16)" stroke="rgba(238,244,250,.55)" stroke-width="1.4"/>' +
    '<circle cx="199" cy="130" r="3" fill="rgba(120,96,168,.7)"/><circle cx="211" cy="138" r="2.6" fill="rgba(120,96,168,.7)"/>' +
    '<circle cx="58" cy="182" r="19" fill="rgba(230,238,248,.16)" stroke="rgba(238,244,250,.55)" stroke-width="1.4"/>' +
    '<circle cx="53" cy="178" r="2.8" fill="rgba(120,96,168,.7)"/><circle cx="64" cy="186" r="2.4" fill="rgba(120,96,168,.7)"/>' +
    '<circle cx="256" cy="196" r="20" fill="rgba(230,238,248,.16)" stroke="rgba(238,244,250,.55)" stroke-width="1.4"/>' +
    '<circle cx="251" cy="192" r="3" fill="rgba(120,96,168,.7)"/><circle cx="262" cy="200" r="2.6" fill="rgba(120,96,168,.7)"/>' +
    '<circle cx="158" cy="60" r="18" fill="rgba(230,238,248,.16)" stroke="rgba(238,244,250,.55)" stroke-width="1.4"/>' +
    '<circle cx="153" cy="56" r="2.6" fill="rgba(120,96,168,.7)"/><circle cx="163" cy="64" r="2.4" fill="rgba(120,96,168,.7)"/></g>' +
    '</svg>',

  // s1-0030 G6PD deficiency smear: RBCs, several bite cells (crisp bite removed),
  // and dark Heinz-body inclusions (accent) inside some cells.
  "s1-0030": '<svg viewBox="0 0 320 260" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="308" height="248" fill="rgba(224,82,79,.05)" stroke="rgba(210,220,232,.1)"/>' +
    // normal biconcave RBCs (ring with central pallor)
    '<g stroke="rgba(224,110,108,.8)" stroke-width="2.2" fill="rgba(224,110,108,.14)">' +
    '<g><circle cx="60" cy="54" r="22"/><circle cx="60" cy="54" r="10" fill="rgba(20,26,34,.5)" stroke="none"/></g>' +
    '<g><circle cx="150" cy="46" r="22"/><circle cx="150" cy="46" r="10" fill="rgba(20,26,34,.5)" stroke="none"/></g>' +
    '<g><circle cx="118" cy="130" r="22"/><circle cx="118" cy="130" r="10" fill="rgba(20,26,34,.5)" stroke="none"/></g>' +
    '<g><circle cx="60" cy="200" r="22"/><circle cx="60" cy="200" r="10" fill="rgba(20,26,34,.5)" stroke="none"/></g>' +
    '<g><circle cx="248" cy="140" r="22"/><circle cx="248" cy="140" r="10" fill="rgba(20,26,34,.5)" stroke="none"/></g>' +
    '<g><circle cx="204" cy="210" r="22"/><circle cx="204" cy="210" r="10" fill="rgba(20,26,34,.5)" stroke="none"/></g>' +
    '</g>' +
    // BITE cells: RBC with a crisp semicircular bite removed (arc path)
    '<g stroke="rgba(224,110,108,.9)" stroke-width="2.2" fill="rgba(224,110,108,.14)">' +
    '<path d="M232 52 A22 22 0 1 1 232 48 L222 64 A9 9 0 1 0 222 40 Z"/>' +   // bite cell top-right
    '<path d="M60 128 m22 0 A22 22 0 1 1 38 118 L54 118 A9 9 0 1 0 60 106 Z"/>' + // bite cell mid-left
    '<path d="M150 208 A22 22 0 1 1 150 204 L158 220 A9 9 0 1 0 158 196 Z"/>' + // bite cell bottom
    '</g>' +
    // Heinz bodies: dark rounded denatured-Hb inclusions at cell periphery (accent)
    '<g fill="#d9463f" stroke="#8f2420" stroke-width="0.8">' +
    '<circle cx="72" cy="42" r="5"/>' +           // inside top-left RBC
    '<circle cx="138" cy="36" r="4.6"/>' +        // inside top-mid RBC
    '<circle cx="106" cy="120" r="5"/>' +         // inside central RBC
    '<circle cx="258" cy="130" r="4.8"/>' +       // inside right RBC
    '<circle cx="214" cy="200" r="4.6"/>' +       // inside lower-right RBC
    '<circle cx="50" cy="190" r="4.6"/></g>' +    // inside lower-left RBC
    '<text x="232" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(210,220,232,.55)">bite cell</text>' +
    '</svg>',

  // s1-0031 Multiple sclerosis axial brain MRI (FLAIR): lateral ventricles with
  // periventricular ovoid lesions perpendicular to ventricles (Dawson fingers).
  "s1-0031": '<svg viewBox="0 0 320 280" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="308" height="268" rx="10" fill="#0a0f16" stroke="rgba(255,255,255,.08)"/>' +
    // skull / brain outline (axial oval)
    '<ellipse cx="160" cy="142" rx="128" ry="118" fill="rgba(210,220,232,.05)" stroke="rgba(210,220,232,.35)" stroke-width="2"/>' +
    '<ellipse cx="160" cy="142" rx="118" ry="108" fill="rgba(210,220,232,.07)" stroke="rgba(210,220,232,.5)" stroke-width="1.4"/>' +
    // interhemispheric fissure
    '<line x1="160" y1="36" x2="160" y2="248" stroke="rgba(210,220,232,.4)" stroke-width="1.6"/>' +
    // butterfly lateral ventricles (frontal + occipital horns), dark CSF
    '<path d="M158 96 C150 108 138 118 130 132 C124 144 126 160 132 172 C138 182 150 186 158 180 ' +
    'C160 160 160 118 158 96 Z" fill="#05080c" stroke="rgba(210,220,232,.6)" stroke-width="1.4"/>' +
    '<path d="M162 96 C170 108 182 118 190 132 C196 144 194 160 188 172 C182 182 170 186 162 180 ' +
    'C160 160 160 118 162 96 Z" fill="#05080c" stroke="rgba(210,220,232,.6)" stroke-width="1.4"/>' +
    // periventricular ovoid demyelinating plaques oriented PERPENDICULAR to the
    // ventricles (Dawson fingers) - bright accent lesions
    '<g fill="#e0524f" fill-opacity="0.82" stroke="rgba(255,180,176,.6)" stroke-width="0.8">' +
    '<ellipse cx="124" cy="104" rx="6" ry="14" transform="rotate(-38 124 104)"/>' +
    '<ellipse cx="112" cy="132" rx="6" ry="16" transform="rotate(-58 112 132)"/>' +
    '<ellipse cx="116" cy="166" rx="6" ry="14" transform="rotate(-72 116 166)"/>' +
    '<ellipse cx="136" cy="190" rx="6" ry="13" transform="rotate(-108 136 190)"/>' +
    '<ellipse cx="196" cy="104" rx="6" ry="14" transform="rotate(38 196 104)"/>' +
    '<ellipse cx="208" cy="132" rx="6" ry="16" transform="rotate(58 208 132)"/>' +
    '<ellipse cx="204" cy="166" rx="6" ry="14" transform="rotate(72 204 166)"/>' +
    '<ellipse cx="184" cy="190" rx="6" ry="13" transform="rotate(108 184 190)"/></g>' +
    // a couple of juxtacortical flecks
    '<g fill="#e0524f" fill-opacity="0.7"><circle cx="78" cy="150" r="4"/><circle cx="244" cy="150" r="4"/></g>' +
    '</svg>',

  // s1-0034 Gout polarized microscopy: needle-shaped MSU crystals, negatively
  // birefringent (yellow parallel / blue perpendicular to compensator axis);
  // one intracellular crystal within a neutrophil.
  "s1-0034": '<svg viewBox="0 0 320 260" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="308" height="248" fill="#0a0f16" stroke="rgba(255,255,255,.08)"/>' +
    // compensator (slow-wave) axis indicator
    '<g stroke="rgba(210,220,232,.55)" stroke-width="1.4">' +
    '<line x1="24" y1="238" x2="70" y2="238"/><path d="M62 233 L70 238 L62 243"/></g>' +
    '<text x="76" y="242" font-family="sans-serif" font-size="9" fill="rgba(210,220,232,.6)">slow axis</text>' +
    // extracellular MSU needles: PARALLEL to axis -> YELLOW; PERPENDICULAR -> BLUE
    '<g stroke-linecap="round">' +
    // parallel (horizontal) = yellow
    '<line x1="40" y1="70" x2="120" y2="66" stroke="#e8d24a" stroke-width="4"/>' +
    '<line x1="150" y1="96" x2="236" y2="92" stroke="#e8d24a" stroke-width="4"/>' +
    '<line x1="60" y1="150" x2="132" y2="150" stroke="#e8d24a" stroke-width="4"/>' +
    '<line x1="196" y1="196" x2="272" y2="192" stroke="#e8d24a" stroke-width="4"/>' +
    // perpendicular (vertical) = blue
    '<line x1="248" y1="40" x2="252" y2="118" stroke="#4f8fe0" stroke-width="4"/>' +
    '<line x1="88" y1="96" x2="92" y2="172" stroke="#4f8fe0" stroke-width="4"/>' +
    '<line x1="164" y1="140" x2="168" y2="214" stroke="#4f8fe0" stroke-width="4"/>' +
    '<line x1="286" y1="150" x2="290" y2="222" stroke="#4f8fe0" stroke-width="4"/>' +
    // an oblique needle for realism
    '<line x1="200" y1="52" x2="240" y2="86" stroke="#9ac16a" stroke-width="4"/>' +
    '</g>' +
    // neutrophil with multilobed nucleus containing an INTRACELLULAR needle
    '<circle cx="120" cy="200" r="34" fill="rgba(210,220,232,.08)" stroke="rgba(238,244,250,.75)" stroke-width="1.8"/>' +
    '<g fill="rgba(150,120,180,.45)" stroke="rgba(150,120,180,.7)" stroke-width="0.8">' +
    '<ellipse cx="104" cy="188" rx="11" ry="9"/><ellipse cx="122" cy="180" rx="10" ry="9"/>' +
    '<ellipse cx="138" cy="196" rx="11" ry="9"/><ellipse cx="112" cy="214" rx="10" ry="9"/></g>' +
    '<line x1="100" y1="216" x2="146" y2="188" stroke="#e8d24a" stroke-width="4" stroke-linecap="round"/>' +
    '<text x="120" y="250" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(210,220,232,.55)">intracellular</text>' +
    '</svg>',

  // s1-0039 Minimal change disease glomerular EM: capillary loop cross-section,
  // thin normal GBM with DIFFUSE EFFACEMENT (fused/flattened) podocyte foot
  // processes; a small normal interdigitating foot-process hint for contrast.
  "s1-0039": '<svg viewBox="0 0 320 260" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="308" height="248" fill="#0a0f16" stroke="rgba(255,255,255,.08)"/>' +
    // capillary lumen (with a faint RBC)
    '<path d="M40 150 C40 96 96 70 160 70 C224 70 280 96 280 150 C280 176 264 196 240 208 ' +
    'C232 190 210 182 190 186 C150 194 120 182 96 196 C74 200 52 184 44 166 Z" ' +
    'fill="rgba(224,110,108,.06)" stroke="none"/>' +
    '<ellipse cx="150" cy="150" rx="30" ry="18" fill="rgba(224,110,108,.16)" stroke="rgba(224,110,108,.4)" stroke-width="1"/>' +
    // thin, smooth GBM (basement membrane) - the arc following the loop
    '<path d="M40 150 C40 96 96 70 160 70 C224 70 280 96 280 150" ' +
    'stroke="rgba(238,244,250,.85)" stroke-width="3" fill="none"/>' +
    '<path d="M40 150 C40 96 96 70 160 70 C224 70 280 96 280 150" ' +
    'stroke="rgba(210,220,232,.3)" stroke-width="8" fill="none"/>' +
    // fenestrated endothelium (dots inside the loop just under GBM)
    '<g fill="rgba(210,220,232,.35)"><circle cx="70" cy="120" r="2"/><circle cx="96" cy="100" r="2"/><circle cx="130" cy="88" r="2"/><circle cx="160" cy="84" r="2"/><circle cx="192" cy="88" r="2"/><circle cx="226" cy="100" r="2"/><circle cx="252" cy="120" r="2"/></g>' +
    // DIFFUSE FOOT-PROCESS EFFACEMENT: a continuous flattened ribbon of fused
    // podocyte cytoplasm hugging the OUTSIDE of the GBM (accent) - no slit pores
    '<path d="M40 150 C40 96 96 70 160 70 C224 70 280 96 280 150" ' +
    'stroke="#e0524f" stroke-width="9" stroke-opacity="0.5" fill="none" transform="translate(0,-9)"/>' +
    '<path d="M38 148 C38 90 96 60 160 60 C224 60 282 90 282 148" ' +
    'stroke="#e0524f" stroke-width="2" fill="none"/>' +
    // podocyte cell bodies sitting atop the effaced ribbon
    '<g fill="rgba(210,220,232,.1)" stroke="rgba(238,244,250,.7)" stroke-width="1.4">' +
    '<ellipse cx="92" cy="52" rx="20" ry="14"/><ellipse cx="176" cy="40" rx="22" ry="15"/><ellipse cx="248" cy="58" rx="20" ry="14"/></g>' +
    '<g fill="rgba(210,220,232,.4)"><circle cx="92" cy="52" r="5"/><circle cx="176" cy="40" r="5"/><circle cx="248" cy="58" r="5"/></g>' +
    // contrast: a tiny NORMAL interdigitating foot-process detail (inset)
    '<g stroke="rgba(210,220,232,.7)" stroke-width="1.4">' +
    '<line x1="248" y1="196" x2="248" y2="212"/><line x1="256" y1="196" x2="256" y2="212"/>' +
    '<line x1="264" y1="196" x2="264" y2="212"/><line x1="272" y1="196" x2="272" y2="212"/>' +
    '<line x1="240" y1="212" x2="280" y2="212"/></g>' +
    '<text x="260" y="228" text-anchor="middle" font-family="sans-serif" font-size="8" fill="rgba(210,220,232,.5)">normal</text>' +
    '<text x="120" y="238" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(224,82,79,.75)">effacement</text>' +
    '</svg>',

  // s1-0040 Celiac duodenal biopsy: villous atrophy (blunted/flat villi) + crypt
  // hyperplasia + intraepithelial lymphocyte dots; normal tall-villi reference left.
  "s1-0040": '<svg viewBox="0 0 340 260" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="328" height="248" fill="rgba(224,110,108,.05)" stroke="rgba(210,220,232,.1)"/>' +
    // divider between normal (left) and celiac (right)
    '<line x1="130" y1="20" x2="130" y2="240" stroke="rgba(210,220,232,.25)" stroke-width="1" stroke-dasharray="4 4"/>' +
    '<text x="66" y="30" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(210,220,232,.55)">normal</text>' +
    '<text x="234" y="30" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(210,220,232,.55)">celiac</text>' +
    // ---- NORMAL side: tall finger-like villi with short crypts
    '<path d="M22 200 L22 150 Q22 60 40 60 Q58 60 58 150 L58 200 M58 200 L58 150 ' +
    'Q58 66 76 66 Q94 66 94 150 L94 200 M94 200 L94 150 Q94 60 112 60 Q124 60 124 150 L124 200" ' +
    'fill="rgba(224,110,108,.12)" stroke="rgba(238,244,250,.7)" stroke-width="1.8"/>' +
    // normal crypts (short) at the base
    '<g stroke="rgba(210,220,232,.5)" stroke-width="1.2">' +
    '<line x1="30" y1="200" x2="30" y2="218"/><line x1="48" y1="200" x2="48" y2="218"/>' +
    '<line x1="66" y1="200" x2="66" y2="218"/><line x1="84" y1="200" x2="84" y2="218"/>' +
    '<line x1="102" y1="200" x2="102" y2="218"/><line x1="118" y1="200" x2="118" y2="218"/></g>' +
    // ---- CELIAC side: FLAT / blunted mucosa (villous atrophy)
    '<path d="M144 178 Q160 168 176 178 Q192 168 208 178 Q224 168 240 178 Q256 168 272 178 ' +
    'Q288 170 316 176 L316 200 L144 200 Z" ' +
    'fill="rgba(224,110,108,.12)" stroke="rgba(238,244,250,.7)" stroke-width="1.8"/>' +
    // crypt HYPERPLASIA - elongated, deep crypts below the flat surface
    '<g stroke="rgba(210,220,232,.55)" stroke-width="1.3">' +
    '<line x1="152" y1="200" x2="152" y2="240"/><line x1="168" y1="200" x2="168" y2="240"/>' +
    '<line x1="184" y1="200" x2="184" y2="240"/><line x1="200" y1="200" x2="200" y2="240"/>' +
    '<line x1="216" y1="200" x2="216" y2="240"/><line x1="232" y1="200" x2="232" y2="240"/>' +
    '<line x1="248" y1="200" x2="248" y2="240"/><line x1="264" y1="200" x2="264" y2="240"/>' +
    '<line x1="280" y1="200" x2="280" y2="240"/><line x1="296" y1="200" x2="296" y2="240"/>' +
    '<line x1="310" y1="200" x2="310" y2="240"/></g>' +
    // intraepithelial LYMPHOCYTES along the flat surface (accent dots)
    '<g fill="#e0524f">' +
    '<circle cx="150" cy="176" r="3"/><circle cx="166" cy="174" r="3"/><circle cx="182" cy="176" r="3"/>' +
    '<circle cx="198" cy="174" r="3"/><circle cx="214" cy="176" r="3"/><circle cx="230" cy="174" r="3"/>' +
    '<circle cx="246" cy="176" r="3"/><circle cx="262" cy="174" r="3"/><circle cx="278" cy="176" r="3"/>' +
    '<circle cx="294" cy="174" r="3"/><circle cx="308" cy="175" r="3"/></g>' +
    // muscularis line
    '<line x1="16" y1="242" x2="324" y2="242" stroke="rgba(210,220,232,.3)" stroke-width="2"/>' +
    '</svg>',

  // s1-0045 Diphtheria oropharynx: open mouth/throat with gray adherent
  // pseudomembrane over both tonsils and the posterior pharyngeal wall.
  "s1-0045": '<svg viewBox="0 0 320 280" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="308" height="268" fill="rgba(210,220,232,.03)" stroke="rgba(210,220,232,.1)"/>' +
    // lips / open mouth aperture
    '<path d="M40 140 C70 76 130 44 160 44 C190 44 250 76 280 140 C250 214 200 244 160 244 ' +
    'C120 244 70 214 40 140 Z" fill="rgba(224,110,108,.1)" stroke="rgba(224,140,138,.75)" stroke-width="3"/>' +
    // inner oral cavity (darker)
    '<path d="M62 140 C88 92 132 66 160 66 C188 66 232 92 258 140 C232 196 196 220 160 220 ' +
    'C124 220 88 196 62 140 Z" fill="rgba(120,40,44,.45)" stroke="rgba(224,110,108,.4)" stroke-width="1.4"/>' +
    // hard/soft palate arch (top) + uvula
    '<path d="M96 96 C120 78 200 78 224 96" stroke="rgba(224,140,138,.55)" stroke-width="1.6" fill="none"/>' +
    '<path d="M160 96 C154 108 154 122 160 132 C166 122 166 108 160 96 Z" fill="rgba(224,110,108,.3)" stroke="rgba(224,140,138,.6)" stroke-width="1.2"/>' +
    // tongue (bottom)
    '<path d="M96 196 C120 232 200 232 224 196 C204 210 116 210 96 196 Z" fill="rgba(224,120,116,.28)" stroke="rgba(224,140,138,.5)" stroke-width="1.4"/>' +
    // GRAY ADHERENT PSEUDOMEMBRANE over both tonsils + posterior pharynx
    '<g fill="rgba(150,156,164,.9)" stroke="rgba(198,204,212,.85)" stroke-width="1.4">' +
    // left tonsil membrane
    '<path d="M92 122 C82 112 84 148 96 168 C108 184 126 182 128 160 C130 140 118 122 92 122 Z"/>' +
    // right tonsil membrane
    '<path d="M228 122 C238 112 236 148 224 168 C212 184 194 182 192 160 C190 140 202 122 228 122 Z"/>' +
    // posterior pharyngeal wall membrane (central patch)
    '<path d="M138 138 C150 130 170 130 182 138 C190 152 188 176 160 184 C132 176 130 152 138 138 Z"/></g>' +
    // subtle membrane texture / adherent edges
    '<g stroke="rgba(120,126,134,.7)" stroke-width="1" fill="none">' +
    '<path d="M100 138 C104 152 110 166 120 172"/><path d="M220 138 C216 152 210 166 200 172"/>' +
    '<path d="M148 146 C152 160 160 172 160 176"/></g>' +
    '<text x="160" y="262" text-anchor="middle" font-family="sans-serif" font-size="9" fill="rgba(210,220,232,.55)">pseudomembrane</text>' +
    '</svg>'

});
