import React from 'react';

const ShowDetail = ({news}) => {
  return(
    <div className="mt4-ns mw7 center min-vh-100">
      <article className="pa3 pa5-ns">
        <h1 className="f2">{news.title}</h1>
        <img src={`https://robohash.org/${news.id}?set=set4`} className="w-100 f5" alt="Photo of outer space"/>
        <p className="lh-copy">
          {news.datail}
        </p>
        {news.detail}
      </article>
    </div>
  )
}

export default ShowDetail;
