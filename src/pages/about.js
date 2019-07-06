import React from "react";
import Layout from "../components/layout";
import carbon from "../images/carbon.png";

export default class About extends React.Component {
  
  render() {
    return(
      <Layout displayFooter={true}>
       <img style={{width:'100%'}} src={carbon}/>
      </Layout>
    )
  }
}