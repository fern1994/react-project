import React, { Component } from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import Modal from 'react-responsive-modal';
import _ from 'lodash';

import Admim_NewsListComponent from '../../components/new/Admin_NewsListComponent';
import apiUrl from '../../js/config';



class Adminpage extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      users:[],
    }
    this.fetchApi = this.fetchApi.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
    this.deleteNew = this.deleteNew.bind(this);
  }
  fetchApi() {
    fetch(`${apiUrl}/api/news`)
      .then(res => res.json())
      .then(posts => this.setState({
        news: [...posts],
      }));
  }
  fetchUser(){
    fetch(`${apiUrl}/api/user`)
      .then(res => res.json())
      .then(posts => this.setState({
        users: [...posts],
      }));
  }
  deleteNew(id) {
    fetch(`${apiUrl}/api/news/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => {
        if (!json.require) {
          // this.setState({ openAlertModal: true, alerText: 'Success' });
          this.fetchApi();
        } else {
          this.setState({ openAlertModal: true, alerText: 'Error' });
        }
      })
  }
  componentDidMount() {
    this.fetchApi();
    this.fetchUser();
  }
  render() {
    const { news,users } = this.state;
    const margelist = _.map(news, function(x){
      return _.extend(x, _.find(users, { id: x.user }));
      
  });
  console.log('margelist',margelist)
    return (
      <Admim_NewsListComponent news={margelist} del={this.deleteNew} />
    );
  }
}

export default Adminpage;
