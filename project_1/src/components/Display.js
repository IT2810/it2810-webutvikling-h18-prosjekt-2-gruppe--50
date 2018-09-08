import React, { Component } from 'react';
import axios from 'axios';
import SVG from './SVG.js'
import Text from './Text.js'
import Sound from './Sound.js'

class Display extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      sound: null,
      text: null
    }

    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(newProps) {
    console.log("Updating combo in display")
    console.log(newProps.combo)
    this.setState({
      image: newProps.combo.image, 
      sound: newProps.combo.sound,
      text: newProps.combo.text
    });
  }

  setImage(name) {
    console.log("Setting image")
    console.log(name)
    this.setState({image: name})
  }



  render() {
    return (
      <div className="Display">

        <SVG name={this.state.image}/>

        <Sound />
        <Text />

      </div>
    )
  }
}

export default Display;