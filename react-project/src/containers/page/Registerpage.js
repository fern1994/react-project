import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import RegisterFormComponent from '../../components/new/RegisterFormComponent';
import apiUrl from '../../js/config';

class Registerpage extends Component{
  constructor(){
    super();
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      repassword: '',
      openConfirmModal: false,
      openAlertModal: false,
      confirmText: '',
      alerText: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name] :  event.target.value })
  }

  onOpenConfirmModal = () => {
    this.setState({ openConfirmModal: true, confirmText: 'You want to register ?' });
  }

  onCloseConfirmModal = () => {
    this.setState({ openConfirmModal: false });
  }

  onOpenAlert = () => {
    this.setState({ openAlertModal: true });
  }

  onCloseAlert = () => {
    this.setState({ openAlertModal: false });
  }

  checkKeypress = (event) => {
    let check = false;
    let ew = event.charCode;
    if(48 <= ew && ew <= 57){
      check = true;
    }
    if(65 <= ew && ew <= 90){
      check = true;
    }
    if(97 <= ew && ew <= 122){
      check = true;
    }
    if(check === false){
      event.preventDefault();
    }
  }

  onSubmit = () => {
    this.setState({ openConfirmModal: false });
    if(this.state.password === this.state.repassword){
        fetch(`${apiUrl}/api/user`, {
        method: 'POST',
        body: JSON.stringify({
          first_name: this.state.firstname,
          last_name: this.state.lastname,
          username: this.state.username,
          password: this.state.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json =>{
        if(!json.require){
          this.setState({ openAlertModal: true, alerText: 'Success'});
          this.props.history.push("/home/login");
          // window.location.href = "/login";
        }else{
          this.setState({ openAlertModal: true, alerText: 'Please fill user information'});

          // alert("please fill user information");
        }
      })
    }else{
      this.setState({ openAlertModal: true, alerText: 'repassword incorrect'});
    }
  }

  render(){
    const { openConfirmModal,openAlertModal,confirmText,alerText } = this.state;
    return(
      <div>
        <RegisterFormComponent onChange={this.handleChange} onClick={this.onOpenConfirmModal} onKeyPress={this.checkKeypress}/>
        <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center>
          <p>Confirm</p>
          <div className="fixed-modal">
          <p>{confirmText}</p>
            <p>Firstname : {this.state.firstname}</p>
            <p>Lastname : {this.state.lastname}</p>
            <p>Username : {this.state.username}</p>
          </div>
          <button className="f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={this.onSubmit}>
            Yes
          </button>
        </Modal>
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
export default Registerpage;
