import DataStream from './DataStream'
import styles from './Background.module.css'

export default function Background() {
  return (
    <>
      <div className={styles.bgGrid} />
      <div className={styles.bgAmbient} />
      <div className={styles.bgNoise} />
      <DataStream />

      <div className={styles.particles}>
        <div className={`${styles.p} ${styles.p1}`} />
        <div className={`${styles.p} ${styles.p2}`} />
        <div className={`${styles.p} ${styles.p3}`} />
        <div className={`${styles.p} ${styles.p4}`} />
        <div className={`${styles.p} ${styles.p5}`} />
      </div>

      {/* Targeting reticle — SVG from hero-mockup.html verbatim */}
      <svg
        className={styles.bgTarget}
        viewBox="0 0 640 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="320" cy="320" r="280" stroke="rgba(95,215,255,0.045)" strokeWidth="0.5"/>
        <circle cx="320" cy="320" r="190" stroke="rgba(95,215,255,0.035)" strokeWidth="0.5"/>
        <circle cx="320" cy="320" r="72"  stroke="rgba(95,215,255,0.06)"  strokeWidth="0.5"/>
        <circle cx="320" cy="320" r="10"  stroke="rgba(255,175,0,0.1)"    strokeWidth="0.5"/>
        <line x1="0"   y1="320" x2="248" y2="320" stroke="rgba(95,215,255,0.06)" strokeWidth="0.5"/>
        <line x1="392" y1="320" x2="640" y2="320" stroke="rgba(95,215,255,0.06)" strokeWidth="0.5"/>
        <line x1="320" y1="0"   x2="320" y2="248" stroke="rgba(95,215,255,0.06)" strokeWidth="0.5"/>
        <line x1="320" y1="392" x2="320" y2="640" stroke="rgba(95,215,255,0.06)" strokeWidth="0.5"/>
        <line x1="90"  y1="316" x2="90"  y2="324" stroke="rgba(95,215,255,0.1)" strokeWidth="0.5"/>
        <line x1="160" y1="317" x2="160" y2="323" stroke="rgba(95,215,255,0.07)" strokeWidth="0.5"/>
        <line x1="550" y1="316" x2="550" y2="324" stroke="rgba(95,215,255,0.1)" strokeWidth="0.5"/>
        <line x1="316" y1="90"  x2="324" y2="90"  stroke="rgba(95,215,255,0.1)" strokeWidth="0.5"/>
        <line x1="316" y1="550" x2="324" y2="550" stroke="rgba(95,215,255,0.1)" strokeWidth="0.5"/>
        <path d="M 50 50 L 50 70 M 50 50 L 70 50"   stroke="rgba(255,175,0,0.09)" strokeWidth="0.8"/>
        <path d="M 590 50 L 570 50 M 590 50 L 590 70" stroke="rgba(255,175,0,0.09)" strokeWidth="0.8"/>
        <path d="M 50 590 L 50 570 M 50 590 L 70 590" stroke="rgba(255,175,0,0.09)" strokeWidth="0.8"/>
        <path d="M 590 590 L 570 590 M 590 590 L 590 570" stroke="rgba(255,175,0,0.09)" strokeWidth="0.8"/>
        <rect x="16" y="16"   width="30" height="7" fill="rgba(255,175,0,0.035)"/>
        <rect x="594" y="16"  width="30" height="7" fill="rgba(255,175,0,0.035)"/>
        <rect x="16" y="617"  width="30" height="7" fill="rgba(255,175,0,0.035)"/>
        <rect x="594" y="617" width="30" height="7" fill="rgba(255,175,0,0.035)"/>
        <line x1="226" y1="226" x2="248" y2="248" stroke="rgba(255,175,0,0.05)" strokeWidth="0.5"/>
        <line x1="414" y1="226" x2="392" y2="248" stroke="rgba(255,175,0,0.05)" strokeWidth="0.5"/>
        <line x1="226" y1="414" x2="248" y2="392" stroke="rgba(255,175,0,0.05)" strokeWidth="0.5"/>
        <line x1="414" y1="414" x2="392" y2="392" stroke="rgba(255,175,0,0.05)" strokeWidth="0.5"/>
      </svg>

      <div className={styles.scanline} />
    </>
  )
}
