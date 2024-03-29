import React, { Component } from 'react'
import axios from 'axios'

class Sound extends Component {

  constructor (props) {
    super(props)
    this.state = {
      sound: null,
      credits: null
    }
    this.getCredits = this.getCredits.bind(this)
  }

  getCredits (name) {
    if (name !== null && name !== '') {
        axios.get('mp3/credits.json').then(res => {
          this.setState({credits: res.data[name]})
        })
    }
  }

  componentWillMount() {
    this.setState({sound: 'mp3/' + this.props.name + '.mp3'})
  }

  componentWillReceiveProps(newProps) {
    if (newProps.name !== this.props.name || !this.state.hasInitted) {
      this.refs["audioTag"].pause()
      this.setState({sound: 'mp3/' + newProps.name + '.mp3', hasInitted: true})
      this.refs["audioTag"].load()
      this.refs["audioTag"].play()
      this.getCredits(newProps.name)
    }
  }

  render() {
    let creds;
    if (this.state.sound) {
      creds = <h5>The sound is {this.state.credits}</h5>
    }

    return (
      <div className="Sound">
        <audio ref="audioTag" controls>
          <source src={this.state.sound}></source>
          Your browser does not support the audio element.
        </audio>
        {creds}
      </div>
    )
  }
}

export default Sound;
