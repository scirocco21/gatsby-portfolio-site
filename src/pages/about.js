import React from "react";
import Head from '../components/head'
import carbon from "../images/carbon.png";

export default class About extends React.Component {
  
  render() {
    return(
      <>
      <Head title="About"></Head>
       <img 
        style={{width:'100%'}} 
        src={carbon} 
        alt="code snippet"/>
      </>
    )
  }
}