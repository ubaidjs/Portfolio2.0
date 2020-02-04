import React from 'react'
import Layout from '../components/layout'
import styl from './about.module.scss'

const About = () => {
  return (
    <Layout>
      <div className={styl.aboutContainer}>
        <h3>About Me</h3>
        <p>I am frontend web and mobile developer based in India.</p>
      </div>
    </Layout>
  )
}

export default About
