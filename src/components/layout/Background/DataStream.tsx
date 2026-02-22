import { useEffect, useRef } from 'react'
import styles from './DataStream.module.css'

interface Column {
  x: number
  y: number
  speed: number
  color: string
  dotSize: number
  opacity: number
}

const BLUE   = '95,215,255'
const ORANGE = '255,175,0'

function initColumns(width: number, height: number): Column[] {
  const count = Math.floor(width / 90) + 4
  return Array.from({ length: count }, (_, i) => ({
    x: (width / count) * i + Math.random() * 40 - 20,
    y: Math.random() * height,
    speed: 0.3 + Math.random() * 0.5,
    color: Math.random() > 0.2 ? BLUE : ORANGE,
    dotSize: Math.random() > 0.5 ? 1 : 1.5,
    opacity: 0.3 + Math.random() * 0.4,
  }))
}

export default function DataStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let columns: Column[] = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      columns = initColumns(canvas.width, canvas.height)
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      columns.forEach(col => {
        ctx.beginPath()
        ctx.arc(col.x, col.y, col.dotSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${col.color})`
        ctx.globalAlpha = col.opacity * 0.18
        ctx.fill()

        col.y += col.speed
        if (col.y > canvas.height + 4) {
          col.y = -4
          col.x = Math.random() * canvas.width
        }
      })

      rafId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    rafId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
