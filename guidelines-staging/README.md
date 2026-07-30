# guidelines-staging — Updated Clinical Guidelines content

Source of truth for the **Updated Clinical Guidelines** subsection on Resident-mode specialty
pages. One file per specialty per year; merged into the live app's `content/resident.json` under a
`guidelines` key.

```
guidelines-staging/
  <spec>-2025.json            CANONICAL — what is merged and shipped
  <spec>-2026.json
  <spec>-<year>-submitted.json  the physician's original text, kept for the diff
  CORRECTIONS-all.md          every citation check, grouped worst-first
  CORRECTIONS-<spec>.md       field-level before/after where a -submitted file exists
  <Specialty>-clinical-guidelines.md   readable copy for Google Drive
  VERIFICATION.md             the Anesthesiology audit, written first and still the
                              fullest account of the method and its limits
```

Sixteen specialties live as of 2026-07-30 — **303 entries**: `anes`, `cards`, `derm`, `em`, `ent`,
`fm`, `im`, `neuro`, `nsg`, `obgyn`, `ophtho`, `ortho`, `path`, `peds`, `plastics`, `pmr`.

Most carry 10 entries per year. Five do not, for two different reasons.

**Deduplication within a specialty.** Where a development appeared in both of a specialty's year
lists it is kept on the **earlier** year only, so nothing shows under both buttons — `neuro` 2026 has
7, `nsg` and `obgyn` have 8, `path` has 9. The test is whether the later year adds a new *result*,
not a new description of the same one: OTOF gene therapy is on both otolaryngology years because 2025
is the first-in-human restoration and 2026 is durability past 2.5 years with an extended age range.

**Two near-identical lists for one specialty.** `pmr` has 8 and 3. The two submitted PM&R lists were
9 of 10 the same studies, so there were only 11 distinct entries, not 20. Each was assigned to the
year its underlying development actually belongs to, verified by date — three are genuinely 2026 (the
JOSPT carpal tunnel *Revision 2026*, the April 2026 CorTec Breakthrough Device Designation, the
Muscle & Nerve 2026 ultrasound-guided EMG work) and eight are 2025 or earlier. Do this rather than
shipping the same nine studies under both year buttons, and say so in the commit.

**Cross-specialty duplication is allowed and sometimes right.** The same study can appear under two
specialties when it drives different decisions — TeMPO under orthopaedic surgery (whether to operate)
and PM&R (what to prescribe); OTOF gene therapy under otolaryngology (the trial data) and paediatrics
(genetic testing after a failed newborn hearing screen). Write each to its own decision so they do
not read as copies.

**The unsuffixed file is always the canonical one.** When corrections are approved, the original
is renamed `-submitted` and the corrected version takes the plain name, so a later
`merge_guidelines.js <spec> ... 2025=<spec>-2025.json` can never silently reship superseded text.
Anesthesiology went through that promotion on 2026-07-30.

## Merging

```
node scripts/merge_guidelines.js anes /workspace/rounds-codex-app/content \
  2025=guidelines-staging/anes-2025.json 2026=guidelines-staging/anes-2026.json
```

The merge asserts the specialty code against `RES_SPECIALTIES` (a typo would write a key no page can
read, and the section would just never appear with nothing failing), rejects unknown fields (the
renderer silently drops them), requires an https `url` on every entry, and catches duplicate titles
within a year.

## Entry shape

Shipped fields — the renderer reads exactly these:

| field | notes |
|---|---|
| `title` | bold heading on the card |
| `journal`, `date` | optional; joined with a middot under the title |
| `breakthrough` | "The breakthrough" |
| `impact` | "Clinical guideline impact" |
| `practical` | "Practical implications" |
| `link` | the visible link text, e.g. `The Lancet - DOLVI Multicentre Trial` |
| `url` | https, opens in the user's browser (`target=_blank rel="noopener noreferrer"`) |

Plus one staging-only field:

- **`verify`** — `{status, note}`, recording whether the citation was found, contradicted or
  overstated. **`merge_guidelines.js` strips it** — it is physician review material, not app
  content, and shipping it would print "NOT FOUND" on a study card. The merge *requires* it, so an
  entry can never reach the app without having been checked.

## Adding a specialty

1. Write `<spec>-<year>.json` with a `verify` block on every entry. Specialty codes are the `id`
   values in `content/resident.json` → `specialties` (Anesthesiology is **`anes`**, not `anesth`).
2. Merge. The section appears automatically — `resSpecHTML` renders it only when
   `RES_GUIDE[spec]` exists, so the other 23 specialties are untouched.
3. Verify headless. `/r/<spec>-<year>` must boot with `<base>` still `/` — see below.
4. `python3 scripts/audit_font_coverage.py <site-root>`. New prose is the usual way an uncovered
   character arrives, and an uncovered character does not error, it renders in the wrong font
   mid-sentence.

## Traps

- **Years sort ascending, so 2025 sits above 2026.** That was specified explicitly; it is not
  newest-first like the rest of the app.
- **A year with an empty array still renders a button**, labelled "Coming soon", and the page says
  no studies have been added. Omit the year entirely if you don't want the button.
- **`/r/<spec>-<year>` uses a hyphen, the nav stack uses a pipe.** `resguide` stack ids are
  `"anes|2025"`; the URL is `/r/anes-2025`. A pipe percent-encodes to `%7C` in a shared link.
  The route splits on the trailing four digits, so a specialty code containing a hyphen is fine.
