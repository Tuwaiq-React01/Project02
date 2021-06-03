import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const allmovies = this.props.topMovies.map((movie, i) => {
            return <MovieCard key={i} movie={movie} />
        })

        return (

            <Container className="mb-5 mt-3">
                <Row className="justify-content-md-center">
                    {allmovies}
                </Row>
            </Container>

        );
    }
}

export default Home;
