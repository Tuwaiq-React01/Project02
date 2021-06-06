import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link , BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import TimeZone from './TimeZone'


export default class NavbarHeader extends Component {
    render() {
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <h1 className="navbar-brand" href="#">Weather App</h1>
          <Link  className="nav-link active nv" aria-current="page" to='/'>Home</Link>
          <Link  className="nav-link active nv" aria-current="page" to='/TimeZone'>Time zone</Link>
        </nav>)

    }
}
