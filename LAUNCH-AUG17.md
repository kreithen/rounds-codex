# Launch readiness — target Monday 17 August 2026

Assembled 2026-08-08 from `app-store-plan.md`, `app-store-submission-draft.md`, `legal/README.md`,
`marketing-brief.md` and the live content. **Nine days.** New galleries and audio are paused by the
physician's decision, so nothing below depends on them.

Counts were read from the shipped content, not from the older docs — several of which carry stale
figures and say so.

---

## The one thing that decides everything else

**Is 17 August the WEB launch or the App Store submission?** The existing checklist mixes both, and
they are not the same project:

- **Web launch** — delete `robots.txt`, drop the `X-Robots-Tag` header, tell people. Achievable in
  nine days; almost everything left is legal and review, not engineering.
- **App Store** — needs a native wrapper, a signed build, App Store Connect setup, and Apple review
  (1–3 days when it goes well, and rejections are common on first submission). Nine days is very
  tight, and the login wall restored today **adds** requirements — see §3.

The rest of this file assumes **web launch on the 17th**, with the App Store as a following
milestone. If that is wrong, say so, because the ordering changes.

---

## 1. Blocking, and only the physician can do them

| # | item | why it blocks | est. |
|---|---|---|---|
| 1.1 | **Medical review of 3 conditions** — `metabolic-syndrome`, `hip-fracture`, `back-pain`, plus their 30 quiz questions | They ship `verified:false`, so they carry no RC VERIFIED badge while every other one of the 183 does. The physician is the medical gate; I will not flip these. | 1–2 h |
| 1.2 | **Turn OFF "Allow new users to sign up"** in Supabase | Accounts are invite-only by today's decision, and the app cannot enforce it. Until this is off, anyone with the anon key can create an account. Auth → Sign In / Providers → Email. | 2 min |
| 1.3 | **Netlify failed-deploy email** | Nothing alerted for 16 hours on 2026-07-30. Project configuration → Notifications → Deploy failed → Email. Out-of-band from the connector *and* from any session. | 5 min |
| 1.4 | **Decide: Netlify password protection, yes or no** | The copyright guide is blunt that *"registration is a remedy after the fact; a password is the only thing that actually prevents the copying."* But the app now has its own login wall, and share links are deliberately public — a site password would break every share link. **My read: no site password, the app wall covers it.** Needs a decision, not drift. | 5 min |

## 2. Legal — starts a clock that never reopens

**Removing `noindex` is very likely first publication.** Under 17 U.S.C. §412, statutory damages and
attorney's fees are only available for infringement beginning *after* registration — unless you
register **within three months of first publication**. That window never reopens.

| # | item | owner | note |
|---|---|---|---|
| 2.1 | **Verify the AI-vs-human provenance inventory** in `legal/README.md` | physician | **Blocks the entire copyright filing.** A registration obtained on an inaccurate application can be cancelled, and one you cannot rely on is worse than none. The draft table is a starting point, not fact. |
| 2.2 | Freeze a dated deposit copy of content + code | me | One command once 2.1 is settled. |
| 2.3 | File copyright — two filings, website content + computer program | physician | Inside the three-month window. Does **not** have to be done by the 17th, but the clock starts then. |
| 2.4 | USPTO account + identity verification, then file the trademark | physician | **Start this now — identity verification has a lead time and could easily exceed nine days.** Search is done (2026-08-05, favourable) and self-filing was decided. Standard character mark, 1(b) intent-to-use. |
| 2.5 | ™ everywhere, ® nowhere | me | ™ is free to use today; ® is illegal until registration issues. |

## 3. What the restored login wall changed today

The App Store draft was written for a **no-account** v1 and says so in several places. Restoring the
wall invalidates four of its answers. None of this blocks a web launch; all of it blocks a clean
App Store submission.

- **The privacy label is no longer "Data Not Collected."** Email addresses are collected. That line
  was called a genuine differentiator in the draft and now has to change.
- **Guideline 5.1.1(v) applies: an account-bearing app must offer in-app account deletion.** There
  is no delete-account control today. This is a build item, not a form field.
- **Guideline 2.1: Apple needs a working demo account** in the review notes. A review that cannot
  sign in is an automatic rejection.
- **The draft's "Sign-in required? No" answer is now wrong**, along with the surrounding copy.

## 4. Content and QA still outstanding

| # | item | owner | note |
|---|---|---|---|
| 4.1 | Anatomy image corrections | production | Excluded by the physician from this list; tracked in `galleries-staging/PRODUCTION-CORRECTIONS-MSK.md` and the leader-line work order. |
| 4.2 | **Near-duplicate gallery page titles** — `schizophrenia` 7 "Management Overview & Treatment Framework" vs 9 "Treatment & Management Strategies"; `anxiety` 7 "Pathophysiology & Neurobiology" vs 8 "Cellular Pathophysiology & Neurobiology" | me | One-line fixes in `content/galleries.json`, still open from the old checklist. ~15 min. |
| 4.3 | `schizophrenia` page 1 citation year | me | Same list. Needs the page read to confirm the right year. |
| 4.4 | Send `DOTS-defect-for-production.md` + the leader-line order | physician | Not launch-blocking, but the longest lead time of anything left. |
| 4.5 | **Backup: run `scripts/backup-rounds-codex.command` and test ONE restore** | physician | An untested backup is not a backup. |

## 5. Marketing — read `marketing-brief.md` before writing anything public

The claims policy matters more than the copy:

- **Never say "clinically reviewed."** No independent medical review has been done. **"Written by a
  physician" is both true and the stronger claim.**
- Launch-day assets and channels are already specified in the brief; the gap is execution, not
  strategy.

## 6. Not launch-blocking, explicitly deferred

- **App download under 250 MB** — matters for the App Store, not the web. `assets/audio` alone is
  180 MB of the current 910 MB tree, and the native build should stream rather than bundle it.
- **New galleries (81 of 183 conditions still uncovered) and the remaining Endocrine audio** —
  paused by the physician. 102 galleries and 31 recordings ship as they are.
- The 27 sub-standard galleries — pending the one-gallery paste test, and cosmetic either way.

---

## Suggested order for the nine days

1. **Today:** start USPTO identity verification (2.4) — longest lead time and the only item that
   could still change the name. Flip the Supabase signup toggle (1.2). Turn on the deploy email (1.3).
2. **This weekend:** medical review of the three conditions (1.1) and the provenance inventory (2.1).
3. **Early next week:** I do 4.2/4.3, the account-deletion control if the App Store is in scope, and
   the deposit freeze (2.2). Backup restore test (4.5).
4. **The 17th:** delete `robots.txt`, remove the `X-Robots-Tag` line, deploy, verify `/version.txt`,
   and start the three-month copyright clock deliberately rather than by accident.
