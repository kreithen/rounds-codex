const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  PageBreak, Header, Footer, PageNumber, LevelFormat, TableOfContents
} = require('docx');

const data = JSON.parse(fs.readFileSync('/tmp/hf/labelqa.json', 'utf8'));
const wrong   = data.filter(p => p.verdict === 'WRONG');
const suspect = data.filter(p => p.verdict === 'SUSPECT');
const clean   = data.filter(p => p.verdict === 'CLEAN');
const nFind   = data.reduce((a, p) => a + p.f.length, 0);

const NAVY = '1F3864', RED = 'A02020', AMBER = '9A6700', GREY = '595959';
const TW = 9360;                      // usable width on US Letter with 1" margins

const missing = ['bph 2','bronchiolitis 2','bronchiolitis 7','ckd 2','depression 2','dic 2',
 'diverticulitis 2','gi-bleed 1','gi-bleed 2','hyponatremia 2','hypothyroid 2','influenza 2',
 'iron-anemia 2','labor 2','leukemia 2','lung-cancer 2','lupus 2','lymphoma 2','meningitis 2',
 'osa 2','osa 7','osteoarthritis 1','osteoarthritis 2','osteomyelitis 2','parkinsons 3','pe 2',
 'pericarditis 1','pneumothorax 2','pph 2','sci 2','seizure 2','sepsis 2','sickle-cell 2',
 'stroke 1','tb 2','thrombocytopenia 2','thyroidstorm 2','tia 2','uti 2','withdrawal 2'];

const P = (text, o = {}) => new Paragraph({
  spacing: { after: o.after ?? 120, before: o.before ?? 0 },
  alignment: o.align,
  border: o.border,
  indent: o.indent,
  children: [new TextRun({ text, bold: o.bold, italics: o.italics, size: o.size ?? 21,
                           color: o.color, font: o.font })]
});

const H = (text, level) => new Paragraph({
  text, heading: level, spacing: { before: level === HeadingLevel.HEADING_1 ? 320 : 240, after: 140 }
});

function cell(children, { w, bg, bold, color, size, align } = {}) {
  return new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: bg ? { type: ShadingType.CLEAR, fill: bg, color: 'auto' } : undefined,
    margins: { top: 70, bottom: 70, left: 110, right: 110 },
    children: (Array.isArray(children) ? children : [children]).map(t =>
      new Paragraph({
        alignment: align,
        spacing: { after: 0 },
        children: [new TextRun({ text: String(t), bold, color, size: size ?? 19 })]
      }))
  });
}

// ---- findings table for one page -------------------------------------------
const COLS = [1500, 2100, 2880, 2880];
function findingsTable(p) {
  const head = new TableRow({
    tableHeader: true,
    children: [
      cell('Verdict',  { w: COLS[0], bg: NAVY, bold: true, color: 'FFFFFF' }),
      cell('Label',    { w: COLS[1], bg: NAVY, bold: true, color: 'FFFFFF' }),
      cell('Currently points at', { w: COLS[2], bg: NAVY, bold: true, color: 'FFFFFF' }),
      cell('Should point at',     { w: COLS[3], bg: NAVY, bold: true, color: 'FFFFFF' })
    ]
  });
  const rows = p.f.map((f, i) => new TableRow({
    children: [
      cell(f.v, { w: COLS[0], bg: i % 2 ? 'F2F2F2' : undefined, bold: true,
                  color: f.v === 'WRONG' ? RED : AMBER }),
      cell(f.panel ? `${f.label}  ${f.panel}` : f.label,
                 { w: COLS[1], bg: i % 2 ? 'F2F2F2' : undefined, bold: true }),
      cell(f.lands || '—', { w: COLS[2], bg: i % 2 ? 'F2F2F2' : undefined }),
      cell(f.exp   || '—', { w: COLS[3], bg: i % 2 ? 'F2F2F2' : undefined })
    ]
  }));
  return new Table({ columnWidths: COLS, width: { size: TW, type: WidthType.DXA },
                     rows: [head, ...rows] });
}

function pageBlock(p) {
  const out = [];
  out.push(new Paragraph({
    spacing: { before: 300, after: 60 },
    children: [
      new TextRun({ text: `${p.gid}`, bold: true, size: 26, font: 'Consolas', color: NAVY }),
      new TextRun({ text: `  page ${p.page}`, bold: true, size: 26, color: NAVY }),
      new TextRun({ text: `   ${p.cond} · ${p.cat}`, size: 20, color: GREY })
    ]
  }));
  if (p.title) out.push(P(`Page title: ${p.title}`, { italics: true, color: GREY, size: 19, after: 100 }));
  out.push(P(`${p.nbad} of ${p.n} labels flagged.`, { size: 19, after: 100 }));
  out.push(findingsTable(p));
  return out;
}

