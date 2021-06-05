import React, { Component } from 'react';
import image from "../movieImage.jpg";

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="" style={{background: `url(${image})` , height: "650px"}}>
        {/*<img src={image}/>*/}
        <div className="text-center"
             style={{paddingTop: "200px", color: "white", textShadow: "-1px 0 2px black, 0 1px 2px black, 1px 0 2px black, 0 -1px 2px black, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"}}>
          <h1 className="display-4" style={{fontWeight: "bold"}}>Movies and TV Shows Library</h1>
          <h2 style={{paddingTop: "150px", fontWeight: "bold"}}>Choose Which Library You Want to Explore</h2>

        </div>
      </div>
    );
  }
}
