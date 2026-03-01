import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChapterNav } from '../components/fui/modules/ChapterNav'
import type { Chapter } from '../components/fui/modules/ChapterNav'
import { DiamondMark } from '../components/fui'
import { InlineSep } from '../components/fui'
import { PanelTag } from '../components/fui/assembled/PanelTag'
import { DataBracket } from '../components/fui/primitives/DataBracket'
import styles from './AgreeRatePage.module.css'

const CHAPTERS: Chapter[] = [
  { id: 'reframe',  number: '01', label: 'THE REFRAME' },
  { id: 'built',    number: '02', label: 'HOW IT WAS BUILT' },
  { id: 'levers',   number: '03', label: 'FOUR LEVERS' },
  { id: 'impact',   number: '04', label: 'IMPACT' },
  { id: 'adoption', number: '05', label: 'ADOPTION' },
]

const LEVERS = [
  {
    id: 'L1',
    name: 'Signal Precision',
    tagline: 'Improve what AI suggests',
    body: 'Source confidence weighting, contradiction detection, suppression of low-impact diagnoses, local policy alignment, retrospective audit loops. Upstream of design — if the AI suggests the wrong things, no interface can compensate.',
  },
  {
    id: 'L2',
    name: 'Rationale Transparency',
    tagline: 'Clarify why we suggest it',
    body: "Structured rationale schema (CS2), role-aware explanations, guideline-linked reasoning. The rationale adapts to which lens the reviewer uses — a Coder needs different context than a CDI specialist. CS1 and CS2 are the implementations of this lever.",
  },
  {
    id: 'L3',
    name: 'Workflow Continuity',
    tagline: 'Make it easy to act on good suggestions',
    body: 'State persistence, EHR deep-linking (one click from AI suggestion to source document in Epic or Cerner), tool-switching reduction, duplicate case prevention. Friction doesn\'t just reduce accuracy — it reduces usage.',
  },
  {
    id: 'L4',
    name: 'Institutional Customization',
    tagline: 'Align with how each site actually works',
    body: 'Local suppression logics, site-specific query templates, configurable clinical factor definitions. Agreement doesn\'t happen at the population level — it happens at the site, institution, and reviewer level.',
  },
]

const IMPACT_TABLE = [
  { lever: 'L1 — Signal Precision',           phase: 'Phase 1 (months 1–6)',     contribution: '2–4% lift' },
  { lever: 'L2 — Rationale Transparency',     phase: 'Phase 2 (months 4–10)',    contribution: '2–4% lift' },
  { lever: 'L3 — Workflow Continuity',        phase: 'Phase 2–3 (months 6–12)',  contribution: '1–3% lift' },
  { lever: 'L4 — Institutional Customization',phase: 'Phase 3 (months 10–18)',   contribution: '1–2% lift' },
]

