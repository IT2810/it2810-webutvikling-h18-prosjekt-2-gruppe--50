import React, { Component } from 'react'
import Select from './Select'

const svgKeys = {
  'Horse': 'horse',
  'Cat': 'cat',
  'Dog': 'dog'
}

const soundKeys = {
  'Classical': 'classical',
  'HipHop': 'hiphop',
  'Nature': 'nature'
}

const textKeys = {
  'Poem': 'poem',
  'Lyric': 'lyric',
  'Speech': 'speech'
}

class SelectMenu extends Component {
  constructor () {
    super()
    this.state = {
      image: 'cat',
      sound: 'classical',
      text: 'lyric',
      customImageIndex: 0,
      customSoundIndex: 0,
      customTextIndex: 0
    }
    this.onSelect = this.onSelect.bind(this)
    this.onSelectDrop = this.onSelectDrop.bind(this)
  }

  onSelect(type, name, index) {
   let updatedState
   if (type == "image") {
     updatedState = {
       image: svgKeys[name],
       customImageIndex: index
     }
   } else if (type == "sound") {
     updatedState = {
       sound: soundKeys[name],
       customSoundIndex: index
     }
   } else { // text
     updatedState = {
       text: textKeys[name],
       customTextIndex: index
     }
   }
    this.setState(updatedState, () => {
      this.props.onSelect(this.state.image, this.state.sound, this.state.text, this.state.customImageIndex, this.state.customSoundIndex, this.state.customTextIndex)
    })
  }

  onSelectDrop(event) {
    this.onSelect(event.target.name, event.target.value, event.target.selectedIndex)
  }

  render () {
    let imageOptions = Object.keys(svgKeys)
    let soundOptions = Object.keys(soundKeys)
    let textOptions = Object.keys(textKeys)

    return (
      <div className="SelectMenu">
        <div className="radio-menu">
          <h4>Images</h4>
          {imageOptions.map((image, i) => (<Select key={i} name={image} type="image" onSelect={e => this.onSelect(e, image, i)} />))}
          <h4>Sounds</h4>
          {soundOptions.map((sound, i) => (<Select key={i} name={sound} type="sound" onSelect={e => this.onSelect(e, sound, i)} />))}
          <h4>Texts</h4>
          {textOptions.map((text, i) => (<Select key={i} name={text} type="text" onSelect={e => this.onSelect(e, text, i)} />))}
        </div>


        <div className="dropdown-menu">
          <div className="dropdown">
            <p>Images</p>
            <select onChange={this.onSelectDrop} name="image">
              {imageOptions.map((image, i) => <option key={i} index={i} value={image} name="image">{image}</option>)}
            </select>
          </div>
          <div className="dropdown">
            <p>Sounds</p>
            <select onChange={this.onSelectDrop} name="sound">
              {soundOptions.map((sound, i) => <option key={i} index={i} value={sound}>{sound}</option>)}
            </select>
          </div>
          <div className="dropdown">
            <p>Texts</p>
            <select  onChange={this.onSelectDrop} name="text">
              {textOptions.map((text, i) => <option  key={i} index={i} value={text}>{text}</option>)}
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectMenu
