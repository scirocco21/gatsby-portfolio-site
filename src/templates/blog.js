import React from 'react'
import { graphql,} from "gatsby";
import Head from '../components/head'
import Img from "gatsby-image";
import { BLOCKS } from '@contentful/rich-text-types';

import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      heroImage {
        fluid {
        ...GatsbyContentfulFluid
        }
      }
      tldr {
        internal {
          content
        }
      }
      publishedDate(formatString: "MMMM Do, YYYY")
      content {
        json
      }
    }
  } 
`

const Blog = (props) => {
  const Text = ({ children }) => <p>{children}</p>;
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} style={{maxWidth: '100%',
          height: 'auto'}}/>
      },
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    }
  }
  return (
    <>
      <Head title={props.data.contentfulBlogPost.title} />
      <div style={{padding: '20px', textAlign: 'left'}}>
        <div>
          <div>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {props.data.contentfulBlogPost.tldr.internal.content && <p>TLDR: <em>{props.data.contentfulBlogPost.tldr.internal.content}</em></p>}
          </div>
        </div>  
          {props.data.contentfulBlogPost.heroImage && <Img fluid={props.data.contentfulBlogPost.heroImage.fluid} style={{maxWidth: '70%', height: 'auto'}}/>}
        {documentToReactComponents(props.data.contentfulBlogPost.content.json, options)}
      </div>
    </>
  )
}

export default Blog