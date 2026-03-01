export interface CaseStudy {
  id: string
  slug: string
  number: string
  tags: string[]
  highlightedTags: string[]
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  featured?: boolean
  category: string
  status: 'active' | 'standby' | 'offline'
  metric: {
    label: string
    displayValue: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'textframe',
    slug: 'evidence-ux',
    number: '01',
    tags: ['Evidence UX', 'UX Research', 'AI-Native Method', 'Design Lead'],
    highlightedTags: ['Evidence UX', 'UX Research'],
    title: 'Evidence UX & The TextFrame Method',
    description: 'A new design methodology, a comparative study across four competing architectures, and a two-phase implementation arc. 33% lift in reviewer decision accuracy.',
    ctaLabel: 'View case study',
    ctaHref: '/work/evidence-ux',
    featured: true,
    category: 'Evidence UX',
    status: 'active',
    metric: {
      label: 'ACCURACY LIFT',
      displayValue: '+33%',
    },
  },
  {
    id: 'ai-reasoning',
    slug: 'ai-reasoning',
    number: '02',
    tags: ['AI Systems Design', 'Prompt Engineering', 'Cognitive Framework'],
    highlightedTags: ['AI Systems Design', 'Prompt Engineering'],
    title: 'Designing the AI Reasoning Layer',
    description: 'From cognitive theory to prompt architecture — making AI reasoning inspectable, defensible, and aligned to how clinicians actually think.',
    ctaLabel: 'View case study',
    ctaHref: '/work/ai-reasoning',
    category: 'AI Reasoning',
    status: 'active',
    metric: {
      label: 'ARCHITECTURE DEPTH',
      displayValue: '×4',
    },
  },
  {
    id: 'agree-rate',
    slug: 'agree-rate',
    number: '03',
    tags: ['Product Strategy', 'UX Research', 'Multi-Site'],
    highlightedTags: ['Product Strategy'],
    title: 'The Agree Rate Framework',
    description: 'Reframing a behavior problem as a system quality problem — and building the strategic architecture to fix it across 3 health systems.',
    ctaLabel: 'View case study',
    ctaHref: '/work/agree-rate',
    category: 'Strategy',
    status: 'standby',
    metric: {
      label: 'HEALTH SYSTEMS',
      displayValue: '×3',
    },
  },
]
