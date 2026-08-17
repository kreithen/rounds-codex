# App Store submission — draft

> ## ⚠ SUPERSEDED for the App Store — read `app-store-checklist.md` first (2026-08-14)
>
> This file was written for a **no-account v1**, a decision reversed on 2026-08-08 when the login
> wall came back (v82) and re-settled on 2026-08-14: **the wall stays on the web and is stripped
> from the iOS build.** **Counts were refreshed 2026-08-17** — 183 conditions, 102 galleries,
> 1,020 pages, 1,840 quiz questions — with `scripts/read_shipped_counts.js`, which is the way to
> re-check them rather than trusting any figure written down here.
>
> `app-store-checklist.md` is the current, single checklist.
>
> **This file is still the drafting source for the field-by-field submission text** — name,
> subtitle, keywords, description, review notes and the screenshot list. The App Review notes
> answering Guideline 1.4.1 on the dosage calculator are good as written. **The counts and the
> attribution have both been fixed in place (2026-08-17)** — the fields below are current.


> ## ⚠ SUPERSEDED IN PLACES — the login wall came back on 2026-08-08 (v82)
>
> This draft was written for a **no-account v1**. That decision was reversed at the physician's
> request: the app now has an invitation-only Supabase sign-in wall, with share routes
> (`/c/ /s/ /g/ /r/ /u/ /x/`) deliberately open so a shared link still opens the content.
>
> **Four answers below are now wrong, and one is a build item, not a form field:**
>
> | # | what changed | state |
> |---|---|---|
> | 1 | **Privacy label is no longer "Data Not Collected."** Email addresses are collected via Supabase. The label needs Contact Info → Email Address, linked to identity. | **to rewrite** |
> | 2 | **Guideline 5.1.1(v) — in-app account deletion is now required.** Cannot be done client-side: deleting a Supabase auth user needs the service_role key. The edge function is written at `supabase/functions/delete-account/index.ts` but **not deployed**. | **BUILD ITEM** |
> | 3 | **Guideline 2.1 — Apple needs a working demo account** in App Review notes. A review that cannot sign in is an automatic rejection. Invitation-only makes this mandatory, not optional. | **to do** |
> | 4 | "Sign-in required? **No**" (§ near the end) and the surrounding copy | **to rewrite** |
>
> Shipped in the app already (v83): the account page shows the signed-in address, has a working
> Sign out, and states that deletion is by email until (2) lands. The privacy page no longer claims
> the app has no accounts.
>
> **None of this blocks the 17 August WEB launch** — it blocks a clean App Store submission.
>
> **ATTRIBUTION CHANGED 2026-08-09 — APPLIED 2026-08-17.** The approved framing is **"designed by a
> team of clinicians"** / **"designed and clinically reviewed by a team of clinicians"** — the verb
> was "created" until the physician revised it on 2026-08-17 — with Dr.
> Kreithen named as Founder & Clinical Lead; the one-person-wrote-it framing goes. The Description,
> Promotional Text and App Review notes below now use it, and the closing note that argued the
> opposite is corrected in place rather than deleted. The Subtitle and App Name never carried an
> attribution, so they were unaffected. **"Clinically reviewed" is ALLOWED**; **"peer-reviewed"
> is not.** See `marketing-brief.md`.

Everything App Store Connect asks for, drafted and ready to paste, plus the things that will get
this rejected if they go in as-is. Written 2026-08-04 against the live build (v66, 93 galleries).

`app-store-plan.md` holds the *decisions* (price, grandfathering, size). This file is the
*submission*.

---

## Read this part first: four things will get it rejected

Ranked by how likely they are to come back as a rejection, not by how hard they are to fix. Three
of the four are cheap.

### 1. The mandatory login — Guideline 5.1.1(v) — HIGHEST RISK

Apple's rule is explicit: **if an app does not include significant account-based features, it must
let people use it without a login.** Rounds Codex has no account-based features at all. Progress,
bookmarks and quiz scores are `localStorage`, on the device, unsynced. There is nothing an account
does for the user.

A reviewer opening the app sees a sign-in wall in front of a study app. This is a well-known
rejection, and it is the single most likely reason this build does not pass.

