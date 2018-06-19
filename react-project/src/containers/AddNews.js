import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

class AddNews extends Component{
  addNews(){
    var data =  new FormData(document.querySelector('form'));
      fetch('https://agile-cliffs-83142.herokuapp.com/api/news', {
      method: 'POST',
      body: JSON.stringify({
        title: data.get('title'),
        detail: data.get('detail'),
        user: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }
  render(){
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
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib black" onClick={ this.addNews }>Add</a>
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib near-black">cancel</a>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AddNews;
