import React, { Component } from 'react';
import './App.css';

import SelectMenu from './components/SelectMenu'
import Display from './components/Display'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }

    this.updateCombinations = this.updateCombinations.bind(this);
  }

  updateCombinations = (image, sound, text) => {
    console.log("Updating combinations")
    console.log(image)
    console.log(sound)
    console.log(text)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Project 1</h1>
        </header>

        <Display />

        <SelectMenu onSelect={this.updateCombinations}/>
      </div>
    );
  }
}

export default App;