It also costs you three other things:

- **The privacy label.** "Data Not Collected" was going to be a genuine differentiator for a
  medical app. An email address is a collected identifier linked to the user. That claim is gone
  while the wall is in.
- **The medical disclaimer.** The wall took the disclaimer's element id, so the first-run
  disclaimer no longer appears at all — see `LOGIN-WALL-id-collision.md`. That disclaimer is the
  Guideline 1.4.1 answer.
- **A demo account obligation.** Any login means App Review needs working credentials that stay
  working, and a review that can't sign in is an automatic rejection under 2.1.

**DECIDED 2026-08-05: v1 ships with no login.** The wall comes out before archiving. That settles
the four consequences above — the privacy label goes back to "Data Not Collected", the demo account
is not needed, the account-deletion requirement disappears, and the disclaimer collision resolves
itself when the wall's element goes. Make an account optional later if it ever does something:
syncing progress across devices, or unlocking the subscription on the website.

**Removing the wall is not just deleting the overlay** — check that nothing else now depends on it,
and re-run both gallery suites afterwards. `scripts/rc_test_auth.js` becomes a no-op rather than a
requirement, and should stay in place until the removal is verified.

### 2. A button that does nothing — Guideline 2.1 — two-minute fix

The download button in the **image viewer's** toolbar is `onclick="toast('Downloads the gallery
PDF')"`. It shows a message and does nothing. The button on the gallery page below it works
(`rcGalleryPDF`) — only the viewer's is a stub.

Reviewers do tap things. A control that announces a feature and doesn't perform it is exactly what
"App Completeness" is about. Point it at `rcGalleryPDF(GID)` and it's done.

### 3. "An AI study tutor" — Guideline 2.1, and it is no longer about "clinically-reviewed"

> **REWRITTEN 2026-08-17. This section used to be headed "Clinically-reviewed" and made two
> arguments, and both have since been overtaken.** "Clinically reviewed" is **allowed** as of
> 2026-08-09 — the old rule conflated it with "peer-reviewed", which means independent
> pre-publication review by other experts and stays forbidden; see `marketing-brief.md`. And the
> count was never fixed at 181: it is **183**, which `manifest.webmanifest` already says. The
> section survives for the one claim that was and is a real problem.

`manifest.webmanifest` says:

> "Interactive clinical learning for nursing & medical students — 183 clinically-reviewed
> conditions, visual atlases, mastery quizzes, and an **AI study tutor**."

The first three quarters of that are true on both platforms. The last four words are **true on the
web and false in the App Store build**, and the reason is worth stating rather than summarising.

Ask Rounds Codex POSTs to `/.netlify/functions/ask`, a real Claude-backed RAG endpoint, and on any
failure falls back to `answer(q)` — a keyword matcher over a **five-entry** table. A native bundle
serves from a local origin, so that endpoint 404s on every question and the fallback is the only
behaviour there is. Measured on 2026-08-17 rather than reasoned about: with no `ask` function
reachable, the four starter buttons answer convincingly (they *are* four of the five entries) and
every other question — community-acquired pneumonia, hyponatremia workup, Ranson criteria — returns
the same paragraph, "I'd ground this in the relevant Rounds Codex condition entry…", beneath a
source chip reading **Rounds Codex → Rounds Codex Library**.

That is the same shape as the viewer's PDF stub in §2 above — which was itself fixed in v72, months
after it shipped, for exactly this reason — and worse in one respect: the deflection *reads* like an
answer and carries a citation, so it does not look broken. A promise in the store listing that a
reviewer can disprove by typing one question is a **Guideline 2.1** finding with the evidence
handed over.

**Decided 2026-08-17: Ask is dropped from the iOS build entirely** and stays on the web, where the
endpoint is real. `scripts/build_ios_variant.js` removes the feature and rewrites the manifest to
"…mastery quizzes, and narrated modules — all offline." **Nothing in this document may promise an
AI tutor, an assistant, or answers of any kind.** As drafted below it does not — the Description,
Promotional Text and Keywords never mention it, which is why this is a one-line fix in the manifest
and a standing rule here rather than a rewrite of the copy.

