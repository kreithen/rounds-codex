# Google Play store listing — draft

**Written 2026-09-09.** Every field drafted to Play's limit, plus the Data safety, Health apps and
content-rating answers as a filled-in worksheet. `HANDOFF-android-app.md` §4.6.

**Counts derived from shipped content today** with
`node scripts/read_shipped_counts.js ../rounds-codex-app` against v133. Re-run it before pasting
anything: every earlier document's numbers went stale, including the handoff's, which said
"1,000+ illustrations · 2,900+ questions" where the real figures are 1,020 and 3,000.

**This is NOT the App Store text with the word Android swapped in.** Four things had to change, and
three of them are the sort that get a listing rejected or make it untrue. They are marked ⚠ below
and explained in §7.

---

## 1. Title — max 30

**`Rounds Codex: Clinical Atlas`**  *(28)*

Same as the App Store name, and it should stay same: two stores, one product, one name people
search for. Play weights the title heavily for search, so the 16 characters after the wordmark are
working characters, not decoration.

## 2. Short description — max 80

**`Nursing & med student atlas: 183 conditions, NCLEX & USMLE practice, offline.`**  *(77)*

**This field matters more on Play than its App Store counterpart did.** Play has **no keywords
field** — the algorithm indexes the title, the short description and the full description, and the
short description is the one shown above the fold before anyone taps "more". So the 100 characters
of keywords drafted for Apple (`nclex,step1,step2ck,shelf exam,…`) have nowhere to go here and must
be earned inside real sentences instead. That is why this line spends its budget on *nursing*,
*med student*, *NCLEX* and *USMLE* rather than on adjectives.

Two alternatives, both within the limit, if you would rather lead differently:

| | chars | leads with |
|---|---:|---|
| `Illustrated clinical atlas for nursing and med students. NCLEX, USMLE, offline.` | 79 | the artwork |
| `183 conditions, 1,020 original illustrations, NCLEX & USMLE practice — offline.` | 79 | the numbers |

**Do not keyword-stuff.** Play's Metadata policy explicitly prohibits repetitive or irrelevant
keywords, and enforcement here is automated.

## 3. Full description — max 4,000

Drafted at **2,823 characters**, leaving 1,177 of headroom for counts that grow. Play renders a
small HTML subset (`<b>`, `<i>`, `<u>`, `<br>`, `<p>`); the bullets below are literal `•`
characters, which is what most listings use and what survives the plain-text paste.

```
Rounds Codex is a clinical study reference for nursing and medical students, designed and clinically reviewed by a team of clinicians. Every illustration in it is original. It works entirely offline — every page, image and question is on your device.

Three modes, one library. Switch between Nursing, Medical and Resident and the same 183 conditions rewrite themselves for what you actually need: assessment and interventions for nursing, pathophysiology and workup for medical, management and guidelines for residents.

WHAT'S INSIDE

• 183 conditions across 21 specialties — pathophysiology, presentation, workup, management, nursing considerations and references on every one
• 102 illustrated galleries — 1,020 original full-page clinical illustrations, zoomable, with a downloadable PDF for each gallery
• 1,840 practice questions — a quiz for every single condition, with an explanation on the answer and specific feedback on each wrong choice
• 1,010 USMLE-style items — Step 1 (280), Step 2 CK (318), Step 3 Day 1 (232) and Day 2 (180), 231 of them illustrated
• 150 NCLEX-style items with save-and-resume and an attempt history
• 300 drug entries linked to the conditions they treat
• 10 clinical calculators — Wells, PERC, CHA₂DS₂-VASc, HAS-BLED, CURB-65, qSOFA, MAP, BMI/BSA and weight-based dosage practice
• 470 clinical guideline updates across 25 specialties, by year
• 1,418 resident-level entries — the practical detail for 25 specialties
• Narrated audio for 31 conditions

HOW IT'S BUILT FOR STUDYING

• Spaced review — bookmark anything and it enters a review schedule. No second step, no deck to build. Grade yourself Again, Good or Easy and it comes back when you need it.
• Deep search across every field of every condition, plus 1,020 illustration titles, telling you where the match was
• Swipe between conditions, and between galleries, without going back to a list
• Share a condition, a specialty section or a guideline year as a link

PRIVACY

No account and no sign-in. No analytics, no advertising and no trackers. Your bookmarks, scores and review schedule stay on your device, and nothing in the app transmits anything.

IMPORTANT — FOR EDUCATION ONLY

Rounds Codex is a study aid for students and clinicians in training. It is not a medical device and does not diagnose, treat, cure or prevent any medical condition. It is not medical advice and does not replace your supervising clinician. Always consult a qualified healthcare professional for medical advice, diagnosis or treatment.

Anything you do for a real patient must be approved by your attending, preceptor or clinical instructor. Always verify doses against a current formulary and follow your institution's protocols. Practice scores are practice scores — they are not a predicted exam score and not a probability of passing.
```

## 4. Graphics

| asset | spec | status |
|---|---|---|
| **App icon** | 512×512 PNG, 32-bit, **no alpha** | the iOS icon set has it — reuse the circular mark, not the full lockup |
| **Feature graphic** | 1024×500 PNG or JPEG, **no alpha**, required | **does not exist** — derive from `landing/social-*.html`, which carry the same visual system |
| **Phone screenshots** | **at least 4**, max 8. PNG or JPEG, 9:16 portrait, **minimum 1080×1920** | **must be re-rendered** — see below |
| 7" and 10" tablet | optional, same rules | skip for v1 unless the tablet layout is being promoted |

⚠ **The App Store screenshots cannot be reused.** They are 1290×2796, which is 2.17:1, and **Play's
maximum aspect ratio is 2:1** — they will be rejected. Re-render the same seven-panel design at
**1080×1920** (9:16 exactly). Do not crop the iOS finals: cropping a 2.17:1 image to 2:1 eats 8% of
the height, which is where the captions sit.

Play requires **four** screenshots minimum for an app at 1080px, so there is no minimal-effort path
here; eight is the maximum and the shot list already has eight.

**Frames:** frameless, or a generic Android device frame. Never an iPhone frame — it is both wrong
for the platform and a metadata problem.

### The eight shots

Straight from `native/SCREENSHOT-SHOTLIST.md`, whose navigation is checked against shipped content,
with the captions updated to today's counts. Dismiss the medical disclaimer (`#rc-gate`) before
shooting anything — it covers the whole screen on a fresh install.

| # | Where | Caption |
|---|---|---|
| 1 | A condition page, Medical mode, top of page | **183 conditions. Three modes. One library.** |
| 2 | A gallery grid full of real thumbnails | **1,020 original clinical illustrations** |
| 3 | One illustration open in the viewer, zoomed | **Zoom in. Swipe through. Works offline.** |
| 4 | A quiz question with the answer revealed | **1,840 questions — every condition, explained** |
| 5 | A USMLE item with its illustration on screen | **1,010 USMLE-style items across Step 1–3** |
| 6 | The Library review card (bookmark 3–4 first) | **Bookmark it, and it comes back when you need it** |
| 7 | A calculator mid-use, showing a score | **Ten clinical calculators, offline** |
| 8 | The Clinical Updates index | **470 guideline updates, 25 specialties** |

Shot 6 needs one step of setup, not a wait: `isDue()` returns true for a bookmarked item with no
schedule yet, so the card appears the moment you bookmark something.

## 5. Store settings

| field | value |
|---|---|
| **App category** | **Medical** (primary). Matches the App Store listing and is where the audience searches. It routes the app through the health review path, which §6 answers. |
| **Tags** | Play's tag picker, up to 5 — pick from its fixed list; there is no free-text keyword field. |
| **Contact email** | **the support address, shown publicly on Play** — not a personal one |
| **Contact website** | `https://roundscodex.com` |
| **Privacy policy** | `https://roundscodex.com/privacy/` — **live and correct as of v133**, which is what §4.4 shipped today; it now says "the iOS and Android apps" |

## 6. Declarations — answers, not guesses

### 6a. Data safety

**No data collected. No data shared.** True of this build rather than nearly true, and it is
*measured*: `verify_ios_variant.js` watches every request over a full session and asserts none
leaves the origin, and the variant removes Ask Rounds Codex — the only feature that ever
transmitted anything — along with the Supabase URL.

| question | answer |
|---|---|
| Does your app collect or share any of the required user data types? | **No** |
| Is all of the user data collected by your app encrypted in transit? | N/A — nothing is collected |
| Do you provide a way for users to request that their data is deleted? | N/A. Everything is on-device and **My account → Clear my saved data** erases it. |
| Third-party SDKs collecting data | **none** — there are no third-party SDKs in the build |

⚠ **This answer is only true if the payload is built by the chain.** If a future build restores the
login wall or Ask, the Data safety form is wrong and that is a policy violation, not a copy error.
`preflight.sh android` is the check.

### 6b. Health apps declaration — required, and easy to get wrong

**Yes, this is a health app and the form must be completed.** Play names *"educational resources for
healthcare professionals and patients, including medical encyclopedias, treatment guidelines and
symptom checkers"* as a declarable category. Assuming an educational reference is out of scope is
exactly how listings collect an **"Inaccurate Health Apps Declaration"** rejection.

| question | answer |
|---|---|
| Is your app a medical device? | **No.** It provides no diagnosis, no treatment recommendation for an individual patient, and makes no measurement. |
| Does it use Health Connect? | **No** |
| Does it make health claims? | **No.** It teaches; it does not claim a health benefit, improvement or outcome. |
| Intended users | Nursing and medical students, and clinicians in training. |
| Regulatory approval | None sought or required — see above. |

⚠ **Play requires a specific disclaimer in the app description for a non-medical-device health
app**: that the app *"is not a medical device and does not diagnose, treat, cure, or prevent any
medical condition"*, plus a reminder to consult a healthcare professional. **The App Store text
does not contain that wording** — its education-only paragraph says "not medical advice" and stops
short. The description in §3 has been rewritten to carry both sentences verbatim in intent. Do not
trim that paragraph to save space; it is the compliance surface.

