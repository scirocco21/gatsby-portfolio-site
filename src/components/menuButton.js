import React from 'react';
import { HamburgerSpring } from 'react-animated-burgers';


export default class MenuButton extends React.Component {
  
  render() {
    return (
      <>
      <HamburgerSpring
        isActive={this.props.buttonActive}
        toggleButton={this.props.handleClick}
        className="menu-button"
        buttonWidth={22}
        barColor="#EE015D">
      </HamburgerSpring>
     
    </>
    )
  }
}
