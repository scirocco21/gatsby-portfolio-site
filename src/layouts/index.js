import React from "react"
import PropTypes from "prop-types"
import { ContextProviderComponent } from "../contexts/context.js"
import { StaticQuery, graphql } from "gatsby"
import Sidebar from "../components/Sidebar/sidebar"
import SimpleLayout from './simple.js'
import "../assets/sass/layout.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from '../components/Sidebar/footer.js';

library.add(fas, fab)

class Layout extends React.Component {
    render() {
      return(
      <ContextProviderComponent>
            <div id="main-container" style={{display: 'flex'}}>
              <Sidebar siteTitle={this.props.title}/>
              <div className="container">
                <main style={{ flex: 1 }}>{this.props.children}</main>
                <Footer /> 
              </div>
            </div>
      </ContextProviderComponent>
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
        if (props.pageResources.page.path == "/home/") {
          return <SimpleLayout>{props.children}</SimpleLayout>
        }
        return <Layout title={data.site.siteMetadata.title} {...props}/>
      }
    }
  />
  }

