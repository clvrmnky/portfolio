import styles from './Button.module.css'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  href?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ variant, href, children, onClick }: ButtonProps) {
  const className = `${styles.btn} ${variant === 'primary' ? styles.primary : styles.ghost}`

  if (href) {
    return <a href={href} className={className}>{children}</a>
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}
