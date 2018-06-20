import React,{ Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

class EditNews extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      title:'',
      detail: '',
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDetailChange = this.onDetailChange.bind(this);
    this.editNews = this.editNews.bind(this);
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
      alert("success"); 
      window.location.href = "/manage"
    })
  }
  render(){
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
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib near-black">cancel</a>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default EditNews;
