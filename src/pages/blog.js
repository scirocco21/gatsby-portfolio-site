import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from "../components/layout";
import Img from 'gatsby-image';
import "../assets/sass/blog.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: { fields: publishedDate, order: DESC}) {
        edges {
          node {
            title 
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            heroImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return  (
    <Layout displayFooter={true}>
      <Head title="Blog" />
      <div style={{textAlign: 'left', padding: '0 40px 40px 40px'}}>
        <ul style={{listStyle: 'none', padding: '0',margin: '0'}}>
        <h1>Blog</h1>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li style={{marginBottom: '15px'}} className="post-card">
                <Link to={`/blog/${edge.node.slug}`}>
                  <div style={{display: 'flex', alignContent: 'center', alignItems: 'center', border: '1px solid #D3D3D3', borderRadius: '5px', boxShadow: '0px 0px 1px 1px #D3D3D3	'}}>
                    <div style={{padding: '10px 0 10px 10px', height: '100%', minWidth: '33%', width: '33%'}}>
                      <Img fluid={edge.node.heroImage.fluid} style={{alignSelf: 'flex-start'}}/>
                    </div>
                    <div style={{ flex: '1 1 auto', paddingLeft: '10px', paddingRight: '10px'}}>
                      <h2>{edge.node.title}</h2>
                      <p>{edge.node.publishedDate}</p>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPage