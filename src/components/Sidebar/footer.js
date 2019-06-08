import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import config from '../../config.js';


export default class Footer extends React.Component {
  render() {
    const socialLinks = config.socialLinks
    const socialLinksMarkup = socialLinks.map(
      link => {
        return <li key={link.id}>
          <a href={link.url} target='_blank' rel='noopener noreferrer' style={{color: '#808080'}}>
            <FontAwesomeIcon icon={['fab', link.id]} style={{fontSize: '24px'}}/>
          </a>
        </li>
      }
     )
    return (
      <div style={{flex: 0.5}} className="footer-wrapper">
        <ul className="icons">
          {socialLinksMarkup}
        </ul>
    </div>
    )
  }
}