import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class MoviesList extends Component
{ 
    render() {
        return (
            
         <div className="Movie">
             <center>
            <Card style={{ width: '16rem' }}>
            <center>{this.props.Poster} </center>
            <Card.Body>
            <Card.Title>{this.props.Title}</Card.Title>
            <Card.Text>{this.props.Year}  </Card.Text>
            <Card.Text>{this.props.imdbID}  </Card.Text>
            <Card.Text>{this.props.Type}  </Card.Text>
            <Button variant="info">Book movie</Button>{' '}
            </Card.Body>
            </Card>
            </center>
         </div>
        )
    }
    }