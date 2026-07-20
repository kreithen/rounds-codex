/* Rounds Codex - USMLE illustration pack L (26 items). Auto-generated schematic SVGs. */
(function () {
  'use strict';
  var A = '#e0524f';                 // reserved accent (single key finding)
  var W = 'rgba(238,244,250,.94)';   // crisp contour
  var LBL = 'rgba(214,224,238,.80)';

  // ---- shared helpers ------------------------------------------------------
  function svg(w, h, body) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' + body + '</svg>';
  }
  function film(w, h) {
    return '<rect x="8" y="8" width="' + (w - 16) + '" height="' + (h - 16) + '" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/>';
  }
  function card(w, h) {
    return '<rect x="8" y="8" width="' + (w - 16) + '" height="' + (h - 16) + '" rx="12" fill="#0a0f16" stroke="rgba(255,255,255,.08)"/>';
  }
  function usWedge(cx, top, botW, botY) {
    // convex ultrasound sector
    return '<path d="M' + cx + ' ' + top + ' L' + (cx + botW) + ' ' + botY + ' A' + botW + ' ' + botW + ' 0 0 1 ' + (cx - botW) + ' ' + botY + ' Z" fill="#06090d" stroke="rgba(205,216,229,.16)" stroke-width="1.2"/>';
  }
  function ecgGrid(w, h) {
    var s = '<rect x="8" y="8" width="' + (w - 16) + '" height="' + (h - 16) + '" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g>';
    var x, y, op;
    for (x = 0; x <= w; x += 12) { op = (x % 60 === 0) ? 0.13 : 0.05; s += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + h + '" stroke="' + A + '" stroke-opacity="' + op + '"/>'; }
    for (y = 0; y <= h; y += 12) { op = (y % 60 === 0) ? 0.13 : 0.05; s += '<line x1="0" y1="' + y + '" x2="' + w + '" y2="' + y + '" stroke="' + A + '" stroke-opacity="' + op + '"/>'; }
    return s + '</g>';
  }
  function pts(x, base, a) {
    return a.map(function (q) { return (x + q[0]) + ',' + (base - q[1]); }).join(' ');
  }
  function baseline(w, y) {
    return '<line x1="16" y1="' + y + '" x2="' + (w - 16) + '" y2="' + y + '" stroke="rgba(210,220,232,.20)" stroke-width="1"/>';
  }
  function lbl(x, y, t, c, anchor) {
    return '<text x="' + x + '" y="' + y + '" font-family="sans-serif" font-size="11" fill="' + (c || LBL) + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + '>' + t + '</text>';
  }

  // ======================================================================
  //  ECG entries
  // ======================================================================

  // pericarditis beat: small P, PR depression, QRS, concave-up ST elevation, T
  var perB = [[0, 0], [7, 0], [10, 6], [14, 8], [18, 5], [22, 0], [25, -5], [28, -5], [31, -3], [33, 28], [37, -5], [40, 8], [47, 9], [54, 10], [60, 16], [66, 19], [72, 12], [78, 5], [84, 0]];
  var perSeg = [[37, -5], [40, 8], [47, 9], [54, 10], [60, 16]];
  function perRow(xs, base) {
    return xs.map(function (x) { return '<polyline points="' + pts(x, base, perB) + '" fill="none" stroke="' + W + '" stroke-width="2.3"/>'; }).join('');
  }
  function perAccent(xs, base) {
    return xs.map(function (x) {
      return '<polyline points="' + pts(x, base, perSeg) + '" fill="none" stroke="' + A + '" stroke-width="3"/>' +
        '<line x1="' + (x + 40) + '" y1="' + (base - 8) + '" x2="' + (x + 60) + '" y2="' + (base - 16) + '" stroke="' + A + '" stroke-width="7" stroke-opacity="0.14"/>';
    }).join('');
  }

  // s3-0323 acute pericarditis: diffuse concave ST elevation + PR depression (3 leads)
  var pcW = 480, pcH = 280, pcX3 = [30, 148, 266, 384];
  var s3_0323 = svg(pcW, pcH, ecgGrid(pcW, pcH) +
    baseline(pcW, 90) + baseline(pcW, 176) + baseline(pcW, 254) +
    perRow(pcX3, 90) + perRow(pcX3, 176) + perRow(pcX3, 254) +
    perAccent(pcX3, 90) + perAccent(pcX3, 176) + perAccent(pcX3, 254) +
    lbl(22, 32, 'I', LBL) + lbl(22, 148, 'II', LBL) + lbl(22, 226, 'V5', LBL) +
    lbl(pcW - 16, 272, 'Diffuse STE', A, 'end'));

  // s3-0326 acute pericarditis (distinct framing, 4 leads emphasising PR depression)
  var qcW = 500, qcH = 300, qcX = [30, 148, 266, 384];
  function prDepAccent(xs, base) {
    return xs.map(function (x) {
      return '<line x1="' + (x + 24) + '" y1="' + (base + 5) + '" x2="' + (x + 30) + '" y2="' + (base + 5) + '" stroke="' + A + '" stroke-width="3"/>';
    }).join('');
  }
  var s3_0326 = svg(qcW, qcH, ecgGrid(qcW, qcH) +
    baseline(qcW, 84) + baseline(qcW, 160) + baseline(qcW, 236) +
    perRow(qcX, 84) + perRow(qcX, 160) + perRow(qcX, 236) +
    perAccent(qcX, 84) + perAccent(qcX, 160) + perAccent(qcX, 236) +
    prDepAccent(qcX, 84) + prDepAccent(qcX, 160) + prDepAccent(qcX, 236) +
    lbl(22, 30, 'II', LBL) + lbl(22, 134, 'aVF', LBL) + lbl(22, 210, 'V6', LBL) +
    lbl(22, 268, 'Concave STE', A) + lbl(qcW - 16, 288, 'PR depression', A, 'end'));

  // s3-0336 CCB overdose: sinus bradycardia + first-degree AV block (long PR)
  var ccW = 500, ccH = 220, ccX = [40, 190, 340];
  var ccbB = [[0, 0], [8, 0], [12, 7], [16, 9], [20, 6], [24, 0], [52, 0], [55, -3], [57, 30], [61, -6], [64, 0], [72, 0], [80, 10], [88, 13], [96, 8], [102, 2], [112, 0]];
  var s3_0336 = svg(ccW, ccH, ecgGrid(ccW, ccH) +
    baseline(ccW, 130) +
    ccX.map(function (x) { return '<polyline points="' + pts(x, 130, ccbB) + '" fill="none" stroke="' + W + '" stroke-width="2.3"/>'; }).join('') +
    ccX.map(function (x) {
      return '<line x1="' + (x + 24) + '" y1="' + (130 - 34) + '" x2="' + (x + 55) + '" y2="' + (130 - 34) + '" stroke="' + A + '" stroke-width="3"/>' +
        '<line x1="' + (x + 24) + '" y1="' + (130 - 30) + '" x2="' + (x + 24) + '" y2="' + (130 - 38) + '" stroke="' + A + '" stroke-width="3"/>' +
        '<line x1="' + (x + 55) + '" y1="' + (130 - 30) + '" x2="' + (x + 55) + '" y2="' + (130 - 38) + '" stroke="' + A + '" stroke-width="3"/>';
    }).join('') +
    lbl(22, 34, 'II', LBL) + lbl(40, 60, 'Long PR', A) + lbl(ccW - 16, 200, 'Bradycardia', LBL, 'end'));

  // s3-0386 post-arrest: sinus rhythm ~92/min, nonspecific flattened T waves
  var paW = 500, paH = 210, paX = [30, 118, 206, 294, 382];
  var paB = [[0, 0], [6, 0], [9, 6], [13, 8], [17, 5], [21, 0], [24, 0], [27, -2], [29, 28], [33, -5], [36, 0], [42, 0], [50, 3], [58, 4], [66, 3], [72, 0], [84, 0]];
  var paT = [[42, 0], [50, 3], [58, 4], [66, 3], [72, 0]];
  var s3_0386 = svg(paW, paH, ecgGrid(paW, paH) +
    baseline(paW, 120) +
    paX.map(function (x) { return '<polyline points="' + pts(x, 120, paB) + '" fill="none" stroke="' + W + '" stroke-width="2.3"/>'; }).join('') +
    paX.map(function (x) { return '<polyline points="' + pts(x, 120, paT) + '" fill="none" stroke="' + A + '" stroke-width="2.8"/>'; }).join('') +
    lbl(22, 34, 'II', LBL) + lbl(22, 190, 'Flat T waves', A));

  // ======================================================================
  //  Radiographs / barium
  // ======================================================================

  // s3-0266 SCFE: frog-leg lateral pelvis, posteroinferior slip of left epiphysis
  var s3_0266 = svg(340, 300, film(340, 300) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // pelvis / acetabula
    '<path d="M110 70 C150 58 190 58 230 70 C244 96 244 128 224 150 C184 164 156 164 116 150 C96 128 96 96 110 70 Z" fill="rgba(214,224,238,.05)" stroke="rgba(205,216,229,.34)" stroke-width="1.4"/>' +
    '<path d="M170 66 C170 108 170 150 170 200" stroke="rgba(205,216,229,.14)" stroke-width="1"/>' +
    // right femur (normal) - frog-leg abducted
    '<ellipse cx="118" cy="150" rx="20" ry="17" fill="rgba(20,28,38,.5)" stroke="rgba(205,216,229,.4)" stroke-width="1.2"/>' +
    '<circle cx="112" cy="150" r="15" fill="rgba(214,224,238,.12)" stroke="' + W + '" stroke-width="1.9"/>' +
    '<path d="M100 158 C74 178 54 214 52 262 L74 262 C78 220 96 190 118 172 Z" fill="rgba(214,224,238,.08)" stroke="' + W + '" stroke-width="1.8"/>' +
    '<path d="M99 150 C112 156 124 156 136 150" stroke="rgba(205,216,229,.6)" stroke-width="2" fill="none"/>' +
    // left femur (SLIPPED) - epiphysis displaced posteroinferior off neck
    '<ellipse cx="222" cy="150" rx="20" ry="17" fill="rgba(20,28,38,.5)" stroke="rgba(205,216,229,.4)" stroke-width="1.2"/>' +
    '<path d="M240 158 C266 178 286 214 288 262 L266 262 C262 220 244 190 222 172 Z" fill="rgba(214,224,238,.08)" stroke="' + W + '" stroke-width="1.8"/>' +
    // femoral neck line (metaphysis) with Klein line
    '<line x1="205" y1="142" x2="252" y2="120" stroke="rgba(150,200,235,.6)" stroke-width="2" stroke-dasharray="5 3"/>' +
    // slipped epiphysis (melted ice cream) - accent
    '<path d="M206 158 C190 166 186 186 198 200 C214 214 240 210 250 190 C258 172 246 156 228 152 C220 152 212 154 206 158 Z" fill="rgba(224,82,79,.22)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M206 158 C190 166 186 186 198 200 C214 214 240 210 250 190 C258 172 246 156 228 152 C220 152 212 154 206 158 Z" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.14"/>' +
    '</g>' + lbl(230, 234, 'Slipped', A, 'middle') + lbl(96, 250, 'Normal', LBL, 'middle'));

  // s3-0273 aortic dissection: portable CXR, widened mediastinum
  var s3_0273 = svg(320, 340, film(320, 340) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // rib cage
    '<g stroke="rgba(205,216,229,.22)" stroke-width="1.4" fill="none">' +
    '<path d="M96 84 C64 96 42 122 34 158"/><path d="M100 120 C66 132 42 160 34 198"/><path d="M104 156 C70 168 46 196 40 234"/>' +
    '<path d="M224 84 C256 96 278 122 286 158"/><path d="M220 120 C254 132 278 160 286 198"/><path d="M216 156 C250 168 274 196 280 234"/></g>' +
    // clavicles
    '<path d="M96 78 C122 70 146 72 158 80 M224 78 C198 70 174 72 162 80" stroke="rgba(205,216,229,.4)" stroke-width="2" fill="none"/>' +
    // widened mediastinum (accent)
    '<path d="M110 92 C104 150 108 210 116 262 C140 274 180 274 204 262 C214 208 216 150 210 92 C186 82 134 82 110 92 Z" fill="rgba(224,82,79,.12)" stroke="' + A + '" stroke-width="2.6"/>' +
    '<path d="M110 92 C104 150 108 210 116 262 M210 92 C216 150 214 208 204 262" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.13"/>' +
    // aortic knob bulge
    '<path d="M112 118 C96 116 86 130 92 146 C104 152 118 146 120 132 C120 124 118 120 112 118 Z" fill="rgba(224,82,79,.2)" stroke="' + A + '" stroke-width="2.2"/>' +
    // width arrows
    '<path d="M108 108 L84 108 M84 108 L92 102 M84 108 L92 114 M212 108 L236 108 M236 108 L228 102 M236 108 L228 114" stroke="' + A + '" stroke-width="1.8" fill="none"/>' +
    // heart apex
    '<path d="M160 210 C150 236 158 262 182 268 C200 264 208 244 200 224 Z" fill="rgba(214,224,238,.06)" stroke="rgba(205,216,229,.3)" stroke-width="1.2"/>' +
    // diaphragm
    '<path d="M40 288 C80 296 120 292 148 278 M172 278 C202 292 246 296 282 286" stroke="rgba(210,220,232,.5)" stroke-width="2.2" fill="none"/>' +
    '</g>' + lbl(160, 320, 'Wide mediastinum', A, 'middle'));

  // s3-0275 sigmoid volvulus: coffee-bean inverted-U loop from pelvis
  var s3_0275 = svg(320, 340, film(320, 340) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // abdominal outline + normal bowel gas
    '<path d="M40 60 C40 44 280 44 280 60 C284 160 276 270 260 300 C160 316 100 314 58 300 C44 260 36 150 40 60 Z" fill="none" stroke="rgba(205,216,229,.18)" stroke-width="1.2"/>' +
    '<g stroke="rgba(205,216,229,.22)" stroke-width="1.3" fill="none"><path d="M60 100 C90 92 120 96 140 108"/><path d="M200 108 C224 96 252 96 268 106"/></g>' +
    // massively dilated inverted-U loop (accent)
    '<path d="M92 300 C74 220 78 140 110 96 C132 66 190 66 214 96 C246 140 250 220 232 300" fill="rgba(224,82,79,.12)" stroke="' + A + '" stroke-width="3"/>' +
    '<path d="M120 300 C106 224 108 156 132 118 C148 92 176 92 194 118 C218 156 220 224 206 300" fill="rgba(224,82,79,.1)" stroke="' + A + '" stroke-width="2.6"/>' +
    // central cleft (bean seam) - apposed walls pointing up-left
    '<path d="M162 300 C160 240 160 174 162 116" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M162 116 C150 106 142 96 138 84" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M92 300 C74 220 78 140 110 96 C132 66 190 66 214 96 C246 140 250 220 232 300" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.13"/>' +
    '</g>' + lbl(160, 320, 'Coffee-bean loop', A, 'middle'));

  // s3-0324 epidural hematoma: head CT, biconvex lens hyperdense collection
  var s3_0324 = svg(320, 320, film(320, 320) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // skull
    '<ellipse cx="160" cy="160" rx="128" ry="140" fill="none" stroke="rgba(214,224,238,.5)" stroke-width="3"/>' +
    '<ellipse cx="160" cy="160" rx="118" ry="130" fill="rgba(30,40,52,.4)" stroke="rgba(205,216,229,.3)" stroke-width="1.2"/>' +
    // brain sulci + falx (midline)
    '<path d="M160 40 C158 120 158 200 160 280" stroke="rgba(205,216,229,.3)" stroke-width="1.4"/>' +
    '<g stroke="rgba(205,216,229,.22)" stroke-width="1.2" fill="none"><path d="M110 90 C118 110 116 130 106 148"/><path d="M96 150 C112 164 112 186 98 202"/><path d="M120 230 C132 220 148 220 160 230"/></g>' +
    // lateral ventricles compressed / midline shift to left
    '<path d="M150 128 C140 150 140 178 150 200 C158 196 162 176 162 160 C162 146 158 134 150 128 Z" fill="rgba(20,28,38,.55)" stroke="rgba(205,216,229,.3)" stroke-width="1.1"/>' +
    // biconvex epidural hematoma (accent) - right side lens shape
    '<path d="M232 96 C258 128 258 196 232 228 C214 214 206 186 206 162 C206 138 214 110 232 96 Z" fill="rgba(224,82,79,.24)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M232 96 C258 128 258 196 232 228 C214 214 206 186 206 162 C206 138 214 110 232 96 Z" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.14"/>' +
    // suture line (does not cross)
    '<line x1="232" y1="94" x2="248" y2="82" stroke="rgba(150,200,235,.6)" stroke-width="2" stroke-dasharray="4 3"/>' +
    '<line x1="232" y1="230" x2="248" y2="242" stroke="rgba(150,200,235,.6)" stroke-width="2" stroke-dasharray="4 3"/>' +
    '</g>' + lbl(220, 288, 'Biconvex', A, 'middle'));

  // s3-0333 ankylosing spondylitis: pelvic radiograph, bilateral sacroiliitis fusion
  var s3_0333 = svg(340, 300, film(340, 300) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // sacrum (central)
    '<path d="M150 60 C146 110 148 160 160 200 C172 160 174 110 170 60 C164 54 156 54 150 60 Z" fill="rgba(214,224,238,.07)" stroke="rgba(205,216,229,.4)" stroke-width="1.4"/>' +
    // iliac wings
    '<path d="M146 66 C104 58 58 78 40 122 C30 156 44 190 82 200 C108 204 130 190 138 162 C144 130 146 98 146 66 Z" fill="rgba(214,224,238,.07)" stroke="' + W + '" stroke-width="1.7"/>' +
    '<path d="M174 66 C216 58 262 78 280 122 C290 156 276 190 238 200 C212 204 190 190 182 162 C176 130 174 98 174 66 Z" fill="rgba(214,224,238,.07)" stroke="' + W + '" stroke-width="1.7"/>' +
    // pubic rami / symphysis
    '<path d="M150 206 C158 220 162 232 162 240 C162 232 166 220 174 206" stroke="rgba(205,216,229,.35)" stroke-width="1.4" fill="none"/>' +
    // acetabula
    '<circle cx="90" cy="214" r="14" fill="#06090d" stroke="rgba(205,216,229,.35)" stroke-width="1.2"/>' +
    '<circle cx="230" cy="214" r="14" fill="#06090d" stroke="rgba(205,216,229,.35)" stroke-width="1.2"/>' +
    // SI joints (accent) - erosion + sclerosis + fusion
    '<path d="M146 78 C138 112 140 150 150 188" stroke="' + A + '" stroke-width="3.2"/>' +
    '<path d="M170 78 C178 112 176 150 166 188" stroke="' + A + '" stroke-width="3.2"/>' +
    '<path d="M146 78 C138 112 140 150 150 188 M170 78 C178 112 176 150 166 188" stroke="' + A + '" stroke-width="9" stroke-opacity="0.14"/>' +
    // sclerosis stippling
    '<g fill="' + A + '" fill-opacity="0.5"><circle cx="140" cy="110" r="2"/><circle cx="176" cy="120" r="2"/><circle cx="142" cy="150" r="2"/><circle cx="174" cy="158" r="2"/></g>' +
    '</g>' + lbl(170, 280, 'Fused SI joints', A, 'middle'));

  // s3-0381 TB: CXR right-upper-lobe cavitary infiltrate + nodules
  var s3_0381 = svg(320, 340, film(320, 340) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M160 46 C162 66 172 82 188 92" stroke="rgba(205,216,229,.4)" stroke-width="2.2" fill="none"/>' +
    // rib cage / lungs
    '<g stroke="rgba(205,216,229,.22)" stroke-width="1.4" fill="none">' +
    '<path d="M96 96 C64 108 44 134 36 168"/><path d="M100 132 C66 144 44 172 38 206"/><path d="M104 168 C72 180 50 208 46 242"/>' +
    '<path d="M224 96 C256 108 276 134 284 168"/><path d="M220 132 C254 144 276 172 282 206"/><path d="M216 168 C248 180 270 208 274 242"/></g>' +
    // heart
    '<path d="M158 168 C146 208 148 254 172 280 C196 276 212 250 202 224 C196 200 178 176 158 168 Z" fill="rgba(214,224,238,.06)" stroke="rgba(205,216,229,.3)" stroke-width="1.2"/>' +
    // RUL cavity (accent) - ring lucency
    '<circle cx="98" cy="128" r="30" fill="rgba(224,82,79,.14)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<circle cx="98" cy="128" r="16" fill="#06090d" stroke="' + A + '" stroke-width="2.2"/>' +
    '<circle cx="98" cy="128" r="30" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.14"/>' +
    // surrounding satellite nodules
    '<g fill="rgba(224,82,79,.3)" stroke="' + A + '" stroke-width="1.4"><circle cx="72" cy="168" r="5"/><circle cx="120" cy="170" r="4"/><circle cx="140" cy="140" r="5"/><circle cx="66" cy="104" r="4"/></g>' +
    // diaphragm
    '<path d="M44 296 C82 302 120 300 148 288 M172 288 C202 300 246 302 282 292" stroke="rgba(210,220,232,.5)" stroke-width="2.2" fill="none"/>' +
    '</g>' + lbl(98, 82, 'Cavity', A, 'middle'));

  // s3-0406 Hirschsprung: contrast enema, narrow rectosigmoid + transition zone
  var s3_0406 = svg(300, 340, film(300, 340) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // dilated proximal colon (contrast filled)
    '<path d="M70 60 C60 96 62 132 84 158 C120 176 176 176 210 152 C236 130 240 92 226 62 C186 44 110 44 70 60 Z" fill="rgba(150,200,235,.14)" stroke="' + W + '" stroke-width="2"/>' +
    // proximal haustra
    '<g stroke="rgba(205,216,229,.4)" stroke-width="1.3" fill="none"><path d="M96 66 C96 92 96 120 100 148"/><path d="M140 62 C140 92 140 122 140 160"/><path d="M186 66 C186 92 186 120 182 150"/></g>' +
    // transition zone (accent) - funnel narrowing
    '<path d="M120 160 C130 190 138 208 142 224 C158 224 168 224 178 224 C182 208 190 190 200 160 Z" fill="rgba(224,82,79,.18)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M120 160 C130 190 138 208 142 224 M200 160 C190 190 182 208 178 224" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.14"/>' +
    // narrow distal rectosigmoid
    '<path d="M142 224 C142 264 140 296 138 320 L182 320 C180 296 178 264 178 224 Z" fill="rgba(150,200,235,.12)" stroke="' + A + '" stroke-width="2.4"/>' +
    // width arrows at transition
    '<path d="M112 192 L96 192 M96 192 L104 187 M96 192 L104 197 M208 192 L224 192 M224 192 L216 187 M224 192 L216 197" stroke="' + A + '" stroke-width="1.6" fill="none"/>' +
    '</g>' + lbl(160, 210, 'Transition', A, 'middle') + lbl(160, 100, 'Dilated', LBL, 'middle'));

  // s3-0375 achalasia: barium esophagram, dilated body + bird-beak taper
  var s3_0375 = svg(260, 340, film(260, 340) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // dilated esophageal body (barium column)
    '<path d="M96 40 C72 44 62 70 66 108 C68 150 74 196 88 232 C96 250 108 254 118 250 L136 250 C148 252 160 246 168 228 C182 194 188 148 190 108 C194 70 184 44 160 40 C136 34 118 34 96 40 Z" fill="rgba(150,200,235,.16)" stroke="' + W + '" stroke-width="2"/>' +
    // air-fluid / mottled retained content
    '<g stroke="rgba(205,216,229,.3)" stroke-width="1.1" fill="none"><path d="M80 120 C110 126 150 126 178 120"/><path d="M78 160 C110 166 150 166 180 160"/></g>' +
    // bird-beak taper to GEJ (accent)
    '<path d="M118 250 C122 274 126 292 128 304 C130 292 134 274 138 250 Z" fill="rgba(224,82,79,.22)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M118 250 C122 274 126 292 128 304 M138 250 C134 274 130 292 128 304" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.15"/>' +
    // thin distal stub
    '<path d="M126 304 C126 314 128 322 128 328 L130 328 C130 322 130 314 130 304 Z" fill="rgba(150,200,235,.2)" stroke="' + A + '" stroke-width="2"/>' +
    '</g>' + lbl(128, 300, 'Bird-beak', A, 'middle') + lbl(128, 92, 'Dilated', LBL, 'middle'));

  // s3-0405 Zenker: barium esophagram, posterior outpouching above UES
  var s3_0405 = svg(260, 340, film(260, 340) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // pharynx / cervical esophagus (barium)
    '<path d="M112 40 C100 44 96 66 98 96 C100 130 104 170 108 210 C110 240 112 280 114 316 L142 316 C144 280 146 240 148 210 C152 170 156 130 158 96 C160 66 156 44 144 40 C132 34 124 34 112 40 Z" fill="rgba(150,200,235,.16)" stroke="' + W + '" stroke-width="2"/>' +
    // cricopharyngeus bar indentation (UES)
    '<path d="M100 150 C118 156 138 156 156 150" stroke="rgba(205,216,229,.5)" stroke-width="2" fill="none"/>' +
    // posterior outpouching (accent) - projects left/posterior
    '<path d="M100 128 C74 130 56 146 60 168 C66 188 92 192 110 182 C118 174 116 158 112 144 C110 136 106 130 100 128 Z" fill="rgba(224,82,79,.22)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M100 128 C74 130 56 146 60 168 C66 188 92 192 110 182 C118 174 116 158 112 144 C110 136 106 130 100 128 Z" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.14"/>' +
    // neck / air-fluid level in pouch
    '<path d="M66 154 C82 158 98 158 108 154" stroke="' + A + '" stroke-width="1.6" fill="none"/>' +
    '</g>' + lbl(80, 214, 'Diverticulum', A, 'middle'));

  // ======================================================================
  //  MRI
  // ======================================================================

  // s3-0314 MS: axial FLAIR brain, periventricular Dawson-finger lesions
  var s3_0314 = svg(320, 320, film(320, 320) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<ellipse cx="160" cy="160" rx="126" ry="138" fill="rgba(30,40,52,.42)" stroke="rgba(214,224,238,.5)" stroke-width="2.4"/>' +
    '<ellipse cx="160" cy="160" rx="112" ry="124" fill="none" stroke="rgba(205,216,229,.24)" stroke-width="1.1"/>' +
    // falx
    '<path d="M160 44 C158 120 158 200 160 276" stroke="rgba(205,216,229,.3)" stroke-width="1.3"/>' +
    // lateral ventricles (butterfly)
    '<path d="M150 116 C126 124 116 150 120 180 C124 200 142 206 152 194 C156 168 156 140 150 116 Z" fill="rgba(20,28,38,.6)" stroke="rgba(205,216,229,.4)" stroke-width="1.3"/>' +
    '<path d="M170 116 C194 124 204 150 200 180 C196 200 178 206 168 194 C164 168 164 140 170 116 Z" fill="rgba(20,28,38,.6)" stroke="rgba(205,216,229,.4)" stroke-width="1.3"/>' +
    // Dawson fingers - ovoid lesions perpendicular to ventricles (accent)
    '<g fill="rgba(224,82,79,.26)" stroke="' + A + '" stroke-width="2.2">' +
    '<ellipse cx="132" cy="102" rx="6" ry="13" transform="rotate(-38 132 102)"/>' +
    '<ellipse cx="112" cy="140" rx="6" ry="14" transform="rotate(-70 112 140)"/>' +
    '<ellipse cx="110" cy="188" rx="6" ry="13" transform="rotate(-108 110 188)"/>' +
    '<ellipse cx="188" cy="102" rx="6" ry="13" transform="rotate(38 188 102)"/>' +
    '<ellipse cx="208" cy="140" rx="6" ry="14" transform="rotate(70 208 140)"/>' +
    '<ellipse cx="210" cy="188" rx="6" ry="13" transform="rotate(108 210 188)"/></g>' +
    '<ellipse cx="132" cy="102" rx="6" ry="13" transform="rotate(-38 132 102)" fill="none" stroke="' + A + '" stroke-width="7" stroke-opacity="0.13"/>' +
    '</g>' + lbl(160, 300, 'Dawson fingers', A, 'middle'));

  // s3-0361 PSC: MRCP, beaded intra/extrahepatic ducts
  var s3_0361 = svg(320, 340, film(320, 340) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // liver silhouette (faint)
    '<path d="M40 70 C120 54 210 58 250 82 C258 130 236 172 176 184 C112 194 56 172 42 128 C36 106 36 86 40 70 Z" fill="rgba(150,190,220,.04)" stroke="rgba(205,216,229,.24)" stroke-width="1.2"/>' +
    // biliary tree main trunk (accent - beaded)
    '<path d="M150 176 C150 210 152 250 156 288 C158 300 164 306 170 300" stroke="' + A + '" stroke-width="4" fill="none"/>' +
    // intrahepatic radicles beaded
    '<g stroke="' + A + '" stroke-width="3" fill="none">' +
    '<path d="M150 176 C132 156 110 138 84 122"/>' +
    '<path d="M150 176 C168 154 190 136 216 122"/>' +
    '<path d="M132 156 C120 140 104 128 88 120"/>' +
    '<path d="M168 154 C182 138 200 128 214 118"/></g>' +
    // beads (dilated segments) as nodes
    '<g fill="rgba(224,82,79,.3)" stroke="' + A + '" stroke-width="1.6">' +
    '<circle cx="120" cy="150" r="6"/><circle cx="96" cy="130" r="6"/><circle cx="180" cy="148" r="6"/><circle cx="206" cy="128" r="6"/>' +
    '<circle cx="151" cy="210" r="6"/><circle cx="154" cy="250" r="6"/><circle cx="158" cy="286" r="6"/>' +
    '<circle cx="138" cy="162" r="5"/><circle cx="200" cy="138" r="5"/></g>' +
    // strictures (pinch points) marks
    '<g stroke="' + A + '" stroke-width="1.6"><line x1="108" y1="140" x2="112" y2="140"/><line x1="192" y1="138" x2="196" y2="138"/><line x1="152" y1="230" x2="156" y2="230"/></g>' +
    // gallbladder faint
    '<path d="M176 200 C192 204 202 220 196 238 C184 248 168 242 166 226 C166 212 168 202 176 200 Z" fill="rgba(150,200,235,.1)" stroke="rgba(205,216,229,.35)" stroke-width="1.3"/>' +
    '</g>' + lbl(160, 322, 'Beaded ducts', A, 'middle'));

  // ======================================================================
  //  CT
  // ======================================================================

  // s3-0282 solitary pulmonary nodule: axial chest CT, single smooth 6mm nodule RLL
  var s3_0282 = svg(340, 300, film(340, 300) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // chest wall ellipse
    '<ellipse cx="170" cy="150" rx="150" ry="118" fill="rgba(30,40,52,.32)" stroke="rgba(214,224,238,.42)" stroke-width="2"/>' +
    // vertebra posterior
    '<path d="M156 244 C156 232 184 232 184 244 C186 260 176 262 170 262 C158 262 154 258 156 244 Z" fill="rgba(214,224,238,.1)" stroke="rgba(205,216,229,.3)" stroke-width="1.2"/>' +
    // mediastinum / heart
    '<path d="M138 118 C120 138 118 176 138 202 C168 216 210 210 222 180 C230 152 216 122 190 110 C170 102 150 106 138 118 Z" fill="rgba(214,224,238,.08)" stroke="rgba(205,216,229,.3)" stroke-width="1.3"/>' +
    // lung fields (dark)
    '<path d="M60 96 C44 130 46 190 68 224 C96 236 120 224 126 190 C130 150 120 116 96 98 C84 92 70 90 60 96 Z" fill="#06090d" stroke="rgba(205,216,229,.28)" stroke-width="1.3"/>' +
    '<path d="M280 96 C296 130 294 190 272 224 C244 236 220 224 214 190 C210 150 220 116 244 98 C256 92 270 90 280 96 Z" fill="#06090d" stroke="rgba(205,216,229,.28)" stroke-width="1.3"/>' +
    // vessel markings
    '<g stroke="rgba(205,216,229,.22)" stroke-width="1" fill="none"><path d="M90 150 C104 158 116 172 120 190"/><path d="M250 150 C236 158 224 172 220 190"/></g>' +
    // solitary nodule (accent) - smooth round in right lower lobe
    '<circle cx="96" cy="196" r="11" fill="rgba(224,82,79,.24)" stroke="' + A + '" stroke-width="2.6"/>' +
    '<circle cx="96" cy="196" r="17" fill="none" stroke="' + A + '" stroke-width="8" stroke-opacity="0.14"/>' +
    '</g>' + lbl(96, 240, 'Nodule', A, 'middle'));

  // s3-0332 IPF: HRCT, basal subpleural reticulation + honeycombing
  var s3_0332 = svg(340, 300, film(340, 300) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<ellipse cx="170" cy="150" rx="150" ry="118" fill="rgba(30,40,52,.32)" stroke="rgba(214,224,238,.42)" stroke-width="2"/>' +
    '<path d="M156 244 C156 232 184 232 184 244 C186 260 176 262 170 262 C158 262 154 258 156 244 Z" fill="rgba(214,224,238,.1)" stroke="rgba(205,216,229,.3)" stroke-width="1.2"/>' +
    '<path d="M138 118 C120 138 118 176 138 202 C168 216 210 210 222 180 C230 152 216 122 190 110 C170 102 150 106 138 118 Z" fill="rgba(214,224,238,.08)" stroke="rgba(205,216,229,.3)" stroke-width="1.3"/>' +
    // lungs
    '<path d="M60 96 C44 130 46 190 68 224 C96 236 120 224 126 190 C130 150 120 116 96 98 C84 92 70 90 60 96 Z" fill="#06090d" stroke="rgba(205,216,229,.28)" stroke-width="1.3"/>' +
    '<path d="M280 96 C296 130 294 190 272 224 C244 236 220 224 214 190 C210 150 220 116 244 98 C256 92 270 90 280 96 Z" fill="#06090d" stroke="rgba(205,216,229,.28)" stroke-width="1.3"/>' +
    // subpleural reticulation (accent) - peripheral basal net
    '<path d="M62 200 C88 232 116 228 122 194 M72 214 C92 226 108 222 116 204" stroke="' + A + '" stroke-width="2" fill="none" stroke-opacity="0.7"/>' +
    '<path d="M278 200 C252 232 224 228 218 194 M268 214 C248 226 232 222 224 204" stroke="' + A + '" stroke-width="2" fill="none" stroke-opacity="0.7"/>' +
    // honeycomb clusters (accent)
    '<g fill="rgba(224,82,79,.16)" stroke="' + A + '" stroke-width="1.6">' +
    '<circle cx="82" cy="206" r="5"/><circle cx="94" cy="214" r="5"/><circle cx="106" cy="208" r="5"/><circle cx="90" cy="222" r="5"/><circle cx="104" cy="220" r="4"/>' +
    '<circle cx="258" cy="206" r="5"/><circle cx="246" cy="214" r="5"/><circle cx="234" cy="208" r="5"/><circle cx="250" cy="222" r="5"/><circle cx="236" cy="220" r="4"/></g>' +
    '</g>' + lbl(170, 288, 'Honeycombing', A, 'middle'));

  // s3-0389 Boerhaave: CT chest, pneumomediastinum + left effusion
  var s3_0389 = svg(340, 300, film(340, 300) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<ellipse cx="170" cy="150" rx="150" ry="118" fill="rgba(30,40,52,.32)" stroke="rgba(214,224,238,.42)" stroke-width="2"/>' +
    '<path d="M156 244 C156 232 184 232 184 244 C186 260 176 262 170 262 C158 262 154 258 156 244 Z" fill="rgba(214,224,238,.1)" stroke="rgba(205,216,229,.3)" stroke-width="1.2"/>' +
    // lungs
    '<path d="M60 96 C44 130 46 190 68 224 C96 236 120 224 126 190 C130 150 120 116 96 98 C84 92 70 90 60 96 Z" fill="#06090d" stroke="rgba(205,216,229,.28)" stroke-width="1.3"/>' +
    '<path d="M280 96 C296 130 294 190 272 224 C244 236 220 224 214 190 C210 150 220 116 244 98 C256 92 270 90 280 96 Z" fill="#06090d" stroke="rgba(205,216,229,.28)" stroke-width="1.3"/>' +
    // mediastinum
    '<path d="M140 116 C124 140 124 180 142 206 C170 218 208 212 220 182 C228 154 214 124 188 112 C168 104 152 106 140 116 Z" fill="rgba(214,224,238,.08)" stroke="rgba(205,216,229,.32)" stroke-width="1.3"/>' +
    // esophagus (small circle center) with tear
    '<circle cx="176" cy="176" r="9" fill="#06090d" stroke="rgba(205,216,229,.4)" stroke-width="1.2"/>' +
    // left pleural effusion (dependent, faint fluid) left lung base
    '<path d="M64 206 C88 232 116 228 124 200 C110 214 84 216 64 206 Z" fill="rgba(150,200,235,.16)" stroke="rgba(150,200,235,.4)" stroke-width="1.4"/>' +
    // pneumomediastinum (accent) - gas outlining mediastinal structures
    '<g fill="rgba(224,82,79,.16)" stroke="' + A + '" stroke-width="2.4"><path d="M132 132 C124 156 126 190 140 210 M226 138 C232 160 228 194 214 212"/></g>' +
    '<g fill="rgba(224,82,79,.28)" stroke="' + A + '" stroke-width="1.6"><circle cx="150" cy="150" r="4"/><circle cx="200" cy="150" r="4"/><circle cx="160" cy="200" r="4"/><circle cx="196" cy="196" r="4"/><circle cx="176" cy="140" r="3"/></g>' +
    '</g>' + lbl(176, 108, 'Pneumomediastinum', A, 'middle') + lbl(80, 246, 'Effusion', LBL, 'middle'));

  // s3-0410 infected pancreatic necrosis: CT abdomen, walled-off collection with gas
  var s3_0410 = svg(340, 300, film(340, 300) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // abdomen ellipse
    '<ellipse cx="170" cy="150" rx="152" ry="120" fill="rgba(30,40,52,.3)" stroke="rgba(214,224,238,.42)" stroke-width="2"/>' +
    // vertebra + aorta/IVC
    '<path d="M156 236 C156 224 184 224 184 236 C186 252 176 254 170 254 C158 254 154 250 156 236 Z" fill="rgba(214,224,238,.1)" stroke="rgba(205,216,229,.3)" stroke-width="1.2"/>' +
    '<circle cx="152" cy="214" r="8" fill="rgba(20,28,38,.5)" stroke="rgba(205,216,229,.4)" stroke-width="1.1"/>' +
    '<circle cx="176" cy="216" r="6" fill="rgba(20,28,38,.5)" stroke="rgba(205,216,229,.4)" stroke-width="1.1"/>' +
    // liver + spleen faint
    '<path d="M40 92 C90 82 130 88 148 108 C150 130 132 146 100 148 C66 150 44 132 38 110 Z" fill="rgba(150,190,220,.06)" stroke="rgba(205,216,229,.3)" stroke-width="1.3"/>' +
    '<path d="M300 100 C304 128 292 152 264 156 C246 150 244 128 254 110 C270 96 290 94 300 100 Z" fill="rgba(150,190,220,.06)" stroke="rgba(205,216,229,.3)" stroke-width="1.3"/>' +
    // stomach anterior
    '<path d="M120 96 C160 86 210 88 236 100 C224 116 190 122 158 118 C138 114 126 106 120 96 Z" fill="rgba(20,28,38,.4)" stroke="rgba(205,216,229,.28)" stroke-width="1.2"/>' +
    // walled-off necrotic collection (accent) - central retroperitoneal
    '<path d="M118 138 C100 156 100 194 122 214 C154 232 208 230 236 210 C258 190 256 152 232 134 C202 116 146 118 118 138 Z" fill="rgba(224,82,79,.2)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M118 138 C100 156 100 194 122 214 C154 232 208 230 236 210 C258 190 256 152 232 134 C202 116 146 118 118 138 Z" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.13"/>' +
    // gas bubbles inside (dark rounded lucencies)
    '<g fill="#06090d" stroke="' + A + '" stroke-width="1.6"><circle cx="150" cy="164" r="8"/><circle cx="188" cy="158" r="10"/><circle cx="212" cy="184" r="7"/><circle cx="164" cy="196" r="6"/><circle cx="200" cy="204" r="5"/></g>' +
    '</g>' + lbl(176, 250, 'Gas in necrosis', A, 'middle'));

  // ======================================================================
  //  Ultrasound / echo
  // ======================================================================

  // s3-0365 Wilms: abdominal US, large solid renal mass
  var s3_0365 = svg(320, 320, film(320, 320) + usWedge(160, 34, 128, 292) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M92 130 A72 72 0 0 0 228 130" stroke="rgba(205,216,229,.1)" stroke-width="1" fill="none"/>' +
    '<path d="M62 214 A130 130 0 0 0 258 214" stroke="rgba(205,216,229,.1)" stroke-width="1" fill="none"/>' +
    // kidney outline (bean)
    '<path d="M108 120 C88 138 86 200 108 240 C136 270 196 272 226 244 C252 218 250 156 226 126 C196 96 132 100 108 120 Z" fill="rgba(60,78,96,.16)" stroke="rgba(238,244,250,.68)" stroke-width="1.9"/>' +
    // residual renal cortex crescent (upper pole)
    '<path d="M112 126 C98 144 96 178 108 204 C104 176 106 146 120 128 C118 126 114 124 112 126 Z" fill="rgba(150,190,220,.16)" stroke="rgba(205,216,229,.5)" stroke-width="1.4"/>' +
    // large solid heterogeneous mass (accent)
    '<path d="M140 132 C120 150 118 196 138 224 C164 248 210 248 234 220 C256 194 252 150 228 128 C202 106 162 112 140 132 Z" fill="rgba(224,82,79,.2)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M140 132 C120 150 118 196 138 224 C164 248 210 248 234 220 C256 194 252 150 228 128 C202 106 162 112 140 132 Z" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.13"/>' +
    // internal echoes
    '<g stroke="' + A + '" stroke-width="1.2" stroke-opacity="0.55" fill="none"><path d="M156 156 C176 162 200 162 216 156"/><path d="M150 186 C176 192 204 192 224 184"/><path d="M158 210 C180 214 202 214 218 208"/></g>' +
    '</g>' + lbl(190, 200, 'Renal mass', A, 'middle') + lbl(96, 168, 'Cortex', LBL, 'middle'));

  // s3-0404 placenta accreta: OB US, placental lacunae + loss of clear zone + bladder
  var s3_0404 = svg(320, 320, film(320, 320) + usWedge(160, 34, 128, 292) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M92 120 A72 72 0 0 0 228 120" stroke="rgba(205,216,229,.1)" stroke-width="1" fill="none"/>' +
    // myometrium (thinned) band
    '<path d="M70 210 C120 240 200 240 250 210 C252 224 250 236 244 244 C196 268 124 268 76 244 C70 236 68 224 70 210 Z" fill="rgba(60,78,96,.14)" stroke="rgba(205,216,229,.4)" stroke-width="1.5"/>' +
    // bladder (anechoic below) with irregular uterine-bladder interface (accent zone)
    '<path d="M100 250 C140 268 200 268 240 250 C238 288 190 300 160 300 C130 300 102 288 100 250 Z" fill="rgba(20,30,42,.5)" stroke="rgba(205,216,229,.35)" stroke-width="1.3"/>' +
    // placenta body
    '<path d="M74 108 C120 92 210 92 246 110 C250 150 236 190 210 208 C160 220 108 218 82 200 C66 184 66 140 74 108 Z" fill="rgba(150,180,205,.16)" stroke="rgba(238,244,250,.62)" stroke-width="1.8"/>' +
    // lacunae (accent) - irregular vascular lakes
    '<g fill="rgba(224,82,79,.24)" stroke="' + A + '" stroke-width="2.2">' +
    '<path d="M104 132 C94 140 96 158 110 162 C126 162 132 146 124 134 C118 128 110 128 104 132 Z"/>' +
    '<path d="M150 150 C138 156 138 176 154 182 C172 184 180 166 170 150 C164 144 156 146 150 150 Z"/>' +
    '<path d="M200 130 C190 138 192 156 206 160 C222 160 228 144 220 132 C214 126 206 126 200 130 Z"/>' +
    '<path d="M182 186 C172 192 174 206 188 208 C202 208 206 194 198 184 C192 180 186 182 182 186 Z"/></g>' +
    // loss of clear zone marker (accent) at interface
    '<path d="M84 204 C132 224 200 224 240 202" stroke="' + A + '" stroke-width="2.6" fill="none"/>' +
    '<path d="M84 204 C132 224 200 224 240 202" stroke="' + A + '" stroke-width="8" stroke-opacity="0.14" fill="none"/>' +
    '</g>' + lbl(160, 150, 'Lacunae', A, 'middle') + lbl(160, 280, 'Bladder', LBL, 'middle'));

  // s3-0394 uterine leiomyoma: TV US, enlarged uterus + intramural fibroids
  var s3_0394 = svg(320, 320, film(320, 320) + usWedge(160, 34, 128, 292) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M92 120 A72 72 0 0 0 228 120" stroke="rgba(205,216,229,.1)" stroke-width="1" fill="none"/>' +
    // enlarged uterus (pear, bulky)
    '<path d="M118 90 C86 108 78 168 100 218 C124 262 196 264 222 218 C244 172 236 110 202 90 C176 74 142 74 118 90 Z" fill="rgba(60,78,96,.16)" stroke="rgba(238,244,250,.66)" stroke-width="1.9"/>' +
    // endometrial stripe (bright line, distorted)
    '<path d="M160 108 C150 140 152 178 164 210" stroke="rgba(238,244,250,.8)" stroke-width="2.4" fill="none"/>' +
    // intramural fibroids (accent) - well-circumscribed hypoechoic
    '<circle cx="126" cy="150" r="22" fill="rgba(224,82,79,.2)" stroke="' + A + '" stroke-width="2.6"/>' +
    '<circle cx="200" cy="164" r="26" fill="rgba(224,82,79,.2)" stroke="' + A + '" stroke-width="2.6"/>' +
    '<circle cx="160" cy="212" r="18" fill="rgba(224,82,79,.2)" stroke="' + A + '" stroke-width="2.4"/>' +
    '<circle cx="200" cy="164" r="32" fill="none" stroke="' + A + '" stroke-width="8" stroke-opacity="0.13"/>' +
    // whorled internal echoes
    '<g stroke="' + A + '" stroke-width="1" stroke-opacity="0.5" fill="none"><circle cx="126" cy="150" r="12"/><circle cx="200" cy="164" r="15"/></g>' +
    '</g>' + lbl(160, 302, 'Leiomyomas', A, 'middle'));

  // s3-0411 cervical insufficiency: TV US, short cervix + funneling of internal os
  var s3_0411 = svg(340, 300, film(340, 300) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // amniotic fluid / lower uterus (anechoic above)
    '<path d="M40 40 C160 30 300 34 306 44 C308 90 300 130 280 150 C220 160 120 160 60 148 C44 128 38 82 40 40 Z" fill="rgba(20,30,42,.5)" stroke="rgba(205,216,229,.3)" stroke-width="1.3"/>' +
    // fetal part (faint arc)
    '<path d="M120 60 A54 54 0 0 1 228 60" stroke="rgba(205,216,229,.28)" stroke-width="2" fill="none"/>' +
    // cervical canal walls (short) - anterior + posterior lips
    '<path d="M120 150 C118 200 118 244 120 284 L150 284 C150 244 150 202 150 156 Z" fill="rgba(60,78,96,.16)" stroke="' + W + '" stroke-width="1.8"/>' +
    '<path d="M200 156 C200 202 200 244 200 284 L230 284 C232 244 232 200 230 150 Z" fill="rgba(60,78,96,.16)" stroke="' + W + '" stroke-width="1.8"/>' +
    // funneling of internal os (accent) - V/U wedge dipping into canal
    '<path d="M120 150 C140 178 158 190 175 194 C192 190 210 178 230 150 Z" fill="rgba(224,82,79,.2)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<path d="M120 150 C140 178 158 190 175 194 M230 150 C210 178 192 190 175 194" fill="none" stroke="' + A + '" stroke-width="9" stroke-opacity="0.14"/>' +
    // closed distal canal (accent line) + short-length caliper
    '<path d="M175 194 C174 224 174 254 175 280" stroke="' + A + '" stroke-width="2.4"/>' +
    '<line x1="256" y1="196" x2="256" y2="280" stroke="rgba(150,200,235,.6)" stroke-width="1.6" stroke-dasharray="4 3"/>' +
    '<line x1="250" y1="196" x2="262" y2="196" stroke="rgba(150,200,235,.6)" stroke-width="1.6"/>' +
    '<line x1="250" y1="280" x2="262" y2="280" stroke="rgba(150,200,235,.6)" stroke-width="1.6"/>' +
    '</g>' + lbl(175, 172, 'Funneling', A, 'middle') + lbl(276, 242, '18 mm', LBL, 'middle'));

  // s3-0276 aortic stenosis: TTE parasternal short-axis, calcified trileaflet valve
  var s3_0276 = svg(320, 320, film(320, 320) + usWedge(160, 34, 128, 292) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M92 120 A72 72 0 0 0 228 120" stroke="rgba(205,216,229,.1)" stroke-width="1" fill="none"/>' +
    // aortic root circle (short axis)
    '<circle cx="160" cy="180" r="78" fill="rgba(40,54,70,.2)" stroke="rgba(238,244,250,.6)" stroke-width="2"/>' +
    '<circle cx="160" cy="180" r="66" fill="none" stroke="rgba(205,216,229,.3)" stroke-width="1.1"/>' +
    // three cusps meeting centrally (Mercedes) - restricted opening
    '<g stroke="rgba(214,224,238,.7)" stroke-width="2" fill="none">' +
    '<path d="M160 180 L160 116"/><path d="M160 180 L214 210"/><path d="M160 180 L106 210"/></g>' +
    // heavy calcification on leaflets (accent) - bright echogenic
    '<g fill="rgba(224,82,79,.32)" stroke="' + A + '" stroke-width="2">' +
    '<path d="M150 130 C158 122 168 124 172 134 C168 146 156 148 150 142 Z"/>' +
    '<path d="M196 196 C206 194 214 202 210 212 C200 216 190 210 190 200 Z"/>' +
    '<path d="M124 196 C114 194 106 202 110 212 C120 216 130 210 130 200 Z"/></g>' +
    // central restricted orifice (tiny)
    '<circle cx="160" cy="180" r="8" fill="#06090d" stroke="' + A + '" stroke-width="2.2"/>' +
    '<circle cx="160" cy="180" r="80" fill="none" stroke="' + A + '" stroke-width="8" stroke-opacity="0.12"/>' +
    '</g>' + lbl(160, 296, 'Calcified valve', A, 'middle'));

  // ======================================================================
  //  Eye / fundus
  // ======================================================================

  // s3-0315 retinoblastoma: leukocoria, white pupillary reflex OD
  var s3_0315 = svg(340, 240, card(340, 240) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // nose bridge
    '<path d="M170 60 C166 100 166 140 170 176 C176 176 176 176 178 176" stroke="rgba(205,216,229,.22)" stroke-width="1.4" fill="none"/>' +
    // right eye (leukocoria) - patient's right = image left
    '<path d="M40 120 C70 92 118 92 148 120 C118 148 70 148 40 120 Z" fill="rgba(20,28,38,.5)" stroke="' + W + '" stroke-width="2"/>' +
    '<circle cx="94" cy="120" r="26" fill="rgba(120,150,175,.2)" stroke="rgba(205,216,229,.5)" stroke-width="1.6"/>' +
    // white pupillary reflex (leukocoria) - the finding
    '<circle cx="94" cy="120" r="13" fill="rgba(238,244,250,.92)" stroke="' + A + '" stroke-width="2.8"/>' +
    '<circle cx="94" cy="120" r="19" fill="none" stroke="' + A + '" stroke-width="8" stroke-opacity="0.16"/>' +
    // left eye (normal red reflex)
    '<path d="M192 120 C222 92 270 92 300 120 C270 148 222 148 192 120 Z" fill="rgba(20,28,38,.5)" stroke="' + W + '" stroke-width="2"/>' +
    '<circle cx="246" cy="120" r="26" fill="rgba(120,150,175,.2)" stroke="rgba(205,216,229,.5)" stroke-width="1.6"/>' +
    '<circle cx="246" cy="120" r="13" fill="rgba(60,30,30,.85)" stroke="rgba(205,216,229,.4)" stroke-width="1.4"/>' +
    '<circle cx="246" cy="120" r="6" fill="rgba(140,60,60,.6)"/>' +
    '</g>' + lbl(94, 172, 'Leukocoria', A, 'middle') + lbl(246, 172, 'Normal', LBL, 'middle'));

  // s3-0373 CRAO: fundus, pale retina + cherry-red macula + attenuated arteries
  var s3_0373 = svg(320, 320, card(320, 320) +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    // fundus globe (pale edematous retina)
    '<circle cx="160" cy="160" r="140" fill="rgba(180,150,120,.14)" stroke="rgba(205,216,229,.3)" stroke-width="2"/>' +
    '<circle cx="160" cy="160" r="140" fill="rgba(200,208,214,.06)"/>' +
    // optic disc (temporal)
    '<circle cx="240" cy="150" r="22" fill="rgba(230,224,200,.18)" stroke="rgba(214,224,238,.6)" stroke-width="1.6"/>' +
    // attenuated arteries (thin) + veins radiating from disc
    '<g stroke="rgba(200,120,110,.55)" stroke-width="1.6" fill="none"><path d="M224 142 C186 128 132 118 78 122"/><path d="M228 160 C188 168 128 186 84 210"/></g>' +
    '<g stroke="rgba(150,110,110,.5)" stroke-width="2.6" fill="none"><path d="M240 138 C204 116 150 96 96 92"/><path d="M242 168 C206 184 150 208 100 236"/></g>' +
    // "boxcar" segmentation marks on arteries (accent)
    '<g stroke="' + A + '" stroke-width="1.4"><line x1="150" y1="123" x2="150" y2="129"/><line x1="120" y1="126" x2="120" y2="132"/><line x1="150" y1="188" x2="150" y2="196"/></g>' +
    // cherry-red spot at macula (accent) - thin foveola over choroid
    '<circle cx="150" cy="182" r="20" fill="rgba(200,206,212,.14)"/>' +
    '<circle cx="150" cy="182" r="10" fill="rgba(224,82,79,.85)" stroke="' + A + '" stroke-width="1.6"/>' +
    '<circle cx="150" cy="182" r="20" fill="none" stroke="' + A + '" stroke-width="8" stroke-opacity="0.16"/>' +
    '</g>' + lbl(150, 226, 'Cherry-red spot', A, 'middle') + lbl(240, 190, 'Disc', LBL, 'middle'));

  // ---- registry: question id -> svg ----------------------------------------
  Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, {
    's3-0266': s3_0266,
    's3-0273': s3_0273,
    's3-0275': s3_0275,
    's3-0314': s3_0314,
    's3-0315': s3_0315,
    's3-0323': s3_0323,
    's3-0324': s3_0324,
    's3-0361': s3_0361,
    's3-0365': s3_0365,
    's3-0373': s3_0373,
    's3-0375': s3_0375,
    's3-0404': s3_0404,
    's3-0405': s3_0405,
    's3-0406': s3_0406,
    's3-0276': s3_0276,
    's3-0282': s3_0282,
    's3-0326': s3_0326,
    's3-0332': s3_0332,
    's3-0333': s3_0333,
    's3-0336': s3_0336,
    's3-0381': s3_0381,
    's3-0386': s3_0386,
    's3-0389': s3_0389,
    's3-0394': s3_0394,
    's3-0410': s3_0410,
    's3-0411': s3_0411
  });
})();
