import React, { Component } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ListMovie from "./ListMovie";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.callApi();
  }

  componentWillUnmount(){
    alert("Thank you for visit us !!!") 
}
  callApi() {
    axios({
      method: "get",
      url: 'https://www.omdbapi.com/?s=man&apikey=4a3b711b'
    }).then((response) => {
      console.log("this response ", response.data.Search);
      this.setState({ data: response.data.Search})
    }
    ).catch((error) => {
      console.log("error", error)
    })
  }
  render() {
    
    const AllMovies = this.state.data.map((item, key) => (
      <ListMovie item={item} key={key} />
    ));
    
    return (
      <div>
      <Container className="Container">
      <Row>
      {AllMovies}
       </Row>
       </Container >
      </div >
    )
  }
}