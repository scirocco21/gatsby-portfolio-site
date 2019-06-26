import React from 'react';
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const pages = [
  {
    title: "Home",
    id: "index",
    icon: 'home'
  }, 
  {
    title: "Portfolio",
    id: "portfolio",
    icon: "th"
  },
  {
    title: "Blog",
    id: "blog",
    icon: "pencil-alt"
  },
  {
    title: "About",
    id: "about",
    icon: "user"
  },
  {
    title: "Contact",
    id: "contact",
    icon: 'envelope'
  }
]

export default class Sidebar extends React.Component {
  
  render() {
    const pagesList = pages.map((page) => {
      return (
        <li key={page.id}>
            <Link to={`../${page.id}`} className="nav-item">
              <FontAwesomeIcon icon={page.icon}/>
              <span>{page.title}</span>
            </Link>
        </li>
      )
    })
    return(
      <aside style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems:'center'}}>
        <header style={{padding: '15px'}}>
          <h4 style={{margin: '0 auto'}}>
            <span id="first-name">SEBASTIAN </span>
            <span id="last-name">GERTZ</span>
          </h4>
        </header>
        <nav style={{flex: 5}}>
          <ul className="nav-list">
          {pagesList}
          </ul>
        </nav>
      </aside>
    )
  }
} 