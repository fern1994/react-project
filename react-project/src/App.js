import React, { Component } from 'react'
import logo from './logo.svg'
// import './App.css'
import user from './user.jpg'
import pictest from './pictest.jpg'
import FontAwesomeIcon from 'react-fontawesome'
import './style/main.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='mainContainner'>
          <div className='left'>
            <div className='boxProfile'>
              <div className='picbox'>
                <img src={user} />
              </div>
              <p>username</p>
              <p>LOGOUT</p>
            </div>
            <ul className='menuList'>
              <li className='--active'>
                <a>
                  <FontAwesomeIcon className='super-crazy-colors' size='2x' name='home' />
                  <div>Home</div>
                  </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon className='super-crazy-colors' size='2x' name='newspaper-o' />
                  <div>Control Main</div>
                  </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon className='super-crazy-colors' size='2x' name='pencil' />
                  <div>Create News</div>
                  </a>
              </li>
            </ul>
          </div>
          <div className='right'>
          <div className='head-label'>
                home
              </div>
            <div className='rightContent'>
              
              <div className='containerBoxColor'>
                <div className='boxColor'>
                  <h2>Your News</h2>
                  <p>10 news</p>
                </div>
                <div className='boxColor'>
                  <h2>
                  </h2>
                </div>
              </div>
              <div className='containerBoxNews'>
                <div className='boxNews'>
                  <div className='boxNewsHead'>
                    <FontAwesomeIcon
                      className='super-crazy-colors'
                      name='edit' />
                    <FontAwesomeIcon
                      className='super-crazy-colors'
                      name='times' />
                  </div>
                  <a className='boxNewsContent'>
                    <div className='pic'>
                      <img src={pictest} />
                    </div>
                    <div className='content'>
                      <h3>อาสปาสซูเปอร์ซับ! สเปนปาดเหงื่อไล่ตีโมร็อกโก2ครั้ง2คราฉลุย16ทีม</h3>
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                  </a>
                </div>
              </div>
              <div className='boxNews'>
                <form>
                  <label>title</label>
                  <input type='text'/>
                  <label>detail</label>
                  <textarea />
                </form>
              </div>
            </div>
            <div className='footer'>footer</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
