import React, { useRef, useState, useEffect } from 'react'
import { RecordHeader } from '../assembled/RecordHeader'
import { MetricReadout } from '../assembled/MetricReadout'
import { TargetAssembly } from '../assembled/TargetAssembly'
import { PanelTag } from '../assembled/PanelTag'
import { MeasurementLine } from '../primitives/MeasurementLine'
import { ThrustVector } from '../primitives/ThrustVector'
import type { CaseStudy } from '../../../data/caseStudies'
import styles from './CaseCard.module.css'

interface Props {
  cs: CaseStudy
  revealDelay?: number
}

export function CaseCard({ cs, revealDelay = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ w: 360, h: 320 })

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const measure = () => {
      const { width, height } = el.getBoundingClientRect()
      if (width > 0 && height > 0) setDims({ w: width, h: height })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${cs.featured ? styles.featured : ''}`}
      style={{ '--reveal-delay': `${revealDelay}ms` } as React.CSSProperties}
    >
      {/* Hover corner overlay — TargetAssembly sized to card */}
      <TargetAssembly
        width={dims.w}
        height={dims.h}
        cornerSize={14}
        stroke="rgba(0,212,255,0.55)"
        className={styles.cardTarget}
      />

      {/* Record header */}
      <RecordHeader
        index={cs.number}
        category={cs.category}
        status={cs.status}
        className={styles.header}
      />

      <div className={styles.headerDivider} />

      {/* Text content */}
      <div className={styles.content}>
        <div className={styles.title}>{cs.title}</div>
        <div className={styles.desc}>{cs.description}</div>
      </div>

      {/* Tags using PanelTag */}
      <div className={styles.tags}>
        {cs.tags.map((tag) => (
          <PanelTag
            key={tag}
            label={tag}
            width={Math.max(72, tag.length * 7 + 20)}
            height={18}
            fill={
              cs.highlightedTags.includes(tag)
                ? 'rgba(0,212,255,0.12)'
                : 'rgba(200,230,255,0.04)'
            }
            textColor={
              cs.highlightedTags.includes(tag)
                ? 'rgba(0,212,255,0.85)'
                : 'rgba(200,230,255,0.3)'
            }
          />
        ))}
      </div>

      {/* Achievement metric */}
      <MetricReadout
        value={cs.metric.displayValue}
        label={cs.metric.label}
        className={styles.metric}
      />

      {/* Footer chrome */}
      <div className={styles.footer}>
        <ThrustVector length={18} direction="right" />
        <div className={styles.footerRule}>
          <MeasurementLine width={60} capHeight={5} />
        </div>
        <a href={cs.ctaHref} className={styles.cta}>
          {cs.ctaLabel}
        </a>
      </div>
    </div>
  )
}
