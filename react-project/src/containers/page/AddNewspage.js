import React, { Component } from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import Modal from 'react-responsive-modal';

import Admim_LeftNavComponent from '../../components/new/Admin_LeftNavComponent';
import Admin_NewsFormComponent from '../../components/new/Admin_NewsFormComponent';
import apiUrl from '../../js/config'

class EditNewspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      detail: '',
      openConfirmModal: false,
      openAlertModal: false,
      confirmText: '',
      alerText: ''
    }
  }
  onOpenConfirmModal = () => {
    this.setState({ openConfirmModal: true, confirmText: 'You want to edit news ?' });
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
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  }
  componentDidMount(){
    console.log('pppp')
  }
  addNews = () => {
    this.setState({ openConfirmModal: false });
    // var data =  new FormData(document.querySelector('form'));
    fetch(`${apiUrl}/api/news`, {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        detail: this.state.detail,
        user: JSON.parse(localStorage.getItem("userId"))
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (!json.require) {
          this.setState({ openAlertModal: true, alerText: 'Success' });
          window.location.href = "/admin/home";
        } else {
          this.setState({ openAlertModal: true, alerText: 'xx' });
        }
      })
  }
  render() {
    const { openConfirmModal, openAlertModal, confirmText, alerText, id, title, detail, onChange } = this.state;
    console.log(this.state.title);
    return (
      <div>
        <Admin_NewsFormComponent id={id} title={title} detail={detail} onChange={this.handleChange} onClick={this.onOpenConfirmModal}/>
        <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center>
          <p>Confirm</p>
          <div className="fixed-modal">
            <p>{confirmText}</p>
            <p>Title : {this.state.title}</p>
            <p>Detail : {this.state.detail}</p>
          </div>
          <button className="f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={this.addNews}>
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
    );
  }
}

export default EditNewspage;
