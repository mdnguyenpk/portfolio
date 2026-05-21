import { meta } from '@data/meta'
import styles from './About.module.scss'

export default function About() {
  return (
    <main className={styles.about}>
      <h1>About</h1>
      <p>{meta.summary}</p>
      <div className={styles.education}>
        <h2>Education</h2>
        <p>{meta.education.degree}</p>
        <p>{meta.education.school}</p>
      </div>
    </main>
  )
}
