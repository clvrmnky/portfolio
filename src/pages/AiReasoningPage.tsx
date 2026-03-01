import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChapterNav } from '../components/fui/modules/ChapterNav'
import type { Chapter } from '../components/fui/modules/ChapterNav'
import { DiamondMark } from '../components/fui'
import { InlineSep } from '../components/fui'
import { PanelTag } from '../components/fui/assembled/PanelTag'
import { DataBracket } from '../components/fui/primitives/DataBracket'
import styles from './AiReasoningPage.module.css'

const CHAPTERS: Chapter[] = [
  { id: 'question',   number: '01', label: 'THE QUESTION' },
  { id: 'framework',  number: '02', label: 'FRAMEWORK' },
  { id: 'schema',     number: '03', label: 'SCHEMA' },
  { id: 'artifact',   number: '04', label: 'ARTIFACT' },
  { id: 'temporal',   number: '05', label: 'HARD PROBLEM' },
  { id: 'connection', number: '06', label: 'CONNECTION' },
]

const STRATEGIES = [
  {
    title: 'Cognitive Scaffolding',
    body: 'Structured frameworks that reduce the cognitive load of evaluating AI rationale — so reviewers can verify, not just accept.',
  },
  {
    title: 'Contextualizing Absences',
    body: 'Make missing evidence visible and meaningful. What the AI didn\'t find is as clinically important as what it did.',
  },
  {
    title: 'Counterfactual Reasoning',
    body: 'Surface evidence that argues against the diagnosis — so reviewers can evaluate competing hypotheses.',
  },
  {
    title: 'Confidence Calibration',
    body: 'Signal appropriate uncertainty — not false confidence. Reviewers who know when evidence is borderline make better decisions.',
  },
]

const SCHEMA_COLS = [
  {
    label: 'Supporting Indicators',
    description: 'Evidence that positively supports the diagnosis — clinical factors met, with specific data and source references',
    function: 'Build confidence through verification',
  },
  {
    label: 'Missing / Conflicting Info',
    description: 'Expected evidence not present in the record, or evidence that contradicts the diagnosis',
    function: 'Prevent over-anchoring — absence as signal',
  },
  {
    label: 'Counterfactual Considerations',
    description: 'Evidence that specifically argues against the diagnosis — competing hypotheses surfaced',
    function: 'Enable calibrated judgment',
  },
]

const ARF_ARTIFACT = `AI-SUGGESTED DIAGNOSIS: ACUTE RESPIRATORY FAILURE (ARF)

Key Indicators Supporting Diagnosis:
— Patient meets clinical ARF criteria (Low PaO₂ + High FiO₂)
— Significant increase in oxygen requirement documented
— ARF confirmed by respiratory acidosis on ABG

Key Validation Questions for Clinician Review:
— Was SpO₂ 85% an outlier reading or sustained over time?
— How long was escalated oxygen therapy required?
— Was pneumonia the primary driver of respiratory failure?

Counterfactual Considerations:
— IF ARF had shown normal PaO₂, AI probability of ARF would decrease by 30%
— IF oxygen demand had stayed at baseline, AI certainty would drop to 50%
— No documentation of alternative respiratory diagnosis found in record`

