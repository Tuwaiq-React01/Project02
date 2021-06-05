import React, {Component} from 'react';
import axios from "axios";

class TvShows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvShowList: [],
            loading: true };
    }

    componentDidMount() {
        this.getList();
    }

    addToFav(id){
        axios.post("https://localhost:5001/api/favoritetvshows", {
            tvShowId: id,
        }).then(res => {
            console.log(res);
            this.getList();
        })
            .catch(err => console.log(err));
    }

    deleteFromFav(id){
        axios.delete(`https://localhost:5001/api/favoritetvshows/${id}`)
            .then(res => {
                console.log(res);
                this.getList();
            })
            .catch(err => console.log(err));
    }

    redirect(num){
        if(num === 1){
            this.props.history.push("/add-new-tvshow");
        } else {
            this.props.history.push("/search-tvshow-outside");
        }
    }

    renderTvShowsTable(tvShowList) {
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
                </tr>
                </thead>
                <tbody>
                {tvShowList.map((tvShow, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{tvShow.title}</td>
                        <td className="align-middle">{tvShow.date}</td>
                        <td className="align-middle">{tvShow.summary}</td>
                        <td className="align-middle">{tvShow.rating}</td>
                        <td className="align-middle"><img src={tvShow.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            {tvShow.favoriteTvShow != null
                                ? <button onClick={()=> this.deleteFromFav(tvShow.favoriteTvShow.id)} className="btn btn-danger">Delete</button>
                                : <button onClick={()=> this.addToFav(tvShow.id)} className="btn btn-primary">Add</button>
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
            : this.renderTvShowsTable(this.state.tvShowList);

        return (
            <div>
                <h1 id="tabelLabel" >TV Shows List</h1>
                <button onClick={()=>this.redirect(1)} className="btn btn-success " style={{marginTop: "30px", marginBottom: "10px",}}>Add New TV Show</button>
                <button onClick={()=>this.redirect(2)} className="btn btn-success " style={{marginTop: "30px", marginBottom: "10px", marginLeft: "15px"}}>Search from Outside</button>
                {contents}
            </div>
        );
    }
    async getList() {
        axios.get(`https://localhost:5001/api/tvshows`)
            .then(res => {
                const list = res.data;
                this.setState({ tvShowList: list, loading: false});
            }).catch(err => {
            console.log("Error")
        })
        // const response = await fetch('weatherforecast');
        // const data = await response.json();
        // this.setState({ forecasts: data, loading: false });
    }
}

export default TvShows;