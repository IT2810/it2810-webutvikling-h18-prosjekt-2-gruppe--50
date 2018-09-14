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
    let id = this.props.type + '_' + this.props.name.toLowerCase()

    if (this.state.selected) {
      checkboxIcon = <FaCheckSquare />
    } else {
      checkboxIcon = <FaSquare />
    }

    return (
      <div className="Select" onClick={this.onClick}>
        <div className="radio-select">
          <input type="radio" name={this.props.type} id={id}/>
          <label htmlFor={id}> {this.props.name} </label> 
        </div>
      </div>
    )
  }
}

export default Select

