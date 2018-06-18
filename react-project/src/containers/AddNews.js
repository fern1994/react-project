import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

class AddNews extends Component{
  render(){
    return(
      <div>
        <Header />
        <div className="mt5 mw7 center min-vh-100">
          <h1 className="mt2 pa4">Add News</h1>
          <form id="user" className="pa4 black-80">
            <div>
              <label className="f6 b db mb2">Title</label>
              <input name="firstName" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            </div>
            <div>
              <label className="f6 b db mb2">Detail</label>
              <input name="lastName" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
            </div>
            <div className="tc">
              <a className="ma2 f6 link dim br1 ba ph3 pv2 mb2 dib black" onClick={() => this.onSubmit()}>register</a>
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
