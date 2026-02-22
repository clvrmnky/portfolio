import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import FuiButton from '../../../ui/FuiButton/FuiButton'
import styles from './IdentityZone.module.css'

export default function IdentityZone() {
  const contentRef = useRef<HTMLDivElement>(null)

  // BOOT: stagger content in after structural chrome appears
  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const items = el.querySelectorAll('[data-boot]')
    gsap.set(items, { opacity: 0, y: 10 })

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power3.out',
      stagger: 0.07,
      delay: 0.72,  // after structural chrome BOOT (0.5s panel + 0.2s zone outline)
    })
  }, [])

  return (
    <div className={styles.zone}>
      {/* LAYER 1: L-brackets — TL and BL only (TR and BR have the clip geometry) */}
      <div className={styles.bracketTL} aria-hidden="true" />
      <div className={styles.bracketBL} aria-hidden="true" />

      {/* Zone ambient label */}
      <p className={styles.ambientLabel} aria-hidden="true">// Operator Identity</p>

      {/* LAYER 2: Content — staggers in via GSAP */}
      <div ref={contentRef} className={styles.content}>

        <p className={styles.sysId} data-boot>Operator Identity</p>

        <div className={styles.heroName} data-boot>
          <span className={styles.nameGiven}>Justin</span>
          <span className={styles.nameSurname}>Ranton</span>
        </div>

        <div className={styles.hRule} data-boot>
          <div className={styles.hRuleLine} />
          <div className={styles.hRuleDot} />
          <span className={styles.hRuleVal}>DT · AI-First · 2026</span>
        </div>

        <p className={styles.heroRole} data-boot>
          Design Technologist
          <span className={styles.roleSep}>|</span>
          AI-First Product Designer
          <span className={styles.roleSep}>|</span>
          UX Engineer
        </p>

        <p className={styles.heroTagline} data-boot>
          Design for AI systems.<br />
          <em>Systems for AI design.</em>
        </p>

        <p className={styles.heroBody} data-boot>
          I work at the intersection of design craft and AI infrastructure —
          building clinical interfaces, reasoning frameworks, and the tools
          to construct them. Every decision connects to whether a human
          trusts the AI enough to act on it.
        </p>

        <div className={styles.ctas} data-boot>
          <FuiButton variant="primary" href="#work">View Work</FuiButton>
          <FuiButton variant="ghost" href="#">About &amp; Context</FuiButton>
        </div>

      </div>
    </div>
  )
}
