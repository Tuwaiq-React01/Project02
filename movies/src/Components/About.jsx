import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div>
                <Container fluid className="text-center mt-5 p-5" >
                <img width="500" src="https://d33wubrfki0l68.cloudfront.net/c6a54be7d89b1ebc31ad2f5558ee470fd4ebd11e/1fb54/institute-images/logo-text-black-centered.png"></img>
                <p className="p-5">
                     All data are from <span><a href="https://www.themoviedb.org/documentation/api">TMDP API</a></span>
                </p>
                </Container>
            </div>
        );
    }
}

export default About;
