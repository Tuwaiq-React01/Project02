import React, { Component } from 'react'
import Page from './Page'
import './Page.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Page/>
      </div>
    )
  }
}
