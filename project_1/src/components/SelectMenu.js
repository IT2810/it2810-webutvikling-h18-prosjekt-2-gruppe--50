import React, { Component } from 'react';
import Select from './Select';

class SelectMenu extends Component {
  constructor() {
    super();
    this.state = {
      image: "horse",
      sound: null,
      text: null
    }
    this.onSelect = this.onSelect.bind(this);
    this.updatingState = this.updatingState.bind(this);
  }

  getImageOptions = () => {
    return ["Horse", "Cat", "Dog"]
  }

  getSoundOptions = () => {
    return ["Sound A", "Sound B", "Sound C"]
  }

  getTextOptions = () => {
    return ["Text A", "Text B", "Text C"]
  }

  onChange() {

  }

  updatingState(type, name) {
    let updateMap;
    if (type === "image") {
      updateMap = {image: name}
    } else if (type === "sound") {
      updateMap = {sound: name}
    } else if (type === "text") {
      updateMap = {text: name}
    }

    return updateMap
  }

  onSelect(type, name) {
   let updateMap =  this.updatingState(type, name);

    this.setState(updateMap, () => {
      this.props.onSelect(this.state.image, this.state.sound, this.state.text)
    })

  }

  render() {
    let imageOptions = this.getImageOptions()
    let soundOptions = this.getSoundOptions()
    let textOptions = this.getTextOptions()

    return (
      <div className="SelectMenu">
        <h3> Images </h3>
          {imageOptions.map((image, i) => {
            return (<Select key={i} name={image} type="image" onSelect={this.onSelect} />)
          })}
        <h3> Sounds </h3>
          {soundOptions.map((sound, i) => {
            return (<Select key={i} name={sound} type="sound" onSelect={this.onSelect} />)
          })}
        <h3> Texts </h3>
          {textOptions.map((text, i) => {
            return (<Select key={i} name={text} type="text" onSelect={this.onSelect} />)
          })}

      </div>
    );
  }
}

export default SelectMenu;
