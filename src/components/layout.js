import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Sidebar from "./Sidebar/sidebar"
import "../assets/sass/layout.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from './Sidebar/footer.js';

library.add(fas, fab)

class Layout extends React.Component {
    render() {
      return(
      <div id="main-container" style={{display: 'flex'}}>
        <Sidebar siteTitle={this.props.title}/>
        <div className="container">
          <main style={{ flex: 1 }}>{this.props.children}</main>
              {this.props.displayFooter && <Footer></Footer>}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <Layout title={data.site.siteMetadata.title} {...props}/>
    )}
  />
)

