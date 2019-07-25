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
      <>
        <div style={{padding: '0 40px 40px 40px'}}>
          <Head title="About"></Head>

          <section className="intro">
            <h1 style={{textAlign: "left"}}>About</h1>
            <div id="personal">
                <p className="lead"><em>I came to web development from a previous career teaching Ancient Greek philosophy and formal logic (you can find my academic work <a href="https://independent.academia.edu/SebastianGertz1" target="_blank" rel="noopener noreferrer">here</a>). I especially enjoy working with React and reasoning through the flow of data from front to backend.</em></p>
                <img src={selfie} alt="Profile Picture" id="selfie"/>
              </div>
            </section>
          </div>
        <section id="skills" style={{backgroundColor: "#f9f9f9", padding: "20px", marginTop: "20px"}}>
          <h2 className="subheading-resume">SKILLS</h2>
          <hr style={{width: "60%", borderTop: "2px solid #e83e8c"}}></hr>
          <ul id="skill-icons">
            {config.skills.map((skill, index) => {
              return (
                <Fade key={index}>
                  <li key={index} title={skill.name}>
                    <DevIcon icon={skill.iconRef} style={{width: "5rem"}}/>
                    <p>{skill.name}</p>
                  </li>
                </Fade>
              )
            })}
          </ul>
        </section>

        <section id="resume">
          <div id="work-experience">
            <h2 className="subheading-resume">WORK EXPERIENCE</h2>
            <hr style={{width: "60%", borderTop: "2px solid #e83e8c"}}></hr>
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
        </section>

        <section id="education" style={{backgroundColor: "#f9f9f9", padding: "20px", marginTop: "20px"}}>
          <h2 className="subheading-resume">EDUCATION</h2>
          <hr style={{width: "60%", borderTop: "2px solid #e83e8c"}}></hr>
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
        </section>
    </>
    )
  }
}