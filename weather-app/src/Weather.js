import React, { Component } from 'react'
import 'weather-icons/css/weather-icons.css';
import './Weather.css';

export default class Weather extends Component {
    render() {
        return (
            <div>
                <div className="Cards pt-4">
                    <h1>{this.props.city}</h1>
                    <h5 className="py-4">
                        <i className={`wi ${this.props.WeatherIcon} display-1`}></i>
                    </h5>
                    {this.props.celsius ? (<h1 className="py-2">{this.props.celsius}&deg;</h1>) : null}
                      {maxminTemp(this.props.temp_min, this.props.temp_max)}
                    <h4 className="py-3">{this.props.description}</h4>
                </div>
            </div>
        )
        function maxminTemp(min, max) {
            if (max && min) {
              return (
                <h3 className="py-5">
                  <span className="px-4">Min Temp: {min}&deg;</span>
                  <span className="px-4">Max Temp: {max}&deg;</span>
                </h3>
              );
            }
          }
    }
}
