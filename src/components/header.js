import React from 'react'
import { Link } from 'gatsby'
import styl from './header.module.scss'

const Header = () => {
  return (
    <header className={styl.header}>
      <Link to="/">
        <p className={styl.u}>U.</p>
      </Link>
      <nav>
        <ul className={styl.navList}>
          <li>
            <Link activeClassName={styl.activeLink} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link activeClassName={styl.activeLink} to="/resume">
              Resume
            </Link>
          </li>
          <li>
            <Link activeClassName={styl.activeLink} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link activeClassName={styl.activeLink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
