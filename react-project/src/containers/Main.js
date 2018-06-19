import React, { Component } from 'react';
import App from '../containers/App';
import Show from '../containers/Show';
import AddNews from '../containers/AddNews';
import AddUser from '../containers/AddUser';
import Manage from '../containers/Manage';
import EditNews from '../containers/EditNews';
import Login from '../containers/Login';
import { BrowserRouter as Router, Route} from "react-router-dom";

class Main extends Component{
  render(){
    return(
      <Router>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/news/:postId" component={Show} />
            <Route path="/addNews" component={AddNews} />
            <Route path="/register" component={AddUser} />
            <Route path="/manage" component={Manage} />
            <Route path="/editNews/:postId" component={EditNews} />
            <Route path="/login" component={Login} />
         </div>
      </Router>
    )
  }
}

export default Main;
