import React, { Component } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

export default class TimeZone extends Component {
    constructor(props){
        super(props);
        this.state={
          data:{},
          data2:{},
          data3:{},
          data4:{},
          data5:{},
          data6:{}

        }
      }
      componentDidMount(){
        this.callApi1()
        this.callApi_2()
        this.callApi_3()
        this.callApi_4()
        this.callApi_5()
        this.callApi_6()
      }
    callApi1(){
      axios({
        method : "get",                                           
        url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=24.774265&lng=46.738586"})
      .then((info)=>{ this.setState({data : info.data})})// console.log("Response !!!!! ", this.state.data)})
      .catch((error)=>{console.log("error",error)})}
    callApi_2(){
        axios({
          method : "get",                                            
          url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=51.509865&lng=-0.118092"})
        .then((info)=>{
        this.setState({data2 : info.data})}).catch((error)=>{console.log("error",error)})}
      callApi_3(){
        axios({
          method : "get",                                            
          url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=38.889248&lng=-77.050636"})
        .then((info)=>{
        this.setState({data3: info.data})}).catch((error)=>{console.log("error",error)})}
        callApi_4(){
          axios({
            method : "get",                                            
            url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=35.652832&lng=139.839478"
          })
          .then((info)=>{
          this.setState({data4 : info.data})}).catch((error)=>{console.log("error",error)})}
          callApi_5(){
            axios({
              method : "get",                                            
              url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=25.276987&lng=55.296249"
            })
            .then((info)=>{
            this.setState({data5 : info.data})}).catch((error)=>{console.log("error",error)})}
            callApi_6(){
              axios({
                method : "get",                                            
                url:"http://api.timezonedb.com/v2.1/get-time-zone?key=GS3OQ86QHA33&format=json&by=position&lat=51.509865&lng=-0.118092"
              })
              .then((info)=>{
              this.setState({data6 : info.data})}).catch((error)=>{console.log("error",error)})}
        render() {
        return (
            <div>
              <center>
                  <h2 className="text">Time zone </h2><br></br> 
                  <Container>
                    <center>
                  <Row md={4}>
                  <Col className="co">
               <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {this.state.data.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{this.state.data.countryName},{this.state.data.countryCode}</Card.Title>
      <Card.Text>
      {this.state.data.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
     </Col>
     <Col className="co">
      <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {this.state.data2.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{this.state.data2.countryName},{this.state.data2.countryCode}</Card.Title>
      <Card.Text>
      {this.state.data2.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
      </Col><br></br>
      <Col className="co">
      <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {this.state.data3.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{this.state.data3.countryName},{this.state.data3.countryCode}</Card.Title>
      <Card.Text>
      {this.state.data3.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
      </Col>
     </Row>
     <Row md={4}>
                  <Col className="co">
               <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {this.state.data4.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{this.state.data4.countryName},{this.state.data4.countryCode}</Card.Title>
      <Card.Text>
      {this.state.data4.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
     </Col>
     <Col className="co">
      <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {this.state.data5.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{this.state.data5.countryName},{this.state.data5.countryCode}</Card.Title>
      <Card.Text>
      {this.state.data5.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
      </Col><br></br>
      <Col className="co">
      <Card border="info" style={{ width: '18rem' }}>
      <Card.Header>Time Zone of {this.state.data6.zoneName}</Card.Header>
      <Card.Body>
      <Card.Title>{this.state.data6.countryName},{this.state.data6.countryCode}</Card.Title>
      <Card.Text>
      {this.state.data6.formatted}
      </Card.Text>
      </Card.Body>
      </Card>
      </Col>
     </Row>
     </center>
      </Container>
        <br />
        </center>
            </div>
        )
    }
}
