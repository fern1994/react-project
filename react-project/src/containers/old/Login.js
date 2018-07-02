import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import Header from '../components/Header';
import Footer from '../components/Footer';
import apiUrl from '../js/config';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      openAlertModal: false,
      alerText: ''
    }

    this.onOpenAlert = this.onOpenAlert.bind(this);
    this.onCloseAlert = this.onCloseAlert.bind(this);
    this.onLogin = this.onLogin.bind(this);

  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name] :  event.target.value })
  }
  onOpenAlert = () => {
    this.setState({ openAlertModal: true });
  }

  onCloseAlert = () => {
    this.setState({ openAlertModal: false });
  }
  onLogin = () => {
    var data =  new FormData(document.querySelector('form'));
      fetch(`${apiUrl}/api/user/auth`, {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      if(!json.msg){
        localStorage.setItem("userId", JSON.stringify(json.id))
        localStorage.setItem("name", JSON.stringify(json.first_name))
        localStorage.setItem("lastname", JSON.stringify(json.last_name))
        this.props.history.push("/manage");

      }else{
        this.setState({ openAlertModal: true, alerText: 'username or password incorrect'});
        console.log(this.props.history);
      }
    })
  }
  render(){
    const { openAlertModal,alerText } = this.state;
    return(
      <div>
        <Header/>
        <div className="mt5 mw7 center min-vh-100">
          <h1 className="mt2 pa4 tc">Login</h1>
          <form className="pa4 black-80">
            <div>
              <label className="f6 b db mb2 w-60 center">Username</label>
              <input name="username" id="username" className="input-reset ba b--black-20 pa2 mb2 db w-60 center" type="text" aria-describedby="name-desc" onChange={this.handleChange}/>
            </div>
            <div>
              <label className="f6 b db mb2 w-60 center">Password</label>
              <input name="password" id="password" className="input-reset ba b--black-20 pa2 mb2 db w-60 center" type="Password" aria-describedby="name-desc" onChange={this.handleChange}/>
            </div>
            <div className="tc">
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={this.onLogin}>login</a>
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib green" href="/">cancel</a>
            </div>
          </form>
        </div>
        <Footer/>
        <Modal open={openAlertModal} onClose={this.onCloseAlert} center>
          <p>Alert</p>
          <div className="fixed-modal">
            <p>{alerText}</p>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Login;
