import React, { Component } from "react";

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      favs: ''
    };
  }

  componentDidMount() {
    this.setState({ games: this.props.list });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favs !== this.state.favs) {
      this.props.addToFav('haha');
      this.state.favs = ''
    }
  }



  render() {
    const displayGames = this.state.games.map((game, i) => {
      return (
        <div className="col-md-3 mt-5" key={i}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://static.posters.cz/image/750/poster/call-of-duty-black-ops-cover-i8700.jpg"
              className="card-img-top"
              alt="..."
              width="200px"
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title">{game}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
          <button onClick={()=> {this.setState({favs : 'banana'})}}>ADDDDD</button>
        <div className="row">{displayGames}</div>
      </div>
    );
  }
}
