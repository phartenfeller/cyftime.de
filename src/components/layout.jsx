/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, Link, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-black text-gray-300">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="block sm:inline-block">
            {`©  ${new Date().getFullYear()} Built with `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
          <Link
            to="/datenschutz/"
            className="block sm:inline-block sm:float-right sm:mr-12"
          >
            Datenschutzerklärung
          </Link>
          <Link
            to="/imprint/"
            className="block sm:inline-block sm:float-right sm:mr-12"
          >
            Impressum
          </Link>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
