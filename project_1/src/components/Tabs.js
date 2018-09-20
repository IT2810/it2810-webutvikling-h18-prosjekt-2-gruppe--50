import React, { Component } from 'react'
import Tab from './Tab.js'

class Tabs extends Component {
  constructor () {
    super()
    this.state = {
      activeNr: 1
    }

    this.onSelect = this.onSelect.bind(this)
    this.createTabs = this.createTabs.bind(this)
  }

  onSelect (combo) {
    this.setState({activeNr: combo})
    this.props.onSelect(combo)
  }

  createTabs () {
    let tabs = []
    for (let i = 1; i < 5; i++) {
      let active = this.state.activeNr === i
      let tab = <Tab active={active} key={i} tabNr={i} onSelect={this.onSelect} />
      tabs.push(tab)
    }

    return tabs
  }

  render () {
    var tabs = this.createTabs()

    return (
      <div className='Tabs'>
        <p className='media small'> COMBO </p>
        <div>
          { tabs }
        </div>
      </div>
    )
  }
}

export default Tabs
