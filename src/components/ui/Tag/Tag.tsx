import styles from './Tag.module.css'

type TagColor = 'default' | 'orange' | 'blue' | 'purple' | 'pink'

interface TagProps {
  label: string
  color?: TagColor
}

const COLOR_CLASS: Record<TagColor, string> = {
  default: '',
  orange:  styles.orange,
  blue:    styles.blue,
  purple:  styles.purple,
  pink:    styles.pink,
}

export default function Tag({ label, color = 'default' }: TagProps) {
  return (
    <span className={`${styles.tag} ${COLOR_CLASS[color]}`}>
      {label}
    </span>
  )
}
