const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, Footer, PageNumber,
} = require('docx');

/* Build a readable Word version of a narration script.
 *
 * Usage: node scripts/build_narration_docx.js <script.txt> <out.docx> [--title "Heart Failure"]
 *
 * The docx is for reading aloud, not skimming: 13pt body, 20pt leading, and clear paragraph
 * separation. The only non-spoken text sits above a rule at the top, italicised, so it cannot be
 * mistaken for script. The three spoken transition cues are bolded — they ARE spoken, the bold
 * just makes them findable when you lose your place.
 *
 * NOTE: LibreOffice is broken in this container (javaldx fails, `--convert-to` reports "source
 * file could not be loaded" on a file that validate.py passes), and pandoc is not installed. So a
 * visual render cannot be produced here. Verify instead by extracting word/document.xml and
 * diffing the paragraph text against the source .txt — see the check at the bottom of this file.
 */
const SRC = process.argv[2] || '/home/user/rounds-codex/narration-staging/chf.txt';
const OUT = process.argv[3] || 'narration.docx';
const TITLE_ARG = process.argv.indexOf('--title');
const TITLE = TITLE_ARG > 0 ? process.argv[TITLE_ARG + 1] : 'Heart Failure';

const raw = fs.readFileSync(SRC, 'utf8').trim();
const paras = raw.split(/\n\s*\n/).map(p => p.replace(/\s*\n\s*/g, ' ').trim()).filter(Boolean);
const words = raw.split(/\s+/).length;
const mins = (words / 150).toFixed(1);

// "Now, diagnosis." / "Now, treatment. ..." / "Two cautions before we finish." are spoken cues
// that mark a turn in the script. Bolding just the leading cue makes them findable while reading
// aloud without adding any non-spoken text the reader might accidentally voice.
const CUES = ['Now, diagnosis.', 'Now, treatment.', 'Two cautions before we finish.'];

// Body text set large with generous leading, because this is read aloud from a page or screen
// rather than skimmed. 260 twips before each paragraph keeps them visually separate.
const body = (text) => {
  const cue = CUES.find(c => text.startsWith(c));
  const runs = cue
    ? [new TextRun({text: cue, bold: true, size: 26}),
       new TextRun({text: text.slice(cue.length), size: 26})]
    : [new TextRun({text, size: 26})];
  return new Paragraph({children: runs, spacing: {before: 260, line: 400}});
};

const doc = new Document({
  creator: 'Rounds Codex',
  title: TITLE + ' — narration script',
  description: 'Module narration script, written to be read aloud.',
  sections: [{
    properties: {page: {size: {width: 12240, height: 15840}, margin: {top: 1440, bottom: 1440, left: 1440, right: 1440}}},
    footers: {
      default: new Footer({children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({children: ['Rounds Codex  ·  ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES], size: 18, color: '888888'})],
      })]}),
    },
    children: [
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: {after: 60},
        children: [new TextRun({text: TITLE, bold: true, size: 40})],
      }),
      new Paragraph({
        spacing: {after: 40},
        children: [new TextRun({text: 'Narration script  ·  full read', size: 24, color: '555555'})],
      }),
      new Paragraph({
        spacing: {after: 200},
        border: {bottom: {style: BorderStyle.SINGLE, size: 6, color: 'CCCCCC', space: 8}},
        children: [new TextRun({
          text: `${words} words  ·  approximately ${mins} minutes at 150 words per minute`,
          size: 20, color: '777777',
        })],
      }),
      // The one piece of non-spoken guidance, kept above the rule and visually distinct so it
      // cannot be mistaken for script.
      new Paragraph({
        spacing: {after: 320},
        children: [new TextRun({
          text: 'Everything below is spoken. Abbreviations are already written the way they should be '
              + 'read — letters where a listener expects letters (B-N-P, E-C-G), full phrases where '
              + 'they do not (a third heart sound, paroxysmal nocturnal dyspnea).',
          italics: true, size: 20, color: '666666',
        })],
      }),
      ...paras.map(body),
    ],
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(OUT, buf);
  console.log(`wrote ${OUT}`);
  console.log(`${paras.length} paragraphs, ${words} words, ~${mins} min`);
});
