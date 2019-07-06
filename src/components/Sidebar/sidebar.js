import React from 'react';
import { Link } from "gatsby";
import MenuButton from '../menuButton.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pages = [
  {
    title: "Index",
    id: "/",
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
  state = {
    isExpanded: false
  }

  expandMenu = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  render() {
    const expandedClass = this.state.isExpanded ? 'show' : 'hidden';
    const pagesList = pages.map((page, index) => {
      return (
        <>
        <li key={index}>
         
            <Link to={`/${page.id}`} className="nav-item">
              <FontAwesomeIcon icon={page.icon}/>
              <p style={{ margin: '0',
    padding: '0'}}>{page.title}</p>
            </Link>
            <hr className="nav-separator"></hr>
        </li>
        </>
      )
    })
    return(
      <aside className={expandedClass}>
        <header style={{padding: '25px'}}>
          <h4 style={{margin: '0 auto'}}>
            <span id="first-name">SEBASTIAN </span><br></br>
            <span id="last-name">GERTZ</span>
          </h4>
        </header>
        <nav style={{flex: 5}}>
          <ul className="nav-list">
          {pagesList}
          <li>
            <MenuButton expandMenu={this.expandMenu}/>
          </li>
          </ul>
        </nav>
      </aside>
    )
  }
} 