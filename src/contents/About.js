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
                    <h5> Hello, I am Harini. </h5>
                    <br/>
                    <h5> I am an only child which means I have always had to entertain myself. One thing that has always kept me occupied is experimenting and learning new things.</h5> 
                    <br/>
                    <h5>I dove deep into world of books, learnt how to sing and practice piano and even learnt ABACUS at a very young age. </h5>
                    <br/>
                    <h5>Discovering something new and learning it has always excited me and has urged me to develop a wide range of interests overtime. I have always wanted to become a million things in my life. 
                        Once an astronomer, then a doctor, then a singer, then a pianist, then a writer, then a biotechnologist, then a software engineer, then a data scientist and now added to that, a quantum physicist. </h5>
                    <br/>
                    <h5> My goal in life is to have a career which throws challenging tasks at me with opportunities to discover, explore and learn something new. </h5>
                    
                    
                </center>
            </div>
        )
    }
}
