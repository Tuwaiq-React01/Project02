import React, {Component} from 'react';
import axios from "axios";

class AddNewMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            date:"",
            summary:"",
            rating: 0,
            poster: "",
            favoriteMovie: null,
            loading: true };
    }
    
    titleOnChange(event){
        this.setState({title: event.target.value})
    }
    dateOnChange(event){
        this.setState({date: event.target.value})
    }
    summaryOnChange(event){
        this.setState({summary: event.target.value})
    }
    ratingOnChange(event){
        let rating = parseInt(event.target.value, 10)
        if (rating > 10 || rating < 1 || isNaN(rating)){
            rating = 5
        }
        this.setState({rating: rating})
    }
    posterOnChange(event){
        this.setState({poster: event.target.value})
    }
    
    submit(){
        axios.post("https://localhost:5001/api/movies", {
            title: this.state.title,
            date: this.state.date,
            summary: this.state.summary,
            rating: this.state.rating,
            poster: this.state.poster,
        }).then(res => {
            console.log(res);
            this.props.history.push("/movies");
        }).catch(err => console.log(err));
    }
    
    render() {
        // console.log(this.state.title)
        // console.log(this.state.date)
        // console.log(this.state.summary)
        // console.log(this.state.rating)
        // console.log(this.state.poster)
        return (
            <div>
                <div
                    className="card"
                    style={{
                        width: "40rem",
                        margin: "0 auto",
                        marginTop: "10em",
                        textAlign: "left",
                        padding: "3em",
                        backgroundColor: "#1c212a"
                    }}
                >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="titleHelp"
                            onChange={(event) => this.titleOnChange(event)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                            Date
                        </label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="date" 
                            onChange={(event) => this.dateOnChange(event)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="summary" className="form-label">
                            summary
                        </label>
                        <textarea 
                            rows="3" 
                            className="form-control" 
                            id="summary"
                            onChange={(event) => this.summaryOnChange(event)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">
                            Rating
                        </label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="rating"
                            min="1" 
                            max="10"
                            onChange={(event) => this.ratingOnChange(event)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="poster" className="form-label">
                            Poster
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="poster"
                            onChange={(event) => this.posterOnChange(event)}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" onClick={() => this.submit()} className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default AddNewMovie;