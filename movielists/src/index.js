import './index.css';
import App from './App';
import React from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import List from './List';
import PageNotFound from './PageNotFound'
import {Route,Link,BrowserRouter as Router, Switch} from 'react-router-dom'

ReactDOM.render(
  
  <Router>
    <center>  

    <center><img className="photo" src  = "https://www.hipi.info/wp-content/uploads/2015/07/tom-and-jerry-facebook-cover-01.jpg" alt= ""></img></center> 

        <button type="button" class="btn btn-outline-warning"><Link to= "./">Movie list</Link></button>

<button type="button" class="btn btn-outline-warning"><Link to= "./List">Movie tom and jerry chosen for you!</Link></button>
</center>


     

    
<Switch>
    <Route exact path= '/' component = {App}></Route>    <center><List></List>  </center> 
    <Route  path= '/Users/nadaalotaibi/Desktop/MoviesList/movielist/src/List.js' component = {List}></Route> 
    <Route path= './PageNotFound' PageNotFound= {PageNotFound}></Route>
    </Switch>
    </Router>,
      document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
