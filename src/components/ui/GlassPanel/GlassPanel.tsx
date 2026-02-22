import { useInitSequence } from '../../../hooks/useInitSequence'
import CircuitTraces from './CircuitTraces'
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
      <div className={styles.shimmer} data-chrome />
      <div
        className={styles.scanline}
        data-chrome
        style={{ '--scan-delay': scanDelay } as React.CSSProperties}
      />
      {spine && <div className={styles.spine} data-chrome />}
      {spine && <CircuitTraces groupCount={4} />}
      {children}
    </div>
  )
}
