import "./App.css";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import Favorite from "./components/Favorite";
import Footer from "./components/Footer";
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  let games = [
    { gameName: 'gta' , id : 1},
    { gameName: 'bocw' , id : 2},
    { gameName: 'cod' , id : 3},
    { gameName: 'mw3' , id : 4},
    { gameName: 'mw2' , id : 5},
  ]
  const [fav, setFav] = useState([]);


  function addToFav(game){
    setFav([...fav, game]);
  }


  return (
    <>

      <NavBar favList={fav.length} addToFav={addToFav} list={games}/>

      <Footer />
      
    </>
  );
}

export default App;
