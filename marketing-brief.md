# Marketing brief — start here

**This file is the handoff.** It exists so a session that has never seen the build conversations can
pick up marketing without re-deriving anything. Written 2026-08-05 at v67 (95 galleries);
**numbers and asset list refreshed 2026-08-25, the day the iOS app was approved.**

> ## THE APP IS APPROVED — 2026-08-25
> **Rounds Codex: Clinical Atlas, iOS 1.0 (build 4)**, free, no IAP, 16+, Medical/Education,
> **Data Not Collected**, no account. Released quietly the same day: live on the App Store, but not
> announced to anyone. That is deliberate — it gives a real product page to look at and screenshot
> before any launch push.
>
> Everything below that says "does not exist yet" was written before this. The App Store listing,
> the screenshots, the privacy page and the support page all exist now. What is still missing is
> further down, under **Assets**.

Read `CLAUDE.md` first for how the project works, then this. Two other files are **canonical for
their own subjects — read them, don't restate them**, or the copy will drift:

| file | owns |
|---|---|
| `app-store-submission-draft.md` | the App Store listing — name, subtitle, description, keywords, screenshots, review notes |
| `app-store-plan.md` | pricing, grandfathering, privacy posture, and what you can measure without a login |

Everything else about marketing belongs here.

---

## The product, in one paragraph

Rounds Codex is an offline clinical study reference for nursing students, medical students and
residents, designed and clinically reviewed by a team of clinicians. The same 183 conditions
rewrite themselves across three modes — Nursing, Medical, Resident — so one library serves a student
from first year through residency. It ships as a website today and as an iOS app at launch.

## Verified inventory — use these numbers, don't estimate

**Derived from the shipped content on 2026-08-25** with `node scripts/read_shipped_counts.js
<web-clone>`, which reads `content/*.json` and the USMLE banks and prints every figure below. Run it
before any campaign — do not copy a number out of an old draft, including this one.

| | count |
|---|---:|
| conditions | **183**, across 21 specialties |
| conditions awaiting review (`verified:false`) | **0** — cleared at v130, so RC VERIFIED is uniform |
| illustrated galleries | **102** — **1,020 original full-page illustrations** |
| quiz questions | **1,840** — a quiz on every single condition, 0 without |
| USMLE-style items | 1,010 (Step 1 280, Step 2 CK 318, Step 3 Day 1 232, Day 2 180), 197 illustrated |
| NCLEX-style items | 150 |
| drug entries | 300 |
| clinical calculators | 10 |
| clinical guideline updates | 470, across 25 specialties |
| resident-level entries | 1,418 |
| narrated recordings | **31**, with CarPlay support |

The number that does the most work in a headline is **1,020 original illustrations**. Nobody else in
this category draws their own.

**The housekeeping item that used to sit under the claims policy is closed.** All 183 conditions
carry the RC VERIFIED badge as of v130, so a site-wide "clinically reviewed" claim no longer sits
next to three unbadged modules.

## Positioning

**"Designed and clinically reviewed by a team of clinicians — and every illustration is original."**
That is the differentiator. Competitors license stock art and crowdsource questions; here the
artwork and the questions were specified and reviewed by the clinicians who designed the curriculum.

*(This line used to read "Written and illustrated by a practising physician." It was superseded by
the attribution rule below on 2026-08-09 and the verb change on 2026-08-17, but the headline was
never updated to match — an inconsistency inside this file. Fixed 2026-08-25. **The rule below is
the authority; this line now follows it.**)*

Three supporting claims, in order of strength:

1. **Original artwork at a scale nobody matches.** 1,020 pages, one visual system, zoomable, offline.
2. **One library across the whole training arc.** The three-mode switch is unusual — a student buys
   it in nursing school or M1 and it is still the right app in residency.
3. **No tracking, no account, no analytics.** Genuinely rare in this category and provable from the
   App Store privacy label. Worth stating plainly rather than as a footnote.

### The claims policy — this is not optional

> **REVISED 2026-08-09 by Dr. Kreithen.** The rule below used to forbid "clinically reviewed". That
> was wrong, and it was wrong because it conflated two different claims. Corrected here rather than
> quietly edited, so the reasoning survives.

**"Clinically reviewed" and "physician-reviewed" are ALLOWED, because they are true.** Dr. Kreithen
is a practising physician and has reviewed the content; every clinical advisor listed in the app has
agreed to be listed and has clinically reviewed material in it. A clinician reviewed it, so saying a
clinician reviewed it is accurate.

**"Peer-reviewed" is still forbidden.** That is a term of art from academic publishing meaning
independent experts assessed the work before publication, and it is not what happened. The old rule
was really protecting against *that* claim and over-reached to catch it.

**"Evidence-based" is allowed for the content, with one caution.** The modules and guideline entries
cite real sources — but the 2026-08 QA pass over 340 submitted guideline entries found 25 that stated
the opposite of the published result and 16 citing studies that could not be found, all since
corrected. The claim is defensible; treat it as one that has to keep being earned, not a slogan.

**ATTRIBUTION IS PLURAL, decided 2026-08-09. The verb is DESIGNED, revised 2026-08-17.** Say
**"designed by a team of clinicians"**, or **"designed and clinically reviewed by a team of
clinicians"** where the review claim is doing work — not "written by Dr. Kreithen" and not "written
by a physician". This applies to the app, the About page, the store listings and all marketing. Dr.
Kreithen remains named in the app as **Founder & Clinical Lead**, which is an accurate individual
role; what goes is the framing that one person wrote everything.

*Why "designed" and not "created", which is what this said until 2026-08-17:* it is the physician's
wording and it is also the more accurate one. "Created" reads as authorship of every word, which is
the singular claim in plural clothing — the thing this rule exists to stop. "Designed" is a claim
about the shape of the thing: what a student is taught, in what order, at what depth, and how the
1,020 illustrations were specified. That is what the clinicians did.

*One precision worth keeping in mind as the group grows:* **"designed by" and "reviewed by" are
different claims.** Attributing *design* to an advisor who only reviewed would overstate their
part. "Designed and clinically reviewed by a team of clinicians" covers both without assigning
either to a named individual, and stays true whether the group is two or twelve.

~~**One housekeeping item before the claim goes public:** 3 of 183 conditions still ship
`verified:false`.~~ **Closed at v130, 2026-08-17** — 183/183 verified, the badge is uniform, and the
claim can go out without that inconsistency.

**`manifest.webmanifest` is fine as written** — it says "clinically-reviewed conditions" and that is
now the approved wording. It was previously flagged as an overclaim on the submission checklist;
that flag is withdrawn. (This note used to add that its count said 180 against the app's 183 —
**checked 2026-08-17 and the shipped manifest reads 183**, so that has been fixed at some point and
the note was the stale thing. Its "AI study tutor" clause is a separate matter and is handled by
`scripts/build_ios_variant.js` for the iOS build only; on the web the feature is real.)

Also never:

- **a predicted exam score, a pass probability, or "raises your score by X"** — the app deliberately
  never reports one, and saying it in an ad contradicts the product and Guideline 1.4.1
- **any clinical-use framing.** It is a study aid. "Look it up on the ward" is the wrong sentence.
- **naming or implying endorsement** by the NCLEX, USMLE, NBME, ACOG, ACR or any body whose
  guidelines the content cites. "USMLE-style" is fine; "USMLE prep approved" is not.

If a claim needs a hedge to be true, cut it. This is a medical product sold to students.

## Audience

