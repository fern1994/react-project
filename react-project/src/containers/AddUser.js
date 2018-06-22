import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Modal from 'react-responsive-modal';

class AddUser extends Component{
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
        fetch('https://agile-cliffs-83142.herokuapp.com/api/user', {
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
          window.location.href = "/login";
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
        <Header/>
        <div className="mt5 mw7 center min-vh-100">
          <h1 className="mt2 pa4">Register</h1>
          <form className="pa4 black-80">
            <div>
              <label className="f6 b db mb2">First Name <span className="normal black-60">(Ex. John)</span></label>
              <input name="firstname" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={this.handleChange}/>
            </div>
            <div>
              <label className="f6 b db mb2">Last Name <span className="normal black-60">(Ex. Snow)</span></label>
              <input name="lastname" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={this.handleChange}/>
            </div>
            <div>
              <label className="f6 b db mb2">User <span className="normal black-60">(Ex. John_Snow)</span></label>
              <input ref="user" name="username" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onKeyPress={this.checkKeypress} onChange={this.handleChange}/>
            </div>
            <div>
              <label className="f6 b db mb2">Password <span className="normal black-60">(Ex. 1234)</span></label>
              <input name="password" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="Password" aria-describedby="name-desc" onKeyPress={this.checkKeypress} onChange={this.handleChange}/>
            </div>
            <div>
              <label className="f6 b db mb2">Re-Password <span className="normal black-60">(Ex. 1234)</span></label>
              <input id="repass" name="repassword" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="Password" aria-describedby="name-desc" onKeyPress={this.checkKeypress} onChange={this.handleChange}/>
            </div>
            <div className="tc">
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={this.onOpenConfirmModal}>register</a>
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib green" href="/">cancel</a>
            </div>
          </form>
        </div>
        <Footer/>
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
export default AddUser;
