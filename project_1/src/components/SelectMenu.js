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
    this.updatingState = this.updatingState.bind(this);
    this.onSelectDrop = this.onSelectDrop.bind(this);
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

  onSelectDrop(event) {
    console.log(event.target.name)
    this.onSelect(event.target.name, event.target.value)
  }

  render() {
    let imageOptions = this.getImageOptions()
    let soundOptions = this.getSoundOptions()
    let textOptions = this.getTextOptions()

    return (
      <div className="SelectMenu">
        <div className="radio-menu">
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
      

        <div className="dropdown-menu">
          <div className="inline dropdown">
            <h3> Images </h3>
            <select onChange={this.onSelectDrop} name="image">
              {imageOptions.map((image, i) => {
                return <option key={i} value={image} name="image"> {image} </option>
              })}
            </select>
          </div>
          <div className="inline dropdown">
            <h3> Sounds </h3>
            <select onChange={this.onSelectDrop} name="sound">
              {soundOptions.map((sound, i) => {
                return <option key={i} value={sound}> {sound} </option>
              })}
            </select>
          </div>
          <div className="inline dropdown">
            <h3> Texts </h3>
            <select  onChange={this.onSelectDrop} name="text">
              {textOptions.map((text, i) => {
                return <option  key={i}value={text}> {text} </option>
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectMenu;


