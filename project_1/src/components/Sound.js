import React, { Component } from 'react'; 
import axios from 'axios'

class Sound extends Component {

  constructor (props) {
    super(props)
    this.state = {
      sound: null
    }
    this.getSound = this.getSound.bind(this)
  }

    componentDidMount () {
      this.getSound(this.props.name)
    }
  
    componentWillReceiveProps (newProps) {
      this.getSound(newProps.name)
    }
  
    getSound (name) {
      if (name !== null && name !== '') {
        axios.get('mp3/' + name + '.mp3')
          .then(res => {
            this.setState({sound: res.data})
          })
      }
    }


  render() {
    return (
      <audio controls>
        <source src={'mp3/' + this.state.sound + '.mp3'} type="audio/mpeg"></source>
        Your browser does not support the audio element.
      </audio>
    )
  }
}

export default Sound;