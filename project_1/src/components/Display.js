import React, { Component } from 'react';
import axios from 'axios';
import SVG from './SVG.js'
import Text from './Text.js'
import Sound from './Sound.js'

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      sound: null,
      text: null,
      active: props.active
    }

    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(newProps) {
    if (newProps.combo != null) {
      console.log("Updating combo in display")
      console.log(newProps.combo.image)
      this.setState({
        image: newProps.combo.image, 
        sound: newProps.combo.sound,
        text: newProps.combo.text
      });
      
    }
    if (newProps.active != null) {
      console.log("Updating active in display")
      console.log(newProps.active)
      this.setState({
        active: newProps.active
      })
    }
  }

  setImage(name) {
    console.log("Setting image")
    console.log(name)
    this.setState({image: name})
  }

  render() {
    console.log(this.state.active)
    let hiddenClass = this.state.active ? "" : "hidden" 
    return (
      <div className={"Display " + hiddenClass }>

        <SVG name={this.state.image}/>

        <Sound />
        <Text />

      </div>
    )
  }
}

export default Display;