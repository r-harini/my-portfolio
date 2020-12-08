import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div className="all-skills">
                
                <center><h1>Skills</h1></center>
                <br/>
                <h5>Python</h5>
                <div class="skills-container">
                    <div class="skill python">80%</div>
                </div>

                <h5>Java</h5>
                <div class="skills-container">
                    <div class="skill java">60%</div>
                </div>
                
                <h5>C, C++</h5>
                <div class="skills-container">
                    <div class="skill c">90%</div>
                </div>

                <h5>Tensorflow</h5>
                <div class="skills-container">
                    <div class="skill tensorflow">70%</div>
                </div>

                <h5>MySQL</h5>
                <div class="skills-container">
                    <div class="skill mysql">60%</div>
                </div>

                <h5>HTML, CSS, JavaScript, PHP </h5>
                <div class="skills-container">
                    <div class="skill html">80%</div>
                </div>

                <h5>ReactJS</h5>
                <div class="skills-container">
                    <div class="skill react">40%</div>
                </div>

                <h3></h3>

            </div>
        )
    }
}
