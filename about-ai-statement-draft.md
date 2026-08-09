# Draft: "How Rounds Codex is built" — an AI-assistance statement for the About page

Drafted 2026-08-09 at Dr. Kreithen's question: *is it worth putting a tactful statement in About
that this app was designed with AI assistance?*

**Short answer: yes, and it is worth more than it costs.** Reasons, in order of weight:

1. **It has to be disclosed to the Copyright Office anyway.** Since March 2023 the Office requires
   affirmative disclosure of more-than-trivial AI-generated material, excluded in the Limitation of
   Claim field — this is the provenance inventory in `legal/README.md` that blocks the filing. A
   public statement and the federal form should not tell different stories.
2. **It is discoverable, and discovery is worse than disclosure.** 950 gallery pages and 197 USMLE
   illustrations came out of an AI illustration pipeline. Someone will notice. Saying it first costs
   nothing; being found out costs the claim next to it.
3. **It makes "clinically reviewed" stronger, not weaker.** The honest pairing — *AI-assisted
   production, clinician-reviewed content* — is more credible than either half alone, because it
   explains how a small clinical team produced this much material without implying anyone drew 950
   illustrations by hand.
4. **The audience is medical students and clinicians in 2026.** They are not naive about AI. A
   product that pretends otherwise reads as either dated or evasive.

The one risk: a vague statement invites the reader to imagine the worst ("so the medical content is
AI-written?"). The fix is specificity — say what AI did and what the clinicians did.

---

## Draft copy — the short version, for the About page

> ### How Rounds Codex is built
>
> Rounds Codex is created by a team of clinicians and produced with AI assistance.
>
> The clinical content — what each condition means, how it presents, what to do about it — is
> written and reviewed by the clinicians listed above. AI is used the way a studio or a research
> assistant is used: to draft, to illustrate, and to build. Every illustration in the app is
> AI-generated from a specification written here, and a great deal of the drafting and engineering
> was done with AI tools. **None of it reaches you without a clinician reading it.**
>
> We think that combination is the honest one, and the reason a small clinical team can offer this
> much material. Where you find something wrong, tell us — it goes to the people who wrote it, and
> it gets fixed.

**Length:** ~120 words. Sits naturally under Clinical Advisors, before Share.

---

## Draft copy — the longer version, if you would rather be fully explicit

> ### How Rounds Codex is built
>
> Rounds Codex is created and clinically reviewed by a team of practising clinicians, and produced
> with AI assistance. Being specific about which is which matters more to us than sounding
> impressive.
>
> **Written and reviewed by clinicians.** The condition modules, the clinical judgement in them, and
> the review of everything else. Every clinician listed above practises, and each has reviewed
> material in the app.
>
> **Produced with AI assistance.** The illustrations are AI-generated from specifications written
> here and then checked page by page. Much of the question bank was drafted by AI from the module
> text and then reviewed. The app itself was built with AI engineering tools.
>
> **What that means for you.** No clinical statement reaches the app without a clinician reading it,
> and nothing here is a substitute for your own judgement or your supervising clinician — see the
> disclaimer at the top of this page. If you find an error, tell us. It goes to the person who wrote
> it, and it gets fixed.

**Length:** ~180 words.

---

## Recommendation

**Ship the short version.** It says everything true, it is readable on a phone, and the About page
already carries the disclaimer that does the heavy legal lifting. The longer version is better suited
to a website "About" page or the App Store description than to a panel someone reads on a ward.

**Two things to decide before it ships:**

1. **Does the statement name the quizzes?** The short draft says "drafting" without specifying. 1,796
   of 1,820 condition quiz questions were AI-drafted from the module text and then reviewed; 24 were
   transcribed from your own PDFs. If you would rather that be explicit, the longer version does it.
2. **Should it appear in the App Store description too?** Not required by Apple, but the description
   and the in-app statement disagreeing would be worse than either.

**Wording is yours.** This is public copy about how your product is made and how your review works —
I have drafted it, not decided it.

---

## A note on "team", added 2026-08-09

Both drafts now say **team of clinicians** rather than naming one person, per Dr. Kreithen's
decision. Two things to keep straight as the group grows:

- **"Created by" and "reviewed by" are different claims.** With two clinicians listed today, if one
  authored and the other reviewed, "created by a team" attributes authorship to both. *"Created and
  clinically reviewed by practising clinicians"* covers both without assigning either — and stays
  true at any size.
- **The app must match.** Dr. Kreithen's advisor bio previously read "Writes and reviews the clinical
  content", which was the same singular claim; it now reads "Leads the clinical content and review".
  His **Founder & Clinical Lead** role line is unchanged, because that is an accurate individual
  attribution and is not the thing being retired.
