import React from "react";
import Head from '../components/head'
import "../assets/sass/about.scss"
import DevIcon, {iconList} from "devicon-react-svg";
import config from "../config.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';
import selfie from "../images/selfie.jpg";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../assets/external/style.min.css';

export default class About extends React.Component {  
  render() {
    return(
      <>
        <div style={{padding: '0 40px 40px 40px'}}>
          <Head title="About"></Head>
          <section className="intro">
            <h1 style={{textAlign: "left"}}>About</h1>
            <div id="personal">
                <p><em>I came to web development from a previous career teaching Ancient Greek philosophy and formal logic (you can find my academic work <a href="https://independent.academia.edu/SebastianGertz1" target="_blank" rel="noopener noreferrer">here</a>). I especially enjoy working with React and reasoning through the flow of data from front to backend.</em></p>
                <img src={selfie} alt="Sebastian Gertz" id="selfie"/>
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
          <section id="work-experience">
            <h2 className="subheading-resume">WORK EXPERIENCE</h2>
            <hr style={{width: "60%", borderTop: "2px solid #e83e8c"}}></hr>
            <VerticalTimeline>
              {config.experience.map((item,index) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={item.dates}
                    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon="briefcase" className="icon"/>}
                    key={index}
                  >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h5 className="vertical-timeline-element-subtitle">{item.employer}</h5>
                    {/* <p>
                      Creative Direction, Visual Design
                    </p> */}
                  </VerticalTimelineElement>
                )
              })}
            </VerticalTimeline>
          </section>

        <section id="education">
          <h2 className="subheading-resume">EDUCATION</h2>
          <hr style={{width: "60%", borderTop: "2px solid #e83e8c"}}></hr>
          <VerticalTimeline>
            {config.education.map((item, index) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date={item.year}
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<FontAwesomeIcon icon="graduation-cap" className="icon"/>}
                  key={index}
                >
                  <h3 className="vertical-timeline-element-title">{item.name}</h3>
                  <h5 className="vertical-timeline-element-subtitle">{item.school}</h5>
                  {/* <p> */}
                    {/* Creative Direction, Visual Design */}
                  {/* </p> */}
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </section>
      </section>
    </>
    )
  }
}