import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import type { SkillColor } from '../../../data/skills'
import styles from './DotMatrix.module.css'

interface DotMatrixProps {
  name: string
  fill: number    // 0–8
  color: SkillColor
  animDelay?: number
  animate?: boolean
}

const COLOR_CLASS: Record<SkillColor, string> = {
  'on-o': styles.orange,
  'on-b': styles.blue,
  'on-p': styles.purple,
}

export default function DotMatrix({ name, fill, color, animDelay = 0, animate = false }: DotMatrixProps) {
  const dotsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animate || !dotsRef.current) return
    const dots = dotsRef.current.querySelectorAll(`.${styles.dot}`)
    dots.forEach((dot, di) => {
      gsap.fromTo(
        dot,
        { rotate: 45, scale: 0, opacity: 0 },
        {
          rotate: 45,
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: 'power3.out',
          delay: animDelay + di * 0.04,
        }
      )
    })
  }, [animate, animDelay])

  return (
    <div className={`${styles.row} skill-row`}>
      <span className={styles.name}>{name}</span>
      <div className={styles.dots} ref={dotsRef}>
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i < fill ? COLOR_CLASS[color] : styles.off} sk-d`}
          />
        ))}
      </div>
    </div>
  )
}
