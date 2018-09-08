import React, { Component } from 'react';
import Select from './Select';

class SelectMenu extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      sound: null,
      text: null
    }
    this.onSelect = this.onSelect.bind(this);
  }

  getImageOptions = () => {
    return ["Horse", "Cat", "Dog", "Img D"]
  }

  getSoundOptions = () => {
    return ["Sound A", "Sound B", "Sound C", "Sound D"]
  }

  getTextOptions = () => {
    return ["Text A", "Text B", "Text C", "Text D"]
  }

  onChange() {

  }

  onSelect = (type, name) => {
    if (type == "image") {
      this.setState({image: name})
    } else if (type == "sound") {
      this.setState({sound: name})
    } else if (type == "text") {
      this.setState({text: name})      
    }

    this.props.onSelect(this.state.image, this.state.sound, this.state.text)
  }

  render() {
    let imageOptions = this.getImageOptions()
    let soundOptions = this.getSoundOptions()
    let textOptions = this.getTextOptions()

    return (
      <div>
        <h3> Images </h3>
          {imageOptions.map((image, i) => {     
            return (<Select name={image} type="image" onSelect={this.onSelect} />)
          })}
        <h3> Sounds </h3>
          {soundOptions.map((sound, i) => {     
            return (<Select name={sound} type="sound" onSelect={this.onSelect} />)
          })}
        <h3> Texts </h3>
          {textOptions.map((text, i) => {     
            return (<Select name={text} type="text" onSelect={this.onSelect} />)
          })}

      </div>
    );
  }
}

export default SelectMenu;