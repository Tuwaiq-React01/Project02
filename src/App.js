import React, { Component } from 'react'
import Joke from './Joke';
import { Card } from 'react-bootstrap';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <Card body>
          <h1>Make Me Laugh!</h1>
          <Joke />
        </Card>
      </div>
    )
  }
}
