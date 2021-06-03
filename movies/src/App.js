import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import MyNavBar from "./Components/MyNavBar"
import './App.css';
import Home from './Components/Home';
import Browse from './Components/Browse';
import About from './Components/About';
import Footer from './Components/Footer';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      topMovies:[],
    }
    this.getTopMovies=this.getTopMovies.bind(this)
  }
  componentDidMount(){
    this.getTopMovies()  
  }

  shouldComponentUpdate(){
    if(this.state.topMovies.length==40){
      return false
    }
    else return true
  }

  getTopMovies(){
    const url ='https://api.themoviedb.org/3/discover/movie?api_key=10d10fd3d18e1e9190e6ca2981496aac&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate'
    axios.get(url)
    .then((res)=>{
      this.setState({topMovies:res.data.results})
    }).catch((err)=>{
      console.log(err);
    })
    const url2 ='https://api.themoviedb.org/3/discover/movie?api_key=10d10fd3d18e1e9190e6ca2981496aac&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_watch_monetization_types=flatrate'
    axios.get(url2)
    .then((res)=>{
      this.setState({topMovies:[...this.state.topMovies, ...res.data.results]})
    }).catch((err)=>{
      console.log(err);
    })
    const url3 ='https://api.themoviedb.org/3/discover/movie?api_key=10d10fd3d18e1e9190e6ca2981496aac&sort_by=popularity.desc&include_adult=false&include_video=true&page=3&with_watch_monetization_types=flatrate'
    axios.get(url3)
    .then((res)=>{
      this.setState({topMovies:[...this.state.topMovies, ...res.data.results]})
    }).catch((err)=>{
      console.log(err);
    })
  }
  render() {
    console.log(this.state.topMovies);
    return (
        <Router >


          <MyNavBar />
          <Route exact path="/">
            <Home topMovies={this.state.topMovies} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Footer /> */}
        </Router>
    );
  }
}

export default App;
