import React from "react";
import Head from '../components/head'
import "../assets/sass/about.scss"
import DevIcon, {iconList} from "devicon-react-svg";
import config from "../config.js"
import Fade from 'react-reveal/Fade';
import selfie from "../images/selfie.jpg";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../assets/external/style.min.css';

export default class About extends React.Component {  
  render() {
    const cap = <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" className="education-path"></path></svg>

      const briefcase = <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" className="work-path"></path></svg>

    return(
      <>
        <div style={{padding: '0 40px 40px 40px'}}>
          <Head title="About"></Head>
          <section className="intro">
            <h1>About</h1>
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
                    icon={briefcase}
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
                  icon={cap}
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