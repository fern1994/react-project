import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import NewsListComponent from '../../components/new/NewsListComponent';
import HighlightListComponent from '../../components/new/HighlightListComponent';
import apiUrl from '../../js/config';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      big: [],
      small: []
    }
  }
  componentDidMount() {
    // console.log("componentDidMount");
    fetch(`${apiUrl}/api/news`)
      .then(res => res.json())
      .then(posts => this.setState({
        news: [...posts],
        big: [...posts][Object.keys(posts)[Object.keys(posts).length - 1]],
        small: [...posts]
      }));

  }

  render() {
    const { news, big, small } = this.state;
    // console.log(big[0]);
    //bigHighlight: posts[posts.lenght-1], smallHighlight: posts.reverse().splice(1,2)
    // console.log('news',news)
    // console.log('small',small)
    return (
      <div>
      <HighlightListComponent newsHighlight={big} small={small} />
      <h1>ข่าว</h1>
      <NewsListComponent news={news} />
      </div>
    )
  }
}

export default Homepage;
