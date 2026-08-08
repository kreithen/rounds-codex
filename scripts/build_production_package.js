/* Build the production package for the leader-line corrections.
 *
 * Different document from Rounds-Codex-leader-line-corrections.docx, and deliberately so. That one
 * is the AUDIT: every page, ranked worst-first, including the clean ones, for the record. This one
 * is the WORK ORDER: only the 81 pages that need re-rendering, grouped by gallery, because a
 * gallery is the unit production re-renders.
 *
 * The design decision that matters: **the approval unit is the PAGE, not the finding.** There are
 * 511 findings on those 81 pages, and asking the physician to sign off 511 targets individually
 * would be the wrong use of the one person who can judge them. Each page carries its full list and
 * one Approve / Amend box, so the decision is "is this page's list right" -- 81 decisions.
 *
 * I tried grouping by fault class first, so a whole class could be approved at once. It does not
 * work: the auditors wrote free prose and a regex classifier put 433 of 511 into "other". A
 * mis-bucketed finding would send production the wrong systematic instruction, which is worse than
 * no bucketing, so the cause narrative stays in PRODUCTION-BRIEF-leader-lines.md, which is
 * hand-written and correct, and this document stays per-page and literal.
 *
 * SUSPECT rows are kept in place rather than split into an appendix: they sit on the same page as
 * the WRONG rows, the artist is looking at that page once, and a "check this one too" beside the
 * definite fixes costs nothing. They are marked so nobody treats them as confirmed.
 *
 * Usage: node scripts/build_production_package.js
 */
'use strict';
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  Header, Footer, PageNumber, PageBreak
} = require('docx');

const data = JSON.parse(fs.readFileSync('/tmp/hf/labelqa.json', 'utf8'));
const wrong = data.filter(p => p.verdict === 'WRONG')
  .sort((a, b) => a.gid.localeCompare(b.gid) || a.page - b.page);

const NAVY = '1F3864', RED = 'A02020', AMBER = '9A6700', GREY = '595959', GREEN = '1E6B41';
const TW = 9360;

const nFind = wrong.reduce((a, p) => a + p.f.length, 0);
const nW = wrong.reduce((a, p) => a + p.f.filter(f => f.v === 'WRONG').length, 0);
const nS = wrong.reduce((a, p) => a + p.f.filter(f => f.v === 'SUSPECT').length, 0);
const nU = wrong.reduce((a, p) => a + p.f.filter(f => f.v === 'UNREADABLE').length, 0);
const noTarget = wrong.flatMap(p => p.f.map(f => ({ ...f, gid: p.gid, page: p.page })))
                      .filter(f => !f.exp);
const galleries = [...new Set(wrong.map(p => p.gid))];

const P = (text, o = {}) => new Paragraph({
  spacing: { after: o.after ?? 120, before: o.before ?? 0 },
  alignment: o.align, border: o.border, indent: o.indent,
  children: [new TextRun({ text, bold: o.bold, italics: o.italics, size: o.size ?? 21,
                           color: o.color, font: o.font })]
});

function cell(children, { w, bg, bold, color, size, align } = {}) {
  return new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: bg ? { type: ShadingType.CLEAR, fill: bg, color: 'auto' } : undefined,
    margins: { top: 70, bottom: 70, left: 110, right: 110 },
    children: (Array.isArray(children) ? children : [children]).map(t =>
      new Paragraph({ alignment: align, spacing: { after: 0 },
        children: [new TextRun({ text: String(t), bold, color, size: size ?? 19 })] }))
  });
}

/* ---- one page's work order ------------------------------------------------------------- */
const COLS = [520, 2260, 2900, 2900, 780];
function pageTable(p) {
  const head = new TableRow({ tableHeader: true, children: [
    cell('#', { w: COLS[0], bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER }),
    cell('Label', { w: COLS[1], bg: NAVY, bold: true, color: 'FFFFFF' }),
    cell('Leader currently ends on', { w: COLS[2], bg: NAVY, bold: true, color: 'FFFFFF' }),
    cell('Move it to', { w: COLS[3], bg: NAVY, bold: true, color: 'FFFFFF' }),
    cell('OK?', { w: COLS[4], bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER })
  ]});
  const rows = p.f.map((f, i) => {
    const zebra = i % 2 ? 'F2F2F2' : undefined;
    const tag = f.v === 'WRONG' ? '' : (f.v === 'SUSPECT' ? '  [CHECK]' : '  [SOURCE TOO LOW-RES]');
    const col = f.v === 'WRONG' ? RED : (f.v === 'SUSPECT' ? AMBER : GREY);
    return new TableRow({ children: [
      cell(String(i + 1), { w: COLS[0], bg: zebra, align: AlignmentType.CENTER, color: col, bold: true }),
      cell((f.panel ? `${f.label} ${f.panel}` : f.label) + tag,
           { w: COLS[1], bg: zebra, bold: true, color: f.v === 'WRONG' ? undefined : col }),
      cell(f.lands || '—', { w: COLS[2], bg: zebra }),
      cell(f.exp || '— see appendix', { w: COLS[3], bg: zebra,
           color: f.exp ? undefined : RED, bold: !f.exp }),
      cell('', { w: COLS[4], bg: zebra })
    ]});
  });
  return new Table({ columnWidths: COLS, width: { size: TW, type: WidthType.DXA },
                     rows: [head, ...rows] });
}