export default function AgreeRatePage() {
  const [activeChapter, setActiveChapter] = useState('reframe')

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
            <span className={styles.eyebrowLabel}>CASE_FILE / CS_03</span>
          </div>
          <h1 className={styles.title}>The Agree Rate Framework</h1>
          <InlineSep />
          <p className={styles.subtitle}>
            A strategic framework reframing agree rate from a behavior problem to a system
            quality problem — four levers, multi-site research synthesis, CPO adoption.
          </p>
        </header>

        {/* ── Chapter 01: THE REFRAME ── */}
        <section id="reframe" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>01</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>THE REFRAME</h2>
          </div>
          <div className={styles.chapterBody}>

            <blockquote className={styles.quote}>
              <p className={styles.quoteText}>
                "Improving agree rates isn't about nudging users toward compliance. It's about
                earning agreement through more relevant, defensible, and aligned AI suggestions."
              </p>
            </blockquote>

            <blockquote className={styles.quote}>
              <p className={styles.quoteText}>
                "If the AI suggests the wrong things, no UI can fix it."
              </p>
            </blockquote>

            <p className={styles.bodyText}>
              Agree rate was being treated internally as a behavior problem: how do we get users
              to comply more? The reframe: reviewers weren't rejecting AI suggestions because they
              were resistant. They were rejecting them because the suggestions are genuinely wrong,
              or right for reasons they can't verify. That's not a behavior problem. That's a
              system quality problem.
            </p>

            <p className={styles.bodyText}>
              Agree rate is not a binary outcome. It's the byproduct of a system that either
              enables or obstructs: clinical alignment, coding compliance, workflow fit,
              institutional rules.
            </p>

          </div>
        </section>

        {/* ── Chapter 02: HOW IT WAS BUILT ── */}
        <section id="built" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>02</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>HOW IT WAS BUILT</h2>
          </div>
          <div className={styles.chapterBody}>

            <h3 className={styles.sectionHeading}>
              Multi-site research synthesis → strategic framework
            </h3>

            <p className={styles.bodyText}>
              I commissioned an external UX research contractor, scoped the engagement, and
              authored the statement of work. The contractor conducted multi-site usability
              research sessions with CDI reviewers, medical coders, and clinical managers at
              UCHealth, UCLA, UCSD, and Premier Health.
            </p>

            <p className={styles.bodyText}>
              I reviewed the research reports, then synthesized findings across sites —
              identifying systemic patterns that crossed institutions, not just site-specific
              feedback. I authored the strategic framework: the four levers, the projected
              impact, the implementation tiers.
            </p>

            <p className={styles.bodyText}>
              I presented the framework to the CPO and full product org as the foundation for
              CRI roadmap prioritization. It was adopted.
            </p>

            {/* Research sites */}
            <div className={styles.sitesRow}>
              {['UCHealth', 'UCLA', 'UCSD', 'Premier Health'].map((site) => (
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

          </div>
        </section>

        {/* ── Chapter 03: FOUR LEVERS ── */}
        <section id="levers" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>03</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>FOUR LEVERS</h2>
          </div>
          <div className={styles.chapterBody}>

            <h3 className={styles.sectionHeading}>
              Four levers. Each addressing a different failure mode.
            </h3>

            <p className={styles.bodyText}>
              The framework identifies four independent levers for improving agree rate — each
              upstream of the next. No lever compensates for a failure in an upstream lever.
            </p>

            <div className={styles.leversGrid}>
              {LEVERS.map((lever) => (
                <div key={lever.id} className={styles.leverCard}>
                  <div className={styles.leverHeader}>
                    <PanelTag
                      label={lever.id}
                      width={32}
                      height={16}
                      fill="rgba(0,212,255,0.08)"
                      textColor="rgba(0,212,255,0.8)"
                    />
                    <span className={styles.leverName}>{lever.name}</span>
                  </div>
                  <span className={styles.leverTagline}>{lever.tagline}</span>
                  <p className={styles.leverBody}>{lever.body}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Chapter 04: IMPACT ── */}
        <section id="impact" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>04</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>IMPACT</h2>
          </div>
          <div className={styles.chapterBody}>

            <h3 className={styles.sectionHeading}>
              6–13% cumulative agree rate lift over 13–18 months
            </h3>

            <p className={styles.bodyText}>
              Projected cumulative agree rate lift: 6–13% over 13–18 months across phased lever
              activation. The range reflects sequenced implementation — each lever activated
              adds to the prior baseline.
            </p>

            <p className={styles.bodyText}>
              Current industry range: 30–33%. A 6–13% lift on that baseline is a material
              commercial outcome — agree rate failures translate directly to unrecovered diagnoses
              and revenue at risk from below-threshold adoption.
            </p>

            {/* Impact table */}
            <div className={styles.impactTable}>
              <div className={styles.impactTableHeader}>
                <span className={styles.impactColLever}>Lever</span>
                <span className={styles.impactColPhase}>Activation Phase</span>
                <span className={styles.impactColContrib}>Estimated Contribution</span>
              </div>
              {IMPACT_TABLE.map((row) => (
                <div key={row.lever} className={styles.impactTableRow}>
                  <span className={styles.impactCellLever}>{row.lever}</span>
                  <span className={styles.impactCellPhase}>{row.phase}</span>
                  <span className={styles.impactCellContrib}>{row.contribution}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Chapter 05: ADOPTION ── */}
        <section id="adoption" data-chapter className={styles.chapter}>
          <div className={styles.chapterHeader}>
            <DiamondMark size={6} stroke="rgba(0,212,255,0.6)" />
            <span className={styles.chapterNumber}>05</span>
            <InlineSep />
            <h2 className={styles.chapterTitle}>ADOPTION</h2>
          </div>
          <div className={styles.chapterBody}>

            <h3 className={styles.sectionHeading}>
              Framework adopted as foundation for CRI roadmap
            </h3>

            <p className={styles.bodyText}>
              The reframe was adopted as the foundation for CRI pod roadmap prioritization.
              The distinction between "nudging compliance" and "earning agreement" changed how
              the product org framed the problem — and what it chose to build next.
            </p>

            {/* CPO quote — closing beat */}
            <blockquote className={styles.quote}>
              <PanelTag label="CPO_SLACK_2025" width={96} height={16} />
              <p className={styles.quoteText}>
                "No one else is moving as fast as you — and we need to fix that."
              </p>
              <span className={styles.quoteAttribution}>
                — Joshua Galoria, CPO, SmarterDx, Slack 2025 — in response to: "Is there
                anything we can do to give you more leverage?"
              </span>
            </blockquote>

            {/* Cross-links */}
            <div className={styles.crossLinks}>
              <div className={styles.crossLinksHeader}>
                <PanelTag label="RELATED_CASE_FILES" width={128} height={16} />
              </div>
              <div className={styles.crossLinksRow}>
                <div className={styles.signalBlock}>
                  <DataBracket width={3} height={44} stroke="rgba(0,212,255,0.3)" />
                  <div className={styles.signalContent}>
                    <Link to="/case-study/textframe" className={styles.crossLink}>
                      <DiamondMark size={4} stroke="rgba(0,212,255,0.6)" />
                      <span>CS_01 — Evidence UX &amp; TextFrame</span>
                    </Link>
                    <Link to="/work/ai-reasoning" className={styles.crossLink}>
                      <DiamondMark size={4} stroke="rgba(0,212,255,0.6)" />
                      <span>CS_02 — AI Reasoning Layer</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}
