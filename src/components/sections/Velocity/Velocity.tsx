import styles from './Velocity.module.css'

const layers = [
  {
    number: '01',
    label: 'Designing for AI',
    desc: 'Outputs that make AI legible to humans. Evidence UX, narrative IA, structured rationale display.',
  },
  {
    number: '02',
    label: 'Designing with AI',
    desc: 'AI as structural collaborator — not autocomplete. TextFrames, context injection, code-based prototyping.',
  },
  {
    number: '03',
    label: 'Designing the AI',
    desc: 'Engineering the output structure. Prompt architecture, evals, rationale schema, counterfactual chains.',
  },
]

const tools = [
  { name: 'context-knowledgebase', desc: 'Persistent memory system for Claude Code. Three-tier architecture: Constraints / Decisions / Context.' },
  { name: 'GraphRAG Pipeline', desc: '305 documents, 13,106 chunks, 54,447 entities. Custom extraction pipeline with 16 node types.' },
  { name: 'AI Design System Pipeline', desc: 'Agent generates token/variable system as JSON → Tokens Studio → Figma. Design systems in hours.' },
  { name: 'Precision Genomics Dashboard', desc: 'Five-tab React prototype defining output schema for a genomics pipeline. The prototype is the spec.' },
]

export default function Velocity() {
  return (
    <section className={styles.section} id="velocity">
      <div className={styles.eyebrow}>
        <span className={styles.eyNum}>[ 03 ]</span>
        <span className={styles.eyLbl}>Velocity</span>
        <div className={styles.eyLine} />
      </div>

      <div className={styles.layout}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Three layers of AI design work.
          </h2>
          <p className={styles.subtext}>
            Most designers operate at layer one. Operating at all three simultaneously is the practice.
          </p>
          <div className={styles.layers}>
            {layers.map((l) => (
              <div key={l.number} className={styles.layer}>
                <span className={styles.layerNum}>{l.number}</span>
                <div className={styles.layerContent}>
                  <span className={styles.layerLabel}>{l.label}</span>
                  <p className={styles.layerDesc}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.proofBlock}>
            <div className={styles.proofHeader}>
              <div className={styles.proofLed} />
              <span className={styles.proofLabel}>VELOCITY·PROOF·POINT</span>
            </div>
            <div className={styles.proofStat}>21 days</div>
            <p className={styles.proofDesc}>
              TextFrame methodology: concept to validated direction, presented to CPO and
              full product org. Traditional equivalent: 3–4 months.
            </p>
          </div>

          <div className={styles.toolsBlock}>
            <div className={styles.toolsHeader}>
              <div className={styles.proofLed} />
              <span className={styles.proofLabel}>TOOLS·SHIPPED</span>
            </div>
            <div className={styles.tools}>
              {tools.map((t) => (
                <div key={t.name} className={styles.tool}>
                  <span className={styles.toolName}>{t.name}</span>
                  <p className={styles.toolDesc}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
