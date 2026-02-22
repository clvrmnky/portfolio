import styles from './FuiButton.module.css'

interface FuiButtonProps {
  variant: 'primary' | 'ghost'
  href?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function FuiButton({ variant, href, children, onClick }: FuiButtonProps) {
  const cls = `${styles.btn} ${variant === 'primary' ? styles.primary : styles.ghost}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button type="button" className={cls} onClick={onClick}>{children}</button>
}
