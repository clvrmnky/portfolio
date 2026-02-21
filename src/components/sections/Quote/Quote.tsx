import { useEffect, useRef, useState } from 'react'
import styles from './Quote.module.css'

export default function Quote() {
  const sectionRef = useRef<HTMLElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [triggered])

  // Count-up animation
  useEffect(() => {
    if (!triggered || !countRef.current) return
    const el = countRef.current
    const target = 30
    const duration = 800
    const t0 = performance.now()

    const run = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      el.textContent = String(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(run)
    }

    requestAnimationFrame(run)
  }, [triggered])

  return (
    <section className={styles.section} id="quoteSection" ref={sectionRef}>
      <div className={styles.deco}>
        <div className={styles.decoLine} style={{ width: '100%' }} />
        <div className={styles.decoLine} style={{ width: '70%' }} />
        <div className={styles.decoLine} style={{ width: '40%' }} />
        <div className={styles.decoLabel}>// Leadership Signal</div>
      </div>

      <div className={styles.content}>
        <blockquote>
          "No one else is moving as fast as you — and we need to fix that."
        </blockquote>
        <div className={styles.attr}>
          In response to: "Is there anything we can do — hire people under you, put different systems in place — to give you more leverage?"
          <strong className={styles.attrName}>— Joshua Galoria, CPO · SmarterDx · Slack, 2025</strong>
        </div>
      </div>

      <div className={styles.stat}>
        <div className={styles.statNum}>
          <span className={styles.statNumValue} ref={countRef}>0</span>
          <span className={styles.statSuffix}>+</span>
        </div>
        <div className={styles.statLabel}>
          Initiatives across<br />product, research &amp; org
        </div>
      </div>
    </section>
  )
}
