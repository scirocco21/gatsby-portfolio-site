import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ styles, children, imgName }) => (
    <StaticQuery query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(quality: 90, maxWidth: 1260) {
                ...GatsbyImageSharpFluid
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
            // Tag="section"
            // className={className}
            fluid={image.node.fluid}
            style={{  
              ...styles
            }}
          >{children}</BackgroundImage>
       )
      }
     }
    />
)

export default BackgroundSection;