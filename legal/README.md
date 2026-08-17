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

## DECISION IN PROGRESS (2026-08-09): trademark yes, copyright maybe not

> **For the lawyer meeting, take `legal/provenance-for-counsel.md`.** It is the table below turned
> into something counsel can work from: sorted into the three buckets a registration actually needs
> (human / AI / **third-party**, which is the one usually forgotten), with an evidence column
> separating what the repo documents from what is inferred from what **only Dr. Kreithen knows** —
> and five questions to answer before the meeting. Q1 there, *who wrote the 183 condition modules*,
> is the line that decides whether registration is worth filing at all.


Dr. Kreithen is leaning toward **trademark only**, on the grounds that almost all of the app was
created with AI, and will review with a lawyer. **Nothing here is legal advice.** But one part of
that premise is worth putting in front of the lawyer, because it may be wrong in a way that changes
the answer.

**"Almost all AI" does not match this repo's own provenance draft.** What is AI-generated is the
*illustrations* (950 gallery pages, 197 USMLE rasters) and the *drafting* of most quiz items. What
the table below records as human is the part that actually matters for enforcement:

- **the 183 condition modules** — the clinical text itself, marked physician-authored
- **the 470 clinical guideline entries** — physician-submitted, physician-corrected
- **950 gallery page titles and their ordering** — read and assigned by hand
- **24 quiz questions** transcribed from the physician's own PDFs
- **the compilation** — the selection, coordination and arrangement of all of it

**And the compilation is registrable even where its contents are not.** That is the *Zarya of the
Dawn* outcome the copyright guide cites: text and arrangement registered, AI images excluded. The
AI-ness of the illustrations argues for **excluding them from the claim**, which the form has a
field for, not for skipping the filing.

### The threat model points the same way

Ask what would actually be copied. Someone lifting 183 condition modules and 1,840 questions and
relaunching them — that is the compilation plus the human text, precisely the registrable part. The
AI illustrations are the *least* worth protecting, because a competitor can generate their own.

### What skipping registration actually costs

Copyright exists on creation; registration does not create the right. What registration buys:

- **Standing.** A US work generally must be registered before an infringement suit can be filed.
- **Statutory damages and attorney's fees**, but only if registered before the infringement or
  within three months of first publication (17 U.S.C. §412).

Without them you can still register later and sue, but only for **actual damages you can prove**.
For a $5/month app that is often less than the cost of litigating — which in practice means
enforcement stops being economically rational. That is the real consequence, and it is permanent for
anything copied before registration.

Against roughly **$65 per filing**. The asymmetry is the point: a small fixed cost against
permanently losing the only enforcement tool with teeth.

### The middle option nobody has named

**File one registration for the website content — the compilation plus the human-authored text — and
skip the computer-program filing.** That is $65, one form, and it covers the modules and the
arrangement, which is what a copier would take. The code is the weaker claim and the one where the
human/AI split is genuinely murky.

### What the lawyer most needs

**The provenance inventory below, verified.** It is not merely a blocker to filing — it is the input
to the decision being made right now. "Is copyright worth it?" cannot be answered without knowing
what is human, and that question is currently unanswered rather than answered in the negative.

### If trademark-only is the final call

Perfectly defensible, and it **simplifies the launch**:

- **The 17 August date stops being a legal deadline.** The §412 three-month clock only matters if a
  registration is coming, so removing `noindex` becomes an ordinary product decision.
- The provenance inventory and the dated deposit freeze both come off the critical path.
- **But understand the gap: trademark protects the NAME, not the content.** A competitor who copies
  all 183 modules and calls the product something else is untouched by a trademark registration.
