import React, { Component } from 'react';
import axios from 'axios'


export default class Memes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            mounted: true
        }
    }
    componentDidMount() {
        this.callApi()
    }
    shouldComponentUpdate() {

        return true;
    }
    callApi() {
        axios({


            method: "get",
            url: "https://api.imgflip.com/get_memes",

        }).then((response) => {
            this.setState({ data: response.data.data.memes })

        }).catch((e) => {
            console.log("error", e);
        })

    }
    render() {
        var mem = this.state.data.map((item, index) => {
            return (
                <div key={index} className="raw" style={{width:"250px",height:"250px",marginLeft:"5px",marginRight:"5px",display:'inline-grid' }} >
                    
                        <img src={item.url} alt={item.name} width="250" height="300" />
                
                </div>


            )
        })
        return (
            <div className="container">
                <h1>Want to be a professional Memer ? .. you need to visit our site more <br/> {mem} </h1>
            </div>
        )
    }
}