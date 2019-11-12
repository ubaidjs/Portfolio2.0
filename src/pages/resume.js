import React from 'react'
import Layout from '../components/layout'
import styl from './resume.module.scss'

const Resume = () => {
  return (
    <Layout>
      <div className={styl.buttonWrapper}>
        <button className={styl.download}>Download Resume</button>
      </div>
    </Layout>
  )
}

export default Resume
