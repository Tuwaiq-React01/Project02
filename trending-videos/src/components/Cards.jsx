
import React, { Component } from 'react'
import OneCard from './OneCard'


export default class Cards extends Component {
    componentWillUnmount() {
        console.log("Cars Page Closed")
        localStorage.setItem('videoJson', JSON.stringify(this.props.videos));
    }
    
    render() {
        console.log("dcljnsdcj " + this.props.videos)
        var videoslist = this.props.videos.map((item, i) => {
            return <OneCard item={item} selectedVideo={this.props.selectedVideo} />
        })
        return (
            <div>
             {videoslist}
               
            </div>
        )
    }
}
