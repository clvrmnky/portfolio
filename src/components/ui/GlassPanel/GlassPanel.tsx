import styles from './GlassPanel.module.css'

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  id?: string
  spine?: boolean
  scanDelay?: string   // e.g. '0s', '3s', '6s'
}

export default function GlassPanel({ children, className = '', id, spine = false, scanDelay = '0s' }: GlassPanelProps) {
  return (
    <div className={`${styles.panel} ${className}`} id={id}>
      <div className={styles.shimmer} />
      <div
        className={styles.scanline}
        style={{ '--scan-delay': scanDelay } as React.CSSProperties}
      />
      {spine && <div className={styles.spine} />}
      {children}
    </div>
  )
}
