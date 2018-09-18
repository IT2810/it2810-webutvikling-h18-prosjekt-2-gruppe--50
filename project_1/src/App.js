import React, { Component } from 'react'
import './App.css'

import SelectMenu from './components/SelectMenu'
import Display from './components/Display'
import Tabs from './components/Tabs'

const resourcesMap = {
  "poem": ["ALegendOfTruth", "ANorthernLegend", "Legend", "TheLegendOfOneRedRose"],
  "lyric": ["StairwayToHeaven", "ManInTheMirror", "Imagine", "BohemianRhapsody"],
  "speech": ["DutiesOfAmericanCitizenship", "IHaveADream", "InaugurationAddress", "TheThirdPhilippic"]
}
const svgMap = {
  "horse": ["horse1", "horse2", "horse3", "horse4"],
  "dog": ["dog1", "dog2", "dog3", "dog4"],
  "cat": ["cat1", "cat2", "cat3", "cat4"]
}
const soundMap = {
  "classical": ["Chopin-fantasie-impromptu", "Edvard-grieg-morning-mood", "Requiem-piano-mozart-lacrymosa", "Traumerei-piano-music"],
  "hiphop": ["254Beats-FREE-Young-Thug-Type-BeatHip-Hop-Rap-BeatInstrumentalEmotional-Rap-Type-Beat-2017-Damn-It", "Ghetto-Ambassador-silence-no-more", "RMR-BEATS-Emotional-rap-trap-beat", "Sketcha-Kingpin-Lamba-lolo-addicter-2-freestyle"],
  "nature": ["1-minute-pouring-rain-sound-effect", "Large-thunder-rumble", "Magic-forest", "Sounds-of-nature"]
}

function getCombo(
  imageCategory = Object.keys(svgMap)[Math.floor(Math.random() * 3)],
  soundCategory = Object.keys(soundMap)[Math.floor(Math.random() * 3)],
  textCategory = Object.keys(resourcesMap)[Math.floor(Math.random() * 3)]
) {
  return {
    image: svgMap[imageCategory][Math.floor(Math.random() * 4)],
    sound: soundMap[soundCategory][Math.floor(Math.random() * 4)],
    text: resourcesMap[textCategory][Math.floor(Math.random() * 4)]
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      customCombo: getCombo('cat', 'classical', 'lyric'),
      showCustomCombo: true,
      comboOne: getCombo(),
      comboTwo: getCombo(),
      comboThree: getCombo(),
      comboFour: getCombo(),
      activeNr: 1
    }

    this.updateCombinations = this.updateCombinations.bind(this)
    this.showSelectedDisplay = this.showSelectedDisplay.bind(this)
  }

  updateCombinations (image, sound, text) {
    if (image !== null) {
      image = image.toLowerCase()
    }
    this.setState({customCombo: getCombo(image, sound, text), showCustomCombo: true})
  }

  showSelectedDisplay (nr) {
    this.setState({ activeNr: nr, showCustomCombo: false })
  }

  render () {
    const combos = [this.state.comboOne, this.state.comboTwo, this.state.comboThree, this.state.comboFour]
    const currentCombo = this.state.showCustomCombo ? this.state.customCombo : combos[this.state.activeNr-1]
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Combination creator</h1>
        </header>

        <div className='container'>
          <SelectMenu onSelect={this.updateCombinations} />
          <Tabs onSelect={this.showSelectedDisplay} />
          <Display combo={currentCombo} />

        </div>

      </div>
    )
  }
}

export default App
