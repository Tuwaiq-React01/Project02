import React, { Component } from 'react';
import axios from 'axios';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: this.props.game,
        };
    }

    componentDidUpdate() {
        this.state.game = this.props.game

    }

    render() {
        return (
            <div className="card  w-850"style={{marginTop:"40px"}}>
                <div className="row no-gutters bg-light position-relative" style={{ alignItems: "center" }}>

                    <img src={this.state.game.thumbnail} className="card-img-top" alt="..."></img>
                    <div className="card-img-overlay" style={{ alignContent: "center", verticalAlign: "middle" }}>
                    </div>
                </div>

                <div className="card-body">
                    <h5 className="card-title">{this.state.game.title} </h5>
                    <p className="card-text"> {this.state.game.shortDcrp}</p>
                    <a href={this.state.game.gameUrl} className="btn btn-outline-success" style={{ width: "80px", height: "25px", position: "absolute", left: " 45%", top: "90%" }}>
                    <div className="GameDetail">
                        Play
                    </div>
                    </a>
                    <button onClick={(e) => this.props.onClick()} className="btn btn-outline-danger" style={{ width: "25px", height: "25px", position: "absolute", left: "80%", top: "90%" }}>
                        <div className="GameDetail">
                            ❤︎
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}
