const slidePages = (directory, count) =>
  Array.from({ length: count }, (_, index) => `${directory}/page-${String(index + 1).padStart(2, '0')}.jpg`)

const wearDeck = {
  type: 'slides', title: 'Mutapa Wear lookbook and model',
  pages: slidePages('/projects/mutapa/wear-slides', 28),
  pdf: '/projects/mutapa/motapa-overview.pdf', meta: 'Historical lookbook · 28 pages'
}
const creativeIndustriesDeck = {
  type: 'slides', title: 'Investing in the Creative Industries',
  pages: slidePages('/projects/mutapa/creative-industries-slides', 5),
  pdf: '/projects/mutapa/investing-in-creative-industries.pdf', meta: 'Historical strategy deck · 5 pages'
}

export const projects = [
  {
    id: 'cleva', category: 'Identity', title: 'Cleva: faster identity verification',
    summary: 'Reduced decisions from days to under a minute for eligible submissions',
    period: 'Apr 2024 - 2025',
    brief: 'Automated identity verification to address a manual onboarding backlog.',
    sections: [
      { title: 'Challenge and action', body: 'Applicants waited between 2 days and 3 weeks for manual review. I built document verification, duplicate detection, and configurable decision workflows, with explicit referral of uncertain cases to human reviewers.' },
      { title: 'Result', body: 'Eligible completed submissions received decisions in under a minute. The verification infrastructure supported onboarding as the platform grew beyond 1 million users; this is company scale, not an automated approval count.' },
      { title: 'Work within device constraints', body: 'Reduced liveness-check failures on low-end phones by addressing crashes and camera-image errors, narrowing the observed verification-completion gap with an external provider.' }
    ],
    links: [{ label: 'Cleva', href: 'https://getcleva.com' }], media: []
  },
  {
    id: 'flexid', category: 'Digital identity', title: 'FlexID: user-controlled credentials',
    summary: 'Credential wallets with selective disclosure and zero-knowledge proofs',
    period: '2021 - 2023',
    brief: 'As CTO and later Co-Founder, I led engineering for a self-sovereign identity platform.',
    sections: [
      { title: 'Portable identity', body: 'Built mobile and web wallets that let users hold and present verifiable credentials, bringing identity records under the control of their holders.' },
      { title: 'Privacy-preserving verification', body: 'Applied selective disclosure and zero-knowledge proofs so users could prove claims without exposing complete identity records. The work included encrypted credential handling and application architecture.' },
      { title: 'Engineering delivery', body: 'Led a distributed team across wallet applications, backend services, and cloud infrastructure. FlexID was selected as a World Economic Forum Technology Pioneer in 2022.' }
    ],
    links: [], media: []
  },
  {
    id: 'poza', category: 'Financial software', title: 'Poza: research through implementation',
    summary: 'Financial app with cloud architecture and AI agent workflows; in development',
    period: '2025 - Present',
    brief: 'Building a financial app from product research through application and infrastructure development.',
    sections: [
      { title: 'Define the product', body: 'Translated 56 merchant and payments interviews into requirements, user journeys, prototypes, and technical designs. The interviews established product scope; they are not a customer acquisition metric.' },
      { title: 'Connect the workflow', body: 'Built mobile and web account workflows with identity verification and backend services. Connected wallet, payment, and brokerage capabilities in development and sandbox environments.' },
      { title: 'Account for funds', body: 'Designed wallet accounting and reconciliation to prevent duplicate deposit credits and keep balances traceable to settled funds. The product remains under development.' },
      { title: 'Make delivery repeatable', body: 'Architected AWS infrastructure as code with CDK and automated deployment pipelines. Used Vitest for application and infrastructure tests, and Playwright for browser workflow tests. Added service tests to validate access controls, data isolation, and safe handling of repeat requests.' },
      { title: 'Bound agent authority', body: 'Designed AI agent workflows with scoped tool access and human approval checkpoints for consequential actions. Built and tested a read-only runtime for task handling and tool orchestration. Model-driven financial execution remains future work.' }
    ],
    links: [{ label: 'Writing on user approval for agent payments', href: 'https://poza.co/insights/agentic-payments-proving-permission/' }], media: []
  },
  {
    id: 'mutapa-technologies', category: 'Payments and commerce', title: 'Mutapa: merchant systems and marketplace',
    summary: 'Led a 5-person delivery team; built a marketplace later acquired by CBZ Holdings',
    period: '2020 - 2021',
    brief: 'Built merchant commerce and payment systems and led delivery through the CBZ programme.',
    sections: [
      { title: 'Deliver across organisations', body: 'Led a 5-person team delivering payment systems for merchants in education, retail, healthcare, and other sectors. Coordinated requirements, integration testing, bank liaison, merchant training, and rollout.' },
      { title: 'Result and continuation', body: 'Built Mutapa Marketplace, later acquired by CBZ Holdings and now Zikimall. Payment integration support continued through 2022, following the 2020 to 2021 role period.' }
    ],
    links: [{ label: 'Zikimall', href: 'https://zikimall.com/' }],
    media: [{ ...wearDeck, title: 'Mutapa operating model' }]
  },
  {
    id: 'mutapa-wear', category: 'Commerce', title: 'Mutapa Wear',
    summary: 'Coordinated a distributed production network for artisan products',
    period: 'Historical creative-commerce work',
    brief: 'Connected artisan production, digital inventory, and fulfilment in a shared operating model.',
    sections: [
      { title: 'Production and delivery', body: 'Coordinated more than 20 people across design, prototyping, production, quality control, and fulfilment. This creative-commerce work is distinct from the Mutapa Marketplace acquisition.' }
    ],
    links: [{ label: 'Mutapa collection', href: 'https://mutapa.co' }],
    media: [wearDeck, creativeIndustriesDeck]
  },
  {
    id: 'lalela', category: 'Education', title: 'Lalela Web Games',
    summary: 'Adapted 202 educational activities into a browser learning platform',
    period: '2025 - 2026',
    brief: 'Adapted a desktop learning catalogue for use in the browser while preserving attribution.',
    sections: [
      { title: 'Reusable platform', body: 'Built shared input, audio, navigation, feedback, progress, and accessibility capabilities beneath 202 registered activities spanning mathematics, literacy, science, and strategy.' }
    ],
    links: [
      { label: 'Live app', href: 'https://lalela-games.vercel.app' },
      { label: 'Source and documentation', href: 'https://github.com/kudzaishezharare/web-games' }
    ],
    media: [{ type: 'image', title: 'Browser game', src: '/projects/lalela/lalela-web-games.png', alt: 'Lalela Web Games running in a browser' }]
  },
  {
    id: 'bantu-grammar', category: 'Language tools', title: 'Bantu Grammar Engine',
    summary: 'Deterministic grammar validation for human and machine-generated text',
    period: 'Research prototype',
    brief: 'Exploring how inspectable language rules can complement probabilistic text generation.',
    sections: [
      { title: 'Implementation', body: 'Built tokenization, morphological analysis, and grammatical validation for Shona, with a command-line interface and tests. The work remains a research prototype.' }
    ],
    links: [], media: []
  },
  {
    id: 'gosper', category: 'Geospatial', title: 'Gosper Open Location Code',
    summary: 'Experimental offline location codes for places without conventional addresses',
    period: 'Research prototype',
    brief: 'Exploring compact location references where street addresses are unavailable.',
    sections: [
      { title: 'Implementation', body: 'Built coordinate encoding and decoding, a command-line interface, and a browser demonstration, with reproducible comparisons against an established location-code system. It is a research prototype.' }
    ],
    links: [], media: []
  }
]
