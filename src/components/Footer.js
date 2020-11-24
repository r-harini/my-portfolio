import React, { Component } from 'react'
import { GitHub, Linkedin, Instagram, Mail, Facebook} from 'react-feather';

export default class Footer extends Component {
    render() {
        return (
            <div class="social">
                <center>
                    <a href="https://github.com/r-harini" style={{color:"black", padding: 10 }}><GitHub/></a>
                    <a href="https://www.linkedin.com/in/harini-ramesh/" style={{color:"black", padding: 10 }}><Linkedin/></a>
                    <a href="https://www.instagram.com/niniii_17/" style={{color:"black", padding: 10 }}><Instagram/></a>
                    <a href="https://www.facebook.com/harini.ramesh17/" style={{color:"black", padding: 10}}><Facebook/></a>
                    <br/>
                    <div style={{padding:10}}>
                        <Mail/> harini.ramesh17@gmail.com
                    </div>
                    
                </center>
            </div>
        )
    }
}
