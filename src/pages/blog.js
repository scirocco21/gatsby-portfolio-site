import React from 'react';
import { StaticQuery, graphql} from "gatsby"
import "../assets/sass/blog.scss"
import Head from "../components/head"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core' // 👈
import '@fortawesome/fontawesome-svg-core/styles.css' // 👈
import '../assets/sass/filterbutton.scss'
import pageConfig from '../config.js'
import BlogList from '../components/BlogList.js'

config.autoAddCss = false // 👈

class BlogPage extends React.Component {
  state = {
    posts: this.props.posts,
    activeFilter: "All",
  }
  handleSelection = (filter) => {
    let posts = this.props.posts
    if (filter === "All") {
        this.setState({
          posts: posts
      })
    } else {
      let filteredPosts = posts.filter(post => post.node.tag.includes(filter))
      this.setState({
        posts: filteredPosts,
      })
    }
  }
  setFilter = (filter) => {
    this.setState({
      activeFilter: filter
    })
  }
  handleClick = async (filter) => {
    await this.setFilter(filter);
    await this.handleSelection(filter);
  }
  render(props) {
    const filters = pageConfig.blogFilters.map((filter, index) => {
      return <li key={index} style={{display: 'inline-block', marginRight:'20px'}}>
        <button 
          className={this.state.activeFilter === filter.name ? "filter-active" : "normal"} 
          value={filter.name} 
          onClick={event => this.handleClick(event.currentTarget.value)}
        >
          <span style={{marginRight: "5px"}}><FontAwesomeIcon icon={filter.iconRef}/></span>{filter.name}
        </button>
      </li>
    })
    return (
      <>
        <Head title="Blog" />
        <div style={{padding: '0 40px 40px 40px'}}>
          <h1>Blog</h1>
          <h6>
              <ul style={{textAlign: 'center'}}>
                {filters}
              </ul>
            </h6>
           <BlogList 
              posts={this.state.posts} 
              activeFilter={this.state.activeFilter}
              handleSelection={this.handleSelection}
              setFilter={this.setFilter}
              handleClick={this.handleClick}
            />
        </div>
      </>
    )  
  }
}

export default (props) => {
  return <StaticQuery
    query={graphql`
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
              tag
            }
          }
        }
      }
      `}
      render={(data) => {
        return <BlogPage posts={data.allContentfulBlogPost.edges} {...props}/>
      }}
    />
  }