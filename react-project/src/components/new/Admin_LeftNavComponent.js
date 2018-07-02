import React from 'react';
import { NavLink } from 'react-router-dom'
import FontAwesomeIcon from 'react-fontawesome'

import user from '../../image/user.jpg'

const Admim_LeftNavComponent = () => {
  return (
    <div className='left'>
      <div className='boxProfile'>
        <div className='picbox'>
          <img src={user} />
        </div>
        <p>username</p>
        <p>LOGOUT</p>
      </div>
      <ul className='menuList'>

        <li>
          <NavLink to='/admin/home'  activeClassName="--active">
            <FontAwesomeIcon className='super-crazy-colors' size='2x' name='home' />
            <div>Home</div>
          </NavLink>
        </li>

        <li className=''>
          <NavLink to='/admin/control' activeClassName="--active">
          <FontAwesomeIcon className='super-crazy-colors' size='2x' name='newspaper-o' />
            <div>Control Main</div>
          </NavLink>
        </li>

        <li className=''>
          <NavLink to='/admin/addNews' activeClassName="--active">
          <FontAwesomeIcon className='super-crazy-colors' size='2x' name='pencil' />
            <div>Create News</div>
          </NavLink>
        </li>

        
      </ul>
    </div>
  )
}

export default Admim_LeftNavComponent;