import React, { Component } from 'react'
import './StyleDate.css';

export default class DateLC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.timeNow(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      timeNow() {
        this.setState({
          date: new Date()
        });
      }
      render() {
        return (
          <div>
            <h2 className="Date" >Riyadh local time {this.state.date.toLocaleTimeString()} </h2>
          </div>
        );
      }
    }
    
