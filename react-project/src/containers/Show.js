import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import ShowDetail from '../components/ShowDetail';

class Show extends Component{
  constructor(props){
    super(props);
    this.state = {
      news: []
    }
  }
  componentDidMount(){
    const { match: { params } } = this.props;
    fetch(`https://jsonplaceholder.typicode.com/posts/${ params.postId }`)
      .then(res => res.json())
      .then(posts => this.setState({ news: posts }));
  }
  render(){
    const {news} = this.state;
    return(
      <div>
        <Header />
        <ShowDetail news={ news }/>
        <Footer />
      </div>
    )
  }
}

export default Show;
