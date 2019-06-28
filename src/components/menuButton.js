import React from 'react';
import Menu from './Menu.js'
import { HamburgerSpring } from 'react-animated-burgers'

export default class MenuButton extends React.Component {
  state = {
    isActive: false
  }
  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
    this.props.expandMenu()
  }
  render() {
    return (
      <>
      <HamburgerSpring
        isActive={this.state.isActive}
        toggleButton={this.handleClick.bind(this)}
        className="menu-button"
        buttonWidth={22}>
      </HamburgerSpring>
     
    </>
    )
  }
}
