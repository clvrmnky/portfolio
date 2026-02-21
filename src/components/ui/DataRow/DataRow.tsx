import styles from './DataRow.module.css'

type ValueVariant = 'blue' | 'orange' | 'text' | 'purple' | 'dim'

interface DataRowProps {
  label: string
  value: string
  variant?: ValueVariant
}

const VARIANT_CLASS: Record<ValueVariant, string> = {
  blue:   '',
  orange: styles.orange,
  text:   styles.text,
  purple: styles.purple,
  dim:    styles.dim,
}

export default function DataRow({ label, value, variant = 'blue' }: DataRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.key}>{label}</span>
      <span className={`${styles.value} ${VARIANT_CLASS[variant]}`}>{value}</span>
    </div>
  )
}
