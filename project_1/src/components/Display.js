import React, { Component } from 'react'

import SVG from './SVG.js'
import Text from './Text.js'
import Sound from './Sound.js'

class Display extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: null,
      sound: null,
      text: null,
      active: props.active
    }

    this.setImage = this.setImage.bind(this)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.combo != null) {
      this.setState({
        image: newProps.combo.image,
        sound: newProps.combo.sound,
        text: newProps.combo.text
      })
    }
    if (newProps.active != null) {
      this.setState({
        active: newProps.active
      })
    }
  }

  setImage (name) {
    this.setState({image: name})
  }

  render () {
    let hiddenClass = this.state.active ? '' : 'hidden'
    return (
      <div className={'Display ' + hiddenClass}>

        <SVG name={this.state.image} />

        <Sound />
        <Text />

      </div>
    )
  }
}

export default Display
