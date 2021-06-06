import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import InputBase from "@material-ui/core/InputBase";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import axios from "axios";

export default class FoxCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "/loading.gif",
      res: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://randomfox.ca/floof/")
      .then((res) => this.setState({ image: res.data.image, res: res }));
  }

  componentDidUpdate() {
    if (this.state.res != null) {
      console.log(this.state.res.data);
    }
  }

  updateImage() {
    this.setState({ image: "/loading.gif", res: null });
    axios
      .get("https://randomfox.ca/floof/")
      .then((res) => this.setState({ image: res.data.image, res: res }));
  }

  render() {
    return (
      <Card
        style={{
          margin: "20px",
          backgroundColor: "#f6d1a9",
        }}
      >
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={this.state.image}
        />
        <CardContent>
          <InputBase
            defaultValue="Your Comment Goes Here"
            inputProps={{ "aria-label": "naked" }}
            variant="body2"
            color="textSecondary"
            component="p"
            multiline
          />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={() => this.updateImage()} aria-label="Refresh">
            <RefreshIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
