import React, { Component } from 'react';
import axios from 'axios';

class SVG extends Component {
  constructor() {
    super();
    this.state = {
      image: null
    }

    this.getSVG = this.getSVG.bind(this);
  }

  componentDidMount() {
    this.getSVG(this.props.name);
  }

  componentWillReceiveProps(newProps) {
    console.log("Props updated")
    console.log(newProps)
    this.getSVG(newProps.name)
  }

  getSVG(name) {
    axios.get("images/" + name + ".svg")
      .then(res => {
        this.setState({image: res.data})

        var div = document.getElementById("svg-div")
        div.innerHTML = res.data
      })
  }

  render() {
    return (
      <div id="svg-div" className="SVG">
        
      </div>
    )
  }
}

export default SVG;

