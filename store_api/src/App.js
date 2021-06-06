import './App.css';
import Products from './Products';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={PageProduct:true}
  }
  handlePage(){
    this.setState({PageProduct:false})
  }
  render() {
    return (
      <div>
        <div className="ShowProduct">
        <h1 className="welcome">Online Shopping</h1>
        <button className="buttonShow"onClick={this.handlePage.bind(this)}>Show products</button>
        </div>
        {this.state.PageProduct==false&& <Products/>}

      </div>
    )
  }
}

