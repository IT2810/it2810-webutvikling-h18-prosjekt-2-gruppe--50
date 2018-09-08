import React, { Component } from 'react';
import Tab from './Tab.js'

class Tabs extends Component {

  render() {
    return (
      <div className="Tabs">
        <Tab name="Combo 1" active={ true } />
        <Tab name="Combo 2" active={ false }/>
        <Tab name="Combo 3" active={ false }/>
        <Tab name="Combo 4" active={ false }/>
      </div>
    )
  }
}

export default Tabs;