import { useEffect, useRef, useState } from 'react'
import CapabilityBar from '../CapabilityBar/CapabilityBar'
import { skillGroups, tools } from '../../../data/skills'
import styles from './OperatorPanel.module.css'

function fmtTime(secs: number) {
  const h = Math.floor(secs / 3600).toString().padStart(2, '0')
  const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  return `${h}:${m}:${s}`
}

const colorOf = (c: string): 'orange' | 'blue' | 'purple' =>
  c === 'on-o' ? 'orange' : c === 'on-b' ? 'blue' : 'purple'

// Rail nodes mark section transitions — positions as % of rail height
const RAIL_NODES = ['0%', '30%', '64%', '100%']

export default function OperatorPanel() {
  const [uptime, setUptime] = useState(0)
  const [animate, setAnimate] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  // Live uptime counter
  useEffect(() => {
    const t = setInterval(() => setUptime(u => u + 1), 1000)
    return () => clearInterval(t)
  }, [])

  // Trigger capability bar animations on scroll
  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); obs.unobserve(el) } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={styles.opanel} ref={panelRef}>

      {/* Corner bracket markers — all four corners */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />

      {/* ── Header band ── */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.statusLed} />
          <span className={styles.headerTitle}>Operator Profile</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.headerId}>JR-2026-DT</span>
          <div className={styles.headerAccent} />
        </div>
      </div>

      {/* ── Body: left rail + content ── */}
      <div className={styles.body}>

        {/* Left color rail — signature LCARS structural element */}
        <div className={styles.rail}>
          {RAIL_NODES.map((pos, i) => (
            <div
              key={i}
              className={styles.railNode}
              style={{ '--pos': pos } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Content zones */}
        <div className={styles.content}>

          {/* Zone 1: Identity / status */}
          <div className={styles.zone}>
            <div className={styles.zoneLabel}>Identity · Verified</div>
            <div className={styles.statusRows}>
              <div className={styles.srow}>
                <span className={styles.skey}>Status</span>
                <span className={`${styles.sval} ${styles.svalActive}`}>Available · Q2 2026</span>
              </div>
              <div className={styles.srow}>
                <span className={styles.skey}>Base</span>
                <span className={styles.sval}>Seattle · 47.6°N</span>
              </div>
              <div className={styles.srow}>
                <span className={styles.skey}>Current</span>
                <span className={styles.sval}>SmarterDx / Design Tech</span>
              </div>
            </div>
          </div>

          {/* Zone 2: Capability index — animated fill bars */}
          <div className={styles.zone}>
            <div className={styles.zoneLabel}>Capability Index</div>
            {skillGroups.map((group, gi) =>
              group.skills.map((skill, si) => (
                <CapabilityBar
                  key={skill.name}
                  name={skill.name}
                  fill={skill.fill}
                  color={colorOf(skill.color)}
                  animate={animate}
                  animDelay={(gi === 0 ? 0 : 0.45) + si * 0.055}
                />
              ))
            )}
          </div>

          {/* Zone 3: Loaded modules */}
          <div className={styles.zone}>
            <div className={styles.zoneLabel}>Loaded Modules</div>
            <div className={styles.modules}>
              {tools.map(t => (
                <span key={t} className={styles.module}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Footer band ── */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.connLabel}>CONN</span>
          <div className={styles.connDot} />
          <span className={styles.connStatus}>ACTIVE</span>
        </div>
        <span className={styles.uptime}>{fmtTime(uptime)}</span>
        <span className={styles.sysVer}>VER 3.0</span>
      </div>

    </div>
  )
}
