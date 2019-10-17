import React from 'react'
import About from '../components/about'
import Contact from '../components/contact'
import Layout from '../components/layout'
import LinkIcons from '../components/linkIcons'
import Projects from '../components/projects'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Cyf"
        description="Website of rapper cyf. His EP Bokassa is out now. Check it out!"
      />
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