There is a second-order consequence worth carrying: Ask was the **only** thing in the app that
transmitted anything, so removing it is what makes the "Data Not Collected" nutrition label below
true of the binary rather than nearly true.

**The attribution lines were fixed separately on 2026-08-17** and are no longer an open item: the
Description, Promotional Text and App Review notes all carry the plural framing now. **Every count
in this file is still stale** — 183 conditions, 102 galleries, 1,020 pages, 1,840 quiz questions —
and that remains its own item in `app-store-checklist.md` §3, because a count has to be re-read from
the shipped content rather than adjusted from memory.

### 4. No public privacy policy URL — a hard blocker on the form

App Store Connect will not accept a submission without a **publicly reachable** privacy policy
URL. The Terms and Privacy text exists but only *inside* the app, behind whatever gate is up. There
is no `/privacy` route and `_headers` currently sends `X-Robots-Tag: noindex` sitewide.

Needs: `/privacy` and `/terms` as real URLs on the public origin, reachable with no login, before
the form can be completed.

### Also worth preparing an answer for: the dosage calculator — 1.4.1

Guideline 1.4.1 says apps that **calculate medicine dosages** must come from the manufacturer, a
hospital, a university, a health insurance company or another approved entity, or be FDA-cleared.

`Weight-Based Dose & Volume` computes an administrable dose and a volume to draw up. Its own
purpose text already frames it as practice — *"Do the sum yourself first, then use this to check
it."* — which is the right framing and should be quoted verbatim in the review notes. The company
being physician-owned is the other half of the answer. Don't remove the calculator preemptively;
be ready to explain it. Draft language is in the review notes below.

---

## App Store Connect — fields, ready to paste

### App Name (30 characters)

**Recommended:** `Rounds Codex: Clinical Atlas` *(28)*

The name field is the strongest search-ranking signal, so spending 16 characters on real keywords
beats a bare wordmark. Alternatives: `Rounds Codex` (12, cleanest) or
`Rounds Codex: Med & Nursing` (27, names the audience instead of the content).

### Subtitle (30 characters)

**Recommended:** `Clinical atlas, quizzes, USMLE` *(30, exactly at the limit)*

Alternative if you'd rather lead nursing: `Visual atlas, quizzes, NCLEX` *(28)*. If the name option
already contains "Clinical Atlas", use the NCLEX subtitle instead so the two fields don't duplicate
each other — Apple indexes them separately and a repeat wastes the field.

### Promotional Text (170 characters — editable without a new build)

> New: 102 illustrated galleries — 1,020 original clinical pages — plus 1,840 quiz questions and
> 1,010 USMLE-style items. All offline. Designed by a team of clinicians.

*(166)* Update this at each release; it's the one field that doesn't need a build.

Two notes on that edit. **"Designed by a team of clinicians" is ten characters longer than "Written
by a physician"**, which would have taken the field to 169 — under the limit but with almost nothing
left for a count that grows. "All of it offline" became "All offline" to buy the room back. And the
old *(163)* was wrong: the string was **159**. Recount these fields rather than trusting the number
beside them — Apple truncates silently and a subtitle that loses its last word is not obvious in
the console.

### Description (4,000 characters)

