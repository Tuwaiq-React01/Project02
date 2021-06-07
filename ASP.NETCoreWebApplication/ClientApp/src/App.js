import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import AnimeGallery from './pages/AnimeGallery';
import AnimeQuotes from './pages/AnimeQuotes';
import FavAnime from './pages/FavAnime';
import UserInfo from './pages/UserInfo'
import Home from './pages/Home'
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/AnimeGallery' component={AnimeGallery} />
        <Route path='/AnimeQuotes' component={AnimeQuotes} />
        <Route path='/FavAnime' component={FavAnime} />
        <Route path='/UserInfo' component={UserInfo} />
      </Layout>
    );
  }
}
