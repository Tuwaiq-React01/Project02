import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moviesObj: [],
		};
	}
	apiUrl =
		'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9e058083ea188da98174ef4a8d1c2f31&page=1';

	async getMovies() {
		const movies = await axios.get(this.apiUrl);
		const moviesData = movies.data.results;
		this.setState({ moviesObj: moviesData });
	}

	async componentDidMount() {
		const Movies = JSON.parse(localStorage.getItem('savedMovies'));
		if (Movies) {
			this.setState({ moviesObj: Movies });
		} else {
			try {
				this.getMovies();
			} catch (error) {
				console.log(error);
			}
		}
	}

	componentWillUnmount() {
		localStorage.setItem('savedMovies', JSON.stringify(this.state.moviesObj));
	}

	render() {
		return (
			<div className='row d-flex justify-content-around'>
				{this.state.moviesObj.map((movie) => {
					return <MovieCard key={movie.id} {...movie} />;
				})}
			</div>
		);
	}
}
