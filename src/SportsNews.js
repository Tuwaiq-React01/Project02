import React, { Component } from 'react'
import SportsArts from './SportsArts'
import axios from 'axios'

export default class Memes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            mounted:true
        }
    }
   
    callApi() {
        axios({


            method: "get",
            url: "https://livescore6.p.rapidapi.com/news/list",
            params: {category: 'soccer'},
            headers: {
              'x-rapidapi-key': '96ba2cc1d4mshd89fd2c4da6ee3cp189194jsn9ee3e4347e14',
              'x-rapidapi-host': 'livescore6.p.rapidapi.com'
            }

        }).then((response) => {
            this.setState({ data: response.data.arts })

        }).catch((e) => {
            console.log("error", e);
        })

    }
    render() {
       var articles=this.state.data
       
        
        return (
            <div>
                <h3 style={{marginTop:'10px'}}>There are a limited number of API calls PLEASE use it carefully</h3>
                <button onClick={()=>this.callApi()}>CAll the API </button>
               <SportsArts ap={articles}/>
            </div>
        )
    }
}