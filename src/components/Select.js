import React, { Component } from 'react'

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
      if (this.state.selected) {
        this.props.onSelect(this.props.type, this.props.name)
      }
    })
  }

  render () {
    return (
      <div className="Select" onClick={this.onClick}>
        <label className="radio-select">
          <p>{this.props.name}</p>
          <input checked={this.props.checked} onChange={()=>{}} type="radio" name={this.props.type}/>
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }
}

export default Select
