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
import '../assets/fonts/BebasKai-Regular.otf'
import Transition from '../components/Transition';


library.add(fas, fab)

class Layout extends React.Component {
  render() {
    return(
      <>
        <div id="main-container" style={{position: "relative"}}>
        <div style={{position: "absolute", width: "100%", height: "100%"}}>
          <NavBar siteTitle={this.props.title}/>
        </div>
          <div style={{position: "absolute", height: "100%"}}>
            <Sidebar siteTitle={this.props.title}/>
          </div>
          <Transition location={this.props.location}>
            <div className="container">
              <main style={{ flex: 1 }}>{this.props.children}</main>
              { this.props.location.pathname !== "/" && <Footer /> } 
            </div>
          </Transition>
        </div>
      </>
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
        return (
          <Layout title={data.site.siteMetadata.title} {...props}/>
        )
      }
    }
  />
  }

