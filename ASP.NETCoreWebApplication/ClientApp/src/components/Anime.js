import React, { Component } from 'react'

export default class Anime extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
                <div>
                    <div className="card m-3 d-flex justify-content-between" style={{width:"20rem", height:"31rem"}}>
                        <div className="text-center">
                        <img src={this.props.image} className="card-img-top" style={{height:300}} alt=""/>
                        <h5 className="card-title mt-2">{this.props.title}</h5>
                        </div>

                        <div className="text-center">
                            <p className="card-text"><strong >Type : {this.props.type}</strong></p>
                            <a href="./FavAnime" className="btn btn-primary mb-2 text-light"> {this.props.actionType} Favorite</a>
                        </div>
                    </div>
                </div>
        )
    }
}