import React from "react";
import Layout from "../components/layout";
import BackgroundSection from '../components/backgroundImageSection';
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
          width: '80%',
          borderRadius: '79% 20% 59% 18% / 17% 72% 21% 64%'
        }}>
          <div style={{padding: 25, fontSize: '3vw'}}>
            <h1 style={{fontSize: '6vw', marginTop: 10, padding: 10}}>Hi, I'm <mark style={{backgroundColor: '#F4C402', color: '#240447'}}>Sebastian</mark></h1>
            <h3>I'm a web developer living in NYC.</h3>
            <h3>Glad you found me! 🙌 👍 👏 </h3>
            <h3 style={{marginBottom: 15}}>👈 Check out my projects and posts</h3>
          </div>
        </div>
      </BackgroundSection>
    </div>
  </Layout>
)

export default IndexPage
