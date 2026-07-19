/* Rounds Codex - USMLE illustration pack H (16 items). Auto-generated schematic SVGs. */
(function () {
  'use strict';
  var A = '#e0524f';                 // reserved accent (single key finding)
  var W = 'rgba(238,244,250,.94)';   // crisp contour
  var FAINT = 'rgba(210,220,232,.55)';
  var FAINT2 = 'rgba(205,216,229,.30)';
  var FAINT3 = 'rgba(205,216,229,.18)';
  var TISSUE = 'rgba(214,224,238,.13)';
  var LBL = 'rgba(214,224,238,.80)';

  // ---- shared helpers ------------------------------------------------------
  function svg(w, h, body) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' + body + '</svg>';
  }
  function ecgGrid(w, h) {
    var s = '<rect x="8" y="8" width="' + (w - 16) + '" height="' + (h - 16) + '" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g>';
    var x, y, op;
    for (x = 0; x <= w; x += 12) { op = (x % 60 === 0) ? 0.14 : 0.06; s += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + h + '" stroke="' + A + '" stroke-opacity="' + op + '"/>'; }
    for (y = 0; y <= h; y += 12) { op = (y % 60 === 0) ? 0.14 : 0.06; s += '<line x1="0" y1="' + y + '" x2="' + w + '" y2="' + y + '" stroke="' + A + '" stroke-opacity="' + op + '"/>'; }
    return s + '</g>';
  }
  // generic beat: adjustable P, QRS width, R height, S depth, T height/width
  function mkbeat(x, base, o) {
    o = o || {};
    var P = (o.p !== false);
    var R = (o.R == null ? 30 : o.R);
    var Q = (o.Q == null ? 4 : o.Q);
    var S = (o.S == null ? 9 : o.S);
    var qw = (o.qw == null ? 8 : o.qw);   // QRS half-width scaler
    var T = (o.T == null ? 8 : o.T);
    var tw = (o.tw == null ? 8 : o.tw);   // T wave half width
    var a = [];
    function pt(dx, up) { a.push((x + dx) + ',' + (base - up)); }
    pt(0, 0);
    if (P) { pt(6, 0); pt(10, 5); pt(14, 7); pt(18, 5); pt(22, 0); } else { pt(22, 0); }
    pt(28, 0);
    // QRS with adjustable width
    pt(28 + qw * 0.25, -Q);
    pt(28 + qw * 0.75, R);
    pt(28 + qw * 1.4, -S);
    pt(28 + qw * 1.9, 0);
    // ST + T
    var t0 = 28 + qw * 1.9 + 4;
    pt(t0, 0);
    pt(t0 + tw * 0.5, T * 0.8);
    pt(t0 + tw, T);
    pt(t0 + tw * 1.5, T * 0.7);
    pt(t0 + tw * 2, 0);
    pt(t0 + tw * 2 + 6, 0);
    return a.join(' ');
  }
  function qrsSpike(x, base, h) {
    return '<polyline points="' + x + ',' + base + ' ' + (x + 3) + ',' + base + ' ' + (x + 6) + ',' + (base - h) + ' ' + (x + 10) + ',' + (base + h * 0.42) + ' ' + (x + 13) + ',' + base + '" fill="none" stroke="' + W + '" stroke-width="2.6"/>';
  }
  function fibBaseline(x0, x1, base) {
    var d = 'M' + x0 + ' ' + base + ' ', x, i = 0;
    for (x = x0 + 6; x <= x1; x += 7) { var dy = (i % 3 === 0) ? 5 : (i % 3 === 1 ? -4 : 2); d += 'L' + x + ' ' + (base - dy) + ' '; i++; }
    return '<path d="' + d + '" stroke="rgba(210,220,232,.42)" stroke-width="1" fill="none"/>';
  }
  function rrMarks(xs, y) {
    var s = '', i, a, b;
    for (i = 0; i < xs.length - 1; i++) {
      a = xs[i] + 6; b = xs[i + 1] + 6;
      s += '<line x1="' + a + '" y1="' + y + '" x2="' + b + '" y2="' + y + '" stroke="' + A + '" stroke-width="1.6"/>' +
        '<line x1="' + a + '" y1="' + (y - 4) + '" x2="' + a + '" y2="' + (y + 4) + '" stroke="' + A + '" stroke-width="1.6"/>' +
        '<line x1="' + b + '" y1="' + (y - 4) + '" x2="' + b + '" y2="' + (y + 4) + '" stroke="' + A + '" stroke-width="1.6"/>';
    }
    return s;
  }

  // ==== ECG entries =========================================================
  // s3-0126 atrial fibrillation with RVR: irregularly irregular, no P waves
  var afX = [34, 74, 128, 162, 210, 246, 302, 342, 396, 434];
  var s3_0126 = svg(480, 200, ecgGrid(480, 200) +
    fibBaseline(16, 464, 118) +
    afX.map(function (x) { return qrsSpike(x, 118, 34); }).join('') +
    rrMarks(afX, 168) +
    '<text x="20" y="30" font-family="sans-serif" font-size="11" fill="' + LBL + '">No P waves, rate ~130</text>' +
    '<text x="20" y="190" font-family="sans-serif" font-size="11" fill="' + A + '">Irregularly irregular</text>');

  // s3-0134 hyperkalemia: peaked T waves + progressive QRS widening
  var hkXs = [34, 128, 224, 328, 434];
  var hkBase = 128;
  var hkBeats = hkXs.map(function (x, i) {
    var qw = 8 + i * 4;                 // progressive QRS widening
    return '<polyline points="' + mkbeat(x, hkBase, { R: 30, S: 9, qw: qw, T: 30, tw: 7, p: i < 2 }) + '" fill="none" stroke="' + W + '" stroke-width="2.2"/>';
  }).join('');
  // accent the peaked T waves (apices)
  var hkTs = hkXs.map(function (x, i) {
    var qw = 8 + i * 4;
    var t0 = x + 28 + qw * 1.9 + 4;
    return '<circle cx="' + (t0 + 7) + '" cy="' + (hkBase - 30) + '" r="2.6" fill="' + A + '"/>' +
      '<polyline points="' + (t0) + ',' + hkBase + ' ' + (t0 + 3.5) + ',' + (hkBase - 24) + ' ' + (t0 + 7) + ',' + (hkBase - 30) + ' ' + (t0 + 10.5) + ',' + (hkBase - 21) + ' ' + (t0 + 14) + ',' + hkBase + '" fill="none" stroke="' + A + '" stroke-width="2.4"/>';
  }).join('');
  var s3_0134 = svg(480, 220, ecgGrid(480, 220) +
    hkBeats + hkTs +
    '<text x="20" y="30" font-family="sans-serif" font-size="11" fill="' + LBL + '">Widening QRS</text>' +
    '<text x="20" y="208" font-family="sans-serif" font-size="11" fill="' + A + '">Peaked T waves</text>');

  // s3-0124 TCA overdose: sinus tach, wide QRS ~130ms; aVR inset w/ terminal R
  var tcaXs = [40, 128, 216, 304, 392];
  var tcaBase = 120;
  var tcaBeats = tcaXs.map(function (x) {
    return '<polyline points="' + mkbeat(x, tcaBase, { R: 30, S: 10, qw: 22, T: 8, tw: 8 }) + '" fill="none" stroke="' + A + '" stroke-width="2.4"/>';
  }).join('');
  // aVR inset lower panel: deep S with prominent terminal R
  function avrBeat(x, base) {
    return '<polyline points="' + x + ',' + base + ' ' + (x + 6) + ',' + base + ' ' + (x + 10) + ',' + (base - 3) + ' ' +
      (x + 16) + ',' + (base + 26) + ' ' + (x + 26) + ',' + (base - 22) + ' ' + (x + 30) + ',' + (base + 3) + ' ' + (x + 40) + ',' + base + '" fill="none" stroke="' + W + '" stroke-width="2.4"/>';
  }
  var s3_0124 = svg(480, 300, ecgGrid(480, 300) +
    tcaBeats +
    '<text x="20" y="30" font-family="sans-serif" font-size="11" fill="' + LBL + '">Sinus tach</text>' +
    '<text x="20" y="150" font-family="sans-serif" font-size="11" fill="' + A + '">Wide QRS ~130 ms</text>' +
    '<line x1="20" y1="176" x2="460" y2="176" stroke="rgba(205,216,229,.22)" stroke-width="1" stroke-dasharray="4 4"/>' +
    '<text x="30" y="200" font-family="sans-serif" font-size="11" fill="' + LBL + '">aVR</text>' +
    [78, 168, 258, 348].map(function (x) { return avrBeat(x, 240); }).join('') +
    '<circle cx="284" cy="218" r="12" fill="none" stroke="' + A + '" stroke-width="2"/>' +
    '<text x="360" y="284" font-family="sans-serif" font-size="11" fill="' + A + '">Terminal R (aVR)</text>');

  // ==== Imaging / schematic entries (literal strings) =======================
  var R = {
    's3-0126': s3_0126,
    's3-0134': s3_0134,
    's3-0124': s3_0124,

    // s2ck-0101 aortic stenosis: PLAX echo, calcified valve + LVH
    's2ck-0101': '<svg viewBox="0 0 340 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="324" height="284" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><path d="M40 34 L300 34 L262 266 A150 150 0 0 1 78 266 Z" fill="#06090d" stroke="rgba(205,216,229,.18)" stroke-width="1.2"/><path d="M96 110 A118 118 0 0 0 244 110" stroke="rgba(205,216,229,.12)" stroke-width="1" fill="none"/><path d="M78 174 A150 150 0 0 0 262 174" stroke="rgba(205,216,229,.12)" stroke-width="1" fill="none"/><path d="M96 96 C86 140 88 196 108 236 C120 250 134 248 138 228 C142 190 140 140 128 104 C120 90 104 84 96 96 Z" fill="rgba(214,224,238,.10)" stroke="rgba(238,244,250,.94)" stroke-width="7"/><path d="M108 110 C100 148 102 196 118 226" stroke="rgba(150,190,220,.14)" stroke-width="14" fill="none"/><path d="M150 90 C176 96 200 96 224 92 C238 88 250 78 254 64" fill="none" stroke="rgba(238,244,250,.9)" stroke-width="6"/><path d="M150 150 C176 146 200 146 224 150 C240 154 252 166 256 182" fill="none" stroke="rgba(238,244,250,.9)" stroke-width="6"/><path d="M138 200 C160 214 190 216 214 206 C226 200 232 188 232 176" fill="none" stroke="rgba(210,220,232,.5)" stroke-width="3"/><g stroke="#e0524f" stroke-width="3.2"><path d="M172 100 C182 112 184 128 180 142"/><path d="M172 140 C182 128 184 112 180 100"/><path d="M200 100 C210 112 212 128 208 142"/><path d="M200 140 C210 128 212 112 208 100"/></g><g fill="#e0524f"><circle cx="176" cy="112" r="2.4"/><circle cx="184" cy="128" r="2.4"/><circle cx="204" cy="114" r="2.4"/><circle cx="210" cy="130" r="2.4"/><circle cx="192" cy="106" r="2.2"/></g><path d="M172 100 C182 112 184 128 180 142 M200 100 C210 112 212 128 208 142" fill="none" stroke="#e0524f" stroke-width="8" stroke-opacity="0.16"/></g><text x="228" y="92" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Calcified valve</text><text x="118" y="262" font-family="sans-serif" font-size="11" fill="' + LBL + '" text-anchor="middle">LVH</text></svg>',

    // s2ck-0105 parapneumonic effusion: CXR, left effusion + meniscus
    's2ck-0105': '<svg viewBox="0 0 320 340" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="304" height="324" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><path d="M160 40 L160 300" stroke="rgba(205,216,229,.20)" stroke-width="1"/><g stroke="rgba(205,216,229,.30)" stroke-width="1.6" fill="none"><path d="M150 60 C112 66 78 84 60 110"/><path d="M150 88 C108 94 72 114 52 144"/><path d="M150 116 C106 122 68 144 48 176"/><path d="M150 144 C104 150 66 174 48 208"/><path d="M150 172 C108 178 74 204 60 236"/><path d="M170 60 C208 66 242 84 260 110"/><path d="M170 88 C212 94 248 114 268 144"/><path d="M170 116 C214 122 252 144 272 176"/><path d="M170 144 C216 150 254 174 272 208"/><path d="M170 172 C212 178 246 204 260 236"/></g><path d="M158 96 C168 130 172 176 168 214 C182 226 200 232 214 228 C210 190 202 150 196 118 C190 104 172 96 158 96 Z" fill="rgba(214,224,238,.10)" stroke="rgba(210,220,232,.55)" stroke-width="1.8"/><path d="M262 236 C246 264 214 280 176 282" stroke="rgba(205,216,229,.45)" stroke-width="2.2" fill="none"/><path d="M170 216 C142 210 96 214 66 236 C60 262 92 288 138 292 C170 294 190 280 190 260 C190 244 182 228 170 216 Z" fill="rgba(224,82,79,.22)" stroke="#e0524f" stroke-width="2.6"/><path d="M66 236 C96 214 142 210 170 216 C176 224 180 234 182 244 C150 236 108 240 78 252 C72 246 68 240 66 236 Z" fill="rgba(224,82,79,.14)" stroke="none"/><path d="M170 216 C158 234 138 246 112 250" fill="none" stroke="#e0524f" stroke-width="3" stroke-opacity="0.65"/><path d="M60 288 C48 288 44 276 52 268" stroke="#e0524f" stroke-width="2.6" fill="none"/></g><text x="112" y="278" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Effusion</text><text x="66" y="308" font-family="sans-serif" font-size="10" fill="#e0524f" text-anchor="middle">Blunted CP angle</text></svg>',

    // s2ck-0111 carotid stenosis: duplex US, ICA plaque ~80% + flow jet
    's2ck-0111': '<svg viewBox="0 0 360 260" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="344" height="244" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><rect x="24" y="30" width="312" height="200" rx="8" fill="#06090d" stroke="rgba(205,216,229,.18)"/><rect x="24" y="30" width="312" height="10" rx="4" fill="rgba(205,216,229,.14)"/><g stroke="rgba(205,216,229,.10)" stroke-width="1"><line x1="80" y1="40" x2="52" y2="230"/><line x1="180" y1="40" x2="180" y2="230"/><line x1="280" y1="40" x2="308" y2="230"/></g><path d="M40 148 C110 150 150 150 182 140 C210 132 236 118 262 96 L300 66" fill="none" stroke="rgba(238,244,250,.94)" stroke-width="2.4"/><path d="M40 184 C110 186 150 186 184 178 C212 172 236 160 258 142 L296 112" fill="none" stroke="rgba(238,244,250,.94)" stroke-width="2.4"/><path d="M198 150 C216 138 236 122 258 100 L292 70" fill="none" stroke="rgba(210,220,232,.55)" stroke-width="2"/><path d="M204 168 C222 156 240 142 258 126 L290 100" fill="none" stroke="rgba(210,220,232,.55)" stroke-width="2"/><path d="M40 158 C110 160 150 160 182 172 C210 182 236 196 262 218 L300 250" fill="none" stroke="rgba(238,244,250,.94)" stroke-width="0"/><path d="M182 140 C204 138 224 130 244 116 C238 128 232 138 224 148 C210 158 194 160 182 158 C176 152 178 146 182 140 Z" fill="rgba(214,224,238,.28)" stroke="rgba(238,244,250,.9)" stroke-width="1.8"/><path d="M188 176 C210 174 230 166 250 150 C246 162 240 174 230 184 C214 194 196 194 186 188 C182 184 184 180 188 176 Z" fill="rgba(214,224,238,.28)" stroke="rgba(238,244,250,.9)" stroke-width="1.8"/><path d="M226 152 C214 148 200 150 190 158 C200 168 216 172 230 168 C236 164 234 156 226 152 Z" fill="rgba(224,82,79,.5)" stroke="#e0524f" stroke-width="2.4"/><path d="M240 128 C230 136 220 146 214 158" stroke="#e0524f" stroke-width="6" stroke-opacity="0.22" fill="none"/></g><text x="230" y="120" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Plaque ~80%</text><text x="64" y="220" font-family="sans-serif" font-size="10" fill="' + LBL + '" text-anchor="middle">CCA</text><text x="300" y="60" font-family="sans-serif" font-size="10" fill="' + LBL + '" text-anchor="middle">ICA</text></svg>',

    // s2ck-0112 breast cancer: mammogram, spiculated mass + microcalcs
    's2ck-0112': '<svg viewBox="0 0 320 320" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="304" height="304" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><path d="M40 40 L40 288 C120 288 220 236 288 150 C244 96 168 52 96 42 C76 40 56 40 40 40 Z" fill="rgba(214,224,238,.06)" stroke="rgba(238,244,250,.85)" stroke-width="2"/><line x1="40" y1="40" x2="40" y2="288" stroke="rgba(205,216,229,.4)" stroke-width="2"/><g stroke="rgba(205,216,229,.28)" stroke-width="1.1" fill="none"><path d="M46 90 C90 96 140 108 180 132"/><path d="M46 130 C96 136 150 152 196 182"/><path d="M46 170 C92 176 140 194 182 224"/><path d="M46 210 C86 216 128 232 164 256"/><path d="M60 60 C110 78 168 108 214 150"/></g><g stroke="#e0524f" stroke-width="1.8" fill="none"><path d="M186 118 L150 92"/><path d="M204 122 L246 100"/><path d="M198 150 L232 168"/><path d="M176 156 L150 190"/><path d="M210 134 L252 138"/><path d="M182 132 L156 128"/><path d="M206 106 L214 72"/><path d="M196 168 L186 202"/></g><path d="M186 120 C172 116 164 128 168 142 C172 156 188 160 200 154 C212 148 214 132 206 122 C200 116 192 118 186 120 Z" fill="rgba(224,82,79,.24)" stroke="#e0524f" stroke-width="2.6"/><g fill="#e0524f"><circle cx="180" cy="132" r="1.6"/><circle cx="190" cy="128" r="1.4"/><circle cx="196" cy="138" r="1.7"/><circle cx="186" cy="144" r="1.4"/><circle cx="198" cy="148" r="1.5"/><circle cx="176" cy="140" r="1.3"/></g></g><text x="230" y="200" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Spiculated mass</text></svg>',

    // s2ck-0114 NEC: neonatal AXR, pneumatosis intestinalis
    's2ck-0114': '<svg viewBox="0 0 320 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="304" height="284" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><path d="M60 40 C48 110 48 200 66 262 M260 40 C272 110 272 200 254 262" stroke="rgba(205,216,229,.30)" stroke-width="1.4" fill="none"/><g stroke="rgba(205,216,229,.28)" stroke-width="1.2" fill="none"><path d="M64 66 C120 60 200 60 256 66"/><path d="M62 96 C120 90 200 90 258 96"/><path d="M60 200 C120 194 200 194 260 200"/></g><path d="M96 108 C78 120 74 150 88 174 C104 196 140 200 168 188 C186 178 188 152 176 128 C162 104 122 96 96 108 Z" fill="rgba(214,224,238,.08)" stroke="rgba(238,244,250,.9)" stroke-width="2.2"/><path d="M176 120 C202 116 234 128 244 152 C250 176 232 198 204 200 C184 200 172 184 170 164 C168 146 168 128 176 120 Z" fill="rgba(214,224,238,.08)" stroke="rgba(238,244,250,.9)" stroke-width="2.2"/><path d="M92 190 C110 214 148 224 182 216 C210 208 224 186 216 166" fill="none" stroke="rgba(210,220,232,.5)" stroke-width="2"/><path d="M100 124 C88 136 86 158 98 176 M112 116 C102 132 102 156 114 176 M126 114 C118 134 118 158 130 180 M142 116 C136 138 138 162 150 182 M158 122 C154 144 156 166 166 184" fill="none" stroke="#e0524f" stroke-width="2" stroke-opacity="0.85"/><g fill="none" stroke="#e0524f" stroke-width="1.6" stroke-opacity="0.8"><circle cx="108" cy="150" r="4"/><circle cx="124" cy="158" r="3.4"/><circle cx="140" cy="150" r="4.2"/><circle cx="150" cy="164" r="3"/><circle cx="120" cy="142" r="3"/><circle cx="196" cy="150" r="4"/><circle cx="210" cy="160" r="3.4"/><circle cx="222" cy="150" r="3.6"/><circle cx="206" cy="140" r="3"/></g></g><text x="150" y="248" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Pneumatosis</text></svg>',

    // s2ck-0120 threatened abortion / early IUP: TV US, sac + yolk sac
    's2ck-0120': '<svg viewBox="0 0 300 320" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="284" height="304" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><path d="M150 296 L36 74 A130 130 0 0 1 264 74 Z" fill="#06090d" stroke="rgba(205,216,229,.18)" stroke-width="1.2"/><path d="M96 200 A62 62 0 0 1 204 200" stroke="rgba(205,216,229,.14)" stroke-width="1" fill="none"/><path d="M70 140 A96 96 0 0 1 230 140" stroke="rgba(205,216,229,.14)" stroke-width="1" fill="none"/><path d="M74 150 C104 100 196 100 226 150 C232 200 206 244 172 258 L128 258 C94 244 68 200 74 150 Z" fill="rgba(214,224,238,.12)" stroke="rgba(238,244,250,.92)" stroke-width="2.2"/><path d="M110 158 C124 132 176 132 190 158 C196 182 184 204 164 210 L136 210 C116 204 104 182 110 158 Z" fill="rgba(205,216,229,.18)" stroke="rgba(210,220,232,.55)" stroke-width="1.4"/><circle cx="150" cy="176" r="30" fill="#06090d" stroke="#e0524f" stroke-width="3"/><circle cx="150" cy="176" r="34" fill="none" stroke="#e0524f" stroke-width="8" stroke-opacity="0.14"/><circle cx="162" cy="184" r="7" fill="#06090d" stroke="rgba(244,248,253,.95)" stroke-width="2.4"/><path d="M118 152 C104 148 92 152 88 162 C96 170 110 172 122 168 C126 162 124 156 118 152 Z" fill="rgba(150,190,220,.18)" stroke="rgba(210,220,232,.5)" stroke-width="1.4"/></g><text x="150" y="240" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Gestational sac</text><text x="182" y="182" font-family="sans-serif" font-size="10" fill="' + LBL + '" text-anchor="middle">Yolk</text><text x="92" y="140" font-family="sans-serif" font-size="10" fill="' + LBL + '" text-anchor="middle">Subchorionic</text></svg>',

    // s3-0101 ROC curve: sensitivity vs 1-specificity, AUC 0.88
    's3-0101': '<svg viewBox="0 0 320 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="304" height="284" rx="12" fill="#0a0f16" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><g stroke="rgba(205,216,229,.14)" stroke-width="1"><line x1="60" y1="60" x2="280" y2="60"/><line x1="60" y1="104" x2="280" y2="104"/><line x1="60" y1="148" x2="280" y2="148"/><line x1="60" y1="192" x2="280" y2="192"/><line x1="104" y1="40" x2="104" y2="236"/><line x1="148" y1="40" x2="148" y2="236"/><line x1="192" y1="40" x2="192" y2="236"/><line x1="236" y1="40" x2="236" y2="236"/></g><line x1="60" y1="236" x2="280" y2="236" stroke="rgba(238,244,250,.9)" stroke-width="1.8"/><line x1="60" y1="236" x2="60" y2="40" stroke="rgba(238,244,250,.9)" stroke-width="1.8"/><line x1="60" y1="236" x2="280" y2="40" stroke="rgba(210,220,232,.55)" stroke-width="1.6" stroke-dasharray="5 4"/><path d="M60 236 C64 130 110 70 168 58 C216 50 258 52 280 52 L280 40 L60 40 Z" fill="rgba(224,82,79,.10)" stroke="none"/><path d="M60 236 C64 130 110 70 168 58 C216 50 258 52 280 52" fill="none" stroke="#e0524f" stroke-width="3"/><g fill="rgba(214,224,238,.8)" font-family="sans-serif" font-size="11" text-anchor="middle"><text x="170" y="262">1 - Specificity</text></g><text x="30" y="140" font-family="sans-serif" font-size="11" fill="rgba(214,224,238,.8)" transform="rotate(-90 30 140)" text-anchor="middle">Sensitivity</text><text x="150" y="120" font-family="sans-serif" font-size="12" fill="#e0524f" text-anchor="middle">AUC 0.88</text></g></svg>',

    // s3-0102 Kaplan-Meier: two step survival curves + censor ticks
    's3-0102': '<svg viewBox="0 0 340 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="324" height="284" rx="12" fill="#0a0f16" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><g stroke="rgba(205,216,229,.14)" stroke-width="1"><line x1="56" y1="60" x2="304" y2="60"/><line x1="56" y1="104" x2="304" y2="104"/><line x1="56" y1="148" x2="304" y2="148"/><line x1="56" y1="192" x2="304" y2="192"/></g><line x1="56" y1="236" x2="304" y2="236" stroke="rgba(238,244,250,.9)" stroke-width="1.8"/><line x1="56" y1="236" x2="56" y2="40" stroke="rgba(238,244,250,.9)" stroke-width="1.8"/><polyline points="56,52 96,52 96,66 140,66 140,84 186,84 186,110 232,110 232,150 276,150 304,150" fill="none" stroke="#e0524f" stroke-width="3"/><polyline points="56,52 84,52 84,78 120,78 120,104 156,104 156,140 196,140 196,180 236,180 236,214 276,214 304,214" fill="none" stroke="rgba(238,244,250,.9)" stroke-width="2.2"/><g stroke="#e0524f" stroke-width="1.8"><line x1="118" y1="60" x2="118" y2="72"/><line x1="210" y1="104" x2="210" y2="116"/><line x1="256" y1="144" x2="256" y2="156"/></g><g stroke="rgba(214,224,238,.7)" stroke-width="1.6"><line x1="100" y1="72" x2="100" y2="84"/><line x1="176" y1="134" x2="176" y2="146"/><line x1="252" y1="208" x2="252" y2="220"/></g><text x="180" y="262" font-family="sans-serif" font-size="11" fill="rgba(214,224,238,.8)" text-anchor="middle">Time (months)</text><text x="30" y="140" font-family="sans-serif" font-size="11" fill="rgba(214,224,238,.8)" transform="rotate(-90 30 140)" text-anchor="middle">Survival</text><text x="250" y="130" font-family="sans-serif" font-size="11" fill="#e0524f">Treatment</text><text x="150" y="200" font-family="sans-serif" font-size="11" fill="rgba(214,224,238,.8)">Control</text></g></svg>',

    // s3-0123 subarachnoid hemorrhage: noncontrast head CT, basal cistern star
    's3-0123': '<svg viewBox="0 0 320 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="304" height="284" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><ellipse cx="160" cy="150" rx="132" ry="124" fill="none" stroke="rgba(244,248,253,.98)" stroke-width="4.5"/><ellipse cx="160" cy="150" rx="120" ry="112" fill="rgba(214,224,238,.10)" stroke="rgba(210,220,232,.55)" stroke-width="1.4"/><g stroke="rgba(205,216,229,.18)" stroke-width="1.1" fill="none"><path d="M74 100 q-8 10 0 20"/><path d="M62 150 q-8 8 0 18"/><path d="M78 206 q-8 8 0 18"/><path d="M246 100 q8 10 0 20"/><path d="M258 150 q8 8 0 18"/><path d="M242 206 q8 8 0 18"/></g><path d="M120 96 C130 118 130 150 122 176 M200 96 C190 118 190 150 198 176" stroke="rgba(205,216,229,.30)" stroke-width="1.2" fill="none"/><ellipse cx="140" cy="120" rx="12" ry="16" fill="#06090d" stroke="rgba(205,216,229,.4)" stroke-width="1.1"/><ellipse cx="180" cy="120" rx="12" ry="16" fill="#06090d" stroke="rgba(205,216,229,.4)" stroke-width="1.1"/><path d="M160 118 L146 150 L120 158 L140 178 L128 208 L160 194 L192 208 L180 178 L200 158 L174 150 Z" fill="rgba(224,82,79,.28)" stroke="#e0524f" stroke-width="2.8"/><path d="M132 156 C110 162 92 172 80 186" stroke="#e0524f" stroke-width="3" stroke-opacity="0.7" fill="none"/><path d="M188 156 C210 162 228 172 240 186" stroke="#e0524f" stroke-width="3" stroke-opacity="0.7" fill="none"/><path d="M160 118 L146 150 L120 158 L140 178 L128 208 L160 194 L192 208 L180 178 L200 158 L174 150 Z" fill="none" stroke="#e0524f" stroke-width="7" stroke-opacity="0.14"/></g><text x="160" y="240" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Basal cistern blood</text></svg>',

    // s3-0125 diverticulitis: noncontrast abdominal CT axial, sigmoid segment
    's3-0125': '<svg viewBox="0 0 320 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="304" height="284" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><ellipse cx="160" cy="150" rx="148" ry="118" fill="rgba(214,224,238,.05)" stroke="rgba(210,220,232,.40)" stroke-width="1.6"/><path d="M138 244 C150 232 172 232 184 244 C180 258 142 258 138 244 Z" fill="rgba(205,216,229,.10)" stroke="rgba(205,216,229,.30)" stroke-width="1.2"/><line x1="160" y1="242" x2="160" y2="262" stroke="rgba(205,216,229,.30)" stroke-width="2"/><ellipse cx="150" cy="66" rx="30" ry="16" fill="rgba(150,190,220,.10)" stroke="rgba(210,220,232,.5)" stroke-width="1.4"/><path d="M226 96 C210 130 210 176 226 208" stroke="rgba(205,216,229,.4)" stroke-width="1.4" fill="none"/><path d="M96 100 C82 130 82 176 98 206" stroke="rgba(205,216,229,.4)" stroke-width="1.4" fill="none"/><g stroke="rgba(224,82,79,.5)" stroke-width="1.3" fill="none"><path d="M92 168 l-16 8"/><path d="M96 188 l-18 6"/><path d="M104 206 l-14 14"/><path d="M120 214 l-8 18"/><path d="M84 148 l-18 2"/></g><path d="M92 138 C74 152 70 186 84 210 C98 232 128 236 148 222 C160 212 158 190 148 172 C138 154 114 130 92 138 Z" fill="rgba(224,82,79,.14)" stroke="#e0524f" stroke-width="6"/><path d="M104 152 C92 164 90 190 100 208 C112 224 134 226 148 216" fill="none" stroke="rgba(150,190,220,.14)" stroke-width="9"/><g fill="#06090d" stroke="#e0524f" stroke-width="1.8"><circle cx="80" cy="164" r="7"/><circle cx="86" cy="200" r="6"/><circle cx="128" cy="224" r="6.5"/></g></g><text x="150" y="250" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Inflamed sigmoid</text></svg>',

    // s3-0137 small bowel obstruction: supine + upright, air-fluid levels
    's3-0137': '<svg viewBox="0 0 360 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="344" height="284" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="34" width="150" height="234" rx="8" fill="#06090d" stroke="rgba(205,216,229,.16)"/><rect x="190" y="34" width="150" height="234" rx="8" fill="#06090d" stroke="rgba(205,216,229,.16)"/><g stroke="rgba(238,244,250,.9)" stroke-width="2" fill="none"><path d="M44 90 C90 84 128 90 146 108 C130 120 92 122 60 116 C48 110 44 100 44 90 Z"/><path d="M46 128 C92 122 130 128 148 146 C132 158 94 160 62 154 C50 148 46 138 46 128 Z"/><path d="M44 166 C90 160 128 166 146 184 C130 196 92 198 60 192 C48 186 44 176 44 166 Z"/><path d="M48 206 C90 200 126 206 142 222 C128 234 94 236 64 230 C52 224 48 216 48 206 Z"/></g><g stroke="rgba(205,216,229,.35)" stroke-width="0.9" fill="none"><path d="M60 96 h72 M60 104 h74 M58 134 h76 M58 142 h74 M58 172 h76 M58 180 h74"/></g><rect x="204" y="70" width="120" height="42" rx="6" fill="none" stroke="rgba(238,244,250,.9)" stroke-width="2"/><rect x="214" y="118" width="108" height="40" rx="6" fill="none" stroke="rgba(238,244,250,.9)" stroke-width="2"/><rect x="222" y="164" width="96" height="38" rx="6" fill="none" stroke="rgba(238,244,250,.9)" stroke-width="2"/><rect x="230" y="208" width="84" height="34" rx="6" fill="none" stroke="rgba(238,244,250,.9)" stroke-width="2"/><rect x="204" y="92" width="120" height="20" fill="rgba(224,82,79,.16)"/><rect x="214" y="140" width="108" height="18" fill="rgba(224,82,79,.16)"/><rect x="222" y="184" width="96" height="18" fill="rgba(224,82,79,.16)"/><rect x="230" y="224" width="84" height="18" fill="rgba(224,82,79,.16)"/><g stroke="#e0524f" stroke-width="2.4"><line x1="204" y1="92" x2="324" y2="92"/><line x1="214" y1="140" x2="322" y2="140"/><line x1="222" y1="184" x2="318" y2="184"/><line x1="230" y1="224" x2="314" y2="224"/></g></g><text x="95" y="256" font-family="sans-serif" font-size="11" fill="' + LBL + '" text-anchor="middle">Supine</text><text x="265" y="256" font-family="sans-serif" font-size="11" fill="' + LBL + '" text-anchor="middle">Upright</text><text x="265" y="56" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Air-fluid levels</text></svg>',

    // s3-0138 diverticulitis: contrast abdominal CT (coronal), sigmoid thickening
    's3-0138': '<svg viewBox="0 0 280 340" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="264" height="324" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><path d="M40 40 C28 130 30 240 48 302 M240 40 C252 130 250 240 232 302" stroke="rgba(205,216,229,.28)" stroke-width="1.4" fill="none"/><path d="M60 70 C52 110 52 150 60 186 C74 196 96 194 106 178 C112 148 110 108 100 78 C90 62 70 62 60 70 Z" fill="rgba(150,190,220,.08)" stroke="rgba(238,244,250,.85)" stroke-width="2"/><path d="M180 70 C172 108 174 148 184 178 C196 194 218 196 226 182 C232 150 230 110 220 76 C210 62 190 60 180 70 Z" fill="rgba(150,190,220,.08)" stroke="rgba(238,244,250,.85)" stroke-width="2"/><path d="M116 96 C132 92 150 92 164 96 C170 130 170 168 160 200 C148 208 132 208 120 200 C110 168 110 130 116 96 Z" fill="rgba(150,190,220,.06)" stroke="rgba(210,220,232,.5)" stroke-width="1.6"/><g stroke="rgba(224,82,79,.5)" stroke-width="1.3" fill="none"><path d="M74 232 l-16 6"/><path d="M84 254 l-18 6"/><path d="M100 268 l-8 16"/><path d="M66 214 l-16 2"/><path d="M118 268 l2 16"/></g><path d="M76 206 C58 222 56 262 74 288 C90 308 124 310 144 292 C156 280 152 254 140 236 C128 218 100 198 76 206 Z" fill="rgba(224,82,79,.16)" stroke="#e0524f" stroke-width="6.5"/><path d="M90 220 C74 234 72 266 88 288 C102 304 128 304 142 294" fill="none" stroke="rgba(224,82,79,.42)" stroke-width="10"/><path d="M96 224 C82 236 82 262 94 282 C106 296 128 296 140 288" fill="none" stroke="#06090d" stroke-width="8"/><g fill="#06090d" stroke="#e0524f" stroke-width="1.8"><circle cx="62" cy="234" r="7"/><circle cx="70" cy="272" r="6.5"/><circle cx="118" cy="300" r="6.5"/></g></g><text x="112" y="322" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Inflamed sigmoid</text></svg>',

    // s3-0141 intussusception: abdominal US, target / doughnut sign
    's3-0141': '<svg viewBox="0 0 320 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none"><rect x="8" y="8" width="304" height="284" rx="12" fill="#06090d" stroke="rgba(255,255,255,.08)"/><g stroke-linecap="round" stroke-linejoin="round"><path d="M40 30 L280 30 L246 262 A146 146 0 0 1 74 262 Z" fill="#06090d" stroke="rgba(205,216,229,.16)" stroke-width="1.2"/><path d="M92 110 A104 104 0 0 0 228 110" stroke="rgba(205,216,229,.1)" stroke-width="1" fill="none"/><path d="M74 176 A146 146 0 0 0 246 176" stroke="rgba(205,216,229,.1)" stroke-width="1" fill="none"/><circle cx="160" cy="156" r="76" fill="rgba(214,224,238,.05)" stroke="rgba(238,244,250,.92)" stroke-width="2.4"/><circle cx="160" cy="156" r="62" fill="#06090d" stroke="rgba(210,220,232,.55)" stroke-width="2"/><circle cx="160" cy="156" r="48" fill="rgba(214,224,238,.07)" stroke="rgba(238,244,250,.85)" stroke-width="2"/><circle cx="160" cy="156" r="34" fill="#06090d" stroke="rgba(210,220,232,.55)" stroke-width="1.8"/><circle cx="160" cy="156" r="20" fill="rgba(224,82,79,.22)" stroke="#e0524f" stroke-width="2.8"/><circle cx="160" cy="156" r="9" fill="#06090d" stroke="#e0524f" stroke-width="1.8"/><g stroke="rgba(205,216,229,.22)" stroke-width="1" fill="none"><path d="M160 60 L160 40"/><path d="M236 156 L256 156"/></g></g><text x="160" y="270" font-family="sans-serif" font-size="11" fill="#e0524f" text-anchor="middle">Target sign</text></svg>'
  };

  Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, R);
})();
