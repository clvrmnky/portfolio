export interface Method {
  id: string
  index: string
  glyph: string
  title: string
  description: string
}

export const methods: Method[] = [
  {
    id: 'textframe',
    index: 'M · 01',
    glyph: '[ ]',
    title: 'TextFrame Method',
    description: 'Test IA in plain text before any Figma or engineering investment. 21 days → CPO-validated direction.',
  },
  {
    id: 'context-kb',
    index: 'M · 02',
    glyph: '{ }',
    title: 'Context Knowledgebase',
    description: 'Three-tier knowledge management for AI collaboration. Designed, built, shipped to GitHub. Live in this project.',
  },
  {
    id: 'ai-pipeline',
    index: 'M · 03',
    glyph: '▶▶',
    title: 'AI Design Pipeline',
    description: 'Agent-based design system construction — tokens, patterns, components in code pushed to Figma.',
  },
  {
    id: 'evals',
    index: 'M · 04',
    glyph: '◈',
    title: 'Evals as Design Artifacts',
    description: 'Evaluation frameworks as first-class design output. The eval defines success; the prompt is the implementation.',
  },
]
