import { skills } from '@data/skills'
import styles from './Skills.module.scss'

const categories = [
  { label: 'Languages', key: 'languages' },
  { label: 'Frameworks & Libraries', key: 'frameworks' },
  { label: 'Tools & Platforms', key: 'tools' },
  { label: 'Databases', key: 'databases' },
  { label: 'AI Tools', key: 'ai' },
]

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {categories.map(({ label, key }) => (
          <div key={key} className={styles.group}>
            <h3 className={styles.category}>{label}</h3>
            <ul className={styles.tags}>
              {skills[key].map((skill) => (
                <li key={skill} className={styles.tag}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
