import React, { Component } from 'react'
import './App.css';
import Weather from './Component/Weather';
import Form from './Component/Form';
import axios from 'axios';

const APIKEY = "720164f9fdc4dd54dd9475422f8911b3"
export default class App extends Component {
  state = {
    
    temp : '',
    city : '',
    Contry : '',
    pressure : '',
    feels_like : '',
    error : ''
  }

  getWither = async (e) => {
    e.preventDefault()
    const city = e.target.city.value;
    
    const contry = e.target.contry.value
const api = `http://api.openweathermap.org/data/2.5/weather?q=${city},${contry}&appid=${APIKEY}`
    axios.get(api)
    .then((res)=>{
      console.log(res);
        this.setState({
          temp : res.data.main.temp,
          city : res.data.name,
          Contry : res.data.sys.country,
          pressure : res.data.main.pressure,
          feels_like : res.data.main.feels_like,
         
         })
    
    }).catch((err)=>{
      console.log(err);
    })
  }


  shouldComponentUpdate(){
    if(this.state.temp != null){
      return true
    }
    else return false
  }
componentDidMount(){
  alert("wlecom")
}

  render() {
    return (

  

      <div className="wrapper">
       
        <div className="from-continer">
       
    <h1> Get Whether</h1>
    <Form getWither={this.getWither}/>
    <Weather
      temp = {this.state.temp}
      city = {this.state.city}
      Contry = {this.state.contry}
      pressure = {this.state.pressure}
      feels_like = {this.state.feels_like}
  
     />
     </div>
         </div>
    )
  }
}
