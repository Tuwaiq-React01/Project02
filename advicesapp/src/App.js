import React, { Component } from 'react'
import axios from "axios"
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      advice:""
    }

  }
  componentDidMount(){
    this.getAdvice();
  }

  shouldComponentUpdate() {
    return true;
  }
 

  getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }
 
  render() {
    return (
      <div className="App" >
        <center >
        <h1 style={{margin:'150px',marginBottom:"-50px",  textShadow: "0 0 5px #FFFF00"}}>API To Generate an Advice To You </h1>
        <div className="card" style={{padding:"50px",margin:'150px',marginTop:"105px",boxShadow: "5px 10px #888888"}}>
       <h5 style={{paddingBottom:"45px"}}>{this.state.advice}</h5> 
       <button style = {{margin:"25px",padding:"-250 statpx"}}className="btn btn-primary" onClick={this.getAdvice}>New Advice</button>
       </div>
       </center>
       </div>
    )
  }
}
