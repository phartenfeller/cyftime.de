import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectImage {
      image: file(relativePath: { eq: "cyf_bokassa_ep_cover.jpg" }) {
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
    <div>
      <hr className="mx-10 border-opacity-16 my-8" />
      <div style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <h2 className="mx-8 lg:mx-64 text-green-200 text-3xl font-bold mb-8">
          Projects
        </h2>
        <Link to="/bokassa/">
          <div className="m-auto mx-12 rounded-xl shadow-xl bg-opacity-10 pb-6">
            <div className="text-gray-300 text-3xl pt-3 pl-5">Bokassa</div>
            <Img
              fluid={data.image.childImageSharp.fluid}
              alt="cyf bokassa ep cover"
              className="mx-6 rounded-xl"
            />
          </div>
        </Link>
        <div className="text-center mt-1">
          <svg
            className="w-2 h-2 mx-2 inline-block"
            viewBox="0 0 13 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6.5" cy="6.5" r="5.5" fill="white" fillOpacity="0.33" />
          </svg>
          <svg
            className="w-2 h-2 mx-2 inline-block"
            viewBox="0 0 13 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6.5" cy="6.5" r="5.5" fill="white" fillOpacity="0.17" />
          </svg>
          <svg
            className="w-2 h-2 mx-2 inline-block"
            viewBox="0 0 13 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6.5" cy="6.5" r="5.5" fill="white" fillOpacity="0.17" />
          </svg>
        </div>

        <div className="text-center mt-3 mb-16">
          <Link to="/projects/">
            <button
              type="button"
              className="text-white bg-green-600 tracking-wide rounded-xl py-1 px-3 hover:text-500 font-bold focus:outline-none"
            >
              All Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
