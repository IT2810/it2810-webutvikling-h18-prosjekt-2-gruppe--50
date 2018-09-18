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
/* const soundMap = {
  "classical": ["Chopin-fantasie-impromptu", "Edvard-grieg-morning-mood", "Requiem-piano-mozart-lacrymosa", "Traumerei-piano-music"],
  "hiphop": ["254Beats-FREE-Young-Thug-Type-BeatHip-Hop-Rap-BeatInstrumentalEmotional-Rap-Type-Beat-2017-Damn-It", "Ghetto-Ambassador-silence-no-more", "RMR-BEATS-Emotional-rap-trap-beat", "Sketcha-Kingpin-Lamba-lolo-addicter-2-freestyle"],
  "nature": ["1-minute-pouring-rain-sound-effect", "Large-thunder-rumble", "Magic-forest", "Sounds-of-nature"]
} */

const soundMap = {
  'classical': ['Classic1', 'Classic2', 'Classic3', 'Classic4'],
  'hiphop': ['HipHop1', 'HipHop2', 'HipHop3', 'HipHop4'],
  'nature': ['Nature1', 'Nature2', 'Nature3', 'Nature4']
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


class App extends Component {
  constructor () {
    super()
    let image = "horse"
    let sound = "classical"
    let text = "lyric"
    this.state = {
      customCombo: getCombo('cat', 'classical', 'lyric', 0, 0, 0),
      showCustomCombo: true,
      comboOne: getCombo(image, sound, text, 0, 0, 0),
      comboTwo: getCombo(image, sound, text, 1, 1, 1),
      comboThree: getCombo(image, sound, text, 2, 2, 2),
      comboFour: getCombo(image, sound, text, 3, 3, 3),
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
      comboOne: getCombo(this.state.image, this.state.sound, this.state.text, 0, 0, 0),
      comboTwo: getCombo(this.state.image, this.state.sound, this.state.text, 1, 1, 1),
      comboThree: getCombo(this.state.image, this.state.sound, this.state.text, 2, 2, 2),
      comboFour: getCombo(this.state.image, this.state.sound, this.state.text, 3, 3, 3)
    })
  }

  render () {
    const combos = [this.state.comboOne, this.state.comboTwo, this.state.comboThree, this.state.comboFour]
    const currentCombo = this.state.showCustomCombo ? this.state.customCombo : combos[this.state.activeNr - 1]
    return (
      <div className='App'>
        <header>
          <h1 className='App-title'>Combination creator</h1>
        </header>

        <div className='container'>
          <SelectMenu onSelect={this.updateCombinations} />
          <Tabs onSelect={this.showSelectedDisplay} />
          <Display combo={currentCombo} />
        </div>

        <footer>
          <h4> IT2810 Webdevelopment Autumn 2018 - Project 2, group 50 </h4>
        </footer>

      </div>
    )
  }
}

export default App
