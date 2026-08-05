# Legal / IP — start here

Handoff file for a session working on trademark, copyright or anything else IP. Written 2026-08-05.
Read `CLAUDE.md` first for how the project works, then this.

**Nothing here is legal advice.** Both documents below say so themselves, and both are explicit
about which decisions are genuine judgement calls.

| file | subject | state |
|---|---|---|
| `trademark-plan.md` | the **name and logo** | search done, decision made, **nothing filed** |
| `Rounds-Codex-Copyright-Registration-Guide.pdf` | the **content** — 8 pages, written 2026-08-03 | guide written, **nothing filed** |
| `tmSearchResults-2026-08-05-live.xlsx` | the 83 live USPTO marks, archived | analysed in `trademark-plan.md` |

---

## State of play in one paragraph

Trademark: `ROUNDS CODEX` was searched on 2026-08-05, the result is favourable, and **Dr. Kreithen
decided to self-file without an attorney.** Next three steps are written out at the end of
`trademark-plan.md`. Copyright: an eight-page guide exists and is good, but **step one of its own
checklist has never been done** — see below. Patents: settled, don't reopen.

---

## The one blocking item, and the draft that unblocks it

The copyright guide's checklist item 1 is: *"Write down which parts of the content are
human-authored and which are AI-generated. Nothing else can be filled in honestly until this
exists."* It has not been done, and it blocks the entire copyright filing.

**It matters more than it sounds.** Since March 2023 the Copyright Office requires affirmative
disclosure of more-than-trivial AI-generated material, excluded in the Limitation of Claim field. A
registration obtained on an inaccurate application can be cancelled — and, as the guide puts it, a
registration you cannot rely on is worse than none, because you will have relied on it.

Below is a **draft inventory reconstructed from this repo's build history**. It is a starting point
for the physician to correct, **not a statement of fact**, and it must not be copied onto a federal
form without him verifying every line. Where it is uncertain it says so.

| component | count | provenance | likely claim |
|---|---:|---|---|
| Condition module text | 181 | **Physician-authored** (the quizzes were later generated *from* this text, which implies it pre-existed) — **verify** | human |
| Gallery artwork | 950 pages | Produced by an external AI illustration pipeline | **AI — exclude**; claim selection, ordering, page titles, arrangement |
| Gallery page titles + ordering | 950 | Read and assigned by hand from each page | human |
| Condition quiz questions | 1,820 | **24 transcribed from the physician's own PDFs**; the remaining ~1,796 AI-drafted from the module text, then QA'd | mostly **AI — exclude**; claim the 24, plus edits and arrangement |
| USMLE items | 1,010 | Authored with AI assistance — **verify the split** | mostly AI — verify |
| USMLE illustrations | 197 raster | AI-generated (Higgsfield) | **AI — exclude** |
| USMLE illustrations | 34 vector | 32 ECGs, a genetics pedigree, one other — schematic, authorship **unclear, verify** | verify |
| NCLEX items | 150 | AI-assisted build — **verify** | verify |
| Resident entries | 1,418 | Built via the `medcodex-resident-buildout` pipeline = AI-drafted | **AI — exclude**; claim selection and editing |
| Clinical guideline entries | 470 | **Submitted by the physician**, then heavily corrected during QA | human-authored, human-corrected |
| Drug entries | 300 | **Verify** | verify |
| Clinical calculators | 10 | Nine reproduce **published third-party clinical scores** (Wells, PERC, CHA₂DS₂-VASc…) — third-party material, exclude. The tenth is arithmetic | exclude the nine as third-party |
| Code (`index.html`, `sw.js`, scripts) | — | Mixed human and AI | verify before a Circular 61 filing |
| **The compilation itself** | — | The selection, coordination and arrangement of all of it | **human — this is the strongest claim** |

**The compilation is the point.** Even where the underlying material is AI-generated and must be
excluded, the selection and arrangement into a teaching structure is human authorship and is
registrable. That is the *Zarya of the Dawn* outcome the guide cites: text and arrangement
registered, AI images not.

