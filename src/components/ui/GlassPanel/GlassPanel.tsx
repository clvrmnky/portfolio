import { useInitSequence } from '../../../hooks/useInitSequence'
import styles from './GlassPanel.module.css'

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  id?: string
  spine?: boolean
  scanDelay?: string
  initOnScroll?: boolean
}

export default function GlassPanel({
  children,
  className = '',
  id,
  spine = false,
  scanDelay = '0s',
  initOnScroll = false,
}: GlassPanelProps) {
  const initRef = useInitSequence()

  return (
    <div
      className={`${styles.panel} ${className}`}
      id={id}
      ref={initOnScroll ? (initRef as React.RefObject<HTMLDivElement>) : undefined}
    >
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
