#!/usr/bin/env python3
"""Build the copyright-registration guide PDF for Rounds Codex."""
import os
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (BaseDocTemplate, Frame, KeepTogether, ListFlowable,
                                ListItem, PageBreak, PageTemplate, Paragraph, Spacer, Table,
                                TableStyle)

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   'legal', 'Rounds-Codex-Copyright-Registration-Guide.pdf')

INK = colors.HexColor('#111820')
MUTED = colors.HexColor('#5a6675')
ACCENT = colors.HexColor('#0b5fa5')
RULE = colors.HexColor('#c9d2dc')
WARN_BG = colors.HexColor('#fdf3e3')
WARN_ED = colors.HexColor('#d99a2b')
NOTE_BG = colors.HexColor('#eef4fa')
NOTE_ED = colors.HexColor('#8fb4d6')
HEAD_BG = colors.HexColor('#eaeff5')

ss = getSampleStyleSheet()
S = {}
S['title'] = ParagraphStyle('title', parent=ss['Title'], fontName='Helvetica-Bold',
                            fontSize=23, leading=27, textColor=INK, alignment=TA_LEFT,
                            spaceAfter=4)
S['sub'] = ParagraphStyle('sub', fontName='Helvetica', fontSize=11.5, leading=16,
                          textColor=MUTED, spaceAfter=16)
S['h1'] = ParagraphStyle('h1', fontName='Helvetica-Bold', fontSize=15, leading=19,
                         textColor=ACCENT, spaceBefore=18, spaceAfter=7)
S['h2'] = ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=11.5, leading=15,
                         textColor=INK, spaceBefore=12, spaceAfter=5)
S['body'] = ParagraphStyle('body', fontName='Helvetica', fontSize=10, leading=14.5,
                           textColor=INK, spaceAfter=8)
S['small'] = ParagraphStyle('small', fontName='Helvetica', fontSize=8.7, leading=12.5,
                            textColor=MUTED, spaceAfter=6)
S['cell'] = ParagraphStyle('cell', fontName='Helvetica', fontSize=9, leading=12.5,
                           textColor=INK)
S['cellb'] = ParagraphStyle('cellb', fontName='Helvetica-Bold', fontSize=9, leading=12.5,
                            textColor=INK)
S['callh'] = ParagraphStyle('callh', fontName='Helvetica-Bold', fontSize=10, leading=14,
                            textColor=INK, spaceAfter=3)
S['callb'] = ParagraphStyle('callb', fontName='Helvetica', fontSize=9.4, leading=13.5,
                            textColor=INK, spaceAfter=6)
S['step'] = ParagraphStyle('step', fontName='Helvetica-Bold', fontSize=10.5, leading=14,
                           textColor=INK, spaceBefore=10, spaceAfter=4)


def P(t, s='body'):
    return Paragraph(t, S[s])


def bullets(items, style='body'):
    return ListFlowable(
        [ListItem(Paragraph(i, S[style]), leftIndent=16) for i in items],
        bulletType='bullet', bulletFontName='Helvetica', bulletFontSize=8,
        bulletOffsetY=-1, leftIndent=14, start='bulletchar',
        spaceBefore=1, spaceAfter=7)


def callout(head, body_paras, kind='note'):
    bg, ed = (WARN_BG, WARN_ED) if kind == 'warn' else (NOTE_BG, NOTE_ED)
    inner = [Paragraph(head, S['callh'])] + [Paragraph(b, S['callb']) for b in body_paras]
    t = Table([[inner]], colWidths=[6.4 * inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), bg),
        ('BOX', (0, 0), (-1, -1), 0.9, ed),
        ('LEFTPADDING', (0, 0), (-1, -1), 11), ('RIGHTPADDING', (0, 0), (-1, -1), 11),
        ('TOPPADDING', (0, 0), (-1, -1), 9), ('BOTTOMPADDING', (0, 0), (-1, -1), 9),
    ]))
    return KeepTogether([t, Spacer(1, 10)])


