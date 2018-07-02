import React, { Component } from 'react';

import pictest from '../../image/pictest.jpg'
import apiUrl from '../../js/config';

class Newspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }
  componentDidMount() {
    console.log(this.props);
    const { match: { params } } = this.props;
    fetch(`${apiUrl}/api/news/${params.postId}`)
      .then(res => res.json())
      .then(posts => this.setState({ news: posts[0] }));

  }
  render() {
    const { news } = this.state;
    return (
      <div className='showNewsContainer'>
        <div className='showNews'>
          <div className='newsTitle'>
            <h2>
              {news.title}
            </h2>
          </div>
          <div className='newsContent'>
            <img src={pictest} />
          </div>
          <div className='newsContent'>
            {news.detail}
        </div>
        </div>
      </div>
    )
  }
}

export default Newspage;