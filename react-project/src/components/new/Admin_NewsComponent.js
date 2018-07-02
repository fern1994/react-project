import React from 'react';
import FontAwesomeIcon from 'react-fontawesome'
import { NavLink } from 'react-router-dom'

import pictest from '../../image/pictest.jpg'
import Admin_HeaderNewsComponent from './Admin_HeaderNewsComponent';

const Admim_NewsComponent = ({ id, title, detail, user, username, del }) => {
 
  return (
    <div className='boxNews'>
      {/* header for manage */}
      <Admin_HeaderNewsComponent id={id} user={user} del={del}/>
      <NavLink className='boxNewsContent' to={`/admin/news/${id}`}>
        <div className='pic'>
          <img src={pictest} />
        </div>
        <div className='content'>
          <h3>{title}</h3>
          post by {username}
        </div>
        {/* <button onClick={() => del(id)}> Del </button> */}
      </NavLink>
    </div>
  )
}

export default Admim_NewsComponent;