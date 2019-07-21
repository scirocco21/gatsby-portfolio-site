import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Sidebar from "../components/sidebar"
import NavBar from "../components/navbar"
import "../assets/sass/layout.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from './footer.js';

library.add(fas, fab)

class Layout extends React.Component {
  render() {
    return(
      <div id="main-container" style={{display: 'flex'}}>
        <NavBar siteTitle={this.props.title}/>
        <Sidebar siteTitle={this.props.title}/>
        <div className="container">
          <main style={{ flex: 1 }}>{this.props.children}</main>
          { this.props.location.pathname !== "/" && <Footer /> } 
        </div>
      </div>
      )
    }
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default (props) => {
  return <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={(data) => {
        return <Layout title={data.site.siteMetadata.title} {...props}/>
      }
    }
  />
  }

