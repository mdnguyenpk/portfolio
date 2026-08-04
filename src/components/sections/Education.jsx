import { meta } from '@data/meta'
import styles from './Education.module.scss'

export default function Education() {
  return (
    <section className={styles.education}>
      <h2 className={styles.heading}>Education</h2>
      <article className={styles.card}>
        <div className={styles.meta}>
          <p className={styles.school}>{meta.education.school}</p>
          <span className={styles.period}>{meta.education.period}</span>
        </div>
        <div className={styles.content}>
          <h3 className={styles.degree}>{meta.education.degree}</h3>
        </div>
      </article>
    </section>
  )
}
