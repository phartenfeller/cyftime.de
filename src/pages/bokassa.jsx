import React from 'react'

import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import ProjectAvailable from '../components/projectAvailable'

const Bokassa = () => {
  const data = useStaticQuery(graphql`
    query BokassaCover {
      image: file(relativePath: { eq: "project-bokassa.jpg" }) {
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
      <SEO title="Bokassa" />
      <div
        className="pb-32"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #091914 100%)',
        }}
      >
        <div className="mx-8">
          <h1 className="text-4xl text-bold">Bokassa</h1>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="bokassa-cover"
            className="m-auto shadow-2xl"
          />
          <ProjectAvailable />
        </div>
      </div>
    </Layout>
  )
}

export default Bokassa