```
Rounds Codex is a clinical study reference for nursing and medical students, designed and
clinically reviewed by a team of clinicians. Every illustration in it is original. It works
entirely offline — every page, image and question is on your device the moment it finishes
downloading.

Three modes, one library. Switch between Nursing, Medical and Resident and the same 183
conditions rewrite themselves for what you actually need: assessment and interventions for
nursing, pathophysiology and workup for medical, management and guidelines for residents.

WHAT'S INSIDE

• 183 conditions across 21 specialties — pathophysiology, presentation, workup, management,
  nursing considerations and references on every one
• 102 illustrated galleries — 1,020 original full-page clinical illustrations, zoomable, with a
  downloadable PDF for each gallery
• 1,840 practice questions — a quiz for every single condition, with an explanation on the
  answer and specific feedback on each wrong choice
• 1,010 USMLE-style items — Step 1 (280), Step 2 CK (318), Step 3 Day 1 (232) and Day 2 (180),
  197 of them illustrated
• 150 NCLEX-style items with save-and-resume and an attempt history
• 300 drug entries linked to the conditions they treat
• 10 clinical calculators — Wells, PERC, CHA₂DS₂-VASc, HAS-BLED, CURB-65, qSOFA, MAP, BMI/BSA
  and weight-based dosage practice
• 470 clinical guideline updates across 25 specialties, by year
• 1,418 resident-level entries — the practical detail for 25 specialties
• Narrated audio for 31 conditions, including CarPlay support

HOW IT'S BUILT FOR STUDYING

• Spaced review — bookmark anything and it enters a review schedule. No second step, no deck
  to build. Grade yourself Again, Good or Easy and it comes back when you need it.
• Deep search across every field of every condition, plus 1,020 illustration titles, telling
  you where the match was
• Swipe between conditions, and between galleries, without going back to a list
• Share any condition, section or gallery as a link

PRIVACY

No analytics. No tracking. Your bookmarks, scores and review schedule stay on your device.

FOR EDUCATION ONLY

Rounds Codex is a study aid. It is not medical advice and does not replace your supervising
clinician. Anything you do for a real patient must be approved by your attending, preceptor or
clinical instructor. Always verify doses against a current formulary and follow your
institution's protocols. Practice scores are practice scores — they are not a predicted exam
score and not a probability of passing.
```

Two things that copy is doing on purpose. **"Designed and clinically reviewed by a team of
clinicians"** is the credibility claim, and it carries two distinct assertions rather than one:
*designed* and *reviewed*. Keeping both is the point — attributing design to an advisor who only
reviewed would overstate their part, and the phrase stays true whether the group is two or twelve.
It replaced "written and illustrated by a practising physician"; **"peer-reviewed" remains
forbidden** and means something else entirely.

**The verb is "designed", not "created"** — the physician's wording, 2026-08-17, and the more
accurate one. "Created" reads as authorship of every word, which is the singular claim wearing
plural clothes and is the thing this rule exists to stop. "Designed" is a claim about the shape of
the thing: what a student is taught, in what order, at what depth, and how the 1,020 illustrations
were specified.

The word lost from the old line was "illustrated", which was doing real work — 1,020 original pages
is unusual — so it comes back as its own sentence, "Every illustration in it is original", where it
is a statement about the artwork rather than about who drew it.

And the education-only paragraph is in the listing, not just in the app — Guideline 1.4.1 reviewers
look for it, and the plan already flagged that the listing needs its own.

The PRIVACY paragraph is accurate as long as v1 ships without the login, which is the decision, and
it became stronger on 2026-08-17: with Ask removed from the iOS build (§3) nothing in the app
transmits anything at all. If the login ever comes back, cut the paragraph — an inaccurate privacy
claim in the description is a 2.3.1 problem on top of everything else.

**One claim to re-check once the download-size decision lands.** The galleries bullet promises "a
downloadable PDF for each gallery" and the opening paragraph promises the app works entirely
offline. Those are compatible today because the 163 MB of gallery PDFs ships in the bundle. The
leading size proposal is to stop bundling them and resolve them against the public origin the way
`RC_SHARE_ORIGIN` already resolves share links — which would make the download need a connection
and put the two sentences in conflict. Whichever way that goes, one of these two lines may have to
change; neither is wrong yet. See `app-store-checklist.md` §4.

### Keywords (100 characters, comma-separated, no spaces after commas)

```
nclex,step1,step2ck,shelf exam,pathophysiology,pharmacology,anatomy,nursing school,med student,rn
```

*(97)* No word here repeats the name or subtitle — Apple indexes those fields separately, so a
repeat is a wasted character. Don't add "medical", "study" or "app": Apple already matches those.

### Category

- **Primary: Medical.** It is where a reviewer expects this and where the audience searches.
- **Secondary: Education.**

Medical as primary does mean 1.4.1 scrutiny, but Education-primary for a clinical reference reads
as category-shopping and doesn't avoid the scrutiny anyway.

