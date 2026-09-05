export const contactEmail = 'kudzi@alum.mit.edu'

const emailLink = (subject, body) =>
  `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export const roleEnquiry = emailLink(
  'Engineering role enquiry | Kudzaishe Zharare',
  'Hi Kudzaishe,\n\nI would like to discuss an engineering role.\n\nCompany:\nRole and job description:\nLocation / remote setup:\nCompensation range:\nHiring timeline:\n\n'
)

export const projectEnquiry = emailLink(
  'Contract project enquiry | Kudzaishe Zharare',
  'Hi Kudzaishe,\n\nI would like to discuss a project.\n\nCompany / product:\nProblem to solve:\nCurrent system or stack:\nExpected deliverable:\nBudget range:\nTimeline:\n\n'
)

export const services = [
  {
    title: 'Backend systems & API integrations',
    problem: 'Connect services, replace manual workflows, or take a backend feature from design to delivery.',
    deliverables: 'An implemented API or integration, failure handling, tests, and handover documentation.',
    tools: 'TypeScript · Node.js · Python · AWS',
    evidence: 'mutapa-technologies',
    evidenceLabel: 'Merchant payment integrations'
  },
  {
    title: 'AI features & agent workflows',
    problem: 'Connect language models to application data and tools, with explicit permissions and human approval where needed.',
    deliverables: 'A scoped prototype or application integration, structured tool interfaces, and evaluation cases.',
    tools: 'LLM integrations · Tool calling · Authorization',
    evidence: 'poza',
    evidenceLabel: 'Poza agent authorization work'
  },
  {
    title: 'Identity, onboarding & payment systems',
    problem: 'Build verification and onboarding flows, integrate payment providers, or automate operational checks.',
    deliverables: 'Application flows, provider integrations, decision rules, and operational tooling.',
    tools: 'KYC workflows · Liveness · Rules engines · Webhooks',
    evidence: 'cleva',
    evidenceLabel: 'Cleva identity engineering'
  },
  {
    title: 'Architecture review & delivery support',
    problem: 'Find the causes of reliability or integration problems and turn them into a defined implementation plan.',
    deliverables: 'A system review, prioritized findings, and an agreed implementation scope. Follow-on engineering can be scoped separately.',
    tools: 'System design · Observability · Technical leadership',
    evidence: 'flexid-engineering',
    evidenceLabel: 'FlexID platform engineering'
  }
]
