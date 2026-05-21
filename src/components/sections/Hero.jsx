import { meta } from '@data/meta'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Hello, I&apos;m</p>
      <h1 className={styles.name}>{meta.name}</h1>
      <p className={styles.title}>{meta.title}</p>
      <p className={styles.summary}>{meta.summary}</p>
      <div className={styles.cta}>
        <a href="/work" className={styles.btnPrimary}>View My Work</a>
        <a href="/contact" className={styles.btnSecondary}>Get in Touch</a>
      </div>
    </section>
  )
}

