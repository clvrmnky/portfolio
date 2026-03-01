import styles from './Leadership.module.css'

const stats = [
  { value: '1→6', label: 'Designers\nscaled' },
  { value: '21 days', label: 'Concept to\nvalidated direction' },
  { value: '4 sites', label: 'Pilot research\nprogram' },
  { value: '<1 year', label: 'Zero to operating\nmodel' },
]

export default function Leadership() {
  return (
    <section className={styles.section} id="leadership">
      <div className={styles.eyebrow}>
        <span className={styles.eyNum}>[ 02 ]</span>
        <span className={styles.eyLbl}>Leadership</span>
        <div className={styles.eyLine} />
      </div>

      <div className={styles.layout}>
        <div className={styles.statsStrip}>
          {stats.map((s) => (
            <div key={s.value} className={styles.stat}>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLbl}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.prose}>
          <p>
            Promoted to Product Design Lead in July 2025 after operating above title since February.
            Built <strong>Design by Default</strong> — a discovery-gate operating model that embeds
            UX structurally into product development, not as a last-minute review. Scaled the team
            from one IC to six designers. Established canonical component architecture, Figma design
            system, and an AI-native prototyping practice adopted across multiple product pods.
          </p>
        </div>
      </div>
    </section>
  )
}
