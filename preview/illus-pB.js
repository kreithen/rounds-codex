/*
 * Rounds Codex - USMLE Mode illustration library (pack B)
 * Original, clearly-schematic SVGs keyed by question id. EDUCATIONAL SCHEMATICS,
 * never photo-real and never presented as real clinical images. The app tags
 * them "SCHEMATIC" and adds its own caption, so no descriptive caption text is
 * embedded inside these SVGs. Colors use currentColor / low-opacity so they
 * adapt to light and dark themes; the accent #e0524f marks only the key feature.
 */
Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, {

  // s1-0039 Minimal change disease: glomerular capillary loop cross-section (EM
  // schematic) - normal thin basement membrane, diffusely EFFACED/fused podocyte
  // foot processes (a continuous flattened sheet instead of discrete feet).
  "s1-0039": '<svg viewBox="0 0 360 210" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="198" rx="10" stroke="currentColor" stroke-opacity="0.15"/>' +
    // capillary lumen (curved loop)
    '<path d="M40 150 q120 -120 280 -30" stroke="currentColor" stroke-width="1" fill="none" stroke-opacity="0.25"/>' +
    '<text x="60" y="182" font-size="11" fill="currentColor" fill-opacity="0.55" font-family="sans-serif">capillary lumen</text>' +
    // basement membrane - thin, uniform double line following the loop
    '<path d="M30 140 q120 -110 300 -40" stroke="currentColor" stroke-width="1.6" fill="none"/>' +
    '<path d="M30 148 q120 -110 300 -40" stroke="currentColor" stroke-width="1.6" fill="none"/>' +
    '<text x="12" y="132" font-size="10" fill="currentColor" fill-opacity="0.6" font-family="sans-serif">thin GBM</text>' +
    // effaced podocyte: single flattened cytoplasmic sheet hugging the GBM (accent)
    '<path d="M30 134 q120 -110 300 -40 l0 -18 q-150 -50 -300 40 z" fill="#e0524f" fill-opacity="0.14" stroke="#e0524f" stroke-width="1.6"/>' +
    // smooth top edge = fused foot processes (no interdigitations)
    '<path d="M30 116 q150 -90 300 -40" stroke="#e0524f" stroke-width="1.4" fill="none"/>' +
    // podocyte cell body with nucleus
    '<ellipse cx="150" cy="70" rx="30" ry="20" fill="#e0524f" fill-opacity="0.14" stroke="#e0524f" stroke-width="1.4"/>' +
    '<circle cx="150" cy="70" r="9" fill="#e0524f" fill-opacity="0.4"/>' +
    '<text x="196" y="60" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">effaced</text>' +
    '<text x="196" y="73" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">foot processes</text>' +
    '</svg>',

  // s1-0114 Membranous nephropathy: GBM schematic with subepithelial immune
  // deposits and basement-membrane "spikes" projecting up between the deposits.
  "s1-0114": '<svg viewBox="0 0 360 210" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="198" rx="10" stroke="currentColor" stroke-opacity="0.15"/>' +
    '<text x="14" y="30" font-size="10" fill="currentColor" fill-opacity="0.55" font-family="sans-serif">urinary space (podocyte)</text>' +
    '<text x="14" y="196" font-size="10" fill="currentColor" fill-opacity="0.55" font-family="sans-serif">capillary lumen</text>' +
    // podocyte layer along the top
    '<path d="M20 46 q160 18 320 0" stroke="currentColor" stroke-width="1" fill="none" stroke-opacity="0.4"/>' +
    // basement membrane baseline with upward SPIKES between deposits
    '<path d="M20 120 ' +
      'L44 120 L52 78 L60 120 ' +   // spike
      'L92 120 L100 78 L108 120 ' + // spike
      'L140 120 L148 78 L156 120 ' +// spike
      'L188 120 L196 78 L204 120 ' +// spike
      'L236 120 L244 78 L252 120 ' +// spike
      'L284 120 L292 78 L300 120 ' +// spike
      'L340 120" stroke="currentColor" stroke-width="2" fill="none"/>' +
    '<text x="255" y="150" font-size="10" fill="currentColor" fill-opacity="0.6" font-family="sans-serif">GBM spikes</text>' +
    // subepithelial immune deposits (domes) sitting in the notches between spikes (accent)
    '<g fill="#e0524f" fill-opacity="0.3" stroke="#e0524f" stroke-width="1.2">' +
    '<circle cx="76" cy="90" r="11"/><circle cx="124" cy="90" r="11"/><circle cx="172" cy="90" r="11"/>' +
    '<circle cx="220" cy="90" r="11"/><circle cx="268" cy="90" r="11"/></g>' +
    '<text x="70" y="66" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">subepithelial deposits</text>' +
    '</svg>',

  // s1-0064 ATN: urine microscopy field with several muddy-brown granular casts.
  "s1-0064": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<circle cx="180" cy="110" r="102" stroke="currentColor" stroke-opacity="0.2"/>' + // microscope field
    // a few epithelial cells / debris in background
    '<g stroke="currentColor" stroke-opacity="0.25" fill="currentColor" fill-opacity="0.06">' +
    '<circle cx="110" cy="60" r="8"/><circle cx="250" cy="70" r="7"/><circle cx="95" cy="165" r="7"/><circle cx="265" cy="160" r="8"/></g>' +
    // granular cast helper drawn as cylindrical shapes with coarse granules (accent brown-red)
    '<g stroke="#e0524f" stroke-opacity="0.7" stroke-width="1.4">' +
    // cast 1
    '<rect x="70" y="92" width="120" height="26" rx="13" transform="rotate(-18 130 105)" fill="#e0524f" fill-opacity="0.22"/>' +
    // cast 2
    '<rect x="150" y="120" width="140" height="28" rx="14" transform="rotate(12 220 134)" fill="#e0524f" fill-opacity="0.22"/>' +
    // cast 3
    '<rect x="95" y="150" width="110" height="24" rx="12" transform="rotate(6 150 162)" fill="#e0524f" fill-opacity="0.22"/>' +
    '</g>' +
    // coarse granules stippled inside the casts
    '<g fill="#e0524f" fill-opacity="0.55">' +
    '<circle cx="92" cy="100" r="3"/><circle cx="108" cy="96" r="3.4"/><circle cx="124" cy="101" r="3"/><circle cx="140" cy="97" r="3.4"/><circle cx="156" cy="102" r="3"/><circle cx="172" cy="99" r="3.2"/>' +
    '<circle cx="170" cy="132" r="3.2"/><circle cx="188" cy="130" r="3.4"/><circle cx="206" cy="134" r="3"/><circle cx="224" cy="132" r="3.4"/><circle cx="242" cy="136" r="3"/><circle cx="260" cy="134" r="3.2"/>' +
    '<circle cx="112" cy="160" r="3"/><circle cx="130" cy="162" r="3.4"/><circle cx="148" cy="160" r="3"/><circle cx="166" cy="163" r="3.2"/><circle cx="184" cy="161" r="3"/>' +
    '</g>' +
    '<text x="200" y="88" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">granular casts</text>' +
    '</svg>',

  // s1-0031 Multiple sclerosis: axial brain MRI schematic with ovoid
  // periventricular white-matter lesions perpendicular to ventricles (Dawson fingers).
  "s1-0031": '<svg viewBox="0 0 340 250" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="328" height="238" rx="12" stroke="currentColor" stroke-opacity="0.15"/>' +
    // skull / head oval
    '<ellipse cx="170" cy="125" rx="150" ry="112" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.03"/>' +
    '<ellipse cx="170" cy="125" rx="140" ry="103" stroke="currentColor" stroke-opacity="0.3"/>' +
    // lateral ventricles (butterfly) around midline
    '<path d="M170 70 q-40 6 -46 55 q-4 24 14 30 q22 6 24 -22 q2 -34 8 -63 z" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.08"/>' +
    '<path d="M170 70 q40 6 46 55 q4 24 -14 30 q-22 6 -24 -22 q-2 -34 -8 -63 z" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.08"/>' +
    '<line x1="170" y1="66" x2="170" y2="190" stroke="currentColor" stroke-opacity="0.25"/>' +
    // Dawson fingers: ovoid lesions radiating perpendicular to ventricle walls (accent)
    '<g fill="#e0524f" fill-opacity="0.4" stroke="#e0524f" stroke-width="1">' +
    '<ellipse cx="112" cy="86" rx="7" ry="15" transform="rotate(-38 112 86)"/>' +
    '<ellipse cx="104" cy="112" rx="7" ry="16" transform="rotate(-60 104 112)"/>' +
    '<ellipse cx="106" cy="140" rx="7" ry="15" transform="rotate(-78 106 140)"/>' +
    '<ellipse cx="228" cy="86" rx="7" ry="15" transform="rotate(38 228 86)"/>' +
    '<ellipse cx="236" cy="112" rx="7" ry="16" transform="rotate(60 236 112)"/>' +
    '<ellipse cx="234" cy="140" rx="7" ry="15" transform="rotate(78 234 140)"/>' +
    '</g>' +
    '<text x="170" y="232" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">periventricular ovoid lesions (Dawson fingers)</text>' +
    '</svg>',

  // s1-0106 Epidural hematoma: axial head CT schematic (skull ring + brain) with
  // a BICONVEX (lens) hyperdense collection not crossing sutures + midline shift.
  "s1-0106": '<svg viewBox="0 0 340 250" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="328" height="238" rx="12" stroke="currentColor" stroke-opacity="0.15"/>' +
    // skull ring
    '<ellipse cx="170" cy="125" rx="150" ry="112" stroke="currentColor" stroke-width="3" fill="none"/>' +
    // brain surface (shifted slightly right by the mass)
    '<ellipse cx="178" cy="125" rx="130" ry="96" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.05"/>' +
    // biconvex lens-shaped hyperdense collection hugging the left inner table
    '<path d="M44 70 q54 55 0 110 q40 -55 0 -110 z" fill="#e0524f" fill-opacity="0.32" stroke="#e0524f" stroke-width="1.6"/>' +
    '<path d="M44 70 q54 55 0 110" fill="none" stroke="#e0524f" stroke-width="1.6"/>' +
    '<path d="M44 70 q40 55 0 110" fill="none" stroke="#e0524f" stroke-width="1.6"/>' +
    '<text x="52" y="128" font-size="10" fill="#e0524f" fill-opacity="0.9" font-family="sans-serif">biconvex</text>' +
    // midline shifted to the right (accent normal-color line)
    '<line x1="170" y1="34" x2="170" y2="216" stroke="currentColor" stroke-opacity="0.2" stroke-dasharray="4 4"/>' +
    '<path d="M188 40 q-8 85 0 170" stroke="currentColor" stroke-width="1.4" fill="none"/>' +
    '<text x="200" y="150" font-size="10" fill="currentColor" fill-opacity="0.6" font-family="sans-serif">midline shift</text>' +
    // suture marks on skull to convey "does not cross sutures"
    '<line x1="52" y1="40" x2="66" y2="58" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.4"/>' +
    '<line x1="52" y1="210" x2="66" y2="192" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.4"/>' +
    '</svg>',

  // s1-0132 Huntington: axial brain MRI schematic with bilateral caudate atrophy
  // and enlarged boxcar frontal horns of the lateral ventricles.
  "s1-0132": '<svg viewBox="0 0 340 250" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="328" height="238" rx="12" stroke="currentColor" stroke-opacity="0.15"/>' +
    '<ellipse cx="170" cy="125" rx="150" ry="112" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.03"/>' +
    '<line x1="170" y1="30" x2="170" y2="220" stroke="currentColor" stroke-opacity="0.2"/>' +
    // enlarged frontal horns with flat/boxy lateral walls (boxcar) - the loss of the
    // normal caudate bulge makes the ventricle margins straight instead of concave.
    '<path d="M166 66 L120 74 L112 120 L150 128 L166 118 z" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.1"/>' +
    '<path d="M174 66 L220 74 L228 120 L190 128 L174 118 z" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.1"/>' +
    '<text x="170" y="150" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6" font-family="sans-serif">boxcar frontal horns</text>' +
    // atrophied caudate heads: only small remnants where a full convex bulge should be (accent)
    '<path d="M150 96 q-14 4 -22 20 q10 -6 22 -6 z" fill="#e0524f" fill-opacity="0.35" stroke="#e0524f" stroke-width="1.2"/>' +
    '<path d="M190 96 q14 4 22 20 q-10 -6 -22 -6 z" fill="#e0524f" fill-opacity="0.35" stroke="#e0524f" stroke-width="1.2"/>' +
    // dashed outline of where the normal plump caudate would bulge into the ventricle
    '<path d="M150 78 q28 20 0 46" stroke="#e0524f" stroke-opacity="0.6" stroke-dasharray="3 3" fill="none"/>' +
    '<path d="M190 78 q-28 20 0 46" stroke="#e0524f" stroke-opacity="0.6" stroke-dasharray="3 3" fill="none"/>' +
    '<text x="170" y="210" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">caudate atrophy</text>' +
    '</svg>',

  // s1-0089 ADPKD: two enlarged kidneys studded with numerous variably sized cysts.
  "s1-0089": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="208" rx="10" stroke="currentColor" stroke-opacity="0.15"/>' +
    // left enlarged kidney (bean, lobulated by cysts)
    '<path d="M96 30 q54 -6 58 46 q10 60 -6 110 q-12 34 -52 30 q-46 -4 -54 -50 q-8 -50 6 -100 q10 -34 48 -36 z" ' +
      'stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.05"/>' +
    // right enlarged kidney (mirror)
    '<path d="M264 30 q-54 -6 -58 46 q-10 60 6 110 q12 34 52 30 q46 -4 54 -50 q8 -50 -6 -100 q-10 -34 -48 -36 z" ' +
      'stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.05"/>' +
    // numerous variably-sized cysts (round lucencies) in the left kidney
    '<g stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.04">' +
    '<circle cx="70" cy="66" r="16"/><circle cx="108" cy="60" r="11"/><circle cx="60" cy="104" r="13"/>' +
    '<circle cx="98" cy="98" r="19"/><circle cx="128" cy="92" r="9"/><circle cx="74" cy="146" r="17"/>' +
    '<circle cx="112" cy="140" r="12"/><circle cx="96" cy="176" r="10"/><circle cx="60" cy="176" r="8"/></g>' +
    // right kidney cysts (accent to highlight the studded pattern)
    '<g stroke="#e0524f" stroke-width="1.2" fill="#e0524f" fill-opacity="0.12">' +
    '<circle cx="290" cy="66" r="16"/><circle cx="252" cy="60" r="11"/><circle cx="300" cy="104" r="13"/>' +
    '<circle cx="262" cy="98" r="19"/><circle cx="232" cy="92" r="9"/><circle cx="286" cy="146" r="17"/>' +
    '<circle cx="248" cy="140" r="12"/><circle cx="264" cy="176" r="10"/><circle cx="300" cy="176" r="8"/></g>' +
    '<text x="180" y="208" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.6" font-family="sans-serif">bilaterally enlarged, multicystic kidneys</text>' +
    '</svg>',

  // s1-0119 Complete mole: pelvic ultrasound schematic - uterus filled with a
  // "snowstorm"/cluster-of-grapes vesicular pattern and NO fetus.
  "s1-0119": '<svg viewBox="0 0 340 250" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="328" height="238" rx="12" stroke="currentColor" stroke-opacity="0.15"/>' +
    // ultrasound sector/fan frame
    '<path d="M170 20 L36 226 A160 160 0 0 0 304 226 Z" stroke="currentColor" stroke-opacity="0.25" fill="currentColor" fill-opacity="0.02"/>' +
    '<path d="M170 20 L70 200" stroke="currentColor" stroke-opacity="0.12"/>' +
    '<path d="M170 20 L270 200" stroke="currentColor" stroke-opacity="0.12"/>' +
    // uterine outline
    '<path d="M96 120 q74 -46 148 0 q26 46 -6 92 q-68 40 -136 0 q-32 -46 -6 -92 z" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.04"/>' +
    '<text x="170" y="238" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.55" font-family="sans-serif">uterus - no fetus</text>' +
    // snowstorm / cluster-of-grapes vesicles filling the cavity (accent)
    '<g fill="#e0524f" fill-opacity="0.16" stroke="#e0524f" stroke-width="0.8">' +
    '<circle cx="128" cy="128" r="8"/><circle cx="150" cy="120" r="6"/><circle cx="170" cy="128" r="9"/><circle cx="192" cy="120" r="6"/><circle cx="214" cy="128" r="8"/>' +
    '<circle cx="118" cy="150" r="6"/><circle cx="140" cy="146" r="9"/><circle cx="162" cy="152" r="6"/><circle cx="184" cy="146" r="8"/><circle cx="206" cy="150" r="7"/><circle cx="224" cy="148" r="6"/>' +
    '<circle cx="130" cy="172" r="8"/><circle cx="152" cy="176" r="6"/><circle cx="174" cy="172" r="9"/><circle cx="196" cy="176" r="6"/><circle cx="216" cy="172" r="7"/>' +
    '<circle cx="142" cy="196" r="6"/><circle cx="166" cy="194" r="7"/><circle cx="188" cy="196" r="6"/></g>' +
    // fine snowstorm speckle
    '<g fill="#e0524f" fill-opacity="0.4">' +
    '<circle cx="135" cy="134" r="1.4"/><circle cx="158" cy="128" r="1.4"/><circle cx="178" cy="140" r="1.4"/><circle cx="200" cy="130" r="1.4"/>' +
    '<circle cx="148" cy="158" r="1.4"/><circle cx="172" cy="162" r="1.4"/><circle cx="196" cy="158" r="1.4"/><circle cx="150" cy="184" r="1.4"/><circle cx="182" cy="186" r="1.4"/></g>' +
    '<text x="240" y="112" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">snowstorm</text>' +
    '</svg>'
});
