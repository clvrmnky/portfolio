export type SkillColor = 'on-o' | 'on-b' | 'on-p'

export interface Skill {
  name: string
  fill: number  // 0–8
  color: SkillColor
}

export interface SkillGroup {
  label: string
  id: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Design Practice',
    id: 'designSkills',
    skills: [
      { name: 'UI Design',           fill: 7, color: 'on-o' },
      { name: 'Interaction Design',  fill: 8, color: 'on-o' },
      { name: 'UX Research',         fill: 7, color: 'on-o' },
      { name: 'Info Architecture',   fill: 8, color: 'on-o' },
      { name: 'Design Systems',      fill: 7, color: 'on-o' },
      { name: 'Prototyping',         fill: 8, color: 'on-o' },
      { name: 'Design Strategy',     fill: 8, color: 'on-o' },
      { name: 'Visual Design',       fill: 6, color: 'on-o' },
    ],
  },
  {
    label: 'AI-First Stack',
    id: 'aiSkills',
    skills: [
      { name: 'Prompt Engineering',  fill: 7, color: 'on-b' },
      { name: 'Context Injection',   fill: 8, color: 'on-b' },
      { name: 'Schema Design',       fill: 7, color: 'on-b' },
      { name: 'Vibe Coding',         fill: 7, color: 'on-b' },
      { name: 'AI Prototyping',      fill: 8, color: 'on-b' },
      { name: 'Agent Design',        fill: 6, color: 'on-b' },
      { name: 'Evals Design',        fill: 6, color: 'on-b' },
      { name: 'Knowledge Systems',   fill: 6, color: 'on-b' },
    ],
  },
]

export const tools = [
  'Figma', 'Cursor', 'Claude', 'Braintrust', 'React/Vite', 'Claude Code',
]
