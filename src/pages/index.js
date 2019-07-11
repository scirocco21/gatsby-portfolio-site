import React from "react";
import BackgroundSection from '../components/backgroundImageSection';
import "../assets/sass/index.scss"
import config from '../config.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from "../components/head";


export default class Home extends React.Component {
  
  render() {
    const backgroundImage = "new-background.png"
    const socialLinks = config.socialLinks
    const socialLinksMarkup = socialLinks.map(
      link => {
        return <li key={link.id}>
          <a href={link.url} target='_blank' rel='noopener noreferrer' style={{color: '#48017C'}}>
            <FontAwesomeIcon icon={['fab', link.id]} style={{marginRight: '1.25rem', fontSize: '2rem'}}/>
          </a>
        </li>
      }
     )
     
    return(
    <>
      <Head title="Home" />
      <div style={{position: 'relative', zIndex: 1}}>
        <BackgroundSection imgName={backgroundImage}>
          <div id="overlay-main" className='roll-in-left tracking-in-expand'>
            <div id="text-container-main">
              <h1 id="intro-text-main" style={{ fontSize:"2.5rem", lineHeight: '1.3'}}><span>Hi, I'm</span><br></br>
                <span className="tracking-in-expand">Sebastian</span>
              </h1>
              <h4>I'm a web developer living in NYC.</h4>
              <h4>Glad you found me! <span id="highFive" style={{paddingLeft: '15px'}} role="img" aria-label="High Five animation">🙌</span></h4>
              <hr></hr>
              <ul className="icons">
                {socialLinksMarkup}
              </ul>
            </div>
          </div>
        </BackgroundSection>
      </div>
      </>
    )
  }
}
