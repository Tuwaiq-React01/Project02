import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">
              {/* EF_Core_With_React */}
              GameOnTheHouse
              <img src="https://www.freepnglogos.com/uploads/games-png/download-games-png-transparent-for-designing-work-5.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
              </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/favGames">
                        <img src="https://images.squarespace-cdn.com/content/v1/571fab4ad51cd4f5bee60686/1530019536400-OQMKMGKI9OJ1AIH4L65S/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/if_heart_1055045+%281%29.png?format=1000w" width="25" height="25" className="d-inline-block align-top" alt=""></img>                     
                    </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
