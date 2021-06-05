import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';

import './custom.css'
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import FavoriteMovies from "./components/FavoriteMovies";
import FavoriteTvShows from "./components/FavoriteTvShows";
import AddNewMovie from "./components/AddNewMovie";
import SearchMovieOutside from "./components/SearchMovieOutside";
import AddNewTvShow from "./components/AddNewTvShow";
import SearchTvShowOutside from "./components/SearchTvShowOutside";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        {/*<Route path='/fetch-data' component={FetchData} />*/}
        <Route path='/movies' component={Movies} />
        <Route path='/favorite-movies' component={FavoriteMovies} />
        <Route path='/tv-shows' component={TvShows} />
        <Route path='/favorite-tv-shows' component={FavoriteTvShows} />
        <Route path='/add-new-movie' component={AddNewMovie} />
        <Route path='/search-movie-outside' component={SearchMovieOutside} />
        <Route path='/add-new-tvshow' component={AddNewTvShow} />
        <Route path='/search-tvshow-outside' component={SearchTvShowOutside} />
      </Layout>
    );
  }
}
