import React, {Component} from 'react';
import {Input} from "reactstrap";
import axios from "axios";

class SearchMovieOutside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            movieList: [],
            show: false };
    }
    
    serach(){
        axios.get(`https://localhost:5001/api/searchmovies/${this.state.title}`)
            .then(res => {
                console.log(res.data)
                const list = res.data;
                this.setState({ movieList: list, show: true});
            }).catch(err => {
            console.log("Error")
        })
    }

    titleOnChange(event){
        this.setState({title: event.target.value})
    }

    addToDatabase(movie){
        axios.post("https://localhost:5001/api/movies", {
            title: movie.title,
            date: movie.date,
            summary: movie.summary,
            rating: movie.rating,
            poster: movie.poster,
        }).then(res => {
            console.log(res);
            this.props.history.push("/movies");
        }).catch(err => console.log(err));
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
                    <th>Database</th>
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
                            <button onClick={()=> this.addToDatabase(movie)} className="btn btn-primary">Add To Database</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
    render() {
        let contents = this.state.show
            ? this.renderMoviesTable(this.state.movieList)
            : null;
        
        return (
            <div>
                <div
                    className="card"
                    style={{
                        width: "22rem",
                        margin: "0 auto",
                        marginTop: "3em",
                        marginBottom: "3em",
                        textAlign: "left",
                        padding: "1em",
                        backgroundColor: "#1c212a"
                    }}
                >
                    <div className="mb-3">
                        <label htmlFor="search" className="form-label" style={{fontWeight: "bold"}}>
                            Search
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="search"
                            aria-describedby="titleHelp"
                            onChange={(event) => this.titleOnChange(event)}
                        />
                    </div>
                    <button type="submit" onClick={() => this.serach()} className="btn btn-primary">
                        Search
                    </button>

                </div>
                {contents}
            </div>
        );
    }
}

export default SearchMovieOutside;