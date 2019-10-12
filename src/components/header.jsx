import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import * as headerImg from '../assets/header.png'

const Header = ({ siteTitle }) => (
  <header className="text-center">
    <Link to="/">
      <img src={headerImg} alt="cyf" className="w-2/6 m-auto" />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
