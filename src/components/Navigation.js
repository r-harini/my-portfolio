import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../img/logo.JPG';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark" fixed="top">
  <Navbar.Brand as={Link} to="/">
        R. Harini
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/interests">Interests</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        )
    }
}

export default Navigation;