def table(rows, widths, header=True):
    data = [[Paragraph(c, S['cellb'] if (header and r == 0) else S['cell'])
             for c in row] for r, row in enumerate(rows)]
    t = Table(data, colWidths=widths, repeatRows=1 if header else 0)
    st = [('VALIGN', (0, 0), (-1, -1), 'TOP'),
          ('LEFTPADDING', (0, 0), (-1, -1), 7), ('RIGHTPADDING', (0, 0), (-1, -1), 7),
          ('TOPPADDING', (0, 0), (-1, -1), 4.5), ('BOTTOMPADDING', (0, 0), (-1, -1), 4.5),
          ('LINEBELOW', (0, 0), (-1, -2), 0.4, RULE),
          ('BOX', (0, 0), (-1, -1), 0.6, RULE)]
    if header:
        st += [('BACKGROUND', (0, 0), (-1, 0), HEAD_BG),
               ('LINEBELOW', (0, 0), (-1, 0), 0.8, RULE)]
    t.setStyle(TableStyle(st))
    return KeepTogether([t, Spacer(1, 10)])


def deco(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 7.6)
    canvas.setFillColor(MUTED)
    canvas.drawString(0.85 * inch, 0.52 * inch, 'Rounds Codex - Copyright Registration Guide')
    canvas.drawRightString(7.65 * inch, 0.52 * inch, 'Page %d' % doc.page)
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(0.85 * inch, 0.70 * inch, 7.65 * inch, 0.70 * inch)
    canvas.restoreState()


st = []
A = st.append

A(P('Registering Copyright in Rounds Codex', 'title'))
A(P('A step-by-step guide to filing with the U.S. Copyright Office before launch, '
    'plus what is and is not worth protecting another way. Prepared 3 August 2026.', 'sub'))

A(callout('This is general information, not legal advice.', [
    'Everything here comes from the U.S. Copyright Office\'s own published circulars and fee '
    'schedule, and it describes a form you can file yourself. But three decisions in this '
    'process are genuine judgement calls with real consequences - whether your site counts as '
    '"published", how to describe AI-assisted material, and what to file as one work versus '
    'several. An hour with an IP attorney before you file is cheap next to a registration that '
    'is later held invalid.',
    'Verify all fees at <b>copyright.gov/about/fees.html</b> before paying. They change.'], 'note'))

# ---------------------------------------------------------------- AI section
A(P('1. Read this first: the AI disclosure rule', 'h1'))
A(P('This is the part of the process most likely to cause you a problem, and it is specific to '
    'how Rounds Codex was built.', 'body'))
A(P('Since March 2023 the Copyright Office has taken the position that material generated by '
    'artificial intelligence, without sufficient human creative control over the expression, is '
    '<b>not copyrightable</b>. A human being must be the author. When you apply, you have an '
    'affirmative <b>duty to disclose</b> AI-generated material that is more than trivial, and to '
    'exclude it from your claim in the "Limitation of Claim" section of the form.', 'body'))
A(P('Failing to disclose is not a technicality. The Office can cancel a registration obtained on '
    'an inaccurate application, and a defendant in an infringement case will look for exactly '
    'this. A registration you cannot rely on is worse than none, because you will have relied '
    'on it.', 'body'))

A(callout('Where this touches Rounds Codex specifically', [
    'Two large parts of the app were produced with AI assistance and need to be handled '
    'deliberately:',
    '<b>The gallery artwork.</b> The 800 illustration pages were produced through an AI '
    'generation pipeline. Raw AI output is not yours to claim. Your <i>selection, ordering, '
    'editing and arrangement</i> of those pages into teaching galleries almost certainly is.',
    '<b>The question banks.</b> Of the 1,820 condition quiz questions, 24 were transcribed from '
    'your own PDFs; the rest were drafted by AI from the module text. The same split applies.',
    'The practical answer is usually not to abandon the claim. It is to file a claim in what a '
    'human authored - the written module text you wrote, the compilation, the selection and '
    'arrangement, and your edits - and to disclaim the AI-generated material in the exclusion '
    'field. That is what the Office did in the well-known "Zarya of the Dawn" decision: the text '
    'and the arrangement were registered, the AI images were not.',
    '<b>Before you file, write down which parts are human-authored and which are not.</b> You '
    'cannot fill the form honestly without that list, and only you know it.'], 'warn'))

# ---------------------------------------------------------------- why
A(P('2. Why bother, if copyright is automatic?', 'h1'))
A(P('You already own the copyright. It attached the moment each part was fixed in a tangible '
    'form, with no paperwork. Registration does not create the right - it creates the '
    '<b>remedies</b>.', 'body'))