- **`/r/` had to be added to the `RC_ROOT` regex** (now `/^\/(c|s|g|r)\//`) **and to `_redirects`.**
  Without the regex change `<base>` becomes `/r/`, every `content/*.json` resolves to
  `/r/content/...` and 404s, and the app boots to "Content didn't load" with **no page error** —
  the loader catches it. Any future one-segment route needs both.
- **`rcSyncURL()` needs the view too.** It only rewrites the address bar for views it knows; without
  a `resguide` case a shared link's URL snapped back to `/` the moment `boot()` called it, so a
  reload landed on the home page.
- **No independent medical re-read has been done.** Verification was web search against search-result
  summaries only — the proxy blocks PubMed, PMC, NEJM and doi.org, so no abstract was read. See
  `VERIFICATION.md`.
- **Review vocabulary must not reach a shipped field**, and stripping `verify` is not enough on its
  own: the phrase *"2025 entry as submitted"* once landed in a resident-facing `date`. The merge now
  rejects it — but with **two** regexes, the all-caps status tokens matched **case-sensitively**.
  `/replaced/i` and `/reversed/i` flag ordinary clinical English (*"Replaced rigid, time-based
  holding…"*, *"reversed with sugammadex"*), and a case-insensitive check produced exactly that
  false positive. Same failure mode as the base64 `NaN` in `audit_app_e2e.js`: an over-broad pattern
  reporting a defect that isn't there.

## What 303 checked citations look like

Across sixteen specialties the failure mode was consistent and worth knowing before trusting any
similar list: **plausible trial acronyms attached to sound clinical reasoning, with negative trials
rendered positive.** 23 of 303 entries stated the opposite of the published result; 16 cited studies
that could not be found; 18 named the wrong study; 2 described two-patient case reports as trials;
60 could not be resolved to a citation at all. Only 11 needed no correction.

The teaching was usually defensible — it was the *sourcing* that failed. So verify the citation even
when the clinical claim reads as obviously correct, and be most suspicious of an entry whose
"breakthrough" is a positive result from a trial you have not heard of.

Three refinements from the later specialties:

- **The title is a separate failure surface from the body.** A wrong-specialty term in the title
  over correct body text survives a skim: "Microfracture & Gene Therapy Scaling" on an otology
  entry, and a real AAO-HNS rhinosinusitis guideline credited to **AAOS**, the orthopaedic academy.
  Read the title against its own body before checking either against a source.
- **A repeated suspicious name is not automatically the same error, and an odd drug name is not
  automatically wrong.** `amivantamab` was a wrong-drug title twice (neurology, ophthalmology) and I
  expected the third occurrence in ENT to be another — it is real, with OrigAMI-4 (ORR 56%, n=39) and
  phase 3 OrigAMI-5 in HNSCC. I then flagged `nivobotulinumtoxinA` as a garbled version of
  relabotulinumtoxinA; it too is real, with two phase 3 trials of its own. Check every occurrence
  rather than pattern-matching on suspicion.
- **The most dangerous entry is not the fabricated one, it is the plausible permission.** The single
  worst item found was orthopaedics 2026 #7, which cited a registry that does not exist to support
  waiting until morning to fix a geriatric hip fracture. Nothing about it reads as invented, and a
  resident could have acted on it against guidance requiring surgery inside 24 hours. Two later
  entries were the same shape: omalizumab described as easing "reliance on strict food avoidance"
  (it does not — a family acting on that could feed a child an allergen), and clinical-grade
  **exosomes** presented as established surgical adjuncts when no exosome product has FDA approval
  for aesthetic use, administering unapproved biologics violates federal law, and reported harms
  include blindness and tumour formation.
- **Check the regulatory tier of anything an entry recommends.** A Breakthrough Device Designation
  is not a clearance (CorTec BCI, Paige PanCancer Detect); a bill is not law (the PREA reforms); an
  industry-commissioned Delphi is not a guideline (GLP-1 aesthetics, sponsored by Galderma). Each
  arrived described as the stronger thing.
- **Diagnostic thresholds get swapped between classification systems.** The faltering-weight entry
  quoted the ASPEN/AND paediatric *malnutrition* severity bands (−1/−2/−3 z) as the AAP/NASPGHAN
  *diagnostic* criteria, which are < −1.65 z, or velocity < −2 z under age 2, or a ≥1 z decline. Both
  are real z-score systems for child growth, which is exactly why the substitution survives a skim.

## When a `verify.status` is written badly, the physician meets the worst entries last

`build_corrections_summary.js` sorts worst-first by parsing the status string, so the wording is
load-bearing. Three genuine reversals in this batch were phrased "corrected — the result was
submitted in the wrong direction" and filed under routine date fixes, 130 entries below where they
belonged. Use the established vocabulary in the status: `REVERSED`, `NOT FOUND`, `replaced`,
`corrected`, `matched`. The prose explanation goes in `note`, not in `status`.

Note also that the summary script's **output path is its first argument**. Passing the staging files
as a bare list makes the first one the output and overwrites it with markdown — that destroyed
`ortho-2025.json`, and the run printed "wrote … 49 entries" as though it had succeeded. The script
now refuses a non-`.md` output and requires the `=` in every `<label>=<file>` pair.
