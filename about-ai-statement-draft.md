# "How this app was created" — AI-assistance statement for the About page

**This is Dr. Kreithen's copy, edited — not rewritten.** He supplied the text and the voice on
2026-08-09; my earlier drafts are discarded. Everything below is his wording with four mechanical
corrections and two decisions flagged.

---

## Ready to ship

> ### How this app was created
>
> This medical education app was conceived, organized, designed and reviewed by human beings —
> specifically, medical experts.
>
> We prompted artificial intelligence to assist us with generative artwork, information collation,
> quality assessment and app code design.
>
> The purpose of the app is to help students learn medicine. There may be errors or incorrect
> information within this data. Any practical application of Rounds Codex must be approved by a
> student's clinical instructor prior to any treatment of a patient.

**~85 words.** Sits under Clinical Advisors, above Share.

### What I changed, and nothing else

| # | change | why |
|---|---|---|
| 1 | `is help students` → **`is to help students`** | Typo. |
| 2 | `generative artwork information collation` → **`generative artwork, information collation`** | Missing comma. Without it the phrase reads as one item — "generative artwork information collation" — which is not a thing, and it is the sentence a sceptical reader will read twice. |
| 3 | Added the closing full stop | The last sentence had none. |
| 4 | `human beings, specifically medical experts` → **`human beings — specifically, medical experts`** | Cosmetic only. The dash lands the emphasis where the sentence is going. **Revert this one if you prefer the comma; it is the only change that touches your voice rather than your grammar.** |

---

## Your version is safer than mine was, on the exact point I flagged

My draft said the question bank was *"drafted from **our own** condition modules"*, which asserts the
modules are yours — and that is precisely **Q1** in `legal/provenance-for-counsel.md`, the thing this
repo cannot establish and only you can answer.

**Your wording sidesteps it correctly.** "Conceived, organized, designed and **reviewed** by human
beings" claims review, not sole authorship, and it is true whether you wrote the modules outright or
edited AI drafts. It also stays true as more clinicians join. Nothing in your text needs to change
depending on how Q1 turns out, which is a real advantage and not an accident of phrasing —
**it is the version that will still be true after the lawyer meeting.**

---

## Two decisions before it ships

### 1. It repeats the disclaimer directly above it

The About page already opens with:

> *"Anything you do for a real patient must be approved by your attending, preceptor or clinical
> instructor."*

Your third paragraph says the same thing in different words, about 200 pixels further down the same
screen. Three options:

- **(a) Ship as written.** Repetition of a safety instruction is defensible, and this version names
  the app specifically. Two near-identical sentences on one screen can slightly weaken both.
- **(b) Trim to the part that is new here** — keep *"The purpose of the app is to help students learn
  medicine. There may be errors or incorrect information within this data."* and let the existing
  disclaimer carry the instructor line. This is what I would do: the errors sentence is the one that
  belongs in a section about how the app was made.
- **(c) Keep both and reword yours** so the echo is deliberate: *"…and, as above, any practical
  application must be approved by a student's clinical instructor."*

**My recommendation: (b).** But (a) is a perfectly reasonable call for a medical app, and it is
yours.

### 2. "Medical experts"

Your phrase, and defensible — both listed advisors are MDs. Worth one moment's thought only because
*"practising physicians"* is a verifiable fact about people named on the same screen, whereas *"medical
experts"* is a description. If the section is ever read adversarially, the factual version is the
sturdier one. **No change made; flagging, not advising.**

---

## Where else this text should appear

The in-app statement and the App Store description contradicting each other would be worse than
either alone. A one-line version for tight spaces, in your voice:

> Conceived, organized, designed and reviewed by medical experts. Produced with AI assistance.

Say the word and I will ship the About section — it is a small, verifiable change, and I would run
the same checks as the advisor card: renders on the page, no layout break at 320–430 px, zero page
errors.
