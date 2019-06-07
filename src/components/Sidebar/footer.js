import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends React.Component {
  render() {
    const socialLinks = this.props.socialLinks
    const socialLinksMarkup = socialLinks.map(
      link => {
        return <li key={link.id}>
          <a href={link.url} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={['fab', link.id]} style={{color: 'black', fontSize: '18px'}}/>
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