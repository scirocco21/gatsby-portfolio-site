import React from "react";
import Layout from "../components/layout";
import BackgroundSection from '../components/backgroundImageSection';
import "../assets/sass/index.scss"

import SEO from "../components/seo";

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{position: 'relative', zIndex: 1}}>
      <BackgroundSection>
        <div id="circle" className="roll-in-blurred-left">
          <div id="text-container-main">
            <h1 id="intro-text-main"><span>Hi, I'm</span><br></br>
              <mark style={{backgroundColor: '#EE015D', color: '#240447'}} className="tracking-in-expand">Sebastian</mark></h1>
            <h3>I'm a web developer living in NYC. </h3>
            <h3>Glad you found me! <span id="highFive">🙌</span></h3>
            <h3><span id="pointer">👈</span> Check out my projects and posts</h3>
          </div>
        </div>
      </BackgroundSection>
    </div>
  </Layout>
)

export default Index
