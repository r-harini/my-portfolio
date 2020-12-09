import React, { Component } from 'react';
import profile from '../img/profile.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={profile} className="profilepic"></img>
                <br></br>
                <center>
                    <h3><ReactTypingEffect speed={100} typingDelay={1000} text={["An inquisitive 20 yr old who is extremely passionate about learning something new and challenging."]}/></h3>
                </center>
                
                
            </div>
        );
    }
}

export default Home;