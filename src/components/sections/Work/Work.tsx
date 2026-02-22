import React from 'react'
import { caseStudies } from '../../../data/caseStudies'
import { CaseCard } from '../../fui/modules/CaseCard'
import {
  InlineSep,
  NumberedItem,
  StatusIndicator,
} from '../../fui'
import styles from './Work.module.css'

export default function Work() {
  return (
    <section className={styles.section} id="work">

      {/* Section eyebrow — FUI-styled */}
      <div className={styles.eyebrow}>
        <NumberedItem index={1} label="CASE_STUDIES" width={160} stroke="rgba(0,212,255,0.3)" />
        <div className={styles.eyLine} />
        <StatusIndicator status="active" label="3 RECORDS" />
      </div>

      <h2 className={styles.heading}>
        Three bodies of work.<br /><em>One trust problem.</em>
      </h2>
      <p className={styles.subtext}>
        Each case study operates at a different layer — the information architecture of evidence,
        the reasoning structure underneath it, and the strategic framework for earning agreement at scale.
      </p>

      <div className={styles.sectionSep}>
        <InlineSep
          width={400}
          gap={14}
          centerMark="diamond"
          stroke="rgba(0,212,255,0.12)"
        />
      </div>

      {/* Cards grid */}
      <div className={styles.grid}>
        {caseStudies.map((cs, i) => (
          <CaseCard
            key={cs.id}
            cs={cs}
            revealDelay={i * 120}
          />
        ))}
      </div>

    </section>
  )
}
