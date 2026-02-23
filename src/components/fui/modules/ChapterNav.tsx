// src/components/fui/modules/ChapterNav.tsx — STUB (replaced in Task 2)

export interface Chapter {
  id: string
  number: string
  label: string
}

interface Props {
  chapters: Chapter[]
  activeChapter: string
}

export function ChapterNav({ chapters: _chapters, activeChapter: _activeChapter }: Props) {
  return <nav style={{ width: 260, background: 'rgba(3,12,24,0.96)', borderRight: '1px solid rgba(0,212,255,0.08)' }} />
}
