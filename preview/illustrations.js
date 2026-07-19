/*
 * Rounds Codex - USMLE Mode illustration library
 * Original, clearly-schematic SVGs keyed by question id. These are EDUCATIONAL
 * SCHEMATICS, never photo-real and never presented as real clinical images.
 * The engine renders RC_ILLUS[id] inside a labeled figure when a question has an
 * image/ecg placeholder; items without an entry fall back to a descriptive frame.
 * Colors use currentColor / low-opacity so they adapt to light and dark themes.
 */
(function () {
  "use strict";

  // ---- ECG helpers ----------------------------------------------------------
  function ecgFrame(inner, w) {
    w = w || 480;
    var grid = '';
    for (var x = 0; x <= w; x += 16) grid += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="150" stroke="currentColor" stroke-opacity="0.08"/>';
    for (var y = 0; y <= 150; y += 15) grid += '<line x1="0" y1="' + y + '" x2="' + w + '" y2="' + y + '" stroke="currentColor" stroke-opacity="0.08"/>';
    return '<svg viewBox="0 0 ' + w + ' 168" role="img" width="' + w + '" xmlns="http://www.w3.org/2000/svg">' +
      grid + inner + '</svg>';
  }
  function trace(points) {
    return '<polyline fill="none" stroke="#e0524f" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" points="' + points + '"/>';
  }
  function ecgLabel(t) {
    return '<text x="8" y="164" font-size="11" font-family="sans-serif" fill="currentColor" fill-opacity="0.75">' + t + '</text>';
  }
  // build a normal beat starting at x0 on baseline yb, returns point string
  function beat(x0, yb, o) {
    o = o || {};
    var p = [];
    p.push([x0, yb], [x0 + 4, yb]);
    if (!o.noP) p.push([x0 + 8, yb - 6], [x0 + 12, yb]); // P wave
    if (o.delta) { // WPW: short PR + slurred delta upstroke into R
      p.push([x0 + 13, yb], [x0 + 20, yb - 10], [x0 + 26, yb - 40], [x0 + 30, yb + 10], [x0 + 34, yb]);
    } else {
      p.push([x0 + 18, yb], [x0 + 21, yb + 5], [x0 + 25, yb - 40], [x0 + 29, yb + 12], [x0 + 33, yb]);
    }
    var stY = yb - (o.stElev || 0); // ST elevation raises the segment (smaller y)
    p.push([x0 + 37, stY]);
    p.push([x0 + 45, stY - 8], [x0 + 52, stY - 10], [x0 + 58, stY]); // T wave
    p.push([x0 + 60, yb]);
    return p.map(function (a) { return a[0] + ',' + a[1]; }).join(' ');
  }
  function strip(yb, opts, n, gap) {
    n = n || 6; gap = gap || 62;
    var pts = [], x = 8;
    for (var i = 0; i < n; i++) { pts.push(beat(x, yb, opts)); x += gap + ((opts && opts.irregular) ? (i % 2 ? -14 : 16) : 0); }
    return pts.join(' ');
  }

  var ECG = {};
  // inferior STEMI: ST elevation in II/III/aVF
  ECG.inferiorStemi = ecgFrame(trace(strip(75, { stElev: 14 }, 6, 62)) +
    ecgLabel('Leads II, III, aVF - ST-segment elevation'), 480);
  // WPW: short PR + delta wave
  ECG.wpw = ecgFrame(trace(strip(78, { delta: true }, 6, 62)) +
    ecgLabel('Short PR interval with slurred delta wave (pre-excitation)'), 480);
  // atrial fibrillation: no P waves, fibrillatory baseline, irregular R-R
  ECG.afib = ecgFrame(
    '<path d="M8 78 q6 -4 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0 t12 0" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1"/>' +
    trace(strip(78, { noP: true, irregular: true }, 6, 64)) +
    ecgLabel('Irregularly irregular, no P waves, fibrillatory baseline'), 480);
  // prolonged QT with torsades de pointes
  (function () {
    var pre = beat(8, 78, {}) + ' ' + beat(78, 78, {});
    // long QT: stretch T far from QRS on 2nd beat then a twisting polymorphic run
    var tors = '';
    var x = 150, amp = 6, up = true;
    for (var i = 0; i < 26; i++) {
      amp = 6 + Math.round(20 * Math.sin(i / 4)); if (amp < 4) amp = 4;
      var y = 78 + (up ? -amp : amp); up = !up;
      tors += (x) + ',' + y + ' '; x += 12;
    }
    ECG.longQtTorsades = ecgFrame(trace(pre + ' 150,78 ' + tors) +
      ecgLabel('Prolonged QT -> polymorphic VT (torsades de pointes)'), 480);
  })();

  // ---- schematic helpers ----------------------------------------------------
  function fig(vb, inner, w) {
    return '<svg viewBox="0 0 ' + vb + '" role="img" width="' + (w || 360) + '" xmlns="http://www.w3.org/2000/svg" fill="none">' + inner + '</svg>';
  }
  var CC = 'currentColor';

  var SCH = {};

  // maternal / mitochondrial pedigree: affected females -> all offspring; affected males -> none
  SCH.pedigreeMaternal = fig('0 0 360 200',
    // legend
    '<circle cx="255" cy="18" r="8" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<rect x="292" y="10" width="16" height="16" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<text x="266" y="22" font-size="10" fill="' + CC + '" font-family="sans-serif">female</text>' +
    '<text x="312" y="22" font-size="10" fill="' + CC + '" font-family="sans-serif">male</text>' +
    // Gen I: affected mother (filled circle) x unaffected father
    '<circle cx="70" cy="45" r="12" fill="' + CC + '"/>' +
    '<rect x="98" y="33" width="24" height="24" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<line x1="82" y1="45" x2="98" y2="45" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<line x1="98" y1="45" x2="110" y2="45" stroke="' + CC + '" stroke-width="0"/>' +
    // drop to gen II
    '<line x1="100" y1="57" x2="100" y2="80" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<line x1="45" y1="80" x2="165" y2="80" stroke="' + CC + '" stroke-width="1.5"/>' +
    // gen II children of affected mother: all affected (filled)
    '<line x1="45" y1="80" x2="45" y2="92" stroke="' + CC + '" stroke-width="1.5"/><circle cx="45" cy="104" r="11" fill="' + CC + '"/>' +
    '<line x1="100" y1="80" x2="100" y2="92" stroke="' + CC + '" stroke-width="1.5"/><rect x="88" y="92" width="22" height="22" fill="' + CC + '"/>' +
    '<line x1="165" y1="80" x2="165" y2="92" stroke="' + CC + '" stroke-width="1.5"/><circle cx="165" cy="104" r="11" fill="' + CC + '"/>' +
    // affected male (gen II, filled square at 100) mates unaffected female -> gen III unaffected
    '<rect x="200" y="92" width="22" height="22" fill="' + CC + '"/>' +
    '<circle cx="255" cy="104" r="11" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<line x1="222" y1="103" x2="244" y2="103" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<line x1="233" y1="114" x2="233" y2="140" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<line x1="205" y1="140" x2="285" y2="140" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<line x1="205" y1="140" x2="205" y2="152" stroke="' + CC + '" stroke-width="1.5"/><circle cx="205" cy="164" r="11" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<line x1="285" y1="140" x2="285" y2="152" stroke="' + CC + '" stroke-width="1.5"/><rect x="274" y="152" width="22" height="22" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<text x="8" y="192" font-size="10" fill="' + CC + '" fill-opacity="0.7" font-family="sans-serif">Affected mother -> all children affected; affected father -> none (filled = affected)</text>');

  // Lewy body: pigmented neuron with round eosinophilic inclusion + pale halo
  SCH.lewyBody = fig('0 0 300 200',
    '<path d="M150 40 q60 0 70 60 q10 60 -40 80 q-40 16 -70 -6 q-40 -30 -30 -80 q10 -54 70 -54 z" stroke="' + CC + '" stroke-width="1.5" fill="' + CC + '" fill-opacity="0.06"/>' +
    '<circle cx="120" cy="95" r="14" stroke="' + CC + '" stroke-width="1.2" fill="' + CC + '" fill-opacity="0.15"/>' + // nucleus
    '<circle cx="168" cy="120" r="26" fill="#e0524f" fill-opacity="0.20" stroke="#e0524f" stroke-width="1.2"/>' + // halo
    '<circle cx="168" cy="120" r="15" fill="#e0524f" fill-opacity="0.55"/>' + // dense core
    '<text x="150" y="188" text-anchor="middle" font-size="10" fill="' + CC + '" fill-opacity="0.7" font-family="sans-serif">Eosinophilic cytoplasmic inclusion with pale halo (Lewy body)</text>');

  // cherry-red spot at macula
  SCH.cherryRed = fig('0 0 240 240',
    '<circle cx="120" cy="115" r="95" fill="#e7b7a0" fill-opacity="0.28" stroke="' + CC + '" stroke-width="1"/>' +
    '<circle cx="120" cy="115" r="16" fill="#d33" fill-opacity="0.85"/>' +
    // vessels radiating
    '<g stroke="#c0392b" stroke-opacity="0.5" stroke-width="2" fill="none">' +
    '<path d="M120 115 C90 70 70 60 45 45"/><path d="M120 115 C150 70 170 60 195 45"/>' +
    '<path d="M120 115 C90 160 70 175 50 195"/><path d="M120 115 C150 160 172 175 192 196"/></g>' +
    '<text x="120" y="230" text-anchor="middle" font-size="10" fill="' + CC + '" fill-opacity="0.7" font-family="sans-serif">Pale retina with a cherry-red macula</text>');

  // leukocoria: two eyes, one with white pupil
  SCH.leukocoria = fig('0 0 320 160',
    '<g stroke="' + CC + '" stroke-width="1.5">' +
    '<ellipse cx="90" cy="80" rx="60" ry="34" fill="none"/>' +
    '<circle cx="90" cy="80" r="24" fill="#7a4a2b" fill-opacity="0.35"/>' +
    '<circle cx="90" cy="80" r="11" fill="#d33" fill-opacity="0.7"/>' + // normal red reflex
    '<ellipse cx="230" cy="80" rx="60" ry="34" fill="none"/>' +
    '<circle cx="230" cy="80" r="24" fill="#7a4a2b" fill-opacity="0.35"/>' +
    '<circle cx="230" cy="80" r="12" fill="#f4f4f4"/>' + // white pupil
    '</g>' +
    '<text x="160" y="150" text-anchor="middle" font-size="10" fill="' + CC + '" fill-opacity="0.7" font-family="sans-serif">Normal red reflex (left) vs white pupillary reflex / leukocoria (right)</text>');

  // boot-shaped heart (Tetralogy) CXR silhouette
  SCH.bootHeart = fig('0 0 260 240',
    '<rect x="10" y="10" width="240" height="210" rx="8" stroke="' + CC + '" stroke-opacity="0.25" stroke-width="1"/>' +
    // thorax hint
    '<path d="M40 30 q90 -14 180 0" stroke="' + CC + '" stroke-opacity="0.2" fill="none"/>' +
    // boot-shaped cardiac silhouette with upturned apex
    '<path d="M120 70 q60 4 66 70 q4 44 -34 60 q-30 12 -46 -6 q-8 20 -36 18 q-34 -2 -34 -30 q0 -30 40 -34 q-14 -40 22 -70 q28 -22 56 -8 z" ' +
    'fill="' + CC + '" fill-opacity="0.10" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<text x="130" y="232" text-anchor="middle" font-size="10" fill="' + CC + '" fill-opacity="0.7" font-family="sans-serif">Boot-shaped heart with upturned apex, reduced pulmonary markings</text>');

  // Reed-Sternberg: binucleate owl-eye cell
  SCH.reedSternberg = fig('0 0 300 200',
    // small reactive lymphocytes
    '<g fill="' + CC + '" fill-opacity="0.30">' +
    '<circle cx="30" cy="30" r="7"/><circle cx="260" cy="40" r="6"/><circle cx="40" cy="160" r="6"/><circle cx="270" cy="150" r="7"/><circle cx="150" cy="20" r="6"/><circle cx="150" cy="185" r="6"/></g>' +
    '<circle cx="150" cy="100" r="60" fill="' + CC + '" fill-opacity="0.06" stroke="' + CC + '" stroke-width="1.5"/>' + // cell
    '<circle cx="122" cy="98" r="26" fill="' + CC + '" fill-opacity="0.12" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<circle cx="178" cy="98" r="26" fill="' + CC + '" fill-opacity="0.12" stroke="' + CC + '" stroke-width="1.5"/>' +
    '<circle cx="122" cy="98" r="7" fill="#e0524f"/><circle cx="178" cy="98" r="7" fill="#e0524f"/>' + // owl-eye nucleoli
    '<text x="150" y="190" text-anchor="middle" font-size="10" fill="' + CC + '" fill-opacity="0.7" font-family="sans-serif">Binucleate "owl-eye" Reed-Sternberg cell</text>');

  // ---- registry: question id -> svg ----------------------------------------
  window.RC_ILLUS = {
    // ECGs
    "s1-0012": ECG.longQtTorsades,
    "s1-0061": ECG.inferiorStemi,
    "s1-0136": ECG.wpw,
    "s2ck-0001": ECG.inferiorStemi,
    "s2ck-0009": ECG.afib,
    // schematics (starter set)
    "s1-0002": SCH.pedigreeMaternal,
    "s1-0006": SCH.lewyBody,
    "s1-0021": SCH.reedSternberg, // starry-sky placeholder cell context; RS reused visually as lymphoid cell (see note)
    "s1-0036": SCH.bootHeart,
    "s1-0101": SCH.cherryRed,
    "s1-0071": SCH.leukocoria,
    "s1-0130": SCH.reedSternberg
  };
  // Note: s1-0021 (Burkitt starry-sky) needs its own art; temporarily unmapped-quality.
  delete window.RC_ILLUS["s1-0021"];
})();
