import React, { Component } from 'react'

import {FaCheckSquare, FaSquare} from 'react-icons/fa'

class Select extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: false
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.setState(prevState => ({
      selected: !prevState.selected
    }), function () {
      console.log(this.state.selected)
      if (this.state.selected) {
        this.props.onSelect(this.props.type, this.props.name)
      }
    })
  }

  render () {
    let checkboxIcon

    if (this.state.selected) {
      checkboxIcon = <FaCheckSquare />
    } else {
      checkboxIcon = <FaSquare />
    }

    return (
      <div onClick={this.onClick}>
        <label className={'container_' + this.props.type}>{this.props.name}
          <input type="radio" checked="checked" name="radio"></input>
          <span className={"checkmark_" + this.props.type}></span>
        </label>
      </div>
    )
  }
}

export default Select
