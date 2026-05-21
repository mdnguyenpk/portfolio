import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.brand}>MN</span>
      <ul className={styles.links}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end className={({ isActive }) => isActive ? styles.active : ''}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
