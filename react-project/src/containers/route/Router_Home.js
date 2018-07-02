import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'
import { Switch, Route } from 'react-router-dom'

import Homepage from '../page/Homepage';
import Registerpage from '../page/Registerpage';
import Loginpage from '../page/Loginpage';
import Newspage from '../page/Newspage';

const Router_Home = () => {
  return (
    <Switch>
      <Route path='/home/index' component={Homepage} />
      <Route path='/home/register' component={Registerpage} />
      <Route path='/home/login' component={Loginpage} />
      <Route path='/home/news/:postId' component={Newspage} />
    </Switch>

  )
}


export default Router_Home;
