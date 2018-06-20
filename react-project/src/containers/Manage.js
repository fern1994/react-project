import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import FeedList from '../components/FeedList';

class Manage extends Component{
  constructor(){
    super();
    this.state = {
      news: []
    }
  }
  componentDidMount(){
    const userId = JSON.parse(localStorage.getItem("userId"))
    fetch(`https://agile-cliffs-83142.herokuapp.com/api/user/${userId}/news`)
    .then(res => res.json())
    .then(posts => this.setState({ news: posts }));

  }

  render(){
    return(
      <div>
        <Header />
        <div  className="tc">
        </div>
        <FeedList news={ this.state.news }/>
        <Footer />
      </div>
    )
  }
}

export default Manage;
