import React, { Component } from 'react'
import FoodImages from './FoodImages'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Food Recipies</h1>
        <FoodImages />
      </div>
    );
  }
}