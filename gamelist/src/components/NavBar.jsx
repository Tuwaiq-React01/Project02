import React, { Component } from "react";
import Favorite from "./Favorite";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Games from "./Games";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // comp: "",
    };
  }

  componentDidMount() {
    // this.setState({ comp: this.props.list });
  }
  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Game
              </a>
              <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Home
                      <span class="visually-hidden">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/games">GAMES</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/favorites">Favorites <span class="badge rounded-pill bg-secondary mx-2">
                        {this.props.favList}
                      </span> </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    {/* <Route
                      path="/test/new"
                      render={(props) => <Favorite {...props} />}
                    /> */}
                  </li>
                </ul>
                <form class="d-flex">
                  <input
                    class="form-control me-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>

          <Switch>
            <Route
              exact
              path="/games"
              component={() => <Games list={this.props.list} addToFav={this.props.addToFav}/>}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorite test={"test"}/>
              )}
            />

          </Switch>
        </div>
      </Router>
    );
  }
}
