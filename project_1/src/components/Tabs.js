import React, { Component } from 'react'
import Tab from './Tab.js'

class Tabs extends Component {
  constructor () {
    super()
    this.state = {
      activeNr: 1
    }

    this.onSelect = this.onSelect.bind(this)
  }

  onSelect (combo) {
    this.setState({activeNr: combo})
    this.props.onSelect(combo)
  }

  render () {
    return (
      <div className='Tabs row'>
        <Tab name='Combo 1' active={this.state.activeNr === 1} tabNr={1} onSelect={this.onSelect} />
        <Tab name='Combo 2' active={this.state.activeNr === 2} onSelect={this.onSelect} />
        <Tab name='Combo 3' active={this.state.activeNr === 3} tabNr={3} onSelect={this.onSelect} />
        <Tab name='Combo 4' active={this.state.activeNr === 4} tabNr={4} onSelect={this.onSelect} />
      </div>
    )
  }
}

export default Tabs
