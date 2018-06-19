import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

class AddUser extends Component{
  onSubmit(){
    var data =  new FormData(document.querySelector('form'));
      fetch('https://agile-cliffs-83142.herokuapp.com/api/user', {
      method: 'POST',
      body: JSON.stringify({
        first_name: data.get('first_name'),
        last_name: data.get('first_name'),
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
          <h1 className="mt2 pa4">Register</h1>
          <form className="pa4 black-80">
            <div>
              <label className="f6 b db mb2">First Name <span className="normal black-60">(Ex. John)</span></label>
              <input name="first_name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            </div>
            <div>
              <label className="f6 b db mb2">Last Name <span className="normal black-60">(Ex. Snow)</span></label>
              <input name="first_namee" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            </div>
            <div>
              <label className="f6 b db mb2">User <span className="normal black-60">(Ex. John_Snow)</span></label>
              <input name="username" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            </div>
            <div>
              <label className="f6 b db mb2">Password <span className="normal black-60">(Ex. 1234)</span></label>
              <input name="password" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="Password" aria-describedby="name-desc"/>
            </div>
            <div>
              <label className="f6 b db mb2">Re-Password <span className="normal black-60">(Ex. 1234)</span></label>
              <input id="repass" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="Password" aria-describedby="name-desc"/>
            </div>
            <div className="tc">
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib black" onClick={() => this.onSubmit()}>register</a>
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib near-black">cancel</a>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default AddUser;
