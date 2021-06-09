import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import './App.css';

export default class ListMovie extends Component {

    render() {
        return (
<div className="flip-card">	
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <img src={this.props.item.Poster} alt="Avatar"width="300px" height="300px" />
        </div> 
        <div className="flip-card-back">
            <h1>{this.props.item.Title}</h1> 
			<h3>{this.props.item.Year}</h3>
            <h3>{this.props.item.Type}</h3>
			<Button className="btn btn-warning" >Details</Button>
        </div>
	</div>
</div>
        )
    }
}
