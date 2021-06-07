import React, { Component } from 'react';
import axios from 'axios'
import { Game } from './Game';


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            show: true
        }
        this.AddFav = this.AddFav.bind(this);
    }
    componentDidMount() {
        this.callApi()
    }

    callApi() {
        axios({
            method: "get",
            url: "https://localhost:5001/Games"
        }).then((response) => {
            this.setState({ data: response.data })
        }).catch((e) => {
            console.log("error", e);
        });
    }

    AddFav(game) {
        var LisData = [...this.state.data];
        var index = LisData.indexOf(game);
        LisData.splice(index, 1);
        this.setState({
            data: LisData
        })
        alert("The game has been added to your favorite games list! ")
    }
    render() {
        const Allgames = this.state.data.map((game, index) => (
            <div className="col-md-3 GameComp" key={index}>
                <Game game={game} onClick={() => this.AddFav(game)} />
            </div>

        ))
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4 GamesContainer">
                {this.state.show
                     ? Allgames 
                     : null
                }
            </div>
        )
    }
}