A(table([
    ['Without registration', 'With registration (filed in time)'],
    ['You cannot file an infringement lawsuit at all. Since <i>Fourth Estate v. Wall-Street.com</i> '
     '(Supreme Court, 2019) you need an actual registration in hand, not merely a pending '
     'application.',
     'You can sue. Expediting a registration later, mid-dispute, costs an $800 "special handling" '
     'surcharge on top of the filing fee.'],
    ['You can recover only your <i>actual</i> damages and the infringer\'s profits - which you '
     'must prove, and which for a pre-launch app may be close to zero even in a blatant case.',
     '<b>Statutory damages</b> of $750 to $30,000 per work, rising to $150,000 per work if the '
     'infringement was willful. No need to prove a dollar of loss.'],
    ['You pay your own attorney, win or lose. This is usually what makes a case not worth '
     'bringing.',
     '<b>Attorney\'s fees</b> may be awarded. This is the provision that turns a cease-and-desist '
     'letter into something a recipient acts on.'],
    ['-', 'The certificate is <i>prima facie</i> evidence that the copyright is valid and that '
     'the facts in it are true, if registered within five years of first publication.'],
], [3.15 * inch, 3.25 * inch]))

A(callout('The timing rule that decides everything', [
    'Under 17 U.S.C. section 412, statutory damages and attorney\'s fees are <b>not available</b> '
    'for any infringement that began <i>before</i> you registered - with one exception: if you '
    'register within <b>three months of first publication</b>, you are covered retroactively back '
    'to the date of publication.',
    'So the whole strategic point is: <b>register before you launch widely, or within three '
    'months of doing so.</b> Register late and someone who copied you in month four is beyond '
    'the reach of the remedies that matter, permanently. That window does not reopen.'], 'warn'))

A(PageBreak())

# ---------------------------------------------------------------- what
A(P('3. Decide what you are registering', 'h1'))
A(P('Rounds Codex is not one work. It is a computer program, a large body of written medical '
    'text, a set of illustrations, and a compilation - and the Copyright Office treats those '
    'differently. You cannot register "a website" as such; you register the copyrightable '
    'content of it, as it existed on a particular date.', 'body'))
A(table([
    ['Component', 'What it counts as', 'Office guidance'],
    ['<b>index.html, sw.js, the build scripts</b>', 'Computer program (a literary work)',
     'Circular 61'],
    ['<b>content/*.json</b> - the 181 conditions, 300 drugs, 1,308 resident entries, quizzes, '
     '470 guidelines', 'Literary work, and/or a compilation or database',
     'Circulars 65 and 66'],
    ['<b>The 800 gallery pages</b>', 'Pictorial / visual arts work', 'Circular 40'],
    ['<b>The site as a whole</b>', 'Compilation - your selection and arrangement',
     'Circular 66'],
], [2.25 * inch, 2.5 * inch, 1.65 * inch]))

A(P('A practical starting point', 'h2'))
A(P('For most people in your position the sensible first filing is <b>one Standard Application '
    'covering the website content as of a fixed date</b>, naming yourself as author of the text '
    'and the selection and arrangement, and disclaiming the AI-generated material. Then, if the '
    'code itself matters commercially, a second filing for the computer program.', 'body'))
A(P('Two things to know before you choose:', 'body'))
A(bullets([
    'A registration covers the work <b>as deposited on that date</b>. It does not cover later '
    'updates. A site you revise weekly cannot be kept perfectly covered by one filing - people '
    'usually register at meaningful milestones (launch, then major releases) rather than '
    'chasing every change.',
    'The <b>Single Application</b> ($45) is only for one work, by one author, who is also the '
    'sole claimant, not made for hire. If anyone else contributed copyrightable expression, or '
    'you are registering several works together, you need the <b>Standard Application</b> ($65).',
]))

A(callout('Are you "published"?', [
    'This determines which form, which deposit, and when your three-month clock starts - and it '
    'is genuinely unsettled for websites. The Office\'s general position is that publicly posting '
    'a work so that copies can be downloaded is publication; merely displaying it may not be.',
    'Right now your site is behind an unlisted URL and is set to noindex. That is arguably still '
    'unpublished. The moment you launch, it is published. <b>This is the single best question to '
    'put to an attorney</b>, because getting it wrong on the form is a misstatement of fact.'], 'note'))

# ---------------------------------------------------------------- steps
A(P('4. Filing, step by step', 'h1'))
A(P('Budget about 60 to 90 minutes for a first filing. You can save and return to a draft.',
    'body'))

