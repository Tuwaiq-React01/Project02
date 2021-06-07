import React, { Component } from 'react'
import Anime from '../components/Anime'
import axios from 'axios'

export default class FavAnime extends Component {
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
          console.log(response.data);
        })
        .catch(() => console.log('error with http request!'));
      }

    render() {
        const mappedAnime = this.state.anime.map(obj => {
            if(obj.userId === 1){
                return (<Anime title = {obj.title} image = {obj.imageUrl} type = {obj.type} actionType = "Delete"/>)
            }
        });

        return (
            
            <div>
                <h2 className="m-3">Favorite Anime for <strong className="text-primary"><a href="./UserInfo">Sultan</a></strong></h2>
                <div className="d-flex justify-content-between flex-wrap">
                    { mappedAnime }
                </div>
            </div>
        )
    }
}
