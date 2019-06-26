import React from "react";
import Layout from "../components/layout";
import BackgroundSection from '../components/backgroundImageSection';
import "../assets/sass/index.scss"

import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{position: 'relative', zIndex: 1}}>
      <BackgroundSection>
        <div style={{
          backgroundColor: 'rgba(255,255,255, 0.7)', 
          color: '#240447', 
          fontFamily: 'monospace', 
          fontSize: '2vw', 
          fontWeight: 'bold', 
          marginTop: 15, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginBottom: 20, 
          width: '70%',
          borderRadius: '79% 20% 59% 18% / 17% 72% 21% 64%'
        }} id="landing-container" className="roll-in-blurred-left">
          <div style={{ fontSize: '1em', padding: 15}}>
            <h1 style={{fontSize: '3em', paddingTop: 20, paddingRight: 70, paddingLeft: 70}}><span>Hi, I'm</span><br></br>
              <mark style={{backgroundColor: '#EE015D', color: '#240447'}} className="tracking-in-expand">Sebastian</mark></h1>
            <h3>I'm a web developer living in NYC. </h3>
            <h3>Glad you found me! <span id="highFive" style={{marginLeft: 10, marginRight: 10, textShadow: '10px 10px 10px'}}>🙌</span></h3>
            <h3 style={{paddingBottom: '15px'}}><span id="pointer" style={{textShadow: '10px 10px 10px', paddingLeft: '25px', paddingRight: '10px'}}>👈</span> Check out my projects and posts</h3>
          </div>
        </div>
      </BackgroundSection>
    </div>
  </Layout>
)

export default IndexPage
