import React, { Component } from 'react';
import Cat from './Cat';
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []

    }

    this.callApi = this.callApi.bind(this);
  }
  componentDidMount() {
    this.callApi()
  }
  
  callApi() {
    axios.get("https://cat-fact.herokuapp.com/facts/")
      .then((res) => {
        console.log(res)
        this.setState({ data: res.data })
        console.log(this.state.data)
      })
  }
  render() {

    return (
      <div>
        <Cat data={this.state.data} />
      </div>
    )
  }
}