A(P('Step 1 - Create your account', 'step'))
A(P('Go to <b>copyright.gov</b> and choose "Registration Portal", then the Electronic Copyright '
    'Office (eCO). Register for an account. Use an email address you will still have in ten '
    'years - the Office writes to you at it if an examiner has questions, and an unanswered '
    'query can close your case.', 'body'))

A(P('Step 2 - Start a Standard Application', 'step'))
A(P('From your eCO home screen choose "Register a Work" then "Standard Application". Do not use '
    'the Single Application unless you are certain your filing meets all four of its conditions '
    '(one work, one author, one claimant, not for hire).', 'body'))

A(P('Step 3 - Type of Work', 'step'))
A(P('Choose based on what you decided in section 3. For the website content filing choose '
    '<b>Work of the Visual Arts</b> if illustrations dominate, or <b>Literary Work</b> if text '
    'does. For a code filing choose <b>Literary Work</b> - computer programs are literary works '
    'in copyright law, which surprises everyone.', 'body'))

A(P('Step 4 - Titles', 'step'))
A(P('Give a clear, specific title, and be consistent with it forever - this is what you will cite '
    'in any dispute. Something like:', 'body'))
A(bullets([
    '<i>Rounds Codex - Website Content, Version of [date]</i>',
    '<i>Rounds Codex - Computer Program, Version of [date]</i>',
]))

A(P('Step 5 - Publication', 'step'))
A(P('Answer the published / unpublished question, and if published give the exact date of first '
    'publication and the nation. See the callout above - decide this deliberately rather than '
    'guessing.', 'body'))

A(P('Step 6 - Authors', 'step'))
A(P('Add yourself. Under "Author Created", tick only what a human actually authored - for example '
    '<i>text</i>, <i>compilation</i>, <i>editing</i>, and <i>artwork</i> only where the artwork '
    'is genuinely yours. Do not tick a category that describes AI output.', 'body'))
A(P('If you want to keep your home address off a public record, you may give an alternative '
    'address; registration records are searchable by anyone.', 'small'))

A(P('Step 7 - Claimant', 'step'))
A(P('This is who owns the copyright now - you personally, or your company if you have assigned '
    'it. If a company is the claimant and you are the author, you must state how it obtained '
    'ownership ("by written agreement").', 'body'))

A(P('Step 8 - Limitation of Claim: the AI disclosure', 'step'))
A(P('The most important screen in the application, and the one people skip.', 'body'))
A(bullets([
    '<b>Material excluded</b> - identify what you are <i>not</i> claiming. This is where '
    'AI-generated illustrations and AI-drafted question text go. Also exclude any third-party '
    'material: quoted guideline text, borrowed images, licensed fonts.',
    '<b>New material included</b> - state affirmatively what is yours. For example: '
    '<i>"text authored by the applicant; editorial revisions; compilation, selection, '
    'coordination and arrangement of all material."</i>',
]))
A(P('Write these two fields out in advance, in plain language, from the human-versus-AI list you '
    'made in section 1. If you are unsure how to phrase it, this is the moment to call an '
    'attorney rather than to guess.', 'body'))

A(P('Step 9 - Pay', 'step'))
A(P('Card or ACH. The fee is non-refundable even if registration is refused.', 'body'))

A(P('Step 10 - Upload the deposit', 'step'))
A(P('Because you are filing electronically you upload files rather than mailing anything. What '
    'to upload depends on what you are registering:', 'body'))
A(table([
    ['Registering', 'What to upload'],
    ['<b>Computer program</b>',
     'The first 25 and last 25 pages of source code as a single PDF. If the program is under 50 '
     'pages, all of it. You may redact trade secrets - Circular 61 sets out exactly how much you '
     'may block out and still have a valid deposit.'],
    ['<b>Website content</b>',
     'A PDF or capture of the content as it appeared on the date claimed. Not a link - the Office '
     'will not visit your site. Print the pages to PDF, or export the content files.'],
    ['<b>Illustrations</b>',
     'Image files of the works claimed, clearly identified, and only those that are '
     'human-authored.'],
], [1.5 * inch, 4.9 * inch]))
A(P('Keep an exact copy of everything you deposited. If you ever have to enforce this, the '
    'deposit is the thing that defines what you registered.', 'small'))

