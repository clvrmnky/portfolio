export interface CaseStudy {
  id: string
  number: string
  tags: string[]
  highlightedTags: string[]
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  featured?: boolean
  category: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'textframe',
    number: '01',
    tags: ['Evidence UX', 'UX Research', 'AI-Native Method', 'Design Lead'],
    highlightedTags: ['Evidence UX', 'UX Research'],
    title: 'Evidence UX & The TextFrame Method',
    description: 'A new design methodology, a comparative study across four competing architectures, and a two-phase implementation arc. 33% lift in reviewer decision accuracy.',
    ctaLabel: 'View case study',
    ctaHref: '#',
    featured: true,
    category: 'Evidence UX',
  },
  {
    id: 'ai-reasoning',
    number: '02',
    tags: ['AI Systems Design', 'Prompt Engineering', 'Cognitive Framework'],
    highlightedTags: ['AI Systems Design', 'Prompt Engineering'],
    title: 'Designing the AI Reasoning Layer',
    description: 'From cognitive theory to prompt architecture — making AI reasoning inspectable, defensible, and aligned to how clinicians actually think.',
    ctaLabel: 'View case study',
    ctaHref: '#',
    category: 'AI Reasoning',
  },
  {
    id: 'agree-rate',
    number: '03',
    tags: ['Product Strategy', 'UX Research', 'Multi-Site'],
    highlightedTags: ['Product Strategy'],
    title: 'The Agree Rate Framework',
    description: 'Reframing a behavior problem as a system quality problem — and building the strategic architecture to fix it across 3 health systems.',
    ctaLabel: 'View case study',
    ctaHref: '#',
    category: 'Strategy',
  },
]
