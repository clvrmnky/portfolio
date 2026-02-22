import FuiButton from '../../../ui/FuiButton/FuiButton'
import styles from './IdentityZone.module.css'

export default function IdentityZone() {
  return (
    <div className={styles.zone}>
      {/* LAYER 1: Outer L-bracket indicators */}
      <div className={styles.bracketTL} aria-hidden="true" />
      <div className={styles.bracketBL} aria-hidden="true" />

      {/* Ambient zone label */}
      <p className={styles.ambientLabel} aria-hidden="true">// Operator Identity</p>

      {/* ── Name Module ── */}
      <div className={styles.nameModule}>
        {/* Text layer — sits below the frame in z-order */}
        <div className={styles.nameContent}>
          <span className={styles.nameGiven}>Justin</span>
          <span className={styles.nameSurname}>Ranton</span>
        </div>
        {/* Frame overlay — floats in front of the name, pointer-events: none */}
        <div className={styles.nameFrame} aria-hidden="true">
          <div className={styles.nameFrameCornerTL} />
          <div className={styles.nameFrameCornerTR} />
          <div className={styles.nameFrameCornerBL} />
          <div className={styles.nameFrameCornerBR} />
          <div className={styles.nameFrameStatus}>
            <div className={styles.nameLed} />
            <span className={styles.nameStatusText}>OPERATOR·ID</span>
          </div>
        </div>
      </div>

      {/* ── Content zones ── */}
      <div className={styles.zones}>

        {/* Zone 1: Role */}
        <div className={styles.zoneModule}>
          <div className={styles.zoneHeader}>
            <div className={styles.zoneLed} />
            <span className={styles.zoneId}>ROLE·ACTIVE</span>
          </div>
          <div className={styles.zoneBody}>
            <p className={styles.heroRole}>
              Design Technologist
              <span className={styles.roleSep}>|</span>
              AI-First Product Designer
              <span className={styles.roleSep}>|</span>
              UX Engineer
            </p>
          </div>
          {/* Traveling trace — top border, left→right */}
          <div className={styles.traceH} aria-hidden="true" />
        </div>

        {/* Zone 2: Signal */}
        <div className={styles.zoneModule}>
          <div className={styles.zoneHeader}>
            <div className={styles.zoneLed} />
            <span className={styles.zoneId}>SIGNAL·OPEN</span>
          </div>
          <div className={styles.zoneBody}>
            <p className={styles.heroTagline}>
              Design for AI systems.<br />
              <em>Systems for AI design.</em>
            </p>
            <div className={styles.signalDivider} />
            <p className={styles.heroBody}>
              I work at the intersection of design craft and AI infrastructure —
              building clinical interfaces, reasoning frameworks, and the tools
              to construct them. Every decision connects to whether a human
              trusts the AI enough to act on it.
            </p>
          </div>
          {/* Traveling trace — left border, top→bottom */}
          <div className={styles.traceV} aria-hidden="true" />
        </div>

        {/* Zone 3: Action */}
        <div className={styles.zoneModule}>
          <div className={styles.zoneHeader}>
            <div className={styles.zoneLed} />
            <span className={styles.zoneId}>ACT·READY</span>
          </div>
          <div className={styles.zoneBody}>
            <div className={styles.ctas}>
              <FuiButton variant="primary" href="#work">View Work</FuiButton>
              <FuiButton variant="ghost" href="#">About &amp; Context</FuiButton>
            </div>
          </div>
          {/* Traveling trace — bottom border, right→left */}
          <div className={styles.traceHL} aria-hidden="true" />
        </div>

      </div>
    </div>
  )
}
