import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Minh Nguyen</p>
      <div className={styles.socials}>
        <a href="mailto:mdnguyenpk@gmail.com">Email</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
