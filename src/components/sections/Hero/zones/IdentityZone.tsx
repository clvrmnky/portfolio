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
              Built design from 0–1<br />
              <em>at a clinical AI startup.</em>
            </p>
            <div className={styles.signalDivider} />
            <p className={styles.heroBody}>
              Product Design Lead at SmarterDx. AI-native methods, clinical
              interfaces, and reasoning frameworks — all connected to one
              north star: whether a human trusts the AI enough to act on it.
              <br /><br />
              33% accuracy lift. Team scaled 1→6. Projected 6–13% agree rate improvement.
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
