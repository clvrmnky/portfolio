import { useState, useEffect } from 'react'
import { ChapterNav } from '../components/fui/modules/ChapterNav'
import type { Chapter } from '../components/fui/modules/ChapterNav'
import { DiamondMark } from '../components/fui'
import { InlineSep } from '../components/fui'
import { MetricReadout } from '../components/fui/assembled/MetricReadout'
import { PanelTag } from '../components/fui/assembled/PanelTag'
import { StudyCard } from '../components/fui/assembled/StudyCard'
import { DataBracket } from '../components/fui/primitives/DataBracket'
import { MeasurementLine } from '../components/fui/primitives/MeasurementLine'
import { FindingBlock } from '../components/fui/assembled/FindingBlock'
import { EvidenceState } from '../components/fui/assembled/EvidenceState'
import styles from './TextFrameCasePage.module.css'

const CHAPTERS: Chapter[] = [
  { id: 'situation', number: '01', label: 'SITUATION' },
  { id: 'method',    number: '02', label: 'METHOD' },
  { id: 'study',     number: '03', label: 'STUDY' },
  { id: 'results',   number: '04', label: 'RESULTS' },
  { id: 'pilot',     number: '05', label: 'PILOT' },
  { id: 'phase2',    number: '06', label: 'PHASE 2' },
]

