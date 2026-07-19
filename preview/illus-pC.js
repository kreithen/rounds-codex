/*
 * Rounds Codex - USMLE Mode illustration pack C
 * Original, clearly-SCHEMATIC educational SVGs keyed by question id.
 * Diagrammatic teaching schematics - never photo-real, never real clinical images.
 * The app tags them "SCHEMATIC" and adds a caption, so no descriptive caption
 * text lives inside the SVG (only tiny <=2-word internal part labels where useful).
 * Colors use currentColor / low-opacity so they adapt to light and dark themes;
 * "#e0524f" (or a copper/tan illustrative hue) marks only the key finding.
 */
(function () {
  "use strict";
  var CC = "currentColor";

  // ---- shared chest-radiograph schematic ------------------------------------
  function cxr(feature) {
    var s = '<svg viewBox="0 0 300 240" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">';
    s += '<rect x="6" y="6" width="288" height="228" rx="12" stroke="' + CC + '" stroke-opacity="0.15"/>';
    // spine + trachea/mediastinum
    s += '<line x1="150" y1="24" x2="150" y2="196" stroke="' + CC + '" stroke-opacity="0.2" stroke-width="6"/>';
    s += '<line x1="150" y1="26" x2="150" y2="70" stroke="' + CC + '" stroke-opacity="0.3" stroke-width="1.5"/>';
    // posterior ribs, both sides
    s += '<g stroke="' + CC + '" stroke-opacity="0.28" fill="none">';
    for (var i = 0; i < 5; i++) {
      var y = 44 + i * 20;
      s += '<path d="M148 ' + y + ' q-52 6 -104 ' + (y + 42) + '"/>';
      s += '<path d="M152 ' + y + ' q52 6 104 ' + (y + 42) + '"/>';
    }
    s += '</g>';
    // diaphragm domes (right slightly higher)
    s += '<path d="M40 198 q54 -34 108 -8" stroke="' + CC + '" stroke-opacity="0.35"/>';
    s += '<path d="M152 192 q52 -30 104 2" stroke="' + CC + '" stroke-opacity="0.35"/>';
    return s + feature + '</svg>';
  }
  // normal cardiac silhouette (left heart border bulging to image-right)
  var heart = '<path d="M150 106 C198 108 202 156 188 176 C178 190 158 190 150 186 C142 190 126 182 128 164 C118 150 126 120 150 112 Z" fill="' + CC + '" fill-opacity="0.08" stroke="' + CC + '" stroke-width="1"/>';

  // s1-0063 Sarcoidosis: symmetric BILATERAL HILAR lymphadenopathy (lobulated)
  var sarcoid = heart +
    // right hilum - lobulated node mass
    '<path d="M134 114 q-18 -2 -24 12 q-9 9 -4 24 q5 15 21 15 q17 0 18 -17 q3 -20 -11 -34 z" fill="' + CC + '" fill-opacity="0.26" stroke="' + CC + '" stroke-width="1"/>' +
    '<circle cx="116" cy="126" r="8" fill="' + CC + '" fill-opacity="0.22"/>' +
    '<circle cx="126" cy="146" r="7" fill="' + CC + '" fill-opacity="0.22"/>' +
    // left hilum - mirror
    '<path d="M166 114 q18 -2 24 12 q9 9 4 24 q-5 15 -21 15 q-17 0 -18 -17 q-3 -20 11 -34 z" fill="' + CC + '" fill-opacity="0.26" stroke="' + CC + '" stroke-width="1"/>' +
    '<circle cx="184" cy="126" r="8" fill="' + CC + '" fill-opacity="0.22"/>' +
    '<circle cx="174" cy="146" r="7" fill="' + CC + '" fill-opacity="0.22"/>' +
    '<text x="150" y="90" text-anchor="middle" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.7">bilateral hila</text>';

  // s1-0113 ARDS: diffuse BILATERAL patchy alveolar opacities, normal heart
  var ards = (function () {
    var pts = [
      [58, 78, 12, 0.16], [92, 66, 10, 0.14], [72, 104, 15, 0.18], [46, 132, 11, 0.15],
      [96, 140, 13, 0.16], [70, 158, 10, 0.14], [110, 110, 9, 0.13], [50, 96, 8, 0.12],
      [200, 72, 11, 0.15], [232, 92, 13, 0.17], [214, 128, 15, 0.18], [248, 118, 10, 0.14],
      [206, 158, 12, 0.16], [236, 156, 9, 0.13], [190, 110, 9, 0.13], [252, 78, 8, 0.12]
    ], g = '<g fill="' + CC + '">';
    pts.forEach(function (p) { g += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill-opacity="' + p[3] + '"/>'; });
    g += '</g>';
    return heart + g +
      '<text x="150" y="222" text-anchor="middle" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.6">bilateral infiltrates</text>';
  })();

  // s1-0137 Coarctation: inferior rib NOTCHING + figure-3 aortic contour
  var coarct = (function () {
    var f = heart;
    // notches on inferior margins of several posterior ribs (small nicks)
    f += '<g stroke="' + CC + '" stroke-width="1.4" fill="none">';
    var notches = [[74, 96], [66, 118], [92, 118], [58, 140], [226, 96], [234, 118], [208, 118], [242, 140]];
    notches.forEach(function (n) { f += '<path d="M' + (n[0] - 6) + ' ' + n[1] + ' q6 -8 12 0"/>'; });
    f += '</g>';
    // figure-3 aortic knob contour at upper-left mediastinum
    f += '<path d="M150 52 q22 2 21 17 q-1 11 -15 13 q14 2 15 17 q1 15 -21 17" stroke="' + CC + '" stroke-width="1.8" fill="none"/>';
    f += '<text x="176" y="82" font-size="13" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.75">3</text>';
    f += '<text x="150" y="222" text-anchor="middle" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.6">rib notching</text>';
    return f;
  })();

  // s1-0135 Osteosarcoma: distal femur metaphysis, sunburst + Codman triangle
  var osteosarcoma = (function () {
    var s = '<svg viewBox="0 0 240 260" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">';
    // femur: shaft narrowing above, flaring to distal metaphysis/condyles below
    s += '<path d="M100 20 L100 150 Q96 174 80 192 Q70 204 70 230 L170 230 Q170 204 160 192 Q144 174 140 150 L140 20 Z" fill="' + CC + '" fill-opacity="0.05" stroke="' + CC + '" stroke-width="1.5"/>';
    s += '<path d="M96 230 Q120 216 144 230" stroke="' + CC + '" stroke-opacity="0.4"/>'; // articular hint
    s += '<line x1="120" y1="26" x2="120" y2="150" stroke="' + CC + '" stroke-opacity="0.12"/>'; // medullary canal
    // destructive moth-eaten lesion in metaphysis, breaking lateral cortex
    s += '<path d="M132 128 q30 -6 34 20 q6 24 -16 32 q-24 6 -30 -16 q-6 -24 12 -36 z" fill="' + CC + '" fill-opacity="0.13" stroke="' + CC + '" stroke-width="1" stroke-dasharray="3 3"/>';
    s += '<g fill="' + CC + '" fill-opacity="0.25"><circle cx="140" cy="148" r="3"/><circle cx="150" cy="158" r="2.5"/><circle cx="134" cy="164" r="2"/><circle cx="152" cy="140" r="2"/></g>';
    // sunburst - spiculated periosteal reaction radiating from lateral cortex
    s += '<g stroke="' + CC + '" stroke-width="1">';
    var ox = 150, oy = 150, spikes = [[210, 108], [214, 130], [216, 152], [214, 176], [206, 196], [190, 96], [176, 210]];
    spikes.forEach(function (p) { s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + p[0] + '" y2="' + p[1] + '"/>'; });
    s += '</g>';
    // Codman triangle - periosteum lifted off cortex at lesion margin
    s += '<path d="M138 126 L160 100 L140 104 Z" fill="' + CC + '" fill-opacity="0.16" stroke="' + CC + '" stroke-width="1.3"/>';
    s += '<text x="196" y="150" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.75">sunburst</text>';
    s += '<text x="150" y="92" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.75">Codman</text>';
    return s + '</svg>';
  })();

  // s1-0085 Psoriasis: extensor elbow with sharply-demarcated plaques + silvery scale
  var psoriasis = (function () {
    var s = '<svg viewBox="0 0 300 200" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">';
    // bent arm (upper arm + forearm meeting at extensor elbow)
    s += '<path d="M24 78 L118 62 Q150 58 160 92 L70 112 Q32 110 24 90 Z" fill="' + CC + '" fill-opacity="0.05" stroke="' + CC + '" stroke-width="1.5"/>';
    s += '<path d="M150 92 Q168 58 200 26 Q216 10 240 22 Q224 60 178 108 Q160 118 150 100 Z" fill="' + CC + '" fill-opacity="0.05" stroke="' + CC + '" stroke-width="1.5"/>';
    s += '<path d="M138 88 Q152 116 176 104" stroke="' + CC + '" stroke-opacity="0.35"/>'; // olecranon fold
    // sharply-demarcated erythematous plaques with thick silvery scale
    function plaque(cx, cy, rx, ry, rot) {
      var g = '<g transform="translate(' + cx + ' ' + cy + ') rotate(' + rot + ')">';
      g += '<ellipse cx="0" cy="0" rx="' + rx + '" ry="' + ry + '" fill="#e0524f" fill-opacity="0.22" stroke="#e0524f" stroke-width="1.6"/>';
      g += '<ellipse cx="0" cy="0" rx="' + (rx - 6) + '" ry="' + (ry - 5) + '" fill="#edeef2" fill-opacity="0.85"/>';
      g += '<g stroke="#c9ccd6" stroke-width="0.8" stroke-opacity="0.9">';
      g += '<line x1="' + (-rx + 8) + '" y1="-2" x2="' + (rx - 8) + '" y2="-2"/><line x1="' + (-rx + 8) + '" y1="3" x2="' + (rx - 8) + '" y2="3"/></g>';
      return g + '</g>';
    }
    s += plaque(150, 88, 20, 15, -18);
    s += plaque(196, 52, 16, 12, -40);
    s += plaque(78, 92, 15, 11, -8);
    s += '<text x="150" y="150" text-anchor="middle" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.7">silvery scale</text>';
    return s + '</svg>';
  })();

  // s1-0109 Dermatomyositis: heliotrope eyelids (face) + Gottron papules (hand)
  var dermatomyositis = (function () {
    var s = '<svg viewBox="0 0 360 200" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">';
    // face
    s += '<circle cx="92" cy="94" r="58" fill="' + CC + '" fill-opacity="0.04" stroke="' + CC + '" stroke-width="1.5"/>';
    // eyes
    s += '<ellipse cx="70" cy="86" rx="15" ry="9" fill="none" stroke="' + CC + '" stroke-width="1.3"/>';
    s += '<ellipse cx="114" cy="86" rx="15" ry="9" fill="none" stroke="' + CC + '" stroke-width="1.3"/>';
    s += '<circle cx="70" cy="86" r="4" fill="' + CC + '" fill-opacity="0.5"/><circle cx="114" cy="86" r="4" fill="' + CC + '" fill-opacity="0.5"/>';
    // violaceous (heliotrope) upper-eyelid discoloration
    s += '<path d="M56 82 q14 -12 28 0" fill="#e0524f" fill-opacity="0.3" stroke="#e0524f" stroke-width="1"/>';
    s += '<path d="M100 82 q14 -12 28 0" fill="#e0524f" fill-opacity="0.3" stroke="#e0524f" stroke-width="1"/>';
    // nose + mouth
    s += '<path d="M92 92 l-5 22 l10 0" stroke="' + CC + '" stroke-opacity="0.35"/>';
    s += '<path d="M74 126 q18 12 36 0" stroke="' + CC + '" stroke-opacity="0.4"/>';
    s += '<text x="92" y="172" text-anchor="middle" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.7">heliotrope</text>';
    // hand (dorsum) with Gottron papules over knuckles
    s += '<path d="M244 152 Q238 112 262 100 L306 100 Q330 106 330 138 Q330 172 306 178 L266 178 Q246 176 244 152 Z" fill="' + CC + '" fill-opacity="0.04" stroke="' + CC + '" stroke-width="1.5"/>';
    var fx = [262, 280, 298, 314];
    for (var i = 0; i < 4; i++) {
      s += '<rect x="' + (fx[i] - 7) + '" y="' + (54 + i % 2 * 4) + '" width="14" height="' + (48 - i % 2 * 4) + '" rx="7" fill="' + CC + '" fill-opacity="0.04" stroke="' + CC + '" stroke-width="1.3"/>';
      // Gottron papule over each knuckle (scaly erythematous)
      s += '<ellipse cx="' + fx[i] + '" cy="102" rx="8" ry="6" fill="#e0524f" fill-opacity="0.28" stroke="#e0524f" stroke-width="1.3"/>';
      s += '<line x1="' + (fx[i] - 4) + '" y1="102" x2="' + (fx[i] + 4) + '" y2="102" stroke="#edeef2" stroke-width="1"/>';
    }
    s += '<text x="288" y="172" text-anchor="middle" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.7">Gottron</text>';
    return s + '</svg>';
  })();

  // s1-0120 Secondary syphilis: coppery maculopapular rash on palm AND sole
  var syphilis = (function () {
    var COP = "#c06a3a";
    var s = '<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">';
    // palm (dorsum-up outline of a hand, palmar surface)
    s += '<path d="M40 150 Q34 108 58 98 L104 98 Q128 104 128 138 Q128 174 104 182 L62 182 Q42 180 40 150 Z" fill="' + CC + '" fill-opacity="0.04" stroke="' + CC + '" stroke-width="1.5"/>';
    var fx = [60, 78, 96, 112];
    for (var i = 0; i < 4; i++) s += '<rect x="' + (fx[i] - 7) + '" y="' + (52 + i % 2 * 4) + '" width="14" height="' + (48 - i % 2 * 4) + '" rx="7" fill="' + CC + '" fill-opacity="0.04" stroke="' + CC + '" stroke-width="1.3"/>';
    s += '<rect x="22" y="118" width="20" height="30" rx="9" fill="' + CC + '" fill-opacity="0.04" stroke="' + CC + '" stroke-width="1.3" transform="rotate(-30 32 133)"/>'; // thumb
    // sole (foot)
    s += '<path d="M250 30 Q296 26 298 84 Q300 138 286 168 Q280 190 262 188 Q246 186 244 168 Q240 116 244 68 Q246 34 250 30 Z" fill="' + CC + '" fill-opacity="0.04" stroke="' + CC + '" stroke-width="1.5"/>';
    s += '<g fill="' + CC + '" fill-opacity="0.05" stroke="' + CC + '" stroke-width="1">';
    var toes = [[262, 22, 8], [280, 20, 7], [292, 26, 6], [300, 36, 5]];
    toes.forEach(function (t) { s += '<circle cx="' + t[0] + '" cy="' + t[1] + '" r="' + t[2] + '"/>'; });
    s += '</g>';
    // symmetric coppery maculopapular spots on both
    function spots(list) {
      var g = '<g fill="' + COP + '" fill-opacity="0.55" stroke="' + COP + '" stroke-width="0.6">';
      list.forEach(function (p) { g += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '"/>'; });
      return g + '</g>';
    }
    s += spots([[62, 120, 4], [84, 132, 4.5], [100, 118, 3.5], [72, 150, 4], [98, 152, 3.5], [82, 108, 3]]);
    s += spots([[262, 78, 4], [278, 96, 4.5], [258, 112, 3.5], [276, 132, 4], [262, 148, 4], [280, 60, 3.5], [270, 118, 3]]);
    s += '<text x="84" y="206" text-anchor="middle" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.7">palm</text>';
    s += '<text x="272" y="210" text-anchor="middle" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.7">sole</text>';
    return s + '</svg>';
  })();

  // s1-0121 NF1: cafe-au-lait macules (flat tan patches) + cutaneous neurofibromas
  var nf1 = (function () {
    var TAN = "#c79a63";
    var s = '<svg viewBox="0 0 320 220" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">';
    s += '<rect x="14" y="14" width="292" height="192" rx="16" stroke="' + CC + '" stroke-opacity="0.15" fill="' + CC + '" fill-opacity="0.02"/>';
    // flat, irregular cafe-au-lait macules (no dome, smooth border)
    s += '<g fill="' + TAN + '" fill-opacity="0.45">';
    s += '<path d="M50 60 q26 -20 52 -6 q22 12 10 36 q-14 24 -44 16 q-30 -8 -18 -46 z"/>';
    s += '<path d="M188 46 q30 -14 48 8 q14 22 -8 38 q-26 16 -46 -4 q-18 -22 6 -42 z"/>';
    s += '<path d="M56 138 q22 -14 42 2 q16 18 -4 36 q-24 16 -42 -4 q-14 -20 4 -34 z"/>';
    s += '</g>';
    // dome-shaped cutaneous neurofibromas (raised bumps with shading + shadow)
    function nf(cx, by, r) {
      var g = '<ellipse cx="' + cx + '" cy="' + (by + 2) + '" rx="' + (r + 2) + '" ry="4" fill="' + CC + '" fill-opacity="0.08"/>';
      g += '<path d="M' + (cx - r) + ' ' + by + ' a' + r + ' ' + r + ' 0 0 1 ' + (2 * r) + ' 0 z" fill="' + CC + '" fill-opacity="0.18" stroke="' + CC + '" stroke-width="1.2"/>';
      g += '<circle cx="' + (cx - r * 0.35) + '" cy="' + (by - r * 0.5) + '" r="' + (r * 0.28) + '" fill="' + CC + '" fill-opacity="0.1"/>';
      return g;
    }
    s += nf(190, 150, 16) + nf(238, 128, 12) + nf(150, 108, 13) + nf(258, 172, 14);
    s += '<text x="76" y="198" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.7">cafe-au-lait</text>';
    s += '<text x="210" y="198" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.7">neurofibroma</text>';
    return s + '</svg>';
  })();

  // s1-0070 Lyme: targetoid erythema migrans (concentric rings, central clearing)
  var lyme = (function () {
    var s = '<svg viewBox="0 0 260 240" width="360" xmlns="http://www.w3.org/2000/svg" fill="none">';
    s += '<rect x="10" y="10" width="240" height="220" rx="18" stroke="' + CC + '" stroke-opacity="0.12" fill="' + CC + '" fill-opacity="0.02"/>';
    var cx = 130, cy = 118;
    // faint overall erythema field
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="94" fill="#e0524f" fill-opacity="0.05"/>';
    // outer advancing erythematous ring
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="88" stroke="#e0524f" stroke-width="11" stroke-opacity="0.5" fill="none"/>';
    // inner ring (clearing between the two rings)
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="52" stroke="#e0524f" stroke-width="7" stroke-opacity="0.4" fill="none"/>';
    // central punctum (bite site)
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="12" fill="#e0524f" fill-opacity="0.65"/>';
    s += '<text x="130" y="224" text-anchor="middle" font-size="10" font-family="sans-serif" fill="' + CC + '" fill-opacity="0.7">central clearing</text>';
    return s + '</svg>';
  })();

  Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, {
    "s1-0063": cxr(sarcoid),
    "s1-0113": cxr(ards),
    "s1-0137": cxr(coarct),
    "s1-0135": osteosarcoma,
    "s1-0085": psoriasis,
    "s1-0109": dermatomyositis,
    "s1-0120": syphilis,
    "s1-0121": nf1,
    "s1-0070": lyme
  });
})();
