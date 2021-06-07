import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FoodList from './components/FoodList'
import Food from './components/Food'
class App extends Component {
  render() {
    return (
      <div>

<div class="container">
  <div class="row">
    <div class="col align-self-start">
    </div>
    <div class="col align-self-center">
    <h1> Recipe Search </h1>    </div>
    <div class="col align-self-end">
    </div>
  </div>
</div>
        
        {/* <FoodList /> */}
        <Food />

      </div>
    );
  }
}

export default App;