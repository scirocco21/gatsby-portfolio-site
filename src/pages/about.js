import React from "react";
import Head from '../components/head'
import "../assets/sass/about.scss"
import DevIcon, {iconList} from "devicon-react-svg";
import config from "../config.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';
import selfie from "../images/selfie.jpg"


export default class About extends React.Component {  
  render() {
    return(
      <div style={{padding: '0 40px 40px 40px'}}>
        <Head title="About"></Head>
        <div className="intro-info">
          <h1 style={{textAlign: "left"}}>About</h1>
          {/* <h1>A little bit about myself</h1> */}
          <div id="personal">
            <p className="lead"><em>I came to web development from a previous career teaching Ancient Greek philosophy and logic (you can find my academic work <a href="https://independent.academia.edu/SebastianGertz1" target="_blank" rel="noopener noreferrer">here</a>). Coding combines my love for problem-solving with my desire to have a tangible impact through my work. I thrive on new challenges and am always seeking to expand my skill set by learning new technologies and frameworks.</em></p>
          </div>
          <img src={selfie} alt="Profile Picture" id="selfie"/>
          <div id="skills" style={{marginTop: "5rem"}}>
            <h3>Skills</h3>
            <ul id="skill-icons">
              {config.skills.map((skill, index) => {
                return (
                  <Fade key={index}>
                    <li key={index} title={skill}>
                      <DevIcon icon={skill} style={{width: "5rem"}}/>
                    </li>
                  </Fade>
                )
              })}
            </ul>
          </div>
        </div>

      <div id="resume">
        <div id="work-experience">
          <h4>Work Experience</h4>
          {config.experience.map((item,index) => {
            return (
                <div className="resume-item" key={index}>
                  <Fade key={index}>
                    <FontAwesomeIcon icon="briefcase"/>
                    <div className="description"> 
                      <h5>{item.title}</h5>
                      <h6>{item.employer}</h6>
                      <h6>{item.dates}</h6>
                      <hr/>
                    </div>
                  </Fade>
                </div>
            )
          })}
        </div>
      </div>

  	<div id="education">
      <h4>Education</h4>
        {config.education.map((item, index) => {
          return (
            <div className="resume-item" key={index}>
              <Fade key={index}>
                <FontAwesomeIcon icon="graduation-cap"/>      
                  <div className="description">
                    <h5>{item.name}</h5>
                    <h6>{item.school}</h6>
                    <h6>{item.year}</h6>
                    <hr/>
                  </div>
              </Fade>
            </div>
          )
        })}
      </div>
    </div>
    )
  }
}