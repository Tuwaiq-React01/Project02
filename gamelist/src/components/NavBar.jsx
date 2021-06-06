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
      <>
      {/* UNUSED */}
      </>
    );
  }
}
