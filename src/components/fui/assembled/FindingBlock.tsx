// src/components/fui/assembled/FindingBlock.tsx
import { NumberedItem } from './NumberedItem'
import styles from './FindingBlock.module.css'

interface Props {
  number: number
  title: string
  detail: string
}

export function FindingBlock({ number, title, detail }: Props) {
  return (
    <div className={styles.block}>
      <div className={styles.numCol}>
        <NumberedItem index={number} />
        <div className={styles.spine} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <p className={styles.detail}>{detail}</p>
      </div>
    </div>
  )
}
