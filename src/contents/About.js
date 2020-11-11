import React, { Component } from 'react'
import profile from '../img/profile.jpg';

export default class About extends Component {
    render() {
        return (
            <div class="about-container">
                <center>
                    <h1> ABOUT ME</h1>  
                    <br></br>
                    <img src={profile} className="aboutpic"></img>
                    <br></br>
                    <h2>R. Harini</h2>
                    <h4>III year Computer Science Student at VIT Chennai</h4>
                    <h4> Student Co-Lead in IIT PALS, VIT Chennai</h4>
                    <h4>CGPA: 9.33</h4>
                    <h4>Email: harini.ramesh17@gmail.com</h4>
                    <h4>+91-9731559220</h4>
                    
                </center>
            </div>
        )
    }
}
