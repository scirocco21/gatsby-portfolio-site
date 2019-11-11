import React from 'react';
import { Link } from "gatsby";
import MenuButton from './menuButton.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../config.js'
import logo from '../images/logo.svg';
import '../assets/sass/navbar.scss'

export default class NavBar extends React.Component {
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
            <h4>{page.title}</h4>            
          </li>
      </Link>    
      )
    })
    return(
      <nav className={expandedClass}>
        <header>
          <Link to="/">
            <img 
              src={logo} 
              alt="Sebastian Gertz Logo"
            />
          </Link>
        </header>
        <div style={{flex: 5}}>
          <ul className="nav-list">
            {pagesList}
          <li>
            <MenuButton handleClick={this.handleClick} buttonActive={this.state.buttonActive}/>
          </li>
          </ul>
        </div>
      </nav>
    )
  }
} 