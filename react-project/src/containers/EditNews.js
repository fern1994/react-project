import React,{ Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from 'react-responsive-modal';

class EditNews extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      title:'',
      detail: '',
      openConfirmModal: false,
      openAlertModal: false,
      confirmText: '',
      alerText: ''
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDetailChange = this.onDetailChange.bind(this);
    this.onOpenConfirmModal = this.onOpenConfirmModal.bind(this);
    this.onCloseConfirmModal = this.onCloseConfirmModal.bind(this);
    this.onOpenAlert = this.onOpenAlert.bind(this);
    this.onCloseAlert = this.onCloseAlert.bind(this);
    this.editNews = this.editNews.bind(this);
  }
  onOpenConfirmModal(){
    this.setState({ openConfirmModal: true, confirmText: 'You want to edit news ?' });
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
  componentDidMount(){
    const { match:{ params }} = this.props;
    fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${params.postId}`)
      .then(res => res.json())
      .then(posts => this.setState({ id: posts[0].id, title: posts[0].title, detail: posts[0].detail }));
  }
  onTitleChange(event){
    this.setState({title: event.target.value})
  }
  onDetailChange(event){
    this.setState({detail: event.target.value})
  }
  editNews(){
    this.setState({ openConfirmModal: false });
    var data =  new FormData(document.querySelector('form'));
    // console.log(JSON.stringify({
    //    title: data.get('title'),
    //      detail: data.get('detail'),
    //   }),this.state.id);
      fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${this.state.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: data.get('title'),
        detail: data.get('detail'),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ openAlertModal: true, alerText: 'Success'});
      window.location.href = "/manage"
    })
  }
  render(){
    const { openConfirmModal,openAlertModal,confirmText,alerText } = this.state;
    return(
      <div>
        <Header />
        <div className="mt5 mw7 center min-vh-100">
          <h1 className="mt2 pa4">Edit News</h1>
          <form className="pa4 black-80">
            <div>
              <label className="f6 b db mb2">Title</label>
              <input id="title" name="title" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.onTitleChange} value={this.state.title}/>
            </div>
            <div>
              <label className="f6 b db mb2">Detail</label>
              <textarea id="detail" name="detail" rows="6" className="db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2" onChange={this.onDetailChange} value={this.state.detail}></textarea>
            </div>
            <div className="tc">
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib black" onClick={ this.editNews }>Add</a>
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib near-black" href="/manage">cancel</a>
            </div>
          </form>
        </div>
        <Footer />
        <Modal open={openConfirmModal} onClose={this.onCloseConfirmModal} center>
          <p>Confirm</p>
          <p>{confirmText}</p>
          <button className="f6 link dim br1 ba ph3 pv2 mb2 dib black" onClick={this.editNews}>
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

export default EditNews;
