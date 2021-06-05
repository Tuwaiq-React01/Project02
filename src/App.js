import './App.css';
import Header from './Components/Header'
import DateLC from './Components/DateLC'
import AboutApi from './Components/AboutApi'
import Cards from './Components/Cards'


function App() {
  return (
    <div >
      <div className="content1">
      <Header />
      <DateLC />
      </div>
      <div className="content2">
      <AboutApi />
      <Cards />
      </div>
     
    </div>
  );
}

export default App;
