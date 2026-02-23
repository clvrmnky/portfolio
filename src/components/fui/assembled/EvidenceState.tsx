// src/components/fui/assembled/EvidenceState.tsx
import { StatusIndicator } from './StatusIndicator'
import { PanelTag } from './PanelTag'
import styles from './EvidenceState.module.css'

type EvidenceStateType = 'supported' | 'not-found' | 'conflicting'

interface Props {
  state: EvidenceStateType
  description: string
}

const STATE_CONFIG: Record<EvidenceStateType, {
  label: string
  statusLabel: string
  status: 'active' | 'standby' | 'offline'
  tagFill: string
  tagText: string
  cssClass: string
}> = {
  supported: {
    label: 'SUPPORTED',
    statusLabel: 'PRESENT',
    status: 'active',
    tagFill: 'rgba(0,212,255,0.12)',
    tagText: 'rgba(0,212,255,0.9)',
    cssClass: styles.supported,
  },
  'not-found': {
    label: 'NOT FOUND',
    statusLabel: 'ABSENT',
    status: 'standby',
    tagFill: 'rgba(255,175,0,0.1)',
    tagText: 'rgba(255,175,0,0.8)',
    cssClass: styles.notFound,
  },
  conflicting: {
    label: 'CONFLICTING',
    statusLabel: 'CONFLICT',
    status: 'offline',
    tagFill: 'rgba(255,80,80,0.1)',
    tagText: 'rgba(255,120,120,0.85)',
    cssClass: styles.conflicting,
  },
}

export function EvidenceState({ state, description }: Props) {
  const cfg = STATE_CONFIG[state]

  return (
    <div className={`${styles.block} ${cfg.cssClass}`}>
      <div className={styles.header}>
        <PanelTag
          label={cfg.label}
          width={Math.max(72, cfg.label.length * 6 + 20)}
          height={18}
          fill={cfg.tagFill}
          textColor={cfg.tagText}
        />
        <StatusIndicator status={cfg.status} label={cfg.statusLabel} />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
