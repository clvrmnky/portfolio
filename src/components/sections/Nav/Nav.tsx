import { useEffect, useRef, useState } from 'react'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'About',    href: '#' },
  { label: 'Work',     href: '#work' },
  { label: 'Methods',  href: '#methods' },
  { label: 'Velocity', href: '#' },
]

export default function Nav() {
  const progressRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState('')

  // Scroll progress bar
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

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
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

      <div className={styles.brand}>
        <div className={styles.lcarsLines}>
          <span className={styles.lcarsLine} style={{ width: '8px' }} />
          <span className={styles.lcarsLine} style={{ width: '4px' }} />
        </div>
        <span className={styles.navName}>Justin Ranton</span>
        <span className={styles.navSlash}>/&thinsp;Design Technologist</span>
      </div>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.sys}>
        <div className={styles.sysDot} />
        <div className={styles.sysTag}>JR · 2026</div>
      </div>
    </nav>
  )
}