### Copyright

`© 2026 Rounds Codex, Inc.`

Matches the footer on all 1,020 illustration pages, and the Apple Developer Program seller name.

### URLs

| field | value | status |
|---|---|---|
| Support URL | `https://roundscodex.com/support` | **needs to exist** — a contact email on a real page is enough |
| Marketing URL | `https://roundscodex.com` | optional |
| Privacy Policy URL | `https://roundscodex.com/privacy` | **required, and does not exist yet** |

If `roundscodex.com` isn't live at submission, use the Netlify origin — `RC_SHARE_ORIGIN` is
already pinned to it. Whichever you use, **delete `robots.txt` and the `X-Robots-Tag` block in
`_headers` first**, or the privacy policy is a page you've told the world not to index and
possibly not to fetch.

### Version and What's New

Version `1.0` — first release, so "What's New" isn't shown. For 1.1 onward, keep it to what
changed for the user, not the build.

---

## Privacy nutrition label

Two answers depending on the login decision. Fill in whichever is true of the build you upload —
this is a legal declaration, not marketing.

**Without the login wall — this is the decision for v1:**

> **Data Not Collected.**

Everything is `localStorage`, device-local, never transmitted. Under Apple's definition that is not
collection. No analytics SDK, no crash reporter, no ad identifier, no network calls to your own
servers.

**With the login wall:**

| type | linked to identity | used for | tracking |
|---|---|---|---|
| Contact Info → Email Address | yes | App Functionality | no |
| Identifiers → User ID | yes | App Functionality | no |

Nothing is used for advertising and nothing is shared with third parties, so **App Tracking
Transparency does not apply** either way — do not add the ATT prompt. But you must also be able to
answer where the data lives (Supabase) and how a user deletes their account, because **Guideline
5.1.1(v) requires an in-app way to delete the account**, not just the data. There is currently no
delete-account control. That is a second, independent 5.1.1 rejection risk that comes with the wall.

---

## Age rating

Answer the questionnaire honestly; **under-rating is a rejection, over-rating is not.**

The question that matters is **Medical/Treatment Information**. This app is nothing but medical and
treatment information, so it is Frequent/Intense, which will place it in one of the older tiers.
Comparable clinical references sit there and it does not hurt discovery for this audience.

Apple revised the age-rating tiers in 2025, so **confirm the exact bands against the current
questionnaire when you fill it in** rather than trusting a remembered number. Everything else —
violence, sexual content, gambling, horror — is None. Two content notes so nothing surprises you:
the suicide gallery includes crisis-line resources, and the withdrawal and substance galleries
discuss alcohol and drug use clinically. Both are clinical education, not depiction, but if the
questionnaire asks about drug references, "clinical/educational" is the honest answer.

---

## App Review Information

### Sign-in required?

**No** — decided 2026-08-05, v1 has no account. Simplest possible answer and one less thing to
break. No demo credentials needed.

### Notes (this is the highest-leverage field on the whole form)

Reviewers are not clinicians and have minutes per app. The notes are where you pre-empt the two
questions this app will raise. Draft:

```
Rounds Codex is a study reference for nursing and medical students. All content is designed and
clinically reviewed by a team of practising clinicians, led by Dr. J. Kreithen, a practising
physician and the company's Founder and Clinical Lead. The company is physician-owned.

EDUCATIONAL USE, NOT CLINICAL USE
The app is a study aid and says so on first launch, before any content is reachable: the user
must accept a disclaimer stating that it is not medical advice, that it does not replace a
supervising clinician, and that anything done for a real patient must be approved by an
attending, preceptor or clinical instructor. The same language appears in the App Store
description and in the in-app Terms.

The app makes no diagnosis, gives no patient-specific recommendation, and never reports a
predicted exam score or probability of passing — practice scores are labelled as practice
scores throughout.

ABOUT THE CALCULATORS (Guideline 1.4.1)
Nine of the ten calculators are published clinical decision scores reproduced for study —
Wells, PERC, CHA2DS2-VASc, HAS-BLED, CURB-65, qSOFA, MAP and BMI/BSA. The tenth, "Weight-Based
Dose & Volume", is a nursing-school dosage-calculation practice exercise, not a prescribing
tool. Its own on-screen purpose text reads: "Work out the dose for a weight-based order and
the volume to measure from a given supply. Do the sum yourself first, then use this to check
it." It contains no drug database and cannot look up or suggest a drug or a dose; the student
supplies every number.

OFFLINE AND SELF-CONTAINED
The entire library ships inside the app — 183 conditions, 1,020 illustrations, 1,840 quiz
questions, 1,010 USMLE-style items. The app makes no network request to load content and
downloads no executable code at runtime.

WHERE TO LOOK
  • Library tab, tap any condition — the three-mode switch is at the top
  • "Illustrations" on a condition with a gallery, e.g. Heart Failure — then swipe between
    images, and past the last one to continue into the next gallery
  • "Take the Quiz" on any condition
  • Calculators tab — CHA2DS2-VASc is a good one to try
  • USMLE PREP button in Medical mode
```

