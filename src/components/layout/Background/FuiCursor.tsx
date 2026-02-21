import { useEffect, useRef, useState } from 'react'
import styles from './FuiCursor.module.css'

export default function FuiCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Add no-cursor class to body
    document.body.classList.add('fui-cursor-active')

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)

      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [data-interactive]')
      setHovering(!!isInteractive)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const tick = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = posRef.current.x + 'px'
        cursorRef.current.style.top  = posRef.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('fui-cursor-active')
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(rafRef.current)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${hovering ? styles.hovering : ''}`}
    >
      <div className={styles.ring} />
      <div className={styles.dot} />
      <div className={styles.crossH} />
      <div className={styles.crossV} />
    </div>
  )
}
