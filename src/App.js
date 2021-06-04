import logo from './SFCSP.png';
import './App.css';
import Wheel from './Wheel.js'
import Item from './Item.js';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const sectors = [
  { color: "#f82", label: "Stack" },
  { color: "#0bf", label: "10" },
  { color: "#fb0", label: "200" },
  { color: "#0fb", label: "50" },
  { color: "#b0f", label: "100" },
  { color: "#f0b", label: "5" },
  { color: "#bf0", label: "500" },]

let colors = ["#f82", "#0bf", "#fb0", "#0fb", "#b0f", "#f0b", "#bf0"]
let labels = ["1", "2", "3", "4", "5", "6", "7"]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: colors,
      labls: labels,
      sectors: [
        { color: colors[0], label: "Stack" },
        { color: colors[1], label: "10" },
        { color: colors[2], label: "200" },
        { color: colors[3], label: "50" },
        { color: colors[4], label: "100" },
        { color: colors[5], label: "5" },
        { color: colors[6], label: "500" },],
      newItem: "",
      itemsList: [],
      showWheel: false,
      OKClicked: false
    }
    this.setColor = this.setColor.bind(this);

  }

  onChangeText(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addTheItem(e) {
    e.preventDefault();

    this.setState({
      itemsList: this.state.itemsList.concat(this.state.newItem),
      newItem: ""
    })
  }

  setColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  showWheel(e) {
    colors = colors.map(function (element, index) {
      colors[index] = "#" + Math.floor(Math.random() * 16777215).toString(16);
      console.log(colors[index]);
    })
    let newSectors = this.state.itemsList.map(function (element, index) {
      return { label: element, color: "#" + Math.floor(Math.random() * 16777215).toString(16) }
    });
    this.setState({
      showWheel: true,
      sectors: newSectors,
      OKClicked: true
    })
  }

  hideWheel(e) {
    this.setState({
      showWheel: false,
      itemsList: [],
      OKClicked: false
    })
  }

  render() {
    let itemsList = this.state.itemsList.map((element, index) => (
      <Item item={element} key={index} />
    ))
    return (
      <div className="App">
        <div className="App-header">          
        <h1 class="display-4 text-muted">Tuwaiq Random Picker</h1>
          <img src={logo} width="150" height="100" class="rounded mx-auto d-block mb-4" />
          {this.state.OKClicked ? null :
            <div>
              {itemsList}
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                </div>
                <input type="text" placeholder="Add your item here!!" onChange={(e) => this.onChangeText(e)} value={this.state.newItem} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-default" />
              </div>
              <button type="button" className="btn btn-warning" onClick={(e) => this.state.newItem!==""?this.addTheItem(e):null}>ADD</button>
              <button type="button" className="btn btn-warning mx-3" onClick={(e) => this.state.itemsList.length<2?null:this.showWheel(e)}>SPIN</button>
            </div>
          }
          <div>
            {this.state.showWheel ? <Wheel wheelSectors={this.state.sectors} /> : null}
          </div>

          <button type="button" className="btn btn-danger m-3" onClick={(e) => this.hideWheel(e)}>Restart</button>



        </div>
      </div>
    )
  }
}
