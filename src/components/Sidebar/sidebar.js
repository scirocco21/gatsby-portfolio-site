import React from 'react';
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './footer'
import config from '../../config';

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
    title: "About Me",
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
              {page.title}
            </Link>
        </li>
      )
    })
    return(
      <aside style={{flex: 1, height: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth: '160px', maxWidth: '200px'}}>
        <nav style={{flex: 5}}>
          <ul className="nav-list">
          {pagesList}
          </ul>
        </nav>
       <Footer socialLinks={config.socialLinks}></Footer>
      </aside>
    )
  }
} 