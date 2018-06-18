import React from 'react';
import logo from '../duck.png'

const Header = () => {
  return(
    <div className="w-100 fixed top-0 bg-white z-5 shadow-4">
      <nav className="dt w-100 border-box bb b--light-gray pa3 ph5-ns">
        <a className="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
          <img src={logo} className="dib w2 h2 br-100" alt="Site Name" />
        </a>
        <div className="dtc v-mid w-75 tr">
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="/register" title="About">Register</a>
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="/show" title="Store">About</a>
          <a className="link dim dark-gray f6 f5-ns dib" href="/addNews" title="Contact">Login</a>
        </div>
      </nav>
    </div>
  )
}

export default Header;
