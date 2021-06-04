import React, { Component } from 'react'
import axios from 'axios'
import './AnimeList.css'


export default class AnimeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [] ,
          select:1
        }
      }
      componentDidMount() {
        this.callApi()
      }
      callApi() {
        axios({
          method: "get",
          url: "https://api.jikan.moe/v3/top/anime/1/upcoming"
        }).then((response) => {
          this.setState({ data: response.data.top })
          console.log("res", this.state.data);
        }).catch((e) => {
          console.log("error", e);
        })
      }


      shouldComponentUpdate() {
        return true;
      }

      onChange(event) {
        this.setState({
            select: event.target.value
        })
    }

    render() {
        return (
            <div>
        <h1 class="center">Top Upcoming 50 Animes</h1>
        {this.state.data[0]
          ? <h1>Title: {this.state.data[this.state.select-1].title}</h1>

          : <h1>loading</h1>}

        {this.state.data[0]
          ? <h1>Rank: {this.state.data[this.state.select-1].rank}</h1>
          
          : <h1>loading</h1>}

        {this.state.data[0]
          ? <img class="center" src ={this.state.data[this.state.select-1].image_url} />
          
          : <h1>loading</h1>}

        {this.state.data[0]
          ? <h1>Likes: {this.state.data[this.state.select-1].members}</h1>
          
          : <h1>loading</h1>}


        <form>
            <div>
                <h1>put any number from 1 to 50</h1>
                <input class="center" type="text" value={this.state.nothing} onChange={(event) => this.onChange(event)}/>
            </div>
        </form>
        </div>
        )




    }
}
