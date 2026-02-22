import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface UseInitSequenceOptions {
  threshold?: number
  contentSelector?: string  // CSS selector for children to stagger
}

export function useInitSequence(
  options: UseInitSequenceOptions = {}
): React.RefObject<HTMLElement | null> {
  const { threshold = 0.15, contentSelector = ':scope > *:not([data-chrome])' } = options
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set initial state
    gsap.set(el, { opacity: 0 })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const children = el.querySelectorAll(contentSelector)
        gsap.set(children, { opacity: 0, y: 8 })

        const tl = gsap.timeline()

        // Beat 1: panel fades in (border visible)
        tl.to(el, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        })

        // Beat 2: content children stagger in
        tl.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power3.out',
          stagger: 0.045,
        }, '+=0.1')

        observer.unobserve(el)
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [contentSelector, threshold])

  return ref
}
