import './App.css';
import NavBar from './components/NavBar';
import Games from './components/Games';

function App() {

const games = ['gta', 'cod', 'ghost', 'mw' , 'bocw', 'rdr']

  return (
    <>

      <NavBar />

    <div className="container mt-sm-5">
      <Games list={games}/>
    </div>


    </>
  );
}

export default App;
