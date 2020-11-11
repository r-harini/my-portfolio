import React, { Component } from 'react'
import {Link, animateScroll as scroll } from 'react-scroll';
import Skills from './Skills';



export default class Resume extends Component {
    render() {
        return (
            <div>
                <center>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500}>
                    <div class="resume-container">
                        <img src={require("../img/resume/experience.png")} className="resume-thumb"></img>
                        <div class="overlay">
                            <div class="text">Experience</div>
                        </div>
                    </div>
                </Link>
                
                <Link activeClass="active" to="academics" spy={true} smooth={true} offset={-70} duration={500}>
                    <div class="resume-container">
                    <img src={require("../img/resume/academics.jpg")} className="resume-thumb"></img>
                    <div class="overlay">
                            <div class="text">Academics</div>
                        </div>
                    </div>
                </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                    <span class="resume-container">
                        <img src={require("../img/resume/skills.jpg")} className="resume-thumb"></img>
                        <div class="overlay">
                            <div class="text">Skills</div>
                        </div>
                    </span>               
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                    <span class="resume-container">
                        <img src={require("../img/resume/projects.jpg")} className="resume-thumb"></img>
                        <div class="overlay">
                            <div class="text">Projects</div>
                        </div>
                    </span>
                </Link>
                
                <Link activeClass="active" to="clubs" spy={true} smooth={true} offset={-70} duration={500}>
                    <span class="resume-container">
                    <img src={require("../img/resume/clubs.jpg")} className="resume-thumb"></img>
                    <div class="overlay">
                            <div class="text">Clubs</div>
                        </div>
                    </span>
                </Link>
                <Link activeClass="active" to="volunteer" spy={true} smooth={true} offset={-70} duration={500}>
                    <span class="resume-container">
                        <img src={require("../img/resume/volunteer.jpg")} className="resume-thumb"></img>
                        <div class="overlay">
                            <div class="text">Volunteer Work</div>
                        </div>
                    </span>     

                </Link>
                
                <br></br>

                </center>

                <div className="experience-section" id="experience">

                </div>
                <div className="academics-section" id="academics">

                </div>
                <div className="skills-section" id="skills">
                    <Skills/>
                </div>
                <div className="projects-section" id="projects">
                
                </div>
                <div className="clubs-section" id="clubs">

                </div>
                <div className="volunteer-section" id="volunteer">

                </div>

                
            </div>
        )
    }
}