A(P('Step 11 - Submit, then wait', 'step'))
A(P('You will get a case number immediately - keep it. Electronic filings are currently taking '
    'roughly two to nine months when nothing is queried, longer if an examiner writes to you. '
    '<b>Your legal protection dates from the date you filed a complete application, not from the '
    'date the certificate arrives.</b> So the waiting time does not cost you the section 412 '
    'window - filing on time is what matters.', 'body'))

A(PageBreak())

# ---------------------------------------------------------------- fees
A(P('5. Fees', 'h1'))
A(P('Current electronic filing fees. Confirm at copyright.gov/about/fees.html before paying.',
    'body'))
A(table([
    ['Application type', 'Fee', 'When it applies'],
    ['Standard Application (electronic)', '$65',
     'The normal choice. Multiple works, multiple authors, or work made for hire.'],
    ['Single Application (electronic)', '$45',
     'One work, one author, that author is the only claimant, not made for hire. Strict.'],
    ['Group of unpublished works', '$85', 'Up to 10 unpublished works in one filing.'],
    ['Group of published photographs', '$55', 'Up to 750 photographs. Photographs, not artwork.'],
    ['Paper application (Form CO)', '$125', 'Slower and dearer. No reason to use it.'],
    ['Special handling surcharge', '+$800',
     'Expedites examination, for pending or prospective litigation. Avoidable by filing early.'],
], [2.15 * inch, 0.7 * inch, 3.55 * inch]))

A(callout('A realistic budget', [
    'Two Standard Applications - one for the website content, one for the code - is <b>$130</b> '
    'and covers the great majority of what matters. An attorney to review the AI disclosure and '
    'the publication question before you file is typically a one-to-two hour consultation. That '
    'is the whole cost of doing this properly.'], 'note'))

# ---------------------------------------------------------------- patent
A(P('6. Your patent question', 'h1'))
A(P('Your instinct is right, and for a more specific reason than "it is not a new idea".', 'body'))

A(P('The subject-matter problem', 'h2'))
A(P('Under <i>Alice Corp. v. CLS Bank</i> (Supreme Court, 2014), a claim directed to an abstract '
    'idea - which includes organising, storing, presenting and retrieving information - is not '
    'patent-eligible merely because it is carried out on a computer. "Present medical reference '
    'material to a clinician, on a phone, with a quiz" is close to the centre of what <i>Alice</i> '
    'excludes. Applications of this shape are routinely rejected under 35 U.S.C. section 101, '
    'before novelty is even reached.', 'body'))

A(P('The disclosure problem, which may already have run', 'h2'))
A(P('Even setting <i>Alice</i> aside, there is a deadline you should know about:', 'body'))
A(bullets([
    '<b>United States.</b> You have a <b>one-year grace period</b> from your own first public '
    'disclosure, sale or offer for sale. If the site has been publicly reachable, that clock may '
    'already be running.',
    '<b>Almost everywhere else.</b> Most countries apply <b>absolute novelty</b> - any public '
    'disclosure before filing destroys the right, with no grace period at all. Foreign patent '
    'rights in anything already disclosed are likely gone.',
]))

A(P('What would be worth asking about', 'h2'))
A(bullets([
    'A <b>design patent</b> can protect the ornamental appearance of a graphical user interface. '
    'It is narrow - it protects how it looks, not what it does - but it is real, cheaper than a '
    'utility patent, and granted much faster.',
    'If you ever build something genuinely technical - a novel scheduling algorithm, a real '
    'method for something - that is a different conversation. Nothing in the app today looks '
    'like that to me.',
]))

A(callout('The honest summary on patents', [
    'A utility patent here would likely cost $10,000-$20,000 or more in attorney and Office fees, '
    'take two to four years, and stand a poor chance of surviving a section 101 rejection. '
    '<b>I would not spend the money.</b> Copyright plus trademark protects what is actually '
    'valuable about Rounds Codex, at a tiny fraction of the cost.'], 'warn'))

# ---------------------------------------------------------------- trademark
A(P('7. What you should do instead: trademark', 'h1'))
A(P('You did not ask about this, but it is the protection most worth having and the one people '
    'leave until someone else has taken the name.', 'body'))
A(P('Copyright protects the <i>content</i>. It does not stop a competitor calling their product '
    '"Rounds Codex". A trademark does, and it is the asset that compounds as the brand becomes '
    'recognised. You now have two registrable marks:', 'body'))
