import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './CircuitTraces.module.css'

interface CircuitTracesProps {
  groupCount?: number  // number of data groups to draw traces for
}

// Y positions as percentages of panel height — align with data group labels
const TRACE_Y_POSITIONS = [0.18, 0.35, 0.57, 0.78]

export default function CircuitTraces({ groupCount = 4 }: CircuitTracesProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const dots = svg.querySelectorAll<SVGCircleElement>('.trace-dot')
    const ctx = gsap.context(() => {
      dots.forEach((dot, i) => {
        const startX = parseFloat(dot.dataset.x1 ?? '32')
        const endX = parseFloat(dot.dataset.x2 ?? '100')

        gsap.fromTo(
          dot,
          { attr: { cx: startX }, opacity: 0 },
          {
            attr: { cx: endX },
            opacity: 0,
            duration: 2.5 + i * 0.4,
            ease: 'none',
            repeat: -1,
            delay: i * 0.9,
            keyframes: [
              { opacity: 0, duration: 0 },
              { opacity: 0.6, duration: 0.2 },
              { opacity: 0.6, duration: 0.6 },
              { opacity: 0, duration: 0.2 },
            ],
          }
        )
      })
    }, svg)

    return () => ctx.revert()
  }, [groupCount])

  const count = Math.min(groupCount, TRACE_Y_POSITIONS.length)

  return (
    <svg
      ref={svgRef}
      className={styles.traces}
      data-chrome
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {TRACE_Y_POSITIONS.slice(0, count).map((yPct, i) => (
        <g key={i}>
          {/* Horizontal trace line from spine (x=3%) to label (x=22%) */}
          <line
            x1="3" y1={yPct * 100}
            x2="22" y2={yPct * 100}
            stroke="rgba(255,175,0,0.3)"
            strokeWidth="0.5"
          />
          {/* Diamond node at junction */}
          <rect
            x="2" y={yPct * 100 - 0.8}
            width="1.6" height="1.6"
            fill="rgba(255,175,0,0.45)"
            transform={`rotate(45, ${2.8}, ${yPct * 100})`}
          />
          {/* Traveling dot */}
          <circle
            className="trace-dot"
            cx="3"
            cy={yPct * 100}
            r="1.2"
            fill="var(--orange)"
            data-x1="3"
            data-x2="22"
          />
        </g>
      ))}
    </svg>
  )
}
