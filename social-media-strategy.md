# Social media strategy

**Canonical for social. Read `marketing-brief.md` first — this expands its channels #5 (Reddit/
Discord) and #6 (TikTok/Instagram) into a plan.** Written 2026-08-05 at v67 (95 galleries).

Three assumptions this is built on. Change them and revisit the plan:

1. **Solo operator.** Dr. Kreithen runs this alongside a clinical job. Every cadence below is sized
   to be sustainable for one busy physician, not a content team. **Sustainable beats ambitious** —
   an account that posts twice a week for a year beats one that posts daily for a month and dies.
2. **Pre-launch, free PWA.** No App Store listing yet; the app is installable from the browser
   today and **free, with permanent grandfathering for anyone who installs while it's free**. That
   is the single best thing this audience can be offered (see "Why this works" below).
3. **Artwork-led.** The 950 original illustrations are the reason to be on social at all. A strategy
   that isn't built around them is a strategy for a different product.

---

## The one-sentence strategy

**Turn 950 physician-drawn illustrations into a steady feed of genuinely useful, free study
material, so the artwork does the marketing and the "free, no-tracking, drawn by one physician"
story travels on its own.**

Everything below serves that. We are not running ads at students who punish ads. We are giving away
a beautiful free thing and letting people who like it tell each other.

## Why this works (and the claim we lead with)

This audience — nursing and med students, residents — **rewards a free useful thing and punishes
marketing.** That is stated plainly in the brief and it governs everything. So:

- The hero of every post is the *content*, not the app. The app is the payoff, not the pitch.
- The differentiator is true and unfakeable: **"written and illustrated by a practising physician."**
  Competitors license stock art and crowdsource questions. Nobody else draws their own 950 pages.
  That is the whole story and it is honest.
- **Free + no account + no tracking** is rare enough in this category to be a post all by itself,
  and it is provable — no hedging required.

## Hard dependencies — social is throttled until these land

Do not spend real effort driving traffic to shared links until these are fixed, or the leverage
leaks out:

- **Link previews are broken.** No `og:`/`twitter:` tags, so every link a student shares — and
  every link *we* post — renders as a bare grey URL. Sharing is a built feature with buttons on
  every page; social multiplies it, but only once the cards render. **This is the top pre-social
  fix.** (Full scoping in `marketing-brief.md` → "The biggest owned-channel gap.")
- **`robots.txt` blocks all crawlers and `_headers` sends `X-Robots-Tag: noindex` sitewide.**
  Pinterest and Google can't index the artwork, and some link-preview crawlers are blocked outright.
  Deliberate while pre-launch; **must come out at launch.**
- **Handles and a link-in-bio destination don't exist yet.** See the launch checklist.

None of these block *planning* or *account setup*. They block the point where posting converts to
installs. Sequence accordingly: set up accounts and start building an audience now; time the traffic
push to when previews render and the site is indexable.

---

## Platforms, ranked for social specifically

This ranking is *within social* — it sits under the brief's overall channel ranking, where App
Store search and faculty outreach outrank all of social. Ordered by return per hour for a solo
operator with this exact asset.

### 1. Instagram (home base) — feed carousels + Reels

The artwork is native here and the audience is dense. This is the base of operations.

- **Carousels** are the workhorse: 3–10 illustration pages on one condition, swipeable, with the
  teaching in the caption. Saves and shares (not likes) are what the algorithm rewards, and
  study material gets saved.
- **Reels** for reach beyond followers: a slow zoom across a gallery, or the three-mode switch in
  motion (see content pillars).
- Lowest marketing-punishment of the high-reach platforms — an educational carousel *is* the value,
  so it doesn't read as an ad.

### 2. TikTok — highest ceiling, highest effort

Algorithmic reach with zero followers is real here, which no other platform offers. But it demands
short vertical *video*, which is the most production-heavy format.

- Formats that fit: "watch this condition come together" (drawing/zoom), "a nurse, a med student and
  a resident learn the same disease three different ways," "one quiz question — can you get it?"
- **Higgsfield accelerator:** the connector can generate Reels/Shorts and even publish to TikTok
  directly (`shorts_studio_*`, `tiktok_publish`, `virality_predictor`). It is a real force-multiplier
  for the video arm — but see the guardrail: **any generated clinical imagery goes through the
  physician gate, same as app content, and credit spend needs sign-off.** Do not let generation
  route around the medical gate.
- Realistic take: promising, not guaranteed. Treat it as an experiment with a high ceiling, not a
  commitment. Mirror every TikTok to Reels and YouTube Shorts so the production cost pays three times.

### 3. Reddit — two tracks: the owned sub and the big subs

