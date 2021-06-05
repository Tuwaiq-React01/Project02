import React, { Component } from 'react'
import './StyleAboutApi.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './StyleAboutApi.css';

export default class AboutApi extends Component {
    render() {
        return (
            <div>
                <Container className="container">
                    <Row>
                        <Col className="leftCol">EPIC API</Col>
                        <Col className="rightCol">The EPIC API provides information on the daily imagery 
                        collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC)
                         instrument. Uniquely positioned at the Earth-Sun Lagrange point, 
                         EPIC provides full disc imagery of the Earth and captures unique perspectives 
                         of certain astronomical events such as lunar transits using a 2048x2048 
                         pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture 
                         Cassegrain telescope.</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