| segment | where they are | the hook |
|---|---|---|
| Nursing students (largest) | r/StudentNurse, TikTok, NCLEX study groups, faculty | dosage practice, care-plan framing, NCLEX items |
| Medical students M1–M2 | r/medicalschoolanki, Discord study servers | the illustrated galleries and Step 1 items |
| Med students M3–M4 | rotation-specific searches | shelf-exam items, the three-mode switch |
| Residents | specialty subreddits, program chat | Clinical Updates — 470 guideline entries by year |
| **Faculty and program directors** | direct outreach | the multiplier — one email can reach a cohort |

Faculty is the underrated one. Everything else is retail; a nursing program that recommends the app
delivers a class at a time, and the free launch is the natural moment to ask.

---

## Decisions already made — do not relitigate

- **Free at launch, no paywall at all.** $5/month for everyone later; no student tier (Apple gives
  third-party apps no student verification).
- **Anyone who installs while it is free is grandfathered permanently.**
- **No account, no login, no server** at v1.
- **The paid launch is gated on an independent medical review that has not happened.** Free content
  with a visible disclaimer is one thing; a subscription sold to students is a duty of care. Do not
  build a campaign that assumes a paid launch date.

Reasoning for each is in `app-store-plan.md`.

---

## Assets: what exists, what does not

**Exists and is good**

- **The App Store listing, live since 2026-08-25** — name, subtitle, description, keywords, 16
  screenshots (8 iPhone 6.9", 8 iPad 13"). The strings are in `app-store-submission-draft.md`.
  **Name, subtitle, description, keywords and screenshots are now frozen until a new version goes
  through review.** Only **Promotional Text** is editable freely — treat it as the one live field.
- **A privacy page and a support page**, both live, both linked from the listing. The blocker this
  file recorded is closed.
- 1,020 illustration pages — the entire content library is a marketing asset. Any single page is a
  social post.
- **Share links across six route families** — `/c/<id>` condition, `/s/<slug>` section,
  `/g/<id>` gallery, `/g/` gallery index, `/r/<spec>-<year>` guidelines, `/u/` clinical updates,
  `/x/<id>` calculator. Every one is a real, stable, linkable URL with a native share sheet.
- A working PWA — installable from the browser today, before the App Store listing exists.

**Does not exist yet**

- Any social account, list, or landing page.
- **A campaign of any kind.** The app is live and unannounced.

**And one thing that turned out to exist but not the way this file assumed.** `roundscodex.com` is a
**separate Netlify site** (project `roundscodexwebsite`) — a marketing site with its own privacy
page. It is *not* the app. `rounds-codex.netlify.app` is the app, and that is where the listing's
support and privacy URLs point, because those are the pages that describe the binary. Consequence
for marketing: **the domain everyone will type is not the product**, and a `/c/<id>` share link on
the custom domain does not resolve. Deciding which host the app lives on is a real decision and it
is on the 1.0.1 list in `app-store-checklist.md`.

### The biggest owned-channel gap, found 2026-08-05

**The app has no `og:` tags, no `twitter:` tags, and no `<meta name="description">`.** Six meta tags
in `<head>`, all viewport and theme-colour.

That matters more than it sounds, because **sharing is a built feature** — buttons on every
condition, section, gallery and guideline page, and `robots.txt` goes to the trouble of
allow-listing eight link-preview crawlers by name *specifically so shared links render a card*. They
cannot. Every link a student shares to Messages, WhatsApp, Slack or Discord today renders as a bare
grey URL. The most organic distribution the product has is switched off by four missing lines.

**And the obvious fix is not sufficient.** `_redirects` rewrites every route to the same static
`index.html`, and preview crawlers do not run JavaScript — so adding og tags to `index.html` gives
all 181 conditions and 95 galleries the *same* card. Per-page cards need prerendering: a Netlify
Edge Function that injects per-route tags, or generated static stub pages. Either is a real task, not
a config toggle. **Scope it properly before promising it.**

Also still live: **`robots.txt` blocks all crawlers and `_headers` sends `X-Robots-Tag: noindex`
sitewide.** Deliberate while pre-launch, and both must be deleted at launch or the site stays
invisible to search forever. It is on the submission checklist.

