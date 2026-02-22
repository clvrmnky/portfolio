import styles from './DataRow.module.css'

type ValueVariant = 'blue' | 'orange' | 'text' | 'purple' | 'dim'

interface DataRowProps {
  label: string
  value: string
  variant?: ValueVariant
  index?: number    // used for staggered pulse delay
  pulse?: boolean   // enable pulse animation
}

const VARIANT_CLASS: Record<ValueVariant, string> = {
  blue:   '',
  orange: styles.orange,
  text:   styles.text,
  purple: styles.purple,
  dim:    styles.dim,
}

export default function DataRow({ label, value, variant = 'blue', index = 0, pulse = false }: DataRowProps) {
  const pulseClass = pulse
    ? (variant === 'blue' ? styles.pulseGlow : styles.pulse)
    : ''

  return (
    <div className={styles.row} style={{ '--pulse-delay': `${index * 0.4}s` } as React.CSSProperties}>
      <span className={styles.key}>{label}</span>
      <span className={`${styles.value} ${VARIANT_CLASS[variant]} ${pulseClass}`}>{value}</span>
    </div>
  )
}
