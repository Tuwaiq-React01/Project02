import React, { Component } from 'react'


export default class Makeup extends Component {
  
    
      render() {
        return (
          <div className="tb">
        
              <div className="my">
                <p className="name"> {this.props.name}</p>
              <img src={this.props.image_link} height="200px"></img>
              <p>Price: {this.props.price}</p>
              <p className="des">{this.props.description}</p>
              </div>

          </div>
        )
  
    }
}
