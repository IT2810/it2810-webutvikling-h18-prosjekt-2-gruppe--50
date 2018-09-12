import React, { Component } from 'react'
import axios from 'axios'

const resourcesMap = {
  "poem": ["ALegendOfTruth", "ANorthernLegend", "Legend", "TheLegendOfOneRedRose"],
  "lyric": ["StairwayToHeaven", "ManInTheMirror", "Imagine", "BohemianRhapsody"],
  "speech": ["DutiesOfAmericanCitizenship", "IHaveADream", "InaugurationAddress", "TheThirdPhilippic"]
}

const categoryNameMap = {
  "Poem": "poem",
  "Lyric": "lyric",
  "Speech": "speech"
}

class Text extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        title: null,
        text: null,
        author: null,
        type: null,
        artist: null,
        writer: null
      }
    }

    this.getText = this.getText.bind(this)
  }

  componentWillMount() {
    if (this.props.category !== null) {
      this.getText(categoryNameMap[this.props.category])
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.category !== null) {
      this.getText(categoryNameMap[newProps.category])
    }
  }

  getText(category) {
    if (category !== null && category !== '') {
      axios.get('texts/' + resourcesMap[category][this.props.index] + '.json')
        .then(res => {
          this.setState({data: res.data})
        })
    }
  }

  render () {
    return (
      <div>
        <h3><b>{this.state.data.title}</b></h3>
        <pre>{this.state.data.text}</pre>
        {(this.props.category === 'Poem' || this.props.category === 'Speech') && <div><i>by {this.state.data.author}</i></div>}
        {this.props.category === 'Lyric' && <div>
          <div><i>Artist: {this.state.data.artist}</i></div>
          <div><i>Writer: {this.state.data.writer}</i></div>
        </div>}
      </div>
    )
  }
}

export default Text
