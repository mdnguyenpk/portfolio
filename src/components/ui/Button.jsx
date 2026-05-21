import styles from './Button.module.scss'
import { cn } from '@utils/cn'

export default function Button({ children, variant = 'primary', href, onClick, ...props }) {
  const cls = cn(styles.btn, styles[variant])
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} onClick={onClick} {...props}>{children}</button>
}
