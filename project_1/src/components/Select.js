import React, { Component } from 'react';

import {FaCheckSquare, FaSquare} from 'react-icons/fa';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected 
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(prevState => ({
      selected: !prevState.selected
    }))

    this.props.onSelect(this.props.type, this.props.name)
  }

  render() {
    let checkboxIcon;

    if (this.state.selected) {
      checkboxIcon = <FaCheckSquare />
    } else {
      checkboxIcon = <FaSquare />
    }

    return (
      <div onClick={this.onClick}>
        { checkboxIcon }
        <span> {this.props.name} </span>
      </div>
    )
  }
}

export default Select;