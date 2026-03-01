import styles from './ContextBridge.module.css'

const columns = [
  {
    id: 'COMPANY',
    label: 'COMPANY·CONTEXT',
    heading: 'SmarterDx',
    body: 'Clinical AI that surfaces AI-suggested missed diagnoses to hospital CDI specialists and medical coders. The business model only works if reviewers act on those suggestions.',
  },
  {
    id: 'PROBLEM',
    label: 'PROBLEM·SPACE',
    heading: 'The trust failure',
    body: "Clinical reviewers reject AI suggestions not because they're resistant — because they can't verify the reasoning. The AI is often right. The interface doesn't show why. That's not a behavior problem. That's a design problem.",
  },
  {
    id: 'METRIC',
    label: 'NORTH·STAR',
    heading: 'Agree rate',
    body: 'The percentage of AI-suggested diagnoses that reviewers accept. Industry range: 30–33% across client sites. Every project in this portfolio connects to moving this number.',
    stat: '30–33%',
    statLabel: 'CURRENT RANGE',
  },
]

interface Column {
  id: string
  label: string
  heading: string
  body: string
  stat?: string
  statLabel?: string
}

export default function ContextBridge() {
  return (
    <section className={styles.section} id="context">
      <div className={styles.eyebrow}>
        <span className={styles.eyNum}>[ 00 ]</span>
        <span className={styles.eyLbl}>Context</span>
        <div className={styles.eyLine} />
      </div>

      <div className={styles.grid}>
        {columns.map((col: Column) => (
          <div key={col.id} className={styles.col}>
            <div className={styles.colHeader}>
              <div className={styles.colLed} />
              <span className={styles.colLabel}>{col.label}</span>
            </div>
            <h3 className={styles.colHeading}>{col.heading}</h3>
            <p className={styles.colBody}>{col.body}</p>
            {col.stat && (
              <div className={styles.colStat}>
                <span className={styles.colStatVal}>{col.stat}</span>
                <span className={styles.colStatLbl}>{col.statLabel}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
