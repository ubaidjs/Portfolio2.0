import React from 'react'
import { Link } from 'gatsby'
import '../styles/index.scss'
import styl from './index.module.scss'
import Layout from '../components/layout'

const Index = () => {
  return (
    <div>
      <Layout>
        <div className={styl.indexContainer}>
          <h1>
            Hello <br /> I am Ubaid Siddiqui
          </h1>
          <p className={styl.tagLine}>A Frontend Web Developer</p>
          <Link to="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default Index
