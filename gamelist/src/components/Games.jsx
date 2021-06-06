import React, { Component } from "react";
import axios from 'axios'

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      favs: []
    };
  }

  componentDidMount() {

    this.setState({ games: this.props.list });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favs !== this.state.favs) {
      this.props.addToFav(this.state.favs);
      this.state.favs = {}
    }
  }

  addFav(game){
      this.setState({favs: game})
  }

  removeFav(game){
    this.props.removeFav(game)
  }



  


  render() {

    const favMode = this.props.favMode;
    const displayGames = this.props.list.map((game, i) => {
      return (
        <div className="col-md-3 mt-5" key={i}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={game.background_image}
              className="card-img-top"
              alt="..."
              width="200px"
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title"> {game.name} </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
{favMode ? <button onClick={()=> this.removeFav(game)} className="btn btn-danger">
                REMOVE
              </button> : <button onClick={()=> this.addFav(game)} className="btn btn-primary">
                Add to Favorite
              </button>}
            </div>
          </div>
        </div>
      );
    });




    return (
      <div className="container mt-sm-5">
        <div className="row">{displayGames}</div>
      </div>
    );
  }
}
