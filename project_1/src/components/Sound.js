import React, { Component } from 'react';
import axios from 'axios'

class Sound extends Component {

  constructor (props) {
    super(props)
    this.state = {
      sound: null,
      creditsMusic: null
    }
    this.getSoundCredits = this.getSoundCredits.bind(this)
  }

  componentWillMount() {
    this.setState({sound: 'mp3/' + this.props.name + '.mp3'})
  }

  getSoundCredits (name) {
    if (name !== null && name !== '') {
      axios.get('mp3/' + name + '.mp3')
        .then(res => {
          this.setState({sound: res.data})
        })

        axios.get('mp3/credits.json')
        .then(res => {
          this.setState({creditsMusic: res.data[name]})
        })
    }
  }

  componentWillReceiveProps(newProps) {
    this.refs["audioTag"].pause()
    this.setState({sound: 'mp3/' + newProps.name + '.mp3'})
    this.refs["audioTag"].load()
    this.refs["audioTag"].play()
    this.getSoundCredits(newProps.name)
  }

  render() {
    let credits;

    if (this.state.sound) {
      credits = <p>{this.state.creditsMusic}</p>
    }

    return (
      <div className="Sound">
        <audio ref="audioTag" controls>
          <source src={this.state.sound}></source>
          Your browser does not support the audio element.
        </audio>
        {credits}
      </div>
    )
  }
}

export default Sound;