---

## Channels, ranked honestly

1. **App Store search.** Most installs for a study app come from someone searching "nclex" or
   "step 1". The listing IS the campaign; keywords and screenshots outrank any social effort.
   `app-store-submission-draft.md` covers it.
2. **Fix link previews.** Turns every existing share button into distribution. Highest leverage per
   hour after the listing.
3. **Faculty outreach.** Slow, unglamorous, delivers cohorts. Start during the free period.
4. **Search/SEO on the illustration library.** 950 pages of original medical artwork on indexable
   URLs is a real long-term asset, and it needs the noindex removed to begin ageing.
5. **Reddit and Discord**, participating rather than posting ads. This audience punishes marketing
   and rewards a free useful thing.
6. **TikTok/Instagram** — the artwork is the only reason to bother, and it would work. Highest
   effort, least predictable.

**Custom Product Pages** cut across all of these: up to 35 alternate App Store pages, each with its
own screenshots, URL and conversion metrics. Build one for nursing and one for medical, and the
conversion rates tell you which pitch lands *and* what the audience mix is. Free.

## Measuring it

Full detail in `app-store-plan.md` → "Seeing users, subscribers and money — with no login". Summary:
App Store Connect gives downloads, installs, retention cohorts, territory and **acquisition source**
with no SDK; usage metrics are from opted-in users only, so treat engagement as directional. There is
no age or gender data, ever. The audience mix comes from a linked-out survey or from Custom Product
Page conversion — not from analytics.

**Baseline the free period before designing any paid campaign.** Downloads, day-7 and day-28
retention, territory mix. A conversion target invented without that is a guess.

---

## First moves — rewritten 2026-08-25, post-approval

Items 1, 2 and 5 of the old list are done: the listing is written and live, privacy and support
pages exist, and sixteen screenshots are shot and uploaded. What remains, in order of leverage:

1. **Fix link previews.** Still the highest-value owned-channel work and still untouched — checked
   again on 2026-08-25 and the head has six meta tags, all viewport and theme-colour. No `og:`, no
   `twitter:`, no `<meta name="description">`. Every share the product already offers renders as a
   grey URL. See the scoping note below.
2. **Decide the `noindex` question** — it is now a launch decision rather than a pre-launch default,
   and it is entangled with the copyright filing. See below.
3. **Faculty outreach.** Draft is at `marketing/faculty-outreach-email.md`. Slow, unglamorous,
   delivers cohorts, and the free period is the moment.
4. **Custom Product Pages** — one nursing, one medical. Free, and their conversion rates are the
   only read on audience mix available without an account.
5. **Settle the domain**, because every other channel eventually points at a URL.

### The `noindex` decision, which is not just marketing

`robots.txt` blocks all crawlers and `_headers` sends `X-Robots-Tag: noindex` sitewide. Both were
deliberate while pre-launch. Removing them is what lets 1,020 pages of original medical artwork
begin ageing into search results — channel 4 below, and the only one that compounds.

**But `legal/README.md` records that removing `noindex` very likely starts the three-month §412
window for statutory damages, and that window never reopens.** So this is not a marketing call to
make alone: it trades SEO ageing against a copyright registration timeline. Read that file and
decide deliberately.

## Working notes for whoever picks this up

- **Marketing copy never goes in `content/*.json` or `index.html`.** Those are the product. Keep
  campaign material in this repo as markdown, or in the `rounds-codex-app` repo only as real pages.
- **Numbers change weekly.** Re-read them; do not copy a figure from an old draft.
- **The physician is the medical gate.** Any claim about clinical content gets shown to Dr. Kreithen
  before it goes out, the same rule that governs the content itself.
- If you are running this session at the same time as a build session, **use a different branch** —
  both would otherwise be committing to `claude/usmle-rounds-codex-module-bmpl61`.
