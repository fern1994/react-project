import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'
import { NavLink } from 'react-router-dom'

import newsLogo from '../../image/newsLogo.png';

const HeaderComponent = () => {
  return (
    <div className='containerHomeHeader'>

      {/* header */}
      <div className='homeHeaderBox'>
        <input className='search' type='text' placeholder='ค้นหา' />
      </div>
      <div className='homeHeaderBox --itemCenter'>
        <img src={newsLogo} />
      </div>
      <div className='homeHeaderBox --itemLeft'>
        <div>
          <NavLink to='/home/login' activeClassName="--active">
            <FontAwesomeIcon className='super-crazy-colors' name='sign-in' />
          </NavLink>
          <NavLink to='/home/register' activeClassName="--active">
            <FontAwesomeIcon className='super-crazy-colors' name='user-plus' />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent;
