import "./App.css";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import Footer from "./components/Footer";
import React, {useState} from 'react';



function App() {
  const games = ["gta", "cod", "ghost", "mw", "bocw", "rdr"];
  const [fav, setFav] = useState([]);


  function addToFav(game){
    setFav([...fav, game]);
  }


  return (
    <>
      <NavBar favList={fav.length}/>
    <h4>{fav}</h4>
      <div className="container mt-sm-5">
        <Games list={games} addToFav={addToFav}/>
      </div>


      <Footer />
    </>
  );
}

export default App;
