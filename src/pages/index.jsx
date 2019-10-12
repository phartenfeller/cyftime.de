import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import LinkIcons from '../components/linkIcons'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ProfileImage {
      image: file(relativePath: { eq: "photo.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="antialiased">
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="photo"
          className="m-auto w-3/4"
        />
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
