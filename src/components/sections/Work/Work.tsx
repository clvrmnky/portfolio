import { useEffect, useRef } from 'react'
import Tag from '../../ui/Tag/Tag'
import { caseStudies } from '../../../data/caseStudies'
import { staggerIn } from '../../../utils/animations'
import styles from './Work.module.css'

export default function Work() {
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
    <section className={styles.section} id="work">
      <div className={styles.eyebrow}>
        <span className={styles.eyNum}>[ 01 ]</span>
        <span className={styles.eyLbl}>Case Studies</span>
        <div className={styles.eyLine} />
      </div>

      <h2 className={styles.heading}>
        Three bodies of work.<br /><em>One trust problem.</em>
      </h2>
      <p className={styles.subtext}>
        Each case study operates at a different layer — the information architecture of evidence,
        the reasoning structure underneath it, and the strategic framework for earning agreement at scale.
      </p>

      <div className={styles.grid} ref={gridRef}>
        {caseStudies.map((cs, index) => (
          <div
            key={cs.id}
            className={`${styles.card} ${cs.featured ? styles.featured : ''}`}
          >
            <div className={styles.cardScanline} style={{ '--card-scan-delay': `${index * 1.5}s` } as React.CSSProperties} />
            <div className={styles.cardMeta}>
              <span className={styles.cardNum}>{cs.number}</span>
              <div className={styles.cardRule} />
              <span className={styles.cardCat}>{cs.category}</span>
            </div>

            <div className={styles.tags}>
              {cs.tags.map((tag) => (
                <Tag
                  key={tag}
                  label={tag}
                  color={cs.highlightedTags.includes(tag) ? 'purple' : 'default'}
                />
              ))}
            </div>

            <div className={styles.cardTitle}>{cs.title}</div>
            <div className={styles.cardDesc}>{cs.description}</div>
            <a href={cs.ctaHref} className={styles.cta}>{cs.ctaLabel}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
