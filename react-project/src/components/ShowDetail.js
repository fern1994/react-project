import React from 'react';

const ShowDetail = ({news}) => {
  return(
    <div className="mw7 center min-vh-100">
      <article className="pa3 pa5-ns">
        <h1 className="f2">{news.title}</h1>
        <img src={`https://robohash.org/${news.id}?set=set4`} className="w-100 f5" alt="Photo of outer space"/>
        <p className="lh-copy">
          {news.body}
        </p>
        {news.body}
      </article>
    </div>
  )
}

export default ShowDetail;
