import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import LoginFormComponent from '../../components/new/LoginFormComponent';
import apiUrl from '../../js/config';

class Loginpage extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      openAlertModal: false,
      alerText: ''
    }

    console.log(this.props);

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
        this.props.history.push("/admin/home");
        // window.location.href = "/admin/home"

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
        <LoginFormComponent onChange={this.handleChange} onClick={this.onLogin}/>

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

export default Loginpage;
