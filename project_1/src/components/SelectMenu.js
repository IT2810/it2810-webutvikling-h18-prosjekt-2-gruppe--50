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
      text: 'lyric'
    }
    this.onSelect = this.onSelect.bind(this)
    this.updatingState = this.updatingState.bind(this)
    this.onSelectDrop = this.onSelectDrop.bind(this)
  }

  updatingState (type, name) {
    let updateMap
    if (type === 'image') {
      updateMap = {image: svgKeys[name]}
    } else if (type === 'sound') {
      updateMap = {sound: soundKeys[name]}
    } else if (type === 'text') {
      updateMap = {text: textKeys[name]}
    }

    return updateMap
  }

  onSelect (type, name) {
    let updateMap = this.updatingState(type, name)
   // this.setState(updateMap)
    console.log('state', this.state)

    this.setState(updateMap, () => this.props.onSelect(this.state.image, this.state.sound, this.state.text))
  }

  onSelectDrop (event) {
    this.onSelect(event.target.name, event.target.value)
  }

  render () {
    let imageOptions = Object.keys(svgKeys)
    let soundOptions = Object.keys(soundKeys)
    let textOptions = Object.keys(textKeys)

    return (
      <div className='SelectMenu'>
        <div className='radio-menu'>
          <h3> Images </h3>
          {imageOptions.map((image, i) => (<Select key={i} name={image} type='image' onSelect={this.onSelect} />))}
          <h3> Sounds </h3>
          {soundOptions.map((sound, i) => (<Select key={i} name={sound} type='sound' onSelect={this.onSelect} />))}
          <h3> Texts </h3>
          {textOptions.map((text, i) => (<Select key={i} name={text} type='text' onSelect={this.onSelect} />))}
        </div>

        <div className='dropdown-menu'>
          <div className='dropdown'>
            <p> Images </p>
            <select onChange={this.onSelectDrop} name='image'>
              {imageOptions.map((image, i) => <option key={i} value={image} name='image'>{image}</option>)}
            </select>
          </div>
          <div className='dropdown'>
            <p> Sounds </p>
            <select onChange={this.onSelectDrop} name='sound'>
              {soundOptions.map((sound, i) => <option key={i} value={sound}>{sound}</option>)}
            </select>
          </div>
          <div className='dropdown'>
            <p> Texts </p>
            <select onChange={this.onSelectDrop} name='text'>
              {textOptions.map((text, i) => <option key={i}value={text}>{text}</option>)}
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectMenu
