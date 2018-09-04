import React, { Component } from 'react';
import Select from './Select';

class SelectMenu extends Component {
  getImageOptions = () => {
    return ["Img A", "Img B", "Img C", "Img D"]
  }

  getSoundOptions = () => {
    return ["Sound A", "Sound B", "Sound C", "Sound D"]
  }

  getTextOptions = () => {
    return ["Text A", "Text B", "Text C", "Text D"]
  }

  render() {
    let imageOptions = this.getImageOptions()
    let soundOptions = this.getSoundOptions()
    let textOptions = this.getTextOptions()

    return (
      <div>
        <h3> Images </h3>
          {imageOptions.map((image, i) => {     
            return (<Select name={image} type="image" />)
          })}
        <h3> Sounds </h3>
          {soundOptions.map((sound, i) => {     
            return (<Select name={sound} type="sound" />)
          })}
        <h3> Texts </h3>
          {textOptions.map((text, i) => {     
            return (<Select name={text} type="text" />)
          })}

      </div>
    );
  }
}

export default SelectMenu;