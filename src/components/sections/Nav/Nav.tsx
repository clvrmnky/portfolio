import { useEffect, useRef, useState } from 'react'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'WORK',    href: '#work' },
  { label: 'METHODS', href: '#methods' },
  { label: 'ABOUT',   href: '#' },
]

export default function Nav() {
  const progressRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop || document.body.scrollTop
      const total = doc.scrollHeight - doc.clientHeight
      const progress = total > 0 ? scrolled / total : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={styles.nav}>
      <div ref={progressRef} className={styles.progressBar} />

      {/* Operator identifier */}
      <div className={styles.ident}>
        <div className={styles.identMark} />
        <span className={styles.identLabel}>JR-2026</span>
        <span className={styles.identSep} />
        <span className={styles.identSub}>Design Technologist</span>
      </div>

      {/* |LABEL format navigation */}
      <ul className={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ''}`}
            >
              <span className={styles.pipe}>|</span>{label}
            </a>
          </li>
        ))}
      </ul>

      {/* Availability status */}
      <div className={styles.status}>
        <div className={styles.statusLed} />
        <span className={styles.statusLabel}>AVAIL · Q2 2026</span>
      </div>
    </nav>
  )
}
