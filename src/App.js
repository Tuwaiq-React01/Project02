import { Component } from 'react'
import './App.css';

import RequestFrom from './components/RequestFrom';
import ResponseView from './components/ResponseView'

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      response: null,
      isLoading: false,
      message: null,
      messageColor: "gray",
    }

    this.sendRequest = this.sendRequest.bind(this)
}

  sendRequest(host, method, headers, body){
    this.setState({
      isLoading: true
    })
    const _h = {}

    headers.forEach(header => {
      if(header.name){
        _h[header.name] = header.value
      }
    })

    axios({
      url: host,
      method: method,
      headers: _h,
      data: body
    }).then(response => { 
      let color
      if(response.status > 99 && response.status < 200){
        color = "gray"
      } else if (response.status > 199 && response.status < 300){
        color = "green"
      } else if (response.status > 299 && response.status < 400){
        color = "orange"
      }else if (response.status > 399 && response.status < 600){
        color = "red"
      }
      this.setState({response: response, message: response.status, messageColor: color}) 
    })
    .catch(err => {
      this.setState({message: err.message, messageColor: "red"}) 
    }).then(() => {
      this.setState({ isLoading: false }) 
    })
  }
  render(){
    return (
      <div className="App">
        <Card>
          <Box p={2}>
            <Box pb={2} fontSize="h4.fontSize">HTTP Request</Box>
            <RequestFrom sendRequest={this.sendRequest} />
            {
              !this.state.isLoading && this.state.message && (
                <Box display="inline-block" p={1} mt={1} borderRadius="5px" bgcolor={this.state.messageColor} color="white">
                    { this.state.message }
                </Box>
              )
            }
            {
              this.state.isLoading && (
                <Box pt={2}>
                <CircularProgress color="secondary" />
                </Box>
              )
            }
            <ResponseView response={this.state.response} />
          </Box>
        </Card>
      </div>
    );
  }
}

export default App;
