import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import axios from 'axios'
import useForm from 'react-hook-form'
import Layout from '../components/layout'

// Social Media Icons
import github from '../../static/github.svg'
import dribbble from '../../static/dribbble.svg'
import twitter from '../../static/twitter.svg'
import instagram from '../../static/instagram.svg'
import linkedin from '../../static/linkedin.svg'

import styl from './contact.module.scss'

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { register, handleSubmit, errors } = useForm()
  const [submit, setSubmit] = useState(false)

  const onSubmit = (data, e) => {
    axios({
      method: 'post',
      url: 'https://getformdata.herokuapp.com',
      data: {
        ...data,
        date: new Date(),
      },
    })

    for (let i = 0; i < 3; i++) {
      e.target.elements[i].value = ''
    }
    setSubmit(true)
    setTimeout(() => {
      setSubmit(false)
    }, 5000)
    console.log('You message has been submitted')
  }

  return (
    <Layout>
      <main>
        <div className={styl.profiles}>
          <div className={styl.profilesItem}>
            <a
              href="https://www.github.com/ubaidjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
              <p>Github</p>
            </a>
          </div>
          <div className={styl.profilesItem}>
            <a
              href="https://www.dribbble.com/ubaidsid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dribbble} alt="dribbble" />
              <p>Dribbble</p>
            </a>
          </div>
          <div className={styl.profilesItem}>
            <a
              href="https://www.twitter.com/ubaidjsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" />
              <p>Twitter</p>
            </a>
          </div>
          <div className={styl.profilesItem}>
            <a
              href="https://www.instagram.com/ubaid.ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
              <p>Instagram</p>
            </a>
          </div>
          <div className={styl.profilesItem}>
            <a
              href="https://www.linkedin.com/in/ubaidsiddiqui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
        <div className={styl.formWrapper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              ref={register({ required: true })}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              ref={register({ required: true })}
            />
            <input
              type="text"
              placeholder="Your message"
              name="message"
              ref={register({ required: true })}
            />
            <input type="submit" value="Send" />
          </form>
          {errors.name && <span>Name missing</span>} <br />
          {errors.email && <span>Email missing</span>} <br />
          {errors.message && <span>Message missing</span>}
          {submit && <span>Message submitted</span>}
        </div>
        <div className={styl.copyright}>
          <p>{`Created by ${data.site.siteMetadata.author}`} &copy; 2019</p>
        </div>
      </main>
    </Layout>
  )
}

export default Contact
