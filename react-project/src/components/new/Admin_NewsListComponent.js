import React from 'react';
import Admim_NewsComponent from './Admin_NewsComponent';

const Admim_NewsListComponent = ({news, onClick, del}) => {
  return (
    <div className='containerBoxNews'>
    {
      news.map((post,i) => {
        return(
          <Admim_NewsComponent
          key={i}
             id={post.id}
             title={post.title}
             detail={post.detail}
             user={post.user}
             username={post.first_name}
             onClick={onClick}
             del={del}
          />
        )
      })
    }
      
    </div>
  )
}

export default Admim_NewsListComponent;