import React, {Component} from 'react';
import axios from "axios";

class SearchTvShowOutside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            tvShowList: [],
            show: false };
    }

    serach(){
        axios.get(`https://localhost:5001/api/searchtvshows/${this.state.title}`)
            .then(res => {
                console.log(res.data)
                const list = res.data;
                this.setState({ tvShowList: list, show: true});
            }).catch(err => {
            console.log("Error")
        })
    }

    titleOnChange(event){
        this.setState({title: event.target.value})
    }

    addToDatabase(movie){
        axios.post("https://localhost:5001/api/tvshows", {
            title: movie.title,
            date: movie.date,
            summary: movie.summary,
            rating: movie.rating,
            poster: movie.poster,
        }).then(res => {
            console.log(res);
            this.props.history.push("/tv-shows");
        }).catch(err => console.log(err));
    }

    renderMoviesTable(tvShowList) {
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
                {tvShowList.map((tvShow, index) =>
                    <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{tvShow.title}</td>
                        <td>{tvShow.date}</td>
                        <td>{tvShow.summary}</td>
                        <td>{tvShow.rating}</td>
                        <td><img src={tvShow.poster} height="200px" alt="not supported"/></td>
                        <td>
                            <button onClick={()=> this.addToDatabase(tvShow)} className="btn btn-primary">Add To Database</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
    render() {
        let contents = this.state.show
            ? this.renderMoviesTable(this.state.tvShowList)
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

export default SearchTvShowOutside;