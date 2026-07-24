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
        body: 'The current Mutapa site returns to that original cultural-commerce thesis from Cape Town: curated African art, objects, and apparel, with intent-led discovery and protected checkout.'
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
    summary: 'The COVID pivot from merchant storefronts into payment infrastructure, enterprise deployment, and Mutapa Marketplace, later acquired by CBZ Holdings and rebranded as Zikimall.',
    period: '2020 — 2021',
    brief: 'When COVID stopped Mutapa Wear from shipping internationally, I built Mutapa Stores so local businesses could launch a storefront with payments and delivery. That workflow became the entry point into merchant payment infrastructure.',
    sections: [
      {
        title: 'Five-minute storefronts',
        body: 'Mutapa Stores bundled a digital storefront, payments, inventory, and delivery so artisans and local businesses could keep selling during lockdown. The stores later became a shared marketplace rather than isolated merchant sites.'
      },
      {
        title: 'Two hundred institutions',
        body: 'A Visa-backed program brought us into 200 major Zimbabwean merchants and institutions through CBZ. I worked with executives, IT teams, government officials, and business owners to map collection workflows, implement integrations, train staff, and take systems live.'
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
    id: 'ap2',
    category: 'Protocol',
    title: 'Agent Payments Protocol (AP2)',
    summary: "Contributor to Google's open protocol for secure AI-agent payments, including work to represent African payment methods and mobile-money flows.",
    period: 'Open protocol',
    brief: 'AP2 defines interoperable primitives for accountable payments initiated by AI agents. My interest is ensuring emerging standards can represent payment methods and operating realities beyond cards and developed-market checkout.',
    sections: [
      { title: 'Connection to Poza', body: 'Protocols can carry intent and authority, but they do not replace local identity, compliance, payment availability, revocation, routing, or recovery. Poza treats AP2 as an adapter around those product responsibilities.' }
    ],
    links: [
      { label: 'AP2 repository', href: 'https://github.com/google-agentic-commerce/AP2' },
      { label: 'AP2 website', href: 'https://ap2-protocol.org' }
    ],
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
