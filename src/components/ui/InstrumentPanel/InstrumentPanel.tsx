import { useEffect, useRef, useState } from 'react'
import CapabilityBar from '../CapabilityBar/CapabilityBar'
import { skillGroups, tools } from '../../../data/skills'
import styles from './InstrumentPanel.module.css'

function fmtTime(secs: number) {
  const h = Math.floor(secs / 3600).toString().padStart(2, '0')
  const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  return `${h}:${m}:${s}`
}

const colorOf = (c: string): 'orange' | 'blue' | 'purple' =>
  c === 'on-o' ? 'orange' : c === 'on-b' ? 'blue' : 'purple'

const RAIL_NODES = ['0%', '30%', '64%', '100%']

export default function InstrumentPanel() {
  const [uptime, setUptime] = useState(0)
  const [animate, setAnimate] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setInterval(() => setUptime(u => u + 1), 1000)
    return () => clearInterval(t)
  }, [])

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
    <div className={styles.panel} ref={panelRef}>

      {/* LAYER 0: atmospheric glow overlay (rendered behind all chrome) */}
      <div className={styles.glowField} aria-hidden="true" />

      {/* LAYER 1: structural chrome — corner brackets */}
      <div className={styles.cornerTL} aria-hidden="true" />
      <div className={styles.cornerTR} aria-hidden="true" />
      <div className={styles.cornerBL} aria-hidden="true" />
      {/* No cornerBR — bottom-right is the clip-path cut */}

      {/* LAYER 1: Header band */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.statusLed} />
          <span className={styles.headerTitle}>Operator Profile</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.classification}>CLEARANCE·L4</span>
          <span className={styles.headerId}>JR-2026-DT</span>
          <div className={styles.headerAccent} />
        </div>
      </div>

      {/* LAYER 2: Data surface — left rail + content */}
      <div className={styles.body}>

        {/* Left color rail */}
        <div className={styles.rail}>
          {RAIL_NODES.map((pos, i) => (
            <div
              key={i}
              className={styles.railNode}
              style={{ '--pos': pos } as React.CSSProperties}
            />
          ))}
        </div>

        <div className={styles.content}>

          {/* Zone 1: Identity */}
          <div className={styles.zone}>
            <div className={styles.zoneLabel}>Identity · Verified</div>
            <div className={styles.rows}>
              <div className={styles.row}>
                <span className={styles.rkey}>Status</span>
                <span className={`${styles.rval} ${styles.rvalActive}`}>Available · Q2 2026</span>
              </div>
              <div className={styles.row}>
                <span className={styles.rkey}>Base</span>
                <span className={styles.rval}>Seattle · 47.6°N</span>
              </div>
              <div className={styles.row}>
                <span className={styles.rkey}>Current</span>
                <span className={styles.rval}>SmarterDx / Design Tech</span>
              </div>
            </div>
          </div>

          {/* Zone 2: Capability Index */}
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

          {/* Zone 3: Loaded Modules */}
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

      {/* LAYER 1: Footer band */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.connLabel}>CONN</span>
          <div className={styles.connDot} />
          <span className={styles.connStatus}>ACTIVE</span>
        </div>
        <span className={styles.uptime}>{fmtTime(uptime)}</span>
        <span className={styles.sysVer}>VER 3.0</span>
      </div>

      {/* LAYER 1: scan line */}
      <div className={styles.scanline} aria-hidden="true" />

    </div>
  )
}
