import Button from '../../ui/Button/Button'
import OperatorPanel from '../../ui/OperatorPanel/OperatorPanel'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>

        {/* Top bar */}
        <div className={styles.topbar}>
          <div className={styles.topDiamond} />
          <span className={styles.topLabel}>Product Design Lead · SmarterDx · 2025–2026</span>
          <div className={styles.topRule} />
          <span className={styles.topCoord}>47.6062° N · 122.3321° W</span>
        </div>

        {/* Identity column */}
        <div className={styles.left}>
          <p className={styles.sysId}>Operator Identity</p>

          <div className={styles.heroName}>
            <span className={styles.nameGiven}>Justin</span>
            <span className={styles.nameSurname}>Ranton</span>
          </div>

          <div className={styles.hRule}>
            <div className={styles.hRuleLine} />
            <div className={styles.hRuleDot} />
            <span className={styles.hRuleVal}>DT · AI-First · 2026</span>
          </div>

          <p className={styles.heroRole}>
            Design Technologist
            <span className={styles.roleSep}>·</span>
            AI-First Product Designer
            <span className={styles.roleSep}>·</span>
            UX Engineer
          </p>

          <p className={styles.heroTagline}>
            Design for AI systems.<br />
            <em>Systems for AI design.</em>
          </p>

          <p className={styles.heroBody}>
            I work at the intersection of design craft and AI infrastructure —
            building clinical interfaces, reasoning frameworks, and the tools
            to construct them. Every decision connects to whether a human
            trusts the AI enough to act on it.
          </p>

          <div className={styles.ctas}>
            <Button variant="primary" href="#work">View Work</Button>
            <Button variant="ghost" href="#">About &amp; Context</Button>
          </div>
        </div>

        {/* Operator Profile Panel — LCARS instrument panel */}
        <div className={styles.dataCol}>
          <OperatorPanel />
        </div>

        {/* Bottom system bar */}
        <div className={styles.bottombar}>
          <div className={styles.bsys}>
            <div className={styles.bi}>SYS_ID: <span>JR-2026-DT</span></div>
            <div className={styles.bi}>BUILD: <span>2026-02-21</span></div>
            <div className={styles.bi}>VER: <span>3.0</span></div>
          </div>
          <div className={styles.scrollCue}>Scroll to work</div>
        </div>

      </div>
    </section>
  )
}
