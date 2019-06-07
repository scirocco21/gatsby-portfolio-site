import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            style={{  
              width: '100%', 
              height: '100vh',
              backgroundPosition: 'bottom center',
              backgroundRepeat: 'repeat-y',
              backgroundSize: 'cover',
              position: 'absolute',
              zIndex: -1,
              opacity: .6
            }}
          />
       )
      }
     }
    />
)

export default BackgroundSection;