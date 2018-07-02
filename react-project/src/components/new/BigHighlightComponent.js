import React from 'react';
import FontAwesome from 'react-fontawesome';
import { NavLink } from 'react-router-dom'


const BigHighlightComponent = ({ id, title, detail, user }) => {
  return (
    <NavLink className='bigHilightNews' to={`/home/news/${id}`}>
      <div className='imageNews'>
        <img src='//s.isanook.com/ns/0/ud/1392/6964698/news18.jpg' />
      </div>
      <div className='contentNews'>
        {title}
        post by userId {user}
      </div>
    </NavLink>

  )
}

export default BigHighlightComponent;
