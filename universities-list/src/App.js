import React, { Component } from 'react'
import axios from 'axios'
import University from './University';
import"./App.css"
export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      universities : []
    }
  }

  componentDidMount(){
    this.getData()
  }
  getData(){
    axios
    .get("http://universities.hipolabs.com/search?country=United+States")
    .then((response) =>
    
     this.setState({universities:response.data}));
    
  }
  shouldComponentUpdate(){
    return true;
  }
  render() {

    return (
      <center>
       <h1>University List</h1>
      <div className="App">
        {this.state.universities.map((university)=>(
          <University name={university.name} country={university.country} webPage={university.web_pages[0]}/>
        ))}
     
      </div>
      </center>
    )
  }
}
