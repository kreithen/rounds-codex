/*
 * Rounds Codex - USMLE Mode illustration pack D
 * Original, clearly-schematic educational SVGs keyed by question id.
 * EDUCATIONAL SCHEMATICS ONLY - never photo-real, never real clinical images.
 * Line art uses currentColor; accent #e0524f marks the key feature only.
 * No captions inside the SVG (the app tags "SCHEMATIC" and adds a caption).
 */
Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, {

  // s1-0034 Gout: polarized-light microscopy - needle MSU crystals, some intracellular,
  // negative birefringence: yellow when parallel to compensator axis, blue when perpendicular.
  "s1-0034": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="208" rx="10" stroke="currentColor" stroke-opacity="0.15"/>' +
    // compensator (slow) axis reference arrow
    '<line x1="28" y1="196" x2="92" y2="196" stroke="currentColor" stroke-width="1.5" marker-end="url(#gx)"/>' +
    '<defs><marker id="gx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="currentColor"/></marker></defs>' +
    '<text x="34" y="188" font-size="9" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">axis</text>' +
    // neutrophil (cell) with two intracellular needles
    '<circle cx="150" cy="105" r="58" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.05"/>' +
    '<path d="M108 96 q22 -10 46 -2 q22 8 40 -6 q-14 22 -40 18 q-28 -4 -46 -10 z" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.12"/>' +
    // intracellular needle parallel to axis -> yellow (negative birefringence)
    '<line x1="118" y1="120" x2="182" y2="112" stroke="#d9a400" stroke-width="4" stroke-linecap="round"/>' +
    // intracellular needle perpendicular to axis -> blue
    '<line x1="150" y1="72" x2="140" y2="134" stroke="#2f6fb0" stroke-width="4" stroke-linecap="round"/>' +
    // extracellular needles (free)
    '<line x1="228" y1="52" x2="300" y2="44" stroke="#d9a400" stroke-width="4" stroke-linecap="round"/>' +
    '<line x1="250" y1="150" x2="322" y2="140" stroke="#d9a400" stroke-width="4" stroke-linecap="round"/>' +
    '<line x1="284" y1="80" x2="272" y2="150" stroke="#2f6fb0" stroke-width="4" stroke-linecap="round"/>' +
    '<line x1="40" y1="60" x2="52" y2="128" stroke="#2f6fb0" stroke-width="4" stroke-linecap="round"/>' +
    '</svg>',

  // s1-0040 Celiac: small-bowel mucosa - villous atrophy (blunted/flat), crypt hyperplasia,
  // intraepithelial lymphocytes; normal tall-villi hint on the left.
  "s1-0040": '<svg viewBox="0 0 380 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="368" height="208" rx="10" stroke="currentColor" stroke-opacity="0.15"/>' +
    // muscularis / submucosa baseline
    '<line x1="20" y1="170" x2="360" y2="170" stroke="currentColor" stroke-width="1.5"/>' +
    // NORMAL tall villi (left third, faint reference)
    '<g stroke="currentColor" stroke-width="1.3" fill="currentColor" fill-opacity="0.06" opacity="0.55">' +
    '<path d="M40 170 L40 60 q10 -12 20 0 L60 170 z"/>' +
    '<path d="M74 170 L74 66 q10 -12 20 0 L94 170 z"/>' +
    '<path d="M108 170 L108 58 q10 -12 20 0 L128 170 z"/>' +
    '</g>' +
    '<text x="84" y="200" text-anchor="middle" font-size="9" fill="currentColor" fill-opacity="0.55" font-family="sans-serif">normal</text>' +
    // divider
    '<line x1="150" y1="30" x2="150" y2="184" stroke="currentColor" stroke-opacity="0.2" stroke-dasharray="4 4"/>' +
    // ATROPHIC flat mucosa (right) - blunted villi + elongated hyperplastic crypts
    '<path d="M162 118 q18 -14 40 0 q20 12 40 0 q20 -12 40 0 q18 12 40 0 L322 170 L162 170 z" stroke="#e0524f" stroke-width="2" fill="#e0524f" fill-opacity="0.08"/>' +
    // hyperplastic crypts (vertical glands reaching down)
    '<g stroke="currentColor" stroke-width="1" stroke-opacity="0.6">' +
    '<line x1="178" y1="126" x2="178" y2="168"/><line x1="200" y1="120" x2="200" y2="168"/>' +
    '<line x1="222" y1="126" x2="222" y2="168"/><line x1="244" y1="120" x2="244" y2="168"/>' +
    '<line x1="266" y1="126" x2="266" y2="168"/><line x1="288" y1="120" x2="288" y2="168"/>' +
    '<line x1="310" y1="126" x2="310" y2="168"/></g>' +
    // intraepithelial lymphocytes (dots along the flat surface)
    '<g fill="currentColor" fill-opacity="0.75">' +
    '<circle cx="170" cy="112" r="2.4"/><circle cx="190" cy="107" r="2.4"/><circle cx="210" cy="112" r="2.4"/>' +
    '<circle cx="232" cy="106" r="2.4"/><circle cx="254" cy="112" r="2.4"/><circle cx="276" cy="106" r="2.4"/>' +
    '<circle cx="300" cy="112" r="2.4"/><circle cx="316" cy="116" r="2.4"/></g>' +
    '<text x="242" y="200" text-anchor="middle" font-size="9" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">flat villi</text>' +
    '</svg>',

  // s1-0045 Diphtheria: open mouth / oropharynx with gray adherent pseudomembrane over
  // tonsils and posterior pharynx.
  "s1-0045": '<svg viewBox="0 0 320 240" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="308" height="228" rx="10" stroke="currentColor" stroke-opacity="0.15"/>' +
    // lips (open mouth oval)
    '<ellipse cx="160" cy="120" rx="120" ry="95" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.04"/>' +
    // upper lip / palate arch
    '<path d="M60 78 q100 -40 200 0" stroke="currentColor" stroke-width="1.4"/>' +
    // uvula
    '<path d="M160 78 q-7 20 0 34 q7 -14 0 -34 z" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.15"/>' +
    // tongue (lower)
    '<path d="M70 170 q90 60 180 0 q-90 24 -180 0 z" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.10"/>' +
    // posterior pharynx opening
    '<ellipse cx="160" cy="132" rx="66" ry="44" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.06"/>' +
    // tonsils (both sides) covered by gray pseudomembrane
    '<path d="M112 108 q-24 24 -6 54 q30 12 40 -10 q6 -30 -8 -46 q-14 -8 -26 2 z" stroke="#e0524f" stroke-width="1.6" fill="#9aa0a6" fill-opacity="0.55"/>' +
    '<path d="M208 108 q24 24 6 54 q-30 12 -40 -10 q-6 -30 8 -46 q14 -8 26 2 z" stroke="#e0524f" stroke-width="1.6" fill="#9aa0a6" fill-opacity="0.55"/>' +
    // membrane spreading over posterior wall
    '<path d="M132 150 q28 22 56 0 q-6 22 -28 22 q-22 0 -28 -22 z" fill="#9aa0a6" fill-opacity="0.45" stroke="#e0524f" stroke-width="1.2"/>' +
    '</svg>',

  // s1-0060 Melanoma: pigmented lesion showing ABCDE - Asymmetry, notched Border,
  // multiple colors, ~8mm diameter with a scale bar.
  "s1-0060": '<svg viewBox="0 0 340 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="328" height="208" rx="10" stroke="currentColor" stroke-opacity="0.15"/>' +
    // skin field
    '<rect x="16" y="16" width="308" height="150" rx="6" fill="currentColor" fill-opacity="0.04"/>' +
    // asymmetric notched-border lesion
    '<path d="M120 55 q40 -22 78 -4 q34 16 30 52 q-2 30 -30 40 q-18 20 -48 12 q-40 -6 -58 -34 q-20 -30 4 -56 q10 -10 24 -10 z" ' +
    'stroke="#e0524f" stroke-width="2.2" fill="#5a3a2a" fill-opacity="0.30"/>' +
    // multiple color patches within (browns + black)
    '<path d="M120 70 q26 -10 44 6 q10 22 -12 34 q-28 6 -40 -12 q-8 -20 8 -28 z" fill="#2b1a12" fill-opacity="0.55"/>' +
    '<circle cx="180" cy="118" r="18" fill="#7a4a2b" fill-opacity="0.55"/>' +
    '<circle cx="150" cy="108" r="10" fill="#1a1a1a" fill-opacity="0.7"/>' +
    '<circle cx="196" cy="82" r="9" fill="#8a5a30" fill-opacity="0.5"/>' +
    // axis hint (asymmetry) - dashed line, unequal halves
    '<line x1="155" y1="46" x2="155" y2="152" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="4 4"/>' +
    // scale bar ~8mm
    '<line x1="120" y1="188" x2="210" y2="188" stroke="currentColor" stroke-width="1.5"/>' +
    '<line x1="120" y1="183" x2="120" y2="193" stroke="currentColor" stroke-width="1.5"/>' +
    '<line x1="210" y1="183" x2="210" y2="193" stroke="currentColor" stroke-width="1.5"/>' +
    '<text x="165" y="205" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">8 mm</text>' +
    '</svg>',

  // s1-0065 Crohn: bowel mucosa - cobblestone appearance, linear serpiginous ulcers,
  // intervening normal "skip" areas.
  "s1-0065": '<svg viewBox="0 0 380 210" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="368" height="198" rx="10" stroke="currentColor" stroke-opacity="0.15"/>' +
    // bowel segment (opened lumen strip)
    '<rect x="26" y="40" width="328" height="130" rx="18" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.05"/>' +
    // cobblestone mucosa islands (rounded polygons) - left segment
    '<g stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.14">' +
    '<path d="M44 60 q18 -8 30 4 q6 18 -10 24 q-22 4 -26 -12 q-2 -12 6 -16 z"/>' +
    '<path d="M84 66 q18 -6 26 8 q2 16 -16 20 q-18 2 -20 -14 q0 -10 10 -14 z"/>' +
    '<path d="M46 96 q18 -6 28 6 q4 16 -14 22 q-20 2 -22 -14 q0 -10 8 -14 z"/>' +
    '<path d="M88 100 q18 -6 26 8 q2 16 -16 20 q-18 0 -18 -16 q0 -8 8 -12 z"/>' +
    '<path d="M56 132 q18 -6 28 4 q6 16 -12 22 q-20 4 -24 -12 q-2 -10 8 -14 z"/>' +
    '</g>' +
    // serpiginous linear ulcers (accent) weaving between islands
    '<path d="M76 52 q10 22 -6 40 q-14 18 4 40 q14 18 -2 34" stroke="#e0524f" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
    '<path d="M120 58 q8 24 -4 44 q-12 20 6 42" stroke="#e0524f" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
    // SKIP area - normal smooth mucosa (middle, faint, no cobblestones)
    '<rect x="150" y="46" width="70" height="118" rx="10" fill="currentColor" fill-opacity="0.03"/>' +
    '<text x="185" y="112" text-anchor="middle" font-size="9" fill="currentColor" fill-opacity="0.55" font-family="sans-serif">skip area</text>' +
    // cobblestone mucosa islands - right segment
    '<g stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.14">' +
    '<path d="M242 60 q18 -8 30 4 q6 18 -10 24 q-22 4 -26 -12 q-2 -12 6 -16 z"/>' +
    '<path d="M284 66 q18 -6 26 8 q2 16 -16 20 q-18 2 -20 -14 q0 -10 10 -14 z"/>' +
    '<path d="M244 96 q18 -6 28 6 q4 16 -14 22 q-20 2 -22 -14 q0 -10 8 -14 z"/>' +
    '<path d="M286 100 q18 -6 26 8 q2 16 -16 20 q-18 0 -18 -16 q0 -8 8 -12 z"/>' +
    '<path d="M324 82 q16 -4 22 8 q2 16 -14 18 q-16 0 -16 -14 q0 -8 8 -12 z"/>' +
    '<path d="M254 132 q18 -6 28 4 q6 16 -12 22 q-20 4 -24 -12 q-2 -10 8 -14 z"/>' +
    '</g>' +
    '<path d="M280 52 q10 22 -6 40 q-14 18 4 40 q12 16 -2 32" stroke="#e0524f" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
    '</svg>',

  // s2ck-0010 FAST exam: hepatorenal (Morrison) pouch US schematic - anechoic dark stripe
  // of free fluid between liver and kidney.
  "s2ck-0010": '<svg viewBox="0 0 340 240" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    // US fan frame
    '<path d="M170 14 L318 210 A170 170 0 0 1 22 210 Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.03"/>' +
    '<circle cx="170" cy="14" r="5" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.2"/>' +
    // depth arcs
    '<path d="M96 96 A96 96 0 0 1 244 96" stroke="currentColor" stroke-opacity="0.15" fill="none"/>' +
    '<path d="M62 150 A150 150 0 0 1 278 150" stroke="currentColor" stroke-opacity="0.12" fill="none"/>' +
    // LIVER (upper) - homogeneous mid-gray
    '<path d="M60 96 q60 -30 200 -8 q6 30 -20 44 q-90 22 -168 6 q-24 -6 -12 -42 z" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.16"/>' +
    '<text x="110" y="120" font-size="10" fill="currentColor" fill-opacity="0.65" font-family="sans-serif">liver</text>' +
    // KIDNEY (lower) - oval with hyperechoic center
    '<ellipse cx="170" cy="176" rx="86" ry="34" stroke="currentColor" stroke-width="1.4" fill="currentColor" fill-opacity="0.12"/>' +
    '<ellipse cx="170" cy="176" rx="40" ry="13" fill="currentColor" fill-opacity="0.22"/>' +
    '<text x="150" y="180" font-size="10" fill="currentColor" fill-opacity="0.65" font-family="sans-serif">kidney</text>' +
    // FREE FLUID - anechoic (near-black) stripe in Morrison pouch between liver and kidney
    '<path d="M62 140 q108 26 216 -4 q-4 12 -18 16 q-92 24 -186 2 q-10 -4 -12 -14 z" fill="#0d0d0d" fill-opacity="0.82" stroke="#e0524f" stroke-width="1.8"/>' +
    '</svg>',

  // s2ck-0013 Cholecystitis: RUQ gallbladder US schematic - thickened wall, pericholecystic
  // fluid, shadowing stone impacted in the neck with acoustic shadow.
  "s2ck-0013": '<svg viewBox="0 0 340 240" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    // US fan frame
    '<path d="M170 14 L318 210 A170 170 0 0 1 22 210 Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.03"/>' +
    '<circle cx="170" cy="14" r="5" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.2"/>' +
    '<path d="M62 150 A150 150 0 0 1 278 150" stroke="currentColor" stroke-opacity="0.12" fill="none"/>' +
    // gallbladder lumen (anechoic bile) - pear shape, neck up-left
    '<path d="M150 70 q-8 -14 8 -20 q16 -6 22 8 q40 6 52 54 q10 50 -32 74 q-46 24 -74 -14 q-22 -34 6 -70 q6 -20 12 -32 z" fill="#0d0d0d" fill-opacity="0.55"/>' +
    // THICKENED wall (double outline)
    '<path d="M150 70 q-8 -14 8 -20 q16 -6 22 8 q40 6 52 54 q10 50 -32 74 q-46 24 -74 -14 q-22 -34 6 -70 q6 -20 12 -32 z" stroke="#e0524f" stroke-width="5" fill="none"/>' +
    '<path d="M150 70 q-8 -14 8 -20 q16 -6 22 8 q40 6 52 54 q10 50 -32 74 q-46 24 -74 -14 q-22 -34 6 -70 q6 -20 12 -32 z" stroke="currentColor" stroke-width="1.2" fill="none" stroke-opacity="0.5"/>' +
    // pericholecystic fluid (thin dark rim outside wall)
    '<path d="M132 66 q-16 30 -6 74 q10 40 44 52" stroke="#0d0d0d" stroke-opacity="0.7" stroke-width="4" fill="none"/>' +
    // impacted stone in the neck (hyperechoic bright arc)
    '<ellipse cx="164" cy="66" rx="16" ry="10" fill="#f2f2f2" stroke="currentColor" stroke-width="1.2"/>' +
    '<path d="M150 62 q14 -8 28 0" stroke="#e0524f" stroke-width="2.2" fill="none"/>' +
    // acoustic shadow behind stone (down away from probe) - two faint parallel bands
    '<path d="M150 74 L142 208 L186 208 L178 74 Z" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-opacity="0.25" stroke-dasharray="5 5"/>' +
    '<text x="212" y="176" font-size="10" fill="currentColor" fill-opacity="0.6" font-family="sans-serif">shadow</text>' +
    '</svg>',

  // s2ck-0017 Pyloric stenosis: US schematic - elongated pyloric channel with thickened
  // muscular wall; tiny tick marks label channel length and wall thickness.
  "s2ck-0017": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    // US fan frame
    '<path d="M180 12 L336 196 A180 180 0 0 1 24 196 Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.03"/>' +
    '<circle cx="180" cy="12" r="5" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.2"/>' +
    // elongated pyloric channel (long tubular structure)
    // outer muscular wall
    '<path d="M90 118 q90 -30 190 0 q6 22 0 44 q-96 30 -190 0 q-6 -22 0 -44 z" stroke="#e0524f" stroke-width="2" fill="#e0524f" fill-opacity="0.10"/>' +
    // inner mucosal channel (thin anechoic lumen) - shows thickened muscle between walls
    '<path d="M108 140 q76 -12 156 0 q0 4 0 8 q-80 12 -156 0 q0 -4 0 -8 z" fill="#0d0d0d" fill-opacity="0.6" stroke="currentColor" stroke-width="0.8"/>' +
    // CHANNEL LENGTH caliper (horizontal, along channel) with tick marks
    '<line x1="96" y1="182" x2="274" y2="182" stroke="currentColor" stroke-width="1.4"/>' +
    '<line x1="96" y1="176" x2="96" y2="188" stroke="currentColor" stroke-width="1.4"/>' +
    '<line x1="274" y1="176" x2="274" y2="188" stroke="currentColor" stroke-width="1.4"/>' +
    '<text x="185" y="200" text-anchor="middle" font-size="9" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">length</text>' +
    // WALL THICKNESS caliper (vertical, across muscular wall) with tick marks
    '<line x1="300" y1="118" x2="300" y2="140" stroke="#e0524f" stroke-width="1.6"/>' +
    '<line x1="294" y1="118" x2="306" y2="118" stroke="#e0524f" stroke-width="1.6"/>' +
    '<line x1="294" y1="140" x2="306" y2="140" stroke="#e0524f" stroke-width="1.6"/>' +
    '<text x="308" y="134" font-size="9" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">wall</text>' +
    '</svg>'

});
