import React, { Component } from 'react';
import './App.css';

import SelectMenu from './components/SelectMenu'
import Display from './components/Display'
import Tabs from './components/Tabs'

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageCategory: null, 
      textCategory: null,
      soundCategory: null,
      comboOne: null,
      comboTwo: null,
      comboThree: null,
      comboFour: null,
      activeNr: 2
    }

    this.updateCombinations = this.updateCombinations.bind(this);
    this.showSelectedDisplay = this.showSelectedDisplay.bind(this);

    this.displayOne = React.createRef();
    this.displayTwo = React.createRef();
    this.displayThree = React.createRef();
    this.displayFour = React.createRef();
  }

  componentDidMount() {
    /*console.log(this.displayOne)
    this.displayOne.setImage("cat1")*/
  }

  updateCombinations(image, sound, text) {
    console.log("Updating combinations")
/*    console.log(image)
    console.log(sound)
    console.log(text)*/

    this.setState({
      imageCategory: image,
      soundCategory: sound,
      textCategory: text
    })

    image = "horse"

    this.setState({
      comboOne: {image: image + "1", sound: null, text: null},
      comboTwo: {image: image + "2", sound: null, text: null},
      comboThree: {image: image + "3", sound: null, text: null},
      comboFour: {image: image + "4", sound: null, text: null}
    })

    console.log("Combos")
    console.log(this.state.comboOne)
    console.log(this.state.comboTwo)

  }

  showSelectedDisplay(nr) {
    console.log("Selecting nr: ", nr)

    this.setState({
      activeNr: nr
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Project 1</h1>
        </header>

        
        <div className="container">
          <Tabs onSelect={this.showSelectedDisplay} />
          <Display ref={this.displayOne} combo={this.state.comboOne} active={this.state.activeNr === 1} />
          <Display ref={this.displayTwo} combo={this.state.comboTwo} active={this.state.activeNr === 2} />
          <Display ref={this.displayThree} combo={this.state.comboThree} active={this.state.activeNr === 3} />
          <Display ref={this.displayFour} combo={this.state.comboFour} active={this.state.activeNr === 4} />
            
          <SelectMenu onSelect={this.updateCombinations} />
        </div>

      </div>
    );
  }
}

export default App;

