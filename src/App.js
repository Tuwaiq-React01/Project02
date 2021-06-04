import React, { Component } from "react";
import Movie from "./components/Movie";
import axios from "axios";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MoviesList: [],
    };
  }

  fetchData() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=90f0bceaa16397e4bcacdf6b9a3b87c5&language=en-US"
      )
      .then((response) => {
        this.setState({
          MoviesList: response.data.results,
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  BookMovie(movie) {
    var movies = [...this.state.MoviesList];
    var index = movies.indexOf(movie);
    movies.splice(index, 1);
    this.setState({
      MoviesList: movies,
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.MoviesList.map((movie) => (
          <Movie
            name={movie.original_title}
            language={movie.original_language}
            cast={movie.popularity}
            censor={movie.release_date}
            img={movie.poster_path}
            onClick={() => this.BookMovie(movie)}
          />
        ))}
      </div>
    );
  }
}
