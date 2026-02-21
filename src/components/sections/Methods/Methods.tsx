import { useEffect, useRef } from 'react'
import { methods } from '../../../data/methods'
import { staggerIn } from '../../../utils/animations'
import styles from './Methods.module.css'

export default function Methods() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          staggerIn(el)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="methods">
      <div className={styles.eyebrow}>
        <span className={styles.eyNum}>[ 02 ]</span>
        <span className={styles.eyLbl}>Methods &amp; Tools</span>
        <div className={styles.eyLine} />
      </div>

      <div className={styles.grid} ref={gridRef}>
        {methods.map((method) => (
          <div key={method.id} className={styles.card}>
            <div className={styles.cardIdx}>{method.index}</div>
            <span className={styles.cardGlyph}>{method.glyph}</span>
            <div className={styles.cardTitle}>{method.title}</div>
            <div className={styles.cardDesc}>{method.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
