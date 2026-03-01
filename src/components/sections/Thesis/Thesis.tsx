import styles from './Thesis.module.css'

export default function Thesis() {
  return (
    <section className={styles.section} id="thesis">
      <div className={styles.rule} />
      <div className={styles.content}>
        <blockquote className={styles.quote}>
          "AI adoption is a trust problem.
          <br />
          <em>Trust is earned through design.</em>"
        </blockquote>
        <p className={styles.sub}>
          Three case studies. Three layers of the same problem.
          Information architecture, reasoning structure, and strategic
          framework — working together.
        </p>
      </div>
      <div className={styles.rule} />
    </section>
  )
}
