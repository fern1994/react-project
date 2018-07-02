import React from 'react';

const Admin_NewsFormComponent = ({id,title,detail,onChange,onClick}) => {
  return (
    <div className='boxNews'>
      <form>
        <label>title</label>
        <input name="title" type='text' value={title} onChange={onChange}/>
        <label>detail</label>
        <textarea name="detail" value={detail} onChange={onChange}/>
        <button type="button" onClick={onClick}>submit</button>
      </form>
    </div>
  )
}

export default Admin_NewsFormComponent;