import React from 'react';
import logo from '../duck.png'
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return(
    <div className="w-100 fixed top-0 bg-white z-5 shadow-4">
      <nav className="dt w-100 border-box bb b--light-gray pa3 ph5-ns">
        <a className="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
          <img src={logo} className="dib w2 h2 br-100" alt="Site Name" />
        </a>
        <HeaderMenu/>
      </nav>
    </div>
  )
}

export default Header;
