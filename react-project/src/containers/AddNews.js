import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Modal from 'react-responsive-modal';

class AddNews extends Component{
  constructor(){
    super();
    this.state = {
      openConfirmModal: false,
      openAlertModal: false,
      confirmText: '',
      alerText: ''
    }

    this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
    this.onCloseConfirmModal = this.onCloseConfirmModal.bind(this);
    this.onOpenAlert = this.onOpenAlert.bind(this);
    this.onCloseAlert = this.onCloseAlert.bind(this);
    this.addNews  = this.addNews.bind(this);
  }

  onOpenConfirmModal(){
    this.setState({ openConfirmModal: true, confirmText: 'You want to add news ?' });
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

  addNews(){
    this.setState({ openConfirmModal: false });
    var data =  new FormData(document.querySelector('form'));
      fetch('https://agile-cliffs-83142.herokuapp.com/api/news', {
      method: 'POST',
      body: JSON.stringify({
        title: data.get('title'),
        detail: data.get('detail'),
        user: JSON.parse(localStorage.getItem("userId"))
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      if(!json.require){
        this.setState({ openAlertModal: true, alerText: 'Success'});
        window.location.href = "/manage";
      }else{
        this.setState({ openAlertModal: true, alerText: 'xx'});
      }
    })
  }

  render(){
    const { openConfirmModal,openAlertModal,confirmText,alerText } = this.state;
    return(
      <div>
        <Header />
        <div className="mt5 mw7 center min-vh-100">
          <h1 className="mt2 pa4">Add News</h1>
          <form className="pa4 black-80">
            <div>
              <label className="f6 b db mb2">Title</label>
              <input id="title" name="title" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
            </div>
            <div>
              <label className="f6 b db mb2">Detail</label>
              <textarea id="detail" name="detail" rows="6" className="db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2"></textarea>
            </div>
            <div className="tc">
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib black" onClick={this.onOpenConfirmModal}>Add</a>
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib near-black" href="/">cancel</a>
            </div>
          </form>
        </div>
        <Footer />
        <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center>
          <p>Confirm</p>
          <p>{confirmText}</p>
          <button className="f6 link dim br1 ba ph3 pv2 mb2 dib black" onClick={this.addNews}>
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

export default AddNews;
