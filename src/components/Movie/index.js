import React, { Component } from "react";
import "./style.css";
export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }
  componentWillUnmount() {
    alert(`Movie booked`);
  }
  render() {
    return (
      <div className="MovieInfo">
        <img
          src={"https://image.tmdb.org/t/p/w500" + this.props.img}
          className="poster"
          width="150px"
          alt={this.props.name}
        />
        <div className="details">
          <h3 className="MovieName">{this.props.name}</h3>
          <div className="info">
            <span>
              <span className="infoTitle">Language:</span> {this.props.language}
            </span>
            <span>
              <span className="infoTitle">popularity:</span> {this.props.cast}
            </span>
            <span>
              <span className="infoTitle">Release Date:</span>{" "}
              {this.props.censor}
            </span>
          </div>
          <button onClick={(e) => this.props.onClick()}>BOOK</button>
        </div>
      </div>
    );
  }
}
