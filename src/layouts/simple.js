import React from "react"
import Sidebar from "../components/Sidebar/sidebar"
import "../assets/sass/layout.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

export default class SimpleLayout extends React.Component {
    render() {
      return(
        <div id="main-container" style={{display: 'flex'}}>
          <Sidebar siteTitle={this.props.title}/>
          <div className="container">
            <main style={{ flex: 1 }}>{this.props.children}</main>
          </div>
        </div>
    )
  }
}
