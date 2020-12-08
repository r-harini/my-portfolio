import React, { Component } from 'react'
import {Link, animateScroll as scroll } from 'react-scroll';
import Skills from './Skills';
import { ExternalLink } from 'react-feather';



export default class Resume extends Component {
    render() {
        return (
            <div class="full-resume-page">
                <center>
                    <h1> RESUME </h1>
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
                    <center><h1>Experience</h1></center>
                    <img src={require("../img/resume/smartbridge.png")} height="100" />
                    <h3>Machine Learning Intern at TheSmartBridge</h3>
                    <h5 style={{color: 'grey'}}> May 2020 - June 2020 ~ 2 mos</h5>
                    <p>Worked with a mentor towards creating a fully functioning website that predicts the life expectancy of an individual with the help of Machine Learning algorithms. Also makes use of IBM cloud services such as Watson Studio to create endpoints for Jupyter Notebook and Node-Red integration for creating the frontend user interface. Towards the end, the project attained an accuracy of 91%</p>

                    <br/>
                    <img src={require("../img/resume/pals.jpg")} height="100" />
                    <h3>Student Co-Lead in IIT PALS VITCC</h3>
                    <h5 style={{color: 'grey'}}> Aug 2020 - Present</h5>
                    <p>Being in touch with the IIT Alumni to provide industrial exposure to students of the the college and new opportunities to learn and showcase their skills. Taking part in various events and lectures held by the Alumni as well.</p>

                    <br/>
                    <img src={require("../img/resume/biocon.jpg")} height="100" />
                    <h3>Biocon Intern</h3>
                    <h5 style={{color: 'grey'}}> Oct 2016 - Feb 2017 ~ 5 mos</h5>
                    <p>
                        One of the 7 students who got selected from the entire 11th batch after undergoing 2 rigorous rounds of tests and a final interview. Visited Biocon twice and interacted on multiple Skype calls with various researchers working in the company. At the end of the internship, we were given a chance to present our ideas to multiple researchers and employees.
                    </p>
                </div>

                <div className="academics-section" id="academics">
                <center><h1>Academics</h1></center>
                    <h4>CGPA </h4><hr/>9.33
                    <br/>
                    <br/>
                    <br/>
                    <h4>Courses undertaken</h4> <hr/>
                    <ul>
                        <li> Data Structures and Algorithms</li>
                        <li>Database Management Systems</li>
                        <li>Operating Systems</li>
                        <li>Calculus for Engineers</li>
                        <li>Discrete Mathematics</li>
                        <li>Statistics for Engineers</li>
                        <li>Machine Learning</li>
                        <li>Natural Language Processing</li>
                        <li>Artificial Intelligence</li>
                        <li>Applied Linear Algebra</li>
                        <li>Object Oriented Programming</li>
                        <li>Internet Web Programming</li>
                    </ul>
                    <br/>
                    <br/>
                    <h4>Top Scored subjects</h4><hr/>
                    <ul>
                        <li> Data Structures and Algorithms</li>
                        <li>Operating Systems</li>
                        <li>Object Oriented programming (C and C++)</li>
                        <li>Theory of Computation</li>
                        <li>Discrete Mathematics</li>
                        <li>Statistics for Engineers</li>
                    </ul>


                </div>
                <div className="skills-section" id="skills">
                
                    <Skills/>
                </div>
                <div className="projects-section" id="projects">
                    <center><h1>Projects</h1></center>

                    <br/>

                    <h3 ><a href="https://github.com/r-harini/Fake-or-Real-News-Detection" style={{color: 'black'}}> Optimized Fake News Detection </a><ExternalLink/></h3>
                    <h6 style={{color: 'grey'}}>Natural Language Processing, Neural Networks, Tensorflow GPU</h6>
                    <p>Aims at classifying fake news pertaining to the Presidential elections. With the help of GloVe embeddings to extract weights of the words, neural networks with LSTM layers have been incorporated to get an accuracy of 99.8%.
                        The training of the neural network has been optimized with the help of GPU and distributed training. Furhter compared the performance with ML models such as Logistic regression, SVM and Naive Bayes.
                    </p>

                    <br/>

                    <h3><a href="https://github.com/r-harini/Blood_Bank_Donation_System" style={{color: 'black'}}> Blood Bank Donation System </a> <ExternalLink/></h3>
                    <h6 style={{color: 'grey'}}>HTML, CSS, MySQL, PHP</h6>
                    <p>Online portal for blood donors, hospitals and blood banks to donate, store and supply to patients according to their blood types and needs.
                         In the portal, the donor can specify the quantity and the corresponding blood type to be donated. Further, the blood bank can keep track of the total quantity available and the hospitals 
                         can place orders accordingly, in turn changing the total quantity. </p>

                    <br/>

                    <h3><a href="https://github.com/r-harini/Traffic-Sign-Recognition" style={{color: 'black'}}> Traffic Sign Recognition </a><ExternalLink/></h3>
                    <h6 style={{color: 'grey'}}>Convolutional Neural Networks, Tensorflow</h6>
                    <p>Implemented several neural network models such as LeNet, GridSearch,etc. to classify 43 classes of traffic sign with over 50,000 images.
                        The model attained an accuracy of 97.31%. Further, a comparison was drawn between various ML models such as SVM and Random Forest to analyze the differences.</p>

                    <br/>

                    <h3><a href="https://github.com/r-harini/OneStop" style={{color: 'black'}}>OneStop - One Place to Find All </a><ExternalLink/></h3>
                    <h6 style={{color: 'grey'}}>Django, SQLite, OpenWeather API, CSS</h6>
                    <p> A web application for all functionalities such as viewing the weather conditions of various cities, calendar with the ability to add, update and delete events and a To-Do list to track all the tasks. Currently working on integrating Google Calendar API for event creation and update.</p>

                    <br/>

                    <h3><a href="https://github.com/r-harini/Product-Price-Prediction" style={{color: 'black'}}> Price Prediction System </a><ExternalLink/></h3>
                    <h6 style={{color: 'grey'}}>Natural Language Processing, HTML, CSS, Bootstrap, Flask Server</h6>
                    <p>System for sellers to receive suggested selling prices to make maximum profit based on customer reviews, shipping fee and product description. HTML, CSS and Flask Server used for the front end and hosting the model.</p>

                    <br/>

                    <h3><a href="https://github.com/r-harini/Bash-Like-shell-From-Scratch" style={{color: 'black'}}> Creating a Bash-like Shell from Scratch </a><ExternalLink/></h3>
                    <h6 style={{color: 'grey'}}>C</h6>
                    <p> Implementing all the basic functionalities of a Bash Shell such as ls, pwd, exit. Further implemented functionalities related to file handling, expression calculations and tracking the log of each commands</p>

                    <br/>

                    <h3>Voice Controlled Disaster Management Car</h3>
                    <h6 style={{color: 'grey'}}>Arduino</h6>
                    <p> Designed and implemented a bluetooth voice-controlled car with added functionalities such as adjusting the headlights with respect to the ambient lighting, obstacle detection along with fire detection and alarm. In cases of disasters, this bot can travel to dark and isolated places.</p>
                    
                    <br/>
                    
                    <h3><a href="https://github.com/r-harini/Exercise-Tracker" style={{color: 'black'}}>Exercise Tracker - A mini Project </a><ExternalLink/></h3>
                    <h6 style={{color: 'grey'}}>Mongo DB, Express, React JS, Node</h6>
                    <p>A MERN stack web application to keep track of the users and corresponding exercises along with timestamps.</p>

                    

                </div>
                <div className="clubs-section" id="clubs">
                    <center><h1>Clubs</h1></center>

                    <br/>

                    <h3>Enactus - Entrepreneurship Action Us</h3>

                    <p> 
                    Aim at creating job opportunities for the underprivileged and simultaneously tackling environment related problems by creating small businesses.
                    <br/>
                        <b>Project Malar:</b> Converting the waste flowers in temples into incense sticks using different formulations and selling them in markets.
                        <br/>
                        <b>Project Inara:</b> Training the slums of Padur to make bowls and eco friendly candles out of discarded coconut shells.
                    </p>

                    <br/>

                    <h3>IIT PALS Initiative</h3>
                    <p> 
                    Being in touch with the IIT Alumni to provide industrial exposure to students of the the college and new opportunities to learn and showcase their skills. 
                    Simultaneously, taking part in various competitions, events and lectures held by the Alumni as well.
                    </p>

                    <br/>

                    <h3>IEEE Computer Society</h3>
                    <p> 
                        Worked with a team of 5 to create an IoT based car racing game using Node MCU and Unity. Attended various bootcamps and events held by the club as well.
                    </p>



                </div>
                <div className="volunteer-section" id="volunteer">
                    <center><h1>Volunteer Work</h1></center>

                    <br/>

                    <h3> Fundraiser Campaign with Spherule Foundation and Fundcorps</h3>
                    <p>Ran a crowdfunding campaign to provide food, create awareness and report cases of COVID-19 affected people from low-income communities. Successfully raised nearly Rs. 40,000 within 7 days.</p>

                    <br/>
                    
                    <h3> TEDx VIT Chennai </h3>
                    <h6 style={{color: 'grey'}}>Sponsorship Coordinator</h6>
                    <p>Working with a team of 60 OC members and a Sponsorship team of 5. Successfully brought several sponsors such as Dineout, Souled Store, ITC,etc. for our virtual and live events.</p>

                    <br/>
                    
                    <h3> TechnoVIT : VIT's Technical Fest </h3>
                    <h6 style={{color: 'grey'}}>Sponsorship Coordinator</h6>
                    <p>Worked with a team of 30 members. Successfully brought several sponsors such as Dineout, Amazon, KFC,etc. for the fest.</p>

                    <br/>

                    <h3> Reap Benefit Volunteer</h3>
                    <p>We conducted multiple audits across the campus to calculate the total water consumption and waste generated.
To minimize them, we installed various devices and came up with different ideas to make our campus more eco-friendly.
We also volunteered to clean a rural village, and a government school along with providing better facilities and spreading awareness among the people.</p>
                </div>

                
            </div>
        )
    }
}
