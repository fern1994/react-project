import React from 'react';
import { NavLink } from 'react-router-dom'

const NewsComponent = ({ id, title, detail, user }) => {
  return (
    <NavLink className='news' to={`/home/news/${id}`}>
      <div className='imgNews'>
        <img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
      </div>
      <div className='contentNews'>
        {title}
        By userId {user}
      </div>
    </NavLink>

  )
}

export default NewsComponent;
