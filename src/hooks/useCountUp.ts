import { useEffect, useRef } from 'react'

export function useCountUp(
  target: number,
  duration: number = 900,
  trigger: boolean = true,
  delay: number = 0
): React.RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!trigger || !ref.current) return

    const el = ref.current
    const timeoutId = setTimeout(() => {
      const t0 = performance.now()
      const run = (now: number) => {
        const p = Math.min((now - t0) / duration, 1)
        const value = Math.floor((1 - Math.pow(1 - p, 3)) * target)
        el.textContent = String(value)
        if (p < 1) requestAnimationFrame(run)
      }
      requestAnimationFrame(run)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [target, duration, trigger, delay])

  return ref
}
