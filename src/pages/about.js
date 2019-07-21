import React from "react";
import Head from '../components/head'
import "../assets/sass/about.scss"
import DevIcon, {iconList} from "devicon-react-svg";
import config from "../config.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class About extends React.Component {  
  render() {
    return(
      <div style={{padding: '0 40px 40px 40px'}}>
        <Head title="About"></Head>
        <div className="intro-info">
          <h1 style={{textAlign: "left"}}>About</h1>
          {/* <h1>A little bit about myself</h1> */}
          <div id="personal">
            {/* <div id="selfie-wrapper">
              <img src="./assets/SebastianGertz6857.jpg" alt="Profile Picture"/>
            </div> */}
            <p className="lead">I came to web development from a previous career teaching Ancient Greek philosophy and logic (you can find my academic work <a href="https://independent.academia.edu/SebastianGertz1" target="_blank" rel="noopener noreferrer">here</a>). Coding combines my love for problem-solving with my desire to have a tangible impact through my work. I thrive on new challenges and am always seeking to expand my skill set by learning new technologies and frameworks.</p>
          </div>
          <div id="skills">
            <h1>Skills</h1>
            <ul id="skill-icons" class="row">
              {config.skills.map((skill, index) => {
                return (
                  <li key={index} title={skill}>
                    <DevIcon icon={skill} style={{width: "6rem"}}/>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      <div id="resume">
        <h5>Resume</h5>
        <div id="work-experience">
          <h1>Work Experience</h1>
          {config.experience.map(item => {
            return (
              <div class="resume-item">
                <FontAwesomeIcon icon="briefcase"/>
                <div class="description"> 
                  <h5>{item.title}</h5>
                  <h6>{item.employer}</h6>
                  <h6>{item.dates}</h6>
                  <hr/>
                </div>
              </div>
            )
          })}
        </div>
      </div>

  	<div id="education">
      <h1>Education</h1>
        {config.education.map(item => {
          return (
            <div class="resume-item">
            <FontAwesomeIcon icon="graduation-cap"/>      
              <div class="description">
                <h5>{item.name}</h5>
                <h6>{item.school}</h6>
                <h6>{item.year}</h6>
                <hr/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    )
  }
}