A(bullets([
    'The word mark <b>ROUNDS CODEX</b> - which protects the name in any typeface, and is the '
    'stronger of the two.',
    'The <b>RC shield design</b> you have just finished - registrable as a design mark.',
]))
A(P('Filing is through the USPTO\'s TEAS system at <b>uspto.gov</b>, roughly $250 to $350 per '
    'class of goods or services (confirm the current schedule - the fee structure changed '
    'recently). The classes that likely apply are <b>Class 9</b> for downloadable software, '
    '<b>Class 41</b> for educational services, and <b>Class 42</b> if you offer it as a hosted '
    'service.', 'body'))
A(P('If you have not launched yet you can still file, on an <i>intent to use</i> basis, which '
    'reserves your priority date from the day you file rather than the day you start trading. '
    'Search the register first for conflicts - that search is the part worth paying an attorney '
    'for.', 'body'))

A(P('One thing you already got right', 'h2'))
A(P('Every gallery page carries the Rounds Codex lockup in the header and roundscodex.com in the '
    'footer. That does not prevent copying, but it makes any stolen page self-identifying and '
    'makes provenance trivial to prove. Do not let a future template change remove it.', 'body'))

A(PageBreak())

# ---------------------------------------------------------------- checklist
A(P('8. Checklist', 'h1'))
A(table([
    ['#', 'Do this', 'Before'],
    ['1', 'Write down which parts of the content are human-authored and which are AI-generated. '
          'Nothing else can be filled in honestly until this exists.', 'Everything else'],
    ['2', 'Decide whether the site is "published" - and if you are unsure, ask an attorney. It '
          'sets your three-month clock.', 'Filing'],
    ['3', 'Freeze a version. Export the content and code exactly as of one date and archive it '
          'as your deposit copy.', 'Filing'],
    ['4', 'Create the eCO account at copyright.gov.', 'Filing'],
    ['5', 'File Standard Application 1 - website content. $65.', 'Wide launch'],
    ['6', 'File Standard Application 2 - computer program, deposit redacted per Circular 61. $65.',
     'Wide launch'],
    ['7', 'Search the trademark register, then file ROUNDS CODEX (word mark), intent-to-use if '
          'not yet trading.', 'Announcing the name'],
    ['8', 'Turn on Netlify password protection until launch. Registration is a remedy after the '
          'fact; a password is the only thing that actually prevents the copying.', 'Sharing the URL'],
    ['9', 'Diarise a re-registration at each major release. One filing does not cover later '
          'versions.', 'Ongoing'],
], [0.32 * inch, 4.55 * inch, 1.53 * inch]))

A(P('Useful sources', 'h1'))
A(table([
    ['Circular 1', 'Copyright Basics'],
    ['Circular 61', 'Copyright Registration of Computer Programs - deposit and redaction rules'],
    ['Circular 66', 'Copyright Registration of Websites and Website Content'],
    ['Circular 65', 'Copyright Registration of Automated Databases'],
    ['Circular 40', 'Copyright Registration of Pictorial, Graphic, and Sculptural Works'],
    ['88 Fed. Reg. 16190', 'Copyright Registration Guidance: Works Containing Material Generated '
     'by Artificial Intelligence (16 March 2023) - the AI disclosure rule'],
    ['copyright.gov/about/fees.html', 'The current fee schedule. Check it before paying.'],
    ['uspto.gov', 'Trademark filing (TEAS) and the searchable register.'],
], [2.05 * inch, 4.35 * inch], header=False))

A(P('All circulars are free PDFs at copyright.gov/circs. Prepared for Dr. Kreithen, 3 August '
    '2026. General information only - not legal advice, and not a substitute for an attorney on '
    'the three judgement calls flagged in sections 1 and 3.', 'small'))

doc = BaseDocTemplate(OUT, pagesize=letter,
                      leftMargin=0.85 * inch, rightMargin=0.85 * inch,
                      topMargin=0.8 * inch, bottomMargin=0.85 * inch,
                      title='Rounds Codex - Copyright Registration Guide',
                      author='Prepared for Dr. Kreithen',
                      subject='US Copyright Office registration, step by step')
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id='f')
doc.addPageTemplates([PageTemplate(id='main', frames=[frame], onPage=deco)])
doc.build(st)
print('wrote', OUT)