export default function AiReasoningPage() {
  const [activeChapter, setActiveChapter] = useState('question')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveChapter(entry.target.id)
        })
      },
      { rootMargin: '-10% 0px -80% 0px' }
    )
    const sections = document.querySelectorAll('[data-chapter]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.page}>
      <ChapterNav chapters={CHAPTERS} activeChapter={activeChapter} />
      <main className={styles.content}>

        {/* Back navigation */}
        <div className={styles.backNav}>
          <Link to="/#work" className={styles.backLink}>← Work</Link>
        </div>

        <header className={styles.pageHeader}>
          <div className={styles.eyebrow}>
            <DiamondMark size={5} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.eyebrowLabel}>CASE_FILE / CS_02</span>
          </div>
          <h1 className={styles.title}>Designing the AI Reasoning Layer</h1>
          <InlineSep />
          <p className={styles.subtitle}>
            From cognitive theory to prompt architecture — making AI reasoning
            inspectable, defensible, and aligned to how clinicians actually think.
          </p>
        </header>

        {/* ── Chapter 01: QUESTION ── */}
        <section id="question" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>01</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>QUESTION</h2>
          </div>
          <div className={styles.chapterBody}>

            <blockquote className={styles.quote}>
              <PanelTag label="INCEPTION_FRAMEWORK" width={128} height={16} />
              <p className={styles.quoteText}>
                "In a world where an AI algorithm recommends the right diagnosis — a better
                conclusion than a human could reach — how do we incept that reasoning into a
                human's head so they will agree the outcome is correct?"
              </p>
              <span className={styles.quoteAttribution}>— Justin Ranton, Inception Framework</span>
            </blockquote>

            <p className={styles.bodyText}>
              Even if the evidence UI is excellent, the AI's reasoning itself was still a black
              box. Reviewers couldn't verify how a conclusion was reached — only whether the
              evidence shown matched what they already believed. That's a different kind of trust
              failure. Not a display problem — a reasoning structure problem.
            </p>

          </div>
        </section>

        {/* ── Chapter 02: FRAMEWORK ── */}
        <section id="framework" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>02</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>FRAMEWORK</h2>
          </div>
          <div className={styles.chapterBody}>

            <h3 className={styles.sectionHeading}>
              The Inception Framework — four cognitive strategies
            </h3>

            <p className={styles.bodyText}>
              I developed a cognitive framework grounded in research on algorithm aversion,
              automation bias, and the Theory of Planned Behavior. Core argument: AI adoption
              fails not because the AI is wrong, but because of predictable human cognitive
              barriers — and those barriers respond to specific design interventions.
            </p>

            <div className={styles.strategyGrid}>
              {STRATEGIES.map((s) => (
                <div key={s.title} className={styles.strategyCard}>
                  <div className={styles.strategyTitle}>
                    <DiamondMark size={4} stroke="rgba(0,212,255,0.6)" filled />
                    <span>{s.title}</span>
                  </div>
                  <p className={styles.strategyBody}>{s.body}</p>
                </div>
              ))}
            </div>

            <div className={styles.signalBlock}>
              <DataBracket width={3} height={44} stroke="rgba(0,212,255,0.4)" />
              <div className={styles.signalContent}>
                <span className={styles.signalLabel}>THEORETICAL GROUNDING</span>
                <p className={styles.bodyText} style={{ margin: 0 }}>
                  Grounded in algorithm aversion (Dietvorst et al.), automation bias
                  (Parasuraman), Theory of Planned Behavior (Ajzen).
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Chapter 03: SCHEMA ── */}
        <section id="schema" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>03</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>SCHEMA</h2>
          </div>
          <div className={styles.chapterBody}>

            <h3 className={styles.sectionHeading}>
              Design the schema first. Engineer the prompt second.
            </h3>

            <p className={styles.bodyText}>
              From the Inception Framework, I designed a three-part structure that every AI
              rationale output should conform to. I designed the schema based on the cognitive
              function each element needed to serve — then engineered prompts in Braintrust
              (SmarterDx's LLM evaluation platform) to produce outputs matching it.
            </p>

            <p className={styles.bodyText}>
              The schema is the design artifact. The prompt is the implementation.
            </p>

            <div className={styles.schemaGrid}>
              {SCHEMA_COLS.map((col) => (
                <div key={col.label} className={styles.schemaCard}>
                  <PanelTag
                    label={col.label.toUpperCase()}
                    width={Math.max(80, col.label.length * 6 + 16)}
                    height={16}
                  />
                  <p className={styles.schemaDesc}>{col.description}</p>
                  <div className={styles.schemaFunction}>
                    <DiamondMark size={3} stroke="rgba(123,255,237,0.5)" />
                    <span className={styles.schemaFunctionText}>{col.function}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Chapter 04: ARTIFACT ── */}
        <section id="artifact" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>04</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>ARTIFACT</h2>
          </div>
          <div className={styles.chapterBody}>

            <h3 className={styles.sectionHeading}>
              Actual ARF rationale output — not described, shown
            </h3>

            <div className={styles.terminalWrapper}>
              <div className={styles.terminalHeader}>
                <PanelTag label="ARF_RATIONALE_OUTPUT" width={136} height={16} />
                <span className={styles.terminalMeta}>PROMPT_SYSTEM / APRIL 2025</span>
              </div>
              <pre className={styles.terminalBlock}>{ARF_ARTIFACT}</pre>
            </div>

          </div>
        </section>

        {/* ── Chapter 05: HARD PROBLEM ── */}
        <section id="temporal" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>05</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>HARD PROBLEM</h2>
          </div>
          <div className={styles.chapterBody}>

            <h3 className={styles.sectionHeading}>
              Temporal grounding — the counterfactual classification chain
            </h3>

            <p className={styles.bodyText}>
              The hardest prompt engineering challenge was the counterfactual classification
              chain: a two-step architecture where Step 1 extracts potentially disfavoring
              evidence and Step 2 classifies its strength (Confirmed / Possible / None).
            </p>

            <div className={styles.signalBlock}>
              <DataBracket width={3} height={52} stroke="rgba(255,175,0,0.4)" />
              <div className={styles.signalContent}>
                <span className={styles.signalLabel} style={{ color: 'rgba(255,175,0,0.6)' }}>
                  FAILURE MODE
                </span>
                <p className={styles.bodyText} style={{ margin: 0 }}>
                  Surface pattern matching. The model would find a phrase that "sounded
                  contradictory" and classify it as a counterfactual — without understanding
                  whether that contradiction occurred during the relevant diagnostic window.
                </p>
              </div>
            </div>

            <div className={styles.signalBlock}>
              <DataBracket width={3} height={52} stroke="rgba(123,255,237,0.4)" />
              <div className={styles.signalContent}>
                <span className={styles.signalLabel}>THE FIX</span>
                <p className={styles.bodyText} style={{ margin: 0 }}>
                  Temporal grounding before classification. The model must first identify
                  when the clinical event occurred, then evaluate evidence against that
                  specific diagnostic window. Reasoning before classification, not after.
                </p>
              </div>
            </div>

            <blockquote className={styles.quote}>
              <PanelTag label="INTERNAL_EVALUATION" width={128} height={16} />
              <p className={styles.quoteText}>
                "The rationale was indistinguishable from what a skilled clinical reviewer
                would write — structured, temporally grounded, and appropriately uncertain
                where the evidence was borderline."
              </p>
              <span className={styles.quoteAttribution}>
                — Internal evaluation, ARF rationale prompt system, April 2025
              </span>
            </blockquote>

          </div>
        </section>

        {/* ── Chapter 06: CONNECTION ── */}
        <section id="connection" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>06</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>CONNECTION</h2>
          </div>
          <div className={styles.chapterBody}>

            <h3 className={styles.sectionHeading}>
              The TextFrame study partially validates the Inception hypothesis
            </h3>

            <p className={styles.bodyText}>
              The TextFrame designs in CS1 were partly testing whether the Inception
              Framework's reasoning structure — presented as information architecture —
              would change human decision quality. D3's Clinical Progression architecture
              matched the cognitive scaffolding strategies the Inception Framework predicted.
              D3's 33% accuracy lift is partial empirical evidence that when you structure AI
              reasoning to match how humans actually reason clinically, decision quality
              improves significantly.
            </p>

            <p className={styles.bodyText}>
              The rationale schema is now the structural foundation for the AI outputs in
              Phase 2. The cognitive framework and the UI design converge in the same product
              surface.
            </p>

            {/* Cross-links */}
            <div className={styles.crossLinks}>
              <div className={styles.crossLinksHeader}>
                <PanelTag label="RELATED_CASE_FILES" width={128} height={16} />
              </div>
              <div className={styles.crossLinksRow}>
                <Link to="/work/evidence-ux" className={styles.crossLink}>
                  <DiamondMark size={4} stroke="rgba(0,212,255,0.6)" />
                  <span>CS_01 — Evidence UX & The TextFrame Method</span>
                </Link>
                <Link to="/work/agree-rate" className={styles.crossLink}>
                  <DiamondMark size={4} stroke="rgba(0,212,255,0.6)" />
                  <span>CS_03 — The Agree Rate Framework</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}
