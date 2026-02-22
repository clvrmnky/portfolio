import React from 'react'
import { PanelTag } from './PanelTag'
import { StatusIndicator } from './StatusIndicator'
import { DiamondMark } from '../primitives/DiamondMark'
import { NumberedItem } from './NumberedItem'
import styles from './RecordHeader.module.css'

interface Props {
  index: string
  category: string
  status: 'active' | 'standby' | 'offline'
  className?: string
}

const STATUS_LABELS: Record<string, string> = {
  active: 'ACTIVE',
  standby: 'STANDBY',
  offline: 'OFFLINE',
}

export function RecordHeader({ index, category, status, className }: Props) {
  return (
    <div className={`${styles.header} ${className ?? ''}`}>
      <div className={styles.left}>
        <PanelTag label="CASE_FILE" width={76} height={18} />
        <StatusIndicator status={status} label={STATUS_LABELS[status]} />
        <DiamondMark size={5} stroke="rgba(0,212,255,0.4)" />
        <span className={styles.category}>{category.toUpperCase()}</span>
      </div>
      <div className={styles.right}>
        <NumberedItem index={parseInt(index, 10)} />
      </div>
    </div>
  )
}
