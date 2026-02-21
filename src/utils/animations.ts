import { gsap } from 'gsap'

export function staggerIn(container: HTMLElement, baseDelay = 0): void {
  const children = Array.from(container.children) as HTMLElement[]
  children.forEach((child, i) => {
    gsap.fromTo(
      child,
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
        delay: baseDelay + i * 0.09,
      }
    )
  })
}

export function animateDots(container: HTMLElement, baseDelay = 0): void {
  const rows = container.querySelectorAll('.skill-row')
  rows.forEach((row, ri) => {
    const dots = row.querySelectorAll('.sk-d') as NodeListOf<HTMLElement>
    dots.forEach((dot, di) => {
      const delay = baseDelay + ri * 0.06 + di * 0.04
      gsap.fromTo(
        dot,
        { rotate: 45, scale: 0, opacity: 0 },
        {
          rotate: 45,
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: 'power3.out',
          delay,
        }
      )
    })
  })
}

export function fillBars(scope: HTMLElement): void {
  const bars = scope.querySelectorAll('.dm-fill[data-w]') as NodeListOf<HTMLElement>
  bars.forEach((bar) => {
    const width = bar.dataset.w
    setTimeout(() => {
      bar.style.width = width + '%'
    }, 300)
  })
}
