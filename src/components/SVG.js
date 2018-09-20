import React, { Component } from 'react'
import axios from 'axios'

class SVG extends Component {
  constructor (props) {
    super(props)
    this.state = {
      image: null,
      creditsUrl: null
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

      axios.get('images/credits.json')
        .then(res => {
          this.setState({creditsUrl: res.data[name]})
        })
    }
  }

  render () {
    let credits;

    if (this.state.image) {
      credits = <h5> Image found at <a target="_blank" href={this.state.creditsUrl} > openclipart.org </a> </h5>
    }
    
    return (
      <div className='SVG'>
        <div 
          style={{
            backgroundImage: 'url("data:image/svg+xml;utf8,' + encodeURIComponent(this.state.image) + '")'
          }}
        />
        {credits}
        
      </div>
    )
  }
}

export default SVG
