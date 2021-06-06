import React, { Component } from 'react'
import axios from 'axios'
import './photo-grid.css'
import './base.css'


export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    for(var i = 0; i <12 ; i++){this.callApi()};
  }
  componentWillUnmount(){
    window.onbeforeunload = function() {
      return "Refresh oh new food how lovely";
    }}
  
  callApi() {
    // axios.get(your url)
    axios({
      method: "get",
      url: 'https://foodish-api.herokuapp.com/api'
    }).then((response) => {
      this.setState({ data: [...this.state.data,response.data] })
      console.log(this.state.data,"this response ", response.data);
    }
    ).catch((error) => {
      console.log("error", error)
    })
    
  }

  render() {
    
    return (
        <div class="photo-grid">
          {this.state.data.length < 12?console.log("hhgghg") : 
            
          <div>
      <div
        class="card card-tall card-wide" style= { { backgroundImage: `url( ${ this.state.data[0].image })` } }>
      </div>
      <div
        class="card card-tall"
        style= { { backgroundImage: `url( ${ this.state.data[1].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ this.state.data[2].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ this.state.data[3].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ this.state.data[4].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ this.state.data[5].image })` } }
      >
      </div>
      <div
        class="card card-wide"
        style= { { backgroundImage: `url( ${ this.state.data[6].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ this.state.data[7].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ this.state.data[8].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ this.state.data[9].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ this.state.data[10].image })` } }
      >
      </div>
      <div
        class="card"
        style= { { backgroundImage: `url( ${ this.state.data[11].image })` } }
      >
      </div>
      </div>}
    </div>
      
    )
  }

}