import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import FeedList from '../components/FeedList'

class App extends Component{
  constructor(){
    super();
    this.state = {
      news : []
    }
  }
  componentDidMount(){
    console.log("componentDidMount");
    fetch('https://agile-cliffs-83142.herokuapp.com/api/news')
      .then(res => res.json())
      .then(posts => this.setState({ news: posts }));
  }

  render(){
    const {news} = this.state;
    return(
      <div>
        <Header />
        <div  className="tc">
          {/* <h1>React project</h1> */}
        </div>
        <FeedList news={ news }/>
        <Footer />
      </div>
    )
  }
}

export default App;
