import React, { Component } from 'react'
import Tab from './Tab.js'

class Tabs extends Component {
  constructor () {
    super()
    this.state = {
    }

    this.onSelect = this.onSelect.bind(this)
  }

  onSelect (combo) {
    this.props.onSelect(combo)
  }

  render () {
    return (
      <div className='Tabs'>
        <Tab name='Combo 1' active tabNr={1} onSelect={this.onSelect} />
        <Tab name='Combo 2' active={false} tabNr={2} onSelect={this.onSelect} />
        <Tab name='Combo 3' active={false} tabNr={3} onSelect={this.onSelect} />
        <Tab name='Combo 4' active={false} tabNr={4} onSelect={this.onSelect} />
      </div>
    )
  }
}

export default Tabs
