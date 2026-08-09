# Marketing brief — start here

**This file is the handoff.** It exists so a session that has never seen the build conversations can
pick up marketing without re-deriving anything. Written 2026-08-05 at v67 (95 galleries).

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
residents, created and clinically reviewed by practising clinicians. The same 183 conditions
rewrite themselves across three modes — Nursing, Medical, Resident — so one library serves a student
from first year through residency. It ships as a website today and as an iOS app at launch.

## Verified inventory — use these numbers, don't estimate

Read out of the shipped content on 2026-08-05. **Re-read them before any campaign** with
`python3 scripts/gen_gallery_gap.py` and the counts in `content/*.json`; they move most weeks.

| | count |
|---|---:|
| conditions | 181, across 21 specialties |
| illustrated galleries | 95 — **950 original full-page illustrations** |
| quiz questions | 1,820 — a quiz on every single condition |
| USMLE-style items | 1,010 (Step 1 280, Step 2 CK 318, Step 3 Day 1 232, Day 2 180), 197 illustrated |
| NCLEX-style items | 150 |
| drug entries | 300 |
| clinical calculators | 10 |
| clinical guideline updates | 470, across 25 specialties |
| resident-level entries | 1,418 |
| narrated recordings | 13, with CarPlay support |

The number that does the most work in a headline is **950 original illustrations**. Nobody else in
this category draws their own.

## Positioning

**"Written and illustrated by a practising physician."** That is the whole differentiator and it is
true. Competitors license stock art and crowdsource questions; every illustration and every question
here has one clinical author.

Three supporting claims, in order of strength:

1. **Original artwork at a scale nobody matches.** 950 pages, one visual system, zoomable, offline.
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

**ATTRIBUTION IS PLURAL, decided 2026-08-09.** Say **"created by a team of clinicians"** or
**"created and clinically reviewed by practising clinicians"** — not "written by Dr. Kreithen" and
not "written by a physician". This applies to the app, the About page, the store listings and all
marketing. Dr. Kreithen remains named in the app as **Founder & Clinical Lead**, which is an
accurate individual role; what goes is the framing that one person wrote everything.

*One precision worth keeping in mind as the group grows:* **"created by" and "reviewed by" are
different claims.** Attributing *creation* to an advisor who only reviewed would overstate their
part. "Created and clinically reviewed by practising clinicians" covers both without assigning
either to a named individual, and stays true whether the group is two or twelve.

**One housekeeping item before the claim goes public:** 3 of 183 conditions still ship
`verified:false` (`metabolic-syndrome`, `hip-fracture`, `back-pain`) and so carry no RC VERIFIED
badge. A site-wide "clinically reviewed" claim next to three unbadged modules is an inconsistency a
careful reader can find. Clear those three and the claim is uniform.

**`manifest.webmanifest` is fine as written** — it says "clinically-reviewed conditions" and that is
now the approved wording. It was previously flagged as an overclaim on the submission checklist;
that flag is withdrawn. (Its count says 180 and the app has 183 — worth fixing, but a stale number,
not an overclaim.)

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

- 950 illustration pages — the entire content library is a marketing asset. Any single page is a
  social post.
- **Share links across six route families** — `/c/<id>` condition, `/s/<slug>` section,
  `/g/<id>` gallery, `/g/` gallery index, `/r/<spec>-<year>` guidelines, `/u/` clinical updates,
  `/x/<id>` calculator. Every one is a real, stable, linkable URL with a native share sheet.
- A working PWA — installable from the browser today, before the App Store listing exists.

**Does not exist yet**

- `roundscodex.com` — no support page, no privacy page. **The privacy URL is a hard blocker on the
  App Store form.**
- Screenshots — the plan and captions are in the submission draft; nothing is shot.
- Any social account, list, or landing page.

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

## Suggested first moves for the marketing session

1. Read `app-store-submission-draft.md` end to end. The listing is the campaign.
2. Stand up `roundscodex.com` with a landing page, `/privacy` and `/support`. Privacy blocks the
   submission form.
3. Scope the og-tag work honestly — decide prerendered per-route cards vs. one good site-wide card
   as a first step.
4. Draft the faculty outreach email. One page, links to the free app, no marketing voice.
5. Plan the eight screenshots from the captions already written.

## Working notes for whoever picks this up

- **Marketing copy never goes in `content/*.json` or `index.html`.** Those are the product. Keep
  campaign material in this repo as markdown, or in the `rounds-codex-app` repo only as real pages.
- **Numbers change weekly.** Re-read them; do not copy a figure from an old draft.
- **The physician is the medical gate.** Any claim about clinical content gets shown to Dr. Kreithen
  before it goes out, the same rule that governs the content itself.
- If you are running this session at the same time as a build session, **use a different branch** —
  both would otherwise be committing to `claude/usmle-rounds-codex-module-bmpl61`.
