import React, { Component } from 'react'
import axios from 'axios'

class SVG extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: null
    }

    this.getSVG = this.getSVG.bind(this)
  }

  componentDidMount () {
    this.getSVG(this.props.name)
  }

  componentWillReceiveProps (newProps) {
    this.getSVG(newProps.name)
  }

  getSVG (name) {
    if (name !== null && name !== '') {
      axios.get('images/' + name + '.svg')
        .then(res => {
          this.setState({image: res.data})
        })
    }
  }

  render () {
    return (
      <div className='SVG'>
        <div style={{
          backgroundImage: 'url("data:image/svg+xml;utf8,' + encodeURIComponent(this.state.image) + '")'
        }} />
      </div>
    )
  }
}

export default SVG
