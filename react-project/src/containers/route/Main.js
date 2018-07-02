import React, { Component } from 'react';
import App from '../containers/App';
import Show from '../containers/Show';
import AddNews from '../containers/AddNews';
import AddUser from '../containers/AddUser';
import Manage from '../containers/Manage';
import EditNews from '../containers/EditNews';
import Login from '../containers/Login';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => (
    localStorage.getItem("userId")
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
}

class Main extends Component{
  render(){
    return(
      <Router>
          <div>
            <Route exact path="/" component={App}/>
            <Route path="/news/:postId" component={Show}/>
            <PrivateRoute path="/addNews" component={AddNews} />
            <Route path="/register" component={AddUser}/>
            <PrivateRoute path="/editNews/:postId" component={EditNews}/>
            <Route path="/login" component={Login} />
            <PrivateRoute path='/manage' component={Manage} />
         </div>
      </Router>
    )
  }
}

export default Main;
