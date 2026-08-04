import { meta } from '@data/meta'
import styles from './StatusBadge.module.scss'

export default function StatusBadge({ available = meta.status.available, label = meta.status.label }) {
  return (
    <span className={styles.status} data-available={available}>
      <span className={styles.dot}>
        <span className={styles.ping} />
      </span>
      {label}
    </span>
  )
}
