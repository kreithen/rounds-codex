# ECG schematics — the five items that had no illustration

Rendered previews of what `scripts/build_ecg_schematics.py` produces. The SVGs here
are the artifact; the script is the source. Edit the script and re-run — never these.

| id | tracing |
|---|---|
| `s2ck-0009` | Atrial fibrillation — absent P waves, fibrillatory baseline, irregularly irregular R–R |
| `s1-0012` | Sotalol torsades — prolonged QT, R-on-T, polymorphic run with a twisting axis |
| `s1-0136` | Pre-excitation — short PR into a slurred delta upstroke, broad QRS, discordant T |
| `s1-0061` | Inferior STEMI — ST elevation II/III/aVF (III > II), reciprocal depression aVL |
| `s2ck-0001` | the same inferior STEMI tracing; `RC_ILLUS` is keyed by question id |

Output lands in `applive/usmle/illus-pM.js`, which is gitignored along with the rest of
`applive/`. That is deliberate — the generator is version-controlled and the pack is
reproducible from it, so there is no second copy to drift.

**Not yet wired in and not deployed.** `usmle/index.html` loads packs A–L then
`illus-real.js`; pack M needs a `<script src="illus-pM.js"></script>` inserted before
`illus-real.js`, so a physician-approved real image can still override a schematic.

**Not through the physician gate.** Nothing here has been read by Dr. Kreithen.
