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
      <div className='Tabs'>
        <p className='media small'> COMBO </p>
        <div>
          {[1, 2, 3, 4].map((num, i) => <Tab active={this.state.activeNr === num} key={i} tabNr={num} onSelect={this.onSelect} />)}
        </div>
      </div>
    )
  }
}

export default Tabs
