import React, { Component } from 'react'
import "./style.css";
export default class University extends Component {
    render() {

        return (
            <div className="uniCard">
             <div>
                <div>{this.props.name}</div>
                <div>{this.props.country}</div>
                </div>
                <a href={this.props.webPage} className="btn">Visit</a>
            </div>
            
        )
    }
}
