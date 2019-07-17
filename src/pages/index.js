import React from "react";
import BackgroundSection from '../components/backgroundImageSection';
import "../assets/sass/index.scss"
import config from '../config.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from "../components/head";

export default class Home extends React.Component {
  
  render() {
    const backgroundImage = "possibe-background.png"
    const socialLinks = config.socialLinks
    const socialLinksMarkup = socialLinks.map(
      link => {
        return <li key={link.id}>
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
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
          <div id="overlay-main" className='scale-in-center'>
            <div id="text-container-main">
              <h1 id="intro-text-main" style={{ fontSize:"2.5rem", lineHeight: '1.3'}}>Sebastian Gertz</h1>             
              <pre style={{fontSize:"2.5rem"}}>{`</>`}</pre>
              <h4>Full-Stack Web Developer</h4>
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
