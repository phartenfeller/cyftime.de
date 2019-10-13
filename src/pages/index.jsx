import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LinkIcons from '../components/linkIcons'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="antialiased">
        <LinkIcons />
        <About />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
