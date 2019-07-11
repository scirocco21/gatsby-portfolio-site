import React from 'react'
import BackgroundSection from '../components/backgroundImageSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/sass/contact.scss'

const backgroundImage = "triangles-download.png"

const Contact = () => ( 
 <BackgroundSection imgName={backgroundImage}> 
   <div id="form-container"> 
        <h1>Get in touch</h1>
        <form 
          id="contact-form" 
          name="contact-form"
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
        >
         
          <input 
          type="hidden" 
          name="form-name" 
          value="contact-form" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field"/>
            </label>
          </p>
          <input  type="text" name="name" maxlength="100" size="60" placeholder="Name"/>
          <br/>
          <input  type="text" name="email" maxlength="100" size="60" placeholder="myname@email.com"/>
          <br/>
          <input type="text" name="subject" maxlength="200" size="60" placeholder="Subject" />
          <br></br>
          <textarea  name="message" maxlength="2000" cols="6" rows="6" placeholder="What's up? I'm working on..."></textarea>
          <br></br>
          <button style={{margin: '0', padding: '0', backgroundColor: 'rgba(225, 225, 225, 0)', border: 'none'}} type="submit" value="Submit">
            <FontAwesomeIcon icon="paper-plane" style={{ fontSize: '2rem'}}>
            </FontAwesomeIcon>
          </button>
        </form>
      </div>
       </BackgroundSection> 

)

export default Contact;