// src/components/fui/assembled/StudyCard.tsx
import { LargeReadout } from './LargeReadout'
import { PanelTag } from './PanelTag'
import { DiamondMark } from '../primitives/DiamondMark'
import styles from './StudyCard.module.css'

interface Props {
  designId: string
  name: string
  architecture: string
  accuracy: number
  insight: string
  variant?: 'winner' | 'dangerous' | 'control' | 'default'
}

const VARIANT_LABELS: Record<string, string> = {
  winner:    'WINNER',
  dangerous: 'HIGH_RISK',
  control:   'CONTROL',
  default:   'TESTED',
}

export function StudyCard({
  designId,
  name,
  architecture,
  accuracy,
  insight,
  variant = 'default',
}: Props) {
  const labelText = VARIANT_LABELS[variant]
  const labelWidth = Math.max(56, labelText.length * 6 + 16)

  const tagFill =
    variant === 'winner'    ? 'rgba(0,212,255,0.15)' :
    variant === 'dangerous' ? 'rgba(255,80,80,0.12)'  :
    variant === 'control'   ? 'rgba(200,230,255,0.06)' :
    'rgba(200,230,255,0.04)'

  const tagText =
    variant === 'winner'    ? 'rgba(0,212,255,0.9)' :
    variant === 'dangerous' ? 'rgba(255,120,120,0.9)' :
    variant === 'control'   ? 'rgba(200,230,255,0.45)' :
    'rgba(200,230,255,0.35)'

  const readoutStroke =
    variant === 'winner'    ? 'rgba(0,212,255,0.5)' :
    variant === 'dangerous' ? 'rgba(255,120,120,0.4)' :
    'rgba(0,212,255,0.2)'

  const readoutFill =
    variant === 'winner'    ? 'rgba(0,212,255,0.92)' :
    variant === 'dangerous' ? 'rgba(255,120,120,0.85)' :
    'rgba(200,230,255,0.5)'

  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {/* Top row: design ID + variant badge */}
      <div className={styles.topRow}>
        <span className={styles.designId}>{designId}</span>
        <PanelTag
          label={labelText}
          width={labelWidth}
          height={16}
          fill={tagFill}
          textColor={tagText}
        />
      </div>

      {/* Design name */}
      <div className={styles.name}>{name}</div>

      {/* Architecture description */}
      <p className={styles.architecture}>{architecture}</p>

      {/* Accuracy readout */}
      <div className={styles.accuracyRow}>
        <LargeReadout
          value={`${accuracy}%`}
          width={72}
          height={40}
          stroke={readoutStroke}
          valueFill={readoutFill}
        />
        <span className={styles.accuracyLabel}>ACCURACY</span>
      </div>

      {/* Insight */}
      <div className={styles.insightBlock}>
        <DiamondMark size={3} stroke="rgba(0,212,255,0.5)" />
        <p className={styles.insightText}>{insight}</p>
      </div>
    </div>
  )
}
