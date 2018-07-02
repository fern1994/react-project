import React, {Component} from 'react';
import Modal from 'react-responsive-modal';

class ButtonManage extends Component{
  constructor(props){
    super(props);
    this.state = {
      id : props.postId,
      user: props.userId,
      openConfirmModal: false,
      openAlertModal: false,
      confirmText: '',
      alerText: ''
    }
    this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
    this.onCloseConfirmModal = this.onCloseConfirmModal.bind(this);
    this.onOpenAlert = this.onOpenAlert.bind(this);
    this.onCloseAlert = this.onCloseAlert.bind(this);
    this.onDel = this.onDel.bind(this);
  }

  onOpenConfirmModal(){
    this.setState({ openConfirmModal: true, confirmText: 'You want to delete news ?' });
  }

  onCloseConfirmModal(){
    this.setState({ openConfirmModal: false });
  }

  onOpenAlert(){
    this.setState({ openAlertModal: true });
  }

  onCloseAlert(){
    this.setState({ openAlertModal: false });
  }

  onDel(){
    this.setState({ openConfirmModal: false });
    fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${this.state.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      if(!json.require){
        this.setState({ openAlertModal: true, alerText: 'Success'});
        window.location.reload()
      }else{
        this.setState({ openAlertModal: true, alerText: 'Error'});
      }
    })
  }

  render(){
    const { openConfirmModal,openAlertModal,confirmText,alerText } = this.state;
    if(JSON.parse(localStorage.getItem("userId")) === this.state.user){
      return(
      <div className="w-100 pt2 tr pv3">
        <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib green" href={`/editNews/${this.state.id}`}>edit</a>
        <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={this.onOpenConfirmModal}>delete</a>
        <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center>
          <p>Confirm</p>
          <p>{confirmText}</p>
          <button className="f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={this.onDel}>
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
      return('')
    }
  }
}

export default ButtonManage;
