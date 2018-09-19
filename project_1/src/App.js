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

function getCombo(imageCategory, soundCategory, textCategory, comboIndex) {
  return {
    image: svgMap[imageCategory][comboIndex],
    sound: soundMap[soundCategory][comboIndex],
    text: resourcesMap[textCategory][comboIndex]
  }
}

function getCombos (image, sound, text) {
  return [0, 1, 2, 3].map(i => getCombo(image, sound, text, i))
}

class App extends Component {
  constructor () {
    super()
    let activeNr = 1
    let image = Object.keys(svgMap)[activeNr]
    let sound = Object.keys(soundMap)[activeNr]
    let text = Object.keys(resourcesMap)[activeNr]
    this.state = {
      customCombo: getCombo(image, sound, text, activeNr),
      showCustomCombo: true,
      activeNr,
      combos: getCombos(image, sound, text),
      image,
      sound,
      text
    }

    this.updateCombinations = this.updateCombinations.bind(this)
    this.showSelectedDisplay = this.showSelectedDisplay.bind(this)
  }

  updateCombinations (image, sound, text) {
    if (image !== null) {
      image = image.toLowerCase()
      sound = sound.toLowerCase()
    }
    this.setState({
      customCombo: getCombo(image, sound, text, this.state.activeNr-1),
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
