/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Sidebar from "./Sidebar/sidebar"
import "../assets/sass/layout.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from './Sidebar/footer.js'

library.add(fas, fab)

const Layout = ({ children }) => (
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
    render={data => (
      <div style={{display: 'flex'}}>
        <Sidebar siteTitle={data.site.siteMetadata.title}
        />
        <div className="container">
          <main style={{ flex: 1 }}>{children}</main>
            <footer className='layout-footer' style={{ color: '#808080'}}>
              <p style={{padding: 10, fontWeight: 'bold'}}>&#169;
                2019 Sebastian Gertz</p>
              <p>Made with <a style={{color: '#fffff0'}} href="https://www.gatsbyjs.org/">Gatsby.JS</a></p>
              <Footer></Footer>
            </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