Exactly where they are: r/StudentNurse, r/nursing, r/NCLEX, r/medicalschool, r/medicalschoolanki,
r/step1, r/step2, r/Residency and specialty subs. High intent, but self-promo rules are strict and
mods and users both punish anything that smells like an ad. Run it as two tracks:

- **Track A — r/RoundsCodex (owned home base).** Your subreddit, your rules: post artwork freely,
  drop a new gallery per week, answer questions, seed the flagship-launch material here first. It's
  also where a Reddit link *can* point without tripping self-promo etiquette. Early on it's tiny;
  treat it as a portfolio + landing spot, not a traffic source, and grow it by inviting people you
  genuinely help in the big subs.
- **Track B — the big subs (be useful first, link second).** Answer questions in your specialty, and
  link the free tool *only when it genuinely answers the question asked.* A physician giving real
  answers is welcome; a physician dropping a link is not.
  - **One flagship post per relevant sub, at launch**, done right — "I'm a physician, I drew a free
    offline study atlas, no account, no ads, here it is." Read each sub's self-promo rule first;
    several require mod approval or a contribution ratio. Never post the same thing to multiple subs
    the same day — fastest route to a sitewide spam flag.

### 4. Pinterest — underrated for this exact asset

Evergreen *visual search*. Medical illustration is one of the things people actively search Pinterest
for, and pins age into long-tail traffic for years. Cheap: batch-pin the illustrations with good
titles, link each to its condition page. **Blocked until noindex comes off and links preview** — but
first in line the day they do. Lowest effort-to-longevity ratio of any platform here.

### 5. Discord — relationships, not broadcast

Nursing and med-school study servers. Not a posting channel — a seeding one. Join a few, be a helpful
presence, let the tool come up naturally. Slow, compounding, no scale. Assign it an hour a week, not
a content calendar.

### 6. Secondary / opportunistic

- **Facebook Page + Groups** — the Page itself is a low-effort mirror of IG (cross-post carousels),
  but the real value is **nursing-school Facebook groups**, which are large and active. Same rule as
  Reddit: be a useful presence, don't spam. The Page is who you post/comment *as*.
- **YouTube Shorts** — free mirror for every TikTok/Reel. Set-and-forget cross-post.
- **LinkedIn** — not for students, but the *faculty and program-director* angle lives here. One
  post about the free-for-educators offer belongs on LinkedIn, tied to the faculty outreach in the
  brief.
- **X/Twitter** — low priority for this audience; a mirror channel, not a primary one.

---

## The content engine — draw once, post everywhere

The strategic advantage is inventory: 181 conditions × 3 modes, 950 illustrations, 1,820 quiz
questions. That's a near-inexhaustible well. The job is a **repeatable atomic unit** so a solo
operator never faces a blank page.

**The unit is one condition.** From a single condition you get, in one sitting:

1. An **IG carousel** — its best 3–6 illustration pages + a teaching caption.
2. A **Pinterest pin** per page — same images, condition-page link.
3. A **Reel / TikTok / Short** — a zoom or three-mode-switch clip built from the same pages.
4. A **quiz post** — pull that condition's quiz question; answer in slide 2 or the comments.
5. A **Reddit-ready helpful answer** kept on file — when someone asks about that condition, you
   already have the illustration and a real explanation.

Batch it: pick ~8 conditions a month, produce all five outputs for each in one or two sessions, and
schedule them out. That's a month of multi-platform content from two afternoons.

### Content pillars (rotate these)

| pillar | what it is | why it works |
|---|---|---|
| **The illustration** | One condition's pages, carousel or zoom | The hero asset; nobody else has it |
| **Three modes, one disease** | Same condition shown Nursing → Medical → Resident | The product's unique idea, in one post |
| **One question** | A single quiz item; audience answers | Questions get comments; NCLEX/Step framing pulls the right people |
| **The practical tool** | A calculator (Wells, CHA₂DS₂-VASc, CURB-65…) | Quick, useful, immediately saveable |
| **Behind the pen** | Physician-author POV: why this page, what to notice | The moat — competitors literally cannot post this |
| **Free & private** | No account, no ads, no tracking, permanent free-install | Rare, values-forward, gets shared for what it stands for |

Lead with the illustration pillar; it's the strongest and the most defensible. "Behind the pen" is
the one to invest in over time — it's the human version of the differentiator and it builds the kind
of following that converts.

---

## Voice and the claims guardrails (non-negotiable)

Voice: a knowledgeable physician who teaches, not a brand that sells. Plain, generous, a little dry.
Same register as a good attending on rounds. No hype, no emoji-spam, no "🔥 GAME-CHANGER."

