import React, { Component } from 'react';
import profile from '../img/profile.jpg';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={profile} className="profilepic"></img>
                <br></br>
                <h3>Hello, I am Harini.</h3>
            </div>
        );
    }
}

export default Home;