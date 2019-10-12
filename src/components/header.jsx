import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderImage {
      image: file(relativePath: { eq: "logo.jpg" }) {
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
          alt="cyf"
          className="w-2/6 m-auto"
        />
        {/* <img src={headerImg} alt="cyf" className="w-2/6 m-auto" /> */}
      </Link>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
