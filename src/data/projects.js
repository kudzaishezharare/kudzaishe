const slidePages = (directory, count) =>
  Array.from({ length: count }, (_, index) => `${directory}/page-${String(index + 1).padStart(2, '0')}.jpg`)

const wearDeck = {
  type: 'slides',
  title: 'Mutapa Wear lookbook and model',
  pages: slidePages('/projects/mutapa/wear-slides', 28),
  pdf: '/projects/mutapa/motapa-overview.pdf',
  meta: 'Historical lookbook · 28 pages'
}

const creativeIndustriesDeck = {
  type: 'slides',
  title: 'Investing in the Creative Industries',
  pages: slidePages('/projects/mutapa/creative-industries-slides', 5),
  pdf: '/projects/mutapa/investing-in-creative-industries.pdf',
  meta: 'Historical strategy deck · 5 pages'
}

export const projects = [
  {
    id: 'cleva',
    category: 'Identity',
    title: 'Cleva: automated identity verification',
    summary: 'KYC automation that replaced days of waiting with decisions in under a minute for eligible submissions, supporting onboarding as Cleva grew beyond a million users.',
    period: 'Apr 2024 - 2025',
    brief: 'I joined Cleva in April 2024 when it had around 2,000 users and KYC was largely manual. After an August surge created a weeks-long backlog, I led the engineering work to automate verification and give reviewers better tools for exceptions.',
    sections: [
      { title: 'From days to under a minute', body: 'Users previously submitted personal details, an ID document, and a selfie holding that document, then waited for manual review. Waits ranged from 2 days to 3 weeks depending on demand. I integrated Veriff and built an in-house verification flow so eligible completed submissions could receive a decision in under a minute. Cases that could not be confidently approved or denied continued to manual review.' },
      { title: 'Nigerian NIN and duplicate detection', body: 'For Nigerian NIN documents unsupported by our Veriff integration, I built a flow using OCR to extract document information and AWS Rekognition to compare faces. Face indexing and search helped detect duplicate accounts. Reviewers received explicit reasons when automation could not resolve a case, including uncertain extraction or face matching.' },
      { title: 'Changing policy, predictable decisions', body: 'I designed a configurable JSON Logic engine for approximately 100 evolving KYC rules, with feature flags and explicit approval, denial, and manual-review outcomes. This made compliance policy easier to update and inspect as requirements changed.' },
      { title: 'Infrastructure for growth', body: 'The auto-verifier launched when Cleva had around 10,000 users. The verification infrastructure I designed remained part of onboarding as the company grew beyond a million users, removing a manual bottleneck in the path to serving that larger user base.' }
    ],
    links: [{ label: 'Cleva', href: 'https://getcleva.com' }],
    media: []
  },
  {
    id: 'poza',
    category: 'Payments',
    title: 'Poza: building a financial app end to end',
    summary: 'From 56 discovery interviews to mobile and web apps, document verification, payment integrations, and wallet accounting. Under active development, with brokerage integration tested in sandbox.',
    period: '2025 - Present',
    brief: 'As Founder and Software Engineer, I own the path from customer research and product design to application code, backend architecture, and AWS deployment. Poza is a money app under development, bringing together identity verification, wallets, cards, and investing, with a separate workstream for user-controlled AI financial assistance.',
    sections: [
      { title: 'Research into product and interface design', body: 'I conducted 56 interviews with merchants and payments stakeholders to understand payment failures, costs, settlement visibility, and recovery. I translated findings into product requirements, user journeys, and technical design documents. Interface research, Figma mockups, and prototypes informed the mobile and web flows; the interviews informed product choices, not a claim of product-market fit.' },
      { title: 'Mobile, web, and backend implementation', body: 'I built Flutter/Dart mobile apps, web interfaces, and TypeScript backend services on AWS, connecting account creation, identity verification, and financial account workflows. I designed API contracts, generated TypeScript and Dart clients with Smithy, and provisioned cloud infrastructure through AWS CDK. Implementation includes development and sandbox flows; not every screen represents a live financial capability.' },
      { title: 'Document verification and onboarding', body: 'I built a document-verification service combining PaddleOCR, passport machine-readable-zone checks, barcode validation, and facial matching. The pipeline checks agreement between document signals and returns reasons for approval, review, rejection, or recapture. I integrated AWS Rekognition liveness checks into onboarding. These use existing OCR and biometric engines, not custom-trained recognition models.' },
      { title: 'Deposits, wallet accounting, and card payments', body: 'I implemented Airwallex payment and card integrations and a PostgreSQL wallet ledger with balanced entries, deposit matching, reconciliation, and retry-safe event processing. The design credits deposits only after settlement evidence and audit checks, helping prevent duplicate credits or spendable balances unsupported by received funds. Core components are merged, with development deployment checks and launch gates tracked separately.' },
      { title: 'Brokerage integration', body: 'I implemented Alpaca brokerage onboarding, funding, and order submission in sandbox, including account-status synchronization and handling delayed provider updates. Sandbox testing is distinct from production enablement; this work does not imply that public users can already fund accounts or trade through Poza.' },
      { title: 'User-controlled AI financial assistance', body: 'I designed an agent architecture that requires user approval and enforces spending limits before financial actions. Backend services, rather than the model, decide what is allowed. The initial runtime foundation is deployed in development with test responses; live model calls and financial actions remain disabled in the documented configuration.' }
    ],
    links: [{ label: 'Why agent payments need proof of permission', href: 'https://poza.co/insights/agentic-payments-proving-permission/' }],
    media: []
  },
  {
    id: 'mutapa-wear',
    category: 'Commerce',
    title: 'Mutapa Wear',
    summary: 'A distributed manufacturing and cultural-commerce network connecting Zimbabwean tailors, designers, artists, and artisans to local and global buyers.',
    period: '2019 — 2020, revived 2026',
    brief: 'I started Motapa, trading as Mutapa, with a practical question: could software coordinate fragmented artisan production, quality control, fulfillment, and global demand without forcing every maker into one factory?',
    sections: [
      {
        title: 'Distributed manufacturing',
        body: 'Mutapa Wear coordinated more than 20 people across a distributed production channel, including tailors, garment makers, screen printers, designers, and artisans working in clothing, sculpture, jewelry, baskets, and related crafts.'
      },
      {
        title: 'Production as a system',
        body: 'The work was not only a fashion label. It joined design, raw materials, small-batch prototyping, quality control, production capacity, digital inventory, shipping, and US fulfillment into one operating model for makers who usually sold into a small and inconsistent local market.'
      },
      {
        title: 'Continuation',
        body: 'The current Mutapa site returns to that original cultural-commerce thesis: curated African art, objects, and apparel, with intent-led discovery and protected checkout.'
      }
    ],
    links: [
      { label: 'Current Mutapa collection', href: 'https://mutapa.co' }
    ],
    media: [
      wearDeck,
      creativeIndustriesDeck
    ]
  },
  {
    id: 'mutapa-technologies',
    category: 'Fintech',
    title: 'Mutapa Technologies',
    summary: 'Led a five-person team delivering merchant payment integrations through CBZ, spanning universities, retail, healthcare, and public institutions. Built Mutapa Marketplace, later acquired by CBZ Holdings.',
    period: '2020 - 2022, with subsequent support',
    brief: 'When COVID stopped Mutapa Wear from shipping internationally, I built Mutapa Stores so local businesses could launch a storefront with payments and delivery. That workflow became the entry point into merchant payment infrastructure.',
    sections: [
      {
        title: 'Five-minute storefronts',
        body: 'Mutapa Stores bundled a digital storefront, payments, inventory, and delivery so artisans and local businesses could keep selling during lockdown. The stores later became a shared marketplace rather than isolated merchant sites.'
      },
      {
        title: 'Engineering leadership and delivery',
        body: 'CBZ appointed Motapa to a programme contracted to cover 200 merchants. As lead engineer, I headed four other team members delivering iVeri integrations, working with merchant IT teams and business owners to map collection workflows, implement and test payments, and coordinate sign-off. I represented our team with CBZ and coordinated merchant training and ongoing support.'
      },
      {
        title: 'Across sectors',
        body: 'Our delivery records include the University of Zimbabwe, Lupane State University, Kwekwe Polytechnic, Eaglesvale, OK Zimbabwe, Gain Cash & Carry, CIMAS, Avenues Clinic, Seed Co, and York Lodge. Each organisation brought different payment and operational requirements, from tuition and healthcare to retail checkout and hospitality.'
      },
      {
        title: 'Beyond initial integration',
        body: 'Support continued through 2022, including card and EcoCash payment flows. Subsequent work extended integrations with 3D Secure, Cybersource Decision Manager, and Zimswitch online card payments through EFT Corporation\'s Open Payment Platform. These additions expanded payment coverage and fraud-screening capabilities after the initial rollout.'
      },
      {
        title: 'What the deployments taught me',
        body: 'Payment availability did not guarantee adoption. Training, staff turnover, integration complexity, settlement visibility, account verification, unfamiliar 3DS flows, and recovery all mattered. We built a simpler bank-payment checkout flow for CBZ customers, including account-ownership verification.'
      },
      {
        title: 'Acquisition',
        body: 'CBZ Holdings acquired Mutapa Marketplace and rebranded it as Zikimall. The experience is the foundation for how I now think about payment infrastructure: start from the actual workflow, institution, and failure mode rather than copying a developed-market interface.'
      }
    ],
    links: [
      { label: 'African fintech essay', href: 'https://medium.com/@kudzigeorge/for-centuries-technology-and-finance-have-lived-in-simpatic-hand-in-glove-relationship-2018b71b09c0' },
      { label: 'Banking 4.1 essay', href: 'https://medium.com/@kudzigeorge/hop-on-spaceship-and-join-the-banking-4-1-movement-4f88ca2e74f1' }
    ],
    media: [
      { ...wearDeck, title: 'Mutapa operating model' }
    ]
  },
  {
    id: 'lalela',
    category: 'Education',
    title: 'Lalela Web Games',
    summary: 'A Phaser-based browser platform adapting 202 GCompris educational activities across mathematics, literacy, programming, science, music, accessibility, and strategy.',
    period: '2025 — 2026',
    brief: 'I adapted a large catalog of GCompris learning activities from Qt/QML into a browser platform built with Phaser, preserving attribution while creating a reusable JavaScript game framework.',
    sections: [
      {
        title: 'Shared game system',
        body: 'The platform provides common lifecycle, input, audio, assets, feedback, scoring, navigation, local progress, accessibility, performance, and offline primitives beneath 202 registered scenes.'
      },
      {
        title: 'Breadth',
        body: 'Activities cover early-childhood interaction, arithmetic, fractions, literacy, programming, geography, electricity, music, Braille, chess, Oware, Sudoku, and other logic and strategy games.'
      },
      {
        title: 'Public engineering record',
        body: 'The personal repository preserves the original development history and contributors. It includes a no-login guest experience, tests, CI, a production build, screenshots, and explicit GCompris licensing and attribution.'
      }
    ],
    links: [
      { label: 'Open live app', href: 'https://lalela-games.vercel.app' },
      { label: 'Source and documentation', href: 'https://github.com/kudzaishezharare/web-games' },
      { label: 'Upstream GCompris', href: 'https://gcompris.net' }
    ],
    media: [
      { type: 'image', title: 'Browser game', src: '/projects/lalela/lalela-web-games.png', alt: 'Lalela Web Games running in a browser' }
    ]
  },
  {
    id: 'bantu-grammar',
    category: 'Open Source',
    title: 'Bantu Grammar Engine',
    summary: 'A Python engine that represents Shona grammar as machine-readable JSON-Logic rules, combining morphological analysis with deterministic validation for AI-generated and human-written text.',
    period: 'Research prototype',
    brief: 'The engine explores how deterministic linguistic rules can sit beside probabilistic language models for an underrepresented language.',
    sections: [
      { title: 'Current implementation', body: 'The Shona implementation includes tokenization, lightweight morphological analysis, noun-class and terminal-vowel checks, JSON-Logic rules, a CLI, and a passing test suite.' },
      { title: 'Why it matters', body: 'Language models can generate plausible text without respecting grammatical constraints. A machine-readable validator creates an inspectable layer for evaluation, constrained generation, and future repair workflows.' }
    ],
    links: [],
    media: []
  },
  {
    id: 'gosper',
    category: 'Geospatial',
    title: 'Gosper Open Location Code',
    summary: 'An experimental offline geocoder that encodes coordinates into compact, hierarchical location codes for places without standardized street addresses or complete digital maps.',
    period: 'Research prototype',
    brief: 'This project grew from the addressing problem I encountered while deploying road-safety software in Zimbabwe: consequential systems still need a precise way to communicate location where conventional addresses are absent.',
    sections: [
      { title: 'Approach', body: 'The pure-Python prototype uses a Gosper-inspired seven-way spatial hierarchy and includes encoding, decoding, a CLI, a browser demonstration, and reproducible comparisons with Google Open Location Code.' },
      { title: 'Current status', body: 'It is an experimental geospatial library rather than production emergency infrastructure. The underlying design question remains useful for people, software, and agents coordinating action in incompletely mapped environments.' }
    ],
    links: [],
    media: []
  }
]
