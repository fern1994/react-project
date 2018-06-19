import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

class Login extends Component{
  constructor(){
    super();
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin(){
    var data =  new FormData(document.querySelector('form'));
      fetch('https://agile-cliffs-83142.herokuapp.com/api/user/auth', {
      method: 'POST',
      body: JSON.stringify({
        username: data.get('username'),
        password: data.get('password'),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }
  render(){
    return(
      <div>
        <Header/>
        <div className="mt5 mw7 center min-vh-100">
          <h1 className="mt2 pa4 tc">Login</h1>
          <form className="pa4 black-80">
            <div>
              <label className="f6 b db mb2 w-60 center">Username</label>
              <input name="username" id="username" className="input-reset ba b--black-20 pa2 mb2 db w-60 center" type="text" aria-describedby="name-desc"/>
            </div>
            <div>
              <label className="f6 b db mb2 w-60 center">Password</label>
              <input name="password" id="password" className="input-reset ba b--black-20 pa2 mb2 db w-60 center" type="Password" aria-describedby="name-desc"/>
            </div>
            <div className="tc">
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib black" onClick={this.onLogin}>login</a>
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib near-black">cancel</a>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Login;
