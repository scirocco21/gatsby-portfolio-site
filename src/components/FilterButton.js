import React from 'react';
import '../assets/sass/filterbutton.scss'


export default class FilterButton extends React.Component {
  state = {
    active: false
  }

  toggleState = () => {
    this.setState({
      active: !this.state.active
    })
  }

  handleClick = (filter) => {
    this.props.handleSelection(filter);
    this.toggleState();
  }


  render() {
    return (
      <button style={{color: 'white', fontSize: '1rem'}} className={this.state.active ? 'filter-active' : "normal"} value={this.props.filter} onClick={event => this.handleClick(event.currentTarget.value)}>{this.props.filter}</button>
    )
  }
}