Cut the ABOUT THE CALCULATORS paragraph only if you remove that calculator. Otherwise leave it in —
it costs nothing and answers the question before it is asked.

---

## Screenshots

Required: 6.9" iPhone. Strongly recommended: 13" iPad, because a reference app that looks
phone-only on iPad loses installs. Up to 10 per size; use at least 6.

Shoot these, in this order — the first two are all most people see:

| # | screen | caption |
|---|---|---|
| 1 | A condition page in Medical mode | **183 conditions. Three modes. One library.** |
| 2 | A gallery grid, e.g. Heart Failure | **1,020 original clinical illustrations** |
| 3 | An illustration open in the viewer | **Zoom in. Swipe through. Works offline.** |
| 4 | A quiz question with an answer revealed | **1,840 questions — every condition, explained** |
| 5 | A USMLE item with its illustration | **1,010 USMLE-style items across Step 1–3** |
| 6 | The Library card showing items due | **Bookmark it, and it comes back when you need it** |
| 7 | A calculator, CHA₂DS₂-VASc | **Ten clinical calculators, offline** |
| 8 | Clinical Updates index | **470 guideline updates, 25 specialties** |

**Every screenshot must be the real app** — Guideline 2.3.3. Device-frame them and add the caption
above the frame; don't paint text over the UI.

Two things to avoid shooting: any screen still showing a "Clinical Pending" footer (all fixed, but
check), and the suicide gallery as a hero image.

---

## Pre-submission checklist

Ordered so that if you stop partway, you've done the parts that matter.

**Blockers — the submission cannot be completed or will likely be rejected**

- [ ] **Remove the login wall** (decided 2026-08-05). Then re-run both gallery suites and confirm
      the first-run disclaimer appears — removing the wall should fix the id collision for free.
- [ ] **Publish `/privacy` and `/terms`** as public URLs, reachable with no login
- [ ] **Delete `robots.txt` and the `X-Robots-Tag` block in `_headers`** — otherwise the privacy
      policy is a page you've asked search engines to ignore
- [ ] **Restore the first-run disclaimer** (`LOGIN-WALL-id-collision.md`) — the review notes above
      claim it appears before any content is reachable, and right now that is not true
- [ ] **Fix the viewer's PDF button** — `toast()` → `rcGalleryPDF(GID)`
- [x] **Fix `manifest.webmanifest`** — done for iOS by `scripts/build_ios_variant.js`, which drops
      "AI study tutor" along with the feature (§3). The other two items on this line were wrong:
      "clinically-reviewed" is **allowed** as of 2026-08-09, and the count is **183**, which the
      manifest already says. The **web** manifest is correct as it stands — do not "fix" it.

**Strongly recommended before review**