- **The login wall is now doing some of that work.** The copyright guide argued that "a password is
  the only thing that actually prevents the copying" — invitation-only access is exactly that, and
  it is already shipped. Practical prevention rather than a legal remedy, but this app has it.

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
| Condition module text | 183 | ⚠ **WAS RECORDED AS PHYSICIAN-AUTHORED. It is not.** The physician confirmed 2026-08-17 that the modules went through the same loop as the artwork: he wrote the prompts, generative AI produced the text, he reviewed and verified it. The inference that it "pre-existed because the quizzes were generated from it" was wrong — both were generated. | **AI — exclude**; claim the prompts, the substantive edits, and the arrangement |
| Gallery artwork | 1,020 pages | **CONFIRMED by the physician 2026-08-17**: he wrote the prompts, generative AI produced the images, he personally reviewed and verified each one. Not an external pipeline and not commissioned from an illustrator. | **AI — exclude**; claim selection, ordering, page titles, arrangement |
| Gallery page titles + ordering | 950 | Read and assigned by hand from each page | human |
| Condition quiz questions | 1,840 | **24 transcribed from the physician's own PDFs — confirmed 2026-08-17 as the ONLY directly-authored content in the app.** The other 1,816: same loop | **AI — exclude** except the 24, which are the cleanest human claim in the product |
| USMLE items | 1,010 | **Confirmed 2026-08-17:** prompts by the physician, AI-generated, reviewed and verified by him | **AI — exclude**; claim the prompts and the arrangement |
| USMLE illustrations | 197 raster | AI-generated (Higgsfield) | **AI — exclude** |
| USMLE illustrations | 34 vector | 32 ECGs, a genetics pedigree, one other — schematic, authorship **unclear, verify** | verify |
| NCLEX items | 150 | **Confirmed 2026-08-17:** same loop | **AI — exclude** |
| Resident entries | 1,418 | Built via the `medcodex-resident-buildout` pipeline = AI-drafted; consistent with the loop confirmed for everything else | **AI — exclude**; claim selection and editing |
| Clinical guideline entries | 470 | ⚠ **WAS RECORDED AS HUMAN-AUTHORED. It is not.** Confirmed 2026-08-17: same prompt-generate-review loop. "Submitted by the physician" meant he supplied them, not that he wrote them. | **AI — exclude**; but the QA corrections are a real human claim — see below |
| Drug entries | 300 | **Confirmed 2026-08-17:** same loop | **AI — exclude** |
| Clinical calculators | 10 | Nine reproduce **published third-party clinical scores** (Wells, PERC, CHA₂DS₂-VASc…) — third-party material, exclude. The tenth is arithmetic | exclude the nine as third-party |
| Code (`index.html`, `sw.js`, scripts) | — | Mixed human and AI | verify before a Circular 61 filing |
| **The compilation itself** | — | The selection, coordination and arrangement of all of it | **human — this is the strongest claim** |

**The scope widened the same day, and this is the single largest correction in this file.** Asked
about the artwork, the physician then said: *"I did the same for all the conditions and questions."*
So the prompt-generate-review loop is not the artwork pipeline — **it is how the product was made.**

That removes what this table had recorded as the strongest non-compilation claim. "Condition module
text — physician-authored" was inferred from build history, on the reasoning that the quizzes were
generated *from* the modules so the modules must have pre-existed. Both were generated. The
inference was reasonable and wrong, which is exactly why line 2 of this file says the inventory is
a starting point for the physician to correct and not a statement of fact.

**What is left to claim is now clearer, and smaller:**

- **The compilation** — selection, coordination, arrangement. Unchanged, and now carrying more of
  the weight than before.
- **The prompts themselves.** He wrote them. They are original literary works in their own right,
  whatever their outputs are, and 1,020 image prompts plus the module and question prompts are not
  a trivial body of text. Worth asking counsel about explicitly; it is not the same claim as the
  outputs and it is easy to forget you have it.
- **Substantive edits to AI output**, where they rise above correction. The guideline QA pass is the
  clearest case: 25 entries had their stated result reversed, 16 cited studies that did not exist.
  That is rewriting, not proofreading.
- **The 24 transcribed quiz questions**, the gallery page titles and ordering, and the guideline
  entries the physician submitted himself.

**Asked directly which content skipped the loop, the answer on 2026-08-17 was: the 24 transcribed
quiz questions, and nothing else.** Not the guidelines, not the drugs, not the USMLE or NCLEX items.
So the position is simple to state and worth stating plainly: **every body of content in this product
was generated, from prompts the physician wrote, and reviewed by him. The 24 questions are the only
directly-authored text in it.**

