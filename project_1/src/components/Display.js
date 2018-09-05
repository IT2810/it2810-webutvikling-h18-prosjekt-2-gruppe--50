import React, { Component } from 'react';
import axios from 'axios';
import SVG from './SVG.js'

class Display extends Component {
  constructor() {
    super();
    this.data = {
      image: null,
      sound: null,

    }
  }

  componentDidMount() {
    /*axios.get('https://dyrebar.no/media/encyclopedia/2017/11/01/e2b47f324e6e40a68322f06b2887beff.jpg.1110x625_q85.jpg')
      .then(res => {
        this.setState({image: res.data})
      })*/
  }

  render() {
    //var img = require('../images/$(this.state.image}')
    return (
      <div>
        <h1> The main display </h1>

      <SVG name="test"/>
      </div>
    )
  }
}

export default Display;