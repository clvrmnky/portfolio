import StatusRail from './zones/StatusRail'
import IdentityZone from './zones/IdentityZone'
import InstrumentPanel from '../../ui/InstrumentPanel/InstrumentPanel'
import SystemRail from './zones/SystemRail'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* LAYER 0: background radial focus — energy source top-right */}
      <div className={styles.bgFocus} aria-hidden="true" />

      <StatusRail />

      <div className={styles.displayField}>
        <div className={styles.identitySlot}>
          <IdentityZone />
        </div>
        <div className={styles.instrumentSlot}>
          <InstrumentPanel />
        </div>
      </div>

      <SystemRail />
    </section>
  )
}
