import React, { Component } from 'react'
import youtube from './apis/youtube';
import axios from 'axios';
import Nav1 from './components/Nav'
import Cards from './components/Cards'
import Main from './components/MainPage'
import Loading from './components/Loading'
import SelectedVideo from './components/SelectedVideo'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      countryCode: "SA",
      dataLoaded: false,
      maxResults:"20"
    }
  }

  componentWillUnmount() {
    console.log("App page Closed")
}

  componentDidMount() {
    this.callApi();

  }
  callApi() {
    axios({
      method: "get",
      url: "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults="+this.state.maxResults+"&chart=mostPopular&regionCode=" + this.state.countryCode + "&key=AIzaSyD8_QN8Y_yoJXl-866gRqLbFtZML-njxLk"
    }).then((response) => {
      console.log("this response ", this.state.countryCode);
      this.setState({ videos: response.data.items })
    }
    ).catch((error) => {
      console.log("error", error)
    })
  }







  render() {

    const getSelectValue = (e) => {
      console.log("get value")
      console.log(e);
      this.setState({ countryCode: e })
      setTimeout(() => {
        this.callApi();
      }, 50);

    }

    const getSelectMaxValue = (e) => {
      console.log("get value")
      console.log(e);
      this.setState({ maxResults: e })
      setTimeout(() => {
        this.callApi();
      }, 50);

    }

    console.log("(this.state.videos" + this.state.countryCode)
    if (this.state.videos == "") {

      var lode = false;
    }
    else {
      var lode = true
    }

    const value = lode ? <Cards videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} /> : <Loading />
    console.log(this.state.selectedVideo)
    return (
      <>
        <Router>
          <Nav1 />

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/Videos">
            <div className="App" style={{ marginTop: "25px", marginBottom: "50px" }}>
              <Container>
                <Row>
                  <Col>
                  <DropdownButton onSelect={getSelectMaxValue} id="dropdown-basic-button" title="Max Results" >
                <Dropdown.Item eventKey="5" >5</Dropdown.Item>
                <Dropdown.Item eventKey="10">10</Dropdown.Item>
                <Dropdown.Item eventKey="15">15</Dropdown.Item>
                <Dropdown.Item eventKey="20">20</Dropdown.Item>
                <Dropdown.Item eventKey="25">25</Dropdown.Item>
                <Dropdown.Item eventKey="30">30</Dropdown.Item>

              </DropdownButton>
                  </Col>
                  <Col>
                  
                  
              <DropdownButton onSelect={getSelectValue} id="dropdown-basic-button" title="Select the Country" >
                <Dropdown.Item eventKey="SA" >Saudi Arabia</Dropdown.Item>
                <Dropdown.Item eventKey="US">United States</Dropdown.Item>
                <Dropdown.Item eventKey="IT">Italy</Dropdown.Item>
                <Dropdown.Item eventKey="JP">Japan</Dropdown.Item>

              </DropdownButton>
                  </Col>
                </Row>
              </Container>


            </div>
            {value}
          </Route>

          <Route path="/Video/:id/:title/:viewCount/:likeCount/:dislikeCount">
            <SelectedVideo videos={this.state.videos} />
          </Route>

        </Router>
      </>
    )
  }
}
