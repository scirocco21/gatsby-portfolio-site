import React from 'react';
import { Link } from "gatsby";
import MenuButton from '../menuButton.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../config.js'
import logo from '../../images/logo.svg'

export default class Sidebar extends React.Component {
  state = {
    isExpanded: false,
    buttonActive: false
  }

  expandMenu = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  handleClick = () => {
    this.setState({
      buttonActive: !this.state.buttonActive
    });
    this.expandMenu()
  }

  render() {
    const expandedClass = this.state.isExpanded ? 'show' : 'hidden';
    const isPartiallyActive = ({ isPartiallyCurrent }) => isPartiallyCurrent ? { className: "nav-item active" } : {className: 'nav-item'};
    const pagesList = config.pages.map((page, index) => {
      return (
        <Link 
          key={index}
          to={`${page.id}`} 
          className="nav-item" 
          onClick={this.handleClick} 
          activeClassName='active' 
          getProps={ page.id === "/" ? undefined : isPartiallyActive} 
        >
          <li key={index}>
            <FontAwesomeIcon 
              icon={page.icon}
            />
            <h4 style={{ margin: '0', padding: '0', fontFamily: "bebas-kai", letterSpacing: '0.5px'}}>{page.title}</h4>            
          </li>
      </Link>    
      )
    })
    return(
      <aside className={expandedClass}>
        <header>
          <img 
            src={logo} 
            alt="Sebastian Gertz Logo"
          />
        </header>
        <nav style={{flex: 5}}>
          <ul className="nav-list">
          {pagesList}
          <li>
            <MenuButton handleClick={this.handleClick} buttonActive={this.state.buttonActive}/>
          </li>
          </ul>
        </nav>
      </aside>
    )
  }
} 