// ---- summary table ----------------------------------------------------------
const SC = [4200, 2580, 2580];
const summaryTable = new Table({
  columnWidths: SC, width: { size: TW, type: WidthType.DXA },
  rows: [
    new TableRow({ tableHeader: true, children: [
      cell('', { w: SC[0], bg: NAVY }),
      cell('Count', { w: SC[1], bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER }),
      cell('Share of pages checked', { w: SC[2], bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER })
    ]}),
    new TableRow({ children: [
      cell('Pages with at least one clearly wrong label', { w: SC[0], bold: true }),
      cell(String(wrong.length), { w: SC[1], bold: true, color: RED, align: AlignmentType.CENTER }),
      cell(`${Math.round(100 * wrong.length / data.length)}%`, { w: SC[2], align: AlignmentType.CENTER })
    ]}),
    new TableRow({ children: [
      cell('Pages needing a second look', { w: SC[0], bg: 'F2F2F2' }),
      cell(String(suspect.length), { w: SC[1], bg: 'F2F2F2', bold: true, color: AMBER, align: AlignmentType.CENTER }),
      cell(`${Math.round(100 * suspect.length / data.length)}%`, { w: SC[2], bg: 'F2F2F2', align: AlignmentType.CENTER })
    ]}),
    new TableRow({ children: [
      cell('Pages clean', { w: SC[0] }),
      cell(String(clean.length), { w: SC[1], bold: true, align: AlignmentType.CENTER }),
      cell(`${Math.round(100 * clean.length / data.length)}%`, { w: SC[2], align: AlignmentType.CENTER })
    ]}),
    new TableRow({ children: [
      cell('Individual mislabelled leader lines', { w: SC[0], bg: 'F2F2F2', bold: true }),
      cell(String(nFind), { w: SC[1], bg: 'F2F2F2', bold: true, color: RED, align: AlignmentType.CENTER }),
      cell('30% of 1,098 labels', { w: SC[2], bg: 'F2F2F2', align: AlignmentType.CENTER })
    ]})
  ]
});

const rule = { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'BFBFBF', space: 6 } };

const body = [
  new Paragraph({ spacing: { after: 40 },
    children: [new TextRun({ text: 'Rounds Codex', bold: true, size: 22, color: GREY })] }),
  new Paragraph({ spacing: { after: 60 },
    children: [new TextRun({ text: 'Gallery artwork — leader-line correction report', bold: true, size: 40, color: NAVY })] }),
  new Paragraph({ spacing: { after: 300 }, border: rule,
    children: [new TextRun({ text: 'Labels whose leader line does not land on the structure it names · 6 August 2026',
                             size: 21, color: GREY })] }),

  P('This report lists every gallery page found to carry a mislabelled leader line, and states for each label what it currently points at and what it should point at. It is intended to go to the illustration production team.', { after: 160 }),

  new Paragraph({ spacing: { after: 200 }, shading: { type: ShadingType.CLEAR, fill: 'FFF4E5', color: 'auto' },
    // Only a left bar. w:pBdr children are schema-ordered top, left, bottom, right,
    // but this docx-js version emits them top, bottom, left, right — so any callout
    // using all four sides produces a file LibreOffice refuses to open. A single
    // side is always a valid subsequence, and a left bar reads better anyway.
    border: { left: { style: BorderStyle.SINGLE, size: 24, color: 'E0A800', space: 10 } },
    children: [new TextRun({ bold: true, size: 21, text: 'Please read before acting on this list. ' }),
               new TextRun({ size: 21, text: 'These findings were produced by automated inspection of each page at magnification, then spot-checked by hand. They are a candidate list for the physician to confirm, not a verdict. The two systemic patterns on the next page matter more than any individual page.' })] }),

  H('Summary', HeadingLevel.HEADING_1),
  summaryTable,
  P('', { after: 120 }),
  P('79 of 119 anatomy pages were checked. Only 18 were clean.', { bold: true, after: 200 }),

  H('Two systemic patterns — fix these first', HeadingLevel.HEADING_1),
  P('These describe how the defect is produced rather than where it landed. Correcting the template is worth more than correcting the 47 pages individually.', { after: 160 }),

  P('1.  Fan of leaders dropped into the nearest tissue', { bold: true, size: 23, color: NAVY, after: 80 }),
  P('A vertical stack of labels is laid out in list order down a text column, and every leader stops in whatever tissue happens to sit at that height — regardless of what it names. On aki page 2, four nephron labels (Proximal Tubule, Loop of Henle, Distal Tubule, Collecting Duct) all converge on the same vasa recta bundle while the gold tubules they name are untouched. The same failure appears on addisons page 2 and aortic-dissection page 1.', { after: 160 }),

  P('2.  Off-by-one within an ordered series', { bold: true, size: 23, color: NAVY, after: 80 }),
  P('On aortic-dissection page 2 the aortic arch branches are shifted one vessel distally: "Brachiocephalic trunk" points at the left common carotid, "Left common carotid" points at the left subclavian, and "Left subclavian" points there too. Two labels on one vessel is the corroborating tell, and the real brachiocephalic — the one that visibly bifurcates — carries no label at all.', { after: 160 }),

  P('What the clean pages have in common', { bold: true, size: 23, color: '2E6B2E', after: 80 }),
  P('acs pages 1 and 2 are fully clean, and they place numbered circles directly on the 3D render instead of running a leader across empty background to a text column. Nearly every failure in this report involves a long leader crossing background. That is an actionable template recommendation.', { after: 200 }),

  new Paragraph({ children: [new PageBreak()] }),
  H(`Section 1 — Pages with clearly wrong labels (${wrong.length})`, HeadingLevel.HEADING_1),
  P('The leader ends on a different named structure, on empty background, or on a different organ. These teach the wrong anatomy. Grouped by specialty, then by gallery.', { after: 160 })
];

