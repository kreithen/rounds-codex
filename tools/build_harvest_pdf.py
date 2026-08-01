#!/usr/bin/env python3
"""
Build the printable harvest runbook.

    python3 tools/build_harvest_pdf.py [out.pdf]

The instructions also live in tools/HARVEST-PROMPT.md and HARVEST-HANDOFF.md; this is the
version to keep on a phone or print, because the job is done away from this session by
definition -- the whole reason it exists is that the cloud session cannot run the tool.

NO UNICODE BEYOND WinAnsi. ReportLab's built-in Helvetica has no glyph for arrows, ticks or
box-drawing, and renders them as solid black rectangles rather than failing. Em dashes and
curly quotes are fine (WinAnsiEncoding covers them); "->" is written literally.
"""
import sys, os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
                                KeepTogether, HRFlowable)

OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'Rounds-Codex-Harvest-Runbook.pdf')

INK   = colors.HexColor('#14202e')
MUTED = colors.HexColor('#5a6a7d')
ACCENT= colors.HexColor('#0b6ea8')
RULE  = colors.HexColor('#c9d4e0')
BOXBG = colors.HexColor('#f3f6fa')
WARNBG= colors.HexColor('#fdf4e7')

def S(name, **kw):
    base = dict(fontName='Helvetica', fontSize=10.2, leading=14.4, textColor=INK,
                spaceAfter=7, alignment=TA_LEFT)
    base.update(kw)
    return ParagraphStyle(name, **base)

body    = S('body')
h1      = S('h1', fontName='Helvetica-Bold', fontSize=19, leading=23, spaceAfter=3)
sub     = S('sub', fontSize=10.5, leading=14, textColor=MUTED, spaceAfter=16)
h2      = S('h2', fontName='Helvetica-Bold', fontSize=13.2, leading=17,
            spaceBefore=15, spaceAfter=7, textColor=ACCENT)
step    = S('step', fontName='Helvetica-Bold', fontSize=11.4, leading=15,
            spaceBefore=11, spaceAfter=4)
mono    = S('mono', fontName='Courier', fontSize=8.6, leading=12.2, spaceAfter=0)
monosm  = S('monosm', fontName='Courier', fontSize=7.8, leading=11, spaceAfter=0)
bullet  = S('bullet', leftIndent=13, bulletIndent=2, spaceAfter=5)
small   = S('small', fontSize=9.1, leading=12.8, textColor=MUTED)
cell    = S('cell', fontSize=9.1, leading=12.2, spaceAfter=0)
cellb   = S('cellb', fontSize=9.1, leading=12.2, spaceAfter=0, fontName='Helvetica-Bold')


def box(flowables, bg=BOXBG, border=RULE, pad=9):
    t = Table([[flowables]], colWidths=[6.5 * inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), bg),
        ('BOX', (0, 0), (-1, -1), 0.7, border),
        ('LEFTPADDING', (0, 0), (-1, -1), pad), ('RIGHTPADDING', (0, 0), (-1, -1), pad),
        ('TOPPADDING', (0, 0), (-1, -1), pad),  ('BOTTOMPADDING', (0, 0), (-1, -1), pad),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    return t


def grid(rows, widths, header=True):
    data = [[Paragraph(c, cellb if (header and r == 0) else cell) for c in row]
            for r, row in enumerate(rows)]
    t = Table(data, colWidths=widths)
    style = [
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 7), ('RIGHTPADDING', (0, 0), (-1, -1), 7),
        ('TOPPADDING', (0, 0), (-1, -1), 5), ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('LINEBELOW', (0, 0), (-1, -2), 0.4, RULE),
        ('BOX', (0, 0), (-1, -1), 0.7, RULE),
    ]
    if header:
        style += [('BACKGROUND', (0, 0), (-1, 0), BOXBG)]
    t.setStyle(TableStyle(style))
    return t


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 7.8)
    canvas.setFillColor(MUTED)
    canvas.drawString(0.9 * inch, 0.55 * inch, 'Rounds Codex — harvesting the 174 USMLE illustration URLs')
    canvas.drawRightString(7.6 * inch, 0.55 * inch, 'Page %d' % doc.page)
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(0.9 * inch, 0.72 * inch, 7.6 * inch, 0.72 * inch)
    canvas.restoreState()


