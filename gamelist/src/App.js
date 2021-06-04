import "./App.css";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import Footer from "./components/Footer";
import React, {useState} from 'react';



function App() {
  const games = [
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
      <NavBar favList={fav.length}/>
      <div className="container mt-sm-5">
        <Games list={games} addToFav={addToFav}/>
      </div>


      <Footer />
    </>
  );
}

export default App;