**The claims policy from the brief applies to every single post, caption, bio and comment:**

- **Never** "clinically reviewed", "physician-reviewed", "peer-reviewed", "verified", or
  "evidence-based" as a blanket claim. No independent review has happened. Say **"written and
  illustrated by a practising physician"** — true, and stronger.
- **Never** a predicted score, pass probability, or "raises your score by X." The product refuses
  to report one on purpose; an ad that promises one contradicts it.
- **Never** clinical-use framing. It is a *study aid.* "Look it up on the ward" is the wrong
  sentence. "Study it before the ward" is the right one.
- **Never** imply endorsement. "USMLE-style" / "NCLEX-style" is fine; "USMLE prep approved" or any
  NBME/ACOG/ACR/etc. logo or name-drop is not.
- If a claim needs a hedge to be true, cut it.

**The physician is the medical gate — on social too.** Any post that makes a clinical claim, and any
AI-generated clinical image, gets Dr. Kreithen's eyes before it goes out. Autonomy is fine for
mechanics (scheduling, cropping, hashtags); it stops at medical correctness.

Safe evergreen bio line, reusable everywhere:
> A free, offline clinical study atlas — 181 conditions, 950 original illustrations, written and
> illustrated by a practising physician. No account, no ads, no tracking. *(numbers drift weekly;
> re-check before pasting)*

---

## Brand assets and system

Received 2026-08-05. The visual identity is settled; use it consistently across every account.

- **Logo:** the EKG-circle mark + "Rounds Codex" wordmark (the R is styled as ℞). Use the on-black
  version as the profile picture on every platform. Keep it identical everywhere — recognisability
  beats per-platform cleverness.
- **Banner / cover:** logo + tagline on the blue gradient — use as the header/cover on X, YouTube,
  LinkedIn and the Reddit banner.
