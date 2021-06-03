import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'

import { Link } from "react-router-dom";
class MyNavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="light" style={{"backgroundColor":"rgba(93, 23, 73,0.3)"}}>
              <Navbar.Brand as={Link} to="/" >
                <img width="150" src="https://d33wubrfki0l68.cloudfront.net/c6a54be7d89b1ebc31ad2f5558ee470fd4ebd11e/1fb54/institute-images/logo-text-black-centered.png"></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

          );
    }
}

export default MyNavBar;