**This retro-explains the guideline QA findings, which is a point in favour of the account rather
than against it.** That pass found 25 entries stating the opposite of the published result, 16
citing studies that could not be found, 20 naming the wrong study, and invented trial acronyms
(LITH-QUE for the real LQD; ESTEEM and ANGLE resolving to nothing). Those are not the mistakes a
clinician makes transcribing from journals — they are exactly what generated text does. The
inventory row said "submitted by the physician, then heavily corrected", and "submitted" was doing
quiet work that nobody questioned.

It also means **the guideline QA corrections are among the strongest human claims in the product.**
Reversing a stated result, replacing a fabricated citation and dropping an aspirational claim is
authorship, not proofreading, and it is documented entry by entry in `CORRECTIONS-all.md`. That file
is evidence, and it should go to counsel with the inventory.

⚠ **"I reviewed and verified it" is not authorship**, and the distinction has to survive into the
filing. Verifying an output is quality control. What may count is *controlling the expressive
elements*, which is the case-by-case question. Do not let a form say "author" where the honest word
is "editor" or "compiler".

**One thing this does NOT change: the marketing claim.** "Designed and clinically reviewed by a team
of clinicians" is accurate under this account — he designed it and clinically reviewed it. The
physician's own revision of the verb from "created" to "designed" on 2026-08-17 turns out to have
been more accurate than anyone knew at the time.

---

**The physician's own account of the artwork, given 2026-08-17, is worth quoting exactly** because
it is the first direct statement of provenance and it settles the largest line in this table:
*"All the illustrations were created by me via prompts I wrote which then generative AI created and
then I personally reviewed and verified."*

That **confirms the draft rather than improving it.** Under the Copyright Office's Part 2 report
(January 2025) and Thaler v. Perlmutter — cert denied 2026 — **prompts alone do not make you the
author of the output**, however detailed, and reviewing a generated image is quality control rather
than authorship. So the artwork still sits in the exclude column. What it does remove is a worse
possibility: the pipeline was not external and the images were not licensed in, so there is no
third-party claim on any of them. That matters for the App Store notes and for the deposit.

Where the human authorship in the artwork actually lies, and what counsel should be asked about, is
whether the *prompt-and-select-and-reject* loop over 1,020 pages amounts to controlling the
expressive elements — the case-by-case question the Office says it decides individually, and the
one the 6,000+ registered human-AI works turned on. That is a lawyer's call, not this file's.

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
      **DONE 2026-08-17 for every line that said "verify" except one.** Artwork, condition modules,
      questions, guidelines, drugs, USMLE and NCLEX are all confirmed as prompt-generated,
      AI-produced and physician-reviewed. **Only the 24 transcribed quiz questions were written
      directly.** Two lines remain: the **34 vector USMLE illustrations** (32 ECGs, a genetics
      pedigree, one other — hand-built schematics, so plausibly human, but unasked), and **the
      code**.
      Still to quantify rather than confirm: where he **rewrote** AI output rather than accepting
      it. `CORRECTIONS-all.md` documents that entry by entry for the guidelines and is the best
      evidence in the repo for a human claim.
- [ ] Trademark: create the USPTO.gov account (identity verification has a lead time), lock the
      goods/services wording from the ID Manual, then file. Full detail in `trademark-plan.md`.
- [ ] **Fee figures in both documents are unverified.** `uspto.gov` and `copyright.gov` are both
      blocked from the build container, so neither could be checked from here. The physician was
      asked to read the USPTO cost page and report back so `trademark-plan.md` can carry real
      numbers instead of "verify before filing".
- [ ] Decide on Netlify password protection before launch.
- [ ] Freeze a dated deposit copy of content + code before filing — checklist item 3.

## Working notes

- **Verify every count against the live content before it goes on a form.** Both documents already
  contain stale numbers from being written days apart. A misstatement on a federal application is
  the specific risk both guides warn about.
- Two filings at $65 each — website content and computer program — is the realistic budget, plus
  trademark fees per class. Confirm all of it against the current schedules.
- If running this session alongside a build session, **use a different branch** — both would
  otherwise commit to `claude/usmle-rounds-codex-module-bmpl61`.
