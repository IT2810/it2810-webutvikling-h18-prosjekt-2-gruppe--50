import React, { Component } from 'react'
import './App.css'

import SelectMenu from './components/SelectMenu'
import Display from './components/Display'
import Tabs from './components/Tabs'

const resourcesMap = {
  'poem': ['ALegendOfTruth', 'ANorthernLegend', 'Legend', 'TheLegendOfOneRedRose'],
  'lyric': ['StairwayToHeaven', 'ManInTheMirror', 'Imagine', 'BohemianRhapsody'],
  'speech': ['DutiesOfAmericanCitizenship', 'IHaveADream', 'InaugurationAddress', 'TheThirdPhilippic']
}
const svgMap = {
  'horse': ['horse1', 'horse2', 'horse3', 'horse4'],
  'dog': ['dog1', 'dog2', 'dog3', 'dog4'],
  'cat': ['cat1', 'cat2', 'cat3', 'cat4']
}

const soundMap = {
  "classical": ["Classic1", "Classic2", "Classic3", "Classic4"],
  "hiphop": ["HipHop1", "HipHop2", "HipHop3", "HipHop4"],
  "nature": ["Nature1", "Nature2", "Nature3", "Nature4"]
}

function getCombo(imageCategory, soundCategory, textCategory, imageIndex, soundIndex, textIndex) {
  return {
    image: svgMap[imageCategory][imageIndex],
    sound: soundMap[soundCategory][soundIndex],
    text: resourcesMap[textCategory][textIndex]
  }
}

function getRandomCombo(
  imageCategory = Object.keys(svgMap)[Math.floor(Math.random() * 3)],
  soundCategory = Object.keys(soundMap)[Math.floor(Math.random() * 3)],
  textCategory = Object.keys(resourcesMap)[Math.floor(Math.random() * 3)],
  imageIndex = Math.floor(Math.random() * 4),
  soundIndex = Math.floor(Math.random() * 4),
  textIndex = Math.floor(Math.random() * 4)
) {
  return getCombo(imageCategory, soundCategory, textCategory, imageIndex, soundIndex, textIndex)
}

function getCombos (image, sound, text) {
  return [0, 1, 2, 3].map(i => getCombo(image, sound, text, i, i, i))
}

class App extends Component {
  constructor () {
    super()
    let image = Object.keys(svgMap)[0]
    let sound = Object.keys(soundMap)[0]
    let text = Object.keys(resourcesMap)[0]
    this.state = {
      customCombo: getCombo(image, sound, text, 0, 0, 0),
      showCustomCombo: true,
      combos: getCombos(image, sound, text),
      image,
      sound,
      text
    }

    this.updateCombinations = this.updateCombinations.bind(this)
    this.showSelectedDisplay = this.showSelectedDisplay.bind(this)
  }

  updateCombinations (image, sound, text, customImageIndex, customSoundIndex, customTextIndex) {
    if (image !== null) {
      image = image.toLowerCase()
      sound = sound.toLowerCase()
    }
    this.setState({
      customCombo: getCombo(image, sound, text, customImageIndex, customSoundIndex, customTextIndex),
      showCustomCombo: true,
      image, sound, text
    })

  }

  showSelectedDisplay (nr) {
    this.setState({
      activeNr: nr,
      showCustomCombo: false,
      combos: getCombos(this.state.image, this.state.sound, this.state.text)
    })
  }

  render () {
    return (
      <div className='App'>
        <header>
          <h1 className='App-title'>Combination creator</h1>
        </header>

        <div className='container'>
          <SelectMenu onSelect={this.updateCombinations} />
          <Tabs onSelect={this.showSelectedDisplay} />
          <Display combo={this.state.showCustomCombo ? this.state.customCombo : this.state.combos[this.state.activeNr-1]} />
        </div>

        <footer>
          <h4> IT2810 Webdevelopment Autumn 2018 - Project 2, group 50 </h4>
        </footer>

      </div>
    )
  }
}

export default App
