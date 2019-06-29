import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import { Carousel } from 'react-responsive-carousel';
import myReads from '../images/myReads.jpg';
import coinopoly from '../images/coinopoly.jpg';
import voynich from '../images/voynich.jpg';
import biblio from '../images/biblio.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"
ß
// TODO: turn all <img/> tags into Gatsby <Img> comps

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "museums-explorer.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       const imageData = data.desktop.childImageSharp.fluid
       return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
          <div>
            <Img fluid={imageData} />
            <p className="legend">Museums Explorer</p>
          </div>
          <div>
            <img src={myReads} />
            <p className="legend">Personal Bookshelf Organiser</p>
          </div>
          <div>
            <img src={coinopoly} />
            <p className="legend">Cryptocurrency Portfolio Tracker</p>
          </div>
          <div>
            <img src={voynich} />
            <p className="legend">Matching Game</p>
          </div>  
          <div>
            <img src={biblio} />
            <p className="legend">Booknotes App</p>
          </div>
        </Carousel>
       )
      }
     }
     />
  </Layout>
)

export default Portfolio
