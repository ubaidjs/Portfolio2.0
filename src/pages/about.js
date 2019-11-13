import React from 'react'
import Layout from '../components/layout'
import styl from './about.module.scss'

const About = () => {
  return (
    <Layout>
      <div className={styl.aboutContainer}>
        <h3>About Me</h3>
        <p>
          I am still crafting my about paragraph 😐. <br />
          Lorem ipsum dolor sit ametconsectetur adipisicing elit. Dolores
          repellendus fugiat non quae iste pariatur tempora sed ipsam libero,
          exercitationem ipsum qui culpa eum quod vitae repellat tempore ullam
          odit accusantium cupiditate modi recusandae. <br />
          Vitae tempora provident blanditiis saepe, et voluptate assumenda,
          asperiores voluptates cupiditate earum deleniti excepturi enim
          obcaecati!
        </p>
      </div>
    </Layout>
  )
}

export default About
