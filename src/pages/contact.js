import React from 'react'
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
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    axios({
      method: 'post',
      url: 'https://getformdata.herokuapp.com',
      data: data,
    })
    console.log('You message has been submitted')
  }

  return (
    <Layout>
      <main>
        <div className={styl.profiles}>
          <div className={styl.profilesItem}>
            <a
              href="https://www.github.com/ubaid1010"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
              <p>Github</p>
            </a>
          </div>
          <div className={styl.profilesItem}>
            <a
              href="https://www.github.com/ubaid1010"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dribbble} alt="dribbble" />
              <p>Dribbble</p>
            </a>
          </div>
          <div className={styl.profilesItem}>
            <a
              href="https://www.twitter.com/ubaid_design"
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
              href="https://www.github.com/ubaid1010"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
        <div className={styl.formWrapper}>
          <form
            action="https://getformdata.herokuapp.com"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
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
        </div>
      </main>
    </Layout>
  )
}

export default Contact
