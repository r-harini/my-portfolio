import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../img/logo.JPG';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark" fixed="top" >
  <Navbar.Brand as={Link} to="/" className='m-auto'>
        R. Harini
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
            <Nav.Link as={Link} to="/my-portfolio">Home</Nav.Link>
            <Nav.Link as={Link} to="/my-portfolio/about">About</Nav.Link>
            <Nav.Link as={Link} to="/my-portfolio/interests">Interests</Nav.Link>
            <Nav.Link as={Link} to="/my-portfolio/resume">Resume</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        )
    }
}

export default Navigation;