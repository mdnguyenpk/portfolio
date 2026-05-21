import { meta } from '@data/meta'
import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <main className={styles.contact}>
      <h1>Get in Touch</h1>
      <p>I&apos;m open to new opportunities. Feel free to reach out.</p>
      <div className={styles.links}>
        <a href={`mailto:${meta.email}`}>{meta.email}</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </main>
  )
}
