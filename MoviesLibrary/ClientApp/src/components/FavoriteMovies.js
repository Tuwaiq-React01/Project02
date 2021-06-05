import React, {Component} from 'react';
import axios from "axios";
class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favMovieList: [],
            loading: true };
    }

    componentDidMount() {
        this.getList();
    }

    deleteFromFav(id){
        axios.delete(`https://localhost:5001/api/favoritemovies/${id}`)
            .then(res => {
                console.log(res);
                this.getList();
            })
            .catch(err => console.log(err));
    }

    renderFavMoviesTable(favMovieList) {
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
                {favMovieList.map((favMovie, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{favMovie.title}</td>
                        <td className="align-middle">{favMovie.date}</td>
                        <td className="align-middle">{favMovie.summary}</td>
                        <td className="align-middle">{favMovie.rating}</td>
                        <td className="align-middle"><img src={favMovie.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            <button onClick={()=> this.deleteFromFav(favMovie.favoriteMovie.id)} className="btn btn-danger">Delete</button>
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
            : this.renderFavMoviesTable(this.state.favMovieList);

        return (
            <div>
                <h1 id="tabelLabel" >Favorite Movies List</h1>
                {/*<p>This component demonstrates fetching data from the server.</p>*/}
                {contents}
            </div>
        );
    }
    async getList() {
        axios.get(`https://localhost:5001/api/favoritemovies`)
            .then(res => {
                const list = res.data;
                this.setState({ favMovieList: list, loading: false});
            }).catch(err => {
            console.log("Error")
        })
    }
}

export default Movies;