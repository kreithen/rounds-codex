/*
 * Rounds Codex - USMLE Mode illustration pack C
 * Rebuilt to medical-textbook quality: layered, anatomically-schematic SVGs
 * keyed by question id. Modeled on the SCH.bootHeart gold standard
 * (dark card, faint film frame, light-on-dark layered anatomy, red accent
 * "#e0524f" for the key finding, no internal caption sentences).
 * Self-contained, ASCII-safe. The app tags them "SCHEMATIC" and adds a caption.
 */
(function () {
  "use strict";

  var FILM = "#0a0f16";
  var FR = "rgba(255,255,255,.08)";
  var ACC = "#e0524f";

  function svg(w, h, inner) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
      '<rect x="8" y="8" width="' + (w - 16) + '" height="' + (h - 16) + '" rx="12" fill="' + FILM + '" stroke="' + FR + '"/>' +
      '<g stroke-linecap="round" stroke-linejoin="round">' + inner + '</g></svg>';
  }
  // deterministic pseudo-random for scatter fills
  function rng(seed) { var s = seed; return function () { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; }; }
  function R(n) { return Math.round(n * 10) / 10; }

  // ------------------------------------------------------------------ s1-0101
  // Cherry-red spot fundus
  var fundus = (function () {
    var s = '<defs><clipPath id="f101"><circle cx="160" cy="150" r="120"/></clipPath></defs>';
    s += '<circle cx="160" cy="150" r="120" fill="#8f3a24"/>';
    s += '<circle cx="176" cy="146" r="98" fill="#b5512f" opacity="0.42"/>';
    s += '<circle cx="160" cy="150" r="120" stroke="#6a2b1c" stroke-width="6" opacity="0.7"/>';
    s += '<g clip-path="url(#f101)" fill="none">';
    // veins - darker, wider
    s += '<g stroke="#5e1712" stroke-width="5">';
    s += '<path d="M104 138 C138 96 214 92 268 130"/><path d="M104 162 C138 204 214 208 268 170"/>';
    s += '<path d="M86 130 C64 104 40 96 18 98"/><path d="M86 170 C64 196 40 206 18 202"/></g>';
    // arteries - brighter, narrower, with branches
    s += '<g stroke="#c0392b" stroke-width="2.6">';
    s += '<path d="M108 142 C140 108 210 104 262 136"/><path d="M108 158 C140 196 210 200 262 164"/>';
    s += '<path d="M90 134 C70 112 46 104 22 106"/><path d="M90 166 C70 190 46 198 22 196"/>';
    s += '<path d="M150 120 C160 130 162 140 158 150"/><path d="M150 180 C160 170 162 160 158 150"/>';
    s += '<path d="M200 118 C210 128 216 136 226 140"/><path d="M204 182 C214 172 220 164 230 160"/></g>';
    s += '</g>';
    // whitened macular halo (retinal opacification)
    s += '<circle cx="192" cy="150" r="46" fill="#efe8d6" opacity="0.24"/>';
    s += '<circle cx="192" cy="150" r="46" stroke="#efe8d6" stroke-opacity="0.26" stroke-width="6"/>';
    // cherry-red fovea (accent)
    s += '<circle cx="192" cy="150" r="13" fill="' + ACC + '"/>';
    s += '<circle cx="188" cy="146" r="4" fill="#f6b4b0" opacity="0.8"/>';
    // optic disc + cup, vessels emerge
    s += '<ellipse cx="96" cy="150" rx="23" ry="26" fill="#f0dca0" stroke="#c98a55" stroke-width="2"/>';
    s += '<ellipse cx="96" cy="150" rx="11" ry="13" fill="#f8eec6"/>';
    return s;
  })();

  // ------------------------------------------------------------------ s1-0105
  // TTP peripheral smear: schistocytes, few intact RBC, scant platelets
  var smear = (function () {
    var s = '';
    // intact biconcave RBC (donut with central pallor)
    function rbc(x, y, r) {
      return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#a8564c"/>' +
        '<circle cx="' + x + '" cy="' + y + '" r="' + R(r * 0.52) + '" fill="#cf8b80"/>';
    }
    s += rbc(66, 78, 17) + rbc(252, 88, 16) + rbc(74, 206, 16) + rbc(256, 208, 15) + rbc(210, 60, 13);
    // schistocytes (accent) - sharp angular fragments
    function helmet(x, y) {
      return '<path d="M' + (x - 16) + ' ' + (y + 8) + ' A16 15 0 0 1 ' + (x + 16) + ' ' + (y + 8) +
        ' L' + (x + 7) + ' ' + (y + 1) + ' L' + x + ' ' + (y + 8) + ' L' + (x - 7) + ' ' + (y + 1) + ' Z" fill="' + ACC + '" stroke="#7a1f18" stroke-width="1.3"/>';
    }
    function tri(x, y) {
      return '<path d="M' + x + ' ' + (y - 15) + ' L' + (x + 15) + ' ' + (y + 11) + ' L' + (x - 13) + ' ' + (y + 8) + ' Z" fill="' + ACC + '" stroke="#7a1f18" stroke-width="1.3"/>';
    }
    function kerato(x, y) {
      return '<path d="M' + (x - 14) + ' ' + (y + 4) + ' Q' + (x - 15) + ' ' + (y - 12) + ' ' + (x - 5) + ' ' + (y - 5) +
        ' L' + (x - 2) + ' ' + (y - 15) + ' L' + (x + 4) + ' ' + (y - 5) + ' Q' + (x + 15) + ' ' + (y - 12) + ' ' + (x + 14) + ' ' + (y + 4) +
        ' Q' + (x + 12) + ' ' + (y + 14) + ' ' + x + ' ' + (y + 11) + ' Q' + (x - 12) + ' ' + (y + 14) + ' ' + (x - 14) + ' ' + (y + 4) + ' Z" fill="' + ACC + '" stroke="#7a1f18" stroke-width="1.3"/>';
    }
    s += helmet(150, 150) + helmet(196, 92) + helmet(120, 118) + helmet(228, 156) + helmet(160, 210);
    s += tri(112, 74) + tri(96, 150) + tri(214, 210) + tri(58, 152) + tri(176, 118);
    s += kerato(120, 178) + kerato(240, 118);
    // scant platelets (few, small, violet)
    s += '<g fill="#9b6fc0">';
    s += '<circle cx="278" cy="248" r="4.5"/><circle cx="266" cy="256" r="3.5"/></g>';
    s += '<text x="248" y="270" text-anchor="middle" font-size="9" font-family="sans-serif" fill="#9b6fc0" fill-opacity="0.85">few platelets</text>';
    return s;
  })();

  // ------------------------------------------------------------------ s1-0106
  // Epidural hematoma axial head CT (film style)
  var epidural = (function () {
    var s = '';
    // skull table (bright bone) + brain
    s += '<ellipse cx="160" cy="150" rx="120" ry="132" fill="#d7e0ea"/>';
    s += '<ellipse cx="160" cy="150" rx="108" ry="120" fill="#38424e"/>';
    // faint sulci
    s += '<g stroke="#8fa0b2" stroke-opacity="0.25" stroke-width="1.4" fill="none">';
    s += '<path d="M90 70 q14 24 6 46"/><path d="M120 52 q6 26 -2 44"/><path d="M96 232 q16 -22 8 -44"/></g>';
    // biconvex (lens) hyperdense collection against inner table (accent)
    s += '<path d="M256 94 C214 124 214 176 256 206 C250 172 250 128 256 94 Z" fill="' + ACC + '"/>';
    s += '<path d="M256 94 C214 124 214 176 256 206" stroke="#f4b0ac" stroke-width="1.6" fill="none"/>';
    // falx / midline SHIFTED away from mass (to the left)
    s += '<path d="M160 32 Q138 150 156 268" stroke="#d7e0ea" stroke-width="2.4" fill="none" opacity="0.75"/>';
    // left lateral ventricle (patent) + effaced right ventricle (slit)
    s += '<path d="M120 116 C104 138 104 162 118 184 C124 168 124 132 120 116 Z" fill="' + FILM + '" opacity="0.55" stroke="#9fb0c1" stroke-width="1"/>';
    s += '<path d="M178 128 C172 144 172 156 178 172" stroke="#9fb0c1" stroke-width="1" fill="none" opacity="0.6"/>';
    // suture ticks (mass does not cross them)
    s += '<g stroke="#8fa0b2" stroke-opacity="0.5" stroke-width="1.4">';
    s += '<path d="M244 78 l8 -8"/><path d="M250 224 l9 7"/></g>';
    return s;
  })();

  // ------------------------------------------------------------------ s1-0109
  // Dermatomyositis: heliotrope eyelids (face) + Gottron papules (hand)
  var dermatomyositis = (function () {
    var HEL = "#9563a8", GOT = "#b0567e", LT = "#d6dee8";
    var s = '<line x1="170" y1="30" x2="170" y2="230" stroke="' + LT + '" stroke-opacity="0.12"/>';
    // ---- face
    s += '<g stroke="' + LT + '" stroke-opacity="0.85" stroke-width="2" fill="none">';
    s += '<path d="M40 100 C40 60 132 60 132 100 C132 152 112 198 86 198 C60 198 40 152 40 100 Z"/>';
    s += '<path d="M42 100 C44 66 128 66 130 100 C118 80 54 80 42 100" stroke-opacity="0.4"/>'; // hairline
    // brows
    s += '<path d="M50 104 Q64 96 78 102"/><path d="M94 102 Q108 96 122 104"/>';
    // eyes (almond) + iris
    s += '<path d="M52 118 Q64 110 78 118 Q64 126 52 118 Z"/><circle cx="65" cy="118" r="3.4"/>';
    s += '<path d="M94 118 Q108 110 122 118 Q108 126 94 118 Z"/><circle cx="108" cy="118" r="3.4"/>';
    // nose + mouth
    s += '<path d="M86 124 L82 148 Q86 152 92 148"/>';
    s += '<path d="M72 170 Q86 178 100 170"/>';
    s += '</g>';
    // heliotrope violaceous upper eyelids + periorbital edema (accent)
    s += '<ellipse cx="65" cy="116" rx="17" ry="11" fill="' + HEL + '" opacity="0.28"/>';
    s += '<ellipse cx="108" cy="116" rx="17" ry="11" fill="' + HEL + '" opacity="0.28"/>';
    s += '<path d="M50 114 Q65 102 80 114 Q65 110 50 114 Z" fill="' + HEL + '" opacity="0.92"/>';
    s += '<path d="M92 114 Q108 102 124 114 Q108 110 92 114 Z" fill="' + HEL + '" opacity="0.92"/>';
    s += '<text x="86" y="216" text-anchor="middle" font-size="9" font-family="sans-serif" fill="' + HEL + '" fill-opacity="0.9">heliotrope</text>';
    // ---- hand (dorsum)
    s += '<g stroke="' + LT + '" stroke-opacity="0.85" stroke-width="2" fill="' + LT + '" fill-opacity="0.05">';
    s += '<rect x="216" y="146" width="76" height="72" rx="22"/>';
    s += '<rect x="230" y="210" width="50" height="26" rx="10"/>';
    var fx = [220, 238, 256, 274], ftop = [72, 60, 66, 84];
    fx.forEach(function (x, i) { s += '<rect x="' + x + '" y="' + ftop[i] + '" width="15" height="' + (154 - ftop[i]) + '" rx="7"/>'; });
    s += '<rect x="194" y="150" width="15" height="40" rx="7" transform="rotate(-40 201 170)"/>';
    s += '</g>';
    // Gottron papules over MCP + PIP knuckles (accent, scaly)
    function pap(x, y) {
      return '<rect x="' + (x - 9) + '" y="' + (y - 6) + '" width="18" height="12" rx="4" fill="' + GOT + '" opacity="0.92"/>' +
        '<path d="M' + (x - 6) + ' ' + (y - 1) + ' h12 M' + (x - 6) + ' ' + (y + 2) + ' h12" stroke="#eccada" stroke-width="0.8" opacity="0.7"/>';
    }
    fx.forEach(function (x) { s += pap(x + 7, 152) + pap(x + 7, 116); });
    s += '<text x="254" y="230" text-anchor="middle" font-size="9" font-family="sans-serif" fill="' + GOT + '" fill-opacity="0.9">Gottron</text>';
    return s;
  })();

  // ------------------------------------------------------------------ s1-0113
  // ARDS PA chest radiograph (film style): diffuse bilateral infiltrates
  var ards = (function () {
    var LT = "#c9d3de";
    var s = '';
    // spine + trachea + mediastinum
    s += '<line x1="150" y1="30" x2="150" y2="200" stroke="' + LT + '" stroke-opacity="0.16" stroke-width="6"/>';
    s += '<line x1="150" y1="30" x2="150" y2="76" stroke="' + LT + '" stroke-opacity="0.3" stroke-width="2.4"/>';
    // clavicles
    s += '<g stroke="' + LT + '" stroke-opacity="0.4" stroke-width="2" fill="none">';
    s += '<path d="M150 54 Q116 44 88 58"/><path d="M150 54 Q184 44 212 58"/></g>';
    // ribs
    s += '<g stroke="' + LT + '" stroke-opacity="0.24" fill="none">';
    for (var i = 0; i < 5; i++) { var y = 62 + i * 22; s += '<path d="M148 ' + y + ' q-54 8 -100 ' + (y + 40) + '"/><path d="M152 ' + y + ' q54 8 100 ' + (y + 40) + '"/>'; }
    s += '</g>';
    // lung field borders
    s += '<g stroke="' + LT + '" stroke-opacity="0.3" fill="none">';
    s += '<path d="M138 60 C96 66 60 100 58 150 C58 176 66 194 84 200"/>';
    s += '<path d="M162 60 C204 66 240 100 242 150 C242 176 234 194 216 200"/></g>';
    // normal-size cardiac silhouette
    s += '<path d="M150 108 C176 108 186 150 178 178 C172 192 156 192 150 188 C144 192 128 192 122 178 C114 150 124 108 150 108 Z" fill="' + LT + '" fill-opacity="0.1" stroke="' + LT + '" stroke-opacity="0.45" stroke-width="1.5"/>';
    // aortic knob
    s += '<path d="M138 84 q-8 -6 -2 -14" stroke="' + LT + '" stroke-opacity="0.4" fill="none"/>';
    // diaphragm domes
    s += '<path d="M46 196 q52 -30 100 -6" stroke="' + LT + '" stroke-opacity="0.4" fill="none"/>';
    s += '<path d="M154 190 q50 -26 100 4" stroke="' + LT + '" stroke-opacity="0.4" fill="none"/>';
    // diffuse bilateral patchy alveolar infiltrates
    function cloud(cx, cy, seed) {
      var r = rng(seed), g = '';
      for (var k = 0; k < 6; k++) {
        var rr = R(7 + r() * 9), dx = R((r() - 0.5) * 26), dy = R((r() - 0.5) * 24);
        g += '<circle cx="' + R(cx + dx) + '" cy="' + R(cy + dy) + '" r="' + rr + '" fill="' + LT + '" fill-opacity="' + R(0.14 + r() * 0.12) + '"/>';
      }
      return g;
    }
    s += cloud(96, 96, 11) + cloud(80, 134, 23) + cloud(102, 168, 37) + cloud(74, 116, 51);
    s += cloud(204, 96, 61) + cloud(220, 134, 73) + cloud(198, 168, 87) + cloud(228, 114, 97);
    // air bronchograms
    s += '<g stroke="' + FILM + '" stroke-opacity="0.5" stroke-width="1.4" fill="none">';
    s += '<path d="M90 116 l14 20 m-14 -20 l-6 22"/><path d="M210 116 l-14 20 m14 -20 l6 22"/></g>';
    return s;
  })();

  // ------------------------------------------------------------------ s1-0114
  // Membranous nephropathy glomerular EM: subepithelial spike-and-dome
  var membranous = (function () {
    var LT = "#c9d3de";
    var s = '';
    var domeX = [50, 92, 134, 176, 218, 260];
    var spikeX = [29, 71, 113, 155, 197, 239, 281];
    // capillary lumen (below) + RBC
    s += '<path d="M18 206 Q160 230 302 206 L302 252 L18 252 Z" fill="#16202c"/>';
    s += '<ellipse cx="150" cy="228" rx="40" ry="13" fill="#7a2b26" opacity="0.5"/>';
    s += '<text x="150" y="246" text-anchor="middle" font-size="8.5" font-family="sans-serif" fill="' + LT + '" fill-opacity="0.55">capillary lumen</text>';
    // endothelium (fenestrated) below GBM
    s += '<path d="M18 170 H302" stroke="' + LT + '" stroke-opacity="0.35" stroke-width="2.4" stroke-dasharray="9 5"/>';
    // GBM band
    s += '<path d="M18 142 L302 142 L302 162 Q160 174 18 162 Z" fill="' + LT + '" fill-opacity="0.16" stroke="' + LT + '" stroke-opacity="0.5" stroke-width="1.4"/>';
    // basement-membrane spikes (light, project up between deposits)
    s += '<g fill="' + LT + '" fill-opacity="0.5" stroke="' + LT + '" stroke-opacity="0.6" stroke-width="1">';
    spikeX.forEach(function (x) { s += '<path d="M' + (x - 5) + ' 142 L' + x + ' 120 L' + (x + 5) + ' 142 Z"/>'; });
    s += '</g>';
    // subepithelial immune deposits (domes, accent)
    domeX.forEach(function (x) { s += '<path d="M' + (x - 13) + ' 142 A13 13 0 0 1 ' + (x + 13) + ' 142 Z" fill="' + ACC + '"/>'; });
    // podocyte cytoplasm + foot processes resting on deposits/spikes
    s += '<path d="M18 96 Q160 76 302 96 L302 66 L18 66 Z" fill="' + LT + '" fill-opacity="0.12" stroke="' + LT + '" stroke-opacity="0.4" stroke-width="1.4"/>';
    s += '<g fill="' + LT + '" fill-opacity="0.14" stroke="' + LT + '" stroke-opacity="0.45" stroke-width="1">';
    spikeX.forEach(function (x) { s += '<path d="M' + (x - 6) + ' 96 L' + (x - 6) + ' 116 Q' + x + ' 122 ' + (x + 6) + ' 116 L' + (x + 6) + ' 96 Z"/>'; });
    s += '</g>';
    // labels
    s += '<text x="30" y="82" font-size="9" font-family="sans-serif" fill="' + LT + '" fill-opacity="0.75">podocyte</text>';
    s += '<text x="150" y="200" text-anchor="middle" font-size="9" font-family="sans-serif" fill="' + LT + '" fill-opacity="0.7">GBM</text>';
    s += '<text x="234" y="110" font-size="9" font-family="sans-serif" fill="' + ACC + '" fill-opacity="0.95">deposits</text>';
    s += '<line x1="233" y1="112" x2="220" y2="130" stroke="' + ACC + '" stroke-width="1" opacity="0.7"/>';
    return s;
  })();

  // ------------------------------------------------------------------ s1-0115
  // Barrett esophagus: squamous -> columnar w/ goblet cells at GEJ
  var barrett = (function () {
    var LT = "#9fb0c1";
    var s = '';
    // lamina propria band (below epithelium)
    s += '<path d="M20 152 Q170 168 320 150 L320 200 Q170 214 20 200 Z" fill="#7a3a40" fill-opacity="0.14" stroke="' + LT + '" stroke-opacity="0.3"/>';
    // ---- squamous (left): stratified, flattening toward surface
    s += '<path d="M20 152 L20 70 Q94 60 166 70 L166 152 Z" fill="' + LT + '" fill-opacity="0.1" stroke="' + LT + '" stroke-opacity="0.45" stroke-width="1.4"/>';
    s += '<g fill="' + LT + '" fill-opacity="0.5">';
    var rows = [[144, 6, 5], [124, 8, 4.5], [104, 9, 3.4], [86, 10, 2.6]];
    rows.forEach(function (row) {
      for (var x = 34; x < 160; x += 16) {
        s += '<ellipse cx="' + x + '" cy="' + row[0] + '" rx="' + row[1] + '" ry="' + row[2] + '"/>';
      }
    });
    s += '</g>';
    // ---- columnar (right): tall crypts, basal nuclei, goblet cells (accent)
    s += '<path d="M174 152 L174 104 Q186 92 198 104 Q210 92 222 104 Q234 92 246 104 Q258 92 270 104 Q282 92 294 104 Q306 96 320 104 L320 152 Z" fill="' + LT + '" fill-opacity="0.1" stroke="' + LT + '" stroke-opacity="0.45" stroke-width="1.4"/>';
    // columnar cell separators + basal nuclei
    s += '<g stroke="' + LT + '" stroke-opacity="0.3" stroke-width="1">';
    for (var cx = 186; cx < 320; cx += 12) { s += '<line x1="' + cx + '" y1="104" x2="' + cx + '" y2="150"/>'; }
    s += '</g>';
    s += '<g fill="' + LT + '" fill-opacity="0.55">';
    for (var nx = 180; nx < 320; nx += 12) { s += '<ellipse cx="' + nx + '" cy="142" rx="3" ry="5"/>'; }
    s += '</g>';
    // goblet cells (accent wine-glass mucin cups)
    function goblet(x) {
      return '<path d="M' + (x - 6) + ' 108 Q' + x + ' 100 ' + (x + 6) + ' 108 Q' + (x + 7) + ' 126 ' + x + ' 138 Q' + (x - 7) + ' 126 ' + (x - 6) + ' 108 Z" fill="' + ACC + '" opacity="0.92"/>';
    }
    s += goblet(198) + goblet(228) + goblet(258) + goblet(294);
    // squamocolumnar junction (Z-line)
    s += '<line x1="170" y1="60" x2="170" y2="152" stroke="#eec98a" stroke-width="1.6" stroke-dasharray="5 4" opacity="0.85"/>';
    // labels
    s += '<text x="92" y="216" text-anchor="middle" font-size="9.5" font-family="sans-serif" fill="' + LT + '" fill-opacity="0.8">squamous</text>';
    s += '<text x="250" y="216" text-anchor="middle" font-size="9.5" font-family="sans-serif" fill="' + LT + '" fill-opacity="0.8">columnar</text>';
    s += '<text x="170" y="52" text-anchor="middle" font-size="9" font-family="sans-serif" fill="#eec98a" fill-opacity="0.9">GEJ</text>';
    s += '<text x="294" y="94" text-anchor="middle" font-size="8.5" font-family="sans-serif" fill="' + ACC + '" fill-opacity="0.95">goblet</text>';
    return s;
  })();

  // ------------------------------------------------------------------ s1-0118
  // Papillary thyroid cytology: Orphan-Annie nuclei, grooves, psammoma body
  var papillary = (function () {
    var LT = "#c9d3de";
    var s = '';
    // cells (rounded cytoplasm) with large pale empty nuclei
    var cells = [[78, 88, 30], [150, 70, 30], [230, 92, 30], [64, 176, 30], [246, 182, 30], [150, 224, 30]];
    s += '<g stroke="' + LT + '" stroke-opacity="0.4" stroke-width="1.4" fill="' + LT + '" fill-opacity="0.05">';
    cells.forEach(function (c) { s += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '"/>'; });
    s += '</g>';
    // Orphan-Annie-eye nuclei: pale/empty (near-bg fill, crisp rim)
    s += '<g fill="#141c26" stroke="' + LT + '" stroke-opacity="0.75" stroke-width="1.6">';
    cells.forEach(function (c) { s += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="20"/>'; });
    s += '</g>';
    // longitudinal nuclear grooves (coffee-bean) on several nuclei
    s += '<g stroke="' + LT + '" stroke-opacity="0.65" stroke-width="1.4">';
    s += '<line x1="60" y1="88" x2="96" y2="88"/><line x1="212" y1="92" x2="248" y2="92"/><line x1="132" y1="224" x2="168" y2="224"/></g>';
    // nuclear pseudoinclusion in one nucleus
    s += '<circle cx="150" cy="70" r="6" fill="' + LT + '" fill-opacity="0.16" stroke="' + LT + '" stroke-opacity="0.5" stroke-width="1"/>';
    // psammoma body (accent) - concentric laminated rings
    s += '<g fill="none" stroke="' + ACC + '" stroke-width="2.4">';
    [27, 21, 15, 9].forEach(function (r) { s += '<circle cx="150" cy="150" r="' + r + '"/>'; });
    s += '</g>';
    s += '<circle cx="150" cy="150" r="4" fill="' + ACC + '"/>';
    // labels
    s += '<text x="150" y="120" text-anchor="middle" font-size="9" font-family="sans-serif" fill="' + ACC + '" fill-opacity="0.95">psammoma body</text>';
    s += '<text x="78" y="66" text-anchor="middle" font-size="8.5" font-family="sans-serif" fill="' + LT + '" fill-opacity="0.75">groove</text>';
    return s;
  })();

  // ------------------------------------------------------------------ s1-0119
  // Complete mole pelvic ultrasound: sector fan, snowstorm, no fetus
  var mole = (function () {
    var LT = "#c9d3de";
    var s = '';
    // US sector fan
    s += '<defs><clipPath id="u119"><ellipse cx="160" cy="176" rx="94" ry="90"/></clipPath></defs>';
    s += '<path d="M160 26 L52 268 A248 248 0 0 0 268 268 Z" fill="#0d141c" stroke="' + LT + '" stroke-opacity="0.35" stroke-width="1.4"/>';
    // depth arcs
    s += '<g stroke="' + LT + '" stroke-opacity="0.14" fill="none">';
    s += '<path d="M96 138 A100 100 0 0 0 224 138"/><path d="M74 190 A160 160 0 0 0 246 190"/></g>';
    // uterine outline
    s += '<ellipse cx="160" cy="176" rx="94" ry="90" fill="none" stroke="' + LT + '" stroke-opacity="0.55" stroke-width="1.8"/>';
    // snowstorm speckle + cluster-of-grapes vesicles (accent) inside uterus
    s += '<g clip-path="url(#u119)">';
    var r = rng(97), i, x, y, rr;
    // fine echogenic speckle
    s += '<g fill="' + LT + '" fill-opacity="0.32">';
    for (i = 0; i < 130; i++) {
      x = R(70 + r() * 180); y = R(96 + r() * 168);
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + R(0.8 + r() * 1.2) + '"/>';
    }
    s += '</g>';
    // vesicular cysts (anechoic, light rim); some accent
    for (i = 0; i < 26; i++) {
      x = R(74 + r() * 172); y = R(100 + r() * 156); rr = R(4 + r() * 7);
      var acc = r() > 0.62;
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + rr + '" fill="#05080c" stroke="' + (acc ? ACC : LT) + '" stroke-opacity="' + (acc ? 0.9 : 0.5) + '" stroke-width="1.2"/>';
    }
    s += '</g>';
    // no fetus label
    s += '<text x="160" y="286" text-anchor="middle" font-size="9.5" font-family="sans-serif" fill="' + LT + '" fill-opacity="0.7">no fetus</text>';
    return s;
  })();

  Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, {
    "s1-0101": svg(320, 300, fundus),
    "s1-0105": svg(320, 280, smear),
    "s1-0106": svg(320, 300, epidural),
    "s1-0109": svg(340, 240, dermatomyositis),
    "s1-0113": svg(300, 260, ards),
    "s1-0114": svg(320, 260, membranous),
    "s1-0115": svg(340, 240, barrett),
    "s1-0118": svg(300, 280, papillary),
    "s1-0119": svg(320, 300, mole)
  });
})();
