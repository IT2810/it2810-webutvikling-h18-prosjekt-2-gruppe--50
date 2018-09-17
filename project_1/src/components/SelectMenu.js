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
    return ["Classic", "HipHop", "Nature"]
  }

  getTextOptions = () => {
    return ["Poem", "Lyric", "Speech"]
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
    this.onSelect(event.target.name, event.target.value)
  }

  render() {
    let imageOptions = this.getImageOptions()
    let soundOptions = this.getSoundOptions()
    let textOptions = this.getTextOptions()

    return (
      <div className="SelectMenu">
        <div className="radio-menu">
          <h4> Images </h4>
          {imageOptions.map((image, i) => {
            return (<Select key={i} name={image} type="image" onSelect={this.onSelect} />)
          })}
          <h4> Sounds </h4>
          {soundOptions.map((sound, i) => {
            return (<Select key={i} name={sound} type="sound" onSelect={this.onSelect} />)
          })}
          <h4> Texts </h4>
          {textOptions.map((text, i) => {
            return (<Select key={i} name={text} type="text" onSelect={this.onSelect} />)
          })}
        </div>
      

        <div className="dropdown-menu">
          <div className="dropdown">
            <p> Images </p>
            <select onChange={this.onSelectDrop} name="image">
              {imageOptions.map((image, i) => {
                return <option key={i} value={image} name="image"> {image} </option>
              })}
            </select>
          </div>
          <div className="dropdown">
            <p> Sounds </p>
            <select onChange={this.onSelectDrop} name="sound">
              {soundOptions.map((sound, i) => {
                return <option key={i} value={sound} name="sound"> {sound} </option>
              })}
            </select>
          </div>
          <div className="dropdown">
            <p> Texts </p>
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


