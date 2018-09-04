import React, { Component } from 'react';

import {FaCheckSquare, FaSquare} from 'react-icons/fa';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false 
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      selected: !prevState.selected
    }))
  }

  render() {
    let checkboxIcon;

    if (this.state.selected) {
      checkboxIcon = <FaCheckSquare />
    } else {
      checkboxIcon = <FaSquare />
    }

    return (
      <div onClick={this.handleClick}>
        { checkboxIcon }
        <span> {this.props.name} </span>
      </div>
    )
  }
}

export default Select;