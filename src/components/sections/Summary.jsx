import { meta } from '@data/meta'
import styles from './Summary.module.scss'

export default function Summary() {
  return (
    <section className={styles.summary}>
      <h2 className={styles.heading}>Summary</h2>
      <p className={styles.text}>{meta.short_summary}</p>
    </section>
  )
}
