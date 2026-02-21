import styles from './GlassPanel.module.css'

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  id?: string
  spine?: boolean
}

export default function GlassPanel({ children, className = '', id, spine = false }: GlassPanelProps) {
  return (
    <div className={`${styles.panel} ${className}`} id={id}>
      <div className={styles.shimmer} />
      {spine && <div className={styles.spine} />}
      {children}
    </div>
  )
}
