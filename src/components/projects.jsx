import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Img from 'gatsby-image'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectImage {
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
    <div
      style={{
        background:
          'linear-gradient(180deg, #0E100F 0%, #111615 75%, #192723 100%)',
      }}
    >
      <div
        className="py-6"
        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <h2 className="mx-8 lg:mx-64 text-green-400 text-3xl font-bold mb-6">
          Projects
        </h2>
        <div className="m-auto w-2/3 lg:w-1/3">
          <Link to="/bokassa/">
            <Img
              fluid={data.image.childImageSharp.fluid}
              alt="bokassa-cover"
              className="m-auto shadow-2xl"
            />
          </Link>
          <div className="text-green-100 font-bold text-4xl mt-4">
            Bokassa EP
          </div>
          <Link to="/bokassa/">
            <button
              type="button"
              className="text-green-300 hover:text-500 font-bold focus:outline-none"
            >
              more...
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
