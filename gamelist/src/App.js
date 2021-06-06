import "./App.css";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import Favorite from "./components/Favorite";
import Footer from "./components/Footer";
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllGames from "./components/AllGames";



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
    console.log(game);
      var search = fav.find((e) => game.id == e.id)
      if(search){
        alert("ALREADY THERE!")
      }else{
        setFav([...fav, game]);
      }
  }

  function removeAll(){

    
    setFav([]);
  }
  function removeFav(game){
    // let newArr = fav.splice(game, 1)
    // setFav([newArr]);
  }


  return (
    <>
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Game
              </a>
              <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Home
                      <span class="visually-hidden">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/games">GAMES</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/favorites">Favorites <span class="badge rounded-pill bg-secondary mx-2">
                        {fav.length}
                      </span> </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li>

                  </li>
                </ul>
                <form class="d-flex">
                  <input
                    class="form-control me-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>

          <Switch>
            <Route
              exact
              path="/games"
              render={() => <AllGames list={games} addToFav={addToFav} />}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorite favs={fav} removeFav={removeFav} removeAll={removeAll}/>
              )}
            />

          </Switch>
        </div>
      </Router>
      <Footer />
      
    </>
  );
}

export default App;
