import { useEffect, useRef, useState } from 'react'
import GlassPanel from '../../ui/GlassPanel/GlassPanel'
import DotMatrix from '../../ui/DotMatrix/DotMatrix'
import DataRow from '../../ui/DataRow/DataRow'
import Button from '../../ui/Button/Button'
import { skillGroups, tools } from '../../../data/skills'
import styles from './Hero.module.css'

export default function Hero() {
  const colRef = useRef<HTMLDivElement>(null)
  const [dotsAnimated, setDotsAnimated] = useState(false)

  // Trigger dot animations when data column enters viewport
  useEffect(() => {
    const el = colRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDotsAnimated(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>

        {/* Top bar */}
        <div className={styles.topbar}>
          <div className={styles.topDiamond} />
          <span className={styles.topLabel}>Product Design Lead · SmarterDx · 2025–2026</span>
          <div className={styles.topRule} />
          <span className={styles.topCoord}>47.6062° N · 122.3321° W</span>
        </div>

        {/* Identity column */}
        <div className={styles.left}>
          <p className={styles.sysId}>Operator Identity</p>

          <div className={styles.heroName}>
            <span className={styles.nameGiven}>Justin</span>
            <span className={styles.nameSurname}>Ranton</span>
          </div>

          <div className={styles.hRule}>
            <div className={styles.hRuleLine} />
            <div className={styles.hRuleDot} />
            <span className={styles.hRuleVal}>DT · AI-First · 2026</span>
          </div>

          <p className={styles.heroRole}>
            Design Technologist
            <span className={styles.roleSep}>·</span>
            AI-First Product Designer
            <span className={styles.roleSep}>·</span>
            UX Engineer
          </p>

          <p className={styles.heroTagline}>
            Design for AI systems.<br />
            <em>Systems for AI design.</em>
          </p>

          <p className={styles.heroBody}>
            I work at the intersection of design craft and AI infrastructure —
            building clinical interfaces, reasoning frameworks, and the tools
            to construct them. Every decision connects to whether a human
            trusts the AI enough to act on it.
          </p>

          <div className={styles.ctas}>
            <Button variant="primary" href="#work">View Work</Button>
            <Button variant="ghost" href="#">About &amp; Context</Button>
          </div>
        </div>

        {/* Glass data column */}
        <div ref={colRef} className={styles.dataCol}>
          <GlassPanel spine id="dataCol" scanDelay="0s">
          <div className={styles.colInner}>
            <div className={styles.colHeader}>
              <span className={styles.colTitle}>Operator Profile</span>
              <span className={styles.colId}>JR-2026-DT</span>
            </div>

            {/* Identity data rows */}
            <div className={styles.dg}>
              <DataRow label="Status"  value="Available · Q2 2026"            variant="purple" pulse index={0} />
              <DataRow label="Base"    value="Greater Seattle Area"            variant="dim"    pulse index={1} />
              <DataRow label="Current" value="SmarterTechnologies / SmarterDx" variant="text"   pulse index={2} />
            </div>

            {/* Skill groups */}
            {skillGroups.map((group, gi) => (
              <div className={styles.dg} key={group.id} id={group.id}>
                <div className={styles.dgLabel}>{group.label}</div>
                {group.skills.map((skill, si) => (
                  <DotMatrix
                    key={skill.name}
                    name={skill.name}
                    fill={skill.fill}
                    color={skill.color}
                    animate={dotsAnimated}
                    animDelay={(gi === 0 ? 0.6 : 0.9) + si * 0.06}
                  />
                ))}
              </div>
            ))}

            {/* Tools */}
            <div className={styles.dg}>
              <div className={styles.dgLabel}>Tools</div>
              <div className={styles.toolsRow}>
                {tools.map((tool) => (
                  <span key={tool} className={styles.toolTag}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
          </GlassPanel>
        </div>

        {/* Bottom system bar */}
        <div className={styles.bottombar}>
          <div className={styles.bsys}>
            <div className={styles.bi}>SYS_ID: <span>JR-2026-DT</span></div>
            <div className={styles.bi}>BUILD: <span>2026-02-21</span></div>
            <div className={styles.bi}>VER: <span>3.0</span></div>
          </div>
          <div className={styles.scrollCue}>Scroll to work</div>
        </div>

      </div>
    </section>
  )
}
