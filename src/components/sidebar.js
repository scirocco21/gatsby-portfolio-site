import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core'
import pageConfig from '../config.js'

config.autoAddCss = false

export default class Sidebar extends React.Component {
  render() {
    const isPartiallyActive = ({ isPartiallyCurrent }) => isPartiallyCurrent ? { className: "nav-item active" } : {className: 'nav-item'};
    const pagesList = pageConfig.pages.map((page, index) => {
      return (
        <Link 
          key={index}
          to={`${page.id}`} 
          className="nav-item" 
          activeClassName='active' 
          getProps={ page.id === "/" ? undefined : isPartiallyActive} 
        >
          <li key={index}>
            <FontAwesomeIcon 
              icon={page.icon}
            />
            <h4>{page.title}</h4>            
          </li>
        </Link>    
      )
    })
    return(
      <aside>
        <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <ul className="nav-list">
            {pagesList}
          </ul>
        </nav>
      </aside>
    )
  }
} 