import React, {Component} from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import {NavLink} from "reactstrap";
class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movieList: [],
            loading: true };
    }

    componentDidMount() {
        this.getList();
    }
    
    addToFav(id){
        axios.post("https://localhost:5001/api/favoritemovies", {
            movieId: id,
        }).then(res => {
            console.log(res);
            this.getList();
        }).catch(err => console.log(err));
    }
    
    deleteFromFav(id){
        axios.delete(`https://localhost:5001/api/favoritemovies/${id}`)
            .then(res => {
                console.log(res);
                this.getList();
            })
            .catch(err => console.log(err));
    }

    redirect(num){
        if(num === 1){
            this.props.history.push("/add-new-movie");
        } else {
            this.props.history.push("/search-movie-outside");
        }
    }

  renderMoviesTable(movieList) {
        return (
            <table className='table table-striped table-hover table-dark' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Summary</th>
                    <th>Rating</th>
                    <th>Poster</th>
                    <th>Favorite</th>
                </tr>
                </thead>
                <tbody>
                {movieList.map((movie, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{movie.title}</td>
                        <td className="align-middle">{movie.date}</td>
                        <td className="align-middle">{movie.summary}</td>
                        <td className="align-middle">{movie.rating}</td>
                        <td className="align-middle"><img src={movie.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            {movie.favoriteMovie != null
                                ? <button onClick={()=> this.deleteFromFav(movie.favoriteMovie.id)} className="btn btn-danger">Delete</button> 
                                : <button onClick={()=> this.addToFav(movie.id)} className="btn btn-primary">Add</button>
                            }
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderMoviesTable(this.state.movieList);

        return (
            <div>
                <h1 id="tabelLabel" style={{textAlign: "center"}}>Movies List</h1>
                <button onClick={()=>this.redirect(1)} className="btn btn-success " style={{marginTop: "30px", marginBottom: "10px",}}>Add New Movie</button>
                <button onClick={()=>this.redirect(2)} className="btn btn-success " style={{marginTop: "30px", marginBottom: "10px", marginLeft: "15px"}}>Search from Outside</button>
                {contents}
            </div>
        );
    }
    async getList() {
        axios.get(`https://localhost:5001/api/movies`)
            .then(res => {
                const list = res.data;
                this.setState({ movieList: list, loading: false});
            }).catch(err => {
            console.log("Error")
        })
        // const response = await fetch('weatherforecast');
        // const data = await response.json();
        // this.setState({ forecasts: data, loading: false });
    }
}

export default Movies;