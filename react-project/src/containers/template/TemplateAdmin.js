import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'

import '../../style/main.scss'
import Admim_LeftNavComponent from '../../components/new/Admin_LeftNavComponent';
import Router_Admin from '../route/Router_Admin'

class TemplateAdmin extends Component {
  render() {
    return (
      <div className='App'>
        <div className='mainContainner'>

          {/* leftNav */}
          <Admim_LeftNavComponent />

          <div className='right'>
            <div className='head-label'>
              home
            </div>
            <div className='rightContent'>
             <Router_Admin/>
            </div>
            <div className='footer'>footer</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TemplateAdmin;
