import { useEffect, useState } from 'react'
import styles from './CapabilityBar.module.css'

type BarColor = 'orange' | 'blue' | 'purple'

interface CapabilityBarProps {
  name: string
  fill: number      // 0–8
  color: BarColor
  animate: boolean
  animDelay?: number
}

export default function CapabilityBar({ name, fill, color, animate, animDelay = 0 }: CapabilityBarProps) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!animate) return
    const t = setTimeout(() => setActive(true), animDelay * 1000)
    return () => clearTimeout(t)
  }, [animate, animDelay])

  const pct = Math.round((fill / 8) * 100)

  return (
    <div className={styles.row}>
      <span className={styles.label}>{name}</span>
      <div className={styles.track}>
        <div
          className={`${styles.fill} ${styles[color]}`}
          style={{ '--fill-pct': active ? `${pct}%` : '0%' } as React.CSSProperties}
        />
        <div className={styles.ticks} aria-hidden>
          {Array.from({ length: 8 }).map((_, i) => <div key={i} className={styles.tick} />)}
        </div>
      </div>
      <span className={styles.pct}>{pct}</span>
    </div>
  )
}
