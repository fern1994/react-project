import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import HeaderComponent from '../../components/new/HeaderComponent';
import MenuHeaderComponent from '../../components/new/MenuHeaderComponent';
import Router_Home from '../route/Router_Home';
import '../../style/main.scss'

class TemplateHome extends Component {
  render() {
    return (
      <div className='App'>
        <div className='mainContainner'>
          <div className='containerHome'>

            {/* Header */}
            <HeaderComponent />
            <MenuHeaderComponent />
            <Router_Home />

          </div>
          <div className='footer'>footer</div>
        </div>
      </div>
    )
  }
}

export default TemplateHome;
