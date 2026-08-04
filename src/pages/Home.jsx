import Hero from '@components/sections/Hero'
import Experience from '@components/sections/Experience'
import Skills from '@components/sections/Skills'
import NavCards from '@components/sections/NavCards'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.left}>
        <Hero />
      </div>
      <div className={styles.right}>
        <Experience />
        <Skills />
        <NavCards />
      </div>
    </main>
  )
}
