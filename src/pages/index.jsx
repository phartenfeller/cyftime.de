import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import LinkIcons from '../components/linkIcons'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

import * as profileImg from '../assets/photo.png'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="antialiased">
        <img src={profileImg} alt="photo" className="m-auto w-3/4" />
        <LinkIcons />
        <About />
        <Projects />
        <Contact />
      </div>

      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
