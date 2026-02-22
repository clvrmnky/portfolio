import React from 'react'
import { LargeReadout } from './LargeReadout'
import styles from './MetricReadout.module.css'

interface Props {
  value: string
  label: string
  className?: string
}

export function MetricReadout({ value, label, className }: Props) {
  return (
    <div className={`${styles.metric} ${className ?? ''}`}>
      <LargeReadout
        value={value}
        width={80}
        height={52}
        stroke="rgba(0,212,255,0.28)"
        valueFill="rgba(0,212,255,0.85)"
      />
      <span className={styles.label}>{label}</span>
    </div>
  )
}
