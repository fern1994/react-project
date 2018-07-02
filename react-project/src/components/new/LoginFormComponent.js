import React from 'react';

const LoginFormComponent = ({onChange,onClick}) => {
  return (
    <div className='boxNews'>
      <form>
        
        <label>Username</label>
        <input name="username" onChange={onChange}/>
        <label>Password</label>
        <input name="password" onChange={onChange}/>
        <button type="button" onClick={onClick}>submit</button>
      </form>
    </div>
  )
}

export default LoginFormComponent;