---

## Four things that cross between the documents, which nobody would spot reading one

**1. Removing `noindex` starts a clock that cannot be reopened.**
`app-store-plan.md`'s launch checklist says delete `robots.txt` and the `X-Robots-Tag` header at
launch. The copyright guide says the site being unlisted and noindex is *arguably still unpublished*,
and that under 17 U.S.C. §412 statutory damages and attorney's fees are only available for
infringement beginning **after** registration — unless you register **within three months of first
publication**. So the day the noindex comes off is very likely the day a three-month window opens,
and **that window never reopens**. Register inside it or lose those remedies permanently for anything
copied later.

**2. The copyright guide recommends exactly what was decided against today.** Its §7 says of the
trademark search: *"that search is the part worth paying an attorney for."* On 2026-08-05, after the
83-mark analysis, the decision was to self-file. That is a considered override, not an oversight —
the reasoning and the accepted risk are both recorded in `trademark-plan.md`. Recorded here so the
next session recognises the contradiction rather than "discovering" it.

**3. Checklist item 8 was never done: Netlify password protection.** The guide is blunt that
*"registration is a remedy after the fact; a password is the only thing that actually prevents the
copying."* The site is currently noindex but reachable by anyone with the URL, and share links are a
shipped feature that hands the URL out by design. Worth a deliberate decision rather than drift.

**4. The PDF's numbers are stale — it was written two days before this file.** It says **800**
gallery pages (now **950**) and **1,308** resident entries (now **1,418**). 181 conditions, 300 drugs
and 470 guidelines are still right. Re-read the live counts before putting any figure on a form:
`python3 scripts/gen_gallery_gap.py` and the `content/*.json` files.

---

## Patents: settled, do not reopen

The guide's §6 closes this properly. Under *Alice Corp. v. CLS Bank*, presenting and retrieving
information on a computer is close to the centre of what is excluded, so a utility patent would
likely cost $10,000–$20,000+, take two to four years and probably die on a §101 rejection. Also, the
one-year US grace period may already be running from first public disclosure, and most other
countries apply absolute novelty — so foreign rights in anything already disclosed are likely gone.
**Copyright plus trademark protects what is actually valuable here, at a fraction of the cost.**

A design patent on the GUI's ornamental appearance is the only variant worth even asking about.

---

## Open loops

- [ ] **The provenance inventory above, verified by the physician.** Blocks the copyright filing.
- [ ] Trademark: create the USPTO.gov account (identity verification has a lead time), lock the
      goods/services wording from the ID Manual, then file. Full detail in `trademark-plan.md`.
- [x] **Trademark fees verified 2026-08-05** (via web tools, not uspto.gov, which still 403s the
      container): **$350 per class** base fee since the 18 Jan 2025 restructure, so **$700 for
      classes 9 + 41**, plus **+$200/class if the goods/services text is free-form** rather than
      picked from the ID Manual. Recorded in `trademark-plan.md`. Re-check in Trademark Center at
      filing time. **Copyright fees ($65 × 2) are still unverified** — `copyright.gov` was not
      reachable; confirm before the copyright filing.
- [ ] Decide on Netlify password protection before launch.
- [ ] Freeze a dated deposit copy of content + code before filing — checklist item 3.

## Working notes

- **Verify every count against the live content before it goes on a form.** Both documents already
  contain stale numbers from being written days apart. A misstatement on a federal application is
  the specific risk both guides warn about.
- Two copyright filings at $65 each — website content and computer program — is the realistic
  budget (still to confirm against copyright.gov), plus the **verified $700 trademark base fee**
  ($350 × classes 9 and 41). Keep the goods/services text ID-Manual-picked to avoid +$200/class.
- If running this session alongside a build session, **use a different branch** — both would
  otherwise commit to `claude/usmle-rounds-codex-module-bmpl61`.
