import React, { Component } from "react";
import axios from 'axios'
import Games from "./Games";

export default class AllGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
    this.addToFav = this.addToFav.bind(this);

  }

  componentDidMount() {
    axios
      .get(
        "https://api.rawg.io/api/games?key=1418f80ceb1a47eca6e9964f0eb50613&page_size=25"
      )
      .then((res) => {
        console.log(res.data.results);
        this.setState({ games: res.data.results });
      })
      .catch((err) => {
        console.error(err);
      });
  }


     addToFav(game){
        this.props.addToFav(game)
  }


  render() {
    return (
      <div>
        <Games list={this.state.games} addToFav={this.addToFav} />
      </div>
    );
  }
}
