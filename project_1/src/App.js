import React, { Component } from 'react';
import './App.css';

import SelectMenu from './components/SelectMenu'
import Display from './components/Display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Project 1</h1>
        </header>

        <Display />

        <SelectMenu />
      </div>
    );
  }
}

export default App;
