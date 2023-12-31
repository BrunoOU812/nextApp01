import React from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'
export default function Navigation() {
  const links = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Posts', route: '/posts' }
  ]
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => {
            return (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
