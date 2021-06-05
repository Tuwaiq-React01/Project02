import React, { Component } from 'react'
import Header from './components/Header.js';
import ContentBody from './components/ContentBody'
import './index.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hue : 1
    };
    this.changeHue = this.changeHue.bind(this);
  }
  componentDidMount(){
    window.setTimeout(this.changeHue(), 500)
  }
  changeHue(){
    this.setState({
      hue : this.state.hue + 1
    });
    window.setTimeout(this.changeHue, 500)
  }
  render() {
    return (
      <div style={{background: `linear-gradient(hsl(${this.state.hue},80%, 90%),white)`}}>
        <Header/>
        <ContentBody/>
      </div>
    )
  }
}
