import React from 'react';
import Feed from './Feed';

const FeedList = ({news}) => {
  return(
    <div className="mt5 pt2">
      <section className="mw7 center avenir">
       <h2 className="baskerville fw1 ph3 ph0-l">News</h2>
       {
         news.map((post, i) => {
           return(
           <Feed
             key={i}
             id={post.id}
             title={post.title}
             detail={post.detail}
             user={post.user}
            />
          );
        })
       }
      </section>
    </div>
  )
}

export default FeedList;
