import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialBar = (props) => {
  return (
    <div className="icon-bar">	
      <FacebookShareButton url={props.url} className="facebook">
        <span className="icon">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </span>
      </FacebookShareButton>
      <LinkedinShareButton url={props.url} className="linkedin">
        <span className="icon">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </span>
      </LinkedinShareButton>
      <TwitterShareButton url={props.url} className="twitter">
        <span className="icon">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </span>
      </TwitterShareButton>
    </div>
  )  
}

export default SocialBar;