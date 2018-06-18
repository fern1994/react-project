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
    console.log(this.props);
    const { match: { params } } = this.props;
    fetch(`https://agile-cliffs-83142.herokuapp.com/api/news/${params.postId}`)
      .then(res => res.json())
      .then(posts => this.setState({ news: posts[0] }));

  }
  render(){
    const {news} = this.state;
    console.log(news);
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
