import styles from './Hero.module.css'

const TICKS = [0,30,60,90,120,150,180,210,240,270,300,330]

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* ── FIELD LAYERS ── */}
      {/* Radial focus — energy source at reticle position */}
      <div className={styles.fieldFocus} aria-hidden="true" />
      {/* Horizontal targeting scan line */}
      <div className={styles.scanLine} aria-hidden="true">
        {[0.15, 0.32, 0.5, 0.68, 0.85].map((pos) => (
          <div key={pos} className={styles.scanDot} style={{ left: `${pos * 100}%` }} />
        ))}
      </div>

      {/* ── STATUS BAR ── */}
      <div className={styles.statusBar} aria-hidden="true">
        <div className={styles.statusLeft}>
          <div className={styles.statusLed} />
          <span className={styles.statusSys}>SYS_ACTIVE</span>
          <span className={styles.statusSep}>·</span>
          <span className={styles.statusLabel}>Product Design Lead · SmarterDx · 2025–2026</span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.coord}>47.6062° N · 122.3321° W</span>
          <div className={styles.coordMark} />
        </div>
      </div>

      {/* ── DISPLAY FIELD ── */}
      <div className={styles.displayField}>

        {/* LEFT: Identity zone */}
        <div className={styles.identZone}>
          <p className={styles.ambientLabel} aria-hidden="true">// IDENT_ZONE</p>

          <div className={styles.nameBlock}>
            <span className={styles.nameFirst}>Justin</span>
            <span className={styles.nameLast}>Ranton</span>
          </div>

          <div className={styles.hRule}>
            <div className={styles.hRuleLine} />
            <div className={styles.hRuleDot} />
            <span className={styles.hRuleVal}>DT · AI-FIRST · 2026</span>
          </div>

          {/* Designation boxes — |LABEL format */}
          <div className={styles.designations}>
            <span className={styles.desig}><span className={styles.desigPipe}>|</span>DESIGN_TECH</span>
            <span className={styles.desig}><span className={styles.desigPipe}>|</span>AI_FIRST</span>
            <span className={styles.desig}><span className={styles.desigPipe}>|</span>UX_ENGINEER</span>
          </div>

          <p className={styles.tagline}>
            Design for AI systems.<br />
            <em>Systems for AI design.</em>
          </p>

          <p className={styles.body}>
            I work at the intersection of design craft and AI infrastructure —
            building clinical interfaces, reasoning frameworks, and the tools
            to construct them. Every decision connects to whether a human
            trusts the AI enough to act on it.
          </p>

          <div className={styles.ctas}>
            <a href="#work" className={styles.ctaPrimary}>
              <span className={styles.ctaPipe}>|</span>VIEW_WORK
            </a>
            <a href="#" className={styles.ctaGhost}>
              <span className={styles.ctaPipe}>|</span>ABOUT
            </a>
          </div>
        </div>

        {/* RIGHT: Target profile */}
        <div className={styles.targetZone}>
          <p className={styles.targetLabel} aria-hidden="true">// TARGET_PROFILE</p>

          {/* Targeting reticle */}
          <div className={styles.reticleWrap}>

            {/* Floating designation labels */}
            <div className={styles.desgTop}>
              <span className={styles.desgPipe}>|</span>AVAILABLE · Q2 2026
            </div>
            <div className={styles.desgRight}>
              <span className={styles.desgPipe}>|</span>SMARTER_DX
            </div>
            <div className={styles.desgBottom}>
              <span className={styles.desgPipe}>|</span>SEATTLE · 47.6°N
            </div>
            <div className={styles.desgLeft}>
              <span className={styles.desgPipe}>|</span>DESIGN_TECH
            </div>

            {/* SVG reticle */}
            <svg
              className={styles.reticleSvg}
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer dashed ring — rotates */}
              <circle
                className={styles.rotatingRing}
                cx="120" cy="120" r="108"
                stroke="rgba(0,212,255,0.14)"
                strokeWidth="0.6"
                strokeDasharray="3 10"
              />
              {/* Middle ring */}
              <circle cx="120" cy="120" r="84"
                stroke="rgba(0,212,255,0.28)"
                strokeWidth="0.7"
              />
              {/* Inner ring — pulses */}
              <circle
                className={styles.innerRing}
                cx="120" cy="120" r="56"
                stroke="rgba(0,212,255,0.55)"
                strokeWidth="1"
              />

              {/* Crosshair arms — gap at inner ring */}
              <line x1="120" y1="0"   x2="120" y2="62"  stroke="rgba(0,212,255,0.22)" strokeWidth="0.6"/>
              <line x1="120" y1="178" x2="120" y2="240" stroke="rgba(0,212,255,0.22)" strokeWidth="0.6"/>
              <line x1="0"   y1="120" x2="62"  y2="120" stroke="rgba(0,212,255,0.22)" strokeWidth="0.6"/>
              <line x1="178" y1="120" x2="240" y2="120" stroke="rgba(0,212,255,0.22)" strokeWidth="0.6"/>

              {/* Tick marks on outer ring — all 12 positions */}
              {TICKS.map((deg) => (
                <line
                  key={deg}
                  x1="228" y1="120"
                  x2="218" y2="120"
                  stroke="rgba(0,212,255,0.35)"
                  strokeWidth="0.8"
                  transform={`rotate(${deg}, 120, 120)`}
                />
              ))}

              {/* Secondary short ticks at 15° offsets */}
              {[15,45,75,105,135,165,195,225,255,285,315,345].map((deg) => (
                <line
                  key={`s${deg}`}
                  x1="228" y1="120"
                  x2="222" y2="120"
                  stroke="rgba(0,212,255,0.18)"
                  strokeWidth="0.5"
                  transform={`rotate(${deg}, 120, 120)`}
                />
              ))}

              {/* Center target */}
              <circle cx="120" cy="120" r="14"
                stroke="rgba(0,212,255,0.4)"
                strokeWidth="0.8"
                fill="none"
              />
              <circle cx="120" cy="120" r="3"
                fill="rgba(0,212,255,0.95)"
                className={styles.centerDot}
              />

              {/* Corner markers at 45° positions on middle ring */}
              {[45, 135, 225, 315].map((deg) => {
                const rad = (deg * Math.PI) / 180
                const cx = 120 + 84 * Math.cos(rad)
                const cy = 120 + 84 * Math.sin(rad)
                return (
                  <rect
                    key={`m${deg}`}
                    x={cx - 3} y={cy - 3}
                    width="6" height="6"
                    stroke="rgba(0,212,255,0.35)"
                    strokeWidth="0.6"
                    fill="none"
                    transform={`rotate(45, ${cx}, ${cy})`}
                  />
                )
              })}
            </svg>
          </div>

          {/* Data readout panel */}
          <div className={styles.dataPanel}>
            <div className={styles.dataDivider} />
            <div className={styles.dataRow}>
              <span className={styles.dataKey}>STATUS</span>
              <span className={`${styles.dataVal} ${styles.dataValActive}`}>AVAILABLE · Q2 2026</span>
            </div>
            <div className={styles.dataRow}>
              <span className={styles.dataKey}>BASE</span>
              <span className={styles.dataVal}>SEATTLE · 47.6°N</span>
            </div>
            <div className={styles.dataRow}>
              <span className={styles.dataKey}>CURRENT</span>
              <span className={styles.dataVal}>SMARTERDX / DESIGN TECH</span>
            </div>
            <div className={styles.dataFooter}>
              <span className={styles.dataFooterLabel}>SYS_ID</span>
              <span className={styles.dataFooterVal}>JR-2026-DT</span>
              <div className={styles.dataFooterLed} />
            </div>
          </div>
        </div>

      </div>

      {/* ── SYSTEM BAR ── */}
      <div className={styles.systemBar} aria-hidden="true">
        <div className={styles.sysLeft}>
          <div className={styles.sysCornerMark} />
          <span className={styles.sysField}>
            <span className={styles.sysKey}>SYS_ID</span>
            <span className={styles.sysVal}>JR-2026-DT</span>
          </span>
          <div className={styles.sysDivider} />
          <span className={styles.sysField}>
            <span className={styles.sysKey}>BUILD</span>
            <span className={styles.sysVal}>2026-02-21</span>
          </span>
          <div className={styles.sysDivider} />
          <span className={styles.sysField}>
            <span className={styles.sysKey}>VER</span>
            <span className={styles.sysVal}>3.0</span>
          </span>
        </div>
        <div className={styles.scrollCue}>
          <span className={styles.scrollLabel}>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </div>

    </section>
  )
}
