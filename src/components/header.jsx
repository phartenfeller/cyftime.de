import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/cyf_logo.svg'

let isIE
if (
  typeof window !== 'undefined' &&
  window &&
  window.navigator &&
  window.navigator.userAgent
) {
  const ua = window.navigator.userAgent
  isIE = /MSIE|Trident/.test(ua)
} else {
  isIE = false
}

const Header = () => {
  return (
    <header className="text-center">
      {isIE ? (
        <div className="bg-yellow-400 text-yellow-800 text-lg">
          Internet Explorer is not supported! Please use a modern browser.
        </div>
      ) : (
        undefined
      )}
      <Link to="/">
        <img
          src={logo}
          alt="cyf logo"
          className="w-2/6 m-auto md:w-3/12 lg:w-2/12 xl:w-48"
        />
      </Link>
    </header>
  )
}

export default Header
