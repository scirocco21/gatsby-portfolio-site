import React from "react";
import Layout from "../components/layout";
import BackgroundSection from '../components/backgroundImageSection';
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{position: 'relative', zIndex: 1}}>
      <BackgroundSection/>
      <div style={{color:'black', fontSize: 48, fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
         Hi people
      </div>
    </div>
  </Layout>
)

export default IndexPage