- **Tagline:** **"Learn. Understand. Succeed."** Approved, no claims issue — safe to use anywhere.
- **Palette:** near-black navy background, **electric cyan `#00c2ff`** as the primary accent (the
  pulse line; matches the app's `--sec`), white wordmark. Mode accents from the app: **green**
  (Nursing), **cyan** (Medical), **purple** (Clinical Updates). Keep posts in this palette so the
  grid reads as one brand.
- **Real screenshots are assets.** The actual app home screen (Nursing mode) is honest and
  on-brand — real screenshots should carry the feed, not mockups.
- **Domain:** `roundscodex.com` (the "join the list" destination; not live yet — see dependencies).

### Assets that must NOT ship as-is — claims-policy flags

The medical gate applies to marketing art the same way it applies to app content. Two received
assets fail it:

- **The "Coming Soon" poster** — breaks the policy multiple ways and invents features:
  - *"data-driven guide … to decision-making confidence"* and *"Rapid bedside reference"* →
    clinical-use framing; it is a study aid, not a bedside tool.
  - *"Performance Analytics"* → the app has **no analytics and no tracking** (a selling point); the
    line contradicts the product and edges into predicted-score territory the app refuses.
  - *"THE OFFICIAL PATH…" / "OFFICIAL ACCESS LIST"* → "official" implies endorsement.
  - *"3D Anatomical Analysis Grid," "4,500 Pattern Matrices," "5,200 Vocabulator," "Pattern
    Recognition Matrices"* → **none are real features**; AI-hallucinated, and the body text is
    garbled. Fabricated capabilities on a medical product cannot ship.
  - Fix: keep the concept, rebuild it with the real verified inventory and honest headlines from
    the real tagline. Get it re-approved by the physician.
- **The OR/bedside lifestyle mockup** — the phone screen is illegible AI garble, and it depicts
  bedside/OR use (the clinical-use framing the policy rules out). Usable only if the screen is
  swapped for a real screenshot and it's framed as studying, not clinical use.

## Cadence (realistic for one person)

| platform | cadence | effort |
|---|---|---|
| Instagram | 3× / week (2 carousels, 1 Reel) | medium — batched monthly |
| TikTok / Shorts | 2× / week, mirrored to Reels + YT | high — the experiment |
| Pinterest | batch 15–20 pins / month | low — set and forget |
| Reddit | opportunistic helpfulness + 1 flagship / sub at launch | low, but must be genuine |
| Discord | ~1 hr / week presence | low, compounding |
| LinkedIn | 1 post at the faculty-offer moment | one-off |

If a week is bad, the priority order to protect is: **Instagram > Pinterest > everything else.** IG
is the base; Pinterest is nearly free. The rest can lapse a week without much cost.

---

## Measuring it

- **Native analytics** per platform: reach, **saves and shares** (weight these over likes for study
  content), profile visits, outbound link clicks.
- **App Store Connect acquisition source** (post-launch, no SDK needed) tells you installs by
  channel. Pair it with **Custom Product Pages** — up to 35 alternate listings, each its own URL and
  conversion metrics, all free. **Make one CPP per social platform** and use its URL as that
  platform's link-in-bio; the conversion numbers then attribute installs per channel without any
  tracking.
- **UTM tags** on every outbound link to the PWA so pre-App-Store traffic is attributable.
- **Baseline the free period first** (downloads, day-7 / day-28 retention, territory mix) before
  judging any campaign, per the brief. A goal set without the baseline is a guess.

No age, gender, or individual-user data — ever, by design. Audience mix comes from CPP conversion
and any linked-out survey, not from analytics.

---

## Pre-launch checklist (do these before pushing traffic)

- [x] **Handles secured** — `roundscodex` on IG, TikTok, X, Facebook, Reddit (u/ and r/RoundsCodex).
- [ ] **Grab the remaining two** — Pinterest and YouTube as `roundscodex` before they're taken.
- [ ] **Ship `og:`/`twitter:` tags + `<meta name="description">`** so shared links render cards.
      Throttles everything until done (see dependencies).
- [ ] **Link-in-bio destination** — simplest is a section on `roundscodex.com` once it exists; a
      Linktree-style page works in the interim. Point it at the PWA install + a CPP per platform
      post-launch.
- [ ] **Write 3 evergreen bios** (IG 150 char, TikTok 80, Pinterest) from the safe line above.
- [ ] **Batch the first month** — 8 conditions × 5 outputs — so accounts don't launch empty.
- [ ] **At launch:** delete `robots.txt` and the `X-Robots-Tag` block; verify Pinterest can index;
      post the Reddit flagship posts (staggered, one sub per day, rules read first).

## First two weeks (concrete)

**Week 1 — set up, no traffic push.**
- Secure all handles; write bios; create a shared asset folder of pre-cleared illustration exports.
- Produce the first batch: 8 conditions, carousels + pins + one Reel each. Don't post yet.
- Draft the Reddit flagship post and get Dr. Kreithen's sign-off on its wording.

**Week 2 — soft ramp.**
- Start IG at 3×/week from the batch, so the grid isn't empty when the App Store listing goes live.
- Begin Pinterest pinning (only if noindex is off; otherwise queue it).
- Join 2–3 Discord study servers as a helpful presence — no links yet.
- Do **not** fire the Reddit flagship until the App Store listing and link previews are live; it's a
  one-shot per sub, spend it when the destination is ready.

---

## Decisions made (2026-08-05)

- **Accounts secured** (all `roundscodex`, consistent — good):
  - Instagram — [@roundscodex](https://instagram.com/roundscodex)
  - TikTok — [@roundscodex](https://tiktok.com/@roundscodex)
  - X — [@roundscodex](https://x.com/roundscodex)
  - Facebook Page — [/roundscodex](https://facebook.com/roundscodex)
  - Reddit user — [u/roundscodex](https://reddit.com/u/roundscodex)
  - **Reddit community — [r/RoundsCodex](https://reddit.com/r/RoundsCodex)** (owned home base)
  - Still open, worth grabbing: **Pinterest** and **YouTube**.
- **Voice: brand, physician-forward — and FACELESS.** "Rounds Codex" is the account; the voice makes
  clear one *practising physician* draws and writes it, but **the physician is never named and never
  shown.** No name, no face, no personal photos, no talking-head video. "Written and illustrated by
  a practising physician" is an anonymous claim — it delivers the credibility without the person.
  Keeps the differentiator, survives if the product outgrows one person. Video is artwork + screen
  recordings with on-screen text or voiceover — never a person on camera.
- **Higgsfield: approved for the video arm, with the gate.** Generate Reels/Shorts from the real
  illustrations; **any generated clinical imagery and any credit spend go to Dr. Kreithen first.**
- **First content batch: all four platforms at once**, from the same conditions (draw-once engine).
  See `social-content-batch-01.md`.

Still open / sequencing:

- **When to push traffic.** Accounts and batching start now; the traffic push waits on link
  previews + noindex removal + the App Store listing (see dependencies).

## Working notes

- **Marketing copy never goes in `content/*.json` or `index.html`.** Social material lives here as
  markdown or as real pages in `rounds-codex-app`.
- **Numbers drift weekly.** Re-read them from `content/*.json` / `scripts/gen_gallery_gap.py` before
  any post that quotes a figure; don't copy from an old caption.
- **Every clinical claim and every generated clinical image goes through Dr. Kreithen** before it
  ships — the same gate that governs the app content.
