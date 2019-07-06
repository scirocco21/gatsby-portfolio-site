import React from "react";
import Layout from "../components/layout";
import BackgroundSection from '../components/backgroundImageSection';
import "../assets/sass/index.scss"
import config from '../config.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SEO from "../components/seo";

export default class Index extends React.Component {
  
  render() {
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
     <Layout displayFooter={false}>
        <SEO title="Home" />
        <div style={{position: 'relative', zIndex: 1}}>
          <BackgroundSection>
            <div id="overlay-main" className="roll-in-left fade-in">
            
              <div id="text-container-main">
                <h2 id="intro-text-main" style={{ fontSize:"2.5rem", lineHeight: '1.3'}}><span>Hi, I'm</span><br></br>
                  <span className="tracking-in-expand">Sebastian</span>
                </h2>
                
                <hr></hr>
                <ul className="icons">
                  {socialLinksMarkup}
                </ul>
                <p>I'm a web developer living in NYC. </p>
                <p>Glad you found me! <span id="highFive" style={{paddingLeft: '15px'}}>🙌</span></p>
              </div>
            </div>
          </BackgroundSection>
        </div>
  
      </Layout>
    )
  }
}
