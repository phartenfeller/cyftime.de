import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderImage {
      image: file(relativePath: { eq: "cyf_logo.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 387, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className="text-center">
      <Link to="/">
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="cyf logo"
          className="w-2/6 m-auto lg:w-64"
        />
        {/* <img src={headerImg} alt="cyf" className="w-2/6 m-auto" /> */}
      </Link>
    </header>
  )
}

export default Header
