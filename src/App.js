import logo from './logo.png';
import './App.css';
import News from './News';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

import React, { Component } from 'react'
import Search from './Search';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      data: {}
    }
  }
  callApi() {
    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI',
      params: {pageNumber: '1', pageSize: '20', withThumbnails: 'false', location: 'us'},
      headers: {
        'x-rapidapi-key': 'f816f35f7cmsh32f24e2489be3e0p13d28cjsnc23fc1a34a02',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then( (response)=> {
      this.setState({ data:response.data})
      console.log('res: ' + [response.data]);
      console.log('res state: ' + this.state.data.value);
    }).catch(function (error) {
      console.error(error);
    });
  }
  componentDidMount(){
    this.callApi();
    document.body.style.backgroundColor = "#6c757d"
  }
  render() {
    
    return (
      <div class="m-4 p-4 row bg-light d-flex justify-content-between ">
        <div class="col-8">
          <img class='m-4 rounded' width='300px' heigth='100px'src={logo}/>
          
        </div>
        {/* <div class="col-4">
          <Search Callback={this.SaerchCallback}/>

        </div> */}
        <div>
          <News data={this.state.data.value}/> 

        </div>
      </div>
    )
  }
}