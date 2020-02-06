import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import '../components/SEO'
import '../styles/index.scss'
import styl from './index.module.scss'
import Layout from '../components/layout'

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Ubaid Siddiqui</title>
        <meta
          name="description"
          content="Ubaid Siddiqui is a frontend web and android developer based in Indore, India who specializes in developing best performance websites and applications."
        />
				<meta name="keyword" content="Ubaid, Ubaid Siddiqui, ubaid developer, ubaid web developer, ubaid frontend, frontend developer, india, ubaid sid"/>
      </Helmet>
      <Layout>
        <div className={styl.indexContainer}>
          <h1>
            Hello, <br /> I am Ubaid Siddiqui
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
