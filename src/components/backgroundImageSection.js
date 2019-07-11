import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children, imgName }) => (
    <StaticQuery query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      )
      if (!image) {
        return null
      }
       return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={image.node.fluid}
            style={{  
              width: '100%', 
              minHeight: '100vh',
              backgroundPosition: 'bottom center',
              backgroundRepeat: 'repeat-y',
              backgroundSize: 'cover',
            
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
             
              
            }}
          >{children}</BackgroundImage>
       )
      }
     }
    />
)

export default BackgroundSection;