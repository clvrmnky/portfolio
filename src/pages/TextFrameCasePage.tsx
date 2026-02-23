import { useState, useEffect } from 'react'
import { ChapterNav } from '../components/fui/modules/ChapterNav'
import type { Chapter } from '../components/fui/modules/ChapterNav'
import { DiamondMark } from '../components/fui'
import { InlineSep } from '../components/fui'
import styles from './TextFrameCasePage.module.css'

const CHAPTERS: Chapter[] = [
  { id: 'situation', number: '01', label: 'SITUATION' },
  { id: 'method',    number: '02', label: 'METHOD' },
  { id: 'study',     number: '03', label: 'STUDY' },
  { id: 'results',   number: '04', label: 'RESULTS' },
  { id: 'pilot',     number: '05', label: 'PILOT' },
  { id: 'phase2',    number: '06', label: 'PHASE 2' },
]

export default function TextFrameCasePage() {
  const [activeChapter, setActiveChapter] = useState('situation')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveChapter(entry.target.id)
        })
      },
      { rootMargin: '-10% 0px -80% 0px' }
    )
    const sections = document.querySelectorAll('[data-chapter]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.page}>
      <ChapterNav chapters={CHAPTERS} activeChapter={activeChapter} />
      <main className={styles.content}>
        <header className={styles.pageHeader}>
          <div className={styles.eyebrow}>
            <DiamondMark size={5} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.eyebrowLabel}>CASE_FILE / CS_01</span>
          </div>
          <h1 className={styles.title}>Evidence UX &<br />The TextFrame Method</h1>
          <InlineSep />
          <p className={styles.subtitle}>
            A new design methodology, a comparative study across four competing architectures,
            and a two-phase implementation arc.
          </p>
        </header>

        <section id="situation" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>01</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>SITUATION</h2>
          </div>
          <div className={styles.chapterBody}>
            <p className={styles.bodyText}>Chapter content coming in Task 3.</p>
          </div>
        </section>

        <section id="method" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>02</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>METHOD</h2>
          </div>
          <div className={styles.chapterBody}>
            <p className={styles.bodyText}>Chapter content coming in Task 4.</p>
          </div>
        </section>

        <section id="study" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>03</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>STUDY</h2>
          </div>
          <div className={styles.chapterBody}>
            <p className={styles.bodyText}>Chapter content coming in Task 6.</p>
          </div>
        </section>

        <section id="results" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>04</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>RESULTS</h2>
          </div>
          <div className={styles.chapterBody}>
            <p className={styles.bodyText}>Chapter content coming in Task 7.</p>
          </div>
        </section>

        <section id="pilot" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>05</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>PILOT</h2>
          </div>
          <div className={styles.chapterBody}>
            <p className={styles.bodyText}>Chapter content coming in Task 8.</p>
          </div>
        </section>

        <section id="phase2" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>06</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>PHASE 2</h2>
          </div>
          <div className={styles.chapterBody}>
            <p className={styles.bodyText}>Chapter content coming in Task 9.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
