import Hero from '@components/sections/Hero'
import Summary from '@components/sections/Summary'
import Experience from '@components/sections/Experience'
import Education from '@components/sections/Education'
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
        <Summary />
        <Experience />
        <Education />
        <Skills />
        {/* <NavCards /> */}
      </div>
    </main>
  )
}
