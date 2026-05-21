import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Snowfall from '@components/ui/Snowfall'
import styles from './Layout.module.scss'

export default function Layout() {
  return (
    <>
      <Snowfall />
      <div className={styles.content}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
