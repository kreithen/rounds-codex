# For production: `aortic-stenosis` page 2 — "Pulmonary Trunk" needs its label moved, not its leader

Send with the leader-line re-render batch.

**This is a layout change, not a leader correction, which is why it is here and not fixed locally.**
The structure the label names *is* drawn — but it is at the top of the figure while the label sits at
the bottom left, so there is no route from one to the other that does not cross the whole heart and
four other leaders.

Attachment: `PRODUCTION-aortic-stenosis-p2-evidence.png`.

---

## What is wrong

"**Pulmonary Trunk** — carries deoxygenated blood from the right ventricle to the lungs" ends at
**(365, 1010)**, on the large blue vessel that descends behind the right atrium and leaves the bottom
of the frame.

That vessel is the **inferior vena cava**. It carries blood *into* the right atrium, which is the
opposite direction of flow from the one the caption describes — and the page labels the SVC correctly
three inches above it, so a reader has both cavae in view with one of them named as an outflow vessel.

**The pulmonary trunk is drawn, and drawn well**, at roughly **(560–800, 420–560)**: the blue tube
that arises anterior to the aortic root, immediately left of the cut valve annulus, and arcs up and to
the viewer's right to continue as the right pulmonary artery. It currently carries no label at all.

**Why the artist's arrangement made this easy to get wrong:** SVC, IVC and pulmonary trunk are all
rendered in the same blue, and two of the three are vertical tubes at the edge of the figure.

---

## What we need

Please **re-site the "Pulmonary Trunk" label block** to the upper left or upper centre of the figure,
beside the vessel it names, and run a short leader to the blue trunk at its mid-course — around
(660, 480) on the current geometry, clear of the aortic arch behind it.

Two consequences worth deciding at the same time:

1. The blue vessel at (365, 1010) is then **unlabelled**. It is the IVC and the page already labels
   the SVC, so labelling it *Inferior Vena Cava* completes the pair and costs one line. Recommended.
2. If the label block cannot move, the alternative is to **drop the leader entirely** and caption the
   trunk on-figure. Do not simply re-aim the existing leader — from its present position the line
   would cross the right atrium, the tricuspid valve, the right ventricle and the LVOT leaders.

---

*Measured on the shipped page, 2026-08-10. Confirms and extends the finding in
`CARDIOLOGY-audit-findings.md`, which identified the endpoint as the IVC; this sheet adds where the
pulmonary trunk actually is and why the fix is a layout change.*
