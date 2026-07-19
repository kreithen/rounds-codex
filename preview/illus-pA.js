/*
 * Rounds Codex - USMLE Mode illustration pack A
 * Original clearly-SCHEMATIC educational SVGs keyed by question id.
 * Line art uses currentColor (adapts to light/dark); the accent #e0524f marks
 * only the key pathologic feature. No captions inside the SVG (the app adds one).
 */
Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, {

  // s1-0010 Pemphigus vulgaris: direct immunofluorescence "chicken-wire"
  // net-like intercellular IgG deposition surrounding each keratinocyte.
  "s1-0010": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="208" stroke="currentColor" stroke-opacity="0.15"/>' +
    // dark epidermal field background
    '<rect x="12" y="12" width="336" height="196" fill="currentColor" fill-opacity="0.06"/>' +
    // reticular fishnet of glowing intercellular borders between keratinocyte polygons
    '<g stroke="#e0524f" stroke-width="2.4" stroke-linejoin="round" stroke-opacity="0.9">' +
    '<path d="M12 52 H348"/><path d="M12 100 H348"/><path d="M12 148 H348"/>' +
    '<path d="M46 12 V208"/><path d="M94 12 V208"/><path d="M142 12 V208"/>' +
    '<path d="M190 12 V208"/><path d="M238 12 V208"/><path d="M286 12 V208"/><path d="M334 12 V208"/>' +
    // offset rows to give an interlocking honeycomb / net feel
    '<path d="M70 12 V52"/><path d="M118 12 V52"/><path d="M166 12 V52"/><path d="M214 12 V52"/><path d="M262 12 V52"/><path d="M310 12 V52"/>' +
    '<path d="M70 100 V148"/><path d="M118 100 V148"/><path d="M166 100 V148"/><path d="M214 100 V148"/><path d="M262 100 V148"/><path d="M310 100 V148"/>' +
    '</g>' +
    // soft glow blur suggestion + nuclei of keratinocytes (dark dots in each cell)
    '<g fill="currentColor" fill-opacity="0.5">' +
    '<circle cx="29" cy="32" r="4"/><circle cx="70" cy="32" r="4"/><circle cx="118" cy="32" r="4"/><circle cx="166" cy="32" r="4"/><circle cx="214" cy="32" r="4"/><circle cx="262" cy="32" r="4"/><circle cx="310" cy="32" r="4"/>' +
    '<circle cx="29" cy="76" r="4"/><circle cx="70" cy="76" r="4"/><circle cx="118" cy="76" r="4"/><circle cx="166" cy="76" r="4"/><circle cx="214" cy="76" r="4"/><circle cx="262" cy="76" r="4"/><circle cx="310" cy="76" r="4"/>' +
    '<circle cx="29" cy="124" r="4"/><circle cx="70" cy="124" r="4"/><circle cx="118" cy="124" r="4"/><circle cx="166" cy="124" r="4"/><circle cx="214" cy="124" r="4"/><circle cx="262" cy="124" r="4"/><circle cx="310" cy="124" r="4"/>' +
    '<circle cx="29" cy="178" r="4"/><circle cx="70" cy="178" r="4"/><circle cx="118" cy="178" r="4"/><circle cx="166" cy="178" r="4"/><circle cx="214" cy="178" r="4"/><circle cx="262" cy="178" r="4"/><circle cx="310" cy="178" r="4"/>' +
    '</g>' +
    '<text x="16" y="26" font-size="10" fill="#e0524f" fill-opacity="0.9" font-family="sans-serif">IgG net</text>' +
    '</svg>',

  // s1-0021 Burkitt "starry sky": dense small dark lymphocytes with scattered
  // pale tingible-body macrophages (the "stars").
  "s1-0021": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="208" stroke="currentColor" stroke-opacity="0.15"/>' +
    // dense sky of small dark lymphocytes
    (function () {
      var s = '<g fill="currentColor" fill-opacity="0.55">';
      var seed = 7;
      function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
      for (var y = 22; y < 206; y += 15) {
        for (var x = 20; x < 344; x += 15) {
          var jx = (rnd() - 0.5) * 8, jy = (rnd() - 0.5) * 8;
          var r = 4 + rnd() * 1.5;
          s += '<circle cx="' + (x + jx).toFixed(1) + '" cy="' + (y + jy).toFixed(1) + '" r="' + r.toFixed(1) + '"/>';
        }
      }
      s += '</g>';
      // pale round tingible-body macrophages = the "stars" (clear space + faint outline + debris specks)
      var stars = [[70, 55], [150, 40], [255, 70], [300, 130], [95, 150], [190, 170], [240, 155], [130, 100], [55, 190], [320, 190]];
      s += '<g>';
      for (var i = 0; i < stars.length; i++) {
        var cx = stars[i][0], cy = stars[i][1];
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="12" fill="currentColor" fill-opacity="0.02" stroke="currentColor" stroke-opacity="0.4" stroke-width="1"/>';
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="4" fill="currentColor" fill-opacity="0.28"/>'; // macrophage nucleus
        s += '<circle cx="' + (cx - 4) + '" cy="' + (cy + 3) + '" r="1.3" fill="#e0524f" fill-opacity="0.7"/>'; // engulfed debris
        s += '<circle cx="' + (cx + 5) + '" cy="' + (cy - 2) + '" r="1.3" fill="#e0524f" fill-opacity="0.7"/>';
      }
      s += '</g>';
      return s;
    })() +
    '</svg>',

  // s1-0030 G6PD deficiency: peripheral smear with bite cells and Heinz-body inclusions.
  "s1-0030": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="208" stroke="currentColor" stroke-opacity="0.15"/>' +
    // normal RBCs: pale biconcave discs (ring with central pallor)
    '<g stroke="currentColor" stroke-width="1.6">' +
    '<g fill="currentColor" fill-opacity="0.10">' +
    '<circle cx="55" cy="50" r="20"/><circle cx="150" cy="45" r="20"/><circle cx="300" cy="60" r="20"/>' +
    '<circle cx="90" cy="120" r="20"/><circle cx="250" cy="120" r="20"/><circle cx="120" cy="185" r="20"/><circle cx="215" cy="180" r="20"/><circle cx="315" cy="160" r="20"/>' +
    '</g>' +
    // central pallor
    '<g fill="none" stroke-opacity="0.35">' +
    '<circle cx="55" cy="50" r="9"/><circle cx="150" cy="45" r="9"/><circle cx="300" cy="60" r="9"/>' +
    '<circle cx="90" cy="120" r="9"/><circle cx="250" cy="120" r="9"/><circle cx="120" cy="185" r="9"/><circle cx="215" cy="180" r="9"/><circle cx="315" cy="160" r="9"/>' +
    '</g></g>' +
    // BITE CELLS: RBC with a semicircular bite removed from the rim
    '<g stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.10">' +
    '<path d="M225 42 a20 20 0 1 1 0.1 0 A11 11 0 0 0 225 42 Z"/>' +
    '<path d="M175 130 a20 20 0 1 1 0.1 0 A11 11 0 0 0 175 130 Z"/>' +
    '</g>' +
    '<text x="196" y="24" font-size="9" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">bite cell</text>' +
    // HEINZ BODIES: dark round inclusions pushed to the cell membrane (accent)
    '<g fill="#e0524f" fill-opacity="0.85">' +
    '<circle cx="66" cy="42" r="4"/><circle cx="160" cy="52" r="4"/>' +
    '<circle cx="80" cy="112" r="4"/><circle cx="258" cy="128" r="4"/>' +
    '<circle cx="130" cy="178" r="4"/><circle cx="306" cy="54" r="4"/>' +
    '</g>' +
    '<text x="12" y="210" font-size="9" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">Heinz body</text>' +
    '</svg>',

  // s1-0056 Alzheimer disease: cortical field with rounded extracellular amyloid
  // (neuritic) plaques and intracellular flame-shaped neurofibrillary tangles.
  "s1-0056": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="208" stroke="currentColor" stroke-opacity="0.15"/>' +
    // neuropil background
    '<rect x="12" y="12" width="336" height="196" fill="currentColor" fill-opacity="0.04"/>' +
    // faint scattered neuron cell bodies / glia
    '<g fill="currentColor" fill-opacity="0.14">' +
    '<circle cx="40" cy="40" r="3"/><circle cx="300" cy="35" r="3"/><circle cx="60" cy="180" r="3"/><circle cx="330" cy="150" r="3"/><circle cx="200" cy="30" r="3"/><circle cx="150" cy="200" r="3"/><circle cx="270" cy="190" r="3"/></g>' +
    // NEURITIC PLAQUES: rounded extracellular deposits, dense amyloid core + radiating dystrophic neurites
    (function () {
      var plaques = [[110, 75], [255, 130]];
      var s = '';
      for (var i = 0; i < plaques.length; i++) {
        var cx = plaques[i][0], cy = plaques[i][1];
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="34" fill="#e0524f" fill-opacity="0.07" stroke="#e0524f" stroke-opacity="0.4" stroke-width="1"/>';
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="12" fill="#e0524f" fill-opacity="0.45" stroke="#e0524f" stroke-width="1"/>'; // dense amyloid core
        // radiating dystrophic neurites
        s += '<g stroke="currentColor" stroke-opacity="0.45" stroke-width="1.2">';
        for (var a = 0; a < 360; a += 30) {
          var r1 = 15, r2 = 30;
          var rad = a * Math.PI / 180;
          var x1 = cx + r1 * Math.cos(rad), y1 = cy + r1 * Math.sin(rad);
          var x2 = cx + r2 * Math.cos(rad), y2 = cy + r2 * Math.sin(rad);
          s += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '"/>';
        }
        s += '</g>';
      }
      return s;
    })() +
    // NEUROFIBRILLARY TANGLES: intracellular flame-shaped neurons
    (function () {
      var tangles = [[300, 70], [70, 150], [180, 110]];
      var s = '';
      for (var i = 0; i < tangles.length; i++) {
        var cx = tangles[i][0], cy = tangles[i][1];
        // flame-shaped (pyramidal) cell body tapering to an apical point
        s += '<path d="M' + cx + ' ' + (cy - 26) + ' q13 20 8 34 q-3 10 -8 12 q-5 -2 -8 -12 q-5 -14 8 -34 Z" ' +
          'fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.3"/>';
        // internal tangled fibrils
        s += '<g stroke="currentColor" stroke-opacity="0.6" stroke-width="1"><path d="M' + (cx - 4) + ' ' + (cy - 12) + ' q4 8 0 22"/>' +
          '<path d="M' + cx + ' ' + (cy - 16) + ' q3 10 0 26"/><path d="M' + (cx + 4) + ' ' + (cy - 12) + ' q-4 8 0 22"/></g>';
      }
      return s;
    })() +
    '<text x="80" y="122" font-size="9" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">plaque</text>' +
    '<text x="292" y="34" font-size="9" fill="currentColor" fill-opacity="0.65" font-family="sans-serif">tangle</text>' +
    '</svg>',

  // s1-0095 TB caseating granuloma: central necrosis, epithelioid macrophages,
  // Langhans giant cell with horseshoe nuclei, lymphocyte rim.
  "s1-0095": '<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="228" stroke="currentColor" stroke-opacity="0.15"/>' +
    // outer lymphocyte rim: ring of small dark cells
    (function () {
      var s = '<g fill="currentColor" fill-opacity="0.5">';
      var cx = 180, cy = 120;
      for (var a = 0; a < 360; a += 12) {
        var rad = a * Math.PI / 180;
        var rr = 104 + ((a / 12) % 2 ? 6 : -6);
        s += '<circle cx="' + (cx + rr * Math.cos(rad)).toFixed(1) + '" cy="' + (cy + rr * 0.9 * Math.sin(rad)).toFixed(1) + '" r="3.4"/>';
      }
      s += '</g>';
      return s;
    })() +
    // epithelioid macrophage zone: elongated pink cells arranged around the center
    (function () {
      var s = '<g stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.08">';
      var cx = 180, cy = 120;
      for (var a = 0; a < 360; a += 30) {
        var rad = a * Math.PI / 180;
        var ex = cx + 66 * Math.cos(rad), ey = cy + 60 * Math.sin(rad);
        s += '<ellipse cx="' + ex.toFixed(1) + '" cy="' + ey.toFixed(1) + '" rx="12" ry="6" transform="rotate(' + a + ' ' + ex.toFixed(1) + ' ' + ey.toFixed(1) + ')"/>';
      }
      s += '</g>';
      return s;
    })() +
    // central amorphous caseous necrosis ring
    '<ellipse cx="180" cy="120" rx="46" ry="40" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.4" stroke-width="1"/>' +
    '<ellipse cx="180" cy="120" rx="30" ry="26" fill="currentColor" fill-opacity="0.10"/>' +
    // amorphous granular debris in necrotic center
    '<g fill="currentColor" fill-opacity="0.3"><circle cx="172" cy="112" r="2"/><circle cx="188" cy="118" r="2"/><circle cx="178" cy="128" r="2"/><circle cx="190" cy="106" r="2"/><circle cx="166" cy="124" r="2"/></g>' +
    // LANGHANS giant cell: multinucleate cell with horseshoe-arranged nuclei at periphery
    '<circle cx="95" cy="120" r="30" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="1.6"/>' +
    (function () {
      // horseshoe arc of nuclei along one margin
      var s = '<g stroke="currentColor" stroke-width="1" fill="currentColor" fill-opacity="0.25">';
      for (var a = 120; a <= 300; a += 22.5) {
        var rad = a * Math.PI / 180;
        var nx = 95 + 20 * Math.cos(rad), ny = 120 + 20 * Math.sin(rad);
        s += '<circle cx="' + nx.toFixed(1) + '" cy="' + ny.toFixed(1) + '" r="4.5"/>';
      }
      s += '</g>';
      return s;
    })() +
    '<text x="95" y="164" text-anchor="middle" font-size="9" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">Langhans</text>' +
    '<text x="180" y="122" text-anchor="middle" font-size="9" fill="currentColor" fill-opacity="0.6" font-family="sans-serif">caseous</text>' +
    '</svg>',

  // s1-0105 TTP: peripheral smear with fragmented RBCs (schistocytes / helmet cells)
  // and conspicuously few platelets.
  "s1-0105": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="208" stroke="currentColor" stroke-opacity="0.15"/>' +
    // a couple of intact RBCs for contrast
    '<g stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.10">' +
    '<circle cx="60" cy="55" r="19"/><circle cx="290" cy="170" r="19"/>' +
    '</g>' +
    '<g fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.4"><circle cx="60" cy="55" r="8"/><circle cx="290" cy="170" r="8"/></g>' +
    // SCHISTOCYTES: fragmented cells - helmet shapes, triangular fragments, sharp points
    '<g stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.10" stroke-linejoin="round">' +
    // helmet cell (partial disc with a straight cut and two horns)
    '<path d="M150 40 a20 20 0 1 0 0 40 L162 66 L156 60 L162 54 Z"/>' +
    // triangular fragment
    '<path d="M235 45 L262 52 L246 78 Z"/>' +
    // helmet cell 2
    '<path d="M95 150 a18 18 0 1 0 0 36 L108 174 L101 168 L108 162 Z"/>' +
    // keratocyte / horned fragment
    '<path d="M185 150 q18 -14 34 0 q-6 8 -14 6 q6 6 -2 12 q-10 8 -18 0 q-8 -6 0 -18 Z"/>' +
    // small triangular fragment
    '<path d="M300 60 L322 70 L306 88 Z"/>' +
    // crescent fragment
    '<path d="M210 100 a16 16 0 1 0 14 24 a12 12 0 0 1 -14 -24 Z"/>' +
    '</g>' +
    '<text x="128" y="32" font-size="9" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">schistocyte</text>' +
    // FEW platelets: only two tiny accent specks (emphasize scarcity)
    '<circle cx="125" cy="120" r="3" fill="#e0524f" fill-opacity="0.85"/>' +
    '<circle cx="255" cy="115" r="2.6" fill="#e0524f" fill-opacity="0.85"/>' +
    '<text x="12" y="210" font-size="9" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">scant platelets</text>' +
    '</svg>',

  // s1-0118 Papillary thyroid carcinoma: pale "Orphan Annie eye" nuclei, nuclear
  // grooves, and a laminated psammoma body.
  "s1-0118": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="208" stroke="currentColor" stroke-opacity="0.15"/>' +
    // papillary architecture hint: a fibrovascular papilla lined by cells
    '<path d="M30 200 q40 -120 150 -150 q120 -30 150 30" stroke="currentColor" stroke-opacity="0.18" stroke-width="10" fill="none"/>' +
    // cells with pale empty "Orphan Annie eye" nuclei + nuclear grooves
    (function () {
      var cells = [[70, 60], [130, 45], [195, 55], [255, 70], [305, 100], [95, 120], [160, 120], [225, 130], [290, 155], [130, 175], [200, 185]];
      var s = '';
      for (var i = 0; i < cells.length; i++) {
        var cx = cells[i][0], cy = cells[i][1];
        // cytoplasm
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="20" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-opacity="0.4" stroke-width="1"/>';
        // pale empty (ground-glass / Orphan Annie eye) nucleus - clear, faint outline
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="12" fill="currentColor" fill-opacity="0.015" stroke="currentColor" stroke-width="1.2"/>';
        // longitudinal nuclear groove (coffee-bean line)
        s += '<line x1="' + (cx - 11) + '" y1="' + cy + '" x2="' + (cx + 11) + '" y2="' + cy + '" stroke="currentColor" stroke-opacity="0.7" stroke-width="1.2"/>';
      }
      return s;
    })() +
    // PSAMMOMA BODY: concentric laminated calcification (accent)
    '<g fill="none" stroke="#e0524f">' +
    '<circle cx="175" cy="110" r="17" stroke-opacity="0.35" stroke-width="1.4"/>' +
    '<circle cx="175" cy="110" r="12" stroke-opacity="0.5" stroke-width="1.4"/>' +
    '<circle cx="175" cy="110" r="7" stroke-opacity="0.7" stroke-width="1.4"/>' +
    '</g>' +
    '<circle cx="175" cy="110" r="3" fill="#e0524f" fill-opacity="0.7"/>' +
    '<text x="175" y="140" text-anchor="middle" font-size="9" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">psammoma</text>' +
    '<text x="55" y="32" font-size="9" fill="currentColor" fill-opacity="0.65" font-family="sans-serif">Orphan Annie eye</text>' +
    '</svg>',

  // s1-0115 Barrett esophagus: transition from stratified squamous epithelium to
  // intestinal columnar epithelium with goblet cells.
  "s1-0115": '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="348" height="208" stroke="currentColor" stroke-opacity="0.15"/>' +
    // basement membrane / mucosal baseline
    '<path d="M12 150 H348" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5"/>' +
    // underlying lamina propria shading
    '<rect x="12" y="150" width="336" height="58" fill="currentColor" fill-opacity="0.05"/>' +
    // LEFT: stratified squamous epithelium - flattening layered cells
    '<g stroke="currentColor" stroke-width="1" stroke-opacity="0.55" fill="none">' +
    // basal layer (rounded) then progressively flatter cells toward the surface
    '<path d="M18 138 q10 -8 20 0 t20 0 t20 0 t20 0 t20 0"/>' +
    '<path d="M18 118 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0"/>' +
    '<path d="M18 100 q13 -4 26 0 t26 0 t26 0 t26 0"/>' +
    '<path d="M18 84 q17 -3 34 0 t34 0 t34 0"/>' +
    '<path d="M18 70 q17 -2 34 0 t34 0 t34 0"/>' +
    '</g>' +
    // vertical cell divisions (basal, rounded)
    '<g stroke="currentColor" stroke-opacity="0.3" stroke-width="0.8">' +
    '<line x1="38" y1="150" x2="38" y2="138"/><line x1="58" y1="150" x2="58" y2="138"/><line x1="78" y1="150" x2="78" y2="138"/><line x1="98" y1="150" x2="98" y2="138"/><line x1="118" y1="150" x2="118" y2="138"/>' +
    '</g>' +
    // squamous nuclei
    '<g fill="currentColor" fill-opacity="0.3"><circle cx="30" cy="144" r="2.5"/><circle cx="50" cy="144" r="2.5"/><circle cx="70" cy="144" r="2.5"/><circle cx="90" cy="144" r="2.5"/><circle cx="110" cy="144" r="2.5"/><circle cx="45" cy="126" r="2"/><circle cx="85" cy="126" r="2"/></g>' +
    '<text x="20" y="200" font-size="9" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">squamous</text>' +
    // transition zone marker
    '<line x1="150" y1="60" x2="150" y2="150" stroke="currentColor" stroke-opacity="0.25" stroke-dasharray="4 4"/>' +
    // RIGHT: intestinal columnar epithelium - tall picket-fence cells with goblet cells
    (function () {
      var s = '<g stroke="currentColor" stroke-width="1" stroke-opacity="0.5">';
      // surface line
      s += '<path d="M162 78 H344" stroke-opacity="0.5"/>';
      // tall columnar cell divisions (picket fence)
      for (var x = 162; x <= 344; x += 20) {
        s += '<line x1="' + x + '" y1="78" x2="' + x + '" y2="150"/>';
      }
      s += '</g>';
      // basally placed columnar nuclei (near basement membrane)
      s += '<g fill="currentColor" fill-opacity="0.3">';
      for (var xn = 172; xn < 344; xn += 20) {
        s += '<ellipse cx="' + xn + '" cy="140" rx="3" ry="5"/>';
      }
      s += '</g>';
      // GOBLET CELLS: distended mucin vacuoles (wine-goblet shape) - accent to mark the key metaplastic feature
      var goblets = [182, 242, 302, 322, 202];
      s += '<g>';
      for (var i = 0; i < goblets.length; i++) {
        var gx = goblets[i];
        s += '<path d="M' + (gx - 7) + ' 92 q7 -12 14 0 q0 18 -7 24 q-7 -6 -7 -24 Z" fill="#e0524f" fill-opacity="0.25" stroke="#e0524f" stroke-opacity="0.6" stroke-width="1"/>';
      }
      s += '</g>';
      return s;
    })() +
    '<text x="255" y="200" text-anchor="middle" font-size="9" fill="currentColor" fill-opacity="0.7" font-family="sans-serif">columnar</text>' +
    '<text x="300" y="72" font-size="9" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">goblet</text>' +
    '</svg>'

});