def build():
    doc = SimpleDocTemplate(OUT, pagesize=LETTER,
                            leftMargin=0.9 * inch, rightMargin=0.9 * inch,
                            topMargin=0.85 * inch, bottomMargin=0.9 * inch,
                            title='Rounds Codex - Harvest Runbook',
                            author='Rounds Codex')
    s = []
    s.append(Paragraph('Harvesting the 174 image URLs', h1))
    s.append(Paragraph('Two copy-pastes. Prepared 1 August 2026.', sub))

    s.append(Paragraph('Why this cannot be done in the Rounds Codex session', h2))
    s.append(Paragraph(
        'The two Higgsfield tools that map a generation job to its image URL '
        '(<font face="Courier" size="9">show_generations</font> and '
        '<font face="Courier" size="9">job_display</font>) both render a client-side gallery '
        'widget. The cloud session has nowhere to draw one, so it refuses them outright. '
        'This is <b>not</b> a permission prompt waiting on you — the refusal is instant, no '
        'Higgsfield tool has ever been allow-listed, and every other Higgsfield tool runs '
        'there without one. Clicking "always allow" cannot fix it.', body))
    s.append(Spacer(1, 4))
    s.append(grid([
        ['Route tried', 'Result'],
        ['<font face="Courier" size="8.6">show_generations</font>',
         'Refused — twice, including after the connector reconnected'],
        ['<font face="Courier" size="8.6">job_display</font>', 'Refused'],
        ['<font face="Courier" size="8.6">sandbox_exec</font>', 'Refused'],
        ['<font face="Courier" size="8.6">show_medias</font>',
         'Works, but returns 15 items — that is the <b>upload</b> library, not generations'],
        ['The session transcript',
         '<font face="Courier" size="8.6">generate_image</font> returned job ids and '
         '"pending", no URLs'],
        ['Deriving URLs from job ids',
         'Unverifiable: no job map was saved for the 29 July batch, and the filename carries '
         'an <font face="Courier" size="8.6">HHMMSS</font> that is not derivable'],
    ], [1.75 * inch, 4.75 * inch]))

    s.append(Paragraph('Step 1 — open a session that is not the cloud one', h2))
    s.append(Paragraph(
        'Go to <b>claude.ai</b> in a browser and start a new chat. Claude Code desktop or the '
        'CLI works equally well. What matters is only that it is not the Rounds Codex cloud '
        'session.', body))
    s.append(box([Paragraph(
        '<b>Check the Higgsfield connector is enabled for that chat.</b> It is a per-chat '
        'switch, not just per-account — a chat with it off will tell you it has no such '
        'tool, which looks identical to the problem above. Connector / tools menu in the new '
        'chat, Higgsfield on.', body)], bg=WARNBG, border=colors.HexColor('#e3c9a0')))

    prompt_lines = [
        'Using the Higgsfield connector, call show_generations with size: 100',
        'and type: "image". If the response has a non-null next_cursor, call it',
        'again with that cursor, and keep going until next_cursor is null.',
        '',
        'Then give me ONE JSON object and nothing else - no commentary, no',
        'summary. Keys are each generation\'s id, values are that generation\'s',
        'image URL (the first URL in its results). Skip any generation that has',
        'no URL. It should look exactly like this:',
        '',
        '{',
        ' "b5b6d40b-597b-4cef-aef6-cf00daf11857": "https://d8j0ntlcm91z4.clou',
        'dfront.net/user_.../hf_20260731_....png",',
        ' "a073ad46-80c5-4b9d-8a07-2d71e7559411": "https://d8j0ntlcm91z4.clou',
        'dfront.net/user_.../hf_20260731_....png"',
        '}',
        '',
        'Do not summarise, do not truncate, and do not reorder. I need every',
        'pair.',
    ]
    # KeepTogether: the heading is useless on its own at a page foot, and the box is the
    # thing being pointed at. Without this, "Step 2" orphaned at the bottom of page 1.
    s.append(KeepTogether([
        Paragraph('Step 2 — paste this in, exactly', h2),
        box([Paragraph(ln if ln else '&nbsp;', monosm) for ln in prompt_lines]),
        Spacer(1, 7),
        Paragraph(
            'Asking for id-and-URL only is deliberate. The full pages carry every generation '
            'prompt, which runs to megabytes and will not survive a paste; this form is about '
            '20 KB for all 174.', small),
    ]))

    s.append(Paragraph('Step 3 — paste the JSON back to me', h2))
    s.append(Paragraph(
        'Straight into the Rounds Codex chat, or saved as a file and attached. Either works. '
        'Then I run:', body))
    s.append(box([Paragraph(ln, mono) for ln in [
        'python3 tools/harvest_generations.py &lt;file&gt; --dry-run   # look first',
        'python3 tools/harvest_generations.py &lt;file&gt;',
        'python3 tools/image_batch_plan.py --status',
    ]]))
    s.append(Spacer(1, 7))
    s.append(Paragraph(
        'The harvester accepts both this compact form and raw '
        '<font face="Courier" size="9">show_generations</font> pages, so if the other session '
        'hands you the full pages instead, that works too — just pass them along.', small))

    s.append(Paragraph('What to expect', h2))
    for b in [
        '<b>166 of 174 pairs.</b> Eight failed at generation. The credit ledger showed 174 '
        'spends against 8 refunds landing within seconds of their own spend, which is the '
        'signature of a moderation refusal rather than a capacity failure. The harvester '
        'reports those as absent instead of quietly passing over them.',
        'The join is on <b>job id, never on order</b>. Pages come back newest-first and '
        'interleaved with other generations, and a positional match would attach a medical '
        'illustration to the wrong question — worse than a missing one.',
        'Re-running is safe. A second run records 0 new, and an existing different URL is '
        'refused unless <font face="Courier" size="9">--force</font> is passed.',
        '<b>The URLs are not publicly fetchable.</b> Confirmed 1 August: the CDN returns 403 '
        'to anything that is not an authenticated Higgsfield session, so a harvested URL '
        'records WHICH image belongs to which question but cannot be used to look at one. '
        'To see the pictures, download them from the gallery and run '
        '<font face="Courier" size="9">tools/build_illustration_pdf.py</font>.',
    ]:
        s.append(Paragraph(b, bullet, bulletText='•'))

    s.append(KeepTogether([
        Paragraph('After the harvest', h2),
        Paragraph(
            '<font face="Courier" size="9">python3 tools/build_review_page.py</font> builds one '
            'standalone HTML page for review. Open it locally — it cannot be published as an '
            'Artifact, because that content policy blocks external hosts and these are remote '
            'images.', bullet, bulletText='\u2022'),
    ]))
    for b in [
        'The container still cannot fetch the images at all (the proxy blocks '
        '<font face="Courier" size="9">higgsfield.ai</font> and the CDN), so the physician '
        'review happens in your browser, not in the session.',
        'Eight corrected re-fire prompts are staged in '
        '<font face="Courier" size="9">tools/refire-queue.json</font> (16 credits). These are '
        'separate from whatever the harvest reports as failed, and need your go-ahead to spend.',
    ]:
        s.append(Paragraph(b, bullet, bulletText='•'))

    s.append(HRFlowable(width='100%', thickness=0.6, color=RULE, spaceBefore=18, spaceAfter=10))

    s.append(KeepTogether([
        Paragraph('Appendix A — the one other thing only you can do', h2),
        Paragraph(
            '<b>Turn on Netlify’s failed-deploy email.</b> The Netlify API exposes no '
            'notifications endpoint, so this cannot be done from the session — I checked '
            'rather than assumed.', body),
        box([Paragraph('app.netlify.com  ->  rounds-codex  ->  Project configuration  -> '
                       ' Notifications  ->  Add notification  ->  Deploy failed  ->  Email', mono)]),
        Spacer(1, 7),
        Paragraph(
            'Deploys broke silently for 16 hours on 30/31 July and nothing alerted. This email '
            'is out-of-band from both the connector and any session, which is exactly why it is '
            'the fix that matters. The manual backstop is to load '
            '<font face="Courier" size="9">rounds-codex.netlify.app/version.txt</font> after a '
            'deploy and check the timestamp moved.', small),
    ]))

    s.append(KeepTogether([
        Paragraph('Appendix B — when a connector looks broken', h2),
        Paragraph(
            'These three states present identically as "the connector is not working", and '
            'only one of them is worth re-authorising for. Ask me to run '
            '<font face="Courier" size="9">ListConnectors</font> — it is one call and tells '
            'you which you are looking at.', body),
        grid([
            ['Reads', 'Means', 'Do'],
            ['<font face="Courier" size="8.6">connected: true</font><br/>'
             '<font face="Courier" size="8.6">enabledInChat: false</font>',
             'Authenticated, but switched off for that chat',
             'Toggle it on in that chat’s connector settings. <b>Do not re-authorise.</b>'],
            ['<font face="Courier" size="8.6">connected: false</font>',
             'Genuinely deauthorised',
             'claude.ai -> Settings -> Connectors -> Reconnect'],
            ['<font face="Courier" size="8.6">connected: null</font>',
             'Status check unavailable',
             'Unknown, not broken. Re-check; do not act on it.'],
        ], [1.55 * inch, 1.9 * inch, 3.05 * inch]),
        Spacer(1, 7),
        Paragraph(
            'On 1 August all four connectors — Google Drive, Higgsfield, Netlify and '
            'Supabase, 129 tools — dropped and returned as a single event, and Drive came '
            'back under a different server id. That is the shared transport reconnecting, not '
            'your account. It self-heals in a few minutes and there is no user-side fix; '
            're-authorising during that window achieves nothing.', small),
    ]))

    doc.build(s, onFirstPage=footer, onLaterPages=footer)
    print(f'wrote {OUT}  ({os.path.getsize(OUT):,} bytes)')


if __name__ == '__main__':
    build()
