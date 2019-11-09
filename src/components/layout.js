import React from 'react'
import Header from '../components/header'
import styl from './layout.module.scss'

const Layout = props => {
  return (
    <div className={styl.container}>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
