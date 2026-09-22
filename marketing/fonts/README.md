# Anton — the social artwork's display face

`anton-subset.woff2`, 11,072 bytes, SIL Open Font License 1.1. Google Fonts Anton v27, subset to
`U+0020-007E` with `pyftsubset`. Fetched through the Higgsfield sandbox (the agent proxy refuses
`fonts.gstatic.com`) and verified by sha256:
`544969f33a826c9526324e617ebc3df81e236432b1595cb591c08e59819a4678`.

## How it was identified, and why the obvious candidates were wrong

Set the artwork's OWN words at the artwork's own cap height and compare the advance width. That is
the whole test, and it is decisive where eyeballing a crop is not:

| face | "PASS THE TEST!" at cap 177px | vs the artwork's 959px |
|---|---|---|
| Oswald (repo) | 1339px | **+40%** |
| Anton | 1126px | +17% |
| **Anton at `scaleX(0.852)`** | **959px** | **match** |

So the artwork is Anton **horizontally compressed to ~85%** — which a design tool does when text is
fitted to a box. Reproducing that compression is fidelity, not distortion, but it is the only case
where squeezing a typeface is the right answer.

**Oswald looked close by eye and was 40% out.** The first "SUCCEED." was rendered in it and would
have shipped 40% too wide beside four untouched pieces. Always run the same-words test.
