import React, { Component } from 'react';
import axios from 'axios';

class SVG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    }

    this.getSVG = this.getSVG.bind(this);
  }

  componentDidMount() {
    this.getSVG(this.props.name);
  }

  componentWillReceiveProps(newProps) {
    this.getSVG(newProps.name)
  }

  getSVG(name) {
    axios.get(`images/${name}.svg`)
      .then(res => {
        this.setState({image: res.data})
      })
  }

  render() {
    const { image } = this.state

    return (
      <div id="svg-div" className="SVG">
        {image && <div dangerouslySetInnerHTML={{__html: image }} />}
        
      </div>
    )
  }
}

export default SVG;

