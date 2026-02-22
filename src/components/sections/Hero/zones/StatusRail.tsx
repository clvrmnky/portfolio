import styles from './StatusRail.module.css'

export default function StatusRail() {
  return (
    <div className={styles.rail} aria-hidden="true">
      <div className={styles.left}>
        <div className={styles.led} />
        <span className={styles.status}>SYS_ACTIVE</span>
        <span className={styles.sep}>·</span>
        <span className={styles.label}>Product Design Lead · SmarterDx · 2025–2026</span>
      </div>
      <div className={styles.scanLine} />
      <div className={styles.right}>
        <span className={styles.coord}>47.6062° N · 122.3321° W</span>
        <div className={styles.cornerClip} />
      </div>
    </div>
  )
}
