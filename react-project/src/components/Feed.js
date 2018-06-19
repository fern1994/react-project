import React from 'react';
import FontAwesome from 'react-fontawesome';
import ButtonManage from './ButtonMange';

const Feed = ({id,title,detail,user}) => {
  return(
    <article className="bt bb b--black-10">
      <a className="db pv4 ph3 ph0-l no-underline black dim" href={`/news/${id}`}>
        {/* <div className="flex flex-column tr">
          <FontAwesome className="" name='rocket'/>
        </div> */}
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={`https://robohash.org/${id}?set=set4&size=200x200`} className="db" alt="Photo of a dimly lit room with a computer interface terminal." />
          </div>
          <div className="w-100 w-60-ns pl3-ns">
            <h1 className="f3 fw1 baskerville mt0 lh-title">{title}</h1>
            {/* <p className="f6 f5-l lh-copy">
              { detail }
            </p> */}
            <p className="f6 lh-copy mv0">By userId {user}</p>
          </div>
        </div>
      </a>
      <ButtonManage postId={id}/>
    </article>
  )
}

export default Feed;
