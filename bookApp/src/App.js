import React, { Component } from 'react'
import Headers from "./components/Headers"
import Books from "./components/Books"
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Books/>
      </div>
    )
  }
}
