import React from 'react';
import NewsComponent from './NewsComponent';

const NewsListComponent = ({ news }) => {
  console.log('news',news);
  return (
    <div className='containerNews'>
      <div className='otherNews'>
      {
        news.map((post, i) => {
          return(
            <NewsComponent 
            key={i}
             id={post.id}
             title={post.title}
             detail={post.detail}
             user={post.user}
            />
          )
        })
      }
      </div>
    </div>
  )
}

export default NewsListComponent;
