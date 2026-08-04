import { meta } from '@data/meta'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Minh Nguyen</p>
      <div className={styles.socials}>
        <a href={`mailto:${meta.email}`}>Email</a>
        <a href={meta.socials.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={meta.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
