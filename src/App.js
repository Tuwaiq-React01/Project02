import React, { Component } from 'react'
import axios from 'axios'
import Com from './com'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
    }
  }

  componentDidMount(){
    this.callApi();
  }
  
  shouldComponentUpdate(){
  return true
  }


  callApi(){
    axios({
      method:"GET",
      url:'https://fakestoreapi.com/products'
    }).then((response)=>{
      console.log("this response",response.data)
      this.setState({data: response.data}
        )
    }).catch((error)=>{
      console.log("error",error)
    })
  }

  render() {
  
    return (
      <div className="bg-img" >
        <Navbar bg="light" expand="lg" className="ba">
        <Navbar.Brand href="#" className="center"> <spam className="big">Store</spam></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://fakestoreapi.com" > <spam className="big">Fake Store Api</spam></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1></h1>
        <div> <Com list = {this.state.data} /> </div>       
      </div>
    )
  }
}