export default function TextFrameCasePage() {
  const [activeChapter, setActiveChapter] = useState('situation')

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
        <header className={styles.pageHeader}>
          <div className={styles.eyebrow}>
            <DiamondMark size={5} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.eyebrowLabel}>CASE_FILE / CS_01</span>
          </div>
          <h1 className={styles.title}>Evidence UX &<br />The TextFrame Method</h1>
          <InlineSep />
          <p className={styles.subtitle}>
            A new design methodology, a comparative study across four competing architectures,
            and a two-phase implementation arc.
          </p>
        </header>

        <section id="situation" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>01</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>SITUATION</h2>
          </div>
          <div className={styles.chapterBody}>

            {/* Problem statement */}
            <p className={styles.bodyText}>
              Before Justin joined, CPO Joshua Galoria wrote a strategic memo naming the problem:
              clinical data had titles and facts, but no structure connecting them to a thesis.
              Reviewers had no reliable path from data to diagnosis.
            </p>

            {/* CPO quote */}
            <blockquote className={styles.quote}>
              <PanelTag label="CPO_MEMO" width={72} height={16} />
              <p className={styles.quoteText}>
                "The facts need to tie back to a thesis statement. We need structure.
                We need better arguments that are logically connected and tell a consistent story."
              </p>
            </blockquote>

            {/* Key metrics row */}
            <div className={styles.metricsRow}>
              <div className={styles.metricItem}>
                <MetricReadout value="38%" label="BLINDED MISS RATE" />
                <p className={styles.metricNote}>Same reviewer. Same case. Different answer.</p>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <MetricReadout value="0s" label="TIME TO AH-HA" />
                <p className={styles.metricNote}>Baseline: reviewers reconstructing from memory.</p>
              </div>
            </div>

            {/* Liz Walsh signal */}
            <div className={styles.signalBlock}>
              <DataBracket width={3} height={60} stroke="rgba(0,212,255,0.4)" />
              <div className={styles.signalContent}>
                <span className={styles.signalLabel}>BENCHMARK SIGNAL</span>
                <p className={styles.bodyText} style={{ margin: 0 }}>
                  A reviewer named Liz Walsh, reviewing a bleeding case, said "the hemoglobin was
                  stable" — but there was no hemoglobin data on screen. She had memorized through
                  hundreds of repetitions that its absence meant stability. That's not a design
                  worth building on.
                </p>
              </div>
            </div>

            <p className={styles.bodyText}>
              Justin joined in February 2025, two months after the memo. His contribution was
              building the method, running the research, and proving the hypothesis with data —
              not executing a brief he was handed.
            </p>
          </div>
        </section>

        <section id="method" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>02</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>METHOD</h2>
          </div>
          <div className={styles.chapterBody}>

            <p className={styles.bodyText}>
              The TextFrame was invented in February–March 2025. The insight: you can test
              information architecture without building anything. Plain text, structured like a
              clinical argument, simulates what a better UI does to human cognition.
            </p>

            {/* What a TextFrame is */}
            <div className={styles.definitionBlock}>
              <div className={styles.definitionHeader}>
                <PanelTag label="DEFINITION" width={80} height={16} />
                <MeasurementLine width={120} capHeight={4} />
              </div>
              <ul className={styles.definitionList}>
                {[
                  'Plain text document — no design tooling required',
                  "Structured to simulate a specific UI layout's information hierarchy",
                  'Reviewed by real CliDxps users with actual patient visit data',
                  'Fast like a sketch, structured like a prototype, designed to think with AI',
                  'Produces real cognitive responses because the content is real patient data',
                ].map((item, i) => (
                  <li key={i} className={styles.definitionItem}>
                    <DiamondMark size={3} stroke="rgba(0,212,255,0.5)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Speed claim */}
            <div className={styles.metricsRow}>
              <div className={styles.metricItem}>
                <MetricReadout value="21d" label="SPRINT PROOF" />
                <p className={styles.metricNote}>CPO problem memo → validated design direction.</p>
              </div>
            </div>

            {/* Spread */}
            <p className={styles.bodyText}>
              PM Robby Peters credited TextFrames by name in the March 2025 Data Display Deep Dive.
              CPO asked Justin to present to the full product org — not just as a research output,
              but as a demonstration of AI-speed design validation. The TextFrame wasn't just a
              research instrument. It was a different model of design velocity.
            </p>

            {/* Justin quote */}
            <blockquote className={styles.quote}>
              <PanelTag label="DESIGN_LEAD" width={80} height={16} />
              <p className={styles.quoteText}>
                "Finding the opportunity to prototype with AI quickly without having to build
                actual screens, this led me to write this thesis."
              </p>
            </blockquote>
          </div>
        </section>

        <section id="study" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>03</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>STUDY</h2>
          </div>
          <div className={styles.chapterBody}>

            {/* Study 1 context */}
            <p className={styles.bodyText}>
              <strong className={styles.highlight}>Study 1 (Mar 10–21, 2025 · 11 days):</strong>{' '}
              Three designs, qualitative cognitive walkthroughs. No control. Purpose: validate
              whether temporal narrative structure was worth pursuing before the full quantitative study.
              D3 emerged with the clearest signal — reviewers could follow the clinical story.
            </p>

            {/* Study 2 intro */}
            <p className={styles.bodyText}>
              <strong className={styles.highlight}>Study 2 (Completed May 2025 · 80 reviews · 18 users):</strong>{' '}
              Full comparative with control. Justin designed the study plan, wrote the cognitive
              walkthrough interview guide, and ran every session himself.
            </p>

            {/* 4 StudyCards grid */}
            <div className={styles.studyGrid}>
              <StudyCard
                designId="D1"
                name="Triage Matrix"
                architecture="Evidence as step-by-step validation checklist against clinical criteria thresholds."
                accuracy={60}
                insight="Highest confidence responses — but only 60% correct. Checklist format induced overconfidence. Most dangerous design: not worst-performing, but most distorting about its own reliability."
                variant="dangerous"
              />
              <StudyCard
                designId="D2"
                name="Criteria Categories"
                architecture="Evidence bucketed by clinical category: Demand / Signs & Symptoms / Diagnostics / Treatment."
                accuracy={50}
                insight="Still a sorting exercise. Reviewers had to construct the clinical argument themselves from categorized evidence. The structure helped somewhat, but not enough."
                variant="default"
              />
              <StudyCard
                designId="D3"
                name="Clinical Progression"
                architecture="Evidence presented chronologically as disease onset → acute phase → clinical response."
                accuracy={80}
                insight="Matched how clinicians actually reason. The temporal narrative gave reviewers the clinical story — they didn't have to reconstruct it. Right AND confident: 2× more certain-and-correct than control."
                variant="winner"
              />
              <StudyCard
                designId="D4"
                name="Current Production"
                architecture="Existing evidence list — keyword-extracted note fragments organized by regex category."
                accuracy={60}
                insight="Same accuracy as D1 but less overconfident. The status quo that the research was designed to beat."
                variant="control"
              />
            </div>

            {/* Lift callout */}
            <div className={styles.liftCallout}>
              <div className={styles.liftMain}>
                <MetricReadout value="+33%" label="RELATIVE ACCURACY LIFT" />
                <div className={styles.liftDetail}>
                  <span className={styles.liftFormula}>D3 (80%) vs D4 (60%) → (80−60)/60 = 33.3%</span>
                  <p className={styles.liftNote}>
                    Presented to CPO and full product org. Sufficient to validate product strategy
                    and fund a two-phase implementation. Not a clinical trial — a directional study
                    with enough rigor to justify investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="results" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>04</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>RESULTS</h2>
          </div>
          <div className={styles.chapterBody}>

            <p className={styles.bodyText}>
              <strong className={styles.highlight}>Phase 1 shipped Q1/Q2 2025</strong> with PM Robby Peters.
              The criteria column model — four columns per evidence card, mapping clinical judgment
              to a structured argument format.
            </p>

            {/* Column architecture */}
            <div className={styles.columnGrid}>
              {[
                { label: 'DEMAND',           desc: 'Why this patient is a candidate — risk factors, indication, prior history' },
                { label: 'SIGNS & SYMPTOMS', desc: 'Clinical indicators expected — status, presenting symptoms, clinical documentation' },
                { label: 'DIAGNOSTICS',      desc: 'Lab values, imaging findings, test results supporting the diagnosis' },
                { label: 'TREATMENT',        desc: 'What was ordered or administered in response to the suspected condition' },
              ].map((col) => (
                <div key={col.label} className={styles.columnItem}>
                  <PanelTag label={col.label} width={Math.max(72, col.label.length * 6 + 20)} height={16} />
                  <p className={styles.columnDesc}>{col.desc}</p>
                </div>
              ))}
            </div>

            {/* Honest middle */}
            <div className={styles.honestMiddle}>
              <div className={styles.honestHeader}>
                <PanelTag label="HONEST_MIDDLE" width={104} height={16} fill="rgba(255,175,0,0.08)" textColor="rgba(255,175,0,0.7)" />
              </div>
              <p className={styles.bodyText}>
                Phase 1 shipped. The team measured it. Agree rate didn't move meaningfully.
              </p>
              <p className={styles.bodyText}>
                The TextFrame study validated D3 as a complete design: temporal progression +
                criteria columns + surfaced missing/conflicting evidence. All three layers working
                together. Phase 1 was always a calculated partial implementation — the bet was
                that criteria columns alone would produce signal. It didn't.
              </p>
              <p className={styles.bodyText}>
                The learning was clear: the three layers weren't three separate ideas — they were
                a system. This is not a failure. It's an honest middle. The research correctly
                identified what moved accuracy. The implementation was phased by product necessity.
                Phase 1 generated the measurement that made Phase 2 defensible.
              </p>
            </div>

            {/* Learning block */}
            <blockquote className={styles.quote}>
              <PanelTag label="DESIGN_LEAD" width={80} height={16} />
              <p className={styles.quoteText}>
                "Criteria cards alone were insufficient to move Agree Rate without additional
                temporal context and explanatory data. These learnings directly informed the
                current deductive reasoning work in CRI, where we are now incorporating the
                fuller set of elements that testing indicated were necessary to close the gap."
              </p>
            </blockquote>
          </div>
        </section>

        <section id="pilot" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>05</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>PILOT</h2>
          </div>
          <div className={styles.chapterBody}>

            <p className={styles.bodyText}>
              October 2025. Multi-site pilot research program — four sessions across three health
              systems. Facilitated by Justin Ranton, Perri Taylor, and Shivani Patel.
            </p>

            {/* Site badges */}
            <div className={styles.sitesRow}>
              {['McLAREN ×2', 'PREMIER ×1', 'UCSD ×1'].map((site) => (
                <PanelTag
                  key={site}
                  label={site}
                  width={Math.max(72, site.length * 6 + 20)}
                  height={18}
                  fill="rgba(0,212,255,0.06)"
                  textColor="rgba(0,212,255,0.65)"
                />
              ))}
            </div>

            {/* Frame shift note */}
            <div className={styles.signalBlock}>
              <DataBracket width={3} height={52} stroke="rgba(123,255,237,0.4)" />
              <div className={styles.signalContent}>
                <span className={styles.signalLabel}>FRAME SHIFT</span>
                <p className={styles.bodyText} style={{ margin: 0 }}>
                  The most important outcome wasn't a specific finding — it was a frame shift.
                  Evidence Cards moved from <em>feature validation</em> to{' '}
                  <em>behavioral validation</em>. The question was no longer whether users liked
                  the cards. It was whether the cards changed how they worked.
                </p>
              </div>
            </div>

            {/* 6 Findings */}
            <div className={styles.findingsBlock}>
              <FindingBlock
                number={1}
                title="Clarity & Efficiency"
                detail="Cards reduced cognitive load and improved initial case orientation. Reviewers used the words 'essential' and 'like cliff notes for the chart.' Fewer clicks, faster orientation, less scrolling. The bracketed structure helped reviewers scan and decide where to dig."
              />
              <FindingBlock
                number={2}
                title="Trust Requires Traceability"
                detail="Missing attribution sent reviewers back to Epic or Cerner regardless of content accuracy. 'I need to know where this came from.' CDI and Coding professionals always verify in the EMR — professional practice, not product resistance. The product's job is to shorten the path to verification."
              />
              <FindingBlock
                number={3}
                title="Adoption Signal Confirmed"
                detail="At Premier, reviewers were copying evidence card content directly into their physician queries. The three-legged stool CDI query model maps directly to the column architecture. The pilot confirmed the column structure matched how CDI professionals construct their clinical arguments."
              />
              <FindingBlock
                number={4}
                title="Evidence Polarity Gap"
                detail="The most significant gap: what contradicted the diagnosis and what was absent — not just what supported it. Single data points weren't enough; trends were needed. This was the critical gap that Phase 2's 'Evidence Not Found' state directly addresses."
              />
              <FindingBlock
                number={5}
                title="Reference Link Pattern Validated"
                detail="Light by default, deep on demand: one date inline, full metadata behind a Reference Link — achieved the best balance of readability and credibility. Validated across all three sites. The two-week McLaren follow-up specifically tested citation display variants."
              />
              <FindingBlock
                number={6}
                title="Frame Shift: Feature → Behavioral Validation"
                detail="'They see the cards as a helpful suggestion tool, but the efficiency gain is still anecdotal.' The pilot pushed for quantitative validation. The behavioral frame — does this change how reviewers work? — became the success definition going into Phase 2."
              />
            </div>
          </div>
        </section>

        <section id="phase2" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>06</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>PHASE 2</h2>
          </div>
          <div className={styles.chapterBody}>

            <p className={styles.bodyText}>
              Phase 2 ships in CRI (Clinical Reasoning Interfaces) with PM Shivani Patel.
              Justin is the continuous owner — same designer from the first TextFrame through
              current Figma. This is the full implementation of what the study validated — now shipping in full for the first time.
            </p>

            {/* Why it's the completing layer */}
            <div className={styles.signalBlock}>
              <DataBracket width={3} height={52} stroke="rgba(0,212,255,0.4)" />
              <div className={styles.signalContent}>
                <span className={styles.signalLabel}>THE COMPLETING LAYER</span>
                <p className={styles.bodyText} style={{ margin: 0 }}>
                  D3 won at 80% accuracy because it gave reviewers three things simultaneously:
                  structured criteria columns (Phase 1) + temporal progression + explicit display
                  of absence and contradiction. Phase 1 delivered the first layer. Phase 2 delivers
                  all three together for the first time.
                </p>
              </div>
            </div>

            {/* 3 Evidence States */}
            <div className={styles.evidenceStates}>
              <EvidenceState
                state="supported"
                description="Clinical factors present with supporting evidence and source references. Evidence excerpts, dated citations, source references ranked by relevance. The 'yes, this is here' state — surfaced and attributable."
              />
              <EvidenceState
                state="not-found"
                description="Clinical factors expected for this diagnosis that were not detected in the patient record. This is not empty space — it's visible absence as a clinical signal. A flag: the thing we'd expect to see isn't there, which is diagnostically relevant."
              />
              <EvidenceState
                state="conflicting"
                description="Clinical factors with contradictory data, surfaced for CliDxps review. The negative data that the original UI couldn't show. Clinical factors with contradictory data — surfaced for reviewers who need to evaluate counterfactual signals."
              />
            </div>

            {/* Arc timeline */}
            <div className={styles.timeline}>
              <div className={styles.timelineHeader}>
                <PanelTag label="ARC_TIMELINE" width={96} height={16} />
              </div>
              {[
                { date: 'NOV 2024', event: "CPO DataDisplay memo — problem named, Justin hasn't joined" },
                { date: 'FEB 2025', event: 'Justin joins — TextFrame methodology invented in first weeks' },
                { date: 'MAR 2025', event: 'Study 1 (D1–D3) — 11 days, qualitative, D3 emerges' },
                { date: 'MAY 2025', event: 'Study 2 (D1–D4) — 80 reviews, D3 wins at 80%, presented to CPO' },
                { date: 'MAY 2025', event: 'Phase 1 ships — criteria columns, evidence summaries, O₂ chart' },
                { date: 'JUL 2025', event: 'Promoted to Product Design Lead' },
                { date: 'OCT 2025', event: 'Multi-site pilot research — behavioral validation confirmed' },
                { date: 'FEB 2026', event: 'Phase 2 shipping in CRI — all three layers in production' },
              ].map((item, i) => (
                <div key={i} className={styles.timelineItem}>
                  <span className={styles.timelineDate}>{item.date}</span>
                  <DiamondMark size={4} stroke="rgba(0,212,255,0.5)" />
                  <span className={styles.timelineEvent}>{item.event}</span>
                </div>
              ))}
            </div>

            {/* Closing hypothesis */}
            <blockquote className={styles.quote} style={{ marginTop: '40px' }}>
              <PanelTag label="WORKING_HYPOTHESIS" width={128} height={16} />
              <p className={styles.quoteText}>
                "Phase 2 is the closest the product has come to a complete enough information view
                that reviewers don't have to reconstruct the story on their own. The pilot research
                data suggest it's directionally right. Phase 2 will generate the quantitative
                validation data needed to know for certain."
              </p>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  )
}
