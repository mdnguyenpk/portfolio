import styles from './Sandbox.module.scss'

export default function Sandbox() {
  return (
    <main className={styles.sandbox}>
      <p className={styles.eyebrow}>Coming Soon</p>
      <h1 className={styles.heading}>Sandbox</h1>
      <p className={styles.sub}>
        Experiments, prototypes, and creative side projects live here.
        Check back soon.
      </p>
      <a href="/" className={styles.back}>← Back to Home</a>
    </main>
  )
}
