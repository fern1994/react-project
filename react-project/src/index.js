import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Show from './containers/Show';
import 'tachyons';
import { BrowserRouter as Router, Route} from "react-router-dom";


ReactDOM.render(

   <Router>
       <div>
     <Route exact path="/" component={App} />
     <Route path="/show/:postId" component={Show} />
      </div>
   </Router>

  , document.getElementById('root'));
