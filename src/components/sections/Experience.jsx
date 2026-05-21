import { experience } from '@data/experience'
import styles from './Experience.module.scss'

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        {experience.map((job) => (
          <article key={job.id} className={styles.job}>
            <div className={styles.meta}>
              <span className={styles.period}>{job.period}</span>
              <span className={styles.location}>{job.location}</span>
            </div>
            <div className={styles.content}>
              <h3 className={styles.role}>{job.role}</h3>
              <p className={styles.company}>{job.company}</p>
              <ul className={styles.highlights}>
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
