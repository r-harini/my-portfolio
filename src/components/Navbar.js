import React, {Component} from 'react';
import {Nav} from "react-bootstrap";
import {withRouter} from "react-router";
import Navitem from './NavItem';

class Navbar extends Component {
    render(){
        return(
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/"></Navitem>
                    <Navitem item="About" tolink="/about"></Navitem>
                    <Navitem item="Interests" tolink="/interests"></Navitem>
                    <Navitem item="Resume" tolink="/resume"></Navitem>
                </ul>
            </nav>
        )
    }
}

export default Navbar