import React from 'react'
import { graphql,} from "gatsby";
import Head from '../components/head'
import Img from "gatsby-image";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Highlight from 'react-highlight.js';
import "../assets/monokai.css";
import "../assets/sass/blog_post.scss";
import Disqus from 'disqus-react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {getReadTime} from '../utils/readTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SimpleShareButtons } from "react-simple-share";

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
  const disqusShortname = 'sebastiangertz';
  const disqusConfig = {
      url: props.data.contentfulBlogPost.slug,
      identifier: props.data.contentfulBlogPost.slug,
      title: props.data.contentfulBlogPost.title,
  };

  const Text = ({children}) => <p style={{fontSize: '1.25rem'}}>{children}</p>;
  const options = {
    renderMark: {
      [MARKS.CODE]: code => {
        return (
            <Highlight language="javascript">
              {code}
            </Highlight>
        )
      }
    },
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

  const SocialBar = () => (
    <SimpleShareButtons
      whitelist={["Twitter", "LinkedIn", "Facebook"]}
    />
  );
  return (
    <>
      <Head title={props.data.contentfulBlogPost.title} />
      <div style={{padding: '50px', textAlign: 'left'}}>
        <div>
          <div>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>
              <FontAwesomeIcon icon="calendar" style={{marginRight: "10px"}}/>{props.data.contentfulBlogPost.publishedDate}
              <span style={{marginRight: "15px", marginLeft: "15px"}}>/</span>
              <FontAwesomeIcon icon="clock" style={{marginRight: "10px"}}/>
              {getReadTime(props.data.contentfulBlogPost.content.json)}
            </p>
            {props.data.contentfulBlogPost.tldr.internal.content && <h4>TLDR: <em>{props.data.contentfulBlogPost.tldr.internal.content}</em></h4>}
          </div>
          <div class="icon-bar">
            <SocialBar/>
          </div>
        </div>  
        { 
          props.data.contentfulBlogPost.heroImage && 
          <Img 
            fluid={props.data.contentfulBlogPost.heroImage.fluid} 
            style={{maxWidth: '70%', height: 'auto'}}
          />
        }
        {documentToReactComponents(props.data.contentfulBlogPost.content.json, options)}
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </>
  )
}

export default Blog