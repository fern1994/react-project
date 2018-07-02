import React from 'react';

const RegisterFormComponent = ({onChange,onClick,onKeyPress}) => {
  return (
    <div className='boxNews'>
      <form>
        <label>FirstName</label>
        <input name="firstname" type='text' onChange={onChange}/>
        <label>LastName</label>
        <input name="lastname" onChange={onChange}/>
        <label>Username</label>
        <input name="username" onChange={onChange} onKeyPress={onKeyPress}/>
        <label>Password</label>
        <input name="password" onChange={onChange} onKeyPress={onKeyPress}/>
        <label>RePassword</label>
        <input name="repassword" onChange={onChange}/> 
        <button type="button" onClick={onClick}>submit</button>
      </form>
    </div>
  )
}

export default RegisterFormComponent;