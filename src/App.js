import './App.css';
import Movie from './Components/Movie';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SelectedMovie from './Components/SelectedMovie';
import NavBar from './Components/NavBar';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<div className='container-fluid mt-4'>
						<Switch>
							<Route exact path='/' component={Movie} />
							<Route exact path='/details/:id' component={SelectedMovie} />
						</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
