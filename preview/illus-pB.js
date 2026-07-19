/*
 * Rounds Codex - USMLE Mode illustration library (pack B)
 * Original, clearly-schematic medical-textbook SVGs keyed by question id.
 * EDUCATIONAL SCHEMATICS, never photo-real and never presented as real clinical
 * images. The app tags them "SCHEMATIC" and adds its own caption, so no
 * descriptive caption sentences are embedded inside these SVGs (only tiny
 * part-labels). Light structures on a dark card; radiographs emulate a faint
 * film. The accent #e0524f marks only the key pathologic feature.
 */
Object.assign(window.RC_ILLUS = window.RC_ILLUS || {}, {

  // s1-0056 Alzheimer cortical silver stain: extracellular neuritic (senile)
  // PLAQUES - dense amyloid core with radiating dystrophic neurites - and
  // intracellular flame-shaped NEUROFIBRILLARY TANGLES within neurons.
  "s1-0056": '<svg viewBox="0 0 320 264" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="8" y="8" width="304" height="248" rx="14" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.16)"/>' +
    // neuropil background wisps
    '<g stroke="rgba(205,216,229,0.12)" stroke-width="1" fill="none">' +
    '<path d="M24 60 C70 52 120 74 170 58 C220 44 270 66 300 54"/>' +
    '<path d="M20 150 C64 140 118 162 168 148 C224 132 270 152 302 142"/>' +
    '<path d="M22 210 C70 200 130 220 180 206 C232 192 276 208 300 200"/></g>' +
    // background normal pyramidal neurons (light)
    '<g stroke="rgba(205,216,229,0.34)" stroke-width="1.2" fill="rgba(214,224,238,0.05)">' +
    '<path d="M52 66 C46 56 58 46 66 54 C72 60 64 72 60 74 Z"/>' +
    '<path d="M272 74 C266 64 278 54 286 62 C292 68 284 80 280 82 Z"/>' +
    '<path d="M64 214 C58 204 70 194 78 202 C84 208 76 220 72 222 Z"/>' +
    '<path d="M268 206 C262 196 274 186 282 194 C288 200 280 212 276 214 Z"/></g>' +
    '<g fill="rgba(205,216,229,0.4)"><circle cx="59" cy="62" r="2.4"/><circle cx="279" cy="70" r="2.4"/><circle cx="71" cy="210" r="2.4"/><circle cx="275" cy="202" r="2.4"/></g>' +
    // apical dendrites of background neurons
    '<g stroke="rgba(205,216,229,0.3)" stroke-width="1" fill="none"><path d="M62 48 L58 34"/><path d="M282 56 L286 42"/><path d="M74 196 L80 182"/><path d="M278 188 L284 176"/></g>' +
    // ---- neuritic PLAQUE A (large) ----
    '<circle cx="108" cy="122" r="38" fill="rgba(224,82,79,0.06)"/>' +
    '<g stroke="#e0524f" stroke-opacity="0.55" stroke-width="1.5" fill="none">' +
    '<path d="M122 122 Q131 120 138 122"/><path d="M120 128 Q129 132 135 137"/><path d="M115 133 Q120 141 123 148"/>' +
    '<path d="M108 135 Q108 144 108 152"/><path d="M101 133 Q96 141 93 148"/><path d="M96 128 Q87 132 82 137"/>' +
    '<path d="M94 122 Q85 120 78 122"/><path d="M96 116 Q87 108 82 105"/><path d="M101 111 Q96 103 93 96"/>' +
    '<path d="M108 109 Q108 100 108 92"/><path d="M115 111 Q120 103 123 96"/><path d="M120 116 Q129 108 135 105"/></g>' +
    '<g fill="#e0524f" fill-opacity="0.5"><circle cx="139" cy="122" r="2"/><circle cx="136" cy="138" r="2"/><circle cx="124" cy="149" r="2"/><circle cx="108" cy="153" r="2"/><circle cx="92" cy="149" r="2"/><circle cx="81" cy="138" r="2"/><circle cx="77" cy="122" r="2"/><circle cx="81" cy="104" r="2"/><circle cx="92" cy="95" r="2"/><circle cx="108" cy="91" r="2"/><circle cx="124" cy="95" r="2"/><circle cx="136" cy="104" r="2"/></g>' +
    '<circle cx="108" cy="122" r="12" fill="#e0524f" fill-opacity="0.5" stroke="#e0524f" stroke-opacity="0.85" stroke-width="1.4"/>' +
    '<g fill="#e0524f" fill-opacity="0.75"><circle cx="104" cy="119" r="1.7"/><circle cx="112" cy="120" r="1.7"/><circle cx="107" cy="126" r="1.7"/></g>' +
    '<text x="108" y="176" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">neuritic plaque</text>' +
    // ---- neuritic PLAQUE B (small) ----
    '<circle cx="248" cy="176" r="24" fill="rgba(224,82,79,0.06)"/>' +
    '<g stroke="#e0524f" stroke-opacity="0.5" stroke-width="1.3" fill="none">' +
    '<path d="M259 176 L269 176"/><path d="M256 183 L263 191"/><path d="M248 186 L248 196"/><path d="M240 183 L233 191"/><path d="M237 176 L227 176"/><path d="M240 169 L233 161"/><path d="M248 166 L248 156"/><path d="M256 169 L263 161"/></g>' +
    '<circle cx="248" cy="176" r="8" fill="#e0524f" fill-opacity="0.5" stroke="#e0524f" stroke-opacity="0.8" stroke-width="1.2"/>' +
    // ---- flame-shaped NEUROFIBRILLARY TANGLE neuron 1 ----
    '<path d="M186 128 C171 120 170 92 186 72 C202 92 201 120 186 128 Z" fill="rgba(224,82,79,0.13)" stroke="#e0524f" stroke-opacity="0.75" stroke-width="1.5"/>' +
    '<path d="M186 72 L188 52" stroke="#e0524f" stroke-opacity="0.6" stroke-width="1.2"/>' +
    '<path d="M180 126 L170 140" stroke="#e0524f" stroke-opacity="0.55" stroke-width="1.2"/><path d="M192 126 L202 140" stroke="#e0524f" stroke-opacity="0.55" stroke-width="1.2"/>' +
    '<g stroke="#e0524f" stroke-opacity="0.7" stroke-width="1.2" fill="none">' +
    '<path d="M182 122 C177 106 190 98 184 82"/><path d="M188 124 C184 108 194 100 190 84"/><path d="M186 120 C183 106 187 98 186 84"/></g>' +
    '<circle cx="191" cy="112" r="3.4" fill="#e0524f" fill-opacity="0.45"/>' +
    '<text x="186" y="46" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">tangle</text>' +
    // ---- flame-shaped NEUROFIBRILLARY TANGLE neuron 2 ----
    '<path d="M150 210 C136 203 135 178 150 160 C165 178 164 203 150 210 Z" fill="rgba(224,82,79,0.13)" stroke="#e0524f" stroke-opacity="0.7" stroke-width="1.4"/>' +
    '<path d="M150 160 L151 144" stroke="#e0524f" stroke-opacity="0.55" stroke-width="1.1"/>' +
    '<g stroke="#e0524f" stroke-opacity="0.65" stroke-width="1.1" fill="none">' +
    '<path d="M147 205 C143 190 154 183 149 169"/><path d="M153 206 C149 191 157 184 153 170"/></g>' +
    '<circle cx="154" cy="196" r="3" fill="#e0524f" fill-opacity="0.4"/>' +
    '</g></svg>',

  // s1-0060 Melanoma: pigmented skin lesion illustrating the ABCDE features -
  // Asymmetry, irregular notched Border, several Colours, ~8 mm Diameter with a
  // scale bar - on textured surrounding skin.
  "s1-0060": '<svg viewBox="0 0 320 260" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="8" y="8" width="304" height="244" rx="14" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.16)"/>' +
    // surrounding skin texture (fine dermatoglyphic lines)
    '<g stroke="rgba(205,216,229,0.12)" stroke-width="1" fill="none">' +
    '<path d="M20 46 C90 40 170 52 300 42"/><path d="M20 74 C90 68 180 80 300 70"/>' +
    '<path d="M20 196 C100 190 190 202 300 192"/><path d="M20 224 C100 218 190 228 300 220"/>' +
    '<path d="M40 20 C34 90 46 170 38 244"/><path d="M282 20 C276 90 288 170 280 244"/></g>' +
    // lesion overall irregular ASYMMETRIC, NOTCHED border (bulkier on the left)
    '<path d="M96 96 C70 92 58 118 66 140 C58 164 84 186 116 184 ' +
    'C132 200 168 196 182 178 C214 182 238 160 230 134 ' +
    'C246 116 236 86 208 84 C190 66 150 66 138 86 C122 78 106 82 96 96 Z" ' +
    'fill="rgba(74,52,34,0.55)" stroke="rgba(232,238,246,0.85)" stroke-width="1.6"/>' +
    // colour variegation - brown/tan/near-black patches within
    '<g stroke="none">' +
    '<path d="M92 108 C78 112 74 132 88 140 C104 146 118 130 110 116 C104 104 100 104 92 108 Z" fill="rgba(168,120,78,0.6)"/>' +
    '<path d="M132 100 C118 104 116 124 132 130 C150 134 160 118 150 106 C144 98 140 96 132 100 Z" fill="rgba(120,84,52,0.7)"/>' +
    '<path d="M170 120 C158 122 152 140 166 150 C184 158 202 144 196 126 C190 112 182 116 170 120 Z" fill="rgba(52,40,30,0.8)"/>' +
    '<path d="M108 148 C98 152 98 168 112 172 C128 174 136 160 126 150 C120 144 116 144 108 148 Z" fill="rgba(96,70,44,0.65)"/>' +
    '<path d="M186 150 C176 154 176 170 190 174 C206 176 214 162 204 152 C198 146 194 146 186 150 Z" fill="rgba(140,100,64,0.6)"/></g>' +
    // "angry" foci - accent (irregular colour / regression)
    '<path d="M150 138 C142 140 140 152 150 158 C162 162 170 150 162 140 C158 134 156 134 150 138 Z" fill="#e0524f" fill-opacity="0.4" stroke="#e0524f" stroke-opacity="0.6" stroke-width="1"/>' +
    '<circle cx="112" cy="128" r="5" fill="#e0524f" fill-opacity="0.42"/>' +
    // scale bar for Diameter
    '<line x1="66" y1="220" x2="130" y2="220" stroke="rgba(210,220,232,0.75)" stroke-width="1.6"/>' +
    '<line x1="66" y1="215" x2="66" y2="225" stroke="rgba(210,220,232,0.75)" stroke-width="1.6"/>' +
    '<line x1="130" y1="215" x2="130" y2="225" stroke="rgba(210,220,232,0.75)" stroke-width="1.6"/>' +
    '<text x="98" y="236" text-anchor="middle" font-size="10" fill="rgba(210,220,232,0.7)" font-family="sans-serif">8 mm</text>' +
    '<text x="228" y="220" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">irregular border</text>' +
    '</g></svg>',

  // s1-0063 Sarcoidosis PA chest radiograph: film-style with symmetric BILATERAL
  // HILAR lymphadenopathy (lobulated enlarged hilar shadows), normal-size heart,
  // rib cage / mediastinum context.
  "s1-0063": '<svg viewBox="0 0 300 320" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<rect x="6" y="6" width="288" height="308" rx="10" fill="#0a0f16" stroke="rgba(255,255,255,0.08)"/>' +
    '<g stroke-linecap="round" stroke-linejoin="round" fill="none">' +
    // spine / vertebral column (faint)
    '<line x1="150" y1="40" x2="150" y2="252" stroke="rgba(205,216,229,0.16)" stroke-width="10"/>' +
    '<g stroke="rgba(205,216,229,0.1)" stroke-width="1"><line x1="140" y1="70" x2="160" y2="70"/><line x1="140" y1="96" x2="160" y2="96"/><line x1="140" y1="122" x2="160" y2="122"/><line x1="140" y1="148" x2="160" y2="148"/><line x1="140" y1="174" x2="160" y2="174"/><line x1="140" y1="200" x2="160" y2="200"/></g>' +
    // trachea lucency
    '<path d="M150 40 L150 92" stroke="rgba(10,15,22,0.9)" stroke-width="5"/>' +
    '<path d="M144 44 L144 90 M156 44 L156 90" stroke="rgba(205,216,229,0.22)" stroke-width="1"/>' +
    // clavicles
    '<path d="M58 74 Q102 60 148 72" stroke="rgba(205,216,229,0.4)" stroke-width="2"/>' +
    '<path d="M152 72 Q198 60 242 74" stroke="rgba(205,216,229,0.4)" stroke-width="2"/>' +
    // rib cage - posterior ribs, both sides
    '<g stroke="rgba(205,216,229,0.28)" stroke-width="1.6">' +
    '<path d="M148 92 Q92 96 52 132"/><path d="M148 120 Q86 124 44 166"/><path d="M148 148 Q84 154 42 198"/><path d="M150 176 Q88 184 50 226"/><path d="M150 202 Q96 212 64 246"/>' +
    '<path d="M152 92 Q208 96 248 132"/><path d="M152 120 Q214 124 256 166"/><path d="M152 148 Q216 154 258 198"/><path d="M150 176 Q212 184 250 226"/><path d="M150 202 Q204 212 236 246"/></g>' +
    // aortic knob / mediastinal contour
    '<path d="M132 150 Q124 138 132 128" stroke="rgba(205,216,229,0.4)" stroke-width="1.6"/>' +
    // heart - NORMAL size cardiac silhouette
    '<path d="M150 152 C130 154 118 176 116 206 C115 228 130 244 150 246" stroke="rgba(232,238,246,0.6)" stroke-width="2"/>' +
    '<path d="M150 152 C168 154 177 172 179 192 C180 212 172 232 150 244" stroke="rgba(232,238,246,0.6)" stroke-width="2"/>' +
    // diaphragm domes + costophrenic angles
    '<path d="M56 254 Q104 236 150 250" stroke="rgba(205,216,229,0.45)" stroke-width="2"/>' +
    '<path d="M150 250 Q206 232 250 254" stroke="rgba(205,216,229,0.45)" stroke-width="2"/>' +
    // ---- BILATERAL HILAR lymphadenopathy (lobulated, enlarged) - accent ----
    '<g fill="#e0524f" fill-opacity="0.22" stroke="#e0524f" stroke-opacity="0.4" stroke-width="1">' +
    '<circle cx="112" cy="150" r="13"/><circle cx="126" cy="146" r="12"/><circle cx="130" cy="162" r="13"/><circle cx="116" cy="176" r="14"/><circle cx="102" cy="166" r="12"/><circle cx="120" cy="161" r="14"/>' +
    '<circle cx="188" cy="150" r="13"/><circle cx="174" cy="146" r="12"/><circle cx="170" cy="162" r="13"/><circle cx="184" cy="176" r="14"/><circle cx="198" cy="166" r="12"/><circle cx="180" cy="161" r="14"/></g>' +
    '<text x="150" y="292" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">bilateral hilar nodes</text>' +
    '</g></svg>',

  // s1-0064 Acute tubular necrosis: urine microscopy field with several
  // MUDDY-BROWN coarse-granular CASTS and a few renal tubular epithelial cells.
  "s1-0064": '<svg viewBox="0 0 300 264" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="150" cy="132" r="122" fill="rgba(214,224,238,0.02)"/>' +
    '<circle cx="150" cy="132" r="120" stroke="rgba(205,216,229,0.28)" stroke-width="2" fill="none"/>' +
    '<circle cx="150" cy="132" r="112" stroke="rgba(205,216,229,0.1)" stroke-width="6" fill="none"/>' +
    // renal tubular epithelial cells (light, with nucleus)
    '<g stroke="rgba(205,216,229,0.4)" stroke-width="1.2" fill="rgba(214,224,238,0.05)">' +
    '<path d="M70 66 C58 62 56 80 68 84 C82 88 90 72 80 64 C76 62 74 64 70 66 Z"/>' +
    '<path d="M232 74 C220 70 218 88 230 92 C244 96 252 80 242 72 C238 70 236 72 232 74 Z"/>' +
    '<path d="M78 198 C66 194 64 212 76 216 C90 220 98 204 88 196 C84 194 82 196 78 198 Z"/>' +
    '<path d="M228 194 C216 190 214 208 226 212 C240 216 248 200 238 192 C234 190 232 192 228 194 Z"/></g>' +
    '<g fill="rgba(205,216,229,0.36)"><circle cx="72" cy="74" r="3"/><circle cx="234" cy="82" r="3"/><circle cx="80" cy="206" r="3"/><circle cx="230" cy="202" r="3"/></g>' +
    // ---- muddy-brown granular CAST 1 ----
    '<g transform="rotate(-16 120 106)">' +
    '<rect x="58" y="92" width="124" height="28" rx="14" fill="rgba(150,100,60,0.3)" stroke="rgba(120,80,48,0.75)" stroke-width="1.5"/>' +
    '<g fill="rgba(110,72,44,0.7)"><circle cx="74" cy="102" r="3"/><circle cx="86" cy="110" r="3.4"/><circle cx="98" cy="100" r="3"/><circle cx="110" cy="108" r="3.4"/><circle cx="122" cy="101" r="3"/><circle cx="134" cy="109" r="3.2"/><circle cx="146" cy="102" r="3"/><circle cx="158" cy="110" r="3.2"/><circle cx="170" cy="103" r="3"/></g>' +
    '<circle cx="102" cy="106" r="3" fill="#e0524f" fill-opacity="0.55"/><circle cx="140" cy="106" r="2.6" fill="#e0524f" fill-opacity="0.5"/></g>' +
    // ---- cast 2 ----
    '<g transform="rotate(14 190 156)">' +
    '<rect x="132" y="142" width="118" height="28" rx="14" fill="rgba(150,100,60,0.3)" stroke="rgba(120,80,48,0.75)" stroke-width="1.5"/>' +
    '<g fill="rgba(110,72,44,0.7)"><circle cx="146" cy="152" r="3"/><circle cx="158" cy="160" r="3.4"/><circle cx="170" cy="151" r="3"/><circle cx="182" cy="159" r="3.4"/><circle cx="194" cy="152" r="3"/><circle cx="206" cy="160" r="3.2"/><circle cx="218" cy="153" r="3"/><circle cx="230" cy="159" r="3.2"/></g>' +
    '<circle cx="174" cy="156" r="3" fill="#e0524f" fill-opacity="0.55"/><circle cx="210" cy="156" r="2.6" fill="#e0524f" fill-opacity="0.5"/></g>' +
    // ---- cast 3 (smaller) ----
    '<g transform="rotate(-6 118 186)">' +
    '<rect x="72" y="174" width="96" height="24" rx="12" fill="rgba(150,100,60,0.3)" stroke="rgba(120,80,48,0.75)" stroke-width="1.4"/>' +
    '<g fill="rgba(110,72,44,0.7)"><circle cx="86" cy="182" r="2.8"/><circle cx="98" cy="189" r="3"/><circle cx="110" cy="182" r="2.8"/><circle cx="122" cy="189" r="3"/><circle cx="134" cy="183" r="2.8"/><circle cx="146" cy="189" r="3"/></g>' +
    '<circle cx="116" cy="186" r="2.6" fill="#e0524f" fill-opacity="0.5"/></g>' +
    '<text x="150" y="246" text-anchor="middle" font-size="10" fill="rgba(150,100,60,0.95)" font-family="sans-serif">granular casts</text>' +
    '</g></svg>',

  // s1-0065 Crohn disease mucosa: COBBLESTONE appearance - raised mucosal islands
  // separated by linear serpiginous ULCERS - a normal "skip" area, and a
  // cross-section hint showing TRANSMURAL involvement.
  "s1-0065": '<svg viewBox="0 0 340 280" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="8" y="8" width="324" height="264" rx="14" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.16)"/>' +
    // cobblestone panel frame
    '<rect x="18" y="18" width="214" height="150" rx="8" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.2)"/>' +
    // serpiginous ulcer network (accent) - drawn first, islands overlay between
    '<g stroke="#e0524f" stroke-opacity="0.55" stroke-width="6" fill="none">' +
    '<path d="M18 66 C60 58 78 78 118 70 C160 62 184 82 232 72"/>' +
    '<path d="M18 118 C58 110 82 130 120 122 C162 114 190 132 232 122"/>' +
    '<path d="M70 18 C64 60 82 100 74 168"/>' +
    '<path d="M150 18 C144 58 162 100 154 168"/></g>' +
    // raised cobblestone islands (light, with highlight)
    '<g stroke="rgba(210,220,232,0.6)" stroke-width="1.4" fill="rgba(214,224,238,0.09)">' +
    '<path d="M30 30 C48 26 62 34 60 50 C58 62 40 64 30 58 C22 52 22 36 30 30 Z"/>' +
    '<path d="M92 32 C112 28 128 38 124 54 C120 64 100 66 90 58 C82 50 82 38 92 32 Z"/>' +
    '<path d="M172 34 C194 30 210 42 204 58 C198 66 178 66 168 58 C162 50 162 40 172 34 Z"/>' +
    '<path d="M32 82 C50 78 64 88 60 104 C56 114 38 114 30 106 C24 98 24 88 32 82 Z"/>' +
    '<path d="M96 84 C118 80 134 92 128 108 C122 116 102 116 92 108 C86 100 86 90 96 84 Z"/>' +
    '<path d="M176 86 C198 82 214 92 208 108 C202 116 182 116 172 108 C166 100 166 92 176 86 Z"/>' +
    '<path d="M34 132 C52 128 66 138 62 152 C58 160 40 160 32 154 C26 148 26 138 34 132 Z"/>' +
    '<path d="M100 134 C120 130 136 140 130 154 C124 162 104 162 96 154 C90 148 90 140 100 134 Z"/>' +
    '<path d="M180 134 C202 130 216 140 210 154 C204 162 184 162 176 154 C170 148 170 140 180 134 Z"/></g>' +
    '<g stroke="rgba(235,240,246,0.35)" stroke-width="1" fill="none"><path d="M34 34 C44 32 52 36 54 42"/><path d="M96 36 C108 34 116 40 118 46"/><path d="M36 86 C46 84 54 88 56 94"/><path d="M100 88 C112 86 120 92 122 98"/></g>' +
    '<text x="125" y="182" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">serpiginous ulcers</text>' +
    // ---- normal "skip" area panel ----
    '<rect x="244" y="18" width="80" height="150" rx="8" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.2)"/>' +
    '<g stroke="rgba(205,216,229,0.4)" stroke-width="1.4" fill="none">' +
    '<path d="M256 40 Q284 30 312 40"/><path d="M256 62 Q284 52 312 62"/><path d="M256 84 Q284 74 312 84"/><path d="M256 106 Q284 96 312 106"/><path d="M256 128 Q284 118 312 128"/><path d="M256 150 Q284 140 312 150"/></g>' +
    '<text x="284" y="182" text-anchor="middle" font-size="10" fill="rgba(205,216,229,0.7)" font-family="sans-serif">skip area</text>' +
    // ---- cross-section: bowel wall layers with TRANSMURAL involvement ----
    '<g stroke="rgba(210,220,232,0.5)" stroke-width="1.2" fill="none">' +
    '<rect x="18" y="200" width="306" height="16" fill="rgba(214,224,238,0.06)"/>' +
    '<rect x="18" y="216" width="306" height="14" fill="rgba(214,224,238,0.04)"/>' +
    '<rect x="18" y="230" width="306" height="18" fill="rgba(214,224,238,0.06)"/>' +
    '<rect x="18" y="248" width="306" height="12" fill="rgba(214,224,238,0.03)"/></g>' +
    // transmural fissure/inflammation crossing ALL layers (accent)
    '<path d="M120 200 C112 216 128 232 118 260" stroke="#e0524f" stroke-opacity="0.7" stroke-width="4" fill="none"/>' +
    '<g fill="#e0524f" fill-opacity="0.45"><circle cx="108" cy="224" r="3"/><circle cx="132" cy="236" r="3"/><circle cx="118" cy="250" r="3"/><circle cx="126" cy="212" r="2.6"/></g>' +
    '<text x="252" y="238" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">transmural</text>' +
    '</g></svg>',

  // s1-0070 Lyme erythema migrans: a targetoid BULL'S-EYE - concentric
  // erythematous rings with central clearing and a central punctum, on skin.
  "s1-0070": '<svg viewBox="0 0 300 260" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="8" y="8" width="284" height="244" rx="14" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.16)"/>' +
    // skin texture
    '<g stroke="rgba(205,216,229,0.1)" stroke-width="1" fill="none">' +
    '<path d="M20 50 C90 44 180 56 292 46"/><path d="M20 210 C90 204 180 214 292 206"/>' +
    '<path d="M36 20 C30 90 42 170 34 244"/><path d="M266 20 C260 90 272 170 264 244"/></g>' +
    // overall faint erythema
    '<circle cx="150" cy="128" r="96" fill="rgba(224,82,79,0.05)"/>' +
    // outer erythematous ring (slightly irregular)
    '<path d="M150 34 C204 34 246 76 246 130 C246 184 202 224 150 222 C96 224 54 182 54 128 C54 74 98 34 150 34 Z" ' +
    'stroke="#e0524f" stroke-opacity="0.55" stroke-width="7" fill="none"/>' +
    // central clearing (skin between rings) - subtle texture arc
    '<circle cx="150" cy="128" r="60" stroke="rgba(205,216,229,0.14)" stroke-width="1" fill="none"/>' +
    // inner erythematous ring
    '<circle cx="150" cy="128" r="34" stroke="#e0524f" stroke-opacity="0.55" stroke-width="6" fill="none"/>' +
    // central punctum (bite site)
    '<circle cx="150" cy="128" r="12" fill="rgba(224,82,79,0.12)" stroke="#e0524f" stroke-opacity="0.5" stroke-width="1.4"/>' +
    '<circle cx="150" cy="128" r="5" fill="#e0524f" fill-opacity="0.7"/>' +
    '<text x="150" y="158" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">punctum</text>' +
    '<text x="150" y="236" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">concentric rings</text>' +
    '</g></svg>',

  // s1-0071 Leukocoria: two eyes - a NORMAL red reflex in one pupil versus a
  // WHITE pupillary reflex (leukocoria) in the other.
  "s1-0071": '<svg viewBox="0 0 320 220" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="8" y="8" width="304" height="204" rx="14" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.16)"/>' +
    // bridge of nose hint
    '<path d="M160 66 C156 92 156 120 160 148" stroke="rgba(205,216,229,0.14)" stroke-width="1.4" fill="none"/>' +
    // ---- LEFT eye: normal red reflex ----
    '<path d="M28 110 C56 82 108 82 138 110 C108 138 56 138 28 110 Z" fill="rgba(214,224,238,0.05)" stroke="rgba(210,220,232,0.75)" stroke-width="1.8"/>' +
    '<path d="M40 100 C60 88 100 88 126 100" stroke="rgba(205,216,229,0.3)" stroke-width="1" fill="none"/>' +
    // brow + lashes
    '<path d="M30 84 C58 74 106 74 134 84" stroke="rgba(205,216,229,0.2)" stroke-width="1.4" fill="none"/>' +
    '<g stroke="rgba(205,216,229,0.4)" stroke-width="1"><path d="M52 88 L48 80"/><path d="M72 85 L70 77"/><path d="M92 85 L94 77"/><path d="M112 88 L116 80"/></g>' +
    '<circle cx="83" cy="110" r="26" fill="rgba(214,224,238,0.06)" stroke="rgba(210,220,232,0.7)" stroke-width="1.6"/>' +
    '<g stroke="rgba(205,216,229,0.32)" stroke-width="0.9"><line x1="83" y1="86" x2="83" y2="94"/><line x1="83" y1="126" x2="83" y2="134"/><line x1="59" y1="110" x2="67" y2="110"/><line x1="99" y1="110" x2="107" y2="110"/><line x1="66" y1="93" x2="72" y2="99"/><line x1="100" y1="93" x2="94" y2="99"/><line x1="66" y1="127" x2="72" y2="121"/><line x1="100" y1="127" x2="94" y2="121"/></g>' +
    '<circle cx="83" cy="110" r="12" fill="#e0524f" fill-opacity="0.5" stroke="#e0524f" stroke-opacity="0.7" stroke-width="1.2"/>' +
    '<circle cx="83" cy="110" r="7" fill="#e0524f" fill-opacity="0.7"/>' +
    '<circle cx="78" cy="105" r="2.4" fill="rgba(240,244,248,0.9)"/>' +
    '<text x="83" y="160" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">red reflex</text>' +
    // ---- RIGHT eye: leukocoria (white reflex) ----
    '<path d="M182 110 C210 82 262 82 292 110 C262 138 210 138 182 110 Z" fill="rgba(214,224,238,0.05)" stroke="rgba(210,220,232,0.75)" stroke-width="1.8"/>' +
    '<path d="M194 100 C214 88 254 88 280 100" stroke="rgba(205,216,229,0.3)" stroke-width="1" fill="none"/>' +
    '<path d="M184 84 C212 74 260 74 288 84" stroke="rgba(205,216,229,0.2)" stroke-width="1.4" fill="none"/>' +
    '<g stroke="rgba(205,216,229,0.4)" stroke-width="1"><path d="M206 88 L202 80"/><path d="M226 85 L224 77"/><path d="M246 85 L248 77"/><path d="M266 88 L270 80"/></g>' +
    '<circle cx="237" cy="110" r="26" fill="rgba(214,224,238,0.06)" stroke="rgba(210,220,232,0.7)" stroke-width="1.6"/>' +
    '<g stroke="rgba(205,216,229,0.32)" stroke-width="0.9"><line x1="237" y1="86" x2="237" y2="94"/><line x1="237" y1="126" x2="237" y2="134"/><line x1="213" y1="110" x2="221" y2="110"/><line x1="253" y1="110" x2="261" y2="110"/><line x1="220" y1="93" x2="226" y2="99"/><line x1="254" y1="93" x2="248" y2="99"/><line x1="220" y1="127" x2="226" y2="121"/><line x1="254" y1="127" x2="248" y2="121"/></g>' +
    '<circle cx="237" cy="110" r="12" fill="rgba(236,240,246,0.92)" stroke="rgba(210,220,232,0.85)" stroke-width="1.2"/>' +
    '<circle cx="234" cy="106" r="3.5" fill="rgba(255,255,255,0.7)"/>' +
    '<text x="237" y="160" text-anchor="middle" font-size="10" fill="rgba(232,238,246,0.85)" font-family="sans-serif">leukocoria</text>' +
    '</g></svg>',

  // s1-0085 Psoriasis: an extensor surface (bent elbow) with sharply demarcated
  // erythematous PLAQUES capped by thick SILVERY-WHITE scale, plus a nail with
  // pitting.
  "s1-0085": '<svg viewBox="0 0 300 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="8" y="8" width="284" height="284" rx="14" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.16)"/>' +
    // bent arm (upper arm + forearm) - extensor surface faces down-left
    '<path d="M118 30 C96 66 80 106 68 150 C60 190 96 236 138 276 ' +
    'L172 262 C138 226 108 182 116 152 C126 118 138 78 150 40 Z" ' +
    'fill="rgba(214,224,238,0.05)" stroke="rgba(210,220,232,0.75)" stroke-width="1.8"/>' +
    // elbow crease hint
    '<path d="M96 150 C104 158 112 162 120 162" stroke="rgba(205,216,229,0.25)" stroke-width="1.2" fill="none"/>' +
    // ---- psoriatic PLAQUES (sharply demarcated erythema) ----
    '<path d="M88 132 C70 130 62 152 74 168 C88 182 112 178 116 158 C118 142 104 132 88 132 Z" fill="#e0524f" fill-opacity="0.32" stroke="#e0524f" stroke-opacity="0.8" stroke-width="1.8"/>' +
    '<path d="M108 202 C92 200 84 220 96 234 C110 246 132 240 134 222 C135 208 122 202 108 202 Z" fill="#e0524f" fill-opacity="0.32" stroke="#e0524f" stroke-opacity="0.8" stroke-width="1.8"/>' +
    '<path d="M102 92 C90 90 84 106 94 118 C106 128 122 122 122 108 C122 96 112 92 102 92 Z" fill="#e0524f" fill-opacity="0.3" stroke="#e0524f" stroke-opacity="0.8" stroke-width="1.6"/>' +
    // thick silvery-white scale on top of each plaque
    '<path d="M82 138 C70 138 66 152 76 162 C88 172 106 168 108 156 C110 146 96 138 82 138 Z" fill="rgba(236,240,246,0.5)" stroke="rgba(236,240,246,0.55)" stroke-width="0.8"/>' +
    '<path d="M102 208 C92 208 88 222 98 230 C110 238 126 234 126 222 C126 212 114 208 102 208 Z" fill="rgba(236,240,246,0.5)" stroke="rgba(236,240,246,0.55)" stroke-width="0.8"/>' +
    '<path d="M98 98 C90 98 86 108 94 116 C104 122 116 118 116 108 C116 100 108 98 98 98 Z" fill="rgba(236,240,246,0.45)"/>' +
    // silvery scale flakes / stipple
    '<g fill="rgba(240,244,248,0.7)"><circle cx="80" cy="150" r="1.6"/><circle cx="90" cy="146" r="1.6"/><circle cx="96" cy="156" r="1.6"/><circle cx="86" cy="160" r="1.6"/><circle cx="100" cy="150" r="1.6"/>' +
    '<circle cx="100" cy="220" r="1.6"/><circle cx="110" cy="216" r="1.6"/><circle cx="116" cy="224" r="1.6"/><circle cx="106" cy="228" r="1.6"/><circle cx="120" cy="220" r="1.6"/>' +
    '<circle cx="98" cy="108" r="1.4"/><circle cx="106" cy="106" r="1.4"/><circle cx="108" cy="112" r="1.4"/></g>' +
    '<text x="150" y="170" text-anchor="middle" font-size="10" fill="rgba(236,240,246,0.8)" font-family="sans-serif">silvery scale</text>' +
    // ---- nail with pitting ----
    '<rect x="214" y="228" width="52" height="44" rx="14" fill="rgba(214,224,238,0.06)" stroke="rgba(210,220,232,0.7)" stroke-width="1.6"/>' +
    '<path d="M222 236 C232 232 248 232 258 236" stroke="rgba(205,216,229,0.3)" stroke-width="1" fill="none"/>' +
    '<g fill="#e0524f" fill-opacity="0.4"><circle cx="226" cy="246" r="2"/><circle cx="238" cy="243" r="2"/><circle cx="250" cy="247" r="2"/><circle cx="232" cy="255" r="2"/><circle cx="246" cy="257" r="2"/><circle cx="258" cy="252" r="2"/><circle cx="222" cy="260" r="2"/></g>' +
    '<text x="240" y="286" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.8" font-family="sans-serif">nail pitting</text>' +
    '</g></svg>',

  // s1-0089 ADPKD: two bilaterally ENLARGED, lobulated kidneys studded with
  // numerous variably-sized CYSTS; a faint normal-size kidney outline for scale.
  "s1-0089": '<svg viewBox="0 0 340 250" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="8" y="8" width="324" height="234" rx="14" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.16)"/>' +
    // ---- left enlarged, lobulated kidney ----
    '<path d="M92 26 C130 22 150 54 150 92 C154 132 148 176 128 208 C112 232 68 232 46 208 ' +
    'C26 184 22 148 26 112 C28 74 42 40 76 28 C82 26 86 26 92 26 Z" ' +
    'fill="rgba(214,224,238,0.05)" stroke="rgba(210,220,232,0.7)" stroke-width="1.8"/>' +
    // ---- right enlarged, lobulated kidney (mirror) ----
    '<path d="M248 26 C210 22 190 54 190 92 C186 132 192 176 212 208 C228 232 272 232 294 208 ' +
    'C314 184 318 148 314 112 C312 74 298 40 264 28 C258 26 254 26 248 26 Z" ' +
    'fill="rgba(214,224,238,0.05)" stroke="rgba(210,220,232,0.7)" stroke-width="1.8"/>' +
    // left kidney cysts - variably sized (mostly light, a few accent)
    '<g stroke="rgba(210,220,232,0.55)" stroke-width="1.2" fill="rgba(214,224,238,0.05)">' +
    '<circle cx="70" cy="62" r="18"/><circle cx="110" cy="56" r="12"/><circle cx="52" cy="104" r="15"/>' +
    '<circle cx="96" cy="100" r="21"/><circle cx="128" cy="94" r="9"/><circle cx="66" cy="150" r="19"/>' +
    '<circle cx="108" cy="146" r="13"/><circle cx="90" cy="186" r="12"/><circle cx="56" cy="184" r="9"/></g>' +
    '<g stroke="#e0524f" stroke-opacity="0.7" stroke-width="1.2" fill="#e0524f" fill-opacity="0.14">' +
    '<circle cx="92" cy="130" r="14"/><circle cx="124" cy="170" r="10"/><circle cx="60" cy="80" r="8"/></g>' +
    // right kidney cysts
    '<g stroke="rgba(210,220,232,0.55)" stroke-width="1.2" fill="rgba(214,224,238,0.05)">' +
    '<circle cx="270" cy="62" r="18"/><circle cx="230" cy="56" r="12"/><circle cx="288" cy="104" r="15"/>' +
    '<circle cx="244" cy="100" r="21"/><circle cx="212" cy="94" r="9"/><circle cx="274" cy="150" r="19"/>' +
    '<circle cx="232" cy="146" r="13"/><circle cx="250" cy="186" r="12"/><circle cx="284" cy="184" r="9"/></g>' +
    '<g stroke="#e0524f" stroke-opacity="0.7" stroke-width="1.2" fill="#e0524f" fill-opacity="0.14">' +
    '<circle cx="248" cy="130" r="14"/><circle cx="216" cy="170" r="10"/><circle cx="280" cy="80" r="8"/></g>' +
    // ---- faint NORMAL-size kidney outline for scale ----
    '<path d="M164 176 C172 174 176 182 176 190 C177 200 174 210 168 218 C162 224 152 224 147 218 ' +
    'C142 212 141 202 142 193 C143 184 147 178 156 176 C159 175 161 175 164 176 Z" ' +
    'stroke="rgba(205,216,229,0.4)" stroke-width="1.2" stroke-dasharray="4 3" fill="none"/>' +
    '<text x="170" y="238" text-anchor="middle" font-size="10" fill="rgba(205,216,229,0.6)" font-family="sans-serif">normal size</text>' +
    '</g></svg>',

  // s1-0095 TB caseating granuloma (high power): central amorphous CASEOUS
  // NECROSIS, a ring of epithelioid macrophages, a multinucleate LANGHANS GIANT
  // CELL with horseshoe-arranged peripheral nuclei, and an outer lymphocyte rim.
  "s1-0095": '<svg viewBox="0 0 300 300" width="320" xmlns="http://www.w3.org/2000/svg" fill="none">' +
    '<g stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="8" y="8" width="284" height="284" rx="14" fill="rgba(214,224,238,0.02)" stroke="rgba(205,216,229,0.16)"/>' +
    // outer lymphocyte rim (dense small dark nuclei)
    '<g fill="rgba(205,216,229,0.5)">' +
    '<circle cx="150" cy="24" r="3"/><circle cx="178" cy="28" r="3"/><circle cx="206" cy="38" r="3"/><circle cx="232" cy="54" r="3"/><circle cx="252" cy="76" r="3"/><circle cx="268" cy="104" r="3"/><circle cx="276" cy="134" r="3"/><circle cx="277" cy="166" r="3"/><circle cx="270" cy="196" r="3"/><circle cx="254" cy="224" r="3"/><circle cx="232" cy="246" r="3"/><circle cx="204" cy="262" r="3"/><circle cx="174" cy="272" r="3"/><circle cx="142" cy="274" r="3"/><circle cx="112" cy="268" r="3"/><circle cx="84" cy="254" r="3"/><circle cx="60" cy="234" r="3"/><circle cx="42" cy="208" r="3"/><circle cx="30" cy="178" r="3"/><circle cx="26" cy="146" r="3"/><circle cx="30" cy="114" r="3"/><circle cx="42" cy="86" r="3"/><circle cx="60" cy="60" r="3"/><circle cx="84" cy="42" r="3"/><circle cx="112" cy="30" r="3"/>' +
    '<circle cx="164" cy="40" r="2.6"/><circle cx="220" cy="66" r="2.6"/><circle cx="258" cy="120" r="2.6"/><circle cx="262" cy="182" r="2.6"/><circle cx="220" cy="238" r="2.6"/><circle cx="160" cy="264" r="2.6"/><circle cx="98" cy="250" r="2.6"/><circle cx="52" cy="200" r="2.6"/><circle cx="38" cy="132" r="2.6"/><circle cx="76" cy="72" r="2.6"/></g>' +
    '<text x="150" y="290" text-anchor="middle" font-size="10" fill="rgba(205,216,229,0.6)" font-family="sans-serif">lymphocyte rim</text>' +
    // epithelioid macrophage ring (elongated pale cells, oval nuclei, radial)
    '<g stroke="rgba(210,220,232,0.5)" stroke-width="1.2" fill="rgba(214,224,238,0.04)">' +
    '<ellipse cx="150" cy="72" rx="7" ry="15"/><ellipse cx="196" cy="82" rx="7" ry="15" transform="rotate(35 196 82)"/>' +
    '<ellipse cx="226" cy="116" rx="7" ry="15" transform="rotate(62 226 116)"/><ellipse cx="234" cy="158" rx="7" ry="15" transform="rotate(88 234 158)"/>' +
    '<ellipse cx="222" cy="198" rx="7" ry="15" transform="rotate(118 222 198)"/><ellipse cx="192" cy="226" rx="7" ry="15" transform="rotate(145 192 226)"/>' +
    '<ellipse cx="150" cy="234" rx="7" ry="15"/><ellipse cx="108" cy="226" rx="7" ry="15" transform="rotate(35 108 226)"/>' +
    '<ellipse cx="78" cy="198" rx="7" ry="15" transform="rotate(62 78 198)"/><ellipse cx="66" cy="158" rx="7" ry="15" transform="rotate(88 66 158)"/>' +
    '<ellipse cx="74" cy="116" rx="7" ry="15" transform="rotate(118 74 116)"/><ellipse cx="104" cy="82" rx="7" ry="15" transform="rotate(145 104 82)"/></g>' +
    '<g fill="rgba(205,216,229,0.4)"><circle cx="150" cy="72" r="3"/><circle cx="196" cy="82" r="3"/><circle cx="226" cy="116" r="3"/><circle cx="234" cy="158" r="3"/><circle cx="222" cy="198" r="3"/><circle cx="192" cy="226" r="3"/><circle cx="150" cy="234" r="3"/><circle cx="108" cy="226" r="3"/><circle cx="78" cy="198" r="3"/><circle cx="66" cy="158" r="3"/><circle cx="74" cy="116" r="3"/><circle cx="104" cy="82" r="3"/></g>' +
    '<text x="150" y="215" text-anchor="middle" font-size="9" fill="rgba(205,216,229,0.55)" font-family="sans-serif">epithelioid cells</text>' +
    // central amorphous CASEOUS NECROSIS (accent, granular)
    '<circle cx="150" cy="158" r="48" fill="rgba(224,82,79,0.1)" stroke="#e0524f" stroke-opacity="0.35" stroke-width="1.2"/>' +
    '<g fill="#e0524f" fill-opacity="0.3"><circle cx="132" cy="150" r="2"/><circle cx="148" cy="146" r="2.4"/><circle cx="164" cy="152" r="2"/><circle cx="176" cy="162" r="2.2"/><circle cx="140" cy="164" r="2"/><circle cx="156" cy="168" r="2.4"/><circle cx="170" cy="176" r="2"/><circle cx="128" cy="170" r="2.2"/><circle cx="146" cy="180" r="2"/><circle cx="160" cy="184" r="2.2"/><circle cx="134" cy="188" r="2"/><circle cx="150" cy="158" r="2.4"/></g>' +
    '<text x="150" y="160" text-anchor="middle" font-size="9" fill="#e0524f" fill-opacity="0.75" font-family="sans-serif">caseous</text>' +
    // ---- LANGHANS giant cell: large pale cell, horseshoe of peripheral nuclei ----
    '<circle cx="150" cy="112" r="26" fill="rgba(214,224,238,0.07)" stroke="rgba(210,220,232,0.7)" stroke-width="1.6"/>' +
    '<g fill="#e0524f" fill-opacity="0.6" stroke="#e0524f" stroke-opacity="0.7" stroke-width="0.6">' +
    '<circle cx="130" cy="106" r="3"/><circle cx="132" cy="118" r="3"/><circle cx="138" cy="128" r="3"/><circle cx="148" cy="132" r="3"/><circle cx="158" cy="130" r="3"/><circle cx="167" cy="124" r="3"/><circle cx="171" cy="114" r="3"/><circle cx="170" cy="103" r="3"/><circle cx="164" cy="95" r="3"/></g>' +
    '<text x="150" y="80" text-anchor="middle" font-size="10" fill="#e0524f" fill-opacity="0.85" font-family="sans-serif">Langhans cell</text>' +
    '</g></svg>'

});
