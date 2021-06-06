import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';
// import 'weather-icons/css/weather-icons.css';
import axios from 'axios';
import Location from './Location';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
    }
    this.WeatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
    this.getWeather = this.getWeather.bind(this);
  }
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: this.WeatherIcon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.WeatherIcon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: this.WeatherIcon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.WeatherIcon.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.WeatherIcon.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.WeatherIcon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.WeatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.WeatherIcon.Clouds });
    }
  }
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.city.value
    const country = event.target.country.value
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&id=2172797&appid=8fe76c1e3d80c9fc95bac058671c0f52`;
    if (city && country) {
      axios.get(API).then((response) => {
        this.get_WeatherIcon(this.WeatherIcon, response.data.weather[0].id)
        console.log("response", this.state.data);
        this.setState({
          data: response.data,
          city: `${response.data.name},${response.data.sys.country}`,
          //country: response.data.sys.country,
          celsius: this.calCelsius(response.data.main.temp),
          temp_max: this.calCelsius(response.data.main.temp_max),
          temp_min: this.calCelsius(response.data.main.temp_min),
          description: response.data.weather[0].description,
          error: false
        })

      }).catch((error) => {
        console.log("error", error);
      })
    }
    else {
      this.setState({
        error: true
      })
    }
  }
  shouldComponentUpdate(){
    if(this.state.celsius != null)
    {
      return true;
    }
    else 
    {
      return false;
    }
  }
componentDidMount(){
     alert("Please enter the city and country to get the weather!");
}
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
  render() {
    return (
      <div>
        <h1>Weather App</h1><br/>
        <Location loadWeather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          WeatherIcon={this.state.icon}
          celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description} />
      </div>
    )
  }
}