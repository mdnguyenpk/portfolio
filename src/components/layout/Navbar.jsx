import { NavLink } from 'react-router-dom'
import StatusBadge from '@components/ui/StatusBadge'
import styles from './Navbar.module.scss'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brandGroup}>
        <span className={styles.brand}>MN</span>
        <StatusBadge />
      </div>
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
