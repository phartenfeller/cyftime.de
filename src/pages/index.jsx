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
        title="CYF homepage"
        description="Website of rapper CYF. Germany-based Artist, part of '#DEKUBITUS'-trio with producers and long time friends Stapes and Gobi. Member of the 'Water/Gang' artists-collective. His new single Verses is out now, check it out!"
      />
      <div>
        <LinkIcons />
        <Projects />
        <About />
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
