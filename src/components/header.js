import React from 'react'
import styl from './header.module.scss'

const Header = () => {
  return (
    <header className={styl.header}>
      <p className={styl.u}>U.</p>
      <nav>
        <ul className={styl.navList}>
          <li>About</li>
          <li>Resume</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
