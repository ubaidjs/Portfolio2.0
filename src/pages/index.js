import React from 'react'
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
          <p>A Frontend Web Developer</p>
          <button>Get in touch</button>
        </div>
      </Layout>
    </div>
  )
}

export default Index
