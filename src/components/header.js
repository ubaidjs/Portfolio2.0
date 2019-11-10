import React from 'react'
import { Link } from 'gatsby'
import styl from './header.module.scss'

const Header = () => {
  return (
    <header className={styl.header}>
      <Link to="/">
        <p className={styl.u}>U.</p>
      </Link>
      <div className={styl.line}></div>
      <nav>
        <ul className={styl.navList}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
