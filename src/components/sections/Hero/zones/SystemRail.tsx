import styles from './SystemRail.module.css'

export default function SystemRail() {
  return (
    <div className={styles.rail} aria-hidden="true">
      <div className={styles.left}>
        <div className={styles.cornerClip} />
        <span className={styles.field}><span className={styles.key}>SYS_ID</span><span className={styles.val}>JR-2026-DT</span></span>
        <span className={styles.divider} />
        <span className={styles.field}><span className={styles.key}>BUILD</span><span className={styles.val}>2026-02-21</span></span>
        <span className={styles.divider} />
        <span className={styles.field}><span className={styles.key}>VER</span><span className={styles.val}>3.0</span></span>
      </div>
      <div className={styles.scrollCue}>
        <span>Scroll</span>
        <div className={styles.scrollArrow} />
      </div>
    </div>
  )
}
