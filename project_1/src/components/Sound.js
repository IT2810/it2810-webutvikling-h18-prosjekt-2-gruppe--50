import React, { Component } from 'react'; 

class Sound extends Component {
  render() {
    return (
      <audio controls>
        <source src="../mp3/Classical/Chopin-fantasie-impromptu.mp3" type="audio/mpeg"></source>
        Your browser does not support the audio element.
      </audio>
    )
  }
}

export default Sound;