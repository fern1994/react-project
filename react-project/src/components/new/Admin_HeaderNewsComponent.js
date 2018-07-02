import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'
import Modal from 'react-responsive-modal';

class Admin_HeaderNewsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      user: props.user,
      openConfirmModal: false,
      openAlertModal: false,
      confirmText: '',
      alerText: ''
    }
  }

  onOpenConfirmModal = () => {
    this.setState({ openConfirmModal: true, confirmText: 'You want to delete news ?' });
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

  render() {
    const { id, openConfirmModal, openAlertModal, confirmText, alerText } = this.state;
    if (JSON.parse(localStorage.getItem("userId")) === this.state.user) {
      return (
        <div className='boxNewsHead'>
          <a href={`/admin/editNews/${id}`}>
            <FontAwesomeIcon
              className='super-crazy-colors'
              name='edit' />
          </a>
          <a onClick={this.onOpenConfirmModal}>
            <FontAwesomeIcon
              className='super-crazy-colors'
              name='times' />
          </a>
          <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center>
            <p>Confirm</p>
            <div className="fixed-modal">
              <p>{confirmText}</p>
            </div>
            <button className="f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={() => this.props.del(id)}>
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
    }else{
      return('');
    }
  }
}

export default Admin_HeaderNewsComponent;