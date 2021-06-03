import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class MovieCard extends Component {

    render() {
        return (
            <Col md="4" sm="4" className="mb-3">
                <Card className="card-movie">
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${this.props.movie.poster_path}`}
                        style={{ margin: "auto", objectFit: "cover" }} />
                    <Card.Body className ="mt-1 text-center dark ">
                      
                           <h6> {this.props.movie.title}</h6>
                    
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default MovieCard;
