import React, { Component } from 'react'

class Tab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: props.active,
      tabNr: props.tabNr
    }

    this.onClick = this.onClick.bind(this)
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      active: newProps.active
    })
  }

  onClick () {
    this.props.onSelect(this.state.tabNr)
  }

  render () {
    let activeClassName = this.state.active ? 'active' : ''

    return (
      <button className={'Tab ' + activeClassName} onClick={this.onClick}>
        <p className='media large'> Combo </p>
        <span> {this.state.tabNr} </span>
      </button>
    )
  }
}

export default Tab
