import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favCount: 0,
    };
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#986731" }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Foxes All Around
            </Typography>
            <div style={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
