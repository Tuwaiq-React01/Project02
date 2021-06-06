import React, { Component } from 'react'
import axios from 'axios';


export default class MovieInfo extends Component {

constructor(){
	super()
	this.state = {
		movies:[],
		query:""
	}

}	
	   
	render() {


		const SerachButton = (e) => {
			e.preventDefault();
			console.log(this.state.query)
		   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b2d6e4e0261278564a0580683edec388&query=${this.state.query}`).
		   then( (res) => { 
			this.setState({movies: res.data.results}); 
			  // setRecipes(res.data.hits)
			   console.log(this.state.movies);}
			   ).
		   catch((err) => { console.log(err.data);})
		   }


		return (
			<div>
				<div className="welcom">
					<h1 > It is Movie Time buckleup!!</h1>
				</div>
				<form>

				
					<div className= "divInput">  

						<input placeholder="Enter Movie Name..." className="inputTag" onChange={(e)=> this.setState({query: e.target.value})}/>
						<button type="submit" className="btn" onClick={SerachButton}> Search</button>
					
					</div>
					
						
				
					</form>
					
					{this.state.movies.map((m,i)=>{
					return(
					<div class="card">
					<div class="card-header"> <h2><b>{m.original_title}</b></h2></div>

					<div class="card-body">
					
					{m.backdrop_path?<img  className="image" src={`https://image.tmdb.org/t/p/original${m.backdrop_path}`} /> :<img  className="image" src='https://bitsofco.de/content/images/2018/12/broken-1.png' />}
						
						<p className="block-text"> <strong>Overview: <strong/></strong>{m.overview}</p>
					


						<p className="block-text"> <strong>Original Language: </strong>{m.original_language}</p>
						

						<p className="block-text"> <strong>Popularity: </strong>{m.popularity}</p>
						

						<p className="block-text"> <strong>Release Date: </strong>{m.release_date}</p>
			

						<p className="block-text"> <strong>Vote Average: </strong>{m.vote_average}</p>
				
					</div>
					<button type="button" class="btn btn-primary" >Watch</button>
					</div>  
					)
					})
					}
					
			
			
			
			
			
			</div>



		)
	}
}
