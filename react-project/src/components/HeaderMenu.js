import React, {Component} from 'react';

class HeaderMenu extends Component{
  constructor(props){
    super(props);
    this.isLogout = this.isLogout.bind(this);
  }
  isLogout(){
    localStorage.clear()
    window.location.href = "/";
  }
  render(){
    if(localStorage.getItem("userId")){
      return(
        <div className="dtc v-mid w-75 tr">
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="/manage" title="Register">Manage</a>
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="/addNews" title="Manage">AddNews</a>
          <a className="link dim dark-gray f6 f5-ns dib" title="Addnew" onClick={this.isLogout}>Logout</a>
        </div>
      )
    }else{
      return(
        <div className="dtc v-mid w-75 tr">
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="/register" title="Register">Register</a>
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="/login" title="Manage">Login</a>
        </div>
      )
    }
  }
}

export default HeaderMenu;
