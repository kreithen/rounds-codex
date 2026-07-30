# guidelines-staging — Updated Clinical Guidelines content

Source of truth for the **Updated Clinical Guidelines** subsection on Resident-mode specialty
pages. One file per specialty per year; merged into the live app's `content/resident.json` under a
`guidelines` key.

```
guidelines-staging/
  anes-2025.json      10 studies      Anesthesiology 2025
  anes-2026.json      10 studies      Anesthesiology 2026
  VERIFICATION.md     citation audit — READ THIS BEFORE DEPLOYING
```

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
