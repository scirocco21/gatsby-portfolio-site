import React from "react";
import "../assets/sass/index.scss"
import config from '../config.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from "../components/head";
import Chromata from '../utils/chromata.js'


export default class Home extends React.Component {
  componentDidMount() {
    const image = document.querySelector('img')
      const chromata = new Chromata(image, {
        colorMode: "color",
        pathFinderCount: 240,
        speed: 1060,
        turningAngle: Math.PI/2,
        key: "low",
        lineMode: "point",
        lineWidth: 10,
        outputSize: "container"
      })
      chromata.start()
  }
  render() {
    const socialLinksMarkup = config.socialLinks.map(
      link => {
        return <li key={link.id}>
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={['fab', link.id]} style={{marginRight: '1.25rem', fontSize: '2rem'}}/>
          </a>
        </li>
      }
     )

     const styles = {
      width: '100%', 
      height: '100vh',
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'repeat-y',
      backgroundSize: 'cover',
      opacity: 0
     }

    return(
    <>
      <Head title="Home" />
      <div style={{position:"relative", display:'flex', alignItems:"center",  justifyContent: "center"}} className="scale-in-center">
        <div id="overlay-main" style={{position: "absolute"}}>
          <h1 id="intro-text-main">Sebastian Gertz</h1>
          <hr style={{width: '50%', color: 'black'}}></hr>
          <ul className="icons">
              {socialLinksMarkup}
          </ul>
        </div>
        <img style={styles} src={require("../images/dhruvansh-soni-Mo7RooYGXi4-unsplash.jpg")}/>
      </div>
    </>
    )
  }
}