function pageBlock(p, first) {
  const w = p.f.filter(f => f.v === 'WRONG').length;
  const s = p.f.filter(f => f.v === 'SUSPECT').length;
  const u = p.f.filter(f => f.v === 'UNREADABLE').length;
  const bits = [`${w} to move`, s ? `${s} to check` : null, u ? `${u} unreadable` : null]
    .filter(Boolean).join(' · ');
  return [
    ...(first ? [] : [new Paragraph({ children: [new PageBreak()] })]),
    new Paragraph({ spacing: { before: 80, after: 60 },
      children: [new TextRun({ text: `${p.gid}  —  page ${p.page}`, bold: true, size: 30, color: NAVY })] }),
    new Paragraph({ spacing: { after: 40 },
      children: [new TextRun({ text: p.title || '', italics: true, size: 21, color: GREY })] }),
    new Paragraph({ spacing: { after: 140 },
      children: [new TextRun({ text: `${p.f.length} of ${p.n} labels flagged — ${bits}`, size: 20, color: GREY })] }),
    pageTable(p),
    new Paragraph({ spacing: { before: 140, after: 0 },
      children: [new TextRun({ text: 'Approve this page as listed  ☐        Amend (mark the rows above)  ☐',
                               bold: true, size: 21, color: NAVY })] })
  ];
}

/* ---- index --------------------------------------------------------------------------- */
const IC = [2200, 700, 3660, 900, 900, 1000];
const indexTable = new Table({
  columnWidths: IC, width: { size: TW, type: WidthType.DXA },
  rows: [
    new TableRow({ tableHeader: true, children: [
      cell('Gallery', { w: IC[0], bg: NAVY, bold: true, color: 'FFFFFF' }),
      cell('Page', { w: IC[1], bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER }),
      cell('Page title', { w: IC[2], bg: NAVY, bold: true, color: 'FFFFFF' }),
      cell('Move', { w: IC[3], bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER }),
      cell('Check', { w: IC[4], bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER }),
      cell('of labels', { w: IC[5], bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER })
    ]}),
    ...wrong.map((p, i) => {
      const zebra = i % 2 ? 'F2F2F2' : undefined;
      const w = p.f.filter(f => f.v === 'WRONG').length;
      const s = p.f.filter(f => f.v === 'SUSPECT').length;
      return new TableRow({ children: [
        cell(p.gid, { w: IC[0], bg: zebra, bold: true }),
        cell(String(p.page), { w: IC[1], bg: zebra, align: AlignmentType.CENTER }),
        cell(p.title || '', { w: IC[2], bg: zebra }),
        cell(String(w), { w: IC[3], bg: zebra, align: AlignmentType.CENTER, bold: true, color: RED }),
        cell(s ? String(s) : '', { w: IC[4], bg: zebra, align: AlignmentType.CENTER, color: AMBER }),
        cell(String(p.n), { w: IC[5], bg: zebra, align: AlignmentType.CENTER, color: GREY })
      ]});
    })
  ]
});

const rule = { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'BFBFBF', space: 6 } };
const noteBox = (lines, fill) => new Paragraph({
  spacing: { after: 200 }, shading: { type: ShadingType.CLEAR, fill, color: 'auto' },
  border: { left: { style: BorderStyle.SINGLE, size: 18, color: NAVY, space: 8 } },
  children: lines.flatMap((l, i) => [
    ...(i ? [new TextRun({ break: 1 })] : []),
    new TextRun({ text: l, size: 21 })
  ])
});

