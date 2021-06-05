import './App.css';
//import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard.js";
import { NavBar } from "./NavBar.js";
//import { Container } from 'react-bootstrap';
import axios from 'axios';
import React from 'react';


let type = ['alarm', 'beach', 'cool', 'cold','city','life','fire','good','dark','real','big', 'goal', 'army' , 'fight', 'suits', 'game', 'love', 'money', 'true', 'crime', 'fast', 'slow', 'strong', 'great', 'family', 'anime', 'one', 'three'];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
      
  }



  componentDidMount() {
    type.map(t => {
  
      axios.get(`http://www.omdbapi.com/?s=${t}&apikey=b67cf7c7`)
      .then((res) => {
        const allMovies = res.data.Search;
        this.setState({ movies: [...this.state.movies, ...allMovies ] }) //another array
        //this.setState({movies: [...allMovies]});
        console.log(allMovies);
      })
      .catch(error => console.error(`Error:  ${error}`));
    
    })
    
  }
  

  render() {
    return (
         <>
     
     <NavBar className="navbar "></NavBar>
      
    
      <div className="flexbox-container ">
      
          {
            this.state.movies.map(movie =>
            {
             
              return(
                
                  <MovieCard  Movie={movie} ></MovieCard>
              )
              
            })
          }
        </div>
        </>
    );
  }
}

export default App;
