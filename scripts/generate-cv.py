"""Regenerate the committed CV asset: python scripts/generate-cv.py (requires reportlab)."""
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Embed font files so PDF viewers do not substitute inconsistent base fonts.
FONT_DIR = Path(os.environ.get('CV_FONT_DIR', '/usr/share/fonts/truetype/dejavu'))
pdfmetrics.registerFont(TTFont('CVSans', str(FONT_DIR / 'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('CVSans-Bold', str(FONT_DIR / 'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('CVSans', normal='CVSans', bold='CVSans-Bold', italic='CVSans', boldItalic='CVSans-Bold')

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public' / 'kudzaishe-zharare-cv.pdf'
INK = colors.HexColor('#202020')
MUTED = colors.HexColor('#4e4e4e')
ACCENT = colors.HexColor('#795139')
styles = {
    'name': ParagraphStyle('Name', fontName='CVSans-Bold', fontSize=23, leading=28, textColor=INK, spaceAfter=5),
    'role': ParagraphStyle('Role', fontName='CVSans', fontSize=12, leading=16, textColor=ACCENT, spaceAfter=9),
    'contact': ParagraphStyle('Contact', fontName='CVSans', fontSize=9, leading=13, textColor=MUTED),
    'body': ParagraphStyle('Body', fontName='CVSans', fontSize=9.5, leading=13.2, textColor=INK, spaceAfter=6),
    'section': ParagraphStyle('Section', fontName='CVSans-Bold', fontSize=10, leading=14, textColor=ACCENT, spaceBefore=13, spaceAfter=7),
    'job': ParagraphStyle('Job', fontName='CVSans-Bold', fontSize=10.5, leading=14, textColor=INK, spaceAfter=3),
    'meta': ParagraphStyle('Meta', fontName='CVSans', fontSize=9, leading=12, textColor=MUTED, spaceAfter=4),
}

def p(text, style='body'):
    return Paragraph(text, styles[style])

def link(url, label):
    return f'<link href="{escape(url)}" color="#795139"><u>{escape(label)}</u></link>'

story = [
    p('Kudzaishe George Zharare', 'name'),
    p('Software &amp; AI Engineer', 'role'),
    p('Cape Town, South Africa | ' + link('mailto:kudzi@alum.mit.edu', 'kudzi@alum.mit.edu'), 'contact'),
    p(link('https://www.kudzaishe.com', 'kudzaishe.com') + ' | ' + link('https://github.com/kudzaishezharare', 'GitHub: kudzaishezharare') + ' | ' + link('https://linkedin.com/in/kudzigeorge', 'LinkedIn: kudzigeorge'), 'contact'),
    Spacer(1, 12),
    p('Software engineer and MIT graduate with hands-on delivery and technical leadership across backend systems, payments, identity, and applications. Experience leading identity and compliance engineering at Cleva and serving as CTO at FlexID. Building AI integrations and authorization workflows at Poza.'),
    p('TECHNICAL FOCUS', 'section'),
    p('<b>Backend:</b> TypeScript, Node.js, Python, Django, AWS, PostgreSQL, DynamoDB, Redis.<br/><b>Applications:</b> React, React Native, Android, web and mobile onboarding.<br/><b>Systems:</b> API integrations, identity verification, compliance rules, LLM integrations, structured tools, authorization, observability.'),
    p('EXPERIENCE', 'section'),
]
roles = [
    ('Lead Engineer | Cleva (YC W24)', '2023 to 2025', 'Led security, identity, and compliance engineering for a USD banking platform supporting 500,000+ users. Built automated KYC, liveness verification, transaction monitoring, resilient onboarding, and internal mobile-testing systems.'),
    ('CTO, later Co-Founder | FlexID', '2021 to 2023', 'Built a self-sovereign identity wallet across Android, web, and WhatsApp using Algorand, verifiable credentials, zero-knowledge proofs, and MPC key management. FlexID was selected as a World Economic Forum Technology Pioneer.'),
    ('Founder | Motapa, trading as Mutapa', '2019 to 2021', 'Built commerce and payment infrastructure, delivered integrations for 200 Zimbabwean merchants and institutions, and sold Mutapa Marketplace to CBZ Holdings. The marketplace continues as Zikimall.'),
    ('Country Lead Engineer | The World Bank', '2019 to 2020', "Built Zimbabwe's DRIVER crash-reporting app and national dashboards. Led rollout with police, ambulance services, and the Ministry of Health."),
]
for title, dates, text in roles:
    story.append(KeepTogether([p(escape(title), 'job'), p(dates, 'meta'), p(escape(text)), Spacer(1, 4)]))
story += [
    p('SELECTED CURRENT WORK', 'section'),
    p('<b>Poza | Founder | 2025 to Present.</b> Building financial applications, provider integrations, and an authorization layer for agent-proposed actions. Product and pilot development are ongoing. ' + link('https://poza.co', 'poza.co')),
    p('<b>Lalela Web Games.</b> A browser platform adapting 202 GCompris educational activities with a shared JavaScript game framework. ' + link('https://github.com/kudzaishezharare/web-games', 'Source and documentation')),
    p('EDUCATION', 'section'),
    p('<b>Massachusetts Institute of Technology</b> | B.S. Computer Science &amp; Math.<br/>Undergraduate research in the Computational Fabrication Group, MIT CSAIL.'),
]

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=42, leftMargin=42, topMargin=36, bottomMargin=34, title='Kudzaishe Zharare | Software & AI Engineer', author='Kudzaishe George Zharare')
doc.build(story)
print(OUTPUT)