const body = [
  new Paragraph({ spacing: { after: 40 },
    children: [new TextRun({ text: 'Rounds Codex', bold: true, size: 22, color: GREY })] }),
  new Paragraph({ spacing: { after: 60 },
    children: [new TextRun({ text: 'Leader-line corrections — production work order', bold: true, size: 40, color: NAVY })] }),
  new Paragraph({ spacing: { after: 300 }, border: rule,
    children: [new TextRun({ text: `${wrong.length} pages across ${galleries.length} galleries · 8 August 2026`, size: 21, color: GREY })] }),

  P('Every page below has at least one label whose leader line ends on a structure other than the one it names. For each label this states where the line currently ends and where it should end. One page per sheet, so a sheet can go to whoever re-renders that gallery.', { after: 160 }),

  noteBox([
    'Approve by PAGE, not by label. Each page has its full list and one approval box at the foot.',
    'That is 81 decisions rather than 511, and the page is what gets re-rendered anyway.',
    'Rows marked [CHECK] are the auditors\' SUSPECT calls — they were told to flag rather than guess, so some are correct as drawn. Confirm those before changing them.',
    'The cause, and the two template faults producing most of this, are in PRODUCTION-BRIEF-leader-lines.md. Send that first; this is the symptom list.'
  ], 'EAF1F8'),

  new Table({
    columnWidths: [2340, 2340, 2340, 2340], width: { size: TW, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [
        cell('Pages to re-render', { w: 2340, bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER }),
        cell('Labels to move', { w: 2340, bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER }),
        cell('Labels to check', { w: 2340, bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER }),
        cell('Galleries affected', { w: 2340, bg: NAVY, bold: true, color: 'FFFFFF', align: AlignmentType.CENTER })
      ]}),
      new TableRow({ children: [
        cell(String(wrong.length), { w: 2340, bg: 'F2F2F2', bold: true, size: 30, color: RED, align: AlignmentType.CENTER }),
        cell(String(nW), { w: 2340, bg: 'F2F2F2', bold: true, size: 30, color: RED, align: AlignmentType.CENTER }),
        cell(String(nS), { w: 2340, bg: 'F2F2F2', bold: true, size: 30, color: AMBER, align: AlignmentType.CENTER }),
        cell(String(galleries.length), { w: 2340, bg: 'F2F2F2', bold: true, size: 30, color: NAVY, align: AlignmentType.CENTER })
      ]})
    ]
  }),

  new Paragraph({ spacing: { before: 300, after: 140 },
    children: [new TextRun({ text: 'Index — every page in this order', bold: true, size: 28, color: NAVY })] }),
  indexTable,

  ...(noTarget.length ? [
    new Paragraph({ children: [new PageBreak()] }),
    new Paragraph({ spacing: { after: 140 },
      children: [new TextRun({ text: 'Appendix — labels with no target stated', bold: true, size: 28, color: NAVY })] }),
    P(`${noTarget.length} findings describe what is wrong without naming where the line should go. Most are cases where the structure the label names is not drawn on the page at all, which is a re-draw rather than a leader move. These need a decision before they go to production.`, { after: 140 }),
    new Table({
      columnWidths: [1700, 2400, 5260], width: { size: TW, type: WidthType.DXA },
      rows: [
        new TableRow({ tableHeader: true, children: [
          cell('Page', { w: 1700, bg: NAVY, bold: true, color: 'FFFFFF' }),
          cell('Label', { w: 2400, bg: NAVY, bold: true, color: 'FFFFFF' }),
          cell('What the auditor found', { w: 5260, bg: NAVY, bold: true, color: 'FFFFFF' })
        ]}),
        ...noTarget.map((f, i) => new TableRow({ children: [
          cell(`${f.gid} p${f.page}`, { w: 1700, bg: i % 2 ? 'F2F2F2' : undefined, bold: true }),
          cell(f.label, { w: 2400, bg: i % 2 ? 'F2F2F2' : undefined }),
          cell(f.lands || '—', { w: 5260, bg: i % 2 ? 'F2F2F2' : undefined })
        ]}))
      ]
    })
  ] : []),

  ...wrong.flatMap((p, i) => pageBlock(p, false))
];

const doc = new Document({
  creator: 'Rounds Codex',
  title: 'Leader-line corrections — production work order',
  sections: [{
    properties: { page: { margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 } } },
    headers: { default: new Header({ children: [new Paragraph({
      alignment: AlignmentType.RIGHT,
      children: [new TextRun({ text: 'Rounds Codex — leader-line production work order', size: 17, color: GREY })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ children: ['Page ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES], size: 17, color: GREY })] })] }) },
    children: body
  }]
});

Packer.toBuffer(doc).then(b => {
  const out = '/home/user/rounds-codex/galleries-staging/Rounds-Codex-leader-line-production-order.docx';
  fs.writeFileSync(out, b);
  console.log(`wrote ${out}`);
  console.log(`  ${wrong.length} pages, ${galleries.length} galleries`);
  console.log(`  ${nW} labels to move, ${nS} to check, ${nU} unreadable, ${noTarget.length} with no target stated`);
  console.log(`  ${b.length} bytes`);
});
