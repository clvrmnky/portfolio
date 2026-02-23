// src/components/fui/modules/ChapterNav.tsx
import { DiamondMark } from '../primitives/DiamondMark'
import { StatusIndicator } from '../assembled/StatusIndicator'
import styles from './ChapterNav.module.css'

export interface Chapter {
  id: string
  number: string
  label: string
}

interface Props {
  chapters: Chapter[]
  activeChapter: string
}

export function ChapterNav({ chapters, activeChapter }: Props) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={styles.nav}>
      {/* Header */}
      <div className={styles.navHeader}>
        <StatusIndicator status="active" label="ACTIVE" />
        <div className={styles.navTitle}>CS_01 / TEXTFRAME</div>
      </div>

      {/* Spine rule */}
      <div className={styles.spine} />

      {/* Chapter list */}
      <ul className={styles.list}>
        {chapters.map((ch) => {
          const isActive = activeChapter === ch.id
          return (
            <li key={ch.id} className={styles.item}>
              <button
                className={`${styles.btn} ${isActive ? styles.btnActive : ''}`}
                onClick={() => handleClick(ch.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <div className={styles.btnLeft}>
                  <DiamondMark
                    size={isActive ? 5 : 4}
                    stroke={isActive ? 'rgba(0,212,255,0.9)' : 'rgba(0,212,255,0.3)'}
                    filled={isActive}
                  />
                  <span className={styles.num}>{ch.number}</span>
                </div>
                <span className={styles.label}>{ch.label}</span>
              </button>
            </li>
          )
        })}
      </ul>

      {/* Footer chrome */}
      <div className={styles.footer}>
        <a href="/" className={styles.backLink}>← BACK</a>
      </div>
    </nav>
  )
}
