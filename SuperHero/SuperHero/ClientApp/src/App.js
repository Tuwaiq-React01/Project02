import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import axios from "axios"
import './custom.css'

const App = () => {
  const [isD, setIsD] = useState(() => false);

  const D2L = () => {
    setIsD((prev) => !prev)
  }
  return (
    <Layout D2L={()=> D2L()}>
      
      <Route exact path='/' component={Home} />
      <Route path='/counter' component={Counter} />
      <Route path='/fetch-data' component={FetchData} />
    </Layout>
  );
}
export default App;