let cat = null;
for (const p of wrong) {
  if (p.cat !== cat) { cat = p.cat; body.push(H(cat, HeadingLevel.HEADING_2)); }
  body.push(...pageBlock(p));
}

body.push(new Paragraph({ children: [new PageBreak()] }));
body.push(H(`Section 2 — Pages needing a second look (${suspect.length})`, HeadingLevel.HEADING_1));
body.push(P('The endpoint is ambiguous, sits between two structures, or is close but off. Some of these will turn out to be correct.', { after: 160 }));
cat = null;
for (const p of suspect) {
  if (p.cat !== cat) { cat = p.cat; body.push(H(cat, HeadingLevel.HEADING_2)); }
  body.push(...pageBlock(p));
}

body.push(new Paragraph({ children: [new PageBreak()] }));
body.push(H('Section 3 — Coverage and method', HeadingLevel.HEADING_1));
body.push(P('Pages checked', { bold: true, size: 23, color: NAVY, after: 80 }));
body.push(P('The worklist was every page 1 and page 2 across all 100 galleries — 119 pages in total, being the 109 whose title names anatomy plus the 10 page-2s that carry labelled physiology diagrams under a different title. 79 were completed.', { after: 140 }));
body.push(P(`Still to be checked (${missing.length}):`, { bold: true, after: 60 }));
body.push(P(missing.join(' · '), { size: 19, color: GREY, after: 160 }));
body.push(P('Pages 3 to 10 of each gallery carry leader lines too and have not been examined.', { italics: true, after: 200 }));

body.push(P('Pages found clean', { bold: true, size: 23, color: '2E6B2E', after: 80 }));
body.push(P(clean.map(p => `${p.gid} p${p.page}`).join(' · '), { size: 19, color: GREY, after: 200 }));

body.push(P('How each page was examined', { bold: true, size: 23, color: NAVY, after: 80 }));
body.push(P('Each page was cut into overlapping tiles and magnified, because at the shipped resolution a leader line is one or two pixels wide and its endpoint cannot be resolved. Every label was then traced from its text to where the line stops, and the structure at that endpoint compared with the structure named. Dogleg connectors, callout boxes enclosing a region, and labels pointing into a zoomed inset were all treated as correct behaviour.', { after: 140 }));
body.push(P('Two findings were additionally verified by hand at tile level and by sampling the pixel colours either side of each endpoint: aki page 2 and pericarditis page 2. Both reproduced, and on aki the automated result proved to understate the problem.', { after: 200 }));

body.push(P('Confidence', { bold: true, size: 23, color: NAVY, after: 80 }));
body.push(P('Section 1 findings are stated where the endpoint clearly sits on the wrong structure. Section 2 exists because reporting uncertainty is better than guessing; those pages need a human eye. No independent medical review of this list has been carried out.', { after: 120 }));

const doc = new Document({
  creator: 'Rounds Codex',
  title: 'Gallery artwork — leader-line correction report',
  description: 'Gallery pages whose label leader lines do not land on the structure they name',
  styles: {
    default: {
      document: { run: { font: 'Calibri', size: 21 } },
      heading1: { run: { font: 'Calibri', size: 30, bold: true, color: NAVY },
                  paragraph: { spacing: { before: 320, after: 140 } } },
      heading2: { run: { font: 'Calibri', size: 24, bold: true, color: GREY },
                  paragraph: { spacing: { before: 260, after: 100 } } }
    }
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 },
                          margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
    headers: { default: new Header({ children: [new Paragraph({
      alignment: AlignmentType.RIGHT, border: rule,
      children: [new TextRun({ text: 'Rounds Codex · gallery leader-line corrections', size: 17, color: GREY })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ children: ['Page ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES], size: 17, color: GREY })] })] }) },
    children: body
  }]
});

Packer.toBuffer(doc).then(b => {
  fs.writeFileSync('/home/user/rounds-codex/galleries-staging/Rounds-Codex-leader-line-corrections.docx', b);
  console.log('wrote docx:', b.length, 'bytes;', wrong.length, 'wrong pages,', suspect.length, 'suspect,', nFind, 'findings');
});
