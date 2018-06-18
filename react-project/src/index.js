import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Show from './containers/Show';
import AddNews from './containers/AddNews';
import AddUser from './containers/AddUser';
import 'tachyons';
import { BrowserRouter as Router, Route} from "react-router-dom";


ReactDOM.render(

   <Router>
       <div>
         <Route exact path="/" component={App} />
         <Route path="/news/:postId" component={Show} />
         <Route path="/addNews" component={AddNews} />
        <Route path="/register" component={AddUser} />
      </div>
   </Router>

  , document.getElementById('root'));
