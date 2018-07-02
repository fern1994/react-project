import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import 'tachyons';

import './index.css';
// import Main from './containers/Main';
import PrivateRoute from './containers/route/PrivateRoute';
import TemplateHome from './containers/template/TemplateHome';
import TemplateAdmin from './containers/template/TemplateAdmin';

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <div>
        <Route exact path="/" render={() => (
            <Redirect to="/home/index" />
        )} />
        <Route path='/home' component={TemplateHome} />
        <PrivateRoute path='/admin' component={TemplateAdmin} />
      </div>
    </Router>
  </BrowserRouter>
  , document.getElementById('root'));
