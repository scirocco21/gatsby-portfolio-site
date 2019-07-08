import React from "react"
import { Carousel } from 'react-responsive-carousel';
import myReads from '../images/myReads.jpg';
import coinopoly from '../images/coinopoly.jpg';
import voynich from '../images/voynich.jpg';
import biblio from '../images/biblio.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";
import "../assets/sass/portfolio.scss";
import Head from '../components/head';


// TODO: turn all <img/> tags into Gatsby <Img> comps
// TODO: wrap carousel images in Link tags 

const Portfolio = () => (
  <>
    <Head title="Portfolio" />
    <StaticQuery query={graphql`
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
       const imageData = data.desktop.childImageSharp.fluid
       return (
         <>
          <section id="carousel">
            <h1 style={{textAlign: 'left'}}>Portfolio</h1>
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
          </section>
        </>
       )
      }
     }
     />
    </>
)

export default Portfolio
