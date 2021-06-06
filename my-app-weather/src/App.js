
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Component } from 'react'
import HeaderImage from './HeaderImage'
import Days from "./Days"
import NavbarHeader from './NavbarHeader'
import TimeZone from './TimeZone';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      days: null
    }
  }
  componentDidMount() {
    this.callApi()
  }
  callApi() {
    axios({
      method: "get",
      url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Springfield,IL?unitGroup=us&key=AHBS12DVFHFFSHF764DGDB"
    })
      .then((info) => {
        this.setState({ data: info.data })
        console.log("Response !!!!! ", this.state.data.days)
        // console.log(this.state.data.days.map((item) => { console.log(item.datetime ,item.conditions) }))
      })
      .catch((error) => {
        console.log("error", error)
      })
  }
  render() {
    return (
      <div>
        <center>
          <HeaderImage />
          <h4 className="text">The weather in :{this.state.data.resolvedAddress}</h4>
          <h6 className="text">Time zone : {this.state.data.timezone}</h6>
          <p className="text">{this.state.data.description}</p>
          {/* <p>{printD}</p> */}
         <h2 id="d15" className="text"> Weather forecast for the next 15 days</h2><br></br>
         </center>
          {this.state.data.days ? <Days array={this.state.data.days} /> : null}
          <center>
          </center>
      </div>
    )
  }
}