import styles from './Card.module.scss'
import { cn } from '@utils/cn'

export default function Card({ children, className, ...props }) {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  )
}
