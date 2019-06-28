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
    const pagesList = pages.map((page) => {
      return (
        <li key={page.id}>
            <Link to={`/${page.id}`} className="nav-item">
              <FontAwesomeIcon icon={page.icon}/>
              <span>{page.title}</span>
            </Link>
        </li>
      )
    })
    return(
      <aside className={expandedClass}>
        <header style={{padding: '15px'}}>
          <h4 style={{margin: '0 auto'}}>
            <span id="first-name">SEBASTIAN </span>
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