# Obstetrics & Gynecology — Medical-Accuracy QA Log (web-grounded)

**Method:** same as prior logs — currency-sensitive oncologic/obstetric guideline claims + emergencies checked vs current guidelines/FDA approvals/landmark trials; prioritized spot-check, NOT per-sentence certification; attending sign-off required. sec: obgyn (EXTENDED schema: +tech, +after). 60 entries. **PRIOR-SESSION build.**

**Assessment up front:** very current — already had CHAP, cfDNA screening, ASCCP risk-based dysplasia, mifepristone+miso EPL, magnesium neuroprotection, ovarian PARP/HRD, PPH TXA. The 2 gaps were both gyn-onc immunotherapy (cervical, endometrial), now added.

---

## Batch 1 — 2026-07-18 (high-yield: gyn-oncology + obstetric emergencies/guidelines)

### 2 ENHANCEMENTS APPLIED (gyn-onc immunotherapy)
- **obgyn-cervical-cancer** ✅ — had LACC (open radical hysterectomy), chemoRT+brachytherapy for locally advanced, and immunotherapy only for advanced/recurrent PD-L1+. **Added** (tx + pearl): for **high-risk locally advanced disease, add pembrolizumab to chemoRT + maintenance (KEYNOTE-A18, FDA 2024)** — consistent with the radonc-cervix enhancement.
- **obgyn-endometrial-cancer** ✅ — had surgery/staging/sentinel node/Lynch but not systemic advances. **Added** (tx + pearl): **ADVANCED/RECURRENT chemoimmunotherapy** — dostarlimab (RUBY) or pembrolizumab (NRG-GY018) + carboplatin-paclitaxel then maintenance, **benefit greatest in dMMR/MSI-high**; **molecular classification (POLE/MMR-MSI/p53/NSMP)** now guides therapy.
- **Source (web-verified):** RUBY (NEJM 2023, dostarlimab), NRG-GY018/KEYNOTE-868 (pembrolizumab), FDA approvals 2023-2024 (dMMR -> all-comers); KEYNOTE-A18 (cervical, FDA Jan 2024). Applied to transfer/res-resident-all.js; master regenerated + re-verified **1308/0-errors**.

### CONFIRMED current (verified vs guidelines/FDA; no change):
- **obgyn-ovarian-cancer** — cytoreduction to no residual + platinum/taxane, neoadjuvant option, **maintenance PARP inhibitors (BRCA/HRD) + bevacizumab**, STIC/opportunistic salpingectomy, no screening, test BRCA/HRD, don't biopsy resectable mass. ✓
- **obgyn-preeclampsia** — magnesium (prophylaxis/treatment + toxicity/calcium antidote), severe-range BP within 1h (labetalol/hydralazine/nifedipine), delivery timing (>=37 without / >=34 with severe features), postpartum worsening, HELLP. ✓
- **obgyn-pph** — 4 T's, atony (oxytocin->methylergonovine[avoid HTN]->carboprost[avoid asthma]->misoprostol), **TXA within 3h (WOMAN)**, quantify blood loss, escalation ladder (balloon->sutures->ligation/embolization->hysterectomy). ✓
- **obgyn-endometriosis** — NSAIDs + hormonal suppression (CHC/progestins/LNG-IUD), **GnRH agonists/antagonists** second-line, laparoscopic excision/ablation, IVF for infertility, empiric treatment without laparoscopy, endometrioma cystectomy costs ovarian reserve. ✓
- **obgyn-leiomyoma** — surveillance if asymptomatic, medical (TXA/LNG-IUD/hormonals/**GnRH antagonists**), myomectomy/UAE by fertility goals, location-symptom correlation, leiomyosarcoma/morcellation caution. ✓
- **obgyn-ectopic** — unstable->surgery, methotrexate (strict criteria + hCG-to-zero), laparoscopic if not MTX candidate, IUP rules out (except heterotopic post-ART). ✓
- **obgyn-early-pregnancy-loss** — expectant/medical (**mifepristone + misoprostol > miso alone**)/surgical, Rh immunoglobulin, recurrent loss (APS aspirin+heparin), strict US criteria (CRL>=7mm, MSD>=25mm). ✓ (matches EM)
- **obgyn-preterm-labor** — **antenatal corticosteroids (24-34wk)**, tocolysis buys 48h (nifedipine first-line, not prolongation), **magnesium neuroprotection <32wk**, fetal fibronectin/cervical length, no tocolysis through chorio/abruption. ✓
- **obgyn-gdm** — nutrition + exercise + SMBG first-line, **insulin preferred** (no placental crossing), metformin/glyburide alternatives, postpartum OGTT 4-12wk. ✓
- **obgyn-prenatal-screening** — nondirective counseling, **cfDNA is a screen not diagnosis** (confirm w/ CVS/amnio), offer to everyone (age-based offering outdated), CVS 10-13wk / amnio >=15wk. ✓
- **obgyn-cervical-dysplasia** — CIN 1 observe, CIN 2/3 excision (LEEP/cone), HPV vaccination, **ASCCP risk-based management**, excision raises preterm-birth risk. ✓
- **obgyn-ppd** — psychotherapy (CBT/IPT) + SSRIs (sertraline breastfeeding-compatible), postpartum psychosis emergency, screen bipolar before antidepressant, validated screening. ✓ *(optional cross-ref: neuroactive steroids brexanolone/zuranolone for PPD are named in psych-perinatal-pmdd; not duplicated here)*
- **obgyn-htn-pregnancy** — **CHAP trial (treat mild chronic HTN to <140/90)**, low-dose aspirin 12-16wk for preeclampsia prevention, ACEi/ARB contraindicated (labetalol/nifedipine/methyldopa). ✓ (very current)

## Running tally (obgyn)
- Checked: 15 high-yield claim-areas | CONFIRMED: 13 | ENHANCEMENTS applied: 2 (cervical KEYNOTE-A18; endometrial chemoimmunotherapy + molecular classification) | CORRECTION: 0 | UNVERIFIED: 0
- **Very current for a prior-session build.** Already had CHAP, cfDNA, ASCCP, mifepristone+miso, magnesium neuroprotection, ovarian PARP/HRD, PPH TXA. Both gaps were gyn-onc immunotherapy - now added (and cervical is consistent with the radonc-cervix fix).

## Next (obgyn)
- Remaining ~45 = labor/delivery mechanics + operative obstetrics (normal labor, FHR, induction, operative vaginal, cesarean, VBAC, shoulder dystocia, cord prolapse), other obstetric complications (abruption, previa/accreta, PPROM, chorio, AFE, VTE, GTD/GTN, hyperemesis, cervical insufficiency, multiples/TTTS, FGR, anomalies, Rh), benign gyn + surgery (AUB, adenomyosis, adnexal/torsion, PID-TOA, CPP, vulvovaginal, hysterectomy/MIGS/sterilization, POP/incontinence), repro-endo/infertility (infertility/ART, OHSS, fertility preservation, amenorrhea, POI, peds-adolescent) - mostly stable procedural/diagnostic content, lower change-risk; lighter/attending pass.
