import React, {useState} from "react"
import { graphql, StaticQuery } from 'gatsby'
import "../assets/sass/portfolio.scss";
import Head from '../components/head';
import ListShuffler from '../components/ListShuffler.js'

class Portfolio extends React.Component {
  render() { 
    return(
      <>
        <Head title="Portfolio" />
        <StaticQuery 
          query={graphql`
            query {
              desktop: file(relativePath: { eq: "museums-explorer.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={data => {
            return (
              <section style={{padding: '0 40px 40px 40px'}}>
                <h1 style={{textAlign: 'left'}}>Portfolio</h1>
                <ListShuffler />
              </section>
            ) 
          }}
        />
      </>
    )
  }
}

export default Portfolio
