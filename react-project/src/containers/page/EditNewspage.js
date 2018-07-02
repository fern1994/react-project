import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import FontAwesomeIcon from 'react-fontawesome'

import Admim_LeftNavComponent from '../../components/new/Admin_LeftNavComponent';
import Admin_NewsFormComponent from '../../components/new/Admin_NewsFormComponent';
import apiUrl from '../../js/config';

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
  componentDidMount() {
    const { match: { params } } = this.props;
    fetch(`${apiUrl}/${params.postId}`)
      .then(res => res.json())
      .then(posts => this.setState({ id: posts[0].id, title: posts[0].title, detail: posts[0].detail }));
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  }
  editNews = () => {
    this.setState({ openConfirmModal: false });
    fetch(`${apiUrl}/${this.state.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: this.state.title,
        detail: this.state.detail,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ openAlertModal: true, alerText: 'Success' });
        this.props.history.push("/admin/home");
        // window.location.href = "/admin/home"
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
          <button className="f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={this.editNews}>
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
