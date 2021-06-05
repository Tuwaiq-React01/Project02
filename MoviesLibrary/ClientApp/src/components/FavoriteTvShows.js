import React, {Component} from 'react';
import axios from "axios";
class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favTvShowList: [],
            loading: true };
    }

    componentDidMount() {
        this.getList();
    }

    deleteFromFav(id){
        axios.delete(`https://localhost:5001/api/favoritetvshows/${id}`)
            .then(res => {
                console.log(res);
                this.getList();
            })
            .catch(err => console.log(err));
    }

    renderfavTvShowsTable(favTvShowsList) {
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
                {favTvShowsList.map((favTvShow, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{favTvShow.title}</td>
                        <td className="align-middle">{favTvShow.date}</td>
                        <td className="align-middle">{favTvShow.summary}</td>
                        <td className="align-middle">{favTvShow.rating}</td>
                        <td className="align-middle"><img src={favTvShow.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            <button onClick={()=> this.deleteFromFav(favTvShow.favoriteTvShow.id)} className="btn btn-danger">Delete</button>
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
            : this.renderfavTvShowsTable(this.state.favTvShowList);

        return (
            <div>
                <h1 id="tabelLabel" >Favorite TV Shows List</h1>
                {/*<p>This component demonstrates fetching data from the server.</p>*/}
                {contents}
            </div>
        );
    }
    async getList() {
        axios.get(`https://localhost:5001/api/favoritetvshows`)
            .then(res => {
                const list = res.data;
                this.setState({ favTvShowList: list, loading: false});
            }).catch(err => {
            console.log("Error")
        })
    }
}

export default Movies;