- [ ] Cut the download further — 383 MB is passable, under 250 MB is a better first impression
      (task #27)
- [ ] Core Spotlight indexing — the strongest single "not a repackaged website" signal for 4.2
- [ ] Universal Links for `/c/`, `/s/`, `/g/`, `/r/`, `/u/`, `/x/`
- [ ] Screenshots at both sizes
- [ ] Test the built package on a real device in Airplane Mode, cold — offline is the main claim
- [ ] Netlify failed-deploy email (task #16)

**Before charging money — not before the free launch**

- [ ] Independent medical review. The reasoning in `app-store-plan.md` stands: free content with a
      visible disclaimer is one thing, a paid subscription sold to students is a product with a
      duty of care.
- [ ] StoreKit paywall via `AppTransaction.originalAppVersion` for grandfathering
- [ ] Copyright registration

---

## Two honest notes on the copy

**The counts are the strongest thing you have, and they go stale silently.** Every number in this
file was refreshed on **2026-08-17** by `node scripts/read_shipped_counts.js <site-root>`, run
against the shipped tree. Four had moved since 2026-08-04: conditions 181 → **183**, galleries
93 → **102**, pages 930 → **1,020**, quiz questions 1,820 → **1,840**. Unchanged and re-derived
rather than assumed: 1,010 USMLE items (Step 1 280, Step 2 CK 318, Step 3 Day 1 232, Day 2 180),
197 of them illustrated, 150 NCLEX, 300 drugs, 470 guideline entries across 25 specialties, 1,418
resident entries, 10 calculators, 21 condition specialties, 31 audio recordings.

**Run the script rather than copying this paragraph** — copying it is the same mistake one step
removed, and it is exactly how 181 survived here for two weeks after the app reached 183. A
description that overstates by one is a 2.3.1 problem for no gain.

Three of that script's derivations were wrong on its first run, and each looked plausible enough to
publish, which is the argument for having it rather than counting by hand:

- `galleries.json` is `{galleries:{…}, real:[…]}`, not a flat map of ids. Read flat, it reports
  **1 gallery and 0 pages**.
- The USMLE banks declare `const USMLE_STEP1_B1 = […]`. A top-level `const` lives in the script's
  lexical scope, not on the sandbox object, so enumerating the sandbox found **0 items** across 43
  files that had all loaded without error.
- `illustrations.js` **assigns** `RC_ILLUS` rather than merging into it, and it loads **first** in
  `usmle/index.html`. Sorted alphabetically it lands last, wipes the other fourteen packs, and
  reports **11 illustrated items instead of 231**.

The script now takes its load order from the `<script src>` list in `usmle/index.html` and reports
a bank file that is on disk but never loaded. All three wrong answers were self-consistent and
none of them threw.

**~~"Written by a physician" is doing the work that "clinically reviewed" can't.~~ Reversed
2026-08-09 — this note had it exactly backwards, and the reversal is worth keeping visible rather
than quietly deleted.** The old reasoning was that "clinically reviewed" overclaimed an external
review that had not happened, so the singular attribution should carry the credibility instead.
Both halves turned out to be wrong.

**"Clinically reviewed" is allowed**, and always was: it was being read as a synonym for
"peer-reviewed", which is a term of art from academic publishing meaning independent
pre-publication review by other experts. That has not happened and the phrase stays forbidden. But
a clinician has reviewed this content, so saying so is a plain statement of fact.

**And the singular attribution is the one that became untrue.** "Written by a physician" was
accurate when one person had written everything; the advisors changed that, and *creation* and
*review* are two different claims — attributing creation to someone who only reviewed overstates
their part. The approved phrasing is **"designed by a team of clinicians"** or **"designed and
clinically reviewed by a team of clinicians"** — "created" was the verb until the physician revised
it to "designed" on 2026-08-17, because *created* reads as authorship of every word and *designed*
is the claim that is actually true: the shape of what is taught, in what order, at what depth. Dr.
Kreithen is named as **Founder & Clinical Lead**, which is an accurate individual role. Applied throughout this file on 2026-08-17: the
Description, the Promotional Text and the App Review notes. See `marketing-brief.md`, which is
canonical for the claims policy.

**One thing to clear before the claim goes public**, and it is not this file's to fix: **3 of 183
conditions still ship `verified:false`** (`metabolic-syndrome`, `hip-fracture`, `back-pain`) and so
carry no RC VERIFIED badge. A listing-wide "clinically reviewed" claim next to three unbadged
modules is an inconsistency a careful reader can find, and the physician is the gate on those.
