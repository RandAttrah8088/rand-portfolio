import React from 'react'
import './about.css'
import randh from "../../assets/randh.png";
import patternlogo from "../../assets/patternlogo.png";


    const About = () => {
        return (
          <div className="about">
            <div className="about-title">
              <h1>About Me</h1>
              <img src={patternlogo} alt="pattern pic" />
            </div>
            <div className="about-sections">
              <div className="about-left">
                <img src={randh} alt="myphoto" />
              </div>
              <div className="about-right">
                <div className="about-para">
                  <p>
                    Aspiring Front-End Web Developer proficient in HTML, CSS, and
                    JavaScript
                  </p>
                  <p>
                    Developed and contributed to various projects utilizing HTML, CSS,
                    JavaScript, and ReactJs.
                  </p>
                </div>
                <div className="about-skills">
                  <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{ width:"50%"}}></hr>
                  </div>
                  <div className="about-skill">
                    <p>Java Script</p>
                    <hr style={{ width:"70%"}}></hr>
                  </div>
                  <div className="about-skill">
                    <p>React JS</p>
                    <hr style={{ width:"60%"}}></hr>
                  </div>
                  <div className="about-skill">
                    <p>jQuery</p>
                    <hr style={{ width:"50%"}}></hr>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-achivements">
              <div className="about-achivement">
                <h1>5+</h1>
                <p>Years Of Experience</p>
              </div>
              <hr/>
              <div className="about-achivement">
                <h1>60+</h1>
                <p>Project Completed</p>
              </div>
            </div>
          </div>
        );
      };
      

export default About
