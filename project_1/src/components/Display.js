import React, { Component } from 'react';
import axios from 'axios';
import SVG from './SVG.js'

class Display extends Component {
  constructor() {
    super();
    this.state = {
      image: "test",
      sound: null,
      text: null
    }

    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    
  }

  setImage(name) {
    this.setState({image: name})
  }

  render() {
    return (
      <div>
        <h1> The main display </h1>

        <SVG name={this.state.image}/>

      </div>
    )
  }
}

export default Display;