**The dosage calculator** is the one feature that invites a second look, and the answer prepared for
Apple's Guideline 1.4.1 in `app-store-submission-draft.md` transfers word for word: it is a
weight-based dosage **practice** exercise for students, it does not produce a dose for a named
patient, and the app tells the reader to verify against a current formulary.

### 6c. Content rating (IARC)

A questionnaire, not a choice — you answer and IARC computes the ratings for every region, so do
not aim for a target. The two questions that actually bite:

- **References to drugs / controlled substances.** The app has 300 drug entries and discusses
  pharmacology throughout, in an educational and medical context. Answer honestly and say it is
  educational/medical where the form offers that distinction.
- **Medical or clinical imagery.** 1,020 clinical illustrations, some anatomical and surgical.

The App Store answer was 16+ on Medical/Treatment Information. ⚠ IARC's output may not land on an
equivalent band; **read the computed result before submitting** rather than assuming it matches.

## 7. ⚠ The four claims that did NOT survive the port

This is the part that is not a copy-paste, and three of these are accuracy problems rather than
formatting ones.

1. **"including CarPlay support" — REMOVED, and deliberately not replaced.** CarPlay is Apple's.
   The app sets `navigator.mediaSession` metadata, which is *also* what Android Auto and the
   lock-screen controls read, so an Android equivalent might work — but **it has never been run on
   an Android device, and Android Auto media apps additionally need a manifest declaration and
   Google's review**, neither of which exists. Claiming it would be a claim nobody has tested. The
   line is now just "Narrated audio for 31 conditions". If the physician confirms lock-screen
   controls work on a real phone, it can be added back as a fact.

2. **"Share any condition, section or gallery as a link" — CORRECTED to drop "gallery".** This is
   wrong in the *shipped App Store description too*, and was found by grepping the app rather than
   reading the doc: `rcShareGallery` has **no call site** — its button was removed in v74 when the
   PDF button started raising a real file sheet, and CLAUDE.md records that there is now no way to
   produce a `/g/<id>` link from inside the app. What is genuinely shareable: a condition, a
   specialty section, a specialty page, a guideline year, the galleries **index**, and Clinical
   Updates. The new line reads "Share a condition, a specialty section or a guideline year as a
   link". **Worth fixing on the App Store listing as well** — it is a describes-a-feature-that-is-
   -not-there problem on both stores.

3. **"197 of them illustrated" — CORRECTED to 231.** 231 USMLE items carry an illustration; 197 of
   those are real generated images and 34 are vector schematics. The Apple text quoted the
   photographic subset and so *understated* the app. Also worth fixing on the App Store listing.

4. **The offline claim is contingent on §4.3 and must be re-read before submitting.** The
   description promises the app "works entirely offline" and that each gallery has "a downloadable
   PDF". Both are true under **option A** (Play Asset Delivery install-time packs). Under **option
   B** (`RC_MEDIA_ROOT` streaming) the text stays true but the *artwork and PDFs* need a connection,
   and both sentences become false. **Whichever way the emulator experiment goes
   (`native/ANDROID-RUNBOOK.md` step 6), come back to this paragraph.** Saying it in the listing is
   far cheaper than having a reviewer or a reader find it.

## 8. What is still missing

- ~~**The feature graphic (1024×500) does not exist.**~~ **DONE 2026-09-09 —
  `native/play-graphics/feature-graphic.png`**, generated and checked by
  `scripts/make_feature_graphic.js`. Deliberately not the social template resized: "Download for
  FREE", the App Store badge, the phone mockups and the near-black base are all forbidden or
  ill-advised in a Play feature graphic. See that folder's README.

  **Every listing asset now exists.** What remains on this page is entering it, which only the
  account holder can do.
- ~~**The screenshots do not exist at Play's ratio.**~~ **DONE 2026-09-09 — `native/play-screenshots/`.**
  Eight panels captured from the real app at exactly 1080×1920 by
  `scripts/shoot_play_screenshots.js`, which renders at 360×640 CSS with deviceScaleFactor 3.
  Possible here and not for iOS because Android WebView *is* Chromium. Captions are in
  `captions.json` and are **not** burned in; ask if you want composed panels. Read that folder's
  README for the three things worth knowing (shot 3 is full-bleed artwork, shot 6 is in Nursing
  mode, and none of it is a device pass).
- **Everything in §6 is an answer, not a submission.** The forms live in Play Console and only the
  account holder can fill them.
- **The counts will drift**, so do not re-read them by eye. On the day you paste:

  ```sh
  node scripts/verify_listing_counts.js ../rounds-codex-app
  ```

  It derives every count from the shipped content and fails on any number either store draft quotes
  that the content does not support. It is a guard rather than decoration: on its first run it
  caught two live defects in `app-store-submission-draft.md` — "197 of them illustrated" where 231
  USMLE items carry one, in the description **and** again in the paragraph that asserts the numbers
  had been re-derived.
