import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => (
    localStorage.getItem("userId")
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/home/login',
          state: { from: props.location }
        }} />
  )} />
}

export default PrivateRoute;