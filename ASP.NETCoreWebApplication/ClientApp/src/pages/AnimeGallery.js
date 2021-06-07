import React, { Component } from 'react'
import Anime from '../components/Anime'
import axios from 'axios'

export default class AnimeGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anime :  []
        }
      }

    componentDidMount() {
        this.callApi();
    }

    callApi() {
        axios({
          method : 'GET',
          url : 'https://localhost:5001/api/v1/Anime'
        })
        .then(response => {
          this.setState({ anime : response.data });
        })
        .catch(() => console.log('error with http request!'));
      }

    render() {
        return (
            <div className="d-flex justify-content-between flex-wrap">
                {this.state.anime.map(obj => <Anime title = {obj.title} image = {obj.imageUrl} type = {obj.type} actionType = "Add To" bg = "primary"/>)}
            </div>
        )
    }
}
