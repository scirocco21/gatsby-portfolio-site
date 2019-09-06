import React from 'react'
import BackgroundSection from '../components/backgroundImageSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/sass/contact.scss'
import config from '../config.js'
import Head from '../components/head';

const backgroundImage ="soft-background.png"

const styles = {
  width: '100%', 
  minHeight: '100vh',
  backgroundPosition: 'bottom center',
  backgroundRepeat: 'repeat-y',
  backgroundSize: 'cover'
}

class Contact extends React.Component {
  state = {
    value: ""
  }

  handleChange = event => this.setState({value: event.target.value})
  
  render() {
    return (
      <>
        <Head title="Contact"/>
        <BackgroundSection imgName={backgroundImage} styles={styles}>
          <div style={{padding: "20px"}}>
            <h1 style={{paddingRight: "20px"}}>Contact</h1> 
            <p style={{fontSize: "1.5em"}}><em>Thanks for stopping by! What are you working on? Don't be a stranger - I'd love to hear from you.</em></p>
            <div className="wrapper">
              <div className="row">
                <div className="column">
                  <div id="form-container" className="scale-in-center"> 
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
                        value="contact-form" 
                      />
                      <p hidden>
                        <label>
                          Don’t fill this out:{" "}
                          <input name="bot-field"/>
                        </label>
                      </p>
                      <input  type="text" name="name" maxLength="100" required="required" size="60" placeholder="Name"/>
                      <br/>
                      <input  type="text" name="email" maxLength="100" required="required" size="60" placeholder="you@email.com"/>
                      <br/>
                      <input type="text" name="subject" maxLength="200" size="60" placeholder="Subject (optional)" />
                      <br></br>
                      <textarea  name="message" required="required" maxLength="2000" cols="6" rows="9" placeholder="Your message goes here..."></textarea>
                      <br></br>
                      
                        <button style={{position: 'relative', marginTop: '17px', padding: '20px', borderRadius: '50%', backgroundColor: 'rgba(225, 225, 225, 0)', border: '4px solid black',boxShadow: "0px 0px 1px 2px rgba(0,0,0,0.75)"}} type="submit" value="Submit">
                        <FontAwesomeIcon icon="envelope" style={{ fontSize: '40px'}}>
                        </FontAwesomeIcon>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="column">
                  <section id="social" style={{marginBottom: '25px'}}>
                  <h4 style={{fontFamily: "Garamond", fontSize: "1rem", fontWeight: "700", alignSelf: "left"}}>SAY HELLO</h4>
                  <ul style={{padding: "0", listStyle: "none"}}>
                    {config.socialLinks.map(link => {
                      return <li key={link.id} style={{display: "inline", marginRight: '40px'}}>
                      <a href={link.url} target='_blank' rel='noopener noreferrer' style={{color: 'black'}}>
                        <FontAwesomeIcon icon={['fab', link.id]} style={{fontSize: '48px'}}/>
                      </a>
                    </li>
                    })}
                  </ul>
                  </section>
                  <section id="signup">
                  <h4 style={{fontFamily: "Garamond", fontSize: "1rem", fontWeight: "700", justifySelf: "left"}}>NEWSLETTER</h4>
                  <p>I'll occasionally send an email with some things I'm writing, discovering, doing or contemplating. You can sign up below.</p>
                  <div id="mc_embed_signup">
                    <form action="https://gmail.us3.list-manage.com/subscribe/post?u=b2be08d27a2ce27aa27a77fa0&amp;id=0dd6f213fa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                          <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="email address" minLength="5" maxLength="64" required/>
                          <div 
                          style={{position: 'absolute', left: '-5000px', ariaHidden:'true'}}><input type="text" name="b_b2be08d27a2ce27aa27a77fa0_0dd6f213fa" tabIndex="-1"/>
                          </div>
                          <br/>
                          <button id="newsletter-signup" type="submit" name="subscribe" id="mc-embedded-subscribe" style={{backgroundColor: "black", color: "white", borderRadius: "8px", padding: "2px 14px 2px 14px", borderCollapse: "collapse"}}><h3 style={{fontSize:"18px"}}>Subscribe</h3></button>
                        </div>
                    </form>
                  </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </BackgroundSection>
      </>
    )
  }
}

export default Contact;