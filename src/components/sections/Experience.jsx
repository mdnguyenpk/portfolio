import { experience } from '@data/experience'
import Carousel from '@components/ui/Carousel'
import { getTenure } from '@utils/tenure'
import styles from './Experience.module.scss'

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        {experience.map((job) => (
          <article key={job.id} className={styles.job}>
            <div className={styles.meta}>
              <p className={styles.company}>
                {job.company}
                {job.website && (
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.companyLink}
                  >
                    Visit site <span className={styles.arrow}>↗</span>
                  </a>
                )}
              </p>
              <span className={styles.period}>{job.period}</span>
              <span className={styles.tenure}>{getTenure(job.period)}</span>
              <span className={styles.location}>{job.location}</span>
            </div>
            <div className={styles.content}>
              <h3 className={styles.role}>{job.role}</h3>
              <Carousel images={job.images} className={styles.carousel} />
              {job.highlights && (
                <ul className={styles.highlights}>
                  {job.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
